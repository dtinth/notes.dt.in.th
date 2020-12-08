<template>
  <div>
    <div v-if="hoisted" v-html="hoisted"></div>
    <div
      v-if="!entry.frontmatter.public && !entry.frontmatter.system"
      class="unpublished"
    >
      (Unpublished)
    </div>
    <article class="h-entry">
      <component :is="page" />
      <p class="meta">
        —<a class="p-author h-card" href="https://dt.in.th"
          ><img
            src="/d7fc70-circle-192.png"
            alt=""
            style="display: none"
          />@dtinth</a
        >,
        <time v-if="pubDate" class="dt-published" :datetime="pubDate.machine">
          {{ pubDate.human }}
        </time>
      </p>
    </article>
  </div>
</template>

<style>
@import 'littlefoot/dist/littlefoot.css';
</style>

<style scoped>
.unpublished {
  color: #fbb;
  font-weight: bold;
}
.meta {
  color: #8b8685;
}
.meta a {
  color: inherit;
}
.meta time {
  padding: 0;
  color: inherit;
  background: transparent;
}
</style>

<script>
import OutboundLink from '../components/OutboundLink.vue'

export default {
  async asyncData({ $axios, params, res, error }) {
    try {
      const entry = await $axios.$get('/api/entries/' + params.id)
      if (process.server) {
        res.setHeader(
          'Cache-Control',
          entry.frontmatter.public && !entry.preview
            ? 's-maxage=1, stale-while-revalidate'
            : 'no-store'
        )
      }
      return { entry, id: params.id }
    } catch (e) {
      console.error(e)
      error({
        statusCode: (e.response && e.response.statusCode) || 500,
        message: 'Unable to load the content.',
      })
    }
  },
  head() {
    const pageTitle = this.entry.frontmatter.title || this.id
    return {
      title: pageTitle + ' | notes.dt.in.th',
      meta: [
        ...(this.entry.frontmatter.description
          ? [
              {
                hid: 'description',
                name: 'description',
                content: this.entry.frontmatter.description,
              },
            ]
          : []),
        {
          property: 'og:image',
          content: `https://capture.the.spacet.me/${this.entry.screenshotToken}.png`,
        },
        {
          property: 'og:title',
          content: pageTitle,
        },
        {
          property: 'og:image:width',
          content: '1800',
        },
        {
          property: 'og:image:height',
          content: '1680',
        },
      ],
    }
  },
  computed: {
    pubDate() {
      const regex = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z/
      const match = this.id.match(regex)
      if (!match) {
        return null
      }
      const date = new Date(
        `${match[1]}-${match[2]}-${match[3]}T${match[4]}:${match[5]}:${match[6]}Z`
      )
      return {
        machine: date.toJSON(),
        human: new Date(date.getTime() + 7 * 3600e3)
          .toUTCString()
          .split(' ')
          .slice(0, 4)
          .join(' '),
      }
    },
    hoisted() {
      if (Array.isArray(this.entry.hoistedTags)) {
        return this.entry.hoistedTags.filter((s) => /^<style/i).join('')
      }
    },
    page() {
      return compileEntryComponent(this.entry)
    },
  },
  mounted() {
    setupFootnotes()
  },
  updated() {
    setupFootnotes()
  },
}

function compileEntryComponent(entry) {
  return {
    components: {
      OutboundLink,
    },
    render: new Function(entry.render),
    staticRenderFns: entry.staticRenderFns.map((f) => new Function(f)),
  }
}

let latestLf
async function setupFootnotes() {
  const littlefootPromise = import('littlefoot')
  const { default: littlefoot } = await littlefootPromise
  console.log('a')
  if (latestLf) {
    latestLf.unmount()
  }
  latestLf = littlefoot({
    buttonTemplate: `<button
  aria-expanded="false"
  aria-label="Footnote <% number %>"
  class="littlefoot__button"
  id="<% reference %>"
  title="See Footnote <% number %>"
/>
  <% number %>
</button>`,
  })
}
</script>

<style>
[data-dtinth] .littlefoot__button {
  --footnote-color: #8b8685;
  position: relative;
  display: inline-block;
  font: inherit;
  font-size: 80%;
  color: var(--footnote-color);
  appearance: none;
  cursor: pointer;
  background: transparent;
  border: 1px solid var(--footnote-color);
  padding: 0;
  border-radius: 1.25em;
  width: 1.25em;
  height: 1.25em;
  line-height: 1em;
  margin: 0 0 0 1ex;
}

[data-dtinth] .littlefoot__button:focus {
  --footnote-color: #bef;
}

[data-dtinth] .littlefoot__button:hover {
  --footnote-color: #d7fc70;
}

[data-dtinth] .footnote-ref {
  vertical-align: baseline;
}
[data-dtinth] .footnote-ref a {
  color: #8b8685;
}

@media not print {
  .footnotes-sep {
    display: none !important;
  }
}

[data-dtinth] .littlefoot-footnote__content {
  word-wrap: break-word;
  display: block;
  background: #090807;
}

[data-dtinth] .littlefoot-footnote {
  background: #090807;
  border-color: #454443;
}

[data-dtinth] .littlefoot-footnote__tooltip {
  background: #090807;
  border-color: #454443;
}

img.emoji {
  height: 1em;
  width: 1em;
  margin: 0 0.05em 0 0.1em;
  vertical-align: -0.1em;
}

[data-screenshot-mode][data-dtinth] body {
  margin-top: 200px;
  background-image: url(/share-overlay.svg);
  background-repeat: no-repeat;
  background-position: top right;
}
</style>
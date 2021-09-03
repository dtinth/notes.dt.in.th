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
      <footer class="post-footer">
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
        <p class="syndication-links" v-if="syndication.length">
          Respond on:
          <a
            :href="url"
            rel="syndication"
            class="syndication u-syndication"
            v-for="{ title, url, path } of syndication"
            :title="title"
            :key="title"
          >
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>{{ title }}</title>
              <path :d="path"></path>
            </svg>
          </a>
        </p>
      </footer>
    </article>
    <div>
      <a
        href="https://webring.wonderful.software#dt.in.th"
        title="วงแหวนเว็บ"
        class="dtinthのwebring"
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 416 416"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style="display: inline-block"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M53 128.8l-16-8.2a192 192 0 1094.7-88.9l7.1 16.6A174 174 0 1153 128.8z"
            fill="#8b8685"
          ></path>
          <path
            d="M94.7 92.3L82 126.5 62.6 95.7l-36.4-1.4 23.3-28-9.9-35.1 33.9 13.5 30.3-20.3-2.4 36.4L130 83.3l-35.3 9z"
            fill="#d7fc70"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>

<style>
@import 'littlefoot/dist/littlefoot.css';
</style>

<style scoped>
.post-footer {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
}
.syndication-links {
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
}
.syndication {
  margin-left: 1em;
}
.syndication svg {
  width: 1.41em;
  height: 1.41em;
  vertical-align: middle;
}
.syndication svg path {
  fill: currentColor;
}
.unpublished {
  color: #fbb;
  font-weight: bold;
}
.meta time {
  padding: 0;
  color: inherit;
  background: transparent;
}
</style>

<script>
import OutboundLink from '../components/OutboundLink.vue'
import VueCompositionApi from '../utils/VueCompositionApi'

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
        return this.entry.hoistedTags.filter((s) => /^<style/i.test(s)).join('')
      }
      return ''
    },
    page() {
      return compileEntryComponent(this.entry)
    },
    syndication() {
      return [
        {
          url: this.entry.frontmatter.facebook,
          title: 'Facebook',
          path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
        },
        {
          url: this.entry.frontmatter.devto,
          title: 'DEV Community',
          path: 'M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z',
        },
        {
          url: this.entry.frontmatter.twitter,
          title: 'Twitter',
          path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
        },
      ].filter((x) => x.url)
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
  const component = {
    components: {},
  }
  if (entry.componentModule) {
    Object.assign(component, compileModule(entry.componentModule))
  }
  Object.assign(component.components, { OutboundLink })
  Object.assign(component, {
    render: new Function(entry.render),
    staticRenderFns: entry.staticRenderFns.map((f) => new Function(f)),
  })
  return component
}

function compileModule(code) {
  const fn = new Function('module', 'exports', 'Vue', code)
  const myModule = { exports: {} }
  fn(myModule, myModule.exports, VueCompositionApi)
  return myModule.exports.default
}

let latestLf
async function setupFootnotes() {
  const littlefootPromise = import('littlefoot')
  const { default: littlefoot } = await littlefootPromise
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
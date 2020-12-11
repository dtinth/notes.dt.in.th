<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  created() {
    if (typeof window !== 'undefined') {
      Object.assign(window, { _layout: this })
    }
  },
}
</script>

<style>
@import '../vendor/raster.grid.css';

:root[data-dtinth] {
  --background-body: #353433;
  --background: #090807;
  --background-alt: #252423;
  --selection: #8b8685;
  --text-main: #e9e8e7;
  --text-bright: #fff;
  --text-muted: #8b8685;
  --links: #ffb;
  --code: #e9d7c5;
  --scrollbar-thumb: #d7fc70;
}
[data-dtinth] body {
  font-family: Arimo, Helvetica, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
}
[data-dtinth] body {
  line-height: 1.64;
}
[data-dtinth] H2 {
  color: #d7fc70;
  text-shadow: 2px 2px RGBA(215, 252, 112, 0.15);
}
[data-dtinth] H3 {
  color: #febfea;
  text-shadow: 2px 2px RGBA(0, 0, 0, 0.25);
}
[data-dtinth] CODE {
  background: #252423;
  font-family: Comic Mono, Menlo, Consolas, sans-serif;
}
[data-dtinth] :not(PRE) > CODE {
  border: 1px solid #555453;
  box-shadow: 0 1px 0 #252423;
  border-radius: 2px;
  border-bottom-width: 2px;
  background: #252423;
}
[data-dtinth] FIGURE {
  text-align: center;
}
[data-dtinth] FIGCAPTION {
  font-style: italic;
  color: #bef;
  margin-top: -1em;
}

a.header-anchor {
  font-size: 0.85em;
  float: left;
  margin-left: -0.87em;
  padding-right: 0.23em;
  margin-top: 0.125em;
  color: #8b8685;
}
a.header-anchor:hover {
  text-decoration: none;
}

.token.block-comment,
.token.cdata,
.token.comment,
.token.doctype,
.token.prolog {
  color: #999;
}

.token.punctuation {
  color: #ccc;
}

.token.attr-name,
.token.deleted,
.token.namespace,
.token.tag {
  color: #e2777a;
}

.token.function-name {
  color: #6196cc;
}

.token.boolean,
.token.function,
.token.number {
  color: #f08d49;
}

.token.class-name,
.token.constant,
.token.property,
.token.symbol {
  color: #f8c555;
}

.token.atrule,
.token.builtin,
.token.important,
.token.keyword,
.token.selector {
  color: #cc99cd;
}

.token.attr-value,
.token.char,
.token.regex,
.token.string,
.token.variable {
  color: #7ec699;
}

.token.entity,
.token.operator,
.token.url {
  color: #67cdcc;
}

.token.bold,
.token.important {
  font-weight: 700;
}

.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.token.inserted {
  color: green;
}
</style>

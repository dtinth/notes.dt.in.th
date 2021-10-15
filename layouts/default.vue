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
@import '../assets/dtinth-water.css';

body.is-wide {
  max-width: 1200px;
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

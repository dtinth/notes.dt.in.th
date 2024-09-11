import { g as C, b as I, p as D } from "./unocss_DW1qlqnA.js";
import { V as h, y as R, S as G, U as M, W as V } from "./vue_X8qYN8tJ.js";
import { r as q, a as P, b as N, c as A } from "./rehype-plugins_DxbMbxbl.js";
import { m as W } from "./gray-matter_DG9-Aqkk.js";
import { m as _, g as U, a as L, b as z, d as Y, e as Q, f as J, h as K, i as X } from "./micromark_56cY9bNe.js";
import { r as Z } from "./rehype_CoxiL7Z9.js";
import { l as ee } from "./shiki-langs_BkqWZu4o.js";
import { c as te, g as re } from "./shiki_CE7CkV9b.js";
function oe(e) {
  return function(r) {
    return e == null ? void 0 : e[r];
  };
}
var ne = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, ae = oe(ne), ie = typeof global == "object" && global && global.Object === Object && global, se = typeof self == "object" && self && self.Object === Object && self, de = ie || se || Function("return this")(), f = de.Symbol;
function ce(e, r) {
  for (var t = -1, o = e == null ? 0 : e.length, n = Array(o); ++t < o; )
    n[t] = r(e[t], t, e);
  return n;
}
var ue = Array.isArray, w = Object.prototype, ge = w.hasOwnProperty, fe = w.toString, p = f ? f.toStringTag : void 0;
function le(e) {
  var r = ge.call(e, p), t = e[p];
  try {
    e[p] = void 0;
    var o = !0;
  } catch {
  }
  var n = fe.call(e);
  return o && (r ? e[p] = t : delete e[p]), n;
}
var pe = Object.prototype, be = pe.toString;
function me(e) {
  return be.call(e);
}
var he = "[object Null]", ke = "[object Undefined]", k = f ? f.toStringTag : void 0;
function Be(e) {
  return e == null ? e === void 0 ? ke : he : k && k in Object(e) ? le(e) : me(e);
}
function ye(e) {
  return e != null && typeof e == "object";
}
var ve = "[object Symbol]";
function Se(e) {
  return typeof e == "symbol" || ye(e) && Be(e) == ve;
}
var we = 1 / 0, B = f ? f.prototype : void 0, y = B ? B.toString : void 0;
function j(e) {
  if (typeof e == "string")
    return e;
  if (ue(e))
    return ce(e, j) + "";
  if (Se(e))
    return y ? y.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -we ? "-0" : r;
}
function je(e) {
  return e == null ? "" : j(e);
}
var F = /[&<>"']/g, Fe = RegExp(F.source);
function l(e) {
  return e = je(e), e && Fe.test(e) ? e.replace(F, ae) : e;
}
function He(e) {
  return `<div class="prose e-content" id="noteContents">${e}</div>`;
}
function Te(e) {
  return e === "notes.dt.in.th" ? e : `${e} | notes.dt.in.th`;
}
function xe(e) {
  const r = [];
  for (const t of e)
    r.push('<div class="px-2 flex-none">›</div>'), r.push(
      `<div class="truncate"><a title="${l(t.title)}" href="${t.url}">${l(t.label)}</a></div>`
    );
  return r.join("");
}
function Ee(e, r) {
  var n;
  const t = e.nodes, o = [];
  for (let a = (n = t[r]) == null ? void 0 : n.parent; a && a !== "HomePage" && t[a]; a = t[a].parent) {
    const s = t[a];
    o.unshift({
      label: s.title.replace(/ \(topic\)$/, ""),
      title: s.title,
      url: a
    });
  }
  return o;
}
function Oe(e, r) {
  const t = (s) => {
    if (s === "vue") return h;
    if (r[s]) return r[s];
    throw new Error("[executeCjs] Unavailable module: " + s);
  }, o = {}, n = { exports: o };
  return (typeof e == "function" ? e : new Function("require", "exports", "module", "Vue", e))(t, o, n, h), n.exports;
}
var $e = function e(r, t) {
  if (r === t) return !0;
  if (r && t && typeof r == "object" && typeof t == "object") {
    if (r.constructor !== t.constructor) return !1;
    var o, n, a;
    if (Array.isArray(r)) {
      if (o = r.length, o != t.length) return !1;
      for (n = o; n-- !== 0; )
        if (!e(r[n], t[n])) return !1;
      return !0;
    }
    if (r.constructor === RegExp) return r.source === t.source && r.flags === t.flags;
    if (r.valueOf !== Object.prototype.valueOf) return r.valueOf() === t.valueOf();
    if (r.toString !== Object.prototype.toString) return r.toString() === t.toString();
    if (a = Object.keys(r), o = a.length, o !== Object.keys(t).length) return !1;
    for (n = o; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, a[n])) return !1;
    for (n = o; n-- !== 0; ) {
      var s = a[n];
      if (!e(r[s], t[s])) return !1;
    }
    return !0;
  }
  return r !== r && t !== t;
};
const Ce = $e, Ie = (e, r = Ce, { cachePromiseRejection: t = !1 } = {}) => {
  if (!e) throw new TypeError("You have to provide a `fn` function.");
  let o = !1, n, a;
  return async (...s) => (o && r(s, n) || (a = e(...s), !t && a.catch && a.catch(() => o = !1), o = !0, n = s), a);
};
var De = Ie;
const Re = /* @__PURE__ */ C(De);
var Ge = Object.freeze({
  colors: {
    "activityBar.activeBorder": "#f9826c",
    "activityBar.background": "#24292e",
    "activityBar.border": "#1b1f23",
    "activityBar.foreground": "#e1e4e8",
    "activityBar.inactiveForeground": "#6a737d",
    "activityBarBadge.background": "#0366d6",
    "activityBarBadge.foreground": "#fff",
    "badge.background": "#044289",
    "badge.foreground": "#c8e1ff",
    "breadcrumb.activeSelectionForeground": "#d1d5da",
    "breadcrumb.focusForeground": "#e1e4e8",
    "breadcrumb.foreground": "#959da5",
    "breadcrumbPicker.background": "#2b3036",
    "button.background": "#176f2c",
    "button.foreground": "#dcffe4",
    "button.hoverBackground": "#22863a",
    "button.secondaryBackground": "#444d56",
    "button.secondaryForeground": "#fff",
    "button.secondaryHoverBackground": "#586069",
    "checkbox.background": "#444d56",
    "checkbox.border": "#1b1f23",
    "debugToolBar.background": "#2b3036",
    descriptionForeground: "#959da5",
    "diffEditor.insertedTextBackground": "#28a74530",
    "diffEditor.removedTextBackground": "#d73a4930",
    "dropdown.background": "#2f363d",
    "dropdown.border": "#1b1f23",
    "dropdown.foreground": "#e1e4e8",
    "dropdown.listBackground": "#24292e",
    "editor.background": "#24292e",
    "editor.findMatchBackground": "#ffd33d44",
    "editor.findMatchHighlightBackground": "#ffd33d22",
    "editor.focusedStackFrameHighlightBackground": "#2b6a3033",
    "editor.foldBackground": "#58606915",
    "editor.foreground": "#e1e4e8",
    "editor.inactiveSelectionBackground": "#3392FF22",
    "editor.lineHighlightBackground": "#2b3036",
    "editor.linkedEditingBackground": "#3392FF22",
    "editor.selectionBackground": "#3392FF44",
    "editor.selectionHighlightBackground": "#17E5E633",
    "editor.selectionHighlightBorder": "#17E5E600",
    "editor.stackFrameHighlightBackground": "#C6902625",
    "editor.wordHighlightBackground": "#17E5E600",
    "editor.wordHighlightBorder": "#17E5E699",
    "editor.wordHighlightStrongBackground": "#17E5E600",
    "editor.wordHighlightStrongBorder": "#17E5E666",
    "editorBracketHighlight.foreground1": "#79b8ff",
    "editorBracketHighlight.foreground2": "#ffab70",
    "editorBracketHighlight.foreground3": "#b392f0",
    "editorBracketHighlight.foreground4": "#79b8ff",
    "editorBracketHighlight.foreground5": "#ffab70",
    "editorBracketHighlight.foreground6": "#b392f0",
    "editorBracketMatch.background": "#17E5E650",
    "editorBracketMatch.border": "#17E5E600",
    "editorCursor.foreground": "#c8e1ff",
    "editorError.foreground": "#f97583",
    "editorGroup.border": "#1b1f23",
    "editorGroupHeader.tabsBackground": "#1f2428",
    "editorGroupHeader.tabsBorder": "#1b1f23",
    "editorGutter.addedBackground": "#28a745",
    "editorGutter.deletedBackground": "#ea4a5a",
    "editorGutter.modifiedBackground": "#2188ff",
    "editorIndentGuide.activeBackground": "#444d56",
    "editorIndentGuide.background": "#2f363d",
    "editorLineNumber.activeForeground": "#e1e4e8",
    "editorLineNumber.foreground": "#444d56",
    "editorOverviewRuler.border": "#1b1f23",
    "editorWarning.foreground": "#ffea7f",
    "editorWhitespace.foreground": "#444d56",
    "editorWidget.background": "#1f2428",
    errorForeground: "#f97583",
    focusBorder: "#005cc5",
    foreground: "#d1d5da",
    "gitDecoration.addedResourceForeground": "#34d058",
    "gitDecoration.conflictingResourceForeground": "#ffab70",
    "gitDecoration.deletedResourceForeground": "#ea4a5a",
    "gitDecoration.ignoredResourceForeground": "#6a737d",
    "gitDecoration.modifiedResourceForeground": "#79b8ff",
    "gitDecoration.submoduleResourceForeground": "#6a737d",
    "gitDecoration.untrackedResourceForeground": "#34d058",
    "input.background": "#2f363d",
    "input.border": "#1b1f23",
    "input.foreground": "#e1e4e8",
    "input.placeholderForeground": "#959da5",
    "list.activeSelectionBackground": "#39414a",
    "list.activeSelectionForeground": "#e1e4e8",
    "list.focusBackground": "#044289",
    "list.hoverBackground": "#282e34",
    "list.hoverForeground": "#e1e4e8",
    "list.inactiveFocusBackground": "#1d2d3e",
    "list.inactiveSelectionBackground": "#282e34",
    "list.inactiveSelectionForeground": "#e1e4e8",
    "notificationCenterHeader.background": "#24292e",
    "notificationCenterHeader.foreground": "#959da5",
    "notifications.background": "#2f363d",
    "notifications.border": "#1b1f23",
    "notifications.foreground": "#e1e4e8",
    "notificationsErrorIcon.foreground": "#ea4a5a",
    "notificationsInfoIcon.foreground": "#79b8ff",
    "notificationsWarningIcon.foreground": "#ffab70",
    "panel.background": "#1f2428",
    "panel.border": "#1b1f23",
    "panelInput.border": "#2f363d",
    "panelTitle.activeBorder": "#f9826c",
    "panelTitle.activeForeground": "#e1e4e8",
    "panelTitle.inactiveForeground": "#959da5",
    "peekViewEditor.background": "#1f242888",
    "peekViewEditor.matchHighlightBackground": "#ffd33d33",
    "peekViewResult.background": "#1f2428",
    "peekViewResult.matchHighlightBackground": "#ffd33d33",
    "pickerGroup.border": "#444d56",
    "pickerGroup.foreground": "#e1e4e8",
    "progressBar.background": "#0366d6",
    "quickInput.background": "#24292e",
    "quickInput.foreground": "#e1e4e8",
    "scrollbar.shadow": "#0008",
    "scrollbarSlider.activeBackground": "#6a737d88",
    "scrollbarSlider.background": "#6a737d33",
    "scrollbarSlider.hoverBackground": "#6a737d44",
    "settings.headerForeground": "#e1e4e8",
    "settings.modifiedItemIndicator": "#0366d6",
    "sideBar.background": "#1f2428",
    "sideBar.border": "#1b1f23",
    "sideBar.foreground": "#d1d5da",
    "sideBarSectionHeader.background": "#1f2428",
    "sideBarSectionHeader.border": "#1b1f23",
    "sideBarSectionHeader.foreground": "#e1e4e8",
    "sideBarTitle.foreground": "#e1e4e8",
    "statusBar.background": "#24292e",
    "statusBar.border": "#1b1f23",
    "statusBar.debuggingBackground": "#931c06",
    "statusBar.debuggingForeground": "#fff",
    "statusBar.foreground": "#d1d5da",
    "statusBar.noFolderBackground": "#24292e",
    "statusBarItem.prominentBackground": "#282e34",
    "statusBarItem.remoteBackground": "#24292e",
    "statusBarItem.remoteForeground": "#d1d5da",
    "tab.activeBackground": "#24292e",
    "tab.activeBorder": "#24292e",
    "tab.activeBorderTop": "#f9826c",
    "tab.activeForeground": "#e1e4e8",
    "tab.border": "#1b1f23",
    "tab.hoverBackground": "#24292e",
    "tab.inactiveBackground": "#1f2428",
    "tab.inactiveForeground": "#959da5",
    "tab.unfocusedActiveBorder": "#24292e",
    "tab.unfocusedActiveBorderTop": "#1b1f23",
    "tab.unfocusedHoverBackground": "#24292e",
    "terminal.ansiBlack": "#586069",
    "terminal.ansiBlue": "#2188ff",
    "terminal.ansiBrightBlack": "#959da5",
    "terminal.ansiBrightBlue": "#79b8ff",
    "terminal.ansiBrightCyan": "#56d4dd",
    "terminal.ansiBrightGreen": "#85e89d",
    "terminal.ansiBrightMagenta": "#b392f0",
    "terminal.ansiBrightRed": "#f97583",
    "terminal.ansiBrightWhite": "#fafbfc",
    "terminal.ansiBrightYellow": "#ffea7f",
    "terminal.ansiCyan": "#39c5cf",
    "terminal.ansiGreen": "#34d058",
    "terminal.ansiMagenta": "#b392f0",
    "terminal.ansiRed": "#ea4a5a",
    "terminal.ansiWhite": "#d1d5da",
    "terminal.ansiYellow": "#ffea7f",
    "terminal.foreground": "#d1d5da",
    "terminal.tab.activeBorder": "#f9826c",
    "terminalCursor.background": "#586069",
    "terminalCursor.foreground": "#79b8ff",
    "textBlockQuote.background": "#24292e",
    "textBlockQuote.border": "#444d56",
    "textCodeBlock.background": "#2f363d",
    "textLink.activeForeground": "#c8e1ff",
    "textLink.foreground": "#79b8ff",
    "textPreformat.foreground": "#d1d5da",
    "textSeparator.foreground": "#586069",
    "titleBar.activeBackground": "#24292e",
    "titleBar.activeForeground": "#e1e4e8",
    "titleBar.border": "#1b1f23",
    "titleBar.inactiveBackground": "#1f2428",
    "titleBar.inactiveForeground": "#959da5",
    "tree.indentGuidesStroke": "#2f363d",
    "welcomePage.buttonBackground": "#2f363d",
    "welcomePage.buttonHoverBackground": "#444d56"
  },
  displayName: "GitHub Dark",
  name: "github-dark",
  semanticHighlighting: !0,
  tokenColors: [
    {
      scope: [
        "comment",
        "punctuation.definition.comment",
        "string.comment"
      ],
      settings: {
        foreground: "#6a737d"
      }
    },
    {
      scope: [
        "constant",
        "entity.name.constant",
        "variable.other.constant",
        "variable.other.enummember",
        "variable.language"
      ],
      settings: {
        foreground: "#79b8ff"
      }
    },
    {
      scope: [
        "entity",
        "entity.name"
      ],
      settings: {
        foreground: "#b392f0"
      }
    },
    {
      scope: "variable.parameter.function",
      settings: {
        foreground: "#e1e4e8"
      }
    },
    {
      scope: "entity.name.tag",
      settings: {
        foreground: "#85e89d"
      }
    },
    {
      scope: "keyword",
      settings: {
        foreground: "#f97583"
      }
    },
    {
      scope: [
        "storage",
        "storage.type"
      ],
      settings: {
        foreground: "#f97583"
      }
    },
    {
      scope: [
        "storage.modifier.package",
        "storage.modifier.import",
        "storage.type.java"
      ],
      settings: {
        foreground: "#e1e4e8"
      }
    },
    {
      scope: [
        "string",
        "punctuation.definition.string",
        "string punctuation.section.embedded source"
      ],
      settings: {
        foreground: "#9ecbff"
      }
    },
    {
      scope: "support",
      settings: {
        foreground: "#79b8ff"
      }
    },
    {
      scope: "meta.property-name",
      settings: {
        foreground: "#79b8ff"
      }
    },
    {
      scope: "variable",
      settings: {
        foreground: "#ffab70"
      }
    },
    {
      scope: "variable.other",
      settings: {
        foreground: "#e1e4e8"
      }
    },
    {
      scope: "invalid.broken",
      settings: {
        fontStyle: "italic",
        foreground: "#fdaeb7"
      }
    },
    {
      scope: "invalid.deprecated",
      settings: {
        fontStyle: "italic",
        foreground: "#fdaeb7"
      }
    },
    {
      scope: "invalid.illegal",
      settings: {
        fontStyle: "italic",
        foreground: "#fdaeb7"
      }
    },
    {
      scope: "invalid.unimplemented",
      settings: {
        fontStyle: "italic",
        foreground: "#fdaeb7"
      }
    },
    {
      scope: "carriage-return",
      settings: {
        background: "#f97583",
        content: "^M",
        fontStyle: "italic underline",
        foreground: "#24292e"
      }
    },
    {
      scope: "message.error",
      settings: {
        foreground: "#fdaeb7"
      }
    },
    {
      scope: "string variable",
      settings: {
        foreground: "#79b8ff"
      }
    },
    {
      scope: [
        "source.regexp",
        "string.regexp"
      ],
      settings: {
        foreground: "#dbedff"
      }
    },
    {
      scope: [
        "string.regexp.character-class",
        "string.regexp constant.character.escape",
        "string.regexp source.ruby.embedded",
        "string.regexp string.regexp.arbitrary-repitition"
      ],
      settings: {
        foreground: "#dbedff"
      }
    },
    {
      scope: "string.regexp constant.character.escape",
      settings: {
        fontStyle: "bold",
        foreground: "#85e89d"
      }
    },
    {
      scope: "support.constant",
      settings: {
        foreground: "#79b8ff"
      }
    },
    {
      scope: "support.variable",
      settings: {
        foreground: "#79b8ff"
      }
    },
    {
      scope: "meta.module-reference",
      settings: {
        foreground: "#79b8ff"
      }
    },
    {
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: "#ffab70"
      }
    },
    {
      scope: [
        "markup.heading",
        "markup.heading entity.name"
      ],
      settings: {
        fontStyle: "bold",
        foreground: "#79b8ff"
      }
    },
    {
      scope: "markup.quote",
      settings: {
        foreground: "#85e89d"
      }
    },
    {
      scope: "markup.italic",
      settings: {
        fontStyle: "italic",
        foreground: "#e1e4e8"
      }
    },
    {
      scope: "markup.bold",
      settings: {
        fontStyle: "bold",
        foreground: "#e1e4e8"
      }
    },
    {
      scope: [
        "markup.underline"
      ],
      settings: {
        fontStyle: "underline"
      }
    },
    {
      scope: [
        "markup.strikethrough"
      ],
      settings: {
        fontStyle: "strikethrough"
      }
    },
    {
      scope: "markup.inline.raw",
      settings: {
        foreground: "#79b8ff"
      }
    },
    {
      scope: [
        "markup.deleted",
        "meta.diff.header.from-file",
        "punctuation.definition.deleted"
      ],
      settings: {
        background: "#86181d",
        foreground: "#fdaeb7"
      }
    },
    {
      scope: [
        "markup.inserted",
        "meta.diff.header.to-file",
        "punctuation.definition.inserted"
      ],
      settings: {
        background: "#144620",
        foreground: "#85e89d"
      }
    },
    {
      scope: [
        "markup.changed",
        "punctuation.definition.changed"
      ],
      settings: {
        background: "#c24e00",
        foreground: "#ffab70"
      }
    },
    {
      scope: [
        "markup.ignored",
        "markup.untracked"
      ],
      settings: {
        background: "#79b8ff",
        foreground: "#2f363d"
      }
    },
    {
      scope: "meta.diff.range",
      settings: {
        fontStyle: "bold",
        foreground: "#b392f0"
      }
    },
    {
      scope: "meta.diff.header",
      settings: {
        foreground: "#79b8ff"
      }
    },
    {
      scope: "meta.separator",
      settings: {
        fontStyle: "bold",
        foreground: "#79b8ff"
      }
    },
    {
      scope: "meta.output",
      settings: {
        foreground: "#79b8ff"
      }
    },
    {
      scope: [
        "brackethighlighter.tag",
        "brackethighlighter.curly",
        "brackethighlighter.round",
        "brackethighlighter.square",
        "brackethighlighter.angle",
        "brackethighlighter.quote"
      ],
      settings: {
        foreground: "#d1d5da"
      }
    },
    {
      scope: "brackethighlighter.unmatched",
      settings: {
        foreground: "#fdaeb7"
      }
    },
    {
      scope: [
        "constant.other.reference.link",
        "string.other.link"
      ],
      settings: {
        fontStyle: "underline",
        foreground: "#dbedff"
      }
    }
  ],
  type: "dark"
});
const Me = Re(
  () => te({
    themes: [Ge],
    langs: ee,
    loadWasm: re
  })
);
async function Ve(e, r = () => {
}) {
  r("markdownToVue started");
  const { content: t, data: o } = W(e);
  r("matter extracted");
  const n = _(t, {
    allowDangerousHtml: !0,
    extensions: [
      U(),
      L({ singleTilde: !0 }),
      z(),
      Y()
    ],
    htmlExtensions: [
      Q(),
      J(),
      K(),
      X({
        lead: function(i) {
          return i.type !== "containerDirective" ? !1 : (this.tag('<div class="lead">'), i.content && this.raw(i.content), this.tag("</div>"), !0);
        },
        split: function(i) {
          return i.type !== "containerDirective" ? !1 : (this.tag("<d-split>"), i.content && this.raw(i.content), this.tag("</d-split>"), !0);
        },
        aside: function(i) {
          return i.type !== "containerDirective" ? !1 : (this.tag('<div slot="right">'), i.content && this.raw(i.content), this.tag("</div>"), !0);
        },
        youtube: function(i) {
          return i.type !== "leafDirective" ? !1 : (this.tag(
            `<youtube-embed video-id="${i.label}"></youtube-embed>`
          ), !0);
        },
        cta: function(i) {
          var d, u;
          return i.type !== "leafDirective" ? !1 : (this.tag('<p class="notes-cta">'), this.tag(
            `<a class="notes-cta__link" href="${(d = i.attributes) == null ? void 0 : d.href}">`
          ), this.tag('<span class="notes-cta__title">'), this.raw(i.label || ""), this.tag("</span>"), this.tag('<span class="notes-cta__url">'), this.raw(((u = i.attributes) == null ? void 0 : u.href) || ""), this.tag("</span>"), this.tag("</a>"), this.tag("</p>"), !0);
        },
        note: c("Note"),
        success: c("Success"),
        info: c("Info"),
        tip: c("Tip"),
        important: c("Important"),
        warning: c("Warning"),
        caution: c("Caution"),
        danger: c("Danger"),
        details: function(i) {
          return i.type !== "containerDirective" ? !1 : (this.tag("<details>"), this.tag("<summary>"), this.raw(i.label || "Details"), this.tag("</summary>"), i.content && this.raw(i.content), this.tag("</details>"), !0);
        },
        "*": function(i) {
          return i.content && this.raw(i.content), !0;
        }
      })
    ]
  });
  r("micromark processed");
  const s = await Z().data("settings", { fragment: !0 }).use(q).use(P).use(N, await Me(), {
    theme: "github-dark",
    colorReplacements: {
      "#24292e": "#252423"
    }
  }).use(A).process(n);
  return r("rehype processed"), {
    vueTemplate: s.toString(),
    frontMatter: o
  };
}
function c(e) {
  return function(r) {
    return r.type !== "containerDirective" ? !1 : (this.tag(`<div class="notes-callout" data-type="${e}">`), this.tag('<p class="notes-callout__label">'), this.tag(`<notes-callout-icon type="${e}"></notes-callout-icon>`), this.raw(r.label || e), this.tag("</p>"), r.content && this.raw(r.content), this.tag("</div>"), !0);
  };
}
const qe = I({
  presets: [D({ preflight: !1 })]
});
async function Je(e, r) {
  const t = {
    compiled: {
      html: "<!-- Compilation unsuccessful -->",
      css: "/* Compilation unsuccessful */",
      js: "/* Compilation unsuccessful */",
      title: r,
      dataset: {},
      head: [],
      frontMatter: {}
    },
    errors: [],
    debuggingInfo: {},
    log: []
  }, o = (n) => {
    t.log.push([performance.now(), n]);
  };
  try {
    let { vueTemplate: n, frontMatter: a } = await Ve(e, o);
    t.debuggingInfo.vueTemplate = n, t.compiled.frontMatter = a;
    {
      const g = await qe.generate(n);
      g.css && (n += `
<style scoped>${g.css}</style>`, t.debuggingInfo.vueTemplate = n), o("unocss processed");
    }
    /*!
     * This function includes code yoinked from @vue/repl.
     * https://github.com/vuejs/repl/blob/main/src/transform.ts
     * Copyright (c) 2021-present, Yuxi (Evan) You
     *
     * Used under the MIT License
     */
    const s = await import("./vue-repl_CC6ePg7q.js").then((g) => g.v);
    o("vue compiler imported");
    const i = { compiler: R, sfcOptions: {} }, d = {
      filename: "Note.vue",
      code: n,
      compiled: { js: "", css: "", ssr: "" }
    }, u = await s.compileFile(i, d);
    if (o("vue compiler finished"), u.length) {
      for (const g of u)
        t.errors.push(v(g));
      throw new Error("Failed to compile Vue SFC: " + u.join(", "));
    }
    t.debuggingInfo.ssrEsm = d.compiled.ssr, t.debuggingInfo.clientEsm = d.compiled.js, o("converting ssr");
    const b = await S(d.compiled.ssr, o);
    t.debuggingInfo.ssrCjs = b, o("converting js");
    const H = await S(d.compiled.js, o);
    t.compiled.js = H;
    const T = d.compiled.css;
    t.compiled.css = T, o("executing ssr");
    const x = Oe(b, {
      "vue/server-renderer": G
    }).default, m = M(x);
    const E = await V(m);
    t.compiled.html = E, o("ssr executed"), a.wide && (t.compiled.dataset.layout = "wide"), a.title && (t.compiled.title = a.title);
    const O = `https://screenshot.source.in.th/image/_/notes/${r}`;
    t.compiled.head.push(
      ["meta", { property: "og:title", content: t.compiled.title }],
      ["meta", { property: "og:image", content: O }],
      ["meta", { property: "og:image:width", content: "1800" }],
      ["meta", { property: "og:image:height", content: "1680" }]
    );
    const $ = `https://notes.dt.in.th/${r}`;
    t.compiled.head.push([
      "link",
      { rel: "canonical", href: $ }
    ]);
  } catch (n) {
    t.errors.push(v(n));
  }
  return t;
}
function v(e) {
  return String(typeof e == "object" && e && "stack" in e ? e.stack : e);
}
async function S(e, r = () => {
}) {
  r("esmToCjs started");
  const t = await import("./sucrase_BDlOvfTr.js");
  r("sucrase imported");
  const o = t.transform(e, {
    transforms: ["imports"],
    preserveDynamicImport: !0
  });
  return r("transformed"), o.code;
}
function Ke(e) {
  const { template: r, compiled: t, publicTree: o, slug: n } = e;
  let a = r, s = " data-precompiled=true";
  for (const [i, d] of Object.entries(t.dataset))
    s += ` data-${i}="${l(d)}"`;
  if (a = a.replace(/<html/, () => "<html" + s), a = a.replace(
    /<script id="head-placeholder"[^]*?<\/script>/,
    () => `<title>${l(Te(t.title))}</title>` + Pe(t.head) + (!t.css || t.css === "/* No <style> tags present */" ? "" : `<style id="note-styles">${t.css}</style>`)
  ), a = a.replace(
    /<script id="js-placeholder"[^]*?<\/script>/,
    () => `<script>
window.precompiledNoteBehavior = function(require, exports, module, Vue) {${t.js}};
window.precompiledFrontMatter = ${JSON.stringify(t.frontMatter).replace(
      /</g,
      "\\u003c"
    )};
<\/script>`
  ), o) {
    const i = Ee(o, n), d = xe(i);
    a = a.replace(
      /<breadcrumb-placeholder>([^]*?)<\/breadcrumb-placeholder>/,
      () => d
    );
  }
  return a = a.replace(
    /<content-placeholder>([^]*?)<\/content-placeholder>/,
    () => He(t.html)
  ), a;
}
function Pe(e) {
  return e.map((r) => {
    if (r.length === 2) {
      const [t, o] = r, n = Object.entries(o).map(([a, s]) => `${a}="${l(s)}"`).join(" ");
      return `<${t} ${n} data-source="note">`;
    } else if (r.length === 3) {
      const [t, o, n] = r, a = Object.entries(o).map(([s, i]) => `${s}="${l(i)}"`).join(" ");
      return `<${t} ${a} data-source="note">${n}</${t}>`;
    }
    return "";
  }).join(`
`);
}
export {
  Ke as applyTemplate,
  Je as compileMarkdown
};

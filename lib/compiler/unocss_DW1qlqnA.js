function Pt(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Rt(t) {
  const e = t.length;
  let r = -1, n, o = "";
  const i = t.charCodeAt(0);
  for (; ++r < e; ) {
    if (n = t.charCodeAt(r), n === 0) {
      o += "�";
      continue;
    }
    if (n === 37) {
      o += "\\%";
      continue;
    }
    if (n === 44) {
      o += "\\,";
      continue;
    }
    if (
      // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
      // U+007F, […]
      n >= 1 && n <= 31 || n === 127 || r === 0 && n >= 48 && n <= 57 || r === 1 && n >= 48 && n <= 57 && i === 45
    ) {
      o += `\\${n.toString(16)} `;
      continue;
    }
    if (
      // If the character is the first character and is a `-` (U+002D), and
      // there is no second character, […]
      r === 0 && e === 1 && n === 45
    ) {
      o += `\\${t.charAt(r)}`;
      continue;
    }
    if (n >= 128 || n === 45 || n === 95 || n >= 48 && n <= 57 || n >= 65 && n <= 90 || n >= 97 && n <= 122) {
      o += t.charAt(r);
      continue;
    }
    o += `\\${t.charAt(r)}`;
  }
  return o;
}
const pe = Rt;
function q(t = []) {
  return Array.isArray(t) ? t : [t];
}
function st(t) {
  return Array.from(new Set(t));
}
function no(t, e) {
  return t.reduce((r, n) => (r.findIndex((i) => e(n, i)) === -1 && r.push(n), r), []);
}
function Y(t) {
  return typeof t == "string";
}
function Mt(t) {
  return Y(t) ? t : (Array.isArray(t) ? t : Object.entries(t)).filter((e) => e[1] != null);
}
function oo(t) {
  return Array.isArray(t) ? t.find((e) => !Array.isArray(e) || Array.isArray(e[0])) ? t.map((e) => Mt(e)) : [t] : [Mt(t)];
}
function io(t) {
  return t.filter(([e, r], n) => {
    if (e.startsWith("$$"))
      return !1;
    for (let o = n - 1; o >= 0; o--)
      if (t[o][0] === e && t[o][1] === r)
        return !1;
    return !0;
  });
}
function Jt(t) {
  return t == null ? "" : io(t).map(([e, r]) => r != null ? `${e}:${r};` : void 0).filter(Boolean).join("");
}
function Ut(t) {
  return t && typeof t == "object" && !Array.isArray(t);
}
function yr(t, e, r = !1) {
  const n = t, o = e;
  if (Array.isArray(o))
    return r && Array.isArray(o) ? [...n, ...o] : [...o];
  const i = { ...n };
  return Ut(n) && Ut(o) && Object.keys(o).forEach((a) => {
    Ut(n[a]) && Ut(o[a]) || Array.isArray(n[a]) && Array.isArray(o[a]) ? i[a] = yr(n[a], o[a], r) : Object.assign(i, { [a]: o[a] });
  }), i;
}
function Qt(t) {
  let e, r, n;
  if (Array.isArray(t)) {
    for (r = Array(e = t.length); e--; )
      r[e] = (n = t[e]) && typeof n == "object" ? Qt(n) : n;
    return r;
  }
  if (Object.prototype.toString.call(t) === "[object Object]") {
    r = {};
    for (e in t)
      e === "__proto__" ? Object.defineProperty(r, e, {
        value: Qt(t[e]),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[e] = (n = t[e]) && typeof n == "object" ? Qt(n) : n;
    return r;
  }
  return t;
}
function ao(t) {
  return Y(t[0]);
}
function so(t) {
  return Y(t[0]);
}
const co = /[\w\u00A0-\uFFFF%-?]/;
function lo(t = "") {
  return co.test(t);
}
function fo(t) {
  return typeof t == "function" ? { match: t } : t;
}
function We(t) {
  return t.length === 3;
}
function Ne(t) {
  return t != null;
}
function uo() {
}
var po = Object.defineProperty, mo = (t, e, r) => e in t ? po(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ho = (t, e, r) => (mo(t, e + "", r), r);
class go {
  constructor() {
    ho(this, "_map", /* @__PURE__ */ new Map());
  }
  get(e, r) {
    const n = this._map.get(e);
    if (n)
      return n.get(r);
  }
  getFallback(e, r, n) {
    let o = this._map.get(e);
    return o || (o = /* @__PURE__ */ new Map(), this._map.set(e, o)), o.has(r) || o.set(r, n), o.get(r);
  }
  set(e, r, n) {
    let o = this._map.get(e);
    return o || (o = /* @__PURE__ */ new Map(), this._map.set(e, o)), o.set(r, n), this;
  }
  has(e, r) {
    var n;
    return (n = this._map.get(e)) == null ? void 0 : n.has(r);
  }
  delete(e, r) {
    var n;
    return ((n = this._map.get(e)) == null ? void 0 : n.delete(r)) || !1;
  }
  deleteTop(e) {
    return this._map.delete(e);
  }
  map(e) {
    return Array.from(this._map.entries()).flatMap(([r, n]) => Array.from(n.entries()).map(([o, i]) => e(i, r, o)));
  }
}
class bo extends Map {
  getFallback(e, r) {
    const n = this.get(e);
    return n === void 0 ? (this.set(e, r), r) : n;
  }
  map(e) {
    const r = [];
    return this.forEach((n, o) => {
      r.push(e(n, o));
    }), r;
  }
  flatMap(e) {
    const r = [];
    return this.forEach((n, o) => {
      r.push(...e(n, o));
    }), r;
  }
}
var yo = Object.defineProperty, xo = (t, e, r) => e in t ? yo(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, $o = (t, e, r) => (xo(t, e + "", r), r);
class xr extends Set {
  constructor(e) {
    super(e), $o(this, "_map"), this._map ?? (this._map = /* @__PURE__ */ new Map());
  }
  add(e) {
    return this._map ?? (this._map = /* @__PURE__ */ new Map()), this._map.set(e, (this._map.get(e) ?? 0) + 1), super.add(e);
  }
  delete(e) {
    return this._map.delete(e), super.delete(e);
  }
  clear() {
    this._map.clear(), super.clear();
  }
  getCount(e) {
    return this._map.get(e) ?? 0;
  }
  setCount(e, r) {
    return this._map.set(e, r), super.add(e);
  }
}
function me(t) {
  return t instanceof xr;
}
const Bt = {};
function vo(t = ["-", ":"]) {
  const e = t.join("|");
  return Bt[e] || (Bt[e] = new RegExp(`((?:[!@<~\\w+:_/-]|\\[&?>?:?\\S*\\])+?)(${e})\\(((?:[~!<>\\w\\s:/\\\\,%#.$?-]|\\[.*?\\])+?)\\)(?!\\s*?=>)`, "gm")), Bt[e].lastIndex = 0, Bt[e];
}
function wo(t, e = ["-", ":"], r = 5) {
  const n = vo(e);
  let o, i = t.toString();
  const a = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map();
  do
    o = !1, i = i.replace(
      n,
      (l, p, u, m, b) => {
        var M;
        if (!e.includes(u))
          return l;
        o = !0, a.add(p + u);
        const $ = b + p.length + u.length + 1, k = { length: l.length, items: [] };
        c.set(b, k);
        for (const z of [...m.matchAll(/\S+/g)]) {
          const L = $ + z.index;
          let E = (M = c.get(L)) == null ? void 0 : M.items;
          E ? c.delete(L) : E = [{
            offset: L,
            length: z[0].length,
            className: z[0]
          }];
          for (const j of E)
            j.className = j.className === "~" ? p : j.className.replace(/^(!?)(.*)/, `$1${p}${u}$2`), k.items.push(j);
        }
        return "$".repeat(l.length);
      }
    ), r -= 1;
  while (o && r);
  let s;
  if (typeof t == "string") {
    s = "";
    let l = 0;
    for (const [p, u] of c)
      s += t.slice(l, p), s += u.items.map((m) => m.className).join(" "), l = p + u.length;
    s += t.slice(l);
  } else {
    s = t;
    for (const [l, p] of c)
      s.overwrite(
        l,
        l + p.length,
        p.items.map((u) => u.className).join(" ")
      );
  }
  return {
    prefixes: Array.from(a),
    hasChanged: o,
    groupsByOffset: c,
    // Computed lazily because MagicString's toString does a lot of work
    get expanded() {
      return s.toString();
    }
  };
}
function ko(t, e = ["-", ":"], r = 5) {
  const n = wo(t, e, r);
  return typeof t == "string" ? n.expanded : t;
}
const Ue = /* @__PURE__ */ new Set();
function ae(t) {
  Ue.has(t) || (console.warn("[unocss]", t), Ue.add(t));
}
const $r = /[\\:]?[\s'"`;{}]+/g;
function So(t) {
  return t.split($r);
}
const Co = {
  name: "@unocss/core/extractor-split",
  order: 0,
  extract({ code: t }) {
    return So(t);
  }
};
function zo() {
  return {
    events: {},
    emit(t, ...e) {
      (this.events[t] || []).forEach((r) => r(...e));
    },
    on(t, e) {
      return (this.events[t] = this.events[t] || []).push(e), () => this.events[t] = (this.events[t] || []).filter((r) => r !== e);
    }
  };
}
const te = "default", ve = "preflights", jo = "shortcuts", Eo = "imports", Ao = {
  [Eo]: -200,
  [ve]: -100,
  [jo]: -10,
  [te]: 0
};
function vr(t) {
  return q(t).flatMap((e) => Array.isArray(e) ? [e] : Object.entries(e));
}
const Be = "_uno_resolved";
function _o(t) {
  var n;
  let e = typeof t == "function" ? t() : t;
  if (Be in e)
    return e;
  e = { ...e }, Object.defineProperty(e, Be, {
    value: !0,
    enumerable: !1
  });
  const r = e.shortcuts ? vr(e.shortcuts) : void 0;
  if (e.shortcuts = r, e.prefix || e.layer) {
    const o = (i) => {
      i[2] || (i[2] = {});
      const a = i[2];
      a.prefix == null && e.prefix && (a.prefix = q(e.prefix)), a.layer == null && e.layer && (a.layer = e.layer);
    };
    r == null || r.forEach(o), (n = e.rules) == null || n.forEach(o);
  }
  return e;
}
function wr(t) {
  const e = _o(t);
  if (!e.presets)
    return [e];
  const r = (e.presets || []).flatMap(q).flatMap(wr);
  return [e, ...r];
}
function Oo(t) {
  var o, i;
  if (t.length === 0)
    return {};
  const e = [], r = [];
  let n = !1;
  for (const a of t)
    a.pipeline === !1 ? n = !0 : (e.push(((o = a.pipeline) == null ? void 0 : o.include) ?? []), r.push(((i = a.pipeline) == null ? void 0 : i.exclude) ?? []));
  return {
    filesystem: st(t.flatMap((a) => a.filesystem ?? [])),
    inline: st(t.flatMap((a) => a.inline ?? [])),
    plain: st(t.flatMap((a) => a.plain ?? [])),
    pipeline: n ? !1 : {
      include: st(Ie(...e)),
      exclude: st(Ie(...r))
    }
  };
}
function De(t = {}, e = {}) {
  var A, B;
  const r = Object.assign({}, e, t), n = no((r.presets || []).flatMap(q).flatMap(wr), (x, S) => x.name === S.name), o = [
    ...n.filter((x) => x.enforce === "pre"),
    ...n.filter((x) => !x.enforce),
    ...n.filter((x) => x.enforce === "post")
  ], i = [
    ...o,
    r
  ], a = [...i].reverse(), c = Object.assign({}, Ao, ...i.map((x) => x.layers));
  function s(x) {
    return st(i.flatMap((S) => q(S[x] || [])));
  }
  const l = s("extractors");
  let p = (A = a.find((x) => x.extractorDefault !== void 0)) == null ? void 0 : A.extractorDefault;
  p === void 0 && (p = Co), p && !l.includes(p) && l.unshift(p), l.sort((x, S) => (x.order || 0) - (S.order || 0));
  const u = s("rules"), m = {}, b = u.length, $ = u.map((x, S) => {
    var G;
    if (ao(x)) {
      q(((G = x[2]) == null ? void 0 : G.prefix) || "").forEach((h) => {
        m[h + x[0]] = [S, x[1], x[2], x];
      });
      return;
    }
    return [S, ...x];
  }).filter(Boolean).reverse();
  let k = Lo(i.map((x) => x.theme));
  const M = s("extendTheme");
  for (const x of M)
    k = x(k) || k;
  const z = {
    templates: st(i.flatMap((x) => {
      var S;
      return q((S = x.autocomplete) == null ? void 0 : S.templates);
    })),
    extractors: i.flatMap((x) => {
      var S;
      return q((S = x.autocomplete) == null ? void 0 : S.extractors);
    }).sort((x, S) => (x.order || 0) - (S.order || 0)),
    shorthands: Ro(i.map((x) => {
      var S;
      return ((S = x.autocomplete) == null ? void 0 : S.shorthands) || {};
    }))
  };
  let L = s("separators");
  L.length || (L = [":", "-"]);
  const E = s("content"), j = Oo(E), w = {
    mergeSelectors: !0,
    warn: !0,
    sortLayers: (x) => x,
    ...r,
    blocklist: s("blocklist"),
    presets: o,
    envMode: r.envMode || "build",
    shortcutsLayer: r.shortcutsLayer || "shortcuts",
    layers: c,
    theme: k,
    rulesSize: b,
    rulesDynamic: $,
    rulesStaticMap: m,
    preprocess: s("preprocess"),
    postprocess: s("postprocess"),
    preflights: s("preflights"),
    autocomplete: z,
    variants: s("variants").map(fo).sort((x, S) => (x.order || 0) - (S.order || 0)),
    shortcuts: vr(s("shortcuts")).reverse(),
    extractors: l,
    safelist: s("safelist"),
    separators: L,
    details: r.details ?? r.envMode === "dev",
    content: j
  };
  for (const x of i)
    (B = x == null ? void 0 : x.configResolved) == null || B.call(x, w);
  return w;
}
function Lo(t) {
  return t.map((e) => e ? Qt(e) : {}).reduce((e, r) => yr(e, r), {});
}
function Ro(t) {
  return t.reduce((e, r) => {
    const n = {};
    for (const o in r) {
      const i = r[o];
      Array.isArray(i) ? n[o] = `(${i.join("|")})` : n[o] = i;
    }
    return {
      ...e,
      ...n
    };
  }, {});
}
function Ie(...t) {
  return t.flatMap(Mo);
}
function Mo(t) {
  return Array.isArray(t) ? t : t ? [t] : [];
}
const Po = "0.62.1";
var Fo = Object.defineProperty, To = (t, e, r) => e in t ? Fo(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, ht = (t, e, r) => (To(t, typeof e != "symbol" ? e + "" : e, r), r);
const gt = {
  shortcutsNoMerge: "$$symbol-shortcut-no-merge",
  variants: "$$symbol-variants",
  parent: "$$symbol-parent",
  selector: "$$symbol-selector"
};
class Wo {
  constructor(e = {}, r = {}) {
    this.userConfig = e, this.defaults = r, ht(this, "version", Po), ht(this, "_cache", /* @__PURE__ */ new Map()), ht(this, "config"), ht(this, "blocked", /* @__PURE__ */ new Set()), ht(this, "parentOrders", /* @__PURE__ */ new Map()), ht(this, "events", zo()), this.config = De(e, r), this.events.emit("config", this.config);
  }
  setConfig(e, r) {
    e && (r && (this.defaults = r), this.userConfig = e, this.blocked.clear(), this.parentOrders.clear(), this._cache.clear(), this.config = De(e, this.defaults), this.events.emit("config", this.config));
  }
  async applyExtractors(e, r, n = /* @__PURE__ */ new Set()) {
    var i;
    const o = {
      original: e,
      code: e,
      id: r,
      extracted: n,
      envMode: this.config.envMode
    };
    for (const a of this.config.extractors) {
      const c = await ((i = a.extract) == null ? void 0 : i.call(a, o));
      if (c)
        if (me(c) && me(n))
          for (const s of c)
            n.setCount(s, n.getCount(s) + c.getCount(s));
        else
          for (const s of c)
            n.add(s);
    }
    return n;
  }
  makeContext(e, r) {
    const n = {
      rawSelector: e,
      currentSelector: r[1],
      theme: this.config.theme,
      generator: this,
      symbols: gt,
      variantHandlers: r[2],
      constructCSS: (...o) => this.constructCustomCSS(n, ...o),
      variantMatch: r
    };
    return n;
  }
  async parseToken(e, r) {
    var l;
    if (this.blocked.has(e))
      return;
    const n = `${e}${r ? ` ${r}` : ""}`;
    if (this._cache.has(n))
      return this._cache.get(n);
    let o = e;
    for (const p of this.config.preprocess)
      o = p(e);
    if (this.isBlocked(o)) {
      this.blocked.add(e), this._cache.set(n, null);
      return;
    }
    const i = await this.matchVariants(e, o);
    if (!i || this.isBlocked(i[1])) {
      this.blocked.add(e), this._cache.set(n, null);
      return;
    }
    const a = this.makeContext(e, [r || i[0], i[1], i[2], i[3]]);
    this.config.details && (a.variants = [...i[3]]);
    const c = await this.expandShortcut(a.currentSelector, a), s = c ? await this.stringifyShortcuts(a.variantMatch, a, c[0], c[1]) : (l = await this.parseUtil(a.variantMatch, a)) == null ? void 0 : l.map((p) => this.stringifyUtil(p, a)).filter(Ne);
    if (s != null && s.length)
      return this._cache.set(n, s), s;
    this._cache.set(n, null);
  }
  async generate(e, r = {}) {
    const {
      id: n,
      scope: o,
      preflights: i = !0,
      safelist: a = !0,
      minify: c = !1,
      extendedInfo: s = !1
    } = r, l = this.config.outputToCssLayers, p = Y(e) ? await this.applyExtractors(
      e,
      n,
      s ? new xr() : /* @__PURE__ */ new Set()
    ) : Array.isArray(e) ? new Set(e) : e;
    if (a) {
      const w = {
        generator: this,
        theme: this.config.theme
      };
      this.config.safelist.flatMap((A) => typeof A == "function" ? A(w) : A).forEach((A) => {
        p.has(A) || p.add(A);
      });
    }
    const u = c ? "" : `
`, m = /* @__PURE__ */ new Set([te]), b = s ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Map();
    let k = {};
    const M = Array.from(p).map(async (w) => {
      var B;
      if (b.has(w))
        return;
      const A = await this.parseToken(w);
      if (A != null) {
        b instanceof Map ? b.set(w, {
          data: A,
          count: me(p) ? p.getCount(w) : -1
        }) : b.add(w);
        for (const x of A) {
          const S = x[3] || "", G = (B = x[4]) == null ? void 0 : B.layer;
          $.has(S) || $.set(S, []), $.get(S).push(x), G && m.add(G);
        }
      }
    });
    await Promise.all(M), await (async () => {
      if (!i)
        return;
      const w = {
        generator: this,
        theme: this.config.theme
      }, A = /* @__PURE__ */ new Set([]);
      this.config.preflights.forEach(({ layer: B = ve }) => {
        m.add(B), A.add(B);
      }), k = Object.fromEntries(
        await Promise.all(Array.from(A).map(
          async (B) => {
            const S = (await Promise.all(
              this.config.preflights.filter((G) => (G.layer || ve) === B).map(async (G) => await G.getCSS(w))
            )).filter(Boolean).join(u);
            return [B, S];
          }
        ))
      );
    })();
    const z = this.config.sortLayers(Array.from(m).sort((w, A) => (this.config.layers[w] ?? 0) - (this.config.layers[A] ?? 0) || w.localeCompare(A))), L = {}, E = (w = te) => {
      var x;
      if (L[w])
        return L[w];
      let A = Array.from($).sort((S, G) => {
        var y;
        return (this.parentOrders.get(S[0]) ?? 0) - (this.parentOrders.get(G[0]) ?? 0) || ((y = S[0]) == null ? void 0 : y.localeCompare(G[0] || "")) || 0;
      }).map(([S, G]) => {
        const y = G.length, h = G.filter((v) => {
          var C;
          return (((C = v[4]) == null ? void 0 : C.layer) || te) === w;
        }).sort((v, C) => {
          var R, P, N, F, _, U, V;
          return v[0] - C[0] || (((R = v[4]) == null ? void 0 : R.sort) || 0) - (((P = C[4]) == null ? void 0 : P.sort) || 0) || ((_ = (N = v[5]) == null ? void 0 : N.currentSelector) == null ? void 0 : _.localeCompare(((F = C[5]) == null ? void 0 : F.currentSelector) ?? "")) || ((U = v[1]) == null ? void 0 : U.localeCompare(C[1] || "")) || ((V = v[2]) == null ? void 0 : V.localeCompare(C[2] || "")) || 0;
        }).map(([, v, C, , R, , P]) => [
          [[(v && Uo(v, o)) ?? "", (R == null ? void 0 : R.sort) ?? 0]],
          C,
          !!(P ?? (R == null ? void 0 : R.noMerge))
        ]);
        if (!h.length)
          return;
        const d = h.reverse().map(([v, C, R], P) => {
          if (!R && this.config.mergeSelectors)
            for (let F = P + 1; F < y; F++) {
              const _ = h[F];
              if (_ && !_[2] && (v && _[0] || v == null && _[0] == null) && _[1] === C)
                return v && _[0] && _[0].push(...v), null;
            }
          const N = v ? st(v.sort((F, _) => {
            var U;
            return F[1] - _[1] || ((U = F[0]) == null ? void 0 : U.localeCompare(_[0] || "")) || 0;
          }).map((F) => F[0]).filter(Boolean)) : [];
          return N.length ? `${N.join(`,${u}`)}{${C}}` : C;
        }).filter(Boolean).reverse().join(u);
        if (!S)
          return d;
        const g = S.split(" $$ ");
        return `${g.join("{")}{${u}${d}${u}${"}".repeat(g.length)}`;
      }).filter(Boolean).join(u);
      if (i && (A = [k[w], A].filter(Boolean).join(u)), l && A) {
        let S = typeof l == "object" ? (x = l.cssLayerName) == null ? void 0 : x.call(l, w) : void 0;
        S !== null && (S || (S = w), A = `@layer ${S}{${u}${A}${u}}`);
      }
      const B = c ? "" : `/* layer: ${w} */${u}`;
      return L[w] = A ? B + A : "";
    }, j = (w = z, A) => w.filter((B) => !(A != null && A.includes(B))).map((B) => E(B) || "").filter(Boolean).join(u);
    return {
      get css() {
        return j();
      },
      layers: z,
      matched: b,
      getLayers: j,
      getLayer: E
    };
  }
  async matchVariants(e, r) {
    const n = /* @__PURE__ */ new Set(), o = [];
    let i = r || e, a = !0;
    const c = {
      rawSelector: e,
      theme: this.config.theme,
      generator: this
    };
    for (; a; ) {
      a = !1;
      for (const s of this.config.variants) {
        if (!s.multiPass && n.has(s))
          continue;
        let l = await s.match(i, c);
        if (l) {
          if (Y(l)) {
            if (l === i)
              continue;
            l = { matcher: l };
          }
          i = l.matcher ?? i, o.unshift(l), n.add(s), a = !0;
          break;
        }
      }
      if (!a)
        break;
      if (o.length > 500)
        throw new Error(`Too many variants applied to "${e}"`);
    }
    return [e, i, o, n];
  }
  applyVariants(e, r = e[4], n = e[1]) {
    const i = r.slice().sort((l, p) => (l.order || 0) - (p.order || 0)).reduceRight(
      (l, p) => (u) => {
        var $, k;
        const m = (($ = p.body) == null ? void 0 : $.call(p, u.entries)) || u.entries, b = Array.isArray(p.parent) ? p.parent : [p.parent, void 0];
        return (p.handle ?? Do)({
          ...u,
          entries: m,
          selector: ((k = p.selector) == null ? void 0 : k.call(p, u.selector, m)) || u.selector,
          parent: b[0] || u.parent,
          parentOrder: b[1] || u.parentOrder,
          layer: p.layer || u.layer,
          sort: p.sort || u.sort
        }, l);
      },
      (l) => l
    )({
      prefix: "",
      selector: Bo(n),
      pseudo: "",
      entries: e[2]
    }), { parent: a, parentOrder: c } = i;
    a != null && c != null && this.parentOrders.set(a, c);
    const s = {
      selector: [
        i.prefix,
        i.selector,
        i.pseudo
      ].join(""),
      entries: i.entries,
      parent: a,
      layer: i.layer,
      sort: i.sort,
      noMerge: i.noMerge
    };
    for (const l of this.config.postprocess)
      l(s);
    return s;
  }
  constructCustomCSS(e, r, n) {
    const o = Mt(r);
    if (Y(o))
      return o;
    const { selector: i, entries: a, parent: c } = this.applyVariants([0, n || e.rawSelector, o, void 0, e.variantHandlers]), s = `${i}{${Jt(a)}}`;
    return c ? `${c}{${s}}` : s;
  }
  async parseUtil(e, r, n = !1, o) {
    var p;
    const [i, a, c] = Y(e) ? await this.matchVariants(e) : e;
    this.config.details && (r.rules = r.rules ?? []);
    const s = this.config.rulesStaticMap[a];
    if (s && s[1] && (n || !((p = s[2]) != null && p.internal))) {
      this.config.details && r.rules.push(s[3]);
      const u = s[0], m = Mt(s[1]), b = s[2];
      return Y(m) ? [[u, m, b]] : [[u, i, m, b, c]];
    }
    r.variantHandlers = c;
    const { rulesDynamic: l } = this.config;
    for (const [u, m, b, $] of l) {
      if ($ != null && $.internal && !n)
        continue;
      let k = a;
      if ($ != null && $.prefix) {
        const E = q($.prefix);
        if (o) {
          const j = q(o);
          if (!E.some((w) => j.includes(w)))
            continue;
        } else {
          const j = E.find((w) => a.startsWith(w));
          if (j == null)
            continue;
          k = a.slice(j.length);
        }
      }
      const M = k.match(m);
      if (!M)
        continue;
      let z = await b(M, r);
      if (!z)
        continue;
      if (this.config.details && r.rules.push([m, b, $]), typeof z != "string")
        if (Symbol.asyncIterator in z) {
          const E = [];
          for await (const j of z)
            j && E.push(j);
          z = E;
        } else Symbol.iterator in z && !Array.isArray(z) && (z = Array.from(z).filter(Ne));
      const L = oo(z).filter((E) => E.length);
      if (L.length)
        return L.map((E) => {
          if (Y(E))
            return [u, E, $];
          let j = c;
          for (const w of E)
            w[0] === gt.variants ? j = [
              ...q(w[1]),
              ...j
            ] : w[0] === gt.parent ? j = [
              { parent: w[1] },
              ...j
            ] : w[0] === gt.selector && (j = [
              { selector: w[1] },
              ...j
            ]);
          return [u, i, E, $, j];
        });
    }
  }
  stringifyUtil(e, r) {
    if (!e)
      return;
    if (We(e))
      return [e[0], void 0, e[1], void 0, e[2], this.config.details ? r : void 0, void 0];
    const {
      selector: n,
      entries: o,
      parent: i,
      layer: a,
      sort: c,
      noMerge: s
    } = this.applyVariants(e), l = Jt(o);
    if (!l)
      return;
    const { layer: p, sort: u, ...m } = e[3] ?? {}, b = {
      ...m,
      layer: a ?? p,
      sort: c ?? u
    };
    return [e[0], n, l, i, b, this.config.details ? r : void 0, s];
  }
  async expandShortcut(e, r, n = 5) {
    var c;
    if (n === 0)
      return;
    const o = this.config.details ? (s) => {
      r.shortcuts = r.shortcuts ?? [], r.shortcuts.push(s);
    } : uo;
    let i, a;
    for (const s of this.config.shortcuts) {
      let l = e;
      if ((c = s[2]) != null && c.prefix) {
        const u = q(s[2].prefix).find((m) => e.startsWith(m));
        if (u == null)
          continue;
        l = e.slice(u.length);
      }
      if (so(s)) {
        if (s[0] === l) {
          i = i || s[2], a = s[1], o(s);
          break;
        }
      } else {
        const p = l.match(s[0]);
        if (p && (a = s[1](p, r)), a) {
          i = i || s[2], o(s);
          break;
        }
      }
    }
    if (a && (a = q(a).map((s) => Y(s) ? ko(s.trim()).split(/\s+/g) : s).flat()), !a) {
      const [s, l] = Y(e) ? await this.matchVariants(e) : e;
      if (s !== l) {
        const p = await this.expandShortcut(l, r, n - 1);
        p && (a = p[0].map((u) => Y(u) ? s.replace(l, u) : u));
      }
    }
    if (a)
      return [
        (await Promise.all(a.map(async (s) => {
          var l;
          return (Y(s) ? (l = await this.expandShortcut(s, r, n - 1)) == null ? void 0 : l[0] : void 0) || [s];
        }))).flat(1).filter(Boolean),
        i
      ];
  }
  async stringifyShortcuts(e, r, n, o = { layer: this.config.shortcutsLayer }) {
    var p;
    const i = new bo(), a = (await Promise.all(st(n).map(async (u) => {
      const m = Y(u) ? await this.parseUtil(u, r, !0, o.prefix) : [[Number.POSITIVE_INFINITY, "{inline}", Mt(u), void 0, []]];
      return !m && this.config.warn && ae(`unmatched utility "${u}" in shortcut "${e[1]}"`), m || [];
    }))).flat(1).filter(Boolean).sort((u, m) => u[0] - m[0]), [c, , s] = e, l = [];
    for (const u of a) {
      if (We(u)) {
        l.push([u[0], void 0, u[1], void 0, u[2], r, void 0]);
        continue;
      }
      const { selector: m, entries: b, parent: $, sort: k, noMerge: M, layer: z } = this.applyVariants(u, [...u[4], ...s], c);
      i.getFallback(z ?? o.layer, new go()).getFallback(m, $, [[], u[0]])[0].push([b, !!(M ?? ((p = u[3]) == null ? void 0 : p.noMerge)), k ?? 0]);
    }
    return l.concat(i.flatMap(
      (u, m) => u.map(([b, $], k, M) => {
        const z = (E, j, w) => {
          const A = Math.max(...w.map((x) => x[1])), B = w.map((x) => x[0]);
          return (E ? [B.flat(1)] : B).map((x) => {
            const S = Jt(x);
            if (S)
              return [$, k, S, M, { ...o, noMerge: j, sort: A, layer: m }, r, void 0];
          });
        };
        return [
          [b.filter(([, E]) => E).map(([E, , j]) => [E, j]), !0],
          [b.filter(([, E]) => !E).map(([E, , j]) => [E, j]), !1]
        ].map(([E, j]) => [
          ...z(!1, j, E.filter(([w]) => w.some((A) => A[0] === gt.shortcutsNoMerge))),
          ...z(!0, j, E.filter(([w]) => w.every((A) => A[0] !== gt.shortcutsNoMerge)))
        ]);
      }).flat(2).filter(Boolean)
    ));
  }
  isBlocked(e) {
    return !e || this.config.blocklist.map((r) => Array.isArray(r) ? r[0] : r).some((r) => typeof r == "function" ? r(e) : Y(r) ? r === e : r.test(e));
  }
  getBlocked(e) {
    const r = this.config.blocklist.find((n) => {
      const o = Array.isArray(n) ? n[0] : n;
      return typeof o == "function" ? o(e) : Y(o) ? o === e : o.test(e);
    });
    return r ? Array.isArray(r) ? r : [r, void 0] : void 0;
  }
}
function Mc(t, e) {
  return new Wo(t, e);
}
const kr = /\s\$\$\s+/g;
function No(t) {
  return kr.test(t);
}
function Uo(t, e) {
  return No(t) ? t.replace(kr, e ? ` ${e} ` : " ") : e ? `${e} ${t}` : t;
}
const Ve = /^\[(.+?)(~?=)"(.*)"\]$/;
function Bo(t) {
  return Ve.test(t) ? t.replace(Ve, (e, r, n, o) => `[${pe(r)}${n}"${pe(o)}"]`) : `.${pe(t)}`;
}
function Do(t, e) {
  return e(t);
}
function Io(t) {
  let e, r, n = 2166136261;
  for (e = 0, r = t.length; e < r; e++)
    n ^= t.charCodeAt(e), n += (n << 1) + (n << 4) + (n << 7) + (n << 8) + (n << 24);
  return `00000${(n >>> 0).toString(36)}`.slice(-6);
}
function Vo(t, e, r, n) {
  for (const o of Array.from(t.matchAll(r)))
    if (o != null) {
      const i = o[0], a = `${n}${Io(i)}`;
      e.set(a, i), t = t.replace(i, a);
    }
  return t;
}
function Yo(t, e) {
  for (const [r, n] of e.entries())
    t = t.replaceAll(r, n);
  return t;
}
const Xo = /\/\/#\s*sourceMappingURL=.*\n?/g;
function qo(t) {
  return t.includes("sourceMappingURL=") ? t.replace(Xo, "") : t;
}
const Go = /(?:[\w&:[\]-]|\[\S{1,64}=\S{1,64}\]){1,64}\[\\?['"]?\S{1,64}?['"]\]\]?[\w:-]{0,64}/g, Ho = /\[(\\\W|[\w-]){1,64}:[^\s:]{0,64}?("\S{1,64}?"|'\S{1,64}?'|`\S{1,64}?`|[^\s:]{1,64}?)[^\s:]{0,64}?\)?\]/g, Ko = /^\[(?:\\\W|[\w-]){1,64}:['"]?\S{1,64}?['"]?\]$/;
function Zo(t) {
  const e = [];
  for (const o of t.matchAll(Ho))
    o.index !== 0 && !/^[\s'"`]/.test(t[o.index - 1] ?? "") || e.push(o[0]);
  for (const o of t.matchAll(Go))
    e.push(o[0]);
  const r = /* @__PURE__ */ new Map(), n = "@unocss-skip-arbitrary-brackets";
  return t = Vo(t, r, /-\[[^\]]*\]/g, n), t && t.split($r).forEach((o) => {
    o.includes(n) && (o = Yo(o, r)), lo(o) && !Ko.test(o) && e.push(o);
  }), e;
}
const Jo = {
  name: "@unocss/extractor-arbitrary-variants",
  order: 0,
  extract({ code: t }) {
    return Zo(qo(t));
  }
};
var Qo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pc(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Fc(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var Dt = { exports: {} }, Ye;
function ti() {
  return Ye || (Ye = 1, function(t, e) {
    (function(r, n) {
      n(e);
    })(Qo, function(r) {
      const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = new Uint8Array(64), c = new Uint8Array(128);
      for (let y = 0; y < i.length; y++) {
        const h = i.charCodeAt(y);
        a[y] = h, c[h] = y;
      }
      function s(y, h) {
        let d = 0, g = 0, v = 0;
        do {
          const R = y.next();
          v = c[R], d |= (v & 31) << g, g += 5;
        } while (v & 32);
        const C = d & 1;
        return d >>>= 1, C && (d = -2147483648 | -d), h + d;
      }
      function l(y, h, d) {
        let g = h - d;
        g = g < 0 ? -g << 1 | 1 : g << 1;
        do {
          let v = g & 31;
          g >>>= 5, g > 0 && (v |= 32), y.write(a[v]);
        } while (g > 0);
        return h;
      }
      function p(y, h) {
        return y.pos >= h ? !1 : y.peek() !== 44;
      }
      const u = 1024 * 16, m = typeof TextDecoder < "u" ? /* @__PURE__ */ new TextDecoder() : typeof Buffer < "u" ? {
        decode(y) {
          return Buffer.from(y.buffer, y.byteOffset, y.byteLength).toString();
        }
      } : {
        decode(y) {
          let h = "";
          for (let d = 0; d < y.length; d++)
            h += String.fromCharCode(y[d]);
          return h;
        }
      };
      class b {
        constructor() {
          this.pos = 0, this.out = "", this.buffer = new Uint8Array(u);
        }
        write(h) {
          const { buffer: d } = this;
          d[this.pos++] = h, this.pos === u && (this.out += m.decode(d), this.pos = 0);
        }
        flush() {
          const { buffer: h, out: d, pos: g } = this;
          return g > 0 ? d + m.decode(h.subarray(0, g)) : d;
        }
      }
      class $ {
        constructor(h) {
          this.pos = 0, this.buffer = h;
        }
        next() {
          return this.buffer.charCodeAt(this.pos++);
        }
        peek() {
          return this.buffer.charCodeAt(this.pos);
        }
        indexOf(h) {
          const { buffer: d, pos: g } = this, v = d.indexOf(h, g);
          return v === -1 ? d.length : v;
        }
      }
      const k = [];
      function M(y) {
        const { length: h } = y, d = new $(y), g = [], v = [];
        let C = 0;
        for (; d.pos < h; d.pos++) {
          C = s(d, C);
          const R = s(d, 0);
          if (!p(d, h)) {
            const V = v.pop();
            V[2] = C, V[3] = R;
            continue;
          }
          const P = s(d, 0), _ = s(d, 0) & 1 ? [C, R, 0, 0, P, s(d, 0)] : [C, R, 0, 0, P];
          let U = k;
          if (p(d, h)) {
            U = [];
            do {
              const V = s(d, 0);
              U.push(V);
            } while (p(d, h));
          }
          _.vars = U, g.push(_), v.push(_);
        }
        return g;
      }
      function z(y) {
        const h = new b();
        for (let d = 0; d < y.length; )
          d = L(y, d, h, [0]);
        return h.flush();
      }
      function L(y, h, d, g) {
        const v = y[h], { 0: C, 1: R, 2: P, 3: N, 4: F, vars: _ } = v;
        h > 0 && d.write(44), g[0] = l(d, C, g[0]), l(d, R, 0), l(d, F, 0);
        const U = v.length === 6 ? 1 : 0;
        l(d, U, 0), v.length === 6 && l(d, v[5], 0);
        for (const V of _)
          l(d, V, 0);
        for (h++; h < y.length; ) {
          const V = y[h], { 0: W, 1: X } = V;
          if (W > P || W === P && X >= N)
            break;
          h = L(y, h, d, g);
        }
        return d.write(44), g[0] = l(d, P, g[0]), l(d, N, 0), h;
      }
      function E(y) {
        const { length: h } = y, d = new $(y), g = [], v = [];
        let C = 0, R = 0, P = 0, N = 0, F = 0, _ = 0, U = 0, V = 0;
        do {
          const W = d.indexOf(";");
          let X = 0;
          for (; d.pos < W; d.pos++) {
            if (X = s(d, X), !p(d, W)) {
              const Q = v.pop();
              Q[2] = C, Q[3] = X;
              continue;
            }
            const nt = s(d, 0), Nt = nt & 1, kt = nt & 2, St = nt & 4;
            let Te = null, de = k, ut;
            if (Nt) {
              const Q = s(d, R);
              P = s(d, R === Q ? P : 0), R = Q, ut = [C, X, 0, 0, Q, P];
            } else
              ut = [C, X, 0, 0];
            if (ut.isScope = !!St, kt) {
              const Q = N, mt = F;
              N = s(d, N);
              const Ct = Q === N;
              F = s(d, Ct ? F : 0), _ = s(d, Ct && mt === F ? _ : 0), Te = [N, F, _];
            }
            if (ut.callsite = Te, p(d, W)) {
              de = [];
              do {
                U = C, V = X;
                const Q = s(d, 0);
                let mt;
                if (Q < -1) {
                  mt = [[s(d, 0)]];
                  for (let Ct = -1; Ct > Q; Ct--) {
                    const eo = U;
                    U = s(d, U), V = s(d, U === eo ? V : 0);
                    const ro = s(d, 0);
                    mt.push([ro, U, V]);
                  }
                } else
                  mt = [[Q]];
                de.push(mt);
              } while (p(d, W));
            }
            ut.bindings = de, g.push(ut), v.push(ut);
          }
          C++, d.pos = W + 1;
        } while (d.pos < h);
        return g;
      }
      function j(y) {
        if (y.length === 0)
          return "";
        const h = new b();
        for (let d = 0; d < y.length; )
          d = w(y, d, h, [0, 0, 0, 0, 0, 0, 0]);
        return h.flush();
      }
      function w(y, h, d, g) {
        const v = y[h], { 0: C, 1: R, 2: P, 3: N, isScope: F, callsite: _, bindings: U } = v;
        g[0] < C ? (A(d, g[0], C), g[0] = C, g[1] = 0) : h > 0 && d.write(44), g[1] = l(d, v[1], g[1]);
        const V = (v.length === 6 ? 1 : 0) | (_ ? 2 : 0) | (F ? 4 : 0);
        if (l(d, V, 0), v.length === 6) {
          const { 4: W, 5: X } = v;
          W !== g[2] && (g[3] = 0), g[2] = l(d, W, g[2]), g[3] = l(d, X, g[3]);
        }
        if (_) {
          const { 0: W, 1: X, 2: nt } = v.callsite;
          W !== g[4] ? (g[5] = 0, g[6] = 0) : X !== g[5] && (g[6] = 0), g[4] = l(d, W, g[4]), g[5] = l(d, X, g[5]), g[6] = l(d, nt, g[6]);
        }
        if (U)
          for (const W of U) {
            W.length > 1 && l(d, -W.length, 0);
            const X = W[0][0];
            l(d, X, 0);
            let nt = C, Nt = R;
            for (let kt = 1; kt < W.length; kt++) {
              const St = W[kt];
              nt = l(d, St[1], nt), Nt = l(d, St[2], Nt), l(d, St[0], 0);
            }
          }
        for (h++; h < y.length; ) {
          const W = y[h], { 0: X, 1: nt } = W;
          if (X > P || X === P && nt >= N)
            break;
          h = w(y, h, d, g);
        }
        return g[0] < P ? (A(d, g[0], P), g[0] = P, g[1] = 0) : d.write(44), g[1] = l(d, N, g[1]), h;
      }
      function A(y, h, d) {
        do
          y.write(59);
        while (++h < d);
      }
      function B(y) {
        const { length: h } = y, d = new $(y), g = [];
        let v = 0, C = 0, R = 0, P = 0, N = 0;
        do {
          const F = d.indexOf(";"), _ = [];
          let U = !0, V = 0;
          for (v = 0; d.pos < F; ) {
            let W;
            v = s(d, v), v < V && (U = !1), V = v, p(d, F) ? (C = s(d, C), R = s(d, R), P = s(d, P), p(d, F) ? (N = s(d, N), W = [v, C, R, P, N]) : W = [v, C, R, P]) : W = [v], _.push(W), d.pos++;
          }
          U || x(_), g.push(_), d.pos = F + 1;
        } while (d.pos <= h);
        return g;
      }
      function x(y) {
        y.sort(S);
      }
      function S(y, h) {
        return y[0] - h[0];
      }
      function G(y) {
        const h = new b();
        let d = 0, g = 0, v = 0, C = 0;
        for (let R = 0; R < y.length; R++) {
          const P = y[R];
          if (R > 0 && h.write(59), P.length === 0)
            continue;
          let N = 0;
          for (let F = 0; F < P.length; F++) {
            const _ = P[F];
            F > 0 && h.write(44), N = l(h, _[0], N), _.length !== 1 && (d = l(h, _[1], d), g = l(h, _[2], g), v = l(h, _[3], v), _.length !== 4 && (C = l(h, _[4], C)));
          }
        }
        return h.flush();
      }
      r.decode = B, r.decodeGeneratedRanges = E, r.decodeOriginalScopes = M, r.encode = G, r.encodeGeneratedRanges = j, r.encodeOriginalScopes = z, Object.defineProperty(r, "__esModule", { value: !0 });
    });
  }(Dt, Dt.exports)), Dt.exports;
}
var ei = ti();
class ee {
  constructor(e) {
    this.bits = e instanceof ee ? e.bits.slice() : [];
  }
  add(e) {
    this.bits[e >> 5] |= 1 << (e & 31);
  }
  has(e) {
    return !!(this.bits[e >> 5] & 1 << (e & 31));
  }
}
class Ft {
  constructor(e, r, n) {
    this.start = e, this.end = r, this.original = n, this.intro = "", this.outro = "", this.content = n, this.storeName = !1, this.edited = !1, this.previous = null, this.next = null;
  }
  appendLeft(e) {
    this.outro += e;
  }
  appendRight(e) {
    this.intro = this.intro + e;
  }
  clone() {
    const e = new Ft(this.start, this.end, this.original);
    return e.intro = this.intro, e.outro = this.outro, e.content = this.content, e.storeName = this.storeName, e.edited = this.edited, e;
  }
  contains(e) {
    return this.start < e && e < this.end;
  }
  eachNext(e) {
    let r = this;
    for (; r; )
      e(r), r = r.next;
  }
  eachPrevious(e) {
    let r = this;
    for (; r; )
      e(r), r = r.previous;
  }
  edit(e, r, n) {
    return this.content = e, n || (this.intro = "", this.outro = ""), this.storeName = r, this.edited = !0, this;
  }
  prependLeft(e) {
    this.outro = e + this.outro;
  }
  prependRight(e) {
    this.intro = e + this.intro;
  }
  reset() {
    this.intro = "", this.outro = "", this.edited && (this.content = this.original, this.storeName = !1, this.edited = !1);
  }
  split(e) {
    const r = e - this.start, n = this.original.slice(0, r), o = this.original.slice(r);
    this.original = n;
    const i = new Ft(e, this.end, o);
    return i.outro = this.outro, this.outro = "", this.end = e, this.edited ? (i.edit("", !1), this.content = "") : this.content = n, i.next = this.next, i.next && (i.next.previous = i), i.previous = this, this.next = i, i;
  }
  toString() {
    return this.intro + this.content + this.outro;
  }
  trimEnd(e) {
    if (this.outro = this.outro.replace(e, ""), this.outro.length) return !0;
    const r = this.content.replace(e, "");
    if (r.length)
      return r !== this.content && (this.split(this.start + r.length).edit("", void 0, !0), this.edited && this.edit(r, this.storeName, !0)), !0;
    if (this.edit("", void 0, !0), this.intro = this.intro.replace(e, ""), this.intro.length) return !0;
  }
  trimStart(e) {
    if (this.intro = this.intro.replace(e, ""), this.intro.length) return !0;
    const r = this.content.replace(e, "");
    if (r.length) {
      if (r !== this.content) {
        const n = this.split(this.end - r.length);
        this.edited && n.edit(r, this.storeName, !0), this.edit("", void 0, !0);
      }
      return !0;
    } else if (this.edit("", void 0, !0), this.outro = this.outro.replace(e, ""), this.outro.length) return !0;
  }
}
function ri() {
  return typeof globalThis < "u" && typeof globalThis.btoa == "function" ? (t) => globalThis.btoa(unescape(encodeURIComponent(t))) : typeof Buffer == "function" ? (t) => Buffer.from(t, "utf-8").toString("base64") : () => {
    throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
  };
}
const ni = /* @__PURE__ */ ri();
class oi {
  constructor(e) {
    this.version = 3, this.file = e.file, this.sources = e.sources, this.sourcesContent = e.sourcesContent, this.names = e.names, this.mappings = ei.encode(e.mappings), typeof e.x_google_ignoreList < "u" && (this.x_google_ignoreList = e.x_google_ignoreList);
  }
  toString() {
    return JSON.stringify(this);
  }
  toUrl() {
    return "data:application/json;charset=utf-8;base64," + ni(this.toString());
  }
}
function ii(t) {
  const e = t.split(`
`), r = e.filter((i) => /^\t+/.test(i)), n = e.filter((i) => /^ {2,}/.test(i));
  if (r.length === 0 && n.length === 0)
    return null;
  if (r.length >= n.length)
    return "	";
  const o = n.reduce((i, a) => {
    const c = /^ +/.exec(a)[0].length;
    return Math.min(c, i);
  }, 1 / 0);
  return new Array(o + 1).join(" ");
}
function ai(t, e) {
  const r = t.split(/[/\\]/), n = e.split(/[/\\]/);
  for (r.pop(); r[0] === n[0]; )
    r.shift(), n.shift();
  if (r.length) {
    let o = r.length;
    for (; o--; ) r[o] = "..";
  }
  return r.concat(n).join("/");
}
const si = Object.prototype.toString;
function ci(t) {
  return si.call(t) === "[object Object]";
}
function Xe(t) {
  const e = t.split(`
`), r = [];
  for (let n = 0, o = 0; n < e.length; n++)
    r.push(o), o += e[n].length + 1;
  return function(o) {
    let i = 0, a = r.length;
    for (; i < a; ) {
      const l = i + a >> 1;
      o < r[l] ? a = l : i = l + 1;
    }
    const c = i - 1, s = o - r[c];
    return { line: c, column: s };
  };
}
const li = /\w/;
class fi {
  constructor(e) {
    this.hires = e, this.generatedCodeLine = 0, this.generatedCodeColumn = 0, this.raw = [], this.rawSegments = this.raw[this.generatedCodeLine] = [], this.pending = null;
  }
  addEdit(e, r, n, o) {
    if (r.length) {
      const i = r.length - 1;
      let a = r.indexOf(`
`, 0), c = -1;
      for (; a >= 0 && i > a; ) {
        const l = [this.generatedCodeColumn, e, n.line, n.column];
        o >= 0 && l.push(o), this.rawSegments.push(l), this.generatedCodeLine += 1, this.raw[this.generatedCodeLine] = this.rawSegments = [], this.generatedCodeColumn = 0, c = a, a = r.indexOf(`
`, a + 1);
      }
      const s = [this.generatedCodeColumn, e, n.line, n.column];
      o >= 0 && s.push(o), this.rawSegments.push(s), this.advance(r.slice(c + 1));
    } else this.pending && (this.rawSegments.push(this.pending), this.advance(r));
    this.pending = null;
  }
  addUneditedChunk(e, r, n, o, i) {
    let a = r.start, c = !0, s = !1;
    for (; a < r.end; ) {
      if (this.hires || c || i.has(a)) {
        const l = [this.generatedCodeColumn, e, o.line, o.column];
        this.hires === "boundary" ? li.test(n[a]) ? s || (this.rawSegments.push(l), s = !0) : (this.rawSegments.push(l), s = !1) : this.rawSegments.push(l);
      }
      n[a] === `
` ? (o.line += 1, o.column = 0, this.generatedCodeLine += 1, this.raw[this.generatedCodeLine] = this.rawSegments = [], this.generatedCodeColumn = 0, c = !0) : (o.column += 1, this.generatedCodeColumn += 1, c = !1), a += 1;
    }
    this.pending = null;
  }
  advance(e) {
    if (!e) return;
    const r = e.split(`
`);
    if (r.length > 1) {
      for (let n = 0; n < r.length - 1; n++)
        this.generatedCodeLine++, this.raw[this.generatedCodeLine] = this.rawSegments = [];
      this.generatedCodeColumn = 0;
    }
    this.generatedCodeColumn += r[r.length - 1].length;
  }
}
const zt = `
`, bt = {
  insertLeft: !1,
  insertRight: !1,
  storeName: !1
};
class je {
  constructor(e, r = {}) {
    const n = new Ft(0, e.length, e);
    Object.defineProperties(this, {
      original: { writable: !0, value: e },
      outro: { writable: !0, value: "" },
      intro: { writable: !0, value: "" },
      firstChunk: { writable: !0, value: n },
      lastChunk: { writable: !0, value: n },
      lastSearchedChunk: { writable: !0, value: n },
      byStart: { writable: !0, value: {} },
      byEnd: { writable: !0, value: {} },
      filename: { writable: !0, value: r.filename },
      indentExclusionRanges: { writable: !0, value: r.indentExclusionRanges },
      sourcemapLocations: { writable: !0, value: new ee() },
      storedNames: { writable: !0, value: {} },
      indentStr: { writable: !0, value: void 0 },
      ignoreList: { writable: !0, value: r.ignoreList }
    }), this.byStart[0] = n, this.byEnd[e.length] = n;
  }
  addSourcemapLocation(e) {
    this.sourcemapLocations.add(e);
  }
  append(e) {
    if (typeof e != "string") throw new TypeError("outro content must be a string");
    return this.outro += e, this;
  }
  appendLeft(e, r) {
    if (typeof r != "string") throw new TypeError("inserted content must be a string");
    this._split(e);
    const n = this.byEnd[e];
    return n ? n.appendLeft(r) : this.intro += r, this;
  }
  appendRight(e, r) {
    if (typeof r != "string") throw new TypeError("inserted content must be a string");
    this._split(e);
    const n = this.byStart[e];
    return n ? n.appendRight(r) : this.outro += r, this;
  }
  clone() {
    const e = new je(this.original, { filename: this.filename });
    let r = this.firstChunk, n = e.firstChunk = e.lastSearchedChunk = r.clone();
    for (; r; ) {
      e.byStart[n.start] = n, e.byEnd[n.end] = n;
      const o = r.next, i = o && o.clone();
      i && (n.next = i, i.previous = n, n = i), r = o;
    }
    return e.lastChunk = n, this.indentExclusionRanges && (e.indentExclusionRanges = this.indentExclusionRanges.slice()), e.sourcemapLocations = new ee(this.sourcemapLocations), e.intro = this.intro, e.outro = this.outro, e;
  }
  generateDecodedMap(e) {
    e = e || {};
    const r = 0, n = Object.keys(this.storedNames), o = new fi(e.hires), i = Xe(this.original);
    return this.intro && o.advance(this.intro), this.firstChunk.eachNext((a) => {
      const c = i(a.start);
      a.intro.length && o.advance(a.intro), a.edited ? o.addEdit(
        r,
        a.content,
        c,
        a.storeName ? n.indexOf(a.original) : -1
      ) : o.addUneditedChunk(r, a, this.original, c, this.sourcemapLocations), a.outro.length && o.advance(a.outro);
    }), {
      file: e.file ? e.file.split(/[/\\]/).pop() : void 0,
      sources: [
        e.source ? ai(e.file || "", e.source) : e.file || ""
      ],
      sourcesContent: e.includeContent ? [this.original] : void 0,
      names: n,
      mappings: o.raw,
      x_google_ignoreList: this.ignoreList ? [r] : void 0
    };
  }
  generateMap(e) {
    return new oi(this.generateDecodedMap(e));
  }
  _ensureindentStr() {
    this.indentStr === void 0 && (this.indentStr = ii(this.original));
  }
  _getRawIndentString() {
    return this._ensureindentStr(), this.indentStr;
  }
  getIndentString() {
    return this._ensureindentStr(), this.indentStr === null ? "	" : this.indentStr;
  }
  indent(e, r) {
    const n = /^[^\r\n]/gm;
    if (ci(e) && (r = e, e = void 0), e === void 0 && (this._ensureindentStr(), e = this.indentStr || "	"), e === "") return this;
    r = r || {};
    const o = {};
    r.exclude && (typeof r.exclude[0] == "number" ? [r.exclude] : r.exclude).forEach((p) => {
      for (let u = p[0]; u < p[1]; u += 1)
        o[u] = !0;
    });
    let i = r.indentStart !== !1;
    const a = (l) => i ? `${e}${l}` : (i = !0, l);
    this.intro = this.intro.replace(n, a);
    let c = 0, s = this.firstChunk;
    for (; s; ) {
      const l = s.end;
      if (s.edited)
        o[c] || (s.content = s.content.replace(n, a), s.content.length && (i = s.content[s.content.length - 1] === `
`));
      else
        for (c = s.start; c < l; ) {
          if (!o[c]) {
            const p = this.original[c];
            p === `
` ? i = !0 : p !== "\r" && i && (i = !1, c === s.start || (this._splitChunk(s, c), s = s.next), s.prependRight(e));
          }
          c += 1;
        }
      c = s.end, s = s.next;
    }
    return this.outro = this.outro.replace(n, a), this;
  }
  insert() {
    throw new Error(
      "magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)"
    );
  }
  insertLeft(e, r) {
    return bt.insertLeft || (console.warn(
      "magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"
    ), bt.insertLeft = !0), this.appendLeft(e, r);
  }
  insertRight(e, r) {
    return bt.insertRight || (console.warn(
      "magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"
    ), bt.insertRight = !0), this.prependRight(e, r);
  }
  move(e, r, n) {
    if (n >= e && n <= r) throw new Error("Cannot move a selection inside itself");
    this._split(e), this._split(r), this._split(n);
    const o = this.byStart[e], i = this.byEnd[r], a = o.previous, c = i.next, s = this.byStart[n];
    if (!s && i === this.lastChunk) return this;
    const l = s ? s.previous : this.lastChunk;
    return a && (a.next = c), c && (c.previous = a), l && (l.next = o), s && (s.previous = i), o.previous || (this.firstChunk = i.next), i.next || (this.lastChunk = o.previous, this.lastChunk.next = null), o.previous = l, i.next = s || null, l || (this.firstChunk = o), s || (this.lastChunk = i), this;
  }
  overwrite(e, r, n, o) {
    return o = o || {}, this.update(e, r, n, { ...o, overwrite: !o.contentOnly });
  }
  update(e, r, n, o) {
    if (typeof n != "string") throw new TypeError("replacement content must be a string");
    if (this.original.length !== 0) {
      for (; e < 0; ) e += this.original.length;
      for (; r < 0; ) r += this.original.length;
    }
    if (r > this.original.length) throw new Error("end is out of bounds");
    if (e === r)
      throw new Error(
        "Cannot overwrite a zero-length range – use appendLeft or prependRight instead"
      );
    this._split(e), this._split(r), o === !0 && (bt.storeName || (console.warn(
      "The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"
    ), bt.storeName = !0), o = { storeName: !0 });
    const i = o !== void 0 ? o.storeName : !1, a = o !== void 0 ? o.overwrite : !1;
    if (i) {
      const l = this.original.slice(e, r);
      Object.defineProperty(this.storedNames, l, {
        writable: !0,
        value: !0,
        enumerable: !0
      });
    }
    const c = this.byStart[e], s = this.byEnd[r];
    if (c) {
      let l = c;
      for (; l !== s; ) {
        if (l.next !== this.byStart[l.end])
          throw new Error("Cannot overwrite across a split point");
        l = l.next, l.edit("", !1);
      }
      c.edit(n, i, !a);
    } else {
      const l = new Ft(e, r, "").edit(n, i);
      s.next = l, l.previous = s;
    }
    return this;
  }
  prepend(e) {
    if (typeof e != "string") throw new TypeError("outro content must be a string");
    return this.intro = e + this.intro, this;
  }
  prependLeft(e, r) {
    if (typeof r != "string") throw new TypeError("inserted content must be a string");
    this._split(e);
    const n = this.byEnd[e];
    return n ? n.prependLeft(r) : this.intro = r + this.intro, this;
  }
  prependRight(e, r) {
    if (typeof r != "string") throw new TypeError("inserted content must be a string");
    this._split(e);
    const n = this.byStart[e];
    return n ? n.prependRight(r) : this.outro = r + this.outro, this;
  }
  remove(e, r) {
    if (this.original.length !== 0) {
      for (; e < 0; ) e += this.original.length;
      for (; r < 0; ) r += this.original.length;
    }
    if (e === r) return this;
    if (e < 0 || r > this.original.length) throw new Error("Character is out of bounds");
    if (e > r) throw new Error("end must be greater than start");
    this._split(e), this._split(r);
    let n = this.byStart[e];
    for (; n; )
      n.intro = "", n.outro = "", n.edit(""), n = r > n.end ? this.byStart[n.end] : null;
    return this;
  }
  reset(e, r) {
    if (this.original.length !== 0) {
      for (; e < 0; ) e += this.original.length;
      for (; r < 0; ) r += this.original.length;
    }
    if (e === r) return this;
    if (e < 0 || r > this.original.length) throw new Error("Character is out of bounds");
    if (e > r) throw new Error("end must be greater than start");
    this._split(e), this._split(r);
    let n = this.byStart[e];
    for (; n; )
      n.reset(), n = r > n.end ? this.byStart[n.end] : null;
    return this;
  }
  lastChar() {
    if (this.outro.length) return this.outro[this.outro.length - 1];
    let e = this.lastChunk;
    do {
      if (e.outro.length) return e.outro[e.outro.length - 1];
      if (e.content.length) return e.content[e.content.length - 1];
      if (e.intro.length) return e.intro[e.intro.length - 1];
    } while (e = e.previous);
    return this.intro.length ? this.intro[this.intro.length - 1] : "";
  }
  lastLine() {
    let e = this.outro.lastIndexOf(zt);
    if (e !== -1) return this.outro.substr(e + 1);
    let r = this.outro, n = this.lastChunk;
    do {
      if (n.outro.length > 0) {
        if (e = n.outro.lastIndexOf(zt), e !== -1) return n.outro.substr(e + 1) + r;
        r = n.outro + r;
      }
      if (n.content.length > 0) {
        if (e = n.content.lastIndexOf(zt), e !== -1) return n.content.substr(e + 1) + r;
        r = n.content + r;
      }
      if (n.intro.length > 0) {
        if (e = n.intro.lastIndexOf(zt), e !== -1) return n.intro.substr(e + 1) + r;
        r = n.intro + r;
      }
    } while (n = n.previous);
    return e = this.intro.lastIndexOf(zt), e !== -1 ? this.intro.substr(e + 1) + r : this.intro + r;
  }
  slice(e = 0, r = this.original.length) {
    if (this.original.length !== 0) {
      for (; e < 0; ) e += this.original.length;
      for (; r < 0; ) r += this.original.length;
    }
    let n = "", o = this.firstChunk;
    for (; o && (o.start > e || o.end <= e); ) {
      if (o.start < r && o.end >= r)
        return n;
      o = o.next;
    }
    if (o && o.edited && o.start !== e)
      throw new Error(`Cannot use replaced character ${e} as slice start anchor.`);
    const i = o;
    for (; o; ) {
      o.intro && (i !== o || o.start === e) && (n += o.intro);
      const a = o.start < r && o.end >= r;
      if (a && o.edited && o.end !== r)
        throw new Error(`Cannot use replaced character ${r} as slice end anchor.`);
      const c = i === o ? e - o.start : 0, s = a ? o.content.length + r - o.end : o.content.length;
      if (n += o.content.slice(c, s), o.outro && (!a || o.end === r) && (n += o.outro), a)
        break;
      o = o.next;
    }
    return n;
  }
  // TODO deprecate this? not really very useful
  snip(e, r) {
    const n = this.clone();
    return n.remove(0, e), n.remove(r, n.original.length), n;
  }
  _split(e) {
    if (this.byStart[e] || this.byEnd[e]) return;
    let r = this.lastSearchedChunk;
    const n = e > r.end;
    for (; r; ) {
      if (r.contains(e)) return this._splitChunk(r, e);
      r = n ? this.byStart[r.end] : this.byEnd[r.start];
    }
  }
  _splitChunk(e, r) {
    if (e.edited && e.content.length) {
      const o = Xe(this.original)(r);
      throw new Error(
        `Cannot split a chunk that has already been edited (${o.line}:${o.column} – "${e.original}")`
      );
    }
    const n = e.split(r);
    return this.byEnd[r] = e, this.byStart[r] = n, this.byEnd[n.end] = n, e === this.lastChunk && (this.lastChunk = n), this.lastSearchedChunk = e, !0;
  }
  toString() {
    let e = this.intro, r = this.firstChunk;
    for (; r; )
      e += r.toString(), r = r.next;
    return e + this.outro;
  }
  isEmpty() {
    let e = this.firstChunk;
    do
      if (e.intro.length && e.intro.trim() || e.content.length && e.content.trim() || e.outro.length && e.outro.trim())
        return !1;
    while (e = e.next);
    return !0;
  }
  length() {
    let e = this.firstChunk, r = 0;
    do
      r += e.intro.length + e.content.length + e.outro.length;
    while (e = e.next);
    return r;
  }
  trimLines() {
    return this.trim("[\\r\\n]");
  }
  trim(e) {
    return this.trimStart(e).trimEnd(e);
  }
  trimEndAborted(e) {
    const r = new RegExp((e || "\\s") + "+$");
    if (this.outro = this.outro.replace(r, ""), this.outro.length) return !0;
    let n = this.lastChunk;
    do {
      const o = n.end, i = n.trimEnd(r);
      if (n.end !== o && (this.lastChunk === n && (this.lastChunk = n.next), this.byEnd[n.end] = n, this.byStart[n.next.start] = n.next, this.byEnd[n.next.end] = n.next), i) return !0;
      n = n.previous;
    } while (n);
    return !1;
  }
  trimEnd(e) {
    return this.trimEndAborted(e), this;
  }
  trimStartAborted(e) {
    const r = new RegExp("^" + (e || "\\s") + "+");
    if (this.intro = this.intro.replace(r, ""), this.intro.length) return !0;
    let n = this.firstChunk;
    do {
      const o = n.end, i = n.trimStart(r);
      if (n.end !== o && (n === this.lastChunk && (this.lastChunk = n.next), this.byEnd[n.end] = n, this.byStart[n.next.start] = n.next, this.byEnd[n.next.end] = n.next), i) return !0;
      n = n.next;
    } while (n);
    return !1;
  }
  trimStart(e) {
    return this.trimStartAborted(e), this;
  }
  hasChanged() {
    return this.original !== this.toString();
  }
  _replaceRegexp(e, r) {
    function n(i, a) {
      return typeof r == "string" ? r.replace(/\$(\$|&|\d+)/g, (c, s) => s === "$" ? "$" : s === "&" ? i[0] : +s < i.length ? i[+s] : `$${s}`) : r(...i, i.index, a, i.groups);
    }
    function o(i, a) {
      let c;
      const s = [];
      for (; c = i.exec(a); )
        s.push(c);
      return s;
    }
    if (e.global)
      o(e, this.original).forEach((a) => {
        if (a.index != null) {
          const c = n(a, this.original);
          c !== a[0] && this.overwrite(
            a.index,
            a.index + a[0].length,
            c
          );
        }
      });
    else {
      const i = this.original.match(e);
      if (i && i.index != null) {
        const a = n(i, this.original);
        a !== i[0] && this.overwrite(
          i.index,
          i.index + i[0].length,
          a
        );
      }
    }
    return this;
  }
  _replaceString(e, r) {
    const { original: n } = this, o = n.indexOf(e);
    return o !== -1 && this.overwrite(o, o + e.length, r), this;
  }
  replace(e, r) {
    return typeof e == "string" ? this._replaceString(e, r) : this._replaceRegexp(e, r);
  }
  _replaceAllString(e, r) {
    const { original: n } = this, o = e.length;
    for (let i = n.indexOf(e); i !== -1; i = n.indexOf(e, i + o))
      n.slice(i, i + o) !== r && this.overwrite(i, i + o, r);
    return this;
  }
  replaceAll(e, r) {
    if (typeof e == "string")
      return this._replaceAllString(e, r);
    if (!e.global)
      throw new TypeError(
        "MagicString.prototype.replaceAll called with a non-global RegExp argument"
      );
    return this._replaceRegexp(e, r);
  }
}
function Ee(t, e, r) {
  if (t === "")
    return;
  const n = t.length;
  let o = 0, i = !1, a = 0;
  for (let c = 0; c < n; c++)
    switch (t[c]) {
      case e:
        i || (i = !0, a = c), o++;
        break;
      case r:
        if (--o, o < 0)
          return;
        if (o === 0)
          return [
            t.slice(a, c + 1),
            t.slice(c + 1),
            t.slice(0, a)
          ];
        break;
    }
}
function se(t, e, r, n) {
  if (t === "" || (Y(n) && (n = [n]), n.length === 0))
    return;
  const o = t.length;
  let i = 0;
  for (let a = 0; a < o; a++)
    switch (t[a]) {
      case e:
        i++;
        break;
      case r:
        if (--i < 0)
          return;
        break;
      default:
        for (const c of n) {
          const s = c.length;
          if (s && c === t.slice(a, a + s) && i === 0)
            return a === 0 || a === o - s ? void 0 : [
              t.slice(0, a),
              t.slice(a + s)
            ];
        }
    }
  return [
    t,
    ""
  ];
}
function re(t, e, r) {
  r = r ?? 10;
  const n = [];
  let o = 0;
  for (; t !== ""; ) {
    if (++o > r)
      return;
    const i = se(t, "(", ")", e);
    if (!i)
      return;
    const [a, c] = i;
    n.push(a), t = c;
  }
  if (n.length > 0)
    return n;
}
const Ae = ["hsl", "hsla", "hwb", "lab", "lch", "oklab", "oklch", "rgb", "rgba"], Sr = ["%alpha", "<alpha-value>"], ui = new RegExp(Sr.map((t) => Pt(t)).join("|"));
function ft(t = "") {
  const e = di(t);
  if (e == null || e === !1)
    return;
  const { type: r, components: n, alpha: o } = e, i = r.toLowerCase();
  if (n.length !== 0 && !(Ae.includes(i) && ![1, 3].includes(n.length)))
    return {
      type: i,
      components: n.map((a) => typeof a == "string" ? a.trim() : a),
      alpha: typeof o == "string" ? o.trim() : o
    };
}
function ne(t) {
  const e = t.alpha ?? 1;
  return typeof e == "string" && Sr.includes(e) ? 1 : e;
}
function Z(t, e) {
  if (typeof t == "string")
    return t.replace(ui, `${e ?? 1}`);
  const { components: r } = t;
  let { alpha: n, type: o } = t;
  return n = e ?? n, o = o.toLowerCase(), ["hsla", "rgba"].includes(o) ? `${o}(${r.join(", ")}${n == null ? "" : `, ${n}`})` : (n = n == null ? "" : ` / ${n}`, Ae.includes(o) ? `${o}(${r.join(" ")}${n})` : `color(${o} ${r.join(" ")}${n})`);
}
function di(t) {
  if (!t)
    return;
  let e = pi(t);
  if (e != null || (e = mi(t), e != null) || (e = hi(t), e != null) || (e = bi(t), e != null) || (e = yi(t), e != null))
    return e;
}
function pi(t) {
  const [, e] = t.match(/^#([\da-f]+)$/i) || [];
  if (e)
    switch (e.length) {
      case 3:
      case 4:
        const r = Array.from(e, (o) => Number.parseInt(o, 16)).map((o) => o << 4 | o);
        return {
          type: "rgb",
          components: r.slice(0, 3),
          alpha: e.length === 3 ? void 0 : Math.round(r[3] / 255 * 100) / 100
        };
      case 6:
      case 8:
        const n = Number.parseInt(e, 16);
        return {
          type: "rgb",
          components: e.length === 6 ? [n >> 16 & 255, n >> 8 & 255, n & 255] : [n >> 24 & 255, n >> 16 & 255, n >> 8 & 255],
          alpha: e.length === 6 ? void 0 : Math.round((n & 255) / 255 * 100) / 100
        };
    }
}
function mi(t) {
  const e = {
    rebeccapurple: [102, 51, 153, 1]
  }[t];
  if (e != null)
    return {
      type: "rgb",
      components: e.slice(0, 3),
      alpha: e[3]
    };
}
function hi(t) {
  const e = t.match(/^(rgb|rgba|hsl|hsla)\((.+)\)$/i);
  if (!e)
    return;
  const [, r, n] = e, o = re(n, ",", 5);
  if (o) {
    if ([3, 4].includes(o.length))
      return {
        type: r,
        components: o.slice(0, 3),
        alpha: o[3]
      };
    if (o.length !== 1)
      return !1;
  }
}
const gi = new RegExp(`^(${Ae.join("|")})\\((.+)\\)$`, "i");
function bi(t) {
  const e = t.match(gi);
  if (!e)
    return;
  const [, r, n] = e, o = Cr(`${r} ${n}`);
  if (o) {
    const { alpha: i, components: [a, ...c] } = o;
    return {
      type: a,
      components: c,
      alpha: i
    };
  }
}
function yi(t) {
  const e = t.match(/^color\((.+)\)$/);
  if (!e)
    return;
  const r = Cr(e[1]);
  if (r) {
    const { alpha: n, components: [o, ...i] } = r;
    return {
      type: o,
      components: i,
      alpha: n
    };
  }
}
function Cr(t) {
  const e = re(t, " ");
  if (!e)
    return;
  let r = e.length;
  if (e[r - 2] === "/")
    return {
      components: e.slice(0, r - 2),
      alpha: e[r - 1]
    };
  if (e[r - 2] != null && (e[r - 2].endsWith("/") || e[r - 1].startsWith("/"))) {
    const i = e.splice(r - 2);
    e.push(i.join(" ")), --r;
  }
  const n = re(e[r - 1], "/", 2);
  if (!n)
    return;
  if (n.length === 1 || n[n.length - 1] === "")
    return { components: e };
  const o = n.pop();
  return e[r - 1] = n.join("/"), {
    components: e,
    alpha: o
  };
}
function xi(t) {
  const e = function(n) {
    var i;
    const o = ((i = this.__options) == null ? void 0 : i.sequence) || [];
    this.__options.sequence = [];
    for (const a of o) {
      const c = t[a](n);
      if (c != null)
        return c;
    }
  };
  function r(n, o) {
    return n.__options || (n.__options = {
      sequence: []
    }), n.__options.sequence.push(o), n;
  }
  for (const n of Object.keys(t))
    Object.defineProperty(e, n, {
      enumerable: !0,
      configurable: !0,
      get() {
        return r(this, n);
      }
    });
  return e;
}
function ct(t, e) {
  let r;
  return {
    name: t,
    match(n, o) {
      r || (r = new RegExp(`^${Pt(t)}(?:${o.generator.config.separators.join("|")})`));
      const i = n.match(r);
      if (i)
        return {
          matcher: n.slice(i[0].length),
          handle: (a, c) => c({
            ...a,
            ...e(a)
          })
        };
    },
    autocomplete: `${t}:`
  };
}
function rt(t, e) {
  let r;
  return {
    name: t,
    match(n, o) {
      r || (r = new RegExp(`^${Pt(t)}(?:${o.generator.config.separators.join("|")})`));
      const i = n.match(r);
      if (i)
        return {
          matcher: n.slice(i[0].length),
          handle: (a, c) => c({
            ...a,
            parent: `${a.parent ? `${a.parent} $$ ` : ""}${e}`
          })
        };
    },
    autocomplete: `${t}:`
  };
}
function Tt(t, e, r) {
  if (e.startsWith(`${t}[`)) {
    const [n, o] = Ee(e.slice(t.length), "[", "]") ?? [];
    if (n && o) {
      for (const i of r)
        if (o.startsWith(i))
          return [n, o.slice(i.length), i];
      return [n, o, ""];
    }
  }
}
function it(t, e, r) {
  if (e.startsWith(t)) {
    const n = Tt(t, e, r);
    if (n) {
      const [o = "", i = n[1]] = it("/", n[1], r) ?? [];
      return [n[0], i, o];
    }
    for (const o of r.filter((i) => i !== "/")) {
      const i = e.indexOf(o, t.length);
      if (i !== -1) {
        const a = e.indexOf("/", t.length), c = a === -1 || i <= a;
        return [
          e.slice(t.length, c ? i : a),
          e.slice(i + o.length),
          c ? "" : e.slice(a + 1, i)
        ];
      }
    }
  }
}
const $i = /theme\(\s*(['"])?(.*?)\1?\s*\)/g;
function vi(t) {
  return t.includes("theme(") && t.includes(")");
}
function wi(t, e, r = !0) {
  const n = Array.from(t.toString().matchAll($i));
  if (!n.length)
    return t;
  const o = new je(t);
  for (const i of n) {
    const a = i[2];
    if (!a)
      throw new Error("theme() expect exact one argument, but got 0");
    const c = ki(a, e, r);
    c && o.overwrite(
      i.index,
      i.index + i[0].length,
      c
    );
  }
  return o.toString();
}
function ki(t, e, r = !0) {
  const [n, o] = t.split("/");
  let a = n.trim().split(".").reduce((c, s) => c == null ? void 0 : c[s], e);
  if (typeof a == "string") {
    if (o) {
      const c = ft(a);
      c && (a = Z(c, o));
    }
    return a;
  } else if (r)
    throw new Error(`theme of "${t}" did not found`);
}
const J = {
  l: ["-left"],
  r: ["-right"],
  t: ["-top"],
  b: ["-bottom"],
  s: ["-inline-start"],
  e: ["-inline-end"],
  x: ["-left", "-right"],
  y: ["-top", "-bottom"],
  "": [""],
  bs: ["-block-start"],
  be: ["-block-end"],
  is: ["-inline-start"],
  ie: ["-inline-end"],
  block: ["-block-start", "-block-end"],
  inline: ["-inline-start", "-inline-end"]
}, qe = {
  ...J,
  s: ["-inset-inline-start"],
  start: ["-inset-inline-start"],
  e: ["-inset-inline-end"],
  end: ["-inset-inline-end"],
  bs: ["-inset-block-start"],
  be: ["-inset-block-end"],
  is: ["-inset-inline-start"],
  ie: ["-inset-inline-end"],
  block: ["-inset-block-start", "-inset-block-end"],
  inline: ["-inset-inline-start", "-inset-inline-end"]
}, Ge = {
  l: ["-top-left", "-bottom-left"],
  r: ["-top-right", "-bottom-right"],
  t: ["-top-left", "-top-right"],
  b: ["-bottom-left", "-bottom-right"],
  tl: ["-top-left"],
  lt: ["-top-left"],
  tr: ["-top-right"],
  rt: ["-top-right"],
  bl: ["-bottom-left"],
  lb: ["-bottom-left"],
  br: ["-bottom-right"],
  rb: ["-bottom-right"],
  "": [""],
  bs: ["-start-start", "-start-end"],
  be: ["-end-start", "-end-end"],
  s: ["-end-start", "-start-start"],
  is: ["-end-start", "-start-start"],
  e: ["-start-end", "-end-end"],
  ie: ["-start-end", "-end-end"],
  ss: ["-start-start"],
  "bs-is": ["-start-start"],
  "is-bs": ["-start-start"],
  se: ["-start-end"],
  "bs-ie": ["-start-end"],
  "ie-bs": ["-start-end"],
  es: ["-end-start"],
  "be-is": ["-end-start"],
  "is-be": ["-end-start"],
  ee: ["-end-end"],
  "be-ie": ["-end-end"],
  "ie-be": ["-end-end"]
}, Si = {
  x: ["-x"],
  y: ["-y"],
  z: ["-z"],
  "": ["-x", "-y"]
}, Ci = ["x", "y", "z"], He = [
  "top",
  "top center",
  "top left",
  "top right",
  "bottom",
  "bottom center",
  "bottom left",
  "bottom right",
  "left",
  "left center",
  "left top",
  "left bottom",
  "right",
  "right center",
  "right top",
  "right bottom",
  "center",
  "center top",
  "center bottom",
  "center left",
  "center right",
  "center center"
], K = Object.assign(
  {},
  ...He.map((t) => ({ [t.replace(/ /, "-")]: t })),
  ...He.map((t) => ({ [t.replace(/\b(\w)\w+/g, "$1").replace(/ /, "")]: t }))
), I = [
  "inherit",
  "initial",
  "revert",
  "revert-layer",
  "unset"
], _e = /^(calc|clamp|min|max)\s*\((.+)\)(.*)/, zr = /^(var)\s*\((.+)\)(.*)/, ce = /^(-?\d*(?:\.\d+)?)(px|pt|pc|%|r?(?:em|ex|lh|cap|ch|ic)|(?:[sld]?v|cq)(?:[whib]|min|max)|in|cm|mm|rpx)?$/i, jr = /^(-?\d*(?:\.\d+)?)$/, Er = /^(px|[sld]?v[wh])$/i, Ar = {
  px: 1,
  vw: 100,
  vh: 100,
  svw: 100,
  svh: 100,
  dvw: 100,
  dvh: 100,
  lvh: 100,
  lvw: 100
}, _r = /^\[(color|length|size|position|quoted|string):/i, zi = /,(?![^()]*\))/g, ji = [
  // basic props
  "color",
  "border-color",
  "background-color",
  "outline-color",
  "text-decoration-color",
  "flex-grow",
  "flex",
  "flex-shrink",
  "caret-color",
  "font",
  "gap",
  "opacity",
  "visibility",
  "z-index",
  "font-weight",
  "zoom",
  "text-shadow",
  "transform",
  "box-shadow",
  "border",
  // positions
  "background-position",
  "left",
  "right",
  "top",
  "bottom",
  "object-position",
  // sizes
  "max-height",
  "min-height",
  "max-width",
  "min-width",
  "height",
  "width",
  "border-width",
  "margin",
  "padding",
  "outline-width",
  "outline-offset",
  "font-size",
  "line-height",
  "text-indent",
  "vertical-align",
  "border-spacing",
  "letter-spacing",
  "word-spacing",
  // enhances
  "stroke",
  "filter",
  "backdrop-filter",
  "fill",
  "mask",
  "mask-size",
  "mask-border",
  "clip-path",
  "clip",
  "border-radius"
];
function tt(t) {
  return +t.toFixed(10);
}
function Ei(t) {
  const e = t.match(ce);
  if (!e)
    return;
  const [, r, n] = e, o = Number.parseFloat(r);
  if (n && !Number.isNaN(o))
    return `${tt(o)}${n}`;
}
function Ai(t) {
  if (t === "auto" || t === "a")
    return "auto";
}
function _i(t) {
  if (!t)
    return;
  if (Er.test(t))
    return `${Ar[t]}${t}`;
  const e = t.match(ce);
  if (!e)
    return;
  const [, r, n] = e, o = Number.parseFloat(r);
  if (!Number.isNaN(o))
    return o === 0 ? "0" : n ? `${tt(o)}${n}` : `${tt(o / 4)}rem`;
}
function Oi(t) {
  if (Er.test(t))
    return `${Ar[t]}${t}`;
  const e = t.match(ce);
  if (!e)
    return;
  const [, r, n] = e, o = Number.parseFloat(r);
  if (!Number.isNaN(o))
    return n ? `${tt(o)}${n}` : `${tt(o)}px`;
}
function Li(t) {
  if (!jr.test(t))
    return;
  const e = Number.parseFloat(t);
  if (!Number.isNaN(e))
    return tt(e);
}
function Ri(t) {
  if (t.endsWith("%") && (t = t.slice(0, -1)), !jr.test(t))
    return;
  const e = Number.parseFloat(t);
  if (!Number.isNaN(e))
    return `${tt(e / 100)}`;
}
function Mi(t) {
  if (!t)
    return;
  if (t === "full")
    return "100%";
  const [e, r] = t.split("/"), n = Number.parseFloat(e) / Number.parseFloat(r);
  if (!Number.isNaN(n))
    return n === 0 ? "0" : `${tt(n * 100)}%`;
}
function le(t, e) {
  if (t && t.startsWith("[") && t.endsWith("]")) {
    let r, n;
    const o = t.match(_r);
    if (o ? (e || (n = o[1]), r = t.slice(o[0].length, -1)) : r = t.slice(1, -1), !r || r === '=""')
      return;
    r.startsWith("--") && (r = `var(${r})`);
    let i = 0;
    for (const a of r)
      if (a === "[")
        i += 1;
      else if (a === "]" && (i -= 1, i < 0))
        return;
    if (i)
      return;
    switch (n) {
      case "string":
        return r.replace(/(^|[^\\])_/g, "$1 ").replace(/\\_/g, "_");
      case "quoted":
        return r.replace(/(^|[^\\])_/g, "$1 ").replace(/\\_/g, "_").replace(/(["\\])/g, "\\$1").replace(/^(.+)$/, '"$1"');
    }
    return r.replace(/(url\(.*?\))/g, (a) => a.replace(/_/g, "\\_")).replace(/(^|[^\\])_/g, "$1 ").replace(/\\_/g, "_").replace(/(?:calc|clamp|max|min)\((.*)/g, (a) => {
      const c = [];
      return a.replace(/var\((--.+?)[,)]/g, (s, l) => (c.push(l), s.replace(l, "--un-calc"))).replace(/(-?\d*\.?\d(?!-\d.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ").replace(/--un-calc/g, () => c.shift());
    });
  }
}
function Pi(t) {
  return le(t);
}
function Fi(t) {
  return le(t, "color");
}
function Ti(t) {
  return le(t, "length");
}
function Wi(t) {
  return le(t, "position");
}
function Ni(t) {
  if (/^\$[^\s'"`;{}]/.test(t)) {
    const [e, r] = t.slice(1).split(",");
    return `var(--${Rt(e)}${r ? `, ${r}` : ""})`;
  }
}
function Ui(t) {
  const e = t.match(/^(-?[0-9.]+)(s|ms)?$/i);
  if (!e)
    return;
  const [, r, n] = e, o = Number.parseFloat(r);
  if (!Number.isNaN(o))
    return o === 0 && !n ? "0s" : n ? `${tt(o)}${n}` : `${tt(o)}ms`;
}
function Bi(t) {
  const e = t.match(/^(-?[0-9.]+)(deg|rad|grad|turn)?$/i);
  if (!e)
    return;
  const [, r, n] = e, o = Number.parseFloat(r);
  if (!Number.isNaN(o))
    return o === 0 ? "0" : n ? `${tt(o)}${n}` : `${tt(o)}deg`;
}
function Di(t) {
  if (I.includes(t))
    return t;
}
function Ii(t) {
  if (t.split(",").every((e) => ji.includes(e)))
    return t;
}
function Vi(t) {
  if (["top", "left", "right", "bottom", "center"].includes(t))
    return t;
}
const Yi = {
  __proto__: null,
  auto: Ai,
  bracket: Pi,
  bracketOfColor: Fi,
  bracketOfLength: Ti,
  bracketOfPosition: Wi,
  cssvar: Ni,
  degree: Bi,
  fraction: Mi,
  global: Di,
  number: Li,
  numberWithUnit: Ei,
  percent: Ri,
  position: Vi,
  properties: Ii,
  px: Oi,
  rem: _i,
  time: Ui
}, Xi = xi(Yi), f = Xi, qi = "$$mini-no-negative";
function D(t) {
  return ([e, r, n], { theme: o }) => {
    var a, c;
    const i = ((a = o.spacing) == null ? void 0 : a[n || "DEFAULT"]) ?? f.bracket.cssvar.global.auto.fraction.rem(n);
    if (i != null)
      return J[r].map((s) => [`${t}${s}`, i]);
    if (n != null && n.startsWith("-")) {
      const s = (c = o.spacing) == null ? void 0 : c[n.slice(1)];
      if (s != null)
        return J[r].map((l) => [`${t}${l}`, `calc(${s} * -1)`]);
    }
  };
}
function Ke(t, e, r = "colors") {
  let n = t[r], o = -1;
  for (const i of e) {
    if (o += 1, n && typeof n != "string") {
      const a = e.slice(o).join("-").replace(/(-[a-z])/g, (c) => c.slice(1).toUpperCase());
      if (n[a])
        return n[a];
      if (n[i]) {
        n = n[i];
        continue;
      }
    }
    return;
  }
  return n;
}
function It(t, e, r) {
  return Ke(t, e, r) || Ke(t, e, "colors");
}
function Or(t, e) {
  const [r, n] = se(t, "[", "]", ["/", ":"]) ?? [];
  if (r != null) {
    const o = (r.match(_r) ?? [])[1];
    if (o == null || o === e)
      return [r, n];
  }
}
function fe(t, e, r) {
  const n = Or(t, "color");
  if (!n)
    return;
  const [o, i] = n, a = o.replace(/([a-z])(\d)/g, "$1-$2").split(/-/g), [c] = a;
  if (!c)
    return;
  let s;
  const l = f.bracketOfColor(o), p = l || o;
  if (f.numberWithUnit(p))
    return;
  if (/^#[\da-f]+$/i.test(p) ? s = p : /^hex-[\da-fA-F]+$/.test(p) ? s = `#${p.slice(4)}` : o.startsWith("$") && (s = f.cssvar(o)), s = s || l, !s) {
    const m = It(e, [o], r);
    typeof m == "string" && (s = m);
  }
  let u = "DEFAULT";
  if (!s) {
    let m;
    const [b] = a.slice(-1);
    /^\d+$/.test(b) ? (u = b, m = It(e, a.slice(0, -1), r), !m || typeof m == "string" ? s = void 0 : s = m[u]) : (m = It(e, a, r), !m && a.length <= 2 && ([, u = u] = a, m = It(e, [c], r)), typeof m == "string" ? s = m : u && m && (s = m[u]));
  }
  return {
    opacity: i,
    name: c,
    no: u,
    color: s,
    cssColor: ft(s),
    alpha: f.bracket.cssvar.percent(i ?? "")
  };
}
function H(t, e, r, n) {
  return ([, o], { theme: i, generator: a }) => {
    const c = fe(o, i, r);
    if (!c)
      return;
    const { alpha: s, color: l, cssColor: p } = c, m = a.config.envMode === "dev" && l ? ` /* ${l} */` : "", b = {};
    if (p)
      if (s != null)
        b[t] = Z(p, s) + m;
      else {
        const $ = `--un-${e}-opacity`, k = Z(p, `var(${$})`);
        k.includes($) && (b[$] = ne(p)), b[t] = k + m;
      }
    else if (l)
      if (s != null)
        b[t] = Z(l, s) + m;
      else {
        const $ = `--un-${e}-opacity`, k = Z(l, `var(${$})`);
        k.includes($) && (b[$] = 1), b[t] = k + m;
      }
    return b;
  };
}
function Oe(t, e) {
  const r = [];
  t = q(t);
  for (let n = 0; n < t.length; n++) {
    const o = re(t[n], " ", 6);
    if (!o || o.length < 3)
      return t;
    let i = !1;
    const a = o.indexOf("inset");
    a !== -1 && (o.splice(a, 1), i = !0);
    let c = "";
    const s = o.at(-1);
    if (ft(o.at(0))) {
      const l = ft(o.shift());
      l && (c = `, ${Z(l)}`);
    } else if (ft(s)) {
      const l = ft(o.pop());
      l && (c = `, ${Z(l)}`);
    } else s && zr.test(s) && (c = `, ${o.pop()}`);
    r.push(`${i ? "inset " : ""}${o.join(" ")} var(${e}${c})`);
  }
  return r;
}
function Le(t, e, r) {
  var n;
  return t != null && !!((n = fe(t, e, r)) != null && n.color);
}
const Ze = /[a-z]+/gi, he = /* @__PURE__ */ new WeakMap();
function ue({ theme: t, generator: e }, r = "breakpoints") {
  var i, a;
  const n = ((a = (i = e == null ? void 0 : e.userConfig) == null ? void 0 : i.theme) == null ? void 0 : a[r]) || t[r];
  if (!n)
    return;
  if (he.has(t))
    return he.get(t);
  const o = Object.entries(n).sort((c, s) => Number.parseInt(c[1].replace(Ze, "")) - Number.parseInt(s[1].replace(Ze, ""))).map(([c, s]) => ({ point: c, size: s }));
  return he.set(t, o), o;
}
function O(t, e) {
  return I.map((r) => [`${t}-${r}`, { [e ?? t]: r }]);
}
function $t(t) {
  return t != null && _e.test(t);
}
function Gi(t) {
  return t[0] === "[" && t.slice(-1) === "]" && (t = t.slice(1, -1)), _e.test(t) || ce.test(t);
}
function Re(t, e, r) {
  const n = e.split(zi);
  return t || !t && n.length === 1 ? Si[t].map((o) => [`--un-${r}${o}`, e]) : n.map((o, i) => [`--un-${r}-${Ci[i]}`, o]);
}
const Lr = {
  inherit: "inherit",
  current: "currentColor",
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  rose: {
    50: "#fff1f2",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519"
  },
  pink: {
    50: "#fdf2f8",
    100: "#fce7f3",
    200: "#fbcfe8",
    300: "#f9a8d4",
    400: "#f472b6",
    500: "#ec4899",
    600: "#db2777",
    700: "#be185d",
    800: "#9d174d",
    900: "#831843",
    950: "#500724"
  },
  fuchsia: {
    50: "#fdf4ff",
    100: "#fae8ff",
    200: "#f5d0fe",
    300: "#f0abfc",
    400: "#e879f9",
    500: "#d946ef",
    600: "#c026d3",
    700: "#a21caf",
    800: "#86198f",
    900: "#701a75",
    950: "#4a044e"
  },
  purple: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  violet: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
    950: "#2e1065"
  },
  indigo: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  blue: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
    950: "#172554"
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c4a6e",
    950: "#082f49"
  },
  cyan: {
    50: "#ecfeff",
    100: "#cffafe",
    200: "#a5f3fc",
    300: "#67e8f9",
    400: "#22d3ee",
    500: "#06b6d4",
    600: "#0891b2",
    700: "#0e7490",
    800: "#155e75",
    900: "#164e63",
    950: "#083344"
  },
  teal: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  emerald: {
    50: "#ecfdf5",
    100: "#d1fae5",
    200: "#a7f3d0",
    300: "#6ee7b7",
    400: "#34d399",
    500: "#10b981",
    600: "#059669",
    700: "#047857",
    800: "#065f46",
    900: "#064e3b",
    950: "#022c22"
  },
  green: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16"
  },
  lime: {
    50: "#f7fee7",
    100: "#ecfccb",
    200: "#d9f99d",
    300: "#bef264",
    400: "#a3e635",
    500: "#84cc16",
    600: "#65a30d",
    700: "#4d7c0f",
    800: "#3f6212",
    900: "#365314",
    950: "#1a2e05"
  },
  yellow: {
    50: "#fefce8",
    100: "#fef9c3",
    200: "#fef08a",
    300: "#fde047",
    400: "#facc15",
    500: "#eab308",
    600: "#ca8a04",
    700: "#a16207",
    800: "#854d0e",
    900: "#713f12",
    950: "#422006"
  },
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03"
  },
  orange: {
    50: "#fff7ed",
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74",
    400: "#fb923c",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407"
  },
  red: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  },
  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617"
  },
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b"
  },
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a"
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
    950: "#0c0a09"
  },
  light: {
    50: "#fdfdfd",
    100: "#fcfcfc",
    200: "#fafafa",
    300: "#f8f9fa",
    400: "#f6f6f6",
    500: "#f2f2f2",
    600: "#f1f3f5",
    700: "#e9ecef",
    800: "#dee2e6",
    900: "#dde1e3",
    950: "#d8dcdf"
  },
  dark: {
    50: "#4a4a4a",
    100: "#3c3c3c",
    200: "#323232",
    300: "#2d2d2d",
    400: "#222222",
    500: "#1f1f1f",
    600: "#1c1c1e",
    700: "#1b1b1b",
    800: "#181818",
    900: "#0f0f0f",
    950: "#080808"
  },
  get lightblue() {
    return this.sky;
  },
  get lightBlue() {
    return this.sky;
  },
  get warmgray() {
    return this.stone;
  },
  get warmGray() {
    return this.stone;
  },
  get truegray() {
    return this.neutral;
  },
  get trueGray() {
    return this.neutral;
  },
  get coolgray() {
    return this.gray;
  },
  get coolGray() {
    return this.gray;
  },
  get bluegray() {
    return this.slate;
  },
  get blueGray() {
    return this.slate;
  }
};
Object.values(Lr).forEach((t) => {
  typeof t != "string" && t !== void 0 && (t.DEFAULT = t.DEFAULT || t[400], Object.keys(t).forEach((e) => {
    const r = +e / 100;
    r === Math.round(r) && (t[r] = t[e]);
  }));
});
const Hi = ["auto", "default", "none", "context-menu", "help", "pointer", "progress", "wait", "cell", "crosshair", "text", "vertical-text", "alias", "copy", "move", "no-drop", "not-allowed", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out"], Ki = ["none", "strict", "content", "size", "inline-size", "layout", "style", "paint"], T = " ", Rr = [
  ["inline", { display: "inline" }],
  ["block", { display: "block" }],
  ["inline-block", { display: "inline-block" }],
  ["contents", { display: "contents" }],
  ["flow-root", { display: "flow-root" }],
  ["list-item", { display: "list-item" }],
  ["hidden", { display: "none" }],
  [/^display-(.+)$/, ([, t]) => ({ display: f.bracket.cssvar.global(t) })]
], Mr = [
  ["visible", { visibility: "visible" }],
  ["invisible", { visibility: "hidden" }],
  ["backface-visible", { "backface-visibility": "visible" }],
  ["backface-hidden", { "backface-visibility": "hidden" }],
  ...O("backface", "backface-visibility")
], Pr = [
  [/^cursor-(.+)$/, ([, t]) => ({ cursor: f.bracket.cssvar.global(t) })],
  ...Hi.map((t) => [`cursor-${t}`, { cursor: t }])
], Fr = [
  [/^contain-(.*)$/, ([, t]) => f.bracket(t) != null ? {
    contain: f.bracket(t).split(" ").map((e) => f.cssvar.fraction(e) ?? e).join(" ")
  } : Ki.includes(t) ? { contain: t } : void 0]
], Tr = [
  ["pointer-events-auto", { "pointer-events": "auto" }],
  ["pointer-events-none", { "pointer-events": "none" }],
  ...O("pointer-events")
], Wr = [
  ["resize-x", { resize: "horizontal" }],
  ["resize-y", { resize: "vertical" }],
  ["resize", { resize: "both" }],
  ["resize-none", { resize: "none" }],
  ...O("resize")
], Nr = [
  ["select-auto", { "-webkit-user-select": "auto", "user-select": "auto" }],
  ["select-all", { "-webkit-user-select": "all", "user-select": "all" }],
  ["select-text", { "-webkit-user-select": "text", "user-select": "text" }],
  ["select-none", { "-webkit-user-select": "none", "user-select": "none" }],
  ...O("select", "user-select")
], Ur = [
  [
    /^(?:whitespace-|ws-)([-\w]+)$/,
    ([, t]) => ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces", ...I].includes(t) ? { "white-space": t } : void 0,
    { autocomplete: "(whitespace|ws)-(normal|nowrap|pre|pre-line|pre-wrap|break-spaces)" }
  ]
], Br = [
  [/^intrinsic-size-(.+)$/, ([, t]) => ({ "contain-intrinsic-size": f.bracket.cssvar.global.fraction.rem(t) }), { autocomplete: "intrinsic-size-<num>" }],
  ["content-visibility-visible", { "content-visibility": "visible" }],
  ["content-visibility-hidden", { "content-visibility": "hidden" }],
  ["content-visibility-auto", { "content-visibility": "auto" }],
  ...O("content-visibility")
], Dr = [
  [/^content-(.+)$/, ([, t]) => ({ content: f.bracket.cssvar(t) })],
  ["content-empty", { content: '""' }],
  ["content-none", { content: "none" }]
], Ir = [
  ["break-normal", { "overflow-wrap": "normal", "word-break": "normal" }],
  ["break-words", { "overflow-wrap": "break-word" }],
  ["break-all", { "word-break": "break-all" }],
  ["break-keep", { "word-break": "keep-all" }],
  ["break-anywhere", { "overflow-wrap": "anywhere" }]
], Vr = [
  ["text-wrap", { "text-wrap": "wrap" }],
  ["text-nowrap", { "text-wrap": "nowrap" }],
  ["text-balance", { "text-wrap": "balance" }],
  ["text-pretty", { "text-wrap": "pretty" }]
], Yr = [
  ["truncate", { overflow: "hidden", "text-overflow": "ellipsis", "white-space": "nowrap" }],
  ["text-truncate", { overflow: "hidden", "text-overflow": "ellipsis", "white-space": "nowrap" }],
  ["text-ellipsis", { "text-overflow": "ellipsis" }],
  ["text-clip", { "text-overflow": "clip" }]
], Xr = [
  ["case-upper", { "text-transform": "uppercase" }],
  ["case-lower", { "text-transform": "lowercase" }],
  ["case-capital", { "text-transform": "capitalize" }],
  ["case-normal", { "text-transform": "none" }],
  ...O("case", "text-transform")
], qr = [
  ["italic", { "font-style": "italic" }],
  ["not-italic", { "font-style": "normal" }],
  ["font-italic", { "font-style": "italic" }],
  ["font-not-italic", { "font-style": "normal" }],
  ["oblique", { "font-style": "oblique" }],
  ["not-oblique", { "font-style": "normal" }],
  ["font-oblique", { "font-style": "oblique" }],
  ["font-not-oblique", { "font-style": "normal" }]
], Gr = [
  ["antialiased", {
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale"
  }],
  ["subpixel-antialiased", {
    "-webkit-font-smoothing": "auto",
    "-moz-osx-font-smoothing": "auto"
  }]
], Hr = {
  "--un-ring-inset": T,
  "--un-ring-offset-width": "0px",
  "--un-ring-offset-color": "#fff",
  "--un-ring-width": "0px",
  "--un-ring-color": "rgb(147 197 253 / 0.5)",
  "--un-shadow": "0 0 rgb(0 0 0 / 0)"
}, Kr = [
  // ring
  [/^ring(?:-(.+))?$/, ([, t], { theme: e }) => {
    var n;
    const r = ((n = e.ringWidth) == null ? void 0 : n[t || "DEFAULT"]) ?? f.px(t || "1");
    if (r)
      return {
        "--un-ring-width": r,
        "--un-ring-offset-shadow": "var(--un-ring-inset) 0 0 0 var(--un-ring-offset-width) var(--un-ring-offset-color)",
        "--un-ring-shadow": "var(--un-ring-inset) 0 0 0 calc(var(--un-ring-width) + var(--un-ring-offset-width)) var(--un-ring-color)",
        "box-shadow": "var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow)"
      };
  }, { autocomplete: "ring-$ringWidth" }],
  // size
  [/^ring-(?:width-|size-)(.+)$/, Zr, { autocomplete: "ring-(width|size)-$lineWidth" }],
  // offset size
  ["ring-offset", { "--un-ring-offset-width": "1px" }],
  [/^ring-offset-(?:width-|size-)?(.+)$/, ([, t], { theme: e }) => {
    var r;
    return { "--un-ring-offset-width": ((r = e.lineWidth) == null ? void 0 : r[t]) ?? f.bracket.cssvar.px(t) };
  }, { autocomplete: "ring-offset-(width|size)-$lineWidth" }],
  // colors
  [/^ring-(.+)$/, Zi, { autocomplete: "ring-$colors" }],
  [/^ring-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-ring-opacity": f.bracket.percent.cssvar(t) }), { autocomplete: "ring-(op|opacity)-<percent>" }],
  // offset color
  [/^ring-offset-(.+)$/, H("--un-ring-offset-color", "ring-offset", "borderColor"), { autocomplete: "ring-offset-$colors" }],
  [/^ring-offset-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-ring-offset-opacity": f.bracket.percent.cssvar(t) }), { autocomplete: "ring-offset-(op|opacity)-<percent>" }],
  // style
  ["ring-inset", { "--un-ring-inset": "inset" }]
];
function Zr([, t], { theme: e }) {
  var r;
  return { "--un-ring-width": ((r = e.ringWidth) == null ? void 0 : r[t]) ?? f.bracket.cssvar.px(t) };
}
function Zi(t, e) {
  return $t(f.bracket(t[1])) ? Zr(t, e) : H("--un-ring-color", "ring", "borderColor")(t, e);
}
const Jr = {
  "--un-ring-offset-shadow": "0 0 rgb(0 0 0 / 0)",
  "--un-ring-shadow": "0 0 rgb(0 0 0 / 0)",
  "--un-shadow-inset": T,
  "--un-shadow": "0 0 rgb(0 0 0 / 0)"
}, Qr = [
  // color
  [/^shadow(?:-(.+))?$/, (t, e) => {
    var a;
    const [, r] = t, { theme: n } = e, o = (a = n.boxShadow) == null ? void 0 : a[r || "DEFAULT"], i = r ? f.bracket.cssvar(r) : void 0;
    return (o != null || i != null) && !Le(i, n, "shadowColor") ? {
      "--un-shadow": Oe(o || i, "--un-shadow-color").join(","),
      "box-shadow": "var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow)"
    } : H("--un-shadow-color", "shadow", "shadowColor")(t, e);
  }, { autocomplete: ["shadow-$colors", "shadow-$boxShadow"] }],
  [/^shadow-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-shadow-opacity": f.bracket.percent.cssvar(t) }), { autocomplete: "shadow-(op|opacity)-<percent>" }],
  // inset
  ["shadow-inset", { "--un-shadow-inset": "inset" }]
], Vt = [
  "translate",
  "rotate",
  "scale"
], Ji = [
  "translateX(var(--un-translate-x))",
  "translateY(var(--un-translate-y))",
  // 'translateZ(var(--un-translate-z))',
  "rotate(var(--un-rotate))",
  // 'rotateX(var(--un-rotate-x))',
  // 'rotateY(var(--un-rotate-y))',
  "rotateZ(var(--un-rotate-z))",
  "skewX(var(--un-skew-x))",
  "skewY(var(--un-skew-y))",
  "scaleX(var(--un-scale-x))",
  "scaleY(var(--un-scale-y))"
  // 'scaleZ(var(--un-scale-z))',
].join(" "), xt = [
  "translateX(var(--un-translate-x))",
  "translateY(var(--un-translate-y))",
  "translateZ(var(--un-translate-z))",
  "rotate(var(--un-rotate))",
  "rotateX(var(--un-rotate-x))",
  "rotateY(var(--un-rotate-y))",
  "rotateZ(var(--un-rotate-z))",
  "skewX(var(--un-skew-x))",
  "skewY(var(--un-skew-y))",
  "scaleX(var(--un-scale-x))",
  "scaleY(var(--un-scale-y))",
  "scaleZ(var(--un-scale-z))"
].join(" "), Qi = [
  "translate3d(var(--un-translate-x), var(--un-translate-y), var(--un-translate-z))",
  "rotate(var(--un-rotate))",
  "rotateX(var(--un-rotate-x))",
  "rotateY(var(--un-rotate-y))",
  "rotateZ(var(--un-rotate-z))",
  "skewX(var(--un-skew-x))",
  "skewY(var(--un-skew-y))",
  "scaleX(var(--un-scale-x))",
  "scaleY(var(--un-scale-y))",
  "scaleZ(var(--un-scale-z))"
].join(" "), tn = {
  // transform
  "--un-rotate": 0,
  "--un-rotate-x": 0,
  "--un-rotate-y": 0,
  "--un-rotate-z": 0,
  "--un-scale-x": 1,
  "--un-scale-y": 1,
  "--un-scale-z": 1,
  "--un-skew-x": 0,
  "--un-skew-y": 0,
  "--un-translate-x": 0,
  "--un-translate-y": 0,
  "--un-translate-z": 0
}, en = [
  // origins
  [/^(?:transform-)?origin-(.+)$/, ([, t]) => ({ "transform-origin": K[t] ?? f.bracket.cssvar(t) }), { autocomplete: [`transform-origin-(${Object.keys(K).join("|")})`, `origin-(${Object.keys(K).join("|")})`] }],
  // perspectives
  [/^(?:transform-)?perspect(?:ive)?-(.+)$/, ([, t]) => {
    const e = f.bracket.cssvar.px.numberWithUnit(t);
    if (e != null)
      return {
        "-webkit-perspective": e,
        perspective: e
      };
  }],
  // skip 1 & 2 letters shortcut
  [/^(?:transform-)?perspect(?:ive)?-origin-(.+)$/, ([, t]) => {
    const e = f.bracket.cssvar(t) ?? (t.length >= 3 ? K[t] : void 0);
    if (e != null)
      return {
        "-webkit-perspective-origin": e,
        "perspective-origin": e
      };
  }],
  // modifiers
  [/^(?:transform-)?translate-()(.+)$/, Je],
  [/^(?:transform-)?translate-([xyz])-(.+)$/, Je],
  [/^(?:transform-)?rotate-()(.+)$/, tr],
  [/^(?:transform-)?rotate-([xyz])-(.+)$/, tr],
  [/^(?:transform-)?skew-()(.+)$/, er],
  [/^(?:transform-)?skew-([xy])-(.+)$/, er, { autocomplete: ["transform-skew-(x|y)-<percent>", "skew-(x|y)-<percent>"] }],
  [/^(?:transform-)?scale-()(.+)$/, Qe],
  [/^(?:transform-)?scale-([xyz])-(.+)$/, Qe, { autocomplete: [`transform-(${Vt.join("|")})-<percent>`, `transform-(${Vt.join("|")})-(x|y|z)-<percent>`, `(${Vt.join("|")})-<percent>`, `(${Vt.join("|")})-(x|y|z)-<percent>`] }],
  // style
  [/^(?:transform-)?preserve-3d$/, () => ({ "transform-style": "preserve-3d" })],
  [/^(?:transform-)?preserve-flat$/, () => ({ "transform-style": "flat" })],
  // base
  ["transform", { transform: xt }],
  ["transform-cpu", { transform: Ji }],
  ["transform-gpu", { transform: Qi }],
  ["transform-none", { transform: "none" }],
  ...O("transform")
];
function Je([, t, e], { theme: r }) {
  var o;
  const n = ((o = r.spacing) == null ? void 0 : o[e]) ?? f.bracket.cssvar.fraction.rem(e);
  if (n != null)
    return [
      ...Re(t, n, "translate"),
      ["transform", xt]
    ];
}
function Qe([, t, e]) {
  const r = f.bracket.cssvar.fraction.percent(e);
  if (r != null)
    return [
      ...Re(t, r, "scale"),
      ["transform", xt]
    ];
}
function tr([, t = "", e]) {
  const r = f.bracket.cssvar.degree(e);
  if (r != null)
    return t ? {
      "--un-rotate": 0,
      [`--un-rotate-${t}`]: r,
      transform: xt
    } : {
      "--un-rotate-x": 0,
      "--un-rotate-y": 0,
      "--un-rotate-z": 0,
      "--un-rotate": r,
      transform: xt
    };
}
function er([, t, e]) {
  const r = f.bracket.cssvar.degree(e);
  if (r != null)
    return [
      ...Re(t, r, "skew"),
      ["transform", xt]
    ];
}
const ta = {
  sans: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    '"Noto Sans"',
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"'
  ].join(","),
  serif: [
    "ui-serif",
    "Georgia",
    "Cambria",
    '"Times New Roman"',
    "Times",
    "serif"
  ].join(","),
  mono: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    '"Liberation Mono"',
    '"Courier New"',
    "monospace"
  ].join(",")
}, ea = {
  xs: ["0.75rem", "1rem"],
  sm: ["0.875rem", "1.25rem"],
  base: ["1rem", "1.5rem"],
  lg: ["1.125rem", "1.75rem"],
  xl: ["1.25rem", "1.75rem"],
  "2xl": ["1.5rem", "2rem"],
  "3xl": ["1.875rem", "2.25rem"],
  "4xl": ["2.25rem", "2.5rem"],
  "5xl": ["3rem", "1"],
  "6xl": ["3.75rem", "1"],
  "7xl": ["4.5rem", "1"],
  "8xl": ["6rem", "1"],
  "9xl": ["8rem", "1"]
}, ra = {
  DEFAULT: "1.5rem",
  xs: "0.5rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "2.5rem",
  "2xl": "3rem",
  "3xl": "4rem"
}, na = {
  DEFAULT: "1.5rem",
  none: "0",
  sm: "thin",
  md: "medium",
  lg: "thick"
}, oa = {
  DEFAULT: ["0 0 1px rgb(0 0 0 / 0.2)", "0 0 1px rgb(1 0 5 / 0.1)"],
  none: "0 0 rgb(0 0 0 / 0)",
  sm: "1px 1px 3px rgb(36 37 47 / 0.25)",
  md: ["0 1px 2px rgb(30 29 39 / 0.19)", "1px 2px 4px rgb(54 64 147 / 0.18)"],
  lg: ["3px 3px 6px rgb(0 0 0 / 0.26)", "0 0 5px rgb(15 3 86 / 0.22)"],
  xl: ["1px 1px 3px rgb(0 0 0 / 0.29)", "2px 4px 7px rgb(73 64 125 / 0.35)"]
}, ia = {
  none: "1",
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  loose: "2"
}, rn = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0em",
  wide: "0.025em",
  wider: "0.05em",
  widest: "0.1em"
}, aa = {
  thin: "100",
  extralight: "200",
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
  black: "900"
  // int[0, 900] -> int
}, sa = rn, nn = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
}, ca = { ...nn }, la = {
  DEFAULT: "1px",
  none: "0"
}, fa = {
  DEFAULT: "1rem",
  none: "0",
  xs: "0.75rem",
  sm: "0.875rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem"
}, ua = {
  DEFAULT: "150ms",
  none: "0s",
  75: "75ms",
  100: "100ms",
  150: "150ms",
  200: "200ms",
  300: "300ms",
  500: "500ms",
  700: "700ms",
  1e3: "1000ms"
}, da = {
  DEFAULT: "0.25rem",
  none: "0",
  sm: "0.125rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, pa = {
  DEFAULT: ["var(--un-shadow-inset) 0 1px 3px 0 rgb(0 0 0 / 0.1)", "var(--un-shadow-inset) 0 1px 2px -1px rgb(0 0 0 / 0.1)"],
  none: "0 0 rgb(0 0 0 / 0)",
  sm: "var(--un-shadow-inset) 0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: ["var(--un-shadow-inset) 0 4px 6px -1px rgb(0 0 0 / 0.1)", "var(--un-shadow-inset) 0 2px 4px -2px rgb(0 0 0 / 0.1)"],
  lg: ["var(--un-shadow-inset) 0 10px 15px -3px rgb(0 0 0 / 0.1)", "var(--un-shadow-inset) 0 4px 6px -4px rgb(0 0 0 / 0.1)"],
  xl: ["var(--un-shadow-inset) 0 20px 25px -5px rgb(0 0 0 / 0.1)", "var(--un-shadow-inset) 0 8px 10px -6px rgb(0 0 0 / 0.1)"],
  "2xl": "var(--un-shadow-inset) 0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"
}, ma = {
  DEFAULT: "3px",
  none: "0"
}, ha = {
  auto: "auto"
}, ga = {
  mouse: "(hover) and (pointer: fine)"
}, ba = {
  DEFAULT: "8px",
  0: "0",
  sm: "4px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, ya = {
  DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
  sm: "0 1px 1px rgb(0 0 0 / 0.05)",
  md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
  lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
  xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
  "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
  none: "0 0 rgb(0 0 0 / 0)"
}, Wt = {
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  prose: "65ch"
}, rr = {
  auto: "auto",
  ...Wt,
  screen: "100vw"
}, Yt = {
  none: "none",
  ...Wt,
  screen: "100vw"
}, nr = {
  auto: "auto",
  ...Wt,
  screen: "100vh"
}, Xt = {
  none: "none",
  ...Wt,
  screen: "100vh"
}, xa = Object.fromEntries(Object.entries(Wt).map(([t, e]) => [t, `(min-width: ${e})`])), $a = {
  ...tn,
  ...Jr,
  ...Hr
}, va = {
  DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
  linear: "linear",
  in: "cubic-bezier(0.4, 0, 1, 1)",
  out: "cubic-bezier(0, 0, 0.2, 1)",
  "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, wa = {
  none: "none",
  all: "all",
  colors: ["color", "background-color", "border-color", "outline-color", "text-decoration-color", "fill", "stroke"].join(","),
  opacity: "opacity",
  shadow: "box-shadow",
  transform: "transform",
  get DEFAULT() {
    return [this.colors, "opacity", "box-shadow", "transform", "filter", "backdrop-filter"].join(",");
  }
}, on = {
  width: rr,
  height: nr,
  maxWidth: Yt,
  maxHeight: Xt,
  minWidth: Yt,
  minHeight: Xt,
  inlineSize: rr,
  blockSize: nr,
  maxInlineSize: Yt,
  maxBlockSize: Xt,
  minInlineSize: Yt,
  minBlockSize: Xt,
  colors: Lr,
  fontFamily: ta,
  fontSize: ea,
  fontWeight: aa,
  breakpoints: nn,
  verticalBreakpoints: ca,
  borderRadius: da,
  lineHeight: ia,
  letterSpacing: rn,
  wordSpacing: sa,
  boxShadow: pa,
  textIndent: ra,
  textShadow: oa,
  textStrokeWidth: na,
  blur: ba,
  dropShadow: ya,
  easing: va,
  transitionProperty: wa,
  lineWidth: la,
  spacing: fa,
  duration: ua,
  ringWidth: ma,
  preflightBase: $a,
  containers: xa,
  zIndex: ha,
  media: ga
}, or = {
  mid: "middle",
  base: "baseline",
  btm: "bottom",
  baseline: "baseline",
  top: "top",
  start: "top",
  middle: "middle",
  bottom: "bottom",
  end: "bottom",
  "text-top": "text-top",
  "text-bottom": "text-bottom",
  sub: "sub",
  super: "super",
  ...Object.fromEntries(I.map((t) => [t, t]))
}, an = [
  [
    /^(?:vertical|align|v)-([-\w]+%?)$/,
    ([, t]) => ({ "vertical-align": or[t] ?? f.numberWithUnit(t) }),
    {
      autocomplete: [
        `(vertical|align|v)-(${Object.keys(or).join("|")})`,
        "(vertical|align|v)-<percentage>"
      ]
    }
  ]
], ir = ["center", "left", "right", "justify", "start", "end"], sn = [
  ...ir.map((t) => [`text-${t}`, { "text-align": t }]),
  ...[
    ...I,
    ...ir
  ].map((t) => [`text-align-${t}`, { "text-align": t }])
], cn = [
  // size
  [/^outline-(?:width-|size-)?(.+)$/, ln, { autocomplete: "outline-(width|size)-<num>" }],
  // color
  [/^outline-(?:color-)?(.+)$/, ka, { autocomplete: "outline-$colors" }],
  // offset
  [/^outline-offset-(.+)$/, ([, t], { theme: e }) => {
    var r;
    return { "outline-offset": ((r = e.lineWidth) == null ? void 0 : r[t]) ?? f.bracket.cssvar.global.px(t) };
  }, { autocomplete: "outline-(offset)-<num>" }],
  // style
  ["outline", { "outline-style": "solid" }],
  ...["auto", "dashed", "dotted", "double", "hidden", "solid", "groove", "ridge", "inset", "outset", ...I].map((t) => [`outline-${t}`, { "outline-style": t }]),
  ["outline-none", { outline: "2px solid transparent", "outline-offset": "2px" }]
];
function ln([, t], { theme: e }) {
  var r;
  return { "outline-width": ((r = e.lineWidth) == null ? void 0 : r[t]) ?? f.bracket.cssvar.global.px(t) };
}
function ka(t, e) {
  return $t(f.bracket(t[1])) ? ln(t, e) : H("outline-color", "outline-color", "borderColor")(t, e);
}
const fn = [
  ["appearance-auto", { "-webkit-appearance": "auto", appearance: "auto" }],
  ["appearance-none", { "-webkit-appearance": "none", appearance: "none" }]
];
function Sa(t) {
  return f.properties.auto.global(t) ?? {
    contents: "contents",
    scroll: "scroll-position"
  }[t];
}
const un = [
  [/^will-change-(.+)/, ([, t]) => ({ "will-change": Sa(t) })]
], yt = ["solid", "dashed", "dotted", "double", "hidden", "none", "groove", "ridge", "inset", "outset", ...I], dn = [
  // compound
  [/^(?:border|b)()(?:-(.+))?$/, et, { autocomplete: "(border|b)-<directions>" }],
  [/^(?:border|b)-([xy])(?:-(.+))?$/, et],
  [/^(?:border|b)-([rltbse])(?:-(.+))?$/, et],
  [/^(?:border|b)-(block|inline)(?:-(.+))?$/, et],
  [/^(?:border|b)-([bi][se])(?:-(.+))?$/, et],
  // size
  [/^(?:border|b)-()(?:width|size)-(.+)$/, et, { autocomplete: ["(border|b)-<num>", "(border|b)-<directions>-<num>"] }],
  [/^(?:border|b)-([xy])-(?:width|size)-(.+)$/, et],
  [/^(?:border|b)-([rltbse])-(?:width|size)-(.+)$/, et],
  [/^(?:border|b)-(block|inline)-(?:width|size)-(.+)$/, et],
  [/^(?:border|b)-([bi][se])-(?:width|size)-(.+)$/, et],
  // colors
  [/^(?:border|b)-()(?:color-)?(.+)$/, jt, { autocomplete: ["(border|b)-$colors", "(border|b)-<directions>-$colors"] }],
  [/^(?:border|b)-([xy])-(?:color-)?(.+)$/, jt],
  [/^(?:border|b)-([rltbse])-(?:color-)?(.+)$/, jt],
  [/^(?:border|b)-(block|inline)-(?:color-)?(.+)$/, jt],
  [/^(?:border|b)-([bi][se])-(?:color-)?(.+)$/, jt],
  // opacity
  [/^(?:border|b)-()op(?:acity)?-?(.+)$/, Et, { autocomplete: "(border|b)-(op|opacity)-<percent>" }],
  [/^(?:border|b)-([xy])-op(?:acity)?-?(.+)$/, Et],
  [/^(?:border|b)-([rltbse])-op(?:acity)?-?(.+)$/, Et],
  [/^(?:border|b)-(block|inline)-op(?:acity)?-?(.+)$/, Et],
  [/^(?:border|b)-([bi][se])-op(?:acity)?-?(.+)$/, Et],
  // radius
  [/^(?:border-|b-)?(?:rounded|rd)()(?:-(.+))?$/, At, { autocomplete: ["(border|b)-(rounded|rd)", "(border|b)-(rounded|rd)-$borderRadius", "(rounded|rd)", "(rounded|rd)-$borderRadius"] }],
  [/^(?:border-|b-)?(?:rounded|rd)-([rltbse])(?:-(.+))?$/, At],
  [/^(?:border-|b-)?(?:rounded|rd)-([rltb]{2})(?:-(.+))?$/, At],
  [/^(?:border-|b-)?(?:rounded|rd)-([bise][se])(?:-(.+))?$/, At],
  [/^(?:border-|b-)?(?:rounded|rd)-([bi][se]-[bi][se])(?:-(.+))?$/, At],
  // style
  [/^(?:border|b)-(?:style-)?()(.+)$/, _t, { autocomplete: ["(border|b)-style", `(border|b)-(${yt.join("|")})`, "(border|b)-<directions>-style", `(border|b)-<directions>-(${yt.join("|")})`, `(border|b)-<directions>-style-(${yt.join("|")})`, `(border|b)-style-(${yt.join("|")})`] }],
  [/^(?:border|b)-([xy])-(?:style-)?(.+)$/, _t],
  [/^(?:border|b)-([rltbse])-(?:style-)?(.+)$/, _t],
  [/^(?:border|b)-(block|inline)-(?:style-)?(.+)$/, _t],
  [/^(?:border|b)-([bi][se])-(?:style-)?(.+)$/, _t]
];
function ar(t, e, r) {
  if (e != null)
    return {
      [`border${r}-color`]: Z(t, e)
    };
  if (r === "") {
    const n = {}, o = "--un-border-opacity", i = Z(t, `var(${o})`);
    return i.includes(o) && (n[o] = typeof t == "string" ? 1 : ne(t)), n["border-color"] = i, n;
  } else {
    const n = {}, o = "--un-border-opacity", i = `--un-border${r}-opacity`, a = Z(t, `var(${i})`);
    return a.includes(i) && (n[o] = typeof t == "string" ? 1 : ne(t), n[i] = `var(${o})`), n[`border${r}-color`] = a, n;
  }
}
function Ca(t) {
  return ([, e], r) => {
    const n = fe(e, r, "borderColor");
    if (!n)
      return;
    const { alpha: o, color: i, cssColor: a } = n;
    if (a)
      return ar(a, o, t);
    if (i)
      return ar(i, o, t);
  };
}
function et([, t = "", e], { theme: r }) {
  var o;
  const n = ((o = r.lineWidth) == null ? void 0 : o[e || "DEFAULT"]) ?? f.bracket.cssvar.global.px(e || "1");
  if (t in J && n != null)
    return J[t].map((i) => [`border${i}-width`, n]);
}
function jt([, t = "", e], r) {
  if (t in J) {
    if ($t(f.bracket(e)))
      return et(["", t, e], r);
    if (Le(e, r.theme, "borderColor"))
      return Object.assign(
        {},
        ...J[t].map((n) => Ca(n)(["", e], r.theme))
      );
  }
}
function Et([, t = "", e]) {
  const r = f.bracket.percent.cssvar(e);
  if (t in J && r != null)
    return J[t].map((n) => [`--un-border${n}-opacity`, r]);
}
function At([, t = "", e], { theme: r }) {
  var o;
  const n = ((o = r.borderRadius) == null ? void 0 : o[e || "DEFAULT"]) || f.bracket.cssvar.global.fraction.rem(e || "1");
  if (t in Ge && n != null)
    return Ge[t].map((i) => [`border${i}-radius`, n]);
}
function _t([, t = "", e]) {
  if (yt.includes(e) && t in J)
    return J[t].map((r) => [`border${r}-style`, e]);
}
const pn = [
  [/^op(?:acity)?-?(.+)$/, ([, t]) => ({ opacity: f.bracket.percent.cssvar(t) })]
], za = /^\[url\(.+\)\]$/, ja = /^\[(?:length|size):.+\]$/, Ea = /^\[position:.+\]$/, Aa = /^\[(?:linear|conic|radial)-gradient\(.+\)\]$/, mn = [
  [/^bg-(.+)$/, (...t) => {
    const e = t[0][1];
    return za.test(e) ? { "--un-url": f.bracket(e), "background-image": "var(--un-url)" } : ja.test(e) && f.bracketOfLength(e) != null ? { "background-size": f.bracketOfLength(e).split(" ").map((r) => f.fraction.auto.px.cssvar(r) ?? r).join(" ") } : (Gi(e) || Ea.test(e)) && f.bracketOfPosition(e) != null ? { "background-position": f.bracketOfPosition(e).split(" ").map((r) => f.position.fraction.auto.px.cssvar(r) ?? r).join(" ") } : Aa.test(e) ? { "background-image": f.bracket(e) } : H("background-color", "bg", "backgroundColor")(...t);
  }, { autocomplete: "bg-$colors" }],
  [/^bg-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-bg-opacity": f.bracket.percent.cssvar(t) }), { autocomplete: "bg-(op|opacity)-<percent>" }]
], hn = [
  [/^color-scheme-(\w+)$/, ([, t]) => ({ "color-scheme": t })]
], gn = [
  [/^@container(?:\/(\w+))?(?:-(normal))?$/, ([, t, e]) => (ae("The container query rule is experimental and may not follow semver."), {
    "container-type": e ?? "inline-size",
    "container-name": t
  })]
], sr = ["solid", "double", "dotted", "dashed", "wavy", ...I], bn = [
  [/^(?:decoration-)?(underline|overline|line-through)$/, ([, t]) => ({ "text-decoration-line": t }), { autocomplete: "decoration-(underline|overline|line-through)" }],
  // size
  [/^(?:underline|decoration)-(?:size-)?(.+)$/, yn, { autocomplete: "(underline|decoration)-<num>" }],
  [/^(?:underline|decoration)-(auto|from-font)$/, ([, t]) => ({ "text-decoration-thickness": t }), { autocomplete: "(underline|decoration)-(auto|from-font)" }],
  // colors
  [/^(?:underline|decoration)-(.+)$/, _a, { autocomplete: "(underline|decoration)-$colors" }],
  [/^(?:underline|decoration)-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-line-opacity": f.bracket.percent.cssvar(t) }), { autocomplete: "(underline|decoration)-(op|opacity)-<percent>" }],
  // offset
  [/^(?:underline|decoration)-offset-(.+)$/, ([, t], { theme: e }) => {
    var r;
    return { "text-underline-offset": ((r = e.lineWidth) == null ? void 0 : r[t]) ?? f.auto.bracket.cssvar.global.px(t) };
  }, { autocomplete: "(underline|decoration)-(offset)-<num>" }],
  // style
  ...sr.map((t) => [`underline-${t}`, { "text-decoration-style": t }]),
  ...sr.map((t) => [`decoration-${t}`, { "text-decoration-style": t }]),
  ["no-underline", { "text-decoration": "none" }],
  ["decoration-none", { "text-decoration": "none" }]
];
function yn([, t], { theme: e }) {
  var r;
  return { "text-decoration-thickness": ((r = e.lineWidth) == null ? void 0 : r[t]) ?? f.bracket.cssvar.global.px(t) };
}
function _a(t, e) {
  if ($t(f.bracket(t[1])))
    return yn(t, e);
  const r = H("text-decoration-color", "line", "borderColor")(t, e);
  if (r)
    return {
      "-webkit-text-decoration-color": r["text-decoration-color"],
      ...r
    };
}
function cr(t, e) {
  let r;
  if (f.cssvar(t) != null)
    r = f.cssvar(t);
  else {
    t.startsWith("[") && t.endsWith("]") && (t = t.slice(1, -1));
    const n = t.split(",").map((o) => {
      var i;
      return ((i = e.transitionProperty) == null ? void 0 : i[o]) ?? f.properties(o);
    });
    n.every(Boolean) && (r = n.join(","));
  }
  return r;
}
const xn = [
  // transition
  [
    /^transition(?:-(\D+?))?(?:-(\d+))?$/,
    ([, t, e], { theme: r }) => {
      var n, o, i, a, c, s, l, p;
      if (!t && !e)
        return {
          "transition-property": (n = r.transitionProperty) == null ? void 0 : n.DEFAULT,
          "transition-timing-function": (o = r.easing) == null ? void 0 : o.DEFAULT,
          "transition-duration": ((i = r.duration) == null ? void 0 : i.DEFAULT) ?? f.time("150")
        };
      if (t != null) {
        const u = cr(t, r), m = ((a = r.duration) == null ? void 0 : a[e || "DEFAULT"]) ?? f.time(e || "150");
        if (u)
          return {
            "transition-property": u,
            "transition-timing-function": (c = r.easing) == null ? void 0 : c.DEFAULT,
            "transition-duration": m
          };
      } else if (e != null)
        return {
          "transition-property": (s = r.transitionProperty) == null ? void 0 : s.DEFAULT,
          "transition-timing-function": (l = r.easing) == null ? void 0 : l.DEFAULT,
          "transition-duration": ((p = r.duration) == null ? void 0 : p[e]) ?? f.time(e)
        };
    },
    {
      autocomplete: "transition-$transitionProperty-$duration"
    }
  ],
  // timings
  [
    /^(?:transition-)?duration-(.+)$/,
    ([, t], { theme: e }) => {
      var r;
      return { "transition-duration": ((r = e.duration) == null ? void 0 : r[t || "DEFAULT"]) ?? f.bracket.cssvar.time(t) };
    },
    { autocomplete: ["transition-duration-$duration", "duration-$duration"] }
  ],
  [
    /^(?:transition-)?delay-(.+)$/,
    ([, t], { theme: e }) => {
      var r;
      return { "transition-delay": ((r = e.duration) == null ? void 0 : r[t || "DEFAULT"]) ?? f.bracket.cssvar.time(t) };
    },
    { autocomplete: ["transition-delay-$duration", "delay-$duration"] }
  ],
  [
    /^(?:transition-)?ease(?:-(.+))?$/,
    ([, t], { theme: e }) => {
      var r;
      return { "transition-timing-function": ((r = e.easing) == null ? void 0 : r[t || "DEFAULT"]) ?? f.bracket.cssvar(t) };
    },
    { autocomplete: ["transition-ease-(linear|in|out|in-out|DEFAULT)", "ease-(linear|in|out|in-out|DEFAULT)"] }
  ],
  // props
  [
    /^(?:transition-)?property-(.+)$/,
    ([, t], { theme: e }) => {
      const r = f.global(t) || cr(t, e);
      if (r)
        return { "transition-property": r };
    },
    { autocomplete: [
      `transition-property-(${[...I].join("|")})`,
      "transition-property-$transitionProperty",
      "property-$transitionProperty"
    ] }
  ],
  // none
  ["transition-none", { transition: "none" }],
  ...O("transition"),
  // behavior
  ["transition-discrete", { "transition-behavior": "allow-discrete" }],
  ["transition-normal", { "transition-behavior": "normal" }]
], $n = [
  // display
  ["flex", { display: "flex" }],
  ["inline-flex", { display: "inline-flex" }],
  ["flex-inline", { display: "inline-flex" }],
  // flex
  [/^flex-(.*)$/, ([, t]) => ({ flex: f.bracket(t) != null ? f.bracket(t).split(" ").map((e) => f.cssvar.fraction(e) ?? e).join(" ") : f.cssvar.fraction(t) })],
  ["flex-1", { flex: "1 1 0%" }],
  ["flex-auto", { flex: "1 1 auto" }],
  ["flex-initial", { flex: "0 1 auto" }],
  ["flex-none", { flex: "none" }],
  // shrink/grow/basis
  [/^(?:flex-)?shrink(?:-(.*))?$/, ([, t = ""]) => ({ "flex-shrink": f.bracket.cssvar.number(t) ?? 1 }), { autocomplete: ["flex-shrink-<num>", "shrink-<num>"] }],
  [/^(?:flex-)?grow(?:-(.*))?$/, ([, t = ""]) => ({ "flex-grow": f.bracket.cssvar.number(t) ?? 1 }), { autocomplete: ["flex-grow-<num>", "grow-<num>"] }],
  [/^(?:flex-)?basis-(.+)$/, ([, t], { theme: e }) => {
    var r;
    return { "flex-basis": ((r = e.spacing) == null ? void 0 : r[t]) ?? f.bracket.cssvar.auto.fraction.rem(t) };
  }, { autocomplete: ["flex-basis-$spacing", "basis-$spacing"] }],
  // directions
  ["flex-row", { "flex-direction": "row" }],
  ["flex-row-reverse", { "flex-direction": "row-reverse" }],
  ["flex-col", { "flex-direction": "column" }],
  ["flex-col-reverse", { "flex-direction": "column-reverse" }],
  // wraps
  ["flex-wrap", { "flex-wrap": "wrap" }],
  ["flex-wrap-reverse", { "flex-wrap": "wrap-reverse" }],
  ["flex-nowrap", { "flex-wrap": "nowrap" }]
], vn = [
  // text
  [/^text-(.+)$/, La, { autocomplete: "text-$fontSize" }],
  // text size
  [/^(?:text|font)-size-(.+)$/, zn, { autocomplete: "text-size-$fontSize" }],
  // text colors
  [/^text-(?:color-)?(.+)$/, Oa, { autocomplete: "text-$colors" }],
  // colors
  [/^(?:color|c)-(.+)$/, H("color", "text", "textColor"), { autocomplete: "(color|c)-$colors" }],
  // style
  [/^(?:text|color|c)-(.+)$/, ([, t]) => I.includes(t) ? { color: t } : void 0, { autocomplete: `(text|color|c)-(${I.join("|")})` }],
  // opacity
  [/^(?:text|color|c)-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-text-opacity": f.bracket.percent.cssvar(t) }), { autocomplete: "(text|color|c)-(op|opacity)-<percent>" }],
  // weights
  [
    /^(?:font|fw)-?([^-]+)$/,
    ([, t], { theme: e }) => {
      var r;
      return { "font-weight": ((r = e.fontWeight) == null ? void 0 : r[t]) || f.bracket.global.number(t) };
    },
    {
      autocomplete: [
        "(font|fw)-(100|200|300|400|500|600|700|800|900)",
        "(font|fw)-$fontWeight"
      ]
    }
  ],
  // leadings
  [
    /^(?:font-)?(?:leading|lh|line-height)-(.+)$/,
    ([, t], { theme: e }) => ({ "line-height": we(t, e, "lineHeight") }),
    { autocomplete: "(leading|lh|line-height)-$lineHeight" }
  ],
  // synthesis
  ["font-synthesis-weight", { "font-synthesis": "weight" }],
  ["font-synthesis-style", { "font-synthesis": "style" }],
  ["font-synthesis-small-caps", { "font-synthesis": "small-caps" }],
  ["font-synthesis-none", { "font-synthesis": "none" }],
  [/^font-synthesis-(.+)$/, ([, t]) => ({ "font-synthesis": f.bracket.cssvar.global(t) })],
  // tracking
  [
    /^(?:font-)?tracking-(.+)$/,
    ([, t], { theme: e }) => {
      var r;
      return { "letter-spacing": ((r = e.letterSpacing) == null ? void 0 : r[t]) || f.bracket.cssvar.global.rem(t) };
    },
    { autocomplete: "tracking-$letterSpacing" }
  ],
  // word-spacing
  [
    /^(?:font-)?word-spacing-(.+)$/,
    ([, t], { theme: e }) => {
      var r;
      return { "word-spacing": ((r = e.wordSpacing) == null ? void 0 : r[t]) || f.bracket.cssvar.global.rem(t) };
    },
    { autocomplete: "word-spacing-$wordSpacing" }
  ],
  // stretch
  ["font-stretch-normal", { "font-stretch": "normal" }],
  ["font-stretch-ultra-condensed", { "font-stretch": "ultra-condensed" }],
  ["font-stretch-extra-condensed", { "font-stretch": "extra-condensed" }],
  ["font-stretch-condensed", { "font-stretch": "condensed" }],
  ["font-stretch-semi-condensed", { "font-stretch": "semi-condensed" }],
  ["font-stretch-semi-expanded", { "font-stretch": "semi-expanded" }],
  ["font-stretch-expanded", { "font-stretch": "expanded" }],
  ["font-stretch-extra-expanded", { "font-stretch": "extra-expanded" }],
  ["font-stretch-ultra-expanded", { "font-stretch": "ultra-expanded" }],
  [
    /^font-stretch-(.+)$/,
    ([, t]) => ({ "font-stretch": f.bracket.cssvar.fraction.global(t) }),
    { autocomplete: "font-stretch-<percentage>" }
  ],
  // family
  [
    /^font-(.+)$/,
    ([, t], { theme: e }) => {
      var r;
      return { "font-family": ((r = e.fontFamily) == null ? void 0 : r[t]) || f.bracket.cssvar.global(t) };
    },
    { autocomplete: "font-$fontFamily" }
  ]
], wn = [
  [/^tab(?:-(.+))?$/, ([, t]) => {
    const e = f.bracket.cssvar.global.number(t || "4");
    if (e != null)
      return {
        "-moz-tab-size": e,
        "-o-tab-size": e,
        "tab-size": e
      };
  }]
], kn = [
  [/^indent(?:-(.+))?$/, ([, t], { theme: e }) => {
    var r;
    return { "text-indent": ((r = e.textIndent) == null ? void 0 : r[t || "DEFAULT"]) || f.bracket.cssvar.global.fraction.rem(t) };
  }, { autocomplete: "indent-$textIndent" }]
], Sn = [
  // widths
  [/^text-stroke(?:-(.+))?$/, ([, t], { theme: e }) => {
    var r;
    return { "-webkit-text-stroke-width": ((r = e.textStrokeWidth) == null ? void 0 : r[t || "DEFAULT"]) || f.bracket.cssvar.px(t) };
  }, { autocomplete: "text-stroke-$textStrokeWidth" }],
  // colors
  [/^text-stroke-(.+)$/, H("-webkit-text-stroke-color", "text-stroke", "borderColor"), { autocomplete: "text-stroke-$colors" }],
  [/^text-stroke-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-text-stroke-opacity": f.bracket.percent.cssvar(t) }), { autocomplete: "text-stroke-(op|opacity)-<percent>" }]
], Cn = [
  [/^text-shadow(?:-(.+))?$/, ([, t], { theme: e }) => {
    var n;
    const r = (n = e.textShadow) == null ? void 0 : n[t || "DEFAULT"];
    return r != null ? {
      "--un-text-shadow": Oe(r, "--un-text-shadow-color").join(","),
      "text-shadow": "var(--un-text-shadow)"
    } : { "text-shadow": f.bracket.cssvar.global(t) };
  }, { autocomplete: "text-shadow-$textShadow" }],
  // colors
  [/^text-shadow-color-(.+)$/, H("--un-text-shadow-color", "text-shadow", "shadowColor"), { autocomplete: "text-shadow-color-$colors" }],
  [/^text-shadow-color-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-text-shadow-opacity": f.bracket.percent.cssvar(t) }), { autocomplete: "text-shadow-color-(op|opacity)-<percent>" }]
];
function we(t, e, r) {
  var n;
  return ((n = e[r]) == null ? void 0 : n[t]) || f.bracket.cssvar.global.rem(t);
}
function zn([, t], { theme: e }) {
  var o;
  const r = q((o = e.fontSize) == null ? void 0 : o[t]), n = (r == null ? void 0 : r[0]) ?? f.bracket.cssvar.global.rem(t);
  if (n != null)
    return { "font-size": n };
}
function Oa(t, e) {
  return $t(f.bracket(t[1])) ? zn(t, e) : H("color", "text", "textColor")(t, e);
}
function La([, t = "base"], { theme: e }) {
  var s;
  const r = Or(t, "length");
  if (!r)
    return;
  const [n, o] = r, i = q((s = e.fontSize) == null ? void 0 : s[n]), a = o ? we(o, e, "lineHeight") : void 0;
  if (i != null && i[0]) {
    const [l, p, u] = i;
    return typeof p == "object" ? {
      "font-size": l,
      ...p
    } : {
      "font-size": l,
      "line-height": a ?? p ?? "1",
      "letter-spacing": u ? we(u, e, "letterSpacing") : void 0
    };
  }
  const c = f.bracketOfLength.rem(n);
  return a && c ? {
    "font-size": c,
    "line-height": a
  } : { "font-size": f.bracketOfLength.rem(t) };
}
const Ra = {
  "": "",
  x: "column-",
  y: "row-",
  col: "column-",
  row: "row-"
};
function ge([, t = "", e], { theme: r }) {
  var o;
  const n = ((o = r.spacing) == null ? void 0 : o[e]) ?? f.bracket.cssvar.global.rem(e);
  if (n != null)
    return {
      [`${Ra[t]}gap`]: n
    };
}
const jn = [
  [/^(?:flex-|grid-)?gap-?()(.+)$/, ge, { autocomplete: ["gap-$spacing", "gap-<num>"] }],
  [/^(?:flex-|grid-)?gap-([xy])-?(.+)$/, ge, { autocomplete: ["gap-(x|y)-$spacing", "gap-(x|y)-<num>"] }],
  [/^(?:flex-|grid-)?gap-(col|row)-?(.+)$/, ge, { autocomplete: ["gap-(col|row)-$spacing", "gap-(col|row)-<num>"] }]
];
function ot(t) {
  return t.replace("col", "column");
}
function ke(t) {
  return t[0] === "r" ? "Row" : "Column";
}
function Ma(t, e, r) {
  var o;
  const n = (o = e[`gridAuto${ke(t)}`]) == null ? void 0 : o[r];
  if (n != null)
    return n;
  switch (r) {
    case "min":
      return "min-content";
    case "max":
      return "max-content";
    case "fr":
      return "minmax(0,1fr)";
  }
  return f.bracket.cssvar.auto.rem(r);
}
const En = [
  // displays
  ["grid", { display: "grid" }],
  ["inline-grid", { display: "inline-grid" }],
  // global
  [/^(?:grid-)?(row|col)-(.+)$/, ([, t, e], { theme: r }) => {
    var n;
    return {
      [`grid-${ot(t)}`]: ((n = r[`grid${ke(t)}`]) == null ? void 0 : n[e]) ?? f.bracket.cssvar.auto(e)
    };
  }],
  // span
  [/^(?:grid-)?(row|col)-span-(.+)$/, ([, t, e]) => {
    if (e === "full")
      return { [`grid-${ot(t)}`]: "1/-1" };
    const r = f.bracket.number(e);
    if (r != null)
      return { [`grid-${ot(t)}`]: `span ${r}/span ${r}` };
  }, { autocomplete: "(grid-row|grid-col|row|col)-span-<num>" }],
  // starts & ends
  [/^(?:grid-)?(row|col)-start-(.+)$/, ([, t, e]) => ({ [`grid-${ot(t)}-start`]: f.bracket.cssvar(e) ?? e })],
  [/^(?:grid-)?(row|col)-end-(.+)$/, ([, t, e]) => ({ [`grid-${ot(t)}-end`]: f.bracket.cssvar(e) ?? e }), { autocomplete: "(grid-row|grid-col|row|col)-(start|end)-<num>" }],
  // auto flows
  [/^(?:grid-)?auto-(rows|cols)-(.+)$/, ([, t, e], { theme: r }) => ({ [`grid-auto-${ot(t)}`]: Ma(t, r, e) }), { autocomplete: "(grid-auto|auto)-(rows|cols)-<num>" }],
  // grid-auto-flow, auto-flow: uno
  // grid-flow: wind
  [/^(?:grid-auto-flow|auto-flow|grid-flow)-(.+)$/, ([, t]) => ({ "grid-auto-flow": f.bracket.cssvar(t) })],
  [/^(?:grid-auto-flow|auto-flow|grid-flow)-(row|col|dense|row-dense|col-dense)$/, ([, t]) => ({ "grid-auto-flow": ot(t).replace("-", " ") }), { autocomplete: ["(grid-auto-flow|auto-flow|grid-flow)-(row|col|dense|row-dense|col-dense)"] }],
  // templates
  [/^(?:grid-)?(rows|cols)-(.+)$/, ([, t, e], { theme: r }) => {
    var n;
    return {
      [`grid-template-${ot(t)}`]: ((n = r[`gridTemplate${ke(t)}`]) == null ? void 0 : n[e]) ?? f.bracket.cssvar(e)
    };
  }],
  [/^(?:grid-)?(rows|cols)-minmax-([\w.-]+)$/, ([, t, e]) => ({ [`grid-template-${ot(t)}`]: `repeat(auto-fill,minmax(${e},1fr))` })],
  [/^(?:grid-)?(rows|cols)-(\d+)$/, ([, t, e]) => ({ [`grid-template-${ot(t)}`]: `repeat(${e},minmax(0,1fr))` }), { autocomplete: "(grid-rows|grid-cols|rows|cols)-<num>" }],
  // areas
  [/^grid-area(s)?-(.+)$/, ([, t, e]) => t != null ? { "grid-template-areas": f.cssvar(e) ?? e.split("-").map((r) => `"${f.bracket(r)}"`).join(" ") } : { "grid-area": f.bracket.cssvar(e) }],
  // template none
  ["grid-rows-none", { "grid-template-rows": "none" }],
  ["grid-cols-none", { "grid-template-columns": "none" }],
  // template subgrid
  ["grid-rows-subgrid", { "grid-template-rows": "subgrid" }],
  ["grid-cols-subgrid", { "grid-template-columns": "subgrid" }]
], qt = [
  "auto",
  "hidden",
  "clip",
  "visible",
  "scroll",
  "overlay",
  ...I
], An = [
  [/^(?:overflow|of)-(.+)$/, ([, t]) => qt.includes(t) ? { overflow: t } : void 0, { autocomplete: [`(overflow|of)-(${qt.join("|")})`, `(overflow|of)-(x|y)-(${qt.join("|")})`] }],
  [/^(?:overflow|of)-([xy])-(.+)$/, ([, t, e]) => qt.includes(e) ? { [`overflow-${t}`]: e } : void 0]
], _n = [
  [/^(?:position-|pos-)?(relative|absolute|fixed|sticky)$/, ([, t]) => ({ position: t }), {
    autocomplete: [
      "(position|pos)-<position>",
      "(position|pos)-<globalKeyword>",
      "<position>"
    ]
  }],
  [/^(?:position-|pos-)([-\w]+)$/, ([, t]) => I.includes(t) ? { position: t } : void 0],
  [/^(?:position-|pos-)?(static)$/, ([, t]) => ({ position: t })]
], Me = [
  // contents
  ["justify-start", { "justify-content": "flex-start" }],
  ["justify-end", { "justify-content": "flex-end" }],
  ["justify-center", { "justify-content": "center" }],
  ["justify-between", { "justify-content": "space-between" }],
  ["justify-around", { "justify-content": "space-around" }],
  ["justify-evenly", { "justify-content": "space-evenly" }],
  ["justify-stretch", { "justify-content": "stretch" }],
  ["justify-left", { "justify-content": "left" }],
  ["justify-right", { "justify-content": "right" }],
  ...O("justify", "justify-content"),
  // items
  ["justify-items-start", { "justify-items": "start" }],
  ["justify-items-end", { "justify-items": "end" }],
  ["justify-items-center", { "justify-items": "center" }],
  ["justify-items-stretch", { "justify-items": "stretch" }],
  ...O("justify-items"),
  // selfs
  ["justify-self-auto", { "justify-self": "auto" }],
  ["justify-self-start", { "justify-self": "start" }],
  ["justify-self-end", { "justify-self": "end" }],
  ["justify-self-center", { "justify-self": "center" }],
  ["justify-self-stretch", { "justify-self": "stretch" }],
  ...O("justify-self")
], On = [
  [/^order-(.+)$/, ([, t]) => ({ order: f.bracket.cssvar.number(t) })],
  ["order-first", { order: "-9999" }],
  ["order-last", { order: "9999" }],
  ["order-none", { order: "0" }]
], Pe = [
  // contents
  ["content-center", { "align-content": "center" }],
  ["content-start", { "align-content": "flex-start" }],
  ["content-end", { "align-content": "flex-end" }],
  ["content-between", { "align-content": "space-between" }],
  ["content-around", { "align-content": "space-around" }],
  ["content-evenly", { "align-content": "space-evenly" }],
  ...O("content", "align-content"),
  // items
  ["items-start", { "align-items": "flex-start" }],
  ["items-end", { "align-items": "flex-end" }],
  ["items-center", { "align-items": "center" }],
  ["items-baseline", { "align-items": "baseline" }],
  ["items-stretch", { "align-items": "stretch" }],
  ...O("items", "align-items"),
  // selfs
  ["self-auto", { "align-self": "auto" }],
  ["self-start", { "align-self": "flex-start" }],
  ["self-end", { "align-self": "flex-end" }],
  ["self-center", { "align-self": "center" }],
  ["self-stretch", { "align-self": "stretch" }],
  ["self-baseline", { "align-self": "baseline" }],
  ...O("self", "align-self")
], Fe = [
  // contents
  ["place-content-center", { "place-content": "center" }],
  ["place-content-start", { "place-content": "start" }],
  ["place-content-end", { "place-content": "end" }],
  ["place-content-between", { "place-content": "space-between" }],
  ["place-content-around", { "place-content": "space-around" }],
  ["place-content-evenly", { "place-content": "space-evenly" }],
  ["place-content-stretch", { "place-content": "stretch" }],
  ...O("place-content"),
  // items
  ["place-items-start", { "place-items": "start" }],
  ["place-items-end", { "place-items": "end" }],
  ["place-items-center", { "place-items": "center" }],
  ["place-items-stretch", { "place-items": "stretch" }],
  ...O("place-items"),
  // selfs
  ["place-self-auto", { "place-self": "auto" }],
  ["place-self-start", { "place-self": "start" }],
  ["place-self-end", { "place-self": "end" }],
  ["place-self-center", { "place-self": "center" }],
  ["place-self-stretch", { "place-self": "stretch" }],
  ...O("place-self")
], Ln = [...Me, ...Pe, ...Fe].flatMap(([t, e]) => [
  [`flex-${t}`, e],
  [`grid-${t}`, e]
]);
function Se(t, { theme: e }) {
  var r;
  return ((r = e.spacing) == null ? void 0 : r[t]) ?? f.bracket.cssvar.global.auto.fraction.rem(t);
}
function Ot([, t, e], r) {
  const n = Se(e, r);
  if (n != null && t in qe)
    return qe[t].map((o) => [o.slice(1), n]);
}
const Rn = [
  [
    /^(?:position-|pos-)?inset-(.+)$/,
    ([, t], e) => ({ inset: Se(t, e) }),
    {
      autocomplete: [
        "(position|pos)-inset-<directions>-$spacing",
        "(position|pos)-inset-(block|inline)-$spacing",
        "(position|pos)-inset-(bs|be|is|ie)-$spacing",
        "(position|pos)-(top|left|right|bottom)-$spacing"
      ]
    }
  ],
  [/^(?:position-|pos-)?(start|end)-(.+)$/, Ot],
  [/^(?:position-|pos-)?inset-([xy])-(.+)$/, Ot],
  [/^(?:position-|pos-)?inset-([rltbse])-(.+)$/, Ot],
  [/^(?:position-|pos-)?inset-(block|inline)-(.+)$/, Ot],
  [/^(?:position-|pos-)?inset-([bi][se])-(.+)$/, Ot],
  [/^(?:position-|pos-)?(top|left|right|bottom)-(.+)$/, ([, t, e], r) => ({ [t]: Se(e, r) })]
], Mn = [
  // floats
  ["float-left", { float: "left" }],
  ["float-right", { float: "right" }],
  ["float-start", { float: "inline-start" }],
  ["float-end", { float: "inline-end" }],
  ["float-none", { float: "none" }],
  ...O("float"),
  // clears
  ["clear-left", { clear: "left" }],
  ["clear-right", { clear: "right" }],
  ["clear-both", { clear: "both" }],
  ["clear-start", { clear: "inline-start" }],
  ["clear-end", { clear: "inline-end" }],
  ["clear-none", { clear: "none" }],
  ...O("clear")
], Pn = [
  [/^(?:position-|pos-)?z([\d.]+)$/, ([, t]) => ({ "z-index": f.number(t) })],
  [/^(?:position-|pos-)?z-(.+)$/, ([, t], { theme: e }) => {
    var r;
    return { "z-index": ((r = e.zIndex) == null ? void 0 : r[t]) ?? f.bracket.cssvar.global.auto.number(t) };
  }, { autocomplete: "z-<num>" }]
], Fn = [
  ["box-border", { "box-sizing": "border-box" }],
  ["box-content", { "box-sizing": "content-box" }],
  ...O("box", "box-sizing")
], Pa = {
  h: "height",
  w: "width",
  inline: "inline-size",
  block: "block-size"
};
function dt(t, e) {
  return `${t || ""}${Pa[e]}`;
}
function Gt(t, e, r, n) {
  var a;
  const o = dt(t, e).replace(/-(\w)/g, (c, s) => s.toUpperCase()), i = (a = r[o]) == null ? void 0 : a[n];
  if (i != null)
    return i;
  switch (n) {
    case "fit":
    case "max":
    case "min":
      return `${n}-content`;
  }
  return f.bracket.cssvar.global.auto.fraction.rem(n);
}
const Tn = [
  [/^size-(min-|max-)?(.+)$/, ([, t, e], { theme: r }) => ({ [dt(t, "w")]: Gt(t, "w", r, e), [dt(t, "h")]: Gt(t, "h", r, e) })],
  [/^(?:size-)?(min-|max-)?([wh])-?(.+)$/, ([, t, e, r], { theme: n }) => ({ [dt(t, e)]: Gt(t, e, n, r) })],
  [/^(?:size-)?(min-|max-)?(block|inline)-(.+)$/, ([, t, e, r], { theme: n }) => ({ [dt(t, e)]: Gt(t, e, n, r) }), {
    autocomplete: [
      "(w|h)-$width|height|maxWidth|maxHeight|minWidth|minHeight|inlineSize|blockSize|maxInlineSize|maxBlockSize|minInlineSize|minBlockSize",
      "(block|inline)-$width|height|maxWidth|maxHeight|minWidth|minHeight|inlineSize|blockSize|maxInlineSize|maxBlockSize|minInlineSize|minBlockSize",
      "(max|min)-(w|h|block|inline)",
      "(max|min)-(w|h|block|inline)-$width|height|maxWidth|maxHeight|minWidth|minHeight|inlineSize|blockSize|maxInlineSize|maxBlockSize|minInlineSize|minBlockSize",
      "(w|h)-full",
      "(max|min)-(w|h)-full"
    ]
  }],
  [/^(?:size-)?(min-|max-)?(h)-screen-(.+)$/, ([, t, e, r], n) => ({ [dt(t, e)]: lr(n, r, "verticalBreakpoints") })],
  [/^(?:size-)?(min-|max-)?(w)-screen-(.+)$/, ([, t, e, r], n) => ({ [dt(t, e)]: lr(n, r) }), {
    autocomplete: [
      "(w|h)-screen",
      "(min|max)-(w|h)-screen",
      "h-screen-$verticalBreakpoints",
      "(min|max)-h-screen-$verticalBreakpoints",
      "w-screen-$breakpoints",
      "(min|max)-w-screen-$breakpoints"
    ]
  }]
];
function lr(t, e, r = "breakpoints") {
  var o;
  const n = ue(t, r);
  if (n)
    return (o = n.find((i) => i.point === e)) == null ? void 0 : o.size;
}
function Fa(t) {
  if (/^\d+\/\d+$/.test(t))
    return t;
  switch (t) {
    case "square":
      return "1/1";
    case "video":
      return "16/9";
  }
  return f.bracket.cssvar.global.auto.number(t);
}
const Wn = [
  [/^(?:size-)?aspect-(?:ratio-)?(.+)$/, ([, t]) => ({ "aspect-ratio": Fa(t) }), { autocomplete: ["aspect-(square|video|ratio)", "aspect-ratio-(square|video)"] }]
], Nn = [
  [/^pa?()-?(.+)$/, D("padding"), { autocomplete: ["(m|p)<num>", "(m|p)-<num>"] }],
  [/^p-?xy()()$/, D("padding"), { autocomplete: "(m|p)-(xy)" }],
  [/^p-?([xy])(?:-?(.+))?$/, D("padding")],
  [/^p-?([rltbse])(?:-?(.+))?$/, D("padding"), { autocomplete: "(m|p)<directions>-<num>" }],
  [/^p-(block|inline)(?:-(.+))?$/, D("padding"), { autocomplete: "(m|p)-(block|inline)-<num>" }],
  [/^p-?([bi][se])(?:-?(.+))?$/, D("padding"), { autocomplete: "(m|p)-(bs|be|is|ie)-<num>" }]
], Un = [
  [/^ma?()-?(.+)$/, D("margin")],
  [/^m-?xy()()$/, D("margin")],
  [/^m-?([xy])(?:-?(.+))?$/, D("margin")],
  [/^m-?([rltbse])(?:-?(.+))?$/, D("margin")],
  [/^m-(block|inline)(?:-(.+))?$/, D("margin")],
  [/^m-?([bi][se])(?:-?(.+))?$/, D("margin")]
], Ta = {
  backface: "backface-visibility",
  break: "word-break",
  case: "text-transform",
  content: "align-content",
  fw: "font-weight",
  items: "align-items",
  justify: "justify-content",
  select: "user-select",
  self: "align-self",
  vertical: "vertical-align",
  visible: "visibility",
  whitespace: "white-space",
  ws: "white-space"
}, Bn = [
  [/^(.+?)-(\$.+)$/, ([, t, e]) => {
    const r = Ta[t];
    if (r)
      return { [r]: f.cssvar(e) };
  }]
], Dn = [
  [/^\[(.*)\]$/, ([t, e]) => {
    if (!e.includes(":"))
      return;
    const [r, ...n] = e.split(":"), o = n.join(":");
    if (!Na(e) && /^[a-z-]+$/.test(r) && Wa(o)) {
      const i = f.bracket(`[${o}]`);
      if (i)
        return { [r]: i };
    }
  }]
];
function Wa(t) {
  let e = 0;
  function r(n) {
    for (; e < t.length; )
      if (e += 1, t[e] === n)
        return !0;
    return !1;
  }
  for (e = 0; e < t.length; e++) {
    const n = t[e];
    if ("\"`'".includes(n)) {
      if (!r(n))
        return !1;
    } else if (n === "(") {
      if (!r(")"))
        return !1;
    } else if ("[]{}:".includes(n))
      return !1;
  }
  return !0;
}
function Na(t) {
  if (!t.includes("://"))
    return !1;
  try {
    return new URL(t).host !== "";
  } catch {
    return !1;
  }
}
const In = [
  [
    /^(where|\?)$/,
    (t, { constructCSS: e, generator: r }) => {
      if (r.userConfig.envMode === "dev")
        return `@keyframes __un_qm{0%{box-shadow:inset 4px 4px #ff1e90, inset -4px -4px #ff1e90}100%{box-shadow:inset 8px 8px #3399ff, inset -8px -8px #3399ff}} ${e({ animation: "__un_qm 0.5s ease-in-out alternate infinite" })}`;
    }
  ]
], Vn = [
  // fills
  [/^fill-(.+)$/, H("fill", "fill", "backgroundColor"), { autocomplete: "fill-$colors" }],
  [/^fill-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-fill-opacity": f.bracket.percent.cssvar(t) }), { autocomplete: "fill-(op|opacity)-<percent>" }],
  ["fill-none", { fill: "none" }],
  // stroke size
  [/^stroke-(?:width-|size-)?(.+)$/, Yn, { autocomplete: ["stroke-width-$lineWidth", "stroke-size-$lineWidth"] }],
  // stroke dash
  [/^stroke-dash-(.+)$/, ([, t]) => ({ "stroke-dasharray": f.bracket.cssvar.number(t) }), { autocomplete: "stroke-dash-<num>" }],
  [/^stroke-offset-(.+)$/, ([, t], { theme: e }) => {
    var r;
    return { "stroke-dashoffset": ((r = e.lineWidth) == null ? void 0 : r[t]) ?? f.bracket.cssvar.px.numberWithUnit(t) };
  }, { autocomplete: "stroke-offset-$lineWidth" }],
  // stroke colors
  [/^stroke-(.+)$/, Ua, { autocomplete: "stroke-$colors" }],
  [/^stroke-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-stroke-opacity": f.bracket.percent.cssvar(t) }), { autocomplete: "stroke-(op|opacity)-<percent>" }],
  // line cap
  ["stroke-cap-square", { "stroke-linecap": "square" }],
  ["stroke-cap-round", { "stroke-linecap": "round" }],
  ["stroke-cap-auto", { "stroke-linecap": "butt" }],
  // line join
  ["stroke-join-arcs", { "stroke-linejoin": "arcs" }],
  ["stroke-join-bevel", { "stroke-linejoin": "bevel" }],
  ["stroke-join-clip", { "stroke-linejoin": "miter-clip" }],
  ["stroke-join-round", { "stroke-linejoin": "round" }],
  ["stroke-join-auto", { "stroke-linejoin": "miter" }],
  // none
  ["stroke-none", { stroke: "none" }]
];
function Yn([, t], { theme: e }) {
  var r;
  return { "stroke-width": ((r = e.lineWidth) == null ? void 0 : r[t]) ?? f.bracket.cssvar.fraction.px.number(t) };
}
function Ua(t, e) {
  return $t(f.bracket(t[1])) ? Yn(t, e) : H("stroke", "stroke", "borderColor")(t, e);
}
const Ba = [
  Bn,
  Dn,
  Fr,
  Tr,
  Mr,
  _n,
  Rn,
  Pn,
  On,
  En,
  Mn,
  Un,
  Fn,
  Rr,
  Wn,
  Tn,
  $n,
  en,
  Pr,
  Nr,
  Wr,
  fn,
  Fe,
  Pe,
  Me,
  jn,
  Ln,
  An,
  Yr,
  Ur,
  Ir,
  dn,
  mn,
  hn,
  Vn,
  Nn,
  sn,
  kn,
  Vr,
  an,
  vn,
  Xr,
  qr,
  bn,
  Gr,
  wn,
  Sn,
  Cn,
  pn,
  Qr,
  cn,
  Kr,
  xn,
  un,
  Br,
  Dr,
  gn,
  // should be the last
  In
].flat(1), Da = {
  name: "aria",
  match(t, e) {
    var n;
    const r = it("aria-", t, e.generator.config.separators);
    if (r) {
      const [o, i] = r, a = f.bracket(o) ?? ((n = e.theme.aria) == null ? void 0 : n[o]) ?? "";
      if (a)
        return {
          matcher: i,
          selector: (c) => `${c}[aria-${a}]`
        };
    }
  }
};
function Ht(t) {
  return {
    name: `${t}-aria`,
    match(e, r) {
      var o;
      const n = it(`${t}-aria-`, e, r.generator.config.separators);
      if (n) {
        const [i, a] = n, c = f.bracket(i) ?? ((o = r.theme.aria) == null ? void 0 : o[i]) ?? "";
        if (c)
          return {
            matcher: `${t}-[[aria-${c}]]:${a}`
          };
      }
    }
  };
}
const Ia = [
  Ht("group"),
  Ht("peer"),
  Ht("parent"),
  Ht("previous")
];
function fr(t) {
  var n;
  const e = ((n = t.match(/^-?\d+\.?\d*/)) == null ? void 0 : n[0]) || "", r = t.slice(e.length);
  if (r === "px") {
    const o = Number.parseFloat(e) - 0.1;
    return Number.isNaN(o) ? t : `${o}${r}`;
  }
  return `calc(${t} - 0.1px)`;
}
const ur = /(max|min)-\[([^\]]*)\]:/;
function Va() {
  const t = {};
  return {
    name: "breakpoints",
    match(e, r) {
      if (ur.test(e)) {
        const o = e.match(ur);
        return {
          matcher: e.replace(o[0], ""),
          handle: (a, c) => c({
            ...a,
            parent: `${a.parent ? `${a.parent} $$ ` : ""}@media (${o[1]}-width: ${o[2]})`
            // parentOrder: order,
          })
        };
      }
      const n = (ue(r) ?? []).map(({ point: o, size: i }, a) => [o, i, a]);
      for (const [o, i, a] of n) {
        t[o] || (t[o] = new RegExp(`^((?:([al]t-|[<~]|max-))?${o}(?:${r.generator.config.separators.join("|")}))`));
        const c = e.match(t[o]);
        if (!c)
          continue;
        const [, s] = c, l = e.slice(s.length);
        if (l === "container")
          continue;
        const p = s.startsWith("lt-") || s.startsWith("<") || s.startsWith("max-"), u = s.startsWith("at-") || s.startsWith("~");
        let m = 3e3;
        return p ? (m -= a + 1, {
          matcher: l,
          handle: (b, $) => $({
            ...b,
            parent: `${b.parent ? `${b.parent} $$ ` : ""}@media (max-width: ${fr(i)})`,
            parentOrder: m
          })
        }) : (m += a + 1, u && a < n.length - 1 ? {
          matcher: l,
          handle: (b, $) => $({
            ...b,
            parent: `${b.parent ? `${b.parent} $$ ` : ""}@media (min-width: ${i}) and (max-width: ${fr(n[a + 1][1])})`,
            parentOrder: m
          })
        } : {
          matcher: l,
          handle: (b, $) => $({
            ...b,
            parent: `${b.parent ? `${b.parent} $$ ` : ""}@media (min-width: ${i})`,
            parentOrder: m
          })
        });
      }
    },
    multiPass: !0,
    autocomplete: "(at-|lt-|max-|)$breakpoints:"
  };
}
const Ya = [
  ct("*", (t) => ({ selector: `${t.selector} > *` }))
];
function Lt(t, e) {
  return {
    name: `combinator:${t}`,
    match(r, n) {
      if (!r.startsWith(t))
        return;
      const o = n.generator.config.separators;
      let i = Tt(`${t}-`, r, o);
      if (!i) {
        for (const c of o)
          if (r.startsWith(`${t}${c}`)) {
            i = ["", r.slice(t.length + c.length)];
            break;
          }
        if (!i)
          return;
      }
      let a = f.bracket(i[0]) ?? "";
      return a === "" && (a = "*"), {
        matcher: i[1],
        selector: (c) => `${c}${e}${a}`
      };
    },
    multiPass: !0
  };
}
const Xa = [
  Lt("all", " "),
  Lt("children", ">"),
  Lt("next", "+"),
  Lt("sibling", "+"),
  Lt("siblings", "~")
], qa = {
  name: "@",
  match(t, e) {
    var n;
    if (t.startsWith("@container"))
      return;
    const r = it("@", t, e.generator.config.separators);
    if (r) {
      const [o, i, a] = r, c = f.bracket(o);
      let s;
      if (c) {
        const l = f.numberWithUnit(c);
        l && (s = `(min-width: ${l})`);
      } else
        s = ((n = e.theme.containers) == null ? void 0 : n[o]) ?? "";
      if (s) {
        ae("The container query variant is experimental and may not follow semver.");
        let l = 1e3 + Object.keys(e.theme.containers ?? {}).indexOf(o);
        return a && (l += 1e3), {
          matcher: i,
          handle: (p, u) => u({
            ...p,
            parent: `${p.parent ? `${p.parent} $$ ` : ""}@container${a ? ` ${a} ` : " "}${s}`,
            parentOrder: l
          })
        };
      }
    }
  },
  multiPass: !0
};
function Ga(t = {}) {
  if ((t == null ? void 0 : t.dark) === "class" || typeof t.dark == "object") {
    const { dark: e = ".dark", light: r = ".light" } = typeof t.dark == "string" ? {} : t.dark;
    return [
      ct("dark", (n) => ({ prefix: `${e} $$ ${n.prefix}` })),
      ct("light", (n) => ({ prefix: `${r} $$ ${n.prefix}` }))
    ];
  }
  return [
    rt("dark", "@media (prefers-color-scheme: dark)"),
    rt("light", "@media (prefers-color-scheme: light)")
  ];
}
const Ha = {
  name: "data",
  match(t, e) {
    var n;
    const r = it("data-", t, e.generator.config.separators);
    if (r) {
      const [o, i] = r, a = f.bracket(o) ?? ((n = e.theme.data) == null ? void 0 : n[o]) ?? "";
      if (a)
        return {
          matcher: i,
          selector: (c) => `${c}[data-${a}]`
        };
    }
  }
};
function Kt(t) {
  return {
    name: `${t}-data`,
    match(e, r) {
      var o;
      const n = it(`${t}-data-`, e, r.generator.config.separators);
      if (n) {
        const [i, a] = n, c = f.bracket(i) ?? ((o = r.theme.data) == null ? void 0 : o[i]) ?? "";
        if (c)
          return {
            matcher: `${t}-[[data-${c}]]:${a}`
          };
      }
    }
  };
}
const Ka = [
  Kt("group"),
  Kt("peer"),
  Kt("parent"),
  Kt("previous")
], Za = [
  ct("rtl", (t) => ({ prefix: `[dir="rtl"] $$ ${t.prefix}` })),
  ct("ltr", (t) => ({ prefix: `[dir="ltr"] $$ ${t.prefix}` }))
], Ja = {
  name: "selector",
  match(t, e) {
    const r = Tt("selector-", t, e.generator.config.separators);
    if (r) {
      const [n, o] = r, i = f.bracket(n);
      if (i)
        return {
          matcher: o,
          selector: () => i
        };
    }
  }
}, Qa = {
  name: "layer",
  match(t, e) {
    const r = it("layer-", t, e.generator.config.separators);
    if (r) {
      const [n, o] = r, i = f.bracket(n) ?? n;
      if (i)
        return {
          matcher: o,
          handle: (a, c) => c({
            ...a,
            parent: `${a.parent ? `${a.parent} $$ ` : ""}@layer ${i}`
          })
        };
    }
  }
}, ts = {
  name: "uno-layer",
  match(t, e) {
    const r = it("uno-layer-", t, e.generator.config.separators);
    if (r) {
      const [n, o] = r, i = f.bracket(n) ?? n;
      if (i)
        return {
          matcher: o,
          layer: i
        };
    }
  }
}, es = {
  name: "scope",
  match(t, e) {
    const r = Tt("scope-", t, e.generator.config.separators);
    if (r) {
      const [n, o] = r, i = f.bracket(n);
      if (i)
        return {
          matcher: o,
          selector: (a) => `${i} $$ ${a}`
        };
    }
  }
}, rs = {
  name: "variables",
  match(t, e) {
    if (!t.startsWith("["))
      return;
    const [r, n] = Ee(t, "[", "]") ?? [];
    if (!(r && n))
      return;
    let o;
    for (const c of e.generator.config.separators)
      if (n.startsWith(c)) {
        o = n.slice(c.length);
        break;
      }
    if (o == null)
      return;
    const i = f.bracket(r) ?? "", a = i.startsWith("@");
    if (a || i.includes("&"))
      return {
        matcher: o,
        handle(c, s) {
          const l = a ? {
            parent: `${c.parent ? `${c.parent} $$ ` : ""}${i}`
          } : {
            selector: i.replace(/&/g, c.selector)
          };
          return s({
            ...c,
            ...l
          });
        }
      };
  },
  multiPass: !0
}, ns = {
  name: "theme-variables",
  match(t, e) {
    if (vi(t))
      return {
        matcher: t,
        handle(r, n) {
          return n({
            ...r,
            //  entries: [ [ '--css-spacing', '28px' ] ],
            entries: JSON.parse(wi(JSON.stringify(r.entries), e.theme))
          });
        }
      };
  }
}, Xn = /^-?[0-9.]+(?:[a-z]+|%)?$/, qn = /-?[0-9.]+(?:[a-z]+|%)?/, os = [
  /\b(opacity|color|flex|backdrop-filter|^filter|transform)\b/
];
function is(t) {
  const e = t.match(_e) || t.match(zr);
  if (e) {
    const [r, n] = se(`(${e[2]})${e[3]}`, "(", ")", " ") ?? [];
    if (r)
      return `calc(${e[1]}${r} * -1)${n ? ` ${n}` : ""}`;
  }
}
const as = /\b(hue-rotate)\s*(\(.*)/;
function ss(t) {
  const e = t.match(as);
  if (e) {
    const [r, n] = se(e[2], "(", ")", " ") ?? [];
    if (r) {
      const o = Xn.test(r.slice(1, -1)) ? r.replace(qn, (i) => i.startsWith("-") ? i.slice(1) : `-${i}`) : `(calc(${r} * -1))`;
      return `${e[1]}${o}${n ? ` ${n}` : ""}`;
    }
  }
}
const cs = {
  name: "negative",
  match(t) {
    if (t.startsWith("-"))
      return {
        matcher: t.slice(1),
        body: (e) => {
          if (e.find((n) => n[0] === qi))
            return;
          let r = !1;
          return e.forEach((n) => {
            var c;
            const o = (c = n[1]) == null ? void 0 : c.toString();
            if (!o || o === "0" || os.some((s) => s.test(n[0])))
              return;
            const i = is(o);
            if (i) {
              n[1] = i, r = !0;
              return;
            }
            const a = ss(o);
            if (a) {
              n[1] = a, r = !0;
              return;
            }
            Xn.test(o) && (n[1] = o.replace(qn, (s) => s.startsWith("-") ? s.slice(1) : `-${s}`), r = !0);
          }), r ? e : [];
        }
      };
  }
};
function ls() {
  let t;
  return {
    name: "important",
    match(e, r) {
      t || (t = new RegExp(`^(important(?:${r.generator.config.separators.join("|")})|!)`));
      let n;
      const o = e.match(t);
      if (o ? n = e.slice(o[0].length) : e.endsWith("!") && (n = e.slice(0, -1)), n)
        return {
          matcher: n,
          body: (i) => (i.forEach((a) => {
            a[1] != null && (a[1] += " !important");
          }), i)
        };
    }
  };
}
const fs = rt("print", "@media print"), us = {
  name: "media",
  match(t, e) {
    var n;
    const r = it("media-", t, e.generator.config.separators);
    if (r) {
      const [o, i] = r;
      let a = f.bracket(o) ?? "";
      if (a === "" && (a = ((n = e.theme.media) == null ? void 0 : n[o]) ?? ""), a)
        return {
          matcher: i,
          handle: (c, s) => s({
            ...c,
            parent: `${c.parent ? `${c.parent} $$ ` : ""}@media ${a}`
          })
        };
    }
  },
  multiPass: !0
}, ds = {
  name: "supports",
  match(t, e) {
    var n;
    const r = it("supports-", t, e.generator.config.separators);
    if (r) {
      const [o, i] = r;
      let a = f.bracket(o) ?? "";
      if (a === "" && (a = ((n = e.theme.supports) == null ? void 0 : n[o]) ?? ""), a)
        return {
          matcher: i,
          handle: (c, s) => s({
            ...c,
            parent: `${c.parent ? `${c.parent} $$ ` : ""}@supports ${a}`
          })
        };
    }
  },
  multiPass: !0
}, vt = Object.fromEntries([
  // pseudo elements part 1
  ["first-letter", "::first-letter"],
  ["first-line", "::first-line"],
  // location
  "any-link",
  "link",
  "visited",
  "target",
  ["open", "[open]"],
  // forms
  "default",
  "checked",
  "indeterminate",
  "placeholder-shown",
  "autofill",
  "optional",
  "required",
  "valid",
  "invalid",
  "user-valid",
  "user-invalid",
  "in-range",
  "out-of-range",
  "read-only",
  "read-write",
  // content
  "empty",
  // interactions
  "focus-within",
  "hover",
  "focus",
  "focus-visible",
  "active",
  "enabled",
  "disabled",
  "popover-open",
  // tree-structural
  "root",
  "empty",
  ["even-of-type", ":nth-of-type(even)"],
  ["even", ":nth-child(even)"],
  ["odd-of-type", ":nth-of-type(odd)"],
  ["odd", ":nth-child(odd)"],
  "first-of-type",
  ["first", ":first-child"],
  "last-of-type",
  ["last", ":last-child"],
  "only-child",
  "only-of-type",
  // pseudo elements part 2
  ["backdrop-element", "::backdrop"],
  ["placeholder", "::placeholder"],
  ["before", "::before"],
  ["after", "::after"],
  ["selection", " ::selection"],
  ["marker", " ::marker"],
  ["file", "::file-selector-button"]
].map((t) => Array.isArray(t) ? t : [t, `:${t}`])), Gn = Object.keys(vt), wt = Object.fromEntries([
  ["backdrop", "::backdrop"]
].map((t) => Array.isArray(t) ? t : [t, `:${t}`])), Hn = Object.keys(wt), ps = [
  "not",
  "is",
  "where",
  "has"
], Ce = Object.entries(vt).filter(([, t]) => !t.startsWith("::")).map(([t]) => t).sort((t, e) => e.length - t.length).join("|"), ze = Object.entries(wt).filter(([, t]) => !t.startsWith("::")).map(([t]) => t).sort((t, e) => e.length - t.length).join("|"), pt = ps.join("|");
function ms(t, e, r) {
  const n = new RegExp(`^(${Pt(e)}:)(\\S+)${Pt(r)}\\1`);
  let o, i, a, c;
  const s = (u) => {
    var L;
    const m = Tt(`${t}-`, u, []);
    if (!m)
      return;
    const [b, $] = m, k = f.bracket(b);
    if (k == null)
      return;
    const M = ((L = $.split(o, 1)) == null ? void 0 : L[0]) ?? "", z = `${e}${Rt(M)}`;
    return [
      M,
      u.slice(u.length - ($.length - M.length - 1)),
      k.includes("&") ? k.replace(/&/g, z) : `${z}${k}`
    ];
  }, l = (u) => {
    const m = u.match(i) || u.match(a);
    if (!m)
      return;
    const [b, $, k] = m, M = m[3] ?? "";
    let z = vt[k] || wt[k] || `:${k}`;
    return $ && (z = `:${$}(${z})`), [
      M,
      u.slice(b.length),
      `${e}${Rt(M)}${z}`,
      k
    ];
  }, p = (u) => {
    const m = u.match(c);
    if (!m)
      return;
    const [b, $, k] = m, M = m[3] ?? "", z = `:${$}(${k})`;
    return [
      M,
      u.slice(b.length),
      `${e}${Rt(M)}${z}`
    ];
  };
  return {
    name: `pseudo:${t}`,
    match(u, m) {
      if (o && i && a || (o = new RegExp(`(?:${m.generator.config.separators.join("|")})`), i = new RegExp(`^${t}-(?:(?:(${pt})-)?(${Ce}))(?:(/\\w+))?(?:${m.generator.config.separators.join("|")})`), a = new RegExp(`^${t}-(?:(?:(${pt})-)?(${ze}))(?:(/\\w+))?(?:${m.generator.config.separators.filter((L) => L !== "-").join("|")})`), c = new RegExp(`^${t}-(?:(${pt})-)?\\[(.+)\\](?:(/\\w+))?(?:${m.generator.config.separators.filter((L) => L !== "-").join("|")})`)), !u.startsWith(t))
        return;
      const b = s(u) || l(u) || p(u);
      if (!b)
        return;
      const [$, k, M, z = ""] = b;
      return $ !== "" && ae("The labeled variant is experimental and may not follow semver."), {
        matcher: k,
        handle: (L, E) => E({
          ...L,
          prefix: `${M}${r}${L.prefix}`.replace(n, "$1$2:"),
          sort: Gn.indexOf(z) ?? Hn.indexOf(z)
        })
      };
    },
    multiPass: !0
  };
}
const hs = [
  "::-webkit-resizer",
  "::-webkit-scrollbar",
  "::-webkit-scrollbar-button",
  "::-webkit-scrollbar-corner",
  "::-webkit-scrollbar-thumb",
  "::-webkit-scrollbar-track",
  "::-webkit-scrollbar-track-piece",
  "::file-selector-button"
], dr = Object.entries(vt).map(([t]) => t).sort((t, e) => e.length - t.length).join("|"), pr = Object.entries(wt).map(([t]) => t).sort((t, e) => e.length - t.length).join("|");
function gs() {
  let t, e;
  return {
    name: "pseudo",
    match(r, n) {
      t && t || (t = new RegExp(`^(${dr})(?:${n.generator.config.separators.join("|")})`), e = new RegExp(`^(${pr})(?:${n.generator.config.separators.filter((i) => i !== "-").join("|")})`));
      const o = r.match(t) || r.match(e);
      if (o) {
        const i = vt[o[1]] || wt[o[1]] || `:${o[1]}`;
        let a = Gn.indexOf(o[1]);
        return a === -1 && (a = Hn.indexOf(o[1])), a === -1 && (a = void 0), {
          matcher: r.slice(o[0].length),
          handle: (c, s) => {
            const l = i.startsWith("::") && !hs.includes(i) ? {
              pseudo: `${c.pseudo}${i}`
            } : {
              selector: `${c.selector}${i}`
            };
            return s({
              ...c,
              ...l,
              sort: a,
              noMerge: !0
            });
          }
        };
      }
    },
    multiPass: !0,
    autocomplete: `(${dr}|${pr}):`
  };
}
function bs() {
  let t, e, r;
  return {
    match(n, o) {
      t && e || (t = new RegExp(`^(${pt})-(${Ce})(?:${o.generator.config.separators.join("|")})`), e = new RegExp(`^(${pt})-(${ze})(?:${o.generator.config.separators.filter((a) => a !== "-").join("|")})`), r = new RegExp(`^(${pt})-(\\[.+\\])(?:${o.generator.config.separators.filter((a) => a !== "-").join("|")})`));
      const i = n.match(t) || n.match(e) || n.match(r);
      if (i) {
        const a = i[1], s = Ee(i[2], "[", "]") ? f.bracket(i[2]) : vt[i[2]] || wt[i[2]] || `:${i[2]}`;
        return {
          matcher: n.slice(i[0].length),
          selector: (l) => `${l}:${a}(${s})`
        };
      }
    },
    multiPass: !0,
    autocomplete: `(${pt})-(${Ce}|${ze}):`
  };
}
function ys(t = {}) {
  const e = !!(t != null && t.attributifyPseudo);
  let r = (t == null ? void 0 : t.prefix) ?? "";
  r = (Array.isArray(r) ? r : [r]).filter(Boolean)[0] ?? "";
  const n = (o, i) => ms(o, e ? `[${r}${o}=""]` : `.${r}${o}`, i);
  return [
    n("group", " "),
    n("peer", "~"),
    n("parent", ">"),
    n("previous", "+"),
    n("group-aria", " "),
    n("peer-aria", "~"),
    n("parent-aria", ">"),
    n("previous-aria", "+")
  ];
}
const xs = /(part-\[(.+)\]:)(.+)/, $s = {
  match(t) {
    const e = t.match(xs);
    if (e) {
      const r = `part(${e[2]})`;
      return {
        matcher: t.slice(e[1].length),
        selector: (n) => `${n}::${r}`
      };
    }
  },
  multiPass: !0
}, vs = {
  name: "starting",
  match(t) {
    if (t.startsWith("starting:"))
      return {
        matcher: t.slice(9),
        handle: (e, r) => r({
          ...e,
          parent: "@starting-style"
        })
      };
  }
};
function Kn(t) {
  return [
    Da,
    Ha,
    Qa,
    Ja,
    ts,
    cs,
    vs,
    ls(),
    ds,
    fs,
    us,
    Va(),
    ...Xa,
    gs(),
    bs(),
    ...ys(t),
    $s,
    ...Ga(t),
    ...Za,
    es,
    ...Ya,
    qa,
    rs,
    ...Ka,
    ...Ia,
    ns
  ];
}
const ws = [
  {
    layer: "preflights",
    getCSS(t) {
      if (t.theme.preflightBase) {
        const e = Jt(Object.entries(t.theme.preflightBase));
        return q(t.theme.preflightRoot ?? ["*,::before,::after", "::backdrop"]).map((n) => `${n}{${e}}`).join("");
      }
    }
  }
], ks = {
  position: [
    "relative",
    "absolute",
    "fixed",
    "sticky",
    "static"
  ],
  globalKeyword: I
}, Zn = (t = {}) => (t.dark = t.dark ?? "class", t.attributifyPseudo = t.attributifyPseudo ?? !1, t.preflight = t.preflight ?? !0, t.variablePrefix = t.variablePrefix ?? "un-", {
  name: "@unocss/preset-mini",
  theme: on,
  rules: Ba,
  variants: Kn(t),
  options: t,
  prefix: t.prefix,
  postprocess: Ss(t.variablePrefix),
  preflights: t.preflight ? Cs(ws, t.variablePrefix) : [],
  extractorDefault: t.arbitraryVariants === !1 ? void 0 : Jo,
  autocomplete: {
    shorthands: ks
  }
});
function Ss(t) {
  if (t !== "un-")
    return (e) => {
      e.entries.forEach((r) => {
        r[0] = r[0].replace(/^--un-/, `--${t}`), typeof r[1] == "string" && (r[1] = r[1].replace(/var\(--un-/g, `var(--${t}`));
      });
    };
}
function Cs(t, e) {
  return e !== "un-" ? t.map((r) => ({
    ...r,
    getCSS: async (n) => {
      const o = await r.getCSS(n);
      if (o)
        return o.replace(/--un-/g, `--${e}`);
    }
  })) : t;
}
const zs = [
  [/^(?:animate-)?keyframes-(.+)$/, ([, t], { theme: e }) => {
    var n, o;
    const r = (o = (n = e.animation) == null ? void 0 : n.keyframes) == null ? void 0 : o[t];
    if (r)
      return [
        `@keyframes ${t}${r}`,
        { animation: t }
      ];
  }, { autocomplete: ["animate-keyframes-$animation.keyframes", "keyframes-$animation.keyframes"] }],
  [/^animate-(.+)$/, ([, t], { theme: e }) => {
    var n, o, i, a, c, s, l, p, u, m;
    const r = (o = (n = e.animation) == null ? void 0 : n.keyframes) == null ? void 0 : o[t];
    if (r) {
      const b = ((a = (i = e.animation) == null ? void 0 : i.durations) == null ? void 0 : a[t]) ?? "1s", $ = ((s = (c = e.animation) == null ? void 0 : c.timingFns) == null ? void 0 : s[t]) ?? "linear", k = ((p = (l = e.animation) == null ? void 0 : l.counts) == null ? void 0 : p[t]) ?? 1, M = (m = (u = e.animation) == null ? void 0 : u.properties) == null ? void 0 : m[t];
      return [
        `@keyframes ${t}${r}`,
        {
          animation: `${t} ${b} ${$} ${k}`,
          ...M
        }
      ];
    }
    return { animation: f.bracket.cssvar(t) };
  }, { autocomplete: "animate-$animation.keyframes" }],
  [/^animate-name-(.+)/, ([, t]) => ({ "animation-name": f.bracket.cssvar(t) ?? t })],
  // timings
  [/^animate-duration-(.+)$/, ([, t], { theme: e }) => {
    var r;
    return { "animation-duration": ((r = e.duration) == null ? void 0 : r[t || "DEFAULT"]) ?? f.bracket.cssvar.time(t) };
  }, { autocomplete: ["animate-duration", "animate-duration-$duration"] }],
  [/^animate-delay-(.+)$/, ([, t], { theme: e }) => {
    var r;
    return { "animation-delay": ((r = e.duration) == null ? void 0 : r[t || "DEFAULT"]) ?? f.bracket.cssvar.time(t) };
  }, { autocomplete: ["animate-delay", "animate-delay-$duration"] }],
  [/^animate-ease(?:-(.+))?$/, ([, t], { theme: e }) => {
    var r;
    return { "animation-timing-function": ((r = e.easing) == null ? void 0 : r[t || "DEFAULT"]) ?? f.bracket.cssvar(t) };
  }, { autocomplete: ["animate-ease", "animate-ease-$easing"] }],
  // fill mode
  [/^animate-(fill-mode-|fill-|mode-)?(.+)$/, ([, t, e]) => ["none", "forwards", "backwards", "both", t ? I : []].includes(e) ? { "animation-fill-mode": e } : void 0, {
    autocomplete: [
      "animate-(fill|mode|fill-mode)",
      "animate-(fill|mode|fill-mode)-(none|forwards|backwards|both|inherit|initial|revert|revert-layer|unset)",
      "animate-(none|forwards|backwards|both|inherit|initial|revert|revert-layer|unset)"
    ]
  }],
  // direction
  [/^animate-(direction-)?(.+)$/, ([, t, e]) => ["normal", "reverse", "alternate", "alternate-reverse", t ? I : []].includes(e) ? { "animation-direction": e } : void 0, {
    autocomplete: [
      "animate-direction",
      "animate-direction-(normal|reverse|alternate|alternate-reverse|inherit|initial|revert|revert-layer|unset)",
      "animate-(normal|reverse|alternate|alternate-reverse|inherit|initial|revert|revert-layer|unset)"
    ]
  }],
  // others
  [/^animate-(?:iteration-count-|iteration-|count-)(.+)$/, ([, t]) => ({ "animation-iteration-count": f.bracket.cssvar(t) ?? t.replace(/-/g, ",") }), { autocomplete: ["animate-(iteration|count|iteration-count)", "animate-(iteration|count|iteration-count)-<num>"] }],
  [/^animate-(play-state-|play-|state-)?(.+)$/, ([, t, e]) => ["paused", "running", t ? I : []].includes(e) ? { "animation-play-state": e } : void 0, {
    autocomplete: [
      "animate-(play|state|play-state)",
      "animate-(play|state|play-state)-(paused|running|inherit|initial|revert|revert-layer|unset)",
      "animate-(paused|running|inherit|initial|revert|revert-layer|unset)"
    ]
  }],
  ["animate-none", { animation: "none" }],
  ...O("animate", "animation")
];
function mr(t) {
  return t ? Z(t, 0) : "rgb(255 255 255 / 0)";
}
function js(t, e, r, n) {
  return e ? n != null ? Z(e, n) : Z(e, `var(--un-${t}-opacity, ${ne(e)})`) : Z(r, n);
}
function be() {
  return ([, t, e], { theme: r }) => {
    const n = fe(e, r, "backgroundColor");
    if (!n)
      return;
    const { alpha: o, color: i, cssColor: a } = n;
    if (!i)
      return;
    const c = js(t, a, i, o);
    switch (t) {
      case "from":
        return {
          "--un-gradient-from-position": "0%",
          "--un-gradient-from": `${c} var(--un-gradient-from-position)`,
          "--un-gradient-to-position": "100%",
          "--un-gradient-to": `${mr(a)} var(--un-gradient-to-position)`,
          "--un-gradient-stops": "var(--un-gradient-from), var(--un-gradient-to)"
        };
      case "via":
        return {
          "--un-gradient-via-position": "50%",
          "--un-gradient-to": mr(a),
          "--un-gradient-stops": `var(--un-gradient-from), ${c} var(--un-gradient-via-position), var(--un-gradient-to)`
        };
      case "to":
        return {
          "--un-gradient-to-position": "100%",
          "--un-gradient-to": `${c} var(--un-gradient-to-position)`
        };
    }
  };
}
function Es() {
  return ([, t, e]) => ({
    [`--un-gradient-${t}-position`]: `${Number(f.bracket.cssvar.percent(e)) * 100}%`
  });
}
const As = [
  // gradients
  [/^bg-gradient-(.+)$/, ([, t]) => ({ "--un-gradient": f.bracket(t) }), {
    autocomplete: ["bg-gradient", "bg-gradient-(from|to|via)", "bg-gradient-(from|to|via)-$colors", "bg-gradient-(from|to|via)-(op|opacity)", "bg-gradient-(from|to|via)-(op|opacity)-<percent>"]
  }],
  [/^(?:bg-gradient-)?stops-(\[.+\])$/, ([, t]) => ({ "--un-gradient-stops": f.bracket(t) })],
  [/^(?:bg-gradient-)?(from)-(.+)$/, be()],
  [/^(?:bg-gradient-)?(via)-(.+)$/, be()],
  [/^(?:bg-gradient-)?(to)-(.+)$/, be()],
  [/^(?:bg-gradient-)?(from|via|to)-op(?:acity)?-?(.+)$/, ([, t, e]) => ({ [`--un-${t}-opacity`]: f.bracket.percent(e) })],
  [/^(from|via|to)-([\d.]+)%$/, Es()],
  // images
  [/^bg-gradient-((?:repeating-)?(?:linear|radial|conic))$/, ([, t]) => ({
    "background-image": `${t}-gradient(var(--un-gradient, var(--un-gradient-stops, rgb(255 255 255 / 0))))`
  }), { autocomplete: ["bg-gradient-repeating", "bg-gradient-(linear|radial|conic)", "bg-gradient-repeating-(linear|radial|conic)"] }],
  // ignore any center position
  [/^bg-gradient-to-([rltb]{1,2})$/, ([, t]) => {
    if (t in K)
      return {
        "--un-gradient-shape": `to ${K[t]}`,
        "--un-gradient": "var(--un-gradient-shape), var(--un-gradient-stops)",
        "background-image": "linear-gradient(var(--un-gradient))"
      };
  }, { autocomplete: `bg-gradient-to-(${Object.keys(K).filter((t) => t.length <= 2 && Array.from(t).every((e) => "rltb".includes(e))).join("|")})` }],
  [/^(?:bg-gradient-)?shape-(.+)$/, ([, t]) => {
    const e = t in K ? `to ${K[t]}` : f.bracket(t);
    if (e != null)
      return {
        "--un-gradient-shape": e,
        "--un-gradient": "var(--un-gradient-shape), var(--un-gradient-stops)"
      };
  }, { autocomplete: ["bg-gradient-shape", `bg-gradient-shape-(${Object.keys(K).join("|")})`, `shape-(${Object.keys(K).join("|")})`] }],
  ["bg-none", { "background-image": "none" }],
  ["box-decoration-slice", { "box-decoration-break": "slice" }],
  ["box-decoration-clone", { "box-decoration-break": "clone" }],
  ...O("box-decoration", "box-decoration-break"),
  // size
  ["bg-auto", { "background-size": "auto" }],
  ["bg-cover", { "background-size": "cover" }],
  ["bg-contain", { "background-size": "contain" }],
  // attachments
  ["bg-fixed", { "background-attachment": "fixed" }],
  ["bg-local", { "background-attachment": "local" }],
  ["bg-scroll", { "background-attachment": "scroll" }],
  // clips
  ["bg-clip-border", { "-webkit-background-clip": "border-box", "background-clip": "border-box" }],
  ["bg-clip-content", { "-webkit-background-clip": "content-box", "background-clip": "content-box" }],
  ["bg-clip-padding", { "-webkit-background-clip": "padding-box", "background-clip": "padding-box" }],
  ["bg-clip-text", { "-webkit-background-clip": "text", "background-clip": "text" }],
  ...I.map((t) => [`bg-clip-${t}`, {
    "-webkit-background-clip": t,
    "background-clip": t
  }]),
  // positions
  // skip 1 & 2 letters shortcut
  [/^bg-([-\w]{3,})$/, ([, t]) => ({ "background-position": K[t] })],
  // repeats
  ["bg-repeat", { "background-repeat": "repeat" }],
  ["bg-no-repeat", { "background-repeat": "no-repeat" }],
  ["bg-repeat-x", { "background-repeat": "repeat-x" }],
  ["bg-repeat-y", { "background-repeat": "repeat-y" }],
  ["bg-repeat-round", { "background-repeat": "round" }],
  ["bg-repeat-space", { "background-repeat": "space" }],
  ...O("bg-repeat", "background-repeat"),
  // origins
  ["bg-origin-border", { "background-origin": "border-box" }],
  ["bg-origin-padding", { "background-origin": "padding-box" }],
  ["bg-origin-content", { "background-origin": "content-box" }],
  ...O("bg-origin", "background-origin")
], ye = {
  disc: "disc",
  circle: "circle",
  square: "square",
  decimal: "decimal",
  "zero-decimal": "decimal-leading-zero",
  greek: "lower-greek",
  roman: "lower-roman",
  "upper-roman": "upper-roman",
  alpha: "lower-alpha",
  "upper-alpha": "upper-alpha",
  latin: "lower-latin",
  "upper-latin": "upper-latin"
}, _s = [
  // base
  [/^list-(.+?)(?:-(outside|inside))?$/, ([, t, e]) => {
    const r = ye[t];
    if (r)
      return e ? {
        "list-style-position": e,
        "list-style-type": r
      } : { "list-style-type": r };
  }, { autocomplete: [`list-(${Object.keys(ye).join("|")})`, `list-(${Object.keys(ye).join("|")})-(outside|inside)`] }],
  // styles
  ["list-outside", { "list-style-position": "outside" }],
  ["list-inside", { "list-style-position": "inside" }],
  ["list-none", { "list-style-type": "none" }],
  // image
  [/^list-image-(.+)$/, ([, t]) => {
    if (/^\[url\(.+\)\]$/.test(t))
      return { "list-style-image": f.bracket(t) };
  }],
  ["list-image-none", { "list-style-image": "none" }],
  ...O("list", "list-style-type")
], Os = [
  [/^accent-(.+)$/, H("accent-color", "accent", "accentColor"), { autocomplete: "accent-$colors" }],
  [/^accent-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-accent-opacity": f.bracket.percent(t) }), { autocomplete: ["accent-(op|opacity)", "accent-(op|opacity)-<percent>"] }]
], Ls = [
  [/^caret-(.+)$/, H("caret-color", "caret", "textColor"), { autocomplete: "caret-$colors" }],
  [/^caret-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-caret-opacity": f.bracket.percent(t) }), { autocomplete: ["caret-(op|opacity)", "caret-(op|opacity)-<percent>"] }]
], Rs = [
  ["image-render-auto", { "image-rendering": "auto" }],
  ["image-render-edge", { "image-rendering": "crisp-edges" }],
  ["image-render-pixel", [
    ["-ms-interpolation-mode", "nearest-neighbor"],
    ["image-rendering", "-webkit-optimize-contrast"],
    ["image-rendering", "-moz-crisp-edges"],
    ["image-rendering", "-o-pixelated"],
    ["image-rendering", "pixelated"]
  ]]
], Ms = [
  ["overscroll-auto", { "overscroll-behavior": "auto" }],
  ["overscroll-contain", { "overscroll-behavior": "contain" }],
  ["overscroll-none", { "overscroll-behavior": "none" }],
  ...O("overscroll", "overscroll-behavior"),
  ["overscroll-x-auto", { "overscroll-behavior-x": "auto" }],
  ["overscroll-x-contain", { "overscroll-behavior-x": "contain" }],
  ["overscroll-x-none", { "overscroll-behavior-x": "none" }],
  ...O("overscroll-x", "overscroll-behavior-x"),
  ["overscroll-y-auto", { "overscroll-behavior-y": "auto" }],
  ["overscroll-y-contain", { "overscroll-behavior-y": "contain" }],
  ["overscroll-y-none", { "overscroll-behavior-y": "none" }],
  ...O("overscroll-y", "overscroll-behavior-y")
], Ps = [
  ["scroll-auto", { "scroll-behavior": "auto" }],
  ["scroll-smooth", { "scroll-behavior": "smooth" }],
  ...O("scroll", "scroll-behavior")
], Fs = [
  [/^columns-(.+)$/, ([, t]) => ({ columns: f.bracket.global.number.auto.numberWithUnit(t) }), { autocomplete: "columns-<num>" }],
  // break before
  ["break-before-auto", { "break-before": "auto" }],
  ["break-before-avoid", { "break-before": "avoid" }],
  ["break-before-all", { "break-before": "all" }],
  ["break-before-avoid-page", { "break-before": "avoid-page" }],
  ["break-before-page", { "break-before": "page" }],
  ["break-before-left", { "break-before": "left" }],
  ["break-before-right", { "break-before": "right" }],
  ["break-before-column", { "break-before": "column" }],
  ...O("break-before"),
  // break inside
  ["break-inside-auto", { "break-inside": "auto" }],
  ["break-inside-avoid", { "break-inside": "avoid" }],
  ["break-inside-avoid-page", { "break-inside": "avoid-page" }],
  ["break-inside-avoid-column", { "break-inside": "avoid-column" }],
  ...O("break-inside"),
  // break after
  ["break-after-auto", { "break-after": "auto" }],
  ["break-after-avoid", { "break-after": "avoid" }],
  ["break-after-all", { "break-after": "all" }],
  ["break-after-avoid-page", { "break-after": "avoid-page" }],
  ["break-after-page", { "break-after": "page" }],
  ["break-after-left", { "break-after": "left" }],
  ["break-after-right", { "break-after": "right" }],
  ["break-after-column", { "break-after": "column" }],
  ...O("break-after")
], Ts = /@media \(min-width: (.+)\)/, Ws = [
  [
    /^__container$/,
    (t, e) => {
      var l, p, u, m, b, $, k;
      const { theme: r, variantHandlers: n } = e, o = (l = r.container) == null ? void 0 : l.padding;
      let i;
      Y(o) ? i = o : i = o == null ? void 0 : o.DEFAULT;
      const a = (p = r.container) == null ? void 0 : p.maxWidth;
      let c;
      for (const M of n) {
        const z = (m = (u = M.handle) == null ? void 0 : u.call(M, {}, (L) => L)) == null ? void 0 : m.parent;
        if (Y(z)) {
          const L = (b = z.match(Ts)) == null ? void 0 : b[1];
          if (L) {
            const j = ($ = (ue(e) ?? []).find((w) => w.size === L)) == null ? void 0 : $.point;
            a ? j && (c = a == null ? void 0 : a[j]) : c = L, j && !Y(o) && (i = (o == null ? void 0 : o[j]) ?? i);
          }
        }
      }
      const s = {
        "max-width": c
      };
      return n.length || (s.width = "100%"), (k = r.container) != null && k.center && (s["margin-left"] = "auto", s["margin-right"] = "auto"), o && (s["padding-left"] = i, s["padding-right"] = i), s;
    },
    { internal: !0 }
  ]
], Ns = [
  [/^(?:(\w+)[:-])?container$/, ([, t], e) => {
    let r = (ue(e) ?? []).map((o) => o.point);
    if (t) {
      if (!r.includes(t))
        return;
      r = r.slice(r.indexOf(t));
    }
    const n = r.map((o) => `${o}:__container`);
    return t || n.unshift("__container"), n;
  }]
], Us = {
  "--un-blur": T,
  "--un-brightness": T,
  "--un-contrast": T,
  "--un-drop-shadow": T,
  "--un-grayscale": T,
  "--un-hue-rotate": T,
  "--un-invert": T,
  "--un-saturate": T,
  "--un-sepia": T
}, oe = "var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia)", Bs = {
  "--un-backdrop-blur": T,
  "--un-backdrop-brightness": T,
  "--un-backdrop-contrast": T,
  "--un-backdrop-grayscale": T,
  "--un-backdrop-hue-rotate": T,
  "--un-backdrop-invert": T,
  "--un-backdrop-opacity": T,
  "--un-backdrop-saturate": T,
  "--un-backdrop-sepia": T
}, ie = "var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia)";
function xe(t) {
  let e = f.bracket.cssvar(t || "");
  if (e != null || (e = t ? f.percent(t) : "1", e != null && Number.parseFloat(e) <= 1))
    return e;
}
function at(t, e) {
  return ([, r, n], { theme: o }) => {
    const i = e(n, o) ?? (n === "none" ? "0" : "");
    if (i !== "")
      return r ? {
        [`--un-${r}${t}`]: `${t}(${i})`,
        "-webkit-backdrop-filter": ie,
        "backdrop-filter": ie
      } : {
        [`--un-${t}`]: `${t}(${i})`,
        filter: oe
      };
  };
}
function Ds([, t], { theme: e }) {
  var n;
  let r = (n = e.dropShadow) == null ? void 0 : n[t || "DEFAULT"];
  if (r != null)
    return {
      "--un-drop-shadow": `drop-shadow(${Oe(r, "--un-drop-shadow-color").join(") drop-shadow(")})`,
      filter: oe
    };
  if (r = f.bracket.cssvar(t), r != null)
    return {
      "--un-drop-shadow": `drop-shadow(${r})`,
      filter: oe
    };
}
const Is = [
  // filters
  [/^(?:(backdrop-)|filter-)?blur(?:-(.+))?$/, at("blur", (t, e) => {
    var r;
    return ((r = e.blur) == null ? void 0 : r[t || "DEFAULT"]) || f.bracket.cssvar.px(t);
  }), { autocomplete: ["(backdrop|filter)-blur-$blur", "blur-$blur", "filter-blur"] }],
  [/^(?:(backdrop-)|filter-)?brightness-(.+)$/, at("brightness", (t) => f.bracket.cssvar.percent(t)), { autocomplete: ["(backdrop|filter)-brightness-<percent>", "brightness-<percent>"] }],
  [/^(?:(backdrop-)|filter-)?contrast-(.+)$/, at("contrast", (t) => f.bracket.cssvar.percent(t)), { autocomplete: ["(backdrop|filter)-contrast-<percent>", "contrast-<percent>"] }],
  // drop-shadow only on filter
  [/^(?:filter-)?drop-shadow(?:-(.+))?$/, Ds, {
    autocomplete: [
      "filter-drop",
      "filter-drop-shadow",
      "filter-drop-shadow-color",
      "drop-shadow",
      "drop-shadow-color",
      "filter-drop-shadow-$dropShadow",
      "drop-shadow-$dropShadow",
      "filter-drop-shadow-color-$colors",
      "drop-shadow-color-$colors",
      "filter-drop-shadow-color-(op|opacity)",
      "drop-shadow-color-(op|opacity)",
      "filter-drop-shadow-color-(op|opacity)-<percent>",
      "drop-shadow-color-(op|opacity)-<percent>"
    ]
  }],
  [/^(?:filter-)?drop-shadow-color-(.+)$/, H("--un-drop-shadow-color", "drop-shadow", "shadowColor")],
  [/^(?:filter-)?drop-shadow-color-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-drop-shadow-opacity": f.bracket.percent(t) })],
  [/^(?:(backdrop-)|filter-)?grayscale(?:-(.+))?$/, at("grayscale", xe), { autocomplete: ["(backdrop|filter)-grayscale", "(backdrop|filter)-grayscale-<percent>", "grayscale-<percent>"] }],
  [/^(?:(backdrop-)|filter-)?hue-rotate-(.+)$/, at("hue-rotate", (t) => f.bracket.cssvar.degree(t))],
  [/^(?:(backdrop-)|filter-)?invert(?:-(.+))?$/, at("invert", xe), { autocomplete: ["(backdrop|filter)-invert", "(backdrop|filter)-invert-<percent>", "invert-<percent>"] }],
  // opacity only on backdrop-filter
  [/^(backdrop-)op(?:acity)?-(.+)$/, at("opacity", (t) => f.bracket.cssvar.percent(t)), { autocomplete: ["backdrop-(op|opacity)", "backdrop-(op|opacity)-<percent>"] }],
  [/^(?:(backdrop-)|filter-)?saturate-(.+)$/, at("saturate", (t) => f.bracket.cssvar.percent(t)), { autocomplete: ["(backdrop|filter)-saturate", "(backdrop|filter)-saturate-<percent>", "saturate-<percent>"] }],
  [/^(?:(backdrop-)|filter-)?sepia(?:-(.+))?$/, at("sepia", xe), { autocomplete: ["(backdrop|filter)-sepia", "(backdrop|filter)-sepia-<percent>", "sepia-<percent>"] }],
  // base
  ["filter", { filter: oe }],
  ["backdrop-filter", {
    "-webkit-backdrop-filter": ie,
    "backdrop-filter": ie
  }],
  // nones
  ["filter-none", { filter: "none" }],
  ["backdrop-filter-none", {
    "-webkit-backdrop-filter": "none",
    "backdrop-filter": "none"
  }],
  ...I.map((t) => [`filter-${t}`, { filter: t }]),
  ...I.map((t) => [`backdrop-filter-${t}`, {
    "-webkit-backdrop-filter": t,
    "backdrop-filter": t
  }])
], Vs = [
  [/^space-([xy])-(.+)$/, hr, { autocomplete: ["space-(x|y|block|inline)", "space-(x|y|block|inline)-reverse", "space-(x|y|block|inline)-$spacing"] }],
  [/^space-([xy])-reverse$/, ([, t]) => ({ [`--un-space-${t}-reverse`]: 1 })],
  [/^space-(block|inline)-(.+)$/, hr],
  [/^space-(block|inline)-reverse$/, ([, t]) => ({ [`--un-space-${t}-reverse`]: 1 })]
];
function hr([, t, e], { theme: r }) {
  var o;
  let n = ((o = r.spacing) == null ? void 0 : o[e || "DEFAULT"]) ?? f.bracket.cssvar.auto.fraction.rem(e || "1");
  if (n != null) {
    n === "0" && (n = "0px");
    const i = J[t].map((a) => {
      const c = `margin${a}`, s = a.endsWith("right") || a.endsWith("bottom") ? `calc(${n} * var(--un-space-${t}-reverse))` : `calc(${n} * calc(1 - var(--un-space-${t}-reverse)))`;
      return [c, s];
    });
    if (i)
      return [
        [`--un-space-${t}-reverse`, 0],
        ...i
      ];
  }
}
const Ys = [
  // tailwind compat
  ["uppercase", { "text-transform": "uppercase" }],
  ["lowercase", { "text-transform": "lowercase" }],
  ["capitalize", { "text-transform": "capitalize" }],
  ["normal-case", { "text-transform": "none" }]
], Xs = [
  ...["manual", "auto", "none", ...I].map((t) => [`hyphens-${t}`, {
    "-webkit-hyphens": t,
    "-ms-hyphens": t,
    hyphens: t
  }])
], qs = [
  ["write-vertical-right", { "writing-mode": "vertical-rl" }],
  ["write-vertical-left", { "writing-mode": "vertical-lr" }],
  ["write-normal", { "writing-mode": "horizontal-tb" }],
  ...O("write", "writing-mode")
], Gs = [
  ["write-orient-mixed", { "text-orientation": "mixed" }],
  ["write-orient-sideways", { "text-orientation": "sideways" }],
  ["write-orient-upright", { "text-orientation": "upright" }],
  ...O("write-orient", "text-orientation")
], Hs = [
  [
    "sr-only",
    {
      position: "absolute",
      width: "1px",
      height: "1px",
      padding: "0",
      margin: "-1px",
      overflow: "hidden",
      clip: "rect(0,0,0,0)",
      "white-space": "nowrap",
      "border-width": 0
    }
  ],
  [
    "not-sr-only",
    {
      position: "static",
      width: "auto",
      height: "auto",
      padding: "0",
      margin: "0",
      overflow: "visible",
      clip: "auto",
      "white-space": "normal"
    }
  ]
], Ks = [
  ["isolate", { isolation: "isolate" }],
  ["isolate-auto", { isolation: "auto" }],
  ["isolation-auto", { isolation: "auto" }]
], Zs = [
  // object fit
  ["object-cover", { "object-fit": "cover" }],
  ["object-contain", { "object-fit": "contain" }],
  ["object-fill", { "object-fit": "fill" }],
  ["object-scale-down", { "object-fit": "scale-down" }],
  ["object-none", { "object-fit": "none" }],
  // object position
  [/^object-(.+)$/, ([, t]) => {
    if (K[t])
      return { "object-position": K[t] };
    if (f.bracketOfPosition(t) != null)
      return { "object-position": f.bracketOfPosition(t).split(" ").map((e) => f.position.fraction.auto.px.cssvar(e) ?? e).join(" ") };
  }, { autocomplete: `object-(${Object.keys(K).join("|")})` }]
], Js = [
  ["bg-blend-multiply", { "background-blend-mode": "multiply" }],
  ["bg-blend-screen", { "background-blend-mode": "screen" }],
  ["bg-blend-overlay", { "background-blend-mode": "overlay" }],
  ["bg-blend-darken", { "background-blend-mode": "darken" }],
  ["bg-blend-lighten", { "background-blend-mode": "lighten" }],
  ["bg-blend-color-dodge", { "background-blend-mode": "color-dodge" }],
  ["bg-blend-color-burn", { "background-blend-mode": "color-burn" }],
  ["bg-blend-hard-light", { "background-blend-mode": "hard-light" }],
  ["bg-blend-soft-light", { "background-blend-mode": "soft-light" }],
  ["bg-blend-difference", { "background-blend-mode": "difference" }],
  ["bg-blend-exclusion", { "background-blend-mode": "exclusion" }],
  ["bg-blend-hue", { "background-blend-mode": "hue" }],
  ["bg-blend-saturation", { "background-blend-mode": "saturation" }],
  ["bg-blend-color", { "background-blend-mode": "color" }],
  ["bg-blend-luminosity", { "background-blend-mode": "luminosity" }],
  ["bg-blend-normal", { "background-blend-mode": "normal" }],
  ...O("bg-blend", "background-blend")
], Qs = [
  ["mix-blend-multiply", { "mix-blend-mode": "multiply" }],
  ["mix-blend-screen", { "mix-blend-mode": "screen" }],
  ["mix-blend-overlay", { "mix-blend-mode": "overlay" }],
  ["mix-blend-darken", { "mix-blend-mode": "darken" }],
  ["mix-blend-lighten", { "mix-blend-mode": "lighten" }],
  ["mix-blend-color-dodge", { "mix-blend-mode": "color-dodge" }],
  ["mix-blend-color-burn", { "mix-blend-mode": "color-burn" }],
  ["mix-blend-hard-light", { "mix-blend-mode": "hard-light" }],
  ["mix-blend-soft-light", { "mix-blend-mode": "soft-light" }],
  ["mix-blend-difference", { "mix-blend-mode": "difference" }],
  ["mix-blend-exclusion", { "mix-blend-mode": "exclusion" }],
  ["mix-blend-hue", { "mix-blend-mode": "hue" }],
  ["mix-blend-saturation", { "mix-blend-mode": "saturation" }],
  ["mix-blend-color", { "mix-blend-mode": "color" }],
  ["mix-blend-luminosity", { "mix-blend-mode": "luminosity" }],
  ["mix-blend-plus-lighter", { "mix-blend-mode": "plus-lighter" }],
  ["mix-blend-normal", { "mix-blend-mode": "normal" }],
  ...O("mix-blend")
], tc = [
  ["min-h-dvh", { "min-height": "100dvh" }],
  ["min-h-svh", { "min-height": "100svh" }],
  ["min-h-lvh", { "min-height": "100lvh" }],
  ["h-dvh", { height: "100dvh" }],
  ["h-svh", { height: "100svh" }],
  ["h-lvh", { height: "100lvh" }],
  ["max-h-dvh", { "max-height": "100dvh" }],
  ["max-h-svh", { "max-height": "100svh" }],
  ["max-h-lvh", { "max-height": "100lvh" }]
], ec = {
  "--un-border-spacing-x": 0,
  "--un-border-spacing-y": 0
}, gr = "var(--un-border-spacing-x) var(--un-border-spacing-y)", rc = [
  // displays
  ["inline-table", { display: "inline-table" }],
  ["table", { display: "table" }],
  ["table-caption", { display: "table-caption" }],
  ["table-cell", { display: "table-cell" }],
  ["table-column", { display: "table-column" }],
  ["table-column-group", { display: "table-column-group" }],
  ["table-footer-group", { display: "table-footer-group" }],
  ["table-header-group", { display: "table-header-group" }],
  ["table-row", { display: "table-row" }],
  ["table-row-group", { display: "table-row-group" }],
  // layouts
  ["border-collapse", { "border-collapse": "collapse" }],
  ["border-separate", { "border-collapse": "separate" }],
  [/^border-spacing-(.+)$/, ([, t], { theme: e }) => {
    var n;
    const r = ((n = e.spacing) == null ? void 0 : n[t]) ?? f.bracket.cssvar.global.auto.fraction.rem(t);
    if (r != null)
      return {
        "--un-border-spacing-x": r,
        "--un-border-spacing-y": r,
        "border-spacing": gr
      };
  }, { autocomplete: ["border-spacing", "border-spacing-$spacing"] }],
  [/^border-spacing-([xy])-(.+)$/, ([, t, e], { theme: r }) => {
    var o;
    const n = ((o = r.spacing) == null ? void 0 : o[e]) ?? f.bracket.cssvar.global.auto.fraction.rem(e);
    if (n != null)
      return {
        [`--un-border-spacing-${t}`]: n,
        "border-spacing": gr
      };
  }, { autocomplete: ["border-spacing-(x|y)", "border-spacing-(x|y)-$spacing"] }],
  ["caption-top", { "caption-side": "top" }],
  ["caption-bottom", { "caption-side": "bottom" }],
  ["table-auto", { "table-layout": "auto" }],
  ["table-fixed", { "table-layout": "fixed" }],
  ["table-empty-cells-visible", { "empty-cells": "show" }],
  ["table-empty-cells-hidden", { "empty-cells": "hide" }]
], nc = {
  "bg-blend": "background-blend-mode",
  "bg-clip": "-webkit-background-clip",
  "bg-gradient": "linear-gradient",
  "bg-image": "background-image",
  "bg-origin": "background-origin",
  "bg-position": "background-position",
  "bg-repeat": "background-repeat",
  "bg-size": "background-size",
  "mix-blend": "mix-blend-mode",
  object: "object-fit",
  "object-position": "object-position",
  write: "writing-mode",
  "write-orient": "text-orientation"
}, oc = [
  [/^(.+?)-(\$.+)$/, ([, t, e]) => {
    const r = nc[t];
    if (r)
      return { [r]: f.cssvar(e) };
  }]
], ic = [
  // divides
  [/^divide-?([xy])$/, Zt, { autocomplete: ["divide-(x|y|block|inline)", "divide-(x|y|block|inline)-reverse", "divide-(x|y|block|inline)-$lineWidth"] }],
  [/^divide-?([xy])-?(.+)$/, Zt],
  [/^divide-?([xy])-reverse$/, ([, t]) => ({ [`--un-divide-${t}-reverse`]: 1 })],
  [/^divide-(block|inline)$/, Zt],
  [/^divide-(block|inline)-(.+)$/, Zt],
  [/^divide-(block|inline)-reverse$/, ([, t]) => ({ [`--un-divide-${t}-reverse`]: 1 })],
  // color & opacity
  [/^divide-(.+)$/, H("border-color", "divide", "borderColor"), { autocomplete: "divide-$colors" }],
  [/^divide-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-divide-opacity": f.bracket.percent(t) }), { autocomplete: ["divide-(op|opacity)", "divide-(op|opacity)-<percent>"] }],
  // styles
  ...yt.map((t) => [`divide-${t}`, { "border-style": t }])
];
function Zt([, t, e], { theme: r }) {
  var o;
  let n = ((o = r.lineWidth) == null ? void 0 : o[e || "DEFAULT"]) ?? f.bracket.cssvar.px(e || "1");
  if (n != null) {
    n === "0" && (n = "0px");
    const i = J[t].map((a) => {
      const c = `border${a}-width`, s = a.endsWith("right") || a.endsWith("bottom") ? `calc(${n} * var(--un-divide-${t}-reverse))` : `calc(${n} * calc(1 - var(--un-divide-${t}-reverse)))`;
      return [c, s];
    });
    if (i)
      return [
        [`--un-divide-${t}-reverse`, 0],
        ...i
      ];
  }
}
const ac = [
  [/^line-clamp-(\d+)$/, ([, t]) => ({
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": t,
    "line-clamp": t
  }), { autocomplete: ["line-clamp", "line-clamp-<num>"] }],
  ...["none", ...I].map((t) => [`line-clamp-${t}`, {
    overflow: "visible",
    display: "block",
    "-webkit-box-orient": "horizontal",
    "-webkit-line-clamp": t,
    "line-clamp": t
  }])
], sc = {
  "--un-ordinal": T,
  "--un-slashed-zero": T,
  "--un-numeric-figure": T,
  "--un-numeric-spacing": T,
  "--un-numeric-fraction": T
};
function lt(t) {
  return {
    ...t,
    "font-variant-numeric": "var(--un-ordinal) var(--un-slashed-zero) var(--un-numeric-figure) var(--un-numeric-spacing) var(--un-numeric-fraction)"
  };
}
const cc = [
  [/^ordinal$/, () => lt({ "--un-ordinal": "ordinal" }), { autocomplete: "ordinal" }],
  [/^slashed-zero$/, () => lt({ "--un-slashed-zero": "slashed-zero" }), { autocomplete: "slashed-zero" }],
  [/^lining-nums$/, () => lt({ "--un-numeric-figure": "lining-nums" }), { autocomplete: "lining-nums" }],
  [/^oldstyle-nums$/, () => lt({ "--un-numeric-figure": "oldstyle-nums" }), { autocomplete: "oldstyle-nums" }],
  [/^proportional-nums$/, () => lt({ "--un-numeric-spacing": "proportional-nums" }), { autocomplete: "proportional-nums" }],
  [/^tabular-nums$/, () => lt({ "--un-numeric-spacing": "tabular-nums" }), { autocomplete: "tabular-nums" }],
  [/^diagonal-fractions$/, () => lt({ "--un-numeric-fraction": "diagonal-fractions" }), { autocomplete: "diagonal-fractions" }],
  [/^stacked-fractions$/, () => lt({ "--un-numeric-fraction": "stacked-fractions" }), { autocomplete: "stacked-fractions" }],
  ["normal-nums", { "font-variant-numeric": "normal" }]
], lc = {
  "--un-pan-x": T,
  "--un-pan-y": T,
  "--un-pinch-zoom": T
}, $e = "var(--un-pan-x) var(--un-pan-y) var(--un-pinch-zoom)", fc = [
  [/^touch-pan-(x|left|right)$/, ([, t]) => ({
    "--un-pan-x": `pan-${t}`,
    "touch-action": $e
  }), { autocomplete: ["touch-pan", "touch-pan-(x|left|right|y|up|down)"] }],
  [/^touch-pan-(y|up|down)$/, ([, t]) => ({
    "--un-pan-y": `pan-${t}`,
    "touch-action": $e
  })],
  ["touch-pinch-zoom", {
    "--un-pinch-zoom": "pinch-zoom",
    "touch-action": $e
  }],
  ["touch-auto", { "touch-action": "auto" }],
  ["touch-manipulation", { "touch-action": "manipulation" }],
  ["touch-none", { "touch-action": "none" }],
  ...O("touch", "touch-action")
], uc = {
  "--un-scroll-snap-strictness": "proximity"
}, dc = [
  // snap type
  [/^snap-(x|y)$/, ([, t]) => ({
    "scroll-snap-type": `${t} var(--un-scroll-snap-strictness)`
  }), { autocomplete: "snap-(x|y|both)" }],
  [/^snap-both$/, () => ({
    "scroll-snap-type": "both var(--un-scroll-snap-strictness)"
  })],
  ["snap-mandatory", { "--un-scroll-snap-strictness": "mandatory" }],
  ["snap-proximity", { "--un-scroll-snap-strictness": "proximity" }],
  ["snap-none", { "scroll-snap-type": "none" }],
  // snap align
  ["snap-start", { "scroll-snap-align": "start" }],
  ["snap-end", { "scroll-snap-align": "end" }],
  ["snap-center", { "scroll-snap-align": "center" }],
  ["snap-align-none", { "scroll-snap-align": "none" }],
  // snap stop
  ["snap-normal", { "scroll-snap-stop": "normal" }],
  ["snap-always", { "scroll-snap-stop": "always" }],
  // scroll margin
  [/^scroll-ma?()-?(.+)$/, D("scroll-margin"), {
    autocomplete: [
      "scroll-(m|p|ma|pa|block|inline)",
      "scroll-(m|p|ma|pa|block|inline)-$spacing",
      "scroll-(m|p|ma|pa|block|inline)-(x|y|r|l|t|b|bs|be|is|ie)",
      "scroll-(m|p|ma|pa|block|inline)-(x|y|r|l|t|b|bs|be|is|ie)-$spacing"
    ]
  }],
  [/^scroll-m-?([xy])-?(.+)$/, D("scroll-margin")],
  [/^scroll-m-?([rltb])-?(.+)$/, D("scroll-margin")],
  [/^scroll-m-(block|inline)-(.+)$/, D("scroll-margin")],
  [/^scroll-m-?([bi][se])-?(.+)$/, D("scroll-margin")],
  // scroll padding
  [/^scroll-pa?()-?(.+)$/, D("scroll-padding")],
  [/^scroll-p-?([xy])-?(.+)$/, D("scroll-padding")],
  [/^scroll-p-?([rltb])-?(.+)$/, D("scroll-padding")],
  [/^scroll-p-(block|inline)-(.+)$/, D("scroll-padding")],
  [/^scroll-p-?([bi][se])-?(.+)$/, D("scroll-padding")]
], pc = [
  // The prefix `$ ` is intentional. This rule is not to be matched directly from user-generated token.
  // See variants/placeholder.
  [/^\$ placeholder-(.+)$/, H("color", "placeholder", "accentColor"), { autocomplete: "placeholder-$colors" }],
  [/^\$ placeholder-op(?:acity)?-?(.+)$/, ([, t]) => ({ "--un-placeholder-opacity": f.bracket.percent(t) }), { autocomplete: ["placeholder-(op|opacity)", "placeholder-(op|opacity)-<percent>"] }]
], mc = [
  [/^view-transition-([\w-]+)$/, ([, t]) => ({ "view-transition-name": t })]
], hc = [
  Bn,
  oc,
  Dn,
  Ws,
  Fr,
  Hs,
  Tr,
  Mr,
  _n,
  Rn,
  ac,
  Ks,
  Pn,
  On,
  En,
  Mn,
  Un,
  Fn,
  Rr,
  Wn,
  Tn,
  $n,
  rc,
  en,
  zs,
  Pr,
  fc,
  Nr,
  Wr,
  dc,
  _s,
  fn,
  Fs,
  Fe,
  Pe,
  Me,
  jn,
  Ln,
  Vs,
  ic,
  An,
  Ms,
  Ps,
  Yr,
  Ur,
  Ir,
  dn,
  mn,
  As,
  hn,
  Vn,
  Zs,
  Nn,
  sn,
  kn,
  Vr,
  an,
  vn,
  Xr,
  Ys,
  qr,
  cc,
  bn,
  Gr,
  wn,
  Sn,
  Cn,
  Xs,
  qs,
  Gs,
  Ls,
  Os,
  pn,
  Js,
  Qs,
  Qr,
  cn,
  Kr,
  Rs,
  Is,
  xn,
  un,
  Br,
  Dr,
  pc,
  gn,
  mc,
  tc,
  // should be the last
  In
].flat(1), gc = [
  ...Ns
], bc = {
  ...on,
  aria: {
    busy: 'busy="true"',
    checked: 'checked="true"',
    disabled: 'disabled="true"',
    expanded: 'expanded="true"',
    hidden: 'hidden="true"',
    pressed: 'pressed="true"',
    readonly: 'readonly="true"',
    required: 'required="true"',
    selected: 'selected="true"'
  },
  animation: {
    keyframes: {
      pulse: "{0%, 100% {opacity:1} 50% {opacity:.5}}",
      bounce: "{0%, 100% {transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1)} 50% {transform:translateY(0);animation-timing-function:cubic-bezier(0,0,0.2,1)}}",
      spin: "{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}",
      ping: "{0%{transform:scale(1);opacity:1}75%,100%{transform:scale(2);opacity:0}}",
      "bounce-alt": "{from,20%,53%,80%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1);transform:translate3d(0,0,0)}40%,43%{animation-timing-function:cubic-bezier(0.755,0.05,0.855,0.06);transform:translate3d(0,-30px,0)}70%{animation-timing-function:cubic-bezier(0.755,0.05,0.855,0.06);transform:translate3d(0,-15px,0)}90%{transform:translate3d(0,-4px,0)}}",
      flash: "{from,50%,to{opacity:1}25%,75%{opacity:0}}",
      "pulse-alt": "{from{transform:scale3d(1,1,1)}50%{transform:scale3d(1.05,1.05,1.05)}to{transform:scale3d(1,1,1)}}",
      "rubber-band": "{from{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,0.75,1)}40%{transform:scale3d(0.75,1.25,1)}50%{transform:scale3d(1.15,0.85,1)}65%{transform:scale3d(0.95,1.05,1)}75%{transform:scale3d(1.05,0.95,1)}to{transform:scale3d(1,1,1)}}",
      "shake-x": "{from,to{transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}20%,40%,60%,80%{transform:translate3d(10px,0,0)}}",
      "shake-y": "{from,to{transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{transform:translate3d(0,-10px,0)}20%,40%,60%,80%{transform:translate3d(0,10px,0)}}",
      "head-shake": "{0%{transform:translateX(0)}6.5%{transform:translateX(-6px) rotateY(-9deg)}18.5%{transform:translateX(5px) rotateY(7deg)}31.5%{transform:translateX(-3px) rotateY(-5deg)}43.5%{transform:translateX(2px) rotateY(3deg)}50%{transform:translateX(0)}}",
      swing: "{20%{transform:rotate3d(0,0,1,15deg)}40%{transform:rotate3d(0,0,1,-10deg)}60%{transform:rotate3d(0,0,1,5deg)}80%{transform:rotate3d(0,0,1,-5deg)}to{transform:rotate3d(0,0,1,0deg)}}",
      tada: "{from{transform:scale3d(1,1,1)}10%,20%{transform:scale3d(0.9,0.9,0.9) rotate3d(0,0,1,-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)}to{transform:scale3d(1,1,1)}}",
      wobble: "{from{transform:translate3d(0,0,0)}15%{transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg)}30%{transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg)}45%{transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg)}60%{transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg)}75%{transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg)}to{transform:translate3d(0,0,0)}}",
      jello: "{from,11.1%,to{transform:translate3d(0,0,0)}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg)skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-0.78125deg) skewY(-0.78125deg)}77.7%{transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{transform:skewX(-0.1953125deg) skewY(-0.1953125deg)}}",
      "heart-beat": "{0%{transform:scale(1)}14%{transform:scale(1.3)}28%{transform:scale(1)}42%{transform:scale(1.3)}70%{transform:scale(1)}}",
      hinge: "{0%{transform-origin:top left;animation-timing-function:ease-in-out}20%,60%{transform:rotate3d(0,0,1,80deg);transform-origin:top left;animation-timing-function:ease-in-out}40%,80%{transform:rotate3d(0,0,1,60deg);transform-origin:top left;animation-timing-function:ease-in-out}to{transform:translate3d(0,700px,0);opacity:0}}",
      "jack-in-the-box": "{from{opacity:0;transform-origin:center bottom;transform:scale(0.1) rotate(30deg)}50%{transform:rotate(-10deg)}70%{transform:rotate(3deg)}to{transform:scale(1)}}",
      "light-speed-in-left": "{from{opacity:0;transform:translate3d(-100%,0,0) skewX(-30deg)}60%{opacity:1;transform:skewX(20deg)}80%{transform:skewX(-5deg)}to{transform:translate3d(0,0,0)}}",
      "light-speed-in-right": "{from{opacity:0;transform:translate3d(100%,0,0) skewX(-30deg)}60%{opacity:1;transform:skewX(20deg)}80%{transform:skewX(-5deg)}to{transform:translate3d(0,0,0)}}",
      "light-speed-out-left": "{from{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0) skewX(30deg)}}",
      "light-speed-out-right": "{from{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) skewX(30deg)}}",
      flip: "{from{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);animation-timing-function:ease-out}40%{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);animation-timing-function:ease-out}50%{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);animation-timing-function:ease-in}80%{transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);animation-timing-function:ease-in}to{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);animation-timing-function:ease-in}}",
      "flip-in-x": "{from{transform:perspective(400px) rotate3d(1,0,0,90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotate3d(1,0,0,-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{transform:perspective(400px) rotate3d(1,0,0,-5deg)}to{transform:perspective(400px)}}",
      "flip-in-y": "{from{transform:perspective(400px) rotate3d(0,1,0,90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotate3d(0,1,0,-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotate3d(0,1,0,10deg);opacity:1}80%{transform:perspective(400px) rotate3d(0,1,0,-5deg)}to{transform:perspective(400px)}}",
      "flip-out-x": "{from{transform:perspective(400px)}30%{transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}to{transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}",
      "flip-out-y": "{from{transform:perspective(400px)}30%{transform:perspective(400px) rotate3d(0,1,0,-15deg);opacity:1}to{transform:perspective(400px) rotate3d(0,1,0,90deg);opacity:0}}",
      "rotate-in": "{from{transform-origin:center;transform:rotate3d(0,0,1,-200deg);opacity:0}to{transform-origin:center;transform:translate3d(0,0,0);opacity:1}}",
      "rotate-in-down-left": "{from{transform-origin:left bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}to{transform-origin:left bottom;transform:translate3d(0,0,0);opacity:1}}",
      "rotate-in-down-right": "{from{transform-origin:right bottom;transform:rotate3d(0,0,1,45deg);opacity:0}to{transform-origin:right bottom;transform:translate3d(0,0,0);opacity:1}}",
      "rotate-in-up-left": "{from{transform-origin:left top;transform:rotate3d(0,0,1,45deg);opacity:0}to{transform-origin:left top;transform:translate3d(0,0,0);opacity:1}}",
      "rotate-in-up-right": "{from{transform-origin:right bottom;transform:rotate3d(0,0,1,-90deg);opacity:0}to{transform-origin:right bottom;transform:translate3d(0,0,0);opacity:1}}",
      "rotate-out": "{from{transform-origin:center;opacity:1}to{transform-origin:center;transform:rotate3d(0,0,1,200deg);opacity:0}}",
      "rotate-out-down-left": "{from{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate3d(0,0,1,45deg);opacity:0}}",
      "rotate-out-down-right": "{from{transform-origin:right bottom;opacity:1}to{transform-origin:right bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}}",
      "rotate-out-up-left": "{from{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}}",
      "rotate-out-up-right": "{from{transform-origin:right bottom;opacity:1}to{transform-origin:left bottom;transform:rotate3d(0,0,1,90deg);opacity:0}}",
      "roll-in": "{from{opacity:0;transform:translate3d(-100%,0,0) rotate3d(0,0,1,-120deg)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "roll-out": "{from{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) rotate3d(0,0,1,120deg)}}",
      "zoom-in": "{from{opacity:0;transform:scale3d(0.3,0.3,0.3)}50%{opacity:1}}",
      "zoom-in-down": "{from{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(0,-1000px,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}60%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
      "zoom-in-left": "{from{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(-1000px,0,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}60%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(10px,0,0);animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
      "zoom-in-right": "{from{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(1000px,0,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}60%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(-10px,0,0);animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
      "zoom-in-up": "{from{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(0,1000px,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}60%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
      "zoom-out": "{from{opacity:1}50%{opacity:0;transform:scale3d(0.3,0.3,0.3)}to{opacity:0}}",
      "zoom-out-down": "{40%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}to{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(0,2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
      "zoom-out-left": "{40%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(42px,0,0)}to{opacity:0;transform:scale(0.1) translate3d(-2000px,0,0);transform-origin:left center}}",
      "zoom-out-right": "{40%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(-42px,0,0)}to{opacity:0;transform:scale(0.1) translate3d(2000px,0,0);transform-origin:right center}}",
      "zoom-out-up": "{40%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}to{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(0,-2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
      "bounce-in": "{from,20%,40%,60%,80%,to{animation-timing-function:ease-in-out}0%{opacity:0;transform:scale3d(0.3,0.3,0.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(0.9,0.9,0.9)}60%{transform:scale3d(1.03,1.03,1.03);opacity:1}80%{transform:scale3d(0.97,0.97,0.97)}to{opacity:1;transform:scale3d(1,1,1)}}",
      "bounce-in-down": "{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:translate3d(0,0,0)}}",
      "bounce-in-left": "{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:translate3d(0,0,0)}}",
      "bounce-in-right": "{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:translate3d(0,0,0)}}",
      "bounce-in-up": "{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translate3d(0,0,0)}}",
      "bounce-out": "{20%{transform:scale3d(0.9,0.9,0.9)}50%,55%{opacity:1;transform:scale3d(1.1,1.1,1.1)}to{opacity:0;transform:scale3d(0.3,0.3,0.3)}}",
      "bounce-out-down": "{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}",
      "bounce-out-left": "{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}",
      "bounce-out-right": "{20%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(2000px,0,0)}}",
      "bounce-out-up": "{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}",
      "slide-in-down": "{from{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translate3d(0,0,0)}}",
      "slide-in-left": "{from{transform:translate3d(-100%,0,0);visibility:visible}to{transform:translate3d(0,0,0)}}",
      "slide-in-right": "{from{transform:translate3d(100%,0,0);visibility:visible}to{transform:translate3d(0,0,0)}}",
      "slide-in-up": "{from{transform:translate3d(0,100%,0);visibility:visible}to{transform:translate3d(0,0,0)}}",
      "slide-out-down": "{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(0,100%,0)}}",
      "slide-out-left": "{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(-100%,0,0)}}",
      "slide-out-right": "{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(100%,0,0)}}",
      "slide-out-up": "{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(0,-100%,0)}}",
      "fade-in": "{from{opacity:0}to{opacity:1}}",
      "fade-in-down": "{from{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-in-down-big": "{from{opacity:0;transform:translate3d(0,-2000px,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-in-left": "{from{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-in-left-big": "{from{opacity:0;transform:translate3d(-2000px,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-in-right": "{from{opacity:0;transform:translate3d(100%,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-in-right-big": "{from{opacity:0;transform:translate3d(2000px,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-in-up": "{from{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-in-up-big": "{from{opacity:0;transform:translate3d(0,2000px,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-in-top-left": "{from{opacity:0;transform:translate3d(-100%,-100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-in-top-right": "{from{opacity:0;transform:translate3d(100%,-100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-in-bottom-left": "{from{opacity:0;transform:translate3d(-100%,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-in-bottom-right": "{from{opacity:0;transform:translate3d(100%,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
      "fade-out": "{from{opacity:1}to{opacity:0}}",
      "fade-out-down": "{from{opacity:1}to{opacity:0;transform:translate3d(0,100%,0)}}",
      "fade-out-down-big": "{from{opacity:1}to{opacity:0;transform:translate3d(0,2000px,0)}}",
      "fade-out-left": "{from{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0)}}",
      "fade-out-left-big": "{from{opacity:1}to{opacity:0;transform:translate3d(-2000px,0,0)}}",
      "fade-out-right": "{from{opacity:1}to{opacity:0;transform:translate3d(100%,0,0)}}",
      "fade-out-right-big": "{from{opacity:1}to{opacity:0;transform:translate3d(2000px,0,0)}}",
      "fade-out-up": "{from{opacity:1}to{opacity:0;transform:translate3d(0,-100%,0)}}",
      "fade-out-up-big": "{from{opacity:1}to{opacity:0;transform:translate3d(0,-2000px,0)}}",
      "fade-out-top-left": "{from{opacity:1;transform:translate3d(0,0,0)}to{opacity:0;transform:translate3d(-100%,-100%,0)}}",
      "fade-out-top-right": "{from{opacity:1;transform:translate3d(0,0,0)}to{opacity:0;transform:translate3d(100%,-100%,0)}}",
      "fade-out-bottom-left": "{from{opacity:1;transform:translate3d(0,0,0)}to{opacity:0;transform:translate3d(-100%,100%,0)}}",
      "fade-out-bottom-right": "{from{opacity:1;transform:translate3d(0,0,0)}to{opacity:0;transform:translate3d(100%,100%,0)}}",
      "back-in-up": "{0%{opacity:0.7;transform:translateY(1200px) scale(0.7)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:1;transform:scale(1)}}",
      "back-in-down": "{0%{opacity:0.7;transform:translateY(-1200px) scale(0.7)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:1;transform:scale(1)}}",
      "back-in-right": "{0%{opacity:0.7;transform:translateX(2000px) scale(0.7)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:1;transform:scale(1)}}",
      "back-in-left": "{0%{opacity:0.7;transform:translateX(-2000px) scale(0.7)}80%{opacity:0.7;transform:translateX(0px) scale(0.7)}100%{opacity:1;transform:scale(1)}}",
      "back-out-up": "{0%{opacity:1;transform:scale(1)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:0.7;transform:translateY(-700px) scale(0.7)}}",
      "back-out-down": "{0%{opacity:1;transform:scale(1)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:0.7;transform:translateY(700px) scale(0.7)}}",
      "back-out-right": "{0%{opacity:1;transform:scale(1)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:0.7;transform:translateX(2000px) scale(0.7)}}",
      "back-out-left": "{0%{opacity:1;transform:scale(1)}80%{opacity:0.7;transform:translateX(-2000px) scale(0.7)}100%{opacity:0.7;transform:translateY(-700px) scale(0.7)}}"
    },
    durations: {
      pulse: "2s",
      "heart-beat": "1.3s",
      "bounce-in": "0.75s",
      "bounce-out": "0.75s",
      "flip-out-x": "0.75s",
      "flip-out-y": "0.75s",
      hinge: "2s"
    },
    timingFns: {
      pulse: "cubic-bezier(0.4,0,.6,1)",
      ping: "cubic-bezier(0,0,.2,1)",
      "head-shake": "ease-in-out",
      "heart-beat": "ease-in-out",
      "pulse-alt": "ease-in-out",
      "light-speed-in-left": "ease-out",
      "light-speed-in-right": "ease-out",
      "light-speed-out-left": "ease-in",
      "light-speed-out-right": "ease-in"
    },
    properties: {
      "bounce-alt": { "transform-origin": "center bottom" },
      jello: { "transform-origin": "center" },
      swing: { "transform-origin": "top center" },
      flip: { "backface-visibility": "visible" },
      "flip-in-x": { "backface-visibility": "visible !important" },
      "flip-in-y": { "backface-visibility": "visible !important" },
      "flip-out-x": { "backface-visibility": "visible !important" },
      "flip-out-y": { "backface-visibility": "visible !important" },
      "rotate-in": { "transform-origin": "center" },
      "rotate-in-down-left": { "transform-origin": "left bottom" },
      "rotate-in-down-right": { "transform-origin": "right bottom" },
      "rotate-in-up-left": { "transform-origin": "left bottom" },
      "rotate-in-up-right": { "transform-origin": "right bottom" },
      "rotate-out": { "transform-origin": "center" },
      "rotate-out-down-left": { "transform-origin": "left bottom" },
      "rotate-out-down-right": { "transform-origin": "right bottom" },
      "rotate-out-up-left": { "transform-origin": "left bottom" },
      "rotate-out-up-right": { "transform-origin": "right bottom" },
      hinge: { "transform-origin": "top left" },
      "zoom-out-down": { "transform-origin": "center bottom" },
      "zoom-out-left": { "transform-origin": "left center" },
      "zoom-out-right": { "transform-origin": "right center" },
      "zoom-out-up": { "transform-origin": "center bottom" }
    },
    counts: {
      spin: "infinite",
      ping: "infinite",
      pulse: "infinite",
      "pulse-alt": "infinite",
      bounce: "infinite",
      "bounce-alt": "infinite"
    }
  },
  media: {
    portrait: "(orientation: portrait)",
    landscape: "(orientation: landscape)",
    os_dark: "(prefers-color-scheme: dark)",
    os_light: "(prefers-color-scheme: light)",
    motion_ok: "(prefers-reduced-motion: no-preference)",
    motion_not_ok: "(prefers-reduced-motion: reduce)",
    high_contrast: "(prefers-contrast: high)",
    low_contrast: "(prefers-contrast: low)",
    opacity_ok: "(prefers-reduced-transparency: no-preference)",
    opacity_not_ok: "(prefers-reduced-transparency: reduce)",
    use_data_ok: "(prefers-reduced-data: no-preference)",
    use_data_not_ok: "(prefers-reduced-data: reduce)",
    touch: "(hover: none) and (pointer: coarse)",
    stylus: "(hover: none) and (pointer: fine)",
    pointer: "(hover) and (pointer: coarse)",
    mouse: "(hover) and (pointer: fine)",
    hd_color: "(dynamic-range: high)"
  },
  supports: {
    grid: "(display: grid)"
  },
  preflightBase: {
    ...tn,
    ...lc,
    ...uc,
    ...sc,
    ...ec,
    ...Jr,
    ...Hr,
    ...Us,
    ...Bs
  }
}, yc = [
  ct("svg", (t) => ({ selector: `${t.selector} svg` }))
], xc = [
  ct(".dark", (t) => ({ prefix: `.dark $$ ${t.prefix}` })),
  ct(".light", (t) => ({ prefix: `.light $$ ${t.prefix}` })),
  rt("@dark", "@media (prefers-color-scheme: dark)"),
  rt("@light", "@media (prefers-color-scheme: light)")
], $c = [
  rt("contrast-more", "@media (prefers-contrast: more)"),
  rt("contrast-less", "@media (prefers-contrast: less)")
], vc = [
  rt("motion-reduce", "@media (prefers-reduced-motion: reduce)"),
  rt("motion-safe", "@media (prefers-reduced-motion: no-preference)")
], wc = [
  rt("landscape", "@media (orientation: landscape)"),
  rt("portrait", "@media (orientation: portrait)")
], kc = (t) => {
  if (!t.startsWith("_") && (/space-[xy]-.+$/.test(t) || /divide-/.test(t)))
    return {
      matcher: t,
      selector: (e) => {
        const r = ">:not([hidden])~:not([hidden])";
        return e.includes(r) ? e : `${e}${r}`;
      }
    };
}, Sc = [
  ct("@hover", (t) => ({
    parent: `${t.parent ? `${t.parent} $$ ` : ""}@media (hover: hover) and (pointer: fine)`,
    selector: `${t.selector || ""}:hover`
  }))
], Cc = (t, { theme: e }) => {
  const r = t.match(/^(.*)\b(placeholder-)(.+)$/);
  if (r) {
    const [, n = "", o, i] = r;
    if (Le(i, e, "accentColor") || zc(i))
      return {
        // Append `placeholder-$ ` (with space!) to the rule to be matched.
        // The `placeholder-` is added for placeholder variant processing, and
        // the `$ ` is added for rule matching after `placeholder-` is removed by the variant.
        // See rules/placeholder.
        matcher: `${n}placeholder-$ ${o}${i}`
      };
  }
};
function zc(t) {
  const e = t.match(/^op(?:acity)?-?(.+)$/);
  return e && e[1] != null ? f.bracket.percent(e[1]) != null : !1;
}
function jc(t) {
  return [
    Cc,
    kc,
    ...Kn(t),
    ...$c,
    ...wc,
    ...vc,
    ...yc,
    ...xc,
    ...Sc
  ];
}
function Ec(t) {
  if (t == null || t === !1)
    return [];
  const e = (r) => r.startsWith(":is(") && r.endsWith(")") ? r : r.includes("::") ? r.replace(/(.*?)(\s*::.*)/, ":is($1)$2") : `:is(${r})`;
  return [
    t === !0 ? (r) => {
      r.entries.forEach((n) => {
        n[1] != null && !String(n[1]).endsWith("!important") && (n[1] += " !important");
      });
    } : (r) => {
      r.selector.startsWith(t) || (r.selector = `${t} ${e(r.selector)}`);
    }
  ];
}
function Ac(t) {
  return [
    ...q(Zn(t).postprocess),
    ...Ec(t.important)
  ];
}
const _c = (t = {}) => (t.important = t.important ?? !1, {
  ...Zn(t),
  name: "@unocss/preset-wind",
  theme: bc,
  rules: hc,
  shortcuts: gc,
  variants: jc(t),
  postprocess: Ac(t)
});
function br(t, e, r) {
  return `calc(${e} + (${t} - ${e}) * ${r} / 100)`;
}
function Jn(t, e, r) {
  const n = [t, e], o = [];
  for (let a = 0; a < 2; a++) {
    const c = typeof n[a] == "string" ? ft(n[a]) : n[a];
    if (!c || !["rgb", "rgba"].includes(c.type))
      return;
    o.push(c);
  }
  const i = [];
  for (let a = 0; a < 3; a++)
    i.push(br(o[0].components[a], o[1].components[a], r));
  return {
    type: "rgb",
    components: i,
    alpha: br(o[0].alpha ?? 1, o[1].alpha ?? 1, r)
  };
}
function Qn(t, e) {
  return Jn("#fff", t, e);
}
function to(t, e) {
  return Jn("#000", t, e);
}
function Oc(t, e) {
  const r = Number.parseFloat(`${e}`);
  if (!Number.isNaN(r))
    return r > 0 ? to(t, e) : Qn(t, -r);
}
const Lc = { tint: Qn, shade: to, shift: Oc };
function Rc() {
  let t;
  return {
    name: "mix",
    match(e, r) {
      t || (t = new RegExp(`^mix-(tint|shade|shift)-(-?\\d{1,3})(?:${r.generator.config.separators.join("|")})`));
      const n = e.match(t);
      if (n)
        return {
          matcher: e.slice(n[0].length),
          body: (o) => (o.forEach((i) => {
            if (i[1]) {
              const a = ft(`${i[1]}`);
              if (a) {
                const c = Lc[n[1]](a, n[2]);
                c && (i[1] = Z(c));
              }
            }
          }), o)
        };
    }
  };
}
const Tc = (t = {}) => {
  const e = _c(t);
  return {
    ...e,
    name: "@unocss/preset-uno",
    variants: [
      ...e.variants,
      Rc()
    ]
  };
};
export {
  Fc as a,
  Mc as b,
  Qo as c,
  Pc as g,
  Tc as p,
  ti as r
};

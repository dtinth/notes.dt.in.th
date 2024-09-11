function Q(u) {
  return "children" in u ? Z(u) : "value" in u ? u.value : "";
}
function Eu(u) {
  return u.type === "text" ? u.value : "children" in u ? Z(u) : "";
}
function Z(u) {
  let F = -1;
  const D = [];
  for (; ++F < u.children.length; )
    D[F] = Eu(u.children[F]);
  return D.join("");
}
const v = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(u) {
    if (u == null)
      return ou;
    if (typeof u == "function")
      return O(u);
    if (typeof u == "object")
      return Array.isArray(u) ? su(u) : Cu(u);
    if (typeof u == "string")
      return Au(u);
    throw new Error("Expected function, string, or object as test");
  }
);
function su(u) {
  const F = [];
  let D = -1;
  for (; ++D < u.length; )
    F[D] = v(u[D]);
  return O(r);
  function r(...t) {
    let n = -1;
    for (; ++n < F.length; )
      if (F[n].apply(this, t)) return !0;
    return !1;
  }
}
function Cu(u) {
  const F = (
    /** @type {Record<string, unknown>} */
    u
  );
  return O(D);
  function D(r) {
    const t = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let n;
    for (n in u)
      if (t[n] !== F[n]) return !1;
    return !0;
  }
}
function Au(u) {
  return O(F);
  function F(D) {
    return D && D.type === u;
  }
}
function O(u) {
  return F;
  function F(D, r, t) {
    return !!(iu(D) && u.call(
      this,
      D,
      typeof r == "number" ? r : void 0,
      t || void 0
    ));
  }
}
function ou() {
  return !0;
}
function iu(u) {
  return u !== null && typeof u == "object" && "type" in u;
}
const uu = [], Bu = !0, $ = !1, k = "skip";
function fu(u, F, D, r) {
  let t;
  typeof F == "function" && typeof D != "function" ? (r = D, D = F) : t = F;
  const n = v(t), e = r ? -1 : 1;
  c(u, void 0, [])();
  function c(E, f, A) {
    const o = (
      /** @type {Record<string, unknown>} */
      E && typeof E == "object" ? E : {}
    );
    if (typeof o.type == "string") {
      const C = (
        // `hast`
        typeof o.tagName == "string" ? o.tagName : (
          // `xast`
          typeof o.name == "string" ? o.name : void 0
        )
      );
      Object.defineProperty(s, "name", {
        value: "node (" + (E.type + (C ? "<" + C + ">" : "")) + ")"
      });
    }
    return s;
    function s() {
      let C = uu, i, B, g;
      if ((!F || n(E, f, A[A.length - 1] || void 0)) && (C = au(D(E, A)), C[0] === $))
        return C;
      if ("children" in E && E.children) {
        const a = (
          /** @type {UnistParent} */
          E
        );
        if (a.children && C[0] !== k)
          for (B = (r ? a.children.length : -1) + e, g = A.concat(a); B > -1 && B < a.children.length; ) {
            const l = a.children[B];
            if (i = c(l, B, g)(), i[0] === $)
              return i;
            B = typeof i[1] == "number" ? i[1] : B + e;
          }
      }
      return C;
    }
  }
}
function au(u) {
  return Array.isArray(u) ? u : typeof u == "number" ? [Bu, u] : u == null ? uu : [u];
}
function P(u, F, D, r) {
  let t, n, e;
  n = F, e = D, t = r, fu(u, n, c, t);
  function c(E, f) {
    const A = f[f.length - 1], o = A ? A.children.indexOf(E) : void 0;
    return e(E, o, A);
  }
}
const x = "language-";
function Iu(u, F) {
  const D = u.getLoadedLanguages(), {
    addLanguageClass: r = !1,
    parseMetaString: t,
    cache: n,
    defaultLanguage: e,
    fallbackLanguage: c,
    onError: E,
    stripEndNewline: f = !0,
    ...A
  } = F;
  return function(o) {
    P(o, "element", (s, C, i) => {
      var Y, _;
      if (!i || C == null || s.tagName !== "pre")
        return;
      const B = s.children[0];
      if (!B || B.type !== "element" || B.tagName !== "code" || !B.properties)
        return;
      const g = B.properties.className, a = Array.isArray(g) ? g.find(
        (p) => typeof p == "string" && p.startsWith(x)
      ) : void 0;
      let l = typeof a == "string" ? a.slice(x.length) : e;
      if (!l)
        return;
      c && !D.includes(l) && (l = c);
      let h = Q(B);
      f && h.endsWith(`
`) && (h = h.slice(0, -1));
      const V = n == null ? void 0 : n.get(h);
      if (V) {
        i.children.splice(C, 1, ...V);
        return;
      }
      const J = ((Y = B.data) == null ? void 0 : Y.meta) ?? ((_ = B.properties.metastring) == null ? void 0 : _.toString()) ?? "", cu = (t == null ? void 0 : t(J, s, o)) || {}, m = {
        ...A,
        lang: l,
        meta: {
          ...A.meta,
          ...cu,
          __raw: J
        }
      };
      r && (m.transformers || (m.transformers = []), m.transformers.push({
        name: "rehype-shiki:code-language-class",
        code(p) {
          return this.addClassToHast(p, `${x}${l}`), p;
        }
      }));
      try {
        const p = u.codeToHast(h, m);
        n == null || n.set(h, p.children), i.children.splice(C, 1, ...p.children);
      } catch (p) {
        if (E)
          E(p);
        else
          throw p;
      }
    });
  };
}
const Du = -1, j = 0, N = 1, S = 2, R = 3, T = 4, L = 5, M = 6, Fu = 7, tu = 8, G = typeof self == "object" ? self : globalThis, lu = (u, F) => {
  const D = (t, n) => (u.set(n, t), t), r = (t) => {
    if (u.has(t))
      return u.get(t);
    const [n, e] = F[t];
    switch (n) {
      case j:
      case Du:
        return D(e, t);
      case N: {
        const c = D([], t);
        for (const E of e)
          c.push(r(E));
        return c;
      }
      case S: {
        const c = D({}, t);
        for (const [E, f] of e)
          c[r(E)] = r(f);
        return c;
      }
      case R:
        return D(new Date(e), t);
      case T: {
        const { source: c, flags: E } = e;
        return D(new RegExp(c, E), t);
      }
      case L: {
        const c = D(/* @__PURE__ */ new Map(), t);
        for (const [E, f] of e)
          c.set(r(E), r(f));
        return c;
      }
      case M: {
        const c = D(/* @__PURE__ */ new Set(), t);
        for (const E of e)
          c.add(r(E));
        return c;
      }
      case Fu: {
        const { name: c, message: E } = e;
        return D(new G[c](E), t);
      }
      case tu:
        return D(BigInt(e), t);
      case "BigInt":
        return D(Object(BigInt(e)), t);
    }
    return D(new G[n](e), t);
  };
  return r;
}, W = (u) => lu(/* @__PURE__ */ new Map(), u)(0), y = "", { toString: pu } = {}, { keys: gu } = Object, d = (u) => {
  const F = typeof u;
  if (F !== "object" || !u)
    return [j, F];
  const D = pu.call(u).slice(8, -1);
  switch (D) {
    case "Array":
      return [N, y];
    case "Object":
      return [S, y];
    case "Date":
      return [R, y];
    case "RegExp":
      return [T, y];
    case "Map":
      return [L, y];
    case "Set":
      return [M, y];
  }
  return D.includes("Array") ? [N, D] : D.includes("Error") ? [Fu, D] : [S, D];
}, b = ([u, F]) => u === j && (F === "function" || F === "symbol"), hu = (u, F, D, r) => {
  const t = (e, c) => {
    const E = r.push(e) - 1;
    return D.set(c, E), E;
  }, n = (e) => {
    if (D.has(e))
      return D.get(e);
    let [c, E] = d(e);
    switch (c) {
      case j: {
        let A = e;
        switch (E) {
          case "bigint":
            c = tu, A = e.toString();
            break;
          case "function":
          case "symbol":
            if (u)
              throw new TypeError("unable to serialize " + E);
            A = null;
            break;
          case "undefined":
            return t([Du], e);
        }
        return t([c, A], e);
      }
      case N: {
        if (E)
          return t([E, [...e]], e);
        const A = [], o = t([c, A], e);
        for (const s of e)
          A.push(n(s));
        return o;
      }
      case S: {
        if (E)
          switch (E) {
            case "BigInt":
              return t([E, e.toString()], e);
            case "Boolean":
            case "Number":
            case "String":
              return t([E, e.valueOf()], e);
          }
        if (F && "toJSON" in e)
          return n(e.toJSON());
        const A = [], o = t([c, A], e);
        for (const s of gu(e))
          (u || !b(d(e[s]))) && A.push([n(s), n(e[s])]);
        return o;
      }
      case R:
        return t([c, e.toISOString()], e);
      case T: {
        const { source: A, flags: o } = e;
        return t([c, { source: A, flags: o }], e);
      }
      case L: {
        const A = [], o = t([c, A], e);
        for (const [s, C] of e)
          (u || !(b(d(s)) || b(d(C)))) && A.push([n(s), n(C)]);
        return o;
      }
      case M: {
        const A = [], o = t([c, A], e);
        for (const s of e)
          (u || !b(d(s))) && A.push(n(s));
        return o;
      }
    }
    const { message: f } = e;
    return t([c, { name: E, message: f }], e);
  };
  return n;
}, X = (u, { json: F, lossy: D } = {}) => {
  const r = [];
  return hu(!(F || D), !!F, /* @__PURE__ */ new Map(), r)(u), r;
}, yu = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (u, F) => F && ("json" in F || "lossy" in F) ? W(X(u, F)) : structuredClone(u)
) : (u, F) => W(X(u, F));
function eu(u) {
  const F = u.type === "element" ? u.tagName.toLowerCase() : "", D = F.length === 2 && F.charCodeAt(0) === 104 ? F.charCodeAt(1) : 0;
  return D > 48 && D < 55 ? D - 48 : void 0;
}
const nu = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends TestFunction>(test: Condition) => (element: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element & Predicate<Condition, Element>) &
   *   (<Condition extends string>(test: Condition) => (element: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element & {tagName: Condition}) &
   *   ((test?: null | undefined) => (element?: unknown, index?: number | null | undefined, parent?: Parents | null | undefined, context?: unknown) => element is Element) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test | null | undefined} [test]
   * @returns {Check}
   */
  function(u) {
    if (u == null)
      return bu;
    if (typeof u == "string")
      return mu(u);
    if (typeof u == "object")
      return du(u);
    if (typeof u == "function")
      return z(u);
    throw new Error("Expected function, string, or array as `test`");
  }
);
function du(u) {
  const F = [];
  let D = -1;
  for (; ++D < u.length; )
    F[D] = nu(u[D]);
  return z(r);
  function r(...t) {
    let n = -1;
    for (; ++n < F.length; )
      if (F[n].apply(this, t)) return !0;
    return !1;
  }
}
function mu(u) {
  return z(F);
  function F(D) {
    return D.tagName === u;
  }
}
function z(u) {
  return F;
  function F(D, r, t) {
    return !!(wu(D) && u.call(
      this,
      D,
      typeof r == "number" ? r : void 0,
      t || void 0
    ));
  }
}
function bu(u) {
  return !!(u && typeof u == "object" && "type" in u && u.type === "element" && "tagName" in u && typeof u.tagName == "string");
}
function wu(u) {
  return u !== null && typeof u == "object" && "type" in u && "tagName" in u;
}
const K = {
  type: "element",
  tagName: "span",
  properties: { className: ["icon", "icon-link"] },
  children: []
}, ku = {};
function Pu(u) {
  const F = u || ku;
  let D = F.properties;
  const r = F.headingProperties, t = F.behavior || "prepend", n = F.content, e = F.group, c = nu(F.test);
  let E;
  return t === "after" || t === "before" ? E = A : t === "wrap" ? E = o : (E = f, D || (D = { ariaHidden: "true", tabIndex: -1 })), function(s) {
    P(s, "element", function(C, i, B) {
      if (eu(C) && C.properties.id && c(C, i, B))
        return Object.assign(C.properties, w(r, C)), E(C, i, B);
    });
  };
  function f(s) {
    const C = U(n || K, s);
    return s.children[t === "prepend" ? "unshift" : "push"](
      I(s, w(D, s), C)
    ), [k];
  }
  function A(s, C, i) {
    if (typeof C != "number" || !i) return;
    const B = U(n || K, s), g = I(s, w(D, s), B);
    let a = t === "before" ? [g, s] : [s, g];
    if (e) {
      const l = ru(e, s);
      l && !Array.isArray(l) && l.type === "element" && (l.children = a, a = [l]);
    }
    return i.children.splice(C, 1, ...a), [k, C + a.length];
  }
  function o(s) {
    let C = s.children, i = [];
    return typeof n == "function" ? (C = [], i = n(s)) : n && (i = H(n)), s.children = [
      I(
        s,
        w(D, s),
        Array.isArray(i) ? [...C, ...i] : [...C, i]
      )
    ], [k];
  }
}
function H(u) {
  return (
    /** @type {Cloneable<T>} */
    yu(u)
  );
}
function I(u, F, D) {
  return {
    type: "element",
    tagName: "a",
    properties: { ...F, href: "#" + u.properties.id },
    children: D
  };
}
function U(u, F) {
  const D = ru(u, F);
  return Array.isArray(D) ? D : [D];
}
function ru(u, F) {
  return typeof u == "function" ? u(F) : H(u);
}
function w(u, F) {
  return typeof u == "function" ? u(F) : u ? H(u) : {};
}
const Nu = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g, Su = Object.hasOwnProperty;
class Ou {
  /**
   * Create a new slug class.
   */
  constructor() {
    this.occurrences, this.reset();
  }
  /**
   * Generate a unique slug.
  *
  * Tracks previously generated slugs: repeated calls with the same value
  * will result in different slugs.
  * Use the `slug` function to get same slugs.
   *
   * @param  {string} value
   *   String of text to slugify
   * @param  {boolean} [maintainCase=false]
   *   Keep the current case, otherwise make all lowercase
   * @return {string}
   *   A unique slug string
   */
  slug(F, D) {
    const r = this;
    let t = ju(F, D === !0);
    const n = t;
    for (; Su.call(r.occurrences, t); )
      r.occurrences[n]++, t = n + "-" + r.occurrences[n];
    return r.occurrences[t] = 0, t;
  }
  /**
   * Reset - Forget all previous slugs
   *
   * @return void
   */
  reset() {
    this.occurrences = /* @__PURE__ */ Object.create(null);
  }
}
function ju(u, F) {
  return typeof u != "string" ? "" : (F || (u = u.toLowerCase()), u.replace(Nu, "").replace(/ /g, "-"));
}
const xu = {}, q = new Ou();
function Ru(u) {
  const D = (u || xu).prefix || "";
  return function(r) {
    q.reset(), P(r, "element", function(t) {
      eu(t) && !t.properties.id && (t.properties.id = D + q.slug(Q(t)));
    });
  };
}
const Tu = (u) => {
  const {
    hoistStyle: F = !0,
    hoistScript: D = !0
  } = u || {};
  return (r) => {
    const t = [], n = [], e = {
      type: "element",
      tagName: "template",
      properties: {},
      children: [],
      content: {
        type: "root",
        children: r.children.filter((c) => F && c.type === "element" && c.tagName === "style" ? (n.push(c), !1) : D && c.type === "element" && c.tagName === "script" ? (t.push(c), !1) : !0)
      }
    };
    return r.children = [
      ...t,
      e,
      ...n
    ], r;
  };
};
export {
  Pu as a,
  Iu as b,
  Tu as c,
  Ru as r
};

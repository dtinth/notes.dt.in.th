import { a as getAugmentedNamespace, g as getDefaultExportFromCjs } from "./unocss_DW1qlqnA.js";
const __viteBrowserExternal = {}, __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" })), require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var toString = Object.prototype.toString, kindOf = function(r) {
  if (r === void 0) return "undefined";
  if (r === null) return "null";
  var n = typeof r;
  if (n === "boolean") return "boolean";
  if (n === "string") return "string";
  if (n === "number") return "number";
  if (n === "symbol") return "symbol";
  if (n === "function")
    return isGeneratorFn(r) ? "generatorfunction" : "function";
  if (isArray(r)) return "array";
  if (isBuffer$1(r)) return "buffer";
  if (isArguments(r)) return "arguments";
  if (isDate(r)) return "date";
  if (isError(r)) return "error";
  if (isRegexp(r)) return "regexp";
  switch (ctorName(r)) {
    case "Symbol":
      return "symbol";
    case "Promise":
      return "promise";
    case "WeakMap":
      return "weakmap";
    case "WeakSet":
      return "weakset";
    case "Map":
      return "map";
    case "Set":
      return "set";
    case "Int8Array":
      return "int8array";
    case "Uint8Array":
      return "uint8array";
    case "Uint8ClampedArray":
      return "uint8clampedarray";
    case "Int16Array":
      return "int16array";
    case "Uint16Array":
      return "uint16array";
    case "Int32Array":
      return "int32array";
    case "Uint32Array":
      return "uint32array";
    case "Float32Array":
      return "float32array";
    case "Float64Array":
      return "float64array";
  }
  if (isGeneratorObj(r))
    return "generator";
  switch (n = toString.call(r), n) {
    case "[object Object]":
      return "object";
    case "[object Map Iterator]":
      return "mapiterator";
    case "[object Set Iterator]":
      return "setiterator";
    case "[object String Iterator]":
      return "stringiterator";
    case "[object Array Iterator]":
      return "arrayiterator";
  }
  return n.slice(8, -1).toLowerCase().replace(/\s/g, "");
};
function ctorName(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function isArray(e) {
  return Array.isArray ? Array.isArray(e) : e instanceof Array;
}
function isError(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function isDate(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function isRegexp(e) {
  return e instanceof RegExp ? !0 : typeof e.flags == "string" && typeof e.ignoreCase == "boolean" && typeof e.multiline == "boolean" && typeof e.global == "boolean";
}
function isGeneratorFn(e, r) {
  return ctorName(e) === "GeneratorFunction";
}
function isGeneratorObj(e) {
  return typeof e.throw == "function" && typeof e.return == "function" && typeof e.next == "function";
}
function isArguments(e) {
  try {
    if (typeof e.length == "number" && typeof e.callee == "function")
      return !0;
  } catch (r) {
    if (r.message.indexOf("callee") !== -1)
      return !0;
  }
  return !1;
}
function isBuffer$1(e) {
  return e.constructor && typeof e.constructor.isBuffer == "function" ? e.constructor.isBuffer(e) : !1;
}
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */
var isExtendable = function(r) {
  return typeof r < "u" && r !== null && (typeof r == "object" || typeof r == "function");
}, isObject$1 = isExtendable, extendShallow = function(r) {
  isObject$1(r) || (r = {});
  for (var n = arguments.length, t = 1; t < n; t++) {
    var o = arguments[t];
    isObject$1(o) && assign(r, o);
  }
  return r;
};
function assign(e, r) {
  for (var n in r)
    hasOwn(r, n) && (e[n] = r[n]);
}
function hasOwn(e, r) {
  return Object.prototype.hasOwnProperty.call(e, r);
}
var typeOf$2 = kindOf, extend$1 = extendShallow, sectionMatter = function(e, r) {
  typeof r == "function" && (r = { parse: r });
  var n = toObject(e), t = { section_delimiter: "---", parse: identity }, o = extend$1({}, t, r), l = o.section_delimiter, c = n.content.split(/\r?\n/), a = null, u = createSection(), f = [], p = [];
  function s(A) {
    n.content = A, a = [], f = [];
  }
  function h(A) {
    p.length && (u.key = getKey(p[0], l), u.content = A, o.parse(u, a), a.push(u), u = createSection(), f = [], p = []);
  }
  for (var d = 0; d < c.length; d++) {
    var g = c[d], E = p.length, m = g.trim();
    if (isDelimiter(m, l)) {
      if (m.length === 3 && d !== 0) {
        if (E === 0 || E === 2) {
          f.push(g);
          continue;
        }
        p.push(m), u.data = f.join(`
`), f = [];
        continue;
      }
      a === null && s(f.join(`
`)), E === 2 && h(f.join(`
`)), p.push(m);
      continue;
    }
    f.push(g);
  }
  return a === null ? s(f.join(`
`)) : h(f.join(`
`)), n.sections = a, n;
};
function isDelimiter(e, r) {
  return !(e.slice(0, r.length) !== r || e.charAt(r.length + 1) === r.slice(-1));
}
function toObject(e) {
  if (typeOf$2(e) !== "object" && (e = { content: e }), typeof e.content != "string" && !isBuffer(e.content))
    throw new TypeError("expected a buffer or string");
  return e.content = e.content.toString(), e.sections = [], e;
}
function getKey(e, r) {
  return e ? e.slice(r.length).trim() : "";
}
function createSection() {
  return { key: "", data: "", content: "" };
}
function identity(e) {
  return e;
}
function isBuffer(e) {
  return e && e.constructor && typeof e.constructor.isBuffer == "function" ? e.constructor.isBuffer(e) : !1;
}
var engines$2 = { exports: {} }, jsYaml$1 = {}, loader$1 = {}, common$6 = {};
function isNothing(e) {
  return typeof e > "u" || e === null;
}
function isObject(e) {
  return typeof e == "object" && e !== null;
}
function toArray(e) {
  return Array.isArray(e) ? e : isNothing(e) ? [] : [e];
}
function extend(e, r) {
  var n, t, o, l;
  if (r)
    for (l = Object.keys(r), n = 0, t = l.length; n < t; n += 1)
      o = l[n], e[o] = r[o];
  return e;
}
function repeat(e, r) {
  var n = "", t;
  for (t = 0; t < r; t += 1)
    n += e;
  return n;
}
function isNegativeZero(e) {
  return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
common$6.isNothing = isNothing;
common$6.isObject = isObject;
common$6.toArray = toArray;
common$6.repeat = repeat;
common$6.isNegativeZero = isNegativeZero;
common$6.extend = extend;
function YAMLException$4(e, r) {
  Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = r, this.message = (this.reason || "(unknown reason)") + (this.mark ? " " + this.mark.toString() : ""), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
YAMLException$4.prototype = Object.create(Error.prototype);
YAMLException$4.prototype.constructor = YAMLException$4;
YAMLException$4.prototype.toString = function(r) {
  var n = this.name + ": ";
  return n += this.reason || "(unknown reason)", !r && this.mark && (n += " " + this.mark.toString()), n;
};
var exception = YAMLException$4, common$5 = common$6;
function Mark$1(e, r, n, t, o) {
  this.name = e, this.buffer = r, this.position = n, this.line = t, this.column = o;
}
Mark$1.prototype.getSnippet = function(r, n) {
  var t, o, l, c, a;
  if (!this.buffer) return null;
  for (r = r || 4, n = n || 75, t = "", o = this.position; o > 0 && `\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(o - 1)) === -1; )
    if (o -= 1, this.position - o > n / 2 - 1) {
      t = " ... ", o += 5;
      break;
    }
  for (l = "", c = this.position; c < this.buffer.length && `\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(c)) === -1; )
    if (c += 1, c - this.position > n / 2 - 1) {
      l = " ... ", c -= 5;
      break;
    }
  return a = this.buffer.slice(o, c), common$5.repeat(" ", r) + t + a + l + `
` + common$5.repeat(" ", r + this.position - o + t.length) + "^";
};
Mark$1.prototype.toString = function(r) {
  var n, t = "";
  return this.name && (t += 'in "' + this.name + '" '), t += "at line " + (this.line + 1) + ", column " + (this.column + 1), r || (n = this.getSnippet(), n && (t += `:
` + n)), t;
};
var mark = Mark$1, YAMLException$3 = exception, TYPE_CONSTRUCTOR_OPTIONS = [
  "kind",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "defaultStyle",
  "styleAliases"
], YAML_NODE_KINDS = [
  "scalar",
  "sequence",
  "mapping"
];
function compileStyleAliases(e) {
  var r = {};
  return e !== null && Object.keys(e).forEach(function(n) {
    e[n].forEach(function(t) {
      r[String(t)] = n;
    });
  }), r;
}
function Type$h(e, r) {
  if (r = r || {}, Object.keys(r).forEach(function(n) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(n) === -1)
      throw new YAMLException$3('Unknown option "' + n + '" is met in definition of "' + e + '" YAML type.');
  }), this.tag = e, this.kind = r.kind || null, this.resolve = r.resolve || function() {
    return !0;
  }, this.construct = r.construct || function(n) {
    return n;
  }, this.instanceOf = r.instanceOf || null, this.predicate = r.predicate || null, this.represent = r.represent || null, this.defaultStyle = r.defaultStyle || null, this.styleAliases = compileStyleAliases(r.styleAliases || null), YAML_NODE_KINDS.indexOf(this.kind) === -1)
    throw new YAMLException$3('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
}
var type = Type$h, common$4 = common$6, YAMLException$2 = exception, Type$g = type;
function compileList(e, r, n) {
  var t = [];
  return e.include.forEach(function(o) {
    n = compileList(o, r, n);
  }), e[r].forEach(function(o) {
    n.forEach(function(l, c) {
      l.tag === o.tag && l.kind === o.kind && t.push(c);
    }), n.push(o);
  }), n.filter(function(o, l) {
    return t.indexOf(l) === -1;
  });
}
function compileMap() {
  var e = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {}
  }, r, n;
  function t(o) {
    e[o.kind][o.tag] = e.fallback[o.tag] = o;
  }
  for (r = 0, n = arguments.length; r < n; r += 1)
    arguments[r].forEach(t);
  return e;
}
function Schema$5(e) {
  this.include = e.include || [], this.implicit = e.implicit || [], this.explicit = e.explicit || [], this.implicit.forEach(function(r) {
    if (r.loadKind && r.loadKind !== "scalar")
      throw new YAMLException$2("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
  }), this.compiledImplicit = compileList(this, "implicit", []), this.compiledExplicit = compileList(this, "explicit", []), this.compiledTypeMap = compileMap(this.compiledImplicit, this.compiledExplicit);
}
Schema$5.DEFAULT = null;
Schema$5.create = function() {
  var r, n;
  switch (arguments.length) {
    case 1:
      r = Schema$5.DEFAULT, n = arguments[0];
      break;
    case 2:
      r = arguments[0], n = arguments[1];
      break;
    default:
      throw new YAMLException$2("Wrong number of arguments for Schema.create function");
  }
  if (r = common$4.toArray(r), n = common$4.toArray(n), !r.every(function(t) {
    return t instanceof Schema$5;
  }))
    throw new YAMLException$2("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
  if (!n.every(function(t) {
    return t instanceof Type$g;
  }))
    throw new YAMLException$2("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  return new Schema$5({
    include: r,
    explicit: n
  });
};
var schema = Schema$5, Type$f = type, str = new Type$f("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(e) {
    return e !== null ? e : "";
  }
}), Type$e = type, seq = new Type$e("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(e) {
    return e !== null ? e : [];
  }
}), Type$d = type, map = new Type$d("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(e) {
    return e !== null ? e : {};
  }
}), Schema$4 = schema, failsafe = new Schema$4({
  explicit: [
    str,
    seq,
    map
  ]
}), Type$c = type;
function resolveYamlNull(e) {
  if (e === null) return !0;
  var r = e.length;
  return r === 1 && e === "~" || r === 4 && (e === "null" || e === "Null" || e === "NULL");
}
function constructYamlNull() {
  return null;
}
function isNull(e) {
  return e === null;
}
var _null = new Type$c("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    }
  },
  defaultStyle: "lowercase"
}), Type$b = type;
function resolveYamlBoolean(e) {
  if (e === null) return !1;
  var r = e.length;
  return r === 4 && (e === "true" || e === "True" || e === "TRUE") || r === 5 && (e === "false" || e === "False" || e === "FALSE");
}
function constructYamlBoolean(e) {
  return e === "true" || e === "True" || e === "TRUE";
}
function isBoolean(e) {
  return Object.prototype.toString.call(e) === "[object Boolean]";
}
var bool = new Type$b("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function(e) {
      return e ? "true" : "false";
    },
    uppercase: function(e) {
      return e ? "TRUE" : "FALSE";
    },
    camelcase: function(e) {
      return e ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
}), common$3 = common$6, Type$a = type;
function isHexCode(e) {
  return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
}
function isOctCode(e) {
  return 48 <= e && e <= 55;
}
function isDecCode(e) {
  return 48 <= e && e <= 57;
}
function resolveYamlInteger(e) {
  if (e === null) return !1;
  var r = e.length, n = 0, t = !1, o;
  if (!r) return !1;
  if (o = e[n], (o === "-" || o === "+") && (o = e[++n]), o === "0") {
    if (n + 1 === r) return !0;
    if (o = e[++n], o === "b") {
      for (n++; n < r; n++)
        if (o = e[n], o !== "_") {
          if (o !== "0" && o !== "1") return !1;
          t = !0;
        }
      return t && o !== "_";
    }
    if (o === "x") {
      for (n++; n < r; n++)
        if (o = e[n], o !== "_") {
          if (!isHexCode(e.charCodeAt(n))) return !1;
          t = !0;
        }
      return t && o !== "_";
    }
    for (; n < r; n++)
      if (o = e[n], o !== "_") {
        if (!isOctCode(e.charCodeAt(n))) return !1;
        t = !0;
      }
    return t && o !== "_";
  }
  if (o === "_") return !1;
  for (; n < r; n++)
    if (o = e[n], o !== "_") {
      if (o === ":") break;
      if (!isDecCode(e.charCodeAt(n)))
        return !1;
      t = !0;
    }
  return !t || o === "_" ? !1 : o !== ":" ? !0 : /^(:[0-5]?[0-9])+$/.test(e.slice(n));
}
function constructYamlInteger(e) {
  var r = e, n = 1, t, o, l = [];
  return r.indexOf("_") !== -1 && (r = r.replace(/_/g, "")), t = r[0], (t === "-" || t === "+") && (t === "-" && (n = -1), r = r.slice(1), t = r[0]), r === "0" ? 0 : t === "0" ? r[1] === "b" ? n * parseInt(r.slice(2), 2) : r[1] === "x" ? n * parseInt(r, 16) : n * parseInt(r, 8) : r.indexOf(":") !== -1 ? (r.split(":").forEach(function(c) {
    l.unshift(parseInt(c, 10));
  }), r = 0, o = 1, l.forEach(function(c) {
    r += c * o, o *= 60;
  }), n * r) : n * parseInt(r, 10);
}
function isInteger(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && e % 1 === 0 && !common$3.isNegativeZero(e);
}
var int = new Type$a("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary: function(e) {
      return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
    },
    octal: function(e) {
      return e >= 0 ? "0" + e.toString(8) : "-0" + e.toString(8).slice(1);
    },
    decimal: function(e) {
      return e.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(e) {
      return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
}), common$2 = common$6, Type$9 = type, YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function resolveYamlFloat(e) {
  return !(e === null || !YAML_FLOAT_PATTERN.test(e) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  e[e.length - 1] === "_");
}
function constructYamlFloat(e) {
  var r, n, t, o;
  return r = e.replace(/_/g, "").toLowerCase(), n = r[0] === "-" ? -1 : 1, o = [], "+-".indexOf(r[0]) >= 0 && (r = r.slice(1)), r === ".inf" ? n === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : r === ".nan" ? NaN : r.indexOf(":") >= 0 ? (r.split(":").forEach(function(l) {
    o.unshift(parseFloat(l, 10));
  }), r = 0, t = 1, o.forEach(function(l) {
    r += l * t, t *= 60;
  }), n * r) : n * parseFloat(r, 10);
}
var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
function representYamlFloat(e, r) {
  var n;
  if (isNaN(e))
    switch (r) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === e)
    switch (r) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === e)
    switch (r) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (common$2.isNegativeZero(e))
    return "-0.0";
  return n = e.toString(10), SCIENTIFIC_WITHOUT_DOT.test(n) ? n.replace("e", ".e") : n;
}
function isFloat(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || common$2.isNegativeZero(e));
}
var float = new Type$9("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: "lowercase"
}), Schema$3 = schema, json = new Schema$3({
  include: [
    failsafe
  ],
  implicit: [
    _null,
    bool,
    int,
    float
  ]
}), Schema$2 = schema, core = new Schema$2({
  include: [
    json
  ]
}), Type$8 = type, YAML_DATE_REGEXP = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), YAML_TIMESTAMP_REGEXP = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function resolveYamlTimestamp(e) {
  return e === null ? !1 : YAML_DATE_REGEXP.exec(e) !== null || YAML_TIMESTAMP_REGEXP.exec(e) !== null;
}
function constructYamlTimestamp(e) {
  var r, n, t, o, l, c, a, u = 0, f = null, p, s, h;
  if (r = YAML_DATE_REGEXP.exec(e), r === null && (r = YAML_TIMESTAMP_REGEXP.exec(e)), r === null) throw new Error("Date resolve error");
  if (n = +r[1], t = +r[2] - 1, o = +r[3], !r[4])
    return new Date(Date.UTC(n, t, o));
  if (l = +r[4], c = +r[5], a = +r[6], r[7]) {
    for (u = r[7].slice(0, 3); u.length < 3; )
      u += "0";
    u = +u;
  }
  return r[9] && (p = +r[10], s = +(r[11] || 0), f = (p * 60 + s) * 6e4, r[9] === "-" && (f = -f)), h = new Date(Date.UTC(n, t, o, l, c, a, u)), f && h.setTime(h.getTime() - f), h;
}
function representYamlTimestamp(e) {
  return e.toISOString();
}
var timestamp = new Type$8("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
}), Type$7 = type;
function resolveYamlMerge(e) {
  return e === "<<" || e === null;
}
var merge = new Type$7("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: resolveYamlMerge
});
function commonjsRequire(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var NodeBuffer;
try {
  var _require$1 = commonjsRequire;
  NodeBuffer = _require$1("buffer").Buffer;
} catch {
}
var Type$6 = type, BASE64_MAP = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function resolveYamlBinary(e) {
  if (e === null) return !1;
  var r, n, t = 0, o = e.length, l = BASE64_MAP;
  for (n = 0; n < o; n++)
    if (r = l.indexOf(e.charAt(n)), !(r > 64)) {
      if (r < 0) return !1;
      t += 6;
    }
  return t % 8 === 0;
}
function constructYamlBinary(e) {
  var r, n, t = e.replace(/[\r\n=]/g, ""), o = t.length, l = BASE64_MAP, c = 0, a = [];
  for (r = 0; r < o; r++)
    r % 4 === 0 && r && (a.push(c >> 16 & 255), a.push(c >> 8 & 255), a.push(c & 255)), c = c << 6 | l.indexOf(t.charAt(r));
  return n = o % 4 * 6, n === 0 ? (a.push(c >> 16 & 255), a.push(c >> 8 & 255), a.push(c & 255)) : n === 18 ? (a.push(c >> 10 & 255), a.push(c >> 2 & 255)) : n === 12 && a.push(c >> 4 & 255), NodeBuffer ? NodeBuffer.from ? NodeBuffer.from(a) : new NodeBuffer(a) : a;
}
function representYamlBinary(e) {
  var r = "", n = 0, t, o, l = e.length, c = BASE64_MAP;
  for (t = 0; t < l; t++)
    t % 3 === 0 && t && (r += c[n >> 18 & 63], r += c[n >> 12 & 63], r += c[n >> 6 & 63], r += c[n & 63]), n = (n << 8) + e[t];
  return o = l % 3, o === 0 ? (r += c[n >> 18 & 63], r += c[n >> 12 & 63], r += c[n >> 6 & 63], r += c[n & 63]) : o === 2 ? (r += c[n >> 10 & 63], r += c[n >> 4 & 63], r += c[n << 2 & 63], r += c[64]) : o === 1 && (r += c[n >> 2 & 63], r += c[n << 4 & 63], r += c[64], r += c[64]), r;
}
function isBinary(e) {
  return NodeBuffer && NodeBuffer.isBuffer(e);
}
var binary = new Type$6("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
}), Type$5 = type, _hasOwnProperty$3 = Object.prototype.hasOwnProperty, _toString$2 = Object.prototype.toString;
function resolveYamlOmap(e) {
  if (e === null) return !0;
  var r = [], n, t, o, l, c, a = e;
  for (n = 0, t = a.length; n < t; n += 1) {
    if (o = a[n], c = !1, _toString$2.call(o) !== "[object Object]") return !1;
    for (l in o)
      if (_hasOwnProperty$3.call(o, l))
        if (!c) c = !0;
        else return !1;
    if (!c) return !1;
    if (r.indexOf(l) === -1) r.push(l);
    else return !1;
  }
  return !0;
}
function constructYamlOmap(e) {
  return e !== null ? e : [];
}
var omap = new Type$5("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
}), Type$4 = type, _toString$1 = Object.prototype.toString;
function resolveYamlPairs(e) {
  if (e === null) return !0;
  var r, n, t, o, l, c = e;
  for (l = new Array(c.length), r = 0, n = c.length; r < n; r += 1) {
    if (t = c[r], _toString$1.call(t) !== "[object Object]" || (o = Object.keys(t), o.length !== 1)) return !1;
    l[r] = [o[0], t[o[0]]];
  }
  return !0;
}
function constructYamlPairs(e) {
  if (e === null) return [];
  var r, n, t, o, l, c = e;
  for (l = new Array(c.length), r = 0, n = c.length; r < n; r += 1)
    t = c[r], o = Object.keys(t), l[r] = [o[0], t[o[0]]];
  return l;
}
var pairs = new Type$4("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
}), Type$3 = type, _hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function resolveYamlSet(e) {
  if (e === null) return !0;
  var r, n = e;
  for (r in n)
    if (_hasOwnProperty$2.call(n, r) && n[r] !== null)
      return !1;
  return !0;
}
function constructYamlSet(e) {
  return e !== null ? e : {};
}
var set = new Type$3("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: resolveYamlSet,
  construct: constructYamlSet
}), Schema$1 = schema, default_safe = new Schema$1({
  include: [
    core
  ],
  implicit: [
    timestamp,
    merge
  ],
  explicit: [
    binary,
    omap,
    pairs,
    set
  ]
}), Type$2 = type;
function resolveJavascriptUndefined() {
  return !0;
}
function constructJavascriptUndefined() {
}
function representJavascriptUndefined() {
  return "";
}
function isUndefined(e) {
  return typeof e > "u";
}
var _undefined = new Type$2("tag:yaml.org,2002:js/undefined", {
  kind: "scalar",
  resolve: resolveJavascriptUndefined,
  construct: constructJavascriptUndefined,
  predicate: isUndefined,
  represent: representJavascriptUndefined
}), Type$1 = type;
function resolveJavascriptRegExp(e) {
  if (e === null || e.length === 0) return !1;
  var r = e, n = /\/([gim]*)$/.exec(e), t = "";
  return !(r[0] === "/" && (n && (t = n[1]), t.length > 3 || r[r.length - t.length - 1] !== "/"));
}
function constructJavascriptRegExp(e) {
  var r = e, n = /\/([gim]*)$/.exec(e), t = "";
  return r[0] === "/" && (n && (t = n[1]), r = r.slice(1, r.length - t.length - 1)), new RegExp(r, t);
}
function representJavascriptRegExp(e) {
  var r = "/" + e.source + "/";
  return e.global && (r += "g"), e.multiline && (r += "m"), e.ignoreCase && (r += "i"), r;
}
function isRegExp(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
var regexp = new Type$1("tag:yaml.org,2002:js/regexp", {
  kind: "scalar",
  resolve: resolveJavascriptRegExp,
  construct: constructJavascriptRegExp,
  predicate: isRegExp,
  represent: representJavascriptRegExp
}), esprima;
try {
  var _require = commonjsRequire;
  esprima = _require("esprima");
} catch {
  typeof window < "u" && (esprima = window.esprima);
}
var Type = type;
function resolveJavascriptFunction(e) {
  if (e === null) return !1;
  try {
    var r = "(" + e + ")", n = esprima.parse(r, { range: !0 });
    return !(n.type !== "Program" || n.body.length !== 1 || n.body[0].type !== "ExpressionStatement" || n.body[0].expression.type !== "ArrowFunctionExpression" && n.body[0].expression.type !== "FunctionExpression");
  } catch {
    return !1;
  }
}
function constructJavascriptFunction(e) {
  var r = "(" + e + ")", n = esprima.parse(r, { range: !0 }), t = [], o;
  if (n.type !== "Program" || n.body.length !== 1 || n.body[0].type !== "ExpressionStatement" || n.body[0].expression.type !== "ArrowFunctionExpression" && n.body[0].expression.type !== "FunctionExpression")
    throw new Error("Failed to resolve function");
  return n.body[0].expression.params.forEach(function(l) {
    t.push(l.name);
  }), o = n.body[0].expression.body.range, n.body[0].expression.body.type === "BlockStatement" ? new Function(t, r.slice(o[0] + 1, o[1] - 1)) : new Function(t, "return " + r.slice(o[0], o[1]));
}
function representJavascriptFunction(e) {
  return e.toString();
}
function isFunction(e) {
  return Object.prototype.toString.call(e) === "[object Function]";
}
var _function = new Type("tag:yaml.org,2002:js/function", {
  kind: "scalar",
  resolve: resolveJavascriptFunction,
  construct: constructJavascriptFunction,
  predicate: isFunction,
  represent: representJavascriptFunction
}), Schema = schema, default_full = Schema.DEFAULT = new Schema({
  include: [
    default_safe
  ],
  explicit: [
    _undefined,
    regexp,
    _function
  ]
}), common$1 = common$6, YAMLException$1 = exception, Mark = mark, DEFAULT_SAFE_SCHEMA$1 = default_safe, DEFAULT_FULL_SCHEMA$1 = default_full, _hasOwnProperty$1 = Object.prototype.hasOwnProperty, CONTEXT_FLOW_IN = 1, CONTEXT_FLOW_OUT = 2, CONTEXT_BLOCK_IN = 3, CONTEXT_BLOCK_OUT = 4, CHOMPING_CLIP = 1, CHOMPING_STRIP = 2, CHOMPING_KEEP = 3, PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/, PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/, PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i, PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function _class(e) {
  return Object.prototype.toString.call(e);
}
function is_EOL(e) {
  return e === 10 || e === 13;
}
function is_WHITE_SPACE(e) {
  return e === 9 || e === 32;
}
function is_WS_OR_EOL(e) {
  return e === 9 || e === 32 || e === 10 || e === 13;
}
function is_FLOW_INDICATOR(e) {
  return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
function fromHexCode(e) {
  var r;
  return 48 <= e && e <= 57 ? e - 48 : (r = e | 32, 97 <= r && r <= 102 ? r - 97 + 10 : -1);
}
function escapedHexLen(e) {
  return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
function fromDecimalCode(e) {
  return 48 <= e && e <= 57 ? e - 48 : -1;
}
function simpleEscapeSequence(e) {
  return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? " " : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
}
function charFromCodepoint(e) {
  return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(
    (e - 65536 >> 10) + 55296,
    (e - 65536 & 1023) + 56320
  );
}
var simpleEscapeCheck = new Array(256), simpleEscapeMap = new Array(256);
for (var i = 0; i < 256; i++)
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0, simpleEscapeMap[i] = simpleEscapeSequence(i);
function State$1(e, r) {
  this.input = e, this.filename = r.filename || null, this.schema = r.schema || DEFAULT_FULL_SCHEMA$1, this.onWarning = r.onWarning || null, this.legacy = r.legacy || !1, this.json = r.json || !1, this.listener = r.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.documents = [];
}
function generateError(e, r) {
  return new YAMLException$1(
    r,
    new Mark(e.filename, e.input, e.position, e.line, e.position - e.lineStart)
  );
}
function throwError(e, r) {
  throw generateError(e, r);
}
function throwWarning(e, r) {
  e.onWarning && e.onWarning.call(null, generateError(e, r));
}
var directiveHandlers = {
  YAML: function(r, n, t) {
    var o, l, c;
    r.version !== null && throwError(r, "duplication of %YAML directive"), t.length !== 1 && throwError(r, "YAML directive accepts exactly one argument"), o = /^([0-9]+)\.([0-9]+)$/.exec(t[0]), o === null && throwError(r, "ill-formed argument of the YAML directive"), l = parseInt(o[1], 10), c = parseInt(o[2], 10), l !== 1 && throwError(r, "unacceptable YAML version of the document"), r.version = t[0], r.checkLineBreaks = c < 2, c !== 1 && c !== 2 && throwWarning(r, "unsupported YAML version of the document");
  },
  TAG: function(r, n, t) {
    var o, l;
    t.length !== 2 && throwError(r, "TAG directive accepts exactly two arguments"), o = t[0], l = t[1], PATTERN_TAG_HANDLE.test(o) || throwError(r, "ill-formed tag handle (first argument) of the TAG directive"), _hasOwnProperty$1.call(r.tagMap, o) && throwError(r, 'there is a previously declared suffix for "' + o + '" tag handle'), PATTERN_TAG_URI.test(l) || throwError(r, "ill-formed tag prefix (second argument) of the TAG directive"), r.tagMap[o] = l;
  }
};
function captureSegment(e, r, n, t) {
  var o, l, c, a;
  if (r < n) {
    if (a = e.input.slice(r, n), t)
      for (o = 0, l = a.length; o < l; o += 1)
        c = a.charCodeAt(o), c === 9 || 32 <= c && c <= 1114111 || throwError(e, "expected valid JSON character");
    else PATTERN_NON_PRINTABLE.test(a) && throwError(e, "the stream contains non-printable characters");
    e.result += a;
  }
}
function mergeMappings(e, r, n, t) {
  var o, l, c, a;
  for (common$1.isObject(n) || throwError(e, "cannot merge mappings; the provided source object is unacceptable"), o = Object.keys(n), c = 0, a = o.length; c < a; c += 1)
    l = o[c], _hasOwnProperty$1.call(r, l) || (r[l] = n[l], t[l] = !0);
}
function storeMappingPair(e, r, n, t, o, l, c, a) {
  var u, f;
  if (Array.isArray(o))
    for (o = Array.prototype.slice.call(o), u = 0, f = o.length; u < f; u += 1)
      Array.isArray(o[u]) && throwError(e, "nested arrays are not supported inside keys"), typeof o == "object" && _class(o[u]) === "[object Object]" && (o[u] = "[object Object]");
  if (typeof o == "object" && _class(o) === "[object Object]" && (o = "[object Object]"), o = String(o), r === null && (r = {}), t === "tag:yaml.org,2002:merge")
    if (Array.isArray(l))
      for (u = 0, f = l.length; u < f; u += 1)
        mergeMappings(e, r, l[u], n);
    else
      mergeMappings(e, r, l, n);
  else
    !e.json && !_hasOwnProperty$1.call(n, o) && _hasOwnProperty$1.call(r, o) && (e.line = c || e.line, e.position = a || e.position, throwError(e, "duplicated mapping key")), r[o] = l, delete n[o];
  return r;
}
function readLineBreak(e) {
  var r;
  r = e.input.charCodeAt(e.position), r === 10 ? e.position++ : r === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : throwError(e, "a line break is expected"), e.line += 1, e.lineStart = e.position;
}
function skipSeparationSpace(e, r, n) {
  for (var t = 0, o = e.input.charCodeAt(e.position); o !== 0; ) {
    for (; is_WHITE_SPACE(o); )
      o = e.input.charCodeAt(++e.position);
    if (r && o === 35)
      do
        o = e.input.charCodeAt(++e.position);
      while (o !== 10 && o !== 13 && o !== 0);
    if (is_EOL(o))
      for (readLineBreak(e), o = e.input.charCodeAt(e.position), t++, e.lineIndent = 0; o === 32; )
        e.lineIndent++, o = e.input.charCodeAt(++e.position);
    else
      break;
  }
  return n !== -1 && t !== 0 && e.lineIndent < n && throwWarning(e, "deficient indentation"), t;
}
function testDocumentSeparator(e) {
  var r = e.position, n;
  return n = e.input.charCodeAt(r), !!((n === 45 || n === 46) && n === e.input.charCodeAt(r + 1) && n === e.input.charCodeAt(r + 2) && (r += 3, n = e.input.charCodeAt(r), n === 0 || is_WS_OR_EOL(n)));
}
function writeFoldedLines(e, r) {
  r === 1 ? e.result += " " : r > 1 && (e.result += common$1.repeat(`
`, r - 1));
}
function readPlainScalar(e, r, n) {
  var t, o, l, c, a, u, f, p, s = e.kind, h = e.result, d;
  if (d = e.input.charCodeAt(e.position), is_WS_OR_EOL(d) || is_FLOW_INDICATOR(d) || d === 35 || d === 38 || d === 42 || d === 33 || d === 124 || d === 62 || d === 39 || d === 34 || d === 37 || d === 64 || d === 96 || (d === 63 || d === 45) && (o = e.input.charCodeAt(e.position + 1), is_WS_OR_EOL(o) || n && is_FLOW_INDICATOR(o)))
    return !1;
  for (e.kind = "scalar", e.result = "", l = c = e.position, a = !1; d !== 0; ) {
    if (d === 58) {
      if (o = e.input.charCodeAt(e.position + 1), is_WS_OR_EOL(o) || n && is_FLOW_INDICATOR(o))
        break;
    } else if (d === 35) {
      if (t = e.input.charCodeAt(e.position - 1), is_WS_OR_EOL(t))
        break;
    } else {
      if (e.position === e.lineStart && testDocumentSeparator(e) || n && is_FLOW_INDICATOR(d))
        break;
      if (is_EOL(d))
        if (u = e.line, f = e.lineStart, p = e.lineIndent, skipSeparationSpace(e, !1, -1), e.lineIndent >= r) {
          a = !0, d = e.input.charCodeAt(e.position);
          continue;
        } else {
          e.position = c, e.line = u, e.lineStart = f, e.lineIndent = p;
          break;
        }
    }
    a && (captureSegment(e, l, c, !1), writeFoldedLines(e, e.line - u), l = c = e.position, a = !1), is_WHITE_SPACE(d) || (c = e.position + 1), d = e.input.charCodeAt(++e.position);
  }
  return captureSegment(e, l, c, !1), e.result ? !0 : (e.kind = s, e.result = h, !1);
}
function readSingleQuotedScalar(e, r) {
  var n, t, o;
  if (n = e.input.charCodeAt(e.position), n !== 39)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, t = o = e.position; (n = e.input.charCodeAt(e.position)) !== 0; )
    if (n === 39)
      if (captureSegment(e, t, e.position, !0), n = e.input.charCodeAt(++e.position), n === 39)
        t = e.position, e.position++, o = e.position;
      else
        return !0;
    else is_EOL(n) ? (captureSegment(e, t, o, !0), writeFoldedLines(e, skipSeparationSpace(e, !1, r)), t = o = e.position) : e.position === e.lineStart && testDocumentSeparator(e) ? throwError(e, "unexpected end of the document within a single quoted scalar") : (e.position++, o = e.position);
  throwError(e, "unexpected end of the stream within a single quoted scalar");
}
function readDoubleQuotedScalar(e, r) {
  var n, t, o, l, c, a;
  if (a = e.input.charCodeAt(e.position), a !== 34)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, n = t = e.position; (a = e.input.charCodeAt(e.position)) !== 0; ) {
    if (a === 34)
      return captureSegment(e, n, e.position, !0), e.position++, !0;
    if (a === 92) {
      if (captureSegment(e, n, e.position, !0), a = e.input.charCodeAt(++e.position), is_EOL(a))
        skipSeparationSpace(e, !1, r);
      else if (a < 256 && simpleEscapeCheck[a])
        e.result += simpleEscapeMap[a], e.position++;
      else if ((c = escapedHexLen(a)) > 0) {
        for (o = c, l = 0; o > 0; o--)
          a = e.input.charCodeAt(++e.position), (c = fromHexCode(a)) >= 0 ? l = (l << 4) + c : throwError(e, "expected hexadecimal character");
        e.result += charFromCodepoint(l), e.position++;
      } else
        throwError(e, "unknown escape sequence");
      n = t = e.position;
    } else is_EOL(a) ? (captureSegment(e, n, t, !0), writeFoldedLines(e, skipSeparationSpace(e, !1, r)), n = t = e.position) : e.position === e.lineStart && testDocumentSeparator(e) ? throwError(e, "unexpected end of the document within a double quoted scalar") : (e.position++, t = e.position);
  }
  throwError(e, "unexpected end of the stream within a double quoted scalar");
}
function readFlowCollection(e, r) {
  var n = !0, t, o = e.tag, l, c = e.anchor, a, u, f, p, s, h = {}, d, g, E, m;
  if (m = e.input.charCodeAt(e.position), m === 91)
    u = 93, s = !1, l = [];
  else if (m === 123)
    u = 125, s = !0, l = {};
  else
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = l), m = e.input.charCodeAt(++e.position); m !== 0; ) {
    if (skipSeparationSpace(e, !0, r), m = e.input.charCodeAt(e.position), m === u)
      return e.position++, e.tag = o, e.anchor = c, e.kind = s ? "mapping" : "sequence", e.result = l, !0;
    n || throwError(e, "missed comma between flow collection entries"), g = d = E = null, f = p = !1, m === 63 && (a = e.input.charCodeAt(e.position + 1), is_WS_OR_EOL(a) && (f = p = !0, e.position++, skipSeparationSpace(e, !0, r))), t = e.line, composeNode(e, r, CONTEXT_FLOW_IN, !1, !0), g = e.tag, d = e.result, skipSeparationSpace(e, !0, r), m = e.input.charCodeAt(e.position), (p || e.line === t) && m === 58 && (f = !0, m = e.input.charCodeAt(++e.position), skipSeparationSpace(e, !0, r), composeNode(e, r, CONTEXT_FLOW_IN, !1, !0), E = e.result), s ? storeMappingPair(e, l, h, g, d, E) : f ? l.push(storeMappingPair(e, null, h, g, d, E)) : l.push(d), skipSeparationSpace(e, !0, r), m = e.input.charCodeAt(e.position), m === 44 ? (n = !0, m = e.input.charCodeAt(++e.position)) : n = !1;
  }
  throwError(e, "unexpected end of the stream within a flow collection");
}
function readBlockScalar(e, r) {
  var n, t, o = CHOMPING_CLIP, l = !1, c = !1, a = r, u = 0, f = !1, p, s;
  if (s = e.input.charCodeAt(e.position), s === 124)
    t = !1;
  else if (s === 62)
    t = !0;
  else
    return !1;
  for (e.kind = "scalar", e.result = ""; s !== 0; )
    if (s = e.input.charCodeAt(++e.position), s === 43 || s === 45)
      CHOMPING_CLIP === o ? o = s === 43 ? CHOMPING_KEEP : CHOMPING_STRIP : throwError(e, "repeat of a chomping mode identifier");
    else if ((p = fromDecimalCode(s)) >= 0)
      p === 0 ? throwError(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : c ? throwError(e, "repeat of an indentation width identifier") : (a = r + p - 1, c = !0);
    else
      break;
  if (is_WHITE_SPACE(s)) {
    do
      s = e.input.charCodeAt(++e.position);
    while (is_WHITE_SPACE(s));
    if (s === 35)
      do
        s = e.input.charCodeAt(++e.position);
      while (!is_EOL(s) && s !== 0);
  }
  for (; s !== 0; ) {
    for (readLineBreak(e), e.lineIndent = 0, s = e.input.charCodeAt(e.position); (!c || e.lineIndent < a) && s === 32; )
      e.lineIndent++, s = e.input.charCodeAt(++e.position);
    if (!c && e.lineIndent > a && (a = e.lineIndent), is_EOL(s)) {
      u++;
      continue;
    }
    if (e.lineIndent < a) {
      o === CHOMPING_KEEP ? e.result += common$1.repeat(`
`, l ? 1 + u : u) : o === CHOMPING_CLIP && l && (e.result += `
`);
      break;
    }
    for (t ? is_WHITE_SPACE(s) ? (f = !0, e.result += common$1.repeat(`
`, l ? 1 + u : u)) : f ? (f = !1, e.result += common$1.repeat(`
`, u + 1)) : u === 0 ? l && (e.result += " ") : e.result += common$1.repeat(`
`, u) : e.result += common$1.repeat(`
`, l ? 1 + u : u), l = !0, c = !0, u = 0, n = e.position; !is_EOL(s) && s !== 0; )
      s = e.input.charCodeAt(++e.position);
    captureSegment(e, n, e.position, !1);
  }
  return !0;
}
function readBlockSequence(e, r) {
  var n, t = e.tag, o = e.anchor, l = [], c, a = !1, u;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = l), u = e.input.charCodeAt(e.position); u !== 0 && !(u !== 45 || (c = e.input.charCodeAt(e.position + 1), !is_WS_OR_EOL(c))); ) {
    if (a = !0, e.position++, skipSeparationSpace(e, !0, -1) && e.lineIndent <= r) {
      l.push(null), u = e.input.charCodeAt(e.position);
      continue;
    }
    if (n = e.line, composeNode(e, r, CONTEXT_BLOCK_IN, !1, !0), l.push(e.result), skipSeparationSpace(e, !0, -1), u = e.input.charCodeAt(e.position), (e.line === n || e.lineIndent > r) && u !== 0)
      throwError(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < r)
      break;
  }
  return a ? (e.tag = t, e.anchor = o, e.kind = "sequence", e.result = l, !0) : !1;
}
function readBlockMapping(e, r, n) {
  var t, o, l, c, a = e.tag, u = e.anchor, f = {}, p = {}, s = null, h = null, d = null, g = !1, E = !1, m;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = f), m = e.input.charCodeAt(e.position); m !== 0; ) {
    if (t = e.input.charCodeAt(e.position + 1), l = e.line, c = e.position, (m === 63 || m === 58) && is_WS_OR_EOL(t))
      m === 63 ? (g && (storeMappingPair(e, f, p, s, h, null), s = h = d = null), E = !0, g = !0, o = !0) : g ? (g = !1, o = !0) : throwError(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, m = t;
    else if (composeNode(e, n, CONTEXT_FLOW_OUT, !1, !0))
      if (e.line === l) {
        for (m = e.input.charCodeAt(e.position); is_WHITE_SPACE(m); )
          m = e.input.charCodeAt(++e.position);
        if (m === 58)
          m = e.input.charCodeAt(++e.position), is_WS_OR_EOL(m) || throwError(e, "a whitespace character is expected after the key-value separator within a block mapping"), g && (storeMappingPair(e, f, p, s, h, null), s = h = d = null), E = !0, g = !1, o = !1, s = e.tag, h = e.result;
        else if (E)
          throwError(e, "can not read an implicit mapping pair; a colon is missed");
        else
          return e.tag = a, e.anchor = u, !0;
      } else if (E)
        throwError(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return e.tag = a, e.anchor = u, !0;
    else
      break;
    if ((e.line === l || e.lineIndent > r) && (composeNode(e, r, CONTEXT_BLOCK_OUT, !0, o) && (g ? h = e.result : d = e.result), g || (storeMappingPair(e, f, p, s, h, d, l, c), s = h = d = null), skipSeparationSpace(e, !0, -1), m = e.input.charCodeAt(e.position)), e.lineIndent > r && m !== 0)
      throwError(e, "bad indentation of a mapping entry");
    else if (e.lineIndent < r)
      break;
  }
  return g && storeMappingPair(e, f, p, s, h, null), E && (e.tag = a, e.anchor = u, e.kind = "mapping", e.result = f), E;
}
function readTagProperty(e) {
  var r, n = !1, t = !1, o, l, c;
  if (c = e.input.charCodeAt(e.position), c !== 33) return !1;
  if (e.tag !== null && throwError(e, "duplication of a tag property"), c = e.input.charCodeAt(++e.position), c === 60 ? (n = !0, c = e.input.charCodeAt(++e.position)) : c === 33 ? (t = !0, o = "!!", c = e.input.charCodeAt(++e.position)) : o = "!", r = e.position, n) {
    do
      c = e.input.charCodeAt(++e.position);
    while (c !== 0 && c !== 62);
    e.position < e.length ? (l = e.input.slice(r, e.position), c = e.input.charCodeAt(++e.position)) : throwError(e, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; c !== 0 && !is_WS_OR_EOL(c); )
      c === 33 && (t ? throwError(e, "tag suffix cannot contain exclamation marks") : (o = e.input.slice(r - 1, e.position + 1), PATTERN_TAG_HANDLE.test(o) || throwError(e, "named tag handle cannot contain such characters"), t = !0, r = e.position + 1)), c = e.input.charCodeAt(++e.position);
    l = e.input.slice(r, e.position), PATTERN_FLOW_INDICATORS.test(l) && throwError(e, "tag suffix cannot contain flow indicator characters");
  }
  return l && !PATTERN_TAG_URI.test(l) && throwError(e, "tag name cannot contain such characters: " + l), n ? e.tag = l : _hasOwnProperty$1.call(e.tagMap, o) ? e.tag = e.tagMap[o] + l : o === "!" ? e.tag = "!" + l : o === "!!" ? e.tag = "tag:yaml.org,2002:" + l : throwError(e, 'undeclared tag handle "' + o + '"'), !0;
}
function readAnchorProperty(e) {
  var r, n;
  if (n = e.input.charCodeAt(e.position), n !== 38) return !1;
  for (e.anchor !== null && throwError(e, "duplication of an anchor property"), n = e.input.charCodeAt(++e.position), r = e.position; n !== 0 && !is_WS_OR_EOL(n) && !is_FLOW_INDICATOR(n); )
    n = e.input.charCodeAt(++e.position);
  return e.position === r && throwError(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(r, e.position), !0;
}
function readAlias(e) {
  var r, n, t;
  if (t = e.input.charCodeAt(e.position), t !== 42) return !1;
  for (t = e.input.charCodeAt(++e.position), r = e.position; t !== 0 && !is_WS_OR_EOL(t) && !is_FLOW_INDICATOR(t); )
    t = e.input.charCodeAt(++e.position);
  return e.position === r && throwError(e, "name of an alias node must contain at least one character"), n = e.input.slice(r, e.position), _hasOwnProperty$1.call(e.anchorMap, n) || throwError(e, 'unidentified alias "' + n + '"'), e.result = e.anchorMap[n], skipSeparationSpace(e, !0, -1), !0;
}
function composeNode(e, r, n, t, o) {
  var l, c, a, u = 1, f = !1, p = !1, s, h, d, g, E;
  if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, l = c = a = CONTEXT_BLOCK_OUT === n || CONTEXT_BLOCK_IN === n, t && skipSeparationSpace(e, !0, -1) && (f = !0, e.lineIndent > r ? u = 1 : e.lineIndent === r ? u = 0 : e.lineIndent < r && (u = -1)), u === 1)
    for (; readTagProperty(e) || readAnchorProperty(e); )
      skipSeparationSpace(e, !0, -1) ? (f = !0, a = l, e.lineIndent > r ? u = 1 : e.lineIndent === r ? u = 0 : e.lineIndent < r && (u = -1)) : a = !1;
  if (a && (a = f || o), (u === 1 || CONTEXT_BLOCK_OUT === n) && (CONTEXT_FLOW_IN === n || CONTEXT_FLOW_OUT === n ? g = r : g = r + 1, E = e.position - e.lineStart, u === 1 ? a && (readBlockSequence(e, E) || readBlockMapping(e, E, g)) || readFlowCollection(e, g) ? p = !0 : (c && readBlockScalar(e, g) || readSingleQuotedScalar(e, g) || readDoubleQuotedScalar(e, g) ? p = !0 : readAlias(e) ? (p = !0, (e.tag !== null || e.anchor !== null) && throwError(e, "alias node should not have any properties")) : readPlainScalar(e, g, CONTEXT_FLOW_IN === n) && (p = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : u === 0 && (p = a && readBlockSequence(e, E))), e.tag !== null && e.tag !== "!")
    if (e.tag === "?") {
      for (e.result !== null && e.kind !== "scalar" && throwError(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), s = 0, h = e.implicitTypes.length; s < h; s += 1)
        if (d = e.implicitTypes[s], d.resolve(e.result)) {
          e.result = d.construct(e.result), e.tag = d.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
          break;
        }
    } else _hasOwnProperty$1.call(e.typeMap[e.kind || "fallback"], e.tag) ? (d = e.typeMap[e.kind || "fallback"][e.tag], e.result !== null && d.kind !== e.kind && throwError(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + d.kind + '", not "' + e.kind + '"'), d.resolve(e.result) ? (e.result = d.construct(e.result), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : throwError(e, "cannot resolve a node with !<" + e.tag + "> explicit tag")) : throwError(e, "unknown tag !<" + e.tag + ">");
  return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || p;
}
function readDocument(e) {
  var r = e.position, n, t, o, l = !1, c;
  for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = {}, e.anchorMap = {}; (c = e.input.charCodeAt(e.position)) !== 0 && (skipSeparationSpace(e, !0, -1), c = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || c !== 37)); ) {
    for (l = !0, c = e.input.charCodeAt(++e.position), n = e.position; c !== 0 && !is_WS_OR_EOL(c); )
      c = e.input.charCodeAt(++e.position);
    for (t = e.input.slice(n, e.position), o = [], t.length < 1 && throwError(e, "directive name must not be less than one character in length"); c !== 0; ) {
      for (; is_WHITE_SPACE(c); )
        c = e.input.charCodeAt(++e.position);
      if (c === 35) {
        do
          c = e.input.charCodeAt(++e.position);
        while (c !== 0 && !is_EOL(c));
        break;
      }
      if (is_EOL(c)) break;
      for (n = e.position; c !== 0 && !is_WS_OR_EOL(c); )
        c = e.input.charCodeAt(++e.position);
      o.push(e.input.slice(n, e.position));
    }
    c !== 0 && readLineBreak(e), _hasOwnProperty$1.call(directiveHandlers, t) ? directiveHandlers[t](e, t, o) : throwWarning(e, 'unknown document directive "' + t + '"');
  }
  if (skipSeparationSpace(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, skipSeparationSpace(e, !0, -1)) : l && throwError(e, "directives end mark is expected"), composeNode(e, e.lineIndent - 1, CONTEXT_BLOCK_OUT, !1, !0), skipSeparationSpace(e, !0, -1), e.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(e.input.slice(r, e.position)) && throwWarning(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && testDocumentSeparator(e)) {
    e.input.charCodeAt(e.position) === 46 && (e.position += 3, skipSeparationSpace(e, !0, -1));
    return;
  }
  if (e.position < e.length - 1)
    throwError(e, "end of the stream or a document separator is expected");
  else
    return;
}
function loadDocuments(e, r) {
  e = String(e), r = r || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
  var n = new State$1(e, r), t = e.indexOf("\0");
  for (t !== -1 && (n.position = t, throwError(n, "null byte is not allowed in input")), n.input += "\0"; n.input.charCodeAt(n.position) === 32; )
    n.lineIndent += 1, n.position += 1;
  for (; n.position < n.length - 1; )
    readDocument(n);
  return n.documents;
}
function loadAll(e, r, n) {
  r !== null && typeof r == "object" && typeof n > "u" && (n = r, r = null);
  var t = loadDocuments(e, n);
  if (typeof r != "function")
    return t;
  for (var o = 0, l = t.length; o < l; o += 1)
    r(t[o]);
}
function load(e, r) {
  var n = loadDocuments(e, r);
  if (n.length !== 0) {
    if (n.length === 1)
      return n[0];
    throw new YAMLException$1("expected a single document in the stream, but found more");
  }
}
function safeLoadAll(e, r, n) {
  return typeof r == "object" && r !== null && typeof n > "u" && (n = r, r = null), loadAll(e, r, common$1.extend({ schema: DEFAULT_SAFE_SCHEMA$1 }, n));
}
function safeLoad(e, r) {
  return load(e, common$1.extend({ schema: DEFAULT_SAFE_SCHEMA$1 }, r));
}
loader$1.loadAll = loadAll;
loader$1.load = load;
loader$1.safeLoadAll = safeLoadAll;
loader$1.safeLoad = safeLoad;
var dumper$1 = {}, common = common$6, YAMLException = exception, DEFAULT_FULL_SCHEMA = default_full, DEFAULT_SAFE_SCHEMA = default_safe, _toString = Object.prototype.toString, _hasOwnProperty = Object.prototype.hasOwnProperty, CHAR_TAB = 9, CHAR_LINE_FEED = 10, CHAR_CARRIAGE_RETURN = 13, CHAR_SPACE = 32, CHAR_EXCLAMATION = 33, CHAR_DOUBLE_QUOTE = 34, CHAR_SHARP = 35, CHAR_PERCENT = 37, CHAR_AMPERSAND = 38, CHAR_SINGLE_QUOTE = 39, CHAR_ASTERISK = 42, CHAR_COMMA = 44, CHAR_MINUS = 45, CHAR_COLON = 58, CHAR_EQUALS = 61, CHAR_GREATER_THAN = 62, CHAR_QUESTION = 63, CHAR_COMMERCIAL_AT = 64, CHAR_LEFT_SQUARE_BRACKET = 91, CHAR_RIGHT_SQUARE_BRACKET = 93, CHAR_GRAVE_ACCENT = 96, CHAR_LEFT_CURLY_BRACKET = 123, CHAR_VERTICAL_LINE = 124, CHAR_RIGHT_CURLY_BRACKET = 125, ESCAPE_SEQUENCES = {};
ESCAPE_SEQUENCES[0] = "\\0";
ESCAPE_SEQUENCES[7] = "\\a";
ESCAPE_SEQUENCES[8] = "\\b";
ESCAPE_SEQUENCES[9] = "\\t";
ESCAPE_SEQUENCES[10] = "\\n";
ESCAPE_SEQUENCES[11] = "\\v";
ESCAPE_SEQUENCES[12] = "\\f";
ESCAPE_SEQUENCES[13] = "\\r";
ESCAPE_SEQUENCES[27] = "\\e";
ESCAPE_SEQUENCES[34] = '\\"';
ESCAPE_SEQUENCES[92] = "\\\\";
ESCAPE_SEQUENCES[133] = "\\N";
ESCAPE_SEQUENCES[160] = "\\_";
ESCAPE_SEQUENCES[8232] = "\\L";
ESCAPE_SEQUENCES[8233] = "\\P";
var DEPRECATED_BOOLEANS_SYNTAX = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
];
function compileStyleMap(e, r) {
  var n, t, o, l, c, a, u;
  if (r === null) return {};
  for (n = {}, t = Object.keys(r), o = 0, l = t.length; o < l; o += 1)
    c = t[o], a = String(r[c]), c.slice(0, 2) === "!!" && (c = "tag:yaml.org,2002:" + c.slice(2)), u = e.compiledTypeMap.fallback[c], u && _hasOwnProperty.call(u.styleAliases, a) && (a = u.styleAliases[a]), n[c] = a;
  return n;
}
function encodeHex(e) {
  var r, n, t;
  if (r = e.toString(16).toUpperCase(), e <= 255)
    n = "x", t = 2;
  else if (e <= 65535)
    n = "u", t = 4;
  else if (e <= 4294967295)
    n = "U", t = 8;
  else
    throw new YAMLException("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + n + common.repeat("0", t - r.length) + r;
}
function State(e) {
  this.schema = e.schema || DEFAULT_FULL_SCHEMA, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, this.skipInvalid = e.skipInvalid || !1, this.flowLevel = common.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = compileStyleMap(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function indentString(e, r) {
  for (var n = common.repeat(" ", r), t = 0, o = -1, l = "", c, a = e.length; t < a; )
    o = e.indexOf(`
`, t), o === -1 ? (c = e.slice(t), t = a) : (c = e.slice(t, o + 1), t = o + 1), c.length && c !== `
` && (l += n), l += c;
  return l;
}
function generateNextLine(e, r) {
  return `
` + common.repeat(" ", e.indent * r);
}
function testImplicitResolving(e, r) {
  var n, t, o;
  for (n = 0, t = e.implicitTypes.length; n < t; n += 1)
    if (o = e.implicitTypes[n], o.resolve(r))
      return !0;
  return !1;
}
function isWhitespace(e) {
  return e === CHAR_SPACE || e === CHAR_TAB;
}
function isPrintable(e) {
  return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && e !== 8232 && e !== 8233 || 57344 <= e && e <= 65533 && e !== 65279 || 65536 <= e && e <= 1114111;
}
function isNsChar(e) {
  return isPrintable(e) && !isWhitespace(e) && e !== 65279 && e !== CHAR_CARRIAGE_RETURN && e !== CHAR_LINE_FEED;
}
function isPlainSafe(e, r) {
  return isPrintable(e) && e !== 65279 && e !== CHAR_COMMA && e !== CHAR_LEFT_SQUARE_BRACKET && e !== CHAR_RIGHT_SQUARE_BRACKET && e !== CHAR_LEFT_CURLY_BRACKET && e !== CHAR_RIGHT_CURLY_BRACKET && e !== CHAR_COLON && (e !== CHAR_SHARP || r && isNsChar(r));
}
function isPlainSafeFirst(e) {
  return isPrintable(e) && e !== 65279 && !isWhitespace(e) && e !== CHAR_MINUS && e !== CHAR_QUESTION && e !== CHAR_COLON && e !== CHAR_COMMA && e !== CHAR_LEFT_SQUARE_BRACKET && e !== CHAR_RIGHT_SQUARE_BRACKET && e !== CHAR_LEFT_CURLY_BRACKET && e !== CHAR_RIGHT_CURLY_BRACKET && e !== CHAR_SHARP && e !== CHAR_AMPERSAND && e !== CHAR_ASTERISK && e !== CHAR_EXCLAMATION && e !== CHAR_VERTICAL_LINE && e !== CHAR_EQUALS && e !== CHAR_GREATER_THAN && e !== CHAR_SINGLE_QUOTE && e !== CHAR_DOUBLE_QUOTE && e !== CHAR_PERCENT && e !== CHAR_COMMERCIAL_AT && e !== CHAR_GRAVE_ACCENT;
}
function needIndentIndicator(e) {
  var r = /^\n* /;
  return r.test(e);
}
var STYLE_PLAIN = 1, STYLE_SINGLE = 2, STYLE_LITERAL = 3, STYLE_FOLDED = 4, STYLE_DOUBLE = 5;
function chooseScalarStyle(e, r, n, t, o) {
  var l, c, a, u = !1, f = !1, p = t !== -1, s = -1, h = isPlainSafeFirst(e.charCodeAt(0)) && !isWhitespace(e.charCodeAt(e.length - 1));
  if (r)
    for (l = 0; l < e.length; l++) {
      if (c = e.charCodeAt(l), !isPrintable(c))
        return STYLE_DOUBLE;
      a = l > 0 ? e.charCodeAt(l - 1) : null, h = h && isPlainSafe(c, a);
    }
  else {
    for (l = 0; l < e.length; l++) {
      if (c = e.charCodeAt(l), c === CHAR_LINE_FEED)
        u = !0, p && (f = f || // Foldable line = too long, and not more-indented.
        l - s - 1 > t && e[s + 1] !== " ", s = l);
      else if (!isPrintable(c))
        return STYLE_DOUBLE;
      a = l > 0 ? e.charCodeAt(l - 1) : null, h = h && isPlainSafe(c, a);
    }
    f = f || p && l - s - 1 > t && e[s + 1] !== " ";
  }
  return !u && !f ? h && !o(e) ? STYLE_PLAIN : STYLE_SINGLE : n > 9 && needIndentIndicator(e) ? STYLE_DOUBLE : f ? STYLE_FOLDED : STYLE_LITERAL;
}
function writeScalar(e, r, n, t) {
  e.dump = function() {
    if (r.length === 0)
      return "''";
    if (!e.noCompatMode && DEPRECATED_BOOLEANS_SYNTAX.indexOf(r) !== -1)
      return "'" + r + "'";
    var o = e.indent * Math.max(1, n), l = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - o), c = t || e.flowLevel > -1 && n >= e.flowLevel;
    function a(u) {
      return testImplicitResolving(e, u);
    }
    switch (chooseScalarStyle(r, c, e.indent, l, a)) {
      case STYLE_PLAIN:
        return r;
      case STYLE_SINGLE:
        return "'" + r.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return "|" + blockHeader(r, e.indent) + dropEndingNewline(indentString(r, o));
      case STYLE_FOLDED:
        return ">" + blockHeader(r, e.indent) + dropEndingNewline(indentString(foldString(r, l), o));
      case STYLE_DOUBLE:
        return '"' + escapeString(r) + '"';
      default:
        throw new YAMLException("impossible error: invalid scalar style");
    }
  }();
}
function blockHeader(e, r) {
  var n = needIndentIndicator(e) ? String(r) : "", t = e[e.length - 1] === `
`, o = t && (e[e.length - 2] === `
` || e === `
`), l = o ? "+" : t ? "" : "-";
  return n + l + `
`;
}
function dropEndingNewline(e) {
  return e[e.length - 1] === `
` ? e.slice(0, -1) : e;
}
function foldString(e, r) {
  for (var n = /(\n+)([^\n]*)/g, t = function() {
    var f = e.indexOf(`
`);
    return f = f !== -1 ? f : e.length, n.lastIndex = f, foldLine(e.slice(0, f), r);
  }(), o = e[0] === `
` || e[0] === " ", l, c; c = n.exec(e); ) {
    var a = c[1], u = c[2];
    l = u[0] === " ", t += a + (!o && !l && u !== "" ? `
` : "") + foldLine(u, r), o = l;
  }
  return t;
}
function foldLine(e, r) {
  if (e === "" || e[0] === " ") return e;
  for (var n = / [^ ]/g, t, o = 0, l, c = 0, a = 0, u = ""; t = n.exec(e); )
    a = t.index, a - o > r && (l = c > o ? c : a, u += `
` + e.slice(o, l), o = l + 1), c = a;
  return u += `
`, e.length - o > r && c > o ? u += e.slice(o, c) + `
` + e.slice(c + 1) : u += e.slice(o), u.slice(1);
}
function escapeString(e) {
  for (var r = "", n, t, o, l = 0; l < e.length; l++) {
    if (n = e.charCodeAt(l), n >= 55296 && n <= 56319 && (t = e.charCodeAt(l + 1), t >= 56320 && t <= 57343)) {
      r += encodeHex((n - 55296) * 1024 + t - 56320 + 65536), l++;
      continue;
    }
    o = ESCAPE_SEQUENCES[n], r += !o && isPrintable(n) ? e[l] : o || encodeHex(n);
  }
  return r;
}
function writeFlowSequence(e, r, n) {
  var t = "", o = e.tag, l, c;
  for (l = 0, c = n.length; l < c; l += 1)
    writeNode(e, r, n[l], !1, !1) && (l !== 0 && (t += "," + (e.condenseFlow ? "" : " ")), t += e.dump);
  e.tag = o, e.dump = "[" + t + "]";
}
function writeBlockSequence(e, r, n, t) {
  var o = "", l = e.tag, c, a;
  for (c = 0, a = n.length; c < a; c += 1)
    writeNode(e, r + 1, n[c], !0, !0) && ((!t || c !== 0) && (o += generateNextLine(e, r)), e.dump && CHAR_LINE_FEED === e.dump.charCodeAt(0) ? o += "-" : o += "- ", o += e.dump);
  e.tag = l, e.dump = o || "[]";
}
function writeFlowMapping(e, r, n) {
  var t = "", o = e.tag, l = Object.keys(n), c, a, u, f, p;
  for (c = 0, a = l.length; c < a; c += 1)
    p = "", c !== 0 && (p += ", "), e.condenseFlow && (p += '"'), u = l[c], f = n[u], writeNode(e, r, u, !1, !1) && (e.dump.length > 1024 && (p += "? "), p += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), writeNode(e, r, f, !1, !1) && (p += e.dump, t += p));
  e.tag = o, e.dump = "{" + t + "}";
}
function writeBlockMapping(e, r, n, t) {
  var o = "", l = e.tag, c = Object.keys(n), a, u, f, p, s, h;
  if (e.sortKeys === !0)
    c.sort();
  else if (typeof e.sortKeys == "function")
    c.sort(e.sortKeys);
  else if (e.sortKeys)
    throw new YAMLException("sortKeys must be a boolean or a function");
  for (a = 0, u = c.length; a < u; a += 1)
    h = "", (!t || a !== 0) && (h += generateNextLine(e, r)), f = c[a], p = n[f], writeNode(e, r + 1, f, !0, !0, !0) && (s = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024, s && (e.dump && CHAR_LINE_FEED === e.dump.charCodeAt(0) ? h += "?" : h += "? "), h += e.dump, s && (h += generateNextLine(e, r)), writeNode(e, r + 1, p, !0, s) && (e.dump && CHAR_LINE_FEED === e.dump.charCodeAt(0) ? h += ":" : h += ": ", h += e.dump, o += h));
  e.tag = l, e.dump = o || "{}";
}
function detectType(e, r, n) {
  var t, o, l, c, a, u;
  for (o = n ? e.explicitTypes : e.implicitTypes, l = 0, c = o.length; l < c; l += 1)
    if (a = o[l], (a.instanceOf || a.predicate) && (!a.instanceOf || typeof r == "object" && r instanceof a.instanceOf) && (!a.predicate || a.predicate(r))) {
      if (e.tag = n ? a.tag : "?", a.represent) {
        if (u = e.styleMap[a.tag] || a.defaultStyle, _toString.call(a.represent) === "[object Function]")
          t = a.represent(r, u);
        else if (_hasOwnProperty.call(a.represent, u))
          t = a.represent[u](r, u);
        else
          throw new YAMLException("!<" + a.tag + '> tag resolver accepts not "' + u + '" style');
        e.dump = t;
      }
      return !0;
    }
  return !1;
}
function writeNode(e, r, n, t, o, l) {
  e.tag = null, e.dump = n, detectType(e, n, !1) || detectType(e, n, !0);
  var c = _toString.call(e.dump);
  t && (t = e.flowLevel < 0 || e.flowLevel > r);
  var a = c === "[object Object]" || c === "[object Array]", u, f;
  if (a && (u = e.duplicates.indexOf(n), f = u !== -1), (e.tag !== null && e.tag !== "?" || f || e.indent !== 2 && r > 0) && (o = !1), f && e.usedDuplicates[u])
    e.dump = "*ref_" + u;
  else {
    if (a && f && !e.usedDuplicates[u] && (e.usedDuplicates[u] = !0), c === "[object Object]")
      t && Object.keys(e.dump).length !== 0 ? (writeBlockMapping(e, r, e.dump, o), f && (e.dump = "&ref_" + u + e.dump)) : (writeFlowMapping(e, r, e.dump), f && (e.dump = "&ref_" + u + " " + e.dump));
    else if (c === "[object Array]") {
      var p = e.noArrayIndent && r > 0 ? r - 1 : r;
      t && e.dump.length !== 0 ? (writeBlockSequence(e, p, e.dump, o), f && (e.dump = "&ref_" + u + e.dump)) : (writeFlowSequence(e, p, e.dump), f && (e.dump = "&ref_" + u + " " + e.dump));
    } else if (c === "[object String]")
      e.tag !== "?" && writeScalar(e, e.dump, r, l);
    else {
      if (e.skipInvalid) return !1;
      throw new YAMLException("unacceptable kind of an object to dump " + c);
    }
    e.tag !== null && e.tag !== "?" && (e.dump = "!<" + e.tag + "> " + e.dump);
  }
  return !0;
}
function getDuplicateReferences(e, r) {
  var n = [], t = [], o, l;
  for (inspectNode(e, n, t), o = 0, l = t.length; o < l; o += 1)
    r.duplicates.push(n[t[o]]);
  r.usedDuplicates = new Array(l);
}
function inspectNode(e, r, n) {
  var t, o, l;
  if (e !== null && typeof e == "object")
    if (o = r.indexOf(e), o !== -1)
      n.indexOf(o) === -1 && n.push(o);
    else if (r.push(e), Array.isArray(e))
      for (o = 0, l = e.length; o < l; o += 1)
        inspectNode(e[o], r, n);
    else
      for (t = Object.keys(e), o = 0, l = t.length; o < l; o += 1)
        inspectNode(e[t[o]], r, n);
}
function dump(e, r) {
  r = r || {};
  var n = new State(r);
  return n.noRefs || getDuplicateReferences(e, n), writeNode(n, 0, e, !0, !0) ? n.dump + `
` : "";
}
function safeDump(e, r) {
  return dump(e, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, r));
}
dumper$1.dump = dump;
dumper$1.safeDump = safeDump;
var loader = loader$1, dumper = dumper$1;
function deprecated(e) {
  return function() {
    throw new Error("Function " + e + " is deprecated and cannot be used.");
  };
}
jsYaml$1.Type = type;
jsYaml$1.Schema = schema;
jsYaml$1.FAILSAFE_SCHEMA = failsafe;
jsYaml$1.JSON_SCHEMA = json;
jsYaml$1.CORE_SCHEMA = core;
jsYaml$1.DEFAULT_SAFE_SCHEMA = default_safe;
jsYaml$1.DEFAULT_FULL_SCHEMA = default_full;
jsYaml$1.load = loader.load;
jsYaml$1.loadAll = loader.loadAll;
jsYaml$1.safeLoad = loader.safeLoad;
jsYaml$1.safeLoadAll = loader.safeLoadAll;
jsYaml$1.dump = dumper.dump;
jsYaml$1.safeDump = dumper.safeDump;
jsYaml$1.YAMLException = exception;
jsYaml$1.MINIMAL_SCHEMA = failsafe;
jsYaml$1.SAFE_SCHEMA = default_safe;
jsYaml$1.DEFAULT_SCHEMA = default_full;
jsYaml$1.scan = deprecated("scan");
jsYaml$1.parse = deprecated("parse");
jsYaml$1.compose = deprecated("compose");
jsYaml$1.addConstructor = deprecated("addConstructor");
var yaml = jsYaml$1, jsYaml = yaml;
(function(module, exports) {
  const yaml = jsYaml, engines = module.exports;
  engines.yaml = {
    parse: yaml.safeLoad.bind(yaml),
    stringify: yaml.safeDump.bind(yaml)
  }, engines.json = {
    parse: JSON.parse.bind(JSON),
    stringify: function(e, r) {
      const n = Object.assign({ replacer: null, space: 2 }, r);
      return JSON.stringify(e, n.replacer, n.space);
    }
  }, engines.javascript = {
    parse: function parse(str, options, wrap) {
      try {
        return wrap !== !1 && (str = `(function() {
return ` + str.trim() + `;
}());`), eval(str) || {};
      } catch (e) {
        if (wrap !== !1 && /(unexpected|identifier)/i.test(e.message))
          return parse(str, options, !1);
        throw new SyntaxError(e);
      }
    },
    stringify: function() {
      throw new Error("stringifying JavaScript is not supported");
    }
  };
})(engines$2);
var enginesExports = engines$2.exports, utils$3 = {};
/*!
 * strip-bom-string <https://github.com/jonschlinkert/strip-bom-string>
 *
 * Copyright (c) 2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */
var stripBomString = function(e) {
  return typeof e == "string" && e.charAt(0) === "\uFEFF" ? e.slice(1) : e;
};
(function(e) {
  const r = stripBomString, n = kindOf;
  e.define = function(t, o, l) {
    Reflect.defineProperty(t, o, {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: l
    });
  }, e.isBuffer = function(t) {
    return n(t) === "buffer";
  }, e.isObject = function(t) {
    return n(t) === "object";
  }, e.toBuffer = function(t) {
    return typeof t == "string" ? Buffer.from(t) : t;
  }, e.toString = function(t) {
    if (e.isBuffer(t)) return r(String(t));
    if (typeof t != "string")
      throw new TypeError("expected input to be a string or buffer");
    return r(t);
  }, e.arrayify = function(t) {
    return t ? Array.isArray(t) ? t : [t] : [];
  }, e.startsWith = function(t, o, l) {
    return typeof l != "number" && (l = o.length), t.slice(0, l) === o;
  };
})(utils$3);
const engines$1 = enginesExports, utils$2 = utils$3;
var defaults$4 = function(e) {
  const r = Object.assign({}, e);
  return r.delimiters = utils$2.arrayify(r.delims || r.delimiters || "---"), r.delimiters.length === 1 && r.delimiters.push(r.delimiters[0]), r.language = (r.language || r.lang || "yaml").toLowerCase(), r.engines = Object.assign({}, engines$1, r.parsers, r.engines), r;
}, engine = function(e, r) {
  let n = r.engines[e] || r.engines[aliase(e)];
  if (typeof n > "u")
    throw new Error('gray-matter engine "' + e + '" is not registered');
  return typeof n == "function" && (n = { parse: n }), n;
};
function aliase(e) {
  switch (e.toLowerCase()) {
    case "js":
    case "javascript":
      return "javascript";
    case "coffee":
    case "coffeescript":
    case "cson":
      return "coffee";
    case "yaml":
    case "yml":
      return "yaml";
    default:
      return e;
  }
}
const typeOf$1 = kindOf, getEngine$1 = engine, defaults$3 = defaults$4;
var stringify$2 = function(e, r, n) {
  if (r == null && n == null)
    switch (typeOf$1(e)) {
      case "object":
        r = e.data, n = {};
        break;
      case "string":
        return e;
      default:
        throw new TypeError("expected file to be a string or object");
    }
  const t = e.content, o = defaults$3(n);
  if (r == null) {
    if (!o.data) return e;
    r = o.data;
  }
  const l = e.language || o.language, c = getEngine$1(l, o);
  if (typeof c.stringify != "function")
    throw new TypeError('expected "' + l + '.stringify" to be a function');
  r = Object.assign({}, e.data, r);
  const a = o.delimiters[0], u = o.delimiters[1], f = c.stringify(r, n).trim();
  let p = "";
  return f !== "{}" && (p = newline(a) + newline(f) + newline(u)), typeof e.excerpt == "string" && e.excerpt !== "" && t.indexOf(e.excerpt.trim()) === -1 && (p += newline(e.excerpt) + newline(u)), p + newline(t);
};
function newline(e) {
  return e.slice(-1) !== `
` ? e + `
` : e;
}
const defaults$2 = defaults$4;
var excerpt$1 = function(e, r) {
  const n = defaults$2(r);
  if (e.data == null && (e.data = {}), typeof n.excerpt == "function")
    return n.excerpt(e, n);
  const t = e.data.excerpt_separator || n.excerpt_separator;
  if (t == null && (n.excerpt === !1 || n.excerpt == null))
    return e;
  const o = typeof n.excerpt == "string" ? n.excerpt : t || n.delimiters[0], l = e.content.indexOf(o);
  return l !== -1 && (e.excerpt = e.content.slice(0, l)), e;
};
const typeOf = kindOf, stringify$1 = stringify$2, utils$1 = utils$3;
var toFile$1 = function(e) {
  return typeOf(e) !== "object" && (e = { content: e }), typeOf(e.data) !== "object" && (e.data = {}), e.contents && e.content == null && (e.content = e.contents), utils$1.define(e, "orig", utils$1.toBuffer(e.content)), utils$1.define(e, "language", e.language || ""), utils$1.define(e, "matter", e.matter || ""), utils$1.define(e, "stringify", function(r, n) {
    return n && n.language && (e.language = n.language), stringify$1(e, r, n);
  }), e.content = utils$1.toString(e.content), e.isEmpty = !1, e.excerpt = "", e;
};
const getEngine = engine, defaults$1 = defaults$4;
var parse$1 = function(e, r, n) {
  const t = defaults$1(n), o = getEngine(e, t);
  if (typeof o.parse != "function")
    throw new TypeError('expected "' + e + '.parse" to be a function');
  return o.parse(r, t);
};
const fs = require$$0, sections = sectionMatter, defaults = defaults$4, stringify = stringify$2, excerpt = excerpt$1, engines = enginesExports, toFile = toFile$1, parse = parse$1, utils = utils$3;
function matter(e, r) {
  if (e === "")
    return { data: {}, content: e, excerpt: "", orig: e };
  let n = toFile(e);
  const t = matter.cache[n.content];
  if (!r) {
    if (t)
      return n = Object.assign({}, t), n.orig = t.orig, n;
    matter.cache[n.content] = n;
  }
  return parseMatter(n, r);
}
function parseMatter(e, r) {
  const n = defaults(r), t = n.delimiters[0], o = `
` + n.delimiters[1];
  let l = e.content;
  n.language && (e.language = n.language);
  const c = t.length;
  if (!utils.startsWith(l, t, c))
    return excerpt(e, n), e;
  if (l.charAt(c) === t.slice(-1))
    return e;
  l = l.slice(c);
  const a = l.length, u = matter.language(l, n);
  u.name && (e.language = u.name, l = l.slice(u.raw.length));
  let f = l.indexOf(o);
  return f === -1 && (f = a), e.matter = l.slice(0, f), e.matter.replace(/^\s*#[^\n]+/gm, "").trim() === "" ? (e.isEmpty = !0, e.empty = e.content, e.data = {}) : e.data = parse(e.language, e.matter, n), f === a ? e.content = "" : (e.content = l.slice(f + o.length), e.content[0] === "\r" && (e.content = e.content.slice(1)), e.content[0] === `
` && (e.content = e.content.slice(1))), excerpt(e, n), (n.sections === !0 || typeof n.section == "function") && sections(e, n.section), e;
}
matter.engines = engines;
matter.stringify = function(e, r, n) {
  return typeof e == "string" && (e = matter(e, n)), stringify(e, r, n);
};
matter.read = function(e, r) {
  const n = fs.readFileSync(e, "utf8"), t = matter(n, r);
  return t.path = e, t;
};
matter.test = function(e, r) {
  return utils.startsWith(e, defaults(r).delimiters[0]);
};
matter.language = function(e, r) {
  const t = defaults(r).delimiters[0];
  matter.test(e) && (e = e.slice(t.length));
  const o = e.slice(0, e.search(/\r?\n/));
  return {
    raw: o,
    name: o ? o.trim() : ""
  };
};
matter.cache = {};
matter.clearCache = function() {
  matter.cache = {};
};
var grayMatter = matter;
const matter$1 = /* @__PURE__ */ getDefaultExportFromCjs(grayMatter);
export {
  matter$1 as m
};

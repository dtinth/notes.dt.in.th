import { c as lt, r as c1, g as qr } from "./unocss_DW1qlqnA.js";
var l;
(function(e) {
  e[e.NONE = 0] = "NONE";
  const s = 1;
  e[e._abstract = s] = "_abstract";
  const o = s + 1;
  e[e._accessor = o] = "_accessor";
  const i = o + 1;
  e[e._as = i] = "_as";
  const c = i + 1;
  e[e._assert = c] = "_assert";
  const h = c + 1;
  e[e._asserts = h] = "_asserts";
  const k = h + 1;
  e[e._async = k] = "_async";
  const x = k + 1;
  e[e._await = x] = "_await";
  const d = x + 1;
  e[e._checks = d] = "_checks";
  const w = d + 1;
  e[e._constructor = w] = "_constructor";
  const P = w + 1;
  e[e._declare = P] = "_declare";
  const I = P + 1;
  e[e._enum = I] = "_enum";
  const R = I + 1;
  e[e._exports = R] = "_exports";
  const G = R + 1;
  e[e._from = G] = "_from";
  const se = G + 1;
  e[e._get = se] = "_get";
  const we = se + 1;
  e[e._global = we] = "_global";
  const Te = we + 1;
  e[e._implements = Te] = "_implements";
  const O = Te + 1;
  e[e._infer = O] = "_infer";
  const q = O + 1;
  e[e._interface = q] = "_interface";
  const U = q + 1;
  e[e._is = U] = "_is";
  const ue = U + 1;
  e[e._keyof = ue] = "_keyof";
  const me = ue + 1;
  e[e._mixins = me] = "_mixins";
  const oe = me + 1;
  e[e._module = oe] = "_module";
  const de = oe + 1;
  e[e._namespace = de] = "_namespace";
  const Re = de + 1;
  e[e._of = Re] = "_of";
  const Ne = Re + 1;
  e[e._opaque = Ne] = "_opaque";
  const Ae = Ne + 1;
  e[e._out = Ae] = "_out";
  const Ve = Ae + 1;
  e[e._override = Ve] = "_override";
  const Be = Ve + 1;
  e[e._private = Be] = "_private";
  const He = Be + 1;
  e[e._protected = He] = "_protected";
  const Je = He + 1;
  e[e._proto = Je] = "_proto";
  const Me = Je + 1;
  e[e._public = Me] = "_public";
  const L = Me + 1;
  e[e._readonly = L] = "_readonly";
  const v = L + 1;
  e[e._require = v] = "_require";
  const M = v + 1;
  e[e._satisfies = M] = "_satisfies";
  const V = M + 1;
  e[e._set = V] = "_set";
  const ee = V + 1;
  e[e._static = ee] = "_static";
  const K = ee + 1;
  e[e._symbol = K] = "_symbol";
  const re = K + 1;
  e[e._type = re] = "_type";
  const ye = re + 1;
  e[e._unique = ye] = "_unique";
  const p = ye + 1;
  e[e._using = p] = "_using";
})(l || (l = {}));
var t;
(function(e) {
  e[e.PRECEDENCE_MASK = 15] = "PRECEDENCE_MASK";
  const s = 16;
  e[e.IS_KEYWORD = s] = "IS_KEYWORD";
  const o = 32;
  e[e.IS_ASSIGN = o] = "IS_ASSIGN";
  const i = 64;
  e[e.IS_RIGHT_ASSOCIATIVE = i] = "IS_RIGHT_ASSOCIATIVE";
  const c = 128;
  e[e.IS_PREFIX = c] = "IS_PREFIX";
  const h = 256;
  e[e.IS_POSTFIX = h] = "IS_POSTFIX";
  const k = 512;
  e[e.IS_EXPRESSION_START = k] = "IS_EXPRESSION_START";
  const x = 512;
  e[e.num = x] = "num";
  const d = 1536;
  e[e.bigint = d] = "bigint";
  const w = 2560;
  e[e.decimal = w] = "decimal";
  const P = 3584;
  e[e.regexp = P] = "regexp";
  const I = 4608;
  e[e.string = I] = "string";
  const R = 5632;
  e[e.name = R] = "name";
  const G = 6144;
  e[e.eof = G] = "eof";
  const se = 7680;
  e[e.bracketL = se] = "bracketL";
  const we = 8192;
  e[e.bracketR = we] = "bracketR";
  const Te = 9728;
  e[e.braceL = Te] = "braceL";
  const O = 10752;
  e[e.braceBarL = O] = "braceBarL";
  const q = 11264;
  e[e.braceR = q] = "braceR";
  const U = 12288;
  e[e.braceBarR = U] = "braceBarR";
  const ue = 13824;
  e[e.parenL = ue] = "parenL";
  const me = 14336;
  e[e.parenR = me] = "parenR";
  const oe = 15360;
  e[e.comma = oe] = "comma";
  const de = 16384;
  e[e.semi = de] = "semi";
  const Re = 17408;
  e[e.colon = Re] = "colon";
  const Ne = 18432;
  e[e.doubleColon = Ne] = "doubleColon";
  const Ae = 19456;
  e[e.dot = Ae] = "dot";
  const Ve = 20480;
  e[e.question = Ve] = "question";
  const Be = 21504;
  e[e.questionDot = Be] = "questionDot";
  const He = 22528;
  e[e.arrow = He] = "arrow";
  const Je = 23552;
  e[e.template = Je] = "template";
  const Me = 24576;
  e[e.ellipsis = Me] = "ellipsis";
  const L = 25600;
  e[e.backQuote = L] = "backQuote";
  const v = 27136;
  e[e.dollarBraceL = v] = "dollarBraceL";
  const M = 27648;
  e[e.at = M] = "at";
  const V = 29184;
  e[e.hash = V] = "hash";
  const ee = 29728;
  e[e.eq = ee] = "eq";
  const K = 30752;
  e[e.assign = K] = "assign";
  const re = 32640;
  e[e.preIncDec = re] = "preIncDec";
  const ye = 33664;
  e[e.postIncDec = ye] = "postIncDec";
  const p = 34432;
  e[e.bang = p] = "bang";
  const y = 35456;
  e[e.tilde = y] = "tilde";
  const T = 35841;
  e[e.pipeline = T] = "pipeline";
  const S = 36866;
  e[e.nullishCoalescing = S] = "nullishCoalescing";
  const C = 37890;
  e[e.logicalOR = C] = "logicalOR";
  const j = 38915;
  e[e.logicalAND = j] = "logicalAND";
  const $ = 39940;
  e[e.bitwiseOR = $] = "bitwiseOR";
  const Y = 40965;
  e[e.bitwiseXOR = Y] = "bitwiseXOR";
  const he = 41990;
  e[e.bitwiseAND = he] = "bitwiseAND";
  const fe = 43015;
  e[e.equality = fe] = "equality";
  const Ce = 44040;
  e[e.lessThan = Ce] = "lessThan";
  const je = 45064;
  e[e.greaterThan = je] = "greaterThan";
  const ke = 46088;
  e[e.relationalOrEqual = ke] = "relationalOrEqual";
  const ve = 47113;
  e[e.bitShiftL = ve] = "bitShiftL";
  const Ee = 48137;
  e[e.bitShiftR = Ee] = "bitShiftR";
  const Qe = 49802;
  e[e.plus = Qe] = "plus";
  const pt = 50826;
  e[e.minus = pt] = "minus";
  const mt = 51723;
  e[e.modulo = mt] = "modulo";
  const m = 52235;
  e[e.star = m] = "star";
  const b = 53259;
  e[e.slash = b] = "slash";
  const E = 54348;
  e[e.exponent = E] = "exponent";
  const N = 55296;
  e[e.jsxName = N] = "jsxName";
  const W = 56320;
  e[e.jsxText = W] = "jsxText";
  const F = 57344;
  e[e.jsxEmptyText = F] = "jsxEmptyText";
  const te = 58880;
  e[e.jsxTagStart = te] = "jsxTagStart";
  const ce = 59392;
  e[e.jsxTagEnd = ce] = "jsxTagEnd";
  const Z = 60928;
  e[e.typeParameterStart = Z] = "typeParameterStart";
  const le = 61440;
  e[e.nonNullAssertion = le] = "nonNullAssertion";
  const De = 62480;
  e[e._break = De] = "_break";
  const xe = 63504;
  e[e._case = xe] = "_case";
  const ge = 64528;
  e[e._catch = ge] = "_catch";
  const Le = 65552;
  e[e._continue = Le] = "_continue";
  const We = 66576;
  e[e._debugger = We] = "_debugger";
  const Ze = 67600;
  e[e._default = Ze] = "_default";
  const rt = 68624;
  e[e._do = rt] = "_do";
  const ot = 69648;
  e[e._else = ot] = "_else";
  const It = 70672;
  e[e._finally = It] = "_finally";
  const qe = 71696;
  e[e._for = qe] = "_for";
  const bt = 73232;
  e[e._function = bt] = "_function";
  const Rt = 73744;
  e[e._if = Rt] = "_if";
  const Vt = 74768;
  e[e._return = Vt] = "_return";
  const Lt = 75792;
  e[e._switch = Lt] = "_switch";
  const wt = 77456;
  e[e._throw = wt] = "_throw";
  const Ke = 77840;
  e[e._try = Ke] = "_try";
  const dt = 78864;
  e[e._var = dt] = "_var";
  const Dt = 79888;
  e[e._let = Dt] = "_let";
  const Ot = 80912;
  e[e._const = Ot] = "_const";
  const Ft = 81936;
  e[e._while = Ft] = "_while";
  const Ln = 82960;
  e[e._with = Ln] = "_with";
  const Dn = 84496;
  e[e._new = Dn] = "_new";
  const On = 85520;
  e[e._this = On] = "_this";
  const Fn = 86544;
  e[e._super = Fn] = "_super";
  const Mn = 87568;
  e[e._class = Mn] = "_class";
  const jn = 88080;
  e[e._extends = jn] = "_extends";
  const qn = 89104;
  e[e._export = qn] = "_export";
  const Bn = 90640;
  e[e._import = Bn] = "_import";
  const $n = 91664;
  e[e._yield = $n] = "_yield";
  const Un = 92688;
  e[e._null = Un] = "_null";
  const Vn = 93712;
  e[e._true = Vn] = "_true";
  const Hn = 94736;
  e[e._false = Hn] = "_false";
  const Wn = 95256;
  e[e._in = Wn] = "_in";
  const Gn = 96280;
  e[e._instanceof = Gn] = "_instanceof";
  const Xn = 97936;
  e[e._typeof = Xn] = "_typeof";
  const zn = 98960;
  e[e._void = zn] = "_void";
  const wr = 99984;
  e[e._delete = wr] = "_delete";
  const Tr = 100880;
  e[e._async = Tr] = "_async";
  const Er = 101904;
  e[e._get = Er] = "_get";
  const Sr = 102928;
  e[e._set = Sr] = "_set";
  const Ar = 103952;
  e[e._declare = Ar] = "_declare";
  const vr = 104976;
  e[e._readonly = vr] = "_readonly";
  const Nr = 106e3;
  e[e._abstract = Nr] = "_abstract";
  const Cr = 107024;
  e[e._static = Cr] = "_static";
  const Pr = 107536;
  e[e._public = Pr] = "_public";
  const Rr = 108560;
  e[e._private = Rr] = "_private";
  const Lr = 109584;
  e[e._protected = Lr] = "_protected";
  const Dr = 110608;
  e[e._override = Dr] = "_override";
  const Or = 112144;
  e[e._as = Or] = "_as";
  const Fr = 113168;
  e[e._enum = Fr] = "_enum";
  const Mr = 114192;
  e[e._type = Mr] = "_type";
  const jr = 115216;
  e[e._implements = jr] = "_implements";
})(t || (t = {}));
function l1(e) {
  switch (e) {
    case t.num:
      return "num";
    case t.bigint:
      return "bigint";
    case t.decimal:
      return "decimal";
    case t.regexp:
      return "regexp";
    case t.string:
      return "string";
    case t.name:
      return "name";
    case t.eof:
      return "eof";
    case t.bracketL:
      return "[";
    case t.bracketR:
      return "]";
    case t.braceL:
      return "{";
    case t.braceBarL:
      return "{|";
    case t.braceR:
      return "}";
    case t.braceBarR:
      return "|}";
    case t.parenL:
      return "(";
    case t.parenR:
      return ")";
    case t.comma:
      return ",";
    case t.semi:
      return ";";
    case t.colon:
      return ":";
    case t.doubleColon:
      return "::";
    case t.dot:
      return ".";
    case t.question:
      return "?";
    case t.questionDot:
      return "?.";
    case t.arrow:
      return "=>";
    case t.template:
      return "template";
    case t.ellipsis:
      return "...";
    case t.backQuote:
      return "`";
    case t.dollarBraceL:
      return "${";
    case t.at:
      return "@";
    case t.hash:
      return "#";
    case t.eq:
      return "=";
    case t.assign:
      return "_=";
    case t.preIncDec:
      return "++/--";
    case t.postIncDec:
      return "++/--";
    case t.bang:
      return "!";
    case t.tilde:
      return "~";
    case t.pipeline:
      return "|>";
    case t.nullishCoalescing:
      return "??";
    case t.logicalOR:
      return "||";
    case t.logicalAND:
      return "&&";
    case t.bitwiseOR:
      return "|";
    case t.bitwiseXOR:
      return "^";
    case t.bitwiseAND:
      return "&";
    case t.equality:
      return "==/!=";
    case t.lessThan:
      return "<";
    case t.greaterThan:
      return ">";
    case t.relationalOrEqual:
      return "<=/>=";
    case t.bitShiftL:
      return "<<";
    case t.bitShiftR:
      return ">>/>>>";
    case t.plus:
      return "+";
    case t.minus:
      return "-";
    case t.modulo:
      return "%";
    case t.star:
      return "*";
    case t.slash:
      return "/";
    case t.exponent:
      return "**";
    case t.jsxName:
      return "jsxName";
    case t.jsxText:
      return "jsxText";
    case t.jsxEmptyText:
      return "jsxEmptyText";
    case t.jsxTagStart:
      return "jsxTagStart";
    case t.jsxTagEnd:
      return "jsxTagEnd";
    case t.typeParameterStart:
      return "typeParameterStart";
    case t.nonNullAssertion:
      return "nonNullAssertion";
    case t._break:
      return "break";
    case t._case:
      return "case";
    case t._catch:
      return "catch";
    case t._continue:
      return "continue";
    case t._debugger:
      return "debugger";
    case t._default:
      return "default";
    case t._do:
      return "do";
    case t._else:
      return "else";
    case t._finally:
      return "finally";
    case t._for:
      return "for";
    case t._function:
      return "function";
    case t._if:
      return "if";
    case t._return:
      return "return";
    case t._switch:
      return "switch";
    case t._throw:
      return "throw";
    case t._try:
      return "try";
    case t._var:
      return "var";
    case t._let:
      return "let";
    case t._const:
      return "const";
    case t._while:
      return "while";
    case t._with:
      return "with";
    case t._new:
      return "new";
    case t._this:
      return "this";
    case t._super:
      return "super";
    case t._class:
      return "class";
    case t._extends:
      return "extends";
    case t._export:
      return "export";
    case t._import:
      return "import";
    case t._yield:
      return "yield";
    case t._null:
      return "null";
    case t._true:
      return "true";
    case t._false:
      return "false";
    case t._in:
      return "in";
    case t._instanceof:
      return "instanceof";
    case t._typeof:
      return "typeof";
    case t._void:
      return "void";
    case t._delete:
      return "delete";
    case t._async:
      return "async";
    case t._get:
      return "get";
    case t._set:
      return "set";
    case t._declare:
      return "declare";
    case t._readonly:
      return "readonly";
    case t._abstract:
      return "abstract";
    case t._static:
      return "static";
    case t._public:
      return "public";
    case t._private:
      return "private";
    case t._protected:
      return "protected";
    case t._override:
      return "override";
    case t._as:
      return "as";
    case t._enum:
      return "enum";
    case t._type:
      return "type";
    case t._implements:
      return "implements";
    default:
      return "";
  }
}
class ut {
  constructor(n, s, o) {
    this.startTokenIndex = n, this.endTokenIndex = s, this.isFunctionScope = o;
  }
}
class Br {
  constructor(n, s, o, i, c, h, k, x, d, w, P, I, R) {
    this.potentialArrowAt = n, this.noAnonFunctionType = s, this.inDisallowConditionalTypesContext = o, this.tokensLength = i, this.scopesLength = c, this.pos = h, this.type = k, this.contextualKeyword = x, this.start = d, this.end = w, this.isType = P, this.scopeDepth = I, this.error = R;
  }
}
class $e {
  constructor() {
    $e.prototype.__init.call(this), $e.prototype.__init2.call(this), $e.prototype.__init3.call(this), $e.prototype.__init4.call(this), $e.prototype.__init5.call(this), $e.prototype.__init6.call(this), $e.prototype.__init7.call(this), $e.prototype.__init8.call(this), $e.prototype.__init9.call(this), $e.prototype.__init10.call(this), $e.prototype.__init11.call(this), $e.prototype.__init12.call(this), $e.prototype.__init13.call(this);
  }
  // Used to signify the start of a potential arrow function
  __init() {
    this.potentialArrowAt = -1;
  }
  // Used by Flow to handle an edge case involving function type parsing.
  __init2() {
    this.noAnonFunctionType = !1;
  }
  // Used by TypeScript to handle ambiguities when parsing conditional types.
  __init3() {
    this.inDisallowConditionalTypesContext = !1;
  }
  // Token store.
  __init4() {
    this.tokens = [];
  }
  // Array of all observed scopes, ordered by their ending position.
  __init5() {
    this.scopes = [];
  }
  // The current position of the tokenizer in the input.
  __init6() {
    this.pos = 0;
  }
  // Information about the current token.
  __init7() {
    this.type = t.eof;
  }
  __init8() {
    this.contextualKeyword = l.NONE;
  }
  __init9() {
    this.start = 0;
  }
  __init10() {
    this.end = 0;
  }
  __init11() {
    this.isType = !1;
  }
  __init12() {
    this.scopeDepth = 0;
  }
  /**
   * If the parser is in an error state, then the token is always tt.eof and all functions can
   * keep executing but should be written so they don't get into an infinite loop in this situation.
   *
   * This approach, combined with the ability to snapshot and restore state, allows us to implement
   * backtracking without exceptions and without needing to explicitly propagate error states
   * everywhere.
   */
  __init13() {
    this.error = null;
  }
  snapshot() {
    return new Br(
      this.potentialArrowAt,
      this.noAnonFunctionType,
      this.inDisallowConditionalTypesContext,
      this.tokens.length,
      this.scopes.length,
      this.pos,
      this.type,
      this.contextualKeyword,
      this.start,
      this.end,
      this.isType,
      this.scopeDepth,
      this.error
    );
  }
  restoreFromSnapshot(n) {
    this.potentialArrowAt = n.potentialArrowAt, this.noAnonFunctionType = n.noAnonFunctionType, this.inDisallowConditionalTypesContext = n.inDisallowConditionalTypesContext, this.tokens.length = n.tokensLength, this.scopes.length = n.scopesLength, this.pos = n.pos, this.type = n.type, this.contextualKeyword = n.contextualKeyword, this.start = n.start, this.end = n.end, this.isType = n.isType, this.scopeDepth = n.scopeDepth, this.error = n.error;
  }
}
var u;
(function(e) {
  e[e.backSpace = 8] = "backSpace";
  const s = 10;
  e[e.lineFeed = s] = "lineFeed";
  const o = 9;
  e[e.tab = o] = "tab";
  const i = 13;
  e[e.carriageReturn = i] = "carriageReturn";
  const c = 14;
  e[e.shiftOut = c] = "shiftOut";
  const h = 32;
  e[e.space = h] = "space";
  const k = 33;
  e[e.exclamationMark = k] = "exclamationMark";
  const x = 34;
  e[e.quotationMark = x] = "quotationMark";
  const d = 35;
  e[e.numberSign = d] = "numberSign";
  const w = 36;
  e[e.dollarSign = w] = "dollarSign";
  const P = 37;
  e[e.percentSign = P] = "percentSign";
  const I = 38;
  e[e.ampersand = I] = "ampersand";
  const R = 39;
  e[e.apostrophe = R] = "apostrophe";
  const G = 40;
  e[e.leftParenthesis = G] = "leftParenthesis";
  const se = 41;
  e[e.rightParenthesis = se] = "rightParenthesis";
  const we = 42;
  e[e.asterisk = we] = "asterisk";
  const Te = 43;
  e[e.plusSign = Te] = "plusSign";
  const O = 44;
  e[e.comma = O] = "comma";
  const q = 45;
  e[e.dash = q] = "dash";
  const U = 46;
  e[e.dot = U] = "dot";
  const ue = 47;
  e[e.slash = ue] = "slash";
  const me = 48;
  e[e.digit0 = me] = "digit0";
  const oe = 49;
  e[e.digit1 = oe] = "digit1";
  const de = 50;
  e[e.digit2 = de] = "digit2";
  const Re = 51;
  e[e.digit3 = Re] = "digit3";
  const Ne = 52;
  e[e.digit4 = Ne] = "digit4";
  const Ae = 53;
  e[e.digit5 = Ae] = "digit5";
  const Ve = 54;
  e[e.digit6 = Ve] = "digit6";
  const Be = 55;
  e[e.digit7 = Be] = "digit7";
  const He = 56;
  e[e.digit8 = He] = "digit8";
  const Je = 57;
  e[e.digit9 = Je] = "digit9";
  const Me = 58;
  e[e.colon = Me] = "colon";
  const L = 59;
  e[e.semicolon = L] = "semicolon";
  const v = 60;
  e[e.lessThan = v] = "lessThan";
  const M = 61;
  e[e.equalsTo = M] = "equalsTo";
  const V = 62;
  e[e.greaterThan = V] = "greaterThan";
  const ee = 63;
  e[e.questionMark = ee] = "questionMark";
  const K = 64;
  e[e.atSign = K] = "atSign";
  const re = 65;
  e[e.uppercaseA = re] = "uppercaseA";
  const ye = 66;
  e[e.uppercaseB = ye] = "uppercaseB";
  const p = 67;
  e[e.uppercaseC = p] = "uppercaseC";
  const y = 68;
  e[e.uppercaseD = y] = "uppercaseD";
  const T = 69;
  e[e.uppercaseE = T] = "uppercaseE";
  const S = 70;
  e[e.uppercaseF = S] = "uppercaseF";
  const C = 71;
  e[e.uppercaseG = C] = "uppercaseG";
  const j = 72;
  e[e.uppercaseH = j] = "uppercaseH";
  const $ = 73;
  e[e.uppercaseI = $] = "uppercaseI";
  const Y = 74;
  e[e.uppercaseJ = Y] = "uppercaseJ";
  const he = 75;
  e[e.uppercaseK = he] = "uppercaseK";
  const fe = 76;
  e[e.uppercaseL = fe] = "uppercaseL";
  const Ce = 77;
  e[e.uppercaseM = Ce] = "uppercaseM";
  const je = 78;
  e[e.uppercaseN = je] = "uppercaseN";
  const ke = 79;
  e[e.uppercaseO = ke] = "uppercaseO";
  const ve = 80;
  e[e.uppercaseP = ve] = "uppercaseP";
  const Ee = 81;
  e[e.uppercaseQ = Ee] = "uppercaseQ";
  const Qe = 82;
  e[e.uppercaseR = Qe] = "uppercaseR";
  const pt = 83;
  e[e.uppercaseS = pt] = "uppercaseS";
  const mt = 84;
  e[e.uppercaseT = mt] = "uppercaseT";
  const m = 85;
  e[e.uppercaseU = m] = "uppercaseU";
  const b = 86;
  e[e.uppercaseV = b] = "uppercaseV";
  const E = 87;
  e[e.uppercaseW = E] = "uppercaseW";
  const N = 88;
  e[e.uppercaseX = N] = "uppercaseX";
  const W = 89;
  e[e.uppercaseY = W] = "uppercaseY";
  const F = 90;
  e[e.uppercaseZ = F] = "uppercaseZ";
  const te = 91;
  e[e.leftSquareBracket = te] = "leftSquareBracket";
  const ce = 92;
  e[e.backslash = ce] = "backslash";
  const Z = 93;
  e[e.rightSquareBracket = Z] = "rightSquareBracket";
  const le = 94;
  e[e.caret = le] = "caret";
  const De = 95;
  e[e.underscore = De] = "underscore";
  const xe = 96;
  e[e.graveAccent = xe] = "graveAccent";
  const ge = 97;
  e[e.lowercaseA = ge] = "lowercaseA";
  const Le = 98;
  e[e.lowercaseB = Le] = "lowercaseB";
  const We = 99;
  e[e.lowercaseC = We] = "lowercaseC";
  const Ze = 100;
  e[e.lowercaseD = Ze] = "lowercaseD";
  const rt = 101;
  e[e.lowercaseE = rt] = "lowercaseE";
  const ot = 102;
  e[e.lowercaseF = ot] = "lowercaseF";
  const It = 103;
  e[e.lowercaseG = It] = "lowercaseG";
  const qe = 104;
  e[e.lowercaseH = qe] = "lowercaseH";
  const bt = 105;
  e[e.lowercaseI = bt] = "lowercaseI";
  const Rt = 106;
  e[e.lowercaseJ = Rt] = "lowercaseJ";
  const Vt = 107;
  e[e.lowercaseK = Vt] = "lowercaseK";
  const Lt = 108;
  e[e.lowercaseL = Lt] = "lowercaseL";
  const wt = 109;
  e[e.lowercaseM = wt] = "lowercaseM";
  const Ke = 110;
  e[e.lowercaseN = Ke] = "lowercaseN";
  const dt = 111;
  e[e.lowercaseO = dt] = "lowercaseO";
  const Dt = 112;
  e[e.lowercaseP = Dt] = "lowercaseP";
  const Ot = 113;
  e[e.lowercaseQ = Ot] = "lowercaseQ";
  const Ft = 114;
  e[e.lowercaseR = Ft] = "lowercaseR";
  const Ln = 115;
  e[e.lowercaseS = Ln] = "lowercaseS";
  const Dn = 116;
  e[e.lowercaseT = Dn] = "lowercaseT";
  const On = 117;
  e[e.lowercaseU = On] = "lowercaseU";
  const Fn = 118;
  e[e.lowercaseV = Fn] = "lowercaseV";
  const Mn = 119;
  e[e.lowercaseW = Mn] = "lowercaseW";
  const jn = 120;
  e[e.lowercaseX = jn] = "lowercaseX";
  const qn = 121;
  e[e.lowercaseY = qn] = "lowercaseY";
  const Bn = 122;
  e[e.lowercaseZ = Bn] = "lowercaseZ";
  const $n = 123;
  e[e.leftCurlyBrace = $n] = "leftCurlyBrace";
  const Un = 124;
  e[e.verticalBar = Un] = "verticalBar";
  const Vn = 125;
  e[e.rightCurlyBrace = Vn] = "rightCurlyBrace";
  const Hn = 126;
  e[e.tilde = Hn] = "tilde";
  const Wn = 160;
  e[e.nonBreakingSpace = Wn] = "nonBreakingSpace";
  const Gn = 5760;
  e[e.oghamSpaceMark = Gn] = "oghamSpaceMark";
  const Xn = 8232;
  e[e.lineSeparator = Xn] = "lineSeparator";
  const zn = 8233;
  e[e.paragraphSeparator = zn] = "paragraphSeparator";
})(u || (u = {}));
let En, ne, ie, r, A, u1;
function Jt() {
  return u1++;
}
function $r(e) {
  if ("pos" in e) {
    const n = Vr(e.pos);
    e.message += ` (${n.line}:${n.column})`, e.loc = n;
  }
  return e;
}
class Ur {
  constructor(n, s) {
    this.line = n, this.column = s;
  }
}
function Vr(e) {
  let n = 1, s = 1;
  for (let o = 0; o < e; o++)
    A.charCodeAt(o) === u.lineFeed ? (n++, s = 1) : s++;
  return new Ur(n, s);
}
function Hr(e, n, s, o) {
  A = e, r = new $e(), u1 = 1, En = n, ne = s, ie = o;
}
function D(e) {
  return r.contextualKeyword === e;
}
function fs(e) {
  const n = nn();
  return n.type === t.name && n.contextualKeyword === e;
}
function Pe(e) {
  return r.contextualKeyword === e && f(t.name);
}
function Se(e) {
  Pe(e) || z();
}
function Xe() {
  return a(t.eof) || a(t.braceR) || Ue();
}
function Ue() {
  const e = r.tokens[r.tokens.length - 1], n = e ? e.end : 0;
  for (let s = n; s < r.start; s++) {
    const o = A.charCodeAt(s);
    if (o === u.lineFeed || o === u.carriageReturn || o === 8232 || o === 8233)
      return !0;
  }
  return !1;
}
function h1() {
  const e = ps();
  for (let n = r.end; n < e; n++) {
    const s = A.charCodeAt(n);
    if (s === u.lineFeed || s === u.carriageReturn || s === 8232 || s === 8233)
      return !0;
  }
  return !1;
}
function it() {
  return f(t.semi) || Xe();
}
function _e() {
  it() || z('Unexpected token, expected ";"');
}
function g(e) {
  f(e) || z(`Unexpected token, expected "${l1(e)}"`);
}
function z(e = "Unexpected token", n = r.start) {
  if (r.error)
    return;
  const s = new SyntaxError(e);
  s.pos = n, r.error = s, r.pos = A.length, X(t.eof);
}
const f1 = [
  9,
  11,
  12,
  u.space,
  u.nonBreakingSpace,
  u.oghamSpaceMark,
  8192,
  // EN QUAD
  8193,
  // EM QUAD
  8194,
  // EN SPACE
  8195,
  // EM SPACE
  8196,
  // THREE-PER-EM SPACE
  8197,
  // FOUR-PER-EM SPACE
  8198,
  // SIX-PER-EM SPACE
  8199,
  // FIGURE SPACE
  8200,
  // PUNCTUATION SPACE
  8201,
  // THIN SPACE
  8202,
  // HAIR SPACE
  8239,
  // NARROW NO-BREAK SPACE
  8287,
  // MEDIUM MATHEMATICAL SPACE
  12288,
  // IDEOGRAPHIC SPACE
  65279
  // ZERO WIDTH NO-BREAK SPACE
], Bs = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, p1 = new Uint8Array(65536);
for (const e of f1)
  p1[e] = 1;
function Wr(e) {
  if (e < 48) return e === 36;
  if (e < 58) return !0;
  if (e < 65) return !1;
  if (e < 91) return !0;
  if (e < 97) return e === 95;
  if (e < 123) return !0;
  if (e < 128) return !1;
  throw new Error("Should not be called with non-ASCII char code.");
}
const tt = new Uint8Array(65536);
for (let e = 0; e < 128; e++)
  tt[e] = Wr(e) ? 1 : 0;
for (let e = 128; e < 65536; e++)
  tt[e] = 1;
for (const e of f1)
  tt[e] = 0;
tt[8232] = 0;
tt[8233] = 0;
const tn = tt.slice();
for (let e = u.digit0; e <= u.digit9; e++)
  tn[e] = 0;
const $s = new Int32Array([
  // ""
  -1,
  27,
  783,
  918,
  1755,
  2376,
  2862,
  3483,
  -1,
  3699,
  -1,
  4617,
  4752,
  4833,
  5130,
  5508,
  5940,
  -1,
  6480,
  6939,
  7749,
  8181,
  8451,
  8613,
  -1,
  8829,
  -1,
  // "a"
  -1,
  -1,
  54,
  243,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  432,
  -1,
  -1,
  -1,
  675,
  -1,
  -1,
  -1,
  // "ab"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  81,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "abs"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  108,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "abst"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  135,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "abstr"
  -1,
  162,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "abstra"
  -1,
  -1,
  -1,
  189,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "abstrac"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  216,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "abstract"
  l._abstract << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ac"
  -1,
  -1,
  -1,
  270,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "acc"
  -1,
  -1,
  -1,
  -1,
  -1,
  297,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "acce"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  324,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "acces"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  351,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "access"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  378,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "accesso"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  405,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "accessor"
  l._accessor << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "as"
  l._as << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  459,
  -1,
  -1,
  -1,
  -1,
  -1,
  594,
  -1,
  // "ass"
  -1,
  -1,
  -1,
  -1,
  -1,
  486,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "asse"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  513,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "asser"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  540,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "assert"
  l._assert << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  567,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "asserts"
  l._asserts << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "asy"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  621,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "asyn"
  -1,
  -1,
  -1,
  648,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "async"
  l._async << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "aw"
  -1,
  702,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "awa"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  729,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "awai"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  756,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "await"
  l._await << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "b"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  810,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "br"
  -1,
  -1,
  -1,
  -1,
  -1,
  837,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "bre"
  -1,
  864,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "brea"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  891,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "break"
  (t._break << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "c"
  -1,
  945,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1107,
  -1,
  -1,
  -1,
  1242,
  -1,
  -1,
  1350,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ca"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  972,
  1026,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "cas"
  -1,
  -1,
  -1,
  -1,
  -1,
  999,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "case"
  (t._case << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "cat"
  -1,
  -1,
  -1,
  1053,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "catc"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1080,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "catch"
  (t._catch << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ch"
  -1,
  -1,
  -1,
  -1,
  -1,
  1134,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "che"
  -1,
  -1,
  -1,
  1161,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "chec"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1188,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "check"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1215,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "checks"
  l._checks << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "cl"
  -1,
  1269,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "cla"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1296,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "clas"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1323,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "class"
  (t._class << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "co"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1377,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "con"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1404,
  1620,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "cons"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1431,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "const"
  (t._const << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1458,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "constr"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1485,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "constru"
  -1,
  -1,
  -1,
  1512,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "construc"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1539,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "construct"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1566,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "constructo"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1593,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "constructor"
  l._constructor << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "cont"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1647,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "conti"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1674,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "contin"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1701,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "continu"
  -1,
  -1,
  -1,
  -1,
  -1,
  1728,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "continue"
  (t._continue << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "d"
  -1,
  -1,
  -1,
  -1,
  -1,
  1782,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2349,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "de"
  -1,
  -1,
  1809,
  1971,
  -1,
  -1,
  2106,
  -1,
  -1,
  -1,
  -1,
  -1,
  2241,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "deb"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1836,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "debu"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1863,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "debug"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1890,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "debugg"
  -1,
  -1,
  -1,
  -1,
  -1,
  1917,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "debugge"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1944,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "debugger"
  (t._debugger << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "dec"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  1998,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "decl"
  -1,
  2025,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "decla"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2052,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "declar"
  -1,
  -1,
  -1,
  -1,
  -1,
  2079,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "declare"
  l._declare << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "def"
  -1,
  2133,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "defa"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2160,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "defau"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2187,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "defaul"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2214,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "default"
  (t._default << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "del"
  -1,
  -1,
  -1,
  -1,
  -1,
  2268,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "dele"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2295,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "delet"
  -1,
  -1,
  -1,
  -1,
  -1,
  2322,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "delete"
  (t._delete << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "do"
  (t._do << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "e"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2403,
  -1,
  2484,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2565,
  -1,
  -1,
  // "el"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2430,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "els"
  -1,
  -1,
  -1,
  -1,
  -1,
  2457,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "else"
  (t._else << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "en"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2511,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "enu"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2538,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "enum"
  l._enum << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ex"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2592,
  -1,
  -1,
  -1,
  2727,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "exp"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2619,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "expo"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2646,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "expor"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2673,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "export"
  (t._export << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2700,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "exports"
  l._exports << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ext"
  -1,
  -1,
  -1,
  -1,
  -1,
  2754,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "exte"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2781,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "exten"
  -1,
  -1,
  -1,
  -1,
  2808,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "extend"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2835,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "extends"
  (t._extends << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "f"
  -1,
  2889,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2997,
  -1,
  -1,
  -1,
  -1,
  -1,
  3159,
  -1,
  -1,
  3213,
  -1,
  -1,
  3294,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "fa"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2916,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "fal"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2943,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "fals"
  -1,
  -1,
  -1,
  -1,
  -1,
  2970,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "false"
  (t._false << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "fi"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3024,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "fin"
  -1,
  3051,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "fina"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3078,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "final"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3105,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "finall"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3132,
  -1,
  // "finally"
  (t._finally << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "fo"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3186,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "for"
  (t._for << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "fr"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3240,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "fro"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3267,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "from"
  l._from << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "fu"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3321,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "fun"
  -1,
  -1,
  -1,
  3348,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "func"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3375,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "funct"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3402,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "functi"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3429,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "functio"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3456,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "function"
  (t._function << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "g"
  -1,
  -1,
  -1,
  -1,
  -1,
  3510,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3564,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ge"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3537,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "get"
  l._get << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "gl"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3591,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "glo"
  -1,
  -1,
  3618,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "glob"
  -1,
  3645,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "globa"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3672,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "global"
  l._global << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "i"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3726,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3753,
  4077,
  -1,
  -1,
  -1,
  -1,
  4590,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "if"
  (t._if << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "im"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3780,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "imp"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3807,
  -1,
  -1,
  3996,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "impl"
  -1,
  -1,
  -1,
  -1,
  -1,
  3834,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "imple"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3861,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "implem"
  -1,
  -1,
  -1,
  -1,
  -1,
  3888,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "impleme"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3915,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "implemen"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3942,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "implement"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  3969,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "implements"
  l._implements << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "impo"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4023,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "impor"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4050,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "import"
  (t._import << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "in"
  (t._in << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4104,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4185,
  4401,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "inf"
  -1,
  -1,
  -1,
  -1,
  -1,
  4131,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "infe"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4158,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "infer"
  l._infer << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ins"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4212,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "inst"
  -1,
  4239,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "insta"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4266,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "instan"
  -1,
  -1,
  -1,
  4293,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "instanc"
  -1,
  -1,
  -1,
  -1,
  -1,
  4320,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "instance"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4347,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "instanceo"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4374,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "instanceof"
  (t._instanceof << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "int"
  -1,
  -1,
  -1,
  -1,
  -1,
  4428,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "inte"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4455,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "inter"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4482,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "interf"
  -1,
  4509,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "interfa"
  -1,
  -1,
  -1,
  4536,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "interfac"
  -1,
  -1,
  -1,
  -1,
  -1,
  4563,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "interface"
  l._interface << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "is"
  l._is << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "k"
  -1,
  -1,
  -1,
  -1,
  -1,
  4644,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ke"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4671,
  -1,
  // "key"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4698,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "keyo"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4725,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "keyof"
  l._keyof << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "l"
  -1,
  -1,
  -1,
  -1,
  -1,
  4779,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "le"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4806,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "let"
  (t._let << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "m"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4860,
  -1,
  -1,
  -1,
  -1,
  -1,
  4995,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "mi"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4887,
  -1,
  -1,
  // "mix"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4914,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "mixi"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4941,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "mixin"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  4968,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "mixins"
  l._mixins << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "mo"
  -1,
  -1,
  -1,
  -1,
  5022,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "mod"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5049,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "modu"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5076,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "modul"
  -1,
  -1,
  -1,
  -1,
  -1,
  5103,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "module"
  l._module << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "n"
  -1,
  5157,
  -1,
  -1,
  -1,
  5373,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5427,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "na"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5184,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "nam"
  -1,
  -1,
  -1,
  -1,
  -1,
  5211,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "name"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5238,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "names"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5265,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "namesp"
  -1,
  5292,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "namespa"
  -1,
  -1,
  -1,
  5319,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "namespac"
  -1,
  -1,
  -1,
  -1,
  -1,
  5346,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "namespace"
  l._namespace << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ne"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5400,
  -1,
  -1,
  -1,
  // "new"
  (t._new << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "nu"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5454,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "nul"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5481,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "null"
  (t._null << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "o"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5535,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5562,
  -1,
  -1,
  -1,
  -1,
  5697,
  5751,
  -1,
  -1,
  -1,
  -1,
  // "of"
  l._of << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "op"
  -1,
  5589,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "opa"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5616,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "opaq"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5643,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "opaqu"
  -1,
  -1,
  -1,
  -1,
  -1,
  5670,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "opaque"
  l._opaque << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ou"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5724,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "out"
  l._out << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ov"
  -1,
  -1,
  -1,
  -1,
  -1,
  5778,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ove"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5805,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "over"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5832,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "overr"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5859,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "overri"
  -1,
  -1,
  -1,
  -1,
  5886,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "overrid"
  -1,
  -1,
  -1,
  -1,
  -1,
  5913,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "override"
  l._override << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "p"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5967,
  -1,
  -1,
  6345,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "pr"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  5994,
  -1,
  -1,
  -1,
  -1,
  -1,
  6129,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "pri"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6021,
  -1,
  -1,
  -1,
  -1,
  // "priv"
  -1,
  6048,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "priva"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6075,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "privat"
  -1,
  -1,
  -1,
  -1,
  -1,
  6102,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "private"
  l._private << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "pro"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6156,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "prot"
  -1,
  -1,
  -1,
  -1,
  -1,
  6183,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6318,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "prote"
  -1,
  -1,
  -1,
  6210,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "protec"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6237,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "protect"
  -1,
  -1,
  -1,
  -1,
  -1,
  6264,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "protecte"
  -1,
  -1,
  -1,
  -1,
  6291,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "protected"
  l._protected << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "proto"
  l._proto << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "pu"
  -1,
  -1,
  6372,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "pub"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6399,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "publ"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6426,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "publi"
  -1,
  -1,
  -1,
  6453,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "public"
  l._public << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "r"
  -1,
  -1,
  -1,
  -1,
  -1,
  6507,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "re"
  -1,
  6534,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6696,
  -1,
  -1,
  6831,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "rea"
  -1,
  -1,
  -1,
  -1,
  6561,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "read"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6588,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "reado"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6615,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "readon"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6642,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "readonl"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6669,
  -1,
  // "readonly"
  l._readonly << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "req"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6723,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "requ"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6750,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "requi"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6777,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "requir"
  -1,
  -1,
  -1,
  -1,
  -1,
  6804,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "require"
  l._require << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ret"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6858,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "retu"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6885,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "retur"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6912,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "return"
  (t._return << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "s"
  -1,
  6966,
  -1,
  -1,
  -1,
  7182,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7236,
  7371,
  -1,
  7479,
  -1,
  7614,
  -1,
  // "sa"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  6993,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "sat"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7020,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "sati"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7047,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "satis"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7074,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "satisf"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7101,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "satisfi"
  -1,
  -1,
  -1,
  -1,
  -1,
  7128,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "satisfie"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7155,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "satisfies"
  l._satisfies << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "se"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7209,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "set"
  l._set << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "st"
  -1,
  7263,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "sta"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7290,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "stat"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7317,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "stati"
  -1,
  -1,
  -1,
  7344,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "static"
  l._static << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "su"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7398,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "sup"
  -1,
  -1,
  -1,
  -1,
  -1,
  7425,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "supe"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7452,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "super"
  (t._super << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "sw"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7506,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "swi"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7533,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "swit"
  -1,
  -1,
  -1,
  7560,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "switc"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7587,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "switch"
  (t._switch << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "sy"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7641,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "sym"
  -1,
  -1,
  7668,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "symb"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7695,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "symbo"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7722,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "symbol"
  l._symbol << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "t"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7776,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7938,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8046,
  -1,
  // "th"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7803,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7857,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "thi"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7830,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "this"
  (t._this << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "thr"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7884,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "thro"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7911,
  -1,
  -1,
  -1,
  // "throw"
  (t._throw << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "tr"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  7965,
  -1,
  -1,
  -1,
  8019,
  -1,
  // "tru"
  -1,
  -1,
  -1,
  -1,
  -1,
  7992,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "true"
  (t._true << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "try"
  (t._try << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "ty"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8073,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "typ"
  -1,
  -1,
  -1,
  -1,
  -1,
  8100,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "type"
  l._type << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8127,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "typeo"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8154,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "typeof"
  (t._typeof << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "u"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8208,
  -1,
  -1,
  -1,
  -1,
  8343,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "un"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8235,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "uni"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8262,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "uniq"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8289,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "uniqu"
  -1,
  -1,
  -1,
  -1,
  -1,
  8316,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "unique"
  l._unique << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "us"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8370,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "usi"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8397,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "usin"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8424,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "using"
  l._using << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "v"
  -1,
  8478,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8532,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "va"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8505,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "var"
  (t._var << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "vo"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8559,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "voi"
  -1,
  -1,
  -1,
  -1,
  8586,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "void"
  (t._void << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "w"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8640,
  8748,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "wh"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8667,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "whi"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8694,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "whil"
  -1,
  -1,
  -1,
  -1,
  -1,
  8721,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "while"
  (t._while << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "wi"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8775,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "wit"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8802,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "with"
  (t._with << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "y"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8856,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "yi"
  -1,
  -1,
  -1,
  -1,
  -1,
  8883,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "yie"
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  8910,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "yiel"
  -1,
  -1,
  -1,
  -1,
  8937,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  // "yield"
  (t._yield << 1) + 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1
]);
function Gr() {
  let e = 0, n = 0, s = r.pos;
  for (; s < A.length && (n = A.charCodeAt(s), !(n < u.lowercaseA || n > u.lowercaseZ)); ) {
    const i = $s[e + (n - u.lowercaseA) + 1];
    if (i === -1)
      break;
    e = i, s++;
  }
  const o = $s[e];
  if (o > -1 && !tt[n]) {
    r.pos = s, o & 1 ? X(o >>> 1) : X(t.name, o >>> 1);
    return;
  }
  for (; s < A.length; ) {
    const i = A.charCodeAt(s);
    if (tt[i])
      s++;
    else if (i === u.backslash) {
      if (s += 2, A.charCodeAt(s) === u.leftCurlyBrace) {
        for (; s < A.length && A.charCodeAt(s) !== u.rightCurlyBrace; )
          s++;
        s++;
      }
    } else if (i === u.atSign && A.charCodeAt(s + 1) === u.atSign)
      s += 2;
    else
      break;
  }
  r.pos = s, X(t.name);
}
var B;
(function(e) {
  e[e.Access = 0] = "Access";
  const s = 1;
  e[e.ExportAccess = s] = "ExportAccess";
  const o = s + 1;
  e[e.TopLevelDeclaration = o] = "TopLevelDeclaration";
  const i = o + 1;
  e[e.FunctionScopedDeclaration = i] = "FunctionScopedDeclaration";
  const c = i + 1;
  e[e.BlockScopedDeclaration = c] = "BlockScopedDeclaration";
  const h = c + 1;
  e[e.ObjectShorthandTopLevelDeclaration = h] = "ObjectShorthandTopLevelDeclaration";
  const k = h + 1;
  e[e.ObjectShorthandFunctionScopedDeclaration = k] = "ObjectShorthandFunctionScopedDeclaration";
  const x = k + 1;
  e[e.ObjectShorthandBlockScopedDeclaration = x] = "ObjectShorthandBlockScopedDeclaration";
  const d = x + 1;
  e[e.ObjectShorthand = d] = "ObjectShorthand";
  const w = d + 1;
  e[e.ImportDeclaration = w] = "ImportDeclaration";
  const P = w + 1;
  e[e.ObjectKey = P] = "ObjectKey";
  const I = P + 1;
  e[e.ImportAccess = I] = "ImportAccess";
})(B || (B = {}));
var et;
(function(e) {
  e[e.NoChildren = 0] = "NoChildren";
  const s = 1;
  e[e.OneChild = s] = "OneChild";
  const o = s + 1;
  e[e.StaticChildren = o] = "StaticChildren";
  const i = o + 1;
  e[e.KeyAfterPropSpread = i] = "KeyAfterPropSpread";
})(et || (et = {}));
function m1(e) {
  const n = e.identifierRole;
  return n === B.TopLevelDeclaration || n === B.FunctionScopedDeclaration || n === B.BlockScopedDeclaration || n === B.ObjectShorthandTopLevelDeclaration || n === B.ObjectShorthandFunctionScopedDeclaration || n === B.ObjectShorthandBlockScopedDeclaration;
}
function Xr(e) {
  const n = e.identifierRole;
  return n === B.FunctionScopedDeclaration || n === B.BlockScopedDeclaration || n === B.ObjectShorthandFunctionScopedDeclaration || n === B.ObjectShorthandBlockScopedDeclaration;
}
function d1(e) {
  const n = e.identifierRole;
  return n === B.TopLevelDeclaration || n === B.ObjectShorthandTopLevelDeclaration || n === B.ImportDeclaration;
}
function zr(e) {
  const n = e.identifierRole;
  return n === B.TopLevelDeclaration || n === B.BlockScopedDeclaration || n === B.ObjectShorthandTopLevelDeclaration || n === B.ObjectShorthandBlockScopedDeclaration;
}
function Jr(e) {
  const n = e.identifierRole;
  return n === B.FunctionScopedDeclaration || n === B.ObjectShorthandFunctionScopedDeclaration;
}
function Qr(e) {
  return e.identifierRole === B.ObjectShorthandTopLevelDeclaration || e.identifierRole === B.ObjectShorthandBlockScopedDeclaration || e.identifierRole === B.ObjectShorthandFunctionScopedDeclaration;
}
class Sn {
  constructor() {
    this.type = r.type, this.contextualKeyword = r.contextualKeyword, this.start = r.start, this.end = r.end, this.scopeDepth = r.scopeDepth, this.isType = r.isType, this.identifierRole = null, this.jsxRole = null, this.shadowsGlobal = !1, this.isAsyncOperation = !1, this.contextId = null, this.rhsEndIndex = null, this.isExpression = !1, this.numNullishCoalesceStarts = 0, this.numNullishCoalesceEnds = 0, this.isOptionalChainStart = !1, this.isOptionalChainEnd = !1, this.subscriptStartIndex = null, this.nullishStartIndex = null;
  }
  // Initially false for all tokens, then may be computed in a follow-up step that does scope
  // analysis.
  // Initially false for all tokens, but may be set during transform to mark it as containing an
  // await operation.
  // For assignments, the index of the RHS. For export tokens, the end of the export.
  // For class tokens, records if the class is a class expression or a class statement.
  // Number of times to insert a `nullishCoalesce(` snippet before this token.
  // Number of times to insert a `)` snippet after this token.
  // If true, insert an `optionalChain([` snippet before this token.
  // If true, insert a `])` snippet after this token.
  // Tag for `.`, `?.`, `[`, `?.[`, `(`, and `?.(` to denote the "root" token for this
  // subscript chain. This can be used to determine if this chain is an optional chain.
  // Tag for `??` operators to denote the root token for this nullish coalescing call.
}
function _() {
  r.tokens.push(new Sn()), y1();
}
function kt() {
  r.tokens.push(new Sn()), r.start = r.pos, po();
}
function Yr() {
  r.type === t.assign && --r.pos, uo();
}
function Q(e) {
  for (let s = r.tokens.length - e; s < r.tokens.length; s++)
    r.tokens[s].isType = !0;
  const n = r.isType;
  return r.isType = !0, n;
}
function J(e) {
  r.isType = e;
}
function f(e) {
  return a(e) ? (_(), !0) : !1;
}
function k1(e) {
  const n = r.isType;
  r.isType = !0, f(e), r.isType = n;
}
function a(e) {
  return r.type === e;
}
function Ie() {
  const e = r.snapshot();
  _();
  const n = r.type;
  return r.restoreFromSnapshot(e), n;
}
class Zr {
  constructor(n, s) {
    this.type = n, this.contextualKeyword = s;
  }
}
function nn() {
  const e = r.snapshot();
  _();
  const n = r.type, s = r.contextualKeyword;
  return r.restoreFromSnapshot(e), new Zr(n, s);
}
function ps() {
  return g1(r.pos);
}
function g1(e) {
  Bs.lastIndex = e;
  const n = Bs.exec(A);
  return e + n[0].length;
}
function _1() {
  return A.charCodeAt(ps());
}
function y1() {
  if (I1(), r.start = r.pos, r.pos >= A.length) {
    const e = r.tokens;
    e.length >= 2 && e[e.length - 1].start >= A.length && e[e.length - 2].start >= A.length && z("Unexpectedly reached the end of input."), X(t.eof);
    return;
  }
  Kr(A.charCodeAt(r.pos));
}
function Kr(e) {
  tn[e] || e === u.backslash || e === u.atSign && A.charCodeAt(r.pos + 1) === u.atSign ? Gr() : T1(e);
}
function eo() {
  for (; A.charCodeAt(r.pos) !== u.asterisk || A.charCodeAt(r.pos + 1) !== u.slash; )
    if (r.pos++, r.pos > A.length) {
      z("Unterminated comment", r.pos - 2);
      return;
    }
  r.pos += 2;
}
function x1(e) {
  let n = A.charCodeAt(r.pos += e);
  if (r.pos < A.length)
    for (; n !== u.lineFeed && n !== u.carriageReturn && n !== u.lineSeparator && n !== u.paragraphSeparator && ++r.pos < A.length; )
      n = A.charCodeAt(r.pos);
}
function I1() {
  for (; r.pos < A.length; ) {
    const e = A.charCodeAt(r.pos);
    switch (e) {
      case u.carriageReturn:
        A.charCodeAt(r.pos + 1) === u.lineFeed && ++r.pos;
      case u.lineFeed:
      case u.lineSeparator:
      case u.paragraphSeparator:
        ++r.pos;
        break;
      case u.slash:
        switch (A.charCodeAt(r.pos + 1)) {
          case u.asterisk:
            r.pos += 2, eo();
            break;
          case u.slash:
            x1(2);
            break;
          default:
            return;
        }
        break;
      default:
        if (p1[e])
          ++r.pos;
        else
          return;
    }
  }
}
function X(e, n = l.NONE) {
  r.end = r.pos, r.type = e, r.contextualKeyword = n;
}
function to() {
  const e = A.charCodeAt(r.pos + 1);
  if (e >= u.digit0 && e <= u.digit9) {
    E1(!0);
    return;
  }
  e === u.dot && A.charCodeAt(r.pos + 2) === u.dot ? (r.pos += 3, X(t.ellipsis)) : (++r.pos, X(t.dot));
}
function no() {
  A.charCodeAt(r.pos + 1) === u.equalsTo ? ae(t.assign, 2) : ae(t.slash, 1);
}
function so(e) {
  let n = e === u.asterisk ? t.star : t.modulo, s = 1, o = A.charCodeAt(r.pos + 1);
  e === u.asterisk && o === u.asterisk && (s++, o = A.charCodeAt(r.pos + 2), n = t.exponent), o === u.equalsTo && A.charCodeAt(r.pos + 2) !== u.greaterThan && (s++, n = t.assign), ae(n, s);
}
function ro(e) {
  const n = A.charCodeAt(r.pos + 1);
  if (n === e) {
    A.charCodeAt(r.pos + 2) === u.equalsTo ? ae(t.assign, 3) : ae(e === u.verticalBar ? t.logicalOR : t.logicalAND, 2);
    return;
  }
  if (e === u.verticalBar) {
    if (n === u.greaterThan) {
      ae(t.pipeline, 2);
      return;
    } else if (n === u.rightCurlyBrace && ie) {
      ae(t.braceBarR, 2);
      return;
    }
  }
  if (n === u.equalsTo) {
    ae(t.assign, 2);
    return;
  }
  ae(e === u.verticalBar ? t.bitwiseOR : t.bitwiseAND, 1);
}
function oo() {
  A.charCodeAt(r.pos + 1) === u.equalsTo ? ae(t.assign, 2) : ae(t.bitwiseXOR, 1);
}
function io(e) {
  const n = A.charCodeAt(r.pos + 1);
  if (n === e) {
    ae(t.preIncDec, 2);
    return;
  }
  n === u.equalsTo ? ae(t.assign, 2) : e === u.plusSign ? ae(t.plus, 1) : ae(t.minus, 1);
}
function ao() {
  const e = A.charCodeAt(r.pos + 1);
  if (e === u.lessThan) {
    if (A.charCodeAt(r.pos + 2) === u.equalsTo) {
      ae(t.assign, 3);
      return;
    }
    r.isType ? ae(t.lessThan, 1) : ae(t.bitShiftL, 2);
    return;
  }
  e === u.equalsTo ? ae(t.relationalOrEqual, 2) : ae(t.lessThan, 1);
}
function b1() {
  if (r.isType) {
    ae(t.greaterThan, 1);
    return;
  }
  const e = A.charCodeAt(r.pos + 1);
  if (e === u.greaterThan) {
    const n = A.charCodeAt(r.pos + 2) === u.greaterThan ? 3 : 2;
    if (A.charCodeAt(r.pos + n) === u.equalsTo) {
      ae(t.assign, n + 1);
      return;
    }
    ae(t.bitShiftR, n);
    return;
  }
  e === u.equalsTo ? ae(t.relationalOrEqual, 2) : ae(t.greaterThan, 1);
}
function w1() {
  r.type === t.greaterThan && (r.pos -= 1, b1());
}
function co(e) {
  const n = A.charCodeAt(r.pos + 1);
  if (n === u.equalsTo) {
    ae(t.equality, A.charCodeAt(r.pos + 2) === u.equalsTo ? 3 : 2);
    return;
  }
  if (e === u.equalsTo && n === u.greaterThan) {
    r.pos += 2, X(t.arrow);
    return;
  }
  ae(e === u.equalsTo ? t.eq : t.bang, 1);
}
function lo() {
  const e = A.charCodeAt(r.pos + 1), n = A.charCodeAt(r.pos + 2);
  e === u.questionMark && // In Flow (but not TypeScript), ??string is a valid type that should be
  // tokenized as two individual ? tokens.
  !(ie && r.isType) ? n === u.equalsTo ? ae(t.assign, 3) : ae(t.nullishCoalescing, 2) : e === u.dot && !(n >= u.digit0 && n <= u.digit9) ? (r.pos += 2, X(t.questionDot)) : (++r.pos, X(t.question));
}
function T1(e) {
  switch (e) {
    case u.numberSign:
      ++r.pos, X(t.hash);
      return;
    case u.dot:
      to();
      return;
    case u.leftParenthesis:
      ++r.pos, X(t.parenL);
      return;
    case u.rightParenthesis:
      ++r.pos, X(t.parenR);
      return;
    case u.semicolon:
      ++r.pos, X(t.semi);
      return;
    case u.comma:
      ++r.pos, X(t.comma);
      return;
    case u.leftSquareBracket:
      ++r.pos, X(t.bracketL);
      return;
    case u.rightSquareBracket:
      ++r.pos, X(t.bracketR);
      return;
    case u.leftCurlyBrace:
      ie && A.charCodeAt(r.pos + 1) === u.verticalBar ? ae(t.braceBarL, 2) : (++r.pos, X(t.braceL));
      return;
    case u.rightCurlyBrace:
      ++r.pos, X(t.braceR);
      return;
    case u.colon:
      A.charCodeAt(r.pos + 1) === u.colon ? ae(t.doubleColon, 2) : (++r.pos, X(t.colon));
      return;
    case u.questionMark:
      lo();
      return;
    case u.atSign:
      ++r.pos, X(t.at);
      return;
    case u.graveAccent:
      ++r.pos, X(t.backQuote);
      return;
    case u.digit0: {
      const n = A.charCodeAt(r.pos + 1);
      if (n === u.lowercaseX || n === u.uppercaseX || n === u.lowercaseO || n === u.uppercaseO || n === u.lowercaseB || n === u.uppercaseB) {
        ho();
        return;
      }
    }
    case u.digit1:
    case u.digit2:
    case u.digit3:
    case u.digit4:
    case u.digit5:
    case u.digit6:
    case u.digit7:
    case u.digit8:
    case u.digit9:
      E1(!1);
      return;
    case u.quotationMark:
    case u.apostrophe:
      fo(e);
      return;
    case u.slash:
      no();
      return;
    case u.percentSign:
    case u.asterisk:
      so(e);
      return;
    case u.verticalBar:
    case u.ampersand:
      ro(e);
      return;
    case u.caret:
      oo();
      return;
    case u.plusSign:
    case u.dash:
      io(e);
      return;
    case u.lessThan:
      ao();
      return;
    case u.greaterThan:
      b1();
      return;
    case u.equalsTo:
    case u.exclamationMark:
      co(e);
      return;
    case u.tilde:
      ae(t.tilde, 1);
      return;
  }
  z(`Unexpected character '${String.fromCharCode(e)}'`, r.pos);
}
function ae(e, n) {
  r.pos += n, X(e);
}
function uo() {
  const e = r.pos;
  let n = !1, s = !1;
  for (; ; ) {
    if (r.pos >= A.length) {
      z("Unterminated regular expression", e);
      return;
    }
    const o = A.charCodeAt(r.pos);
    if (n)
      n = !1;
    else {
      if (o === u.leftSquareBracket)
        s = !0;
      else if (o === u.rightSquareBracket && s)
        s = !1;
      else if (o === u.slash && !s)
        break;
      n = o === u.backslash;
    }
    ++r.pos;
  }
  ++r.pos, mo(), X(t.regexp);
}
function Jn() {
  for (; ; ) {
    const e = A.charCodeAt(r.pos);
    if (e >= u.digit0 && e <= u.digit9 || e === u.underscore)
      r.pos++;
    else
      break;
  }
}
function ho() {
  for (r.pos += 2; ; ) {
    const n = A.charCodeAt(r.pos);
    if (n >= u.digit0 && n <= u.digit9 || n >= u.lowercaseA && n <= u.lowercaseF || n >= u.uppercaseA && n <= u.uppercaseF || n === u.underscore)
      r.pos++;
    else
      break;
  }
  A.charCodeAt(r.pos) === u.lowercaseN ? (++r.pos, X(t.bigint)) : X(t.num);
}
function E1(e) {
  let n = !1, s = !1;
  e || Jn();
  let o = A.charCodeAt(r.pos);
  if (o === u.dot && (++r.pos, Jn(), o = A.charCodeAt(r.pos)), (o === u.uppercaseE || o === u.lowercaseE) && (o = A.charCodeAt(++r.pos), (o === u.plusSign || o === u.dash) && ++r.pos, Jn(), o = A.charCodeAt(r.pos)), o === u.lowercaseN ? (++r.pos, n = !0) : o === u.lowercaseM && (++r.pos, s = !0), n) {
    X(t.bigint);
    return;
  }
  if (s) {
    X(t.decimal);
    return;
  }
  X(t.num);
}
function fo(e) {
  for (r.pos++; ; ) {
    if (r.pos >= A.length) {
      z("Unterminated string constant");
      return;
    }
    const n = A.charCodeAt(r.pos);
    if (n === u.backslash)
      r.pos++;
    else if (n === e)
      break;
    r.pos++;
  }
  r.pos++, X(t.string);
}
function po() {
  for (; ; ) {
    if (r.pos >= A.length) {
      z("Unterminated template");
      return;
    }
    const e = A.charCodeAt(r.pos);
    if (e === u.graveAccent || e === u.dollarSign && A.charCodeAt(r.pos + 1) === u.leftCurlyBrace) {
      if (r.pos === r.start && a(t.template))
        if (e === u.dollarSign) {
          r.pos += 2, X(t.dollarBraceL);
          return;
        } else {
          ++r.pos, X(t.backQuote);
          return;
        }
      X(t.template);
      return;
    }
    e === u.backslash && r.pos++, r.pos++;
  }
}
function mo() {
  for (; r.pos < A.length; ) {
    const e = A.charCodeAt(r.pos);
    if (tt[e])
      r.pos++;
    else if (e === u.backslash) {
      if (r.pos += 2, A.charCodeAt(r.pos) === u.leftCurlyBrace) {
        for (; r.pos < A.length && A.charCodeAt(r.pos) !== u.rightCurlyBrace; )
          r.pos++;
        r.pos++;
      }
    } else
      break;
  }
}
function Qt(e, n = e.currentIndex()) {
  let s = n + 1;
  if (cn(e, s)) {
    const o = e.identifierNameAtIndex(n);
    return {
      isType: !1,
      leftName: o,
      rightName: o,
      endIndex: s
    };
  }
  if (s++, cn(e, s))
    return {
      isType: !0,
      leftName: null,
      rightName: null,
      endIndex: s
    };
  if (s++, cn(e, s))
    return {
      isType: !1,
      leftName: e.identifierNameAtIndex(n),
      rightName: e.identifierNameAtIndex(n + 2),
      endIndex: s
    };
  if (s++, cn(e, s))
    return {
      isType: !0,
      leftName: null,
      rightName: null,
      endIndex: s
    };
  throw new Error(`Unexpected import/export specifier at ${n}`);
}
function cn(e, n) {
  const s = e.tokens[n];
  return s.type === t.braceR || s.type === t.comma;
}
const ko = /* @__PURE__ */ new Map([
  ["quot", '"'],
  ["amp", "&"],
  ["apos", "'"],
  ["lt", "<"],
  ["gt", ">"],
  ["nbsp", " "],
  ["iexcl", "¡"],
  ["cent", "¢"],
  ["pound", "£"],
  ["curren", "¤"],
  ["yen", "¥"],
  ["brvbar", "¦"],
  ["sect", "§"],
  ["uml", "¨"],
  ["copy", "©"],
  ["ordf", "ª"],
  ["laquo", "«"],
  ["not", "¬"],
  ["shy", "­"],
  ["reg", "®"],
  ["macr", "¯"],
  ["deg", "°"],
  ["plusmn", "±"],
  ["sup2", "²"],
  ["sup3", "³"],
  ["acute", "´"],
  ["micro", "µ"],
  ["para", "¶"],
  ["middot", "·"],
  ["cedil", "¸"],
  ["sup1", "¹"],
  ["ordm", "º"],
  ["raquo", "»"],
  ["frac14", "¼"],
  ["frac12", "½"],
  ["frac34", "¾"],
  ["iquest", "¿"],
  ["Agrave", "À"],
  ["Aacute", "Á"],
  ["Acirc", "Â"],
  ["Atilde", "Ã"],
  ["Auml", "Ä"],
  ["Aring", "Å"],
  ["AElig", "Æ"],
  ["Ccedil", "Ç"],
  ["Egrave", "È"],
  ["Eacute", "É"],
  ["Ecirc", "Ê"],
  ["Euml", "Ë"],
  ["Igrave", "Ì"],
  ["Iacute", "Í"],
  ["Icirc", "Î"],
  ["Iuml", "Ï"],
  ["ETH", "Ð"],
  ["Ntilde", "Ñ"],
  ["Ograve", "Ò"],
  ["Oacute", "Ó"],
  ["Ocirc", "Ô"],
  ["Otilde", "Õ"],
  ["Ouml", "Ö"],
  ["times", "×"],
  ["Oslash", "Ø"],
  ["Ugrave", "Ù"],
  ["Uacute", "Ú"],
  ["Ucirc", "Û"],
  ["Uuml", "Ü"],
  ["Yacute", "Ý"],
  ["THORN", "Þ"],
  ["szlig", "ß"],
  ["agrave", "à"],
  ["aacute", "á"],
  ["acirc", "â"],
  ["atilde", "ã"],
  ["auml", "ä"],
  ["aring", "å"],
  ["aelig", "æ"],
  ["ccedil", "ç"],
  ["egrave", "è"],
  ["eacute", "é"],
  ["ecirc", "ê"],
  ["euml", "ë"],
  ["igrave", "ì"],
  ["iacute", "í"],
  ["icirc", "î"],
  ["iuml", "ï"],
  ["eth", "ð"],
  ["ntilde", "ñ"],
  ["ograve", "ò"],
  ["oacute", "ó"],
  ["ocirc", "ô"],
  ["otilde", "õ"],
  ["ouml", "ö"],
  ["divide", "÷"],
  ["oslash", "ø"],
  ["ugrave", "ù"],
  ["uacute", "ú"],
  ["ucirc", "û"],
  ["uuml", "ü"],
  ["yacute", "ý"],
  ["thorn", "þ"],
  ["yuml", "ÿ"],
  ["OElig", "Œ"],
  ["oelig", "œ"],
  ["Scaron", "Š"],
  ["scaron", "š"],
  ["Yuml", "Ÿ"],
  ["fnof", "ƒ"],
  ["circ", "ˆ"],
  ["tilde", "˜"],
  ["Alpha", "Α"],
  ["Beta", "Β"],
  ["Gamma", "Γ"],
  ["Delta", "Δ"],
  ["Epsilon", "Ε"],
  ["Zeta", "Ζ"],
  ["Eta", "Η"],
  ["Theta", "Θ"],
  ["Iota", "Ι"],
  ["Kappa", "Κ"],
  ["Lambda", "Λ"],
  ["Mu", "Μ"],
  ["Nu", "Ν"],
  ["Xi", "Ξ"],
  ["Omicron", "Ο"],
  ["Pi", "Π"],
  ["Rho", "Ρ"],
  ["Sigma", "Σ"],
  ["Tau", "Τ"],
  ["Upsilon", "Υ"],
  ["Phi", "Φ"],
  ["Chi", "Χ"],
  ["Psi", "Ψ"],
  ["Omega", "Ω"],
  ["alpha", "α"],
  ["beta", "β"],
  ["gamma", "γ"],
  ["delta", "δ"],
  ["epsilon", "ε"],
  ["zeta", "ζ"],
  ["eta", "η"],
  ["theta", "θ"],
  ["iota", "ι"],
  ["kappa", "κ"],
  ["lambda", "λ"],
  ["mu", "μ"],
  ["nu", "ν"],
  ["xi", "ξ"],
  ["omicron", "ο"],
  ["pi", "π"],
  ["rho", "ρ"],
  ["sigmaf", "ς"],
  ["sigma", "σ"],
  ["tau", "τ"],
  ["upsilon", "υ"],
  ["phi", "φ"],
  ["chi", "χ"],
  ["psi", "ψ"],
  ["omega", "ω"],
  ["thetasym", "ϑ"],
  ["upsih", "ϒ"],
  ["piv", "ϖ"],
  ["ensp", " "],
  ["emsp", " "],
  ["thinsp", " "],
  ["zwnj", "‌"],
  ["zwj", "‍"],
  ["lrm", "‎"],
  ["rlm", "‏"],
  ["ndash", "–"],
  ["mdash", "—"],
  ["lsquo", "‘"],
  ["rsquo", "’"],
  ["sbquo", "‚"],
  ["ldquo", "“"],
  ["rdquo", "”"],
  ["bdquo", "„"],
  ["dagger", "†"],
  ["Dagger", "‡"],
  ["bull", "•"],
  ["hellip", "…"],
  ["permil", "‰"],
  ["prime", "′"],
  ["Prime", "″"],
  ["lsaquo", "‹"],
  ["rsaquo", "›"],
  ["oline", "‾"],
  ["frasl", "⁄"],
  ["euro", "€"],
  ["image", "ℑ"],
  ["weierp", "℘"],
  ["real", "ℜ"],
  ["trade", "™"],
  ["alefsym", "ℵ"],
  ["larr", "←"],
  ["uarr", "↑"],
  ["rarr", "→"],
  ["darr", "↓"],
  ["harr", "↔"],
  ["crarr", "↵"],
  ["lArr", "⇐"],
  ["uArr", "⇑"],
  ["rArr", "⇒"],
  ["dArr", "⇓"],
  ["hArr", "⇔"],
  ["forall", "∀"],
  ["part", "∂"],
  ["exist", "∃"],
  ["empty", "∅"],
  ["nabla", "∇"],
  ["isin", "∈"],
  ["notin", "∉"],
  ["ni", "∋"],
  ["prod", "∏"],
  ["sum", "∑"],
  ["minus", "−"],
  ["lowast", "∗"],
  ["radic", "√"],
  ["prop", "∝"],
  ["infin", "∞"],
  ["ang", "∠"],
  ["and", "∧"],
  ["or", "∨"],
  ["cap", "∩"],
  ["cup", "∪"],
  ["int", "∫"],
  ["there4", "∴"],
  ["sim", "∼"],
  ["cong", "≅"],
  ["asymp", "≈"],
  ["ne", "≠"],
  ["equiv", "≡"],
  ["le", "≤"],
  ["ge", "≥"],
  ["sub", "⊂"],
  ["sup", "⊃"],
  ["nsub", "⊄"],
  ["sube", "⊆"],
  ["supe", "⊇"],
  ["oplus", "⊕"],
  ["otimes", "⊗"],
  ["perp", "⊥"],
  ["sdot", "⋅"],
  ["lceil", "⌈"],
  ["rceil", "⌉"],
  ["lfloor", "⌊"],
  ["rfloor", "⌋"],
  ["lang", "〈"],
  ["rang", "〉"],
  ["loz", "◊"],
  ["spades", "♠"],
  ["clubs", "♣"],
  ["hearts", "♥"],
  ["diams", "♦"]
]);
function S1(e) {
  const [n, s] = Us(e.jsxPragma || "React.createElement"), [o, i] = Us(e.jsxFragmentPragma || "React.Fragment");
  return { base: n, suffix: s, fragmentBase: o, fragmentSuffix: i };
}
function Us(e) {
  let n = e.indexOf(".");
  return n === -1 && (n = e.length), [e.slice(0, n), e.slice(n)];
}
class nt {
  // Return true if anything was processed, false otherwise.
  getPrefixCode() {
    return "";
  }
  getHoistedCode() {
    return "";
  }
  getSuffixCode() {
    return "";
  }
}
class Tt extends nt {
  // State for calculating the line number of each JSX tag in development.
  __init() {
    this.lastLineNumber = 1;
  }
  __init2() {
    this.lastIndex = 0;
  }
  // In development, variable name holding the name of the current file.
  __init3() {
    this.filenameVarName = null;
  }
  // Mapping of claimed names for imports in the automatic transform, e,g.
  // {jsx: "_jsx"}. This determines which imports to generate in the prefix.
  __init4() {
    this.esmAutomaticImportNameResolutions = {};
  }
  // When automatically adding imports in CJS mode, we store the variable name
  // holding the imported CJS module so we can require it in the prefix.
  __init5() {
    this.cjsAutomaticModuleNameResolutions = {};
  }
  constructor(n, s, o, i, c) {
    super(), this.rootTransformer = n, this.tokens = s, this.importProcessor = o, this.nameManager = i, this.options = c, Tt.prototype.__init.call(this), Tt.prototype.__init2.call(this), Tt.prototype.__init3.call(this), Tt.prototype.__init4.call(this), Tt.prototype.__init5.call(this), this.jsxPragmaInfo = S1(c), this.isAutomaticRuntime = c.jsxRuntime === "automatic", this.jsxImportSource = c.jsxImportSource || "react";
  }
  process() {
    return this.tokens.matches1(t.jsxTagStart) ? (this.processJSXTag(), !0) : !1;
  }
  getPrefixCode() {
    let n = "";
    if (this.filenameVarName && (n += `const ${this.filenameVarName} = ${JSON.stringify(this.options.filePath || "")};`), this.isAutomaticRuntime)
      if (this.importProcessor)
        for (const [s, o] of Object.entries(this.cjsAutomaticModuleNameResolutions))
          n += `var ${o} = require("${s}");`;
      else {
        const { createElement: s, ...o } = this.esmAutomaticImportNameResolutions;
        s && (n += `import {createElement as ${s}} from "${this.jsxImportSource}";`);
        const i = Object.entries(o).map(([c, h]) => `${c} as ${h}`).join(", ");
        if (i) {
          const c = this.jsxImportSource + (this.options.production ? "/jsx-runtime" : "/jsx-dev-runtime");
          n += `import {${i}} from "${c}";`;
        }
      }
    return n;
  }
  processJSXTag() {
    const { jsxRole: n, start: s } = this.tokens.currentToken(), o = this.options.production ? null : this.getElementLocationCode(s);
    this.isAutomaticRuntime && n !== et.KeyAfterPropSpread ? this.transformTagToJSXFunc(o, n) : this.transformTagToCreateElement(o);
  }
  getElementLocationCode(n) {
    return `lineNumber: ${this.getLineNumberForIndex(n)}`;
  }
  /**
   * Get the line number for this source position. This is calculated lazily and
   * must be called in increasing order by index.
   */
  getLineNumberForIndex(n) {
    const s = this.tokens.code;
    for (; this.lastIndex < n && this.lastIndex < s.length; )
      s[this.lastIndex] === `
` && this.lastLineNumber++, this.lastIndex++;
    return this.lastLineNumber;
  }
  /**
   * Convert the current JSX element to a call to jsx, jsxs, or jsxDEV. This is
   * the primary transformation for the automatic transform.
   *
   * Example:
   * <div a={1} key={2}>Hello{x}</div>
   * becomes
   * jsxs('div', {a: 1, children: ["Hello", x]}, 2)
   */
  transformTagToJSXFunc(n, s) {
    const o = s === et.StaticChildren;
    this.tokens.replaceToken(this.getJSXFuncInvocationCode(o));
    let i = null;
    if (this.tokens.matches1(t.jsxTagEnd))
      this.tokens.replaceToken(`${this.getFragmentCode()}, {`), this.processAutomaticChildrenAndEndProps(s);
    else {
      if (this.processTagIntro(), this.tokens.appendCode(", {"), i = this.processProps(!0), this.tokens.matches2(t.slash, t.jsxTagEnd))
        this.tokens.appendCode("}");
      else if (this.tokens.matches1(t.jsxTagEnd))
        this.tokens.removeToken(), this.processAutomaticChildrenAndEndProps(s);
      else
        throw new Error("Expected either /> or > at the end of the tag.");
      i && this.tokens.appendCode(`, ${i}`);
    }
    for (this.options.production || (i === null && this.tokens.appendCode(", void 0"), this.tokens.appendCode(`, ${o}, ${this.getDevSource(n)}, this`)), this.tokens.removeInitialToken(); !this.tokens.matches1(t.jsxTagEnd); )
      this.tokens.removeToken();
    this.tokens.replaceToken(")");
  }
  /**
   * Convert the current JSX element to a createElement call. In the classic
   * runtime, this is the only case. In the automatic runtime, this is called
   * as a fallback in some situations.
   *
   * Example:
   * <div a={1} key={2}>Hello{x}</div>
   * becomes
   * React.createElement('div', {a: 1, key: 2}, "Hello", x)
   */
  transformTagToCreateElement(n) {
    if (this.tokens.replaceToken(this.getCreateElementInvocationCode()), this.tokens.matches1(t.jsxTagEnd))
      this.tokens.replaceToken(`${this.getFragmentCode()}, null`), this.processChildren(!0);
    else if (this.processTagIntro(), this.processPropsObjectWithDevInfo(n), !this.tokens.matches2(t.slash, t.jsxTagEnd)) if (this.tokens.matches1(t.jsxTagEnd))
      this.tokens.removeToken(), this.processChildren(!0);
    else
      throw new Error("Expected either /> or > at the end of the tag.");
    for (this.tokens.removeInitialToken(); !this.tokens.matches1(t.jsxTagEnd); )
      this.tokens.removeToken();
    this.tokens.replaceToken(")");
  }
  /**
   * Get the code for the relevant function for this context: jsx, jsxs,
   * or jsxDEV. The following open-paren is included as well.
   *
   * These functions are only used for the automatic runtime, so they are always
   * auto-imported, but the auto-import will be either CJS or ESM based on the
   * target module format.
   */
  getJSXFuncInvocationCode(n) {
    return this.options.production ? n ? this.claimAutoImportedFuncInvocation("jsxs", "/jsx-runtime") : this.claimAutoImportedFuncInvocation("jsx", "/jsx-runtime") : this.claimAutoImportedFuncInvocation("jsxDEV", "/jsx-dev-runtime");
  }
  /**
   * Return the code to use for the createElement function, e.g.
   * `React.createElement`, including the following open-paren.
   *
   * This is the main function to use for the classic runtime. For the
   * automatic runtime, this function is used as a fallback function to
   * preserve behavior when there is a prop spread followed by an explicit
   * key. In that automatic runtime case, the function should be automatically
   * imported.
   */
  getCreateElementInvocationCode() {
    if (this.isAutomaticRuntime)
      return this.claimAutoImportedFuncInvocation("createElement", "");
    {
      const { jsxPragmaInfo: n } = this;
      return `${this.importProcessor && this.importProcessor.getIdentifierReplacement(n.base) || n.base}${n.suffix}(`;
    }
  }
  /**
   * Return the code to use as the component when compiling a shorthand
   * fragment, e.g. `React.Fragment`.
   *
   * This may be called from either the classic or automatic runtime, and
   * the value should be auto-imported for the automatic runtime.
   */
  getFragmentCode() {
    if (this.isAutomaticRuntime)
      return this.claimAutoImportedName(
        "Fragment",
        this.options.production ? "/jsx-runtime" : "/jsx-dev-runtime"
      );
    {
      const { jsxPragmaInfo: n } = this;
      return (this.importProcessor && this.importProcessor.getIdentifierReplacement(n.fragmentBase) || n.fragmentBase) + n.fragmentSuffix;
    }
  }
  /**
   * Return code that invokes the given function.
   *
   * When the imports transform is enabled, use the CJSImportTransformer
   * strategy of using `.call(void 0, ...` to avoid passing a `this` value in a
   * situation that would otherwise look like a method call.
   */
  claimAutoImportedFuncInvocation(n, s) {
    const o = this.claimAutoImportedName(n, s);
    return this.importProcessor ? `${o}.call(void 0, ` : `${o}(`;
  }
  claimAutoImportedName(n, s) {
    if (this.importProcessor) {
      const o = this.jsxImportSource + s;
      return this.cjsAutomaticModuleNameResolutions[o] || (this.cjsAutomaticModuleNameResolutions[o] = this.importProcessor.getFreeIdentifierForPath(o)), `${this.cjsAutomaticModuleNameResolutions[o]}.${n}`;
    } else
      return this.esmAutomaticImportNameResolutions[n] || (this.esmAutomaticImportNameResolutions[n] = this.nameManager.claimFreeName(
        `_${n}`
      )), this.esmAutomaticImportNameResolutions[n];
  }
  /**
   * Process the first part of a tag, before any props.
   */
  processTagIntro() {
    let n = this.tokens.currentIndex() + 1;
    for (; this.tokens.tokens[n].isType || !this.tokens.matches2AtIndex(n - 1, t.jsxName, t.jsxName) && !this.tokens.matches2AtIndex(n - 1, t.greaterThan, t.jsxName) && !this.tokens.matches1AtIndex(n, t.braceL) && !this.tokens.matches1AtIndex(n, t.jsxTagEnd) && !this.tokens.matches2AtIndex(n, t.slash, t.jsxTagEnd); )
      n++;
    if (n === this.tokens.currentIndex() + 1) {
      const s = this.tokens.identifierName();
      A1(s) && this.tokens.replaceToken(`'${s}'`);
    }
    for (; this.tokens.currentIndex() < n; )
      this.rootTransformer.processToken();
  }
  /**
   * Starting at the beginning of the props, add the props argument to
   * React.createElement, including the comma before it.
   */
  processPropsObjectWithDevInfo(n) {
    const s = this.options.production ? "" : `__self: this, __source: ${this.getDevSource(n)}`;
    if (!this.tokens.matches1(t.jsxName) && !this.tokens.matches1(t.braceL)) {
      s ? this.tokens.appendCode(`, {${s}}`) : this.tokens.appendCode(", null");
      return;
    }
    this.tokens.appendCode(", {"), this.processProps(!1), s ? this.tokens.appendCode(` ${s}}`) : this.tokens.appendCode("}");
  }
  /**
   * Transform the core part of the props, assuming that a { has already been
   * inserted before us and that a } will be inserted after us.
   *
   * If extractKeyCode is true (i.e. when using any jsx... function), any prop
   * named "key" has its code captured and returned rather than being emitted to
   * the output code. This shifts line numbers, and emitting the code later will
   * correct line numbers again. If no key is found or if extractKeyCode is
   * false, this function returns null.
   */
  processProps(n) {
    let s = null;
    for (; ; ) {
      if (this.tokens.matches2(t.jsxName, t.eq)) {
        const o = this.tokens.identifierName();
        if (n && o === "key") {
          s !== null && this.tokens.appendCode(s.replace(/[^\n]/g, "")), this.tokens.removeToken(), this.tokens.removeToken();
          const i = this.tokens.snapshot();
          this.processPropValue(), s = this.tokens.dangerouslyGetAndRemoveCodeSinceSnapshot(i);
          continue;
        } else
          this.processPropName(o), this.tokens.replaceToken(": "), this.processPropValue();
      } else if (this.tokens.matches1(t.jsxName)) {
        const o = this.tokens.identifierName();
        this.processPropName(o), this.tokens.appendCode(": true");
      } else if (this.tokens.matches1(t.braceL))
        this.tokens.replaceToken(""), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken("");
      else
        break;
      this.tokens.appendCode(",");
    }
    return s;
  }
  processPropName(n) {
    n.includes("-") ? this.tokens.replaceToken(`'${n}'`) : this.tokens.copyToken();
  }
  processPropValue() {
    this.tokens.matches1(t.braceL) ? (this.tokens.replaceToken(""), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken("")) : this.tokens.matches1(t.jsxTagStart) ? this.processJSXTag() : this.processStringPropValue();
  }
  processStringPropValue() {
    const n = this.tokens.currentToken(), s = this.tokens.code.slice(n.start + 1, n.end - 1), o = Vs(s), i = _o(s);
    this.tokens.replaceToken(i + o);
  }
  /**
   * Starting in the middle of the props object literal, produce an additional
   * prop for the children and close the object literal.
   */
  processAutomaticChildrenAndEndProps(n) {
    n === et.StaticChildren ? (this.tokens.appendCode(" children: ["), this.processChildren(!1), this.tokens.appendCode("]}")) : (n === et.OneChild && this.tokens.appendCode(" children: "), this.processChildren(!1), this.tokens.appendCode("}"));
  }
  /**
   * Transform children into a comma-separated list, which will be either
   * arguments to createElement or array elements of a children prop.
   */
  processChildren(n) {
    let s = n;
    for (; ; ) {
      if (this.tokens.matches2(t.jsxTagStart, t.slash))
        return;
      let o = !1;
      if (this.tokens.matches1(t.braceL))
        this.tokens.matches2(t.braceL, t.braceR) ? (this.tokens.replaceToken(""), this.tokens.replaceToken("")) : (this.tokens.replaceToken(s ? ", " : ""), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken(""), o = !0);
      else if (this.tokens.matches1(t.jsxTagStart))
        this.tokens.appendCode(s ? ", " : ""), this.processJSXTag(), o = !0;
      else if (this.tokens.matches1(t.jsxText) || this.tokens.matches1(t.jsxEmptyText))
        o = this.processChildTextElement(s);
      else
        throw new Error("Unexpected token when processing JSX children.");
      o && (s = !0);
    }
  }
  /**
   * Turn a JSX text element into a string literal, or nothing at all if the JSX
   * text resolves to the empty string.
   *
   * Returns true if a string literal is emitted, false otherwise.
   */
  processChildTextElement(n) {
    const s = this.tokens.currentToken(), o = this.tokens.code.slice(s.start, s.end), i = Vs(o), c = go(o);
    return c === '""' ? (this.tokens.replaceToken(i), !1) : (this.tokens.replaceToken(`${n ? ", " : ""}${c}${i}`), !0);
  }
  getDevSource(n) {
    return `{fileName: ${this.getFilenameVarName()}, ${n}}`;
  }
  getFilenameVarName() {
    return this.filenameVarName || (this.filenameVarName = this.nameManager.claimFreeName("_jsxFileName")), this.filenameVarName;
  }
}
function A1(e) {
  const n = e.charCodeAt(0);
  return n >= u.lowercaseA && n <= u.lowercaseZ;
}
function go(e) {
  let n = "", s = "", o = !1, i = !1;
  for (let c = 0; c < e.length; c++) {
    const h = e[c];
    if (h === " " || h === "	" || h === "\r")
      o || (s += h);
    else if (h === `
`)
      s = "", o = !0;
    else {
      if (i && o && (n += " "), n += s, s = "", h === "&") {
        const { entity: k, newI: x } = v1(e, c + 1);
        c = x - 1, n += k;
      } else
        n += h;
      i = !0, o = !1;
    }
  }
  return o || (n += s), JSON.stringify(n);
}
function Vs(e) {
  let n = 0, s = 0;
  for (const o of e)
    o === `
` ? (n++, s = 0) : o === " " && s++;
  return `
`.repeat(n) + " ".repeat(s);
}
function _o(e) {
  let n = "";
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (o === `
`)
      if (/\s/.test(e[s + 1]))
        for (n += " "; s < e.length && /\s/.test(e[s + 1]); )
          s++;
      else
        n += `
`;
    else if (o === "&") {
      const { entity: i, newI: c } = v1(e, s + 1);
      n += i, s = c - 1;
    } else
      n += o;
  }
  return JSON.stringify(n);
}
function v1(e, n) {
  let s = "", o = 0, i, c = n;
  if (e[c] === "#") {
    let h = 10;
    c++;
    let k;
    if (e[c] === "x")
      for (h = 16, c++, k = c; c < e.length && xo(e.charCodeAt(c)); )
        c++;
    else
      for (k = c; c < e.length && yo(e.charCodeAt(c)); )
        c++;
    if (e[c] === ";") {
      const x = e.slice(k, c);
      x && (c++, i = String.fromCodePoint(parseInt(x, h)));
    }
  } else
    for (; c < e.length && o++ < 10; ) {
      const h = e[c];
      if (c++, h === ";") {
        i = ko.get(s);
        break;
      }
      s += h;
    }
  return i ? { entity: i, newI: c } : { entity: "&", newI: n };
}
function yo(e) {
  return e >= u.digit0 && e <= u.digit9;
}
function xo(e) {
  return e >= u.digit0 && e <= u.digit9 || e >= u.lowercaseA && e <= u.lowercaseF || e >= u.uppercaseA && e <= u.uppercaseF;
}
function N1(e, n) {
  const s = S1(n), o = /* @__PURE__ */ new Set();
  for (let i = 0; i < e.tokens.length; i++) {
    const c = e.tokens[i];
    if (c.type === t.name && !c.isType && (c.identifierRole === B.Access || c.identifierRole === B.ObjectShorthand || c.identifierRole === B.ExportAccess) && !c.shadowsGlobal && o.add(e.identifierNameForToken(c)), c.type === t.jsxTagStart && o.add(s.base), c.type === t.jsxTagStart && i + 1 < e.tokens.length && e.tokens[i + 1].type === t.jsxTagEnd && (o.add(s.base), o.add(s.fragmentBase)), c.type === t.jsxName && c.identifierRole === B.Access) {
      const h = e.identifierNameForToken(c);
      (!A1(h) || e.tokens[i + 1].type === t.dot) && o.add(e.identifierNameForToken(c));
    }
  }
  return o;
}
class Et {
  __init() {
    this.nonTypeIdentifiers = /* @__PURE__ */ new Set();
  }
  __init2() {
    this.importInfoByPath = /* @__PURE__ */ new Map();
  }
  __init3() {
    this.importsToReplace = /* @__PURE__ */ new Map();
  }
  __init4() {
    this.identifierReplacements = /* @__PURE__ */ new Map();
  }
  __init5() {
    this.exportBindingsByLocalName = /* @__PURE__ */ new Map();
  }
  constructor(n, s, o, i, c, h, k) {
    this.nameManager = n, this.tokens = s, this.enableLegacyTypeScriptModuleInterop = o, this.options = i, this.isTypeScriptTransformEnabled = c, this.keepUnusedImports = h, this.helperManager = k, Et.prototype.__init.call(this), Et.prototype.__init2.call(this), Et.prototype.__init3.call(this), Et.prototype.__init4.call(this), Et.prototype.__init5.call(this);
  }
  preprocessTokens() {
    for (let n = 0; n < this.tokens.tokens.length; n++)
      this.tokens.matches1AtIndex(n, t._import) && !this.tokens.matches3AtIndex(n, t._import, t.name, t.eq) && this.preprocessImportAtIndex(n), this.tokens.matches1AtIndex(n, t._export) && !this.tokens.matches2AtIndex(n, t._export, t.eq) && this.preprocessExportAtIndex(n);
    this.generateImportReplacements();
  }
  /**
   * In TypeScript, import statements that only import types should be removed.
   * This includes `import {} from 'foo';`, but not `import 'foo';`.
   */
  pruneTypeOnlyImports() {
    this.nonTypeIdentifiers = N1(this.tokens, this.options);
    for (const [n, s] of this.importInfoByPath.entries()) {
      if (s.hasBareImport || s.hasStarExport || s.exportStarNames.length > 0 || s.namedExports.length > 0)
        continue;
      [
        ...s.defaultNames,
        ...s.wildcardNames,
        ...s.namedImports.map(({ localName: i }) => i)
      ].every((i) => this.shouldAutomaticallyElideImportedName(i)) && this.importsToReplace.set(n, "");
    }
  }
  shouldAutomaticallyElideImportedName(n) {
    return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.nonTypeIdentifiers.has(n);
  }
  generateImportReplacements() {
    for (const [n, s] of this.importInfoByPath.entries()) {
      const {
        defaultNames: o,
        wildcardNames: i,
        namedImports: c,
        namedExports: h,
        exportStarNames: k,
        hasStarExport: x
      } = s;
      if (o.length === 0 && i.length === 0 && c.length === 0 && h.length === 0 && k.length === 0 && !x) {
        this.importsToReplace.set(n, `require('${n}');`);
        continue;
      }
      const d = this.getFreeIdentifierForPath(n);
      let w;
      this.enableLegacyTypeScriptModuleInterop ? w = d : w = i.length > 0 ? i[0] : this.getFreeIdentifierForPath(n);
      let P = `var ${d} = require('${n}');`;
      if (i.length > 0)
        for (const I of i) {
          const R = this.enableLegacyTypeScriptModuleInterop ? d : `${this.helperManager.getHelperName("interopRequireWildcard")}(${d})`;
          P += ` var ${I} = ${R};`;
        }
      else k.length > 0 && w !== d ? P += ` var ${w} = ${this.helperManager.getHelperName(
        "interopRequireWildcard"
      )}(${d});` : o.length > 0 && w !== d && (P += ` var ${w} = ${this.helperManager.getHelperName(
        "interopRequireDefault"
      )}(${d});`);
      for (const { importedName: I, localName: R } of h)
        P += ` ${this.helperManager.getHelperName(
          "createNamedExportFrom"
        )}(${d}, '${R}', '${I}');`;
      for (const I of k)
        P += ` exports.${I} = ${w};`;
      x && (P += ` ${this.helperManager.getHelperName(
        "createStarExport"
      )}(${d});`), this.importsToReplace.set(n, P);
      for (const I of o)
        this.identifierReplacements.set(I, `${w}.default`);
      for (const { importedName: I, localName: R } of c)
        this.identifierReplacements.set(R, `${d}.${I}`);
    }
  }
  getFreeIdentifierForPath(n) {
    const s = n.split("/"), i = s[s.length - 1].replace(/\W/g, "");
    return this.nameManager.claimFreeName(`_${i}`);
  }
  preprocessImportAtIndex(n) {
    const s = [], o = [], i = [];
    if (n++, (this.tokens.matchesContextualAtIndex(n, l._type) || this.tokens.matches1AtIndex(n, t._typeof)) && !this.tokens.matches1AtIndex(n + 1, t.comma) && !this.tokens.matchesContextualAtIndex(n + 1, l._from) || this.tokens.matches1AtIndex(n, t.parenL))
      return;
    if (this.tokens.matches1AtIndex(n, t.name) && (s.push(this.tokens.identifierNameAtIndex(n)), n++, this.tokens.matches1AtIndex(n, t.comma) && n++), this.tokens.matches1AtIndex(n, t.star) && (n += 2, o.push(this.tokens.identifierNameAtIndex(n)), n++), this.tokens.matches1AtIndex(n, t.braceL)) {
      const k = this.getNamedImports(n + 1);
      n = k.newIndex;
      for (const x of k.namedImports)
        x.importedName === "default" ? s.push(x.localName) : i.push(x);
    }
    if (this.tokens.matchesContextualAtIndex(n, l._from) && n++, !this.tokens.matches1AtIndex(n, t.string))
      throw new Error("Expected string token at the end of import statement.");
    const c = this.tokens.stringValueAtIndex(n), h = this.getImportInfo(c);
    h.defaultNames.push(...s), h.wildcardNames.push(...o), h.namedImports.push(...i), s.length === 0 && o.length === 0 && i.length === 0 && (h.hasBareImport = !0);
  }
  preprocessExportAtIndex(n) {
    if (this.tokens.matches2AtIndex(n, t._export, t._var) || this.tokens.matches2AtIndex(n, t._export, t._let) || this.tokens.matches2AtIndex(n, t._export, t._const))
      this.preprocessVarExportAtIndex(n);
    else if (this.tokens.matches2AtIndex(n, t._export, t._function) || this.tokens.matches2AtIndex(n, t._export, t._class)) {
      const s = this.tokens.identifierNameAtIndex(n + 2);
      this.addExportBinding(s, s);
    } else if (this.tokens.matches3AtIndex(n, t._export, t.name, t._function)) {
      const s = this.tokens.identifierNameAtIndex(n + 3);
      this.addExportBinding(s, s);
    } else this.tokens.matches2AtIndex(n, t._export, t.braceL) ? this.preprocessNamedExportAtIndex(n) : this.tokens.matches2AtIndex(n, t._export, t.star) && this.preprocessExportStarAtIndex(n);
  }
  preprocessVarExportAtIndex(n) {
    let s = 0;
    for (let o = n + 2; ; o++)
      if (this.tokens.matches1AtIndex(o, t.braceL) || this.tokens.matches1AtIndex(o, t.dollarBraceL) || this.tokens.matches1AtIndex(o, t.bracketL))
        s++;
      else if (this.tokens.matches1AtIndex(o, t.braceR) || this.tokens.matches1AtIndex(o, t.bracketR))
        s--;
      else {
        if (s === 0 && !this.tokens.matches1AtIndex(o, t.name))
          break;
        if (this.tokens.matches1AtIndex(1, t.eq)) {
          const i = this.tokens.currentToken().rhsEndIndex;
          if (i == null)
            throw new Error("Expected = token with an end index.");
          o = i - 1;
        } else {
          const i = this.tokens.tokens[o];
          if (m1(i)) {
            const c = this.tokens.identifierNameAtIndex(o);
            this.identifierReplacements.set(c, `exports.${c}`);
          }
        }
      }
  }
  /**
   * Walk this export statement just in case it's an export...from statement.
   * If it is, combine it into the import info for that path. Otherwise, just
   * bail out; it'll be handled later.
   */
  preprocessNamedExportAtIndex(n) {
    n += 2;
    const { newIndex: s, namedImports: o } = this.getNamedImports(n);
    if (n = s, this.tokens.matchesContextualAtIndex(n, l._from))
      n++;
    else {
      for (const { importedName: h, localName: k } of o)
        this.addExportBinding(h, k);
      return;
    }
    if (!this.tokens.matches1AtIndex(n, t.string))
      throw new Error("Expected string token at the end of import statement.");
    const i = this.tokens.stringValueAtIndex(n);
    this.getImportInfo(i).namedExports.push(...o);
  }
  preprocessExportStarAtIndex(n) {
    let s = null;
    if (this.tokens.matches3AtIndex(n, t._export, t.star, t._as) ? (n += 3, s = this.tokens.identifierNameAtIndex(n), n += 2) : n += 3, !this.tokens.matches1AtIndex(n, t.string))
      throw new Error("Expected string token at the end of star export statement.");
    const o = this.tokens.stringValueAtIndex(n), i = this.getImportInfo(o);
    s !== null ? i.exportStarNames.push(s) : i.hasStarExport = !0;
  }
  getNamedImports(n) {
    const s = [];
    for (; ; ) {
      if (this.tokens.matches1AtIndex(n, t.braceR)) {
        n++;
        break;
      }
      const o = Qt(this.tokens, n);
      if (n = o.endIndex, o.isType || s.push({
        importedName: o.leftName,
        localName: o.rightName
      }), this.tokens.matches2AtIndex(n, t.comma, t.braceR)) {
        n += 2;
        break;
      } else if (this.tokens.matches1AtIndex(n, t.braceR)) {
        n++;
        break;
      } else if (this.tokens.matches1AtIndex(n, t.comma))
        n++;
      else
        throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.tokens[n])}`);
    }
    return { newIndex: n, namedImports: s };
  }
  /**
   * Get a mutable import info object for this path, creating one if it doesn't
   * exist yet.
   */
  getImportInfo(n) {
    const s = this.importInfoByPath.get(n);
    if (s)
      return s;
    const o = {
      defaultNames: [],
      wildcardNames: [],
      namedImports: [],
      namedExports: [],
      hasBareImport: !1,
      exportStarNames: [],
      hasStarExport: !1
    };
    return this.importInfoByPath.set(n, o), o;
  }
  addExportBinding(n, s) {
    this.exportBindingsByLocalName.has(n) || this.exportBindingsByLocalName.set(n, []), this.exportBindingsByLocalName.get(n).push(s);
  }
  /**
   * Return the code to use for the import for this path, or the empty string if
   * the code has already been "claimed" by a previous import.
   */
  claimImportCode(n) {
    const s = this.importsToReplace.get(n);
    return this.importsToReplace.set(n, ""), s || "";
  }
  getIdentifierReplacement(n) {
    return this.identifierReplacements.get(n) || null;
  }
  /**
   * Return a string like `exports.foo = exports.bar`.
   */
  resolveExportBinding(n) {
    const s = this.exportBindingsByLocalName.get(n);
    return !s || s.length === 0 ? null : s.map((o) => `exports.${o}`).join(" = ");
  }
  /**
   * Return all imported/exported names where we might be interested in whether usages of those
   * names are shadowed.
   */
  getGlobalNames() {
    return /* @__PURE__ */ new Set([
      ...this.identifierReplacements.keys(),
      ...this.exportBindingsByLocalName.keys()
    ]);
  }
}
var es = { exports: {} }, ln = { exports: {} }, Hs;
function Io() {
  return Hs || (Hs = 1, function(e, n) {
    (function(s, o) {
      o(n);
    })(lt, function(s) {
      class o {
        constructor() {
          this._indexes = { __proto__: null }, this.array = [];
        }
      }
      function i(d) {
        return d;
      }
      function c(d, w) {
        return d._indexes[w];
      }
      function h(d, w) {
        const P = c(d, w);
        if (P !== void 0)
          return P;
        const { array: I, _indexes: R } = d, G = I.push(w);
        return R[w] = G - 1;
      }
      function k(d) {
        const { array: w, _indexes: P } = d;
        if (w.length === 0)
          return;
        const I = w.pop();
        P[I] = void 0;
      }
      function x(d, w) {
        const P = c(d, w);
        if (P === void 0)
          return;
        const { array: I, _indexes: R } = d;
        for (let G = P + 1; G < I.length; G++) {
          const se = I[G];
          I[G - 1] = se, R[se]--;
        }
        R[w] = void 0, I.pop();
      }
      s.SetArray = o, s.get = c, s.pop = k, s.put = h, s.remove = x, Object.defineProperty(s, "__esModule", { value: !0 });
    });
  }(ln, ln.exports)), ln.exports;
}
var un = { exports: {} }, Qn = { exports: {} }, Ws;
function bo() {
  return Ws || (Ws = 1, function(e, n) {
    (function(s, o) {
      e.exports = o();
    })(lt, function() {
      const s = /^[\w+.-]+:\/\//, o = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/, i = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
      function c(O) {
        return s.test(O);
      }
      function h(O) {
        return O.startsWith("//");
      }
      function k(O) {
        return O.startsWith("/");
      }
      function x(O) {
        return O.startsWith("file:");
      }
      function d(O) {
        return /^[.?#]/.test(O);
      }
      function w(O) {
        const q = o.exec(O);
        return I(q[1], q[2] || "", q[3], q[4] || "", q[5] || "/", q[6] || "", q[7] || "");
      }
      function P(O) {
        const q = i.exec(O), U = q[2];
        return I("file:", "", q[1] || "", "", k(U) ? U : "/" + U, q[3] || "", q[4] || "");
      }
      function I(O, q, U, ue, me, oe, de) {
        return {
          scheme: O,
          user: q,
          host: U,
          port: ue,
          path: me,
          query: oe,
          hash: de,
          type: 7
        };
      }
      function R(O) {
        if (h(O)) {
          const U = w("http:" + O);
          return U.scheme = "", U.type = 6, U;
        }
        if (k(O)) {
          const U = w("http://foo.com" + O);
          return U.scheme = "", U.host = "", U.type = 5, U;
        }
        if (x(O))
          return P(O);
        if (c(O))
          return w(O);
        const q = w("http://foo.com/" + O);
        return q.scheme = "", q.host = "", q.type = O ? O.startsWith("?") ? 3 : O.startsWith("#") ? 2 : 4 : 1, q;
      }
      function G(O) {
        if (O.endsWith("/.."))
          return O;
        const q = O.lastIndexOf("/");
        return O.slice(0, q + 1);
      }
      function se(O, q) {
        we(q, q.type), O.path === "/" ? O.path = q.path : O.path = G(q.path) + O.path;
      }
      function we(O, q) {
        const U = q <= 4, ue = O.path.split("/");
        let me = 1, oe = 0, de = !1;
        for (let Ne = 1; Ne < ue.length; Ne++) {
          const Ae = ue[Ne];
          if (!Ae) {
            de = !0;
            continue;
          }
          if (de = !1, Ae !== ".") {
            if (Ae === "..") {
              oe ? (de = !0, oe--, me--) : U && (ue[me++] = Ae);
              continue;
            }
            ue[me++] = Ae, oe++;
          }
        }
        let Re = "";
        for (let Ne = 1; Ne < me; Ne++)
          Re += "/" + ue[Ne];
        (!Re || de && !Re.endsWith("/..")) && (Re += "/"), O.path = Re;
      }
      function Te(O, q) {
        if (!O && !q)
          return "";
        const U = R(O);
        let ue = U.type;
        if (q && ue !== 7) {
          const oe = R(q), de = oe.type;
          switch (ue) {
            case 1:
              U.hash = oe.hash;
            case 2:
              U.query = oe.query;
            case 3:
            case 4:
              se(U, oe);
            case 5:
              U.user = oe.user, U.host = oe.host, U.port = oe.port;
            case 6:
              U.scheme = oe.scheme;
          }
          de > ue && (ue = de);
        }
        we(U, ue);
        const me = U.query + U.hash;
        switch (ue) {
          case 2:
          case 3:
            return me;
          case 4: {
            const oe = U.path.slice(1);
            return oe ? d(q || O) && !d(oe) ? "./" + oe + me : oe + me : me || ".";
          }
          case 5:
            return U.path + me;
          default:
            return U.scheme + "//" + U.user + U.host + U.port + U.path + me;
        }
      }
      return Te;
    });
  }(Qn)), Qn.exports;
}
var Gs;
function wo() {
  return Gs || (Gs = 1, function(e, n) {
    (function(s, o) {
      o(n, c1(), bo());
    })(lt, function(s, o, i) {
      function c(m, b) {
        return b && !b.endsWith("/") && (b += "/"), i(m, b);
      }
      function h(m) {
        if (!m)
          return "";
        const b = m.lastIndexOf("/");
        return m.slice(0, b + 1);
      }
      const k = 0, x = 1, d = 2, w = 3, P = 4, I = 1, R = 2;
      function G(m, b) {
        const E = se(m, 0);
        if (E === m.length)
          return m;
        b || (m = m.slice());
        for (let N = E; N < m.length; N = se(m, N + 1))
          m[N] = Te(m[N], b);
        return m;
      }
      function se(m, b) {
        for (let E = b; E < m.length; E++)
          if (!we(m[E]))
            return E;
        return m.length;
      }
      function we(m) {
        for (let b = 1; b < m.length; b++)
          if (m[b][k] < m[b - 1][k])
            return !1;
        return !0;
      }
      function Te(m, b) {
        return b || (m = m.slice()), m.sort(O);
      }
      function O(m, b) {
        return m[k] - b[k];
      }
      let q = !1;
      function U(m, b, E, N) {
        for (; E <= N; ) {
          const W = E + (N - E >> 1), F = m[W][k] - b;
          if (F === 0)
            return q = !0, W;
          F < 0 ? E = W + 1 : N = W - 1;
        }
        return q = !1, E - 1;
      }
      function ue(m, b, E) {
        for (let N = E + 1; N < m.length && m[N][k] === b; E = N++)
          ;
        return E;
      }
      function me(m, b, E) {
        for (let N = E - 1; N >= 0 && m[N][k] === b; E = N--)
          ;
        return E;
      }
      function oe() {
        return {
          lastKey: -1,
          lastNeedle: -1,
          lastIndex: -1
        };
      }
      function de(m, b, E, N) {
        const { lastKey: W, lastNeedle: F, lastIndex: te } = E;
        let ce = 0, Z = m.length - 1;
        if (N === W) {
          if (b === F)
            return q = te !== -1 && m[te][k] === b, te;
          b >= F ? ce = te === -1 ? 0 : te : Z = te;
        }
        return E.lastKey = N, E.lastNeedle = b, E.lastIndex = U(m, b, ce, Z);
      }
      function Re(m, b) {
        const E = b.map(Ae);
        for (let N = 0; N < m.length; N++) {
          const W = m[N];
          for (let F = 0; F < W.length; F++) {
            const te = W[F];
            if (te.length === 1)
              continue;
            const ce = te[x], Z = te[d], le = te[w], De = E[ce], xe = De[Z] || (De[Z] = []), ge = b[ce];
            let Le = ue(xe, le, de(xe, le, ge, Z));
            ge.lastIndex = ++Le, Ne(xe, Le, [le, N, te[k]]);
          }
        }
        return E;
      }
      function Ne(m, b, E) {
        for (let N = m.length; N > b; N--)
          m[N] = m[N - 1];
        m[b] = E;
      }
      function Ae() {
        return { __proto__: null };
      }
      const Ve = function(m, b) {
        const E = Be(m);
        if (!("sections" in E))
          return new K(E, b);
        const N = [], W = [], F = [], te = [], ce = [];
        He(E, b, N, W, F, te, ce, 0, 0, 1 / 0, 1 / 0);
        const Z = {
          version: 3,
          file: E.file,
          names: te,
          sources: W,
          sourcesContent: F,
          mappings: N,
          ignoreList: ce
        };
        return fe(Z);
      };
      function Be(m) {
        return typeof m == "string" ? JSON.parse(m) : m;
      }
      function He(m, b, E, N, W, F, te, ce, Z, le, De) {
        const { sections: xe } = m;
        for (let ge = 0; ge < xe.length; ge++) {
          const { map: Le, offset: We } = xe[ge];
          let Ze = le, rt = De;
          if (ge + 1 < xe.length) {
            const ot = xe[ge + 1].offset;
            Ze = Math.min(le, ce + ot.line), Ze === le ? rt = Math.min(De, Z + ot.column) : Ze < le && (rt = Z + ot.column);
          }
          Je(Le, b, E, N, W, F, te, ce + We.line, Z + We.column, Ze, rt);
        }
      }
      function Je(m, b, E, N, W, F, te, ce, Z, le, De) {
        const xe = Be(m);
        if ("sections" in xe)
          return He(...arguments);
        const ge = new K(xe, b), Le = N.length, We = F.length, Ze = p(ge), { resolvedSources: rt, sourcesContent: ot, ignoreList: It } = ge;
        if (Me(N, rt), Me(F, ge.names), ot)
          Me(W, ot);
        else
          for (let qe = 0; qe < rt.length; qe++)
            W.push(null);
        if (It)
          for (let qe = 0; qe < It.length; qe++)
            te.push(It[qe] + Le);
        for (let qe = 0; qe < Ze.length; qe++) {
          const bt = ce + qe;
          if (bt > le)
            return;
          const Rt = L(E, bt), Vt = qe === 0 ? Z : 0, Lt = Ze[qe];
          for (let wt = 0; wt < Lt.length; wt++) {
            const Ke = Lt[wt], dt = Vt + Ke[k];
            if (bt === le && dt >= De)
              return;
            if (Ke.length === 1) {
              Rt.push([dt]);
              continue;
            }
            const Dt = Le + Ke[x], Ot = Ke[d], Ft = Ke[w];
            Rt.push(Ke.length === 4 ? [dt, Dt, Ot, Ft] : [dt, Dt, Ot, Ft, We + Ke[P]]);
          }
        }
      }
      function Me(m, b) {
        for (let E = 0; E < b.length; E++)
          m.push(b[E]);
      }
      function L(m, b) {
        for (let E = m.length; E <= b; E++)
          m[E] = [];
        return m[b];
      }
      const v = "`line` must be greater than 0 (lines start at line 1)", M = "`column` must be greater than or equal to 0 (columns start at column 0)", V = -1, ee = 1;
      class K {
        constructor(b, E) {
          const N = typeof b == "string";
          if (!N && b._decodedMemo)
            return b;
          const W = N ? JSON.parse(b) : b, { version: F, file: te, names: ce, sourceRoot: Z, sources: le, sourcesContent: De } = W;
          this.version = F, this.file = te, this.names = ce || [], this.sourceRoot = Z, this.sources = le, this.sourcesContent = De, this.ignoreList = W.ignoreList || W.x_google_ignoreList || void 0;
          const xe = c(Z || "", h(E));
          this.resolvedSources = le.map((Le) => c(Le || "", xe));
          const { mappings: ge } = W;
          typeof ge == "string" ? (this._encoded = ge, this._decoded = void 0) : (this._encoded = void 0, this._decoded = G(ge, N)), this._decodedMemo = oe(), this._bySources = void 0, this._bySourceMemos = void 0;
        }
      }
      function re(m) {
        return m;
      }
      function ye(m) {
        var b, E;
        return (b = (E = m)._encoded) !== null && b !== void 0 ? b : E._encoded = o.encode(m._decoded);
      }
      function p(m) {
        var b;
        return (b = m)._decoded || (b._decoded = o.decode(m._encoded));
      }
      function y(m, b, E) {
        const N = p(m);
        if (b >= N.length)
          return null;
        const W = N[b], F = Qe(W, m._decodedMemo, b, E, ee);
        return F === -1 ? null : W[F];
      }
      function T(m, b) {
        let { line: E, column: N, bias: W } = b;
        if (E--, E < 0)
          throw new Error(v);
        if (N < 0)
          throw new Error(M);
        const F = p(m);
        if (E >= F.length)
          return ve(null, null, null, null);
        const te = F[E], ce = Qe(te, m._decodedMemo, E, N, W || ee);
        if (ce === -1)
          return ve(null, null, null, null);
        const Z = te[ce];
        if (Z.length === 1)
          return ve(null, null, null, null);
        const { names: le, resolvedSources: De } = m;
        return ve(De[Z[x]], Z[d] + 1, Z[w], Z.length === 5 ? le[Z[P]] : null);
      }
      function S(m, b) {
        const { source: E, line: N, column: W, bias: F } = b;
        return mt(m, E, N, W, F || ee, !1);
      }
      function C(m, b) {
        const { source: E, line: N, column: W, bias: F } = b;
        return mt(m, E, N, W, F || V, !0);
      }
      function j(m, b) {
        const E = p(m), { names: N, resolvedSources: W } = m;
        for (let F = 0; F < E.length; F++) {
          const te = E[F];
          for (let ce = 0; ce < te.length; ce++) {
            const Z = te[ce], le = F + 1, De = Z[0];
            let xe = null, ge = null, Le = null, We = null;
            Z.length !== 1 && (xe = W[Z[1]], ge = Z[2] + 1, Le = Z[3]), Z.length === 5 && (We = N[Z[4]]), b({
              generatedLine: le,
              generatedColumn: De,
              source: xe,
              originalLine: ge,
              originalColumn: Le,
              name: We
            });
          }
        }
      }
      function $(m, b) {
        const { sources: E, resolvedSources: N } = m;
        let W = E.indexOf(b);
        return W === -1 && (W = N.indexOf(b)), W;
      }
      function Y(m, b) {
        const { sourcesContent: E } = m;
        if (E == null)
          return null;
        const N = $(m, b);
        return N === -1 ? null : E[N];
      }
      function he(m, b) {
        const { ignoreList: E } = m;
        if (E == null)
          return !1;
        const N = $(m, b);
        return N === -1 ? !1 : E.includes(N);
      }
      function fe(m, b) {
        const E = new K(ke(m, []), b);
        return E._decoded = m.mappings, E;
      }
      function Ce(m) {
        return ke(m, p(m));
      }
      function je(m) {
        return ke(m, ye(m));
      }
      function ke(m, b) {
        return {
          version: m.version,
          file: m.file,
          names: m.names,
          sourceRoot: m.sourceRoot,
          sources: m.sources,
          sourcesContent: m.sourcesContent,
          mappings: b,
          ignoreList: m.ignoreList || m.x_google_ignoreList
        };
      }
      function ve(m, b, E, N) {
        return { source: m, line: b, column: E, name: N };
      }
      function Ee(m, b) {
        return { line: m, column: b };
      }
      function Qe(m, b, E, N, W) {
        let F = de(m, N, b, E);
        return q ? F = (W === V ? ue : me)(m, N, F) : W === V && F++, F === -1 || F === m.length ? -1 : F;
      }
      function pt(m, b, E, N, W) {
        let F = Qe(m, b, E, N, ee);
        if (!q && W === V && F++, F === -1 || F === m.length)
          return [];
        const te = q ? N : m[F][k];
        q || (F = me(m, te, F));
        const ce = ue(m, te, F), Z = [];
        for (; F <= ce; F++) {
          const le = m[F];
          Z.push(Ee(le[I] + 1, le[R]));
        }
        return Z;
      }
      function mt(m, b, E, N, W, F) {
        var te;
        if (E--, E < 0)
          throw new Error(v);
        if (N < 0)
          throw new Error(M);
        const { sources: ce, resolvedSources: Z } = m;
        let le = ce.indexOf(b);
        if (le === -1 && (le = Z.indexOf(b)), le === -1)
          return F ? [] : Ee(null, null);
        const xe = ((te = m)._bySources || (te._bySources = Re(p(m), m._bySourceMemos = ce.map(oe))))[le][E];
        if (xe == null)
          return F ? [] : Ee(null, null);
        const ge = m._bySourceMemos[le];
        if (F)
          return pt(xe, ge, E, N, W);
        const Le = Qe(xe, ge, E, N, W);
        if (Le === -1)
          return Ee(null, null);
        const We = xe[Le];
        return Ee(We[I] + 1, We[R]);
      }
      s.AnyMap = Ve, s.GREATEST_LOWER_BOUND = ee, s.LEAST_UPPER_BOUND = V, s.TraceMap = K, s.allGeneratedPositionsFor = C, s.decodedMap = Ce, s.decodedMappings = p, s.eachMapping = j, s.encodedMap = je, s.encodedMappings = ye, s.generatedPositionFor = S, s.isIgnored = he, s.originalPositionFor = T, s.presortedDecodedMap = fe, s.sourceContentFor = Y, s.traceSegment = y;
    });
  }(un, un.exports)), un.exports;
}
(function(e, n) {
  (function(s, o) {
    o(n, Io(), c1(), wo());
  })(lt, function(s, o, i, c) {
    class I {
      constructor({ file: v, sourceRoot: M } = {}) {
        this._names = new o.SetArray(), this._sources = new o.SetArray(), this._sourcesContent = [], this._mappings = [], this.file = v, this.sourceRoot = M, this._ignoreList = new o.SetArray();
      }
    }
    function R(L) {
      return L;
    }
    function G(L, v, M, V, ee, K, re, ye) {
      return de(!1, L, v, M, V, ee, K, re, ye);
    }
    function se(L, v) {
      return Me(!1, L, v);
    }
    const we = (L, v, M, V, ee, K, re, ye) => de(!0, L, v, M, V, ee, K, re, ye), Te = (L, v) => Me(!0, L, v);
    function O(L, v, M) {
      const { _sources: V, _sourcesContent: ee } = L, K = o.put(V, v);
      ee[K] = M;
    }
    function q(L, v, M = !0) {
      const { _sources: V, _sourcesContent: ee, _ignoreList: K } = L, re = o.put(V, v);
      re === ee.length && (ee[re] = null), M ? o.put(K, re) : o.remove(K, re);
    }
    function U(L) {
      const { _mappings: v, _sources: M, _sourcesContent: V, _names: ee, _ignoreList: K } = L;
      return Ve(v), {
        version: 3,
        file: L.file || void 0,
        names: ee.array,
        sourceRoot: L.sourceRoot || void 0,
        sources: M.array,
        sourcesContent: V,
        mappings: v,
        ignoreList: K.array
      };
    }
    function ue(L) {
      const v = U(L);
      return Object.assign(Object.assign({}, v), { mappings: i.encode(v.mappings) });
    }
    function me(L) {
      const v = new c.TraceMap(L), M = new I({ file: v.file, sourceRoot: v.sourceRoot });
      return Be(M._names, v.names), Be(M._sources, v.sources), M._sourcesContent = v.sourcesContent || v.sources.map(() => null), M._mappings = c.decodedMappings(v), v.ignoreList && Be(M._ignoreList, v.ignoreList), M;
    }
    function oe(L) {
      const v = [], { _mappings: M, _sources: V, _names: ee } = L;
      for (let K = 0; K < M.length; K++) {
        const re = M[K];
        for (let ye = 0; ye < re.length; ye++) {
          const p = re[ye], y = { line: K + 1, column: p[0] };
          let T, S, C;
          p.length !== 1 && (T = V.array[p[1]], S = { line: p[2] + 1, column: p[3] }, p.length === 5 && (C = ee.array[p[4]])), v.push({ generated: y, source: T, original: S, name: C });
        }
      }
      return v;
    }
    function de(L, v, M, V, ee, K, re, ye, p) {
      const { _mappings: y, _sources: T, _sourcesContent: S, _names: C } = v, j = Re(y, M), $ = Ne(j, V);
      if (!ee)
        return L && He(j, $) ? void 0 : Ae(j, $, [V]);
      const Y = o.put(T, ee), he = ye ? o.put(C, ye) : -1;
      if (Y === S.length && (S[Y] = p ?? null), !(L && Je(j, $, Y, K, re, he)))
        return Ae(j, $, ye ? [V, Y, K, re, he] : [V, Y, K, re]);
    }
    function Re(L, v) {
      for (let M = L.length; M <= v; M++)
        L[M] = [];
      return L[v];
    }
    function Ne(L, v) {
      let M = L.length;
      for (let V = M - 1; V >= 0; M = V--) {
        const ee = L[V];
        if (v >= ee[0])
          break;
      }
      return M;
    }
    function Ae(L, v, M) {
      for (let V = L.length; V > v; V--)
        L[V] = L[V - 1];
      L[v] = M;
    }
    function Ve(L) {
      const { length: v } = L;
      let M = v;
      for (let V = M - 1; V >= 0 && !(L[V].length > 0); M = V, V--)
        ;
      M < v && (L.length = M);
    }
    function Be(L, v) {
      for (let M = 0; M < v.length; M++)
        o.put(L, v[M]);
    }
    function He(L, v) {
      return v === 0 ? !0 : L[v - 1].length === 1;
    }
    function Je(L, v, M, V, ee, K) {
      if (v === 0)
        return !1;
      const re = L[v - 1];
      return re.length === 1 ? !1 : M === re[1] && V === re[2] && ee === re[3] && K === (re.length === 5 ? re[4] : -1);
    }
    function Me(L, v, M) {
      const { generated: V, source: ee, original: K, name: re, content: ye } = M;
      return ee ? de(L, v, V.line - 1, V.column, ee, K.line - 1, K.column, re, ye) : de(L, v, V.line - 1, V.column, null, null, null, null, null);
    }
    s.GenMapping = I, s.addMapping = se, s.addSegment = G, s.allMappings = oe, s.fromMap = me, s.maybeAddMapping = Te, s.maybeAddSegment = we, s.setIgnore = q, s.setSourceContent = O, s.toDecodedMap = U, s.toEncodedMap = ue, Object.defineProperty(s, "__esModule", { value: !0 });
  });
})(es, es.exports);
var Ht = es.exports;
function To({ code: e, mappings: n }, s, o, i, c) {
  const h = Eo(i, c), k = new Ht.GenMapping({ file: o.compiledFilename });
  let x = 0, d = n[0];
  for (; d === void 0 && x < n.length - 1; )
    x++, d = n[x];
  let w = 0, P = 0;
  d !== P && Ht.maybeAddSegment(k, w, 0, s, w, 0);
  for (let se = 0; se < e.length; se++) {
    if (se === d) {
      const we = d - P, Te = h[x];
      for (Ht.maybeAddSegment(k, w, we, s, w, Te); (d === se || d === void 0) && x < n.length - 1; )
        x++, d = n[x];
    }
    e.charCodeAt(se) === u.lineFeed && (w++, P = se + 1, d !== P && Ht.maybeAddSegment(k, w, 0, s, w, 0));
  }
  const { sourceRoot: I, sourcesContent: R, ...G } = Ht.toEncodedMap(k);
  return G;
}
function Eo(e, n) {
  const s = new Array(n.length);
  let o = 0, i = n[o].start, c = 0;
  for (let h = 0; h < e.length; h++)
    h === i && (s[o] = i - c, o++, i = n[o].start), e.charCodeAt(h) === u.lineFeed && (c = h + 1);
  return s;
}
const So = {
  require: `
    import {createRequire as CREATE_REQUIRE_NAME} from "module";
    const require = CREATE_REQUIRE_NAME(import.meta.url);
  `,
  interopRequireWildcard: `
    function interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
  `,
  interopRequireDefault: `
    function interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  `,
  createNamedExportFrom: `
    function createNamedExportFrom(obj, localName, importedName) {
      Object.defineProperty(exports, localName, {enumerable: true, configurable: true, get: () => obj[importedName]});
    }
  `,
  // Note that TypeScript and Babel do this differently; TypeScript does a simple existence
  // check in the exports object and does a plain assignment, whereas Babel uses
  // defineProperty and builds an object of explicitly-exported names so that star exports can
  // always take lower precedence. For now, we do the easier TypeScript thing.
  createStarExport: `
    function createStarExport(obj) {
      Object.keys(obj)
        .filter((key) => key !== "default" && key !== "__esModule")
        .forEach((key) => {
          if (exports.hasOwnProperty(key)) {
            return;
          }
          Object.defineProperty(exports, key, {enumerable: true, configurable: true, get: () => obj[key]});
        });
    }
  `,
  nullishCoalesce: `
    function nullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return rhsFn();
      }
    }
  `,
  asyncNullishCoalesce: `
    async function asyncNullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return await rhsFn();
      }
    }
  `,
  optionalChain: `
    function optionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,
  asyncOptionalChain: `
    async function asyncOptionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = await fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = await fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,
  optionalChainDelete: `
    function optionalChainDelete(ops) {
      const result = OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
  `,
  asyncOptionalChainDelete: `
    async function asyncOptionalChainDelete(ops) {
      const result = await ASYNC_OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
  `
};
class kn {
  __init() {
    this.helperNames = {};
  }
  __init2() {
    this.createRequireName = null;
  }
  constructor(n) {
    this.nameManager = n, kn.prototype.__init.call(this), kn.prototype.__init2.call(this);
  }
  getHelperName(n) {
    let s = this.helperNames[n];
    return s || (s = this.nameManager.claimFreeName(`_${n}`), this.helperNames[n] = s, s);
  }
  emitHelpers() {
    let n = "";
    this.helperNames.optionalChainDelete && this.getHelperName("optionalChain"), this.helperNames.asyncOptionalChainDelete && this.getHelperName("asyncOptionalChain");
    for (const [s, o] of Object.entries(So)) {
      const i = this.helperNames[s];
      let c = o;
      s === "optionalChainDelete" ? c = c.replace("OPTIONAL_CHAIN_NAME", this.helperNames.optionalChain) : s === "asyncOptionalChainDelete" ? c = c.replace(
        "ASYNC_OPTIONAL_CHAIN_NAME",
        this.helperNames.asyncOptionalChain
      ) : s === "require" && (this.createRequireName === null && (this.createRequireName = this.nameManager.claimFreeName("_createRequire")), c = c.replace(/CREATE_REQUIRE_NAME/g, this.createRequireName)), i && (n += " ", n += c.replace(s, i).replace(/\s+/g, " ").trim());
    }
    return n;
  }
}
function Xs(e, n, s) {
  Ao(e, s) && vo(e, n, s);
}
function Ao(e, n) {
  for (const s of e.tokens)
    if (s.type === t.name && !s.isType && Xr(s) && n.has(e.identifierNameForToken(s)))
      return !0;
  return !1;
}
function vo(e, n, s) {
  const o = [];
  let i = n.length - 1;
  for (let c = e.tokens.length - 1; ; c--) {
    for (; o.length > 0 && o[o.length - 1].startTokenIndex === c + 1; )
      o.pop();
    for (; i >= 0 && n[i].endTokenIndex === c + 1; )
      o.push(n[i]), i--;
    if (c < 0)
      break;
    const h = e.tokens[c], k = e.identifierNameForToken(h);
    if (o.length > 1 && !h.isType && h.type === t.name && s.has(k)) {
      if (zr(h))
        zs(o[o.length - 1], e, k);
      else if (Jr(h)) {
        let x = o.length - 1;
        for (; x > 0 && !o[x].isFunctionScope; )
          x--;
        if (x < 0)
          throw new Error("Did not find parent function scope.");
        zs(o[x], e, k);
      }
    }
  }
  if (o.length > 0)
    throw new Error("Expected empty scope stack after processing file.");
}
function zs(e, n, s) {
  for (let o = e.startTokenIndex; o < e.endTokenIndex; o++) {
    const i = n.tokens[o];
    (i.type === t.name || i.type === t.jsxName) && n.identifierNameForToken(i) === s && (i.shadowsGlobal = !0);
  }
}
function No(e, n) {
  const s = [];
  for (const o of n)
    o.type === t.name && s.push(e.slice(o.start, o.end));
  return s;
}
class ms {
  __init() {
    this.usedNames = /* @__PURE__ */ new Set();
  }
  constructor(n, s) {
    ms.prototype.__init.call(this), this.usedNames = new Set(No(n, s));
  }
  claimFreeName(n) {
    const s = this.findFreeName(n);
    return this.usedNames.add(s), s;
  }
  findFreeName(n) {
    if (!this.usedNames.has(n))
      return n;
    let s = 2;
    for (; this.usedNames.has(n + String(s)); )
      s++;
    return n + String(s);
  }
}
var pe = {}, ts = {}, at = {}, Co = lt && lt.__extends || /* @__PURE__ */ function() {
  var e = function(n, s) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, i) {
      o.__proto__ = i;
    } || function(o, i) {
      for (var c in i) i.hasOwnProperty(c) && (o[c] = i[c]);
    }, e(n, s);
  };
  return function(n, s) {
    e(n, s);
    function o() {
      this.constructor = n;
    }
    n.prototype = s === null ? Object.create(s) : (o.prototype = s.prototype, new o());
  };
}();
Object.defineProperty(at, "__esModule", { value: !0 });
at.DetailContext = at.NoopContext = at.VError = void 0;
var C1 = (
  /** @class */
  function(e) {
    Co(n, e);
    function n(s, o) {
      var i = e.call(this, o) || this;
      return i.path = s, Object.setPrototypeOf(i, n.prototype), i;
    }
    return n;
  }(Error)
);
at.VError = C1;
var Po = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.fail = function(n, s, o) {
      return !1;
    }, e.prototype.unionResolver = function() {
      return this;
    }, e.prototype.createContext = function() {
      return this;
    }, e.prototype.resolveUnion = function(n) {
    }, e;
  }()
);
at.NoopContext = Po;
var P1 = (
  /** @class */
  function() {
    function e() {
      this._propNames = [""], this._messages = [null], this._score = 0;
    }
    return e.prototype.fail = function(n, s, o) {
      return this._propNames.push(n), this._messages.push(s), this._score += o, !1;
    }, e.prototype.unionResolver = function() {
      return new Ro();
    }, e.prototype.resolveUnion = function(n) {
      for (var s, o, i = n, c = null, h = 0, k = i.contexts; h < k.length; h++) {
        var x = k[h];
        (!c || x._score >= c._score) && (c = x);
      }
      c && c._score > 0 && ((s = this._propNames).push.apply(s, c._propNames), (o = this._messages).push.apply(o, c._messages));
    }, e.prototype.getError = function(n) {
      for (var s = [], o = this._propNames.length - 1; o >= 0; o--) {
        var i = this._propNames[o];
        n += typeof i == "number" ? "[" + i + "]" : i ? "." + i : "";
        var c = this._messages[o];
        c && s.push(n + " " + c);
      }
      return new C1(n, s.join("; "));
    }, e.prototype.getErrorDetail = function(n) {
      for (var s = [], o = this._propNames.length - 1; o >= 0; o--) {
        var i = this._propNames[o];
        n += typeof i == "number" ? "[" + i + "]" : i ? "." + i : "";
        var c = this._messages[o];
        c && s.push({ path: n, message: c });
      }
      for (var h = null, o = s.length - 1; o >= 0; o--)
        h && (s[o].nested = [h]), h = s[o];
      return h;
    }, e;
  }()
);
at.DetailContext = P1;
var Ro = (
  /** @class */
  function() {
    function e() {
      this.contexts = [];
    }
    return e.prototype.createContext = function() {
      var n = new P1();
      return this.contexts.push(n), n;
    }, e;
  }()
);
(function(e) {
  var n = lt && lt.__extends || /* @__PURE__ */ function() {
    var p = function(y, T) {
      return p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(S, C) {
        S.__proto__ = C;
      } || function(S, C) {
        for (var j in C) C.hasOwnProperty(j) && (S[j] = C[j]);
      }, p(y, T);
    };
    return function(y, T) {
      p(y, T);
      function S() {
        this.constructor = y;
      }
      y.prototype = T === null ? Object.create(T) : (S.prototype = T.prototype, new S());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.basicTypes = e.BasicType = e.TParamList = e.TParam = e.param = e.TFunc = e.func = e.TProp = e.TOptional = e.opt = e.TIface = e.iface = e.TEnumLiteral = e.enumlit = e.TEnumType = e.enumtype = e.TIntersection = e.intersection = e.TUnion = e.union = e.TTuple = e.tuple = e.TArray = e.array = e.TLiteral = e.lit = e.TName = e.name = e.TType = void 0;
  var s = at, o = (
    /** @class */
    /* @__PURE__ */ function() {
      function p() {
      }
      return p;
    }()
  );
  e.TType = o;
  function i(p) {
    return typeof p == "string" ? h(p) : p;
  }
  function c(p, y) {
    var T = p[y];
    if (!T)
      throw new Error("Unknown type " + y);
    return T;
  }
  function h(p) {
    return new k(p);
  }
  e.name = h;
  var k = (
    /** @class */
    function(p) {
      n(y, p);
      function y(T) {
        var S = p.call(this) || this;
        return S.name = T, S._failMsg = "is not a " + T, S;
      }
      return y.prototype.getChecker = function(T, S, C) {
        var j = this, $ = c(T, this.name), Y = $.getChecker(T, S, C);
        return $ instanceof v || $ instanceof y ? Y : function(he, fe) {
          return Y(he, fe) ? !0 : fe.fail(null, j._failMsg, 0);
        };
      }, y;
    }(o)
  );
  e.TName = k;
  function x(p) {
    return new d(p);
  }
  e.lit = x;
  var d = (
    /** @class */
    function(p) {
      n(y, p);
      function y(T) {
        var S = p.call(this) || this;
        return S.value = T, S.name = JSON.stringify(T), S._failMsg = "is not " + S.name, S;
      }
      return y.prototype.getChecker = function(T, S) {
        var C = this;
        return function(j, $) {
          return j === C.value ? !0 : $.fail(null, C._failMsg, -1);
        };
      }, y;
    }(o)
  );
  e.TLiteral = d;
  function w(p) {
    return new P(i(p));
  }
  e.array = w;
  var P = (
    /** @class */
    function(p) {
      n(y, p);
      function y(T) {
        var S = p.call(this) || this;
        return S.ttype = T, S;
      }
      return y.prototype.getChecker = function(T, S) {
        var C = this.ttype.getChecker(T, S);
        return function(j, $) {
          if (!Array.isArray(j))
            return $.fail(null, "is not an array", 0);
          for (var Y = 0; Y < j.length; Y++) {
            var he = C(j[Y], $);
            if (!he)
              return $.fail(Y, null, 1);
          }
          return !0;
        };
      }, y;
    }(o)
  );
  e.TArray = P;
  function I() {
    for (var p = [], y = 0; y < arguments.length; y++)
      p[y] = arguments[y];
    return new R(p.map(function(T) {
      return i(T);
    }));
  }
  e.tuple = I;
  var R = (
    /** @class */
    function(p) {
      n(y, p);
      function y(T) {
        var S = p.call(this) || this;
        return S.ttypes = T, S;
      }
      return y.prototype.getChecker = function(T, S) {
        var C = this.ttypes.map(function($) {
          return $.getChecker(T, S);
        }), j = function($, Y) {
          if (!Array.isArray($))
            return Y.fail(null, "is not an array", 0);
          for (var he = 0; he < C.length; he++) {
            var fe = C[he]($[he], Y);
            if (!fe)
              return Y.fail(he, null, 1);
          }
          return !0;
        };
        return S ? function($, Y) {
          return j($, Y) ? $.length <= C.length ? !0 : Y.fail(C.length, "is extraneous", 2) : !1;
        } : j;
      }, y;
    }(o)
  );
  e.TTuple = R;
  function G() {
    for (var p = [], y = 0; y < arguments.length; y++)
      p[y] = arguments[y];
    return new se(p.map(function(T) {
      return i(T);
    }));
  }
  e.union = G;
  var se = (
    /** @class */
    function(p) {
      n(y, p);
      function y(T) {
        var S = p.call(this) || this;
        S.ttypes = T;
        var C = T.map(function($) {
          return $ instanceof k || $ instanceof d ? $.name : null;
        }).filter(function($) {
          return $;
        }), j = T.length - C.length;
        return C.length ? (j > 0 && C.push(j + " more"), S._failMsg = "is none of " + C.join(", ")) : S._failMsg = "is none of " + j + " types", S;
      }
      return y.prototype.getChecker = function(T, S) {
        var C = this, j = this.ttypes.map(function($) {
          return $.getChecker(T, S);
        });
        return function($, Y) {
          for (var he = Y.unionResolver(), fe = 0; fe < j.length; fe++) {
            var Ce = j[fe]($, he.createContext());
            if (Ce)
              return !0;
          }
          return Y.resolveUnion(he), Y.fail(null, C._failMsg, 0);
        };
      }, y;
    }(o)
  );
  e.TUnion = se;
  function we() {
    for (var p = [], y = 0; y < arguments.length; y++)
      p[y] = arguments[y];
    return new Te(p.map(function(T) {
      return i(T);
    }));
  }
  e.intersection = we;
  var Te = (
    /** @class */
    function(p) {
      n(y, p);
      function y(T) {
        var S = p.call(this) || this;
        return S.ttypes = T, S;
      }
      return y.prototype.getChecker = function(T, S) {
        var C = /* @__PURE__ */ new Set(), j = this.ttypes.map(function($) {
          return $.getChecker(T, S, C);
        });
        return function($, Y) {
          var he = j.every(function(fe) {
            return fe($, Y);
          });
          return he ? !0 : Y.fail(null, null, 0);
        };
      }, y;
    }(o)
  );
  e.TIntersection = Te;
  function O(p) {
    return new q(p);
  }
  e.enumtype = O;
  var q = (
    /** @class */
    function(p) {
      n(y, p);
      function y(T) {
        var S = p.call(this) || this;
        return S.members = T, S.validValues = /* @__PURE__ */ new Set(), S._failMsg = "is not a valid enum value", S.validValues = new Set(Object.keys(T).map(function(C) {
          return T[C];
        })), S;
      }
      return y.prototype.getChecker = function(T, S) {
        var C = this;
        return function(j, $) {
          return C.validValues.has(j) ? !0 : $.fail(null, C._failMsg, 0);
        };
      }, y;
    }(o)
  );
  e.TEnumType = q;
  function U(p, y) {
    return new ue(p, y);
  }
  e.enumlit = U;
  var ue = (
    /** @class */
    function(p) {
      n(y, p);
      function y(T, S) {
        var C = p.call(this) || this;
        return C.enumName = T, C.prop = S, C._failMsg = "is not " + T + "." + S, C;
      }
      return y.prototype.getChecker = function(T, S) {
        var C = this, j = c(T, this.enumName);
        if (!(j instanceof q))
          throw new Error("Type " + this.enumName + " used in enumlit is not an enum type");
        var $ = j.members[this.prop];
        if (!j.members.hasOwnProperty(this.prop))
          throw new Error("Unknown value " + this.enumName + "." + this.prop + " used in enumlit");
        return function(Y, he) {
          return Y === $ ? !0 : he.fail(null, C._failMsg, -1);
        };
      }, y;
    }(o)
  );
  e.TEnumLiteral = ue;
  function me(p) {
    return Object.keys(p).map(function(y) {
      return oe(y, p[y]);
    });
  }
  function oe(p, y) {
    return y instanceof Ae ? new Ve(p, y.ttype, !0) : new Ve(p, i(y), !1);
  }
  function de(p, y) {
    return new Re(p, me(y));
  }
  e.iface = de;
  var Re = (
    /** @class */
    function(p) {
      n(y, p);
      function y(T, S) {
        var C = p.call(this) || this;
        return C.bases = T, C.props = S, C.propSet = new Set(S.map(function(j) {
          return j.name;
        })), C;
      }
      return y.prototype.getChecker = function(T, S, C) {
        var j = this, $ = this.bases.map(function(ke) {
          return c(T, ke).getChecker(T, S);
        }), Y = this.props.map(function(ke) {
          return ke.ttype.getChecker(T, S);
        }), he = new s.NoopContext(), fe = this.props.map(function(ke, ve) {
          return !ke.isOpt && !Y[ve](void 0, he);
        }), Ce = function(ke, ve) {
          if (typeof ke != "object" || ke === null)
            return ve.fail(null, "is not an object", 0);
          for (var Ee = 0; Ee < $.length; Ee++)
            if (!$[Ee](ke, ve))
              return !1;
          for (var Ee = 0; Ee < Y.length; Ee++) {
            var Qe = j.props[Ee].name, pt = ke[Qe];
            if (pt === void 0) {
              if (fe[Ee])
                return ve.fail(Qe, "is missing", 1);
            } else {
              var mt = Y[Ee](pt, ve);
              if (!mt)
                return ve.fail(Qe, null, 1);
            }
          }
          return !0;
        };
        if (!S)
          return Ce;
        var je = this.propSet;
        return C && (this.propSet.forEach(function(ke) {
          return C.add(ke);
        }), je = C), function(ke, ve) {
          if (!Ce(ke, ve))
            return !1;
          for (var Ee in ke)
            if (!je.has(Ee))
              return ve.fail(Ee, "is extraneous", 2);
          return !0;
        };
      }, y;
    }(o)
  );
  e.TIface = Re;
  function Ne(p) {
    return new Ae(i(p));
  }
  e.opt = Ne;
  var Ae = (
    /** @class */
    function(p) {
      n(y, p);
      function y(T) {
        var S = p.call(this) || this;
        return S.ttype = T, S;
      }
      return y.prototype.getChecker = function(T, S) {
        var C = this.ttype.getChecker(T, S);
        return function(j, $) {
          return j === void 0 || C(j, $);
        };
      }, y;
    }(o)
  );
  e.TOptional = Ae;
  var Ve = (
    /** @class */
    /* @__PURE__ */ function() {
      function p(y, T, S) {
        this.name = y, this.ttype = T, this.isOpt = S;
      }
      return p;
    }()
  );
  e.TProp = Ve;
  function Be(p) {
    for (var y = [], T = 1; T < arguments.length; T++)
      y[T - 1] = arguments[T];
    return new He(new L(y), i(p));
  }
  e.func = Be;
  var He = (
    /** @class */
    function(p) {
      n(y, p);
      function y(T, S) {
        var C = p.call(this) || this;
        return C.paramList = T, C.result = S, C;
      }
      return y.prototype.getChecker = function(T, S) {
        return function(C, j) {
          return typeof C == "function" ? !0 : j.fail(null, "is not a function", 0);
        };
      }, y;
    }(o)
  );
  e.TFunc = He;
  function Je(p, y, T) {
    return new Me(p, i(y), !!T);
  }
  e.param = Je;
  var Me = (
    /** @class */
    /* @__PURE__ */ function() {
      function p(y, T, S) {
        this.name = y, this.ttype = T, this.isOpt = S;
      }
      return p;
    }()
  );
  e.TParam = Me;
  var L = (
    /** @class */
    function(p) {
      n(y, p);
      function y(T) {
        var S = p.call(this) || this;
        return S.params = T, S;
      }
      return y.prototype.getChecker = function(T, S) {
        var C = this, j = this.params.map(function(fe) {
          return fe.ttype.getChecker(T, S);
        }), $ = new s.NoopContext(), Y = this.params.map(function(fe, Ce) {
          return !fe.isOpt && !j[Ce](void 0, $);
        }), he = function(fe, Ce) {
          if (!Array.isArray(fe))
            return Ce.fail(null, "is not an array", 0);
          for (var je = 0; je < j.length; je++) {
            var ke = C.params[je];
            if (fe[je] === void 0) {
              if (Y[je])
                return Ce.fail(ke.name, "is missing", 1);
            } else {
              var ve = j[je](fe[je], Ce);
              if (!ve)
                return Ce.fail(ke.name, null, 1);
            }
          }
          return !0;
        };
        return S ? function(fe, Ce) {
          return he(fe, Ce) ? fe.length <= j.length ? !0 : Ce.fail(j.length, "is extraneous", 2) : !1;
        } : he;
      }, y;
    }(o)
  );
  e.TParamList = L;
  var v = (
    /** @class */
    function(p) {
      n(y, p);
      function y(T, S) {
        var C = p.call(this) || this;
        return C.validator = T, C.message = S, C;
      }
      return y.prototype.getChecker = function(T, S) {
        var C = this;
        return function(j, $) {
          return C.validator(j) ? !0 : $.fail(null, C.message, 0);
        };
      }, y;
    }(o)
  );
  e.BasicType = v, e.basicTypes = {
    any: new v(function(p) {
      return !0;
    }, "is invalid"),
    number: new v(function(p) {
      return typeof p == "number";
    }, "is not a number"),
    object: new v(function(p) {
      return typeof p == "object" && p;
    }, "is not an object"),
    boolean: new v(function(p) {
      return typeof p == "boolean";
    }, "is not a boolean"),
    string: new v(function(p) {
      return typeof p == "string";
    }, "is not a string"),
    symbol: new v(function(p) {
      return typeof p == "symbol";
    }, "is not a symbol"),
    void: new v(function(p) {
      return p == null;
    }, "is not void"),
    undefined: new v(function(p) {
      return p === void 0;
    }, "is not undefined"),
    null: new v(function(p) {
      return p === null;
    }, "is not null"),
    never: new v(function(p) {
      return !1;
    }, "is unexpected"),
    Date: new v(V("[object Date]"), "is not a Date"),
    RegExp: new v(V("[object RegExp]"), "is not a RegExp")
  };
  var M = Object.prototype.toString;
  function V(p) {
    return function(y) {
      return typeof y == "object" && y && M.call(y) === p;
    };
  }
  typeof Buffer < "u" && (e.basicTypes.Buffer = new v(function(p) {
    return Buffer.isBuffer(p);
  }, "is not a Buffer"));
  for (var ee = function(p) {
    e.basicTypes[p.name] = new v(function(y) {
      return y instanceof p;
    }, "is not a " + p.name);
  }, K = 0, re = [
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    ArrayBuffer
  ]; K < re.length; K++) {
    var ye = re[K];
    ee(ye);
  }
})(ts);
(function(e) {
  var n = lt && lt.__spreadArrays || function() {
    for (var x = 0, d = 0, w = arguments.length; d < w; d++) x += arguments[d].length;
    for (var P = Array(x), I = 0, d = 0; d < w; d++)
      for (var R = arguments[d], G = 0, se = R.length; G < se; G++, I++)
        P[I] = R[G];
    return P;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Checker = e.createCheckers = void 0;
  var s = ts, o = at, i = ts;
  Object.defineProperty(e, "TArray", { enumerable: !0, get: function() {
    return i.TArray;
  } }), Object.defineProperty(e, "TEnumType", { enumerable: !0, get: function() {
    return i.TEnumType;
  } }), Object.defineProperty(e, "TEnumLiteral", { enumerable: !0, get: function() {
    return i.TEnumLiteral;
  } }), Object.defineProperty(e, "TFunc", { enumerable: !0, get: function() {
    return i.TFunc;
  } }), Object.defineProperty(e, "TIface", { enumerable: !0, get: function() {
    return i.TIface;
  } }), Object.defineProperty(e, "TLiteral", { enumerable: !0, get: function() {
    return i.TLiteral;
  } }), Object.defineProperty(e, "TName", { enumerable: !0, get: function() {
    return i.TName;
  } }), Object.defineProperty(e, "TOptional", { enumerable: !0, get: function() {
    return i.TOptional;
  } }), Object.defineProperty(e, "TParam", { enumerable: !0, get: function() {
    return i.TParam;
  } }), Object.defineProperty(e, "TParamList", { enumerable: !0, get: function() {
    return i.TParamList;
  } }), Object.defineProperty(e, "TProp", { enumerable: !0, get: function() {
    return i.TProp;
  } }), Object.defineProperty(e, "TTuple", { enumerable: !0, get: function() {
    return i.TTuple;
  } }), Object.defineProperty(e, "TType", { enumerable: !0, get: function() {
    return i.TType;
  } }), Object.defineProperty(e, "TUnion", { enumerable: !0, get: function() {
    return i.TUnion;
  } }), Object.defineProperty(e, "TIntersection", { enumerable: !0, get: function() {
    return i.TIntersection;
  } }), Object.defineProperty(e, "array", { enumerable: !0, get: function() {
    return i.array;
  } }), Object.defineProperty(e, "enumlit", { enumerable: !0, get: function() {
    return i.enumlit;
  } }), Object.defineProperty(e, "enumtype", { enumerable: !0, get: function() {
    return i.enumtype;
  } }), Object.defineProperty(e, "func", { enumerable: !0, get: function() {
    return i.func;
  } }), Object.defineProperty(e, "iface", { enumerable: !0, get: function() {
    return i.iface;
  } }), Object.defineProperty(e, "lit", { enumerable: !0, get: function() {
    return i.lit;
  } }), Object.defineProperty(e, "name", { enumerable: !0, get: function() {
    return i.name;
  } }), Object.defineProperty(e, "opt", { enumerable: !0, get: function() {
    return i.opt;
  } }), Object.defineProperty(e, "param", { enumerable: !0, get: function() {
    return i.param;
  } }), Object.defineProperty(e, "tuple", { enumerable: !0, get: function() {
    return i.tuple;
  } }), Object.defineProperty(e, "union", { enumerable: !0, get: function() {
    return i.union;
  } }), Object.defineProperty(e, "intersection", { enumerable: !0, get: function() {
    return i.intersection;
  } }), Object.defineProperty(e, "BasicType", { enumerable: !0, get: function() {
    return i.BasicType;
  } });
  var c = at;
  Object.defineProperty(e, "VError", { enumerable: !0, get: function() {
    return c.VError;
  } });
  function h() {
    for (var x = [], d = 0; d < arguments.length; d++)
      x[d] = arguments[d];
    for (var w = Object.assign.apply(Object, n([{}, s.basicTypes], x)), P = {}, I = 0, R = x; I < R.length; I++)
      for (var G = R[I], se = 0, we = Object.keys(G); se < we.length; se++) {
        var Te = we[se];
        P[Te] = new k(w, G[Te]);
      }
    return P;
  }
  e.createCheckers = h;
  var k = (
    /** @class */
    function() {
      function x(d, w, P) {
        if (P === void 0 && (P = "value"), this.suite = d, this.ttype = w, this._path = P, this.props = /* @__PURE__ */ new Map(), w instanceof s.TIface)
          for (var I = 0, R = w.props; I < R.length; I++) {
            var G = R[I];
            this.props.set(G.name, G.ttype);
          }
        this.checkerPlain = this.ttype.getChecker(d, !1), this.checkerStrict = this.ttype.getChecker(d, !0);
      }
      return x.prototype.setReportedPath = function(d) {
        this._path = d;
      }, x.prototype.check = function(d) {
        return this._doCheck(this.checkerPlain, d);
      }, x.prototype.test = function(d) {
        return this.checkerPlain(d, new o.NoopContext());
      }, x.prototype.validate = function(d) {
        return this._doValidate(this.checkerPlain, d);
      }, x.prototype.strictCheck = function(d) {
        return this._doCheck(this.checkerStrict, d);
      }, x.prototype.strictTest = function(d) {
        return this.checkerStrict(d, new o.NoopContext());
      }, x.prototype.strictValidate = function(d) {
        return this._doValidate(this.checkerStrict, d);
      }, x.prototype.getProp = function(d) {
        var w = this.props.get(d);
        if (!w)
          throw new Error("Type has no property " + d);
        return new x(this.suite, w, this._path + "." + d);
      }, x.prototype.methodArgs = function(d) {
        var w = this._getMethod(d);
        return new x(this.suite, w.paramList);
      }, x.prototype.methodResult = function(d) {
        var w = this._getMethod(d);
        return new x(this.suite, w.result);
      }, x.prototype.getArgs = function() {
        if (!(this.ttype instanceof s.TFunc))
          throw new Error("getArgs() applied to non-function");
        return new x(this.suite, this.ttype.paramList);
      }, x.prototype.getResult = function() {
        if (!(this.ttype instanceof s.TFunc))
          throw new Error("getResult() applied to non-function");
        return new x(this.suite, this.ttype.result);
      }, x.prototype.getType = function() {
        return this.ttype;
      }, x.prototype._doCheck = function(d, w) {
        var P = new o.NoopContext();
        if (!d(w, P)) {
          var I = new o.DetailContext();
          throw d(w, I), I.getError(this._path);
        }
      }, x.prototype._doValidate = function(d, w) {
        var P = new o.NoopContext();
        if (d(w, P))
          return null;
        var I = new o.DetailContext();
        return d(w, I), I.getErrorDetail(this._path);
      }, x.prototype._getMethod = function(d) {
        var w = this.props.get(d);
        if (!w)
          throw new Error("Type has no property " + d);
        if (!(w instanceof s.TFunc))
          throw new Error("Property " + d + " is not a method");
        return w;
      }, x;
    }()
  );
  e.Checker = k;
})(pe);
const Lo = pe.union(
  pe.lit("jsx"),
  pe.lit("typescript"),
  pe.lit("flow"),
  pe.lit("imports"),
  pe.lit("react-hot-loader"),
  pe.lit("jest")
), Do = pe.iface([], {
  compiledFilename: "string"
}), Oo = pe.iface([], {
  transforms: pe.array("Transform"),
  disableESTransforms: pe.opt("boolean"),
  jsxRuntime: pe.opt(pe.union(pe.lit("classic"), pe.lit("automatic"), pe.lit("preserve"))),
  production: pe.opt("boolean"),
  jsxImportSource: pe.opt("string"),
  jsxPragma: pe.opt("string"),
  jsxFragmentPragma: pe.opt("string"),
  keepUnusedImports: pe.opt("boolean"),
  preserveDynamicImport: pe.opt("boolean"),
  injectCreateRequireForImportRequire: pe.opt("boolean"),
  enableLegacyTypeScriptModuleInterop: pe.opt("boolean"),
  enableLegacyBabel5ModuleInterop: pe.opt("boolean"),
  sourceMapOptions: pe.opt("SourceMapOptions"),
  filePath: pe.opt("string")
}), Fo = {
  Transform: Lo,
  SourceMapOptions: Do,
  Options: Oo
}, { Options: Mo } = pe.createCheckers(Fo);
function jo(e) {
  Mo.strictCheck(e);
}
function R1() {
  _(), Fe(!1);
}
function L1(e) {
  _(), An(e);
}
function xt(e) {
  H(), ds(e);
}
function gn() {
  H(), r.tokens[r.tokens.length - 1].identifierRole = B.ImportDeclaration;
}
function ds(e) {
  let n;
  r.scopeDepth === 0 ? n = B.TopLevelDeclaration : e ? n = B.BlockScopedDeclaration : n = B.FunctionScopedDeclaration, r.tokens[r.tokens.length - 1].identifierRole = n;
}
function An(e) {
  switch (r.type) {
    case t._this: {
      const n = Q(0);
      _(), J(n);
      return;
    }
    case t._yield:
    case t.name: {
      r.type = t.name, xt(e);
      return;
    }
    case t.bracketL: {
      _(), ks(
        t.bracketR,
        e,
        !0
        /* allowEmpty */
      );
      return;
    }
    case t.braceL:
      As(!0, e);
      return;
    default:
      z();
  }
}
function ks(e, n, s = !1, o = !1, i = 0) {
  let c = !0, h = !1;
  const k = r.tokens.length;
  for (; !f(e) && !r.error; )
    if (c ? c = !1 : (g(t.comma), r.tokens[r.tokens.length - 1].contextId = i, !h && r.tokens[k].isType && (r.tokens[r.tokens.length - 1].isType = !0, h = !0)), !(s && a(t.comma))) {
      if (f(e))
        break;
      if (a(t.ellipsis)) {
        L1(n), D1(), f(t.comma), g(e);
        break;
      } else
        qo(o, n);
    }
}
function qo(e, n) {
  e && gs([
    l._public,
    l._protected,
    l._private,
    l._readonly,
    l._override
  ]), _n(n), D1(), _n(
    n,
    !0
    /* leftAlreadyParsed */
  );
}
function D1() {
  ie ? sc() : ne && Xi();
}
function _n(e, n = !1) {
  if (n || An(e), !f(t.eq))
    return;
  const s = r.tokens.length - 1;
  Fe(), r.tokens[s].rhsEndIndex = r.tokens.length;
}
function ns() {
  return a(t.name);
}
function Bo() {
  return a(t.name) || !!(r.type & t.IS_KEYWORD) || a(t.string) || a(t.num) || a(t.bigint) || a(t.decimal);
}
function O1() {
  const e = r.snapshot();
  return _(), (a(t.bracketL) || a(t.braceL) || a(t.star) || a(t.ellipsis) || a(t.hash) || Bo()) && !Ue() ? !0 : (r.restoreFromSnapshot(e), !1);
}
function gs(e) {
  for (; F1(e) !== null; )
    ;
}
function F1(e) {
  if (!a(t.name))
    return null;
  const n = r.contextualKeyword;
  if (e.indexOf(n) !== -1 && O1()) {
    switch (n) {
      case l._readonly:
        r.tokens[r.tokens.length - 1].type = t._readonly;
        break;
      case l._abstract:
        r.tokens[r.tokens.length - 1].type = t._abstract;
        break;
      case l._static:
        r.tokens[r.tokens.length - 1].type = t._static;
        break;
      case l._public:
        r.tokens[r.tokens.length - 1].type = t._public;
        break;
      case l._private:
        r.tokens[r.tokens.length - 1].type = t._private;
        break;
      case l._protected:
        r.tokens[r.tokens.length - 1].type = t._protected;
        break;
      case l._override:
        r.tokens[r.tokens.length - 1].type = t._override;
        break;
      case l._declare:
        r.tokens[r.tokens.length - 1].type = t._declare;
        break;
    }
    return n;
  }
  return null;
}
function sn() {
  for (H(); f(t.dot); )
    H();
}
function $o() {
  sn(), !Ue() && a(t.lessThan) && $t();
}
function Uo() {
  _(), rn();
}
function Vo() {
  _();
}
function Ho() {
  g(t._typeof), a(t._import) ? M1() : sn(), !Ue() && a(t.lessThan) && $t();
}
function M1() {
  g(t._import), g(t.parenL), g(t.string), g(t.parenR), f(t.dot) && sn(), a(t.lessThan) && $t();
}
function Wo() {
  f(t._const);
  const e = f(t._in), n = Pe(l._out);
  f(t._const), (e || n) && !a(t.name) ? r.tokens[r.tokens.length - 1].type = t.name : H(), f(t._extends) && be(), f(t.eq) && be();
}
function Ct() {
  a(t.lessThan) && vn();
}
function vn() {
  const e = Q(0);
  for (a(t.lessThan) || a(t.typeParameterStart) ? _() : z(); !f(t.greaterThan) && !r.error; )
    Wo(), f(t.comma);
  J(e);
}
function _s(e) {
  const n = e === t.arrow;
  Ct(), g(t.parenL), r.scopeDepth++, Go(
    !1
    /* isBlockScope */
  ), r.scopeDepth--, (n || a(e)) && Yt(e);
}
function Go(e) {
  ks(t.parenR, e);
}
function yn() {
  f(t.comma) || _e();
}
function Js() {
  _s(t.colon), yn();
}
function Xo() {
  const e = r.snapshot();
  _();
  const n = f(t.name) && a(t.colon);
  return r.restoreFromSnapshot(e), n;
}
function j1() {
  if (!(a(t.bracketL) && Xo()))
    return !1;
  const e = Q(0);
  return g(t.bracketL), H(), rn(), g(t.bracketR), Bt(), yn(), J(e), !0;
}
function Qs(e) {
  f(t.question), !e && (a(t.parenL) || a(t.lessThan)) ? (_s(t.colon), yn()) : (Bt(), yn());
}
function zo() {
  if (a(t.parenL) || a(t.lessThan)) {
    Js();
    return;
  }
  if (a(t._new)) {
    _(), a(t.parenL) || a(t.lessThan) ? Js() : Qs(!1);
    return;
  }
  const e = !!F1([l._readonly]);
  j1() || ((D(l._get) || D(l._set)) && O1(), Zt(
    -1
    /* Types don't need context IDs. */
  ), Qs(e));
}
function Jo() {
  q1();
}
function q1() {
  for (g(t.braceL); !f(t.braceR) && !r.error; )
    zo();
}
function Qo() {
  const e = r.snapshot(), n = Yo();
  return r.restoreFromSnapshot(e), n;
}
function Yo() {
  return _(), f(t.plus) || f(t.minus) ? D(l._readonly) : (D(l._readonly) && _(), !a(t.bracketL) || (_(), !ns()) ? !1 : (_(), a(t._in)));
}
function Zo() {
  H(), g(t._in), be();
}
function Ko() {
  g(t.braceL), a(t.plus) || a(t.minus) ? (_(), Se(l._readonly)) : Pe(l._readonly), g(t.bracketL), Zo(), Pe(l._as) && be(), g(t.bracketR), a(t.plus) || a(t.minus) ? (_(), g(t.question)) : f(t.question), pi(), _e(), g(t.braceR);
}
function ei() {
  for (g(t.bracketL); !f(t.bracketR) && !r.error; )
    ti(), f(t.comma);
}
function ti() {
  f(t.ellipsis) ? be() : (be(), f(t.question)), f(t.colon) && be();
}
function ni() {
  g(t.parenL), be(), g(t.parenR);
}
function si() {
  for (kt(), kt(); !a(t.backQuote) && !r.error; )
    g(t.dollarBraceL), be(), kt(), kt();
  _();
}
var gt;
(function(e) {
  e[e.TSFunctionType = 0] = "TSFunctionType";
  const s = 1;
  e[e.TSConstructorType = s] = "TSConstructorType";
  const o = s + 1;
  e[e.TSAbstractConstructorType = o] = "TSAbstractConstructorType";
})(gt || (gt = {}));
function Yn(e) {
  e === gt.TSAbstractConstructorType && Se(l._abstract), (e === gt.TSConstructorType || e === gt.TSAbstractConstructorType) && g(t._new);
  const n = r.inDisallowConditionalTypesContext;
  r.inDisallowConditionalTypesContext = !1, _s(t.arrow), r.inDisallowConditionalTypesContext = n;
}
function ri() {
  switch (r.type) {
    case t.name:
      $o();
      return;
    case t._void:
    case t._null:
      _();
      return;
    case t.string:
    case t.num:
    case t.bigint:
    case t.decimal:
    case t._true:
    case t._false:
      qt();
      return;
    case t.minus:
      _(), qt();
      return;
    case t._this: {
      Vo(), D(l._is) && !Ue() && Uo();
      return;
    }
    case t._typeof:
      Ho();
      return;
    case t._import:
      M1();
      return;
    case t.braceL:
      Qo() ? Ko() : Jo();
      return;
    case t.bracketL:
      ei();
      return;
    case t.parenL:
      ni();
      return;
    case t.backQuote:
      si();
      return;
    default:
      if (r.type & t.IS_KEYWORD) {
        _(), r.tokens[r.tokens.length - 1].type = t.name;
        return;
      }
      break;
  }
  z();
}
function oi() {
  for (ri(); !Ue() && f(t.bracketL); )
    f(t.bracketR) || (be(), g(t.bracketR));
}
function ii() {
  if (Se(l._infer), H(), a(t._extends)) {
    const e = r.snapshot();
    g(t._extends);
    const n = r.inDisallowConditionalTypesContext;
    r.inDisallowConditionalTypesContext = !0, be(), r.inDisallowConditionalTypesContext = n, (r.error || !r.inDisallowConditionalTypesContext && a(t.question)) && r.restoreFromSnapshot(e);
  }
}
function ss() {
  if (D(l._keyof) || D(l._unique) || D(l._readonly))
    _(), ss();
  else if (D(l._infer))
    ii();
  else {
    const e = r.inDisallowConditionalTypesContext;
    r.inDisallowConditionalTypesContext = !1, oi(), r.inDisallowConditionalTypesContext = e;
  }
}
function Ys() {
  if (f(t.bitwiseAND), ss(), a(t.bitwiseAND))
    for (; f(t.bitwiseAND); )
      ss();
}
function ai() {
  if (f(t.bitwiseOR), Ys(), a(t.bitwiseOR))
    for (; f(t.bitwiseOR); )
      Ys();
}
function ci() {
  return a(t.lessThan) ? !0 : a(t.parenL) && ui();
}
function li() {
  if (a(t.name) || a(t._this))
    return _(), !0;
  if (a(t.braceL) || a(t.bracketL)) {
    let e = 1;
    for (_(); e > 0 && !r.error; )
      a(t.braceL) || a(t.bracketL) ? e++ : (a(t.braceR) || a(t.bracketR)) && e--, _();
    return !0;
  }
  return !1;
}
function ui() {
  const e = r.snapshot(), n = hi();
  return r.restoreFromSnapshot(e), n;
}
function hi() {
  return _(), !!(a(t.parenR) || a(t.ellipsis) || li() && (a(t.colon) || a(t.comma) || a(t.question) || a(t.eq) || a(t.parenR) && (_(), a(t.arrow))));
}
function Yt(e) {
  const n = Q(0);
  g(e), mi() || be(), J(n);
}
function fi() {
  a(t.colon) && Yt(t.colon);
}
function Bt() {
  a(t.colon) && rn();
}
function pi() {
  f(t.colon) && be();
}
function mi() {
  const e = r.snapshot();
  return D(l._asserts) ? (_(), Pe(l._is) ? (be(), !0) : ns() || a(t._this) ? (_(), Pe(l._is) && be(), !0) : (r.restoreFromSnapshot(e), !1)) : ns() || a(t._this) ? (_(), D(l._is) && !Ue() ? (_(), be(), !0) : (r.restoreFromSnapshot(e), !1)) : !1;
}
function rn() {
  const e = Q(0);
  g(t.colon), be(), J(e);
}
function be() {
  if (Zs(), r.inDisallowConditionalTypesContext || Ue() || !f(t._extends))
    return;
  const e = r.inDisallowConditionalTypesContext;
  r.inDisallowConditionalTypesContext = !0, Zs(), r.inDisallowConditionalTypesContext = e, g(t.question), be(), g(t.colon), be();
}
function di() {
  return D(l._abstract) && Ie() === t._new;
}
function Zs() {
  if (ci()) {
    Yn(gt.TSFunctionType);
    return;
  }
  if (a(t._new)) {
    Yn(gt.TSConstructorType);
    return;
  } else if (di()) {
    Yn(gt.TSAbstractConstructorType);
    return;
  }
  ai();
}
function ki() {
  const e = Q(1);
  be(), g(t.greaterThan), J(e), on();
}
function gi() {
  if (f(t.jsxTagStart)) {
    r.tokens[r.tokens.length - 1].type = t.typeParameterStart;
    const e = Q(1);
    for (; !a(t.greaterThan) && !r.error; )
      be(), f(t.comma);
    Ye(), J(e);
  }
}
function B1() {
  for (; !a(t.braceL) && !r.error; )
    _i(), f(t.comma);
}
function _i() {
  sn(), a(t.lessThan) && $t();
}
function yi() {
  xt(!1), Ct(), f(t._extends) && B1(), q1();
}
function xi() {
  xt(!1), Ct(), g(t.eq), be(), _e();
}
function Ii() {
  if (a(t.string) ? qt() : H(), f(t.eq)) {
    const e = r.tokens.length - 1;
    Fe(), r.tokens[e].rhsEndIndex = r.tokens.length;
  }
}
function ys() {
  for (xt(!1), g(t.braceL); !f(t.braceR) && !r.error; )
    Ii(), f(t.comma);
}
function xs() {
  g(t.braceL), Rn(
    /* end */
    t.braceR
  );
}
function rs() {
  xt(!1), f(t.dot) ? rs() : xs();
}
function $1() {
  D(l._global) ? H() : a(t.string) ? ft() : z(), a(t.braceL) ? xs() : _e();
}
function os() {
  gn(), g(t.eq), wi(), _e();
}
function bi() {
  return D(l._require) && Ie() === t.parenL;
}
function wi() {
  bi() ? Ti() : sn();
}
function Ti() {
  Se(l._require), g(t.parenL), a(t.string) || z(), qt(), g(t.parenR);
}
function Ei() {
  if (it())
    return !1;
  switch (r.type) {
    case t._function: {
      const e = Q(1);
      _();
      const n = r.start;
      return vt(
        n,
        /* isStatement */
        !0
      ), J(e), !0;
    }
    case t._class: {
      const e = Q(1);
      return Nt(
        /* isStatement */
        !0,
        /* optionalId */
        !1
      ), J(e), !0;
    }
    case t._const:
      if (a(t._const) && fs(l._enum)) {
        const e = Q(1);
        return g(t._const), Se(l._enum), r.tokens[r.tokens.length - 1].type = t._enum, ys(), J(e), !0;
      }
    case t._var:
    case t._let: {
      const e = Q(1);
      return mn(r.type !== t._var), J(e), !0;
    }
    case t.name: {
      const e = Q(1), n = r.contextualKeyword;
      let s = !1;
      return n === l._global ? ($1(), s = !0) : s = Nn(
        n,
        /* isBeforeToken */
        !0
      ), J(e), s;
    }
    default:
      return !1;
  }
}
function Ks() {
  return Nn(
    r.contextualKeyword,
    /* isBeforeToken */
    !0
  );
}
function Si(e) {
  switch (e) {
    case l._declare: {
      const n = r.tokens.length - 1;
      if (Ei())
        return r.tokens[n].type = t._declare, !0;
      break;
    }
    case l._global:
      if (a(t.braceL))
        return xs(), !0;
      break;
    default:
      return Nn(
        e,
        /* isBeforeToken */
        !1
      );
  }
  return !1;
}
function Nn(e, n) {
  switch (e) {
    case l._abstract:
      if (Mt(n) && a(t._class))
        return r.tokens[r.tokens.length - 1].type = t._abstract, Nt(
          /* isStatement */
          !0,
          /* optionalId */
          !1
        ), !0;
      break;
    case l._enum:
      if (Mt(n) && a(t.name))
        return r.tokens[r.tokens.length - 1].type = t._enum, ys(), !0;
      break;
    case l._interface:
      if (Mt(n) && a(t.name)) {
        const s = Q(n ? 2 : 1);
        return yi(), J(s), !0;
      }
      break;
    case l._module:
      if (Mt(n)) {
        if (a(t.string)) {
          const s = Q(n ? 2 : 1);
          return $1(), J(s), !0;
        } else if (a(t.name)) {
          const s = Q(n ? 2 : 1);
          return rs(), J(s), !0;
        }
      }
      break;
    case l._namespace:
      if (Mt(n) && a(t.name)) {
        const s = Q(n ? 2 : 1);
        return rs(), J(s), !0;
      }
      break;
    case l._type:
      if (Mt(n) && a(t.name)) {
        const s = Q(n ? 2 : 1);
        return xi(), J(s), !0;
      }
      break;
  }
  return !1;
}
function Mt(e) {
  return e ? (_(), !0) : !it();
}
function Ai() {
  const e = r.snapshot();
  return vn(), Ut(), fi(), g(t.arrow), r.error ? (r.restoreFromSnapshot(e), !1) : (an(!0), !0);
}
function Is() {
  r.type === t.bitShiftL && (r.pos -= 1, X(t.lessThan)), $t();
}
function $t() {
  const e = Q(0);
  for (g(t.lessThan); !a(t.greaterThan) && !r.error; )
    be(), f(t.comma);
  e ? (g(t.greaterThan), J(e)) : (J(e), w1(), g(t.greaterThan), r.tokens[r.tokens.length - 1].isType = !0);
}
function U1() {
  if (a(t.name))
    switch (r.contextualKeyword) {
      case l._abstract:
      case l._declare:
      case l._enum:
      case l._interface:
      case l._module:
      case l._namespace:
      case l._type:
        return !0;
    }
  return !1;
}
function vi(e, n) {
  if (a(t.colon) && Yt(t.colon), !a(t.braceL) && it()) {
    let s = r.tokens.length - 1;
    for (; s >= 0 && (r.tokens[s].start >= e || r.tokens[s].type === t._default || r.tokens[s].type === t._export); )
      r.tokens[s].isType = !0, s--;
    return;
  }
  an(!1, n);
}
function Ni(e, n, s) {
  if (!Ue() && f(t.bang)) {
    r.tokens[r.tokens.length - 1].type = t.nonNullAssertion;
    return;
  }
  if (a(t.lessThan) || a(t.bitShiftL)) {
    const o = r.snapshot();
    if (!n && Q1() && Ai())
      return;
    if (Is(), !n && f(t.parenL) ? (r.tokens[r.tokens.length - 1].subscriptStartIndex = e, _t()) : a(t.backQuote) ? Ss() : (
      // The remaining possible case is an instantiation expression, e.g.
      // Array<number> . Check for a few cases that would disqualify it and
      // cause us to bail out.
      // a<b>>c is not (a<b>)>c, but a<(b>>c)
      (r.type === t.greaterThan || // a<b>c is (a<b)>c
      r.type !== t.parenL && r.type & t.IS_EXPRESSION_START && !Ue()) && z()
    ), r.error)
      r.restoreFromSnapshot(o);
    else
      return;
  } else !n && a(t.questionDot) && Ie() === t.lessThan && (_(), r.tokens[e].isOptionalChainStart = !0, r.tokens[r.tokens.length - 1].subscriptStartIndex = e, $t(), g(t.parenL), _t());
  ws(e, n, s);
}
function Ci() {
  if (f(t._import))
    return D(l._type) && Ie() !== t.eq && Se(l._type), os(), !0;
  if (f(t.eq))
    return Oe(), _e(), !0;
  if (Pe(l._as))
    return Se(l._namespace), H(), _e(), !0;
  if (D(l._type)) {
    const e = Ie();
    (e === t.braceL || e === t.star) && _();
  }
  return !1;
}
function Pi() {
  if (H(), a(t.comma) || a(t.braceR)) {
    r.tokens[r.tokens.length - 1].identifierRole = B.ImportDeclaration;
    return;
  }
  if (H(), a(t.comma) || a(t.braceR)) {
    r.tokens[r.tokens.length - 1].identifierRole = B.ImportDeclaration, r.tokens[r.tokens.length - 2].isType = !0, r.tokens[r.tokens.length - 1].isType = !0;
    return;
  }
  if (H(), a(t.comma) || a(t.braceR)) {
    r.tokens[r.tokens.length - 3].identifierRole = B.ImportAccess, r.tokens[r.tokens.length - 1].identifierRole = B.ImportDeclaration;
    return;
  }
  H(), r.tokens[r.tokens.length - 3].identifierRole = B.ImportAccess, r.tokens[r.tokens.length - 1].identifierRole = B.ImportDeclaration, r.tokens[r.tokens.length - 4].isType = !0, r.tokens[r.tokens.length - 3].isType = !0, r.tokens[r.tokens.length - 2].isType = !0, r.tokens[r.tokens.length - 1].isType = !0;
}
function Ri() {
  if (H(), a(t.comma) || a(t.braceR)) {
    r.tokens[r.tokens.length - 1].identifierRole = B.ExportAccess;
    return;
  }
  if (H(), a(t.comma) || a(t.braceR)) {
    r.tokens[r.tokens.length - 1].identifierRole = B.ExportAccess, r.tokens[r.tokens.length - 2].isType = !0, r.tokens[r.tokens.length - 1].isType = !0;
    return;
  }
  if (H(), a(t.comma) || a(t.braceR)) {
    r.tokens[r.tokens.length - 3].identifierRole = B.ExportAccess;
    return;
  }
  H(), r.tokens[r.tokens.length - 3].identifierRole = B.ExportAccess, r.tokens[r.tokens.length - 4].isType = !0, r.tokens[r.tokens.length - 3].isType = !0, r.tokens[r.tokens.length - 2].isType = !0, r.tokens[r.tokens.length - 1].isType = !0;
}
function Li() {
  if (D(l._abstract) && Ie() === t._class)
    return r.type = t._abstract, _(), Nt(!0, !0), !0;
  if (D(l._interface)) {
    const e = Q(2);
    return Nn(l._interface, !0), J(e), !0;
  }
  return !1;
}
function Di() {
  if (r.type === t._const) {
    const e = nn();
    if (e.type === t.name && e.contextualKeyword === l._enum)
      return g(t._const), Se(l._enum), r.tokens[r.tokens.length - 1].type = t._enum, ys(), !0;
  }
  return !1;
}
function Oi(e) {
  const n = r.tokens.length;
  gs([
    l._abstract,
    l._readonly,
    l._declare,
    l._static,
    l._override
  ]);
  const s = r.tokens.length;
  if (j1()) {
    const i = e ? n - 1 : n;
    for (let c = i; c < s; c++)
      r.tokens[c].isType = !0;
    return !0;
  }
  return !1;
}
function Fi(e) {
  Si(e) || _e();
}
function Mi() {
  const e = Pe(l._declare);
  e && (r.tokens[r.tokens.length - 1].type = t._declare);
  let n = !1;
  if (a(t.name))
    if (e) {
      const s = Q(2);
      n = Ks(), J(s);
    } else
      n = Ks();
  if (!n)
    if (e) {
      const s = Q(2);
      ze(!0), J(s);
    } else
      ze(!0);
}
function ji(e) {
  if (e && (a(t.lessThan) || a(t.bitShiftL)) && Is(), Pe(l._implements)) {
    r.tokens[r.tokens.length - 1].type = t._implements;
    const n = Q(1);
    B1(), J(n);
  }
}
function qi() {
  Ct();
}
function Bi() {
  Ct();
}
function $i() {
  const e = Q(0);
  Ue() || f(t.bang), Bt(), J(e);
}
function Ui() {
  a(t.colon) && rn();
}
function Vi(e, n) {
  return En ? Hi(e, n) : Wi(e, n);
}
function Hi(e, n) {
  if (!a(t.lessThan))
    return ct(e, n);
  const s = r.snapshot();
  let o = ct(e, n);
  if (r.error)
    r.restoreFromSnapshot(s);
  else
    return o;
  return r.type = t.typeParameterStart, vn(), o = ct(e, n), o || z(), o;
}
function Wi(e, n) {
  if (!a(t.lessThan))
    return ct(e, n);
  const s = r.snapshot();
  vn();
  const o = ct(e, n);
  if (o || z(), r.error)
    r.restoreFromSnapshot(s);
  else
    return o;
  return ct(e, n);
}
function Gi() {
  if (a(t.colon)) {
    const e = r.snapshot();
    Yt(t.colon), Xe() && z(), a(t.arrow) || z(), r.error && r.restoreFromSnapshot(e);
  }
  return f(t.arrow);
}
function Xi() {
  const e = Q(0);
  f(t.question), Bt(), J(e);
}
function zi() {
  (a(t.lessThan) || a(t.bitShiftL)) && Is(), cr();
}
function Ji() {
  let e = !1, n = !1;
  for (; ; ) {
    if (r.pos >= A.length) {
      z("Unterminated JSX contents");
      return;
    }
    const s = A.charCodeAt(r.pos);
    if (s === u.lessThan || s === u.leftCurlyBrace) {
      if (r.pos === r.start) {
        if (s === u.lessThan) {
          r.pos++, X(t.jsxTagStart);
          return;
        }
        T1(s);
        return;
      }
      X(e && !n ? t.jsxEmptyText : t.jsxText);
      return;
    }
    s === u.lineFeed ? e = !0 : s !== u.space && s !== u.carriageReturn && s !== u.tab && (n = !0), r.pos++;
  }
}
function Qi(e) {
  for (r.pos++; ; ) {
    if (r.pos >= A.length) {
      z("Unterminated string constant");
      return;
    }
    if (A.charCodeAt(r.pos) === e) {
      r.pos++;
      break;
    }
    r.pos++;
  }
  X(t.string);
}
function Yi() {
  let e;
  do {
    if (r.pos > A.length) {
      z("Unexpectedly reached the end of input.");
      return;
    }
    e = A.charCodeAt(++r.pos);
  } while (tt[e] || e === u.dash);
  X(t.jsxName);
}
function is() {
  Ye();
}
function V1(e) {
  if (is(), !f(t.colon)) {
    r.tokens[r.tokens.length - 1].identifierRole = e;
    return;
  }
  is();
}
function H1() {
  const e = r.tokens.length;
  V1(B.Access);
  let n = !1;
  for (; a(t.dot); )
    n = !0, Ye(), is();
  if (!n) {
    const s = r.tokens[e], o = A.charCodeAt(s.start);
    o >= u.lowercaseA && o <= u.lowercaseZ && (s.identifierRole = null);
  }
}
function Zi() {
  switch (r.type) {
    case t.braceL:
      _(), Oe(), Ye();
      return;
    case t.jsxTagStart:
      G1(), Ye();
      return;
    case t.string:
      Ye();
      return;
    default:
      z("JSX value should be either an expression or a quoted JSX text");
  }
}
function Ki() {
  g(t.ellipsis), Oe();
}
function ea(e) {
  if (a(t.jsxTagEnd))
    return !1;
  H1(), ne && gi();
  let n = !1;
  for (; !a(t.slash) && !a(t.jsxTagEnd) && !r.error; ) {
    if (f(t.braceL)) {
      n = !0, g(t.ellipsis), Fe(), Ye();
      continue;
    }
    n && r.end - r.start === 3 && A.charCodeAt(r.start) === u.lowercaseK && A.charCodeAt(r.start + 1) === u.lowercaseE && A.charCodeAt(r.start + 2) === u.lowercaseY && (r.tokens[e].jsxRole = et.KeyAfterPropSpread), V1(B.ObjectKey), a(t.eq) && (Ye(), Zi());
  }
  const s = a(t.slash);
  return s && Ye(), s;
}
function ta() {
  a(t.jsxTagEnd) || H1();
}
function W1() {
  const e = r.tokens.length - 1;
  r.tokens[e].jsxRole = et.NoChildren;
  let n = 0;
  if (!ea(e))
    for (jt(); ; )
      switch (r.type) {
        case t.jsxTagStart:
          if (Ye(), a(t.slash)) {
            Ye(), ta(), r.tokens[e].jsxRole !== et.KeyAfterPropSpread && (n === 1 ? r.tokens[e].jsxRole = et.OneChild : n > 1 && (r.tokens[e].jsxRole = et.StaticChildren));
            return;
          }
          n++, W1(), jt();
          break;
        case t.jsxText:
          n++, jt();
          break;
        case t.jsxEmptyText:
          jt();
          break;
        case t.braceL:
          _(), a(t.ellipsis) ? (Ki(), jt(), n += 2) : (a(t.braceR) || (n++, Oe()), jt());
          break;
        default:
          z();
          return;
      }
}
function G1() {
  Ye(), W1();
}
function Ye() {
  r.tokens.push(new Sn()), I1(), r.start = r.pos;
  const e = A.charCodeAt(r.pos);
  if (tn[e])
    Yi();
  else if (e === u.quotationMark || e === u.apostrophe)
    Qi(e);
  else
    switch (++r.pos, e) {
      case u.greaterThan:
        X(t.jsxTagEnd);
        break;
      case u.lessThan:
        X(t.jsxTagStart);
        break;
      case u.slash:
        X(t.slash);
        break;
      case u.equalsTo:
        X(t.eq);
        break;
      case u.leftCurlyBrace:
        X(t.braceL);
        break;
      case u.dot:
        X(t.dot);
        break;
      case u.colon:
        X(t.colon);
        break;
      default:
        z();
    }
}
function jt() {
  r.tokens.push(new Sn()), r.start = r.pos, Ji();
}
function na(e) {
  if (a(t.question)) {
    const n = Ie();
    if (n === t.colon || n === t.comma || n === t.parenR)
      return;
  }
  X1(e);
}
function sa() {
  k1(t.question), a(t.colon) && (ne ? rn() : ie && Pt());
}
class ra {
  constructor(n) {
    this.stop = n;
  }
}
function Oe(e = !1) {
  if (Fe(e), a(t.comma))
    for (; f(t.comma); )
      Fe(e);
}
function Fe(e = !1, n = !1) {
  return ne ? Vi(e, n) : ie ? lc(e, n) : ct(e, n);
}
function ct(e, n) {
  if (a(t._yield))
    return xa(), !1;
  (a(t.parenL) || a(t.name) || a(t._yield)) && (r.potentialArrowAt = r.start);
  const s = oa(e);
  return n && Es(), r.type & t.IS_ASSIGN ? (_(), Fe(e), !1) : s;
}
function oa(e) {
  return aa(e) ? !0 : (ia(e), !1);
}
function ia(e) {
  ne || ie ? na(e) : X1(e);
}
function X1(e) {
  f(t.question) && (Fe(), g(t.colon), Fe(e));
}
function aa(e) {
  const n = r.tokens.length;
  return on() ? !0 : (fn(n, -1, e), !1);
}
function fn(e, n, s) {
  if (ne && (t._in & t.PRECEDENCE_MASK) > n && !Ue() && (Pe(l._as) || Pe(l._satisfies))) {
    const i = Q(1);
    be(), J(i), w1(), fn(e, n, s);
    return;
  }
  const o = r.type & t.PRECEDENCE_MASK;
  if (o > 0 && (!s || !a(t._in)) && o > n) {
    const i = r.type;
    _(), i === t.nullishCoalescing && (r.tokens[r.tokens.length - 1].nullishStartIndex = e);
    const c = r.tokens.length;
    on(), fn(c, i & t.IS_RIGHT_ASSOCIATIVE ? o - 1 : o, s), i === t.nullishCoalescing && (r.tokens[e].numNullishCoalesceStarts++, r.tokens[r.tokens.length - 1].numNullishCoalesceEnds++), fn(e, n, s);
  }
}
function on() {
  if (ne && !En && f(t.lessThan))
    return ki(), !1;
  if (D(l._module) && _1() === u.leftCurlyBrace && !h1())
    return Ia(), !1;
  if (r.type & t.IS_PREFIX)
    return _(), on(), !1;
  if (z1())
    return !0;
  for (; r.type & t.IS_POSTFIX && !Xe(); )
    r.type === t.preIncDec && (r.type = t.postIncDec), _();
  return !1;
}
function z1() {
  const e = r.tokens.length;
  return ft() ? !0 : (bs(e), r.tokens.length > e && r.tokens[e].isOptionalChainStart && (r.tokens[r.tokens.length - 1].isOptionalChainEnd = !0), !1);
}
function bs(e, n = !1) {
  ie ? hc(e, n) : J1(e, n);
}
function J1(e, n = !1) {
  const s = new ra(!1);
  do
    ca(e, n, s);
  while (!s.stop && !r.error);
}
function ca(e, n, s) {
  ne ? Ni(e, n, s) : ie ? Wa(e, n, s) : ws(e, n, s);
}
function ws(e, n, s) {
  if (!n && f(t.doubleColon))
    Ts(), s.stop = !0, bs(e, n);
  else if (a(t.questionDot)) {
    if (r.tokens[e].isOptionalChainStart = !0, n && Ie() === t.parenL) {
      s.stop = !0;
      return;
    }
    _(), r.tokens[r.tokens.length - 1].subscriptStartIndex = e, f(t.bracketL) ? (Oe(), g(t.bracketR)) : f(t.parenL) ? _t() : xn();
  } else if (f(t.dot))
    r.tokens[r.tokens.length - 1].subscriptStartIndex = e, xn();
  else if (f(t.bracketL))
    r.tokens[r.tokens.length - 1].subscriptStartIndex = e, Oe(), g(t.bracketR);
  else if (!n && a(t.parenL))
    if (Q1()) {
      const o = r.snapshot(), i = r.tokens.length;
      _(), r.tokens[r.tokens.length - 1].subscriptStartIndex = e;
      const c = Jt();
      r.tokens[r.tokens.length - 1].contextId = c, _t(), r.tokens[r.tokens.length - 1].contextId = c, la() && (r.restoreFromSnapshot(o), s.stop = !0, r.scopeDepth++, Ut(), ua(i));
    } else {
      _(), r.tokens[r.tokens.length - 1].subscriptStartIndex = e;
      const o = Jt();
      r.tokens[r.tokens.length - 1].contextId = o, _t(), r.tokens[r.tokens.length - 1].contextId = o;
    }
  else a(t.backQuote) ? Ss() : s.stop = !0;
}
function Q1() {
  return r.tokens[r.tokens.length - 1].contextualKeyword === l._async && !Xe();
}
function _t() {
  let e = !0;
  for (; !f(t.parenR) && !r.error; ) {
    if (e)
      e = !1;
    else if (g(t.comma), f(t.parenR))
      break;
    er(!1);
  }
}
function la() {
  return a(t.colon) || a(t.arrow);
}
function ua(e) {
  ne ? Ui() : ie && cc(), g(t.arrow), Kt(e);
}
function Ts() {
  const e = r.tokens.length;
  ft(), bs(e, !0);
}
function ft() {
  if (f(t.modulo))
    return H(), !1;
  if (a(t.jsxText) || a(t.jsxEmptyText))
    return qt(), !1;
  if (a(t.lessThan) && En)
    return r.type = t.jsxTagStart, G1(), _(), !1;
  const e = r.potentialArrowAt === r.start;
  switch (r.type) {
    case t.slash:
    case t.assign:
      Yr();
    case t._super:
    case t._this:
    case t.regexp:
    case t.num:
    case t.bigint:
    case t.decimal:
    case t.string:
    case t._null:
    case t._true:
    case t._false:
      return _(), !1;
    case t._import:
      return _(), a(t.dot) && (r.tokens[r.tokens.length - 1].type = t.name, _(), H()), !1;
    case t.name: {
      const n = r.tokens.length, s = r.start, o = r.contextualKeyword;
      return H(), o === l._await ? (ya(), !1) : o === l._async && a(t._function) && !Xe() ? (_(), vt(s, !1), !1) : e && o === l._async && !Xe() && a(t.name) ? (r.scopeDepth++, xt(!1), g(t.arrow), Kt(n), !0) : a(t._do) && !Xe() ? (_(), yt(), !1) : e && !Xe() && a(t.arrow) ? (r.scopeDepth++, ds(!1), g(t.arrow), Kt(n), !0) : (r.tokens[r.tokens.length - 1].identifierRole = B.Access, !1);
    }
    case t._do:
      return _(), yt(), !1;
    case t.parenL:
      return Y1(e);
    case t.bracketL:
      return _(), K1(t.bracketR, !0), !1;
    case t.braceL:
      return As(!1, !1), !1;
    case t._function:
      return ha(), !1;
    case t.at:
      Fs();
    case t._class:
      return Nt(!1), !1;
    case t._new:
      return pa(), !1;
    case t.backQuote:
      return Ss(), !1;
    case t.doubleColon:
      return _(), Ts(), !1;
    case t.hash: {
      const n = _1();
      return tn[n] || n === u.backslash ? xn() : _(), !1;
    }
    default:
      return z(), !1;
  }
}
function xn() {
  f(t.hash), H();
}
function ha() {
  const e = r.start;
  H(), f(t.dot) && H(), vt(e, !1);
}
function qt() {
  _();
}
function Cn() {
  g(t.parenL), Oe(), g(t.parenR);
}
function Y1(e) {
  const n = r.snapshot(), s = r.tokens.length;
  g(t.parenL);
  let o = !0;
  for (; !a(t.parenR) && !r.error; ) {
    if (o)
      o = !1;
    else if (g(t.comma), a(t.parenR))
      break;
    if (a(t.ellipsis)) {
      L1(
        !1
        /* isBlockScope */
      ), Es();
      break;
    } else
      Fe(!1, !0);
  }
  return g(t.parenR), e && fa() && as() ? (r.restoreFromSnapshot(n), r.scopeDepth++, Ut(), as(), Kt(s), r.error ? (r.restoreFromSnapshot(n), Y1(!1), !1) : !0) : !1;
}
function fa() {
  return a(t.colon) || !Xe();
}
function as() {
  return ne ? Gi() : ie ? uc() : f(t.arrow);
}
function Es() {
  (ne || ie) && sa();
}
function pa() {
  if (g(t._new), f(t.dot)) {
    H();
    return;
  }
  ma(), ie && Ga(), f(t.parenL) && K1(t.parenR);
}
function ma() {
  Ts(), f(t.questionDot);
}
function Ss() {
  for (kt(), kt(); !a(t.backQuote) && !r.error; )
    g(t.dollarBraceL), Oe(), kt(), kt();
  _();
}
function As(e, n) {
  const s = Jt();
  let o = !0;
  for (_(), r.tokens[r.tokens.length - 1].contextId = s; !f(t.braceR) && !r.error; ) {
    if (o)
      o = !1;
    else if (g(t.comma), f(t.braceR))
      break;
    let i = !1;
    if (a(t.ellipsis)) {
      const c = r.tokens.length;
      if (R1(), e && (r.tokens.length === c + 2 && ds(n), f(t.braceR)))
        break;
      continue;
    }
    e || (i = f(t.star)), !e && D(l._async) ? (i && z(), H(), a(t.colon) || a(t.parenL) || a(t.braceR) || a(t.eq) || a(t.comma) || (a(t.star) && (_(), i = !0), Zt(s))) : Zt(s), _a(e, n, s);
  }
  r.tokens[r.tokens.length - 1].contextId = s;
}
function da(e) {
  return !e && (a(t.string) || // get "string"() {}
  a(t.num) || // get 1() {}
  a(t.bracketL) || // get ["string"]() {}
  a(t.name) || // get foo() {}
  !!(r.type & t.IS_KEYWORD));
}
function ka(e, n) {
  const s = r.start;
  return a(t.parenL) ? (e && z(), cs(
    s,
    /* isConstructor */
    !1
  ), !0) : da(e) ? (Zt(n), cs(
    s,
    /* isConstructor */
    !1
  ), !0) : !1;
}
function ga(e, n) {
  if (f(t.colon)) {
    e ? _n(n) : Fe(!1);
    return;
  }
  let s;
  e ? r.scopeDepth === 0 ? s = B.ObjectShorthandTopLevelDeclaration : n ? s = B.ObjectShorthandBlockScopedDeclaration : s = B.ObjectShorthandFunctionScopedDeclaration : s = B.ObjectShorthand, r.tokens[r.tokens.length - 1].identifierRole = s, _n(n, !0);
}
function _a(e, n, s) {
  ne ? qi() : ie && nc(), ka(e, s) || ga(e, n);
}
function Zt(e) {
  ie && Os(), f(t.bracketL) ? (r.tokens[r.tokens.length - 1].contextId = e, Fe(), g(t.bracketR), r.tokens[r.tokens.length - 1].contextId = e) : (a(t.num) || a(t.string) || a(t.bigint) || a(t.decimal) ? ft() : xn(), r.tokens[r.tokens.length - 1].identifierRole = B.ObjectKey, r.tokens[r.tokens.length - 1].contextId = e);
}
function cs(e, n) {
  const s = Jt();
  r.scopeDepth++;
  const o = r.tokens.length;
  Ut(n, s), Z1(e, s);
  const c = r.tokens.length;
  r.scopes.push(new ut(o, c, !0)), r.scopeDepth--;
}
function Kt(e) {
  an(!0);
  const n = r.tokens.length;
  r.scopes.push(new ut(e, n, !0)), r.scopeDepth--;
}
function Z1(e, n = 0) {
  ne ? vi(e, n) : ie ? Ha(n) : an(!1, n);
}
function an(e, n = 0) {
  e && !a(t.braceL) ? Fe() : yt(!0, n);
}
function K1(e, n = !1) {
  let s = !0;
  for (; !f(e) && !r.error; ) {
    if (s)
      s = !1;
    else if (g(t.comma), f(e)) break;
    er(n);
  }
}
function er(e) {
  e && a(t.comma) || (a(t.ellipsis) ? (R1(), Es()) : a(t.question) ? _() : Fe(!1, !0));
}
function H() {
  _(), r.tokens[r.tokens.length - 1].type = t.name;
}
function ya() {
  on();
}
function xa() {
  _(), !a(t.semi) && !Xe() && (f(t.star), Fe());
}
function Ia() {
  Se(l._module), g(t.braceL), Rn(t.braceR);
}
function ba(e) {
  return (e.type === t.name || !!(e.type & t.IS_KEYWORD)) && e.contextualKeyword !== l._from;
}
function ht(e) {
  const n = Q(0);
  g(e || t.colon), Ge(), J(n);
}
function e1() {
  g(t.modulo), Se(l._checks), f(t.parenL) && (Oe(), g(t.parenR));
}
function vs() {
  const e = Q(0);
  g(t.colon), a(t.modulo) ? e1() : (Ge(), a(t.modulo) && e1()), J(e);
}
function wa() {
  _(), Ns(
    /* isClass */
    !0
  );
}
function Ta() {
  _(), H(), a(t.lessThan) && st(), g(t.parenL), us(), g(t.parenR), vs(), _e();
}
function ls() {
  a(t._class) ? wa() : a(t._function) ? Ta() : a(t._var) ? Ea() : Pe(l._module) ? f(t.dot) ? va() : Sa() : D(l._type) ? Na() : D(l._opaque) ? Ca() : D(l._interface) ? Pa() : a(t._export) ? Aa() : z();
}
function Ea() {
  _(), rr(), _e();
}
function Sa() {
  for (a(t.string) ? ft() : H(), g(t.braceL); !a(t.braceR) && !r.error; )
    a(t._import) ? (_(), mr()) : z();
  g(t.braceR);
}
function Aa() {
  g(t._export), f(t._default) ? a(t._function) || a(t._class) ? ls() : (Ge(), _e()) : a(t._var) || // declare export var ...
  a(t._function) || // declare export function ...
  a(t._class) || // declare export class ...
  D(l._opaque) ? ls() : a(t.star) || // declare export * from ''
  a(t.braceL) || // declare export {} ...
  D(l._interface) || // declare export interface ...
  D(l._type) || // declare export type ...
  D(l._opaque) ? fr() : z();
}
function va() {
  Se(l._exports), Pt(), _e();
}
function Na() {
  _(), Ps();
}
function Ca() {
  _(), Rs(!0);
}
function Pa() {
  _(), Ns();
}
function Ns(e = !1) {
  if (Pn(), a(t.lessThan) && st(), f(t._extends))
    do
      pn();
    while (!e && f(t.comma));
  if (D(l._mixins)) {
    _();
    do
      pn();
    while (f(t.comma));
  }
  if (D(l._implements)) {
    _();
    do
      pn();
    while (f(t.comma));
  }
  In(e, !1, e);
}
function pn() {
  tr(!1), a(t.lessThan) && At();
}
function Cs() {
  Ns();
}
function Pn() {
  H();
}
function Ps() {
  Pn(), a(t.lessThan) && st(), ht(t.eq), _e();
}
function Rs(e) {
  Se(l._type), Pn(), a(t.lessThan) && st(), a(t.colon) && ht(t.colon), e || ht(t.eq), _e();
}
function Ra() {
  Os(), rr(), f(t.eq) && Ge();
}
function st() {
  const e = Q(0);
  a(t.lessThan) || a(t.typeParameterStart) ? _() : z();
  do
    Ra(), a(t.greaterThan) || g(t.comma);
  while (!a(t.greaterThan) && !r.error);
  g(t.greaterThan), J(e);
}
function At() {
  const e = Q(0);
  for (g(t.lessThan); !a(t.greaterThan) && !r.error; )
    Ge(), a(t.greaterThan) || g(t.comma);
  g(t.greaterThan), J(e);
}
function La() {
  if (Se(l._interface), f(t._extends))
    do
      pn();
    while (f(t.comma));
  In(!1, !1, !1);
}
function Ls() {
  a(t.num) || a(t.string) ? ft() : H();
}
function Da() {
  Ie() === t.colon ? (Ls(), ht()) : Ge(), g(t.bracketR), ht();
}
function Oa() {
  Ls(), g(t.bracketR), g(t.bracketR), a(t.lessThan) || a(t.parenL) ? Ds() : (f(t.question), ht());
}
function Ds() {
  for (a(t.lessThan) && st(), g(t.parenL); !a(t.parenR) && !a(t.ellipsis) && !r.error; )
    bn(), a(t.parenR) || g(t.comma);
  f(t.ellipsis) && bn(), g(t.parenR), ht();
}
function Fa() {
  Ds();
}
function In(e, n, s) {
  let o;
  for (n && a(t.braceBarL) ? (g(t.braceBarL), o = t.braceBarR) : (g(t.braceL), o = t.braceR); !a(o) && !r.error; ) {
    if (s && D(l._proto)) {
      const i = Ie();
      i !== t.colon && i !== t.question && (_(), e = !1);
    }
    if (e && D(l._static)) {
      const i = Ie();
      i !== t.colon && i !== t.question && _();
    }
    if (Os(), f(t.bracketL))
      f(t.bracketL) ? Oa() : Da();
    else if (a(t.parenL) || a(t.lessThan))
      Fa();
    else {
      if (D(l._get) || D(l._set)) {
        const i = Ie();
        (i === t.name || i === t.string || i === t.num) && _();
      }
      Ma();
    }
    ja();
  }
  g(o);
}
function Ma() {
  if (a(t.ellipsis)) {
    if (g(t.ellipsis), f(t.comma) || f(t.semi), a(t.braceR))
      return;
    Ge();
  } else
    Ls(), a(t.lessThan) || a(t.parenL) ? Ds() : (f(t.question), ht());
}
function ja() {
  !f(t.semi) && !f(t.comma) && !a(t.braceR) && !a(t.braceBarR) && z();
}
function tr(e) {
  for (e || H(); f(t.dot); )
    H();
}
function qa() {
  tr(!0), a(t.lessThan) && At();
}
function Ba() {
  g(t._typeof), nr();
}
function $a() {
  for (g(t.bracketL); r.pos < A.length && !a(t.bracketR) && (Ge(), !a(t.bracketR)); )
    g(t.comma);
  g(t.bracketR);
}
function bn() {
  const e = Ie();
  e === t.colon || e === t.question ? (H(), f(t.question), ht()) : Ge();
}
function us() {
  for (; !a(t.parenR) && !a(t.ellipsis) && !r.error; )
    bn(), a(t.parenR) || g(t.comma);
  f(t.ellipsis) && bn();
}
function nr() {
  let e = !1;
  const n = r.noAnonFunctionType;
  switch (r.type) {
    case t.name: {
      if (D(l._interface)) {
        La();
        return;
      }
      H(), qa();
      return;
    }
    case t.braceL:
      In(!1, !1, !1);
      return;
    case t.braceBarL:
      In(!1, !0, !1);
      return;
    case t.bracketL:
      $a();
      return;
    case t.lessThan:
      st(), g(t.parenL), us(), g(t.parenR), g(t.arrow), Ge();
      return;
    case t.parenL:
      if (_(), !a(t.parenR) && !a(t.ellipsis))
        if (a(t.name)) {
          const s = Ie();
          e = s !== t.question && s !== t.colon;
        } else
          e = !0;
      if (e)
        if (r.noAnonFunctionType = !1, Ge(), r.noAnonFunctionType = n, r.noAnonFunctionType || !(a(t.comma) || a(t.parenR) && Ie() === t.arrow)) {
          g(t.parenR);
          return;
        } else
          f(t.comma);
      us(), g(t.parenR), g(t.arrow), Ge();
      return;
    case t.minus:
      _(), qt();
      return;
    case t.string:
    case t.num:
    case t._true:
    case t._false:
    case t._null:
    case t._this:
    case t._void:
    case t.star:
      _();
      return;
    default:
      if (r.type === t._typeof) {
        Ba();
        return;
      } else if (r.type & t.IS_KEYWORD) {
        _(), r.tokens[r.tokens.length - 1].type = t.name;
        return;
      }
  }
  z();
}
function Ua() {
  for (nr(); !Xe() && (a(t.bracketL) || a(t.questionDot)); )
    f(t.questionDot), g(t.bracketL), f(t.bracketR) || (Ge(), g(t.bracketR));
}
function sr() {
  f(t.question) ? sr() : Ua();
}
function t1() {
  sr(), !r.noAnonFunctionType && f(t.arrow) && Ge();
}
function n1() {
  for (f(t.bitwiseAND), t1(); f(t.bitwiseAND); )
    t1();
}
function Va() {
  for (f(t.bitwiseOR), n1(); f(t.bitwiseOR); )
    n1();
}
function Ge() {
  Va();
}
function Pt() {
  ht();
}
function rr() {
  H(), a(t.colon) && Pt();
}
function Os() {
  (a(t.plus) || a(t.minus)) && (_(), r.tokens[r.tokens.length - 1].isType = !0);
}
function Ha(e) {
  a(t.colon) && vs(), an(!1, e);
}
function Wa(e, n, s) {
  if (a(t.questionDot) && Ie() === t.lessThan) {
    if (n) {
      s.stop = !0;
      return;
    }
    _(), At(), g(t.parenL), _t();
    return;
  } else if (!n && a(t.lessThan)) {
    const o = r.snapshot();
    if (At(), g(t.parenL), _t(), r.error)
      r.restoreFromSnapshot(o);
    else
      return;
  }
  ws(e, n, s);
}
function Ga() {
  if (a(t.lessThan)) {
    const e = r.snapshot();
    At(), r.error && r.restoreFromSnapshot(e);
  }
}
function Xa() {
  if (a(t.name) && r.contextualKeyword === l._interface) {
    const e = Q(0);
    return _(), Cs(), J(e), !0;
  } else if (D(l._enum))
    return or(), !0;
  return !1;
}
function za() {
  return D(l._enum) ? (or(), !0) : !1;
}
function Ja(e) {
  if (e === l._declare) {
    if (a(t._class) || a(t.name) || a(t._function) || a(t._var) || a(t._export)) {
      const n = Q(1);
      ls(), J(n);
    }
  } else if (a(t.name)) {
    if (e === l._interface) {
      const n = Q(1);
      Cs(), J(n);
    } else if (e === l._type) {
      const n = Q(1);
      Ps(), J(n);
    } else if (e === l._opaque) {
      const n = Q(1);
      Rs(!1), J(n);
    }
  }
  _e();
}
function Qa() {
  return D(l._type) || D(l._interface) || D(l._opaque) || D(l._enum);
}
function Ya() {
  return a(t.name) && (r.contextualKeyword === l._type || r.contextualKeyword === l._interface || r.contextualKeyword === l._opaque || r.contextualKeyword === l._enum);
}
function Za() {
  if (D(l._type)) {
    const e = Q(1);
    _(), a(t.braceL) ? (Ms(), en()) : Ps(), J(e);
  } else if (D(l._opaque)) {
    const e = Q(1);
    _(), Rs(!1), J(e);
  } else if (D(l._interface)) {
    const e = Q(1);
    _(), Cs(), J(e);
  } else
    ze(!0);
}
function Ka() {
  return a(t.star) || D(l._type) && Ie() === t.star;
}
function ec() {
  if (Pe(l._type)) {
    const e = Q(2);
    hs(), J(e);
  } else
    hs();
}
function tc(e) {
  if (e && a(t.lessThan) && At(), D(l._implements)) {
    const n = Q(0);
    _(), r.tokens[r.tokens.length - 1].type = t._implements;
    do
      Pn(), a(t.lessThan) && At();
    while (f(t.comma));
    J(n);
  }
}
function nc() {
  a(t.lessThan) && (st(), a(t.parenL) || z());
}
function sc() {
  const e = Q(0);
  f(t.question), a(t.colon) && Pt(), J(e);
}
function rc() {
  if (a(t._typeof) || D(l._type)) {
    const e = nn();
    (ba(e) || e.type === t.braceL || e.type === t.star) && _();
  }
}
function oc() {
  const e = r.contextualKeyword === l._type || r.type === t._typeof;
  e ? _() : H(), D(l._as) && !fs(l._as) ? (H(), e && !a(t.name) && !(r.type & t.IS_KEYWORD) || H()) : (e && (a(t.name) || r.type & t.IS_KEYWORD) && H(), Pe(l._as) && H());
}
function ic() {
  if (a(t.lessThan)) {
    const e = Q(0);
    st(), J(e);
  }
}
function ac() {
  a(t.colon) && Pt();
}
function cc() {
  if (a(t.colon)) {
    const e = r.noAnonFunctionType;
    r.noAnonFunctionType = !0, Pt(), r.noAnonFunctionType = e;
  }
}
function lc(e, n) {
  if (a(t.lessThan)) {
    const s = r.snapshot();
    let o = ct(e, n);
    if (r.error)
      r.restoreFromSnapshot(s), r.type = t.typeParameterStart;
    else
      return o;
    const i = Q(0);
    if (st(), J(i), o = ct(e, n), o)
      return !0;
    z();
  }
  return ct(e, n);
}
function uc() {
  if (a(t.colon)) {
    const e = Q(0), n = r.snapshot(), s = r.noAnonFunctionType;
    r.noAnonFunctionType = !0, vs(), r.noAnonFunctionType = s, Xe() && z(), a(t.arrow) || z(), r.error && r.restoreFromSnapshot(n), J(e);
  }
  return f(t.arrow);
}
function hc(e, n = !1) {
  if (r.tokens[r.tokens.length - 1].contextualKeyword === l._async && a(t.lessThan)) {
    const s = r.snapshot();
    if (fc() && !r.error)
      return;
    r.restoreFromSnapshot(s);
  }
  J1(e, n);
}
function fc() {
  r.scopeDepth++;
  const e = r.tokens.length;
  return Ut(), as() ? (Kt(e), !0) : !1;
}
function or() {
  Se(l._enum), r.tokens[r.tokens.length - 1].type = t._enum, H(), pc();
}
function pc() {
  Pe(l._of) && _(), g(t.braceL), mc(), g(t.braceR);
}
function mc() {
  for (; !a(t.braceR) && !r.error && !f(t.ellipsis); )
    dc(), a(t.braceR) || g(t.comma);
}
function dc() {
  H(), f(t.eq) && _();
}
function kc() {
  if (Rn(t.eof), r.scopes.push(new ut(0, r.tokens.length, !0)), r.scopeDepth !== 0)
    throw new Error(`Invalid scope depth at end of file: ${r.scopeDepth}`);
  return new nl(r.tokens, r.scopes);
}
function ze(e) {
  ie && Xa() || (a(t.at) && Fs(), gc(e));
}
function gc(e) {
  if (ne && Di())
    return;
  const n = r.type;
  switch (n) {
    case t._break:
    case t._continue:
      yc();
      return;
    case t._debugger:
      xc();
      return;
    case t._do:
      Ic();
      return;
    case t._for:
      bc();
      return;
    case t._function:
      if (Ie() === t.dot) break;
      e || z(), Ec();
      return;
    case t._class:
      e || z(), Nt(!0);
      return;
    case t._if:
      Sc();
      return;
    case t._return:
      Ac();
      return;
    case t._switch:
      vc();
      return;
    case t._throw:
      Nc();
      return;
    case t._try:
      Pc();
      return;
    case t._let:
    case t._const:
      e || z();
    case t._var:
      mn(n !== t._var);
      return;
    case t._while:
      Rc();
      return;
    case t.braceL:
      yt();
      return;
    case t.semi:
      Lc();
      return;
    case t._export:
    case t._import: {
      const i = Ie();
      if (i === t.parenL || i === t.dot)
        break;
      _(), n === t._import ? mr() : fr();
      return;
    }
    case t.name:
      if (r.contextualKeyword === l._async) {
        const i = r.start, c = r.snapshot();
        if (_(), a(t._function) && !Xe()) {
          g(t._function), vt(i, !0);
          return;
        } else
          r.restoreFromSnapshot(c);
      } else if (r.contextualKeyword === l._using && !h1() && // Statements like `using[0]` and `using in foo` aren't actual using
      // declarations.
      Ie() === t.name) {
        mn(!0);
        return;
      } else if (ir()) {
        Se(l._await), mn(!0);
        return;
      }
  }
  const s = r.tokens.length;
  Oe();
  let o = null;
  if (r.tokens.length === s + 1) {
    const i = r.tokens[r.tokens.length - 1];
    i.type === t.name && (o = i.contextualKeyword);
  }
  if (o == null) {
    _e();
    return;
  }
  f(t.colon) ? Dc() : Oc(o);
}
function ir() {
  if (!D(l._await))
    return !1;
  const e = r.snapshot();
  return _(), !D(l._using) || Ue() || (_(), !a(t.name) || Ue()) ? (r.restoreFromSnapshot(e), !1) : (r.restoreFromSnapshot(e), !0);
}
function Fs() {
  for (; a(t.at); )
    ar();
}
function ar() {
  if (_(), f(t.parenL))
    Oe(), g(t.parenR);
  else {
    for (H(); f(t.dot); )
      H();
    _c();
  }
}
function _c() {
  ne ? zi() : cr();
}
function cr() {
  f(t.parenL) && _t();
}
function yc() {
  _(), it() || (H(), _e());
}
function xc() {
  _(), _e();
}
function Ic() {
  _(), ze(!1), g(t._while), Cn(), f(t.semi);
}
function bc() {
  r.scopeDepth++;
  const e = r.tokens.length;
  Tc();
  const n = r.tokens.length;
  r.scopes.push(new ut(e, n, !1)), r.scopeDepth--;
}
function wc() {
  return !(!D(l._using) || fs(l._of));
}
function Tc() {
  _();
  let e = !1;
  if (D(l._await) && (e = !0, _()), g(t.parenL), a(t.semi)) {
    e && z(), Zn();
    return;
  }
  const n = ir();
  if (n || a(t._var) || a(t._let) || a(t._const) || wc()) {
    if (n && Se(l._await), _(), lr(!0, r.type !== t._var), a(t._in) || D(l._of)) {
      s1(e);
      return;
    }
    Zn();
    return;
  }
  if (Oe(!0), a(t._in) || D(l._of)) {
    s1(e);
    return;
  }
  e && z(), Zn();
}
function Ec() {
  const e = r.start;
  _(), vt(e, !0);
}
function Sc() {
  _(), Cn(), ze(!1), f(t._else) && ze(!1);
}
function Ac() {
  _(), it() || (Oe(), _e());
}
function vc() {
  _(), Cn(), r.scopeDepth++;
  const e = r.tokens.length;
  for (g(t.braceL); !a(t.braceR) && !r.error; )
    if (a(t._case) || a(t._default)) {
      const s = a(t._case);
      _(), s && Oe(), g(t.colon);
    } else
      ze(!0);
  _();
  const n = r.tokens.length;
  r.scopes.push(new ut(e, n, !1)), r.scopeDepth--;
}
function Nc() {
  _(), Oe(), _e();
}
function Cc() {
  An(
    !0
    /* isBlockScope */
  ), ne && Bt();
}
function Pc() {
  if (_(), yt(), a(t._catch)) {
    _();
    let e = null;
    if (a(t.parenL) && (r.scopeDepth++, e = r.tokens.length, g(t.parenL), Cc(), g(t.parenR)), yt(), e != null) {
      const n = r.tokens.length;
      r.scopes.push(new ut(e, n, !1)), r.scopeDepth--;
    }
  }
  f(t._finally) && yt();
}
function mn(e) {
  _(), lr(!1, e), _e();
}
function Rc() {
  _(), Cn(), ze(!1);
}
function Lc() {
  _();
}
function Dc() {
  ze(!0);
}
function Oc(e) {
  ne ? Fi(e) : ie ? Ja(e) : _e();
}
function yt(e = !1, n = 0) {
  const s = r.tokens.length;
  r.scopeDepth++, g(t.braceL), n && (r.tokens[r.tokens.length - 1].contextId = n), Rn(t.braceR), n && (r.tokens[r.tokens.length - 1].contextId = n);
  const o = r.tokens.length;
  r.scopes.push(new ut(s, o, e)), r.scopeDepth--;
}
function Rn(e) {
  for (; !f(e) && !r.error; )
    ze(!0);
}
function Zn() {
  g(t.semi), a(t.semi) || Oe(), g(t.semi), a(t.parenR) || Oe(), g(t.parenR), ze(!1);
}
function s1(e) {
  e ? Pe(l._of) : _(), Oe(), g(t.parenR), ze(!1);
}
function lr(e, n) {
  for (; ; ) {
    if (Fc(n), f(t.eq)) {
      const s = r.tokens.length - 1;
      Fe(e), r.tokens[s].rhsEndIndex = r.tokens.length;
    }
    if (!f(t.comma))
      break;
  }
}
function Fc(e) {
  An(e), ne ? $i() : ie && ac();
}
function vt(e, n, s = !1) {
  a(t.star) && _(), n && !s && !a(t.name) && !a(t._yield) && z();
  let o = null;
  a(t.name) && (n || (o = r.tokens.length, r.scopeDepth++), xt(!1));
  const i = r.tokens.length;
  r.scopeDepth++, Ut(), Z1(e);
  const c = r.tokens.length;
  r.scopes.push(new ut(i, c, !0)), r.scopeDepth--, o !== null && (r.scopes.push(new ut(o, c, !0)), r.scopeDepth--);
}
function Ut(e = !1, n = 0) {
  ne ? Bi() : ie && ic(), g(t.parenL), n && (r.tokens[r.tokens.length - 1].contextId = n), ks(
    t.parenR,
    !1,
    !1,
    e,
    n
  ), n && (r.tokens[r.tokens.length - 1].contextId = n);
}
function Nt(e, n = !1) {
  const s = Jt();
  _(), r.tokens[r.tokens.length - 1].contextId = s, r.tokens[r.tokens.length - 1].isExpression = !e;
  let o = null;
  e || (o = r.tokens.length, r.scopeDepth++), Bc(e, n), $c();
  const i = r.tokens.length;
  if (Mc(s), !r.error && (r.tokens[i].contextId = s, r.tokens[r.tokens.length - 1].contextId = s, o !== null)) {
    const c = r.tokens.length;
    r.scopes.push(new ut(o, c, !1)), r.scopeDepth--;
  }
}
function ur() {
  return a(t.eq) || a(t.semi) || a(t.braceR) || a(t.bang) || a(t.colon);
}
function hr() {
  return a(t.parenL) || a(t.lessThan);
}
function Mc(e) {
  for (g(t.braceL); !f(t.braceR) && !r.error; ) {
    if (f(t.semi))
      continue;
    if (a(t.at)) {
      ar();
      continue;
    }
    const n = r.start;
    jc(n, e);
  }
}
function jc(e, n) {
  ne && gs([
    l._declare,
    l._public,
    l._protected,
    l._private,
    l._override
  ]);
  let s = !1;
  if (a(t.name) && r.contextualKeyword === l._static) {
    if (H(), hr()) {
      Gt(
        e,
        /* isConstructor */
        !1
      );
      return;
    } else if (ur()) {
      dn();
      return;
    }
    if (r.tokens[r.tokens.length - 1].type = t._static, s = !0, a(t.braceL)) {
      r.tokens[r.tokens.length - 1].contextId = n, yt();
      return;
    }
  }
  qc(e, s, n);
}
function qc(e, n, s) {
  if (ne && Oi(n))
    return;
  if (f(t.star)) {
    Wt(s), Gt(
      e,
      /* isConstructor */
      !1
    );
    return;
  }
  Wt(s);
  let o = !1;
  const i = r.tokens[r.tokens.length - 1];
  i.contextualKeyword === l._constructor && (o = !0), r1(), hr() ? Gt(e, o) : ur() ? dn() : i.contextualKeyword === l._async && !it() ? (r.tokens[r.tokens.length - 1].type = t._async, a(t.star) && _(), Wt(s), r1(), Gt(
    e,
    !1
    /* isConstructor */
  )) : (i.contextualKeyword === l._get || i.contextualKeyword === l._set) && !(it() && a(t.star)) ? (i.contextualKeyword === l._get ? r.tokens[r.tokens.length - 1].type = t._get : r.tokens[r.tokens.length - 1].type = t._set, Wt(s), Gt(
    e,
    /* isConstructor */
    !1
  )) : i.contextualKeyword === l._accessor && !it() ? (Wt(s), dn()) : it() ? dn() : z();
}
function Gt(e, n) {
  ne ? Ct() : ie && a(t.lessThan) && st(), cs(e, n);
}
function Wt(e) {
  Zt(e);
}
function r1() {
  if (ne) {
    const e = Q(0);
    f(t.question), J(e);
  }
}
function dn() {
  if (ne ? (k1(t.bang), Bt()) : ie && a(t.colon) && Pt(), a(t.eq)) {
    const e = r.tokens.length;
    _(), Fe(), r.tokens[e].rhsEndIndex = r.tokens.length;
  }
  _e();
}
function Bc(e, n = !1) {
  ne && (!e || n) && D(l._implements) || (a(t.name) && xt(!0), ne ? Ct() : ie && a(t.lessThan) && st());
}
function $c() {
  let e = !1;
  f(t._extends) ? (z1(), e = !0) : e = !1, ne ? ji(e) : ie && tc(e);
}
function fr() {
  const e = r.tokens.length - 1;
  ne && Ci() || (Wc() ? Gc() : Hc() ? (H(), a(t.comma) && Ie() === t.star ? (g(t.comma), g(t.star), Se(l._as), H()) : pr(), en()) : f(t._default) ? Uc() : zc() ? Vc() : (Ms(), en()), r.tokens[e].rhsEndIndex = r.tokens.length);
}
function Uc() {
  if (ne && Li() || ie && za())
    return;
  const e = r.start;
  f(t._function) ? vt(e, !0, !0) : D(l._async) && Ie() === t._function ? (Pe(l._async), f(t._function), vt(e, !0, !0)) : a(t._class) ? Nt(!0, !0) : a(t.at) ? (Fs(), Nt(!0, !0)) : (Fe(), _e());
}
function Vc() {
  ne ? Mi() : ie ? Za() : ze(!0);
}
function Hc() {
  if (ne && U1())
    return !1;
  if (ie && Ya())
    return !1;
  if (a(t.name))
    return r.contextualKeyword !== l._async;
  if (!a(t._default))
    return !1;
  const e = ps(), n = nn(), s = n.type === t.name && n.contextualKeyword === l._from;
  if (n.type === t.comma)
    return !0;
  if (s) {
    const o = A.charCodeAt(g1(e + 4));
    return o === u.quotationMark || o === u.apostrophe;
  }
  return !1;
}
function pr() {
  f(t.comma) && Ms();
}
function en() {
  Pe(l._from) && (ft(), dr()), _e();
}
function Wc() {
  return ie ? Ka() : a(t.star);
}
function Gc() {
  ie ? ec() : hs();
}
function hs() {
  g(t.star), D(l._as) ? Xc() : en();
}
function Xc() {
  _(), r.tokens[r.tokens.length - 1].type = t._as, H(), pr(), en();
}
function zc() {
  return ne && U1() || ie && Qa() || r.type === t._var || r.type === t._const || r.type === t._let || r.type === t._function || r.type === t._class || D(l._async) || a(t.at);
}
function Ms() {
  let e = !0;
  for (g(t.braceL); !f(t.braceR) && !r.error; ) {
    if (e)
      e = !1;
    else if (g(t.comma), f(t.braceR))
      break;
    Jc();
  }
}
function Jc() {
  if (ne) {
    Ri();
    return;
  }
  H(), r.tokens[r.tokens.length - 1].identifierRole = B.ExportAccess, Pe(l._as) && H();
}
function Qc() {
  const e = r.snapshot();
  return Se(l._module), Pe(l._from) ? D(l._from) ? (r.restoreFromSnapshot(e), !0) : (r.restoreFromSnapshot(e), !1) : a(t.comma) ? (r.restoreFromSnapshot(e), !1) : (r.restoreFromSnapshot(e), !0);
}
function Yc() {
  D(l._module) && Qc() && _();
}
function mr() {
  if (ne && a(t.name) && Ie() === t.eq) {
    os();
    return;
  }
  if (ne && D(l._type)) {
    const e = nn();
    if (e.type === t.name && e.contextualKeyword !== l._from) {
      if (Se(l._type), Ie() === t.eq) {
        os();
        return;
      }
    } else (e.type === t.star || e.type === t.braceL) && Se(l._type);
  }
  a(t.string) || (Yc(), Kc(), Se(l._from)), ft(), dr(), _e();
}
function Zc() {
  return a(t.name);
}
function o1() {
  gn();
}
function Kc() {
  ie && rc();
  let e = !0;
  if (!(Zc() && (o1(), !f(t.comma)))) {
    if (a(t.star)) {
      _(), Se(l._as), o1();
      return;
    }
    for (g(t.braceL); !f(t.braceR) && !r.error; ) {
      if (e)
        e = !1;
      else if (f(t.colon) && z(
        "ES2015 named imports do not destructure. Use another statement for destructuring after the import."
      ), g(t.comma), f(t.braceR))
        break;
      el();
    }
  }
}
function el() {
  if (ne) {
    Pi();
    return;
  }
  if (ie) {
    oc();
    return;
  }
  gn(), D(l._as) && (r.tokens[r.tokens.length - 1].identifierRole = B.ImportAccess, _(), gn());
}
function dr() {
  (a(t._with) || D(l._assert) && !Ue()) && (_(), As(!1, !1));
}
function tl() {
  return r.pos === 0 && A.charCodeAt(0) === u.numberSign && A.charCodeAt(1) === u.exclamationMark && x1(2), y1(), kc();
}
class nl {
  constructor(n, s) {
    this.tokens = n, this.scopes = s;
  }
}
function sl(e, n, s, o) {
  if (o && s)
    throw new Error("Cannot combine flow and typescript plugins.");
  Hr(e, n, s, o);
  const i = tl();
  if (r.error)
    throw $r(r.error);
  return i;
}
function rl(e) {
  let n = e.currentIndex(), s = 0;
  const o = e.currentToken();
  do {
    const i = e.tokens[n];
    if (i.isOptionalChainStart && s++, i.isOptionalChainEnd && s--, s += i.numNullishCoalesceStarts, s -= i.numNullishCoalesceEnds, i.contextualKeyword === l._await && i.identifierRole == null && i.scopeDepth === o.scopeDepth)
      return !0;
    n += 1;
  } while (s > 0 && n < e.tokens.length);
  return !1;
}
class Xt {
  __init() {
    this.resultCode = "";
  }
  // Array mapping input token index to optional string index position in the
  // output code.
  __init2() {
    this.resultMappings = new Array(this.tokens.length);
  }
  __init3() {
    this.tokenIndex = 0;
  }
  constructor(n, s, o, i, c) {
    this.code = n, this.tokens = s, this.isFlowEnabled = o, this.disableESTransforms = i, this.helperManager = c, Xt.prototype.__init.call(this), Xt.prototype.__init2.call(this), Xt.prototype.__init3.call(this);
  }
  /**
   * Snapshot the token state in a way that can be restored later, useful for
   * things like lookahead.
   *
   * resultMappings do not need to be copied since in all use cases, they will
   * be overwritten anyway after restore.
   */
  snapshot() {
    return {
      resultCode: this.resultCode,
      tokenIndex: this.tokenIndex
    };
  }
  restoreToSnapshot(n) {
    this.resultCode = n.resultCode, this.tokenIndex = n.tokenIndex;
  }
  /**
   * Remove and return the code generated since the snapshot, leaving the
   * current token position in-place. Unlike most TokenProcessor operations,
   * this operation can result in input/output line number mismatches because
   * the removed code may contain newlines, so this operation should be used
   * sparingly.
   */
  dangerouslyGetAndRemoveCodeSinceSnapshot(n) {
    const s = this.resultCode.slice(n.resultCode.length);
    return this.resultCode = n.resultCode, s;
  }
  reset() {
    this.resultCode = "", this.resultMappings = new Array(this.tokens.length), this.tokenIndex = 0;
  }
  matchesContextualAtIndex(n, s) {
    return this.matches1AtIndex(n, t.name) && this.tokens[n].contextualKeyword === s;
  }
  identifierNameAtIndex(n) {
    return this.identifierNameForToken(this.tokens[n]);
  }
  identifierNameAtRelativeIndex(n) {
    return this.identifierNameForToken(this.tokenAtRelativeIndex(n));
  }
  identifierName() {
    return this.identifierNameForToken(this.currentToken());
  }
  identifierNameForToken(n) {
    return this.code.slice(n.start, n.end);
  }
  rawCodeForToken(n) {
    return this.code.slice(n.start, n.end);
  }
  stringValueAtIndex(n) {
    return this.stringValueForToken(this.tokens[n]);
  }
  stringValue() {
    return this.stringValueForToken(this.currentToken());
  }
  stringValueForToken(n) {
    return this.code.slice(n.start + 1, n.end - 1);
  }
  matches1AtIndex(n, s) {
    return this.tokens[n].type === s;
  }
  matches2AtIndex(n, s, o) {
    return this.tokens[n].type === s && this.tokens[n + 1].type === o;
  }
  matches3AtIndex(n, s, o, i) {
    return this.tokens[n].type === s && this.tokens[n + 1].type === o && this.tokens[n + 2].type === i;
  }
  matches1(n) {
    return this.tokens[this.tokenIndex].type === n;
  }
  matches2(n, s) {
    return this.tokens[this.tokenIndex].type === n && this.tokens[this.tokenIndex + 1].type === s;
  }
  matches3(n, s, o) {
    return this.tokens[this.tokenIndex].type === n && this.tokens[this.tokenIndex + 1].type === s && this.tokens[this.tokenIndex + 2].type === o;
  }
  matches4(n, s, o, i) {
    return this.tokens[this.tokenIndex].type === n && this.tokens[this.tokenIndex + 1].type === s && this.tokens[this.tokenIndex + 2].type === o && this.tokens[this.tokenIndex + 3].type === i;
  }
  matches5(n, s, o, i, c) {
    return this.tokens[this.tokenIndex].type === n && this.tokens[this.tokenIndex + 1].type === s && this.tokens[this.tokenIndex + 2].type === o && this.tokens[this.tokenIndex + 3].type === i && this.tokens[this.tokenIndex + 4].type === c;
  }
  matchesContextual(n) {
    return this.matchesContextualAtIndex(this.tokenIndex, n);
  }
  matchesContextIdAndLabel(n, s) {
    return this.matches1(n) && this.currentToken().contextId === s;
  }
  previousWhitespaceAndComments() {
    let n = this.code.slice(
      this.tokenIndex > 0 ? this.tokens[this.tokenIndex - 1].end : 0,
      this.tokenIndex < this.tokens.length ? this.tokens[this.tokenIndex].start : this.code.length
    );
    return this.isFlowEnabled && (n = n.replace(/@flow/g, "")), n;
  }
  replaceToken(n) {
    this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += n, this.appendTokenSuffix(), this.tokenIndex++;
  }
  replaceTokenTrimmingLeftWhitespace(n) {
    this.resultCode += this.previousWhitespaceAndComments().replace(/[^\r\n]/g, ""), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += n, this.appendTokenSuffix(), this.tokenIndex++;
  }
  removeInitialToken() {
    this.replaceToken("");
  }
  removeToken() {
    this.replaceTokenTrimmingLeftWhitespace("");
  }
  /**
   * Remove all code until the next }, accounting for balanced braces.
   */
  removeBalancedCode() {
    let n = 0;
    for (; !this.isAtEnd(); ) {
      if (this.matches1(t.braceL))
        n++;
      else if (this.matches1(t.braceR)) {
        if (n === 0)
          return;
        n--;
      }
      this.removeToken();
    }
  }
  copyExpectedToken(n) {
    if (this.tokens[this.tokenIndex].type !== n)
      throw new Error(`Expected token ${n}`);
    this.copyToken();
  }
  copyToken() {
    this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += this.code.slice(
      this.tokens[this.tokenIndex].start,
      this.tokens[this.tokenIndex].end
    ), this.appendTokenSuffix(), this.tokenIndex++;
  }
  copyTokenWithPrefix(n) {
    this.resultCode += this.previousWhitespaceAndComments(), this.appendTokenPrefix(), this.resultCode += n, this.resultMappings[this.tokenIndex] = this.resultCode.length, this.resultCode += this.code.slice(
      this.tokens[this.tokenIndex].start,
      this.tokens[this.tokenIndex].end
    ), this.appendTokenSuffix(), this.tokenIndex++;
  }
  appendTokenPrefix() {
    const n = this.currentToken();
    if ((n.numNullishCoalesceStarts || n.isOptionalChainStart) && (n.isAsyncOperation = rl(this)), !this.disableESTransforms) {
      if (n.numNullishCoalesceStarts)
        for (let s = 0; s < n.numNullishCoalesceStarts; s++)
          n.isAsyncOperation ? (this.resultCode += "await ", this.resultCode += this.helperManager.getHelperName("asyncNullishCoalesce")) : this.resultCode += this.helperManager.getHelperName("nullishCoalesce"), this.resultCode += "(";
      n.isOptionalChainStart && (n.isAsyncOperation && (this.resultCode += "await "), this.tokenIndex > 0 && this.tokenAtRelativeIndex(-1).type === t._delete ? n.isAsyncOperation ? this.resultCode += this.helperManager.getHelperName("asyncOptionalChainDelete") : this.resultCode += this.helperManager.getHelperName("optionalChainDelete") : n.isAsyncOperation ? this.resultCode += this.helperManager.getHelperName("asyncOptionalChain") : this.resultCode += this.helperManager.getHelperName("optionalChain"), this.resultCode += "([");
    }
  }
  appendTokenSuffix() {
    const n = this.currentToken();
    if (n.isOptionalChainEnd && !this.disableESTransforms && (this.resultCode += "])"), n.numNullishCoalesceEnds && !this.disableESTransforms)
      for (let s = 0; s < n.numNullishCoalesceEnds; s++)
        this.resultCode += "))";
  }
  appendCode(n) {
    this.resultCode += n;
  }
  currentToken() {
    return this.tokens[this.tokenIndex];
  }
  currentTokenCode() {
    const n = this.currentToken();
    return this.code.slice(n.start, n.end);
  }
  tokenAtRelativeIndex(n) {
    return this.tokens[this.tokenIndex + n];
  }
  currentIndex() {
    return this.tokenIndex;
  }
  /**
   * Move to the next token. Only suitable in preprocessing steps. When
   * generating new code, you should use copyToken or removeToken.
   */
  nextToken() {
    if (this.tokenIndex === this.tokens.length)
      throw new Error("Unexpectedly reached end of input.");
    this.tokenIndex++;
  }
  previousToken() {
    this.tokenIndex--;
  }
  finish() {
    if (this.tokenIndex !== this.tokens.length)
      throw new Error("Tried to finish processing tokens before reaching the end.");
    return this.resultCode += this.previousWhitespaceAndComments(), { code: this.resultCode, mappings: this.resultMappings };
  }
  isAtEnd() {
    return this.tokenIndex === this.tokens.length;
  }
}
function ol(e, n, s, o) {
  const i = n.snapshot(), c = il(n);
  let h = [];
  const k = [], x = [];
  let d = null;
  const w = [], P = [], I = n.currentToken().contextId;
  if (I == null)
    throw new Error("Expected non-null class context ID on class open-brace.");
  for (n.nextToken(); !n.matchesContextIdAndLabel(t.braceR, I); )
    if (n.matchesContextual(l._constructor) && !n.currentToken().isType)
      ({ constructorInitializerStatements: h, constructorInsertPos: d } = i1(n));
    else if (n.matches1(t.semi))
      o || P.push({ start: n.currentIndex(), end: n.currentIndex() + 1 }), n.nextToken();
    else if (n.currentToken().isType)
      n.nextToken();
    else {
      const R = n.currentIndex();
      let G = !1, se = !1, we = !1;
      for (; wn(n.currentToken()); )
        n.matches1(t._static) && (G = !0), n.matches1(t.hash) && (se = !0), (n.matches1(t._declare) || n.matches1(t._abstract)) && (we = !0), n.nextToken();
      if (G && n.matches1(t.braceL)) {
        Kn(n, I);
        continue;
      }
      if (se) {
        Kn(n, I);
        continue;
      }
      if (n.matchesContextual(l._constructor) && !n.currentToken().isType) {
        ({ constructorInitializerStatements: h, constructorInsertPos: d } = i1(n));
        continue;
      }
      const Te = n.currentIndex();
      if (al(n), n.matches1(t.lessThan) || n.matches1(t.parenL)) {
        Kn(n, I);
        continue;
      }
      for (; n.currentToken().isType; )
        n.nextToken();
      if (n.matches1(t.eq)) {
        const O = n.currentIndex(), q = n.currentToken().rhsEndIndex;
        if (q == null)
          throw new Error("Expected rhsEndIndex on class field assignment.");
        for (n.nextToken(); n.currentIndex() < q; )
          e.processToken();
        let U;
        G ? (U = s.claimFreeName("__initStatic"), x.push(U)) : (U = s.claimFreeName("__init"), k.push(U)), w.push({
          initializerName: U,
          equalsIndex: O,
          start: Te,
          end: n.currentIndex()
        });
      } else (!o || we) && P.push({ start: R, end: n.currentIndex() });
    }
  return n.restoreToSnapshot(i), o ? {
    headerInfo: c,
    constructorInitializerStatements: h,
    instanceInitializerNames: [],
    staticInitializerNames: [],
    constructorInsertPos: d,
    fields: [],
    rangesToRemove: P
  } : {
    headerInfo: c,
    constructorInitializerStatements: h,
    instanceInitializerNames: k,
    staticInitializerNames: x,
    constructorInsertPos: d,
    fields: w,
    rangesToRemove: P
  };
}
function Kn(e, n) {
  for (e.nextToken(); e.currentToken().contextId !== n; )
    e.nextToken();
  for (; wn(e.tokenAtRelativeIndex(-1)); )
    e.previousToken();
}
function il(e) {
  const n = e.currentToken(), s = n.contextId;
  if (s == null)
    throw new Error("Expected context ID on class token.");
  const o = n.isExpression;
  if (o == null)
    throw new Error("Expected isExpression on class token.");
  let i = null, c = !1;
  for (e.nextToken(), e.matches1(t.name) && (i = e.identifierName()); !e.matchesContextIdAndLabel(t.braceL, s); )
    e.matches1(t._extends) && !e.currentToken().isType && (c = !0), e.nextToken();
  return { isExpression: o, className: i, hasSuperclass: c };
}
function i1(e) {
  const n = [];
  e.nextToken();
  const s = e.currentToken().contextId;
  if (s == null)
    throw new Error("Expected context ID on open-paren starting constructor params.");
  for (; !e.matchesContextIdAndLabel(t.parenR, s); )
    if (e.currentToken().contextId === s) {
      if (e.nextToken(), wn(e.currentToken())) {
        for (e.nextToken(); wn(e.currentToken()); )
          e.nextToken();
        const c = e.currentToken();
        if (c.type !== t.name)
          throw new Error("Expected identifier after access modifiers in constructor arg.");
        const h = e.identifierNameForToken(c);
        n.push(`this.${h} = ${h}`);
      }
    } else
      e.nextToken();
  for (e.nextToken(); e.currentToken().isType; )
    e.nextToken();
  let o = e.currentIndex(), i = !1;
  for (; !e.matchesContextIdAndLabel(t.braceR, s); ) {
    if (!i && e.matches2(t._super, t.parenL)) {
      e.nextToken();
      const c = e.currentToken().contextId;
      if (c == null)
        throw new Error("Expected a context ID on the super call");
      for (; !e.matchesContextIdAndLabel(t.parenR, c); )
        e.nextToken();
      o = e.currentIndex(), i = !0;
    }
    e.nextToken();
  }
  return e.nextToken(), { constructorInitializerStatements: n, constructorInsertPos: o };
}
function wn(e) {
  return [
    t._async,
    t._get,
    t._set,
    t.plus,
    t.minus,
    t._readonly,
    t._static,
    t._public,
    t._private,
    t._protected,
    t._override,
    t._abstract,
    t.star,
    t._declare,
    t.hash
  ].includes(e.type);
}
function al(e) {
  if (e.matches1(t.bracketL)) {
    const s = e.currentToken().contextId;
    if (s == null)
      throw new Error("Expected class context ID on computed name open bracket.");
    for (; !e.matchesContextIdAndLabel(t.bracketR, s); )
      e.nextToken();
    e.nextToken();
  } else
    e.nextToken();
}
function kr(e) {
  if (e.removeInitialToken(), e.removeToken(), e.removeToken(), e.removeToken(), e.matches1(t.parenL))
    e.removeToken(), e.removeToken(), e.removeToken();
  else
    for (; e.matches1(t.dot); )
      e.removeToken(), e.removeToken();
}
const gr = {
  typeDeclarations: /* @__PURE__ */ new Set(),
  valueDeclarations: /* @__PURE__ */ new Set()
};
function _r(e) {
  const n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
  for (let o = 0; o < e.tokens.length; o++) {
    const i = e.tokens[o];
    i.type === t.name && d1(i) && (i.isType ? n.add(e.identifierNameForToken(i)) : s.add(e.identifierNameForToken(i)));
  }
  return { typeDeclarations: n, valueDeclarations: s };
}
function yr(e) {
  let n = e.currentIndex();
  for (; !e.matches1AtIndex(n, t.braceR); )
    n++;
  return e.matchesContextualAtIndex(n + 1, l._from) && e.matches1AtIndex(n + 2, t.string);
}
function St(e) {
  (e.matches2(t._with, t.braceL) || e.matches2(t.name, t.braceL) && e.matchesContextual(l._assert)) && (e.removeToken(), e.removeToken(), e.removeBalancedCode(), e.removeToken());
}
function xr(e, n, s, o) {
  if (!e || n)
    return !1;
  const i = s.currentToken();
  if (i.rhsEndIndex == null)
    throw new Error("Expected non-null rhsEndIndex on export token.");
  const c = i.rhsEndIndex - s.currentIndex();
  if (c !== 3 && !(c === 4 && s.matches1AtIndex(i.rhsEndIndex - 1, t.semi)))
    return !1;
  const h = s.tokenAtRelativeIndex(2);
  if (h.type !== t.name)
    return !1;
  const k = s.identifierNameForToken(h);
  return o.typeDeclarations.has(k) && !o.valueDeclarations.has(k);
}
class zt extends nt {
  __init() {
    this.hadExport = !1;
  }
  __init2() {
    this.hadNamedExport = !1;
  }
  __init3() {
    this.hadDefaultExport = !1;
  }
  constructor(n, s, o, i, c, h, k, x, d, w, P, I) {
    super(), this.rootTransformer = n, this.tokens = s, this.importProcessor = o, this.nameManager = i, this.helperManager = c, this.reactHotLoaderTransformer = h, this.enableLegacyBabel5ModuleInterop = k, this.enableLegacyTypeScriptModuleInterop = x, this.isTypeScriptTransformEnabled = d, this.isFlowTransformEnabled = w, this.preserveDynamicImport = P, this.keepUnusedImports = I, zt.prototype.__init.call(this), zt.prototype.__init2.call(this), zt.prototype.__init3.call(this), this.declarationInfo = d ? _r(s) : gr;
  }
  getPrefixCode() {
    let n = "";
    return this.hadExport && (n += 'Object.defineProperty(exports, "__esModule", {value: true});'), n;
  }
  getSuffixCode() {
    return this.enableLegacyBabel5ModuleInterop && this.hadDefaultExport && !this.hadNamedExport ? `
module.exports = exports.default;
` : "";
  }
  process() {
    return this.tokens.matches3(t._import, t.name, t.eq) ? this.processImportEquals() : this.tokens.matches1(t._import) ? (this.processImport(), !0) : this.tokens.matches2(t._export, t.eq) ? (this.tokens.replaceToken("module.exports"), !0) : this.tokens.matches1(t._export) && !this.tokens.currentToken().isType ? (this.hadExport = !0, this.processExport()) : this.tokens.matches2(t.name, t.postIncDec) && this.processPostIncDec() ? !0 : this.tokens.matches1(t.name) || this.tokens.matches1(t.jsxName) ? this.processIdentifier() : this.tokens.matches1(t.eq) ? this.processAssignment() : this.tokens.matches1(t.assign) ? this.processComplexAssignment() : this.tokens.matches1(t.preIncDec) ? this.processPreIncDec() : !1;
  }
  processImportEquals() {
    const n = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
    return this.importProcessor.shouldAutomaticallyElideImportedName(n) ? kr(this.tokens) : this.tokens.replaceToken("const"), !0;
  }
  /**
   * Transform this:
   * import foo, {bar} from 'baz';
   * into
   * var _baz = require('baz'); var _baz2 = _interopRequireDefault(_baz);
   *
   * The import code was already generated in the import preprocessing step, so
   * we just need to look it up.
   */
  processImport() {
    if (this.tokens.matches2(t._import, t.parenL)) {
      if (this.preserveDynamicImport) {
        this.tokens.copyToken();
        return;
      }
      const s = this.enableLegacyTypeScriptModuleInterop ? "" : `${this.helperManager.getHelperName("interopRequireWildcard")}(`;
      this.tokens.replaceToken(`Promise.resolve().then(() => ${s}require`);
      const o = this.tokens.currentToken().contextId;
      if (o == null)
        throw new Error("Expected context ID on dynamic import invocation.");
      for (this.tokens.copyToken(); !this.tokens.matchesContextIdAndLabel(t.parenR, o); )
        this.rootTransformer.processToken();
      this.tokens.replaceToken(s ? ")))" : "))");
      return;
    }
    if (this.removeImportAndDetectIfShouldElide())
      this.tokens.removeToken();
    else {
      const s = this.tokens.stringValue();
      this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(s)), this.tokens.appendCode(this.importProcessor.claimImportCode(s));
    }
    St(this.tokens), this.tokens.matches1(t.semi) && this.tokens.removeToken();
  }
  /**
   * Erase this import (since any CJS output would be completely different), and
   * return true if this import is should be elided due to being a type-only
   * import. Such imports will not be emitted at all to avoid side effects.
   *
   * Import elision only happens with the TypeScript or Flow transforms enabled.
   *
   * TODO: This function has some awkward overlap with
   *  CJSImportProcessor.pruneTypeOnlyImports , and the two should be unified.
   *  That function handles TypeScript implicit import name elision, and removes
   *  an import if all typical imported names (without `type`) are removed due
   *  to being type-only imports. This function handles Flow import removal and
   *  properly distinguishes `import 'foo'` from `import {} from 'foo'` for TS
   *  purposes.
   *
   * The position should end at the import string.
   */
  removeImportAndDetectIfShouldElide() {
    if (this.tokens.removeInitialToken(), this.tokens.matchesContextual(l._type) && !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, t.comma) && !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, l._from))
      return this.removeRemainingImport(), !0;
    if (this.tokens.matches1(t.name) || this.tokens.matches1(t.star))
      return this.removeRemainingImport(), !1;
    if (this.tokens.matches1(t.string))
      return !1;
    let n = !1, s = !1;
    for (; !this.tokens.matches1(t.string); )
      (!n && this.tokens.matches1(t.braceL) || this.tokens.matches1(t.comma)) && (this.tokens.removeToken(), this.tokens.matches1(t.braceR) || (s = !0), (this.tokens.matches2(t.name, t.comma) || this.tokens.matches2(t.name, t.braceR) || this.tokens.matches4(t.name, t.name, t.name, t.comma) || this.tokens.matches4(t.name, t.name, t.name, t.braceR)) && (n = !0)), this.tokens.removeToken();
    return this.keepUnusedImports ? !1 : this.isTypeScriptTransformEnabled ? !n : this.isFlowTransformEnabled ? s && !n : !1;
  }
  removeRemainingImport() {
    for (; !this.tokens.matches1(t.string); )
      this.tokens.removeToken();
  }
  processIdentifier() {
    const n = this.tokens.currentToken();
    if (n.shadowsGlobal)
      return !1;
    if (n.identifierRole === B.ObjectShorthand)
      return this.processObjectShorthand();
    if (n.identifierRole !== B.Access)
      return !1;
    const s = this.importProcessor.getIdentifierReplacement(
      this.tokens.identifierNameForToken(n)
    );
    if (!s)
      return !1;
    let o = this.tokens.currentIndex() + 1;
    for (; o < this.tokens.tokens.length && this.tokens.tokens[o].type === t.parenR; )
      o++;
    return this.tokens.tokens[o].type === t.parenL ? this.tokens.tokenAtRelativeIndex(1).type === t.parenL && this.tokens.tokenAtRelativeIndex(-1).type !== t._new ? (this.tokens.replaceToken(`${s}.call(void 0, `), this.tokens.removeToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR)) : this.tokens.replaceToken(`(0, ${s})`) : this.tokens.replaceToken(s), !0;
  }
  processObjectShorthand() {
    const n = this.tokens.identifierName(), s = this.importProcessor.getIdentifierReplacement(n);
    return s ? (this.tokens.replaceToken(`${n}: ${s}`), !0) : !1;
  }
  processExport() {
    if (this.tokens.matches2(t._export, t._enum) || this.tokens.matches3(t._export, t._const, t._enum))
      return this.hadNamedExport = !0, !1;
    if (this.tokens.matches2(t._export, t._default))
      return this.tokens.matches3(t._export, t._default, t._enum) ? (this.hadDefaultExport = !0, !1) : (this.processExportDefault(), !0);
    if (this.tokens.matches2(t._export, t.braceL))
      return this.processExportBindings(), !0;
    if (this.tokens.matches2(t._export, t.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, l._type)) {
      if (this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.matches1(t.braceL)) {
        for (; !this.tokens.matches1(t.braceR); )
          this.tokens.removeToken();
        this.tokens.removeToken();
      } else
        this.tokens.removeToken(), this.tokens.matches1(t._as) && (this.tokens.removeToken(), this.tokens.removeToken());
      return this.tokens.matchesContextual(l._from) && this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, t.string) && (this.tokens.removeToken(), this.tokens.removeToken(), St(this.tokens)), !0;
    }
    if (this.hadNamedExport = !0, this.tokens.matches2(t._export, t._var) || this.tokens.matches2(t._export, t._let) || this.tokens.matches2(t._export, t._const))
      return this.processExportVar(), !0;
    if (this.tokens.matches2(t._export, t._function) || // export async function
    this.tokens.matches3(t._export, t.name, t._function))
      return this.processExportFunction(), !0;
    if (this.tokens.matches2(t._export, t._class) || this.tokens.matches3(t._export, t._abstract, t._class) || this.tokens.matches2(t._export, t.at))
      return this.processExportClass(), !0;
    if (this.tokens.matches2(t._export, t.star))
      return this.processExportStar(), !0;
    throw new Error("Unrecognized export syntax.");
  }
  processAssignment() {
    const n = this.tokens.currentIndex(), s = this.tokens.tokens[n - 1];
    if (s.isType || s.type !== t.name || s.shadowsGlobal || n >= 2 && this.tokens.matches1AtIndex(n - 2, t.dot) || n >= 2 && [t._var, t._let, t._const].includes(this.tokens.tokens[n - 2].type))
      return !1;
    const o = this.importProcessor.resolveExportBinding(
      this.tokens.identifierNameForToken(s)
    );
    return o ? (this.tokens.copyToken(), this.tokens.appendCode(` ${o} =`), !0) : !1;
  }
  /**
   * Process something like `a += 3`, where `a` might be an exported value.
   */
  processComplexAssignment() {
    const n = this.tokens.currentIndex(), s = this.tokens.tokens[n - 1];
    if (s.type !== t.name || s.shadowsGlobal || n >= 2 && this.tokens.matches1AtIndex(n - 2, t.dot))
      return !1;
    const o = this.importProcessor.resolveExportBinding(
      this.tokens.identifierNameForToken(s)
    );
    return o ? (this.tokens.appendCode(` = ${o}`), this.tokens.copyToken(), !0) : !1;
  }
  /**
   * Process something like `++a`, where `a` might be an exported value.
   */
  processPreIncDec() {
    const n = this.tokens.currentIndex(), s = this.tokens.tokens[n + 1];
    if (s.type !== t.name || s.shadowsGlobal || n + 2 < this.tokens.tokens.length && (this.tokens.matches1AtIndex(n + 2, t.dot) || this.tokens.matches1AtIndex(n + 2, t.bracketL) || this.tokens.matches1AtIndex(n + 2, t.parenL)))
      return !1;
    const o = this.tokens.identifierNameForToken(s), i = this.importProcessor.resolveExportBinding(o);
    return i ? (this.tokens.appendCode(`${i} = `), this.tokens.copyToken(), !0) : !1;
  }
  /**
   * Process something like `a++`, where `a` might be an exported value.
   * This starts at the `a`, not at the `++`.
   */
  processPostIncDec() {
    const n = this.tokens.currentIndex(), s = this.tokens.tokens[n], o = this.tokens.tokens[n + 1];
    if (s.type !== t.name || s.shadowsGlobal || n >= 1 && this.tokens.matches1AtIndex(n - 1, t.dot))
      return !1;
    const i = this.tokens.identifierNameForToken(s), c = this.importProcessor.resolveExportBinding(i);
    if (!c)
      return !1;
    const h = this.tokens.rawCodeForToken(o), k = this.importProcessor.getIdentifierReplacement(i) || i;
    if (h === "++")
      this.tokens.replaceToken(`(${k} = ${c} = ${k} + 1, ${k} - 1)`);
    else if (h === "--")
      this.tokens.replaceToken(`(${k} = ${c} = ${k} - 1, ${k} + 1)`);
    else
      throw new Error(`Unexpected operator: ${h}`);
    return this.tokens.removeToken(), !0;
  }
  processExportDefault() {
    let n = !0;
    if (this.tokens.matches4(t._export, t._default, t._function, t.name) || // export default async function
    this.tokens.matches5(t._export, t._default, t.name, t._function, t.name) && this.tokens.matchesContextualAtIndex(
      this.tokens.currentIndex() + 2,
      l._async
    )) {
      this.tokens.removeInitialToken(), this.tokens.removeToken();
      const s = this.processNamedFunction();
      this.tokens.appendCode(` exports.default = ${s};`);
    } else if (this.tokens.matches4(t._export, t._default, t._class, t.name) || this.tokens.matches5(t._export, t._default, t._abstract, t._class, t.name) || this.tokens.matches3(t._export, t._default, t.at)) {
      this.tokens.removeInitialToken(), this.tokens.removeToken(), this.copyDecorators(), this.tokens.matches1(t._abstract) && this.tokens.removeToken();
      const s = this.rootTransformer.processNamedClass();
      this.tokens.appendCode(` exports.default = ${s};`);
    } else if (xr(
      this.isTypeScriptTransformEnabled,
      this.keepUnusedImports,
      this.tokens,
      this.declarationInfo
    ))
      n = !1, this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.removeToken();
    else if (this.reactHotLoaderTransformer) {
      const s = this.nameManager.claimFreeName("_default");
      this.tokens.replaceToken(`let ${s}; exports.`), this.tokens.copyToken(), this.tokens.appendCode(` = ${s} =`), this.reactHotLoaderTransformer.setExtractedDefaultExportName(s);
    } else
      this.tokens.replaceToken("exports."), this.tokens.copyToken(), this.tokens.appendCode(" =");
    n && (this.hadDefaultExport = !0);
  }
  copyDecorators() {
    for (; this.tokens.matches1(t.at); )
      if (this.tokens.copyToken(), this.tokens.matches1(t.parenL))
        this.tokens.copyExpectedToken(t.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR);
      else {
        for (this.tokens.copyExpectedToken(t.name); this.tokens.matches1(t.dot); )
          this.tokens.copyExpectedToken(t.dot), this.tokens.copyExpectedToken(t.name);
        this.tokens.matches1(t.parenL) && (this.tokens.copyExpectedToken(t.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR));
      }
  }
  /**
   * Transform a declaration like `export var`, `export let`, or `export const`.
   */
  processExportVar() {
    this.isSimpleExportVar() ? this.processSimpleExportVar() : this.processComplexExportVar();
  }
  /**
   * Determine if the export is of the form:
   * export var/let/const [varName] = [expr];
   * In other words, determine if function name inference might apply.
   */
  isSimpleExportVar() {
    let n = this.tokens.currentIndex();
    if (n++, n++, !this.tokens.matches1AtIndex(n, t.name))
      return !1;
    for (n++; n < this.tokens.tokens.length && this.tokens.tokens[n].isType; )
      n++;
    return !!this.tokens.matches1AtIndex(n, t.eq);
  }
  /**
   * Transform an `export var` declaration initializing a single variable.
   *
   * For example, this:
   * export const f = () => {};
   * becomes this:
   * const f = () => {}; exports.f = f;
   *
   * The variable is unused (e.g. exports.f has the true value of the export).
   * We need to produce an assignment of this form so that the function will
   * have an inferred name of "f", which wouldn't happen in the more general
   * case below.
   */
  processSimpleExportVar() {
    this.tokens.removeInitialToken(), this.tokens.copyToken();
    const n = this.tokens.identifierName();
    for (; !this.tokens.matches1(t.eq); )
      this.rootTransformer.processToken();
    const s = this.tokens.currentToken().rhsEndIndex;
    if (s == null)
      throw new Error("Expected = token with an end index.");
    for (; this.tokens.currentIndex() < s; )
      this.rootTransformer.processToken();
    this.tokens.appendCode(`; exports.${n} = ${n}`);
  }
  /**
   * Transform normal declaration exports, including handling destructuring.
   * For example, this:
   * export const {x: [a = 2, b], c} = d;
   * becomes this:
   * ({x: [exports.a = 2, exports.b], c: exports.c} = d;)
   */
  processComplexExportVar() {
    this.tokens.removeInitialToken(), this.tokens.removeToken();
    const n = this.tokens.matches1(t.braceL);
    n && this.tokens.appendCode("(");
    let s = 0;
    for (; ; )
      if (this.tokens.matches1(t.braceL) || this.tokens.matches1(t.dollarBraceL) || this.tokens.matches1(t.bracketL))
        s++, this.tokens.copyToken();
      else if (this.tokens.matches1(t.braceR) || this.tokens.matches1(t.bracketR))
        s--, this.tokens.copyToken();
      else {
        if (s === 0 && !this.tokens.matches1(t.name) && !this.tokens.currentToken().isType)
          break;
        if (this.tokens.matches1(t.eq)) {
          const o = this.tokens.currentToken().rhsEndIndex;
          if (o == null)
            throw new Error("Expected = token with an end index.");
          for (; this.tokens.currentIndex() < o; )
            this.rootTransformer.processToken();
        } else {
          const o = this.tokens.currentToken();
          if (m1(o)) {
            const i = this.tokens.identifierName();
            let c = this.importProcessor.getIdentifierReplacement(i);
            if (c === null)
              throw new Error(`Expected a replacement for ${i} in \`export var\` syntax.`);
            Qr(o) && (c = `${i}: ${c}`), this.tokens.replaceToken(c);
          } else
            this.rootTransformer.processToken();
        }
      }
    if (n) {
      const o = this.tokens.currentToken().rhsEndIndex;
      if (o == null)
        throw new Error("Expected = token with an end index.");
      for (; this.tokens.currentIndex() < o; )
        this.rootTransformer.processToken();
      this.tokens.appendCode(")");
    }
  }
  /**
   * Transform this:
   * export function foo() {}
   * into this:
   * function foo() {} exports.foo = foo;
   */
  processExportFunction() {
    this.tokens.replaceToken("");
    const n = this.processNamedFunction();
    this.tokens.appendCode(` exports.${n} = ${n};`);
  }
  /**
   * Skip past a function with a name and return that name.
   */
  processNamedFunction() {
    if (this.tokens.matches1(t._function))
      this.tokens.copyToken();
    else if (this.tokens.matches2(t.name, t._function)) {
      if (!this.tokens.matchesContextual(l._async))
        throw new Error("Expected async keyword in function export.");
      this.tokens.copyToken(), this.tokens.copyToken();
    }
    if (this.tokens.matches1(t.star) && this.tokens.copyToken(), !this.tokens.matches1(t.name))
      throw new Error("Expected identifier for exported function name.");
    const n = this.tokens.identifierName();
    if (this.tokens.copyToken(), this.tokens.currentToken().isType)
      for (this.tokens.removeInitialToken(); this.tokens.currentToken().isType; )
        this.tokens.removeToken();
    return this.tokens.copyExpectedToken(t.parenL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR), this.rootTransformer.processPossibleTypeRange(), this.tokens.copyExpectedToken(t.braceL), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.braceR), n;
  }
  /**
   * Transform this:
   * export class A {}
   * into this:
   * class A {} exports.A = A;
   */
  processExportClass() {
    this.tokens.removeInitialToken(), this.copyDecorators(), this.tokens.matches1(t._abstract) && this.tokens.removeToken();
    const n = this.rootTransformer.processNamedClass();
    this.tokens.appendCode(` exports.${n} = ${n};`);
  }
  /**
   * Transform this:
   * export {a, b as c};
   * into this:
   * exports.a = a; exports.c = b;
   *
   * OR
   *
   * Transform this:
   * export {a, b as c} from './foo';
   * into the pre-generated Object.defineProperty code from the ImportProcessor.
   *
   * For the first case, if the TypeScript transform is enabled, we need to skip
   * exports that are only defined as types.
   */
  processExportBindings() {
    this.tokens.removeInitialToken(), this.tokens.removeToken();
    const n = yr(this.tokens), s = [];
    for (; ; ) {
      if (this.tokens.matches1(t.braceR)) {
        this.tokens.removeToken();
        break;
      }
      const o = Qt(this.tokens);
      for (; this.tokens.currentIndex() < o.endIndex; )
        this.tokens.removeToken();
      if (!(o.isType || !n && this.shouldElideExportedIdentifier(o.leftName))) {
        const c = o.rightName;
        c === "default" ? this.hadDefaultExport = !0 : this.hadNamedExport = !0;
        const h = o.leftName, k = this.importProcessor.getIdentifierReplacement(h);
        s.push(`exports.${c} = ${k || h};`);
      }
      if (this.tokens.matches1(t.braceR)) {
        this.tokens.removeToken();
        break;
      }
      if (this.tokens.matches2(t.comma, t.braceR)) {
        this.tokens.removeToken(), this.tokens.removeToken();
        break;
      } else if (this.tokens.matches1(t.comma))
        this.tokens.removeToken();
      else
        throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.currentToken())}`);
    }
    if (this.tokens.matchesContextual(l._from)) {
      this.tokens.removeToken();
      const o = this.tokens.stringValue();
      this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(o)), St(this.tokens);
    } else
      this.tokens.appendCode(s.join(" "));
    this.tokens.matches1(t.semi) && this.tokens.removeToken();
  }
  processExportStar() {
    for (this.tokens.removeInitialToken(); !this.tokens.matches1(t.string); )
      this.tokens.removeToken();
    const n = this.tokens.stringValue();
    this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(n)), St(this.tokens), this.tokens.matches1(t.semi) && this.tokens.removeToken();
  }
  shouldElideExportedIdentifier(n) {
    return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.declarationInfo.valueDeclarations.has(n);
  }
}
class cl extends nt {
  constructor(n, s, o, i, c, h, k, x) {
    super(), this.tokens = n, this.nameManager = s, this.helperManager = o, this.reactHotLoaderTransformer = i, this.isTypeScriptTransformEnabled = c, this.isFlowTransformEnabled = h, this.keepUnusedImports = k, this.nonTypeIdentifiers = c && !k ? N1(n, x) : /* @__PURE__ */ new Set(), this.declarationInfo = c && !k ? _r(n) : gr, this.injectCreateRequireForImportRequire = !!x.injectCreateRequireForImportRequire;
  }
  process() {
    if (this.tokens.matches3(t._import, t.name, t.eq))
      return this.processImportEquals();
    if (this.tokens.matches4(t._import, t.name, t.name, t.eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, l._type)) {
      this.tokens.removeInitialToken();
      for (let n = 0; n < 7; n++)
        this.tokens.removeToken();
      return !0;
    }
    if (this.tokens.matches2(t._export, t.eq))
      return this.tokens.replaceToken("module.exports"), !0;
    if (this.tokens.matches5(t._export, t._import, t.name, t.name, t.eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, l._type)) {
      this.tokens.removeInitialToken();
      for (let n = 0; n < 8; n++)
        this.tokens.removeToken();
      return !0;
    }
    if (this.tokens.matches1(t._import))
      return this.processImport();
    if (this.tokens.matches2(t._export, t._default))
      return this.processExportDefault();
    if (this.tokens.matches2(t._export, t.braceL))
      return this.processNamedExports();
    if (this.tokens.matches2(t._export, t.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, l._type)) {
      if (this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.matches1(t.braceL)) {
        for (; !this.tokens.matches1(t.braceR); )
          this.tokens.removeToken();
        this.tokens.removeToken();
      } else
        this.tokens.removeToken(), this.tokens.matches1(t._as) && (this.tokens.removeToken(), this.tokens.removeToken());
      return this.tokens.matchesContextual(l._from) && this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, t.string) && (this.tokens.removeToken(), this.tokens.removeToken(), St(this.tokens)), !0;
    }
    return !1;
  }
  processImportEquals() {
    const n = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
    return this.shouldAutomaticallyElideImportedName(n) ? kr(this.tokens) : this.injectCreateRequireForImportRequire ? (this.tokens.replaceToken("const"), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.replaceToken(this.helperManager.getHelperName("require"))) : this.tokens.replaceToken("const"), !0;
  }
  processImport() {
    if (this.tokens.matches2(t._import, t.parenL))
      return !1;
    const n = this.tokens.snapshot();
    if (this.removeImportTypeBindings()) {
      for (this.tokens.restoreToSnapshot(n); !this.tokens.matches1(t.string); )
        this.tokens.removeToken();
      this.tokens.removeToken(), St(this.tokens), this.tokens.matches1(t.semi) && this.tokens.removeToken();
    }
    return !0;
  }
  /**
   * Remove type bindings from this import, leaving the rest of the import intact.
   *
   * Return true if this import was ONLY types, and thus is eligible for removal. This will bail out
   * of the replacement operation, so we can return early here.
   */
  removeImportTypeBindings() {
    if (this.tokens.copyExpectedToken(t._import), this.tokens.matchesContextual(l._type) && !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, t.comma) && !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, l._from))
      return !0;
    if (this.tokens.matches1(t.string))
      return this.tokens.copyToken(), !1;
    this.tokens.matchesContextual(l._module) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, l._from) && this.tokens.copyToken();
    let n = !1, s = !1, o = !1;
    if (this.tokens.matches1(t.name) && (this.shouldAutomaticallyElideImportedName(this.tokens.identifierName()) ? (this.tokens.removeToken(), this.tokens.matches1(t.comma) && this.tokens.removeToken()) : (n = !0, this.tokens.copyToken(), this.tokens.matches1(t.comma) && (o = !0, this.tokens.removeToken()))), this.tokens.matches1(t.star))
      this.shouldAutomaticallyElideImportedName(this.tokens.identifierNameAtRelativeIndex(2)) ? (this.tokens.removeToken(), this.tokens.removeToken(), this.tokens.removeToken()) : (o && this.tokens.appendCode(","), n = !0, this.tokens.copyExpectedToken(t.star), this.tokens.copyExpectedToken(t.name), this.tokens.copyExpectedToken(t.name));
    else if (this.tokens.matches1(t.braceL)) {
      for (o && this.tokens.appendCode(","), this.tokens.copyToken(); !this.tokens.matches1(t.braceR); ) {
        s = !0;
        const i = Qt(this.tokens);
        if (i.isType || this.shouldAutomaticallyElideImportedName(i.rightName)) {
          for (; this.tokens.currentIndex() < i.endIndex; )
            this.tokens.removeToken();
          this.tokens.matches1(t.comma) && this.tokens.removeToken();
        } else {
          for (n = !0; this.tokens.currentIndex() < i.endIndex; )
            this.tokens.copyToken();
          this.tokens.matches1(t.comma) && this.tokens.copyToken();
        }
      }
      this.tokens.copyExpectedToken(t.braceR);
    }
    return this.keepUnusedImports ? !1 : this.isTypeScriptTransformEnabled ? !n : this.isFlowTransformEnabled ? s && !n : !1;
  }
  shouldAutomaticallyElideImportedName(n) {
    return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.nonTypeIdentifiers.has(n);
  }
  processExportDefault() {
    if (xr(
      this.isTypeScriptTransformEnabled,
      this.keepUnusedImports,
      this.tokens,
      this.declarationInfo
    ))
      return this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.removeToken(), !0;
    if (!(this.tokens.matches4(t._export, t._default, t._function, t.name) || // export default async function
    this.tokens.matches5(t._export, t._default, t.name, t._function, t.name) && this.tokens.matchesContextualAtIndex(
      this.tokens.currentIndex() + 2,
      l._async
    ) || this.tokens.matches4(t._export, t._default, t._class, t.name) || this.tokens.matches5(t._export, t._default, t._abstract, t._class, t.name)) && this.reactHotLoaderTransformer) {
      const s = this.nameManager.claimFreeName("_default");
      return this.tokens.replaceToken(`let ${s}; export`), this.tokens.copyToken(), this.tokens.appendCode(` ${s} =`), this.reactHotLoaderTransformer.setExtractedDefaultExportName(s), !0;
    }
    return !1;
  }
  /**
   * Handle a statement with one of these forms:
   * export {a, type b};
   * export {c, type d} from 'foo';
   *
   * In both cases, any explicit type exports should be removed. In the first
   * case, we also need to handle implicit export elision for names declared as
   * types. In the second case, we must NOT do implicit named export elision,
   * but we must remove the runtime import if all exports are type exports.
   */
  processNamedExports() {
    if (!this.isTypeScriptTransformEnabled)
      return !1;
    this.tokens.copyExpectedToken(t._export), this.tokens.copyExpectedToken(t.braceL);
    const n = yr(this.tokens);
    let s = !1;
    for (; !this.tokens.matches1(t.braceR); ) {
      const o = Qt(this.tokens);
      if (o.isType || !n && this.shouldElideExportedName(o.leftName)) {
        for (; this.tokens.currentIndex() < o.endIndex; )
          this.tokens.removeToken();
        this.tokens.matches1(t.comma) && this.tokens.removeToken();
      } else {
        for (s = !0; this.tokens.currentIndex() < o.endIndex; )
          this.tokens.copyToken();
        this.tokens.matches1(t.comma) && this.tokens.copyToken();
      }
    }
    return this.tokens.copyExpectedToken(t.braceR), !this.keepUnusedImports && n && !s && (this.tokens.removeToken(), this.tokens.removeToken(), St(this.tokens)), !0;
  }
  /**
   * ESM elides all imports with the rule that we only elide if we see that it's
   * a type and never see it as a value. This is in contrast to CJS, which
   * elides imports that are completely unknown.
   */
  shouldElideExportedName(n) {
    return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && this.declarationInfo.typeDeclarations.has(n) && !this.declarationInfo.valueDeclarations.has(n);
  }
}
class ll extends nt {
  constructor(n, s, o) {
    super(), this.rootTransformer = n, this.tokens = s, this.isImportsTransformEnabled = o;
  }
  process() {
    return this.rootTransformer.processPossibleArrowParamEnd() || this.rootTransformer.processPossibleAsyncArrowWithTypeParams() || this.rootTransformer.processPossibleTypeRange() ? !0 : this.tokens.matches1(t._enum) ? (this.processEnum(), !0) : this.tokens.matches2(t._export, t._enum) ? (this.processNamedExportEnum(), !0) : this.tokens.matches3(t._export, t._default, t._enum) ? (this.processDefaultExportEnum(), !0) : !1;
  }
  /**
   * Handle a declaration like:
   * export enum E ...
   *
   * With this imports transform, this becomes:
   * const E = [[enum]]; exports.E = E;
   *
   * otherwise, it becomes:
   * export const E = [[enum]];
   */
  processNamedExportEnum() {
    if (this.isImportsTransformEnabled) {
      this.tokens.removeInitialToken();
      const n = this.tokens.identifierNameAtRelativeIndex(1);
      this.processEnum(), this.tokens.appendCode(` exports.${n} = ${n};`);
    } else
      this.tokens.copyToken(), this.processEnum();
  }
  /**
   * Handle a declaration like:
   * export default enum E
   *
   * With the imports transform, this becomes:
   * const E = [[enum]]; exports.default = E;
   *
   * otherwise, it becomes:
   * const E = [[enum]]; export default E;
   */
  processDefaultExportEnum() {
    this.tokens.removeInitialToken(), this.tokens.removeToken();
    const n = this.tokens.identifierNameAtRelativeIndex(1);
    this.processEnum(), this.isImportsTransformEnabled ? this.tokens.appendCode(` exports.default = ${n};`) : this.tokens.appendCode(` export default ${n};`);
  }
  /**
   * Transpile flow enums to invoke the "flow-enums-runtime" library.
   *
   * Currently, the transpiled code always uses `require("flow-enums-runtime")`,
   * but if future flexibility is needed, we could expose a config option for
   * this string (similar to configurable JSX). Even when targeting ESM, the
   * default behavior of babel-plugin-transform-flow-enums is to use require
   * rather than injecting an import.
   *
   * Flow enums are quite a bit simpler than TS enums and have some convenient
   * constraints:
   * - Element initializers must be either always present or always absent. That
   *   means that we can use fixed lookahead on the first element (if any) and
   *   assume that all elements are like that.
   * - The right-hand side of an element initializer must be a literal value,
   *   not a complex expression and not referencing other elements. That means
   *   we can simply copy a single token.
   *
   * Enums can be broken up into three basic cases:
   *
   * Mirrored enums:
   * enum E {A, B}
   *   ->
   * const E = require("flow-enums-runtime").Mirrored(["A", "B"]);
   *
   * Initializer enums:
   * enum E {A = 1, B = 2}
   *   ->
   * const E = require("flow-enums-runtime")({A: 1, B: 2});
   *
   * Symbol enums:
   * enum E of symbol {A, B}
   *   ->
   * const E = require("flow-enums-runtime")({A: Symbol("A"), B: Symbol("B")});
   *
   * We can statically detect which of the three cases this is by looking at the
   * "of" declaration (if any) and seeing if the first element has an initializer.
   * Since the other transform details are so similar between the three cases, we
   * use a single implementation and vary the transform within processEnumElement
   * based on case.
   */
  processEnum() {
    this.tokens.replaceToken("const"), this.tokens.copyExpectedToken(t.name);
    let n = !1;
    this.tokens.matchesContextual(l._of) && (this.tokens.removeToken(), n = this.tokens.matchesContextual(l._symbol), this.tokens.removeToken());
    const s = this.tokens.matches3(t.braceL, t.name, t.eq);
    this.tokens.appendCode(' = require("flow-enums-runtime")');
    const o = !n && !s;
    for (this.tokens.replaceTokenTrimmingLeftWhitespace(o ? ".Mirrored([" : "({"); !this.tokens.matches1(t.braceR); ) {
      if (this.tokens.matches1(t.ellipsis)) {
        this.tokens.removeToken();
        break;
      }
      this.processEnumElement(n, s), this.tokens.matches1(t.comma) && this.tokens.copyToken();
    }
    this.tokens.replaceToken(o ? "]);" : "});");
  }
  /**
   * Process an individual enum element, producing either an array element or an
   * object element based on what type of enum this is.
   */
  processEnumElement(n, s) {
    if (n) {
      const o = this.tokens.identifierName();
      this.tokens.copyToken(), this.tokens.appendCode(`: Symbol("${o}")`);
    } else s ? (this.tokens.copyToken(), this.tokens.replaceTokenTrimmingLeftWhitespace(":"), this.tokens.copyToken()) : this.tokens.replaceToken(`"${this.tokens.identifierName()}"`);
  }
}
function ul(e) {
  let n, s = e[0], o = 1;
  for (; o < e.length; ) {
    const i = e[o], c = e[o + 1];
    if (o += 2, (i === "optionalAccess" || i === "optionalCall") && s == null)
      return;
    i === "access" || i === "optionalAccess" ? (n = s, s = c(s)) : (i === "call" || i === "optionalCall") && (s = c((...h) => s.call(n, ...h)), n = void 0);
  }
  return s;
}
const hn = "jest", hl = ["mock", "unmock", "enableAutomock", "disableAutomock"];
class js extends nt {
  __init() {
    this.hoistedFunctionNames = [];
  }
  constructor(n, s, o, i) {
    super(), this.rootTransformer = n, this.tokens = s, this.nameManager = o, this.importProcessor = i, js.prototype.__init.call(this);
  }
  process() {
    return this.tokens.currentToken().scopeDepth === 0 && this.tokens.matches4(t.name, t.dot, t.name, t.parenL) && this.tokens.identifierName() === hn ? ul([this, "access", (n) => n.importProcessor, "optionalAccess", (n) => n.getGlobalNames, "call", (n) => n(), "optionalAccess", (n) => n.has, "call", (n) => n(hn)]) ? !1 : this.extractHoistedCalls() : !1;
  }
  getHoistedCode() {
    return this.hoistedFunctionNames.length > 0 ? this.hoistedFunctionNames.map((n) => `${n}();`).join("") : "";
  }
  /**
   * Extracts any methods calls on the jest-object that should be hoisted.
   *
   * According to the jest docs, https://jestjs.io/docs/en/jest-object#jestmockmodulename-factory-options,
   * mock, unmock, enableAutomock, disableAutomock, are the methods that should be hoisted.
   *
   * We do not apply the same checks of the arguments as babel-plugin-jest-hoist does.
   */
  extractHoistedCalls() {
    this.tokens.removeToken();
    let n = !1;
    for (; this.tokens.matches3(t.dot, t.name, t.parenL); ) {
      const s = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
      if (hl.includes(s)) {
        const i = this.nameManager.claimFreeName("__jestHoist");
        this.hoistedFunctionNames.push(i), this.tokens.replaceToken(`function ${i}(){${hn}.`), this.tokens.copyToken(), this.tokens.copyToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR), this.tokens.appendCode(";}"), n = !1;
      } else
        n ? this.tokens.copyToken() : this.tokens.replaceToken(`${hn}.`), this.tokens.copyToken(), this.tokens.copyToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR), n = !0;
    }
    return !0;
  }
}
class fl extends nt {
  constructor(n) {
    super(), this.tokens = n;
  }
  process() {
    if (this.tokens.matches1(t.num)) {
      const n = this.tokens.currentTokenCode();
      if (n.includes("_"))
        return this.tokens.replaceToken(n.replace(/_/g, "")), !0;
    }
    return !1;
  }
}
class pl extends nt {
  constructor(n, s) {
    super(), this.tokens = n, this.nameManager = s;
  }
  process() {
    return this.tokens.matches2(t._catch, t.braceL) ? (this.tokens.copyToken(), this.tokens.appendCode(` (${this.nameManager.claimFreeName("e")})`), !0) : !1;
  }
}
class ml extends nt {
  constructor(n, s) {
    super(), this.tokens = n, this.nameManager = s;
  }
  process() {
    if (this.tokens.matches1(t.nullishCoalescing)) {
      const o = this.tokens.currentToken();
      return this.tokens.tokens[o.nullishStartIndex].isAsyncOperation ? this.tokens.replaceTokenTrimmingLeftWhitespace(", async () => (") : this.tokens.replaceTokenTrimmingLeftWhitespace(", () => ("), !0;
    }
    if (this.tokens.matches1(t._delete) && this.tokens.tokenAtRelativeIndex(1).isOptionalChainStart)
      return this.tokens.removeInitialToken(), !0;
    const s = this.tokens.currentToken().subscriptStartIndex;
    if (s != null && this.tokens.tokens[s].isOptionalChainStart && // Super subscripts can't be optional (since super is never null/undefined), and the syntax
    // relies on the subscript being intact, so leave this token alone.
    this.tokens.tokenAtRelativeIndex(-1).type !== t._super) {
      const o = this.nameManager.claimFreeName("_");
      let i;
      if (s > 0 && this.tokens.matches1AtIndex(s - 1, t._delete) && this.isLastSubscriptInChain() ? i = `${o} => delete ${o}` : i = `${o} => ${o}`, this.tokens.tokens[s].isAsyncOperation && (i = `async ${i}`), this.tokens.matches2(t.questionDot, t.parenL) || this.tokens.matches2(t.questionDot, t.lessThan))
        this.justSkippedSuper() && this.tokens.appendCode(".bind(this)"), this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalCall', ${i}`);
      else if (this.tokens.matches2(t.questionDot, t.bracketL))
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${i}`);
      else if (this.tokens.matches1(t.questionDot))
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${i}.`);
      else if (this.tokens.matches1(t.dot))
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${i}.`);
      else if (this.tokens.matches1(t.bracketL))
        this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${i}[`);
      else if (this.tokens.matches1(t.parenL))
        this.justSkippedSuper() && this.tokens.appendCode(".bind(this)"), this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'call', ${i}(`);
      else
        throw new Error("Unexpected subscript operator in optional chain.");
      return !0;
    }
    return !1;
  }
  /**
   * Determine if the current token is the last of its chain, so that we know whether it's eligible
   * to have a delete op inserted.
   *
   * We can do this by walking forward until we determine one way or another. Each
   * isOptionalChainStart token must be paired with exactly one isOptionalChainEnd token after it in
   * a nesting way, so we can track depth and walk to the end of the chain (the point where the
   * depth goes negative) and see if any other subscript token is after us in the chain.
   */
  isLastSubscriptInChain() {
    let n = 0;
    for (let s = this.tokens.currentIndex() + 1; ; s++) {
      if (s >= this.tokens.tokens.length)
        throw new Error("Reached the end of the code while finding the end of the access chain.");
      if (this.tokens.tokens[s].isOptionalChainStart ? n++ : this.tokens.tokens[s].isOptionalChainEnd && n--, n < 0)
        return !0;
      if (n === 0 && this.tokens.tokens[s].subscriptStartIndex != null)
        return !1;
    }
  }
  /**
   * Determine if we are the open-paren in an expression like super.a()?.b.
   *
   * We can do this by walking backward to find the previous subscript. If that subscript was
   * preceded by a super, then we must be the subscript after it, so if this is a call expression,
   * we'll need to attach the right context.
   */
  justSkippedSuper() {
    let n = 0, s = this.tokens.currentIndex() - 1;
    for (; ; ) {
      if (s < 0)
        throw new Error(
          "Reached the start of the code while finding the start of the access chain."
        );
      if (this.tokens.tokens[s].isOptionalChainStart ? n-- : this.tokens.tokens[s].isOptionalChainEnd && n++, n < 0)
        return !1;
      if (n === 0 && this.tokens.tokens[s].subscriptStartIndex != null)
        return this.tokens.tokens[s - 1].type === t._super;
      s--;
    }
  }
}
class dl extends nt {
  constructor(n, s, o, i) {
    super(), this.rootTransformer = n, this.tokens = s, this.importProcessor = o, this.options = i;
  }
  process() {
    const n = this.tokens.currentIndex();
    if (this.tokens.identifierName() === "createReactClass") {
      const s = this.importProcessor && this.importProcessor.getIdentifierReplacement("createReactClass");
      return s ? this.tokens.replaceToken(`(0, ${s})`) : this.tokens.copyToken(), this.tryProcessCreateClassCall(n), !0;
    }
    if (this.tokens.matches3(t.name, t.dot, t.name) && this.tokens.identifierName() === "React" && this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 2) === "createClass") {
      const s = this.importProcessor && this.importProcessor.getIdentifierReplacement("React") || "React";
      return s ? (this.tokens.replaceToken(s), this.tokens.copyToken(), this.tokens.copyToken()) : (this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.copyToken()), this.tryProcessCreateClassCall(n), !0;
    }
    return !1;
  }
  /**
   * This is called with the token position at the open-paren.
   */
  tryProcessCreateClassCall(n) {
    const s = this.findDisplayName(n);
    s && this.classNeedsDisplayName() && (this.tokens.copyExpectedToken(t.parenL), this.tokens.copyExpectedToken(t.braceL), this.tokens.appendCode(`displayName: '${s}',`), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.braceR), this.tokens.copyExpectedToken(t.parenR));
  }
  findDisplayName(n) {
    return n < 2 ? null : this.tokens.matches2AtIndex(n - 2, t.name, t.eq) ? this.tokens.identifierNameAtIndex(n - 2) : n >= 2 && this.tokens.tokens[n - 2].identifierRole === B.ObjectKey ? this.tokens.identifierNameAtIndex(n - 2) : this.tokens.matches2AtIndex(n - 2, t._export, t._default) ? this.getDisplayNameFromFilename() : null;
  }
  getDisplayNameFromFilename() {
    const s = (this.options.filePath || "unknown").split("/"), o = s[s.length - 1], i = o.lastIndexOf("."), c = i === -1 ? o : o.slice(0, i);
    return c === "index" && s[s.length - 2] ? s[s.length - 2] : c;
  }
  /**
   * We only want to add a display name when this is a function call containing
   * one argument, which is an object literal without `displayName` as an
   * existing key.
   */
  classNeedsDisplayName() {
    let n = this.tokens.currentIndex();
    if (!this.tokens.matches2(t.parenL, t.braceL))
      return !1;
    const s = n + 1, o = this.tokens.tokens[s].contextId;
    if (o == null)
      throw new Error("Expected non-null context ID on object open-brace.");
    for (; n < this.tokens.tokens.length; n++) {
      const i = this.tokens.tokens[n];
      if (i.type === t.braceR && i.contextId === o) {
        n++;
        break;
      }
      if (this.tokens.identifierNameAtIndex(n) === "displayName" && this.tokens.tokens[n].identifierRole === B.ObjectKey && i.contextId === o)
        return !1;
    }
    if (n === this.tokens.tokens.length)
      throw new Error("Unexpected end of input when processing React class.");
    return this.tokens.matches1AtIndex(n, t.parenR) || this.tokens.matches2AtIndex(n, t.comma, t.parenR);
  }
}
class qs extends nt {
  __init() {
    this.extractedDefaultExportName = null;
  }
  constructor(n, s) {
    super(), this.tokens = n, this.filePath = s, qs.prototype.__init.call(this);
  }
  setExtractedDefaultExportName(n) {
    this.extractedDefaultExportName = n;
  }
  getPrefixCode() {
    return `
      (function () {
        var enterModule = require('react-hot-loader').enterModule;
        enterModule && enterModule(module);
      })();`.replace(/\s+/g, " ").trim();
  }
  getSuffixCode() {
    const n = /* @__PURE__ */ new Set();
    for (const o of this.tokens.tokens)
      !o.isType && d1(o) && o.identifierRole !== B.ImportDeclaration && n.add(this.tokens.identifierNameForToken(o));
    const s = Array.from(n).map((o) => ({
      variableName: o,
      uniqueLocalName: o
    }));
    return this.extractedDefaultExportName && s.push({
      variableName: this.extractedDefaultExportName,
      uniqueLocalName: "default"
    }), `
;(function () {
  var reactHotLoader = require('react-hot-loader').default;
  var leaveModule = require('react-hot-loader').leaveModule;
  if (!reactHotLoader) {
    return;
  }
${s.map(
      ({ variableName: o, uniqueLocalName: i }) => `  reactHotLoader.register(${o}, "${i}", ${JSON.stringify(
        this.filePath || ""
      )});`
    ).join(`
`)}
  leaveModule(module);
})();`;
  }
  process() {
    return !1;
  }
}
const kl = /* @__PURE__ */ new Set([
  // Reserved keywords as of ECMAScript 2015
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "export",
  "extends",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "new",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
  // Future reserved keywords
  "enum",
  "implements",
  "interface",
  "let",
  "package",
  "private",
  "protected",
  "public",
  "static",
  "await",
  // Literals that cannot be used as identifiers
  "false",
  "null",
  "true"
]);
function a1(e) {
  if (e.length === 0 || !tn[e.charCodeAt(0)])
    return !1;
  for (let n = 1; n < e.length; n++)
    if (!tt[e.charCodeAt(n)])
      return !1;
  return !kl.has(e);
}
class gl extends nt {
  constructor(n, s, o) {
    super(), this.rootTransformer = n, this.tokens = s, this.isImportsTransformEnabled = o;
  }
  process() {
    return this.rootTransformer.processPossibleArrowParamEnd() || this.rootTransformer.processPossibleAsyncArrowWithTypeParams() || this.rootTransformer.processPossibleTypeRange() ? !0 : this.tokens.matches1(t._public) || this.tokens.matches1(t._protected) || this.tokens.matches1(t._private) || this.tokens.matches1(t._abstract) || this.tokens.matches1(t._readonly) || this.tokens.matches1(t._override) || this.tokens.matches1(t.nonNullAssertion) ? (this.tokens.removeInitialToken(), !0) : this.tokens.matches1(t._enum) || this.tokens.matches2(t._const, t._enum) ? (this.processEnum(), !0) : this.tokens.matches2(t._export, t._enum) || this.tokens.matches3(t._export, t._const, t._enum) ? (this.processEnum(!0), !0) : !1;
  }
  processEnum(n = !1) {
    for (this.tokens.removeInitialToken(); this.tokens.matches1(t._const) || this.tokens.matches1(t._enum); )
      this.tokens.removeToken();
    const s = this.tokens.identifierName();
    this.tokens.removeToken(), n && !this.isImportsTransformEnabled && this.tokens.appendCode("export "), this.tokens.appendCode(`var ${s}; (function (${s})`), this.tokens.copyExpectedToken(t.braceL), this.processEnumBody(s), this.tokens.copyExpectedToken(t.braceR), n && this.isImportsTransformEnabled ? this.tokens.appendCode(`)(${s} || (exports.${s} = ${s} = {}));`) : this.tokens.appendCode(`)(${s} || (${s} = {}));`);
  }
  /**
   * Transform an enum into equivalent JS. This has complexity in a few places:
   * - TS allows string enums, numeric enums, and a mix of the two styles within an enum.
   * - Enum keys are allowed to be referenced in later enum values.
   * - Enum keys are allowed to be strings.
   * - When enum values are omitted, they should follow an auto-increment behavior.
   */
  processEnumBody(n) {
    let s = null;
    for (; !this.tokens.matches1(t.braceR); ) {
      const { nameStringCode: o, variableName: i } = this.extractEnumKeyInfo(this.tokens.currentToken());
      this.tokens.removeInitialToken(), this.tokens.matches3(t.eq, t.string, t.comma) || this.tokens.matches3(t.eq, t.string, t.braceR) ? this.processStringLiteralEnumMember(n, o, i) : this.tokens.matches1(t.eq) ? this.processExplicitValueEnumMember(n, o, i) : this.processImplicitValueEnumMember(
        n,
        o,
        i,
        s
      ), this.tokens.matches1(t.comma) && this.tokens.removeToken(), i != null ? s = i : s = `${n}[${o}]`;
    }
  }
  /**
   * Detect name information about this enum key, which will be used to determine which code to emit
   * and whether we should declare a variable as part of this declaration.
   *
   * Some cases to keep in mind:
   * - Enum keys can be implicitly referenced later, e.g. `X = 1, Y = X`. In Sucrase, we implement
   *   this by declaring a variable `X` so that later expressions can use it.
   * - In addition to the usual identifier key syntax, enum keys are allowed to be string literals,
   *   e.g. `"hello world" = 3,`. Template literal syntax is NOT allowed.
   * - Even if the enum key is defined as a string literal, it may still be referenced by identifier
   *   later, e.g. `"X" = 1, Y = X`. That means that we need to detect whether or not a string
   *   literal is identifier-like and emit a variable if so, even if the declaration did not use an
   *   identifier.
   * - Reserved keywords like `break` are valid enum keys, but are not valid to be referenced later
   *   and would be a syntax error if we emitted a variable, so we need to skip the variable
   *   declaration in those cases.
   *
   * The variableName return value captures these nuances: if non-null, we can and must emit a
   * variable declaration, and if null, we can't and shouldn't.
   */
  extractEnumKeyInfo(n) {
    if (n.type === t.name) {
      const s = this.tokens.identifierNameForToken(n);
      return {
        nameStringCode: `"${s}"`,
        variableName: a1(s) ? s : null
      };
    } else if (n.type === t.string) {
      const s = this.tokens.stringValueForToken(n);
      return {
        nameStringCode: this.tokens.code.slice(n.start, n.end),
        variableName: a1(s) ? s : null
      };
    } else
      throw new Error("Expected name or string at beginning of enum element.");
  }
  /**
   * Handle an enum member where the RHS is just a string literal (not omitted, not a number, and
   * not a complex expression). This is the typical form for TS string enums, and in this case, we
   * do *not* create a reverse mapping.
   *
   * This is called after deleting the key token, when the token processor is at the equals sign.
   *
   * Example 1:
   * someKey = "some value"
   * ->
   * const someKey = "some value"; MyEnum["someKey"] = someKey;
   *
   * Example 2:
   * "some key" = "some value"
   * ->
   * MyEnum["some key"] = "some value";
   */
  processStringLiteralEnumMember(n, s, o) {
    o != null ? (this.tokens.appendCode(`const ${o}`), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.appendCode(`; ${n}[${s}] = ${o};`)) : (this.tokens.appendCode(`${n}[${s}]`), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.appendCode(";"));
  }
  /**
   * Handle an enum member initialized with an expression on the right-hand side (other than a
   * string literal). In these cases, we should transform the expression and emit code that sets up
   * a reverse mapping.
   *
   * The TypeScript implementation of this operation distinguishes between expressions that can be
   * "constant folded" at compile time (i.e. consist of number literals and simple math operations
   * on those numbers) and ones that are dynamic. For constant expressions, it emits the resolved
   * numeric value, and auto-incrementing is only allowed in that case. Evaluating expressions at
   * compile time would add significant complexity to Sucrase, so Sucrase instead leaves the
   * expression as-is, and will later emit something like `MyEnum["previousKey"] + 1` to implement
   * auto-incrementing.
   *
   * This is called after deleting the key token, when the token processor is at the equals sign.
   *
   * Example 1:
   * someKey = 1 + 1
   * ->
   * const someKey = 1 + 1; MyEnum[MyEnum["someKey"] = someKey] = "someKey";
   *
   * Example 2:
   * "some key" = 1 + 1
   * ->
   * MyEnum[MyEnum["some key"] = 1 + 1] = "some key";
   */
  processExplicitValueEnumMember(n, s, o) {
    const i = this.tokens.currentToken().rhsEndIndex;
    if (i == null)
      throw new Error("Expected rhsEndIndex on enum assign.");
    if (o != null) {
      for (this.tokens.appendCode(`const ${o}`), this.tokens.copyToken(); this.tokens.currentIndex() < i; )
        this.rootTransformer.processToken();
      this.tokens.appendCode(
        `; ${n}[${n}[${s}] = ${o}] = ${s};`
      );
    } else {
      for (this.tokens.appendCode(`${n}[${n}[${s}]`), this.tokens.copyToken(); this.tokens.currentIndex() < i; )
        this.rootTransformer.processToken();
      this.tokens.appendCode(`] = ${s};`);
    }
  }
  /**
   * Handle an enum member with no right-hand side expression. In this case, the value is the
   * previous value plus 1, or 0 if there was no previous value. We should also always emit a
   * reverse mapping.
   *
   * Example 1:
   * someKey2
   * ->
   * const someKey2 = someKey1 + 1; MyEnum[MyEnum["someKey2"] = someKey2] = "someKey2";
   *
   * Example 2:
   * "some key 2"
   * ->
   * MyEnum[MyEnum["some key 2"] = someKey1 + 1] = "some key 2";
   */
  processImplicitValueEnumMember(n, s, o, i) {
    let c = i != null ? `${i} + 1` : "0";
    o != null && (this.tokens.appendCode(`const ${o} = ${c}; `), c = o), this.tokens.appendCode(
      `${n}[${n}[${s}] = ${c}] = ${s};`
    );
  }
}
class Tn {
  __init() {
    this.transformers = [];
  }
  __init2() {
    this.generatedVariables = [];
  }
  constructor(n, s, o, i) {
    Tn.prototype.__init.call(this), Tn.prototype.__init2.call(this), this.nameManager = n.nameManager, this.helperManager = n.helperManager;
    const { tokenProcessor: c, importProcessor: h } = n;
    this.tokens = c, this.isImportsTransformEnabled = s.includes("imports"), this.isReactHotLoaderTransformEnabled = s.includes("react-hot-loader"), this.disableESTransforms = !!i.disableESTransforms, i.disableESTransforms || (this.transformers.push(
      new ml(c, this.nameManager)
    ), this.transformers.push(new fl(c)), this.transformers.push(new pl(c, this.nameManager))), s.includes("jsx") && (i.jsxRuntime !== "preserve" && this.transformers.push(
      new Tt(this, c, h, this.nameManager, i)
    ), this.transformers.push(
      new dl(this, c, h, i)
    ));
    let k = null;
    if (s.includes("react-hot-loader")) {
      if (!i.filePath)
        throw new Error("filePath is required when using the react-hot-loader transform.");
      k = new qs(c, i.filePath), this.transformers.push(k);
    }
    if (s.includes("imports")) {
      if (h === null)
        throw new Error("Expected non-null importProcessor with imports transform enabled.");
      this.transformers.push(
        new zt(
          this,
          c,
          h,
          this.nameManager,
          this.helperManager,
          k,
          o,
          !!i.enableLegacyTypeScriptModuleInterop,
          s.includes("typescript"),
          s.includes("flow"),
          !!i.preserveDynamicImport,
          !!i.keepUnusedImports
        )
      );
    } else
      this.transformers.push(
        new cl(
          c,
          this.nameManager,
          this.helperManager,
          k,
          s.includes("typescript"),
          s.includes("flow"),
          !!i.keepUnusedImports,
          i
        )
      );
    s.includes("flow") && this.transformers.push(
      new ll(this, c, s.includes("imports"))
    ), s.includes("typescript") && this.transformers.push(
      new gl(this, c, s.includes("imports"))
    ), s.includes("jest") && this.transformers.push(
      new js(this, c, this.nameManager, h)
    );
  }
  transform() {
    this.tokens.reset(), this.processBalancedCode();
    let s = this.isImportsTransformEnabled ? '"use strict";' : "";
    for (const h of this.transformers)
      s += h.getPrefixCode();
    s += this.helperManager.emitHelpers(), s += this.generatedVariables.map((h) => ` var ${h};`).join("");
    for (const h of this.transformers)
      s += h.getHoistedCode();
    let o = "";
    for (const h of this.transformers)
      o += h.getSuffixCode();
    const i = this.tokens.finish();
    let { code: c } = i;
    if (c.startsWith("#!")) {
      let h = c.indexOf(`
`);
      return h === -1 && (h = c.length, c += `
`), {
        code: c.slice(0, h + 1) + s + c.slice(h + 1) + o,
        // The hashbang line has no tokens, so shifting the tokens to account
        // for prefix can happen normally.
        mappings: this.shiftMappings(i.mappings, s.length)
      };
    } else
      return {
        code: s + c + o,
        mappings: this.shiftMappings(i.mappings, s.length)
      };
  }
  processBalancedCode() {
    let n = 0, s = 0;
    for (; !this.tokens.isAtEnd(); ) {
      if (this.tokens.matches1(t.braceL) || this.tokens.matches1(t.dollarBraceL))
        n++;
      else if (this.tokens.matches1(t.braceR)) {
        if (n === 0)
          return;
        n--;
      }
      if (this.tokens.matches1(t.parenL))
        s++;
      else if (this.tokens.matches1(t.parenR)) {
        if (s === 0)
          return;
        s--;
      }
      this.processToken();
    }
  }
  processToken() {
    if (this.tokens.matches1(t._class)) {
      this.processClass();
      return;
    }
    for (const n of this.transformers)
      if (n.process())
        return;
    this.tokens.copyToken();
  }
  /**
   * Skip past a class with a name and return that name.
   */
  processNamedClass() {
    if (!this.tokens.matches2(t._class, t.name))
      throw new Error("Expected identifier for exported class name.");
    const n = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
    return this.processClass(), n;
  }
  processClass() {
    const n = ol(this, this.tokens, this.nameManager, this.disableESTransforms), s = (n.headerInfo.isExpression || !n.headerInfo.className) && n.staticInitializerNames.length + n.instanceInitializerNames.length > 0;
    let o = n.headerInfo.className;
    s && (o = this.nameManager.claimFreeName("_class"), this.generatedVariables.push(o), this.tokens.appendCode(` (${o} =`));
    const c = this.tokens.currentToken().contextId;
    if (c == null)
      throw new Error("Expected class to have a context ID.");
    for (this.tokens.copyExpectedToken(t._class); !this.tokens.matchesContextIdAndLabel(t.braceL, c); )
      this.processToken();
    this.processClassBody(n, o);
    const h = n.staticInitializerNames.map(
      (k) => `${o}.${k}()`
    );
    s ? this.tokens.appendCode(
      `, ${h.map((k) => `${k}, `).join("")}${o})`
    ) : n.staticInitializerNames.length > 0 && this.tokens.appendCode(` ${h.map((k) => `${k};`).join(" ")}`);
  }
  /**
   * We want to just handle class fields in all contexts, since TypeScript supports them. Later,
   * when some JS implementations support class fields, this should be made optional.
   */
  processClassBody(n, s) {
    const {
      headerInfo: o,
      constructorInsertPos: i,
      constructorInitializerStatements: c,
      fields: h,
      instanceInitializerNames: k,
      rangesToRemove: x
    } = n;
    let d = 0, w = 0;
    const P = this.tokens.currentToken().contextId;
    if (P == null)
      throw new Error("Expected non-null context ID on class.");
    this.tokens.copyExpectedToken(t.braceL), this.isReactHotLoaderTransformEnabled && this.tokens.appendCode(
      "__reactstandin__regenerateByEval(key, code) {this[key] = eval(code);}"
    );
    const I = c.length + k.length > 0;
    if (i === null && I) {
      const R = this.makeConstructorInitCode(
        c,
        k,
        s
      );
      if (o.hasSuperclass) {
        const G = this.nameManager.claimFreeName("args");
        this.tokens.appendCode(
          `constructor(...${G}) { super(...${G}); ${R}; }`
        );
      } else
        this.tokens.appendCode(`constructor() { ${R}; }`);
    }
    for (; !this.tokens.matchesContextIdAndLabel(t.braceR, P); )
      if (d < h.length && this.tokens.currentIndex() === h[d].start) {
        let R = !1;
        for (this.tokens.matches1(t.bracketL) ? this.tokens.copyTokenWithPrefix(`${h[d].initializerName}() {this`) : this.tokens.matches1(t.string) || this.tokens.matches1(t.num) ? (this.tokens.copyTokenWithPrefix(`${h[d].initializerName}() {this[`), R = !0) : this.tokens.copyTokenWithPrefix(`${h[d].initializerName}() {this.`); this.tokens.currentIndex() < h[d].end; )
          R && this.tokens.currentIndex() === h[d].equalsIndex && this.tokens.appendCode("]"), this.processToken();
        this.tokens.appendCode("}"), d++;
      } else if (w < x.length && this.tokens.currentIndex() >= x[w].start) {
        for (this.tokens.currentIndex() < x[w].end && this.tokens.removeInitialToken(); this.tokens.currentIndex() < x[w].end; )
          this.tokens.removeToken();
        w++;
      } else this.tokens.currentIndex() === i ? (this.tokens.copyToken(), I && this.tokens.appendCode(
        `;${this.makeConstructorInitCode(
          c,
          k,
          s
        )};`
      ), this.processToken()) : this.processToken();
    this.tokens.copyExpectedToken(t.braceR);
  }
  makeConstructorInitCode(n, s, o) {
    return [
      ...n,
      ...s.map((i) => `${o}.prototype.${i}.call(this)`)
    ].join(";");
  }
  /**
   * Normally it's ok to simply remove type tokens, but we need to be more careful when dealing with
   * arrow function return types since they can confuse the parser. In that case, we want to move
   * the close-paren to the same line as the arrow.
   *
   * See https://github.com/alangpierce/sucrase/issues/391 for more details.
   */
  processPossibleArrowParamEnd() {
    if (this.tokens.matches2(t.parenR, t.colon) && this.tokens.tokenAtRelativeIndex(1).isType) {
      let n = this.tokens.currentIndex() + 1;
      for (; this.tokens.tokens[n].isType; )
        n++;
      if (this.tokens.matches1AtIndex(n, t.arrow)) {
        for (this.tokens.removeInitialToken(); this.tokens.currentIndex() < n; )
          this.tokens.removeToken();
        return this.tokens.replaceTokenTrimmingLeftWhitespace(") =>"), !0;
      }
    }
    return !1;
  }
  /**
   * An async arrow function might be of the form:
   *
   * async <
   *   T
   * >() => {}
   *
   * in which case, removing the type parameters will cause a syntax error. Detect this case and
   * move the open-paren earlier.
   */
  processPossibleAsyncArrowWithTypeParams() {
    if (!this.tokens.matchesContextual(l._async) && !this.tokens.matches1(t._async))
      return !1;
    const n = this.tokens.tokenAtRelativeIndex(1);
    if (n.type !== t.lessThan || !n.isType)
      return !1;
    let s = this.tokens.currentIndex() + 1;
    for (; this.tokens.tokens[s].isType; )
      s++;
    if (this.tokens.matches1AtIndex(s, t.parenL)) {
      for (this.tokens.replaceToken("async ("), this.tokens.removeInitialToken(); this.tokens.currentIndex() < s; )
        this.tokens.removeToken();
      return this.tokens.removeToken(), this.processBalancedCode(), this.processToken(), !0;
    }
    return !1;
  }
  processPossibleTypeRange() {
    if (this.tokens.currentToken().isType) {
      for (this.tokens.removeInitialToken(); this.tokens.currentToken().isType; )
        this.tokens.removeToken();
      return !0;
    }
    return !1;
  }
  shiftMappings(n, s) {
    for (let o = 0; o < n.length; o++) {
      const i = n[o];
      i !== void 0 && (n[o] = i + s);
    }
    return n;
  }
}
var Ir = {};
(function(e) {
  e.__esModule = !0, e.LinesAndColumns = void 0;
  var n = `
`, s = "\r", o = (
    /** @class */
    function() {
      function i(c) {
        this.string = c;
        for (var h = [0], k = 0; k < c.length; )
          switch (c[k]) {
            case n:
              k += n.length, h.push(k);
              break;
            case s:
              k += s.length, c[k] === n && (k += n.length), h.push(k);
              break;
            default:
              k++;
              break;
          }
        this.offsets = h;
      }
      return i.prototype.locationForIndex = function(c) {
        if (c < 0 || c > this.string.length)
          return null;
        for (var h = 0, k = this.offsets; k[h + 1] <= c; )
          h++;
        var x = c - k[h];
        return { line: h, column: x };
      }, i.prototype.indexForLocation = function(c) {
        var h = c.line, k = c.column;
        return h < 0 || h >= this.offsets.length || k < 0 || k > this.lengthOfLine(h) ? null : this.offsets[h] + k;
      }, i.prototype.lengthOfLine = function(c) {
        var h = this.offsets[c], k = c === this.offsets.length - 1 ? this.string.length : this.offsets[c + 1];
        return k - h;
      }, i;
    }()
  );
  e.LinesAndColumns = o, e.default = o;
})(Ir);
const _l = /* @__PURE__ */ qr(Ir);
function yl(e, n) {
  if (n.length === 0)
    return "";
  const s = Object.keys(n[0]).filter(
    (I) => I !== "type" && I !== "value" && I !== "start" && I !== "end" && I !== "loc"
  ), o = Object.keys(n[0].type).filter((I) => I !== "label" && I !== "keyword"), i = ["Location", "Label", "Raw", ...s, ...o], c = new _l(e), h = [i, ...n.map(x)], k = i.map(() => 0);
  for (const I of h)
    for (let R = 0; R < I.length; R++)
      k[R] = Math.max(k[R], I[R].length);
  return h.map((I) => I.map((R, G) => R.padEnd(k[G])).join(" ")).join(`
`);
  function x(I) {
    const R = e.slice(I.start, I.end);
    return [
      w(I.start, I.end),
      l1(I.type),
      xl(String(R), 14),
      // @ts-ignore: Intentional dynamic access by key.
      ...s.map((G) => d(I[G], G)),
      // @ts-ignore: Intentional dynamic access by key.
      ...o.map((G) => d(I.type[G], G))
    ];
  }
  function d(I, R) {
    return I === !0 ? R : I === !1 || I === null ? "" : String(I);
  }
  function w(I, R) {
    return `${P(I)}-${P(R)}`;
  }
  function P(I) {
    const R = c.locationForIndex(I);
    return R ? `${R.line + 1}:${R.column + 1}` : "Unknown";
  }
}
function xl(e, n) {
  return e.length > n ? `${e.slice(0, n - 3)}...` : e;
}
function Il(e) {
  const n = /* @__PURE__ */ new Set();
  for (let s = 0; s < e.tokens.length; s++)
    e.matches1AtIndex(s, t._import) && !e.matches3AtIndex(s, t._import, t.name, t.eq) && bl(e, s, n);
  return n;
}
function bl(e, n, s) {
  n++, !e.matches1AtIndex(n, t.parenL) && (e.matches1AtIndex(n, t.name) && (s.add(e.identifierNameAtIndex(n)), n++, e.matches1AtIndex(n, t.comma) && n++), e.matches1AtIndex(n, t.star) && (n += 2, s.add(e.identifierNameAtIndex(n)), n++), e.matches1AtIndex(n, t.braceL) && (n++, wl(e, n, s)));
}
function wl(e, n, s) {
  for (; ; ) {
    if (e.matches1AtIndex(n, t.braceR))
      return;
    const o = Qt(e, n);
    if (n = o.endIndex, o.isType || s.add(o.rightName), e.matches2AtIndex(n, t.comma, t.braceR))
      return;
    if (e.matches1AtIndex(n, t.braceR))
      return;
    if (e.matches1AtIndex(n, t.comma))
      n++;
    else
      throw new Error(`Unexpected token: ${JSON.stringify(e.tokens[n])}`);
  }
}
function El() {
  return "3.35.0";
}
function Sl(e, n) {
  jo(n);
  try {
    const s = br(e, n), i = new Tn(
      s,
      n.transforms,
      !!n.enableLegacyBabel5ModuleInterop,
      n
    ).transform();
    let c = { code: i.code };
    if (n.sourceMapOptions) {
      if (!n.filePath)
        throw new Error("filePath must be specified when generating a source map.");
      c = {
        ...c,
        sourceMap: To(
          i,
          n.filePath,
          n.sourceMapOptions,
          e,
          s.tokenProcessor.tokens
        )
      };
    }
    return c;
  } catch (s) {
    throw n.filePath && (s.message = `Error transforming ${n.filePath}: ${s.message}`), s;
  }
}
function Al(e, n) {
  const s = br(e, n).tokenProcessor.tokens;
  return yl(e, s);
}
function br(e, n) {
  const s = n.transforms.includes("jsx"), o = n.transforms.includes("typescript"), i = n.transforms.includes("flow"), c = n.disableESTransforms === !0, h = sl(e, s, o, i), k = h.tokens, x = h.scopes, d = new ms(e, k), w = new kn(d), P = new Xt(
    e,
    k,
    i,
    c,
    w
  ), I = !!n.enableLegacyTypeScriptModuleInterop;
  let R = null;
  return n.transforms.includes("imports") ? (R = new Et(
    d,
    P,
    I,
    n,
    n.transforms.includes("typescript"),
    !!n.keepUnusedImports,
    w
  ), R.preprocessTokens(), Xs(P, x, R.getGlobalNames()), n.transforms.includes("typescript") && !n.keepUnusedImports && R.pruneTypeOnlyImports()) : n.transforms.includes("typescript") && !n.keepUnusedImports && Xs(P, x, Il(P)), { tokenProcessor: P, scopes: x, nameManager: d, importProcessor: R, helperManager: w };
}
export {
  Al as getFormattedTokens,
  El as getVersion,
  Sl as transform
};

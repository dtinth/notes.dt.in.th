import { g as Ju } from "./unocss_DW1qlqnA.js";
import { c as Zu } from "./micromark_56cY9bNe.js";
class Te {
  /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */
  constructor(t, u, n) {
    this.property = t, this.normal = u, n && (this.space = n);
  }
}
Te.prototype.property = {};
Te.prototype.normal = {};
Te.prototype.space = null;
function Jt(e, t) {
  const u = {}, n = {};
  let s = -1;
  for (; ++s < e.length; )
    Object.assign(u, e[s].property), Object.assign(n, e[s].normal);
  return new Te(u, n, t);
}
function he(e) {
  return e.toLowerCase();
}
class H {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */
  constructor(t, u) {
    this.property = t, this.attribute = u;
  }
}
H.prototype.space = null;
H.prototype.boolean = !1;
H.prototype.booleanish = !1;
H.prototype.overloadedBoolean = !1;
H.prototype.number = !1;
H.prototype.commaSeparated = !1;
H.prototype.spaceSeparated = !1;
H.prototype.commaOrSpaceSeparated = !1;
H.prototype.mustUseProperty = !1;
H.prototype.defined = !1;
let ea = 0;
const A = K(), R = K(), Zt = K(), p = K(), N = K(), J = K(), U = K();
function K() {
  return 2 ** ++ea;
}
const Ke = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: A,
  booleanish: R,
  commaOrSpaceSeparated: U,
  commaSeparated: J,
  number: p,
  overloadedBoolean: Zt,
  spaceSeparated: N
}, Symbol.toStringTag, { value: "Module" })), Ue = Object.keys(Ke);
class rt extends H {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(t, u, n, s) {
    let c = -1;
    if (super(t, u), bt(this, "space", s), typeof n == "number")
      for (; ++c < Ue.length; ) {
        const l = Ue[c];
        bt(this, Ue[c], (n & Ke[l]) === Ke[l]);
      }
  }
}
rt.prototype.defined = !0;
function bt(e, t, u) {
  u && (e[t] = u);
}
const ta = {}.hasOwnProperty;
function te(e) {
  const t = {}, u = {};
  let n;
  for (n in e.properties)
    if (ta.call(e.properties, n)) {
      const s = e.properties[n], c = new rt(
        n,
        e.transform(e.attributes || {}, n),
        s,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(n) && (c.mustUseProperty = !0), t[n] = c, u[he(n)] = n, u[he(c.attribute)] = n;
    }
  return new Te(t, u, e.space);
}
const eu = te({
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
}), tu = te({
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function uu(e, t) {
  return t in e ? e[t] : t;
}
function au(e, t) {
  return uu(e, t.toLowerCase());
}
const nu = te({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: au,
  properties: { xmlns: null, xmlnsXLink: null }
}), su = te({
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: R,
    ariaAutoComplete: null,
    ariaBusy: R,
    ariaChecked: R,
    ariaColCount: p,
    ariaColIndex: p,
    ariaColSpan: p,
    ariaControls: N,
    ariaCurrent: null,
    ariaDescribedBy: N,
    ariaDetails: null,
    ariaDisabled: R,
    ariaDropEffect: N,
    ariaErrorMessage: null,
    ariaExpanded: R,
    ariaFlowTo: N,
    ariaGrabbed: R,
    ariaHasPopup: null,
    ariaHidden: R,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: N,
    ariaLevel: p,
    ariaLive: null,
    ariaModal: R,
    ariaMultiLine: R,
    ariaMultiSelectable: R,
    ariaOrientation: null,
    ariaOwns: N,
    ariaPlaceholder: null,
    ariaPosInSet: p,
    ariaPressed: R,
    ariaReadOnly: R,
    ariaRelevant: null,
    ariaRequired: R,
    ariaRoleDescription: N,
    ariaRowCount: p,
    ariaRowIndex: p,
    ariaRowSpan: p,
    ariaSelected: R,
    ariaSetSize: p,
    ariaSort: null,
    ariaValueMax: p,
    ariaValueMin: p,
    ariaValueNow: p,
    ariaValueText: null,
    role: null
  }
}), ua = te({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: au,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: J,
    acceptCharset: N,
    accessKey: N,
    action: null,
    allow: null,
    allowFullScreen: A,
    allowPaymentRequest: A,
    allowUserMedia: A,
    alt: null,
    as: null,
    async: A,
    autoCapitalize: null,
    autoComplete: N,
    autoFocus: A,
    autoPlay: A,
    blocking: N,
    capture: null,
    charSet: null,
    checked: A,
    cite: null,
    className: N,
    cols: p,
    colSpan: null,
    content: null,
    contentEditable: R,
    controls: A,
    controlsList: N,
    coords: p | J,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: A,
    defer: A,
    dir: null,
    dirName: null,
    disabled: A,
    download: Zt,
    draggable: R,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: A,
    formTarget: null,
    headers: N,
    height: p,
    hidden: A,
    high: p,
    href: null,
    hrefLang: null,
    htmlFor: N,
    httpEquiv: N,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: A,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: A,
    itemId: null,
    itemProp: N,
    itemRef: N,
    itemScope: A,
    itemType: N,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: A,
    low: p,
    manifest: null,
    max: null,
    maxLength: p,
    media: null,
    method: null,
    min: null,
    minLength: p,
    multiple: A,
    muted: A,
    name: null,
    nonce: null,
    noModule: A,
    noValidate: A,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: A,
    optimum: p,
    pattern: null,
    ping: N,
    placeholder: null,
    playsInline: A,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: A,
    referrerPolicy: null,
    rel: N,
    required: A,
    reversed: A,
    rows: p,
    rowSpan: p,
    sandbox: N,
    scope: null,
    scoped: A,
    seamless: A,
    selected: A,
    shadowRootClonable: A,
    shadowRootDelegatesFocus: A,
    shadowRootMode: null,
    shape: null,
    size: p,
    sizes: null,
    slot: null,
    span: p,
    spellCheck: R,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: p,
    step: null,
    style: null,
    tabIndex: p,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: A,
    useMap: null,
    value: R,
    width: p,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: N,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: p,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: p,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: A,
    // Lists. Use CSS to reduce space between items instead
    declare: A,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: p,
    // `<img>` and `<object>`
    leftMargin: p,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: p,
    // `<body>`
    marginWidth: p,
    // `<body>`
    noResize: A,
    // `<frame>`
    noHref: A,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: A,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: A,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: p,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: R,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: p,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: p,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: A,
    disableRemotePlayback: A,
    prefix: null,
    property: null,
    results: p,
    security: null,
    unselectable: null
  }
}), aa = te({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: uu,
  properties: {
    about: U,
    accentHeight: p,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: p,
    amplitude: p,
    arabicForm: null,
    ascent: p,
    attributeName: null,
    attributeType: null,
    azimuth: p,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: p,
    by: null,
    calcMode: null,
    capHeight: p,
    className: N,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: p,
    diffuseConstant: p,
    direction: null,
    display: null,
    dur: null,
    divisor: p,
    dominantBaseline: null,
    download: A,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: p,
    enableBackground: null,
    end: null,
    event: null,
    exponent: p,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: p,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: J,
    g2: J,
    glyphName: J,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: p,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: p,
    horizOriginX: p,
    horizOriginY: p,
    id: null,
    ideographic: p,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: p,
    k: p,
    k1: p,
    k2: p,
    k3: p,
    k4: p,
    kernelMatrix: U,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: p,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: p,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: p,
    overlineThickness: p,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: p,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: N,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: p,
    pointsAtY: p,
    pointsAtZ: p,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: U,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: U,
    rev: U,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: U,
    requiredFeatures: U,
    requiredFonts: U,
    requiredFormats: U,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: p,
    specularExponent: p,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: p,
    strikethroughThickness: p,
    string: null,
    stroke: null,
    strokeDashArray: U,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: p,
    strokeOpacity: p,
    strokeWidth: null,
    style: null,
    surfaceScale: p,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: U,
    tabIndex: p,
    tableValues: null,
    target: null,
    targetX: p,
    targetY: p,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: U,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: p,
    underlineThickness: p,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: p,
    values: null,
    vAlphabetic: p,
    vMathematical: p,
    vectorEffect: null,
    vHanging: p,
    vIdeographic: p,
    version: null,
    vertAdvY: p,
    vertOriginX: p,
    vertOriginY: p,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: p,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
}), na = /^data[-\w.:]+$/i, pt = /-[a-z]/g, sa = /[A-Z]/g;
function it(e, t) {
  const u = he(t);
  let n = t, s = H;
  if (u in e.normal)
    return e.property[e.normal[u]];
  if (u.length > 4 && u.slice(0, 4) === "data" && na.test(t)) {
    if (t.charAt(4) === "-") {
      const c = t.slice(5).replace(pt, ia);
      n = "data" + c.charAt(0).toUpperCase() + c.slice(1);
    } else {
      const c = t.slice(4);
      if (!pt.test(c)) {
        let l = c.replace(sa, ra);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    s = rt;
  }
  return new s(n, t);
}
function ra(e) {
  return "-" + e.toLowerCase();
}
function ia(e) {
  return e.charAt(1).toUpperCase();
}
const De = Jt([tu, eu, nu, su, ua], "html"), me = Jt([tu, eu, nu, su, aa], "svg");
function _t(e) {
  const t = [], u = String(e || "");
  let n = u.indexOf(","), s = 0, c = !1;
  for (; !c; ) {
    n === -1 && (n = u.length, c = !0);
    const l = u.slice(s, n).trim();
    (l || !c) && t.push(l), s = n + 1, n = u.indexOf(",", s);
  }
  return t;
}
function ca(e, t) {
  const u = t || {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (u.padRight ? " " : "") + "," + (u.padLeft === !1 ? "" : " ")
  ).trim();
}
const At = /[#.]/g;
function oa(e, t) {
  const u = e || "", n = {};
  let s = 0, c, l;
  for (; s < u.length; ) {
    At.lastIndex = s;
    const f = At.exec(u), T = u.slice(s, f ? f.index : u.length);
    T && (c ? c === "#" ? n.id = T : Array.isArray(n.className) ? n.className.push(T) : n.className = [T] : l = T, s += T.length), f && (c = f[0], s++);
  }
  return {
    type: "element",
    // @ts-expect-error: tag name is parsed.
    tagName: l || t || "div",
    properties: n,
    children: []
  };
}
function gt(e) {
  const t = String(e || "").trim();
  return t ? t.split(/[ \t\n\r\f]+/g) : [];
}
function la(e) {
  return e.join(" ").trim();
}
const da = /* @__PURE__ */ new Set(["button", "menu", "reset", "submit"]), ze = {}.hasOwnProperty;
function ru(e, t, u) {
  const n = u && Ta(u);
  function s(c, l, ...f) {
    let T = -1, m;
    if (c == null) {
      m = { type: "root", children: [] };
      const _ = (
        /** @type {Child} */
        l
      );
      f.unshift(_);
    } else if (m = oa(c, t), m.tagName = m.tagName.toLowerCase(), n && ze.call(n, m.tagName) && (m.tagName = n[m.tagName]), fa(l, m.tagName)) {
      let _;
      for (_ in l)
        ze.call(l, _) && ha(e, m.properties, _, l[_]);
    } else
      f.unshift(l);
    for (; ++T < f.length; )
      je(m.children, f[T]);
    return m.type === "element" && m.tagName === "template" && (m.content = { type: "root", children: m.children }, m.children = []), m;
  }
  return s;
}
function fa(e, t) {
  return e == null || typeof e != "object" || Array.isArray(e) ? !1 : t === "input" || !e.type || typeof e.type != "string" ? !0 : "children" in e && Array.isArray(e.children) ? !1 : t === "button" ? da.has(e.type.toLowerCase()) : !("value" in e);
}
function ha(e, t, u, n) {
  const s = it(e, u);
  let c = -1, l;
  if (n != null) {
    if (typeof n == "number") {
      if (Number.isNaN(n)) return;
      l = n;
    } else typeof n == "boolean" ? l = n : typeof n == "string" ? s.spaceSeparated ? l = gt(n) : s.commaSeparated ? l = _t(n) : s.commaOrSpaceSeparated ? l = gt(_t(n).join(" ")) : l = Ct(s, s.property, n) : Array.isArray(n) ? l = n.concat() : l = s.property === "style" ? Ea(n) : String(n);
    if (Array.isArray(l)) {
      const f = [];
      for (; ++c < l.length; ) {
        const T = (
          /** @type {number | string} */
          Ct(s, s.property, l[c])
        );
        f[c] = T;
      }
      l = f;
    }
    if (s.property === "className" && Array.isArray(t.className)) {
      const f = (
        /** @type {number | string} */
        l
      );
      l = t.className.concat(f);
    }
    t[s.property] = l;
  }
}
function je(e, t) {
  let u = -1;
  if (t != null) if (typeof t == "string" || typeof t == "number")
    e.push({ type: "text", value: String(t) });
  else if (Array.isArray(t))
    for (; ++u < t.length; )
      je(e, t[u]);
  else if (typeof t == "object" && "type" in t)
    t.type === "root" ? je(e, t.children) : e.push(t);
  else
    throw new Error("Expected node, nodes, or string, got `" + t + "`");
}
function Ct(e, t, u) {
  if (typeof u == "string") {
    if (e.number && u && !Number.isNaN(Number(u)))
      return Number(u);
    if ((e.boolean || e.overloadedBoolean) && (u === "" || he(u) === he(t)))
      return !0;
  }
  return u;
}
function Ea(e) {
  const t = [];
  let u;
  for (u in e)
    ze.call(e, u) && t.push([u, e[u]].join(": "));
  return t.join("; ");
}
function Ta(e) {
  const t = {};
  let u = -1;
  for (; ++u < e.length; )
    t[e[u].toLowerCase()] = e[u];
  return t;
}
const ma = [
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "solidColor",
  "textArea",
  "textPath"
], ba = ru(De, "div"), pa = ru(me, "g", ma);
function _a(e) {
  const t = String(e), u = [];
  return { toOffset: s, toPoint: n };
  function n(c) {
    if (typeof c == "number" && c > -1 && c <= t.length) {
      let l = 0;
      for (; ; ) {
        let f = u[l];
        if (f === void 0) {
          const T = Nt(t, u[l - 1]);
          f = T === -1 ? t.length + 1 : T + 1, u[l] = f;
        }
        if (f > c)
          return {
            line: l + 1,
            column: c - (l > 0 ? u[l - 1] : 0) + 1,
            offset: c
          };
        l++;
      }
    }
  }
  function s(c) {
    if (c && typeof c.line == "number" && typeof c.column == "number" && !Number.isNaN(c.line) && !Number.isNaN(c.column)) {
      for (; u.length < c.line; ) {
        const f = u[u.length - 1], T = Nt(t, f), m = T === -1 ? t.length + 1 : T + 1;
        if (f === m) break;
        u.push(m);
      }
      const l = (c.line > 1 ? u[c.line - 2] : 0) + c.column - 1;
      if (l < u[c.line - 1]) return l;
    }
  }
}
function Nt(e, t) {
  const u = e.indexOf("\r", t), n = e.indexOf(`
`, t);
  return n === -1 ? u : u === -1 || u + 1 === n ? n : u < n ? u : n;
}
const Aa = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg",
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
}, iu = {}.hasOwnProperty, ga = Object.prototype;
function Ca(e, t) {
  const u = t || {};
  return ct(
    {
      file: u.file || void 0,
      location: !1,
      schema: u.space === "svg" ? me : De,
      verbose: u.verbose || !1
    },
    e
  );
}
function ct(e, t) {
  let u;
  switch (t.nodeName) {
    case "#comment": {
      const n = (
        /** @type {P5Comment} */
        t
      );
      return u = { type: "comment", value: n.data }, Ie(e, n, u), u;
    }
    case "#document":
    case "#document-fragment": {
      const n = (
        /** @type {P5Document | P5DocumentFragment} */
        t
      ), s = "mode" in n ? n.mode === "quirks" || n.mode === "limited-quirks" : !1;
      if (u = {
        type: "root",
        children: cu(e, t.childNodes),
        data: { quirksMode: s }
      }, e.file && e.location) {
        const c = String(e.file), l = _a(c), f = l.toPoint(0), T = l.toPoint(c.length);
        u.position = { start: f, end: T };
      }
      return u;
    }
    case "#documentType": {
      const n = (
        /** @type {P5DocumentType} */
        t
      );
      return u = { type: "doctype" }, Ie(e, n, u), u;
    }
    case "#text": {
      const n = (
        /** @type {P5Text} */
        t
      );
      return u = { type: "text", value: n.value }, Ie(e, n, u), u;
    }
    default:
      return u = Na(
        e,
        /** @type {P5Element} */
        t
      ), u;
  }
}
function cu(e, t) {
  let u = -1;
  const n = [];
  for (; ++u < t.length; ) {
    const s = (
      /** @type {RootContent} */
      ct(e, t[u])
    );
    n.push(s);
  }
  return n;
}
function Na(e, t) {
  const u = e.schema;
  e.schema = t.namespaceURI === Aa.svg ? me : De;
  let n = -1;
  const s = {};
  for (; ++n < t.attrs.length; ) {
    const f = t.attrs[n], T = (f.prefix ? f.prefix + ":" : "") + f.name;
    iu.call(ga, T) || (s[T] = f.value);
  }
  const l = (e.schema.space === "svg" ? pa : ba)(t.tagName, s, cu(e, t.childNodes));
  if (Ie(e, t, l), l.tagName === "template") {
    const f = (
      /** @type {P5Template} */
      t
    ), T = f.sourceCodeLocation, m = T && T.startTag && $(T.startTag), _ = T && T.endTag && $(T.endTag), C = (
      /** @type {Root} */
      ct(e, f.content)
    );
    m && _ && e.file && (C.position = { start: m.end, end: _.start }), l.content = C;
  }
  return e.schema = u, l;
}
function Ie(e, t, u) {
  if ("sourceCodeLocation" in t && t.sourceCodeLocation && e.file) {
    const n = Ia(e, u, t.sourceCodeLocation);
    n && (e.location = !0, u.position = n);
  }
}
function Ia(e, t, u) {
  const n = $(u);
  if (t.type === "element") {
    const s = t.children[t.children.length - 1];
    if (n && !u.endTag && s && s.position && s.position.end && (n.end = Object.assign({}, s.position.end)), e.verbose) {
      const c = {};
      let l;
      if (u.attrs)
        for (l in u.attrs)
          iu.call(u.attrs, l) && (c[it(e.schema, l).property] = $(
            u.attrs[l]
          ));
      u.startTag;
      const f = $(u.startTag), T = u.endTag ? $(u.endTag) : void 0, m = { opening: f };
      T && (m.closing = T), m.properties = c, t.data = { position: m };
    }
  }
  return n;
}
function $(e) {
  const t = It({
    line: e.startLine,
    column: e.startCol,
    offset: e.startOffset
  }), u = It({
    line: e.endLine,
    column: e.endCol,
    offset: e.endOffset
  });
  return t || u ? { start: t, end: u } : void 0;
}
function It(e) {
  return e.line && e.column ? e : void 0;
}
const Ra = /* @__PURE__ */ new Set([
  65534,
  65535,
  131070,
  131071,
  196606,
  196607,
  262142,
  262143,
  327678,
  327679,
  393214,
  393215,
  458750,
  458751,
  524286,
  524287,
  589822,
  589823,
  655358,
  655359,
  720894,
  720895,
  786430,
  786431,
  851966,
  851967,
  917502,
  917503,
  983038,
  983039,
  1048574,
  1048575,
  1114110,
  1114111
]), I = "�";
var r;
(function(e) {
  e[e.EOF = -1] = "EOF", e[e.NULL = 0] = "NULL", e[e.TABULATION = 9] = "TABULATION", e[e.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", e[e.LINE_FEED = 10] = "LINE_FEED", e[e.FORM_FEED = 12] = "FORM_FEED", e[e.SPACE = 32] = "SPACE", e[e.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", e[e.QUOTATION_MARK = 34] = "QUOTATION_MARK", e[e.NUMBER_SIGN = 35] = "NUMBER_SIGN", e[e.AMPERSAND = 38] = "AMPERSAND", e[e.APOSTROPHE = 39] = "APOSTROPHE", e[e.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", e[e.SOLIDUS = 47] = "SOLIDUS", e[e.DIGIT_0 = 48] = "DIGIT_0", e[e.DIGIT_9 = 57] = "DIGIT_9", e[e.SEMICOLON = 59] = "SEMICOLON", e[e.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", e[e.EQUALS_SIGN = 61] = "EQUALS_SIGN", e[e.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", e[e.QUESTION_MARK = 63] = "QUESTION_MARK", e[e.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A", e[e.LATIN_CAPITAL_F = 70] = "LATIN_CAPITAL_F", e[e.LATIN_CAPITAL_X = 88] = "LATIN_CAPITAL_X", e[e.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z", e[e.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", e[e.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", e[e.LATIN_SMALL_A = 97] = "LATIN_SMALL_A", e[e.LATIN_SMALL_F = 102] = "LATIN_SMALL_F", e[e.LATIN_SMALL_X = 120] = "LATIN_SMALL_X", e[e.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z", e[e.REPLACEMENT_CHARACTER = 65533] = "REPLACEMENT_CHARACTER";
})(r = r || (r = {}));
const y = {
  DASH_DASH: "--",
  CDATA_START: "[CDATA[",
  DOCTYPE: "doctype",
  SCRIPT: "script",
  PUBLIC: "public",
  SYSTEM: "system"
};
function ou(e) {
  return e >= 55296 && e <= 57343;
}
function Sa(e) {
  return e >= 56320 && e <= 57343;
}
function La(e, t) {
  return (e - 55296) * 1024 + 9216 + t;
}
function lu(e) {
  return e !== 32 && e !== 10 && e !== 13 && e !== 9 && e !== 12 && e >= 1 && e <= 31 || e >= 127 && e <= 159;
}
function du(e) {
  return e >= 64976 && e <= 65007 || Ra.has(e);
}
var h;
(function(e) {
  e.controlCharacterInInputStream = "control-character-in-input-stream", e.noncharacterInInputStream = "noncharacter-in-input-stream", e.surrogateInInputStream = "surrogate-in-input-stream", e.nonVoidHtmlElementStartTagWithTrailingSolidus = "non-void-html-element-start-tag-with-trailing-solidus", e.endTagWithAttributes = "end-tag-with-attributes", e.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus", e.unexpectedSolidusInTag = "unexpected-solidus-in-tag", e.unexpectedNullCharacter = "unexpected-null-character", e.unexpectedQuestionMarkInsteadOfTagName = "unexpected-question-mark-instead-of-tag-name", e.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name", e.unexpectedEqualsSignBeforeAttributeName = "unexpected-equals-sign-before-attribute-name", e.missingEndTagName = "missing-end-tag-name", e.unexpectedCharacterInAttributeName = "unexpected-character-in-attribute-name", e.unknownNamedCharacterReference = "unknown-named-character-reference", e.missingSemicolonAfterCharacterReference = "missing-semicolon-after-character-reference", e.unexpectedCharacterAfterDoctypeSystemIdentifier = "unexpected-character-after-doctype-system-identifier", e.unexpectedCharacterInUnquotedAttributeValue = "unexpected-character-in-unquoted-attribute-value", e.eofBeforeTagName = "eof-before-tag-name", e.eofInTag = "eof-in-tag", e.missingAttributeValue = "missing-attribute-value", e.missingWhitespaceBetweenAttributes = "missing-whitespace-between-attributes", e.missingWhitespaceAfterDoctypePublicKeyword = "missing-whitespace-after-doctype-public-keyword", e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers = "missing-whitespace-between-doctype-public-and-system-identifiers", e.missingWhitespaceAfterDoctypeSystemKeyword = "missing-whitespace-after-doctype-system-keyword", e.missingQuoteBeforeDoctypePublicIdentifier = "missing-quote-before-doctype-public-identifier", e.missingQuoteBeforeDoctypeSystemIdentifier = "missing-quote-before-doctype-system-identifier", e.missingDoctypePublicIdentifier = "missing-doctype-public-identifier", e.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier", e.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier", e.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier", e.cdataInHtmlContent = "cdata-in-html-content", e.incorrectlyOpenedComment = "incorrectly-opened-comment", e.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text", e.eofInDoctype = "eof-in-doctype", e.nestedComment = "nested-comment", e.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment", e.eofInComment = "eof-in-comment", e.incorrectlyClosedComment = "incorrectly-closed-comment", e.eofInCdata = "eof-in-cdata", e.absenceOfDigitsInNumericCharacterReference = "absence-of-digits-in-numeric-character-reference", e.nullCharacterReference = "null-character-reference", e.surrogateCharacterReference = "surrogate-character-reference", e.characterReferenceOutsideUnicodeRange = "character-reference-outside-unicode-range", e.controlCharacterReference = "control-character-reference", e.noncharacterCharacterReference = "noncharacter-character-reference", e.missingWhitespaceBeforeDoctypeName = "missing-whitespace-before-doctype-name", e.missingDoctypeName = "missing-doctype-name", e.invalidCharacterSequenceAfterDoctypeName = "invalid-character-sequence-after-doctype-name", e.duplicateAttribute = "duplicate-attribute", e.nonConformingDoctype = "non-conforming-doctype", e.missingDoctype = "missing-doctype", e.misplacedDoctype = "misplaced-doctype", e.endTagWithoutMatchingOpenElement = "end-tag-without-matching-open-element", e.closingOfElementWithOpenChildElements = "closing-of-element-with-open-child-elements", e.disallowedContentInNoscriptInHead = "disallowed-content-in-noscript-in-head", e.openElementsLeftAfterEof = "open-elements-left-after-eof", e.abandonedHeadElementChild = "abandoned-head-element-child", e.misplacedStartTagForHeadElement = "misplaced-start-tag-for-head-element", e.nestedNoscriptInHead = "nested-noscript-in-head", e.eofInElementThatCanContainOnlyText = "eof-in-element-that-can-contain-only-text";
})(h = h || (h = {}));
const Oa = 65536;
class Da {
  constructor(t) {
    this.handler = t, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = Oa, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1;
  }
  /** The column on the current line. If we just saw a gap (eg. a surrogate pair), return the index before. */
  get col() {
    return this.pos - this.lineStartPos + +(this.lastGapPos !== this.pos);
  }
  get offset() {
    return this.droppedBufferSize + this.pos;
  }
  getError(t) {
    const { line: u, col: n, offset: s } = this;
    return {
      code: t,
      startLine: u,
      endLine: u,
      startCol: n,
      endCol: n,
      startOffset: s,
      endOffset: s
    };
  }
  _err(t) {
    this.handler.onParseError && this.lastErrOffset !== this.offset && (this.lastErrOffset = this.offset, this.handler.onParseError(this.getError(t)));
  }
  _addGap() {
    this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos;
  }
  _processSurrogate(t) {
    if (this.pos !== this.html.length - 1) {
      const u = this.html.charCodeAt(this.pos + 1);
      if (Sa(u))
        return this.pos++, this._addGap(), La(t, u);
    } else if (!this.lastChunkWritten)
      return this.endOfChunkHit = !0, r.EOF;
    return this._err(h.surrogateInInputStream), t;
  }
  willDropParsedChunk() {
    return this.pos > this.bufferWaterline;
  }
  dropParsedChunk() {
    this.willDropParsedChunk() && (this.html = this.html.substring(this.pos), this.lineStartPos -= this.pos, this.droppedBufferSize += this.pos, this.pos = 0, this.lastGapPos = -2, this.gapStack.length = 0);
  }
  write(t, u) {
    this.html.length > 0 ? this.html += t : this.html = t, this.endOfChunkHit = !1, this.lastChunkWritten = u;
  }
  insertHtmlAtCurrentPos(t) {
    this.html = this.html.substring(0, this.pos + 1) + t + this.html.substring(this.pos + 1), this.endOfChunkHit = !1;
  }
  startsWith(t, u) {
    if (this.pos + t.length > this.html.length)
      return this.endOfChunkHit = !this.lastChunkWritten, !1;
    if (u)
      return this.html.startsWith(t, this.pos);
    for (let n = 0; n < t.length; n++)
      if ((this.html.charCodeAt(this.pos + n) | 32) !== t.charCodeAt(n))
        return !1;
    return !0;
  }
  peek(t) {
    const u = this.pos + t;
    if (u >= this.html.length)
      return this.endOfChunkHit = !this.lastChunkWritten, r.EOF;
    const n = this.html.charCodeAt(u);
    return n === r.CARRIAGE_RETURN ? r.LINE_FEED : n;
  }
  advance() {
    if (this.pos++, this.isEol && (this.isEol = !1, this.line++, this.lineStartPos = this.pos), this.pos >= this.html.length)
      return this.endOfChunkHit = !this.lastChunkWritten, r.EOF;
    let t = this.html.charCodeAt(this.pos);
    return t === r.CARRIAGE_RETURN ? (this.isEol = !0, this.skipNextNewLine = !0, r.LINE_FEED) : t === r.LINE_FEED && (this.isEol = !0, this.skipNextNewLine) ? (this.line--, this.skipNextNewLine = !1, this._addGap(), this.advance()) : (this.skipNextNewLine = !1, ou(t) && (t = this._processSurrogate(t)), this.handler.onParseError === null || t > 31 && t < 127 || t === r.LINE_FEED || t === r.CARRIAGE_RETURN || t > 159 && t < 64976 || this._checkForProblematicCharacters(t), t);
  }
  _checkForProblematicCharacters(t) {
    lu(t) ? this._err(h.controlCharacterInInputStream) : du(t) && this._err(h.noncharacterInInputStream);
  }
  retreat(t) {
    for (this.pos -= t; this.pos < this.lastGapPos; )
      this.lastGapPos = this.gapStack.pop(), this.pos--;
    this.isEol = !1;
  }
}
var g;
(function(e) {
  e[e.CHARACTER = 0] = "CHARACTER", e[e.NULL_CHARACTER = 1] = "NULL_CHARACTER", e[e.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER", e[e.START_TAG = 3] = "START_TAG", e[e.END_TAG = 4] = "END_TAG", e[e.COMMENT = 5] = "COMMENT", e[e.DOCTYPE = 6] = "DOCTYPE", e[e.EOF = 7] = "EOF", e[e.HIBERNATION = 8] = "HIBERNATION";
})(g = g || (g = {}));
function fu(e, t) {
  for (let u = e.attrs.length - 1; u >= 0; u--)
    if (e.attrs[u].name === t)
      return e.attrs[u].value;
  return null;
}
const W = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0))
), xa = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e) => e.charCodeAt(0))
);
var ke;
const Pa = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), ya = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (ke = String.fromCodePoint) !== null && ke !== void 0 ? ke : function(e) {
    let t = "";
    return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t;
  }
);
function Ma(e) {
  var t;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = Pa.get(e)) !== null && t !== void 0 ? t : e;
}
var O;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(O || (O = {}));
const Ba = 32;
var Y;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(Y || (Y = {}));
function $e(e) {
  return e >= O.ZERO && e <= O.NINE;
}
function Ua(e) {
  return e >= O.UPPER_A && e <= O.UPPER_F || e >= O.LOWER_A && e <= O.LOWER_F;
}
function ka(e) {
  return e >= O.UPPER_A && e <= O.UPPER_Z || e >= O.LOWER_A && e <= O.LOWER_Z || $e(e);
}
function Ha(e) {
  return e === O.EQUALS || ka(e);
}
var L;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(L || (L = {}));
var V;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(V || (V = {}));
class Fa {
  constructor(t, u, n) {
    this.decodeTree = t, this.emitCodePoint = u, this.errors = n, this.state = L.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = V.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(t) {
    this.decodeMode = t, this.state = L.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(t, u) {
    switch (this.state) {
      case L.EntityStart:
        return t.charCodeAt(u) === O.NUM ? (this.state = L.NumericStart, this.consumed += 1, this.stateNumericStart(t, u + 1)) : (this.state = L.NamedEntity, this.stateNamedEntity(t, u));
      case L.NumericStart:
        return this.stateNumericStart(t, u);
      case L.NumericDecimal:
        return this.stateNumericDecimal(t, u);
      case L.NumericHex:
        return this.stateNumericHex(t, u);
      case L.NamedEntity:
        return this.stateNamedEntity(t, u);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(t, u) {
    return u >= t.length ? -1 : (t.charCodeAt(u) | Ba) === O.LOWER_X ? (this.state = L.NumericHex, this.consumed += 1, this.stateNumericHex(t, u + 1)) : (this.state = L.NumericDecimal, this.stateNumericDecimal(t, u));
  }
  addToNumericResult(t, u, n, s) {
    if (u !== n) {
      const c = n - u;
      this.result = this.result * Math.pow(s, c) + parseInt(t.substr(u, c), s), this.consumed += c;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(t, u) {
    const n = u;
    for (; u < t.length; ) {
      const s = t.charCodeAt(u);
      if ($e(s) || Ua(s))
        u += 1;
      else
        return this.addToNumericResult(t, n, u, 16), this.emitNumericEntity(s, 3);
    }
    return this.addToNumericResult(t, n, u, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(t, u) {
    const n = u;
    for (; u < t.length; ) {
      const s = t.charCodeAt(u);
      if ($e(s))
        u += 1;
      else
        return this.addToNumericResult(t, n, u, 10), this.emitNumericEntity(s, 2);
    }
    return this.addToNumericResult(t, n, u, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(t, u) {
    var n;
    if (this.consumed <= u)
      return (n = this.errors) === null || n === void 0 || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (t === O.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === V.Strict)
      return 0;
    return this.emitCodePoint(Ma(this.result), this.consumed), this.errors && (t !== O.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(t, u) {
    const { decodeTree: n } = this;
    let s = n[this.treeIndex], c = (s & Y.VALUE_LENGTH) >> 14;
    for (; u < t.length; u++, this.excess++) {
      const l = t.charCodeAt(u);
      if (this.treeIndex = Eu(n, s, this.treeIndex + Math.max(1, c), l), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === V.Attribute && // We shouldn't have consumed any characters after the entity,
        (c === 0 || // And there should be no invalid characters.
        Ha(l)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (s = n[this.treeIndex], c = (s & Y.VALUE_LENGTH) >> 14, c !== 0) {
        if (l === O.SEMI)
          return this.emitNamedEntityData(this.treeIndex, c, this.consumed + this.excess);
        this.decodeMode !== V.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var t;
    const { result: u, decodeTree: n } = this, s = (n[u] & Y.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(u, s, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(t, u, n) {
    const { decodeTree: s } = this;
    return this.emitCodePoint(u === 1 ? s[t] & ~Y.VALUE_LENGTH : s[t + 1], n), u === 3 && this.emitCodePoint(s[t + 2], n), n;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var t;
    switch (this.state) {
      case L.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== V.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      case L.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case L.NumericHex:
        return this.emitNumericEntity(0, 3);
      case L.NumericStart:
        return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case L.EntityStart:
        return 0;
    }
  }
}
function hu(e) {
  let t = "";
  const u = new Fa(e, (n) => t += ya(n));
  return function(s, c) {
    let l = 0, f = 0;
    for (; (f = s.indexOf("&", f)) >= 0; ) {
      t += s.slice(l, f), u.startEntity(c);
      const m = u.write(
        s,
        // Skip the "&"
        f + 1
      );
      if (m < 0) {
        l = f + u.end();
        break;
      }
      l = f + m, f = m === 0 ? l + 1 : l;
    }
    const T = t + s.slice(l);
    return t = "", T;
  };
}
function Eu(e, t, u, n) {
  const s = (t & Y.BRANCH_LENGTH) >> 7, c = t & Y.JUMP_TABLE;
  if (s === 0)
    return c !== 0 && n === c ? u : -1;
  if (c) {
    const T = n - c;
    return T < 0 || T >= s ? -1 : e[u + T] - 1;
  }
  let l = u, f = l + s - 1;
  for (; l <= f; ) {
    const T = l + f >>> 1, m = e[T];
    if (m < n)
      l = T + 1;
    else if (m > n)
      f = T - 1;
    else
      return e[T + s];
  }
  return -1;
}
hu(W);
hu(xa);
var E;
(function(e) {
  e.HTML = "http://www.w3.org/1999/xhtml", e.MATHML = "http://www.w3.org/1998/Math/MathML", e.SVG = "http://www.w3.org/2000/svg", e.XLINK = "http://www.w3.org/1999/xlink", e.XML = "http://www.w3.org/XML/1998/namespace", e.XMLNS = "http://www.w3.org/2000/xmlns/";
})(E = E || (E = {}));
var X;
(function(e) {
  e.TYPE = "type", e.ACTION = "action", e.ENCODING = "encoding", e.PROMPT = "prompt", e.NAME = "name", e.COLOR = "color", e.FACE = "face", e.SIZE = "size";
})(X = X || (X = {}));
var k;
(function(e) {
  e.NO_QUIRKS = "no-quirks", e.QUIRKS = "quirks", e.LIMITED_QUIRKS = "limited-quirks";
})(k = k || (k = {}));
var d;
(function(e) {
  e.A = "a", e.ADDRESS = "address", e.ANNOTATION_XML = "annotation-xml", e.APPLET = "applet", e.AREA = "area", e.ARTICLE = "article", e.ASIDE = "aside", e.B = "b", e.BASE = "base", e.BASEFONT = "basefont", e.BGSOUND = "bgsound", e.BIG = "big", e.BLOCKQUOTE = "blockquote", e.BODY = "body", e.BR = "br", e.BUTTON = "button", e.CAPTION = "caption", e.CENTER = "center", e.CODE = "code", e.COL = "col", e.COLGROUP = "colgroup", e.DD = "dd", e.DESC = "desc", e.DETAILS = "details", e.DIALOG = "dialog", e.DIR = "dir", e.DIV = "div", e.DL = "dl", e.DT = "dt", e.EM = "em", e.EMBED = "embed", e.FIELDSET = "fieldset", e.FIGCAPTION = "figcaption", e.FIGURE = "figure", e.FONT = "font", e.FOOTER = "footer", e.FOREIGN_OBJECT = "foreignObject", e.FORM = "form", e.FRAME = "frame", e.FRAMESET = "frameset", e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e.HEAD = "head", e.HEADER = "header", e.HGROUP = "hgroup", e.HR = "hr", e.HTML = "html", e.I = "i", e.IMG = "img", e.IMAGE = "image", e.INPUT = "input", e.IFRAME = "iframe", e.KEYGEN = "keygen", e.LABEL = "label", e.LI = "li", e.LINK = "link", e.LISTING = "listing", e.MAIN = "main", e.MALIGNMARK = "malignmark", e.MARQUEE = "marquee", e.MATH = "math", e.MENU = "menu", e.META = "meta", e.MGLYPH = "mglyph", e.MI = "mi", e.MO = "mo", e.MN = "mn", e.MS = "ms", e.MTEXT = "mtext", e.NAV = "nav", e.NOBR = "nobr", e.NOFRAMES = "noframes", e.NOEMBED = "noembed", e.NOSCRIPT = "noscript", e.OBJECT = "object", e.OL = "ol", e.OPTGROUP = "optgroup", e.OPTION = "option", e.P = "p", e.PARAM = "param", e.PLAINTEXT = "plaintext", e.PRE = "pre", e.RB = "rb", e.RP = "rp", e.RT = "rt", e.RTC = "rtc", e.RUBY = "ruby", e.S = "s", e.SCRIPT = "script", e.SECTION = "section", e.SELECT = "select", e.SOURCE = "source", e.SMALL = "small", e.SPAN = "span", e.STRIKE = "strike", e.STRONG = "strong", e.STYLE = "style", e.SUB = "sub", e.SUMMARY = "summary", e.SUP = "sup", e.TABLE = "table", e.TBODY = "tbody", e.TEMPLATE = "template", e.TEXTAREA = "textarea", e.TFOOT = "tfoot", e.TD = "td", e.TH = "th", e.THEAD = "thead", e.TITLE = "title", e.TR = "tr", e.TRACK = "track", e.TT = "tt", e.U = "u", e.UL = "ul", e.SVG = "svg", e.VAR = "var", e.WBR = "wbr", e.XMP = "xmp";
})(d = d || (d = {}));
var a;
(function(e) {
  e[e.UNKNOWN = 0] = "UNKNOWN", e[e.A = 1] = "A", e[e.ADDRESS = 2] = "ADDRESS", e[e.ANNOTATION_XML = 3] = "ANNOTATION_XML", e[e.APPLET = 4] = "APPLET", e[e.AREA = 5] = "AREA", e[e.ARTICLE = 6] = "ARTICLE", e[e.ASIDE = 7] = "ASIDE", e[e.B = 8] = "B", e[e.BASE = 9] = "BASE", e[e.BASEFONT = 10] = "BASEFONT", e[e.BGSOUND = 11] = "BGSOUND", e[e.BIG = 12] = "BIG", e[e.BLOCKQUOTE = 13] = "BLOCKQUOTE", e[e.BODY = 14] = "BODY", e[e.BR = 15] = "BR", e[e.BUTTON = 16] = "BUTTON", e[e.CAPTION = 17] = "CAPTION", e[e.CENTER = 18] = "CENTER", e[e.CODE = 19] = "CODE", e[e.COL = 20] = "COL", e[e.COLGROUP = 21] = "COLGROUP", e[e.DD = 22] = "DD", e[e.DESC = 23] = "DESC", e[e.DETAILS = 24] = "DETAILS", e[e.DIALOG = 25] = "DIALOG", e[e.DIR = 26] = "DIR", e[e.DIV = 27] = "DIV", e[e.DL = 28] = "DL", e[e.DT = 29] = "DT", e[e.EM = 30] = "EM", e[e.EMBED = 31] = "EMBED", e[e.FIELDSET = 32] = "FIELDSET", e[e.FIGCAPTION = 33] = "FIGCAPTION", e[e.FIGURE = 34] = "FIGURE", e[e.FONT = 35] = "FONT", e[e.FOOTER = 36] = "FOOTER", e[e.FOREIGN_OBJECT = 37] = "FOREIGN_OBJECT", e[e.FORM = 38] = "FORM", e[e.FRAME = 39] = "FRAME", e[e.FRAMESET = 40] = "FRAMESET", e[e.H1 = 41] = "H1", e[e.H2 = 42] = "H2", e[e.H3 = 43] = "H3", e[e.H4 = 44] = "H4", e[e.H5 = 45] = "H5", e[e.H6 = 46] = "H6", e[e.HEAD = 47] = "HEAD", e[e.HEADER = 48] = "HEADER", e[e.HGROUP = 49] = "HGROUP", e[e.HR = 50] = "HR", e[e.HTML = 51] = "HTML", e[e.I = 52] = "I", e[e.IMG = 53] = "IMG", e[e.IMAGE = 54] = "IMAGE", e[e.INPUT = 55] = "INPUT", e[e.IFRAME = 56] = "IFRAME", e[e.KEYGEN = 57] = "KEYGEN", e[e.LABEL = 58] = "LABEL", e[e.LI = 59] = "LI", e[e.LINK = 60] = "LINK", e[e.LISTING = 61] = "LISTING", e[e.MAIN = 62] = "MAIN", e[e.MALIGNMARK = 63] = "MALIGNMARK", e[e.MARQUEE = 64] = "MARQUEE", e[e.MATH = 65] = "MATH", e[e.MENU = 66] = "MENU", e[e.META = 67] = "META", e[e.MGLYPH = 68] = "MGLYPH", e[e.MI = 69] = "MI", e[e.MO = 70] = "MO", e[e.MN = 71] = "MN", e[e.MS = 72] = "MS", e[e.MTEXT = 73] = "MTEXT", e[e.NAV = 74] = "NAV", e[e.NOBR = 75] = "NOBR", e[e.NOFRAMES = 76] = "NOFRAMES", e[e.NOEMBED = 77] = "NOEMBED", e[e.NOSCRIPT = 78] = "NOSCRIPT", e[e.OBJECT = 79] = "OBJECT", e[e.OL = 80] = "OL", e[e.OPTGROUP = 81] = "OPTGROUP", e[e.OPTION = 82] = "OPTION", e[e.P = 83] = "P", e[e.PARAM = 84] = "PARAM", e[e.PLAINTEXT = 85] = "PLAINTEXT", e[e.PRE = 86] = "PRE", e[e.RB = 87] = "RB", e[e.RP = 88] = "RP", e[e.RT = 89] = "RT", e[e.RTC = 90] = "RTC", e[e.RUBY = 91] = "RUBY", e[e.S = 92] = "S", e[e.SCRIPT = 93] = "SCRIPT", e[e.SECTION = 94] = "SECTION", e[e.SELECT = 95] = "SELECT", e[e.SOURCE = 96] = "SOURCE", e[e.SMALL = 97] = "SMALL", e[e.SPAN = 98] = "SPAN", e[e.STRIKE = 99] = "STRIKE", e[e.STRONG = 100] = "STRONG", e[e.STYLE = 101] = "STYLE", e[e.SUB = 102] = "SUB", e[e.SUMMARY = 103] = "SUMMARY", e[e.SUP = 104] = "SUP", e[e.TABLE = 105] = "TABLE", e[e.TBODY = 106] = "TBODY", e[e.TEMPLATE = 107] = "TEMPLATE", e[e.TEXTAREA = 108] = "TEXTAREA", e[e.TFOOT = 109] = "TFOOT", e[e.TD = 110] = "TD", e[e.TH = 111] = "TH", e[e.THEAD = 112] = "THEAD", e[e.TITLE = 113] = "TITLE", e[e.TR = 114] = "TR", e[e.TRACK = 115] = "TRACK", e[e.TT = 116] = "TT", e[e.U = 117] = "U", e[e.UL = 118] = "UL", e[e.SVG = 119] = "SVG", e[e.VAR = 120] = "VAR", e[e.WBR = 121] = "WBR", e[e.XMP = 122] = "XMP";
})(a = a || (a = {}));
const wa = /* @__PURE__ */ new Map([
  [d.A, a.A],
  [d.ADDRESS, a.ADDRESS],
  [d.ANNOTATION_XML, a.ANNOTATION_XML],
  [d.APPLET, a.APPLET],
  [d.AREA, a.AREA],
  [d.ARTICLE, a.ARTICLE],
  [d.ASIDE, a.ASIDE],
  [d.B, a.B],
  [d.BASE, a.BASE],
  [d.BASEFONT, a.BASEFONT],
  [d.BGSOUND, a.BGSOUND],
  [d.BIG, a.BIG],
  [d.BLOCKQUOTE, a.BLOCKQUOTE],
  [d.BODY, a.BODY],
  [d.BR, a.BR],
  [d.BUTTON, a.BUTTON],
  [d.CAPTION, a.CAPTION],
  [d.CENTER, a.CENTER],
  [d.CODE, a.CODE],
  [d.COL, a.COL],
  [d.COLGROUP, a.COLGROUP],
  [d.DD, a.DD],
  [d.DESC, a.DESC],
  [d.DETAILS, a.DETAILS],
  [d.DIALOG, a.DIALOG],
  [d.DIR, a.DIR],
  [d.DIV, a.DIV],
  [d.DL, a.DL],
  [d.DT, a.DT],
  [d.EM, a.EM],
  [d.EMBED, a.EMBED],
  [d.FIELDSET, a.FIELDSET],
  [d.FIGCAPTION, a.FIGCAPTION],
  [d.FIGURE, a.FIGURE],
  [d.FONT, a.FONT],
  [d.FOOTER, a.FOOTER],
  [d.FOREIGN_OBJECT, a.FOREIGN_OBJECT],
  [d.FORM, a.FORM],
  [d.FRAME, a.FRAME],
  [d.FRAMESET, a.FRAMESET],
  [d.H1, a.H1],
  [d.H2, a.H2],
  [d.H3, a.H3],
  [d.H4, a.H4],
  [d.H5, a.H5],
  [d.H6, a.H6],
  [d.HEAD, a.HEAD],
  [d.HEADER, a.HEADER],
  [d.HGROUP, a.HGROUP],
  [d.HR, a.HR],
  [d.HTML, a.HTML],
  [d.I, a.I],
  [d.IMG, a.IMG],
  [d.IMAGE, a.IMAGE],
  [d.INPUT, a.INPUT],
  [d.IFRAME, a.IFRAME],
  [d.KEYGEN, a.KEYGEN],
  [d.LABEL, a.LABEL],
  [d.LI, a.LI],
  [d.LINK, a.LINK],
  [d.LISTING, a.LISTING],
  [d.MAIN, a.MAIN],
  [d.MALIGNMARK, a.MALIGNMARK],
  [d.MARQUEE, a.MARQUEE],
  [d.MATH, a.MATH],
  [d.MENU, a.MENU],
  [d.META, a.META],
  [d.MGLYPH, a.MGLYPH],
  [d.MI, a.MI],
  [d.MO, a.MO],
  [d.MN, a.MN],
  [d.MS, a.MS],
  [d.MTEXT, a.MTEXT],
  [d.NAV, a.NAV],
  [d.NOBR, a.NOBR],
  [d.NOFRAMES, a.NOFRAMES],
  [d.NOEMBED, a.NOEMBED],
  [d.NOSCRIPT, a.NOSCRIPT],
  [d.OBJECT, a.OBJECT],
  [d.OL, a.OL],
  [d.OPTGROUP, a.OPTGROUP],
  [d.OPTION, a.OPTION],
  [d.P, a.P],
  [d.PARAM, a.PARAM],
  [d.PLAINTEXT, a.PLAINTEXT],
  [d.PRE, a.PRE],
  [d.RB, a.RB],
  [d.RP, a.RP],
  [d.RT, a.RT],
  [d.RTC, a.RTC],
  [d.RUBY, a.RUBY],
  [d.S, a.S],
  [d.SCRIPT, a.SCRIPT],
  [d.SECTION, a.SECTION],
  [d.SELECT, a.SELECT],
  [d.SOURCE, a.SOURCE],
  [d.SMALL, a.SMALL],
  [d.SPAN, a.SPAN],
  [d.STRIKE, a.STRIKE],
  [d.STRONG, a.STRONG],
  [d.STYLE, a.STYLE],
  [d.SUB, a.SUB],
  [d.SUMMARY, a.SUMMARY],
  [d.SUP, a.SUP],
  [d.TABLE, a.TABLE],
  [d.TBODY, a.TBODY],
  [d.TEMPLATE, a.TEMPLATE],
  [d.TEXTAREA, a.TEXTAREA],
  [d.TFOOT, a.TFOOT],
  [d.TD, a.TD],
  [d.TH, a.TH],
  [d.THEAD, a.THEAD],
  [d.TITLE, a.TITLE],
  [d.TR, a.TR],
  [d.TRACK, a.TRACK],
  [d.TT, a.TT],
  [d.U, a.U],
  [d.UL, a.UL],
  [d.SVG, a.SVG],
  [d.VAR, a.VAR],
  [d.WBR, a.WBR],
  [d.XMP, a.XMP]
]);
function xe(e) {
  var t;
  return (t = wa.get(e)) !== null && t !== void 0 ? t : a.UNKNOWN;
}
const b = a, va = {
  [E.HTML]: /* @__PURE__ */ new Set([
    b.ADDRESS,
    b.APPLET,
    b.AREA,
    b.ARTICLE,
    b.ASIDE,
    b.BASE,
    b.BASEFONT,
    b.BGSOUND,
    b.BLOCKQUOTE,
    b.BODY,
    b.BR,
    b.BUTTON,
    b.CAPTION,
    b.CENTER,
    b.COL,
    b.COLGROUP,
    b.DD,
    b.DETAILS,
    b.DIR,
    b.DIV,
    b.DL,
    b.DT,
    b.EMBED,
    b.FIELDSET,
    b.FIGCAPTION,
    b.FIGURE,
    b.FOOTER,
    b.FORM,
    b.FRAME,
    b.FRAMESET,
    b.H1,
    b.H2,
    b.H3,
    b.H4,
    b.H5,
    b.H6,
    b.HEAD,
    b.HEADER,
    b.HGROUP,
    b.HR,
    b.HTML,
    b.IFRAME,
    b.IMG,
    b.INPUT,
    b.LI,
    b.LINK,
    b.LISTING,
    b.MAIN,
    b.MARQUEE,
    b.MENU,
    b.META,
    b.NAV,
    b.NOEMBED,
    b.NOFRAMES,
    b.NOSCRIPT,
    b.OBJECT,
    b.OL,
    b.P,
    b.PARAM,
    b.PLAINTEXT,
    b.PRE,
    b.SCRIPT,
    b.SECTION,
    b.SELECT,
    b.SOURCE,
    b.STYLE,
    b.SUMMARY,
    b.TABLE,
    b.TBODY,
    b.TD,
    b.TEMPLATE,
    b.TEXTAREA,
    b.TFOOT,
    b.TH,
    b.THEAD,
    b.TITLE,
    b.TR,
    b.TRACK,
    b.UL,
    b.WBR,
    b.XMP
  ]),
  [E.MATHML]: /* @__PURE__ */ new Set([b.MI, b.MO, b.MN, b.MS, b.MTEXT, b.ANNOTATION_XML]),
  [E.SVG]: /* @__PURE__ */ new Set([b.TITLE, b.FOREIGN_OBJECT, b.DESC]),
  [E.XLINK]: /* @__PURE__ */ new Set(),
  [E.XML]: /* @__PURE__ */ new Set(),
  [E.XMLNS]: /* @__PURE__ */ new Set()
};
function Tu(e) {
  return e === b.H1 || e === b.H2 || e === b.H3 || e === b.H4 || e === b.H5 || e === b.H6;
}
d.STYLE, d.SCRIPT, d.XMP, d.IFRAME, d.NOEMBED, d.NOFRAMES, d.PLAINTEXT;
const Ya = /* @__PURE__ */ new Map([
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]);
var i;
(function(e) {
  e[e.DATA = 0] = "DATA", e[e.RCDATA = 1] = "RCDATA", e[e.RAWTEXT = 2] = "RAWTEXT", e[e.SCRIPT_DATA = 3] = "SCRIPT_DATA", e[e.PLAINTEXT = 4] = "PLAINTEXT", e[e.TAG_OPEN = 5] = "TAG_OPEN", e[e.END_TAG_OPEN = 6] = "END_TAG_OPEN", e[e.TAG_NAME = 7] = "TAG_NAME", e[e.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", e[e.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", e[e.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", e[e.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", e[e.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", e[e.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", e[e.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", e[e.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", e[e.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", e[e.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", e[e.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", e[e.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", e[e.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", e[e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", e[e.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", e[e.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", e[e.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", e[e.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", e[e.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", e[e.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", e[e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", e[e.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", e[e.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", e[e.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", e[e.COMMENT_START = 42] = "COMMENT_START", e[e.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", e[e.COMMENT = 44] = "COMMENT", e[e.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", e[e.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", e[e.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", e[e.COMMENT_END = 50] = "COMMENT_END", e[e.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", e[e.DOCTYPE = 52] = "DOCTYPE", e[e.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", e[e.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", e[e.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", e[e.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", e[e.CDATA_SECTION = 68] = "CDATA_SECTION", e[e.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", e[e.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", e[e.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", e[e.NAMED_CHARACTER_REFERENCE = 72] = "NAMED_CHARACTER_REFERENCE", e[e.AMBIGUOUS_AMPERSAND = 73] = "AMBIGUOUS_AMPERSAND", e[e.NUMERIC_CHARACTER_REFERENCE = 74] = "NUMERIC_CHARACTER_REFERENCE", e[e.HEXADEMICAL_CHARACTER_REFERENCE_START = 75] = "HEXADEMICAL_CHARACTER_REFERENCE_START", e[e.HEXADEMICAL_CHARACTER_REFERENCE = 76] = "HEXADEMICAL_CHARACTER_REFERENCE", e[e.DECIMAL_CHARACTER_REFERENCE = 77] = "DECIMAL_CHARACTER_REFERENCE", e[e.NUMERIC_CHARACTER_REFERENCE_END = 78] = "NUMERIC_CHARACTER_REFERENCE_END";
})(i || (i = {}));
const M = {
  DATA: i.DATA,
  RCDATA: i.RCDATA,
  RAWTEXT: i.RAWTEXT,
  SCRIPT_DATA: i.SCRIPT_DATA,
  PLAINTEXT: i.PLAINTEXT,
  CDATA_SECTION: i.CDATA_SECTION
};
function ie(e) {
  return e >= r.DIGIT_0 && e <= r.DIGIT_9;
}
function re(e) {
  return e >= r.LATIN_CAPITAL_A && e <= r.LATIN_CAPITAL_Z;
}
function qa(e) {
  return e >= r.LATIN_SMALL_A && e <= r.LATIN_SMALL_Z;
}
function G(e) {
  return qa(e) || re(e);
}
function Je(e) {
  return G(e) || ie(e);
}
function mu(e) {
  return e >= r.LATIN_CAPITAL_A && e <= r.LATIN_CAPITAL_F;
}
function bu(e) {
  return e >= r.LATIN_SMALL_A && e <= r.LATIN_SMALL_F;
}
function Qa(e) {
  return ie(e) || mu(e) || bu(e);
}
function _e(e) {
  return e + 32;
}
function pu(e) {
  return e === r.SPACE || e === r.LINE_FEED || e === r.TABULATION || e === r.FORM_FEED;
}
function Wa(e) {
  return e === r.EQUALS_SIGN || Je(e);
}
function Rt(e) {
  return pu(e) || e === r.SOLIDUS || e === r.GREATER_THAN_SIGN;
}
class Ga {
  constructor(t, u) {
    this.options = t, this.handler = u, this.paused = !1, this.inLoop = !1, this.inForeignNode = !1, this.lastStartTagName = "", this.active = !1, this.state = i.DATA, this.returnState = i.DATA, this.charRefCode = -1, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = { name: "", value: "" }, this.preprocessor = new Da(u), this.currentLocation = this.getCurrentLocation(-1);
  }
  //Errors
  _err(t) {
    var u, n;
    (n = (u = this.handler).onParseError) === null || n === void 0 || n.call(u, this.preprocessor.getError(t));
  }
  // NOTE: `offset` may never run across line boundaries.
  getCurrentLocation(t) {
    return this.options.sourceCodeLocationInfo ? {
      startLine: this.preprocessor.line,
      startCol: this.preprocessor.col - t,
      startOffset: this.preprocessor.offset - t,
      endLine: -1,
      endCol: -1,
      endOffset: -1
    } : null;
  }
  _runParsingLoop() {
    if (!this.inLoop) {
      for (this.inLoop = !0; this.active && !this.paused; ) {
        this.consumedAfterSnapshot = 0;
        const t = this._consume();
        this._ensureHibernation() || this._callState(t);
      }
      this.inLoop = !1;
    }
  }
  //API
  pause() {
    this.paused = !0;
  }
  resume(t) {
    if (!this.paused)
      throw new Error("Parser was already resumed");
    this.paused = !1, !this.inLoop && (this._runParsingLoop(), this.paused || t == null || t());
  }
  write(t, u, n) {
    this.active = !0, this.preprocessor.write(t, u), this._runParsingLoop(), this.paused || n == null || n();
  }
  insertHtmlAtCurrentPos(t) {
    this.active = !0, this.preprocessor.insertHtmlAtCurrentPos(t), this._runParsingLoop();
  }
  //Hibernation
  _ensureHibernation() {
    return this.preprocessor.endOfChunkHit ? (this._unconsume(this.consumedAfterSnapshot), this.active = !1, !0) : !1;
  }
  //Consumption
  _consume() {
    return this.consumedAfterSnapshot++, this.preprocessor.advance();
  }
  _unconsume(t) {
    this.consumedAfterSnapshot -= t, this.preprocessor.retreat(t);
  }
  _reconsumeInState(t, u) {
    this.state = t, this._callState(u);
  }
  _advanceBy(t) {
    this.consumedAfterSnapshot += t;
    for (let u = 0; u < t; u++)
      this.preprocessor.advance();
  }
  _consumeSequenceIfMatch(t, u) {
    return this.preprocessor.startsWith(t, u) ? (this._advanceBy(t.length - 1), !0) : !1;
  }
  //Token creation
  _createStartTagToken() {
    this.currentToken = {
      type: g.START_TAG,
      tagName: "",
      tagID: a.UNKNOWN,
      selfClosing: !1,
      ackSelfClosing: !1,
      attrs: [],
      location: this.getCurrentLocation(1)
    };
  }
  _createEndTagToken() {
    this.currentToken = {
      type: g.END_TAG,
      tagName: "",
      tagID: a.UNKNOWN,
      selfClosing: !1,
      ackSelfClosing: !1,
      attrs: [],
      location: this.getCurrentLocation(2)
    };
  }
  _createCommentToken(t) {
    this.currentToken = {
      type: g.COMMENT,
      data: "",
      location: this.getCurrentLocation(t)
    };
  }
  _createDoctypeToken(t) {
    this.currentToken = {
      type: g.DOCTYPE,
      name: t,
      forceQuirks: !1,
      publicId: null,
      systemId: null,
      location: this.currentLocation
    };
  }
  _createCharacterToken(t, u) {
    this.currentCharacterToken = {
      type: t,
      chars: u,
      location: this.currentLocation
    };
  }
  //Tag attributes
  _createAttr(t) {
    this.currentAttr = {
      name: t,
      value: ""
    }, this.currentLocation = this.getCurrentLocation(0);
  }
  _leaveAttrName() {
    var t, u;
    const n = this.currentToken;
    if (fu(n, this.currentAttr.name) === null) {
      if (n.attrs.push(this.currentAttr), n.location && this.currentLocation) {
        const s = (t = (u = n.location).attrs) !== null && t !== void 0 ? t : u.attrs = /* @__PURE__ */ Object.create(null);
        s[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue();
      }
    } else
      this._err(h.duplicateAttribute);
  }
  _leaveAttrValue() {
    this.currentLocation && (this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset);
  }
  //Token emission
  prepareToken(t) {
    this._emitCurrentCharacterToken(t.location), this.currentToken = null, t.location && (t.location.endLine = this.preprocessor.line, t.location.endCol = this.preprocessor.col + 1, t.location.endOffset = this.preprocessor.offset + 1), this.currentLocation = this.getCurrentLocation(-1);
  }
  emitCurrentTagToken() {
    const t = this.currentToken;
    this.prepareToken(t), t.tagID = xe(t.tagName), t.type === g.START_TAG ? (this.lastStartTagName = t.tagName, this.handler.onStartTag(t)) : (t.attrs.length > 0 && this._err(h.endTagWithAttributes), t.selfClosing && this._err(h.endTagWithTrailingSolidus), this.handler.onEndTag(t)), this.preprocessor.dropParsedChunk();
  }
  emitCurrentComment(t) {
    this.prepareToken(t), this.handler.onComment(t), this.preprocessor.dropParsedChunk();
  }
  emitCurrentDoctype(t) {
    this.prepareToken(t), this.handler.onDoctype(t), this.preprocessor.dropParsedChunk();
  }
  _emitCurrentCharacterToken(t) {
    if (this.currentCharacterToken) {
      switch (t && this.currentCharacterToken.location && (this.currentCharacterToken.location.endLine = t.startLine, this.currentCharacterToken.location.endCol = t.startCol, this.currentCharacterToken.location.endOffset = t.startOffset), this.currentCharacterToken.type) {
        case g.CHARACTER: {
          this.handler.onCharacter(this.currentCharacterToken);
          break;
        }
        case g.NULL_CHARACTER: {
          this.handler.onNullCharacter(this.currentCharacterToken);
          break;
        }
        case g.WHITESPACE_CHARACTER: {
          this.handler.onWhitespaceCharacter(this.currentCharacterToken);
          break;
        }
      }
      this.currentCharacterToken = null;
    }
  }
  _emitEOFToken() {
    const t = this.getCurrentLocation(0);
    t && (t.endLine = t.startLine, t.endCol = t.startCol, t.endOffset = t.startOffset), this._emitCurrentCharacterToken(t), this.handler.onEof({ type: g.EOF, location: t }), this.active = !1;
  }
  //Characters emission
  //OPTIMIZATION: specification uses only one type of character tokens (one token per character).
  //This causes a huge memory overhead and a lot of unnecessary parser loops. parse5 uses 3 groups of characters.
  //If we have a sequence of characters that belong to the same group, the parser can process it
  //as a single solid character token.
  //So, there are 3 types of character tokens in parse5:
  //1)TokenType.NULL_CHARACTER - \u0000-character sequences (e.g. '\u0000\u0000\u0000')
  //2)TokenType.WHITESPACE_CHARACTER - any whitespace/new-line character sequences (e.g. '\n  \r\t   \f')
  //3)TokenType.CHARACTER - any character sequence which don't belong to groups 1 and 2 (e.g. 'abcdef1234@@#$%^')
  _appendCharToCurrentCharacterToken(t, u) {
    if (this.currentCharacterToken)
      if (this.currentCharacterToken.type !== t)
        this.currentLocation = this.getCurrentLocation(0), this._emitCurrentCharacterToken(this.currentLocation), this.preprocessor.dropParsedChunk();
      else {
        this.currentCharacterToken.chars += u;
        return;
      }
    this._createCharacterToken(t, u);
  }
  _emitCodePoint(t) {
    const u = pu(t) ? g.WHITESPACE_CHARACTER : t === r.NULL ? g.NULL_CHARACTER : g.CHARACTER;
    this._appendCharToCurrentCharacterToken(u, String.fromCodePoint(t));
  }
  //NOTE: used when we emit characters explicitly.
  //This is always for non-whitespace and non-null characters, which allows us to avoid additional checks.
  _emitChars(t) {
    this._appendCharToCurrentCharacterToken(g.CHARACTER, t);
  }
  // Character reference helpers
  _matchNamedCharacterReference(t) {
    let u = null, n = 0, s = !1;
    for (let c = 0, l = W[0]; c >= 0 && (c = Eu(W, l, c + 1, t), !(c < 0)); t = this._consume()) {
      n += 1, l = W[c];
      const f = l & Y.VALUE_LENGTH;
      if (f) {
        const T = (f >> 14) - 1;
        if (t !== r.SEMICOLON && this._isCharacterReferenceInAttribute() && Wa(this.preprocessor.peek(1)) ? (u = [r.AMPERSAND], c += T) : (u = T === 0 ? [W[c] & ~Y.VALUE_LENGTH] : T === 1 ? [W[++c]] : [W[++c], W[++c]], n = 0, s = t !== r.SEMICOLON), T === 0) {
          this._consume();
          break;
        }
      }
    }
    return this._unconsume(n), s && !this.preprocessor.endOfChunkHit && this._err(h.missingSemicolonAfterCharacterReference), this._unconsume(1), u;
  }
  _isCharacterReferenceInAttribute() {
    return this.returnState === i.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === i.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === i.ATTRIBUTE_VALUE_UNQUOTED;
  }
  _flushCodePointConsumedAsCharacterReference(t) {
    this._isCharacterReferenceInAttribute() ? this.currentAttr.value += String.fromCodePoint(t) : this._emitCodePoint(t);
  }
  // Calling states this way turns out to be much faster than any other approach.
  _callState(t) {
    switch (this.state) {
      case i.DATA: {
        this._stateData(t);
        break;
      }
      case i.RCDATA: {
        this._stateRcdata(t);
        break;
      }
      case i.RAWTEXT: {
        this._stateRawtext(t);
        break;
      }
      case i.SCRIPT_DATA: {
        this._stateScriptData(t);
        break;
      }
      case i.PLAINTEXT: {
        this._statePlaintext(t);
        break;
      }
      case i.TAG_OPEN: {
        this._stateTagOpen(t);
        break;
      }
      case i.END_TAG_OPEN: {
        this._stateEndTagOpen(t);
        break;
      }
      case i.TAG_NAME: {
        this._stateTagName(t);
        break;
      }
      case i.RCDATA_LESS_THAN_SIGN: {
        this._stateRcdataLessThanSign(t);
        break;
      }
      case i.RCDATA_END_TAG_OPEN: {
        this._stateRcdataEndTagOpen(t);
        break;
      }
      case i.RCDATA_END_TAG_NAME: {
        this._stateRcdataEndTagName(t);
        break;
      }
      case i.RAWTEXT_LESS_THAN_SIGN: {
        this._stateRawtextLessThanSign(t);
        break;
      }
      case i.RAWTEXT_END_TAG_OPEN: {
        this._stateRawtextEndTagOpen(t);
        break;
      }
      case i.RAWTEXT_END_TAG_NAME: {
        this._stateRawtextEndTagName(t);
        break;
      }
      case i.SCRIPT_DATA_LESS_THAN_SIGN: {
        this._stateScriptDataLessThanSign(t);
        break;
      }
      case i.SCRIPT_DATA_END_TAG_OPEN: {
        this._stateScriptDataEndTagOpen(t);
        break;
      }
      case i.SCRIPT_DATA_END_TAG_NAME: {
        this._stateScriptDataEndTagName(t);
        break;
      }
      case i.SCRIPT_DATA_ESCAPE_START: {
        this._stateScriptDataEscapeStart(t);
        break;
      }
      case i.SCRIPT_DATA_ESCAPE_START_DASH: {
        this._stateScriptDataEscapeStartDash(t);
        break;
      }
      case i.SCRIPT_DATA_ESCAPED: {
        this._stateScriptDataEscaped(t);
        break;
      }
      case i.SCRIPT_DATA_ESCAPED_DASH: {
        this._stateScriptDataEscapedDash(t);
        break;
      }
      case i.SCRIPT_DATA_ESCAPED_DASH_DASH: {
        this._stateScriptDataEscapedDashDash(t);
        break;
      }
      case i.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataEscapedLessThanSign(t);
        break;
      }
      case i.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
        this._stateScriptDataEscapedEndTagOpen(t);
        break;
      }
      case i.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
        this._stateScriptDataEscapedEndTagName(t);
        break;
      }
      case i.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
        this._stateScriptDataDoubleEscapeStart(t);
        break;
      }
      case i.SCRIPT_DATA_DOUBLE_ESCAPED: {
        this._stateScriptDataDoubleEscaped(t);
        break;
      }
      case i.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
        this._stateScriptDataDoubleEscapedDash(t);
        break;
      }
      case i.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
        this._stateScriptDataDoubleEscapedDashDash(t);
        break;
      }
      case i.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
        this._stateScriptDataDoubleEscapedLessThanSign(t);
        break;
      }
      case i.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
        this._stateScriptDataDoubleEscapeEnd(t);
        break;
      }
      case i.BEFORE_ATTRIBUTE_NAME: {
        this._stateBeforeAttributeName(t);
        break;
      }
      case i.ATTRIBUTE_NAME: {
        this._stateAttributeName(t);
        break;
      }
      case i.AFTER_ATTRIBUTE_NAME: {
        this._stateAfterAttributeName(t);
        break;
      }
      case i.BEFORE_ATTRIBUTE_VALUE: {
        this._stateBeforeAttributeValue(t);
        break;
      }
      case i.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
        this._stateAttributeValueDoubleQuoted(t);
        break;
      }
      case i.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
        this._stateAttributeValueSingleQuoted(t);
        break;
      }
      case i.ATTRIBUTE_VALUE_UNQUOTED: {
        this._stateAttributeValueUnquoted(t);
        break;
      }
      case i.AFTER_ATTRIBUTE_VALUE_QUOTED: {
        this._stateAfterAttributeValueQuoted(t);
        break;
      }
      case i.SELF_CLOSING_START_TAG: {
        this._stateSelfClosingStartTag(t);
        break;
      }
      case i.BOGUS_COMMENT: {
        this._stateBogusComment(t);
        break;
      }
      case i.MARKUP_DECLARATION_OPEN: {
        this._stateMarkupDeclarationOpen(t);
        break;
      }
      case i.COMMENT_START: {
        this._stateCommentStart(t);
        break;
      }
      case i.COMMENT_START_DASH: {
        this._stateCommentStartDash(t);
        break;
      }
      case i.COMMENT: {
        this._stateComment(t);
        break;
      }
      case i.COMMENT_LESS_THAN_SIGN: {
        this._stateCommentLessThanSign(t);
        break;
      }
      case i.COMMENT_LESS_THAN_SIGN_BANG: {
        this._stateCommentLessThanSignBang(t);
        break;
      }
      case i.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
        this._stateCommentLessThanSignBangDash(t);
        break;
      }
      case i.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
        this._stateCommentLessThanSignBangDashDash(t);
        break;
      }
      case i.COMMENT_END_DASH: {
        this._stateCommentEndDash(t);
        break;
      }
      case i.COMMENT_END: {
        this._stateCommentEnd(t);
        break;
      }
      case i.COMMENT_END_BANG: {
        this._stateCommentEndBang(t);
        break;
      }
      case i.DOCTYPE: {
        this._stateDoctype(t);
        break;
      }
      case i.BEFORE_DOCTYPE_NAME: {
        this._stateBeforeDoctypeName(t);
        break;
      }
      case i.DOCTYPE_NAME: {
        this._stateDoctypeName(t);
        break;
      }
      case i.AFTER_DOCTYPE_NAME: {
        this._stateAfterDoctypeName(t);
        break;
      }
      case i.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
        this._stateAfterDoctypePublicKeyword(t);
        break;
      }
      case i.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateBeforeDoctypePublicIdentifier(t);
        break;
      }
      case i.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypePublicIdentifierDoubleQuoted(t);
        break;
      }
      case i.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypePublicIdentifierSingleQuoted(t);
        break;
      }
      case i.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
        this._stateAfterDoctypePublicIdentifier(t);
        break;
      }
      case i.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
        this._stateBetweenDoctypePublicAndSystemIdentifiers(t);
        break;
      }
      case i.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
        this._stateAfterDoctypeSystemKeyword(t);
        break;
      }
      case i.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateBeforeDoctypeSystemIdentifier(t);
        break;
      }
      case i.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
        this._stateDoctypeSystemIdentifierDoubleQuoted(t);
        break;
      }
      case i.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
        this._stateDoctypeSystemIdentifierSingleQuoted(t);
        break;
      }
      case i.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
        this._stateAfterDoctypeSystemIdentifier(t);
        break;
      }
      case i.BOGUS_DOCTYPE: {
        this._stateBogusDoctype(t);
        break;
      }
      case i.CDATA_SECTION: {
        this._stateCdataSection(t);
        break;
      }
      case i.CDATA_SECTION_BRACKET: {
        this._stateCdataSectionBracket(t);
        break;
      }
      case i.CDATA_SECTION_END: {
        this._stateCdataSectionEnd(t);
        break;
      }
      case i.CHARACTER_REFERENCE: {
        this._stateCharacterReference(t);
        break;
      }
      case i.NAMED_CHARACTER_REFERENCE: {
        this._stateNamedCharacterReference(t);
        break;
      }
      case i.AMBIGUOUS_AMPERSAND: {
        this._stateAmbiguousAmpersand(t);
        break;
      }
      case i.NUMERIC_CHARACTER_REFERENCE: {
        this._stateNumericCharacterReference(t);
        break;
      }
      case i.HEXADEMICAL_CHARACTER_REFERENCE_START: {
        this._stateHexademicalCharacterReferenceStart(t);
        break;
      }
      case i.HEXADEMICAL_CHARACTER_REFERENCE: {
        this._stateHexademicalCharacterReference(t);
        break;
      }
      case i.DECIMAL_CHARACTER_REFERENCE: {
        this._stateDecimalCharacterReference(t);
        break;
      }
      case i.NUMERIC_CHARACTER_REFERENCE_END: {
        this._stateNumericCharacterReferenceEnd(t);
        break;
      }
      default:
        throw new Error("Unknown state");
    }
  }
  // State machine
  // Data state
  //------------------------------------------------------------------
  _stateData(t) {
    switch (t) {
      case r.LESS_THAN_SIGN: {
        this.state = i.TAG_OPEN;
        break;
      }
      case r.AMPERSAND: {
        this.returnState = i.DATA, this.state = i.CHARACTER_REFERENCE;
        break;
      }
      case r.NULL: {
        this._err(h.unexpectedNullCharacter), this._emitCodePoint(t);
        break;
      }
      case r.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  //  RCDATA state
  //------------------------------------------------------------------
  _stateRcdata(t) {
    switch (t) {
      case r.AMPERSAND: {
        this.returnState = i.RCDATA, this.state = i.CHARACTER_REFERENCE;
        break;
      }
      case r.LESS_THAN_SIGN: {
        this.state = i.RCDATA_LESS_THAN_SIGN;
        break;
      }
      case r.NULL: {
        this._err(h.unexpectedNullCharacter), this._emitChars(I);
        break;
      }
      case r.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // RAWTEXT state
  //------------------------------------------------------------------
  _stateRawtext(t) {
    switch (t) {
      case r.LESS_THAN_SIGN: {
        this.state = i.RAWTEXT_LESS_THAN_SIGN;
        break;
      }
      case r.NULL: {
        this._err(h.unexpectedNullCharacter), this._emitChars(I);
        break;
      }
      case r.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // Script data state
  //------------------------------------------------------------------
  _stateScriptData(t) {
    switch (t) {
      case r.LESS_THAN_SIGN: {
        this.state = i.SCRIPT_DATA_LESS_THAN_SIGN;
        break;
      }
      case r.NULL: {
        this._err(h.unexpectedNullCharacter), this._emitChars(I);
        break;
      }
      case r.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // PLAINTEXT state
  //------------------------------------------------------------------
  _statePlaintext(t) {
    switch (t) {
      case r.NULL: {
        this._err(h.unexpectedNullCharacter), this._emitChars(I);
        break;
      }
      case r.EOF: {
        this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // Tag open state
  //------------------------------------------------------------------
  _stateTagOpen(t) {
    if (G(t))
      this._createStartTagToken(), this.state = i.TAG_NAME, this._stateTagName(t);
    else
      switch (t) {
        case r.EXCLAMATION_MARK: {
          this.state = i.MARKUP_DECLARATION_OPEN;
          break;
        }
        case r.SOLIDUS: {
          this.state = i.END_TAG_OPEN;
          break;
        }
        case r.QUESTION_MARK: {
          this._err(h.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = i.BOGUS_COMMENT, this._stateBogusComment(t);
          break;
        }
        case r.EOF: {
          this._err(h.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
          break;
        }
        default:
          this._err(h.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = i.DATA, this._stateData(t);
      }
  }
  // End tag open state
  //------------------------------------------------------------------
  _stateEndTagOpen(t) {
    if (G(t))
      this._createEndTagToken(), this.state = i.TAG_NAME, this._stateTagName(t);
    else
      switch (t) {
        case r.GREATER_THAN_SIGN: {
          this._err(h.missingEndTagName), this.state = i.DATA;
          break;
        }
        case r.EOF: {
          this._err(h.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
          break;
        }
        default:
          this._err(h.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = i.BOGUS_COMMENT, this._stateBogusComment(t);
      }
  }
  // Tag name state
  //------------------------------------------------------------------
  _stateTagName(t) {
    const u = this.currentToken;
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED: {
        this.state = i.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case r.SOLIDUS: {
        this.state = i.SELF_CLOSING_START_TAG;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this.state = i.DATA, this.emitCurrentTagToken();
        break;
      }
      case r.NULL: {
        this._err(h.unexpectedNullCharacter), u.tagName += I;
        break;
      }
      case r.EOF: {
        this._err(h.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        u.tagName += String.fromCodePoint(re(t) ? _e(t) : t);
    }
  }
  // RCDATA less-than sign state
  //------------------------------------------------------------------
  _stateRcdataLessThanSign(t) {
    t === r.SOLIDUS ? this.state = i.RCDATA_END_TAG_OPEN : (this._emitChars("<"), this.state = i.RCDATA, this._stateRcdata(t));
  }
  // RCDATA end tag open state
  //------------------------------------------------------------------
  _stateRcdataEndTagOpen(t) {
    G(t) ? (this.state = i.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(t)) : (this._emitChars("</"), this.state = i.RCDATA, this._stateRcdata(t));
  }
  handleSpecialEndTag(t) {
    if (!this.preprocessor.startsWith(this.lastStartTagName, !1))
      return !this._ensureHibernation();
    this._createEndTagToken();
    const u = this.currentToken;
    switch (u.tagName = this.lastStartTagName, this.preprocessor.peek(this.lastStartTagName.length)) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED:
        return this._advanceBy(this.lastStartTagName.length), this.state = i.BEFORE_ATTRIBUTE_NAME, !1;
      case r.SOLIDUS:
        return this._advanceBy(this.lastStartTagName.length), this.state = i.SELF_CLOSING_START_TAG, !1;
      case r.GREATER_THAN_SIGN:
        return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = i.DATA, !1;
      default:
        return !this._ensureHibernation();
    }
  }
  // RCDATA end tag name state
  //------------------------------------------------------------------
  _stateRcdataEndTagName(t) {
    this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = i.RCDATA, this._stateRcdata(t));
  }
  // RAWTEXT less-than sign state
  //------------------------------------------------------------------
  _stateRawtextLessThanSign(t) {
    t === r.SOLIDUS ? this.state = i.RAWTEXT_END_TAG_OPEN : (this._emitChars("<"), this.state = i.RAWTEXT, this._stateRawtext(t));
  }
  // RAWTEXT end tag open state
  //------------------------------------------------------------------
  _stateRawtextEndTagOpen(t) {
    G(t) ? (this.state = i.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(t)) : (this._emitChars("</"), this.state = i.RAWTEXT, this._stateRawtext(t));
  }
  // RAWTEXT end tag name state
  //------------------------------------------------------------------
  _stateRawtextEndTagName(t) {
    this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = i.RAWTEXT, this._stateRawtext(t));
  }
  // Script data less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataLessThanSign(t) {
    switch (t) {
      case r.SOLIDUS: {
        this.state = i.SCRIPT_DATA_END_TAG_OPEN;
        break;
      }
      case r.EXCLAMATION_MARK: {
        this.state = i.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
        break;
      }
      default:
        this._emitChars("<"), this.state = i.SCRIPT_DATA, this._stateScriptData(t);
    }
  }
  // Script data end tag open state
  //------------------------------------------------------------------
  _stateScriptDataEndTagOpen(t) {
    G(t) ? (this.state = i.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(t)) : (this._emitChars("</"), this.state = i.SCRIPT_DATA, this._stateScriptData(t));
  }
  // Script data end tag name state
  //------------------------------------------------------------------
  _stateScriptDataEndTagName(t) {
    this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = i.SCRIPT_DATA, this._stateScriptData(t));
  }
  // Script data escape start state
  //------------------------------------------------------------------
  _stateScriptDataEscapeStart(t) {
    t === r.HYPHEN_MINUS ? (this.state = i.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-")) : (this.state = i.SCRIPT_DATA, this._stateScriptData(t));
  }
  // Script data escape start dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapeStartDash(t) {
    t === r.HYPHEN_MINUS ? (this.state = i.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-")) : (this.state = i.SCRIPT_DATA, this._stateScriptData(t));
  }
  // Script data escaped state
  //------------------------------------------------------------------
  _stateScriptDataEscaped(t) {
    switch (t) {
      case r.HYPHEN_MINUS: {
        this.state = i.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
        break;
      }
      case r.LESS_THAN_SIGN: {
        this.state = i.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case r.NULL: {
        this._err(h.unexpectedNullCharacter), this._emitChars(I);
        break;
      }
      case r.EOF: {
        this._err(h.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // Script data escaped dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapedDash(t) {
    switch (t) {
      case r.HYPHEN_MINUS: {
        this.state = i.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
        break;
      }
      case r.LESS_THAN_SIGN: {
        this.state = i.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case r.NULL: {
        this._err(h.unexpectedNullCharacter), this.state = i.SCRIPT_DATA_ESCAPED, this._emitChars(I);
        break;
      }
      case r.EOF: {
        this._err(h.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = i.SCRIPT_DATA_ESCAPED, this._emitCodePoint(t);
    }
  }
  // Script data escaped dash dash state
  //------------------------------------------------------------------
  _stateScriptDataEscapedDashDash(t) {
    switch (t) {
      case r.HYPHEN_MINUS: {
        this._emitChars("-");
        break;
      }
      case r.LESS_THAN_SIGN: {
        this.state = i.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this.state = i.SCRIPT_DATA, this._emitChars(">");
        break;
      }
      case r.NULL: {
        this._err(h.unexpectedNullCharacter), this.state = i.SCRIPT_DATA_ESCAPED, this._emitChars(I);
        break;
      }
      case r.EOF: {
        this._err(h.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = i.SCRIPT_DATA_ESCAPED, this._emitCodePoint(t);
    }
  }
  // Script data escaped less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataEscapedLessThanSign(t) {
    t === r.SOLIDUS ? this.state = i.SCRIPT_DATA_ESCAPED_END_TAG_OPEN : G(t) ? (this._emitChars("<"), this.state = i.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(t)) : (this._emitChars("<"), this.state = i.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
  }
  // Script data escaped end tag open state
  //------------------------------------------------------------------
  _stateScriptDataEscapedEndTagOpen(t) {
    G(t) ? (this.state = i.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(t)) : (this._emitChars("</"), this.state = i.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
  }
  // Script data escaped end tag name state
  //------------------------------------------------------------------
  _stateScriptDataEscapedEndTagName(t) {
    this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = i.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
  }
  // Script data double escape start state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapeStart(t) {
    if (this.preprocessor.startsWith(y.SCRIPT, !1) && Rt(this.preprocessor.peek(y.SCRIPT.length))) {
      this._emitCodePoint(t);
      for (let u = 0; u < y.SCRIPT.length; u++)
        this._emitCodePoint(this._consume());
      this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED;
    } else this._ensureHibernation() || (this.state = i.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
  }
  // Script data double escaped state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscaped(t) {
    switch (t) {
      case r.HYPHEN_MINUS: {
        this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
        break;
      }
      case r.LESS_THAN_SIGN: {
        this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case r.NULL: {
        this._err(h.unexpectedNullCharacter), this._emitChars(I);
        break;
      }
      case r.EOF: {
        this._err(h.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // Script data double escaped dash state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedDash(t) {
    switch (t) {
      case r.HYPHEN_MINUS: {
        this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
        break;
      }
      case r.LESS_THAN_SIGN: {
        this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case r.NULL: {
        this._err(h.unexpectedNullCharacter), this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(I);
        break;
      }
      case r.EOF: {
        this._err(h.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(t);
    }
  }
  // Script data double escaped dash dash state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedDashDash(t) {
    switch (t) {
      case r.HYPHEN_MINUS: {
        this._emitChars("-");
        break;
      }
      case r.LESS_THAN_SIGN: {
        this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this.state = i.SCRIPT_DATA, this._emitChars(">");
        break;
      }
      case r.NULL: {
        this._err(h.unexpectedNullCharacter), this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(I);
        break;
      }
      case r.EOF: {
        this._err(h.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
        break;
      }
      default:
        this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(t);
    }
  }
  // Script data double escaped less-than sign state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapedLessThanSign(t) {
    t === r.SOLIDUS ? (this.state = i.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/")) : (this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(t));
  }
  // Script data double escape end state
  //------------------------------------------------------------------
  _stateScriptDataDoubleEscapeEnd(t) {
    if (this.preprocessor.startsWith(y.SCRIPT, !1) && Rt(this.preprocessor.peek(y.SCRIPT.length))) {
      this._emitCodePoint(t);
      for (let u = 0; u < y.SCRIPT.length; u++)
        this._emitCodePoint(this._consume());
      this.state = i.SCRIPT_DATA_ESCAPED;
    } else this._ensureHibernation() || (this.state = i.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(t));
  }
  // Before attribute name state
  //------------------------------------------------------------------
  _stateBeforeAttributeName(t) {
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED:
        break;
      case r.SOLIDUS:
      case r.GREATER_THAN_SIGN:
      case r.EOF: {
        this.state = i.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(t);
        break;
      }
      case r.EQUALS_SIGN: {
        this._err(h.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = i.ATTRIBUTE_NAME;
        break;
      }
      default:
        this._createAttr(""), this.state = i.ATTRIBUTE_NAME, this._stateAttributeName(t);
    }
  }
  // Attribute name state
  //------------------------------------------------------------------
  _stateAttributeName(t) {
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED:
      case r.SOLIDUS:
      case r.GREATER_THAN_SIGN:
      case r.EOF: {
        this._leaveAttrName(), this.state = i.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(t);
        break;
      }
      case r.EQUALS_SIGN: {
        this._leaveAttrName(), this.state = i.BEFORE_ATTRIBUTE_VALUE;
        break;
      }
      case r.QUOTATION_MARK:
      case r.APOSTROPHE:
      case r.LESS_THAN_SIGN: {
        this._err(h.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(t);
        break;
      }
      case r.NULL: {
        this._err(h.unexpectedNullCharacter), this.currentAttr.name += I;
        break;
      }
      default:
        this.currentAttr.name += String.fromCodePoint(re(t) ? _e(t) : t);
    }
  }
  // After attribute name state
  //------------------------------------------------------------------
  _stateAfterAttributeName(t) {
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED:
        break;
      case r.SOLIDUS: {
        this.state = i.SELF_CLOSING_START_TAG;
        break;
      }
      case r.EQUALS_SIGN: {
        this.state = i.BEFORE_ATTRIBUTE_VALUE;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this.state = i.DATA, this.emitCurrentTagToken();
        break;
      }
      case r.EOF: {
        this._err(h.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._createAttr(""), this.state = i.ATTRIBUTE_NAME, this._stateAttributeName(t);
    }
  }
  // Before attribute value state
  //------------------------------------------------------------------
  _stateBeforeAttributeValue(t) {
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED:
        break;
      case r.QUOTATION_MARK: {
        this.state = i.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
        break;
      }
      case r.APOSTROPHE: {
        this.state = i.ATTRIBUTE_VALUE_SINGLE_QUOTED;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(h.missingAttributeValue), this.state = i.DATA, this.emitCurrentTagToken();
        break;
      }
      default:
        this.state = i.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(t);
    }
  }
  // Attribute value (double-quoted) state
  //------------------------------------------------------------------
  _stateAttributeValueDoubleQuoted(t) {
    switch (t) {
      case r.QUOTATION_MARK: {
        this.state = i.AFTER_ATTRIBUTE_VALUE_QUOTED;
        break;
      }
      case r.AMPERSAND: {
        this.returnState = i.ATTRIBUTE_VALUE_DOUBLE_QUOTED, this.state = i.CHARACTER_REFERENCE;
        break;
      }
      case r.NULL: {
        this._err(h.unexpectedNullCharacter), this.currentAttr.value += I;
        break;
      }
      case r.EOF: {
        this._err(h.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(t);
    }
  }
  // Attribute value (single-quoted) state
  //------------------------------------------------------------------
  _stateAttributeValueSingleQuoted(t) {
    switch (t) {
      case r.APOSTROPHE: {
        this.state = i.AFTER_ATTRIBUTE_VALUE_QUOTED;
        break;
      }
      case r.AMPERSAND: {
        this.returnState = i.ATTRIBUTE_VALUE_SINGLE_QUOTED, this.state = i.CHARACTER_REFERENCE;
        break;
      }
      case r.NULL: {
        this._err(h.unexpectedNullCharacter), this.currentAttr.value += I;
        break;
      }
      case r.EOF: {
        this._err(h.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(t);
    }
  }
  // Attribute value (unquoted) state
  //------------------------------------------------------------------
  _stateAttributeValueUnquoted(t) {
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED: {
        this._leaveAttrValue(), this.state = i.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case r.AMPERSAND: {
        this.returnState = i.ATTRIBUTE_VALUE_UNQUOTED, this.state = i.CHARACTER_REFERENCE;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._leaveAttrValue(), this.state = i.DATA, this.emitCurrentTagToken();
        break;
      }
      case r.NULL: {
        this._err(h.unexpectedNullCharacter), this.currentAttr.value += I;
        break;
      }
      case r.QUOTATION_MARK:
      case r.APOSTROPHE:
      case r.LESS_THAN_SIGN:
      case r.EQUALS_SIGN:
      case r.GRAVE_ACCENT: {
        this._err(h.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(t);
        break;
      }
      case r.EOF: {
        this._err(h.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this.currentAttr.value += String.fromCodePoint(t);
    }
  }
  // After attribute value (quoted) state
  //------------------------------------------------------------------
  _stateAfterAttributeValueQuoted(t) {
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED: {
        this._leaveAttrValue(), this.state = i.BEFORE_ATTRIBUTE_NAME;
        break;
      }
      case r.SOLIDUS: {
        this._leaveAttrValue(), this.state = i.SELF_CLOSING_START_TAG;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._leaveAttrValue(), this.state = i.DATA, this.emitCurrentTagToken();
        break;
      }
      case r.EOF: {
        this._err(h.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._err(h.missingWhitespaceBetweenAttributes), this.state = i.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(t);
    }
  }
  // Self-closing start tag state
  //------------------------------------------------------------------
  _stateSelfClosingStartTag(t) {
    switch (t) {
      case r.GREATER_THAN_SIGN: {
        const u = this.currentToken;
        u.selfClosing = !0, this.state = i.DATA, this.emitCurrentTagToken();
        break;
      }
      case r.EOF: {
        this._err(h.eofInTag), this._emitEOFToken();
        break;
      }
      default:
        this._err(h.unexpectedSolidusInTag), this.state = i.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(t);
    }
  }
  // Bogus comment state
  //------------------------------------------------------------------
  _stateBogusComment(t) {
    const u = this.currentToken;
    switch (t) {
      case r.GREATER_THAN_SIGN: {
        this.state = i.DATA, this.emitCurrentComment(u);
        break;
      }
      case r.EOF: {
        this.emitCurrentComment(u), this._emitEOFToken();
        break;
      }
      case r.NULL: {
        this._err(h.unexpectedNullCharacter), u.data += I;
        break;
      }
      default:
        u.data += String.fromCodePoint(t);
    }
  }
  // Markup declaration open state
  //------------------------------------------------------------------
  _stateMarkupDeclarationOpen(t) {
    this._consumeSequenceIfMatch(y.DASH_DASH, !0) ? (this._createCommentToken(y.DASH_DASH.length + 1), this.state = i.COMMENT_START) : this._consumeSequenceIfMatch(y.DOCTYPE, !1) ? (this.currentLocation = this.getCurrentLocation(y.DOCTYPE.length + 1), this.state = i.DOCTYPE) : this._consumeSequenceIfMatch(y.CDATA_START, !0) ? this.inForeignNode ? this.state = i.CDATA_SECTION : (this._err(h.cdataInHtmlContent), this._createCommentToken(y.CDATA_START.length + 1), this.currentToken.data = "[CDATA[", this.state = i.BOGUS_COMMENT) : this._ensureHibernation() || (this._err(h.incorrectlyOpenedComment), this._createCommentToken(2), this.state = i.BOGUS_COMMENT, this._stateBogusComment(t));
  }
  // Comment start state
  //------------------------------------------------------------------
  _stateCommentStart(t) {
    switch (t) {
      case r.HYPHEN_MINUS: {
        this.state = i.COMMENT_START_DASH;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(h.abruptClosingOfEmptyComment), this.state = i.DATA;
        const u = this.currentToken;
        this.emitCurrentComment(u);
        break;
      }
      default:
        this.state = i.COMMENT, this._stateComment(t);
    }
  }
  // Comment start dash state
  //------------------------------------------------------------------
  _stateCommentStartDash(t) {
    const u = this.currentToken;
    switch (t) {
      case r.HYPHEN_MINUS: {
        this.state = i.COMMENT_END;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(h.abruptClosingOfEmptyComment), this.state = i.DATA, this.emitCurrentComment(u);
        break;
      }
      case r.EOF: {
        this._err(h.eofInComment), this.emitCurrentComment(u), this._emitEOFToken();
        break;
      }
      default:
        u.data += "-", this.state = i.COMMENT, this._stateComment(t);
    }
  }
  // Comment state
  //------------------------------------------------------------------
  _stateComment(t) {
    const u = this.currentToken;
    switch (t) {
      case r.HYPHEN_MINUS: {
        this.state = i.COMMENT_END_DASH;
        break;
      }
      case r.LESS_THAN_SIGN: {
        u.data += "<", this.state = i.COMMENT_LESS_THAN_SIGN;
        break;
      }
      case r.NULL: {
        this._err(h.unexpectedNullCharacter), u.data += I;
        break;
      }
      case r.EOF: {
        this._err(h.eofInComment), this.emitCurrentComment(u), this._emitEOFToken();
        break;
      }
      default:
        u.data += String.fromCodePoint(t);
    }
  }
  // Comment less-than sign state
  //------------------------------------------------------------------
  _stateCommentLessThanSign(t) {
    const u = this.currentToken;
    switch (t) {
      case r.EXCLAMATION_MARK: {
        u.data += "!", this.state = i.COMMENT_LESS_THAN_SIGN_BANG;
        break;
      }
      case r.LESS_THAN_SIGN: {
        u.data += "<";
        break;
      }
      default:
        this.state = i.COMMENT, this._stateComment(t);
    }
  }
  // Comment less-than sign bang state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBang(t) {
    t === r.HYPHEN_MINUS ? this.state = i.COMMENT_LESS_THAN_SIGN_BANG_DASH : (this.state = i.COMMENT, this._stateComment(t));
  }
  // Comment less-than sign bang dash state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBangDash(t) {
    t === r.HYPHEN_MINUS ? this.state = i.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH : (this.state = i.COMMENT_END_DASH, this._stateCommentEndDash(t));
  }
  // Comment less-than sign bang dash dash state
  //------------------------------------------------------------------
  _stateCommentLessThanSignBangDashDash(t) {
    t !== r.GREATER_THAN_SIGN && t !== r.EOF && this._err(h.nestedComment), this.state = i.COMMENT_END, this._stateCommentEnd(t);
  }
  // Comment end dash state
  //------------------------------------------------------------------
  _stateCommentEndDash(t) {
    const u = this.currentToken;
    switch (t) {
      case r.HYPHEN_MINUS: {
        this.state = i.COMMENT_END;
        break;
      }
      case r.EOF: {
        this._err(h.eofInComment), this.emitCurrentComment(u), this._emitEOFToken();
        break;
      }
      default:
        u.data += "-", this.state = i.COMMENT, this._stateComment(t);
    }
  }
  // Comment end state
  //------------------------------------------------------------------
  _stateCommentEnd(t) {
    const u = this.currentToken;
    switch (t) {
      case r.GREATER_THAN_SIGN: {
        this.state = i.DATA, this.emitCurrentComment(u);
        break;
      }
      case r.EXCLAMATION_MARK: {
        this.state = i.COMMENT_END_BANG;
        break;
      }
      case r.HYPHEN_MINUS: {
        u.data += "-";
        break;
      }
      case r.EOF: {
        this._err(h.eofInComment), this.emitCurrentComment(u), this._emitEOFToken();
        break;
      }
      default:
        u.data += "--", this.state = i.COMMENT, this._stateComment(t);
    }
  }
  // Comment end bang state
  //------------------------------------------------------------------
  _stateCommentEndBang(t) {
    const u = this.currentToken;
    switch (t) {
      case r.HYPHEN_MINUS: {
        u.data += "--!", this.state = i.COMMENT_END_DASH;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(h.incorrectlyClosedComment), this.state = i.DATA, this.emitCurrentComment(u);
        break;
      }
      case r.EOF: {
        this._err(h.eofInComment), this.emitCurrentComment(u), this._emitEOFToken();
        break;
      }
      default:
        u.data += "--!", this.state = i.COMMENT, this._stateComment(t);
    }
  }
  // DOCTYPE state
  //------------------------------------------------------------------
  _stateDoctype(t) {
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED: {
        this.state = i.BEFORE_DOCTYPE_NAME;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this.state = i.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(t);
        break;
      }
      case r.EOF: {
        this._err(h.eofInDoctype), this._createDoctypeToken(null);
        const u = this.currentToken;
        u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        this._err(h.missingWhitespaceBeforeDoctypeName), this.state = i.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(t);
    }
  }
  // Before DOCTYPE name state
  //------------------------------------------------------------------
  _stateBeforeDoctypeName(t) {
    if (re(t))
      this._createDoctypeToken(String.fromCharCode(_e(t))), this.state = i.DOCTYPE_NAME;
    else
      switch (t) {
        case r.SPACE:
        case r.LINE_FEED:
        case r.TABULATION:
        case r.FORM_FEED:
          break;
        case r.NULL: {
          this._err(h.unexpectedNullCharacter), this._createDoctypeToken(I), this.state = i.DOCTYPE_NAME;
          break;
        }
        case r.GREATER_THAN_SIGN: {
          this._err(h.missingDoctypeName), this._createDoctypeToken(null);
          const u = this.currentToken;
          u.forceQuirks = !0, this.emitCurrentDoctype(u), this.state = i.DATA;
          break;
        }
        case r.EOF: {
          this._err(h.eofInDoctype), this._createDoctypeToken(null);
          const u = this.currentToken;
          u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
          break;
        }
        default:
          this._createDoctypeToken(String.fromCodePoint(t)), this.state = i.DOCTYPE_NAME;
      }
  }
  // DOCTYPE name state
  //------------------------------------------------------------------
  _stateDoctypeName(t) {
    const u = this.currentToken;
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED: {
        this.state = i.AFTER_DOCTYPE_NAME;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this.state = i.DATA, this.emitCurrentDoctype(u);
        break;
      }
      case r.NULL: {
        this._err(h.unexpectedNullCharacter), u.name += I;
        break;
      }
      case r.EOF: {
        this._err(h.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        u.name += String.fromCodePoint(re(t) ? _e(t) : t);
    }
  }
  // After DOCTYPE name state
  //------------------------------------------------------------------
  _stateAfterDoctypeName(t) {
    const u = this.currentToken;
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED:
        break;
      case r.GREATER_THAN_SIGN: {
        this.state = i.DATA, this.emitCurrentDoctype(u);
        break;
      }
      case r.EOF: {
        this._err(h.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        this._consumeSequenceIfMatch(y.PUBLIC, !1) ? this.state = i.AFTER_DOCTYPE_PUBLIC_KEYWORD : this._consumeSequenceIfMatch(y.SYSTEM, !1) ? this.state = i.AFTER_DOCTYPE_SYSTEM_KEYWORD : this._ensureHibernation() || (this._err(h.invalidCharacterSequenceAfterDoctypeName), u.forceQuirks = !0, this.state = i.BOGUS_DOCTYPE, this._stateBogusDoctype(t));
    }
  }
  // After DOCTYPE public keyword state
  //------------------------------------------------------------------
  _stateAfterDoctypePublicKeyword(t) {
    const u = this.currentToken;
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED: {
        this.state = i.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case r.QUOTATION_MARK: {
        this._err(h.missingWhitespaceAfterDoctypePublicKeyword), u.publicId = "", this.state = i.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case r.APOSTROPHE: {
        this._err(h.missingWhitespaceAfterDoctypePublicKeyword), u.publicId = "", this.state = i.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(h.missingDoctypePublicIdentifier), u.forceQuirks = !0, this.state = i.DATA, this.emitCurrentDoctype(u);
        break;
      }
      case r.EOF: {
        this._err(h.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        this._err(h.missingQuoteBeforeDoctypePublicIdentifier), u.forceQuirks = !0, this.state = i.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // Before DOCTYPE public identifier state
  //------------------------------------------------------------------
  _stateBeforeDoctypePublicIdentifier(t) {
    const u = this.currentToken;
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED:
        break;
      case r.QUOTATION_MARK: {
        u.publicId = "", this.state = i.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case r.APOSTROPHE: {
        u.publicId = "", this.state = i.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(h.missingDoctypePublicIdentifier), u.forceQuirks = !0, this.state = i.DATA, this.emitCurrentDoctype(u);
        break;
      }
      case r.EOF: {
        this._err(h.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        this._err(h.missingQuoteBeforeDoctypePublicIdentifier), u.forceQuirks = !0, this.state = i.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // DOCTYPE public identifier (double-quoted) state
  //------------------------------------------------------------------
  _stateDoctypePublicIdentifierDoubleQuoted(t) {
    const u = this.currentToken;
    switch (t) {
      case r.QUOTATION_MARK: {
        this.state = i.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case r.NULL: {
        this._err(h.unexpectedNullCharacter), u.publicId += I;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(h.abruptDoctypePublicIdentifier), u.forceQuirks = !0, this.emitCurrentDoctype(u), this.state = i.DATA;
        break;
      }
      case r.EOF: {
        this._err(h.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        u.publicId += String.fromCodePoint(t);
    }
  }
  // DOCTYPE public identifier (single-quoted) state
  //------------------------------------------------------------------
  _stateDoctypePublicIdentifierSingleQuoted(t) {
    const u = this.currentToken;
    switch (t) {
      case r.APOSTROPHE: {
        this.state = i.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
        break;
      }
      case r.NULL: {
        this._err(h.unexpectedNullCharacter), u.publicId += I;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(h.abruptDoctypePublicIdentifier), u.forceQuirks = !0, this.emitCurrentDoctype(u), this.state = i.DATA;
        break;
      }
      case r.EOF: {
        this._err(h.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        u.publicId += String.fromCodePoint(t);
    }
  }
  // After DOCTYPE public identifier state
  //------------------------------------------------------------------
  _stateAfterDoctypePublicIdentifier(t) {
    const u = this.currentToken;
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED: {
        this.state = i.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this.state = i.DATA, this.emitCurrentDoctype(u);
        break;
      }
      case r.QUOTATION_MARK: {
        this._err(h.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), u.systemId = "", this.state = i.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case r.APOSTROPHE: {
        this._err(h.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), u.systemId = "", this.state = i.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case r.EOF: {
        this._err(h.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        this._err(h.missingQuoteBeforeDoctypeSystemIdentifier), u.forceQuirks = !0, this.state = i.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // Between DOCTYPE public and system identifiers state
  //------------------------------------------------------------------
  _stateBetweenDoctypePublicAndSystemIdentifiers(t) {
    const u = this.currentToken;
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED:
        break;
      case r.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(u), this.state = i.DATA;
        break;
      }
      case r.QUOTATION_MARK: {
        u.systemId = "", this.state = i.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case r.APOSTROPHE: {
        u.systemId = "", this.state = i.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case r.EOF: {
        this._err(h.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        this._err(h.missingQuoteBeforeDoctypeSystemIdentifier), u.forceQuirks = !0, this.state = i.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // After DOCTYPE system keyword state
  //------------------------------------------------------------------
  _stateAfterDoctypeSystemKeyword(t) {
    const u = this.currentToken;
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED: {
        this.state = i.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case r.QUOTATION_MARK: {
        this._err(h.missingWhitespaceAfterDoctypeSystemKeyword), u.systemId = "", this.state = i.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case r.APOSTROPHE: {
        this._err(h.missingWhitespaceAfterDoctypeSystemKeyword), u.systemId = "", this.state = i.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(h.missingDoctypeSystemIdentifier), u.forceQuirks = !0, this.state = i.DATA, this.emitCurrentDoctype(u);
        break;
      }
      case r.EOF: {
        this._err(h.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        this._err(h.missingQuoteBeforeDoctypeSystemIdentifier), u.forceQuirks = !0, this.state = i.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // Before DOCTYPE system identifier state
  //------------------------------------------------------------------
  _stateBeforeDoctypeSystemIdentifier(t) {
    const u = this.currentToken;
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED:
        break;
      case r.QUOTATION_MARK: {
        u.systemId = "", this.state = i.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
        break;
      }
      case r.APOSTROPHE: {
        u.systemId = "", this.state = i.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(h.missingDoctypeSystemIdentifier), u.forceQuirks = !0, this.state = i.DATA, this.emitCurrentDoctype(u);
        break;
      }
      case r.EOF: {
        this._err(h.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        this._err(h.missingQuoteBeforeDoctypeSystemIdentifier), u.forceQuirks = !0, this.state = i.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // DOCTYPE system identifier (double-quoted) state
  //------------------------------------------------------------------
  _stateDoctypeSystemIdentifierDoubleQuoted(t) {
    const u = this.currentToken;
    switch (t) {
      case r.QUOTATION_MARK: {
        this.state = i.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case r.NULL: {
        this._err(h.unexpectedNullCharacter), u.systemId += I;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(h.abruptDoctypeSystemIdentifier), u.forceQuirks = !0, this.emitCurrentDoctype(u), this.state = i.DATA;
        break;
      }
      case r.EOF: {
        this._err(h.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        u.systemId += String.fromCodePoint(t);
    }
  }
  // DOCTYPE system identifier (single-quoted) state
  //------------------------------------------------------------------
  _stateDoctypeSystemIdentifierSingleQuoted(t) {
    const u = this.currentToken;
    switch (t) {
      case r.APOSTROPHE: {
        this.state = i.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
        break;
      }
      case r.NULL: {
        this._err(h.unexpectedNullCharacter), u.systemId += I;
        break;
      }
      case r.GREATER_THAN_SIGN: {
        this._err(h.abruptDoctypeSystemIdentifier), u.forceQuirks = !0, this.emitCurrentDoctype(u), this.state = i.DATA;
        break;
      }
      case r.EOF: {
        this._err(h.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        u.systemId += String.fromCodePoint(t);
    }
  }
  // After DOCTYPE system identifier state
  //------------------------------------------------------------------
  _stateAfterDoctypeSystemIdentifier(t) {
    const u = this.currentToken;
    switch (t) {
      case r.SPACE:
      case r.LINE_FEED:
      case r.TABULATION:
      case r.FORM_FEED:
        break;
      case r.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(u), this.state = i.DATA;
        break;
      }
      case r.EOF: {
        this._err(h.eofInDoctype), u.forceQuirks = !0, this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
      default:
        this._err(h.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = i.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
    }
  }
  // Bogus DOCTYPE state
  //------------------------------------------------------------------
  _stateBogusDoctype(t) {
    const u = this.currentToken;
    switch (t) {
      case r.GREATER_THAN_SIGN: {
        this.emitCurrentDoctype(u), this.state = i.DATA;
        break;
      }
      case r.NULL: {
        this._err(h.unexpectedNullCharacter);
        break;
      }
      case r.EOF: {
        this.emitCurrentDoctype(u), this._emitEOFToken();
        break;
      }
    }
  }
  // CDATA section state
  //------------------------------------------------------------------
  _stateCdataSection(t) {
    switch (t) {
      case r.RIGHT_SQUARE_BRACKET: {
        this.state = i.CDATA_SECTION_BRACKET;
        break;
      }
      case r.EOF: {
        this._err(h.eofInCdata), this._emitEOFToken();
        break;
      }
      default:
        this._emitCodePoint(t);
    }
  }
  // CDATA section bracket state
  //------------------------------------------------------------------
  _stateCdataSectionBracket(t) {
    t === r.RIGHT_SQUARE_BRACKET ? this.state = i.CDATA_SECTION_END : (this._emitChars("]"), this.state = i.CDATA_SECTION, this._stateCdataSection(t));
  }
  // CDATA section end state
  //------------------------------------------------------------------
  _stateCdataSectionEnd(t) {
    switch (t) {
      case r.GREATER_THAN_SIGN: {
        this.state = i.DATA;
        break;
      }
      case r.RIGHT_SQUARE_BRACKET: {
        this._emitChars("]");
        break;
      }
      default:
        this._emitChars("]]"), this.state = i.CDATA_SECTION, this._stateCdataSection(t);
    }
  }
  // Character reference state
  //------------------------------------------------------------------
  _stateCharacterReference(t) {
    t === r.NUMBER_SIGN ? this.state = i.NUMERIC_CHARACTER_REFERENCE : Je(t) ? (this.state = i.NAMED_CHARACTER_REFERENCE, this._stateNamedCharacterReference(t)) : (this._flushCodePointConsumedAsCharacterReference(r.AMPERSAND), this._reconsumeInState(this.returnState, t));
  }
  // Named character reference state
  //------------------------------------------------------------------
  _stateNamedCharacterReference(t) {
    const u = this._matchNamedCharacterReference(t);
    if (!this._ensureHibernation()) if (u) {
      for (let n = 0; n < u.length; n++)
        this._flushCodePointConsumedAsCharacterReference(u[n]);
      this.state = this.returnState;
    } else
      this._flushCodePointConsumedAsCharacterReference(r.AMPERSAND), this.state = i.AMBIGUOUS_AMPERSAND;
  }
  // Ambiguos ampersand state
  //------------------------------------------------------------------
  _stateAmbiguousAmpersand(t) {
    Je(t) ? this._flushCodePointConsumedAsCharacterReference(t) : (t === r.SEMICOLON && this._err(h.unknownNamedCharacterReference), this._reconsumeInState(this.returnState, t));
  }
  // Numeric character reference state
  //------------------------------------------------------------------
  _stateNumericCharacterReference(t) {
    this.charRefCode = 0, t === r.LATIN_SMALL_X || t === r.LATIN_CAPITAL_X ? this.state = i.HEXADEMICAL_CHARACTER_REFERENCE_START : ie(t) ? (this.state = i.DECIMAL_CHARACTER_REFERENCE, this._stateDecimalCharacterReference(t)) : (this._err(h.absenceOfDigitsInNumericCharacterReference), this._flushCodePointConsumedAsCharacterReference(r.AMPERSAND), this._flushCodePointConsumedAsCharacterReference(r.NUMBER_SIGN), this._reconsumeInState(this.returnState, t));
  }
  // Hexademical character reference start state
  //------------------------------------------------------------------
  _stateHexademicalCharacterReferenceStart(t) {
    Qa(t) ? (this.state = i.HEXADEMICAL_CHARACTER_REFERENCE, this._stateHexademicalCharacterReference(t)) : (this._err(h.absenceOfDigitsInNumericCharacterReference), this._flushCodePointConsumedAsCharacterReference(r.AMPERSAND), this._flushCodePointConsumedAsCharacterReference(r.NUMBER_SIGN), this._unconsume(2), this.state = this.returnState);
  }
  // Hexademical character reference state
  //------------------------------------------------------------------
  _stateHexademicalCharacterReference(t) {
    mu(t) ? this.charRefCode = this.charRefCode * 16 + t - 55 : bu(t) ? this.charRefCode = this.charRefCode * 16 + t - 87 : ie(t) ? this.charRefCode = this.charRefCode * 16 + t - 48 : t === r.SEMICOLON ? this.state = i.NUMERIC_CHARACTER_REFERENCE_END : (this._err(h.missingSemicolonAfterCharacterReference), this.state = i.NUMERIC_CHARACTER_REFERENCE_END, this._stateNumericCharacterReferenceEnd(t));
  }
  // Decimal character reference state
  //------------------------------------------------------------------
  _stateDecimalCharacterReference(t) {
    ie(t) ? this.charRefCode = this.charRefCode * 10 + t - 48 : t === r.SEMICOLON ? this.state = i.NUMERIC_CHARACTER_REFERENCE_END : (this._err(h.missingSemicolonAfterCharacterReference), this.state = i.NUMERIC_CHARACTER_REFERENCE_END, this._stateNumericCharacterReferenceEnd(t));
  }
  // Numeric character reference end state
  //------------------------------------------------------------------
  _stateNumericCharacterReferenceEnd(t) {
    if (this.charRefCode === r.NULL)
      this._err(h.nullCharacterReference), this.charRefCode = r.REPLACEMENT_CHARACTER;
    else if (this.charRefCode > 1114111)
      this._err(h.characterReferenceOutsideUnicodeRange), this.charRefCode = r.REPLACEMENT_CHARACTER;
    else if (ou(this.charRefCode))
      this._err(h.surrogateCharacterReference), this.charRefCode = r.REPLACEMENT_CHARACTER;
    else if (du(this.charRefCode))
      this._err(h.noncharacterCharacterReference);
    else if (lu(this.charRefCode) || this.charRefCode === r.CARRIAGE_RETURN) {
      this._err(h.controlCharacterReference);
      const u = Ya.get(this.charRefCode);
      u !== void 0 && (this.charRefCode = u);
    }
    this._flushCodePointConsumedAsCharacterReference(this.charRefCode), this._reconsumeInState(this.returnState, t);
  }
}
const _u = /* @__PURE__ */ new Set([a.DD, a.DT, a.LI, a.OPTGROUP, a.OPTION, a.P, a.RB, a.RP, a.RT, a.RTC]), St = /* @__PURE__ */ new Set([
  ..._u,
  a.CAPTION,
  a.COLGROUP,
  a.TBODY,
  a.TD,
  a.TFOOT,
  a.TH,
  a.THEAD,
  a.TR
]), Ae = /* @__PURE__ */ new Map([
  [a.APPLET, E.HTML],
  [a.CAPTION, E.HTML],
  [a.HTML, E.HTML],
  [a.MARQUEE, E.HTML],
  [a.OBJECT, E.HTML],
  [a.TABLE, E.HTML],
  [a.TD, E.HTML],
  [a.TEMPLATE, E.HTML],
  [a.TH, E.HTML],
  [a.ANNOTATION_XML, E.MATHML],
  [a.MI, E.MATHML],
  [a.MN, E.MATHML],
  [a.MO, E.MATHML],
  [a.MS, E.MATHML],
  [a.MTEXT, E.MATHML],
  [a.DESC, E.SVG],
  [a.FOREIGN_OBJECT, E.SVG],
  [a.TITLE, E.SVG]
]), Xa = [a.H1, a.H2, a.H3, a.H4, a.H5, a.H6], Va = [a.TR, a.TEMPLATE, a.HTML], Ka = [a.TBODY, a.TFOOT, a.THEAD, a.TEMPLATE, a.HTML], za = [a.TABLE, a.TEMPLATE, a.HTML], ja = [a.TD, a.TH];
class $a {
  get currentTmplContentOrNode() {
    return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
  }
  constructor(t, u, n) {
    this.treeAdapter = u, this.handler = n, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = a.UNKNOWN, this.current = t;
  }
  //Index of element
  _indexOf(t) {
    return this.items.lastIndexOf(t, this.stackTop);
  }
  //Update current element
  _isInTemplate() {
    return this.currentTagId === a.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === E.HTML;
  }
  _updateCurrentElement() {
    this.current = this.items[this.stackTop], this.currentTagId = this.tagIDs[this.stackTop];
  }
  //Mutations
  push(t, u) {
    this.stackTop++, this.items[this.stackTop] = t, this.current = t, this.tagIDs[this.stackTop] = u, this.currentTagId = u, this._isInTemplate() && this.tmplCount++, this.handler.onItemPush(t, u, !0);
  }
  pop() {
    const t = this.current;
    this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t, !0);
  }
  replace(t, u) {
    const n = this._indexOf(t);
    this.items[n] = u, n === this.stackTop && (this.current = u);
  }
  insertAfter(t, u, n) {
    const s = this._indexOf(t) + 1;
    this.items.splice(s, 0, u), this.tagIDs.splice(s, 0, n), this.stackTop++, s === this.stackTop && this._updateCurrentElement(), this.handler.onItemPush(this.current, this.currentTagId, s === this.stackTop);
  }
  popUntilTagNamePopped(t) {
    let u = this.stackTop + 1;
    do
      u = this.tagIDs.lastIndexOf(t, u - 1);
    while (u > 0 && this.treeAdapter.getNamespaceURI(this.items[u]) !== E.HTML);
    this.shortenToLength(u < 0 ? 0 : u);
  }
  shortenToLength(t) {
    for (; this.stackTop >= t; ) {
      const u = this.current;
      this.tmplCount > 0 && this._isInTemplate() && (this.tmplCount -= 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(u, this.stackTop < t);
    }
  }
  popUntilElementPopped(t) {
    const u = this._indexOf(t);
    this.shortenToLength(u < 0 ? 0 : u);
  }
  popUntilPopped(t, u) {
    const n = this._indexOfTagNames(t, u);
    this.shortenToLength(n < 0 ? 0 : n);
  }
  popUntilNumberedHeaderPopped() {
    this.popUntilPopped(Xa, E.HTML);
  }
  popUntilTableCellPopped() {
    this.popUntilPopped(ja, E.HTML);
  }
  popAllUpToHtmlElement() {
    this.tmplCount = 0, this.shortenToLength(1);
  }
  _indexOfTagNames(t, u) {
    for (let n = this.stackTop; n >= 0; n--)
      if (t.includes(this.tagIDs[n]) && this.treeAdapter.getNamespaceURI(this.items[n]) === u)
        return n;
    return -1;
  }
  clearBackTo(t, u) {
    const n = this._indexOfTagNames(t, u);
    this.shortenToLength(n + 1);
  }
  clearBackToTableContext() {
    this.clearBackTo(za, E.HTML);
  }
  clearBackToTableBodyContext() {
    this.clearBackTo(Ka, E.HTML);
  }
  clearBackToTableRowContext() {
    this.clearBackTo(Va, E.HTML);
  }
  remove(t) {
    const u = this._indexOf(t);
    u >= 0 && (u === this.stackTop ? this.pop() : (this.items.splice(u, 1), this.tagIDs.splice(u, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t, !1)));
  }
  //Search
  tryPeekProperlyNestedBodyElement() {
    return this.stackTop >= 1 && this.tagIDs[1] === a.BODY ? this.items[1] : null;
  }
  contains(t) {
    return this._indexOf(t) > -1;
  }
  getCommonAncestor(t) {
    const u = this._indexOf(t) - 1;
    return u >= 0 ? this.items[u] : null;
  }
  isRootHtmlElementCurrent() {
    return this.stackTop === 0 && this.tagIDs[0] === a.HTML;
  }
  //Element in scope
  hasInScope(t) {
    for (let u = this.stackTop; u >= 0; u--) {
      const n = this.tagIDs[u], s = this.treeAdapter.getNamespaceURI(this.items[u]);
      if (n === t && s === E.HTML)
        return !0;
      if (Ae.get(n) === s)
        return !1;
    }
    return !0;
  }
  hasNumberedHeaderInScope() {
    for (let t = this.stackTop; t >= 0; t--) {
      const u = this.tagIDs[t], n = this.treeAdapter.getNamespaceURI(this.items[t]);
      if (Tu(u) && n === E.HTML)
        return !0;
      if (Ae.get(u) === n)
        return !1;
    }
    return !0;
  }
  hasInListItemScope(t) {
    for (let u = this.stackTop; u >= 0; u--) {
      const n = this.tagIDs[u], s = this.treeAdapter.getNamespaceURI(this.items[u]);
      if (n === t && s === E.HTML)
        return !0;
      if ((n === a.UL || n === a.OL) && s === E.HTML || Ae.get(n) === s)
        return !1;
    }
    return !0;
  }
  hasInButtonScope(t) {
    for (let u = this.stackTop; u >= 0; u--) {
      const n = this.tagIDs[u], s = this.treeAdapter.getNamespaceURI(this.items[u]);
      if (n === t && s === E.HTML)
        return !0;
      if (n === a.BUTTON && s === E.HTML || Ae.get(n) === s)
        return !1;
    }
    return !0;
  }
  hasInTableScope(t) {
    for (let u = this.stackTop; u >= 0; u--) {
      const n = this.tagIDs[u];
      if (this.treeAdapter.getNamespaceURI(this.items[u]) === E.HTML) {
        if (n === t)
          return !0;
        if (n === a.TABLE || n === a.TEMPLATE || n === a.HTML)
          return !1;
      }
    }
    return !0;
  }
  hasTableBodyContextInTableScope() {
    for (let t = this.stackTop; t >= 0; t--) {
      const u = this.tagIDs[t];
      if (this.treeAdapter.getNamespaceURI(this.items[t]) === E.HTML) {
        if (u === a.TBODY || u === a.THEAD || u === a.TFOOT)
          return !0;
        if (u === a.TABLE || u === a.HTML)
          return !1;
      }
    }
    return !0;
  }
  hasInSelectScope(t) {
    for (let u = this.stackTop; u >= 0; u--) {
      const n = this.tagIDs[u];
      if (this.treeAdapter.getNamespaceURI(this.items[u]) === E.HTML) {
        if (n === t)
          return !0;
        if (n !== a.OPTION && n !== a.OPTGROUP)
          return !1;
      }
    }
    return !0;
  }
  //Implied end tags
  generateImpliedEndTags() {
    for (; _u.has(this.currentTagId); )
      this.pop();
  }
  generateImpliedEndTagsThoroughly() {
    for (; St.has(this.currentTagId); )
      this.pop();
  }
  generateImpliedEndTagsWithExclusion(t) {
    for (; this.currentTagId !== t && St.has(this.currentTagId); )
      this.pop();
  }
}
const He = 3;
var F;
(function(e) {
  e[e.Marker = 0] = "Marker", e[e.Element = 1] = "Element";
})(F = F || (F = {}));
const Lt = { type: F.Marker };
class Ja {
  constructor(t) {
    this.treeAdapter = t, this.entries = [], this.bookmark = null;
  }
  //Noah Ark's condition
  //OPTIMIZATION: at first we try to find possible candidates for exclusion using
  //lightweight heuristics without thorough attributes check.
  _getNoahArkConditionCandidates(t, u) {
    const n = [], s = u.length, c = this.treeAdapter.getTagName(t), l = this.treeAdapter.getNamespaceURI(t);
    for (let f = 0; f < this.entries.length; f++) {
      const T = this.entries[f];
      if (T.type === F.Marker)
        break;
      const { element: m } = T;
      if (this.treeAdapter.getTagName(m) === c && this.treeAdapter.getNamespaceURI(m) === l) {
        const _ = this.treeAdapter.getAttrList(m);
        _.length === s && n.push({ idx: f, attrs: _ });
      }
    }
    return n;
  }
  _ensureNoahArkCondition(t) {
    if (this.entries.length < He)
      return;
    const u = this.treeAdapter.getAttrList(t), n = this._getNoahArkConditionCandidates(t, u);
    if (n.length < He)
      return;
    const s = new Map(u.map((l) => [l.name, l.value]));
    let c = 0;
    for (let l = 0; l < n.length; l++) {
      const f = n[l];
      f.attrs.every((T) => s.get(T.name) === T.value) && (c += 1, c >= He && this.entries.splice(f.idx, 1));
    }
  }
  //Mutations
  insertMarker() {
    this.entries.unshift(Lt);
  }
  pushElement(t, u) {
    this._ensureNoahArkCondition(t), this.entries.unshift({
      type: F.Element,
      element: t,
      token: u
    });
  }
  insertElementAfterBookmark(t, u) {
    const n = this.entries.indexOf(this.bookmark);
    this.entries.splice(n, 0, {
      type: F.Element,
      element: t,
      token: u
    });
  }
  removeEntry(t) {
    const u = this.entries.indexOf(t);
    u >= 0 && this.entries.splice(u, 1);
  }
  /**
   * Clears the list of formatting elements up to the last marker.
   *
   * @see https://html.spec.whatwg.org/multipage/parsing.html#clear-the-list-of-active-formatting-elements-up-to-the-last-marker
   */
  clearToLastMarker() {
    const t = this.entries.indexOf(Lt);
    t >= 0 ? this.entries.splice(0, t + 1) : this.entries.length = 0;
  }
  //Search
  getElementEntryInScopeWithTagName(t) {
    const u = this.entries.find((n) => n.type === F.Marker || this.treeAdapter.getTagName(n.element) === t);
    return u && u.type === F.Element ? u : null;
  }
  getElementEntry(t) {
    return this.entries.find((u) => u.type === F.Element && u.element === t);
  }
}
function Ot(e) {
  return {
    nodeName: "#text",
    value: e,
    parentNode: null
  };
}
const j = {
  //Node construction
  createDocument() {
    return {
      nodeName: "#document",
      mode: k.NO_QUIRKS,
      childNodes: []
    };
  },
  createDocumentFragment() {
    return {
      nodeName: "#document-fragment",
      childNodes: []
    };
  },
  createElement(e, t, u) {
    return {
      nodeName: e,
      tagName: e,
      attrs: u,
      namespaceURI: t,
      childNodes: [],
      parentNode: null
    };
  },
  createCommentNode(e) {
    return {
      nodeName: "#comment",
      data: e,
      parentNode: null
    };
  },
  //Tree mutation
  appendChild(e, t) {
    e.childNodes.push(t), t.parentNode = e;
  },
  insertBefore(e, t, u) {
    const n = e.childNodes.indexOf(u);
    e.childNodes.splice(n, 0, t), t.parentNode = e;
  },
  setTemplateContent(e, t) {
    e.content = t;
  },
  getTemplateContent(e) {
    return e.content;
  },
  setDocumentType(e, t, u, n) {
    const s = e.childNodes.find((c) => c.nodeName === "#documentType");
    if (s)
      s.name = t, s.publicId = u, s.systemId = n;
    else {
      const c = {
        nodeName: "#documentType",
        name: t,
        publicId: u,
        systemId: n,
        parentNode: null
      };
      j.appendChild(e, c);
    }
  },
  setDocumentMode(e, t) {
    e.mode = t;
  },
  getDocumentMode(e) {
    return e.mode;
  },
  detachNode(e) {
    if (e.parentNode) {
      const t = e.parentNode.childNodes.indexOf(e);
      e.parentNode.childNodes.splice(t, 1), e.parentNode = null;
    }
  },
  insertText(e, t) {
    if (e.childNodes.length > 0) {
      const u = e.childNodes[e.childNodes.length - 1];
      if (j.isTextNode(u)) {
        u.value += t;
        return;
      }
    }
    j.appendChild(e, Ot(t));
  },
  insertTextBefore(e, t, u) {
    const n = e.childNodes[e.childNodes.indexOf(u) - 1];
    n && j.isTextNode(n) ? n.value += t : j.insertBefore(e, Ot(t), u);
  },
  adoptAttributes(e, t) {
    const u = new Set(e.attrs.map((n) => n.name));
    for (let n = 0; n < t.length; n++)
      u.has(t[n].name) || e.attrs.push(t[n]);
  },
  //Tree traversing
  getFirstChild(e) {
    return e.childNodes[0];
  },
  getChildNodes(e) {
    return e.childNodes;
  },
  getParentNode(e) {
    return e.parentNode;
  },
  getAttrList(e) {
    return e.attrs;
  },
  //Node data
  getTagName(e) {
    return e.tagName;
  },
  getNamespaceURI(e) {
    return e.namespaceURI;
  },
  getTextNodeContent(e) {
    return e.value;
  },
  getCommentNodeContent(e) {
    return e.data;
  },
  getDocumentTypeNodeName(e) {
    return e.name;
  },
  getDocumentTypeNodePublicId(e) {
    return e.publicId;
  },
  getDocumentTypeNodeSystemId(e) {
    return e.systemId;
  },
  //Node types
  isTextNode(e) {
    return e.nodeName === "#text";
  },
  isCommentNode(e) {
    return e.nodeName === "#comment";
  },
  isDocumentTypeNode(e) {
    return e.nodeName === "#documentType";
  },
  isElementNode(e) {
    return Object.prototype.hasOwnProperty.call(e, "tagName");
  },
  // Source code location
  setNodeSourceCodeLocation(e, t) {
    e.sourceCodeLocation = t;
  },
  getNodeSourceCodeLocation(e) {
    return e.sourceCodeLocation;
  },
  updateNodeSourceCodeLocation(e, t) {
    e.sourceCodeLocation = { ...e.sourceCodeLocation, ...t };
  }
}, Au = "html", Za = "about:legacy-compat", en = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd", gu = [
  "+//silmaril//dtd html pro v0r11 19970101//",
  "-//as//dtd html 3.0 aswedit + extensions//",
  "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
  "-//ietf//dtd html 2.0 level 1//",
  "-//ietf//dtd html 2.0 level 2//",
  "-//ietf//dtd html 2.0 strict level 1//",
  "-//ietf//dtd html 2.0 strict level 2//",
  "-//ietf//dtd html 2.0 strict//",
  "-//ietf//dtd html 2.0//",
  "-//ietf//dtd html 2.1e//",
  "-//ietf//dtd html 3.0//",
  "-//ietf//dtd html 3.2 final//",
  "-//ietf//dtd html 3.2//",
  "-//ietf//dtd html 3//",
  "-//ietf//dtd html level 0//",
  "-//ietf//dtd html level 1//",
  "-//ietf//dtd html level 2//",
  "-//ietf//dtd html level 3//",
  "-//ietf//dtd html strict level 0//",
  "-//ietf//dtd html strict level 1//",
  "-//ietf//dtd html strict level 2//",
  "-//ietf//dtd html strict level 3//",
  "-//ietf//dtd html strict//",
  "-//ietf//dtd html//",
  "-//metrius//dtd metrius presentational//",
  "-//microsoft//dtd internet explorer 2.0 html strict//",
  "-//microsoft//dtd internet explorer 2.0 html//",
  "-//microsoft//dtd internet explorer 2.0 tables//",
  "-//microsoft//dtd internet explorer 3.0 html strict//",
  "-//microsoft//dtd internet explorer 3.0 html//",
  "-//microsoft//dtd internet explorer 3.0 tables//",
  "-//netscape comm. corp.//dtd html//",
  "-//netscape comm. corp.//dtd strict html//",
  "-//o'reilly and associates//dtd html 2.0//",
  "-//o'reilly and associates//dtd html extended 1.0//",
  "-//o'reilly and associates//dtd html extended relaxed 1.0//",
  "-//sq//dtd html 2.0 hotmetal + extensions//",
  "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
  "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
  "-//spyglass//dtd html 2.0 extended//",
  "-//sun microsystems corp.//dtd hotjava html//",
  "-//sun microsystems corp.//dtd hotjava strict html//",
  "-//w3c//dtd html 3 1995-03-24//",
  "-//w3c//dtd html 3.2 draft//",
  "-//w3c//dtd html 3.2 final//",
  "-//w3c//dtd html 3.2//",
  "-//w3c//dtd html 3.2s draft//",
  "-//w3c//dtd html 4.0 frameset//",
  "-//w3c//dtd html 4.0 transitional//",
  "-//w3c//dtd html experimental 19960712//",
  "-//w3c//dtd html experimental 970421//",
  "-//w3c//dtd w3 html//",
  "-//w3o//dtd w3 html 3.0//",
  "-//webtechs//dtd mozilla html 2.0//",
  "-//webtechs//dtd mozilla html//"
], tn = [
  ...gu,
  "-//w3c//dtd html 4.01 frameset//",
  "-//w3c//dtd html 4.01 transitional//"
], un = /* @__PURE__ */ new Set([
  "-//w3o//dtd w3 html strict 3.0//en//",
  "-/w3c/dtd html 4.0 transitional/en",
  "html"
]), Cu = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"], an = [
  ...Cu,
  "-//w3c//dtd html 4.01 frameset//",
  "-//w3c//dtd html 4.01 transitional//"
];
function Dt(e, t) {
  return t.some((u) => e.startsWith(u));
}
function nn(e) {
  return e.name === Au && e.publicId === null && (e.systemId === null || e.systemId === Za);
}
function sn(e) {
  if (e.name !== Au)
    return k.QUIRKS;
  const { systemId: t } = e;
  if (t && t.toLowerCase() === en)
    return k.QUIRKS;
  let { publicId: u } = e;
  if (u !== null) {
    if (u = u.toLowerCase(), un.has(u))
      return k.QUIRKS;
    let n = t === null ? tn : gu;
    if (Dt(u, n))
      return k.QUIRKS;
    if (n = t === null ? Cu : an, Dt(u, n))
      return k.LIMITED_QUIRKS;
  }
  return k.NO_QUIRKS;
}
const xt = {
  TEXT_HTML: "text/html",
  APPLICATION_XML: "application/xhtml+xml"
}, rn = "definitionurl", cn = "definitionURL", on = new Map([
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map((e) => [e.toLowerCase(), e])), ln = /* @__PURE__ */ new Map([
  ["xlink:actuate", { prefix: "xlink", name: "actuate", namespace: E.XLINK }],
  ["xlink:arcrole", { prefix: "xlink", name: "arcrole", namespace: E.XLINK }],
  ["xlink:href", { prefix: "xlink", name: "href", namespace: E.XLINK }],
  ["xlink:role", { prefix: "xlink", name: "role", namespace: E.XLINK }],
  ["xlink:show", { prefix: "xlink", name: "show", namespace: E.XLINK }],
  ["xlink:title", { prefix: "xlink", name: "title", namespace: E.XLINK }],
  ["xlink:type", { prefix: "xlink", name: "type", namespace: E.XLINK }],
  ["xml:base", { prefix: "xml", name: "base", namespace: E.XML }],
  ["xml:lang", { prefix: "xml", name: "lang", namespace: E.XML }],
  ["xml:space", { prefix: "xml", name: "space", namespace: E.XML }],
  ["xmlns", { prefix: "", name: "xmlns", namespace: E.XMLNS }],
  ["xmlns:xlink", { prefix: "xmlns", name: "xlink", namespace: E.XMLNS }]
]), dn = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map((e) => [e.toLowerCase(), e])), fn = /* @__PURE__ */ new Set([
  a.B,
  a.BIG,
  a.BLOCKQUOTE,
  a.BODY,
  a.BR,
  a.CENTER,
  a.CODE,
  a.DD,
  a.DIV,
  a.DL,
  a.DT,
  a.EM,
  a.EMBED,
  a.H1,
  a.H2,
  a.H3,
  a.H4,
  a.H5,
  a.H6,
  a.HEAD,
  a.HR,
  a.I,
  a.IMG,
  a.LI,
  a.LISTING,
  a.MENU,
  a.META,
  a.NOBR,
  a.OL,
  a.P,
  a.PRE,
  a.RUBY,
  a.S,
  a.SMALL,
  a.SPAN,
  a.STRONG,
  a.STRIKE,
  a.SUB,
  a.SUP,
  a.TABLE,
  a.TT,
  a.U,
  a.UL,
  a.VAR
]);
function hn(e) {
  const t = e.tagID;
  return t === a.FONT && e.attrs.some(({ name: n }) => n === X.COLOR || n === X.SIZE || n === X.FACE) || fn.has(t);
}
function Nu(e) {
  for (let t = 0; t < e.attrs.length; t++)
    if (e.attrs[t].name === rn) {
      e.attrs[t].name = cn;
      break;
    }
}
function Iu(e) {
  for (let t = 0; t < e.attrs.length; t++) {
    const u = on.get(e.attrs[t].name);
    u != null && (e.attrs[t].name = u);
  }
}
function ot(e) {
  for (let t = 0; t < e.attrs.length; t++) {
    const u = ln.get(e.attrs[t].name);
    u && (e.attrs[t].prefix = u.prefix, e.attrs[t].name = u.name, e.attrs[t].namespace = u.namespace);
  }
}
function En(e) {
  const t = dn.get(e.tagName);
  t != null && (e.tagName = t, e.tagID = xe(e.tagName));
}
function Tn(e, t) {
  return t === E.MATHML && (e === a.MI || e === a.MO || e === a.MN || e === a.MS || e === a.MTEXT);
}
function mn(e, t, u) {
  if (t === E.MATHML && e === a.ANNOTATION_XML) {
    for (let n = 0; n < u.length; n++)
      if (u[n].name === X.ENCODING) {
        const s = u[n].value.toLowerCase();
        return s === xt.TEXT_HTML || s === xt.APPLICATION_XML;
      }
  }
  return t === E.SVG && (e === a.FOREIGN_OBJECT || e === a.DESC || e === a.TITLE);
}
function bn(e, t, u, n) {
  return (!n || n === E.HTML) && mn(e, t, u) || (!n || n === E.MATHML) && Tn(e, t);
}
const pn = "hidden", _n = 8, An = 3;
var o;
(function(e) {
  e[e.INITIAL = 0] = "INITIAL", e[e.BEFORE_HTML = 1] = "BEFORE_HTML", e[e.BEFORE_HEAD = 2] = "BEFORE_HEAD", e[e.IN_HEAD = 3] = "IN_HEAD", e[e.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", e[e.AFTER_HEAD = 5] = "AFTER_HEAD", e[e.IN_BODY = 6] = "IN_BODY", e[e.TEXT = 7] = "TEXT", e[e.IN_TABLE = 8] = "IN_TABLE", e[e.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", e[e.IN_CAPTION = 10] = "IN_CAPTION", e[e.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", e[e.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", e[e.IN_ROW = 13] = "IN_ROW", e[e.IN_CELL = 14] = "IN_CELL", e[e.IN_SELECT = 15] = "IN_SELECT", e[e.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", e[e.IN_TEMPLATE = 17] = "IN_TEMPLATE", e[e.AFTER_BODY = 18] = "AFTER_BODY", e[e.IN_FRAMESET = 19] = "IN_FRAMESET", e[e.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", e[e.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", e[e.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
})(o || (o = {}));
const gn = {
  startLine: -1,
  startCol: -1,
  startOffset: -1,
  endLine: -1,
  endCol: -1,
  endOffset: -1
}, Ru = /* @__PURE__ */ new Set([a.TABLE, a.TBODY, a.TFOOT, a.THEAD, a.TR]), Pt = {
  scriptingEnabled: !0,
  sourceCodeLocationInfo: !1,
  treeAdapter: j,
  onParseError: null
};
class Su {
  constructor(t, u, n = null, s = null) {
    this.fragmentContext = n, this.scriptHandler = s, this.currentToken = null, this.stopped = !1, this.insertionMode = o.INITIAL, this.originalInsertionMode = o.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = !1, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1, this.options = {
      ...Pt,
      ...t
    }, this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError && (this.options.sourceCodeLocationInfo = !0), this.document = u ?? this.treeAdapter.createDocument(), this.tokenizer = new Ga(this.options, this), this.activeFormattingElements = new Ja(this.treeAdapter), this.fragmentContextID = n ? xe(this.treeAdapter.getTagName(n)) : a.UNKNOWN, this._setContextModes(n ?? this.document, this.fragmentContextID), this.openElements = new $a(this.document, this.treeAdapter, this);
  }
  // API
  static parse(t, u) {
    const n = new this(u);
    return n.tokenizer.write(t, !0), n.document;
  }
  static getFragmentParser(t, u) {
    const n = {
      ...Pt,
      ...u
    };
    t ?? (t = n.treeAdapter.createElement(d.TEMPLATE, E.HTML, []));
    const s = n.treeAdapter.createElement("documentmock", E.HTML, []), c = new this(n, s, t);
    return c.fragmentContextID === a.TEMPLATE && c.tmplInsertionModeStack.unshift(o.IN_TEMPLATE), c._initTokenizerForFragmentParsing(), c._insertFakeRootElement(), c._resetInsertionMode(), c._findFormInFragmentContext(), c;
  }
  getFragment() {
    const t = this.treeAdapter.getFirstChild(this.document), u = this.treeAdapter.createDocumentFragment();
    return this._adoptNodes(t, u), u;
  }
  //Errors
  _err(t, u, n) {
    var s;
    if (!this.onParseError)
      return;
    const c = (s = t.location) !== null && s !== void 0 ? s : gn, l = {
      code: u,
      startLine: c.startLine,
      startCol: c.startCol,
      startOffset: c.startOffset,
      endLine: n ? c.startLine : c.endLine,
      endCol: n ? c.startCol : c.endCol,
      endOffset: n ? c.startOffset : c.endOffset
    };
    this.onParseError(l);
  }
  //Stack events
  onItemPush(t, u, n) {
    var s, c;
    (c = (s = this.treeAdapter).onItemPush) === null || c === void 0 || c.call(s, t), n && this.openElements.stackTop > 0 && this._setContextModes(t, u);
  }
  onItemPop(t, u) {
    var n, s;
    if (this.options.sourceCodeLocationInfo && this._setEndLocation(t, this.currentToken), (s = (n = this.treeAdapter).onItemPop) === null || s === void 0 || s.call(n, t, this.openElements.current), u) {
      let c, l;
      this.openElements.stackTop === 0 && this.fragmentContext ? (c = this.fragmentContext, l = this.fragmentContextID) : { current: c, currentTagId: l } = this.openElements, this._setContextModes(c, l);
    }
  }
  _setContextModes(t, u) {
    const n = t === this.document || this.treeAdapter.getNamespaceURI(t) === E.HTML;
    this.currentNotInHTML = !n, this.tokenizer.inForeignNode = !n && !this._isIntegrationPoint(u, t);
  }
  _switchToTextParsing(t, u) {
    this._insertElement(t, E.HTML), this.tokenizer.state = u, this.originalInsertionMode = this.insertionMode, this.insertionMode = o.TEXT;
  }
  switchToPlaintextParsing() {
    this.insertionMode = o.TEXT, this.originalInsertionMode = o.IN_BODY, this.tokenizer.state = M.PLAINTEXT;
  }
  //Fragment parsing
  _getAdjustedCurrentElement() {
    return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
  }
  _findFormInFragmentContext() {
    let t = this.fragmentContext;
    for (; t; ) {
      if (this.treeAdapter.getTagName(t) === d.FORM) {
        this.formElement = t;
        break;
      }
      t = this.treeAdapter.getParentNode(t);
    }
  }
  _initTokenizerForFragmentParsing() {
    if (!(!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== E.HTML))
      switch (this.fragmentContextID) {
        case a.TITLE:
        case a.TEXTAREA: {
          this.tokenizer.state = M.RCDATA;
          break;
        }
        case a.STYLE:
        case a.XMP:
        case a.IFRAME:
        case a.NOEMBED:
        case a.NOFRAMES:
        case a.NOSCRIPT: {
          this.tokenizer.state = M.RAWTEXT;
          break;
        }
        case a.SCRIPT: {
          this.tokenizer.state = M.SCRIPT_DATA;
          break;
        }
        case a.PLAINTEXT: {
          this.tokenizer.state = M.PLAINTEXT;
          break;
        }
      }
  }
  //Tree mutation
  _setDocumentType(t) {
    const u = t.name || "", n = t.publicId || "", s = t.systemId || "";
    if (this.treeAdapter.setDocumentType(this.document, u, n, s), t.location) {
      const l = this.treeAdapter.getChildNodes(this.document).find((f) => this.treeAdapter.isDocumentTypeNode(f));
      l && this.treeAdapter.setNodeSourceCodeLocation(l, t.location);
    }
  }
  _attachElementToTree(t, u) {
    if (this.options.sourceCodeLocationInfo) {
      const n = u && {
        ...u,
        startTag: u
      };
      this.treeAdapter.setNodeSourceCodeLocation(t, n);
    }
    if (this._shouldFosterParentOnInsertion())
      this._fosterParentElement(t);
    else {
      const n = this.openElements.currentTmplContentOrNode;
      this.treeAdapter.appendChild(n, t);
    }
  }
  _appendElement(t, u) {
    const n = this.treeAdapter.createElement(t.tagName, u, t.attrs);
    this._attachElementToTree(n, t.location);
  }
  _insertElement(t, u) {
    const n = this.treeAdapter.createElement(t.tagName, u, t.attrs);
    this._attachElementToTree(n, t.location), this.openElements.push(n, t.tagID);
  }
  _insertFakeElement(t, u) {
    const n = this.treeAdapter.createElement(t, E.HTML, []);
    this._attachElementToTree(n, null), this.openElements.push(n, u);
  }
  _insertTemplate(t) {
    const u = this.treeAdapter.createElement(t.tagName, E.HTML, t.attrs), n = this.treeAdapter.createDocumentFragment();
    this.treeAdapter.setTemplateContent(u, n), this._attachElementToTree(u, t.location), this.openElements.push(u, t.tagID), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, null);
  }
  _insertFakeRootElement() {
    const t = this.treeAdapter.createElement(d.HTML, E.HTML, []);
    this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(t, null), this.treeAdapter.appendChild(this.openElements.current, t), this.openElements.push(t, a.HTML);
  }
  _appendCommentNode(t, u) {
    const n = this.treeAdapter.createCommentNode(t.data);
    this.treeAdapter.appendChild(u, n), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, t.location);
  }
  _insertCharacters(t) {
    let u, n;
    if (this._shouldFosterParentOnInsertion() ? ({ parent: u, beforeElement: n } = this._findFosterParentingLocation(), n ? this.treeAdapter.insertTextBefore(u, t.chars, n) : this.treeAdapter.insertText(u, t.chars)) : (u = this.openElements.currentTmplContentOrNode, this.treeAdapter.insertText(u, t.chars)), !t.location)
      return;
    const s = this.treeAdapter.getChildNodes(u), c = n ? s.lastIndexOf(n) : s.length, l = s[c - 1];
    if (this.treeAdapter.getNodeSourceCodeLocation(l)) {
      const { endLine: T, endCol: m, endOffset: _ } = t.location;
      this.treeAdapter.updateNodeSourceCodeLocation(l, { endLine: T, endCol: m, endOffset: _ });
    } else this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(l, t.location);
  }
  _adoptNodes(t, u) {
    for (let n = this.treeAdapter.getFirstChild(t); n; n = this.treeAdapter.getFirstChild(t))
      this.treeAdapter.detachNode(n), this.treeAdapter.appendChild(u, n);
  }
  _setEndLocation(t, u) {
    if (this.treeAdapter.getNodeSourceCodeLocation(t) && u.location) {
      const n = u.location, s = this.treeAdapter.getTagName(t), c = (
        // NOTE: For cases like <p> <p> </p> - First 'p' closes without a closing
        // tag and for cases like <td> <p> </td> - 'p' closes without a closing tag.
        u.type === g.END_TAG && s === u.tagName ? {
          endTag: { ...n },
          endLine: n.endLine,
          endCol: n.endCol,
          endOffset: n.endOffset
        } : {
          endLine: n.startLine,
          endCol: n.startCol,
          endOffset: n.startOffset
        }
      );
      this.treeAdapter.updateNodeSourceCodeLocation(t, c);
    }
  }
  //Token processing
  shouldProcessStartTagTokenInForeignContent(t) {
    if (!this.currentNotInHTML)
      return !1;
    let u, n;
    return this.openElements.stackTop === 0 && this.fragmentContext ? (u = this.fragmentContext, n = this.fragmentContextID) : { current: u, currentTagId: n } = this.openElements, t.tagID === a.SVG && this.treeAdapter.getTagName(u) === d.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(u) === E.MATHML ? !1 : (
      // Check that `current` is not an integration point for HTML or MathML elements.
      this.tokenizer.inForeignNode || // If it _is_ an integration point, then we might have to check that it is not an HTML
      // integration point.
      (t.tagID === a.MGLYPH || t.tagID === a.MALIGNMARK) && !this._isIntegrationPoint(n, u, E.HTML)
    );
  }
  _processToken(t) {
    switch (t.type) {
      case g.CHARACTER: {
        this.onCharacter(t);
        break;
      }
      case g.NULL_CHARACTER: {
        this.onNullCharacter(t);
        break;
      }
      case g.COMMENT: {
        this.onComment(t);
        break;
      }
      case g.DOCTYPE: {
        this.onDoctype(t);
        break;
      }
      case g.START_TAG: {
        this._processStartTag(t);
        break;
      }
      case g.END_TAG: {
        this.onEndTag(t);
        break;
      }
      case g.EOF: {
        this.onEof(t);
        break;
      }
      case g.WHITESPACE_CHARACTER: {
        this.onWhitespaceCharacter(t);
        break;
      }
    }
  }
  //Integration points
  _isIntegrationPoint(t, u, n) {
    const s = this.treeAdapter.getNamespaceURI(u), c = this.treeAdapter.getAttrList(u);
    return bn(t, s, c, n);
  }
  //Active formatting elements reconstruction
  _reconstructActiveFormattingElements() {
    const t = this.activeFormattingElements.entries.length;
    if (t) {
      const u = this.activeFormattingElements.entries.findIndex((s) => s.type === F.Marker || this.openElements.contains(s.element)), n = u < 0 ? t - 1 : u - 1;
      for (let s = n; s >= 0; s--) {
        const c = this.activeFormattingElements.entries[s];
        this._insertElement(c.token, this.treeAdapter.getNamespaceURI(c.element)), c.element = this.openElements.current;
      }
    }
  }
  //Close elements
  _closeTableCell() {
    this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = o.IN_ROW;
  }
  _closePElement() {
    this.openElements.generateImpliedEndTagsWithExclusion(a.P), this.openElements.popUntilTagNamePopped(a.P);
  }
  //Insertion modes
  _resetInsertionMode() {
    for (let t = this.openElements.stackTop; t >= 0; t--)
      switch (t === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[t]) {
        case a.TR: {
          this.insertionMode = o.IN_ROW;
          return;
        }
        case a.TBODY:
        case a.THEAD:
        case a.TFOOT: {
          this.insertionMode = o.IN_TABLE_BODY;
          return;
        }
        case a.CAPTION: {
          this.insertionMode = o.IN_CAPTION;
          return;
        }
        case a.COLGROUP: {
          this.insertionMode = o.IN_COLUMN_GROUP;
          return;
        }
        case a.TABLE: {
          this.insertionMode = o.IN_TABLE;
          return;
        }
        case a.BODY: {
          this.insertionMode = o.IN_BODY;
          return;
        }
        case a.FRAMESET: {
          this.insertionMode = o.IN_FRAMESET;
          return;
        }
        case a.SELECT: {
          this._resetInsertionModeForSelect(t);
          return;
        }
        case a.TEMPLATE: {
          this.insertionMode = this.tmplInsertionModeStack[0];
          return;
        }
        case a.HTML: {
          this.insertionMode = this.headElement ? o.AFTER_HEAD : o.BEFORE_HEAD;
          return;
        }
        case a.TD:
        case a.TH: {
          if (t > 0) {
            this.insertionMode = o.IN_CELL;
            return;
          }
          break;
        }
        case a.HEAD: {
          if (t > 0) {
            this.insertionMode = o.IN_HEAD;
            return;
          }
          break;
        }
      }
    this.insertionMode = o.IN_BODY;
  }
  _resetInsertionModeForSelect(t) {
    if (t > 0)
      for (let u = t - 1; u > 0; u--) {
        const n = this.openElements.tagIDs[u];
        if (n === a.TEMPLATE)
          break;
        if (n === a.TABLE) {
          this.insertionMode = o.IN_SELECT_IN_TABLE;
          return;
        }
      }
    this.insertionMode = o.IN_SELECT;
  }
  //Foster parenting
  _isElementCausesFosterParenting(t) {
    return Ru.has(t);
  }
  _shouldFosterParentOnInsertion() {
    return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.currentTagId);
  }
  _findFosterParentingLocation() {
    for (let t = this.openElements.stackTop; t >= 0; t--) {
      const u = this.openElements.items[t];
      switch (this.openElements.tagIDs[t]) {
        case a.TEMPLATE: {
          if (this.treeAdapter.getNamespaceURI(u) === E.HTML)
            return { parent: this.treeAdapter.getTemplateContent(u), beforeElement: null };
          break;
        }
        case a.TABLE: {
          const n = this.treeAdapter.getParentNode(u);
          return n ? { parent: n, beforeElement: u } : { parent: this.openElements.items[t - 1], beforeElement: null };
        }
      }
    }
    return { parent: this.openElements.items[0], beforeElement: null };
  }
  _fosterParentElement(t) {
    const u = this._findFosterParentingLocation();
    u.beforeElement ? this.treeAdapter.insertBefore(u.parent, t, u.beforeElement) : this.treeAdapter.appendChild(u.parent, t);
  }
  //Special elements
  _isSpecialElement(t, u) {
    const n = this.treeAdapter.getNamespaceURI(t);
    return va[n].has(u);
  }
  onCharacter(t) {
    if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
      $s(this, t);
      return;
    }
    switch (this.insertionMode) {
      case o.INITIAL: {
        ne(this, t);
        break;
      }
      case o.BEFORE_HTML: {
        ce(this, t);
        break;
      }
      case o.BEFORE_HEAD: {
        oe(this, t);
        break;
      }
      case o.IN_HEAD: {
        le(this, t);
        break;
      }
      case o.IN_HEAD_NO_SCRIPT: {
        de(this, t);
        break;
      }
      case o.AFTER_HEAD: {
        fe(this, t);
        break;
      }
      case o.IN_BODY:
      case o.IN_CAPTION:
      case o.IN_CELL:
      case o.IN_TEMPLATE: {
        Ou(this, t);
        break;
      }
      case o.TEXT:
      case o.IN_SELECT:
      case o.IN_SELECT_IN_TABLE: {
        this._insertCharacters(t);
        break;
      }
      case o.IN_TABLE:
      case o.IN_TABLE_BODY:
      case o.IN_ROW: {
        Fe(this, t);
        break;
      }
      case o.IN_TABLE_TEXT: {
        Bu(this, t);
        break;
      }
      case o.IN_COLUMN_GROUP: {
        Le(this, t);
        break;
      }
      case o.AFTER_BODY: {
        Oe(this, t);
        break;
      }
      case o.AFTER_AFTER_BODY: {
        Re(this, t);
        break;
      }
    }
  }
  onNullCharacter(t) {
    if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
      js(this, t);
      return;
    }
    switch (this.insertionMode) {
      case o.INITIAL: {
        ne(this, t);
        break;
      }
      case o.BEFORE_HTML: {
        ce(this, t);
        break;
      }
      case o.BEFORE_HEAD: {
        oe(this, t);
        break;
      }
      case o.IN_HEAD: {
        le(this, t);
        break;
      }
      case o.IN_HEAD_NO_SCRIPT: {
        de(this, t);
        break;
      }
      case o.AFTER_HEAD: {
        fe(this, t);
        break;
      }
      case o.TEXT: {
        this._insertCharacters(t);
        break;
      }
      case o.IN_TABLE:
      case o.IN_TABLE_BODY:
      case o.IN_ROW: {
        Fe(this, t);
        break;
      }
      case o.IN_COLUMN_GROUP: {
        Le(this, t);
        break;
      }
      case o.AFTER_BODY: {
        Oe(this, t);
        break;
      }
      case o.AFTER_AFTER_BODY: {
        Re(this, t);
        break;
      }
    }
  }
  onComment(t) {
    if (this.skipNextNewLine = !1, this.currentNotInHTML) {
      Ze(this, t);
      return;
    }
    switch (this.insertionMode) {
      case o.INITIAL:
      case o.BEFORE_HTML:
      case o.BEFORE_HEAD:
      case o.IN_HEAD:
      case o.IN_HEAD_NO_SCRIPT:
      case o.AFTER_HEAD:
      case o.IN_BODY:
      case o.IN_TABLE:
      case o.IN_CAPTION:
      case o.IN_COLUMN_GROUP:
      case o.IN_TABLE_BODY:
      case o.IN_ROW:
      case o.IN_CELL:
      case o.IN_SELECT:
      case o.IN_SELECT_IN_TABLE:
      case o.IN_TEMPLATE:
      case o.IN_FRAMESET:
      case o.AFTER_FRAMESET: {
        Ze(this, t);
        break;
      }
      case o.IN_TABLE_TEXT: {
        se(this, t);
        break;
      }
      case o.AFTER_BODY: {
        On(this, t);
        break;
      }
      case o.AFTER_AFTER_BODY:
      case o.AFTER_AFTER_FRAMESET: {
        Dn(this, t);
        break;
      }
    }
  }
  onDoctype(t) {
    switch (this.skipNextNewLine = !1, this.insertionMode) {
      case o.INITIAL: {
        xn(this, t);
        break;
      }
      case o.BEFORE_HEAD:
      case o.IN_HEAD:
      case o.IN_HEAD_NO_SCRIPT:
      case o.AFTER_HEAD: {
        this._err(t, h.misplacedDoctype);
        break;
      }
      case o.IN_TABLE_TEXT: {
        se(this, t);
        break;
      }
    }
  }
  onStartTag(t) {
    this.skipNextNewLine = !1, this.currentToken = t, this._processStartTag(t), t.selfClosing && !t.ackSelfClosing && this._err(t, h.nonVoidHtmlElementStartTagWithTrailingSolidus);
  }
  /**
   * Processes a given start tag.
   *
   * `onStartTag` checks if a self-closing tag was recognized. When a token
   * is moved inbetween multiple insertion modes, this check for self-closing
   * could lead to false positives. To avoid this, `_processStartTag` is used
   * for nested calls.
   *
   * @param token The token to process.
   */
  _processStartTag(t) {
    this.shouldProcessStartTagTokenInForeignContent(t) ? Js(this, t) : this._startTagOutsideForeignContent(t);
  }
  _startTagOutsideForeignContent(t) {
    switch (this.insertionMode) {
      case o.INITIAL: {
        ne(this, t);
        break;
      }
      case o.BEFORE_HTML: {
        Pn(this, t);
        break;
      }
      case o.BEFORE_HEAD: {
        Mn(this, t);
        break;
      }
      case o.IN_HEAD: {
        w(this, t);
        break;
      }
      case o.IN_HEAD_NO_SCRIPT: {
        kn(this, t);
        break;
      }
      case o.AFTER_HEAD: {
        Fn(this, t);
        break;
      }
      case o.IN_BODY: {
        x(this, t);
        break;
      }
      case o.IN_TABLE: {
        ee(this, t);
        break;
      }
      case o.IN_TABLE_TEXT: {
        se(this, t);
        break;
      }
      case o.IN_CAPTION: {
        Bs(this, t);
        break;
      }
      case o.IN_COLUMN_GROUP: {
        ft(this, t);
        break;
      }
      case o.IN_TABLE_BODY: {
        Me(this, t);
        break;
      }
      case o.IN_ROW: {
        Be(this, t);
        break;
      }
      case o.IN_CELL: {
        Hs(this, t);
        break;
      }
      case o.IN_SELECT: {
        Hu(this, t);
        break;
      }
      case o.IN_SELECT_IN_TABLE: {
        ws(this, t);
        break;
      }
      case o.IN_TEMPLATE: {
        Ys(this, t);
        break;
      }
      case o.AFTER_BODY: {
        Qs(this, t);
        break;
      }
      case o.IN_FRAMESET: {
        Ws(this, t);
        break;
      }
      case o.AFTER_FRAMESET: {
        Xs(this, t);
        break;
      }
      case o.AFTER_AFTER_BODY: {
        Ks(this, t);
        break;
      }
      case o.AFTER_AFTER_FRAMESET: {
        zs(this, t);
        break;
      }
    }
  }
  onEndTag(t) {
    this.skipNextNewLine = !1, this.currentToken = t, this.currentNotInHTML ? Zs(this, t) : this._endTagOutsideForeignContent(t);
  }
  _endTagOutsideForeignContent(t) {
    switch (this.insertionMode) {
      case o.INITIAL: {
        ne(this, t);
        break;
      }
      case o.BEFORE_HTML: {
        yn(this, t);
        break;
      }
      case o.BEFORE_HEAD: {
        Bn(this, t);
        break;
      }
      case o.IN_HEAD: {
        Un(this, t);
        break;
      }
      case o.IN_HEAD_NO_SCRIPT: {
        Hn(this, t);
        break;
      }
      case o.AFTER_HEAD: {
        wn(this, t);
        break;
      }
      case o.IN_BODY: {
        ye(this, t);
        break;
      }
      case o.TEXT: {
        Is(this, t);
        break;
      }
      case o.IN_TABLE: {
        Ee(this, t);
        break;
      }
      case o.IN_TABLE_TEXT: {
        se(this, t);
        break;
      }
      case o.IN_CAPTION: {
        Us(this, t);
        break;
      }
      case o.IN_COLUMN_GROUP: {
        ks(this, t);
        break;
      }
      case o.IN_TABLE_BODY: {
        et(this, t);
        break;
      }
      case o.IN_ROW: {
        ku(this, t);
        break;
      }
      case o.IN_CELL: {
        Fs(this, t);
        break;
      }
      case o.IN_SELECT: {
        Fu(this, t);
        break;
      }
      case o.IN_SELECT_IN_TABLE: {
        vs(this, t);
        break;
      }
      case o.IN_TEMPLATE: {
        qs(this, t);
        break;
      }
      case o.AFTER_BODY: {
        vu(this, t);
        break;
      }
      case o.IN_FRAMESET: {
        Gs(this, t);
        break;
      }
      case o.AFTER_FRAMESET: {
        Vs(this, t);
        break;
      }
      case o.AFTER_AFTER_BODY: {
        Re(this, t);
        break;
      }
    }
  }
  onEof(t) {
    switch (this.insertionMode) {
      case o.INITIAL: {
        ne(this, t);
        break;
      }
      case o.BEFORE_HTML: {
        ce(this, t);
        break;
      }
      case o.BEFORE_HEAD: {
        oe(this, t);
        break;
      }
      case o.IN_HEAD: {
        le(this, t);
        break;
      }
      case o.IN_HEAD_NO_SCRIPT: {
        de(this, t);
        break;
      }
      case o.AFTER_HEAD: {
        fe(this, t);
        break;
      }
      case o.IN_BODY:
      case o.IN_TABLE:
      case o.IN_CAPTION:
      case o.IN_COLUMN_GROUP:
      case o.IN_TABLE_BODY:
      case o.IN_ROW:
      case o.IN_CELL:
      case o.IN_SELECT:
      case o.IN_SELECT_IN_TABLE: {
        yu(this, t);
        break;
      }
      case o.TEXT: {
        Rs(this, t);
        break;
      }
      case o.IN_TABLE_TEXT: {
        se(this, t);
        break;
      }
      case o.IN_TEMPLATE: {
        wu(this, t);
        break;
      }
      case o.AFTER_BODY:
      case o.IN_FRAMESET:
      case o.AFTER_FRAMESET:
      case o.AFTER_AFTER_BODY:
      case o.AFTER_AFTER_FRAMESET: {
        dt(this, t);
        break;
      }
    }
  }
  onWhitespaceCharacter(t) {
    if (this.skipNextNewLine && (this.skipNextNewLine = !1, t.chars.charCodeAt(0) === r.LINE_FEED)) {
      if (t.chars.length === 1)
        return;
      t.chars = t.chars.substr(1);
    }
    if (this.tokenizer.inForeignNode) {
      this._insertCharacters(t);
      return;
    }
    switch (this.insertionMode) {
      case o.IN_HEAD:
      case o.IN_HEAD_NO_SCRIPT:
      case o.AFTER_HEAD:
      case o.TEXT:
      case o.IN_COLUMN_GROUP:
      case o.IN_SELECT:
      case o.IN_SELECT_IN_TABLE:
      case o.IN_FRAMESET:
      case o.AFTER_FRAMESET: {
        this._insertCharacters(t);
        break;
      }
      case o.IN_BODY:
      case o.IN_CAPTION:
      case o.IN_CELL:
      case o.IN_TEMPLATE:
      case o.AFTER_BODY:
      case o.AFTER_AFTER_BODY:
      case o.AFTER_AFTER_FRAMESET: {
        Lu(this, t);
        break;
      }
      case o.IN_TABLE:
      case o.IN_TABLE_BODY:
      case o.IN_ROW: {
        Fe(this, t);
        break;
      }
      case o.IN_TABLE_TEXT: {
        Mu(this, t);
        break;
      }
    }
  }
}
function Cn(e, t) {
  let u = e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);
  return u ? e.openElements.contains(u.element) ? e.openElements.hasInScope(t.tagID) || (u = null) : (e.activeFormattingElements.removeEntry(u), u = null) : Pu(e, t), u;
}
function Nn(e, t) {
  let u = null, n = e.openElements.stackTop;
  for (; n >= 0; n--) {
    const s = e.openElements.items[n];
    if (s === t.element)
      break;
    e._isSpecialElement(s, e.openElements.tagIDs[n]) && (u = s);
  }
  return u || (e.openElements.shortenToLength(n < 0 ? 0 : n), e.activeFormattingElements.removeEntry(t)), u;
}
function In(e, t, u) {
  let n = t, s = e.openElements.getCommonAncestor(t);
  for (let c = 0, l = s; l !== u; c++, l = s) {
    s = e.openElements.getCommonAncestor(l);
    const f = e.activeFormattingElements.getElementEntry(l), T = f && c >= An;
    !f || T ? (T && e.activeFormattingElements.removeEntry(f), e.openElements.remove(l)) : (l = Rn(e, f), n === t && (e.activeFormattingElements.bookmark = f), e.treeAdapter.detachNode(n), e.treeAdapter.appendChild(l, n), n = l);
  }
  return n;
}
function Rn(e, t) {
  const u = e.treeAdapter.getNamespaceURI(t.element), n = e.treeAdapter.createElement(t.token.tagName, u, t.token.attrs);
  return e.openElements.replace(t.element, n), t.element = n, n;
}
function Sn(e, t, u) {
  const n = e.treeAdapter.getTagName(t), s = xe(n);
  if (e._isElementCausesFosterParenting(s))
    e._fosterParentElement(u);
  else {
    const c = e.treeAdapter.getNamespaceURI(t);
    s === a.TEMPLATE && c === E.HTML && (t = e.treeAdapter.getTemplateContent(t)), e.treeAdapter.appendChild(t, u);
  }
}
function Ln(e, t, u) {
  const n = e.treeAdapter.getNamespaceURI(u.element), { token: s } = u, c = e.treeAdapter.createElement(s.tagName, n, s.attrs);
  e._adoptNodes(t, c), e.treeAdapter.appendChild(t, c), e.activeFormattingElements.insertElementAfterBookmark(c, s), e.activeFormattingElements.removeEntry(u), e.openElements.remove(u.element), e.openElements.insertAfter(t, c, s.tagID);
}
function lt(e, t) {
  for (let u = 0; u < _n; u++) {
    const n = Cn(e, t);
    if (!n)
      break;
    const s = Nn(e, n);
    if (!s)
      break;
    e.activeFormattingElements.bookmark = n;
    const c = In(e, s, n.element), l = e.openElements.getCommonAncestor(n.element);
    e.treeAdapter.detachNode(c), l && Sn(e, l, c), Ln(e, s, n);
  }
}
function Ze(e, t) {
  e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
}
function On(e, t) {
  e._appendCommentNode(t, e.openElements.items[0]);
}
function Dn(e, t) {
  e._appendCommentNode(t, e.document);
}
function dt(e, t) {
  if (e.stopped = !0, t.location) {
    const u = e.fragmentContext ? 0 : 2;
    for (let n = e.openElements.stackTop; n >= u; n--)
      e._setEndLocation(e.openElements.items[n], t);
    if (!e.fragmentContext && e.openElements.stackTop >= 0) {
      const n = e.openElements.items[0], s = e.treeAdapter.getNodeSourceCodeLocation(n);
      if (s && !s.endTag && (e._setEndLocation(n, t), e.openElements.stackTop >= 1)) {
        const c = e.openElements.items[1], l = e.treeAdapter.getNodeSourceCodeLocation(c);
        l && !l.endTag && e._setEndLocation(c, t);
      }
    }
  }
}
function xn(e, t) {
  e._setDocumentType(t);
  const u = t.forceQuirks ? k.QUIRKS : sn(t);
  nn(t) || e._err(t, h.nonConformingDoctype), e.treeAdapter.setDocumentMode(e.document, u), e.insertionMode = o.BEFORE_HTML;
}
function ne(e, t) {
  e._err(t, h.missingDoctype, !0), e.treeAdapter.setDocumentMode(e.document, k.QUIRKS), e.insertionMode = o.BEFORE_HTML, e._processToken(t);
}
function Pn(e, t) {
  t.tagID === a.HTML ? (e._insertElement(t, E.HTML), e.insertionMode = o.BEFORE_HEAD) : ce(e, t);
}
function yn(e, t) {
  const u = t.tagID;
  (u === a.HTML || u === a.HEAD || u === a.BODY || u === a.BR) && ce(e, t);
}
function ce(e, t) {
  e._insertFakeRootElement(), e.insertionMode = o.BEFORE_HEAD, e._processToken(t);
}
function Mn(e, t) {
  switch (t.tagID) {
    case a.HTML: {
      x(e, t);
      break;
    }
    case a.HEAD: {
      e._insertElement(t, E.HTML), e.headElement = e.openElements.current, e.insertionMode = o.IN_HEAD;
      break;
    }
    default:
      oe(e, t);
  }
}
function Bn(e, t) {
  const u = t.tagID;
  u === a.HEAD || u === a.BODY || u === a.HTML || u === a.BR ? oe(e, t) : e._err(t, h.endTagWithoutMatchingOpenElement);
}
function oe(e, t) {
  e._insertFakeElement(d.HEAD, a.HEAD), e.headElement = e.openElements.current, e.insertionMode = o.IN_HEAD, e._processToken(t);
}
function w(e, t) {
  switch (t.tagID) {
    case a.HTML: {
      x(e, t);
      break;
    }
    case a.BASE:
    case a.BASEFONT:
    case a.BGSOUND:
    case a.LINK:
    case a.META: {
      e._appendElement(t, E.HTML), t.ackSelfClosing = !0;
      break;
    }
    case a.TITLE: {
      e._switchToTextParsing(t, M.RCDATA);
      break;
    }
    case a.NOSCRIPT: {
      e.options.scriptingEnabled ? e._switchToTextParsing(t, M.RAWTEXT) : (e._insertElement(t, E.HTML), e.insertionMode = o.IN_HEAD_NO_SCRIPT);
      break;
    }
    case a.NOFRAMES:
    case a.STYLE: {
      e._switchToTextParsing(t, M.RAWTEXT);
      break;
    }
    case a.SCRIPT: {
      e._switchToTextParsing(t, M.SCRIPT_DATA);
      break;
    }
    case a.TEMPLATE: {
      e._insertTemplate(t), e.activeFormattingElements.insertMarker(), e.framesetOk = !1, e.insertionMode = o.IN_TEMPLATE, e.tmplInsertionModeStack.unshift(o.IN_TEMPLATE);
      break;
    }
    case a.HEAD: {
      e._err(t, h.misplacedStartTagForHeadElement);
      break;
    }
    default:
      le(e, t);
  }
}
function Un(e, t) {
  switch (t.tagID) {
    case a.HEAD: {
      e.openElements.pop(), e.insertionMode = o.AFTER_HEAD;
      break;
    }
    case a.BODY:
    case a.BR:
    case a.HTML: {
      le(e, t);
      break;
    }
    case a.TEMPLATE: {
      z(e, t);
      break;
    }
    default:
      e._err(t, h.endTagWithoutMatchingOpenElement);
  }
}
function z(e, t) {
  e.openElements.tmplCount > 0 ? (e.openElements.generateImpliedEndTagsThoroughly(), e.openElements.currentTagId !== a.TEMPLATE && e._err(t, h.closingOfElementWithOpenChildElements), e.openElements.popUntilTagNamePopped(a.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode()) : e._err(t, h.endTagWithoutMatchingOpenElement);
}
function le(e, t) {
  e.openElements.pop(), e.insertionMode = o.AFTER_HEAD, e._processToken(t);
}
function kn(e, t) {
  switch (t.tagID) {
    case a.HTML: {
      x(e, t);
      break;
    }
    case a.BASEFONT:
    case a.BGSOUND:
    case a.HEAD:
    case a.LINK:
    case a.META:
    case a.NOFRAMES:
    case a.STYLE: {
      w(e, t);
      break;
    }
    case a.NOSCRIPT: {
      e._err(t, h.nestedNoscriptInHead);
      break;
    }
    default:
      de(e, t);
  }
}
function Hn(e, t) {
  switch (t.tagID) {
    case a.NOSCRIPT: {
      e.openElements.pop(), e.insertionMode = o.IN_HEAD;
      break;
    }
    case a.BR: {
      de(e, t);
      break;
    }
    default:
      e._err(t, h.endTagWithoutMatchingOpenElement);
  }
}
function de(e, t) {
  const u = t.type === g.EOF ? h.openElementsLeftAfterEof : h.disallowedContentInNoscriptInHead;
  e._err(t, u), e.openElements.pop(), e.insertionMode = o.IN_HEAD, e._processToken(t);
}
function Fn(e, t) {
  switch (t.tagID) {
    case a.HTML: {
      x(e, t);
      break;
    }
    case a.BODY: {
      e._insertElement(t, E.HTML), e.framesetOk = !1, e.insertionMode = o.IN_BODY;
      break;
    }
    case a.FRAMESET: {
      e._insertElement(t, E.HTML), e.insertionMode = o.IN_FRAMESET;
      break;
    }
    case a.BASE:
    case a.BASEFONT:
    case a.BGSOUND:
    case a.LINK:
    case a.META:
    case a.NOFRAMES:
    case a.SCRIPT:
    case a.STYLE:
    case a.TEMPLATE:
    case a.TITLE: {
      e._err(t, h.abandonedHeadElementChild), e.openElements.push(e.headElement, a.HEAD), w(e, t), e.openElements.remove(e.headElement);
      break;
    }
    case a.HEAD: {
      e._err(t, h.misplacedStartTagForHeadElement);
      break;
    }
    default:
      fe(e, t);
  }
}
function wn(e, t) {
  switch (t.tagID) {
    case a.BODY:
    case a.HTML:
    case a.BR: {
      fe(e, t);
      break;
    }
    case a.TEMPLATE: {
      z(e, t);
      break;
    }
    default:
      e._err(t, h.endTagWithoutMatchingOpenElement);
  }
}
function fe(e, t) {
  e._insertFakeElement(d.BODY, a.BODY), e.insertionMode = o.IN_BODY, Pe(e, t);
}
function Pe(e, t) {
  switch (t.type) {
    case g.CHARACTER: {
      Ou(e, t);
      break;
    }
    case g.WHITESPACE_CHARACTER: {
      Lu(e, t);
      break;
    }
    case g.COMMENT: {
      Ze(e, t);
      break;
    }
    case g.START_TAG: {
      x(e, t);
      break;
    }
    case g.END_TAG: {
      ye(e, t);
      break;
    }
    case g.EOF: {
      yu(e, t);
      break;
    }
  }
}
function Lu(e, t) {
  e._reconstructActiveFormattingElements(), e._insertCharacters(t);
}
function Ou(e, t) {
  e._reconstructActiveFormattingElements(), e._insertCharacters(t), e.framesetOk = !1;
}
function vn(e, t) {
  e.openElements.tmplCount === 0 && e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
}
function Yn(e, t) {
  const u = e.openElements.tryPeekProperlyNestedBodyElement();
  u && e.openElements.tmplCount === 0 && (e.framesetOk = !1, e.treeAdapter.adoptAttributes(u, t.attrs));
}
function qn(e, t) {
  const u = e.openElements.tryPeekProperlyNestedBodyElement();
  e.framesetOk && u && (e.treeAdapter.detachNode(u), e.openElements.popAllUpToHtmlElement(), e._insertElement(t, E.HTML), e.insertionMode = o.IN_FRAMESET);
}
function Qn(e, t) {
  e.openElements.hasInButtonScope(a.P) && e._closePElement(), e._insertElement(t, E.HTML);
}
function Wn(e, t) {
  e.openElements.hasInButtonScope(a.P) && e._closePElement(), Tu(e.openElements.currentTagId) && e.openElements.pop(), e._insertElement(t, E.HTML);
}
function Gn(e, t) {
  e.openElements.hasInButtonScope(a.P) && e._closePElement(), e._insertElement(t, E.HTML), e.skipNextNewLine = !0, e.framesetOk = !1;
}
function Xn(e, t) {
  const u = e.openElements.tmplCount > 0;
  (!e.formElement || u) && (e.openElements.hasInButtonScope(a.P) && e._closePElement(), e._insertElement(t, E.HTML), u || (e.formElement = e.openElements.current));
}
function Vn(e, t) {
  e.framesetOk = !1;
  const u = t.tagID;
  for (let n = e.openElements.stackTop; n >= 0; n--) {
    const s = e.openElements.tagIDs[n];
    if (u === a.LI && s === a.LI || (u === a.DD || u === a.DT) && (s === a.DD || s === a.DT)) {
      e.openElements.generateImpliedEndTagsWithExclusion(s), e.openElements.popUntilTagNamePopped(s);
      break;
    }
    if (s !== a.ADDRESS && s !== a.DIV && s !== a.P && e._isSpecialElement(e.openElements.items[n], s))
      break;
  }
  e.openElements.hasInButtonScope(a.P) && e._closePElement(), e._insertElement(t, E.HTML);
}
function Kn(e, t) {
  e.openElements.hasInButtonScope(a.P) && e._closePElement(), e._insertElement(t, E.HTML), e.tokenizer.state = M.PLAINTEXT;
}
function zn(e, t) {
  e.openElements.hasInScope(a.BUTTON) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(a.BUTTON)), e._reconstructActiveFormattingElements(), e._insertElement(t, E.HTML), e.framesetOk = !1;
}
function jn(e, t) {
  const u = e.activeFormattingElements.getElementEntryInScopeWithTagName(d.A);
  u && (lt(e, t), e.openElements.remove(u.element), e.activeFormattingElements.removeEntry(u)), e._reconstructActiveFormattingElements(), e._insertElement(t, E.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function $n(e, t) {
  e._reconstructActiveFormattingElements(), e._insertElement(t, E.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Jn(e, t) {
  e._reconstructActiveFormattingElements(), e.openElements.hasInScope(a.NOBR) && (lt(e, t), e._reconstructActiveFormattingElements()), e._insertElement(t, E.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Zn(e, t) {
  e._reconstructActiveFormattingElements(), e._insertElement(t, E.HTML), e.activeFormattingElements.insertMarker(), e.framesetOk = !1;
}
function es(e, t) {
  e.treeAdapter.getDocumentMode(e.document) !== k.QUIRKS && e.openElements.hasInButtonScope(a.P) && e._closePElement(), e._insertElement(t, E.HTML), e.framesetOk = !1, e.insertionMode = o.IN_TABLE;
}
function Du(e, t) {
  e._reconstructActiveFormattingElements(), e._appendElement(t, E.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
}
function xu(e) {
  const t = fu(e, X.TYPE);
  return t != null && t.toLowerCase() === pn;
}
function ts(e, t) {
  e._reconstructActiveFormattingElements(), e._appendElement(t, E.HTML), xu(t) || (e.framesetOk = !1), t.ackSelfClosing = !0;
}
function us(e, t) {
  e._appendElement(t, E.HTML), t.ackSelfClosing = !0;
}
function as(e, t) {
  e.openElements.hasInButtonScope(a.P) && e._closePElement(), e._appendElement(t, E.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
}
function ns(e, t) {
  t.tagName = d.IMG, t.tagID = a.IMG, Du(e, t);
}
function ss(e, t) {
  e._insertElement(t, E.HTML), e.skipNextNewLine = !0, e.tokenizer.state = M.RCDATA, e.originalInsertionMode = e.insertionMode, e.framesetOk = !1, e.insertionMode = o.TEXT;
}
function rs(e, t) {
  e.openElements.hasInButtonScope(a.P) && e._closePElement(), e._reconstructActiveFormattingElements(), e.framesetOk = !1, e._switchToTextParsing(t, M.RAWTEXT);
}
function is(e, t) {
  e.framesetOk = !1, e._switchToTextParsing(t, M.RAWTEXT);
}
function yt(e, t) {
  e._switchToTextParsing(t, M.RAWTEXT);
}
function cs(e, t) {
  e._reconstructActiveFormattingElements(), e._insertElement(t, E.HTML), e.framesetOk = !1, e.insertionMode = e.insertionMode === o.IN_TABLE || e.insertionMode === o.IN_CAPTION || e.insertionMode === o.IN_TABLE_BODY || e.insertionMode === o.IN_ROW || e.insertionMode === o.IN_CELL ? o.IN_SELECT_IN_TABLE : o.IN_SELECT;
}
function os(e, t) {
  e.openElements.currentTagId === a.OPTION && e.openElements.pop(), e._reconstructActiveFormattingElements(), e._insertElement(t, E.HTML);
}
function ls(e, t) {
  e.openElements.hasInScope(a.RUBY) && e.openElements.generateImpliedEndTags(), e._insertElement(t, E.HTML);
}
function ds(e, t) {
  e.openElements.hasInScope(a.RUBY) && e.openElements.generateImpliedEndTagsWithExclusion(a.RTC), e._insertElement(t, E.HTML);
}
function fs(e, t) {
  e._reconstructActiveFormattingElements(), Nu(t), ot(t), t.selfClosing ? e._appendElement(t, E.MATHML) : e._insertElement(t, E.MATHML), t.ackSelfClosing = !0;
}
function hs(e, t) {
  e._reconstructActiveFormattingElements(), Iu(t), ot(t), t.selfClosing ? e._appendElement(t, E.SVG) : e._insertElement(t, E.SVG), t.ackSelfClosing = !0;
}
function Mt(e, t) {
  e._reconstructActiveFormattingElements(), e._insertElement(t, E.HTML);
}
function x(e, t) {
  switch (t.tagID) {
    case a.I:
    case a.S:
    case a.B:
    case a.U:
    case a.EM:
    case a.TT:
    case a.BIG:
    case a.CODE:
    case a.FONT:
    case a.SMALL:
    case a.STRIKE:
    case a.STRONG: {
      $n(e, t);
      break;
    }
    case a.A: {
      jn(e, t);
      break;
    }
    case a.H1:
    case a.H2:
    case a.H3:
    case a.H4:
    case a.H5:
    case a.H6: {
      Wn(e, t);
      break;
    }
    case a.P:
    case a.DL:
    case a.OL:
    case a.UL:
    case a.DIV:
    case a.DIR:
    case a.NAV:
    case a.MAIN:
    case a.MENU:
    case a.ASIDE:
    case a.CENTER:
    case a.FIGURE:
    case a.FOOTER:
    case a.HEADER:
    case a.HGROUP:
    case a.DIALOG:
    case a.DETAILS:
    case a.ADDRESS:
    case a.ARTICLE:
    case a.SECTION:
    case a.SUMMARY:
    case a.FIELDSET:
    case a.BLOCKQUOTE:
    case a.FIGCAPTION: {
      Qn(e, t);
      break;
    }
    case a.LI:
    case a.DD:
    case a.DT: {
      Vn(e, t);
      break;
    }
    case a.BR:
    case a.IMG:
    case a.WBR:
    case a.AREA:
    case a.EMBED:
    case a.KEYGEN: {
      Du(e, t);
      break;
    }
    case a.HR: {
      as(e, t);
      break;
    }
    case a.RB:
    case a.RTC: {
      ls(e, t);
      break;
    }
    case a.RT:
    case a.RP: {
      ds(e, t);
      break;
    }
    case a.PRE:
    case a.LISTING: {
      Gn(e, t);
      break;
    }
    case a.XMP: {
      rs(e, t);
      break;
    }
    case a.SVG: {
      hs(e, t);
      break;
    }
    case a.HTML: {
      vn(e, t);
      break;
    }
    case a.BASE:
    case a.LINK:
    case a.META:
    case a.STYLE:
    case a.TITLE:
    case a.SCRIPT:
    case a.BGSOUND:
    case a.BASEFONT:
    case a.TEMPLATE: {
      w(e, t);
      break;
    }
    case a.BODY: {
      Yn(e, t);
      break;
    }
    case a.FORM: {
      Xn(e, t);
      break;
    }
    case a.NOBR: {
      Jn(e, t);
      break;
    }
    case a.MATH: {
      fs(e, t);
      break;
    }
    case a.TABLE: {
      es(e, t);
      break;
    }
    case a.INPUT: {
      ts(e, t);
      break;
    }
    case a.PARAM:
    case a.TRACK:
    case a.SOURCE: {
      us(e, t);
      break;
    }
    case a.IMAGE: {
      ns(e, t);
      break;
    }
    case a.BUTTON: {
      zn(e, t);
      break;
    }
    case a.APPLET:
    case a.OBJECT:
    case a.MARQUEE: {
      Zn(e, t);
      break;
    }
    case a.IFRAME: {
      is(e, t);
      break;
    }
    case a.SELECT: {
      cs(e, t);
      break;
    }
    case a.OPTION:
    case a.OPTGROUP: {
      os(e, t);
      break;
    }
    case a.NOEMBED: {
      yt(e, t);
      break;
    }
    case a.FRAMESET: {
      qn(e, t);
      break;
    }
    case a.TEXTAREA: {
      ss(e, t);
      break;
    }
    case a.NOSCRIPT: {
      e.options.scriptingEnabled ? yt(e, t) : Mt(e, t);
      break;
    }
    case a.PLAINTEXT: {
      Kn(e, t);
      break;
    }
    case a.COL:
    case a.TH:
    case a.TD:
    case a.TR:
    case a.HEAD:
    case a.FRAME:
    case a.TBODY:
    case a.TFOOT:
    case a.THEAD:
    case a.CAPTION:
    case a.COLGROUP:
      break;
    default:
      Mt(e, t);
  }
}
function Es(e, t) {
  if (e.openElements.hasInScope(a.BODY) && (e.insertionMode = o.AFTER_BODY, e.options.sourceCodeLocationInfo)) {
    const u = e.openElements.tryPeekProperlyNestedBodyElement();
    u && e._setEndLocation(u, t);
  }
}
function Ts(e, t) {
  e.openElements.hasInScope(a.BODY) && (e.insertionMode = o.AFTER_BODY, vu(e, t));
}
function ms(e, t) {
  const u = t.tagID;
  e.openElements.hasInScope(u) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(u));
}
function bs(e) {
  const t = e.openElements.tmplCount > 0, { formElement: u } = e;
  t || (e.formElement = null), (u || t) && e.openElements.hasInScope(a.FORM) && (e.openElements.generateImpliedEndTags(), t ? e.openElements.popUntilTagNamePopped(a.FORM) : u && e.openElements.remove(u));
}
function ps(e) {
  e.openElements.hasInButtonScope(a.P) || e._insertFakeElement(d.P, a.P), e._closePElement();
}
function _s(e) {
  e.openElements.hasInListItemScope(a.LI) && (e.openElements.generateImpliedEndTagsWithExclusion(a.LI), e.openElements.popUntilTagNamePopped(a.LI));
}
function As(e, t) {
  const u = t.tagID;
  e.openElements.hasInScope(u) && (e.openElements.generateImpliedEndTagsWithExclusion(u), e.openElements.popUntilTagNamePopped(u));
}
function gs(e) {
  e.openElements.hasNumberedHeaderInScope() && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilNumberedHeaderPopped());
}
function Cs(e, t) {
  const u = t.tagID;
  e.openElements.hasInScope(u) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(u), e.activeFormattingElements.clearToLastMarker());
}
function Ns(e) {
  e._reconstructActiveFormattingElements(), e._insertFakeElement(d.BR, a.BR), e.openElements.pop(), e.framesetOk = !1;
}
function Pu(e, t) {
  const u = t.tagName, n = t.tagID;
  for (let s = e.openElements.stackTop; s > 0; s--) {
    const c = e.openElements.items[s], l = e.openElements.tagIDs[s];
    if (n === l && (n !== a.UNKNOWN || e.treeAdapter.getTagName(c) === u)) {
      e.openElements.generateImpliedEndTagsWithExclusion(n), e.openElements.stackTop >= s && e.openElements.shortenToLength(s);
      break;
    }
    if (e._isSpecialElement(c, l))
      break;
  }
}
function ye(e, t) {
  switch (t.tagID) {
    case a.A:
    case a.B:
    case a.I:
    case a.S:
    case a.U:
    case a.EM:
    case a.TT:
    case a.BIG:
    case a.CODE:
    case a.FONT:
    case a.NOBR:
    case a.SMALL:
    case a.STRIKE:
    case a.STRONG: {
      lt(e, t);
      break;
    }
    case a.P: {
      ps(e);
      break;
    }
    case a.DL:
    case a.UL:
    case a.OL:
    case a.DIR:
    case a.DIV:
    case a.NAV:
    case a.PRE:
    case a.MAIN:
    case a.MENU:
    case a.ASIDE:
    case a.BUTTON:
    case a.CENTER:
    case a.FIGURE:
    case a.FOOTER:
    case a.HEADER:
    case a.HGROUP:
    case a.DIALOG:
    case a.ADDRESS:
    case a.ARTICLE:
    case a.DETAILS:
    case a.SECTION:
    case a.SUMMARY:
    case a.LISTING:
    case a.FIELDSET:
    case a.BLOCKQUOTE:
    case a.FIGCAPTION: {
      ms(e, t);
      break;
    }
    case a.LI: {
      _s(e);
      break;
    }
    case a.DD:
    case a.DT: {
      As(e, t);
      break;
    }
    case a.H1:
    case a.H2:
    case a.H3:
    case a.H4:
    case a.H5:
    case a.H6: {
      gs(e);
      break;
    }
    case a.BR: {
      Ns(e);
      break;
    }
    case a.BODY: {
      Es(e, t);
      break;
    }
    case a.HTML: {
      Ts(e, t);
      break;
    }
    case a.FORM: {
      bs(e);
      break;
    }
    case a.APPLET:
    case a.OBJECT:
    case a.MARQUEE: {
      Cs(e, t);
      break;
    }
    case a.TEMPLATE: {
      z(e, t);
      break;
    }
    default:
      Pu(e, t);
  }
}
function yu(e, t) {
  e.tmplInsertionModeStack.length > 0 ? wu(e, t) : dt(e, t);
}
function Is(e, t) {
  var u;
  t.tagID === a.SCRIPT && ((u = e.scriptHandler) === null || u === void 0 || u.call(e, e.openElements.current)), e.openElements.pop(), e.insertionMode = e.originalInsertionMode;
}
function Rs(e, t) {
  e._err(t, h.eofInElementThatCanContainOnlyText), e.openElements.pop(), e.insertionMode = e.originalInsertionMode, e.onEof(t);
}
function Fe(e, t) {
  if (Ru.has(e.openElements.currentTagId))
    switch (e.pendingCharacterTokens.length = 0, e.hasNonWhitespacePendingCharacterToken = !1, e.originalInsertionMode = e.insertionMode, e.insertionMode = o.IN_TABLE_TEXT, t.type) {
      case g.CHARACTER: {
        Bu(e, t);
        break;
      }
      case g.WHITESPACE_CHARACTER: {
        Mu(e, t);
        break;
      }
    }
  else
    be(e, t);
}
function Ss(e, t) {
  e.openElements.clearBackToTableContext(), e.activeFormattingElements.insertMarker(), e._insertElement(t, E.HTML), e.insertionMode = o.IN_CAPTION;
}
function Ls(e, t) {
  e.openElements.clearBackToTableContext(), e._insertElement(t, E.HTML), e.insertionMode = o.IN_COLUMN_GROUP;
}
function Os(e, t) {
  e.openElements.clearBackToTableContext(), e._insertFakeElement(d.COLGROUP, a.COLGROUP), e.insertionMode = o.IN_COLUMN_GROUP, ft(e, t);
}
function Ds(e, t) {
  e.openElements.clearBackToTableContext(), e._insertElement(t, E.HTML), e.insertionMode = o.IN_TABLE_BODY;
}
function xs(e, t) {
  e.openElements.clearBackToTableContext(), e._insertFakeElement(d.TBODY, a.TBODY), e.insertionMode = o.IN_TABLE_BODY, Me(e, t);
}
function Ps(e, t) {
  e.openElements.hasInTableScope(a.TABLE) && (e.openElements.popUntilTagNamePopped(a.TABLE), e._resetInsertionMode(), e._processStartTag(t));
}
function ys(e, t) {
  xu(t) ? e._appendElement(t, E.HTML) : be(e, t), t.ackSelfClosing = !0;
}
function Ms(e, t) {
  !e.formElement && e.openElements.tmplCount === 0 && (e._insertElement(t, E.HTML), e.formElement = e.openElements.current, e.openElements.pop());
}
function ee(e, t) {
  switch (t.tagID) {
    case a.TD:
    case a.TH:
    case a.TR: {
      xs(e, t);
      break;
    }
    case a.STYLE:
    case a.SCRIPT:
    case a.TEMPLATE: {
      w(e, t);
      break;
    }
    case a.COL: {
      Os(e, t);
      break;
    }
    case a.FORM: {
      Ms(e, t);
      break;
    }
    case a.TABLE: {
      Ps(e, t);
      break;
    }
    case a.TBODY:
    case a.TFOOT:
    case a.THEAD: {
      Ds(e, t);
      break;
    }
    case a.INPUT: {
      ys(e, t);
      break;
    }
    case a.CAPTION: {
      Ss(e, t);
      break;
    }
    case a.COLGROUP: {
      Ls(e, t);
      break;
    }
    default:
      be(e, t);
  }
}
function Ee(e, t) {
  switch (t.tagID) {
    case a.TABLE: {
      e.openElements.hasInTableScope(a.TABLE) && (e.openElements.popUntilTagNamePopped(a.TABLE), e._resetInsertionMode());
      break;
    }
    case a.TEMPLATE: {
      z(e, t);
      break;
    }
    case a.BODY:
    case a.CAPTION:
    case a.COL:
    case a.COLGROUP:
    case a.HTML:
    case a.TBODY:
    case a.TD:
    case a.TFOOT:
    case a.TH:
    case a.THEAD:
    case a.TR:
      break;
    default:
      be(e, t);
  }
}
function be(e, t) {
  const u = e.fosterParentingEnabled;
  e.fosterParentingEnabled = !0, Pe(e, t), e.fosterParentingEnabled = u;
}
function Mu(e, t) {
  e.pendingCharacterTokens.push(t);
}
function Bu(e, t) {
  e.pendingCharacterTokens.push(t), e.hasNonWhitespacePendingCharacterToken = !0;
}
function se(e, t) {
  let u = 0;
  if (e.hasNonWhitespacePendingCharacterToken)
    for (; u < e.pendingCharacterTokens.length; u++)
      be(e, e.pendingCharacterTokens[u]);
  else
    for (; u < e.pendingCharacterTokens.length; u++)
      e._insertCharacters(e.pendingCharacterTokens[u]);
  e.insertionMode = e.originalInsertionMode, e._processToken(t);
}
const Uu = /* @__PURE__ */ new Set([a.CAPTION, a.COL, a.COLGROUP, a.TBODY, a.TD, a.TFOOT, a.TH, a.THEAD, a.TR]);
function Bs(e, t) {
  const u = t.tagID;
  Uu.has(u) ? e.openElements.hasInTableScope(a.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(a.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = o.IN_TABLE, ee(e, t)) : x(e, t);
}
function Us(e, t) {
  const u = t.tagID;
  switch (u) {
    case a.CAPTION:
    case a.TABLE: {
      e.openElements.hasInTableScope(a.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(a.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = o.IN_TABLE, u === a.TABLE && Ee(e, t));
      break;
    }
    case a.BODY:
    case a.COL:
    case a.COLGROUP:
    case a.HTML:
    case a.TBODY:
    case a.TD:
    case a.TFOOT:
    case a.TH:
    case a.THEAD:
    case a.TR:
      break;
    default:
      ye(e, t);
  }
}
function ft(e, t) {
  switch (t.tagID) {
    case a.HTML: {
      x(e, t);
      break;
    }
    case a.COL: {
      e._appendElement(t, E.HTML), t.ackSelfClosing = !0;
      break;
    }
    case a.TEMPLATE: {
      w(e, t);
      break;
    }
    default:
      Le(e, t);
  }
}
function ks(e, t) {
  switch (t.tagID) {
    case a.COLGROUP: {
      e.openElements.currentTagId === a.COLGROUP && (e.openElements.pop(), e.insertionMode = o.IN_TABLE);
      break;
    }
    case a.TEMPLATE: {
      z(e, t);
      break;
    }
    case a.COL:
      break;
    default:
      Le(e, t);
  }
}
function Le(e, t) {
  e.openElements.currentTagId === a.COLGROUP && (e.openElements.pop(), e.insertionMode = o.IN_TABLE, e._processToken(t));
}
function Me(e, t) {
  switch (t.tagID) {
    case a.TR: {
      e.openElements.clearBackToTableBodyContext(), e._insertElement(t, E.HTML), e.insertionMode = o.IN_ROW;
      break;
    }
    case a.TH:
    case a.TD: {
      e.openElements.clearBackToTableBodyContext(), e._insertFakeElement(d.TR, a.TR), e.insertionMode = o.IN_ROW, Be(e, t);
      break;
    }
    case a.CAPTION:
    case a.COL:
    case a.COLGROUP:
    case a.TBODY:
    case a.TFOOT:
    case a.THEAD: {
      e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = o.IN_TABLE, ee(e, t));
      break;
    }
    default:
      ee(e, t);
  }
}
function et(e, t) {
  const u = t.tagID;
  switch (t.tagID) {
    case a.TBODY:
    case a.TFOOT:
    case a.THEAD: {
      e.openElements.hasInTableScope(u) && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = o.IN_TABLE);
      break;
    }
    case a.TABLE: {
      e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = o.IN_TABLE, Ee(e, t));
      break;
    }
    case a.BODY:
    case a.CAPTION:
    case a.COL:
    case a.COLGROUP:
    case a.HTML:
    case a.TD:
    case a.TH:
    case a.TR:
      break;
    default:
      Ee(e, t);
  }
}
function Be(e, t) {
  switch (t.tagID) {
    case a.TH:
    case a.TD: {
      e.openElements.clearBackToTableRowContext(), e._insertElement(t, E.HTML), e.insertionMode = o.IN_CELL, e.activeFormattingElements.insertMarker();
      break;
    }
    case a.CAPTION:
    case a.COL:
    case a.COLGROUP:
    case a.TBODY:
    case a.TFOOT:
    case a.THEAD:
    case a.TR: {
      e.openElements.hasInTableScope(a.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = o.IN_TABLE_BODY, Me(e, t));
      break;
    }
    default:
      ee(e, t);
  }
}
function ku(e, t) {
  switch (t.tagID) {
    case a.TR: {
      e.openElements.hasInTableScope(a.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = o.IN_TABLE_BODY);
      break;
    }
    case a.TABLE: {
      e.openElements.hasInTableScope(a.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = o.IN_TABLE_BODY, et(e, t));
      break;
    }
    case a.TBODY:
    case a.TFOOT:
    case a.THEAD: {
      (e.openElements.hasInTableScope(t.tagID) || e.openElements.hasInTableScope(a.TR)) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = o.IN_TABLE_BODY, et(e, t));
      break;
    }
    case a.BODY:
    case a.CAPTION:
    case a.COL:
    case a.COLGROUP:
    case a.HTML:
    case a.TD:
    case a.TH:
      break;
    default:
      Ee(e, t);
  }
}
function Hs(e, t) {
  const u = t.tagID;
  Uu.has(u) ? (e.openElements.hasInTableScope(a.TD) || e.openElements.hasInTableScope(a.TH)) && (e._closeTableCell(), Be(e, t)) : x(e, t);
}
function Fs(e, t) {
  const u = t.tagID;
  switch (u) {
    case a.TD:
    case a.TH: {
      e.openElements.hasInTableScope(u) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(u), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = o.IN_ROW);
      break;
    }
    case a.TABLE:
    case a.TBODY:
    case a.TFOOT:
    case a.THEAD:
    case a.TR: {
      e.openElements.hasInTableScope(u) && (e._closeTableCell(), ku(e, t));
      break;
    }
    case a.BODY:
    case a.CAPTION:
    case a.COL:
    case a.COLGROUP:
    case a.HTML:
      break;
    default:
      ye(e, t);
  }
}
function Hu(e, t) {
  switch (t.tagID) {
    case a.HTML: {
      x(e, t);
      break;
    }
    case a.OPTION: {
      e.openElements.currentTagId === a.OPTION && e.openElements.pop(), e._insertElement(t, E.HTML);
      break;
    }
    case a.OPTGROUP: {
      e.openElements.currentTagId === a.OPTION && e.openElements.pop(), e.openElements.currentTagId === a.OPTGROUP && e.openElements.pop(), e._insertElement(t, E.HTML);
      break;
    }
    case a.INPUT:
    case a.KEYGEN:
    case a.TEXTAREA:
    case a.SELECT: {
      e.openElements.hasInSelectScope(a.SELECT) && (e.openElements.popUntilTagNamePopped(a.SELECT), e._resetInsertionMode(), t.tagID !== a.SELECT && e._processStartTag(t));
      break;
    }
    case a.SCRIPT:
    case a.TEMPLATE: {
      w(e, t);
      break;
    }
  }
}
function Fu(e, t) {
  switch (t.tagID) {
    case a.OPTGROUP: {
      e.openElements.stackTop > 0 && e.openElements.currentTagId === a.OPTION && e.openElements.tagIDs[e.openElements.stackTop - 1] === a.OPTGROUP && e.openElements.pop(), e.openElements.currentTagId === a.OPTGROUP && e.openElements.pop();
      break;
    }
    case a.OPTION: {
      e.openElements.currentTagId === a.OPTION && e.openElements.pop();
      break;
    }
    case a.SELECT: {
      e.openElements.hasInSelectScope(a.SELECT) && (e.openElements.popUntilTagNamePopped(a.SELECT), e._resetInsertionMode());
      break;
    }
    case a.TEMPLATE: {
      z(e, t);
      break;
    }
  }
}
function ws(e, t) {
  const u = t.tagID;
  u === a.CAPTION || u === a.TABLE || u === a.TBODY || u === a.TFOOT || u === a.THEAD || u === a.TR || u === a.TD || u === a.TH ? (e.openElements.popUntilTagNamePopped(a.SELECT), e._resetInsertionMode(), e._processStartTag(t)) : Hu(e, t);
}
function vs(e, t) {
  const u = t.tagID;
  u === a.CAPTION || u === a.TABLE || u === a.TBODY || u === a.TFOOT || u === a.THEAD || u === a.TR || u === a.TD || u === a.TH ? e.openElements.hasInTableScope(u) && (e.openElements.popUntilTagNamePopped(a.SELECT), e._resetInsertionMode(), e.onEndTag(t)) : Fu(e, t);
}
function Ys(e, t) {
  switch (t.tagID) {
    case a.BASE:
    case a.BASEFONT:
    case a.BGSOUND:
    case a.LINK:
    case a.META:
    case a.NOFRAMES:
    case a.SCRIPT:
    case a.STYLE:
    case a.TEMPLATE:
    case a.TITLE: {
      w(e, t);
      break;
    }
    case a.CAPTION:
    case a.COLGROUP:
    case a.TBODY:
    case a.TFOOT:
    case a.THEAD: {
      e.tmplInsertionModeStack[0] = o.IN_TABLE, e.insertionMode = o.IN_TABLE, ee(e, t);
      break;
    }
    case a.COL: {
      e.tmplInsertionModeStack[0] = o.IN_COLUMN_GROUP, e.insertionMode = o.IN_COLUMN_GROUP, ft(e, t);
      break;
    }
    case a.TR: {
      e.tmplInsertionModeStack[0] = o.IN_TABLE_BODY, e.insertionMode = o.IN_TABLE_BODY, Me(e, t);
      break;
    }
    case a.TD:
    case a.TH: {
      e.tmplInsertionModeStack[0] = o.IN_ROW, e.insertionMode = o.IN_ROW, Be(e, t);
      break;
    }
    default:
      e.tmplInsertionModeStack[0] = o.IN_BODY, e.insertionMode = o.IN_BODY, x(e, t);
  }
}
function qs(e, t) {
  t.tagID === a.TEMPLATE && z(e, t);
}
function wu(e, t) {
  e.openElements.tmplCount > 0 ? (e.openElements.popUntilTagNamePopped(a.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode(), e.onEof(t)) : dt(e, t);
}
function Qs(e, t) {
  t.tagID === a.HTML ? x(e, t) : Oe(e, t);
}
function vu(e, t) {
  var u;
  if (t.tagID === a.HTML) {
    if (e.fragmentContext || (e.insertionMode = o.AFTER_AFTER_BODY), e.options.sourceCodeLocationInfo && e.openElements.tagIDs[0] === a.HTML) {
      e._setEndLocation(e.openElements.items[0], t);
      const n = e.openElements.items[1];
      n && !(!((u = e.treeAdapter.getNodeSourceCodeLocation(n)) === null || u === void 0) && u.endTag) && e._setEndLocation(n, t);
    }
  } else
    Oe(e, t);
}
function Oe(e, t) {
  e.insertionMode = o.IN_BODY, Pe(e, t);
}
function Ws(e, t) {
  switch (t.tagID) {
    case a.HTML: {
      x(e, t);
      break;
    }
    case a.FRAMESET: {
      e._insertElement(t, E.HTML);
      break;
    }
    case a.FRAME: {
      e._appendElement(t, E.HTML), t.ackSelfClosing = !0;
      break;
    }
    case a.NOFRAMES: {
      w(e, t);
      break;
    }
  }
}
function Gs(e, t) {
  t.tagID === a.FRAMESET && !e.openElements.isRootHtmlElementCurrent() && (e.openElements.pop(), !e.fragmentContext && e.openElements.currentTagId !== a.FRAMESET && (e.insertionMode = o.AFTER_FRAMESET));
}
function Xs(e, t) {
  switch (t.tagID) {
    case a.HTML: {
      x(e, t);
      break;
    }
    case a.NOFRAMES: {
      w(e, t);
      break;
    }
  }
}
function Vs(e, t) {
  t.tagID === a.HTML && (e.insertionMode = o.AFTER_AFTER_FRAMESET);
}
function Ks(e, t) {
  t.tagID === a.HTML ? x(e, t) : Re(e, t);
}
function Re(e, t) {
  e.insertionMode = o.IN_BODY, Pe(e, t);
}
function zs(e, t) {
  switch (t.tagID) {
    case a.HTML: {
      x(e, t);
      break;
    }
    case a.NOFRAMES: {
      w(e, t);
      break;
    }
  }
}
function js(e, t) {
  t.chars = I, e._insertCharacters(t);
}
function $s(e, t) {
  e._insertCharacters(t), e.framesetOk = !1;
}
function Yu(e) {
  for (; e.treeAdapter.getNamespaceURI(e.openElements.current) !== E.HTML && !e._isIntegrationPoint(e.openElements.currentTagId, e.openElements.current); )
    e.openElements.pop();
}
function Js(e, t) {
  if (hn(t))
    Yu(e), e._startTagOutsideForeignContent(t);
  else {
    const u = e._getAdjustedCurrentElement(), n = e.treeAdapter.getNamespaceURI(u);
    n === E.MATHML ? Nu(t) : n === E.SVG && (En(t), Iu(t)), ot(t), t.selfClosing ? e._appendElement(t, n) : e._insertElement(t, n), t.ackSelfClosing = !0;
  }
}
function Zs(e, t) {
  if (t.tagID === a.P || t.tagID === a.BR) {
    Yu(e), e._endTagOutsideForeignContent(t);
    return;
  }
  for (let u = e.openElements.stackTop; u > 0; u--) {
    const n = e.openElements.items[u];
    if (e.treeAdapter.getNamespaceURI(n) === E.HTML) {
      e._endTagOutsideForeignContent(t);
      break;
    }
    const s = e.treeAdapter.getTagName(n);
    if (s.toLowerCase() === t.tagName) {
      t.tagName = s, e.openElements.shortenToLength(u);
      break;
    }
  }
}
d.AREA, d.BASE, d.BASEFONT, d.BGSOUND, d.BR, d.COL, d.EMBED, d.FRAME, d.HR, d.IMG, d.INPUT, d.KEYGEN, d.LINK, d.META, d.PARAM, d.SOURCE, d.TRACK, d.WBR;
function er(e, t) {
  return Su.parse(e, t);
}
function tr(e, t, u) {
  typeof e == "string" && (u = t, t = e, e = null);
  const n = Su.getFragmentParser(e, u);
  return n.tokenizer.write(t, !0), n.getFragment();
}
function ur(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? Bt(e.position) : "start" in e || "end" in e ? Bt(e) : "line" in e || "column" in e ? tt(e) : "";
}
function tt(e) {
  return Ut(e && e.line) + ":" + Ut(e && e.column);
}
function Bt(e) {
  return tt(e && e.start) + "-" + tt(e && e.end);
}
function Ut(e) {
  return e && typeof e == "number" ? e : 1;
}
class P extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(t, u, n) {
    super(), typeof u == "string" && (n = u, u = void 0);
    let s = "", c = {}, l = !1;
    if (u && ("line" in u && "column" in u ? c = { place: u } : "start" in u && "end" in u ? c = { place: u } : "type" in u ? c = {
      ancestors: [u],
      place: u.position
    } : c = { ...u }), typeof t == "string" ? s = t : !c.cause && t && (l = !0, s = t.message, c.cause = t), !c.ruleId && !c.source && typeof n == "string") {
      const T = n.indexOf(":");
      T === -1 ? c.ruleId = n : (c.source = n.slice(0, T), c.ruleId = n.slice(T + 1));
    }
    if (!c.place && c.ancestors && c.ancestors) {
      const T = c.ancestors[c.ancestors.length - 1];
      T && (c.place = T.position);
    }
    const f = c.place && "start" in c.place ? c.place.start : c.place;
    this.ancestors = c.ancestors || void 0, this.cause = c.cause || void 0, this.column = f ? f.column : void 0, this.fatal = void 0, this.file, this.message = s, this.line = f ? f.line : void 0, this.name = ur(c.place) || "1:1", this.place = c.place || void 0, this.reason = this.message, this.ruleId = c.ruleId || void 0, this.source = c.source || void 0, this.stack = l && c.cause && typeof c.cause.stack == "string" ? c.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
P.prototype.file = "";
P.prototype.name = "";
P.prototype.reason = "";
P.prototype.message = "";
P.prototype.stack = "";
P.prototype.column = void 0;
P.prototype.line = void 0;
P.prototype.ancestors = void 0;
P.prototype.cause = void 0;
P.prototype.fatal = void 0;
P.prototype.place = void 0;
P.prototype.ruleId = void 0;
P.prototype.source = void 0;
const v = { basename: ar, dirname: nr, extname: sr, join: rr, sep: "/" };
function ar(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  pe(e);
  let u = 0, n = -1, s = e.length, c;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; s--; )
      if (e.codePointAt(s) === 47) {
        if (c) {
          u = s + 1;
          break;
        }
      } else n < 0 && (c = !0, n = s + 1);
    return n < 0 ? "" : e.slice(u, n);
  }
  if (t === e)
    return "";
  let l = -1, f = t.length - 1;
  for (; s--; )
    if (e.codePointAt(s) === 47) {
      if (c) {
        u = s + 1;
        break;
      }
    } else
      l < 0 && (c = !0, l = s + 1), f > -1 && (e.codePointAt(s) === t.codePointAt(f--) ? f < 0 && (n = s) : (f = -1, n = l));
  return u === n ? n = l : n < 0 && (n = e.length), e.slice(u, n);
}
function nr(e) {
  if (pe(e), e.length === 0)
    return ".";
  let t = -1, u = e.length, n;
  for (; --u; )
    if (e.codePointAt(u) === 47) {
      if (n) {
        t = u;
        break;
      }
    } else n || (n = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function sr(e) {
  pe(e);
  let t = e.length, u = -1, n = 0, s = -1, c = 0, l;
  for (; t--; ) {
    const f = e.codePointAt(t);
    if (f === 47) {
      if (l) {
        n = t + 1;
        break;
      }
      continue;
    }
    u < 0 && (l = !0, u = t + 1), f === 46 ? s < 0 ? s = t : c !== 1 && (c = 1) : s > -1 && (c = -1);
  }
  return s < 0 || u < 0 || // We saw a non-dot character immediately before the dot.
  c === 0 || // The (right-most) trimmed path component is exactly `..`.
  c === 1 && s === u - 1 && s === n + 1 ? "" : e.slice(s, u);
}
function rr(...e) {
  let t = -1, u;
  for (; ++t < e.length; )
    pe(e[t]), e[t] && (u = u === void 0 ? e[t] : u + "/" + e[t]);
  return u === void 0 ? "." : ir(u);
}
function ir(e) {
  pe(e);
  const t = e.codePointAt(0) === 47;
  let u = cr(e, !t);
  return u.length === 0 && !t && (u = "."), u.length > 0 && e.codePointAt(e.length - 1) === 47 && (u += "/"), t ? "/" + u : u;
}
function cr(e, t) {
  let u = "", n = 0, s = -1, c = 0, l = -1, f, T;
  for (; ++l <= e.length; ) {
    if (l < e.length)
      f = e.codePointAt(l);
    else {
      if (f === 47)
        break;
      f = 47;
    }
    if (f === 47) {
      if (!(s === l - 1 || c === 1)) if (s !== l - 1 && c === 2) {
        if (u.length < 2 || n !== 2 || u.codePointAt(u.length - 1) !== 46 || u.codePointAt(u.length - 2) !== 46) {
          if (u.length > 2) {
            if (T = u.lastIndexOf("/"), T !== u.length - 1) {
              T < 0 ? (u = "", n = 0) : (u = u.slice(0, T), n = u.length - 1 - u.lastIndexOf("/")), s = l, c = 0;
              continue;
            }
          } else if (u.length > 0) {
            u = "", n = 0, s = l, c = 0;
            continue;
          }
        }
        t && (u = u.length > 0 ? u + "/.." : "..", n = 2);
      } else
        u.length > 0 ? u += "/" + e.slice(s + 1, l) : u = e.slice(s + 1, l), n = l - s - 1;
      s = l, c = 0;
    } else f === 46 && c > -1 ? c++ : c = -1;
  }
  return u;
}
function pe(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const or = { cwd: lr };
function lr() {
  return "/";
}
function ut(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function dr(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!ut(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return fr(e);
}
function fr(e) {
  if (e.hostname !== "") {
    const n = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw n.code = "ERR_INVALID_FILE_URL_HOST", n;
  }
  const t = e.pathname;
  let u = -1;
  for (; ++u < t.length; )
    if (t.codePointAt(u) === 37 && t.codePointAt(u + 1) === 50) {
      const n = t.codePointAt(u + 2);
      if (n === 70 || n === 102) {
        const s = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw s.code = "ERR_INVALID_FILE_URL_PATH", s;
      }
    }
  return decodeURIComponent(t);
}
const we = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class at {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(t) {
    let u;
    t ? ut(t) ? u = { path: t } : typeof t == "string" || hr(t) ? u = { value: t } : u = t : u = {}, this.cwd = "cwd" in u ? "" : or.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let n = -1;
    for (; ++n < we.length; ) {
      const c = we[n];
      c in u && u[c] !== void 0 && u[c] !== null && (this[c] = c === "history" ? [...u[c]] : u[c]);
    }
    let s;
    for (s in u)
      we.includes(s) || (this[s] = u[s]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? v.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(t) {
    Ye(t, "basename"), ve(t, "basename"), this.path = v.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? v.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(t) {
    kt(this.basename, "dirname"), this.path = v.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? v.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(t) {
    if (ve(t, "extname"), kt(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = v.join(this.dirname, this.stem + (t || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(t) {
    ut(t) && (t = dr(t)), Ye(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? v.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(t) {
    Ye(t, "stem"), ve(t, "stem"), this.path = v.join(this.dirname || "", t + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(t, u, n) {
    const s = this.message(t, u, n);
    throw s.fatal = !0, s;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(t, u, n) {
    const s = this.message(t, u, n);
    return s.fatal = void 0, s;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(t, u, n) {
    const s = new P(
      // @ts-expect-error: the overloads are fine.
      t,
      u,
      n
    );
    return this.path && (s.name = this.path + ":" + s.name, s.file = this.path), s.fatal = !1, this.messages.push(s), s;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(t) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
  }
}
function ve(e, t) {
  if (e && e.includes(v.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + v.sep + "`"
    );
}
function Ye(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function kt(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function hr(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Er = {
  /** @type {ErrorInfo} */
  abandonedHeadElementChild: {
    reason: "Unexpected metadata element after head",
    description: "Unexpected element after head. Expected the element before `</head>`",
    url: !1
  },
  /** @type {ErrorInfo} */
  abruptClosingOfEmptyComment: {
    reason: "Unexpected abruptly closed empty comment",
    description: "Unexpected `>` or `->`. Expected `-->` to close comments"
  },
  /** @type {ErrorInfo} */
  abruptDoctypePublicIdentifier: {
    reason: "Unexpected abruptly closed public identifier",
    description: "Unexpected `>`. Expected a closing `\"` or `'` after the public identifier"
  },
  /** @type {ErrorInfo} */
  abruptDoctypeSystemIdentifier: {
    reason: "Unexpected abruptly closed system identifier",
    description: "Unexpected `>`. Expected a closing `\"` or `'` after the identifier identifier"
  },
  /** @type {ErrorInfo} */
  absenceOfDigitsInNumericCharacterReference: {
    reason: "Unexpected non-digit at start of numeric character reference",
    description: "Unexpected `%c`. Expected `[0-9]` for decimal references or `[0-9a-fA-F]` for hexadecimal references"
  },
  /** @type {ErrorInfo} */
  cdataInHtmlContent: {
    reason: "Unexpected CDATA section in HTML",
    description: "Unexpected `<![CDATA[` in HTML. Remove it, use a comment, or encode special characters instead"
  },
  /** @type {ErrorInfo} */
  characterReferenceOutsideUnicodeRange: {
    reason: "Unexpected too big numeric character reference",
    description: "Unexpectedly high character reference. Expected character references to be at most hexadecimal 10ffff (or decimal 1114111)"
  },
  /** @type {ErrorInfo} */
  closingOfElementWithOpenChildElements: {
    reason: "Unexpected closing tag with open child elements",
    description: "Unexpectedly closing tag. Expected other tags to be closed first",
    url: !1
  },
  /** @type {ErrorInfo} */
  controlCharacterInInputStream: {
    reason: "Unexpected control character",
    description: "Unexpected control character `%x`. Expected a non-control code point, 0x00, or ASCII whitespace"
  },
  /** @type {ErrorInfo} */
  controlCharacterReference: {
    reason: "Unexpected control character reference",
    description: "Unexpectedly control character in reference. Expected a non-control code point, 0x00, or ASCII whitespace"
  },
  /** @type {ErrorInfo} */
  disallowedContentInNoscriptInHead: {
    reason: "Disallowed content inside `<noscript>` in `<head>`",
    description: "Unexpected text character `%c`. Only use text in `<noscript>`s in `<body>`",
    url: !1
  },
  /** @type {ErrorInfo} */
  duplicateAttribute: {
    reason: "Unexpected duplicate attribute",
    description: "Unexpectedly double attribute. Expected attributes to occur only once"
  },
  /** @type {ErrorInfo} */
  endTagWithAttributes: {
    reason: "Unexpected attribute on closing tag",
    description: "Unexpected attribute. Expected `>` instead"
  },
  /** @type {ErrorInfo} */
  endTagWithTrailingSolidus: {
    reason: "Unexpected slash at end of closing tag",
    description: "Unexpected `%c-1`. Expected `>` instead"
  },
  /** @type {ErrorInfo} */
  endTagWithoutMatchingOpenElement: {
    reason: "Unexpected unopened end tag",
    description: "Unexpected end tag. Expected no end tag or another end tag",
    url: !1
  },
  /** @type {ErrorInfo} */
  eofBeforeTagName: {
    reason: "Unexpected end of file",
    description: "Unexpected end of file. Expected tag name instead"
  },
  /** @type {ErrorInfo} */
  eofInCdata: {
    reason: "Unexpected end of file in CDATA",
    description: "Unexpected end of file. Expected `]]>` to close the CDATA"
  },
  /** @type {ErrorInfo} */
  eofInComment: {
    reason: "Unexpected end of file in comment",
    description: "Unexpected end of file. Expected `-->` to close the comment"
  },
  /** @type {ErrorInfo} */
  eofInDoctype: {
    reason: "Unexpected end of file in doctype",
    description: "Unexpected end of file. Expected a valid doctype (such as `<!doctype html>`)"
  },
  /** @type {ErrorInfo} */
  eofInElementThatCanContainOnlyText: {
    reason: "Unexpected end of file in element that can only contain text",
    description: "Unexpected end of file. Expected text or a closing tag",
    url: !1
  },
  /** @type {ErrorInfo} */
  eofInScriptHtmlCommentLikeText: {
    reason: "Unexpected end of file in comment inside script",
    description: "Unexpected end of file. Expected `-->` to close the comment"
  },
  /** @type {ErrorInfo} */
  eofInTag: {
    reason: "Unexpected end of file in tag",
    description: "Unexpected end of file. Expected `>` to close the tag"
  },
  /** @type {ErrorInfo} */
  incorrectlyClosedComment: {
    reason: "Incorrectly closed comment",
    description: "Unexpected `%c-1`. Expected `-->` to close the comment"
  },
  /** @type {ErrorInfo} */
  incorrectlyOpenedComment: {
    reason: "Incorrectly opened comment",
    description: "Unexpected `%c`. Expected `<!--` to open the comment"
  },
  /** @type {ErrorInfo} */
  invalidCharacterSequenceAfterDoctypeName: {
    reason: "Invalid sequence after doctype name",
    description: "Unexpected sequence at `%c`. Expected `public` or `system`"
  },
  /** @type {ErrorInfo} */
  invalidFirstCharacterOfTagName: {
    reason: "Invalid first character in tag name",
    description: "Unexpected `%c`. Expected an ASCII letter instead"
  },
  /** @type {ErrorInfo} */
  misplacedDoctype: {
    reason: "Misplaced doctype",
    description: "Unexpected doctype. Expected doctype before head",
    url: !1
  },
  /** @type {ErrorInfo} */
  misplacedStartTagForHeadElement: {
    reason: "Misplaced `<head>` start tag",
    description: "Unexpected start tag `<head>`. Expected `<head>` directly after doctype",
    url: !1
  },
  /** @type {ErrorInfo} */
  missingAttributeValue: {
    reason: "Missing attribute value",
    description: "Unexpected `%c-1`. Expected an attribute value or no `%c-1` instead"
  },
  /** @type {ErrorInfo} */
  missingDoctype: {
    reason: "Missing doctype before other content",
    description: "Expected a `<!doctype html>` before anything else",
    url: !1
  },
  /** @type {ErrorInfo} */
  missingDoctypeName: {
    reason: "Missing doctype name",
    description: "Unexpected doctype end at `%c`. Expected `html` instead"
  },
  /** @type {ErrorInfo} */
  missingDoctypePublicIdentifier: {
    reason: "Missing public identifier in doctype",
    description: "Unexpected `%c`. Expected identifier for `public` instead"
  },
  /** @type {ErrorInfo} */
  missingDoctypeSystemIdentifier: {
    reason: "Missing system identifier in doctype",
    description: 'Unexpected `%c`. Expected identifier for `system` instead (suggested: `"about:legacy-compat"`)'
  },
  /** @type {ErrorInfo} */
  missingEndTagName: {
    reason: "Missing name in end tag",
    description: "Unexpected `%c`. Expected an ASCII letter instead"
  },
  /** @type {ErrorInfo} */
  missingQuoteBeforeDoctypePublicIdentifier: {
    reason: "Missing quote before public identifier in doctype",
    description: "Unexpected `%c`. Expected `\"` or `'` instead"
  },
  /** @type {ErrorInfo} */
  missingQuoteBeforeDoctypeSystemIdentifier: {
    reason: "Missing quote before system identifier in doctype",
    description: "Unexpected `%c`. Expected `\"` or `'` instead"
  },
  /** @type {ErrorInfo} */
  missingSemicolonAfterCharacterReference: {
    reason: "Missing semicolon after character reference",
    description: "Unexpected `%c`. Expected `;` instead"
  },
  /** @type {ErrorInfo} */
  missingWhitespaceAfterDoctypePublicKeyword: {
    reason: "Missing whitespace after public identifier in doctype",
    description: "Unexpected `%c`. Expected ASCII whitespace instead"
  },
  /** @type {ErrorInfo} */
  missingWhitespaceAfterDoctypeSystemKeyword: {
    reason: "Missing whitespace after system identifier in doctype",
    description: "Unexpected `%c`. Expected ASCII whitespace instead"
  },
  /** @type {ErrorInfo} */
  missingWhitespaceBeforeDoctypeName: {
    reason: "Missing whitespace before doctype name",
    description: "Unexpected `%c`. Expected ASCII whitespace instead"
  },
  /** @type {ErrorInfo} */
  missingWhitespaceBetweenAttributes: {
    reason: "Missing whitespace between attributes",
    description: "Unexpected `%c`. Expected ASCII whitespace instead"
  },
  /** @type {ErrorInfo} */
  missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers: {
    reason: "Missing whitespace between public and system identifiers in doctype",
    description: "Unexpected `%c`. Expected ASCII whitespace instead"
  },
  /** @type {ErrorInfo} */
  nestedComment: {
    reason: "Unexpected nested comment",
    description: "Unexpected `<!--`. Expected `-->`"
  },
  /** @type {ErrorInfo} */
  nestedNoscriptInHead: {
    reason: "Unexpected nested `<noscript>` in `<head>`",
    description: "Unexpected `<noscript>`. Expected a closing tag or a meta element",
    url: !1
  },
  /** @type {ErrorInfo} */
  nonConformingDoctype: {
    reason: "Unexpected non-conforming doctype declaration",
    description: 'Expected `<!doctype html>` or `<!doctype html system "about:legacy-compat">`',
    url: !1
  },
  /** @type {ErrorInfo} */
  nonVoidHtmlElementStartTagWithTrailingSolidus: {
    reason: "Unexpected trailing slash on start tag of non-void element",
    description: "Unexpected `/`. Expected `>` instead"
  },
  /** @type {ErrorInfo} */
  noncharacterCharacterReference: {
    reason: "Unexpected noncharacter code point referenced by character reference",
    description: "Unexpected code point. Do not use noncharacters in HTML"
  },
  /** @type {ErrorInfo} */
  noncharacterInInputStream: {
    reason: "Unexpected noncharacter character",
    description: "Unexpected code point `%x`. Do not use noncharacters in HTML"
  },
  /** @type {ErrorInfo} */
  nullCharacterReference: {
    reason: "Unexpected NULL character referenced by character reference",
    description: "Unexpected code point. Do not use NULL characters in HTML"
  },
  /** @type {ErrorInfo} */
  openElementsLeftAfterEof: {
    reason: "Unexpected end of file",
    description: "Unexpected end of file. Expected closing tag instead",
    url: !1
  },
  /** @type {ErrorInfo} */
  surrogateCharacterReference: {
    reason: "Unexpected surrogate character referenced by character reference",
    description: "Unexpected code point. Do not use lone surrogate characters in HTML"
  },
  /** @type {ErrorInfo} */
  surrogateInInputStream: {
    reason: "Unexpected surrogate character",
    description: "Unexpected code point `%x`. Do not use lone surrogate characters in HTML"
  },
  /** @type {ErrorInfo} */
  unexpectedCharacterAfterDoctypeSystemIdentifier: {
    reason: "Invalid character after system identifier in doctype",
    description: "Unexpected character at `%c`. Expected `>`"
  },
  /** @type {ErrorInfo} */
  unexpectedCharacterInAttributeName: {
    reason: "Unexpected character in attribute name",
    description: "Unexpected `%c`. Expected whitespace, `/`, `>`, `=`, or probably an ASCII letter"
  },
  /** @type {ErrorInfo} */
  unexpectedCharacterInUnquotedAttributeValue: {
    reason: "Unexpected character in unquoted attribute value",
    description: "Unexpected `%c`. Quote the attribute value to include it"
  },
  /** @type {ErrorInfo} */
  unexpectedEqualsSignBeforeAttributeName: {
    reason: "Unexpected equals sign before attribute name",
    description: "Unexpected `%c`. Add an attribute name before it"
  },
  /** @type {ErrorInfo} */
  unexpectedNullCharacter: {
    reason: "Unexpected NULL character",
    description: "Unexpected code point `%x`. Do not use NULL characters in HTML"
  },
  /** @type {ErrorInfo} */
  unexpectedQuestionMarkInsteadOfTagName: {
    reason: "Unexpected question mark instead of tag name",
    description: "Unexpected `%c`. Expected an ASCII letter instead"
  },
  /** @type {ErrorInfo} */
  unexpectedSolidusInTag: {
    reason: "Unexpected slash in tag",
    description: "Unexpected `%c-1`. Expected it followed by `>` or in a quoted attribute value"
  },
  /** @type {ErrorInfo} */
  unknownNamedCharacterReference: {
    reason: "Unexpected unknown named character reference",
    description: "Unexpected character reference. Expected known named character references"
  }
}, Tr = "https://html.spec.whatwg.org/multipage/parsing.html#parse-error-", mr = /-[a-z]/g, br = /%c(?:([-+])(\d+))?/g, pr = /%x/g, _r = { 2: !0, 1: !1, 0: null }, Ar = {};
function gr(e, t) {
  const u = t || Ar, n = u.onerror, s = e instanceof at ? e : new at(e), c = u.fragment ? tr : er, l = String(s), f = c(l, {
    sourceCodeLocationInfo: !0,
    // Note `parse5` types currently do not allow `undefined`.
    onParseError: u.onerror ? T : null,
    scriptingEnabled: !1
  });
  return (
    /** @type {Root} */
    Ca(f, {
      file: s,
      space: u.space,
      verbose: u.verbose
    })
  );
  function T(m) {
    const _ = m.code, C = Cr(_), D = u[C], B = D ?? !0, Q = typeof B == "number" ? B : B ? 1 : 0;
    if (Q) {
      const ae = Er[C], q = new P(ue(ae.reason), {
        place: {
          start: {
            line: m.startLine,
            column: m.startCol,
            offset: m.startOffset
          },
          end: {
            line: m.endLine,
            column: m.endCol,
            offset: m.endOffset
          }
        },
        ruleId: _,
        source: "hast-util-from-html"
      });
      s.path && (q.file = s.path, q.name = s.path + ":" + q.name), q.fatal = _r[Q], q.note = ue(ae.description), q.url = ae.url === !1 ? void 0 : Tr + _, n(q);
    }
    function ue(ae) {
      return ae.replace(br, q).replace(pr, Ku);
      function q(Yi, zu, mt) {
        const ju = (mt ? Number.parseInt(mt, 10) : 0) * (zu === "-" ? -1 : 1), $u = l.charAt(m.startOffset + ju);
        return Ir($u);
      }
      function Ku() {
        return Rr(l.charCodeAt(m.startOffset));
      }
    }
  }
}
function Cr(e) {
  return (
    /** @type {ErrorCode} */
    e.replace(mr, Nr)
  );
}
function Nr(e) {
  return e.charAt(1).toUpperCase();
}
function Ir(e) {
  return e === "`" ? "` ` `" : e;
}
function Rr(e) {
  return "0x" + e.toString(16).toUpperCase();
}
function Sr(e) {
  const t = this, { emitParseErrors: u, ...n } = { ...t.data("settings"), ...e };
  t.parser = s;
  function s(c, l) {
    return gr(c, {
      ...n,
      onerror: u ? function(f) {
        l.path && (f.name = l.path + ":" + f.name, f.file = l.path), l.messages.push(f);
      } : void 0
    });
  }
}
const Lr = [
  "area",
  "base",
  "basefont",
  "bgsound",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "image",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
], Ht = {}.hasOwnProperty;
function Or(e, t) {
  const u = t || {};
  function n(s, ...c) {
    let l = n.invalid;
    const f = n.handlers;
    if (s && Ht.call(s, e)) {
      const T = String(s[e]);
      l = Ht.call(f, T) ? f[T] : n.unknown;
    }
    if (l)
      return l.call(this, s, ...c);
  }
  return n.handlers = u.handlers || {}, n.invalid = u.invalid, n.unknown = u.unknown, n;
}
const Dr = /["&'<>`]/g, xr = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, Pr = (
  // eslint-disable-next-line no-control-regex, unicorn/no-hex-escape
  /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g
), yr = /[|\\{}()[\]^$+*?.]/g, Ft = /* @__PURE__ */ new WeakMap();
function Mr(e, t) {
  if (e = e.replace(
    t.subset ? Br(t.subset) : Dr,
    n
  ), t.subset || t.escapeOnly)
    return e;
  return e.replace(xr, u).replace(Pr, n);
  function u(s, c, l) {
    return t.format(
      (s.charCodeAt(0) - 55296) * 1024 + s.charCodeAt(1) - 56320 + 65536,
      l.charCodeAt(c + 2),
      t
    );
  }
  function n(s, c, l) {
    return t.format(
      s.charCodeAt(0),
      l.charCodeAt(c + 1),
      t
    );
  }
}
function Br(e) {
  let t = Ft.get(e);
  return t || (t = Ur(e), Ft.set(e, t)), t;
}
function Ur(e) {
  const t = [];
  let u = -1;
  for (; ++u < e.length; )
    t.push(e[u].replace(yr, "\\$&"));
  return new RegExp("(?:" + t.join("|") + ")", "g");
}
const kr = /[\dA-Fa-f]/;
function Hr(e, t, u) {
  const n = "&#x" + e.toString(16).toUpperCase();
  return u && t && !kr.test(String.fromCharCode(t)) ? n : n + ";";
}
const Fr = /\d/;
function wr(e, t, u) {
  const n = "&#" + String(e);
  return u && t && !Fr.test(String.fromCharCode(t)) ? n : n + ";";
}
const qe = {
  nbsp: " ",
  iexcl: "¡",
  cent: "¢",
  pound: "£",
  curren: "¤",
  yen: "¥",
  brvbar: "¦",
  sect: "§",
  uml: "¨",
  copy: "©",
  ordf: "ª",
  laquo: "«",
  not: "¬",
  shy: "­",
  reg: "®",
  macr: "¯",
  deg: "°",
  plusmn: "±",
  sup2: "²",
  sup3: "³",
  acute: "´",
  micro: "µ",
  para: "¶",
  middot: "·",
  cedil: "¸",
  sup1: "¹",
  ordm: "º",
  raquo: "»",
  frac14: "¼",
  frac12: "½",
  frac34: "¾",
  iquest: "¿",
  Agrave: "À",
  Aacute: "Á",
  Acirc: "Â",
  Atilde: "Ã",
  Auml: "Ä",
  Aring: "Å",
  AElig: "Æ",
  Ccedil: "Ç",
  Egrave: "È",
  Eacute: "É",
  Ecirc: "Ê",
  Euml: "Ë",
  Igrave: "Ì",
  Iacute: "Í",
  Icirc: "Î",
  Iuml: "Ï",
  ETH: "Ð",
  Ntilde: "Ñ",
  Ograve: "Ò",
  Oacute: "Ó",
  Ocirc: "Ô",
  Otilde: "Õ",
  Ouml: "Ö",
  times: "×",
  Oslash: "Ø",
  Ugrave: "Ù",
  Uacute: "Ú",
  Ucirc: "Û",
  Uuml: "Ü",
  Yacute: "Ý",
  THORN: "Þ",
  szlig: "ß",
  agrave: "à",
  aacute: "á",
  acirc: "â",
  atilde: "ã",
  auml: "ä",
  aring: "å",
  aelig: "æ",
  ccedil: "ç",
  egrave: "è",
  eacute: "é",
  ecirc: "ê",
  euml: "ë",
  igrave: "ì",
  iacute: "í",
  icirc: "î",
  iuml: "ï",
  eth: "ð",
  ntilde: "ñ",
  ograve: "ò",
  oacute: "ó",
  ocirc: "ô",
  otilde: "õ",
  ouml: "ö",
  divide: "÷",
  oslash: "ø",
  ugrave: "ù",
  uacute: "ú",
  ucirc: "û",
  uuml: "ü",
  yacute: "ý",
  thorn: "þ",
  yuml: "ÿ",
  fnof: "ƒ",
  Alpha: "Α",
  Beta: "Β",
  Gamma: "Γ",
  Delta: "Δ",
  Epsilon: "Ε",
  Zeta: "Ζ",
  Eta: "Η",
  Theta: "Θ",
  Iota: "Ι",
  Kappa: "Κ",
  Lambda: "Λ",
  Mu: "Μ",
  Nu: "Ν",
  Xi: "Ξ",
  Omicron: "Ο",
  Pi: "Π",
  Rho: "Ρ",
  Sigma: "Σ",
  Tau: "Τ",
  Upsilon: "Υ",
  Phi: "Φ",
  Chi: "Χ",
  Psi: "Ψ",
  Omega: "Ω",
  alpha: "α",
  beta: "β",
  gamma: "γ",
  delta: "δ",
  epsilon: "ε",
  zeta: "ζ",
  eta: "η",
  theta: "θ",
  iota: "ι",
  kappa: "κ",
  lambda: "λ",
  mu: "μ",
  nu: "ν",
  xi: "ξ",
  omicron: "ο",
  pi: "π",
  rho: "ρ",
  sigmaf: "ς",
  sigma: "σ",
  tau: "τ",
  upsilon: "υ",
  phi: "φ",
  chi: "χ",
  psi: "ψ",
  omega: "ω",
  thetasym: "ϑ",
  upsih: "ϒ",
  piv: "ϖ",
  bull: "•",
  hellip: "…",
  prime: "′",
  Prime: "″",
  oline: "‾",
  frasl: "⁄",
  weierp: "℘",
  image: "ℑ",
  real: "ℜ",
  trade: "™",
  alefsym: "ℵ",
  larr: "←",
  uarr: "↑",
  rarr: "→",
  darr: "↓",
  harr: "↔",
  crarr: "↵",
  lArr: "⇐",
  uArr: "⇑",
  rArr: "⇒",
  dArr: "⇓",
  hArr: "⇔",
  forall: "∀",
  part: "∂",
  exist: "∃",
  empty: "∅",
  nabla: "∇",
  isin: "∈",
  notin: "∉",
  ni: "∋",
  prod: "∏",
  sum: "∑",
  minus: "−",
  lowast: "∗",
  radic: "√",
  prop: "∝",
  infin: "∞",
  ang: "∠",
  and: "∧",
  or: "∨",
  cap: "∩",
  cup: "∪",
  int: "∫",
  there4: "∴",
  sim: "∼",
  cong: "≅",
  asymp: "≈",
  ne: "≠",
  equiv: "≡",
  le: "≤",
  ge: "≥",
  sub: "⊂",
  sup: "⊃",
  nsub: "⊄",
  sube: "⊆",
  supe: "⊇",
  oplus: "⊕",
  otimes: "⊗",
  perp: "⊥",
  sdot: "⋅",
  lceil: "⌈",
  rceil: "⌉",
  lfloor: "⌊",
  rfloor: "⌋",
  lang: "〈",
  rang: "〉",
  loz: "◊",
  spades: "♠",
  clubs: "♣",
  hearts: "♥",
  diams: "♦",
  quot: '"',
  amp: "&",
  lt: "<",
  gt: ">",
  OElig: "Œ",
  oelig: "œ",
  Scaron: "Š",
  scaron: "š",
  Yuml: "Ÿ",
  circ: "ˆ",
  tilde: "˜",
  ensp: " ",
  emsp: " ",
  thinsp: " ",
  zwnj: "‌",
  zwj: "‍",
  lrm: "‎",
  rlm: "‏",
  ndash: "–",
  mdash: "—",
  lsquo: "‘",
  rsquo: "’",
  sbquo: "‚",
  ldquo: "“",
  rdquo: "”",
  bdquo: "„",
  dagger: "†",
  Dagger: "‡",
  permil: "‰",
  lsaquo: "‹",
  rsaquo: "›",
  euro: "€"
}, vr = [
  "cent",
  "copy",
  "divide",
  "gt",
  "lt",
  "not",
  "para",
  "times"
], qu = {}.hasOwnProperty, nt = {};
let ge;
for (ge in qe)
  qu.call(qe, ge) && (nt[qe[ge]] = ge);
const Yr = /[^\dA-Za-z]/;
function qr(e, t, u, n) {
  const s = String.fromCharCode(e);
  if (qu.call(nt, s)) {
    const c = nt[s], l = "&" + c;
    return u && Zu.includes(c) && !vr.includes(c) && (!n || t && t !== 61 && Yr.test(String.fromCharCode(t))) ? l : l + ";";
  }
  return "";
}
function Qr(e, t, u) {
  let n = Hr(e, t, u.omitOptionalSemicolons), s;
  if ((u.useNamedReferences || u.useShortestReferences) && (s = qr(
    e,
    t,
    u.omitOptionalSemicolons,
    u.attribute
  )), (u.useShortestReferences || !s) && u.useShortestReferences) {
    const c = wr(e, t, u.omitOptionalSemicolons);
    c.length < n.length && (n = c);
  }
  return s && (!u.useShortestReferences || s.length < n.length) ? s : n;
}
function Z(e, t) {
  return Mr(e, Object.assign({ format: Qr }, t));
}
const Wr = /^>|^->|<!--|-->|--!>|<!-$/g, Gr = [">"], Xr = ["<", ">"];
function Vr(e, t, u, n) {
  return n.settings.bogusComments ? "<?" + Z(
    e.value,
    Object.assign({}, n.settings.characterReferences, {
      subset: Gr
    })
  ) + ">" : "<!--" + e.value.replace(Wr, s) + "-->";
  function s(c) {
    return Z(
      c,
      Object.assign({}, n.settings.characterReferences, {
        subset: Xr
      })
    );
  }
}
function Kr(e, t, u, n) {
  return "<!" + (n.settings.upperDoctype ? "DOCTYPE" : "doctype") + (n.settings.tightDoctype ? "" : " ") + "html>";
}
function wt(e, t) {
  const u = String(e);
  if (typeof t != "string")
    throw new TypeError("Expected character");
  let n = 0, s = u.indexOf(t);
  for (; s !== -1; )
    n++, s = u.indexOf(t, s + t.length);
  return n;
}
const zr = /[ \t\n\f\r]/g;
function ht(e) {
  return typeof e == "object" ? e.type === "text" ? vt(e.value) : !1 : vt(e);
}
function vt(e) {
  return e.replace(zr, "") === "";
}
const S = Wu(1), Qu = Wu(-1), jr = [];
function Wu(e) {
  return t;
  function t(u, n, s) {
    const c = u ? u.children : jr;
    let l = (n || 0) + e, f = c[l];
    if (!s)
      for (; f && ht(f); )
        l += e, f = c[l];
    return f;
  }
}
const $r = {}.hasOwnProperty;
function Gu(e) {
  return t;
  function t(u, n, s) {
    return $r.call(e, u.tagName) && e[u.tagName](u, n, s);
  }
}
const Et = Gu({
  body: Zr,
  caption: Qe,
  colgroup: Qe,
  dd: ai,
  dt: ui,
  head: Qe,
  html: Jr,
  li: ti,
  optgroup: ni,
  option: si,
  p: ei,
  rp: Yt,
  rt: Yt,
  tbody: ii,
  td: qt,
  tfoot: ci,
  th: qt,
  thead: ri,
  tr: oi
});
function Qe(e, t, u) {
  const n = S(u, t, !0);
  return !n || n.type !== "comment" && !(n.type === "text" && ht(n.value.charAt(0)));
}
function Jr(e, t, u) {
  const n = S(u, t);
  return !n || n.type !== "comment";
}
function Zr(e, t, u) {
  const n = S(u, t);
  return !n || n.type !== "comment";
}
function ei(e, t, u) {
  const n = S(u, t);
  return n ? n.type === "element" && (n.tagName === "address" || n.tagName === "article" || n.tagName === "aside" || n.tagName === "blockquote" || n.tagName === "details" || n.tagName === "div" || n.tagName === "dl" || n.tagName === "fieldset" || n.tagName === "figcaption" || n.tagName === "figure" || n.tagName === "footer" || n.tagName === "form" || n.tagName === "h1" || n.tagName === "h2" || n.tagName === "h3" || n.tagName === "h4" || n.tagName === "h5" || n.tagName === "h6" || n.tagName === "header" || n.tagName === "hgroup" || n.tagName === "hr" || n.tagName === "main" || n.tagName === "menu" || n.tagName === "nav" || n.tagName === "ol" || n.tagName === "p" || n.tagName === "pre" || n.tagName === "section" || n.tagName === "table" || n.tagName === "ul") : !u || // Confusing parent.
  !(u.type === "element" && (u.tagName === "a" || u.tagName === "audio" || u.tagName === "del" || u.tagName === "ins" || u.tagName === "map" || u.tagName === "noscript" || u.tagName === "video"));
}
function ti(e, t, u) {
  const n = S(u, t);
  return !n || n.type === "element" && n.tagName === "li";
}
function ui(e, t, u) {
  const n = S(u, t);
  return !!(n && n.type === "element" && (n.tagName === "dt" || n.tagName === "dd"));
}
function ai(e, t, u) {
  const n = S(u, t);
  return !n || n.type === "element" && (n.tagName === "dt" || n.tagName === "dd");
}
function Yt(e, t, u) {
  const n = S(u, t);
  return !n || n.type === "element" && (n.tagName === "rp" || n.tagName === "rt");
}
function ni(e, t, u) {
  const n = S(u, t);
  return !n || n.type === "element" && n.tagName === "optgroup";
}
function si(e, t, u) {
  const n = S(u, t);
  return !n || n.type === "element" && (n.tagName === "option" || n.tagName === "optgroup");
}
function ri(e, t, u) {
  const n = S(u, t);
  return !!(n && n.type === "element" && (n.tagName === "tbody" || n.tagName === "tfoot"));
}
function ii(e, t, u) {
  const n = S(u, t);
  return !n || n.type === "element" && (n.tagName === "tbody" || n.tagName === "tfoot");
}
function ci(e, t, u) {
  return !S(u, t);
}
function oi(e, t, u) {
  const n = S(u, t);
  return !n || n.type === "element" && n.tagName === "tr";
}
function qt(e, t, u) {
  const n = S(u, t);
  return !n || n.type === "element" && (n.tagName === "td" || n.tagName === "th");
}
const li = Gu({
  body: hi,
  colgroup: Ei,
  head: fi,
  html: di,
  tbody: Ti
});
function di(e) {
  const t = S(e, -1);
  return !t || t.type !== "comment";
}
function fi(e) {
  const t = e.children, u = [];
  let n = -1;
  for (; ++n < t.length; ) {
    const s = t[n];
    if (s.type === "element" && (s.tagName === "title" || s.tagName === "base")) {
      if (u.includes(s.tagName)) return !1;
      u.push(s.tagName);
    }
  }
  return t.length > 0;
}
function hi(e) {
  const t = S(e, -1, !0);
  return !t || t.type !== "comment" && !(t.type === "text" && ht(t.value.charAt(0))) && !(t.type === "element" && (t.tagName === "meta" || t.tagName === "link" || t.tagName === "script" || t.tagName === "style" || t.tagName === "template"));
}
function Ei(e, t, u) {
  const n = Qu(u, t), s = S(e, -1, !0);
  return u && n && n.type === "element" && n.tagName === "colgroup" && Et(n, u.children.indexOf(n), u) ? !1 : !!(s && s.type === "element" && s.tagName === "col");
}
function Ti(e, t, u) {
  const n = Qu(u, t), s = S(e, -1);
  return u && n && n.type === "element" && (n.tagName === "thead" || n.tagName === "tbody") && Et(n, u.children.indexOf(n), u) ? !1 : !!(s && s.type === "element" && s.tagName === "tr");
}
const Ce = {
  // See: <https://html.spec.whatwg.org/#attribute-name-state>.
  name: [
    [`	
\f\r &/=>`.split(""), `	
\f\r "&'/=>\``.split("")],
    [`\0	
\f\r "&'/<=>`.split(""), `\0	
\f\r "&'/<=>\``.split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(unquoted)-state>.
  unquoted: [
    [`	
\f\r &>`.split(""), `\0	
\f\r "&'<=>\``.split("")],
    [`\0	
\f\r "&'<=>\``.split(""), `\0	
\f\r "&'<=>\``.split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(single-quoted)-state>.
  single: [
    ["&'".split(""), "\"&'`".split("")],
    ["\0&'".split(""), "\0\"&'`".split("")]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(double-quoted)-state>.
  double: [
    ['"&'.split(""), "\"&'`".split("")],
    ['\0"&'.split(""), "\0\"&'`".split("")]
  ]
};
function mi(e, t, u, n) {
  const s = n.schema, c = s.space === "svg" ? !1 : n.settings.omitOptionalTags;
  let l = s.space === "svg" ? n.settings.closeEmptyElements : n.settings.voids.includes(e.tagName.toLowerCase());
  const f = [];
  let T;
  s.space === "html" && e.tagName === "svg" && (n.schema = me);
  const m = bi(n, e.properties), _ = n.all(
    s.space === "html" && e.tagName === "template" ? e.content : e
  );
  return n.schema = s, _ && (l = !1), (m || !c || !li(e, t, u)) && (f.push("<", e.tagName, m ? " " + m : ""), l && (s.space === "svg" || n.settings.closeSelfClosing) && (T = m.charAt(m.length - 1), (!n.settings.tightSelfClosing || T === "/" || T && T !== '"' && T !== "'") && f.push(" "), f.push("/")), f.push(">")), f.push(_), !l && (!c || !Et(e, t, u)) && f.push("</" + e.tagName + ">"), f.join("");
}
function bi(e, t) {
  const u = [];
  let n = -1, s;
  if (t) {
    for (s in t)
      if (t[s] !== null && t[s] !== void 0) {
        const c = pi(e, s, t[s]);
        c && u.push(c);
      }
  }
  for (; ++n < u.length; ) {
    const c = e.settings.tightAttributes ? u[n].charAt(u[n].length - 1) : void 0;
    n !== u.length - 1 && c !== '"' && c !== "'" && (u[n] += " ");
  }
  return u.join("");
}
function pi(e, t, u) {
  const n = it(e.schema, t), s = e.settings.allowParseErrors && e.schema.space === "html" ? 0 : 1, c = e.settings.allowDangerousCharacters ? 0 : 1;
  let l = e.quote, f;
  if (n.overloadedBoolean && (u === n.attribute || u === "") ? u = !0 : (n.boolean || n.overloadedBoolean && typeof u != "string") && (u = !!u), u == null || u === !1 || typeof u == "number" && Number.isNaN(u))
    return "";
  const T = Z(
    n.attribute,
    Object.assign({}, e.settings.characterReferences, {
      // Always encode without parse errors in non-HTML.
      subset: Ce.name[s][c]
    })
  );
  return u === !0 || (u = Array.isArray(u) ? (n.commaSeparated ? ca : la)(u, {
    padLeft: !e.settings.tightCommaSeparatedLists
  }) : String(u), e.settings.collapseEmptyAttributes && !u) ? T : (e.settings.preferUnquoted && (f = Z(
    u,
    Object.assign({}, e.settings.characterReferences, {
      attribute: !0,
      subset: Ce.unquoted[s][c]
    })
  )), f !== u && (e.settings.quoteSmart && wt(u, l) > wt(u, e.alternative) && (l = e.alternative), f = l + Z(
    u,
    Object.assign({}, e.settings.characterReferences, {
      // Always encode without parse errors in non-HTML.
      subset: (l === "'" ? Ce.single : Ce.double)[s][c],
      attribute: !0
    })
  ) + l), T + (f && "=" + f));
}
const _i = ["<", "&"];
function Xu(e, t, u, n) {
  return u && u.type === "element" && (u.tagName === "script" || u.tagName === "style") ? e.value : Z(
    e.value,
    Object.assign({}, n.settings.characterReferences, {
      subset: _i
    })
  );
}
function Ai(e, t, u, n) {
  return n.settings.allowDangerousHtml ? e.value : Xu(e, t, u, n);
}
function gi(e, t, u, n) {
  return n.all(e);
}
const Ci = Or("type", {
  invalid: Ni,
  unknown: Ii,
  handlers: { comment: Vr, doctype: Kr, element: mi, raw: Ai, root: gi, text: Xu }
});
function Ni(e) {
  throw new Error("Expected node, not `" + e + "`");
}
function Ii(e) {
  const t = (
    /** @type {Nodes} */
    e
  );
  throw new Error("Cannot compile unknown node `" + t.type + "`");
}
const Ri = {}, Si = {}, Li = [];
function Oi(e, t) {
  const u = t || Ri, n = u.quote || '"', s = n === '"' ? "'" : '"';
  if (n !== '"' && n !== "'")
    throw new Error("Invalid quote `" + n + "`, expected `'` or `\"`");
  return {
    one: Di,
    all: xi,
    settings: {
      omitOptionalTags: u.omitOptionalTags || !1,
      allowParseErrors: u.allowParseErrors || !1,
      allowDangerousCharacters: u.allowDangerousCharacters || !1,
      quoteSmart: u.quoteSmart || !1,
      preferUnquoted: u.preferUnquoted || !1,
      tightAttributes: u.tightAttributes || !1,
      upperDoctype: u.upperDoctype || !1,
      tightDoctype: u.tightDoctype || !1,
      bogusComments: u.bogusComments || !1,
      tightCommaSeparatedLists: u.tightCommaSeparatedLists || !1,
      tightSelfClosing: u.tightSelfClosing || !1,
      collapseEmptyAttributes: u.collapseEmptyAttributes || !1,
      allowDangerousHtml: u.allowDangerousHtml || !1,
      voids: u.voids || Lr,
      characterReferences: u.characterReferences || Si,
      closeSelfClosing: u.closeSelfClosing || !1,
      closeEmptyElements: u.closeEmptyElements || !1
    },
    schema: u.space === "svg" ? me : De,
    quote: n,
    alternative: s
  }.one(
    Array.isArray(e) ? { type: "root", children: e } : e,
    void 0,
    void 0
  );
}
function Di(e, t, u) {
  return Ci(e, t, u, this);
}
function xi(e) {
  const t = [], u = e && e.children || Li;
  let n = -1;
  for (; ++n < u.length; )
    t[n] = this.one(u[n], n, e);
  return t.join("");
}
function Pi(e) {
  const t = this, u = { ...t.data("settings"), ...e };
  t.compiler = n;
  function n(s) {
    return Oi(s, u);
  }
}
function Qt(e) {
  if (e)
    throw e;
}
var Se = Object.prototype.hasOwnProperty, Vu = Object.prototype.toString, Wt = Object.defineProperty, Gt = Object.getOwnPropertyDescriptor, Xt = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : Vu.call(t) === "[object Array]";
}, Vt = function(t) {
  if (!t || Vu.call(t) !== "[object Object]")
    return !1;
  var u = Se.call(t, "constructor"), n = t.constructor && t.constructor.prototype && Se.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !u && !n)
    return !1;
  var s;
  for (s in t)
    ;
  return typeof s > "u" || Se.call(t, s);
}, Kt = function(t, u) {
  Wt && u.name === "__proto__" ? Wt(t, u.name, {
    enumerable: !0,
    configurable: !0,
    value: u.newValue,
    writable: !0
  }) : t[u.name] = u.newValue;
}, zt = function(t, u) {
  if (u === "__proto__")
    if (Se.call(t, u)) {
      if (Gt)
        return Gt(t, u).value;
    } else return;
  return t[u];
}, yi = function e() {
  var t, u, n, s, c, l, f = arguments[0], T = 1, m = arguments.length, _ = !1;
  for (typeof f == "boolean" && (_ = f, f = arguments[1] || {}, T = 2), (f == null || typeof f != "object" && typeof f != "function") && (f = {}); T < m; ++T)
    if (t = arguments[T], t != null)
      for (u in t)
        n = zt(f, u), s = zt(t, u), f !== s && (_ && s && (Vt(s) || (c = Xt(s))) ? (c ? (c = !1, l = n && Xt(n) ? n : []) : l = n && Vt(n) ? n : {}, Kt(f, { name: u, newValue: e(_, l, s) })) : typeof s < "u" && Kt(f, { name: u, newValue: s }));
  return f;
};
const We = /* @__PURE__ */ Ju(yi);
function st(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Mi() {
  const e = [], t = { run: u, use: n };
  return t;
  function u(...s) {
    let c = -1;
    const l = s.pop();
    if (typeof l != "function")
      throw new TypeError("Expected function as last argument, not " + l);
    f(null, ...s);
    function f(T, ...m) {
      const _ = e[++c];
      let C = -1;
      if (T) {
        l(T);
        return;
      }
      for (; ++C < s.length; )
        (m[C] === null || m[C] === void 0) && (m[C] = s[C]);
      s = m, _ ? Bi(_, f)(...m) : l(null, ...m);
    }
  }
  function n(s) {
    if (typeof s != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + s
      );
    return e.push(s), t;
  }
}
function Bi(e, t) {
  let u;
  return n;
  function n(...l) {
    const f = e.length > l.length;
    let T;
    f && l.push(s);
    try {
      T = e.apply(this, l);
    } catch (m) {
      const _ = (
        /** @type {Error} */
        m
      );
      if (f && u)
        throw _;
      return s(_);
    }
    f || (T && T.then && typeof T.then == "function" ? T.then(c, s) : T instanceof Error ? s(T) : c(T));
  }
  function s(l, ...f) {
    u || (u = !0, t(l, ...f));
  }
  function c(l) {
    s(null, l);
  }
}
const Ui = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(e) {
    const n = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), s = n[e], c = function() {
      return s.apply(c, arguments);
    };
    return Object.setPrototypeOf(c, n), c;
  }
), ki = {}.hasOwnProperty;
class Tt extends Ui {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Mi();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const t = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new Tt()
    );
    let u = -1;
    for (; ++u < this.attachers.length; ) {
      const n = this.attachers[u];
      t.use(...n);
    }
    return t.data(We(!0, {}, this.namespace)), t;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(t, u) {
    return typeof t == "string" ? arguments.length === 2 ? (Ve("data", this.frozen), this.namespace[t] = u, this) : ki.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Ve("data", this.frozen), this.namespace = t, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const t = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [u, ...n] = this.attachers[this.freezeIndex];
      if (n[0] === !1)
        continue;
      n[0] === !0 && (n[0] = void 0);
      const s = u.call(t, ...n);
      typeof s == "function" && this.transformers.use(s);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(t) {
    this.freeze();
    const u = Ne(t), n = this.parser || this.Parser;
    return Ge("parse", n), n(String(u), u);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(t, u) {
    const n = this;
    return this.freeze(), Ge("process", this.parser || this.Parser), Xe("process", this.compiler || this.Compiler), u ? s(void 0, u) : new Promise(s);
    function s(c, l) {
      const f = Ne(t), T = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        n.parse(f)
      );
      n.run(T, f, function(_, C, D) {
        if (_ || !C || !D)
          return m(_);
        const B = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          C
        ), Q = n.stringify(B, D);
        wi(Q) ? D.value = Q : D.result = Q, m(
          _,
          /** @type {VFileWithOutput<CompileResult>} */
          D
        );
      });
      function m(_, C) {
        _ || !C ? l(_) : c ? c(C) : u(void 0, C);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(t) {
    let u = !1, n;
    return this.freeze(), Ge("processSync", this.parser || this.Parser), Xe("processSync", this.compiler || this.Compiler), this.process(t, s), $t("processSync", "process", u), n;
    function s(c, l) {
      u = !0, Qt(c), n = l;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(t, u, n) {
    jt(t), this.freeze();
    const s = this.transformers;
    return !n && typeof u == "function" && (n = u, u = void 0), n ? c(void 0, n) : new Promise(c);
    function c(l, f) {
      const T = Ne(u);
      s.run(t, T, m);
      function m(_, C, D) {
        const B = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          C || t
        );
        _ ? f(_) : l ? l(B) : n(void 0, B, D);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(t, u) {
    let n = !1, s;
    return this.run(t, u, c), $t("runSync", "run", n), s;
    function c(l, f) {
      Qt(l), s = f, n = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(t, u) {
    this.freeze();
    const n = Ne(u), s = this.compiler || this.Compiler;
    return Xe("stringify", s), jt(t), s(t, n);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(t, ...u) {
    const n = this.attachers, s = this.namespace;
    if (Ve("use", this.frozen), t != null) if (typeof t == "function")
      T(t, u);
    else if (typeof t == "object")
      Array.isArray(t) ? f(t) : l(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function c(m) {
      if (typeof m == "function")
        T(m, []);
      else if (typeof m == "object")
        if (Array.isArray(m)) {
          const [_, ...C] = (
            /** @type {PluginTuple<Array<unknown>>} */
            m
          );
          T(_, C);
        } else
          l(m);
      else
        throw new TypeError("Expected usable value, not `" + m + "`");
    }
    function l(m) {
      if (!("plugins" in m) && !("settings" in m))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      f(m.plugins), m.settings && (s.settings = We(!0, s.settings, m.settings));
    }
    function f(m) {
      let _ = -1;
      if (m != null) if (Array.isArray(m))
        for (; ++_ < m.length; ) {
          const C = m[_];
          c(C);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + m + "`");
    }
    function T(m, _) {
      let C = -1, D = -1;
      for (; ++C < n.length; )
        if (n[C][0] === m) {
          D = C;
          break;
        }
      if (D === -1)
        n.push([m, ..._]);
      else if (_.length > 0) {
        let [B, ...Q] = _;
        const ue = n[D][1];
        st(ue) && st(B) && (B = We(!0, ue, B)), n[D] = [m, B, ...Q];
      }
    }
  }
}
const Hi = new Tt().freeze();
function Ge(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Xe(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Ve(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function jt(e) {
  if (!st(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function $t(e, t, u) {
  if (!u)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function Ne(e) {
  return Fi(e) ? e : new at(e);
}
function Fi(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function wi(e) {
  return typeof e == "string" || vi(e);
}
function vi(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Wi = Hi().use(Sr).use(Pi).freeze();
export {
  Wi as r
};

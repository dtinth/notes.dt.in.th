import { r as Ee, c as Pt, v as $s, a as Mo, s as Oi, d as Wt, p as yt, t as hn, o as qe, b as Xe, e as Nt, w as Ys, i as at, f as Di, g as Ft, h as Mi, j as jo, k as fs, l as gr, m as Le, n as vt, u as Re, q as _r, x as jt, F as dn, y as Qr, z as Kr, A as Fo, B as Zr, C as mn, D as ji, T as Fi, M as $i, E as Bi, G as qi, H as Ui, I as Vi, J as Wi, K as Hi, L as $o, N as zi, O as eo, P as Gi, Q as Bo, R as qo } from "./vue_X8qYN8tJ.js";
const gn = Symbol("store");
var ht = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Xi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var We = Uint8Array, nt = Uint16Array, yr = Int32Array, ps = new We([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]), hs = new We([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]), Qs = new We([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Uo = function(e, n) {
  for (var s = new nt(31), r = 0; r < 31; ++r)
    s[r] = n += 1 << e[r - 1];
  for (var i = new yr(s[30]), r = 1; r < 30; ++r)
    for (var a = s[r]; a < s[r + 1]; ++a)
      i[a] = a - s[r] << 5 | r;
  return { b: s, r: i };
}, Vo = Uo(ps, 2), Wo = Vo.b, Ks = Vo.r;
Wo[28] = 258, Ks[258] = 28;
var Ho = Uo(hs, 0), Ji = Ho.b, to = Ho.r, Zs = new nt(32768);
for (var Oe = 0; Oe < 32768; ++Oe) {
  var Mt = (Oe & 43690) >> 1 | (Oe & 21845) << 1;
  Mt = (Mt & 52428) >> 2 | (Mt & 13107) << 2, Mt = (Mt & 61680) >> 4 | (Mt & 3855) << 4, Zs[Oe] = ((Mt & 65280) >> 8 | (Mt & 255) << 8) >> 1;
}
var bt = function(e, n, s) {
  for (var r = e.length, i = 0, a = new nt(n); i < r; ++i)
    e[i] && ++a[e[i] - 1];
  var l = new nt(n);
  for (i = 1; i < n; ++i)
    l[i] = l[i - 1] + a[i - 1] << 1;
  var f;
  if (s) {
    f = new nt(1 << n);
    var m = 15 - n;
    for (i = 0; i < r; ++i)
      if (e[i])
        for (var p = i << 4 | e[i], h = n - e[i], k = l[e[i] - 1]++ << h, I = k | (1 << h) - 1; k <= I; ++k)
          f[Zs[k] >> m] = p;
  } else
    for (f = new nt(r), i = 0; i < r; ++i)
      e[i] && (f[i] = Zs[l[e[i] - 1]++] >> 15 - e[i]);
  return f;
}, Vt = new We(288);
for (var Oe = 0; Oe < 144; ++Oe)
  Vt[Oe] = 8;
for (var Oe = 144; Oe < 256; ++Oe)
  Vt[Oe] = 9;
for (var Oe = 256; Oe < 280; ++Oe)
  Vt[Oe] = 7;
for (var Oe = 280; Oe < 288; ++Oe)
  Vt[Oe] = 8;
var Ln = new We(32);
for (var Oe = 0; Oe < 32; ++Oe)
  Ln[Oe] = 5;
var Yi = /* @__PURE__ */ bt(Vt, 9, 0), Qi = /* @__PURE__ */ bt(Vt, 9, 1), Ki = /* @__PURE__ */ bt(Ln, 5, 0), Zi = /* @__PURE__ */ bt(Ln, 5, 1), Bs = function(e) {
  for (var n = e[0], s = 1; s < e.length; ++s)
    e[s] > n && (n = e[s]);
  return n;
}, ft = function(e, n, s) {
  var r = n / 8 | 0;
  return (e[r] | e[r + 1] << 8) >> (n & 7) & s;
}, qs = function(e, n) {
  var s = n / 8 | 0;
  return (e[s] | e[s + 1] << 8 | e[s + 2] << 16) >> (n & 7);
}, vr = function(e) {
  return (e + 7) / 8 | 0;
}, ds = function(e, n, s) {
  return (n == null || n < 0) && (n = 0), (s == null || s > e.length) && (s = e.length), new We(e.subarray(n, s));
}, ea = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
], it = function(e, n, s) {
  var r = new Error(n || ea[e]);
  if (r.code = e, Error.captureStackTrace && Error.captureStackTrace(r, it), !s)
    throw r;
  return r;
}, ta = function(e, n, s, r) {
  var i = e.length, a = 0;
  if (!i || n.f && !n.l)
    return s || new We(0);
  var l = !s, f = l || n.i != 2, m = n.i;
  l && (s = new We(i * 3));
  var p = function(Q) {
    var ae = s.length;
    if (Q > ae) {
      var me = new We(Math.max(ae * 2, Q));
      me.set(s), s = me;
    }
  }, h = n.f || 0, k = n.p || 0, I = n.b || 0, y = n.l, b = n.d, w = n.m, B = n.n, j = i * 8;
  do {
    if (!y) {
      h = ft(e, k, 1);
      var x = ft(e, k + 1, 3);
      if (k += 3, x)
        if (x == 1)
          y = Qi, b = Zi, w = 9, B = 5;
        else if (x == 2) {
          var X = ft(e, k, 31) + 257, F = ft(e, k + 10, 15) + 4, W = X + ft(e, k + 5, 31) + 1;
          k += 14;
          for (var q = new We(W), se = new We(19), ee = 0; ee < F; ++ee)
            se[Qs[ee]] = ft(e, k + ee * 3, 7);
          k += F * 3;
          for (var ue = Bs(se), Te = (1 << ue) - 1, _e = bt(se, ue, 1), ee = 0; ee < W; ) {
            var ve = _e[ft(e, k, Te)];
            k += ve & 15;
            var P = ve >> 4;
            if (P < 16)
              q[ee++] = P;
            else {
              var V = 0, g = 0;
              for (P == 16 ? (g = 3 + ft(e, k, 3), k += 2, V = q[ee - 1]) : P == 17 ? (g = 3 + ft(e, k, 7), k += 3) : P == 18 && (g = 11 + ft(e, k, 127), k += 7); g--; )
                q[ee++] = V;
            }
          }
          var v = q.subarray(0, X), R = q.subarray(X);
          w = Bs(v), B = Bs(R), y = bt(v, w, 1), b = bt(R, B, 1);
        } else
          it(1);
      else {
        var P = vr(k) + 4, N = e[P - 4] | e[P - 3] << 8, D = P + N;
        if (D > i) {
          m && it(0);
          break;
        }
        f && p(I + N), s.set(e.subarray(P, D), I), n.b = I += N, n.p = k = D * 8, n.f = h;
        continue;
      }
      if (k > j) {
        m && it(0);
        break;
      }
    }
    f && p(I + 131072);
    for (var G = (1 << w) - 1, Y = (1 << B) - 1, te = k; ; te = k) {
      var V = y[qs(e, k) & G], oe = V >> 4;
      if (k += V & 15, k > j) {
        m && it(0);
        break;
      }
      if (V || it(2), oe < 256)
        s[I++] = oe;
      else if (oe == 256) {
        te = k, y = null;
        break;
      } else {
        var de = oe - 254;
        if (oe > 264) {
          var ee = oe - 257, _ = ps[ee];
          de = ft(e, k, (1 << _) - 1) + Wo[ee], k += _;
        }
        var C = b[qs(e, k) & Y], L = C >> 4;
        C || it(3), k += C & 15;
        var R = Ji[L];
        if (L > 3) {
          var _ = hs[L];
          R += qs(e, k) & (1 << _) - 1, k += _;
        }
        if (k > j) {
          m && it(0);
          break;
        }
        f && p(I + 131072);
        var M = I + de;
        if (I < R) {
          var H = a - R, J = Math.min(R, M);
          for (H + I < 0 && it(3); I < J; ++I)
            s[I] = r[H + I];
        }
        for (; I < M; ++I)
          s[I] = s[I - R];
      }
    }
    n.l = y, n.p = te, n.b = I, n.f = h, y && (h = 1, n.m = w, n.d = b, n.n = B);
  } while (!h);
  return I != s.length && l ? ds(s, 0, I) : s.subarray(0, I);
}, At = function(e, n, s) {
  s <<= n & 7;
  var r = n / 8 | 0;
  e[r] |= s, e[r + 1] |= s >> 8;
}, xn = function(e, n, s) {
  s <<= n & 7;
  var r = n / 8 | 0;
  e[r] |= s, e[r + 1] |= s >> 8, e[r + 2] |= s >> 16;
}, Us = function(e, n) {
  for (var s = [], r = 0; r < e.length; ++r)
    e[r] && s.push({ s: r, f: e[r] });
  var i = s.length, a = s.slice();
  if (!i)
    return { t: Go, l: 0 };
  if (i == 1) {
    var l = new We(s[0].s + 1);
    return l[s[0].s] = 1, { t: l, l: 1 };
  }
  s.sort(function(D, X) {
    return D.f - X.f;
  }), s.push({ s: -1, f: 25001 });
  var f = s[0], m = s[1], p = 0, h = 1, k = 2;
  for (s[0] = { s: -1, f: f.f + m.f, l: f, r: m }; h != i - 1; )
    f = s[s[p].f < s[k].f ? p++ : k++], m = s[p != h && s[p].f < s[k].f ? p++ : k++], s[h++] = { s: -1, f: f.f + m.f, l: f, r: m };
  for (var I = a[0].s, r = 1; r < i; ++r)
    a[r].s > I && (I = a[r].s);
  var y = new nt(I + 1), b = er(s[h - 1], y, 0);
  if (b > n) {
    var r = 0, w = 0, B = b - n, j = 1 << B;
    for (a.sort(function(X, F) {
      return y[F.s] - y[X.s] || X.f - F.f;
    }); r < i; ++r) {
      var x = a[r].s;
      if (y[x] > n)
        w += j - (1 << b - y[x]), y[x] = n;
      else
        break;
    }
    for (w >>= B; w > 0; ) {
      var P = a[r].s;
      y[P] < n ? w -= 1 << n - y[P]++ - 1 : ++r;
    }
    for (; r >= 0 && w; --r) {
      var N = a[r].s;
      y[N] == n && (--y[N], ++w);
    }
    b = n;
  }
  return { t: new We(y), l: b };
}, er = function(e, n, s) {
  return e.s == -1 ? Math.max(er(e.l, n, s + 1), er(e.r, n, s + 1)) : n[e.s] = s;
}, no = function(e) {
  for (var n = e.length; n && !e[--n]; )
    ;
  for (var s = new nt(++n), r = 0, i = e[0], a = 1, l = function(m) {
    s[r++] = m;
  }, f = 1; f <= n; ++f)
    if (e[f] == i && f != n)
      ++a;
    else {
      if (!i && a > 2) {
        for (; a > 138; a -= 138)
          l(32754);
        a > 2 && (l(a > 10 ? a - 11 << 5 | 28690 : a - 3 << 5 | 12305), a = 0);
      } else if (a > 3) {
        for (l(i), --a; a > 6; a -= 6)
          l(8304);
        a > 2 && (l(a - 3 << 5 | 8208), a = 0);
      }
      for (; a--; )
        l(i);
      a = 1, i = e[f];
    }
  return { c: s.subarray(0, r), n };
}, bn = function(e, n) {
  for (var s = 0, r = 0; r < n.length; ++r)
    s += e[r] * n[r];
  return s;
}, zo = function(e, n, s) {
  var r = s.length, i = vr(n + 2);
  e[i] = r & 255, e[i + 1] = r >> 8, e[i + 2] = e[i] ^ 255, e[i + 3] = e[i + 1] ^ 255;
  for (var a = 0; a < r; ++a)
    e[i + a + 4] = s[a];
  return (i + 4 + r) * 8;
}, so = function(e, n, s, r, i, a, l, f, m, p, h) {
  At(n, h++, s), ++i[256];
  for (var k = Us(i, 15), I = k.t, y = k.l, b = Us(a, 15), w = b.t, B = b.l, j = no(I), x = j.c, P = j.n, N = no(w), D = N.c, X = N.n, F = new nt(19), W = 0; W < x.length; ++W)
    ++F[x[W] & 31];
  for (var W = 0; W < D.length; ++W)
    ++F[D[W] & 31];
  for (var q = Us(F, 7), se = q.t, ee = q.l, ue = 19; ue > 4 && !se[Qs[ue - 1]]; --ue)
    ;
  var Te = p + 5 << 3, _e = bn(i, Vt) + bn(a, Ln) + l, ve = bn(i, I) + bn(a, w) + l + 14 + 3 * ue + bn(F, se) + 2 * F[16] + 3 * F[17] + 7 * F[18];
  if (m >= 0 && Te <= _e && Te <= ve)
    return zo(n, h, e.subarray(m, m + p));
  var V, g, v, R;
  if (At(n, h, 1 + (ve < _e)), h += 2, ve < _e) {
    V = bt(I, y, 0), g = I, v = bt(w, B, 0), R = w;
    var G = bt(se, ee, 0);
    At(n, h, P - 257), At(n, h + 5, X - 1), At(n, h + 10, ue - 4), h += 14;
    for (var W = 0; W < ue; ++W)
      At(n, h + 3 * W, se[Qs[W]]);
    h += 3 * ue;
    for (var Y = [x, D], te = 0; te < 2; ++te)
      for (var oe = Y[te], W = 0; W < oe.length; ++W) {
        var de = oe[W] & 31;
        At(n, h, G[de]), h += se[de], de > 15 && (At(n, h, oe[W] >> 5 & 127), h += oe[W] >> 12);
      }
  } else
    V = Yi, g = Vt, v = Ki, R = Ln;
  for (var W = 0; W < f; ++W) {
    var _ = r[W];
    if (_ > 255) {
      var de = _ >> 18 & 31;
      xn(n, h, V[de + 257]), h += g[de + 257], de > 7 && (At(n, h, _ >> 23 & 31), h += ps[de]);
      var C = _ & 31;
      xn(n, h, v[C]), h += R[C], C > 3 && (xn(n, h, _ >> 5 & 8191), h += hs[C]);
    } else
      xn(n, h, V[_]), h += g[_];
  }
  return xn(n, h, V[256]), h + g[256];
}, na = /* @__PURE__ */ new yr([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Go = /* @__PURE__ */ new We(0), sa = function(e, n, s, r, i, a) {
  var l = a.z || e.length, f = new We(r + l + 5 * (1 + Math.ceil(l / 7e3)) + i), m = f.subarray(r, f.length - i), p = a.l, h = (a.r || 0) & 7;
  if (n) {
    h && (m[0] = a.r >> 3);
    for (var k = na[n - 1], I = k >> 13, y = k & 8191, b = (1 << s) - 1, w = a.p || new nt(32768), B = a.h || new nt(b + 1), j = Math.ceil(s / 3), x = 2 * j, P = function(ye) {
      return (e[ye] ^ e[ye + 1] << j ^ e[ye + 2] << x) & b;
    }, N = new yr(25e3), D = new nt(288), X = new nt(32), F = 0, W = 0, q = a.i || 0, se = 0, ee = a.w || 0, ue = 0; q + 2 < l; ++q) {
      var Te = P(q), _e = q & 32767, ve = B[Te];
      if (w[_e] = ve, B[Te] = _e, ee <= q) {
        var V = l - q;
        if ((F > 7e3 || se > 24576) && (V > 423 || !p)) {
          h = so(e, m, 0, N, D, X, W, se, ue, q - ue, h), se = F = W = 0, ue = q;
          for (var g = 0; g < 286; ++g)
            D[g] = 0;
          for (var g = 0; g < 30; ++g)
            X[g] = 0;
        }
        var v = 2, R = 0, G = y, Y = _e - ve & 32767;
        if (V > 2 && Te == P(q - Y))
          for (var te = Math.min(I, V) - 1, oe = Math.min(32767, q), de = Math.min(258, V); Y <= oe && --G && _e != ve; ) {
            if (e[q + v] == e[q + v - Y]) {
              for (var _ = 0; _ < de && e[q + _] == e[q + _ - Y]; ++_)
                ;
              if (_ > v) {
                if (v = _, R = Y, _ > te)
                  break;
                for (var C = Math.min(Y, _ - 2), L = 0, g = 0; g < C; ++g) {
                  var M = q - Y + g & 32767, H = w[M], J = M - H & 32767;
                  J > L && (L = J, ve = M);
                }
              }
            }
            _e = ve, ve = w[_e], Y += _e - ve & 32767;
          }
        if (R) {
          N[se++] = 268435456 | Ks[v] << 18 | to[R];
          var Q = Ks[v] & 31, ae = to[R] & 31;
          W += ps[Q] + hs[ae], ++D[257 + Q], ++X[ae], ee = q + v, ++F;
        } else
          N[se++] = e[q], ++D[e[q]];
      }
    }
    for (q = Math.max(q, ee); q < l; ++q)
      N[se++] = e[q], ++D[e[q]];
    h = so(e, m, p, N, D, X, W, se, ue, q - ue, h), p || (a.r = h & 7 | m[h / 8 | 0] << 3, h -= 7, a.h = B, a.p = w, a.i = q, a.w = ee);
  } else {
    for (var q = a.w || 0; q < l + p; q += 65535) {
      var me = q + 65535;
      me >= l && (m[h / 8 | 0] = p, me = l), h = zo(m, h + 1, e.subarray(q, me));
    }
    a.i = l;
  }
  return ds(f, 0, r + vr(h) + i);
}, Xo = function() {
  var e = 1, n = 0;
  return {
    p: function(s) {
      for (var r = e, i = n, a = s.length | 0, l = 0; l != a; ) {
        for (var f = Math.min(l + 2655, a); l < f; ++l)
          i += r += s[l];
        r = (r & 65535) + 15 * (r >> 16), i = (i & 65535) + 15 * (i >> 16);
      }
      e = r, n = i;
    },
    d: function() {
      return e %= 65521, n %= 65521, (e & 255) << 24 | (e & 65280) << 8 | (n & 255) << 8 | n >> 8;
    }
  };
}, ra = function(e, n, s, r, i) {
  if (!i && (i = { l: 1 }, n.dictionary)) {
    var a = n.dictionary.subarray(-32768), l = new We(a.length + e.length);
    l.set(a), l.set(e, a.length), e = l, i.w = a.length;
  }
  return sa(e, n.level == null ? 6 : n.level, n.mem == null ? i.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 20 : 12 + n.mem, s, r, i);
}, Jo = function(e, n, s) {
  for (; s; ++n)
    e[n] = s, s >>>= 8;
}, oa = function(e, n) {
  var s = n.level, r = s == 0 ? 0 : s < 6 ? 1 : s == 9 ? 3 : 2;
  if (e[0] = 120, e[1] = r << 6 | (n.dictionary && 32), e[1] |= 31 - (e[0] << 8 | e[1]) % 31, n.dictionary) {
    var i = Xo();
    i.p(n.dictionary), Jo(e, 2, i.d());
  }
}, ia = function(e, n) {
  return ((e[0] & 15) != 8 || e[0] >> 4 > 7 || (e[0] << 8 | e[1]) % 31) && it(6, "invalid zlib data"), (e[1] >> 5 & 1) == +!n && it(6, "invalid zlib data: " + (e[1] & 32 ? "need" : "unexpected") + " dictionary"), (e[1] >> 3 & 4) + 2;
};
function aa(e, n) {
  n || (n = {});
  var s = Xo();
  s.p(e);
  var r = ra(e, n, n.dictionary ? 6 : 2, 4);
  return oa(r, n), Jo(r, r.length - 4, s.d()), r;
}
function ca(e, n) {
  return ta(e.subarray(ia(e, n), -4), { i: 2 }, n, n);
}
var ro = typeof TextEncoder < "u" && /* @__PURE__ */ new TextEncoder(), tr = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), la = 0;
try {
  tr.decode(Go, { stream: !0 }), la = 1;
} catch {
}
var ua = function(e) {
  for (var n = "", s = 0; ; ) {
    var r = e[s++], i = (r > 127) + (r > 223) + (r > 239);
    if (s + i > e.length)
      return { s: n, r: ds(e, s - 1) };
    i ? i == 3 ? (r = ((r & 15) << 18 | (e[s++] & 63) << 12 | (e[s++] & 63) << 6 | e[s++] & 63) - 65536, n += String.fromCharCode(55296 | r >> 10, 56320 | r & 1023)) : i & 1 ? n += String.fromCharCode((r & 31) << 6 | e[s++] & 63) : n += String.fromCharCode((r & 15) << 12 | (e[s++] & 63) << 6 | e[s++] & 63) : n += String.fromCharCode(r);
  }
};
function Yo(e, n) {
  if (n) {
    for (var s = new We(e.length), r = 0; r < e.length; ++r)
      s[r] = e.charCodeAt(r);
    return s;
  }
  if (ro)
    return ro.encode(e);
  for (var i = e.length, a = new We(e.length + (e.length >> 1)), l = 0, f = function(h) {
    a[l++] = h;
  }, r = 0; r < i; ++r) {
    if (l + 5 > a.length) {
      var m = new We(l + 8 + (i - r << 1));
      m.set(a), a = m;
    }
    var p = e.charCodeAt(r);
    p < 128 || n ? f(p) : p < 2048 ? (f(192 | p >> 6), f(128 | p & 63)) : p > 55295 && p < 57344 ? (p = 65536 + (p & 1047552) | e.charCodeAt(++r) & 1023, f(240 | p >> 18), f(128 | p >> 12 & 63), f(128 | p >> 6 & 63), f(128 | p & 63)) : (f(224 | p >> 12), f(128 | p >> 6 & 63), f(128 | p & 63));
  }
  return ds(a, 0, l);
}
function Qo(e, n) {
  if (n) {
    for (var s = "", r = 0; r < e.length; r += 16384)
      s += String.fromCharCode.apply(null, e.subarray(r, r + 16384));
    return s;
  } else {
    if (tr)
      return tr.decode(e);
    var i = ua(e), a = i.s, s = i.r;
    return s.length && it(8), a;
  }
}
function fa(e, n = 100) {
  let s;
  return (...r) => {
    s && clearTimeout(s), s = setTimeout(() => {
      e(...r);
    }, n);
  };
}
function pa(e) {
  const n = Yo(e), s = aa(n, { level: 9 }), r = Qo(s, !0);
  return btoa(r);
}
function ha(e) {
  const n = atob(e);
  if (n.startsWith("xÚ")) {
    const s = Yo(n, !0), r = ca(s);
    return Qo(r);
  }
  return decodeURIComponent(escape(n));
}
const da = /* @__PURE__ */ Wt({
  __name: "SplitPane",
  props: {
    layout: {}
  },
  setup(e) {
    const n = e, s = Pt(() => n.layout === "vertical"), r = Ee(), i = at("preview-ref"), a = at(gn), l = hn(a, "showOutput"), f = Mo({
      dragging: !1,
      split: 50,
      viewHeight: 0,
      viewWidth: 0
    }), m = Pt(() => {
      const { split: w } = f;
      return w < 20 ? 20 : w > 80 ? 80 : w;
    });
    let p = 0, h = 0;
    function k(w) {
      f.dragging = !0, p = s.value ? w.pageY : w.pageX, h = m.value, b();
    }
    function I(w) {
      if (f.dragging) {
        const B = s.value ? w.pageY : w.pageX, j = s.value ? r.value.offsetHeight : r.value.offsetWidth, x = B - p;
        f.split = h + +(x / j * 100).toFixed(2), b();
      }
    }
    function y() {
      f.dragging = !1;
    }
    function b() {
      const w = ji(i);
      f.viewHeight = w.offsetHeight, f.viewWidth = w.offsetWidth;
    }
    return (w, B) => (qe(), Xe("div", {
      ref_key: "container",
      ref: r,
      class: vt(["split-pane", {
        dragging: f.dragging,
        "show-output": l.value,
        vertical: s.value
      }]),
      onMousemove: I,
      onMouseup: y,
      onMouseleave: y
    }, [
      Le("div", {
        class: "left",
        style: Zr({ [s.value ? "height" : "width"]: m.value + "%" })
      }, [
        Kr(w.$slots, "left", {}, void 0, !0),
        Le("div", {
          class: "dragger",
          onMousedown: Fo(k, ["prevent"])
        }, null, 32)
      ], 4),
      Le("div", {
        class: "right",
        style: Zr({ [s.value ? "height" : "width"]: 100 - m.value + "%" })
      }, [
        fs(Le("div", { class: "view-size" }, mn(`${f.viewWidth}px x ${f.viewHeight}px`), 513), [
          [gr, f.dragging]
        ]),
        Kr(w.$slots, "right", {}, void 0, !0)
      ], 4),
      Le("button", {
        class: "toggler",
        onClick: B[0] || (B[0] = (j) => l.value = !l.value)
      }, mn(l.value ? "< Code" : "Output >"), 1)
    ], 34));
  }
}), nn = (e, n) => {
  const s = e.__vccOpts || e;
  for (const [r, i] of n)
    s[r] = i;
  return s;
}, ma = /* @__PURE__ */ nn(da, [["__scopeId", "data-v-01fce165"]]), ka = /* @__PURE__ */ Wt({
  __name: "Message",
  props: {
    err: {},
    warn: {}
  },
  setup(e) {
    const n = e, s = Ee(!1);
    Ft(
      () => [n.err, n.warn],
      () => {
        s.value = !1;
      }
    );
    function r(i) {
      if (typeof i == "string")
        return i;
      {
        let a = i.message;
        const l = i.loc;
        return l && l.start && (a = `(${l.start.line}:${l.start.column}) ` + a), a;
      }
    }
    return (i, a) => (qe(), _r(Fi, { name: "fade" }, {
      default: Ys(() => [
        !s.value && (i.err || i.warn) ? (qe(), Xe("div", {
          key: 0,
          class: vt(["msg", i.err ? "err" : "warn"])
        }, [
          Le("pre", null, mn(r(i.err || i.warn)), 1),
          Le("button", {
            class: "dismiss",
            onClick: a[0] || (a[0] = (l) => s.value = !0)
          }, "✕")
        ], 2)) : jt("", !0)
      ]),
      _: 1
    }));
  }
}), nr = /* @__PURE__ */ nn(ka, [["__scopeId", "data-v-b80ebbc9"]]), ga = `<!doctype html>
<html>
  <head>
    <style>
      html.dark {
        color-scheme: dark;
      }
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
    </style>
    <!-- PREVIEW-OPTIONS-HEAD-HTML -->
    <script>
      ;(() => {
        let scriptEls = []

        window.process = { env: {} }
        window.__modules__ = {}

        window.__export__ = (mod, key, get) => {
          Object.defineProperty(mod, key, {
            enumerable: true,
            configurable: true,
            get,
          })
        }

        window.__dynamic_import__ = (key) => {
          return Promise.resolve(window.__modules__[key])
        }

        async function handle_message(ev) {
          let { action, cmd_id } = ev.data
          const send_message = (payload) =>
            parent.postMessage({ ...payload }, ev.origin)
          const send_reply = (payload) => send_message({ ...payload, cmd_id })
          const send_ok = () => send_reply({ action: 'cmd_ok' })
          const send_error = (message, stack) =>
            send_reply({ action: 'cmd_error', message, stack })

          if (action === 'eval') {
            try {
              if (scriptEls.length) {
                scriptEls.forEach((el) => {
                  document.head.removeChild(el)
                })
                scriptEls.length = 0
              }

              let { script: scripts } = ev.data.args
              if (typeof scripts === 'string') scripts = [scripts]

              for (const script of scripts) {
                const scriptEl = document.createElement('script')
                scriptEl.setAttribute('type', 'module')
                // send ok in the module script to ensure sequential evaluation
                // of multiple proxy.eval() calls
                const done = new Promise((resolve) => {
                  window.__next__ = resolve
                })
                scriptEl.innerHTML = script + \`\\nwindow.__next__()\`
                document.head.appendChild(scriptEl)
                scriptEl.onerror = (err) => send_error(err.message, err.stack)
                scriptEls.push(scriptEl)
                await done
              }
              send_ok()
            } catch (e) {
              send_error(e.message, e.stack)
            }
          }

          if (action === 'catch_clicks') {
            try {
              const top_origin = ev.origin
              document.body.addEventListener('click', (event) => {
                if (event.which !== 1) return
                if (event.metaKey || event.ctrlKey || event.shiftKey) return
                if (event.defaultPrevented) return

                // ensure target is a link
                let el = event.target
                while (el && el.nodeName !== 'A') el = el.parentNode
                if (!el || el.nodeName !== 'A') return

                if (
                  el.hasAttribute('download') ||
                  el.getAttribute('rel') === 'external' ||
                  el.target ||
                  el.href.startsWith('javascript:') ||
                  !el.href
                )
                  return

                event.preventDefault()

                if (el.href.startsWith(top_origin)) {
                  const url = new URL(el.href)
                  if (url.hash[0] === '#') {
                    window.location.hash = url.hash
                    return
                  }
                }

                window.open(el.href, '_blank')
              })
              send_ok()
            } catch (e) {
              send_error(e.message, e.stack)
            }
          }
        }

        window.addEventListener('message', handle_message, false)

        window.onerror = function (msg, url, lineNo, columnNo, error) {
          // ignore errors from import map polyfill - these are necessary for
          // it to detect browser support
          if (msg.includes('module specifier “vue”')) {
            // firefox only error, ignore
            return false
          }
          if (msg.includes("Module specifier, 'vue")) {
            // Safari only
            return false
          }
          try {
            parent.postMessage({ action: 'error', value: error }, '*')
          } catch (e) {
            parent.postMessage({ action: 'error', value: msg }, '*')
          }
        }

        window.addEventListener('unhandledrejection', (event) => {
          if (
            event.reason.message &&
            event.reason.message.includes('Cross-origin')
          ) {
            event.preventDefault()
            return
          }
          try {
            parent.postMessage(
              { action: 'unhandledrejection', value: event.reason },
              '*',
            )
          } catch (e) {
            parent.postMessage(
              { action: 'unhandledrejection', value: event.reason.message },
              '*',
            )
          }
        })

        let previous = { level: null, args: null }

        ;['clear', 'log', 'info', 'dir', 'warn', 'error', 'table'].forEach(
          (level) => {
            const original = console[level]
            console[level] = (...args) => {
              const msg = args[0]
              if (typeof msg === 'string') {
                if (
                  msg.includes('You are running a development build of Vue') ||
                  msg.includes('You are running the esm-bundler build of Vue')
                ) {
                  return
                }
              }

              original(...args)

              const stringifiedArgs = stringify(args)
              if (
                previous.level === level &&
                previous.args &&
                previous.args === stringifiedArgs
              ) {
                parent.postMessage(
                  { action: 'console', level, duplicate: true },
                  '*',
                )
              } else {
                previous = { level, args: stringifiedArgs }

                try {
                  parent.postMessage({ action: 'console', level, args }, '*')
                } catch (err) {
                  parent.postMessage(
                    { action: 'console', level, args: args.map(toString) },
                    '*',
                  )
                }
              }
            }
          },
        )
        ;[
          { method: 'group', action: 'console_group' },
          { method: 'groupEnd', action: 'console_group_end' },
          { method: 'groupCollapsed', action: 'console_group_collapsed' },
        ].forEach((group_action) => {
          const original = console[group_action.method]
          console[group_action.method] = (label) => {
            parent.postMessage({ action: group_action.action, label }, '*')

            original(label)
          }
        })

        const timers = new Map()
        const original_time = console.time
        const original_timelog = console.timeLog
        const original_timeend = console.timeEnd

        console.time = (label = 'default') => {
          original_time(label)
          timers.set(label, performance.now())
        }
        console.timeLog = (label = 'default') => {
          original_timelog(label)
          const now = performance.now()
          if (timers.has(label)) {
            parent.postMessage(
              {
                action: 'console',
                level: 'system-log',
                args: [\`\${label}: \${now - timers.get(label)}ms\`],
              },
              '*',
            )
          } else {
            parent.postMessage(
              {
                action: 'console',
                level: 'system-warn',
                args: [\`Timer '\${label}' does not exist\`],
              },
              '*',
            )
          }
        }
        console.timeEnd = (label = 'default') => {
          original_timeend(label)
          const now = performance.now()
          if (timers.has(label)) {
            parent.postMessage(
              {
                action: 'console',
                level: 'system-log',
                args: [\`\${label}: \${now - timers.get(label)}ms\`],
              },
              '*',
            )
          } else {
            parent.postMessage(
              {
                action: 'console',
                level: 'system-warn',
                args: [\`Timer '\${label}' does not exist\`],
              },
              '*',
            )
          }
          timers.delete(label)
        }

        const original_assert = console.assert
        console.assert = (condition, ...args) => {
          if (condition) {
            const stack = new Error().stack
            parent.postMessage(
              { action: 'console', level: 'assert', args, stack },
              '*',
            )
          }
          original_assert(condition, ...args)
        }

        const counter = new Map()
        const original_count = console.count
        const original_countreset = console.countReset

        console.count = (label = 'default') => {
          counter.set(label, (counter.get(label) || 0) + 1)
          parent.postMessage(
            {
              action: 'console',
              level: 'system-log',
              args: \`\${label}: \${counter.get(label)}\`,
            },
            '*',
          )
          original_count(label)
        }

        console.countReset = (label = 'default') => {
          if (counter.has(label)) {
            counter.set(label, 0)
          } else {
            parent.postMessage(
              {
                action: 'console',
                level: 'system-warn',
                args: \`Count for '\${label}' does not exist\`,
              },
              '*',
            )
          }
          original_countreset(label)
        }

        const original_trace = console.trace

        console.trace = (...args) => {
          const stack = new Error().stack
          parent.postMessage(
            { action: 'console', level: 'trace', args, stack },
            '*',
          )
          original_trace(...args)
        }

        function toString(value) {
          if (value instanceof Error) {
            return value.message
          }
          for (const fn of [
            String,
            (v) => Object.prototype.toString.call(v),
            (v) => typeof v,
          ]) {
            try {
              return fn(value)
            } catch (err) {}
          }
        }

        function isComponentProxy(value) {
          return (
            value &&
            typeof value === 'object' &&
            value.__v_skip === true &&
            typeof value.$nextTick === 'function' &&
            value.$ &&
            value._
          )
        }

        function stringify(args) {
          try {
            return JSON.stringify(args, (key, value) => {
              return isComponentProxy(value) ? '{component proxy}' : value
            })
          } catch (error) {
            return null
          }
        }
      })()
    <\/script>

    <!-- ES Module Shims: Import maps polyfill for modules browsers without import maps support (all except Chrome 89+) -->
    <script
      async
      src="https://cdn.jsdelivr.net/npm/es-module-shims@1.5.18/dist/es-module-shims.wasm.js"
    ><\/script>
    <script type="importmap">
      <!--IMPORT_MAP-->
    <\/script>
  </head>
  <body>
    <!--PREVIEW-OPTIONS-PLACEHOLDER-HTML-->
  </body>
</html>
`;
let _a = 1;
class ya {
  constructor(n, s) {
    this.iframe = n, this.handlers = s, this.pending_cmds = /* @__PURE__ */ new Map(), this.handle_event = (r) => this.handle_repl_message(r), window.addEventListener("message", this.handle_event, !1);
  }
  destroy() {
    window.removeEventListener("message", this.handle_event);
  }
  iframe_command(n, s) {
    return new Promise((r, i) => {
      const a = _a++;
      this.pending_cmds.set(a, { resolve: r, reject: i }), this.iframe.contentWindow.postMessage({ action: n, cmd_id: a, args: s }, "*");
    });
  }
  handle_command_message(n) {
    let s = n.action, r = n.cmd_id, i = this.pending_cmds.get(r);
    if (i) {
      if (this.pending_cmds.delete(r), s === "cmd_error") {
        let { message: a, stack: l } = n, f = new Error(a);
        f.stack = l, i.reject(f);
      }
      s === "cmd_ok" && i.resolve(n.args);
    } else s !== "cmd_error" && s !== "cmd_ok" && console.error("command not found", r, n, [
      ...this.pending_cmds.keys()
    ]);
  }
  handle_repl_message(n) {
    if (n.source !== this.iframe.contentWindow) return;
    const { action: s, args: r } = n.data;
    switch (s) {
      case "cmd_error":
      case "cmd_ok":
        return this.handle_command_message(n.data);
      case "fetch_progress":
        return this.handlers.on_fetch_progress(r.remaining);
      case "error":
        return this.handlers.on_error(n.data);
      case "unhandledrejection":
        return this.handlers.on_unhandled_rejection(n.data);
      case "console":
        return this.handlers.on_console(n.data);
      case "console_group":
        return this.handlers.on_console_group(n.data);
      case "console_group_collapsed":
        return this.handlers.on_console_group_collapsed(n.data);
      case "console_group_end":
        return this.handlers.on_console_group_end(n.data);
    }
  }
  eval(n) {
    return this.iframe_command("eval", { script: n });
  }
  handle_links() {
    return this.iframe_command("catch_clicks", {});
  }
}
function oo(e, n = !1) {
  const s = /* @__PURE__ */ new Set(), r = [];
  if (sr(e, e.files[e.mainFile], r, s, n), !n) {
    for (const i in e.files)
      if (i.endsWith(".css")) {
        const a = e.files[i];
        s.has(a) || r.push(
          `
window.__css__.push(${JSON.stringify(a.compiled.css)})`
        );
      }
  }
  return r;
}
const io = "__modules__", Vs = "__export__", va = "__dynamic_import__", In = "__module__";
function sr(e, n, s, r, i) {
  if (r.has(n))
    return [];
  if (r.add(n), !i && n.filename.endsWith(".html"))
    return ba(e, n.code, n.filename, s, r);
  let {
    code: a,
    importedFiles: l,
    hasDynamicImport: f
  } = Zo(
    e,
    i ? n.compiled.ssr : n.compiled.js,
    n.filename
  );
  Ko(
    e,
    l,
    f,
    s,
    r,
    i
  ), n.compiled.css && !i && (a += `
window.__css__.push(${JSON.stringify(n.compiled.css)})`), s.push(a);
}
function Ko(e, n, s, r, i, a) {
  if (s)
    for (const l of Object.values(e.files))
      i.has(l) || sr(e, l, r, i, a);
  else if (n.size > 0)
    for (const l of n)
      sr(e, e.files[l], r, i, a);
}
function Zo(e, n, s) {
  const r = new $i(n), i = Bi(n, {
    sourceFilename: s,
    sourceType: "module"
  }).program.body, a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Map();
  function p(y) {
    const b = e.files;
    let w = y;
    return b[w] || b[w = y + ".ts"] || b[w = y + ".js"] ? w : void 0;
  }
  function h(y, b) {
    const w = p(b.replace(/^\.\/+/, "src/"));
    if (!w)
      throw new Error(`File "${b}" does not exist.`);
    if (f.has(w))
      return m.get(w);
    f.add(w);
    const B = `__import_${f.size}__`;
    return m.set(w, B), r.appendLeft(
      y.start,
      `const ${B} = ${io}[${JSON.stringify(w)}]
`
    ), B;
  }
  function k(y, b = y) {
    r.append(`
${Vs}(${In}, "${y}", () => ${b})`);
  }
  r.prepend(
    `const ${In} = ${io}[${JSON.stringify(
      s
    )}] = { [Symbol.toStringTag]: "Module" }

`
  );
  for (const y of i)
    if (y.type === "ImportDeclaration" && y.source.value.startsWith("./")) {
      const w = h(y, y.source.value);
      for (const B of y.specifiers)
        B.type === "ImportSpecifier" ? a.set(
          B.local.name,
          `${w}.${B.imported.name}`
        ) : B.type === "ImportDefaultSpecifier" ? a.set(B.local.name, `${w}.default`) : a.set(B.local.name, w);
      r.remove(y.start, y.end);
    }
  for (const y of i) {
    if (y.type === "ExportNamedDeclaration")
      if (y.declaration) {
        if (y.declaration.type === "FunctionDeclaration" || y.declaration.type === "ClassDeclaration")
          k(y.declaration.id.name);
        else if (y.declaration.type === "VariableDeclaration")
          for (const b of y.declaration.declarations)
            for (const w of qi(b.id))
              k(w.name);
        r.remove(y.start, y.declaration.start);
      } else if (y.source) {
        const b = h(y, y.source.value);
        for (const w of y.specifiers)
          k(
            w.exported.name,
            `${b}.${w.local.name}`
          );
        r.remove(y.start, y.end);
      } else {
        for (const b of y.specifiers) {
          const w = b.local.name, B = a.get(w);
          k(b.exported.name, B || w);
        }
        r.remove(y.start, y.end);
      }
    if (y.type === "ExportDefaultDeclaration")
      if ("id" in y.declaration && y.declaration.id) {
        const { name: b } = y.declaration.id;
        r.remove(y.start, y.start + 15), r.append(`
${Vs}(${In}, "default", () => ${b})`);
      } else
        r.overwrite(y.start, y.start + 14, `${In}.default =`);
    if (y.type === "ExportAllDeclaration") {
      const b = h(y, y.source.value);
      r.remove(y.start, y.end), r.append(`
for (const key in ${b}) {
        if (key !== 'default') {
          ${Vs}(${In}, key, () => ${b}[key])
        }
      }`);
    }
  }
  for (const y of i)
    y.type !== "ImportDeclaration" && Ui(y, (b, w, B) => {
      const j = a.get(b.name);
      if (j)
        if (w && Vi(w) && w.shorthand)
          (!w.inPattern || Wi(w, B)) && r.appendLeft(b.end, `: ${j}`);
        else if (w && w.type === "ClassDeclaration" && b === w.superClass) {
          if (!l.has(b.name)) {
            l.add(b.name);
            const x = B[1];
            r.prependRight(x.start, `const ${b.name} = ${j};
`);
          }
        } else
          r.overwrite(b.start, b.end, j);
    });
  let I = !1;
  return Hi(i, {
    enter(y, b) {
      if (y.type === "Import" && b.type === "CallExpression") {
        const w = b.arguments[0];
        w.type === "StringLiteral" && w.value.startsWith("./") && (I = !0, r.overwrite(y.start, y.start + 6, va), r.overwrite(
          w.start,
          w.end,
          JSON.stringify(w.value.replace(/^\.\/+/, "src/"))
        ));
      }
    }
  }), {
    code: r.toString(),
    importedFiles: f,
    hasDynamicImport: I
  };
}
const wa = /<script\b(?:\s[^>]*>|>)([^]*?)<\/script>/gi, xa = /<script\b[^>]*type\s*=\s*(?:"module"|'module')[^>]*>([^]*?)<\/script>/gi;
function ba(e, n, s, r, i) {
  const a = [];
  let l = "";
  const f = n.replace(xa, (m, p) => {
    const { code: h, importedFiles: k, hasDynamicImport: I } = Zo(
      e,
      p,
      s
    );
    return Ko(
      e,
      k,
      I,
      a,
      i,
      !1
    ), l += `
` + h, "";
  }).replace(wa, (m, p) => (l += `
` + p, ""));
  r.push(`document.body.innerHTML = ${JSON.stringify(f)}`), r.push(...a), r.push(l);
}
const Ia = /* @__PURE__ */ Wt({
  __name: "Preview",
  props: {
    show: { type: Boolean },
    ssr: { type: Boolean }
  },
  setup(e, { expose: n }) {
    const s = e, r = at(gn), i = at("clear-console"), a = at("theme"), l = at("preview-theme"), f = at("preview-options"), m = Ee(), p = Ee(), h = Ee();
    let k, I, y;
    Di(w), Ft(
      () => r.getImportMap(),
      () => {
        try {
          w();
        } catch (x) {
          r.errors = [x];
          return;
        }
      }
    );
    function b() {
      var P;
      if (!l.value) return;
      const x = (P = k.contentDocument) == null ? void 0 : P.documentElement;
      x ? x.className = a.value : w();
    }
    Ft([a, l], b), Mi(() => {
      I.destroy(), y && y();
    });
    function w() {
      k && (I.destroy(), y && y(), m.value.removeChild(k)), k = document.createElement("iframe"), k.setAttribute(
        "sandbox",
        [
          "allow-forms",
          "allow-modals",
          "allow-pointer-lock",
          "allow-popups",
          "allow-same-origin",
          "allow-scripts",
          "allow-top-navigation-by-user-activation"
        ].join(" ")
      );
      const x = r.getImportMap(), P = ga.replace(
        /<html>/,
        `<html class="${l.value ? a.value : ""}">`
      ).replace(/<!--IMPORT_MAP-->/, JSON.stringify(x)).replace(
        /<!-- PREVIEW-OPTIONS-HEAD-HTML -->/,
        (f == null ? void 0 : f.headHTML) || ""
      ).replace(
        /<!--PREVIEW-OPTIONS-PLACEHOLDER-HTML-->/,
        (f == null ? void 0 : f.placeholderHTML) || ""
      );
      k.srcdoc = P, m.value.appendChild(k), I = new ya(k, {
        on_fetch_progress: (N) => {
        },
        on_error: (N) => {
          const D = N.value instanceof Error ? N.value.message : N.value;
          D.includes("Failed to resolve module specifier") || D.includes("Error resolving module specifier") ? p.value = D.replace(/\. Relative references must.*$/, "") + `.
Tip: edit the "Import Map" tab to specify import paths for dependencies.` : p.value = N.value;
        },
        on_unhandled_rejection: (N) => {
          let D = N.value;
          typeof D == "string" && (D = { message: D }), p.value = "Uncaught (in promise): " + D.message;
        },
        on_console: (N) => {
          N.duplicate || (N.level === "error" ? N.args[0] instanceof Error ? p.value = N.args[0].message : p.value = N.args[0] : N.level === "warn" && N.args[0].toString().includes("[Vue warn]") && (h.value = N.args.join("").replace(/\[Vue warn\]:/, "").trim()));
        },
        on_console_group: (N) => {
        },
        on_console_group_end: () => {
        },
        on_console_group_collapsed: (N) => {
        }
      }), k.addEventListener("load", () => {
        I.handle_links(), y = jo(B), b();
      });
    }
    async function B() {
      var P, N;
      i.value && console.clear(), p.value = null, h.value = null;
      let x = s.ssr;
      if (r.vueVersion) {
        const [D, X, F] = r.vueVersion.split(".").map((W) => parseInt(W, 10));
        D === 3 && (X < 2 || X === 2 && F < 27) && (alert(
          `The selected version of Vue (${r.vueVersion}) does not support in-browser SSR. Rendering in client mode instead.`
        ), x = !1);
      }
      try {
        const { mainFile: D } = r;
        if (x && D.endsWith(".vue")) {
          const W = oo(r, !0);
          console.info(
            `[@vue/repl] successfully compiled ${W.length} modules for SSR.`
          ), await I.eval([
            "const __modules__ = {};",
            ...W,
            `import { renderToString as _renderToString } from 'vue/server-renderer'
         import { createSSRApp as _createApp } from 'vue'
         const AppComponent = __modules__["${D}"].default
         AppComponent.name = 'Repl'
         const app = _createApp(AppComponent)
         if (!app.config.hasOwnProperty('unwrapInjectedRef')) {
           app.config.unwrapInjectedRef = true
         }
         app.config.warnHandler = () => {}
         window.__ssr_promise__ = _renderToString(app).then(html => {
           document.body.innerHTML = '<div id="app">' + html + '</div>' + \`${(f == null ? void 0 : f.bodyHTML) || ""}\`
         }).catch(err => {
           console.error("SSR Error", err)
         })
        `
          ]);
        }
        const X = oo(r);
        console.info(
          `[@vue/repl] successfully compiled ${X.length} module${X.length > 1 ? "s" : ""}.`
        );
        const F = [
          "window.__modules__ = {};window.__css__ = [];if (window.__app__) window.__app__.unmount();" + (x ? "" : `document.body.innerHTML = '<div id="app"></div>' + \`${(f == null ? void 0 : f.bodyHTML) || ""}\``),
          ...X,
          "document.querySelectorAll('style[css]').forEach(el => el.remove())\n        document.head.insertAdjacentHTML('beforeend', window.__css__.map(s => `<style css>${s}</style>`).join('\\n'))"
        ];
        D.endsWith(".vue") && F.push(
          `import { ${x ? "createSSRApp" : "createApp"} as _createApp } from "vue"
        ${((P = f == null ? void 0 : f.customCode) == null ? void 0 : P.importCode) || ""}
        const _mount = () => {
          const AppComponent = __modules__["${D}"].default
          AppComponent.name = 'Repl'
          const app = window.__app__ = _createApp(AppComponent)
          if (!app.config.hasOwnProperty('unwrapInjectedRef')) {
            app.config.unwrapInjectedRef = true
          }
          app.config.errorHandler = e => console.error(e)
          ${((N = f == null ? void 0 : f.customCode) == null ? void 0 : N.useCode) || ""}
          app.mount('#app')
        }
        if (window.__ssr_promise__) {
          window.__ssr_promise__.then(_mount)
        } else {
          _mount()
        }`
        ), await I.eval(F);
      } catch (D) {
        console.error(D), p.value = D.message;
      }
    }
    function j() {
      var x;
      (x = k.contentWindow) == null || x.location.reload();
    }
    return n({ reload: j, container: m }), (x, P) => (qe(), Xe(dn, null, [
      fs(Le("div", {
        ref_key: "container",
        ref: m,
        class: vt(["iframe-container", { [Re(a)]: Re(l) }])
      }, null, 2), [
        [gr, x.show]
      ]),
      Nt(nr, { err: p.value }, null, 8, ["err"]),
      p.value ? jt("", !0) : (qe(), _r(nr, {
        key: 0,
        warn: h.value
      }, null, 8, ["warn"]))
    ], 64));
  }
}), e1 = /* @__PURE__ */ nn(Ia, [["__scopeId", "data-v-7821c5cb"]]), Ta = { class: "tab-buttons" }, Sa = ["onClick"], Ea = { class: "output-container" }, Aa = /* @__PURE__ */ Wt({
  __name: "Output",
  props: {
    editorComponent: {},
    showCompileOutput: { type: Boolean },
    ssr: { type: Boolean }
  },
  setup(e, { expose: n }) {
    const s = e, r = at(gn), i = Ee(), a = Pt(
      () => s.showCompileOutput ? ["preview", "js", "css", "ssr"] : ["preview"]
    ), l = Pt({
      get: () => a.value.includes(r.outputMode) ? r.outputMode : "preview",
      set(m) {
        a.value.includes(r.outputMode) && (r.outputMode = m);
      }
    });
    function f() {
      var m;
      (m = i.value) == null || m.reload();
    }
    return n({ reload: f, previewRef: i }), (m, p) => (qe(), Xe(dn, null, [
      Le("div", Ta, [
        (qe(!0), Xe(dn, null, $o(a.value, (h) => (qe(), Xe("button", {
          key: h,
          class: vt({ active: l.value === h }),
          onClick: (k) => l.value = h
        }, [
          Le("span", null, mn(h), 1)
        ], 10, Sa))), 128))
      ]),
      Le("div", Ea, [
        Nt(e1, {
          ref_key: "previewRef",
          ref: i,
          show: l.value === "preview",
          ssr: m.ssr
        }, null, 8, ["show", "ssr"]),
        l.value !== "preview" ? (qe(), _r(s.editorComponent, {
          key: 0,
          readonly: "",
          filename: Re(r).activeFile.filename,
          value: Re(r).activeFile.compiled[l.value],
          mode: l.value
        }, null, 8, ["filename", "value", "mode"])) : jt("", !0)
      ])
    ], 64));
  }
}), Ca = /* @__PURE__ */ nn(Aa, [["__scopeId", "data-v-1c107681"]]);
var u;
(function(e) {
  e[e.NONE = 0] = "NONE";
  const s = 1;
  e[e._abstract = s] = "_abstract";
  const r = s + 1;
  e[e._accessor = r] = "_accessor";
  const i = r + 1;
  e[e._as = i] = "_as";
  const a = i + 1;
  e[e._assert = a] = "_assert";
  const l = a + 1;
  e[e._asserts = l] = "_asserts";
  const f = l + 1;
  e[e._async = f] = "_async";
  const m = f + 1;
  e[e._await = m] = "_await";
  const p = m + 1;
  e[e._checks = p] = "_checks";
  const h = p + 1;
  e[e._constructor = h] = "_constructor";
  const k = h + 1;
  e[e._declare = k] = "_declare";
  const I = k + 1;
  e[e._enum = I] = "_enum";
  const y = I + 1;
  e[e._exports = y] = "_exports";
  const b = y + 1;
  e[e._from = b] = "_from";
  const w = b + 1;
  e[e._get = w] = "_get";
  const B = w + 1;
  e[e._global = B] = "_global";
  const j = B + 1;
  e[e._implements = j] = "_implements";
  const x = j + 1;
  e[e._infer = x] = "_infer";
  const P = x + 1;
  e[e._interface = P] = "_interface";
  const N = P + 1;
  e[e._is = N] = "_is";
  const D = N + 1;
  e[e._keyof = D] = "_keyof";
  const X = D + 1;
  e[e._mixins = X] = "_mixins";
  const F = X + 1;
  e[e._module = F] = "_module";
  const W = F + 1;
  e[e._namespace = W] = "_namespace";
  const q = W + 1;
  e[e._of = q] = "_of";
  const se = q + 1;
  e[e._opaque = se] = "_opaque";
  const ee = se + 1;
  e[e._out = ee] = "_out";
  const ue = ee + 1;
  e[e._override = ue] = "_override";
  const Te = ue + 1;
  e[e._private = Te] = "_private";
  const _e = Te + 1;
  e[e._protected = _e] = "_protected";
  const ve = _e + 1;
  e[e._proto = ve] = "_proto";
  const V = ve + 1;
  e[e._public = V] = "_public";
  const g = V + 1;
  e[e._readonly = g] = "_readonly";
  const v = g + 1;
  e[e._require = v] = "_require";
  const R = v + 1;
  e[e._satisfies = R] = "_satisfies";
  const G = R + 1;
  e[e._set = G] = "_set";
  const Y = G + 1;
  e[e._static = Y] = "_static";
  const te = Y + 1;
  e[e._symbol = te] = "_symbol";
  const oe = te + 1;
  e[e._type = oe] = "_type";
  const de = oe + 1;
  e[e._unique = de] = "_unique";
  const _ = de + 1;
  e[e._using = _] = "_using";
})(u || (u = {}));
var t;
(function(e) {
  e[e.PRECEDENCE_MASK = 15] = "PRECEDENCE_MASK";
  const s = 16;
  e[e.IS_KEYWORD = s] = "IS_KEYWORD";
  const r = 32;
  e[e.IS_ASSIGN = r] = "IS_ASSIGN";
  const i = 64;
  e[e.IS_RIGHT_ASSOCIATIVE = i] = "IS_RIGHT_ASSOCIATIVE";
  const a = 128;
  e[e.IS_PREFIX = a] = "IS_PREFIX";
  const l = 256;
  e[e.IS_POSTFIX = l] = "IS_POSTFIX";
  const f = 512;
  e[e.IS_EXPRESSION_START = f] = "IS_EXPRESSION_START";
  const m = 512;
  e[e.num = m] = "num";
  const p = 1536;
  e[e.bigint = p] = "bigint";
  const h = 2560;
  e[e.decimal = h] = "decimal";
  const k = 3584;
  e[e.regexp = k] = "regexp";
  const I = 4608;
  e[e.string = I] = "string";
  const y = 5632;
  e[e.name = y] = "name";
  const b = 6144;
  e[e.eof = b] = "eof";
  const w = 7680;
  e[e.bracketL = w] = "bracketL";
  const B = 8192;
  e[e.bracketR = B] = "bracketR";
  const j = 9728;
  e[e.braceL = j] = "braceL";
  const x = 10752;
  e[e.braceBarL = x] = "braceBarL";
  const P = 11264;
  e[e.braceR = P] = "braceR";
  const N = 12288;
  e[e.braceBarR = N] = "braceBarR";
  const D = 13824;
  e[e.parenL = D] = "parenL";
  const X = 14336;
  e[e.parenR = X] = "parenR";
  const F = 15360;
  e[e.comma = F] = "comma";
  const W = 16384;
  e[e.semi = W] = "semi";
  const q = 17408;
  e[e.colon = q] = "colon";
  const se = 18432;
  e[e.doubleColon = se] = "doubleColon";
  const ee = 19456;
  e[e.dot = ee] = "dot";
  const ue = 20480;
  e[e.question = ue] = "question";
  const Te = 21504;
  e[e.questionDot = Te] = "questionDot";
  const _e = 22528;
  e[e.arrow = _e] = "arrow";
  const ve = 23552;
  e[e.template = ve] = "template";
  const V = 24576;
  e[e.ellipsis = V] = "ellipsis";
  const g = 25600;
  e[e.backQuote = g] = "backQuote";
  const v = 27136;
  e[e.dollarBraceL = v] = "dollarBraceL";
  const R = 27648;
  e[e.at = R] = "at";
  const G = 29184;
  e[e.hash = G] = "hash";
  const Y = 29728;
  e[e.eq = Y] = "eq";
  const te = 30752;
  e[e.assign = te] = "assign";
  const oe = 32640;
  e[e.preIncDec = oe] = "preIncDec";
  const de = 33664;
  e[e.postIncDec = de] = "postIncDec";
  const _ = 34432;
  e[e.bang = _] = "bang";
  const C = 35456;
  e[e.tilde = C] = "tilde";
  const L = 35841;
  e[e.pipeline = L] = "pipeline";
  const M = 36866;
  e[e.nullishCoalescing = M] = "nullishCoalescing";
  const H = 37890;
  e[e.logicalOR = H] = "logicalOR";
  const J = 38915;
  e[e.logicalAND = J] = "logicalAND";
  const Q = 39940;
  e[e.bitwiseOR = Q] = "bitwiseOR";
  const ae = 40965;
  e[e.bitwiseXOR = ae] = "bitwiseXOR";
  const me = 41990;
  e[e.bitwiseAND = me] = "bitwiseAND";
  const ye = 43015;
  e[e.equality = ye] = "equality";
  const Be = 44040;
  e[e.lessThan = Be] = "lessThan";
  const Je = 45064;
  e[e.greaterThan = Je] = "greaterThan";
  const Ae = 46088;
  e[e.relationalOrEqual = Ae] = "relationalOrEqual";
  const $e = 47113;
  e[e.bitShiftL = $e] = "bitShiftL";
  const je = 48137;
  e[e.bitShiftR = je] = "bitShiftR";
  const ot = 49802;
  e[e.plus = ot] = "plus";
  const Lt = 50826;
  e[e.minus = Lt] = "minus";
  const Ot = 51723;
  e[e.modulo = Ot] = "modulo";
  const S = 52235;
  e[e.star = S] = "star";
  const O = 53259;
  e[e.slash = O] = "slash";
  const $ = 54348;
  e[e.exponent = $] = "exponent";
  const z = 55296;
  e[e.jsxName = z] = "jsxName";
  const ie = 56320;
  e[e.jsxText = ie] = "jsxText";
  const Z = 57344;
  e[e.jsxEmptyText = Z] = "jsxEmptyText";
  const ke = 58880;
  e[e.jsxTagStart = ke] = "jsxTagStart";
  const be = 59392;
  e[e.jsxTagEnd = be] = "jsxTagEnd";
  const he = 60928;
  e[e.typeParameterStart = he] = "typeParameterStart";
  const Ie = 61440;
  e[e.nonNullAssertion = Ie] = "nonNullAssertion";
  const He = 62480;
  e[e._break = He] = "_break";
  const Pe = 63504;
  e[e._case = Pe] = "_case";
  const Ce = 64528;
  e[e._catch = Ce] = "_catch";
  const Ve = 65552;
  e[e._continue = Ve] = "_continue";
  const Ze = 66576;
  e[e._debugger = Ze] = "_debugger";
  const lt = 67600;
  e[e._default = lt] = "_default";
  const gt = 68624;
  e[e._do = gt] = "_do";
  const _t = 69648;
  e[e._else = _t] = "_else";
  const zt = 70672;
  e[e._finally = zt] = "_finally";
  const Ye = 71696;
  e[e._for = Ye] = "_for";
  const Gt = 73232;
  e[e._function = Gt] = "_function";
  const on = 73744;
  e[e._if = on] = "_if";
  const wn = 74768;
  e[e._return = wn] = "_return";
  const an = 75792;
  e[e._switch = an] = "_switch";
  const Xt = 77456;
  e[e._throw = Xt] = "_throw";
  const ut = 77840;
  e[e._try = ut] = "_try";
  const Dt = 78864;
  e[e._var = Dt] = "_var";
  const cn = 79888;
  e[e._let = cn] = "_let";
  const ln = 80912;
  e[e._const = ln] = "_const";
  const un = 81936;
  e[e._while = un] = "_while";
  const bs = 82960;
  e[e._with = bs] = "_with";
  const Is = 84496;
  e[e._new = Is] = "_new";
  const Ts = 85520;
  e[e._this = Ts] = "_this";
  const Ss = 86544;
  e[e._super = Ss] = "_super";
  const Es = 87568;
  e[e._class = Es] = "_class";
  const As = 88080;
  e[e._extends = As] = "_extends";
  const Cs = 89104;
  e[e._export = Cs] = "_export";
  const Ns = 90640;
  e[e._import = Ns] = "_import";
  const Ps = 91664;
  e[e._yield = Ps] = "_yield";
  const Rs = 92688;
  e[e._null = Rs] = "_null";
  const Ls = 93712;
  e[e._true = Ls] = "_true";
  const Os = 94736;
  e[e._false = Os] = "_false";
  const Ds = 95256;
  e[e._in = Ds] = "_in";
  const Ms = 96280;
  e[e._instanceof = Ms] = "_instanceof";
  const js = 97936;
  e[e._typeof = js] = "_typeof";
  const Fs = 98960;
  e[e._void = Fs] = "_void";
  const _i = 99984;
  e[e._delete = _i] = "_delete";
  const yi = 100880;
  e[e._async = yi] = "_async";
  const vi = 101904;
  e[e._get = vi] = "_get";
  const wi = 102928;
  e[e._set = wi] = "_set";
  const xi = 103952;
  e[e._declare = xi] = "_declare";
  const bi = 104976;
  e[e._readonly = bi] = "_readonly";
  const Ii = 106e3;
  e[e._abstract = Ii] = "_abstract";
  const Ti = 107024;
  e[e._static = Ti] = "_static";
  const Si = 107536;
  e[e._public = Si] = "_public";
  const Ei = 108560;
  e[e._private = Ei] = "_private";
  const Ai = 109584;
  e[e._protected = Ai] = "_protected";
  const Ci = 110608;
  e[e._override = Ci] = "_override";
  const Ni = 112144;
  e[e._as = Ni] = "_as";
  const Pi = 113168;
  e[e._enum = Pi] = "_enum";
  const Ri = 114192;
  e[e._type = Ri] = "_type";
  const Li = 115216;
  e[e._implements = Li] = "_implements";
})(t || (t = {}));
function Na(e) {
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
class St {
  constructor(n, s, r) {
    this.startTokenIndex = n, this.endTokenIndex = s, this.isFunctionScope = r;
  }
}
class Pa {
  constructor(n, s, r, i, a, l, f, m, p, h, k, I, y) {
    this.potentialArrowAt = n, this.noAnonFunctionType = s, this.inDisallowConditionalTypesContext = r, this.tokensLength = i, this.scopesLength = a, this.pos = l, this.type = f, this.contextualKeyword = m, this.start = p, this.end = h, this.isType = k, this.scopeDepth = I, this.error = y;
  }
}
class Qe {
  constructor() {
    Qe.prototype.__init.call(this), Qe.prototype.__init2.call(this), Qe.prototype.__init3.call(this), Qe.prototype.__init4.call(this), Qe.prototype.__init5.call(this), Qe.prototype.__init6.call(this), Qe.prototype.__init7.call(this), Qe.prototype.__init8.call(this), Qe.prototype.__init9.call(this), Qe.prototype.__init10.call(this), Qe.prototype.__init11.call(this), Qe.prototype.__init12.call(this), Qe.prototype.__init13.call(this);
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
    this.contextualKeyword = u.NONE;
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
    return new Pa(
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
var d;
(function(e) {
  e[e.backSpace = 8] = "backSpace";
  const s = 10;
  e[e.lineFeed = s] = "lineFeed";
  const r = 9;
  e[e.tab = r] = "tab";
  const i = 13;
  e[e.carriageReturn = i] = "carriageReturn";
  const a = 14;
  e[e.shiftOut = a] = "shiftOut";
  const l = 32;
  e[e.space = l] = "space";
  const f = 33;
  e[e.exclamationMark = f] = "exclamationMark";
  const m = 34;
  e[e.quotationMark = m] = "quotationMark";
  const p = 35;
  e[e.numberSign = p] = "numberSign";
  const h = 36;
  e[e.dollarSign = h] = "dollarSign";
  const k = 37;
  e[e.percentSign = k] = "percentSign";
  const I = 38;
  e[e.ampersand = I] = "ampersand";
  const y = 39;
  e[e.apostrophe = y] = "apostrophe";
  const b = 40;
  e[e.leftParenthesis = b] = "leftParenthesis";
  const w = 41;
  e[e.rightParenthesis = w] = "rightParenthesis";
  const B = 42;
  e[e.asterisk = B] = "asterisk";
  const j = 43;
  e[e.plusSign = j] = "plusSign";
  const x = 44;
  e[e.comma = x] = "comma";
  const P = 45;
  e[e.dash = P] = "dash";
  const N = 46;
  e[e.dot = N] = "dot";
  const D = 47;
  e[e.slash = D] = "slash";
  const X = 48;
  e[e.digit0 = X] = "digit0";
  const F = 49;
  e[e.digit1 = F] = "digit1";
  const W = 50;
  e[e.digit2 = W] = "digit2";
  const q = 51;
  e[e.digit3 = q] = "digit3";
  const se = 52;
  e[e.digit4 = se] = "digit4";
  const ee = 53;
  e[e.digit5 = ee] = "digit5";
  const ue = 54;
  e[e.digit6 = ue] = "digit6";
  const Te = 55;
  e[e.digit7 = Te] = "digit7";
  const _e = 56;
  e[e.digit8 = _e] = "digit8";
  const ve = 57;
  e[e.digit9 = ve] = "digit9";
  const V = 58;
  e[e.colon = V] = "colon";
  const g = 59;
  e[e.semicolon = g] = "semicolon";
  const v = 60;
  e[e.lessThan = v] = "lessThan";
  const R = 61;
  e[e.equalsTo = R] = "equalsTo";
  const G = 62;
  e[e.greaterThan = G] = "greaterThan";
  const Y = 63;
  e[e.questionMark = Y] = "questionMark";
  const te = 64;
  e[e.atSign = te] = "atSign";
  const oe = 65;
  e[e.uppercaseA = oe] = "uppercaseA";
  const de = 66;
  e[e.uppercaseB = de] = "uppercaseB";
  const _ = 67;
  e[e.uppercaseC = _] = "uppercaseC";
  const C = 68;
  e[e.uppercaseD = C] = "uppercaseD";
  const L = 69;
  e[e.uppercaseE = L] = "uppercaseE";
  const M = 70;
  e[e.uppercaseF = M] = "uppercaseF";
  const H = 71;
  e[e.uppercaseG = H] = "uppercaseG";
  const J = 72;
  e[e.uppercaseH = J] = "uppercaseH";
  const Q = 73;
  e[e.uppercaseI = Q] = "uppercaseI";
  const ae = 74;
  e[e.uppercaseJ = ae] = "uppercaseJ";
  const me = 75;
  e[e.uppercaseK = me] = "uppercaseK";
  const ye = 76;
  e[e.uppercaseL = ye] = "uppercaseL";
  const Be = 77;
  e[e.uppercaseM = Be] = "uppercaseM";
  const Je = 78;
  e[e.uppercaseN = Je] = "uppercaseN";
  const Ae = 79;
  e[e.uppercaseO = Ae] = "uppercaseO";
  const $e = 80;
  e[e.uppercaseP = $e] = "uppercaseP";
  const je = 81;
  e[e.uppercaseQ = je] = "uppercaseQ";
  const ot = 82;
  e[e.uppercaseR = ot] = "uppercaseR";
  const Lt = 83;
  e[e.uppercaseS = Lt] = "uppercaseS";
  const Ot = 84;
  e[e.uppercaseT = Ot] = "uppercaseT";
  const S = 85;
  e[e.uppercaseU = S] = "uppercaseU";
  const O = 86;
  e[e.uppercaseV = O] = "uppercaseV";
  const $ = 87;
  e[e.uppercaseW = $] = "uppercaseW";
  const z = 88;
  e[e.uppercaseX = z] = "uppercaseX";
  const ie = 89;
  e[e.uppercaseY = ie] = "uppercaseY";
  const Z = 90;
  e[e.uppercaseZ = Z] = "uppercaseZ";
  const ke = 91;
  e[e.leftSquareBracket = ke] = "leftSquareBracket";
  const be = 92;
  e[e.backslash = be] = "backslash";
  const he = 93;
  e[e.rightSquareBracket = he] = "rightSquareBracket";
  const Ie = 94;
  e[e.caret = Ie] = "caret";
  const He = 95;
  e[e.underscore = He] = "underscore";
  const Pe = 96;
  e[e.graveAccent = Pe] = "graveAccent";
  const Ce = 97;
  e[e.lowercaseA = Ce] = "lowercaseA";
  const Ve = 98;
  e[e.lowercaseB = Ve] = "lowercaseB";
  const Ze = 99;
  e[e.lowercaseC = Ze] = "lowercaseC";
  const lt = 100;
  e[e.lowercaseD = lt] = "lowercaseD";
  const gt = 101;
  e[e.lowercaseE = gt] = "lowercaseE";
  const _t = 102;
  e[e.lowercaseF = _t] = "lowercaseF";
  const zt = 103;
  e[e.lowercaseG = zt] = "lowercaseG";
  const Ye = 104;
  e[e.lowercaseH = Ye] = "lowercaseH";
  const Gt = 105;
  e[e.lowercaseI = Gt] = "lowercaseI";
  const on = 106;
  e[e.lowercaseJ = on] = "lowercaseJ";
  const wn = 107;
  e[e.lowercaseK = wn] = "lowercaseK";
  const an = 108;
  e[e.lowercaseL = an] = "lowercaseL";
  const Xt = 109;
  e[e.lowercaseM = Xt] = "lowercaseM";
  const ut = 110;
  e[e.lowercaseN = ut] = "lowercaseN";
  const Dt = 111;
  e[e.lowercaseO = Dt] = "lowercaseO";
  const cn = 112;
  e[e.lowercaseP = cn] = "lowercaseP";
  const ln = 113;
  e[e.lowercaseQ = ln] = "lowercaseQ";
  const un = 114;
  e[e.lowercaseR = un] = "lowercaseR";
  const bs = 115;
  e[e.lowercaseS = bs] = "lowercaseS";
  const Is = 116;
  e[e.lowercaseT = Is] = "lowercaseT";
  const Ts = 117;
  e[e.lowercaseU = Ts] = "lowercaseU";
  const Ss = 118;
  e[e.lowercaseV = Ss] = "lowercaseV";
  const Es = 119;
  e[e.lowercaseW = Es] = "lowercaseW";
  const As = 120;
  e[e.lowercaseX = As] = "lowercaseX";
  const Cs = 121;
  e[e.lowercaseY = Cs] = "lowercaseY";
  const Ns = 122;
  e[e.lowercaseZ = Ns] = "lowercaseZ";
  const Ps = 123;
  e[e.leftCurlyBrace = Ps] = "leftCurlyBrace";
  const Rs = 124;
  e[e.verticalBar = Rs] = "verticalBar";
  const Ls = 125;
  e[e.rightCurlyBrace = Ls] = "rightCurlyBrace";
  const Os = 126;
  e[e.tilde = Os] = "tilde";
  const Ds = 160;
  e[e.nonBreakingSpace = Ds] = "nonBreakingSpace";
  const Ms = 5760;
  e[e.oghamSpaceMark = Ms] = "oghamSpaceMark";
  const js = 8232;
  e[e.lineSeparator = js] = "lineSeparator";
  const Fs = 8233;
  e[e.paragraphSeparator = Fs] = "paragraphSeparator";
})(d || (d = {}));
let ms, ge, we, o, U, t1;
function On() {
  return t1++;
}
function Ra(e) {
  if ("pos" in e) {
    const n = Oa(e.pos);
    e.message += ` (${n.line}:${n.column})`, e.loc = n;
  }
  return e;
}
class La {
  constructor(n, s) {
    this.line = n, this.column = s;
  }
}
function Oa(e) {
  let n = 1, s = 1;
  for (let r = 0; r < e; r++)
    U.charCodeAt(r) === d.lineFeed ? (n++, s = 1) : s++;
  return new La(n, s);
}
function Da(e, n, s, r) {
  U = e, o = new Qe(), t1 = 1, ms = n, ge = s, we = r;
}
function K(e) {
  return o.contextualKeyword === e;
}
function wr(e) {
  const n = qn();
  return n.type === t.name && n.contextualKeyword === e;
}
function Ue(e) {
  return o.contextualKeyword === e && T(t.name);
}
function Fe(e) {
  Ue(e) || le();
}
function st() {
  return c(t.eof) || c(t.braceR) || Ke();
}
function Ke() {
  const e = o.tokens[o.tokens.length - 1], n = e ? e.end : 0;
  for (let s = n; s < o.start; s++) {
    const r = U.charCodeAt(s);
    if (r === d.lineFeed || r === d.carriageReturn || r === 8232 || r === 8233)
      return !0;
  }
  return !1;
}
function n1() {
  const e = xr();
  for (let n = o.end; n < e; n++) {
    const s = U.charCodeAt(n);
    if (s === d.lineFeed || s === d.carriageReturn || s === 8232 || s === 8233)
      return !0;
  }
  return !1;
}
function xt() {
  return T(t.semi) || st();
}
function Ne() {
  xt() || le('Unexpected token, expected ";"');
}
function E(e) {
  T(e) || le(`Unexpected token, expected "${Na(e)}"`);
}
function le(e = "Unexpected token", n = o.start) {
  if (o.error)
    return;
  const s = new SyntaxError(e);
  s.pos = n, o.error = s, o.pos = U.length, ce(t.eof);
}
const s1 = [
  9,
  11,
  12,
  d.space,
  d.nonBreakingSpace,
  d.oghamSpaceMark,
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
], ao = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g, r1 = new Uint8Array(65536);
for (const e of s1)
  r1[e] = 1;
function Ma(e) {
  if (e < 48) return e === 36;
  if (e < 58) return !0;
  if (e < 65) return !1;
  if (e < 91) return !0;
  if (e < 97) return e === 95;
  if (e < 123) return !0;
  if (e < 128) return !1;
  throw new Error("Should not be called with non-ASCII char code.");
}
const dt = new Uint8Array(65536);
for (let e = 0; e < 128; e++)
  dt[e] = Ma(e) ? 1 : 0;
for (let e = 128; e < 65536; e++)
  dt[e] = 1;
for (const e of s1)
  dt[e] = 0;
dt[8232] = 0;
dt[8233] = 0;
const Bn = dt.slice();
for (let e = d.digit0; e <= d.digit9; e++)
  Bn[e] = 0;
const co = new Int32Array([
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
  u._abstract << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._accessor << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._as << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._assert << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._asserts << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._async << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._await << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._checks << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._constructor << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._declare << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._enum << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._exports << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._from << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._get << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._global << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._implements << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._infer << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._interface << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._is << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._keyof << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._mixins << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._module << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._namespace << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._of << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._opaque << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._out << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._override << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._private << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._protected << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._proto << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._public << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._readonly << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._require << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._satisfies << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._set << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._static << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._symbol << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._type << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._unique << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
  u._using << 1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
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
function ja() {
  let e = 0, n = 0, s = o.pos;
  for (; s < U.length && (n = U.charCodeAt(s), !(n < d.lowercaseA || n > d.lowercaseZ)); ) {
    const i = co[e + (n - d.lowercaseA) + 1];
    if (i === -1)
      break;
    e = i, s++;
  }
  const r = co[e];
  if (r > -1 && !dt[n]) {
    o.pos = s, r & 1 ? ce(r >>> 1) : ce(t.name, r >>> 1);
    return;
  }
  for (; s < U.length; ) {
    const i = U.charCodeAt(s);
    if (dt[i])
      s++;
    else if (i === d.backslash) {
      if (s += 2, U.charCodeAt(s) === d.leftCurlyBrace) {
        for (; s < U.length && U.charCodeAt(s) !== d.rightCurlyBrace; )
          s++;
        s++;
      }
    } else if (i === d.atSign && U.charCodeAt(s + 1) === d.atSign)
      s += 2;
    else
      break;
  }
  o.pos = s, ce(t.name);
}
var ne;
(function(e) {
  e[e.Access = 0] = "Access";
  const s = 1;
  e[e.ExportAccess = s] = "ExportAccess";
  const r = s + 1;
  e[e.TopLevelDeclaration = r] = "TopLevelDeclaration";
  const i = r + 1;
  e[e.FunctionScopedDeclaration = i] = "FunctionScopedDeclaration";
  const a = i + 1;
  e[e.BlockScopedDeclaration = a] = "BlockScopedDeclaration";
  const l = a + 1;
  e[e.ObjectShorthandTopLevelDeclaration = l] = "ObjectShorthandTopLevelDeclaration";
  const f = l + 1;
  e[e.ObjectShorthandFunctionScopedDeclaration = f] = "ObjectShorthandFunctionScopedDeclaration";
  const m = f + 1;
  e[e.ObjectShorthandBlockScopedDeclaration = m] = "ObjectShorthandBlockScopedDeclaration";
  const p = m + 1;
  e[e.ObjectShorthand = p] = "ObjectShorthand";
  const h = p + 1;
  e[e.ImportDeclaration = h] = "ImportDeclaration";
  const k = h + 1;
  e[e.ObjectKey = k] = "ObjectKey";
  const I = k + 1;
  e[e.ImportAccess = I] = "ImportAccess";
})(ne || (ne = {}));
var pt;
(function(e) {
  e[e.NoChildren = 0] = "NoChildren";
  const s = 1;
  e[e.OneChild = s] = "OneChild";
  const r = s + 1;
  e[e.StaticChildren = r] = "StaticChildren";
  const i = r + 1;
  e[e.KeyAfterPropSpread = i] = "KeyAfterPropSpread";
})(pt || (pt = {}));
function o1(e) {
  const n = e.identifierRole;
  return n === ne.TopLevelDeclaration || n === ne.FunctionScopedDeclaration || n === ne.BlockScopedDeclaration || n === ne.ObjectShorthandTopLevelDeclaration || n === ne.ObjectShorthandFunctionScopedDeclaration || n === ne.ObjectShorthandBlockScopedDeclaration;
}
function Fa(e) {
  const n = e.identifierRole;
  return n === ne.FunctionScopedDeclaration || n === ne.BlockScopedDeclaration || n === ne.ObjectShorthandFunctionScopedDeclaration || n === ne.ObjectShorthandBlockScopedDeclaration;
}
function i1(e) {
  const n = e.identifierRole;
  return n === ne.TopLevelDeclaration || n === ne.ObjectShorthandTopLevelDeclaration || n === ne.ImportDeclaration;
}
function $a(e) {
  const n = e.identifierRole;
  return n === ne.TopLevelDeclaration || n === ne.BlockScopedDeclaration || n === ne.ObjectShorthandTopLevelDeclaration || n === ne.ObjectShorthandBlockScopedDeclaration;
}
function Ba(e) {
  const n = e.identifierRole;
  return n === ne.FunctionScopedDeclaration || n === ne.ObjectShorthandFunctionScopedDeclaration;
}
function qa(e) {
  return e.identifierRole === ne.ObjectShorthandTopLevelDeclaration || e.identifierRole === ne.ObjectShorthandBlockScopedDeclaration || e.identifierRole === ne.ObjectShorthandFunctionScopedDeclaration;
}
class ks {
  constructor() {
    this.type = o.type, this.contextualKeyword = o.contextualKeyword, this.start = o.start, this.end = o.end, this.scopeDepth = o.scopeDepth, this.isType = o.isType, this.identifierRole = null, this.jsxRole = null, this.shadowsGlobal = !1, this.isAsyncOperation = !1, this.contextId = null, this.rhsEndIndex = null, this.isExpression = !1, this.numNullishCoalesceStarts = 0, this.numNullishCoalesceEnds = 0, this.isOptionalChainStart = !1, this.isOptionalChainEnd = !1, this.subscriptStartIndex = null, this.nullishStartIndex = null;
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
function A() {
  o.tokens.push(new ks()), u1();
}
function $t() {
  o.tokens.push(new ks()), o.start = o.pos, rc();
}
function Ua() {
  o.type === t.assign && --o.pos, tc();
}
function pe(e) {
  for (let s = o.tokens.length - e; s < o.tokens.length; s++)
    o.tokens[s].isType = !0;
  const n = o.isType;
  return o.isType = !0, n;
}
function fe(e) {
  o.isType = e;
}
function T(e) {
  return c(e) ? (A(), !0) : !1;
}
function a1(e) {
  const n = o.isType;
  o.isType = !0, T(e), o.isType = n;
}
function c(e) {
  return o.type === e;
}
function De() {
  const e = o.snapshot();
  A();
  const n = o.type;
  return o.restoreFromSnapshot(e), n;
}
class Va {
  constructor(n, s) {
    this.type = n, this.contextualKeyword = s;
  }
}
function qn() {
  const e = o.snapshot();
  A();
  const n = o.type, s = o.contextualKeyword;
  return o.restoreFromSnapshot(e), new Va(n, s);
}
function xr() {
  return c1(o.pos);
}
function c1(e) {
  ao.lastIndex = e;
  const n = ao.exec(U);
  return e + n[0].length;
}
function l1() {
  return U.charCodeAt(xr());
}
function u1() {
  if (p1(), o.start = o.pos, o.pos >= U.length) {
    const e = o.tokens;
    e.length >= 2 && e[e.length - 1].start >= U.length && e[e.length - 2].start >= U.length && le("Unexpectedly reached the end of input."), ce(t.eof);
    return;
  }
  Wa(U.charCodeAt(o.pos));
}
function Wa(e) {
  Bn[e] || e === d.backslash || e === d.atSign && U.charCodeAt(o.pos + 1) === d.atSign ? ja() : m1(e);
}
function Ha() {
  for (; U.charCodeAt(o.pos) !== d.asterisk || U.charCodeAt(o.pos + 1) !== d.slash; )
    if (o.pos++, o.pos > U.length) {
      le("Unterminated comment", o.pos - 2);
      return;
    }
  o.pos += 2;
}
function f1(e) {
  let n = U.charCodeAt(o.pos += e);
  if (o.pos < U.length)
    for (; n !== d.lineFeed && n !== d.carriageReturn && n !== d.lineSeparator && n !== d.paragraphSeparator && ++o.pos < U.length; )
      n = U.charCodeAt(o.pos);
}
function p1() {
  for (; o.pos < U.length; ) {
    const e = U.charCodeAt(o.pos);
    switch (e) {
      case d.carriageReturn:
        U.charCodeAt(o.pos + 1) === d.lineFeed && ++o.pos;
      case d.lineFeed:
      case d.lineSeparator:
      case d.paragraphSeparator:
        ++o.pos;
        break;
      case d.slash:
        switch (U.charCodeAt(o.pos + 1)) {
          case d.asterisk:
            o.pos += 2, Ha();
            break;
          case d.slash:
            f1(2);
            break;
          default:
            return;
        }
        break;
      default:
        if (r1[e])
          ++o.pos;
        else
          return;
    }
  }
}
function ce(e, n = u.NONE) {
  o.end = o.pos, o.type = e, o.contextualKeyword = n;
}
function za() {
  const e = U.charCodeAt(o.pos + 1);
  if (e >= d.digit0 && e <= d.digit9) {
    k1(!0);
    return;
  }
  e === d.dot && U.charCodeAt(o.pos + 2) === d.dot ? (o.pos += 3, ce(t.ellipsis)) : (++o.pos, ce(t.dot));
}
function Ga() {
  U.charCodeAt(o.pos + 1) === d.equalsTo ? xe(t.assign, 2) : xe(t.slash, 1);
}
function Xa(e) {
  let n = e === d.asterisk ? t.star : t.modulo, s = 1, r = U.charCodeAt(o.pos + 1);
  e === d.asterisk && r === d.asterisk && (s++, r = U.charCodeAt(o.pos + 2), n = t.exponent), r === d.equalsTo && U.charCodeAt(o.pos + 2) !== d.greaterThan && (s++, n = t.assign), xe(n, s);
}
function Ja(e) {
  const n = U.charCodeAt(o.pos + 1);
  if (n === e) {
    U.charCodeAt(o.pos + 2) === d.equalsTo ? xe(t.assign, 3) : xe(e === d.verticalBar ? t.logicalOR : t.logicalAND, 2);
    return;
  }
  if (e === d.verticalBar) {
    if (n === d.greaterThan) {
      xe(t.pipeline, 2);
      return;
    } else if (n === d.rightCurlyBrace && we) {
      xe(t.braceBarR, 2);
      return;
    }
  }
  if (n === d.equalsTo) {
    xe(t.assign, 2);
    return;
  }
  xe(e === d.verticalBar ? t.bitwiseOR : t.bitwiseAND, 1);
}
function Ya() {
  U.charCodeAt(o.pos + 1) === d.equalsTo ? xe(t.assign, 2) : xe(t.bitwiseXOR, 1);
}
function Qa(e) {
  const n = U.charCodeAt(o.pos + 1);
  if (n === e) {
    xe(t.preIncDec, 2);
    return;
  }
  n === d.equalsTo ? xe(t.assign, 2) : e === d.plusSign ? xe(t.plus, 1) : xe(t.minus, 1);
}
function Ka() {
  const e = U.charCodeAt(o.pos + 1);
  if (e === d.lessThan) {
    if (U.charCodeAt(o.pos + 2) === d.equalsTo) {
      xe(t.assign, 3);
      return;
    }
    o.isType ? xe(t.lessThan, 1) : xe(t.bitShiftL, 2);
    return;
  }
  e === d.equalsTo ? xe(t.relationalOrEqual, 2) : xe(t.lessThan, 1);
}
function h1() {
  if (o.isType) {
    xe(t.greaterThan, 1);
    return;
  }
  const e = U.charCodeAt(o.pos + 1);
  if (e === d.greaterThan) {
    const n = U.charCodeAt(o.pos + 2) === d.greaterThan ? 3 : 2;
    if (U.charCodeAt(o.pos + n) === d.equalsTo) {
      xe(t.assign, n + 1);
      return;
    }
    xe(t.bitShiftR, n);
    return;
  }
  e === d.equalsTo ? xe(t.relationalOrEqual, 2) : xe(t.greaterThan, 1);
}
function d1() {
  o.type === t.greaterThan && (o.pos -= 1, h1());
}
function Za(e) {
  const n = U.charCodeAt(o.pos + 1);
  if (n === d.equalsTo) {
    xe(t.equality, U.charCodeAt(o.pos + 2) === d.equalsTo ? 3 : 2);
    return;
  }
  if (e === d.equalsTo && n === d.greaterThan) {
    o.pos += 2, ce(t.arrow);
    return;
  }
  xe(e === d.equalsTo ? t.eq : t.bang, 1);
}
function ec() {
  const e = U.charCodeAt(o.pos + 1), n = U.charCodeAt(o.pos + 2);
  e === d.questionMark && // In Flow (but not TypeScript), ??string is a valid type that should be
  // tokenized as two individual ? tokens.
  !(we && o.isType) ? n === d.equalsTo ? xe(t.assign, 3) : xe(t.nullishCoalescing, 2) : e === d.dot && !(n >= d.digit0 && n <= d.digit9) ? (o.pos += 2, ce(t.questionDot)) : (++o.pos, ce(t.question));
}
function m1(e) {
  switch (e) {
    case d.numberSign:
      ++o.pos, ce(t.hash);
      return;
    case d.dot:
      za();
      return;
    case d.leftParenthesis:
      ++o.pos, ce(t.parenL);
      return;
    case d.rightParenthesis:
      ++o.pos, ce(t.parenR);
      return;
    case d.semicolon:
      ++o.pos, ce(t.semi);
      return;
    case d.comma:
      ++o.pos, ce(t.comma);
      return;
    case d.leftSquareBracket:
      ++o.pos, ce(t.bracketL);
      return;
    case d.rightSquareBracket:
      ++o.pos, ce(t.bracketR);
      return;
    case d.leftCurlyBrace:
      we && U.charCodeAt(o.pos + 1) === d.verticalBar ? xe(t.braceBarL, 2) : (++o.pos, ce(t.braceL));
      return;
    case d.rightCurlyBrace:
      ++o.pos, ce(t.braceR);
      return;
    case d.colon:
      U.charCodeAt(o.pos + 1) === d.colon ? xe(t.doubleColon, 2) : (++o.pos, ce(t.colon));
      return;
    case d.questionMark:
      ec();
      return;
    case d.atSign:
      ++o.pos, ce(t.at);
      return;
    case d.graveAccent:
      ++o.pos, ce(t.backQuote);
      return;
    case d.digit0: {
      const n = U.charCodeAt(o.pos + 1);
      if (n === d.lowercaseX || n === d.uppercaseX || n === d.lowercaseO || n === d.uppercaseO || n === d.lowercaseB || n === d.uppercaseB) {
        nc();
        return;
      }
    }
    case d.digit1:
    case d.digit2:
    case d.digit3:
    case d.digit4:
    case d.digit5:
    case d.digit6:
    case d.digit7:
    case d.digit8:
    case d.digit9:
      k1(!1);
      return;
    case d.quotationMark:
    case d.apostrophe:
      sc(e);
      return;
    case d.slash:
      Ga();
      return;
    case d.percentSign:
    case d.asterisk:
      Xa(e);
      return;
    case d.verticalBar:
    case d.ampersand:
      Ja(e);
      return;
    case d.caret:
      Ya();
      return;
    case d.plusSign:
    case d.dash:
      Qa(e);
      return;
    case d.lessThan:
      Ka();
      return;
    case d.greaterThan:
      h1();
      return;
    case d.equalsTo:
    case d.exclamationMark:
      Za(e);
      return;
    case d.tilde:
      xe(t.tilde, 1);
      return;
  }
  le(`Unexpected character '${String.fromCharCode(e)}'`, o.pos);
}
function xe(e, n) {
  o.pos += n, ce(e);
}
function tc() {
  const e = o.pos;
  let n = !1, s = !1;
  for (; ; ) {
    if (o.pos >= U.length) {
      le("Unterminated regular expression", e);
      return;
    }
    const r = U.charCodeAt(o.pos);
    if (n)
      n = !1;
    else {
      if (r === d.leftSquareBracket)
        s = !0;
      else if (r === d.rightSquareBracket && s)
        s = !1;
      else if (r === d.slash && !s)
        break;
      n = r === d.backslash;
    }
    ++o.pos;
  }
  ++o.pos, oc(), ce(t.regexp);
}
function Ws() {
  for (; ; ) {
    const e = U.charCodeAt(o.pos);
    if (e >= d.digit0 && e <= d.digit9 || e === d.underscore)
      o.pos++;
    else
      break;
  }
}
function nc() {
  for (o.pos += 2; ; ) {
    const n = U.charCodeAt(o.pos);
    if (n >= d.digit0 && n <= d.digit9 || n >= d.lowercaseA && n <= d.lowercaseF || n >= d.uppercaseA && n <= d.uppercaseF || n === d.underscore)
      o.pos++;
    else
      break;
  }
  U.charCodeAt(o.pos) === d.lowercaseN ? (++o.pos, ce(t.bigint)) : ce(t.num);
}
function k1(e) {
  let n = !1, s = !1;
  e || Ws();
  let r = U.charCodeAt(o.pos);
  if (r === d.dot && (++o.pos, Ws(), r = U.charCodeAt(o.pos)), (r === d.uppercaseE || r === d.lowercaseE) && (r = U.charCodeAt(++o.pos), (r === d.plusSign || r === d.dash) && ++o.pos, Ws(), r = U.charCodeAt(o.pos)), r === d.lowercaseN ? (++o.pos, n = !0) : r === d.lowercaseM && (++o.pos, s = !0), n) {
    ce(t.bigint);
    return;
  }
  if (s) {
    ce(t.decimal);
    return;
  }
  ce(t.num);
}
function sc(e) {
  for (o.pos++; ; ) {
    if (o.pos >= U.length) {
      le("Unterminated string constant");
      return;
    }
    const n = U.charCodeAt(o.pos);
    if (n === d.backslash)
      o.pos++;
    else if (n === e)
      break;
    o.pos++;
  }
  o.pos++, ce(t.string);
}
function rc() {
  for (; ; ) {
    if (o.pos >= U.length) {
      le("Unterminated template");
      return;
    }
    const e = U.charCodeAt(o.pos);
    if (e === d.graveAccent || e === d.dollarSign && U.charCodeAt(o.pos + 1) === d.leftCurlyBrace) {
      if (o.pos === o.start && c(t.template))
        if (e === d.dollarSign) {
          o.pos += 2, ce(t.dollarBraceL);
          return;
        } else {
          ++o.pos, ce(t.backQuote);
          return;
        }
      ce(t.template);
      return;
    }
    e === d.backslash && o.pos++, o.pos++;
  }
}
function oc() {
  for (; o.pos < U.length; ) {
    const e = U.charCodeAt(o.pos);
    if (dt[e])
      o.pos++;
    else if (e === d.backslash) {
      if (o.pos += 2, U.charCodeAt(o.pos) === d.leftCurlyBrace) {
        for (; o.pos < U.length && U.charCodeAt(o.pos) !== d.rightCurlyBrace; )
          o.pos++;
        o.pos++;
      }
    } else
      break;
  }
}
function Dn(e, n = e.currentIndex()) {
  let s = n + 1;
  if (zn(e, s)) {
    const r = e.identifierNameAtIndex(n);
    return {
      isType: !1,
      leftName: r,
      rightName: r,
      endIndex: s
    };
  }
  if (s++, zn(e, s))
    return {
      isType: !0,
      leftName: null,
      rightName: null,
      endIndex: s
    };
  if (s++, zn(e, s))
    return {
      isType: !1,
      leftName: e.identifierNameAtIndex(n),
      rightName: e.identifierNameAtIndex(n + 2),
      endIndex: s
    };
  if (s++, zn(e, s))
    return {
      isType: !0,
      leftName: null,
      rightName: null,
      endIndex: s
    };
  throw new Error(`Unexpected import/export specifier at ${n}`);
}
function zn(e, n) {
  const s = e.tokens[n];
  return s.type === t.braceR || s.type === t.comma;
}
const ic = /* @__PURE__ */ new Map([
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
function g1(e) {
  const [n, s] = lo(e.jsxPragma || "React.createElement"), [r, i] = lo(e.jsxFragmentPragma || "React.Fragment");
  return { base: n, suffix: s, fragmentBase: r, fragmentSuffix: i };
}
function lo(e) {
  let n = e.indexOf(".");
  return n === -1 && (n = e.length), [e.slice(0, n), e.slice(n)];
}
class mt {
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
class Jt extends mt {
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
  constructor(n, s, r, i, a) {
    super(), this.rootTransformer = n, this.tokens = s, this.importProcessor = r, this.nameManager = i, this.options = a, Jt.prototype.__init.call(this), Jt.prototype.__init2.call(this), Jt.prototype.__init3.call(this), Jt.prototype.__init4.call(this), Jt.prototype.__init5.call(this), this.jsxPragmaInfo = g1(a), this.isAutomaticRuntime = a.jsxRuntime === "automatic", this.jsxImportSource = a.jsxImportSource || "react";
  }
  process() {
    return this.tokens.matches1(t.jsxTagStart) ? (this.processJSXTag(), !0) : !1;
  }
  getPrefixCode() {
    let n = "";
    if (this.filenameVarName && (n += `const ${this.filenameVarName} = ${JSON.stringify(this.options.filePath || "")};`), this.isAutomaticRuntime)
      if (this.importProcessor)
        for (const [s, r] of Object.entries(this.cjsAutomaticModuleNameResolutions))
          n += `var ${r} = require("${s}");`;
      else {
        const { createElement: s, ...r } = this.esmAutomaticImportNameResolutions;
        s && (n += `import {createElement as ${s}} from "${this.jsxImportSource}";`);
        const i = Object.entries(r).map(([a, l]) => `${a} as ${l}`).join(", ");
        if (i) {
          const a = this.jsxImportSource + (this.options.production ? "/jsx-runtime" : "/jsx-dev-runtime");
          n += `import {${i}} from "${a}";`;
        }
      }
    return n;
  }
  processJSXTag() {
    const { jsxRole: n, start: s } = this.tokens.currentToken(), r = this.options.production ? null : this.getElementLocationCode(s);
    this.isAutomaticRuntime && n !== pt.KeyAfterPropSpread ? this.transformTagToJSXFunc(r, n) : this.transformTagToCreateElement(r);
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
    const r = s === pt.StaticChildren;
    this.tokens.replaceToken(this.getJSXFuncInvocationCode(r));
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
    for (this.options.production || (i === null && this.tokens.appendCode(", void 0"), this.tokens.appendCode(`, ${r}, ${this.getDevSource(n)}, this`)), this.tokens.removeInitialToken(); !this.tokens.matches1(t.jsxTagEnd); )
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
    const r = this.claimAutoImportedName(n, s);
    return this.importProcessor ? `${r}.call(void 0, ` : `${r}(`;
  }
  claimAutoImportedName(n, s) {
    if (this.importProcessor) {
      const r = this.jsxImportSource + s;
      return this.cjsAutomaticModuleNameResolutions[r] || (this.cjsAutomaticModuleNameResolutions[r] = this.importProcessor.getFreeIdentifierForPath(r)), `${this.cjsAutomaticModuleNameResolutions[r]}.${n}`;
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
      _1(s) && this.tokens.replaceToken(`'${s}'`);
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
        const r = this.tokens.identifierName();
        if (n && r === "key") {
          s !== null && this.tokens.appendCode(s.replace(/[^\n]/g, "")), this.tokens.removeToken(), this.tokens.removeToken();
          const i = this.tokens.snapshot();
          this.processPropValue(), s = this.tokens.dangerouslyGetAndRemoveCodeSinceSnapshot(i);
          continue;
        } else
          this.processPropName(r), this.tokens.replaceToken(": "), this.processPropValue();
      } else if (this.tokens.matches1(t.jsxName)) {
        const r = this.tokens.identifierName();
        this.processPropName(r), this.tokens.appendCode(": true");
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
    const n = this.tokens.currentToken(), s = this.tokens.code.slice(n.start + 1, n.end - 1), r = uo(s), i = cc(s);
    this.tokens.replaceToken(i + r);
  }
  /**
   * Starting in the middle of the props object literal, produce an additional
   * prop for the children and close the object literal.
   */
  processAutomaticChildrenAndEndProps(n) {
    n === pt.StaticChildren ? (this.tokens.appendCode(" children: ["), this.processChildren(!1), this.tokens.appendCode("]}")) : (n === pt.OneChild && this.tokens.appendCode(" children: "), this.processChildren(!1), this.tokens.appendCode("}"));
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
      let r = !1;
      if (this.tokens.matches1(t.braceL))
        this.tokens.matches2(t.braceL, t.braceR) ? (this.tokens.replaceToken(""), this.tokens.replaceToken("")) : (this.tokens.replaceToken(s ? ", " : ""), this.rootTransformer.processBalancedCode(), this.tokens.replaceToken(""), r = !0);
      else if (this.tokens.matches1(t.jsxTagStart))
        this.tokens.appendCode(s ? ", " : ""), this.processJSXTag(), r = !0;
      else if (this.tokens.matches1(t.jsxText) || this.tokens.matches1(t.jsxEmptyText))
        r = this.processChildTextElement(s);
      else
        throw new Error("Unexpected token when processing JSX children.");
      r && (s = !0);
    }
  }
  /**
   * Turn a JSX text element into a string literal, or nothing at all if the JSX
   * text resolves to the empty string.
   *
   * Returns true if a string literal is emitted, false otherwise.
   */
  processChildTextElement(n) {
    const s = this.tokens.currentToken(), r = this.tokens.code.slice(s.start, s.end), i = uo(r), a = ac(r);
    return a === '""' ? (this.tokens.replaceToken(i), !1) : (this.tokens.replaceToken(`${n ? ", " : ""}${a}${i}`), !0);
  }
  getDevSource(n) {
    return `{fileName: ${this.getFilenameVarName()}, ${n}}`;
  }
  getFilenameVarName() {
    return this.filenameVarName || (this.filenameVarName = this.nameManager.claimFreeName("_jsxFileName")), this.filenameVarName;
  }
}
function _1(e) {
  const n = e.charCodeAt(0);
  return n >= d.lowercaseA && n <= d.lowercaseZ;
}
function ac(e) {
  let n = "", s = "", r = !1, i = !1;
  for (let a = 0; a < e.length; a++) {
    const l = e[a];
    if (l === " " || l === "	" || l === "\r")
      r || (s += l);
    else if (l === `
`)
      s = "", r = !0;
    else {
      if (i && r && (n += " "), n += s, s = "", l === "&") {
        const { entity: f, newI: m } = y1(e, a + 1);
        a = m - 1, n += f;
      } else
        n += l;
      i = !0, r = !1;
    }
  }
  return r || (n += s), JSON.stringify(n);
}
function uo(e) {
  let n = 0, s = 0;
  for (const r of e)
    r === `
` ? (n++, s = 0) : r === " " && s++;
  return `
`.repeat(n) + " ".repeat(s);
}
function cc(e) {
  let n = "";
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    if (r === `
`)
      if (/\s/.test(e[s + 1]))
        for (n += " "; s < e.length && /\s/.test(e[s + 1]); )
          s++;
      else
        n += `
`;
    else if (r === "&") {
      const { entity: i, newI: a } = y1(e, s + 1);
      n += i, s = a - 1;
    } else
      n += r;
  }
  return JSON.stringify(n);
}
function y1(e, n) {
  let s = "", r = 0, i, a = n;
  if (e[a] === "#") {
    let l = 10;
    a++;
    let f;
    if (e[a] === "x")
      for (l = 16, a++, f = a; a < e.length && uc(e.charCodeAt(a)); )
        a++;
    else
      for (f = a; a < e.length && lc(e.charCodeAt(a)); )
        a++;
    if (e[a] === ";") {
      const m = e.slice(f, a);
      m && (a++, i = String.fromCodePoint(parseInt(m, l)));
    }
  } else
    for (; a < e.length && r++ < 10; ) {
      const l = e[a];
      if (a++, l === ";") {
        i = ic.get(s);
        break;
      }
      s += l;
    }
  return i ? { entity: i, newI: a } : { entity: "&", newI: n };
}
function lc(e) {
  return e >= d.digit0 && e <= d.digit9;
}
function uc(e) {
  return e >= d.digit0 && e <= d.digit9 || e >= d.lowercaseA && e <= d.lowercaseF || e >= d.uppercaseA && e <= d.uppercaseF;
}
function v1(e, n) {
  const s = g1(n), r = /* @__PURE__ */ new Set();
  for (let i = 0; i < e.tokens.length; i++) {
    const a = e.tokens[i];
    if (a.type === t.name && !a.isType && (a.identifierRole === ne.Access || a.identifierRole === ne.ObjectShorthand || a.identifierRole === ne.ExportAccess) && !a.shadowsGlobal && r.add(e.identifierNameForToken(a)), a.type === t.jsxTagStart && r.add(s.base), a.type === t.jsxTagStart && i + 1 < e.tokens.length && e.tokens[i + 1].type === t.jsxTagEnd && (r.add(s.base), r.add(s.fragmentBase)), a.type === t.jsxName && a.identifierRole === ne.Access) {
      const l = e.identifierNameForToken(a);
      (!_1(l) || e.tokens[i + 1].type === t.dot) && r.add(e.identifierNameForToken(a));
    }
  }
  return r;
}
class Yt {
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
  constructor(n, s, r, i, a, l, f) {
    this.nameManager = n, this.tokens = s, this.enableLegacyTypeScriptModuleInterop = r, this.options = i, this.isTypeScriptTransformEnabled = a, this.keepUnusedImports = l, this.helperManager = f, Yt.prototype.__init.call(this), Yt.prototype.__init2.call(this), Yt.prototype.__init3.call(this), Yt.prototype.__init4.call(this), Yt.prototype.__init5.call(this);
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
    this.nonTypeIdentifiers = v1(this.tokens, this.options);
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
        defaultNames: r,
        wildcardNames: i,
        namedImports: a,
        namedExports: l,
        exportStarNames: f,
        hasStarExport: m
      } = s;
      if (r.length === 0 && i.length === 0 && a.length === 0 && l.length === 0 && f.length === 0 && !m) {
        this.importsToReplace.set(n, `require('${n}');`);
        continue;
      }
      const p = this.getFreeIdentifierForPath(n);
      let h;
      this.enableLegacyTypeScriptModuleInterop ? h = p : h = i.length > 0 ? i[0] : this.getFreeIdentifierForPath(n);
      let k = `var ${p} = require('${n}');`;
      if (i.length > 0)
        for (const I of i) {
          const y = this.enableLegacyTypeScriptModuleInterop ? p : `${this.helperManager.getHelperName("interopRequireWildcard")}(${p})`;
          k += ` var ${I} = ${y};`;
        }
      else f.length > 0 && h !== p ? k += ` var ${h} = ${this.helperManager.getHelperName(
        "interopRequireWildcard"
      )}(${p});` : r.length > 0 && h !== p && (k += ` var ${h} = ${this.helperManager.getHelperName(
        "interopRequireDefault"
      )}(${p});`);
      for (const { importedName: I, localName: y } of l)
        k += ` ${this.helperManager.getHelperName(
          "createNamedExportFrom"
        )}(${p}, '${y}', '${I}');`;
      for (const I of f)
        k += ` exports.${I} = ${h};`;
      m && (k += ` ${this.helperManager.getHelperName(
        "createStarExport"
      )}(${p});`), this.importsToReplace.set(n, k);
      for (const I of r)
        this.identifierReplacements.set(I, `${h}.default`);
      for (const { importedName: I, localName: y } of a)
        this.identifierReplacements.set(y, `${p}.${I}`);
    }
  }
  getFreeIdentifierForPath(n) {
    const s = n.split("/"), i = s[s.length - 1].replace(/\W/g, "");
    return this.nameManager.claimFreeName(`_${i}`);
  }
  preprocessImportAtIndex(n) {
    const s = [], r = [], i = [];
    if (n++, (this.tokens.matchesContextualAtIndex(n, u._type) || this.tokens.matches1AtIndex(n, t._typeof)) && !this.tokens.matches1AtIndex(n + 1, t.comma) && !this.tokens.matchesContextualAtIndex(n + 1, u._from) || this.tokens.matches1AtIndex(n, t.parenL))
      return;
    if (this.tokens.matches1AtIndex(n, t.name) && (s.push(this.tokens.identifierNameAtIndex(n)), n++, this.tokens.matches1AtIndex(n, t.comma) && n++), this.tokens.matches1AtIndex(n, t.star) && (n += 2, r.push(this.tokens.identifierNameAtIndex(n)), n++), this.tokens.matches1AtIndex(n, t.braceL)) {
      const f = this.getNamedImports(n + 1);
      n = f.newIndex;
      for (const m of f.namedImports)
        m.importedName === "default" ? s.push(m.localName) : i.push(m);
    }
    if (this.tokens.matchesContextualAtIndex(n, u._from) && n++, !this.tokens.matches1AtIndex(n, t.string))
      throw new Error("Expected string token at the end of import statement.");
    const a = this.tokens.stringValueAtIndex(n), l = this.getImportInfo(a);
    l.defaultNames.push(...s), l.wildcardNames.push(...r), l.namedImports.push(...i), s.length === 0 && r.length === 0 && i.length === 0 && (l.hasBareImport = !0);
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
    for (let r = n + 2; ; r++)
      if (this.tokens.matches1AtIndex(r, t.braceL) || this.tokens.matches1AtIndex(r, t.dollarBraceL) || this.tokens.matches1AtIndex(r, t.bracketL))
        s++;
      else if (this.tokens.matches1AtIndex(r, t.braceR) || this.tokens.matches1AtIndex(r, t.bracketR))
        s--;
      else {
        if (s === 0 && !this.tokens.matches1AtIndex(r, t.name))
          break;
        if (this.tokens.matches1AtIndex(1, t.eq)) {
          const i = this.tokens.currentToken().rhsEndIndex;
          if (i == null)
            throw new Error("Expected = token with an end index.");
          r = i - 1;
        } else {
          const i = this.tokens.tokens[r];
          if (o1(i)) {
            const a = this.tokens.identifierNameAtIndex(r);
            this.identifierReplacements.set(a, `exports.${a}`);
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
    const { newIndex: s, namedImports: r } = this.getNamedImports(n);
    if (n = s, this.tokens.matchesContextualAtIndex(n, u._from))
      n++;
    else {
      for (const { importedName: l, localName: f } of r)
        this.addExportBinding(l, f);
      return;
    }
    if (!this.tokens.matches1AtIndex(n, t.string))
      throw new Error("Expected string token at the end of import statement.");
    const i = this.tokens.stringValueAtIndex(n);
    this.getImportInfo(i).namedExports.push(...r);
  }
  preprocessExportStarAtIndex(n) {
    let s = null;
    if (this.tokens.matches3AtIndex(n, t._export, t.star, t._as) ? (n += 3, s = this.tokens.identifierNameAtIndex(n), n += 2) : n += 3, !this.tokens.matches1AtIndex(n, t.string))
      throw new Error("Expected string token at the end of star export statement.");
    const r = this.tokens.stringValueAtIndex(n), i = this.getImportInfo(r);
    s !== null ? i.exportStarNames.push(s) : i.hasStarExport = !0;
  }
  getNamedImports(n) {
    const s = [];
    for (; ; ) {
      if (this.tokens.matches1AtIndex(n, t.braceR)) {
        n++;
        break;
      }
      const r = Dn(this.tokens, n);
      if (n = r.endIndex, r.isType || s.push({
        importedName: r.leftName,
        localName: r.rightName
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
    const r = {
      defaultNames: [],
      wildcardNames: [],
      namedImports: [],
      namedExports: [],
      hasBareImport: !1,
      exportStarNames: [],
      hasStarExport: !1
    };
    return this.importInfoByPath.set(n, r), r;
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
    return !s || s.length === 0 ? null : s.map((r) => `exports.${r}`).join(" = ");
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
var rr = { exports: {} }, Gn = { exports: {} }, fo;
function fc() {
  return fo || (fo = 1, function(e, n) {
    (function(s, r) {
      r(n);
    })(ht, function(s) {
      class r {
        constructor() {
          this._indexes = { __proto__: null }, this.array = [];
        }
      }
      function i(p) {
        return p;
      }
      function a(p, h) {
        return p._indexes[h];
      }
      function l(p, h) {
        const k = a(p, h);
        if (k !== void 0)
          return k;
        const { array: I, _indexes: y } = p, b = I.push(h);
        return y[h] = b - 1;
      }
      function f(p) {
        const { array: h, _indexes: k } = p;
        if (h.length === 0)
          return;
        const I = h.pop();
        k[I] = void 0;
      }
      function m(p, h) {
        const k = a(p, h);
        if (k === void 0)
          return;
        const { array: I, _indexes: y } = p;
        for (let b = k + 1; b < I.length; b++) {
          const w = I[b];
          I[b - 1] = w, y[w]--;
        }
        y[h] = void 0, I.pop();
      }
      s.SetArray = r, s.get = a, s.pop = f, s.put = l, s.remove = m, Object.defineProperty(s, "__esModule", { value: !0 });
    });
  }(Gn, Gn.exports)), Gn.exports;
}
var Xn = { exports: {} }, po;
function w1() {
  return po || (po = 1, function(e, n) {
    (function(s, r) {
      r(n);
    })(ht, function(s) {
      const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = new Uint8Array(64), f = new Uint8Array(128);
      for (let j = 0; j < a.length; j++) {
        const x = a.charCodeAt(j);
        l[j] = x, f[x] = j;
      }
      const m = typeof TextDecoder < "u" ? /* @__PURE__ */ new TextDecoder() : typeof Buffer < "u" ? {
        decode(j) {
          return Buffer.from(j.buffer, j.byteOffset, j.byteLength).toString();
        }
      } : {
        decode(j) {
          let x = "";
          for (let P = 0; P < j.length; P++)
            x += String.fromCharCode(j[P]);
          return x;
        }
      };
      function p(j) {
        const x = new Int32Array(5), P = [];
        let N = 0;
        do {
          const D = h(j, N), X = [];
          let F = !0, W = 0;
          x[0] = 0;
          for (let q = N; q < D; q++) {
            let se;
            q = k(j, q, x, 0);
            const ee = x[0];
            ee < W && (F = !1), W = ee, I(j, q, D) ? (q = k(j, q, x, 1), q = k(j, q, x, 2), q = k(j, q, x, 3), I(j, q, D) ? (q = k(j, q, x, 4), se = [ee, x[1], x[2], x[3], x[4]]) : se = [ee, x[1], x[2], x[3]]) : se = [ee], X.push(se);
          }
          F || y(X), P.push(X), N = D + 1;
        } while (N <= j.length);
        return P;
      }
      function h(j, x) {
        const P = j.indexOf(";", x);
        return P === -1 ? j.length : P;
      }
      function k(j, x, P, N) {
        let D = 0, X = 0, F = 0;
        do {
          const q = j.charCodeAt(x++);
          F = f[q], D |= (F & 31) << X, X += 5;
        } while (F & 32);
        const W = D & 1;
        return D >>>= 1, W && (D = -2147483648 | -D), P[N] += D, x;
      }
      function I(j, x, P) {
        return x >= P ? !1 : j.charCodeAt(x) !== 44;
      }
      function y(j) {
        j.sort(b);
      }
      function b(j, x) {
        return j[0] - x[0];
      }
      function w(j) {
        const x = new Int32Array(5), P = 1024 * 16, N = P - 36, D = new Uint8Array(P), X = D.subarray(0, N);
        let F = 0, W = "";
        for (let q = 0; q < j.length; q++) {
          const se = j[q];
          if (q > 0 && (F === P && (W += m.decode(D), F = 0), D[F++] = 59), se.length !== 0) {
            x[0] = 0;
            for (let ee = 0; ee < se.length; ee++) {
              const ue = se[ee];
              F > N && (W += m.decode(X), D.copyWithin(0, N, F), F -= N), ee > 0 && (D[F++] = 44), F = B(D, F, x, ue, 0), ue.length !== 1 && (F = B(D, F, x, ue, 1), F = B(D, F, x, ue, 2), F = B(D, F, x, ue, 3), ue.length !== 4 && (F = B(D, F, x, ue, 4)));
            }
          }
        }
        return W + m.decode(D.subarray(0, F));
      }
      function B(j, x, P, N, D) {
        const X = N[D];
        let F = X - P[D];
        P[D] = X, F = F < 0 ? -F << 1 | 1 : F << 1;
        do {
          let W = F & 31;
          F >>>= 5, F > 0 && (W |= 32), j[x++] = l[W];
        } while (F > 0);
        return x;
      }
      s.decode = p, s.encode = w, Object.defineProperty(s, "__esModule", { value: !0 });
    });
  }(Xn, Xn.exports)), Xn.exports;
}
var Jn = { exports: {} }, Hs = { exports: {} }, ho;
function pc() {
  return ho || (ho = 1, function(e, n) {
    (function(s, r) {
      e.exports = r();
    })(ht, function() {
      const s = /^[\w+.-]+:\/\//, r = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/, i = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
      function a(x) {
        return s.test(x);
      }
      function l(x) {
        return x.startsWith("//");
      }
      function f(x) {
        return x.startsWith("/");
      }
      function m(x) {
        return x.startsWith("file:");
      }
      function p(x) {
        return /^[.?#]/.test(x);
      }
      function h(x) {
        const P = r.exec(x);
        return I(P[1], P[2] || "", P[3], P[4] || "", P[5] || "/", P[6] || "", P[7] || "");
      }
      function k(x) {
        const P = i.exec(x), N = P[2];
        return I("file:", "", P[1] || "", "", f(N) ? N : "/" + N, P[3] || "", P[4] || "");
      }
      function I(x, P, N, D, X, F, W) {
        return {
          scheme: x,
          user: P,
          host: N,
          port: D,
          path: X,
          query: F,
          hash: W,
          type: 7
        };
      }
      function y(x) {
        if (l(x)) {
          const N = h("http:" + x);
          return N.scheme = "", N.type = 6, N;
        }
        if (f(x)) {
          const N = h("http://foo.com" + x);
          return N.scheme = "", N.host = "", N.type = 5, N;
        }
        if (m(x))
          return k(x);
        if (a(x))
          return h(x);
        const P = h("http://foo.com/" + x);
        return P.scheme = "", P.host = "", P.type = x ? x.startsWith("?") ? 3 : x.startsWith("#") ? 2 : 4 : 1, P;
      }
      function b(x) {
        if (x.endsWith("/.."))
          return x;
        const P = x.lastIndexOf("/");
        return x.slice(0, P + 1);
      }
      function w(x, P) {
        B(P, P.type), x.path === "/" ? x.path = P.path : x.path = b(P.path) + x.path;
      }
      function B(x, P) {
        const N = P <= 4, D = x.path.split("/");
        let X = 1, F = 0, W = !1;
        for (let se = 1; se < D.length; se++) {
          const ee = D[se];
          if (!ee) {
            W = !0;
            continue;
          }
          if (W = !1, ee !== ".") {
            if (ee === "..") {
              F ? (W = !0, F--, X--) : N && (D[X++] = ee);
              continue;
            }
            D[X++] = ee, F++;
          }
        }
        let q = "";
        for (let se = 1; se < X; se++)
          q += "/" + D[se];
        (!q || W && !q.endsWith("/..")) && (q += "/"), x.path = q;
      }
      function j(x, P) {
        if (!x && !P)
          return "";
        const N = y(x);
        let D = N.type;
        if (P && D !== 7) {
          const F = y(P), W = F.type;
          switch (D) {
            case 1:
              N.hash = F.hash;
            case 2:
              N.query = F.query;
            case 3:
            case 4:
              w(N, F);
            case 5:
              N.user = F.user, N.host = F.host, N.port = F.port;
            case 6:
              N.scheme = F.scheme;
          }
          W > D && (D = W);
        }
        B(N, D);
        const X = N.query + N.hash;
        switch (D) {
          case 2:
          case 3:
            return X;
          case 4: {
            const F = N.path.slice(1);
            return F ? p(P || x) && !p(F) ? "./" + F + X : F + X : X || ".";
          }
          case 5:
            return N.path + X;
          default:
            return N.scheme + "//" + N.user + N.host + N.port + N.path + X;
        }
      }
      return j;
    });
  }(Hs)), Hs.exports;
}
var mo;
function hc() {
  return mo || (mo = 1, function(e, n) {
    (function(s, r) {
      r(n, w1(), pc());
    })(ht, function(s, r, i) {
      function a(S, O) {
        return O && !O.endsWith("/") && (O += "/"), i(S, O);
      }
      function l(S) {
        if (!S)
          return "";
        const O = S.lastIndexOf("/");
        return S.slice(0, O + 1);
      }
      const f = 0, m = 1, p = 2, h = 3, k = 4, I = 1, y = 2;
      function b(S, O) {
        const $ = w(S, 0);
        if ($ === S.length)
          return S;
        O || (S = S.slice());
        for (let z = $; z < S.length; z = w(S, z + 1))
          S[z] = j(S[z], O);
        return S;
      }
      function w(S, O) {
        for (let $ = O; $ < S.length; $++)
          if (!B(S[$]))
            return $;
        return S.length;
      }
      function B(S) {
        for (let O = 1; O < S.length; O++)
          if (S[O][f] < S[O - 1][f])
            return !1;
        return !0;
      }
      function j(S, O) {
        return O || (S = S.slice()), S.sort(x);
      }
      function x(S, O) {
        return S[f] - O[f];
      }
      let P = !1;
      function N(S, O, $, z) {
        for (; $ <= z; ) {
          const ie = $ + (z - $ >> 1), Z = S[ie][f] - O;
          if (Z === 0)
            return P = !0, ie;
          Z < 0 ? $ = ie + 1 : z = ie - 1;
        }
        return P = !1, $ - 1;
      }
      function D(S, O, $) {
        for (let z = $ + 1; z < S.length && S[z][f] === O; $ = z++)
          ;
        return $;
      }
      function X(S, O, $) {
        for (let z = $ - 1; z >= 0 && S[z][f] === O; $ = z--)
          ;
        return $;
      }
      function F() {
        return {
          lastKey: -1,
          lastNeedle: -1,
          lastIndex: -1
        };
      }
      function W(S, O, $, z) {
        const { lastKey: ie, lastNeedle: Z, lastIndex: ke } = $;
        let be = 0, he = S.length - 1;
        if (z === ie) {
          if (O === Z)
            return P = ke !== -1 && S[ke][f] === O, ke;
          O >= Z ? be = ke === -1 ? 0 : ke : he = ke;
        }
        return $.lastKey = z, $.lastNeedle = O, $.lastIndex = N(S, O, be, he);
      }
      function q(S, O) {
        const $ = O.map(ee);
        for (let z = 0; z < S.length; z++) {
          const ie = S[z];
          for (let Z = 0; Z < ie.length; Z++) {
            const ke = ie[Z];
            if (ke.length === 1)
              continue;
            const be = ke[m], he = ke[p], Ie = ke[h], He = $[be], Pe = He[he] || (He[he] = []), Ce = O[be];
            let Ve = D(Pe, Ie, W(Pe, Ie, Ce, he));
            Ce.lastIndex = ++Ve, se(Pe, Ve, [Ie, z, ke[f]]);
          }
        }
        return $;
      }
      function se(S, O, $) {
        for (let z = S.length; z > O; z--)
          S[z] = S[z - 1];
        S[O] = $;
      }
      function ee() {
        return { __proto__: null };
      }
      const ue = function(S, O) {
        const $ = Te(S);
        if (!("sections" in $))
          return new te($, O);
        const z = [], ie = [], Z = [], ke = [], be = [];
        _e($, O, z, ie, Z, ke, be, 0, 0, 1 / 0, 1 / 0);
        const he = {
          version: 3,
          file: $.file,
          names: ke,
          sources: ie,
          sourcesContent: Z,
          mappings: z,
          ignoreList: be
        };
        return ye(he);
      };
      function Te(S) {
        return typeof S == "string" ? JSON.parse(S) : S;
      }
      function _e(S, O, $, z, ie, Z, ke, be, he, Ie, He) {
        const { sections: Pe } = S;
        for (let Ce = 0; Ce < Pe.length; Ce++) {
          const { map: Ve, offset: Ze } = Pe[Ce];
          let lt = Ie, gt = He;
          if (Ce + 1 < Pe.length) {
            const _t = Pe[Ce + 1].offset;
            lt = Math.min(Ie, be + _t.line), lt === Ie ? gt = Math.min(He, he + _t.column) : lt < Ie && (gt = he + _t.column);
          }
          ve(Ve, O, $, z, ie, Z, ke, be + Ze.line, he + Ze.column, lt, gt);
        }
      }
      function ve(S, O, $, z, ie, Z, ke, be, he, Ie, He) {
        const Pe = Te(S);
        if ("sections" in Pe)
          return _e(...arguments);
        const Ce = new te(Pe, O), Ve = z.length, Ze = Z.length, lt = _(Ce), { resolvedSources: gt, sourcesContent: _t, ignoreList: zt } = Ce;
        if (V(z, gt), V(Z, Ce.names), _t)
          V(ie, _t);
        else
          for (let Ye = 0; Ye < gt.length; Ye++)
            ie.push(null);
        if (zt)
          for (let Ye = 0; Ye < zt.length; Ye++)
            ke.push(zt[Ye] + Ve);
        for (let Ye = 0; Ye < lt.length; Ye++) {
          const Gt = be + Ye;
          if (Gt > Ie)
            return;
          const on = g($, Gt), wn = Ye === 0 ? he : 0, an = lt[Ye];
          for (let Xt = 0; Xt < an.length; Xt++) {
            const ut = an[Xt], Dt = wn + ut[f];
            if (Gt === Ie && Dt >= He)
              return;
            if (ut.length === 1) {
              on.push([Dt]);
              continue;
            }
            const cn = Ve + ut[m], ln = ut[p], un = ut[h];
            on.push(ut.length === 4 ? [Dt, cn, ln, un] : [Dt, cn, ln, un, Ze + ut[k]]);
          }
        }
      }
      function V(S, O) {
        for (let $ = 0; $ < O.length; $++)
          S.push(O[$]);
      }
      function g(S, O) {
        for (let $ = S.length; $ <= O; $++)
          S[$] = [];
        return S[O];
      }
      const v = "`line` must be greater than 0 (lines start at line 1)", R = "`column` must be greater than or equal to 0 (columns start at column 0)", G = -1, Y = 1;
      class te {
        constructor(O, $) {
          const z = typeof O == "string";
          if (!z && O._decodedMemo)
            return O;
          const ie = z ? JSON.parse(O) : O, { version: Z, file: ke, names: be, sourceRoot: he, sources: Ie, sourcesContent: He } = ie;
          this.version = Z, this.file = ke, this.names = be || [], this.sourceRoot = he, this.sources = Ie, this.sourcesContent = He, this.ignoreList = ie.ignoreList || ie.x_google_ignoreList || void 0;
          const Pe = a(he || "", l($));
          this.resolvedSources = Ie.map((Ve) => a(Ve || "", Pe));
          const { mappings: Ce } = ie;
          typeof Ce == "string" ? (this._encoded = Ce, this._decoded = void 0) : (this._encoded = void 0, this._decoded = b(Ce, z)), this._decodedMemo = F(), this._bySources = void 0, this._bySourceMemos = void 0;
        }
      }
      function oe(S) {
        return S;
      }
      function de(S) {
        var O, $;
        return (O = ($ = S)._encoded) !== null && O !== void 0 ? O : $._encoded = r.encode(S._decoded);
      }
      function _(S) {
        var O;
        return (O = S)._decoded || (O._decoded = r.decode(S._encoded));
      }
      function C(S, O, $) {
        const z = _(S);
        if (O >= z.length)
          return null;
        const ie = z[O], Z = ot(ie, S._decodedMemo, O, $, Y);
        return Z === -1 ? null : ie[Z];
      }
      function L(S, O) {
        let { line: $, column: z, bias: ie } = O;
        if ($--, $ < 0)
          throw new Error(v);
        if (z < 0)
          throw new Error(R);
        const Z = _(S);
        if ($ >= Z.length)
          return $e(null, null, null, null);
        const ke = Z[$], be = ot(ke, S._decodedMemo, $, z, ie || Y);
        if (be === -1)
          return $e(null, null, null, null);
        const he = ke[be];
        if (he.length === 1)
          return $e(null, null, null, null);
        const { names: Ie, resolvedSources: He } = S;
        return $e(He[he[m]], he[p] + 1, he[h], he.length === 5 ? Ie[he[k]] : null);
      }
      function M(S, O) {
        const { source: $, line: z, column: ie, bias: Z } = O;
        return Ot(S, $, z, ie, Z || Y, !1);
      }
      function H(S, O) {
        const { source: $, line: z, column: ie, bias: Z } = O;
        return Ot(S, $, z, ie, Z || G, !0);
      }
      function J(S, O) {
        const $ = _(S), { names: z, resolvedSources: ie } = S;
        for (let Z = 0; Z < $.length; Z++) {
          const ke = $[Z];
          for (let be = 0; be < ke.length; be++) {
            const he = ke[be], Ie = Z + 1, He = he[0];
            let Pe = null, Ce = null, Ve = null, Ze = null;
            he.length !== 1 && (Pe = ie[he[1]], Ce = he[2] + 1, Ve = he[3]), he.length === 5 && (Ze = z[he[4]]), O({
              generatedLine: Ie,
              generatedColumn: He,
              source: Pe,
              originalLine: Ce,
              originalColumn: Ve,
              name: Ze
            });
          }
        }
      }
      function Q(S, O) {
        const { sources: $, resolvedSources: z } = S;
        let ie = $.indexOf(O);
        return ie === -1 && (ie = z.indexOf(O)), ie;
      }
      function ae(S, O) {
        const { sourcesContent: $ } = S;
        if ($ == null)
          return null;
        const z = Q(S, O);
        return z === -1 ? null : $[z];
      }
      function me(S, O) {
        const { ignoreList: $ } = S;
        if ($ == null)
          return !1;
        const z = Q(S, O);
        return z === -1 ? !1 : $.includes(z);
      }
      function ye(S, O) {
        const $ = new te(Ae(S, []), O);
        return $._decoded = S.mappings, $;
      }
      function Be(S) {
        return Ae(S, _(S));
      }
      function Je(S) {
        return Ae(S, de(S));
      }
      function Ae(S, O) {
        return {
          version: S.version,
          file: S.file,
          names: S.names,
          sourceRoot: S.sourceRoot,
          sources: S.sources,
          sourcesContent: S.sourcesContent,
          mappings: O,
          ignoreList: S.ignoreList || S.x_google_ignoreList
        };
      }
      function $e(S, O, $, z) {
        return { source: S, line: O, column: $, name: z };
      }
      function je(S, O) {
        return { line: S, column: O };
      }
      function ot(S, O, $, z, ie) {
        let Z = W(S, z, O, $);
        return P ? Z = (ie === G ? D : X)(S, z, Z) : ie === G && Z++, Z === -1 || Z === S.length ? -1 : Z;
      }
      function Lt(S, O, $, z, ie) {
        let Z = ot(S, O, $, z, Y);
        if (!P && ie === G && Z++, Z === -1 || Z === S.length)
          return [];
        const ke = P ? z : S[Z][f];
        P || (Z = X(S, ke, Z));
        const be = D(S, ke, Z), he = [];
        for (; Z <= be; Z++) {
          const Ie = S[Z];
          he.push(je(Ie[I] + 1, Ie[y]));
        }
        return he;
      }
      function Ot(S, O, $, z, ie, Z) {
        var ke;
        if ($--, $ < 0)
          throw new Error(v);
        if (z < 0)
          throw new Error(R);
        const { sources: be, resolvedSources: he } = S;
        let Ie = be.indexOf(O);
        if (Ie === -1 && (Ie = he.indexOf(O)), Ie === -1)
          return Z ? [] : je(null, null);
        const Pe = ((ke = S)._bySources || (ke._bySources = q(_(S), S._bySourceMemos = be.map(F))))[Ie][$];
        if (Pe == null)
          return Z ? [] : je(null, null);
        const Ce = S._bySourceMemos[Ie];
        if (Z)
          return Lt(Pe, Ce, $, z, ie);
        const Ve = ot(Pe, Ce, $, z, ie);
        if (Ve === -1)
          return je(null, null);
        const Ze = Pe[Ve];
        return je(Ze[I] + 1, Ze[y]);
      }
      s.AnyMap = ue, s.GREATEST_LOWER_BOUND = Y, s.LEAST_UPPER_BOUND = G, s.TraceMap = te, s.allGeneratedPositionsFor = H, s.decodedMap = Be, s.decodedMappings = _, s.eachMapping = J, s.encodedMap = Je, s.encodedMappings = de, s.generatedPositionFor = M, s.isIgnored = me, s.originalPositionFor = L, s.presortedDecodedMap = ye, s.sourceContentFor = ae, s.traceSegment = C;
    });
  }(Jn, Jn.exports)), Jn.exports;
}
(function(e, n) {
  (function(s, r) {
    r(n, fc(), w1(), hc());
  })(ht, function(s, r, i, a) {
    class I {
      constructor({ file: v, sourceRoot: R } = {}) {
        this._names = new r.SetArray(), this._sources = new r.SetArray(), this._sourcesContent = [], this._mappings = [], this.file = v, this.sourceRoot = R, this._ignoreList = new r.SetArray();
      }
    }
    function y(g) {
      return g;
    }
    function b(g, v, R, G, Y, te, oe, de) {
      return W(!1, g, v, R, G, Y, te, oe, de);
    }
    function w(g, v) {
      return V(!1, g, v);
    }
    const B = (g, v, R, G, Y, te, oe, de) => W(!0, g, v, R, G, Y, te, oe, de), j = (g, v) => V(!0, g, v);
    function x(g, v, R) {
      const { _sources: G, _sourcesContent: Y } = g, te = r.put(G, v);
      Y[te] = R;
    }
    function P(g, v, R = !0) {
      const { _sources: G, _sourcesContent: Y, _ignoreList: te } = g, oe = r.put(G, v);
      oe === Y.length && (Y[oe] = null), R ? r.put(te, oe) : r.remove(te, oe);
    }
    function N(g) {
      const { _mappings: v, _sources: R, _sourcesContent: G, _names: Y, _ignoreList: te } = g;
      return ue(v), {
        version: 3,
        file: g.file || void 0,
        names: Y.array,
        sourceRoot: g.sourceRoot || void 0,
        sources: R.array,
        sourcesContent: G,
        mappings: v,
        ignoreList: te.array
      };
    }
    function D(g) {
      const v = N(g);
      return Object.assign(Object.assign({}, v), { mappings: i.encode(v.mappings) });
    }
    function X(g) {
      const v = new a.TraceMap(g), R = new I({ file: v.file, sourceRoot: v.sourceRoot });
      return Te(R._names, v.names), Te(R._sources, v.sources), R._sourcesContent = v.sourcesContent || v.sources.map(() => null), R._mappings = a.decodedMappings(v), v.ignoreList && Te(R._ignoreList, v.ignoreList), R;
    }
    function F(g) {
      const v = [], { _mappings: R, _sources: G, _names: Y } = g;
      for (let te = 0; te < R.length; te++) {
        const oe = R[te];
        for (let de = 0; de < oe.length; de++) {
          const _ = oe[de], C = { line: te + 1, column: _[0] };
          let L, M, H;
          _.length !== 1 && (L = G.array[_[1]], M = { line: _[2] + 1, column: _[3] }, _.length === 5 && (H = Y.array[_[4]])), v.push({ generated: C, source: L, original: M, name: H });
        }
      }
      return v;
    }
    function W(g, v, R, G, Y, te, oe, de, _) {
      const { _mappings: C, _sources: L, _sourcesContent: M, _names: H } = v, J = q(C, R), Q = se(J, G);
      if (!Y)
        return g && _e(J, Q) ? void 0 : ee(J, Q, [G]);
      const ae = r.put(L, Y), me = de ? r.put(H, de) : -1;
      if (ae === M.length && (M[ae] = _ ?? null), !(g && ve(J, Q, ae, te, oe, me)))
        return ee(J, Q, de ? [G, ae, te, oe, me] : [G, ae, te, oe]);
    }
    function q(g, v) {
      for (let R = g.length; R <= v; R++)
        g[R] = [];
      return g[v];
    }
    function se(g, v) {
      let R = g.length;
      for (let G = R - 1; G >= 0; R = G--) {
        const Y = g[G];
        if (v >= Y[0])
          break;
      }
      return R;
    }
    function ee(g, v, R) {
      for (let G = g.length; G > v; G--)
        g[G] = g[G - 1];
      g[v] = R;
    }
    function ue(g) {
      const { length: v } = g;
      let R = v;
      for (let G = R - 1; G >= 0 && !(g[G].length > 0); R = G, G--)
        ;
      R < v && (g.length = R);
    }
    function Te(g, v) {
      for (let R = 0; R < v.length; R++)
        r.put(g, v[R]);
    }
    function _e(g, v) {
      return v === 0 ? !0 : g[v - 1].length === 1;
    }
    function ve(g, v, R, G, Y, te) {
      if (v === 0)
        return !1;
      const oe = g[v - 1];
      return oe.length === 1 ? !1 : R === oe[1] && G === oe[2] && Y === oe[3] && te === (oe.length === 5 ? oe[4] : -1);
    }
    function V(g, v, R) {
      const { generated: G, source: Y, original: te, name: oe, content: de } = R;
      return Y ? W(g, v, G.line - 1, G.column, Y, te.line - 1, te.column, oe, de) : W(g, v, G.line - 1, G.column, null, null, null, null, null);
    }
    s.GenMapping = I, s.addMapping = w, s.addSegment = b, s.allMappings = F, s.fromMap = X, s.maybeAddMapping = j, s.maybeAddSegment = B, s.setIgnore = P, s.setSourceContent = x, s.toDecodedMap = N, s.toEncodedMap = D, Object.defineProperty(s, "__esModule", { value: !0 });
  });
})(rr, rr.exports);
var Tn = rr.exports;
function dc({ code: e, mappings: n }, s, r, i, a) {
  const l = mc(i, a), f = new Tn.GenMapping({ file: r.compiledFilename });
  let m = 0, p = n[0];
  for (; p === void 0 && m < n.length - 1; )
    m++, p = n[m];
  let h = 0, k = 0;
  p !== k && Tn.maybeAddSegment(f, h, 0, s, h, 0);
  for (let w = 0; w < e.length; w++) {
    if (w === p) {
      const B = p - k, j = l[m];
      for (Tn.maybeAddSegment(f, h, B, s, h, j); (p === w || p === void 0) && m < n.length - 1; )
        m++, p = n[m];
    }
    e.charCodeAt(w) === d.lineFeed && (h++, k = w + 1, p !== k && Tn.maybeAddSegment(f, h, 0, s, h, 0));
  }
  const { sourceRoot: I, sourcesContent: y, ...b } = Tn.toEncodedMap(f);
  return b;
}
function mc(e, n) {
  const s = new Array(n.length);
  let r = 0, i = n[r].start, a = 0;
  for (let l = 0; l < e.length; l++)
    l === i && (s[r] = i - a, r++, i = n[r].start), e.charCodeAt(l) === d.lineFeed && (a = l + 1);
  return s;
}
const kc = {
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
class ns {
  __init() {
    this.helperNames = {};
  }
  __init2() {
    this.createRequireName = null;
  }
  constructor(n) {
    this.nameManager = n, ns.prototype.__init.call(this), ns.prototype.__init2.call(this);
  }
  getHelperName(n) {
    let s = this.helperNames[n];
    return s || (s = this.nameManager.claimFreeName(`_${n}`), this.helperNames[n] = s, s);
  }
  emitHelpers() {
    let n = "";
    this.helperNames.optionalChainDelete && this.getHelperName("optionalChain"), this.helperNames.asyncOptionalChainDelete && this.getHelperName("asyncOptionalChain");
    for (const [s, r] of Object.entries(kc)) {
      const i = this.helperNames[s];
      let a = r;
      s === "optionalChainDelete" ? a = a.replace("OPTIONAL_CHAIN_NAME", this.helperNames.optionalChain) : s === "asyncOptionalChainDelete" ? a = a.replace(
        "ASYNC_OPTIONAL_CHAIN_NAME",
        this.helperNames.asyncOptionalChain
      ) : s === "require" && (this.createRequireName === null && (this.createRequireName = this.nameManager.claimFreeName("_createRequire")), a = a.replace(/CREATE_REQUIRE_NAME/g, this.createRequireName)), i && (n += " ", n += a.replace(s, i).replace(/\s+/g, " ").trim());
    }
    return n;
  }
}
function ko(e, n, s) {
  gc(e, s) && _c(e, n, s);
}
function gc(e, n) {
  for (const s of e.tokens)
    if (s.type === t.name && !s.isType && Fa(s) && n.has(e.identifierNameForToken(s)))
      return !0;
  return !1;
}
function _c(e, n, s) {
  const r = [];
  let i = n.length - 1;
  for (let a = e.tokens.length - 1; ; a--) {
    for (; r.length > 0 && r[r.length - 1].startTokenIndex === a + 1; )
      r.pop();
    for (; i >= 0 && n[i].endTokenIndex === a + 1; )
      r.push(n[i]), i--;
    if (a < 0)
      break;
    const l = e.tokens[a], f = e.identifierNameForToken(l);
    if (r.length > 1 && !l.isType && l.type === t.name && s.has(f)) {
      if ($a(l))
        go(r[r.length - 1], e, f);
      else if (Ba(l)) {
        let m = r.length - 1;
        for (; m > 0 && !r[m].isFunctionScope; )
          m--;
        if (m < 0)
          throw new Error("Did not find parent function scope.");
        go(r[m], e, f);
      }
    }
  }
  if (r.length > 0)
    throw new Error("Expected empty scope stack after processing file.");
}
function go(e, n, s) {
  for (let r = e.startTokenIndex; r < e.endTokenIndex; r++) {
    const i = n.tokens[r];
    (i.type === t.name || i.type === t.jsxName) && n.identifierNameForToken(i) === s && (i.shadowsGlobal = !0);
  }
}
function yc(e, n) {
  const s = [];
  for (const r of n)
    r.type === t.name && s.push(e.slice(r.start, r.end));
  return s;
}
class br {
  __init() {
    this.usedNames = /* @__PURE__ */ new Set();
  }
  constructor(n, s) {
    br.prototype.__init.call(this), this.usedNames = new Set(yc(n, s));
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
var Se = {}, or = {}, It = {}, vc = ht && ht.__extends || /* @__PURE__ */ function() {
  var e = function(n, s) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var a in i) i.hasOwnProperty(a) && (r[a] = i[a]);
    }, e(n, s);
  };
  return function(n, s) {
    e(n, s);
    function r() {
      this.constructor = n;
    }
    n.prototype = s === null ? Object.create(s) : (r.prototype = s.prototype, new r());
  };
}();
Object.defineProperty(It, "__esModule", { value: !0 });
It.DetailContext = It.NoopContext = It.VError = void 0;
var x1 = (
  /** @class */
  function(e) {
    vc(n, e);
    function n(s, r) {
      var i = e.call(this, r) || this;
      return i.path = s, Object.setPrototypeOf(i, n.prototype), i;
    }
    return n;
  }(Error)
);
It.VError = x1;
var wc = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.fail = function(n, s, r) {
      return !1;
    }, e.prototype.unionResolver = function() {
      return this;
    }, e.prototype.createContext = function() {
      return this;
    }, e.prototype.resolveUnion = function(n) {
    }, e;
  }()
);
It.NoopContext = wc;
var b1 = (
  /** @class */
  function() {
    function e() {
      this._propNames = [""], this._messages = [null], this._score = 0;
    }
    return e.prototype.fail = function(n, s, r) {
      return this._propNames.push(n), this._messages.push(s), this._score += r, !1;
    }, e.prototype.unionResolver = function() {
      return new xc();
    }, e.prototype.resolveUnion = function(n) {
      for (var s, r, i = n, a = null, l = 0, f = i.contexts; l < f.length; l++) {
        var m = f[l];
        (!a || m._score >= a._score) && (a = m);
      }
      a && a._score > 0 && ((s = this._propNames).push.apply(s, a._propNames), (r = this._messages).push.apply(r, a._messages));
    }, e.prototype.getError = function(n) {
      for (var s = [], r = this._propNames.length - 1; r >= 0; r--) {
        var i = this._propNames[r];
        n += typeof i == "number" ? "[" + i + "]" : i ? "." + i : "";
        var a = this._messages[r];
        a && s.push(n + " " + a);
      }
      return new x1(n, s.join("; "));
    }, e.prototype.getErrorDetail = function(n) {
      for (var s = [], r = this._propNames.length - 1; r >= 0; r--) {
        var i = this._propNames[r];
        n += typeof i == "number" ? "[" + i + "]" : i ? "." + i : "";
        var a = this._messages[r];
        a && s.push({ path: n, message: a });
      }
      for (var l = null, r = s.length - 1; r >= 0; r--)
        l && (s[r].nested = [l]), l = s[r];
      return l;
    }, e;
  }()
);
It.DetailContext = b1;
var xc = (
  /** @class */
  function() {
    function e() {
      this.contexts = [];
    }
    return e.prototype.createContext = function() {
      var n = new b1();
      return this.contexts.push(n), n;
    }, e;
  }()
);
(function(e) {
  var n = ht && ht.__extends || /* @__PURE__ */ function() {
    var _ = function(C, L) {
      return _ = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(M, H) {
        M.__proto__ = H;
      } || function(M, H) {
        for (var J in H) H.hasOwnProperty(J) && (M[J] = H[J]);
      }, _(C, L);
    };
    return function(C, L) {
      _(C, L);
      function M() {
        this.constructor = C;
      }
      C.prototype = L === null ? Object.create(L) : (M.prototype = L.prototype, new M());
    };
  }();
  Object.defineProperty(e, "__esModule", { value: !0 }), e.basicTypes = e.BasicType = e.TParamList = e.TParam = e.param = e.TFunc = e.func = e.TProp = e.TOptional = e.opt = e.TIface = e.iface = e.TEnumLiteral = e.enumlit = e.TEnumType = e.enumtype = e.TIntersection = e.intersection = e.TUnion = e.union = e.TTuple = e.tuple = e.TArray = e.array = e.TLiteral = e.lit = e.TName = e.name = e.TType = void 0;
  var s = It, r = (
    /** @class */
    /* @__PURE__ */ function() {
      function _() {
      }
      return _;
    }()
  );
  e.TType = r;
  function i(_) {
    return typeof _ == "string" ? l(_) : _;
  }
  function a(_, C) {
    var L = _[C];
    if (!L)
      throw new Error("Unknown type " + C);
    return L;
  }
  function l(_) {
    return new f(_);
  }
  e.name = l;
  var f = (
    /** @class */
    function(_) {
      n(C, _);
      function C(L) {
        var M = _.call(this) || this;
        return M.name = L, M._failMsg = "is not a " + L, M;
      }
      return C.prototype.getChecker = function(L, M, H) {
        var J = this, Q = a(L, this.name), ae = Q.getChecker(L, M, H);
        return Q instanceof v || Q instanceof C ? ae : function(me, ye) {
          return ae(me, ye) ? !0 : ye.fail(null, J._failMsg, 0);
        };
      }, C;
    }(r)
  );
  e.TName = f;
  function m(_) {
    return new p(_);
  }
  e.lit = m;
  var p = (
    /** @class */
    function(_) {
      n(C, _);
      function C(L) {
        var M = _.call(this) || this;
        return M.value = L, M.name = JSON.stringify(L), M._failMsg = "is not " + M.name, M;
      }
      return C.prototype.getChecker = function(L, M) {
        var H = this;
        return function(J, Q) {
          return J === H.value ? !0 : Q.fail(null, H._failMsg, -1);
        };
      }, C;
    }(r)
  );
  e.TLiteral = p;
  function h(_) {
    return new k(i(_));
  }
  e.array = h;
  var k = (
    /** @class */
    function(_) {
      n(C, _);
      function C(L) {
        var M = _.call(this) || this;
        return M.ttype = L, M;
      }
      return C.prototype.getChecker = function(L, M) {
        var H = this.ttype.getChecker(L, M);
        return function(J, Q) {
          if (!Array.isArray(J))
            return Q.fail(null, "is not an array", 0);
          for (var ae = 0; ae < J.length; ae++) {
            var me = H(J[ae], Q);
            if (!me)
              return Q.fail(ae, null, 1);
          }
          return !0;
        };
      }, C;
    }(r)
  );
  e.TArray = k;
  function I() {
    for (var _ = [], C = 0; C < arguments.length; C++)
      _[C] = arguments[C];
    return new y(_.map(function(L) {
      return i(L);
    }));
  }
  e.tuple = I;
  var y = (
    /** @class */
    function(_) {
      n(C, _);
      function C(L) {
        var M = _.call(this) || this;
        return M.ttypes = L, M;
      }
      return C.prototype.getChecker = function(L, M) {
        var H = this.ttypes.map(function(Q) {
          return Q.getChecker(L, M);
        }), J = function(Q, ae) {
          if (!Array.isArray(Q))
            return ae.fail(null, "is not an array", 0);
          for (var me = 0; me < H.length; me++) {
            var ye = H[me](Q[me], ae);
            if (!ye)
              return ae.fail(me, null, 1);
          }
          return !0;
        };
        return M ? function(Q, ae) {
          return J(Q, ae) ? Q.length <= H.length ? !0 : ae.fail(H.length, "is extraneous", 2) : !1;
        } : J;
      }, C;
    }(r)
  );
  e.TTuple = y;
  function b() {
    for (var _ = [], C = 0; C < arguments.length; C++)
      _[C] = arguments[C];
    return new w(_.map(function(L) {
      return i(L);
    }));
  }
  e.union = b;
  var w = (
    /** @class */
    function(_) {
      n(C, _);
      function C(L) {
        var M = _.call(this) || this;
        M.ttypes = L;
        var H = L.map(function(Q) {
          return Q instanceof f || Q instanceof p ? Q.name : null;
        }).filter(function(Q) {
          return Q;
        }), J = L.length - H.length;
        return H.length ? (J > 0 && H.push(J + " more"), M._failMsg = "is none of " + H.join(", ")) : M._failMsg = "is none of " + J + " types", M;
      }
      return C.prototype.getChecker = function(L, M) {
        var H = this, J = this.ttypes.map(function(Q) {
          return Q.getChecker(L, M);
        });
        return function(Q, ae) {
          for (var me = ae.unionResolver(), ye = 0; ye < J.length; ye++) {
            var Be = J[ye](Q, me.createContext());
            if (Be)
              return !0;
          }
          return ae.resolveUnion(me), ae.fail(null, H._failMsg, 0);
        };
      }, C;
    }(r)
  );
  e.TUnion = w;
  function B() {
    for (var _ = [], C = 0; C < arguments.length; C++)
      _[C] = arguments[C];
    return new j(_.map(function(L) {
      return i(L);
    }));
  }
  e.intersection = B;
  var j = (
    /** @class */
    function(_) {
      n(C, _);
      function C(L) {
        var M = _.call(this) || this;
        return M.ttypes = L, M;
      }
      return C.prototype.getChecker = function(L, M) {
        var H = /* @__PURE__ */ new Set(), J = this.ttypes.map(function(Q) {
          return Q.getChecker(L, M, H);
        });
        return function(Q, ae) {
          var me = J.every(function(ye) {
            return ye(Q, ae);
          });
          return me ? !0 : ae.fail(null, null, 0);
        };
      }, C;
    }(r)
  );
  e.TIntersection = j;
  function x(_) {
    return new P(_);
  }
  e.enumtype = x;
  var P = (
    /** @class */
    function(_) {
      n(C, _);
      function C(L) {
        var M = _.call(this) || this;
        return M.members = L, M.validValues = /* @__PURE__ */ new Set(), M._failMsg = "is not a valid enum value", M.validValues = new Set(Object.keys(L).map(function(H) {
          return L[H];
        })), M;
      }
      return C.prototype.getChecker = function(L, M) {
        var H = this;
        return function(J, Q) {
          return H.validValues.has(J) ? !0 : Q.fail(null, H._failMsg, 0);
        };
      }, C;
    }(r)
  );
  e.TEnumType = P;
  function N(_, C) {
    return new D(_, C);
  }
  e.enumlit = N;
  var D = (
    /** @class */
    function(_) {
      n(C, _);
      function C(L, M) {
        var H = _.call(this) || this;
        return H.enumName = L, H.prop = M, H._failMsg = "is not " + L + "." + M, H;
      }
      return C.prototype.getChecker = function(L, M) {
        var H = this, J = a(L, this.enumName);
        if (!(J instanceof P))
          throw new Error("Type " + this.enumName + " used in enumlit is not an enum type");
        var Q = J.members[this.prop];
        if (!J.members.hasOwnProperty(this.prop))
          throw new Error("Unknown value " + this.enumName + "." + this.prop + " used in enumlit");
        return function(ae, me) {
          return ae === Q ? !0 : me.fail(null, H._failMsg, -1);
        };
      }, C;
    }(r)
  );
  e.TEnumLiteral = D;
  function X(_) {
    return Object.keys(_).map(function(C) {
      return F(C, _[C]);
    });
  }
  function F(_, C) {
    return C instanceof ee ? new ue(_, C.ttype, !0) : new ue(_, i(C), !1);
  }
  function W(_, C) {
    return new q(_, X(C));
  }
  e.iface = W;
  var q = (
    /** @class */
    function(_) {
      n(C, _);
      function C(L, M) {
        var H = _.call(this) || this;
        return H.bases = L, H.props = M, H.propSet = new Set(M.map(function(J) {
          return J.name;
        })), H;
      }
      return C.prototype.getChecker = function(L, M, H) {
        var J = this, Q = this.bases.map(function(Ae) {
          return a(L, Ae).getChecker(L, M);
        }), ae = this.props.map(function(Ae) {
          return Ae.ttype.getChecker(L, M);
        }), me = new s.NoopContext(), ye = this.props.map(function(Ae, $e) {
          return !Ae.isOpt && !ae[$e](void 0, me);
        }), Be = function(Ae, $e) {
          if (typeof Ae != "object" || Ae === null)
            return $e.fail(null, "is not an object", 0);
          for (var je = 0; je < Q.length; je++)
            if (!Q[je](Ae, $e))
              return !1;
          for (var je = 0; je < ae.length; je++) {
            var ot = J.props[je].name, Lt = Ae[ot];
            if (Lt === void 0) {
              if (ye[je])
                return $e.fail(ot, "is missing", 1);
            } else {
              var Ot = ae[je](Lt, $e);
              if (!Ot)
                return $e.fail(ot, null, 1);
            }
          }
          return !0;
        };
        if (!M)
          return Be;
        var Je = this.propSet;
        return H && (this.propSet.forEach(function(Ae) {
          return H.add(Ae);
        }), Je = H), function(Ae, $e) {
          if (!Be(Ae, $e))
            return !1;
          for (var je in Ae)
            if (!Je.has(je))
              return $e.fail(je, "is extraneous", 2);
          return !0;
        };
      }, C;
    }(r)
  );
  e.TIface = q;
  function se(_) {
    return new ee(i(_));
  }
  e.opt = se;
  var ee = (
    /** @class */
    function(_) {
      n(C, _);
      function C(L) {
        var M = _.call(this) || this;
        return M.ttype = L, M;
      }
      return C.prototype.getChecker = function(L, M) {
        var H = this.ttype.getChecker(L, M);
        return function(J, Q) {
          return J === void 0 || H(J, Q);
        };
      }, C;
    }(r)
  );
  e.TOptional = ee;
  var ue = (
    /** @class */
    /* @__PURE__ */ function() {
      function _(C, L, M) {
        this.name = C, this.ttype = L, this.isOpt = M;
      }
      return _;
    }()
  );
  e.TProp = ue;
  function Te(_) {
    for (var C = [], L = 1; L < arguments.length; L++)
      C[L - 1] = arguments[L];
    return new _e(new g(C), i(_));
  }
  e.func = Te;
  var _e = (
    /** @class */
    function(_) {
      n(C, _);
      function C(L, M) {
        var H = _.call(this) || this;
        return H.paramList = L, H.result = M, H;
      }
      return C.prototype.getChecker = function(L, M) {
        return function(H, J) {
          return typeof H == "function" ? !0 : J.fail(null, "is not a function", 0);
        };
      }, C;
    }(r)
  );
  e.TFunc = _e;
  function ve(_, C, L) {
    return new V(_, i(C), !!L);
  }
  e.param = ve;
  var V = (
    /** @class */
    /* @__PURE__ */ function() {
      function _(C, L, M) {
        this.name = C, this.ttype = L, this.isOpt = M;
      }
      return _;
    }()
  );
  e.TParam = V;
  var g = (
    /** @class */
    function(_) {
      n(C, _);
      function C(L) {
        var M = _.call(this) || this;
        return M.params = L, M;
      }
      return C.prototype.getChecker = function(L, M) {
        var H = this, J = this.params.map(function(ye) {
          return ye.ttype.getChecker(L, M);
        }), Q = new s.NoopContext(), ae = this.params.map(function(ye, Be) {
          return !ye.isOpt && !J[Be](void 0, Q);
        }), me = function(ye, Be) {
          if (!Array.isArray(ye))
            return Be.fail(null, "is not an array", 0);
          for (var Je = 0; Je < J.length; Je++) {
            var Ae = H.params[Je];
            if (ye[Je] === void 0) {
              if (ae[Je])
                return Be.fail(Ae.name, "is missing", 1);
            } else {
              var $e = J[Je](ye[Je], Be);
              if (!$e)
                return Be.fail(Ae.name, null, 1);
            }
          }
          return !0;
        };
        return M ? function(ye, Be) {
          return me(ye, Be) ? ye.length <= J.length ? !0 : Be.fail(J.length, "is extraneous", 2) : !1;
        } : me;
      }, C;
    }(r)
  );
  e.TParamList = g;
  var v = (
    /** @class */
    function(_) {
      n(C, _);
      function C(L, M) {
        var H = _.call(this) || this;
        return H.validator = L, H.message = M, H;
      }
      return C.prototype.getChecker = function(L, M) {
        var H = this;
        return function(J, Q) {
          return H.validator(J) ? !0 : Q.fail(null, H.message, 0);
        };
      }, C;
    }(r)
  );
  e.BasicType = v, e.basicTypes = {
    any: new v(function(_) {
      return !0;
    }, "is invalid"),
    number: new v(function(_) {
      return typeof _ == "number";
    }, "is not a number"),
    object: new v(function(_) {
      return typeof _ == "object" && _;
    }, "is not an object"),
    boolean: new v(function(_) {
      return typeof _ == "boolean";
    }, "is not a boolean"),
    string: new v(function(_) {
      return typeof _ == "string";
    }, "is not a string"),
    symbol: new v(function(_) {
      return typeof _ == "symbol";
    }, "is not a symbol"),
    void: new v(function(_) {
      return _ == null;
    }, "is not void"),
    undefined: new v(function(_) {
      return _ === void 0;
    }, "is not undefined"),
    null: new v(function(_) {
      return _ === null;
    }, "is not null"),
    never: new v(function(_) {
      return !1;
    }, "is unexpected"),
    Date: new v(G("[object Date]"), "is not a Date"),
    RegExp: new v(G("[object RegExp]"), "is not a RegExp")
  };
  var R = Object.prototype.toString;
  function G(_) {
    return function(C) {
      return typeof C == "object" && C && R.call(C) === _;
    };
  }
  typeof Buffer < "u" && (e.basicTypes.Buffer = new v(function(_) {
    return Buffer.isBuffer(_);
  }, "is not a Buffer"));
  for (var Y = function(_) {
    e.basicTypes[_.name] = new v(function(C) {
      return C instanceof _;
    }, "is not a " + _.name);
  }, te = 0, oe = [
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
  ]; te < oe.length; te++) {
    var de = oe[te];
    Y(de);
  }
})(or);
(function(e) {
  var n = ht && ht.__spreadArrays || function() {
    for (var m = 0, p = 0, h = arguments.length; p < h; p++) m += arguments[p].length;
    for (var k = Array(m), I = 0, p = 0; p < h; p++)
      for (var y = arguments[p], b = 0, w = y.length; b < w; b++, I++)
        k[I] = y[b];
    return k;
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.Checker = e.createCheckers = void 0;
  var s = or, r = It, i = or;
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
  var a = It;
  Object.defineProperty(e, "VError", { enumerable: !0, get: function() {
    return a.VError;
  } });
  function l() {
    for (var m = [], p = 0; p < arguments.length; p++)
      m[p] = arguments[p];
    for (var h = Object.assign.apply(Object, n([{}, s.basicTypes], m)), k = {}, I = 0, y = m; I < y.length; I++)
      for (var b = y[I], w = 0, B = Object.keys(b); w < B.length; w++) {
        var j = B[w];
        k[j] = new f(h, b[j]);
      }
    return k;
  }
  e.createCheckers = l;
  var f = (
    /** @class */
    function() {
      function m(p, h, k) {
        if (k === void 0 && (k = "value"), this.suite = p, this.ttype = h, this._path = k, this.props = /* @__PURE__ */ new Map(), h instanceof s.TIface)
          for (var I = 0, y = h.props; I < y.length; I++) {
            var b = y[I];
            this.props.set(b.name, b.ttype);
          }
        this.checkerPlain = this.ttype.getChecker(p, !1), this.checkerStrict = this.ttype.getChecker(p, !0);
      }
      return m.prototype.setReportedPath = function(p) {
        this._path = p;
      }, m.prototype.check = function(p) {
        return this._doCheck(this.checkerPlain, p);
      }, m.prototype.test = function(p) {
        return this.checkerPlain(p, new r.NoopContext());
      }, m.prototype.validate = function(p) {
        return this._doValidate(this.checkerPlain, p);
      }, m.prototype.strictCheck = function(p) {
        return this._doCheck(this.checkerStrict, p);
      }, m.prototype.strictTest = function(p) {
        return this.checkerStrict(p, new r.NoopContext());
      }, m.prototype.strictValidate = function(p) {
        return this._doValidate(this.checkerStrict, p);
      }, m.prototype.getProp = function(p) {
        var h = this.props.get(p);
        if (!h)
          throw new Error("Type has no property " + p);
        return new m(this.suite, h, this._path + "." + p);
      }, m.prototype.methodArgs = function(p) {
        var h = this._getMethod(p);
        return new m(this.suite, h.paramList);
      }, m.prototype.methodResult = function(p) {
        var h = this._getMethod(p);
        return new m(this.suite, h.result);
      }, m.prototype.getArgs = function() {
        if (!(this.ttype instanceof s.TFunc))
          throw new Error("getArgs() applied to non-function");
        return new m(this.suite, this.ttype.paramList);
      }, m.prototype.getResult = function() {
        if (!(this.ttype instanceof s.TFunc))
          throw new Error("getResult() applied to non-function");
        return new m(this.suite, this.ttype.result);
      }, m.prototype.getType = function() {
        return this.ttype;
      }, m.prototype._doCheck = function(p, h) {
        var k = new r.NoopContext();
        if (!p(h, k)) {
          var I = new r.DetailContext();
          throw p(h, I), I.getError(this._path);
        }
      }, m.prototype._doValidate = function(p, h) {
        var k = new r.NoopContext();
        if (p(h, k))
          return null;
        var I = new r.DetailContext();
        return p(h, I), I.getErrorDetail(this._path);
      }, m.prototype._getMethod = function(p) {
        var h = this.props.get(p);
        if (!h)
          throw new Error("Type has no property " + p);
        if (!(h instanceof s.TFunc))
          throw new Error("Property " + p + " is not a method");
        return h;
      }, m;
    }()
  );
  e.Checker = f;
})(Se);
const bc = Se.union(
  Se.lit("jsx"),
  Se.lit("typescript"),
  Se.lit("flow"),
  Se.lit("imports"),
  Se.lit("react-hot-loader"),
  Se.lit("jest")
), Ic = Se.iface([], {
  compiledFilename: "string"
}), Tc = Se.iface([], {
  transforms: Se.array("Transform"),
  disableESTransforms: Se.opt("boolean"),
  jsxRuntime: Se.opt(Se.union(Se.lit("classic"), Se.lit("automatic"), Se.lit("preserve"))),
  production: Se.opt("boolean"),
  jsxImportSource: Se.opt("string"),
  jsxPragma: Se.opt("string"),
  jsxFragmentPragma: Se.opt("string"),
  keepUnusedImports: Se.opt("boolean"),
  preserveDynamicImport: Se.opt("boolean"),
  injectCreateRequireForImportRequire: Se.opt("boolean"),
  enableLegacyTypeScriptModuleInterop: Se.opt("boolean"),
  enableLegacyBabel5ModuleInterop: Se.opt("boolean"),
  sourceMapOptions: Se.opt("SourceMapOptions"),
  filePath: Se.opt("string")
}), Sc = {
  Transform: bc,
  SourceMapOptions: Ic,
  Options: Tc
}, { Options: Ec } = Se.createCheckers(Sc);
function Ac(e) {
  Ec.strictCheck(e);
}
function I1() {
  A(), Ge(!1);
}
function T1(e) {
  A(), gs(e);
}
function Ht(e) {
  re(), Ir(e);
}
function ss() {
  re(), o.tokens[o.tokens.length - 1].identifierRole = ne.ImportDeclaration;
}
function Ir(e) {
  let n;
  o.scopeDepth === 0 ? n = ne.TopLevelDeclaration : e ? n = ne.BlockScopedDeclaration : n = ne.FunctionScopedDeclaration, o.tokens[o.tokens.length - 1].identifierRole = n;
}
function gs(e) {
  switch (o.type) {
    case t._this: {
      const n = pe(0);
      A(), fe(n);
      return;
    }
    case t._yield:
    case t.name: {
      o.type = t.name, Ht(e);
      return;
    }
    case t.bracketL: {
      A(), Tr(
        t.bracketR,
        e,
        !0
        /* allowEmpty */
      );
      return;
    }
    case t.braceL:
      Mr(!0, e);
      return;
    default:
      le();
  }
}
function Tr(e, n, s = !1, r = !1, i = 0) {
  let a = !0, l = !1;
  const f = o.tokens.length;
  for (; !T(e) && !o.error; )
    if (a ? a = !1 : (E(t.comma), o.tokens[o.tokens.length - 1].contextId = i, !l && o.tokens[f].isType && (o.tokens[o.tokens.length - 1].isType = !0, l = !0)), !(s && c(t.comma))) {
      if (T(e))
        break;
      if (c(t.ellipsis)) {
        T1(n), S1(), T(t.comma), E(e);
        break;
      } else
        Cc(r, n);
    }
}
function Cc(e, n) {
  e && Sr([
    u._public,
    u._protected,
    u._private,
    u._readonly,
    u._override
  ]), rs(n), S1(), rs(
    n,
    !0
    /* leftAlreadyParsed */
  );
}
function S1() {
  we ? Gu() : ge && jl();
}
function rs(e, n = !1) {
  if (n || gs(e), !T(t.eq))
    return;
  const s = o.tokens.length - 1;
  Ge(), o.tokens[s].rhsEndIndex = o.tokens.length;
}
function ir() {
  return c(t.name);
}
function Nc() {
  return c(t.name) || !!(o.type & t.IS_KEYWORD) || c(t.string) || c(t.num) || c(t.bigint) || c(t.decimal);
}
function E1() {
  const e = o.snapshot();
  return A(), (c(t.bracketL) || c(t.braceL) || c(t.star) || c(t.ellipsis) || c(t.hash) || Nc()) && !Ke() ? !0 : (o.restoreFromSnapshot(e), !1);
}
function Sr(e) {
  for (; A1(e) !== null; )
    ;
}
function A1(e) {
  if (!c(t.name))
    return null;
  const n = o.contextualKeyword;
  if (e.indexOf(n) !== -1 && E1()) {
    switch (n) {
      case u._readonly:
        o.tokens[o.tokens.length - 1].type = t._readonly;
        break;
      case u._abstract:
        o.tokens[o.tokens.length - 1].type = t._abstract;
        break;
      case u._static:
        o.tokens[o.tokens.length - 1].type = t._static;
        break;
      case u._public:
        o.tokens[o.tokens.length - 1].type = t._public;
        break;
      case u._private:
        o.tokens[o.tokens.length - 1].type = t._private;
        break;
      case u._protected:
        o.tokens[o.tokens.length - 1].type = t._protected;
        break;
      case u._override:
        o.tokens[o.tokens.length - 1].type = t._override;
        break;
      case u._declare:
        o.tokens[o.tokens.length - 1].type = t._declare;
        break;
    }
    return n;
  }
  return null;
}
function Un() {
  for (re(); T(t.dot); )
    re();
}
function Pc() {
  Un(), !Ke() && c(t.lessThan) && yn();
}
function Rc() {
  A(), Vn();
}
function Lc() {
  A();
}
function Oc() {
  E(t._typeof), c(t._import) ? C1() : Un(), !Ke() && c(t.lessThan) && yn();
}
function C1() {
  E(t._import), E(t.parenL), E(t.string), E(t.parenR), T(t.dot) && Un(), c(t.lessThan) && yn();
}
function Dc() {
  T(t._const);
  const e = T(t._in), n = Ue(u._out);
  T(t._const), (e || n) && !c(t.name) ? o.tokens[o.tokens.length - 1].type = t.name : re(), T(t._extends) && Me(), T(t.eq) && Me();
}
function sn() {
  c(t.lessThan) && _s();
}
function _s() {
  const e = pe(0);
  for (c(t.lessThan) || c(t.typeParameterStart) ? A() : le(); !T(t.greaterThan) && !o.error; )
    Dc(), T(t.comma);
  fe(e);
}
function Er(e) {
  const n = e === t.arrow;
  sn(), E(t.parenL), o.scopeDepth++, Mc(
    !1
    /* isBlockScope */
  ), o.scopeDepth--, (n || c(e)) && Mn(e);
}
function Mc(e) {
  Tr(t.parenR, e);
}
function os() {
  T(t.comma) || Ne();
}
function _o() {
  Er(t.colon), os();
}
function jc() {
  const e = o.snapshot();
  A();
  const n = T(t.name) && c(t.colon);
  return o.restoreFromSnapshot(e), n;
}
function N1() {
  if (!(c(t.bracketL) && jc()))
    return !1;
  const e = pe(0);
  return E(t.bracketL), re(), Vn(), E(t.bracketR), _n(), os(), fe(e), !0;
}
function yo(e) {
  T(t.question), !e && (c(t.parenL) || c(t.lessThan)) ? (Er(t.colon), os()) : (_n(), os());
}
function Fc() {
  if (c(t.parenL) || c(t.lessThan)) {
    _o();
    return;
  }
  if (c(t._new)) {
    A(), c(t.parenL) || c(t.lessThan) ? _o() : yo(!1);
    return;
  }
  const e = !!A1([u._readonly]);
  N1() || ((K(u._get) || K(u._set)) && E1(), jn(
    -1
    /* Types don't need context IDs. */
  ), yo(e));
}
function $c() {
  P1();
}
function P1() {
  for (E(t.braceL); !T(t.braceR) && !o.error; )
    Fc();
}
function Bc() {
  const e = o.snapshot(), n = qc();
  return o.restoreFromSnapshot(e), n;
}
function qc() {
  return A(), T(t.plus) || T(t.minus) ? K(u._readonly) : (K(u._readonly) && A(), !c(t.bracketL) || (A(), !ir()) ? !1 : (A(), c(t._in)));
}
function Uc() {
  re(), E(t._in), Me();
}
function Vc() {
  E(t.braceL), c(t.plus) || c(t.minus) ? (A(), Fe(u._readonly)) : Ue(u._readonly), E(t.bracketL), Uc(), Ue(u._as) && Me(), E(t.bracketR), c(t.plus) || c(t.minus) ? (A(), E(t.question)) : T(t.question), sl(), Ne(), E(t.braceR);
}
function Wc() {
  for (E(t.bracketL); !T(t.bracketR) && !o.error; )
    Hc(), T(t.comma);
}
function Hc() {
  T(t.ellipsis) ? Me() : (Me(), T(t.question)), T(t.colon) && Me();
}
function zc() {
  E(t.parenL), Me(), E(t.parenR);
}
function Gc() {
  for ($t(), $t(); !c(t.backQuote) && !o.error; )
    E(t.dollarBraceL), Me(), $t(), $t();
  A();
}
var Bt;
(function(e) {
  e[e.TSFunctionType = 0] = "TSFunctionType";
  const s = 1;
  e[e.TSConstructorType = s] = "TSConstructorType";
  const r = s + 1;
  e[e.TSAbstractConstructorType = r] = "TSAbstractConstructorType";
})(Bt || (Bt = {}));
function zs(e) {
  e === Bt.TSAbstractConstructorType && Fe(u._abstract), (e === Bt.TSConstructorType || e === Bt.TSAbstractConstructorType) && E(t._new);
  const n = o.inDisallowConditionalTypesContext;
  o.inDisallowConditionalTypesContext = !1, Er(t.arrow), o.inDisallowConditionalTypesContext = n;
}
function Xc() {
  switch (o.type) {
    case t.name:
      Pc();
      return;
    case t._void:
    case t._null:
      A();
      return;
    case t.string:
    case t.num:
    case t.bigint:
    case t.decimal:
    case t._true:
    case t._false:
      kn();
      return;
    case t.minus:
      A(), kn();
      return;
    case t._this: {
      Lc(), K(u._is) && !Ke() && Rc();
      return;
    }
    case t._typeof:
      Oc();
      return;
    case t._import:
      C1();
      return;
    case t.braceL:
      Bc() ? Vc() : $c();
      return;
    case t.bracketL:
      Wc();
      return;
    case t.parenL:
      zc();
      return;
    case t.backQuote:
      Gc();
      return;
    default:
      if (o.type & t.IS_KEYWORD) {
        A(), o.tokens[o.tokens.length - 1].type = t.name;
        return;
      }
      break;
  }
  le();
}
function Jc() {
  for (Xc(); !Ke() && T(t.bracketL); )
    T(t.bracketR) || (Me(), E(t.bracketR));
}
function Yc() {
  if (Fe(u._infer), re(), c(t._extends)) {
    const e = o.snapshot();
    E(t._extends);
    const n = o.inDisallowConditionalTypesContext;
    o.inDisallowConditionalTypesContext = !0, Me(), o.inDisallowConditionalTypesContext = n, (o.error || !o.inDisallowConditionalTypesContext && c(t.question)) && o.restoreFromSnapshot(e);
  }
}
function ar() {
  if (K(u._keyof) || K(u._unique) || K(u._readonly))
    A(), ar();
  else if (K(u._infer))
    Yc();
  else {
    const e = o.inDisallowConditionalTypesContext;
    o.inDisallowConditionalTypesContext = !1, Jc(), o.inDisallowConditionalTypesContext = e;
  }
}
function vo() {
  if (T(t.bitwiseAND), ar(), c(t.bitwiseAND))
    for (; T(t.bitwiseAND); )
      ar();
}
function Qc() {
  if (T(t.bitwiseOR), vo(), c(t.bitwiseOR))
    for (; T(t.bitwiseOR); )
      vo();
}
function Kc() {
  return c(t.lessThan) ? !0 : c(t.parenL) && el();
}
function Zc() {
  if (c(t.name) || c(t._this))
    return A(), !0;
  if (c(t.braceL) || c(t.bracketL)) {
    let e = 1;
    for (A(); e > 0 && !o.error; )
      c(t.braceL) || c(t.bracketL) ? e++ : (c(t.braceR) || c(t.bracketR)) && e--, A();
    return !0;
  }
  return !1;
}
function el() {
  const e = o.snapshot(), n = tl();
  return o.restoreFromSnapshot(e), n;
}
function tl() {
  return A(), !!(c(t.parenR) || c(t.ellipsis) || Zc() && (c(t.colon) || c(t.comma) || c(t.question) || c(t.eq) || c(t.parenR) && (A(), c(t.arrow))));
}
function Mn(e) {
  const n = pe(0);
  E(e), rl() || Me(), fe(n);
}
function nl() {
  c(t.colon) && Mn(t.colon);
}
function _n() {
  c(t.colon) && Vn();
}
function sl() {
  T(t.colon) && Me();
}
function rl() {
  const e = o.snapshot();
  return K(u._asserts) ? (A(), Ue(u._is) ? (Me(), !0) : ir() || c(t._this) ? (A(), Ue(u._is) && Me(), !0) : (o.restoreFromSnapshot(e), !1)) : ir() || c(t._this) ? (A(), K(u._is) && !Ke() ? (A(), Me(), !0) : (o.restoreFromSnapshot(e), !1)) : !1;
}
function Vn() {
  const e = pe(0);
  E(t.colon), Me(), fe(e);
}
function Me() {
  if (wo(), o.inDisallowConditionalTypesContext || Ke() || !T(t._extends))
    return;
  const e = o.inDisallowConditionalTypesContext;
  o.inDisallowConditionalTypesContext = !0, wo(), o.inDisallowConditionalTypesContext = e, E(t.question), Me(), E(t.colon), Me();
}
function ol() {
  return K(u._abstract) && De() === t._new;
}
function wo() {
  if (Kc()) {
    zs(Bt.TSFunctionType);
    return;
  }
  if (c(t._new)) {
    zs(Bt.TSConstructorType);
    return;
  } else if (ol()) {
    zs(Bt.TSAbstractConstructorType);
    return;
  }
  Qc();
}
function il() {
  const e = pe(1);
  Me(), E(t.greaterThan), fe(e), Wn();
}
function al() {
  if (T(t.jsxTagStart)) {
    o.tokens[o.tokens.length - 1].type = t.typeParameterStart;
    const e = pe(1);
    for (; !c(t.greaterThan) && !o.error; )
      Me(), T(t.comma);
    ct(), fe(e);
  }
}
function R1() {
  for (; !c(t.braceL) && !o.error; )
    cl(), T(t.comma);
}
function cl() {
  Un(), c(t.lessThan) && yn();
}
function ll() {
  Ht(!1), sn(), T(t._extends) && R1(), P1();
}
function ul() {
  Ht(!1), sn(), E(t.eq), Me(), Ne();
}
function fl() {
  if (c(t.string) ? kn() : re(), T(t.eq)) {
    const e = o.tokens.length - 1;
    Ge(), o.tokens[e].rhsEndIndex = o.tokens.length;
  }
}
function Ar() {
  for (Ht(!1), E(t.braceL); !T(t.braceR) && !o.error; )
    fl(), T(t.comma);
}
function Cr() {
  E(t.braceL), xs(
    /* end */
    t.braceR
  );
}
function cr() {
  Ht(!1), T(t.dot) ? cr() : Cr();
}
function L1() {
  K(u._global) ? re() : c(t.string) ? Rt() : le(), c(t.braceL) ? Cr() : Ne();
}
function lr() {
  ss(), E(t.eq), hl(), Ne();
}
function pl() {
  return K(u._require) && De() === t.parenL;
}
function hl() {
  pl() ? dl() : Un();
}
function dl() {
  Fe(u._require), E(t.parenL), c(t.string) || le(), kn(), E(t.parenR);
}
function ml() {
  if (xt())
    return !1;
  switch (o.type) {
    case t._function: {
      const e = pe(1);
      A();
      const n = o.start;
      return en(
        n,
        /* isStatement */
        !0
      ), fe(e), !0;
    }
    case t._class: {
      const e = pe(1);
      return tn(
        /* isStatement */
        !0,
        /* optionalId */
        !1
      ), fe(e), !0;
    }
    case t._const:
      if (c(t._const) && wr(u._enum)) {
        const e = pe(1);
        return E(t._const), Fe(u._enum), o.tokens[o.tokens.length - 1].type = t._enum, Ar(), fe(e), !0;
      }
    case t._var:
    case t._let: {
      const e = pe(1);
      return es(o.type !== t._var), fe(e), !0;
    }
    case t.name: {
      const e = pe(1), n = o.contextualKeyword;
      let s = !1;
      return n === u._global ? (L1(), s = !0) : s = ys(
        n,
        /* isBeforeToken */
        !0
      ), fe(e), s;
    }
    default:
      return !1;
  }
}
function xo() {
  return ys(
    o.contextualKeyword,
    /* isBeforeToken */
    !0
  );
}
function kl(e) {
  switch (e) {
    case u._declare: {
      const n = o.tokens.length - 1;
      if (ml())
        return o.tokens[n].type = t._declare, !0;
      break;
    }
    case u._global:
      if (c(t.braceL))
        return Cr(), !0;
      break;
    default:
      return ys(
        e,
        /* isBeforeToken */
        !1
      );
  }
  return !1;
}
function ys(e, n) {
  switch (e) {
    case u._abstract:
      if (fn(n) && c(t._class))
        return o.tokens[o.tokens.length - 1].type = t._abstract, tn(
          /* isStatement */
          !0,
          /* optionalId */
          !1
        ), !0;
      break;
    case u._enum:
      if (fn(n) && c(t.name))
        return o.tokens[o.tokens.length - 1].type = t._enum, Ar(), !0;
      break;
    case u._interface:
      if (fn(n) && c(t.name)) {
        const s = pe(n ? 2 : 1);
        return ll(), fe(s), !0;
      }
      break;
    case u._module:
      if (fn(n)) {
        if (c(t.string)) {
          const s = pe(n ? 2 : 1);
          return L1(), fe(s), !0;
        } else if (c(t.name)) {
          const s = pe(n ? 2 : 1);
          return cr(), fe(s), !0;
        }
      }
      break;
    case u._namespace:
      if (fn(n) && c(t.name)) {
        const s = pe(n ? 2 : 1);
        return cr(), fe(s), !0;
      }
      break;
    case u._type:
      if (fn(n) && c(t.name)) {
        const s = pe(n ? 2 : 1);
        return ul(), fe(s), !0;
      }
      break;
  }
  return !1;
}
function fn(e) {
  return e ? (A(), !0) : !xt();
}
function gl() {
  const e = o.snapshot();
  return _s(), vn(), nl(), E(t.arrow), o.error ? (o.restoreFromSnapshot(e), !1) : (Hn(!0), !0);
}
function Nr() {
  o.type === t.bitShiftL && (o.pos -= 1, ce(t.lessThan)), yn();
}
function yn() {
  const e = pe(0);
  for (E(t.lessThan); !c(t.greaterThan) && !o.error; )
    Me(), T(t.comma);
  e ? (E(t.greaterThan), fe(e)) : (fe(e), d1(), E(t.greaterThan), o.tokens[o.tokens.length - 1].isType = !0);
}
function O1() {
  if (c(t.name))
    switch (o.contextualKeyword) {
      case u._abstract:
      case u._declare:
      case u._enum:
      case u._interface:
      case u._module:
      case u._namespace:
      case u._type:
        return !0;
    }
  return !1;
}
function _l(e, n) {
  if (c(t.colon) && Mn(t.colon), !c(t.braceL) && xt()) {
    let s = o.tokens.length - 1;
    for (; s >= 0 && (o.tokens[s].start >= e || o.tokens[s].type === t._default || o.tokens[s].type === t._export); )
      o.tokens[s].isType = !0, s--;
    return;
  }
  Hn(!1, n);
}
function yl(e, n, s) {
  if (!Ke() && T(t.bang)) {
    o.tokens[o.tokens.length - 1].type = t.nonNullAssertion;
    return;
  }
  if (c(t.lessThan) || c(t.bitShiftL)) {
    const r = o.snapshot();
    if (!n && U1() && gl())
      return;
    if (Nr(), !n && T(t.parenL) ? (o.tokens[o.tokens.length - 1].subscriptStartIndex = e, qt()) : c(t.backQuote) ? Dr() : (
      // The remaining possible case is an instantiation expression, e.g.
      // Array<number> . Check for a few cases that would disqualify it and
      // cause us to bail out.
      // a<b>>c is not (a<b>)>c, but a<(b>>c)
      (o.type === t.greaterThan || // a<b>c is (a<b)>c
      o.type !== t.parenL && o.type & t.IS_EXPRESSION_START && !Ke()) && le()
    ), o.error)
      o.restoreFromSnapshot(r);
    else
      return;
  } else !n && c(t.questionDot) && De() === t.lessThan && (A(), o.tokens[e].isOptionalChainStart = !0, o.tokens[o.tokens.length - 1].subscriptStartIndex = e, yn(), E(t.parenL), qt());
  Rr(e, n, s);
}
function vl() {
  if (T(t._import))
    return K(u._type) && De() !== t.eq && Fe(u._type), lr(), !0;
  if (T(t.eq))
    return ze(), Ne(), !0;
  if (Ue(u._as))
    return Fe(u._namespace), re(), Ne(), !0;
  if (K(u._type)) {
    const e = De();
    (e === t.braceL || e === t.star) && A();
  }
  return !1;
}
function wl() {
  if (re(), c(t.comma) || c(t.braceR)) {
    o.tokens[o.tokens.length - 1].identifierRole = ne.ImportDeclaration;
    return;
  }
  if (re(), c(t.comma) || c(t.braceR)) {
    o.tokens[o.tokens.length - 1].identifierRole = ne.ImportDeclaration, o.tokens[o.tokens.length - 2].isType = !0, o.tokens[o.tokens.length - 1].isType = !0;
    return;
  }
  if (re(), c(t.comma) || c(t.braceR)) {
    o.tokens[o.tokens.length - 3].identifierRole = ne.ImportAccess, o.tokens[o.tokens.length - 1].identifierRole = ne.ImportDeclaration;
    return;
  }
  re(), o.tokens[o.tokens.length - 3].identifierRole = ne.ImportAccess, o.tokens[o.tokens.length - 1].identifierRole = ne.ImportDeclaration, o.tokens[o.tokens.length - 4].isType = !0, o.tokens[o.tokens.length - 3].isType = !0, o.tokens[o.tokens.length - 2].isType = !0, o.tokens[o.tokens.length - 1].isType = !0;
}
function xl() {
  if (re(), c(t.comma) || c(t.braceR)) {
    o.tokens[o.tokens.length - 1].identifierRole = ne.ExportAccess;
    return;
  }
  if (re(), c(t.comma) || c(t.braceR)) {
    o.tokens[o.tokens.length - 1].identifierRole = ne.ExportAccess, o.tokens[o.tokens.length - 2].isType = !0, o.tokens[o.tokens.length - 1].isType = !0;
    return;
  }
  if (re(), c(t.comma) || c(t.braceR)) {
    o.tokens[o.tokens.length - 3].identifierRole = ne.ExportAccess;
    return;
  }
  re(), o.tokens[o.tokens.length - 3].identifierRole = ne.ExportAccess, o.tokens[o.tokens.length - 4].isType = !0, o.tokens[o.tokens.length - 3].isType = !0, o.tokens[o.tokens.length - 2].isType = !0, o.tokens[o.tokens.length - 1].isType = !0;
}
function bl() {
  if (K(u._abstract) && De() === t._class)
    return o.type = t._abstract, A(), tn(!0, !0), !0;
  if (K(u._interface)) {
    const e = pe(2);
    return ys(u._interface, !0), fe(e), !0;
  }
  return !1;
}
function Il() {
  if (o.type === t._const) {
    const e = qn();
    if (e.type === t.name && e.contextualKeyword === u._enum)
      return E(t._const), Fe(u._enum), o.tokens[o.tokens.length - 1].type = t._enum, Ar(), !0;
  }
  return !1;
}
function Tl(e) {
  const n = o.tokens.length;
  Sr([
    u._abstract,
    u._readonly,
    u._declare,
    u._static,
    u._override
  ]);
  const s = o.tokens.length;
  if (N1()) {
    const i = e ? n - 1 : n;
    for (let a = i; a < s; a++)
      o.tokens[a].isType = !0;
    return !0;
  }
  return !1;
}
function Sl(e) {
  kl(e) || Ne();
}
function El() {
  const e = Ue(u._declare);
  e && (o.tokens[o.tokens.length - 1].type = t._declare);
  let n = !1;
  if (c(t.name))
    if (e) {
      const s = pe(2);
      n = xo(), fe(s);
    } else
      n = xo();
  if (!n)
    if (e) {
      const s = pe(2);
      rt(!0), fe(s);
    } else
      rt(!0);
}
function Al(e) {
  if (e && (c(t.lessThan) || c(t.bitShiftL)) && Nr(), Ue(u._implements)) {
    o.tokens[o.tokens.length - 1].type = t._implements;
    const n = pe(1);
    R1(), fe(n);
  }
}
function Cl() {
  sn();
}
function Nl() {
  sn();
}
function Pl() {
  const e = pe(0);
  Ke() || T(t.bang), _n(), fe(e);
}
function Rl() {
  c(t.colon) && Vn();
}
function Ll(e, n) {
  return ms ? Ol(e, n) : Dl(e, n);
}
function Ol(e, n) {
  if (!c(t.lessThan))
    return Tt(e, n);
  const s = o.snapshot();
  let r = Tt(e, n);
  if (o.error)
    o.restoreFromSnapshot(s);
  else
    return r;
  return o.type = t.typeParameterStart, _s(), r = Tt(e, n), r || le(), r;
}
function Dl(e, n) {
  if (!c(t.lessThan))
    return Tt(e, n);
  const s = o.snapshot();
  _s();
  const r = Tt(e, n);
  if (r || le(), o.error)
    o.restoreFromSnapshot(s);
  else
    return r;
  return Tt(e, n);
}
function Ml() {
  if (c(t.colon)) {
    const e = o.snapshot();
    Mn(t.colon), st() && le(), c(t.arrow) || le(), o.error && o.restoreFromSnapshot(e);
  }
  return T(t.arrow);
}
function jl() {
  const e = pe(0);
  T(t.question), _n(), fe(e);
}
function Fl() {
  (c(t.lessThan) || c(t.bitShiftL)) && Nr(), ei();
}
function $l() {
  let e = !1, n = !1;
  for (; ; ) {
    if (o.pos >= U.length) {
      le("Unterminated JSX contents");
      return;
    }
    const s = U.charCodeAt(o.pos);
    if (s === d.lessThan || s === d.leftCurlyBrace) {
      if (o.pos === o.start) {
        if (s === d.lessThan) {
          o.pos++, ce(t.jsxTagStart);
          return;
        }
        m1(s);
        return;
      }
      ce(e && !n ? t.jsxEmptyText : t.jsxText);
      return;
    }
    s === d.lineFeed ? e = !0 : s !== d.space && s !== d.carriageReturn && s !== d.tab && (n = !0), o.pos++;
  }
}
function Bl(e) {
  for (o.pos++; ; ) {
    if (o.pos >= U.length) {
      le("Unterminated string constant");
      return;
    }
    if (U.charCodeAt(o.pos) === e) {
      o.pos++;
      break;
    }
    o.pos++;
  }
  ce(t.string);
}
function ql() {
  let e;
  do {
    if (o.pos > U.length) {
      le("Unexpectedly reached the end of input.");
      return;
    }
    e = U.charCodeAt(++o.pos);
  } while (dt[e] || e === d.dash);
  ce(t.jsxName);
}
function ur() {
  ct();
}
function D1(e) {
  if (ur(), !T(t.colon)) {
    o.tokens[o.tokens.length - 1].identifierRole = e;
    return;
  }
  ur();
}
function M1() {
  const e = o.tokens.length;
  D1(ne.Access);
  let n = !1;
  for (; c(t.dot); )
    n = !0, ct(), ur();
  if (!n) {
    const s = o.tokens[e], r = U.charCodeAt(s.start);
    r >= d.lowercaseA && r <= d.lowercaseZ && (s.identifierRole = null);
  }
}
function Ul() {
  switch (o.type) {
    case t.braceL:
      A(), ze(), ct();
      return;
    case t.jsxTagStart:
      F1(), ct();
      return;
    case t.string:
      ct();
      return;
    default:
      le("JSX value should be either an expression or a quoted JSX text");
  }
}
function Vl() {
  E(t.ellipsis), ze();
}
function Wl(e) {
  if (c(t.jsxTagEnd))
    return !1;
  M1(), ge && al();
  let n = !1;
  for (; !c(t.slash) && !c(t.jsxTagEnd) && !o.error; ) {
    if (T(t.braceL)) {
      n = !0, E(t.ellipsis), Ge(), ct();
      continue;
    }
    n && o.end - o.start === 3 && U.charCodeAt(o.start) === d.lowercaseK && U.charCodeAt(o.start + 1) === d.lowercaseE && U.charCodeAt(o.start + 2) === d.lowercaseY && (o.tokens[e].jsxRole = pt.KeyAfterPropSpread), D1(ne.ObjectKey), c(t.eq) && (ct(), Ul());
  }
  const s = c(t.slash);
  return s && ct(), s;
}
function Hl() {
  c(t.jsxTagEnd) || M1();
}
function j1() {
  const e = o.tokens.length - 1;
  o.tokens[e].jsxRole = pt.NoChildren;
  let n = 0;
  if (!Wl(e))
    for (pn(); ; )
      switch (o.type) {
        case t.jsxTagStart:
          if (ct(), c(t.slash)) {
            ct(), Hl(), o.tokens[e].jsxRole !== pt.KeyAfterPropSpread && (n === 1 ? o.tokens[e].jsxRole = pt.OneChild : n > 1 && (o.tokens[e].jsxRole = pt.StaticChildren));
            return;
          }
          n++, j1(), pn();
          break;
        case t.jsxText:
          n++, pn();
          break;
        case t.jsxEmptyText:
          pn();
          break;
        case t.braceL:
          A(), c(t.ellipsis) ? (Vl(), pn(), n += 2) : (c(t.braceR) || (n++, ze()), pn());
          break;
        default:
          le();
          return;
      }
}
function F1() {
  ct(), j1();
}
function ct() {
  o.tokens.push(new ks()), p1(), o.start = o.pos;
  const e = U.charCodeAt(o.pos);
  if (Bn[e])
    ql();
  else if (e === d.quotationMark || e === d.apostrophe)
    Bl(e);
  else
    switch (++o.pos, e) {
      case d.greaterThan:
        ce(t.jsxTagEnd);
        break;
      case d.lessThan:
        ce(t.jsxTagStart);
        break;
      case d.slash:
        ce(t.slash);
        break;
      case d.equalsTo:
        ce(t.eq);
        break;
      case d.leftCurlyBrace:
        ce(t.braceL);
        break;
      case d.dot:
        ce(t.dot);
        break;
      case d.colon:
        ce(t.colon);
        break;
      default:
        le();
    }
}
function pn() {
  o.tokens.push(new ks()), o.start = o.pos, $l();
}
function zl(e) {
  if (c(t.question)) {
    const n = De();
    if (n === t.colon || n === t.comma || n === t.parenR)
      return;
  }
  $1(e);
}
function Gl() {
  a1(t.question), c(t.colon) && (ge ? Vn() : we && rn());
}
class Xl {
  constructor(n) {
    this.stop = n;
  }
}
function ze(e = !1) {
  if (Ge(e), c(t.comma))
    for (; T(t.comma); )
      Ge(e);
}
function Ge(e = !1, n = !1) {
  return ge ? Ll(e, n) : we ? Zu(e, n) : Tt(e, n);
}
function Tt(e, n) {
  if (c(t._yield))
    return uu(), !1;
  (c(t.parenL) || c(t.name) || c(t._yield)) && (o.potentialArrowAt = o.start);
  const s = Jl(e);
  return n && Or(), o.type & t.IS_ASSIGN ? (A(), Ge(e), !1) : s;
}
function Jl(e) {
  return Ql(e) ? !0 : (Yl(e), !1);
}
function Yl(e) {
  ge || we ? zl(e) : $1(e);
}
function $1(e) {
  T(t.question) && (Ge(), E(t.colon), Ge(e));
}
function Ql(e) {
  const n = o.tokens.length;
  return Wn() ? !0 : (Kn(n, -1, e), !1);
}
function Kn(e, n, s) {
  if (ge && (t._in & t.PRECEDENCE_MASK) > n && !Ke() && (Ue(u._as) || Ue(u._satisfies))) {
    const i = pe(1);
    Me(), fe(i), d1(), Kn(e, n, s);
    return;
  }
  const r = o.type & t.PRECEDENCE_MASK;
  if (r > 0 && (!s || !c(t._in)) && r > n) {
    const i = o.type;
    A(), i === t.nullishCoalescing && (o.tokens[o.tokens.length - 1].nullishStartIndex = e);
    const a = o.tokens.length;
    Wn(), Kn(a, i & t.IS_RIGHT_ASSOCIATIVE ? r - 1 : r, s), i === t.nullishCoalescing && (o.tokens[e].numNullishCoalesceStarts++, o.tokens[o.tokens.length - 1].numNullishCoalesceEnds++), Kn(e, n, s);
  }
}
function Wn() {
  if (ge && !ms && T(t.lessThan))
    return il(), !1;
  if (K(u._module) && l1() === d.leftCurlyBrace && !n1())
    return fu(), !1;
  if (o.type & t.IS_PREFIX)
    return A(), Wn(), !1;
  if (B1())
    return !0;
  for (; o.type & t.IS_POSTFIX && !st(); )
    o.type === t.preIncDec && (o.type = t.postIncDec), A();
  return !1;
}
function B1() {
  const e = o.tokens.length;
  return Rt() ? !0 : (Pr(e), o.tokens.length > e && o.tokens[e].isOptionalChainStart && (o.tokens[o.tokens.length - 1].isOptionalChainEnd = !0), !1);
}
function Pr(e, n = !1) {
  we ? tf(e, n) : q1(e, n);
}
function q1(e, n = !1) {
  const s = new Xl(!1);
  do
    Kl(e, n, s);
  while (!s.stop && !o.error);
}
function Kl(e, n, s) {
  ge ? yl(e, n, s) : we ? Du(e, n, s) : Rr(e, n, s);
}
function Rr(e, n, s) {
  if (!n && T(t.doubleColon))
    Lr(), s.stop = !0, Pr(e, n);
  else if (c(t.questionDot)) {
    if (o.tokens[e].isOptionalChainStart = !0, n && De() === t.parenL) {
      s.stop = !0;
      return;
    }
    A(), o.tokens[o.tokens.length - 1].subscriptStartIndex = e, T(t.bracketL) ? (ze(), E(t.bracketR)) : T(t.parenL) ? qt() : is();
  } else if (T(t.dot))
    o.tokens[o.tokens.length - 1].subscriptStartIndex = e, is();
  else if (T(t.bracketL))
    o.tokens[o.tokens.length - 1].subscriptStartIndex = e, ze(), E(t.bracketR);
  else if (!n && c(t.parenL))
    if (U1()) {
      const r = o.snapshot(), i = o.tokens.length;
      A(), o.tokens[o.tokens.length - 1].subscriptStartIndex = e;
      const a = On();
      o.tokens[o.tokens.length - 1].contextId = a, qt(), o.tokens[o.tokens.length - 1].contextId = a, Zl() && (o.restoreFromSnapshot(r), s.stop = !0, o.scopeDepth++, vn(), eu(i));
    } else {
      A(), o.tokens[o.tokens.length - 1].subscriptStartIndex = e;
      const r = On();
      o.tokens[o.tokens.length - 1].contextId = r, qt(), o.tokens[o.tokens.length - 1].contextId = r;
    }
  else c(t.backQuote) ? Dr() : s.stop = !0;
}
function U1() {
  return o.tokens[o.tokens.length - 1].contextualKeyword === u._async && !st();
}
function qt() {
  let e = !0;
  for (; !T(t.parenR) && !o.error; ) {
    if (e)
      e = !1;
    else if (E(t.comma), T(t.parenR))
      break;
    z1(!1);
  }
}
function Zl() {
  return c(t.colon) || c(t.arrow);
}
function eu(e) {
  ge ? Rl() : we && Ku(), E(t.arrow), Fn(e);
}
function Lr() {
  const e = o.tokens.length;
  Rt(), Pr(e, !0);
}
function Rt() {
  if (T(t.modulo))
    return re(), !1;
  if (c(t.jsxText) || c(t.jsxEmptyText))
    return kn(), !1;
  if (c(t.lessThan) && ms)
    return o.type = t.jsxTagStart, F1(), A(), !1;
  const e = o.potentialArrowAt === o.start;
  switch (o.type) {
    case t.slash:
    case t.assign:
      Ua();
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
      return A(), !1;
    case t._import:
      return A(), c(t.dot) && (o.tokens[o.tokens.length - 1].type = t.name, A(), re()), !1;
    case t.name: {
      const n = o.tokens.length, s = o.start, r = o.contextualKeyword;
      return re(), r === u._await ? (lu(), !1) : r === u._async && c(t._function) && !st() ? (A(), en(s, !1), !1) : e && r === u._async && !st() && c(t.name) ? (o.scopeDepth++, Ht(!1), E(t.arrow), Fn(n), !0) : c(t._do) && !st() ? (A(), Ut(), !1) : e && !st() && c(t.arrow) ? (o.scopeDepth++, Ir(!1), E(t.arrow), Fn(n), !0) : (o.tokens[o.tokens.length - 1].identifierRole = ne.Access, !1);
    }
    case t._do:
      return A(), Ut(), !1;
    case t.parenL:
      return V1(e);
    case t.bracketL:
      return A(), H1(t.bracketR, !0), !1;
    case t.braceL:
      return Mr(!1, !1), !1;
    case t._function:
      return tu(), !1;
    case t.at:
      Hr();
    case t._class:
      return tn(!1), !1;
    case t._new:
      return su(), !1;
    case t.backQuote:
      return Dr(), !1;
    case t.doubleColon:
      return A(), Lr(), !1;
    case t.hash: {
      const n = l1();
      return Bn[n] || n === d.backslash ? is() : A(), !1;
    }
    default:
      return le(), !1;
  }
}
function is() {
  T(t.hash), re();
}
function tu() {
  const e = o.start;
  re(), T(t.dot) && re(), en(e, !1);
}
function kn() {
  A();
}
function vs() {
  E(t.parenL), ze(), E(t.parenR);
}
function V1(e) {
  const n = o.snapshot(), s = o.tokens.length;
  E(t.parenL);
  let r = !0;
  for (; !c(t.parenR) && !o.error; ) {
    if (r)
      r = !1;
    else if (E(t.comma), c(t.parenR))
      break;
    if (c(t.ellipsis)) {
      T1(
        !1
        /* isBlockScope */
      ), Or();
      break;
    } else
      Ge(!1, !0);
  }
  return E(t.parenR), e && nu() && fr() ? (o.restoreFromSnapshot(n), o.scopeDepth++, vn(), fr(), Fn(s), o.error ? (o.restoreFromSnapshot(n), V1(!1), !1) : !0) : !1;
}
function nu() {
  return c(t.colon) || !st();
}
function fr() {
  return ge ? Ml() : we ? ef() : T(t.arrow);
}
function Or() {
  (ge || we) && Gl();
}
function su() {
  if (E(t._new), T(t.dot)) {
    re();
    return;
  }
  ru(), we && Mu(), T(t.parenL) && H1(t.parenR);
}
function ru() {
  Lr(), T(t.questionDot);
}
function Dr() {
  for ($t(), $t(); !c(t.backQuote) && !o.error; )
    E(t.dollarBraceL), ze(), $t(), $t();
  A();
}
function Mr(e, n) {
  const s = On();
  let r = !0;
  for (A(), o.tokens[o.tokens.length - 1].contextId = s; !T(t.braceR) && !o.error; ) {
    if (r)
      r = !1;
    else if (E(t.comma), T(t.braceR))
      break;
    let i = !1;
    if (c(t.ellipsis)) {
      const a = o.tokens.length;
      if (I1(), e && (o.tokens.length === a + 2 && Ir(n), T(t.braceR)))
        break;
      continue;
    }
    e || (i = T(t.star)), !e && K(u._async) ? (i && le(), re(), c(t.colon) || c(t.parenL) || c(t.braceR) || c(t.eq) || c(t.comma) || (c(t.star) && (A(), i = !0), jn(s))) : jn(s), cu(e, n, s);
  }
  o.tokens[o.tokens.length - 1].contextId = s;
}
function ou(e) {
  return !e && (c(t.string) || // get "string"() {}
  c(t.num) || // get 1() {}
  c(t.bracketL) || // get ["string"]() {}
  c(t.name) || // get foo() {}
  !!(o.type & t.IS_KEYWORD));
}
function iu(e, n) {
  const s = o.start;
  return c(t.parenL) ? (e && le(), pr(
    s,
    /* isConstructor */
    !1
  ), !0) : ou(e) ? (jn(n), pr(
    s,
    /* isConstructor */
    !1
  ), !0) : !1;
}
function au(e, n) {
  if (T(t.colon)) {
    e ? rs(n) : Ge(!1);
    return;
  }
  let s;
  e ? o.scopeDepth === 0 ? s = ne.ObjectShorthandTopLevelDeclaration : n ? s = ne.ObjectShorthandBlockScopedDeclaration : s = ne.ObjectShorthandFunctionScopedDeclaration : s = ne.ObjectShorthand, o.tokens[o.tokens.length - 1].identifierRole = s, rs(n, !0);
}
function cu(e, n, s) {
  ge ? Cl() : we && zu(), iu(e, s) || au(e, n);
}
function jn(e) {
  we && Wr(), T(t.bracketL) ? (o.tokens[o.tokens.length - 1].contextId = e, Ge(), E(t.bracketR), o.tokens[o.tokens.length - 1].contextId = e) : (c(t.num) || c(t.string) || c(t.bigint) || c(t.decimal) ? Rt() : is(), o.tokens[o.tokens.length - 1].identifierRole = ne.ObjectKey, o.tokens[o.tokens.length - 1].contextId = e);
}
function pr(e, n) {
  const s = On();
  o.scopeDepth++;
  const r = o.tokens.length;
  vn(n, s), W1(e, s);
  const a = o.tokens.length;
  o.scopes.push(new St(r, a, !0)), o.scopeDepth--;
}
function Fn(e) {
  Hn(!0);
  const n = o.tokens.length;
  o.scopes.push(new St(e, n, !0)), o.scopeDepth--;
}
function W1(e, n = 0) {
  ge ? _l(e, n) : we ? Ou(n) : Hn(!1, n);
}
function Hn(e, n = 0) {
  e && !c(t.braceL) ? Ge() : Ut(!0, n);
}
function H1(e, n = !1) {
  let s = !0;
  for (; !T(e) && !o.error; ) {
    if (s)
      s = !1;
    else if (E(t.comma), T(e)) break;
    z1(n);
  }
}
function z1(e) {
  e && c(t.comma) || (c(t.ellipsis) ? (I1(), Or()) : c(t.question) ? A() : Ge(!1, !0));
}
function re() {
  A(), o.tokens[o.tokens.length - 1].type = t.name;
}
function lu() {
  Wn();
}
function uu() {
  A(), !c(t.semi) && !st() && (T(t.star), Ge());
}
function fu() {
  Fe(u._module), E(t.braceL), xs(t.braceR);
}
function pu(e) {
  return (e.type === t.name || !!(e.type & t.IS_KEYWORD)) && e.contextualKeyword !== u._from;
}
function Et(e) {
  const n = pe(0);
  E(e || t.colon), et(), fe(n);
}
function bo() {
  E(t.modulo), Fe(u._checks), T(t.parenL) && (ze(), E(t.parenR));
}
function jr() {
  const e = pe(0);
  E(t.colon), c(t.modulo) ? bo() : (et(), c(t.modulo) && bo()), fe(e);
}
function hu() {
  A(), Fr(
    /* isClass */
    !0
  );
}
function du() {
  A(), re(), c(t.lessThan) && kt(), E(t.parenL), dr(), E(t.parenR), jr(), Ne();
}
function hr() {
  c(t._class) ? hu() : c(t._function) ? du() : c(t._var) ? mu() : Ue(u._module) ? T(t.dot) ? _u() : ku() : K(u._type) ? yu() : K(u._opaque) ? vu() : K(u._interface) ? wu() : c(t._export) ? gu() : le();
}
function mu() {
  A(), Y1(), Ne();
}
function ku() {
  for (c(t.string) ? Rt() : re(), E(t.braceL); !c(t.braceR) && !o.error; )
    c(t._import) ? (A(), ii()) : le();
  E(t.braceR);
}
function gu() {
  E(t._export), T(t._default) ? c(t._function) || c(t._class) ? hr() : (et(), Ne()) : c(t._var) || // declare export var ...
  c(t._function) || // declare export function ...
  c(t._class) || // declare export class ...
  K(u._opaque) ? hr() : c(t.star) || // declare export * from ''
  c(t.braceL) || // declare export {} ...
  K(u._interface) || // declare export interface ...
  K(u._type) || // declare export type ...
  K(u._opaque) ? ri() : le();
}
function _u() {
  Fe(u._exports), rn(), Ne();
}
function yu() {
  A(), Br();
}
function vu() {
  A(), qr(!0);
}
function wu() {
  A(), Fr();
}
function Fr(e = !1) {
  if (ws(), c(t.lessThan) && kt(), T(t._extends))
    do
      Zn();
    while (!e && T(t.comma));
  if (K(u._mixins)) {
    A();
    do
      Zn();
    while (T(t.comma));
  }
  if (K(u._implements)) {
    A();
    do
      Zn();
    while (T(t.comma));
  }
  as(e, !1, e);
}
function Zn() {
  G1(!1), c(t.lessThan) && Zt();
}
function $r() {
  Fr();
}
function ws() {
  re();
}
function Br() {
  ws(), c(t.lessThan) && kt(), Et(t.eq), Ne();
}
function qr(e) {
  Fe(u._type), ws(), c(t.lessThan) && kt(), c(t.colon) && Et(t.colon), e || Et(t.eq), Ne();
}
function xu() {
  Wr(), Y1(), T(t.eq) && et();
}
function kt() {
  const e = pe(0);
  c(t.lessThan) || c(t.typeParameterStart) ? A() : le();
  do
    xu(), c(t.greaterThan) || E(t.comma);
  while (!c(t.greaterThan) && !o.error);
  E(t.greaterThan), fe(e);
}
function Zt() {
  const e = pe(0);
  for (E(t.lessThan); !c(t.greaterThan) && !o.error; )
    et(), c(t.greaterThan) || E(t.comma);
  E(t.greaterThan), fe(e);
}
function bu() {
  if (Fe(u._interface), T(t._extends))
    do
      Zn();
    while (T(t.comma));
  as(!1, !1, !1);
}
function Ur() {
  c(t.num) || c(t.string) ? Rt() : re();
}
function Iu() {
  De() === t.colon ? (Ur(), Et()) : et(), E(t.bracketR), Et();
}
function Tu() {
  Ur(), E(t.bracketR), E(t.bracketR), c(t.lessThan) || c(t.parenL) ? Vr() : (T(t.question), Et());
}
function Vr() {
  for (c(t.lessThan) && kt(), E(t.parenL); !c(t.parenR) && !c(t.ellipsis) && !o.error; )
    cs(), c(t.parenR) || E(t.comma);
  T(t.ellipsis) && cs(), E(t.parenR), Et();
}
function Su() {
  Vr();
}
function as(e, n, s) {
  let r;
  for (n && c(t.braceBarL) ? (E(t.braceBarL), r = t.braceBarR) : (E(t.braceL), r = t.braceR); !c(r) && !o.error; ) {
    if (s && K(u._proto)) {
      const i = De();
      i !== t.colon && i !== t.question && (A(), e = !1);
    }
    if (e && K(u._static)) {
      const i = De();
      i !== t.colon && i !== t.question && A();
    }
    if (Wr(), T(t.bracketL))
      T(t.bracketL) ? Tu() : Iu();
    else if (c(t.parenL) || c(t.lessThan))
      Su();
    else {
      if (K(u._get) || K(u._set)) {
        const i = De();
        (i === t.name || i === t.string || i === t.num) && A();
      }
      Eu();
    }
    Au();
  }
  E(r);
}
function Eu() {
  if (c(t.ellipsis)) {
    if (E(t.ellipsis), T(t.comma) || T(t.semi), c(t.braceR))
      return;
    et();
  } else
    Ur(), c(t.lessThan) || c(t.parenL) ? Vr() : (T(t.question), Et());
}
function Au() {
  !T(t.semi) && !T(t.comma) && !c(t.braceR) && !c(t.braceBarR) && le();
}
function G1(e) {
  for (e || re(); T(t.dot); )
    re();
}
function Cu() {
  G1(!0), c(t.lessThan) && Zt();
}
function Nu() {
  E(t._typeof), X1();
}
function Pu() {
  for (E(t.bracketL); o.pos < U.length && !c(t.bracketR) && (et(), !c(t.bracketR)); )
    E(t.comma);
  E(t.bracketR);
}
function cs() {
  const e = De();
  e === t.colon || e === t.question ? (re(), T(t.question), Et()) : et();
}
function dr() {
  for (; !c(t.parenR) && !c(t.ellipsis) && !o.error; )
    cs(), c(t.parenR) || E(t.comma);
  T(t.ellipsis) && cs();
}
function X1() {
  let e = !1;
  const n = o.noAnonFunctionType;
  switch (o.type) {
    case t.name: {
      if (K(u._interface)) {
        bu();
        return;
      }
      re(), Cu();
      return;
    }
    case t.braceL:
      as(!1, !1, !1);
      return;
    case t.braceBarL:
      as(!1, !0, !1);
      return;
    case t.bracketL:
      Pu();
      return;
    case t.lessThan:
      kt(), E(t.parenL), dr(), E(t.parenR), E(t.arrow), et();
      return;
    case t.parenL:
      if (A(), !c(t.parenR) && !c(t.ellipsis))
        if (c(t.name)) {
          const s = De();
          e = s !== t.question && s !== t.colon;
        } else
          e = !0;
      if (e)
        if (o.noAnonFunctionType = !1, et(), o.noAnonFunctionType = n, o.noAnonFunctionType || !(c(t.comma) || c(t.parenR) && De() === t.arrow)) {
          E(t.parenR);
          return;
        } else
          T(t.comma);
      dr(), E(t.parenR), E(t.arrow), et();
      return;
    case t.minus:
      A(), kn();
      return;
    case t.string:
    case t.num:
    case t._true:
    case t._false:
    case t._null:
    case t._this:
    case t._void:
    case t.star:
      A();
      return;
    default:
      if (o.type === t._typeof) {
        Nu();
        return;
      } else if (o.type & t.IS_KEYWORD) {
        A(), o.tokens[o.tokens.length - 1].type = t.name;
        return;
      }
  }
  le();
}
function Ru() {
  for (X1(); !st() && (c(t.bracketL) || c(t.questionDot)); )
    T(t.questionDot), E(t.bracketL), T(t.bracketR) || (et(), E(t.bracketR));
}
function J1() {
  T(t.question) ? J1() : Ru();
}
function Io() {
  J1(), !o.noAnonFunctionType && T(t.arrow) && et();
}
function To() {
  for (T(t.bitwiseAND), Io(); T(t.bitwiseAND); )
    Io();
}
function Lu() {
  for (T(t.bitwiseOR), To(); T(t.bitwiseOR); )
    To();
}
function et() {
  Lu();
}
function rn() {
  Et();
}
function Y1() {
  re(), c(t.colon) && rn();
}
function Wr() {
  (c(t.plus) || c(t.minus)) && (A(), o.tokens[o.tokens.length - 1].isType = !0);
}
function Ou(e) {
  c(t.colon) && jr(), Hn(!1, e);
}
function Du(e, n, s) {
  if (c(t.questionDot) && De() === t.lessThan) {
    if (n) {
      s.stop = !0;
      return;
    }
    A(), Zt(), E(t.parenL), qt();
    return;
  } else if (!n && c(t.lessThan)) {
    const r = o.snapshot();
    if (Zt(), E(t.parenL), qt(), o.error)
      o.restoreFromSnapshot(r);
    else
      return;
  }
  Rr(e, n, s);
}
function Mu() {
  if (c(t.lessThan)) {
    const e = o.snapshot();
    Zt(), o.error && o.restoreFromSnapshot(e);
  }
}
function ju() {
  if (c(t.name) && o.contextualKeyword === u._interface) {
    const e = pe(0);
    return A(), $r(), fe(e), !0;
  } else if (K(u._enum))
    return Q1(), !0;
  return !1;
}
function Fu() {
  return K(u._enum) ? (Q1(), !0) : !1;
}
function $u(e) {
  if (e === u._declare) {
    if (c(t._class) || c(t.name) || c(t._function) || c(t._var) || c(t._export)) {
      const n = pe(1);
      hr(), fe(n);
    }
  } else if (c(t.name)) {
    if (e === u._interface) {
      const n = pe(1);
      $r(), fe(n);
    } else if (e === u._type) {
      const n = pe(1);
      Br(), fe(n);
    } else if (e === u._opaque) {
      const n = pe(1);
      qr(!1), fe(n);
    }
  }
  Ne();
}
function Bu() {
  return K(u._type) || K(u._interface) || K(u._opaque) || K(u._enum);
}
function qu() {
  return c(t.name) && (o.contextualKeyword === u._type || o.contextualKeyword === u._interface || o.contextualKeyword === u._opaque || o.contextualKeyword === u._enum);
}
function Uu() {
  if (K(u._type)) {
    const e = pe(1);
    A(), c(t.braceL) ? (zr(), $n()) : Br(), fe(e);
  } else if (K(u._opaque)) {
    const e = pe(1);
    A(), qr(!1), fe(e);
  } else if (K(u._interface)) {
    const e = pe(1);
    A(), $r(), fe(e);
  } else
    rt(!0);
}
function Vu() {
  return c(t.star) || K(u._type) && De() === t.star;
}
function Wu() {
  if (Ue(u._type)) {
    const e = pe(2);
    mr(), fe(e);
  } else
    mr();
}
function Hu(e) {
  if (e && c(t.lessThan) && Zt(), K(u._implements)) {
    const n = pe(0);
    A(), o.tokens[o.tokens.length - 1].type = t._implements;
    do
      ws(), c(t.lessThan) && Zt();
    while (T(t.comma));
    fe(n);
  }
}
function zu() {
  c(t.lessThan) && (kt(), c(t.parenL) || le());
}
function Gu() {
  const e = pe(0);
  T(t.question), c(t.colon) && rn(), fe(e);
}
function Xu() {
  if (c(t._typeof) || K(u._type)) {
    const e = qn();
    (pu(e) || e.type === t.braceL || e.type === t.star) && A();
  }
}
function Ju() {
  const e = o.contextualKeyword === u._type || o.type === t._typeof;
  e ? A() : re(), K(u._as) && !wr(u._as) ? (re(), e && !c(t.name) && !(o.type & t.IS_KEYWORD) || re()) : (e && (c(t.name) || o.type & t.IS_KEYWORD) && re(), Ue(u._as) && re());
}
function Yu() {
  if (c(t.lessThan)) {
    const e = pe(0);
    kt(), fe(e);
  }
}
function Qu() {
  c(t.colon) && rn();
}
function Ku() {
  if (c(t.colon)) {
    const e = o.noAnonFunctionType;
    o.noAnonFunctionType = !0, rn(), o.noAnonFunctionType = e;
  }
}
function Zu(e, n) {
  if (c(t.lessThan)) {
    const s = o.snapshot();
    let r = Tt(e, n);
    if (o.error)
      o.restoreFromSnapshot(s), o.type = t.typeParameterStart;
    else
      return r;
    const i = pe(0);
    if (kt(), fe(i), r = Tt(e, n), r)
      return !0;
    le();
  }
  return Tt(e, n);
}
function ef() {
  if (c(t.colon)) {
    const e = pe(0), n = o.snapshot(), s = o.noAnonFunctionType;
    o.noAnonFunctionType = !0, jr(), o.noAnonFunctionType = s, st() && le(), c(t.arrow) || le(), o.error && o.restoreFromSnapshot(n), fe(e);
  }
  return T(t.arrow);
}
function tf(e, n = !1) {
  if (o.tokens[o.tokens.length - 1].contextualKeyword === u._async && c(t.lessThan)) {
    const s = o.snapshot();
    if (nf() && !o.error)
      return;
    o.restoreFromSnapshot(s);
  }
  q1(e, n);
}
function nf() {
  o.scopeDepth++;
  const e = o.tokens.length;
  return vn(), fr() ? (Fn(e), !0) : !1;
}
function Q1() {
  Fe(u._enum), o.tokens[o.tokens.length - 1].type = t._enum, re(), sf();
}
function sf() {
  Ue(u._of) && A(), E(t.braceL), rf(), E(t.braceR);
}
function rf() {
  for (; !c(t.braceR) && !o.error && !T(t.ellipsis); )
    of(), c(t.braceR) || E(t.comma);
}
function of() {
  re(), T(t.eq) && A();
}
function af() {
  if (xs(t.eof), o.scopes.push(new St(0, o.tokens.length, !0)), o.scopeDepth !== 0)
    throw new Error(`Invalid scope depth at end of file: ${o.scopeDepth}`);
  return new Gf(o.tokens, o.scopes);
}
function rt(e) {
  we && ju() || (c(t.at) && Hr(), cf(e));
}
function cf(e) {
  if (ge && Il())
    return;
  const n = o.type;
  switch (n) {
    case t._break:
    case t._continue:
      uf();
      return;
    case t._debugger:
      ff();
      return;
    case t._do:
      pf();
      return;
    case t._for:
      hf();
      return;
    case t._function:
      if (De() === t.dot) break;
      e || le(), kf();
      return;
    case t._class:
      e || le(), tn(!0);
      return;
    case t._if:
      gf();
      return;
    case t._return:
      _f();
      return;
    case t._switch:
      yf();
      return;
    case t._throw:
      vf();
      return;
    case t._try:
      xf();
      return;
    case t._let:
    case t._const:
      e || le();
    case t._var:
      es(n !== t._var);
      return;
    case t._while:
      bf();
      return;
    case t.braceL:
      Ut();
      return;
    case t.semi:
      If();
      return;
    case t._export:
    case t._import: {
      const i = De();
      if (i === t.parenL || i === t.dot)
        break;
      A(), n === t._import ? ii() : ri();
      return;
    }
    case t.name:
      if (o.contextualKeyword === u._async) {
        const i = o.start, a = o.snapshot();
        if (A(), c(t._function) && !st()) {
          E(t._function), en(i, !0);
          return;
        } else
          o.restoreFromSnapshot(a);
      } else if (o.contextualKeyword === u._using && !n1() && // Statements like `using[0]` and `using in foo` aren't actual using
      // declarations.
      De() === t.name) {
        es(!0);
        return;
      } else if (K1()) {
        Fe(u._await), es(!0);
        return;
      }
  }
  const s = o.tokens.length;
  ze();
  let r = null;
  if (o.tokens.length === s + 1) {
    const i = o.tokens[o.tokens.length - 1];
    i.type === t.name && (r = i.contextualKeyword);
  }
  if (r == null) {
    Ne();
    return;
  }
  T(t.colon) ? Tf() : Sf(r);
}
function K1() {
  if (!K(u._await))
    return !1;
  const e = o.snapshot();
  return A(), !K(u._using) || Ke() || (A(), !c(t.name) || Ke()) ? (o.restoreFromSnapshot(e), !1) : (o.restoreFromSnapshot(e), !0);
}
function Hr() {
  for (; c(t.at); )
    Z1();
}
function Z1() {
  if (A(), T(t.parenL))
    ze(), E(t.parenR);
  else {
    for (re(); T(t.dot); )
      re();
    lf();
  }
}
function lf() {
  ge ? Fl() : ei();
}
function ei() {
  T(t.parenL) && qt();
}
function uf() {
  A(), xt() || (re(), Ne());
}
function ff() {
  A(), Ne();
}
function pf() {
  A(), rt(!1), E(t._while), vs(), T(t.semi);
}
function hf() {
  o.scopeDepth++;
  const e = o.tokens.length;
  mf();
  const n = o.tokens.length;
  o.scopes.push(new St(e, n, !1)), o.scopeDepth--;
}
function df() {
  return !(!K(u._using) || wr(u._of));
}
function mf() {
  A();
  let e = !1;
  if (K(u._await) && (e = !0, A()), E(t.parenL), c(t.semi)) {
    e && le(), Gs();
    return;
  }
  const n = K1();
  if (n || c(t._var) || c(t._let) || c(t._const) || df()) {
    if (n && Fe(u._await), A(), ti(!0, o.type !== t._var), c(t._in) || K(u._of)) {
      So(e);
      return;
    }
    Gs();
    return;
  }
  if (ze(!0), c(t._in) || K(u._of)) {
    So(e);
    return;
  }
  e && le(), Gs();
}
function kf() {
  const e = o.start;
  A(), en(e, !0);
}
function gf() {
  A(), vs(), rt(!1), T(t._else) && rt(!1);
}
function _f() {
  A(), xt() || (ze(), Ne());
}
function yf() {
  A(), vs(), o.scopeDepth++;
  const e = o.tokens.length;
  for (E(t.braceL); !c(t.braceR) && !o.error; )
    if (c(t._case) || c(t._default)) {
      const s = c(t._case);
      A(), s && ze(), E(t.colon);
    } else
      rt(!0);
  A();
  const n = o.tokens.length;
  o.scopes.push(new St(e, n, !1)), o.scopeDepth--;
}
function vf() {
  A(), ze(), Ne();
}
function wf() {
  gs(
    !0
    /* isBlockScope */
  ), ge && _n();
}
function xf() {
  if (A(), Ut(), c(t._catch)) {
    A();
    let e = null;
    if (c(t.parenL) && (o.scopeDepth++, e = o.tokens.length, E(t.parenL), wf(), E(t.parenR)), Ut(), e != null) {
      const n = o.tokens.length;
      o.scopes.push(new St(e, n, !1)), o.scopeDepth--;
    }
  }
  T(t._finally) && Ut();
}
function es(e) {
  A(), ti(!1, e), Ne();
}
function bf() {
  A(), vs(), rt(!1);
}
function If() {
  A();
}
function Tf() {
  rt(!0);
}
function Sf(e) {
  ge ? Sl(e) : we ? $u(e) : Ne();
}
function Ut(e = !1, n = 0) {
  const s = o.tokens.length;
  o.scopeDepth++, E(t.braceL), n && (o.tokens[o.tokens.length - 1].contextId = n), xs(t.braceR), n && (o.tokens[o.tokens.length - 1].contextId = n);
  const r = o.tokens.length;
  o.scopes.push(new St(s, r, e)), o.scopeDepth--;
}
function xs(e) {
  for (; !T(e) && !o.error; )
    rt(!0);
}
function Gs() {
  E(t.semi), c(t.semi) || ze(), E(t.semi), c(t.parenR) || ze(), E(t.parenR), rt(!1);
}
function So(e) {
  e ? Ue(u._of) : A(), ze(), E(t.parenR), rt(!1);
}
function ti(e, n) {
  for (; ; ) {
    if (Ef(n), T(t.eq)) {
      const s = o.tokens.length - 1;
      Ge(e), o.tokens[s].rhsEndIndex = o.tokens.length;
    }
    if (!T(t.comma))
      break;
  }
}
function Ef(e) {
  gs(e), ge ? Pl() : we && Qu();
}
function en(e, n, s = !1) {
  c(t.star) && A(), n && !s && !c(t.name) && !c(t._yield) && le();
  let r = null;
  c(t.name) && (n || (r = o.tokens.length, o.scopeDepth++), Ht(!1));
  const i = o.tokens.length;
  o.scopeDepth++, vn(), W1(e);
  const a = o.tokens.length;
  o.scopes.push(new St(i, a, !0)), o.scopeDepth--, r !== null && (o.scopes.push(new St(r, a, !0)), o.scopeDepth--);
}
function vn(e = !1, n = 0) {
  ge ? Nl() : we && Yu(), E(t.parenL), n && (o.tokens[o.tokens.length - 1].contextId = n), Tr(
    t.parenR,
    !1,
    !1,
    e,
    n
  ), n && (o.tokens[o.tokens.length - 1].contextId = n);
}
function tn(e, n = !1) {
  const s = On();
  A(), o.tokens[o.tokens.length - 1].contextId = s, o.tokens[o.tokens.length - 1].isExpression = !e;
  let r = null;
  e || (r = o.tokens.length, o.scopeDepth++), Pf(e, n), Rf();
  const i = o.tokens.length;
  if (Af(s), !o.error && (o.tokens[i].contextId = s, o.tokens[o.tokens.length - 1].contextId = s, r !== null)) {
    const a = o.tokens.length;
    o.scopes.push(new St(r, a, !1)), o.scopeDepth--;
  }
}
function ni() {
  return c(t.eq) || c(t.semi) || c(t.braceR) || c(t.bang) || c(t.colon);
}
function si() {
  return c(t.parenL) || c(t.lessThan);
}
function Af(e) {
  for (E(t.braceL); !T(t.braceR) && !o.error; ) {
    if (T(t.semi))
      continue;
    if (c(t.at)) {
      Z1();
      continue;
    }
    const n = o.start;
    Cf(n, e);
  }
}
function Cf(e, n) {
  ge && Sr([
    u._declare,
    u._public,
    u._protected,
    u._private,
    u._override
  ]);
  let s = !1;
  if (c(t.name) && o.contextualKeyword === u._static) {
    if (re(), si()) {
      En(
        e,
        /* isConstructor */
        !1
      );
      return;
    } else if (ni()) {
      ts();
      return;
    }
    if (o.tokens[o.tokens.length - 1].type = t._static, s = !0, c(t.braceL)) {
      o.tokens[o.tokens.length - 1].contextId = n, Ut();
      return;
    }
  }
  Nf(e, s, n);
}
function Nf(e, n, s) {
  if (ge && Tl(n))
    return;
  if (T(t.star)) {
    Sn(s), En(
      e,
      /* isConstructor */
      !1
    );
    return;
  }
  Sn(s);
  let r = !1;
  const i = o.tokens[o.tokens.length - 1];
  i.contextualKeyword === u._constructor && (r = !0), Eo(), si() ? En(e, r) : ni() ? ts() : i.contextualKeyword === u._async && !xt() ? (o.tokens[o.tokens.length - 1].type = t._async, c(t.star) && A(), Sn(s), Eo(), En(
    e,
    !1
    /* isConstructor */
  )) : (i.contextualKeyword === u._get || i.contextualKeyword === u._set) && !(xt() && c(t.star)) ? (i.contextualKeyword === u._get ? o.tokens[o.tokens.length - 1].type = t._get : o.tokens[o.tokens.length - 1].type = t._set, Sn(s), En(
    e,
    /* isConstructor */
    !1
  )) : i.contextualKeyword === u._accessor && !xt() ? (Sn(s), ts()) : xt() ? ts() : le();
}
function En(e, n) {
  ge ? sn() : we && c(t.lessThan) && kt(), pr(e, n);
}
function Sn(e) {
  jn(e);
}
function Eo() {
  if (ge) {
    const e = pe(0);
    T(t.question), fe(e);
  }
}
function ts() {
  if (ge ? (a1(t.bang), _n()) : we && c(t.colon) && rn(), c(t.eq)) {
    const e = o.tokens.length;
    A(), Ge(), o.tokens[e].rhsEndIndex = o.tokens.length;
  }
  Ne();
}
function Pf(e, n = !1) {
  ge && (!e || n) && K(u._implements) || (c(t.name) && Ht(!0), ge ? sn() : we && c(t.lessThan) && kt());
}
function Rf() {
  let e = !1;
  T(t._extends) ? (B1(), e = !0) : e = !1, ge ? Al(e) : we && Hu(e);
}
function ri() {
  const e = o.tokens.length - 1;
  ge && vl() || (Mf() ? jf() : Df() ? (re(), c(t.comma) && De() === t.star ? (E(t.comma), E(t.star), Fe(u._as), re()) : oi(), $n()) : T(t._default) ? Lf() : $f() ? Of() : (zr(), $n()), o.tokens[e].rhsEndIndex = o.tokens.length);
}
function Lf() {
  if (ge && bl() || we && Fu())
    return;
  const e = o.start;
  T(t._function) ? en(e, !0, !0) : K(u._async) && De() === t._function ? (Ue(u._async), T(t._function), en(e, !0, !0)) : c(t._class) ? tn(!0, !0) : c(t.at) ? (Hr(), tn(!0, !0)) : (Ge(), Ne());
}
function Of() {
  ge ? El() : we ? Uu() : rt(!0);
}
function Df() {
  if (ge && O1())
    return !1;
  if (we && qu())
    return !1;
  if (c(t.name))
    return o.contextualKeyword !== u._async;
  if (!c(t._default))
    return !1;
  const e = xr(), n = qn(), s = n.type === t.name && n.contextualKeyword === u._from;
  if (n.type === t.comma)
    return !0;
  if (s) {
    const r = U.charCodeAt(c1(e + 4));
    return r === d.quotationMark || r === d.apostrophe;
  }
  return !1;
}
function oi() {
  T(t.comma) && zr();
}
function $n() {
  Ue(u._from) && (Rt(), ai()), Ne();
}
function Mf() {
  return we ? Vu() : c(t.star);
}
function jf() {
  we ? Wu() : mr();
}
function mr() {
  E(t.star), K(u._as) ? Ff() : $n();
}
function Ff() {
  A(), o.tokens[o.tokens.length - 1].type = t._as, re(), oi(), $n();
}
function $f() {
  return ge && O1() || we && Bu() || o.type === t._var || o.type === t._const || o.type === t._let || o.type === t._function || o.type === t._class || K(u._async) || c(t.at);
}
function zr() {
  let e = !0;
  for (E(t.braceL); !T(t.braceR) && !o.error; ) {
    if (e)
      e = !1;
    else if (E(t.comma), T(t.braceR))
      break;
    Bf();
  }
}
function Bf() {
  if (ge) {
    xl();
    return;
  }
  re(), o.tokens[o.tokens.length - 1].identifierRole = ne.ExportAccess, Ue(u._as) && re();
}
function qf() {
  const e = o.snapshot();
  return Fe(u._module), Ue(u._from) ? K(u._from) ? (o.restoreFromSnapshot(e), !0) : (o.restoreFromSnapshot(e), !1) : c(t.comma) ? (o.restoreFromSnapshot(e), !1) : (o.restoreFromSnapshot(e), !0);
}
function Uf() {
  K(u._module) && qf() && A();
}
function ii() {
  if (ge && c(t.name) && De() === t.eq) {
    lr();
    return;
  }
  if (ge && K(u._type)) {
    const e = qn();
    if (e.type === t.name && e.contextualKeyword !== u._from) {
      if (Fe(u._type), De() === t.eq) {
        lr();
        return;
      }
    } else (e.type === t.star || e.type === t.braceL) && Fe(u._type);
  }
  c(t.string) || (Uf(), Wf(), Fe(u._from)), Rt(), ai(), Ne();
}
function Vf() {
  return c(t.name);
}
function Ao() {
  ss();
}
function Wf() {
  we && Xu();
  let e = !0;
  if (!(Vf() && (Ao(), !T(t.comma)))) {
    if (c(t.star)) {
      A(), Fe(u._as), Ao();
      return;
    }
    for (E(t.braceL); !T(t.braceR) && !o.error; ) {
      if (e)
        e = !1;
      else if (T(t.colon) && le(
        "ES2015 named imports do not destructure. Use another statement for destructuring after the import."
      ), E(t.comma), T(t.braceR))
        break;
      Hf();
    }
  }
}
function Hf() {
  if (ge) {
    wl();
    return;
  }
  if (we) {
    Ju();
    return;
  }
  ss(), K(u._as) && (o.tokens[o.tokens.length - 1].identifierRole = ne.ImportAccess, A(), ss());
}
function ai() {
  (c(t._with) || K(u._assert) && !Ke()) && (A(), Mr(!1, !1));
}
function zf() {
  return o.pos === 0 && U.charCodeAt(0) === d.numberSign && U.charCodeAt(1) === d.exclamationMark && f1(2), u1(), af();
}
let Gf = class {
  constructor(n, s) {
    this.tokens = n, this.scopes = s;
  }
};
function Xf(e, n, s, r) {
  if (r && s)
    throw new Error("Cannot combine flow and typescript plugins.");
  Da(e, n, s, r);
  const i = zf();
  if (o.error)
    throw Ra(o.error);
  return i;
}
function Jf(e) {
  let n = e.currentIndex(), s = 0;
  const r = e.currentToken();
  do {
    const i = e.tokens[n];
    if (i.isOptionalChainStart && s++, i.isOptionalChainEnd && s--, s += i.numNullishCoalesceStarts, s -= i.numNullishCoalesceEnds, i.contextualKeyword === u._await && i.identifierRole == null && i.scopeDepth === r.scopeDepth)
      return !0;
    n += 1;
  } while (s > 0 && n < e.tokens.length);
  return !1;
}
class Cn {
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
  constructor(n, s, r, i, a) {
    this.code = n, this.tokens = s, this.isFlowEnabled = r, this.disableESTransforms = i, this.helperManager = a, Cn.prototype.__init.call(this), Cn.prototype.__init2.call(this), Cn.prototype.__init3.call(this);
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
  matches2AtIndex(n, s, r) {
    return this.tokens[n].type === s && this.tokens[n + 1].type === r;
  }
  matches3AtIndex(n, s, r, i) {
    return this.tokens[n].type === s && this.tokens[n + 1].type === r && this.tokens[n + 2].type === i;
  }
  matches1(n) {
    return this.tokens[this.tokenIndex].type === n;
  }
  matches2(n, s) {
    return this.tokens[this.tokenIndex].type === n && this.tokens[this.tokenIndex + 1].type === s;
  }
  matches3(n, s, r) {
    return this.tokens[this.tokenIndex].type === n && this.tokens[this.tokenIndex + 1].type === s && this.tokens[this.tokenIndex + 2].type === r;
  }
  matches4(n, s, r, i) {
    return this.tokens[this.tokenIndex].type === n && this.tokens[this.tokenIndex + 1].type === s && this.tokens[this.tokenIndex + 2].type === r && this.tokens[this.tokenIndex + 3].type === i;
  }
  matches5(n, s, r, i, a) {
    return this.tokens[this.tokenIndex].type === n && this.tokens[this.tokenIndex + 1].type === s && this.tokens[this.tokenIndex + 2].type === r && this.tokens[this.tokenIndex + 3].type === i && this.tokens[this.tokenIndex + 4].type === a;
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
    if ((n.numNullishCoalesceStarts || n.isOptionalChainStart) && (n.isAsyncOperation = Jf(this)), !this.disableESTransforms) {
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
function Yf(e, n, s, r) {
  const i = n.snapshot(), a = Qf(n);
  let l = [];
  const f = [], m = [];
  let p = null;
  const h = [], k = [], I = n.currentToken().contextId;
  if (I == null)
    throw new Error("Expected non-null class context ID on class open-brace.");
  for (n.nextToken(); !n.matchesContextIdAndLabel(t.braceR, I); )
    if (n.matchesContextual(u._constructor) && !n.currentToken().isType)
      ({ constructorInitializerStatements: l, constructorInsertPos: p } = Co(n));
    else if (n.matches1(t.semi))
      r || k.push({ start: n.currentIndex(), end: n.currentIndex() + 1 }), n.nextToken();
    else if (n.currentToken().isType)
      n.nextToken();
    else {
      const y = n.currentIndex();
      let b = !1, w = !1, B = !1;
      for (; ls(n.currentToken()); )
        n.matches1(t._static) && (b = !0), n.matches1(t.hash) && (w = !0), (n.matches1(t._declare) || n.matches1(t._abstract)) && (B = !0), n.nextToken();
      if (b && n.matches1(t.braceL)) {
        Xs(n, I);
        continue;
      }
      if (w) {
        Xs(n, I);
        continue;
      }
      if (n.matchesContextual(u._constructor) && !n.currentToken().isType) {
        ({ constructorInitializerStatements: l, constructorInsertPos: p } = Co(n));
        continue;
      }
      const j = n.currentIndex();
      if (Kf(n), n.matches1(t.lessThan) || n.matches1(t.parenL)) {
        Xs(n, I);
        continue;
      }
      for (; n.currentToken().isType; )
        n.nextToken();
      if (n.matches1(t.eq)) {
        const x = n.currentIndex(), P = n.currentToken().rhsEndIndex;
        if (P == null)
          throw new Error("Expected rhsEndIndex on class field assignment.");
        for (n.nextToken(); n.currentIndex() < P; )
          e.processToken();
        let N;
        b ? (N = s.claimFreeName("__initStatic"), m.push(N)) : (N = s.claimFreeName("__init"), f.push(N)), h.push({
          initializerName: N,
          equalsIndex: x,
          start: j,
          end: n.currentIndex()
        });
      } else (!r || B) && k.push({ start: y, end: n.currentIndex() });
    }
  return n.restoreToSnapshot(i), r ? {
    headerInfo: a,
    constructorInitializerStatements: l,
    instanceInitializerNames: [],
    staticInitializerNames: [],
    constructorInsertPos: p,
    fields: [],
    rangesToRemove: k
  } : {
    headerInfo: a,
    constructorInitializerStatements: l,
    instanceInitializerNames: f,
    staticInitializerNames: m,
    constructorInsertPos: p,
    fields: h,
    rangesToRemove: k
  };
}
function Xs(e, n) {
  for (e.nextToken(); e.currentToken().contextId !== n; )
    e.nextToken();
  for (; ls(e.tokenAtRelativeIndex(-1)); )
    e.previousToken();
}
function Qf(e) {
  const n = e.currentToken(), s = n.contextId;
  if (s == null)
    throw new Error("Expected context ID on class token.");
  const r = n.isExpression;
  if (r == null)
    throw new Error("Expected isExpression on class token.");
  let i = null, a = !1;
  for (e.nextToken(), e.matches1(t.name) && (i = e.identifierName()); !e.matchesContextIdAndLabel(t.braceL, s); )
    e.matches1(t._extends) && !e.currentToken().isType && (a = !0), e.nextToken();
  return { isExpression: r, className: i, hasSuperclass: a };
}
function Co(e) {
  const n = [];
  e.nextToken();
  const s = e.currentToken().contextId;
  if (s == null)
    throw new Error("Expected context ID on open-paren starting constructor params.");
  for (; !e.matchesContextIdAndLabel(t.parenR, s); )
    if (e.currentToken().contextId === s) {
      if (e.nextToken(), ls(e.currentToken())) {
        for (e.nextToken(); ls(e.currentToken()); )
          e.nextToken();
        const a = e.currentToken();
        if (a.type !== t.name)
          throw new Error("Expected identifier after access modifiers in constructor arg.");
        const l = e.identifierNameForToken(a);
        n.push(`this.${l} = ${l}`);
      }
    } else
      e.nextToken();
  for (e.nextToken(); e.currentToken().isType; )
    e.nextToken();
  let r = e.currentIndex(), i = !1;
  for (; !e.matchesContextIdAndLabel(t.braceR, s); ) {
    if (!i && e.matches2(t._super, t.parenL)) {
      e.nextToken();
      const a = e.currentToken().contextId;
      if (a == null)
        throw new Error("Expected a context ID on the super call");
      for (; !e.matchesContextIdAndLabel(t.parenR, a); )
        e.nextToken();
      r = e.currentIndex(), i = !0;
    }
    e.nextToken();
  }
  return e.nextToken(), { constructorInitializerStatements: n, constructorInsertPos: r };
}
function ls(e) {
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
function Kf(e) {
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
function ci(e) {
  if (e.removeInitialToken(), e.removeToken(), e.removeToken(), e.removeToken(), e.matches1(t.parenL))
    e.removeToken(), e.removeToken(), e.removeToken();
  else
    for (; e.matches1(t.dot); )
      e.removeToken(), e.removeToken();
}
const li = {
  typeDeclarations: /* @__PURE__ */ new Set(),
  valueDeclarations: /* @__PURE__ */ new Set()
};
function ui(e) {
  const n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
  for (let r = 0; r < e.tokens.length; r++) {
    const i = e.tokens[r];
    i.type === t.name && i1(i) && (i.isType ? n.add(e.identifierNameForToken(i)) : s.add(e.identifierNameForToken(i)));
  }
  return { typeDeclarations: n, valueDeclarations: s };
}
function fi(e) {
  let n = e.currentIndex();
  for (; !e.matches1AtIndex(n, t.braceR); )
    n++;
  return e.matchesContextualAtIndex(n + 1, u._from) && e.matches1AtIndex(n + 2, t.string);
}
function Qt(e) {
  (e.matches2(t._with, t.braceL) || e.matches2(t.name, t.braceL) && e.matchesContextual(u._assert)) && (e.removeToken(), e.removeToken(), e.removeBalancedCode(), e.removeToken());
}
function pi(e, n, s, r) {
  if (!e || n)
    return !1;
  const i = s.currentToken();
  if (i.rhsEndIndex == null)
    throw new Error("Expected non-null rhsEndIndex on export token.");
  const a = i.rhsEndIndex - s.currentIndex();
  if (a !== 3 && !(a === 4 && s.matches1AtIndex(i.rhsEndIndex - 1, t.semi)))
    return !1;
  const l = s.tokenAtRelativeIndex(2);
  if (l.type !== t.name)
    return !1;
  const f = s.identifierNameForToken(l);
  return r.typeDeclarations.has(f) && !r.valueDeclarations.has(f);
}
class Nn extends mt {
  __init() {
    this.hadExport = !1;
  }
  __init2() {
    this.hadNamedExport = !1;
  }
  __init3() {
    this.hadDefaultExport = !1;
  }
  constructor(n, s, r, i, a, l, f, m, p, h, k, I) {
    super(), this.rootTransformer = n, this.tokens = s, this.importProcessor = r, this.nameManager = i, this.helperManager = a, this.reactHotLoaderTransformer = l, this.enableLegacyBabel5ModuleInterop = f, this.enableLegacyTypeScriptModuleInterop = m, this.isTypeScriptTransformEnabled = p, this.isFlowTransformEnabled = h, this.preserveDynamicImport = k, this.keepUnusedImports = I, Nn.prototype.__init.call(this), Nn.prototype.__init2.call(this), Nn.prototype.__init3.call(this), this.declarationInfo = p ? ui(s) : li;
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
    return this.importProcessor.shouldAutomaticallyElideImportedName(n) ? ci(this.tokens) : this.tokens.replaceToken("const"), !0;
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
      const r = this.tokens.currentToken().contextId;
      if (r == null)
        throw new Error("Expected context ID on dynamic import invocation.");
      for (this.tokens.copyToken(); !this.tokens.matchesContextIdAndLabel(t.parenR, r); )
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
    Qt(this.tokens), this.tokens.matches1(t.semi) && this.tokens.removeToken();
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
    if (this.tokens.removeInitialToken(), this.tokens.matchesContextual(u._type) && !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, t.comma) && !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, u._from))
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
    if (n.identifierRole === ne.ObjectShorthand)
      return this.processObjectShorthand();
    if (n.identifierRole !== ne.Access)
      return !1;
    const s = this.importProcessor.getIdentifierReplacement(
      this.tokens.identifierNameForToken(n)
    );
    if (!s)
      return !1;
    let r = this.tokens.currentIndex() + 1;
    for (; r < this.tokens.tokens.length && this.tokens.tokens[r].type === t.parenR; )
      r++;
    return this.tokens.tokens[r].type === t.parenL ? this.tokens.tokenAtRelativeIndex(1).type === t.parenL && this.tokens.tokenAtRelativeIndex(-1).type !== t._new ? (this.tokens.replaceToken(`${s}.call(void 0, `), this.tokens.removeToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR)) : this.tokens.replaceToken(`(0, ${s})`) : this.tokens.replaceToken(s), !0;
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
    if (this.tokens.matches2(t._export, t.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, u._type)) {
      if (this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.matches1(t.braceL)) {
        for (; !this.tokens.matches1(t.braceR); )
          this.tokens.removeToken();
        this.tokens.removeToken();
      } else
        this.tokens.removeToken(), this.tokens.matches1(t._as) && (this.tokens.removeToken(), this.tokens.removeToken());
      return this.tokens.matchesContextual(u._from) && this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, t.string) && (this.tokens.removeToken(), this.tokens.removeToken(), Qt(this.tokens)), !0;
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
    const r = this.importProcessor.resolveExportBinding(
      this.tokens.identifierNameForToken(s)
    );
    return r ? (this.tokens.copyToken(), this.tokens.appendCode(` ${r} =`), !0) : !1;
  }
  /**
   * Process something like `a += 3`, where `a` might be an exported value.
   */
  processComplexAssignment() {
    const n = this.tokens.currentIndex(), s = this.tokens.tokens[n - 1];
    if (s.type !== t.name || s.shadowsGlobal || n >= 2 && this.tokens.matches1AtIndex(n - 2, t.dot))
      return !1;
    const r = this.importProcessor.resolveExportBinding(
      this.tokens.identifierNameForToken(s)
    );
    return r ? (this.tokens.appendCode(` = ${r}`), this.tokens.copyToken(), !0) : !1;
  }
  /**
   * Process something like `++a`, where `a` might be an exported value.
   */
  processPreIncDec() {
    const n = this.tokens.currentIndex(), s = this.tokens.tokens[n + 1];
    if (s.type !== t.name || s.shadowsGlobal || n + 2 < this.tokens.tokens.length && (this.tokens.matches1AtIndex(n + 2, t.dot) || this.tokens.matches1AtIndex(n + 2, t.bracketL) || this.tokens.matches1AtIndex(n + 2, t.parenL)))
      return !1;
    const r = this.tokens.identifierNameForToken(s), i = this.importProcessor.resolveExportBinding(r);
    return i ? (this.tokens.appendCode(`${i} = `), this.tokens.copyToken(), !0) : !1;
  }
  /**
   * Process something like `a++`, where `a` might be an exported value.
   * This starts at the `a`, not at the `++`.
   */
  processPostIncDec() {
    const n = this.tokens.currentIndex(), s = this.tokens.tokens[n], r = this.tokens.tokens[n + 1];
    if (s.type !== t.name || s.shadowsGlobal || n >= 1 && this.tokens.matches1AtIndex(n - 1, t.dot))
      return !1;
    const i = this.tokens.identifierNameForToken(s), a = this.importProcessor.resolveExportBinding(i);
    if (!a)
      return !1;
    const l = this.tokens.rawCodeForToken(r), f = this.importProcessor.getIdentifierReplacement(i) || i;
    if (l === "++")
      this.tokens.replaceToken(`(${f} = ${a} = ${f} + 1, ${f} - 1)`);
    else if (l === "--")
      this.tokens.replaceToken(`(${f} = ${a} = ${f} - 1, ${f} + 1)`);
    else
      throw new Error(`Unexpected operator: ${l}`);
    return this.tokens.removeToken(), !0;
  }
  processExportDefault() {
    let n = !0;
    if (this.tokens.matches4(t._export, t._default, t._function, t.name) || // export default async function
    this.tokens.matches5(t._export, t._default, t.name, t._function, t.name) && this.tokens.matchesContextualAtIndex(
      this.tokens.currentIndex() + 2,
      u._async
    )) {
      this.tokens.removeInitialToken(), this.tokens.removeToken();
      const s = this.processNamedFunction();
      this.tokens.appendCode(` exports.default = ${s};`);
    } else if (this.tokens.matches4(t._export, t._default, t._class, t.name) || this.tokens.matches5(t._export, t._default, t._abstract, t._class, t.name) || this.tokens.matches3(t._export, t._default, t.at)) {
      this.tokens.removeInitialToken(), this.tokens.removeToken(), this.copyDecorators(), this.tokens.matches1(t._abstract) && this.tokens.removeToken();
      const s = this.rootTransformer.processNamedClass();
      this.tokens.appendCode(` exports.default = ${s};`);
    } else if (pi(
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
          const r = this.tokens.currentToken().rhsEndIndex;
          if (r == null)
            throw new Error("Expected = token with an end index.");
          for (; this.tokens.currentIndex() < r; )
            this.rootTransformer.processToken();
        } else {
          const r = this.tokens.currentToken();
          if (o1(r)) {
            const i = this.tokens.identifierName();
            let a = this.importProcessor.getIdentifierReplacement(i);
            if (a === null)
              throw new Error(`Expected a replacement for ${i} in \`export var\` syntax.`);
            qa(r) && (a = `${i}: ${a}`), this.tokens.replaceToken(a);
          } else
            this.rootTransformer.processToken();
        }
      }
    if (n) {
      const r = this.tokens.currentToken().rhsEndIndex;
      if (r == null)
        throw new Error("Expected = token with an end index.");
      for (; this.tokens.currentIndex() < r; )
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
      if (!this.tokens.matchesContextual(u._async))
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
    const n = fi(this.tokens), s = [];
    for (; ; ) {
      if (this.tokens.matches1(t.braceR)) {
        this.tokens.removeToken();
        break;
      }
      const r = Dn(this.tokens);
      for (; this.tokens.currentIndex() < r.endIndex; )
        this.tokens.removeToken();
      if (!(r.isType || !n && this.shouldElideExportedIdentifier(r.leftName))) {
        const a = r.rightName;
        a === "default" ? this.hadDefaultExport = !0 : this.hadNamedExport = !0;
        const l = r.leftName, f = this.importProcessor.getIdentifierReplacement(l);
        s.push(`exports.${a} = ${f || l};`);
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
    if (this.tokens.matchesContextual(u._from)) {
      this.tokens.removeToken();
      const r = this.tokens.stringValue();
      this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(r)), Qt(this.tokens);
    } else
      this.tokens.appendCode(s.join(" "));
    this.tokens.matches1(t.semi) && this.tokens.removeToken();
  }
  processExportStar() {
    for (this.tokens.removeInitialToken(); !this.tokens.matches1(t.string); )
      this.tokens.removeToken();
    const n = this.tokens.stringValue();
    this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(n)), Qt(this.tokens), this.tokens.matches1(t.semi) && this.tokens.removeToken();
  }
  shouldElideExportedIdentifier(n) {
    return this.isTypeScriptTransformEnabled && !this.keepUnusedImports && !this.declarationInfo.valueDeclarations.has(n);
  }
}
class Zf extends mt {
  constructor(n, s, r, i, a, l, f, m) {
    super(), this.tokens = n, this.nameManager = s, this.helperManager = r, this.reactHotLoaderTransformer = i, this.isTypeScriptTransformEnabled = a, this.isFlowTransformEnabled = l, this.keepUnusedImports = f, this.nonTypeIdentifiers = a && !f ? v1(n, m) : /* @__PURE__ */ new Set(), this.declarationInfo = a && !f ? ui(n) : li, this.injectCreateRequireForImportRequire = !!m.injectCreateRequireForImportRequire;
  }
  process() {
    if (this.tokens.matches3(t._import, t.name, t.eq))
      return this.processImportEquals();
    if (this.tokens.matches4(t._import, t.name, t.name, t.eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, u._type)) {
      this.tokens.removeInitialToken();
      for (let n = 0; n < 7; n++)
        this.tokens.removeToken();
      return !0;
    }
    if (this.tokens.matches2(t._export, t.eq))
      return this.tokens.replaceToken("module.exports"), !0;
    if (this.tokens.matches5(t._export, t._import, t.name, t.name, t.eq) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, u._type)) {
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
    if (this.tokens.matches2(t._export, t.name) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, u._type)) {
      if (this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.matches1(t.braceL)) {
        for (; !this.tokens.matches1(t.braceR); )
          this.tokens.removeToken();
        this.tokens.removeToken();
      } else
        this.tokens.removeToken(), this.tokens.matches1(t._as) && (this.tokens.removeToken(), this.tokens.removeToken());
      return this.tokens.matchesContextual(u._from) && this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, t.string) && (this.tokens.removeToken(), this.tokens.removeToken(), Qt(this.tokens)), !0;
    }
    return !1;
  }
  processImportEquals() {
    const n = this.tokens.identifierNameAtIndex(this.tokens.currentIndex() + 1);
    return this.shouldAutomaticallyElideImportedName(n) ? ci(this.tokens) : this.injectCreateRequireForImportRequire ? (this.tokens.replaceToken("const"), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.replaceToken(this.helperManager.getHelperName("require"))) : this.tokens.replaceToken("const"), !0;
  }
  processImport() {
    if (this.tokens.matches2(t._import, t.parenL))
      return !1;
    const n = this.tokens.snapshot();
    if (this.removeImportTypeBindings()) {
      for (this.tokens.restoreToSnapshot(n); !this.tokens.matches1(t.string); )
        this.tokens.removeToken();
      this.tokens.removeToken(), Qt(this.tokens), this.tokens.matches1(t.semi) && this.tokens.removeToken();
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
    if (this.tokens.copyExpectedToken(t._import), this.tokens.matchesContextual(u._type) && !this.tokens.matches1AtIndex(this.tokens.currentIndex() + 1, t.comma) && !this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 1, u._from))
      return !0;
    if (this.tokens.matches1(t.string))
      return this.tokens.copyToken(), !1;
    this.tokens.matchesContextual(u._module) && this.tokens.matchesContextualAtIndex(this.tokens.currentIndex() + 2, u._from) && this.tokens.copyToken();
    let n = !1, s = !1, r = !1;
    if (this.tokens.matches1(t.name) && (this.shouldAutomaticallyElideImportedName(this.tokens.identifierName()) ? (this.tokens.removeToken(), this.tokens.matches1(t.comma) && this.tokens.removeToken()) : (n = !0, this.tokens.copyToken(), this.tokens.matches1(t.comma) && (r = !0, this.tokens.removeToken()))), this.tokens.matches1(t.star))
      this.shouldAutomaticallyElideImportedName(this.tokens.identifierNameAtRelativeIndex(2)) ? (this.tokens.removeToken(), this.tokens.removeToken(), this.tokens.removeToken()) : (r && this.tokens.appendCode(","), n = !0, this.tokens.copyExpectedToken(t.star), this.tokens.copyExpectedToken(t.name), this.tokens.copyExpectedToken(t.name));
    else if (this.tokens.matches1(t.braceL)) {
      for (r && this.tokens.appendCode(","), this.tokens.copyToken(); !this.tokens.matches1(t.braceR); ) {
        s = !0;
        const i = Dn(this.tokens);
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
    if (pi(
      this.isTypeScriptTransformEnabled,
      this.keepUnusedImports,
      this.tokens,
      this.declarationInfo
    ))
      return this.tokens.removeInitialToken(), this.tokens.removeToken(), this.tokens.removeToken(), !0;
    if (!(this.tokens.matches4(t._export, t._default, t._function, t.name) || // export default async function
    this.tokens.matches5(t._export, t._default, t.name, t._function, t.name) && this.tokens.matchesContextualAtIndex(
      this.tokens.currentIndex() + 2,
      u._async
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
    const n = fi(this.tokens);
    let s = !1;
    for (; !this.tokens.matches1(t.braceR); ) {
      const r = Dn(this.tokens);
      if (r.isType || !n && this.shouldElideExportedName(r.leftName)) {
        for (; this.tokens.currentIndex() < r.endIndex; )
          this.tokens.removeToken();
        this.tokens.matches1(t.comma) && this.tokens.removeToken();
      } else {
        for (s = !0; this.tokens.currentIndex() < r.endIndex; )
          this.tokens.copyToken();
        this.tokens.matches1(t.comma) && this.tokens.copyToken();
      }
    }
    return this.tokens.copyExpectedToken(t.braceR), !this.keepUnusedImports && n && !s && (this.tokens.removeToken(), this.tokens.removeToken(), Qt(this.tokens)), !0;
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
class ep extends mt {
  constructor(n, s, r) {
    super(), this.rootTransformer = n, this.tokens = s, this.isImportsTransformEnabled = r;
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
    this.tokens.matchesContextual(u._of) && (this.tokens.removeToken(), n = this.tokens.matchesContextual(u._symbol), this.tokens.removeToken());
    const s = this.tokens.matches3(t.braceL, t.name, t.eq);
    this.tokens.appendCode(' = require("flow-enums-runtime")');
    const r = !n && !s;
    for (this.tokens.replaceTokenTrimmingLeftWhitespace(r ? ".Mirrored([" : "({"); !this.tokens.matches1(t.braceR); ) {
      if (this.tokens.matches1(t.ellipsis)) {
        this.tokens.removeToken();
        break;
      }
      this.processEnumElement(n, s), this.tokens.matches1(t.comma) && this.tokens.copyToken();
    }
    this.tokens.replaceToken(r ? "]);" : "});");
  }
  /**
   * Process an individual enum element, producing either an array element or an
   * object element based on what type of enum this is.
   */
  processEnumElement(n, s) {
    if (n) {
      const r = this.tokens.identifierName();
      this.tokens.copyToken(), this.tokens.appendCode(`: Symbol("${r}")`);
    } else s ? (this.tokens.copyToken(), this.tokens.replaceTokenTrimmingLeftWhitespace(":"), this.tokens.copyToken()) : this.tokens.replaceToken(`"${this.tokens.identifierName()}"`);
  }
}
function tp(e) {
  let n, s = e[0], r = 1;
  for (; r < e.length; ) {
    const i = e[r], a = e[r + 1];
    if (r += 2, (i === "optionalAccess" || i === "optionalCall") && s == null)
      return;
    i === "access" || i === "optionalAccess" ? (n = s, s = a(s)) : (i === "call" || i === "optionalCall") && (s = a((...l) => s.call(n, ...l)), n = void 0);
  }
  return s;
}
const Yn = "jest", np = ["mock", "unmock", "enableAutomock", "disableAutomock"];
class Gr extends mt {
  __init() {
    this.hoistedFunctionNames = [];
  }
  constructor(n, s, r, i) {
    super(), this.rootTransformer = n, this.tokens = s, this.nameManager = r, this.importProcessor = i, Gr.prototype.__init.call(this);
  }
  process() {
    return this.tokens.currentToken().scopeDepth === 0 && this.tokens.matches4(t.name, t.dot, t.name, t.parenL) && this.tokens.identifierName() === Yn ? tp([this, "access", (n) => n.importProcessor, "optionalAccess", (n) => n.getGlobalNames, "call", (n) => n(), "optionalAccess", (n) => n.has, "call", (n) => n(Yn)]) ? !1 : this.extractHoistedCalls() : !1;
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
      if (np.includes(s)) {
        const i = this.nameManager.claimFreeName("__jestHoist");
        this.hoistedFunctionNames.push(i), this.tokens.replaceToken(`function ${i}(){${Yn}.`), this.tokens.copyToken(), this.tokens.copyToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR), this.tokens.appendCode(";}"), n = !1;
      } else
        n ? this.tokens.copyToken() : this.tokens.replaceToken(`${Yn}.`), this.tokens.copyToken(), this.tokens.copyToken(), this.rootTransformer.processBalancedCode(), this.tokens.copyExpectedToken(t.parenR), n = !0;
    }
    return !0;
  }
}
class sp extends mt {
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
class rp extends mt {
  constructor(n, s) {
    super(), this.tokens = n, this.nameManager = s;
  }
  process() {
    return this.tokens.matches2(t._catch, t.braceL) ? (this.tokens.copyToken(), this.tokens.appendCode(` (${this.nameManager.claimFreeName("e")})`), !0) : !1;
  }
}
class op extends mt {
  constructor(n, s) {
    super(), this.tokens = n, this.nameManager = s;
  }
  process() {
    if (this.tokens.matches1(t.nullishCoalescing)) {
      const r = this.tokens.currentToken();
      return this.tokens.tokens[r.nullishStartIndex].isAsyncOperation ? this.tokens.replaceTokenTrimmingLeftWhitespace(", async () => (") : this.tokens.replaceTokenTrimmingLeftWhitespace(", () => ("), !0;
    }
    if (this.tokens.matches1(t._delete) && this.tokens.tokenAtRelativeIndex(1).isOptionalChainStart)
      return this.tokens.removeInitialToken(), !0;
    const s = this.tokens.currentToken().subscriptStartIndex;
    if (s != null && this.tokens.tokens[s].isOptionalChainStart && // Super subscripts can't be optional (since super is never null/undefined), and the syntax
    // relies on the subscript being intact, so leave this token alone.
    this.tokens.tokenAtRelativeIndex(-1).type !== t._super) {
      const r = this.nameManager.claimFreeName("_");
      let i;
      if (s > 0 && this.tokens.matches1AtIndex(s - 1, t._delete) && this.isLastSubscriptInChain() ? i = `${r} => delete ${r}` : i = `${r} => ${r}`, this.tokens.tokens[s].isAsyncOperation && (i = `async ${i}`), this.tokens.matches2(t.questionDot, t.parenL) || this.tokens.matches2(t.questionDot, t.lessThan))
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
class ip extends mt {
  constructor(n, s, r, i) {
    super(), this.rootTransformer = n, this.tokens = s, this.importProcessor = r, this.options = i;
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
    return n < 2 ? null : this.tokens.matches2AtIndex(n - 2, t.name, t.eq) ? this.tokens.identifierNameAtIndex(n - 2) : n >= 2 && this.tokens.tokens[n - 2].identifierRole === ne.ObjectKey ? this.tokens.identifierNameAtIndex(n - 2) : this.tokens.matches2AtIndex(n - 2, t._export, t._default) ? this.getDisplayNameFromFilename() : null;
  }
  getDisplayNameFromFilename() {
    const s = (this.options.filePath || "unknown").split("/"), r = s[s.length - 1], i = r.lastIndexOf("."), a = i === -1 ? r : r.slice(0, i);
    return a === "index" && s[s.length - 2] ? s[s.length - 2] : a;
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
    const s = n + 1, r = this.tokens.tokens[s].contextId;
    if (r == null)
      throw new Error("Expected non-null context ID on object open-brace.");
    for (; n < this.tokens.tokens.length; n++) {
      const i = this.tokens.tokens[n];
      if (i.type === t.braceR && i.contextId === r) {
        n++;
        break;
      }
      if (this.tokens.identifierNameAtIndex(n) === "displayName" && this.tokens.tokens[n].identifierRole === ne.ObjectKey && i.contextId === r)
        return !1;
    }
    if (n === this.tokens.tokens.length)
      throw new Error("Unexpected end of input when processing React class.");
    return this.tokens.matches1AtIndex(n, t.parenR) || this.tokens.matches2AtIndex(n, t.comma, t.parenR);
  }
}
class Xr extends mt {
  __init() {
    this.extractedDefaultExportName = null;
  }
  constructor(n, s) {
    super(), this.tokens = n, this.filePath = s, Xr.prototype.__init.call(this);
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
    for (const r of this.tokens.tokens)
      !r.isType && i1(r) && r.identifierRole !== ne.ImportDeclaration && n.add(this.tokens.identifierNameForToken(r));
    const s = Array.from(n).map((r) => ({
      variableName: r,
      uniqueLocalName: r
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
      ({ variableName: r, uniqueLocalName: i }) => `  reactHotLoader.register(${r}, "${i}", ${JSON.stringify(
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
const ap = /* @__PURE__ */ new Set([
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
function No(e) {
  if (e.length === 0 || !Bn[e.charCodeAt(0)])
    return !1;
  for (let n = 1; n < e.length; n++)
    if (!dt[e.charCodeAt(n)])
      return !1;
  return !ap.has(e);
}
class cp extends mt {
  constructor(n, s, r) {
    super(), this.rootTransformer = n, this.tokens = s, this.isImportsTransformEnabled = r;
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
      const { nameStringCode: r, variableName: i } = this.extractEnumKeyInfo(this.tokens.currentToken());
      this.tokens.removeInitialToken(), this.tokens.matches3(t.eq, t.string, t.comma) || this.tokens.matches3(t.eq, t.string, t.braceR) ? this.processStringLiteralEnumMember(n, r, i) : this.tokens.matches1(t.eq) ? this.processExplicitValueEnumMember(n, r, i) : this.processImplicitValueEnumMember(
        n,
        r,
        i,
        s
      ), this.tokens.matches1(t.comma) && this.tokens.removeToken(), i != null ? s = i : s = `${n}[${r}]`;
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
        variableName: No(s) ? s : null
      };
    } else if (n.type === t.string) {
      const s = this.tokens.stringValueForToken(n);
      return {
        nameStringCode: this.tokens.code.slice(n.start, n.end),
        variableName: No(s) ? s : null
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
  processStringLiteralEnumMember(n, s, r) {
    r != null ? (this.tokens.appendCode(`const ${r}`), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.appendCode(`; ${n}[${s}] = ${r};`)) : (this.tokens.appendCode(`${n}[${s}]`), this.tokens.copyToken(), this.tokens.copyToken(), this.tokens.appendCode(";"));
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
  processExplicitValueEnumMember(n, s, r) {
    const i = this.tokens.currentToken().rhsEndIndex;
    if (i == null)
      throw new Error("Expected rhsEndIndex on enum assign.");
    if (r != null) {
      for (this.tokens.appendCode(`const ${r}`), this.tokens.copyToken(); this.tokens.currentIndex() < i; )
        this.rootTransformer.processToken();
      this.tokens.appendCode(
        `; ${n}[${n}[${s}] = ${r}] = ${s};`
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
  processImplicitValueEnumMember(n, s, r, i) {
    let a = i != null ? `${i} + 1` : "0";
    r != null && (this.tokens.appendCode(`const ${r} = ${a}; `), a = r), this.tokens.appendCode(
      `${n}[${n}[${s}] = ${a}] = ${s};`
    );
  }
}
class us {
  __init() {
    this.transformers = [];
  }
  __init2() {
    this.generatedVariables = [];
  }
  constructor(n, s, r, i) {
    us.prototype.__init.call(this), us.prototype.__init2.call(this), this.nameManager = n.nameManager, this.helperManager = n.helperManager;
    const { tokenProcessor: a, importProcessor: l } = n;
    this.tokens = a, this.isImportsTransformEnabled = s.includes("imports"), this.isReactHotLoaderTransformEnabled = s.includes("react-hot-loader"), this.disableESTransforms = !!i.disableESTransforms, i.disableESTransforms || (this.transformers.push(
      new op(a, this.nameManager)
    ), this.transformers.push(new sp(a)), this.transformers.push(new rp(a, this.nameManager))), s.includes("jsx") && (i.jsxRuntime !== "preserve" && this.transformers.push(
      new Jt(this, a, l, this.nameManager, i)
    ), this.transformers.push(
      new ip(this, a, l, i)
    ));
    let f = null;
    if (s.includes("react-hot-loader")) {
      if (!i.filePath)
        throw new Error("filePath is required when using the react-hot-loader transform.");
      f = new Xr(a, i.filePath), this.transformers.push(f);
    }
    if (s.includes("imports")) {
      if (l === null)
        throw new Error("Expected non-null importProcessor with imports transform enabled.");
      this.transformers.push(
        new Nn(
          this,
          a,
          l,
          this.nameManager,
          this.helperManager,
          f,
          r,
          !!i.enableLegacyTypeScriptModuleInterop,
          s.includes("typescript"),
          s.includes("flow"),
          !!i.preserveDynamicImport,
          !!i.keepUnusedImports
        )
      );
    } else
      this.transformers.push(
        new Zf(
          a,
          this.nameManager,
          this.helperManager,
          f,
          s.includes("typescript"),
          s.includes("flow"),
          !!i.keepUnusedImports,
          i
        )
      );
    s.includes("flow") && this.transformers.push(
      new ep(this, a, s.includes("imports"))
    ), s.includes("typescript") && this.transformers.push(
      new cp(this, a, s.includes("imports"))
    ), s.includes("jest") && this.transformers.push(
      new Gr(this, a, this.nameManager, l)
    );
  }
  transform() {
    this.tokens.reset(), this.processBalancedCode();
    let s = this.isImportsTransformEnabled ? '"use strict";' : "";
    for (const l of this.transformers)
      s += l.getPrefixCode();
    s += this.helperManager.emitHelpers(), s += this.generatedVariables.map((l) => ` var ${l};`).join("");
    for (const l of this.transformers)
      s += l.getHoistedCode();
    let r = "";
    for (const l of this.transformers)
      r += l.getSuffixCode();
    const i = this.tokens.finish();
    let { code: a } = i;
    if (a.startsWith("#!")) {
      let l = a.indexOf(`
`);
      return l === -1 && (l = a.length, a += `
`), {
        code: a.slice(0, l + 1) + s + a.slice(l + 1) + r,
        // The hashbang line has no tokens, so shifting the tokens to account
        // for prefix can happen normally.
        mappings: this.shiftMappings(i.mappings, s.length)
      };
    } else
      return {
        code: s + a + r,
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
    const n = Yf(this, this.tokens, this.nameManager, this.disableESTransforms), s = (n.headerInfo.isExpression || !n.headerInfo.className) && n.staticInitializerNames.length + n.instanceInitializerNames.length > 0;
    let r = n.headerInfo.className;
    s && (r = this.nameManager.claimFreeName("_class"), this.generatedVariables.push(r), this.tokens.appendCode(` (${r} =`));
    const a = this.tokens.currentToken().contextId;
    if (a == null)
      throw new Error("Expected class to have a context ID.");
    for (this.tokens.copyExpectedToken(t._class); !this.tokens.matchesContextIdAndLabel(t.braceL, a); )
      this.processToken();
    this.processClassBody(n, r);
    const l = n.staticInitializerNames.map(
      (f) => `${r}.${f}()`
    );
    s ? this.tokens.appendCode(
      `, ${l.map((f) => `${f}, `).join("")}${r})`
    ) : n.staticInitializerNames.length > 0 && this.tokens.appendCode(` ${l.map((f) => `${f};`).join(" ")}`);
  }
  /**
   * We want to just handle class fields in all contexts, since TypeScript supports them. Later,
   * when some JS implementations support class fields, this should be made optional.
   */
  processClassBody(n, s) {
    const {
      headerInfo: r,
      constructorInsertPos: i,
      constructorInitializerStatements: a,
      fields: l,
      instanceInitializerNames: f,
      rangesToRemove: m
    } = n;
    let p = 0, h = 0;
    const k = this.tokens.currentToken().contextId;
    if (k == null)
      throw new Error("Expected non-null context ID on class.");
    this.tokens.copyExpectedToken(t.braceL), this.isReactHotLoaderTransformEnabled && this.tokens.appendCode(
      "__reactstandin__regenerateByEval(key, code) {this[key] = eval(code);}"
    );
    const I = a.length + f.length > 0;
    if (i === null && I) {
      const y = this.makeConstructorInitCode(
        a,
        f,
        s
      );
      if (r.hasSuperclass) {
        const b = this.nameManager.claimFreeName("args");
        this.tokens.appendCode(
          `constructor(...${b}) { super(...${b}); ${y}; }`
        );
      } else
        this.tokens.appendCode(`constructor() { ${y}; }`);
    }
    for (; !this.tokens.matchesContextIdAndLabel(t.braceR, k); )
      if (p < l.length && this.tokens.currentIndex() === l[p].start) {
        let y = !1;
        for (this.tokens.matches1(t.bracketL) ? this.tokens.copyTokenWithPrefix(`${l[p].initializerName}() {this`) : this.tokens.matches1(t.string) || this.tokens.matches1(t.num) ? (this.tokens.copyTokenWithPrefix(`${l[p].initializerName}() {this[`), y = !0) : this.tokens.copyTokenWithPrefix(`${l[p].initializerName}() {this.`); this.tokens.currentIndex() < l[p].end; )
          y && this.tokens.currentIndex() === l[p].equalsIndex && this.tokens.appendCode("]"), this.processToken();
        this.tokens.appendCode("}"), p++;
      } else if (h < m.length && this.tokens.currentIndex() >= m[h].start) {
        for (this.tokens.currentIndex() < m[h].end && this.tokens.removeInitialToken(); this.tokens.currentIndex() < m[h].end; )
          this.tokens.removeToken();
        h++;
      } else this.tokens.currentIndex() === i ? (this.tokens.copyToken(), I && this.tokens.appendCode(
        `;${this.makeConstructorInitCode(
          a,
          f,
          s
        )};`
      ), this.processToken()) : this.processToken();
    this.tokens.copyExpectedToken(t.braceR);
  }
  makeConstructorInitCode(n, s, r) {
    return [
      ...n,
      ...s.map((i) => `${r}.prototype.${i}.call(this)`)
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
    if (!this.tokens.matchesContextual(u._async) && !this.tokens.matches1(t._async))
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
    for (let r = 0; r < n.length; r++) {
      const i = n[r];
      i !== void 0 && (n[r] = i + s);
    }
    return n;
  }
}
var lp = {};
(function(e) {
  e.__esModule = !0, e.LinesAndColumns = void 0;
  var n = `
`, s = "\r", r = (
    /** @class */
    function() {
      function i(a) {
        this.string = a;
        for (var l = [0], f = 0; f < a.length; )
          switch (a[f]) {
            case n:
              f += n.length, l.push(f);
              break;
            case s:
              f += s.length, a[f] === n && (f += n.length), l.push(f);
              break;
            default:
              f++;
              break;
          }
        this.offsets = l;
      }
      return i.prototype.locationForIndex = function(a) {
        if (a < 0 || a > this.string.length)
          return null;
        for (var l = 0, f = this.offsets; f[l + 1] <= a; )
          l++;
        var m = a - f[l];
        return { line: l, column: m };
      }, i.prototype.indexForLocation = function(a) {
        var l = a.line, f = a.column;
        return l < 0 || l >= this.offsets.length || f < 0 || f > this.lengthOfLine(l) ? null : this.offsets[l] + f;
      }, i.prototype.lengthOfLine = function(a) {
        var l = this.offsets[a], f = a === this.offsets.length - 1 ? this.string.length : this.offsets[a + 1];
        return f - l;
      }, i;
    }()
  );
  e.LinesAndColumns = r, e.default = r;
})(lp);
function up(e) {
  const n = /* @__PURE__ */ new Set();
  for (let s = 0; s < e.tokens.length; s++)
    e.matches1AtIndex(s, t._import) && !e.matches3AtIndex(s, t._import, t.name, t.eq) && fp(e, s, n);
  return n;
}
function fp(e, n, s) {
  n++, !e.matches1AtIndex(n, t.parenL) && (e.matches1AtIndex(n, t.name) && (s.add(e.identifierNameAtIndex(n)), n++, e.matches1AtIndex(n, t.comma) && n++), e.matches1AtIndex(n, t.star) && (n += 2, s.add(e.identifierNameAtIndex(n)), n++), e.matches1AtIndex(n, t.braceL) && (n++, pp(e, n, s)));
}
function pp(e, n, s) {
  for (; ; ) {
    if (e.matches1AtIndex(n, t.braceR))
      return;
    const r = Dn(e, n);
    if (n = r.endIndex, r.isType || s.add(r.rightName), e.matches2AtIndex(n, t.comma, t.braceR))
      return;
    if (e.matches1AtIndex(n, t.braceR))
      return;
    if (e.matches1AtIndex(n, t.comma))
      n++;
    else
      throw new Error(`Unexpected token: ${JSON.stringify(e.tokens[n])}`);
  }
}
function hp(e, n) {
  Ac(n);
  try {
    const s = dp(e, n), i = new us(
      s,
      n.transforms,
      !!n.enableLegacyBabel5ModuleInterop,
      n
    ).transform();
    let a = { code: i.code };
    if (n.sourceMapOptions) {
      if (!n.filePath)
        throw new Error("filePath must be specified when generating a source map.");
      a = {
        ...a,
        sourceMap: dc(
          i,
          n.filePath,
          n.sourceMapOptions,
          e,
          s.tokenProcessor.tokens
        )
      };
    }
    return a;
  } catch (s) {
    throw n.filePath && (s.message = `Error transforming ${n.filePath}: ${s.message}`), s;
  }
}
function dp(e, n) {
  const s = n.transforms.includes("jsx"), r = n.transforms.includes("typescript"), i = n.transforms.includes("flow"), a = n.disableESTransforms === !0, l = Xf(e, s, r, i), f = l.tokens, m = l.scopes, p = new br(e, f), h = new ns(p), k = new Cn(
    e,
    f,
    i,
    a,
    h
  ), I = !!n.enableLegacyTypeScriptModuleInterop;
  let y = null;
  return n.transforms.includes("imports") ? (y = new Yt(
    p,
    k,
    I,
    n,
    n.transforms.includes("typescript"),
    !!n.keepUnusedImports,
    h
  ), y.preprocessTokens(), ko(k, m, y.getGlobalNames()), n.transforms.includes("typescript") && !n.keepUnusedImports && y.pruneTypeOnlyImports()) : n.transforms.includes("typescript") && !n.keepUnusedImports && ko(k, m, up(k)), { tokenProcessor: k, scopes: m, nameManager: p, importProcessor: y, helperManager: h };
}
function mp(e, n) {
  for (; e.length < n; )
    e = "0" + e;
  return e;
}
function Ct(e, n) {
  var s, r, i;
  if (n.length === 0)
    return e;
  for (s = 0, i = n.length; s < i; s++)
    r = n.charCodeAt(s), e = (e << 5) - e + r, e |= 0;
  return e < 0 ? e * -2 : e;
}
function kp(e, n, s) {
  return Object.keys(n).sort().reduce(r, e);
  function r(i, a) {
    return hi(i, n[a], a, s);
  }
}
function hi(e, n, s, r) {
  var i = Ct(Ct(Ct(e, s), gp(n)), typeof n);
  if (n === null)
    return Ct(i, "null");
  if (n === void 0)
    return Ct(i, "undefined");
  if (typeof n == "object" || typeof n == "function") {
    if (r.indexOf(n) !== -1)
      return Ct(i, "[Circular]" + s);
    r.push(n);
    var a = kp(i, n, r);
    if (!("valueOf" in n) || typeof n.valueOf != "function")
      return a;
    try {
      return Ct(a, String(n.valueOf()));
    } catch (l) {
      return Ct(a, "[valueOf exception]" + (l.stack || l.message));
    }
  }
  return Ct(i, n.toString());
}
function gp(e) {
  return Object.prototype.toString.call(e);
}
function _p(e) {
  return mp(hi(0, e, "", []).toString(16), 8);
}
var yp = _p;
const vp = /* @__PURE__ */ Xi(yp), Kt = "__sfc__", wp = /\.[jt]sx?$/;
function Po(e) {
  return !!(e && /(\.|\b)tsx?$/.test(e));
}
function Ro(e) {
  return !!(e && /(\.|\b)[jt]sx$/.test(e));
}
async function Jr(e, n) {
  return hp(e, {
    transforms: ["typescript", ...n ? ["jsx"] : []],
    jsxRuntime: "preserve"
  }).code;
}
async function An(e, { filename: n, code: s, compiled: r }) {
  var F, W, q, se, ee, ue, Te, _e, ve;
  if (!s.trim())
    return [];
  if (n.endsWith(".css"))
    return r.css = s, [];
  if (wp.test(n)) {
    const V = Ro(n);
    return Po(n) && (s = await Jr(s, V)), V && (s = await import("./jsx-Der3xk-X_DUp1mpNK.js").then((g) => g.transformJSX(s))), r.js = r.ssr = s, [];
  }
  if (n.endsWith(".json")) {
    let V;
    try {
      V = JSON.parse(s);
    } catch (g) {
      return console.error(`Error parsing ${n}`, g.message), [g.message];
    }
    return r.js = r.ssr = `export default ${JSON.stringify(V)}`, [];
  }
  if (!n.endsWith(".vue"))
    return [];
  const i = vp(n), { errors: a, descriptor: l } = e.compiler.parse(s, {
    filename: n,
    sourceMap: !0,
    templateParseOptions: (W = (F = e.sfcOptions) == null ? void 0 : F.template) == null ? void 0 : W.compilerOptions
  });
  if (a.length)
    return a;
  const f = l.styles.map((V) => V.lang).filter(Boolean), m = (q = l.template) == null ? void 0 : q.lang;
  if (f.length && m)
    return [
      `lang="${f.join(
        ","
      )}" pre-processors for <style> and lang="${m}" for <template> are currently not supported.`
    ];
  if (f.length)
    return [
      `lang="${f.join(
        ","
      )}" pre-processors for <style> are currently not supported.`
    ];
  if (m)
    return [
      `lang="${m}" pre-processors for <template> are currently not supported.`
    ];
  const p = ((se = l.script) == null ? void 0 : se.lang) || ((ee = l.scriptSetup) == null ? void 0 : ee.lang), h = Po(p), k = Ro(p);
  if (p && p !== "js" && !h && !k)
    return [`Unsupported lang "${p}" in <script> blocks.`];
  const I = l.styles.some((V) => V.scoped);
  let y = "", b = "";
  const w = (V) => {
    y += V, b += V;
  };
  let B, j;
  try {
    [B, j] = await Lo(
      e,
      l,
      i,
      !1,
      h,
      k
    );
  } catch (V) {
    return [V.stack.split(`
`).slice(0, 12).join(`
`)];
  }
  if (y += B, l.scriptSetup || l.cssVars.length > 0)
    try {
      const V = await Lo(
        e,
        l,
        i,
        !0,
        h,
        k
      );
      b += V[0];
    } catch (V) {
      b = `/* SSR compile error: ${V} */`;
    }
  else
    b += B;
  if (l.template && (!l.scriptSetup || ((Te = (ue = e.sfcOptions) == null ? void 0 : ue.script) == null ? void 0 : Te.inlineTemplate) === !1)) {
    const V = await Oo(
      e,
      l,
      i,
      j,
      !1,
      h,
      k
    );
    if (Array.isArray(V))
      return V;
    y += `;${V}`;
    const g = await Oo(
      e,
      l,
      i,
      j,
      !0,
      h,
      k
    );
    typeof g == "string" ? b += `;${g}` : b = `/* SSR compile error: ${g[0]} */`;
  }
  I && w(
    `
${Kt}.__scopeId = ${JSON.stringify(`data-v-${i}`)}`
  );
  const x = ((_e = e.sfcOptions.script) == null ? void 0 : _e.customElement) || /\.ce\.vue$/;
  function P(V) {
    return typeof V == "boolean" ? V : typeof V == "function" ? V(n) : V.test(n);
  }
  let N = P(x), D = "", X = [];
  for (const V of l.styles) {
    if (V.module)
      return ["<style module> is not supported in the playground."];
    const g = await e.compiler.compileStyleAsync({
      ...(ve = e.sfcOptions) == null ? void 0 : ve.style,
      source: V.content,
      filename: n,
      id: i,
      scoped: V.scoped,
      modules: !!V.module
    });
    g.errors.length ? g.errors[0].message.includes("pathToFileURL") || (e.errors = g.errors) : N ? X.push(g.code) : D += g.code + `
`;
  }
  if (D ? r.css = D.trim() : r.css = N ? r.css = "/* The component style of the custom element will be compiled into the component object */" : "/* No <style> tags present */", y || b) {
    const V = N ? `
${Kt}.styles = ${JSON.stringify(X)}` : "";
    w(
      `
${Kt}.__file = ${JSON.stringify(n)}` + V + `
export default ${Kt}`
    ), r.js = y.trimStart(), r.ssr = b.trimStart();
  }
  return [];
}
async function Lo(e, n, s, r, i, a) {
  var l, f, m, p;
  if (n.script || n.scriptSetup) {
    const h = [];
    i && h.push("typescript"), a && h.push("jsx");
    const k = e.compiler.compileScript(n, {
      inlineTemplate: !0,
      ...(l = e.sfcOptions) == null ? void 0 : l.script,
      id: s,
      genDefaultAs: Kt,
      templateOptions: {
        ...(f = e.sfcOptions) == null ? void 0 : f.template,
        ssr: r,
        ssrCssVars: n.cssVars,
        compilerOptions: {
          ...(p = (m = e.sfcOptions) == null ? void 0 : m.template) == null ? void 0 : p.compilerOptions,
          expressionPlugins: h
        }
      }
    });
    let I = k.content;
    return i && (I = await Jr(I, a)), a && (I = await import("./jsx-Der3xk-X_DUp1mpNK.js").then((y) => y.transformJSX(I))), k.bindings && (I = `/* Analyzed bindings: ${JSON.stringify(
      k.bindings,
      null,
      2
    )} */
` + I), [I, k.bindings];
  } else
    return [`
const ${Kt} = {}`, void 0];
}
async function Oo(e, n, s, r, i, a, l) {
  var k, I, y;
  const f = [];
  a && f.push("typescript"), l && f.push("jsx");
  let { code: m, errors: p } = e.compiler.compileTemplate({
    isProd: !1,
    ...(k = e.sfcOptions) == null ? void 0 : k.template,
    ast: n.template.ast,
    source: n.template.content,
    filename: n.filename,
    id: s,
    scoped: n.styles.some((b) => b.scoped),
    slotted: n.slotted,
    ssr: i,
    ssrCssVars: n.cssVars,
    compilerOptions: {
      ...(y = (I = e.sfcOptions) == null ? void 0 : I.template) == null ? void 0 : y.compilerOptions,
      bindingMetadata: r,
      expressionPlugins: f
    }
  });
  if (p.length)
    return p;
  const h = i ? "ssrRender" : "render";
  return m = `
${m.replace(
    /\nexport (function|const) (render|ssrRender)/,
    `$1 ${h}`
  )}
${Kt}.${h} = ${h}`, a && (m = await Jr(m, l)), l && (m = await import("./jsx-Der3xk-X_DUp1mpNK.js").then((b) => b.transformJSX(m))), m;
}
function di(e = {}) {
  function n(a) {
    if (a)
      return typeof a == "string" ? a : a();
  }
  const s = Ee(!1), r = Ee(e.vueVersion || null), i = Pt(() => {
    const a = !r.value && n(
      s.value ? e.runtimeProd : e.runtimeDev
    ) || `https://cdn.jsdelivr.net/npm/@vue/runtime-dom@${r.value || $s}/dist/runtime-dom.esm-browser${s.value ? ".prod" : ""}.js`, l = !r.value && n(e.serverRenderer) || `https://cdn.jsdelivr.net/npm/@vue/server-renderer@${r.value || $s}/dist/server-renderer.esm-browser.js`;
    return {
      imports: {
        vue: a,
        "vue/server-renderer": l
      }
    };
  });
  return {
    productionMode: s,
    importMap: i,
    vueVersion: r,
    defaultVersion: $s
  };
}
function kr(e, n) {
  return {
    imports: { ...e.imports, ...n.imports },
    scopes: { ...e.scopes, ...n.scopes }
  };
}
const Js = `<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
<\/script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>
`, xp = `<script setup><\/script>

<template>
  <div>
    <slot />
  </div>
</template>
`, tt = "import-map.json", wt = "tsconfig.json";
function mi({
  files: e = Ee(/* @__PURE__ */ Object.create(null)),
  activeFilename: n = void 0,
  // set later
  mainFile: s = Ee("src/App.vue"),
  template: r = Ee({
    welcomeSFC: Js,
    newSFC: xp
  }),
  builtinImportMap: i = void 0,
  // set later
  errors: a = Ee([]),
  showOutput: l = Ee(!1),
  outputMode: f = Ee("preview"),
  sfcOptions: m = Ee({}),
  compiler: p = Oi(Qr),
  vueVersion: h = Ee(null),
  locale: k = Ee(),
  typescriptVersion: I = Ee("latest"),
  dependencyVersion: y = Ee(/* @__PURE__ */ Object.create(null)),
  reloadLanguageTools: b = Ee()
} = {}, w) {
  i || ({ importMap: i, vueVersion: h } = di({
    vueVersion: h.value
  }));
  const B = Ee(!1);
  function j() {
    const g = kr(i.value, W());
    P(g);
  }
  function x() {
    jo(() => {
      An(V, ve.value).then((g) => a.value = g);
    }), Ft(
      () => {
        var g;
        return [
          (g = e.value[wt]) == null ? void 0 : g.code,
          I.value,
          k.value,
          y.value,
          h.value
        ];
      },
      () => {
        var g;
        return (g = b.value) == null ? void 0 : g.call(b);
      },
      { deep: !0 }
    ), Ft(
      i,
      () => {
        P(kr(W(), i.value));
      },
      { deep: !0 }
    ), Ft(
      h,
      async (g) => {
        if (g) {
          const v = `https://cdn.jsdelivr.net/npm/@vue/compiler-sfc@${g}/dist/compiler-sfc.esm-browser.js`;
          B.value = !0, p.value = await import(
            /* @vite-ignore */
            v
          ).finally(
            () => B.value = !1
          ), console.info(`[@vue/repl] Now using Vue version: ${g}`);
        } else
          p.value = Qr, console.info("[@vue/repl] Now using default Vue version");
      },
      { immediate: !0 }
    ), Ft(
      m,
      () => {
        var g;
        (g = m.value).script || (g.script = {}), m.value.script.fs = {
          fileExists(v) {
            return v.startsWith("/") && (v = v.slice(1)), !!V.files[v];
          },
          readFile(v) {
            return v.startsWith("/") && (v = v.slice(1)), V.files[v].code;
          }
        };
      },
      { immediate: !0 }
    ), e.value[wt] || (e.value[wt] = new Pn(
      wt,
      JSON.stringify(bp, void 0, 2)
    )), a.value = [];
    for (const [g, v] of Object.entries(e.value))
      g !== s.value && An(V, v).then((R) => a.value.push(...R));
  }
  function P(g) {
    if (g.imports)
      for (const [R, G] of Object.entries(g.imports))
        G && (g.imports[R] = Ip(G));
    const v = JSON.stringify(g, void 0, 2);
    e.value[tt] ? e.value[tt].code = v : e.value[tt] = new Pn(tt, v);
  }
  const N = (g) => {
    n.value = g;
  }, D = (g) => {
    let v;
    typeof g == "string" ? v = new Pn(
      g,
      g.endsWith(".vue") ? r.value.newSFC : ""
    ) : v = g, e.value[v.filename] = v, v.hidden || N(v.filename);
  }, X = (g) => {
    confirm(`Are you sure you want to delete ${Rn(g)}?`) && (n.value === g && (n.value = s.value), delete e.value[g]);
  }, F = (g, v) => {
    const R = e.value[g];
    if (!R) {
      a.value = [`Could not rename "${g}", file not found`];
      return;
    }
    if (!v || g === v) {
      a.value = [`Cannot rename "${g}" to "${v}"`];
      return;
    }
    R.filename = v;
    const G = {};
    for (const [Y, te] of Object.entries(e.value))
      Y === g ? G[v] = te : G[Y] = te;
    e.value = G, s.value === g && (s.value = v), n.value === g ? n.value = v : An(V, R).then((Y) => a.value = Y);
  }, W = () => {
    try {
      return JSON.parse(e.value[tt].code);
    } catch (g) {
      return a.value = [
        `Syntax error in ${tt}: ${g.message}`
      ], {};
    }
  }, q = () => {
    try {
      return JSON.parse(e.value[wt].code);
    } catch {
      return {};
    }
  }, se = () => {
    const g = ue(), v = g[tt];
    if (v) {
      const R = JSON.parse(v), G = i.value.imports || {};
      if (R.imports) {
        for (const [Y, te] of Object.entries(R.imports))
          G[Y] === te && delete R.imports[Y];
        R.imports && !Object.keys(R.imports).length && delete R.imports;
      }
      R.scopes && !Object.keys(R.scopes).length && delete R.scopes, Object.keys(R).length ? g[tt] = JSON.stringify(R, null, 2) : delete g[tt];
    }
    return h.value && (g._version = h.value), "#" + pa(JSON.stringify(g));
  }, ee = (g) => {
    g.startsWith("#") && (g = g.slice(1));
    let v;
    try {
      v = JSON.parse(ha(g));
    } catch (R) {
      return console.error(R), alert("Failed to load code from URL."), _e();
    }
    for (const R in v)
      R === "_version" ? h.value = v[R] : Qn(e.value, R, v[R]);
  }, ue = () => {
    const g = {};
    for (const [v, R] of Object.entries(e.value)) {
      const G = Rn(v);
      g[G] = R.code;
    }
    return g;
  }, Te = async (g, v = V.mainFile) => {
    const R = /* @__PURE__ */ Object.create(null);
    v = ki(v), g[v] || Qn(R, v, r.value.welcomeSFC || Js);
    for (const [Y, te] of Object.entries(g))
      Qn(R, Y, te);
    const G = [];
    for (const Y of Object.values(R))
      G.push(...await An(V, Y));
    V.mainFile = v, V.files = R, V.errors = G, j(), N(V.mainFile);
  }, _e = () => {
    Qn(
      e.value,
      s.value,
      r.value.welcomeSFC || Js
    );
  };
  w ? ee(w) : _e(), e.value[s.value] || (s.value = Object.keys(e.value)[0]), n || (n = Ee(s.value));
  const ve = Pt(() => e.value[n.value]);
  j();
  const V = Mo({
    files: e,
    activeFile: ve,
    activeFilename: n,
    mainFile: s,
    template: r,
    builtinImportMap: i,
    errors: a,
    showOutput: l,
    outputMode: f,
    sfcOptions: m,
    compiler: p,
    loading: B,
    vueVersion: h,
    locale: k,
    typescriptVersion: I,
    dependencyVersion: y,
    reloadLanguageTools: b,
    init: x,
    setActive: N,
    addFile: D,
    deleteFile: X,
    renameFile: F,
    getImportMap: W,
    getTsConfig: q,
    serialize: se,
    deserialize: ee,
    getFiles: ue,
    setFiles: Te
  });
  return V;
}
const bp = {
  compilerOptions: {
    allowJs: !0,
    checkJs: !0,
    jsx: "Preserve",
    target: "ESNext",
    module: "ESNext",
    moduleResolution: "Bundler",
    allowImportingTsExtensions: !0
  },
  vueCompilerOptions: {
    target: 3.4
  }
};
class Pn {
  constructor(n, s = "", r = !1) {
    this.filename = n, this.code = s, this.hidden = r, this.compiled = {
      js: "",
      css: "",
      ssr: ""
    }, this.editorViewState = null;
  }
  get language() {
    return this.filename.endsWith(".vue") ? "vue" : this.filename.endsWith(".html") ? "html" : this.filename.endsWith(".css") ? "css" : this.filename.endsWith(".ts") ? "typescript" : "javascript";
  }
}
function ki(e) {
  return e === tt || e === wt || e.startsWith("src/") ? e : `src/${e}`;
}
function Rn(e) {
  return e.replace(/^src\//, "");
}
function Ip(e) {
  return e.replace("https://sfc.vuejs", "https://play.vuejs");
}
function Qn(e, n, s) {
  const r = ki(n);
  e[r] = new Pn(r, s);
}
const Yr = (e) => (Bo("data-v-96a624e2"), e = e(), qo(), e), Tp = ["onClick", "onDblclick"], Sp = { class: "label" }, Ep = ["onClick"], Ap = /* @__PURE__ */ Yr(() => /* @__PURE__ */ Le("svg", {
  class: "icon",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ Le("line", {
    stroke: "#999",
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }),
  /* @__PURE__ */ Le("line", {
    stroke: "#999",
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })
], -1)), Cp = [
  Ap
], Np = { class: "file pending" }, Pp = { class: "import-map-wrapper" }, Rp = /* @__PURE__ */ Yr(() => /* @__PURE__ */ Le("span", { class: "label" }, "tsconfig.json", -1)), Lp = [
  Rp
], Op = /* @__PURE__ */ Yr(() => /* @__PURE__ */ Le("span", { class: "label" }, "Import Map", -1)), Dp = [
  Op
], Mp = /* @__PURE__ */ Wt({
  __name: "FileSelector",
  setup(e) {
    const n = at(gn), s = Ee(!1), r = Ee("Comp.vue"), i = at("tsconfig"), a = at("import-map"), l = Pt(
      () => Object.entries(n.files).filter(
        ([b, w]) => b !== tt && b !== wt && !w.hidden
      ).map(([b]) => b)
    );
    function f() {
      let b = 0, w = "Comp.vue";
      for (; ; ) {
        let B = !1;
        for (const j in n.files)
          if (Rn(j) === w) {
            B = !0, w = `Comp${++b}.vue`;
            break;
          }
        if (!B)
          break;
      }
      r.value = w, s.value = !0;
    }
    function m() {
      s.value = !1;
    }
    function p({ el: b }) {
      b.focus();
    }
    function h() {
      if (!s.value) return;
      const b = "src/" + r.value, w = s.value === !0 ? "" : s.value;
      if (!/\.(vue|jsx?|tsx?|css|json)$/.test(b)) {
        n.errors = [
          "Playground only supports *.vue, *.jsx?, *.tsx?, *.css, *.json files."
        ];
        return;
      }
      if (b !== w && b in n.files) {
        n.errors = [`File "${b}" already exists.`];
        return;
      }
      n.errors = [], m(), b !== w && (w ? n.renameFile(w, b) : n.addFile(b));
    }
    function k(b) {
      r.value = Rn(b), s.value = b;
    }
    const I = Ee(null);
    function y(b) {
      b.preventDefault();
      const w = I.value, j = 30 * ((Math.abs(b.deltaX) >= Math.abs(b.deltaY) ? b.deltaX : b.deltaY) > 0 ? 1 : -1);
      w.scrollTo({
        left: w.scrollLeft + j
      });
    }
    return (b, w) => (qe(), Xe("div", {
      ref_key: "fileSel",
      ref: I,
      class: vt(["file-selector", { "has-import-map": Re(a) }]),
      onWheel: y
    }, [
      (qe(!0), Xe(dn, null, $o(l.value, (B, j) => (qe(), Xe(dn, { key: B }, [
        s.value !== B ? (qe(), Xe("div", {
          key: 0,
          class: vt(["file", { active: Re(n).activeFile.filename === B }]),
          onClick: (x) => Re(n).setActive(B),
          onDblclick: (x) => j > 0 && k(B)
        }, [
          Le("span", Sp, mn(Re(Rn)(B)), 1),
          j > 0 ? (qe(), Xe("span", {
            key: 0,
            class: "remove",
            onClick: Fo((x) => Re(n).deleteFile(B), ["stop"])
          }, Cp, 8, Ep)) : jt("", !0)
        ], 42, Tp)) : jt("", !0),
        s.value === !0 && j === l.value.length - 1 || s.value === B ? (qe(), Xe("div", {
          key: 1,
          class: vt(["file pending", { active: s.value === B }])
        }, [
          Le("span", Np, mn(r.value), 1),
          fs(Le("input", {
            "onUpdate:modelValue": w[0] || (w[0] = (x) => r.value = x),
            spellcheck: "false",
            onBlur: h,
            onKeyup: [
              eo(h, ["enter"]),
              eo(m, ["esc"])
            ],
            onVnodeMounted: p
          }, null, 544), [
            [zi, r.value]
          ])
        ], 2)) : jt("", !0)
      ], 64))), 128)),
      Le("button", {
        class: "add",
        onClick: f
      }, "+"),
      Le("div", Pp, [
        Re(i) && Re(n).files[Re(wt)] ? (qe(), Xe("div", {
          key: 0,
          class: vt(["file", { active: Re(n).activeFile.filename === Re(wt) }]),
          onClick: w[1] || (w[1] = (B) => Re(n).setActive(Re(wt)))
        }, Lp, 2)) : jt("", !0),
        Re(a) ? (qe(), Xe("div", {
          key: 1,
          class: vt(["file", { active: Re(n).activeFile.filename === Re(tt) }]),
          onClick: w[2] || (w[2] = (B) => Re(n).setActive(Re(tt)))
        }, Dp, 2)) : jt("", !0)
      ])
    ], 34));
  }
}), jp = /* @__PURE__ */ nn(Mp, [["__scopeId", "data-v-96a624e2"]]), gi = (e) => (Bo("data-v-70b24951"), e = e(), qo(), e), Fp = /* @__PURE__ */ gi(() => /* @__PURE__ */ Le("span", null, "Show Error", -1)), $p = /* @__PURE__ */ gi(() => /* @__PURE__ */ Le("div", { class: "indicator" }, null, -1)), Bp = [
  $p
], qp = /* @__PURE__ */ Wt({
  __name: "MessageToggle",
  props: {
    modelValue: { type: Boolean },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const n = Gi(e, "modelValue");
    return (s, r) => (qe(), Xe("div", {
      class: "wrapper",
      onClick: r[0] || (r[0] = (i) => n.value = !n.value)
    }, [
      Fp,
      Le("div", {
        class: vt(["toggle", [{ active: e.modelValue }]])
      }, Bp, 2)
    ]));
  }
}), Up = /* @__PURE__ */ nn(qp, [["__scopeId", "data-v-70b24951"]]), Vp = { class: "editor-container" }, Do = "repl_show_error", Wp = /* @__PURE__ */ Wt({
  __name: "EditorContainer",
  props: {
    editorComponent: {}
  },
  setup(e) {
    const n = e, s = at(gn), r = Ee(l()), i = fa((f) => {
      s.activeFile.code = f;
    }, 250);
    function a() {
      localStorage.setItem(Do, r.value ? "true" : "false");
    }
    function l() {
      return localStorage.getItem(Do) !== "false";
    }
    return Ft(r, () => {
      a();
    }), (f, m) => (qe(), Xe(dn, null, [
      Nt(jp),
      Le("div", Vp, [
        Nt(n.editorComponent, {
          value: Re(s).activeFile.code,
          filename: Re(s).activeFile.filename,
          onChange: Re(i)
        }, null, 8, ["value", "filename", "onChange"]),
        fs(Nt(nr, {
          err: Re(s).errors[0]
        }, null, 8, ["err"]), [
          [gr, r.value]
        ]),
        Nt(Up, {
          modelValue: r.value,
          "onUpdate:modelValue": m[0] || (m[0] = (p) => r.value = p)
        }, null, 8, ["modelValue"])
      ])
    ], 64));
  }
}), Hp = /* @__PURE__ */ nn(Wp, [["__scopeId", "data-v-7db65265"]]), zp = { class: "vue-repl" }, Gp = /* @__PURE__ */ Wt({
  __name: "Repl",
  props: {
    theme: { default: "light" },
    previewTheme: { type: Boolean, default: !1 },
    editor: {},
    store: { default: () => mi() },
    autoResize: { type: Boolean, default: !0 },
    autoSave: { type: Boolean, default: !0 },
    showCompileOutput: { type: Boolean, default: !0 },
    showImportMap: { type: Boolean, default: !0 },
    showTsConfig: { type: Boolean, default: !0 },
    clearConsole: { type: Boolean, default: !0 },
    layout: { default: "horizontal" },
    layoutReverse: { type: Boolean, default: !1 },
    ssr: { type: Boolean, default: !1 },
    previewOptions: { default: () => ({
      headHTML: "",
      bodyHTML: "",
      placeholderHTML: "",
      customCode: {
        importCode: "",
        useCode: ""
      }
    }) }
  },
  setup(e, { expose: n }) {
    const s = e;
    if (!s.editor)
      throw new Error('The "editor" prop is now required.');
    const r = Ee();
    s.store.init();
    const i = Pt(() => s.layoutReverse ? "right" : "left"), a = Pt(() => s.layoutReverse ? "left" : "right");
    yt(gn, s.store), yt("autoresize", s.autoResize), yt("autosave", s.autoSave), yt("import-map", hn(s, "showImportMap")), yt("tsconfig", hn(s, "showTsConfig")), yt("clear-console", hn(s, "clearConsole")), yt("preview-options", s.previewOptions), yt("theme", hn(s, "theme")), yt("preview-theme", hn(s, "previewTheme")), yt("preview-ref", () => {
      var f, m;
      return (m = (f = r.value) == null ? void 0 : f.previewRef) == null ? void 0 : m.container;
    });
    function l() {
      var f;
      (f = r.value) == null || f.reload();
    }
    return n({ reload: l }), (f, m) => (qe(), Xe("div", zp, [
      Nt(ma, { layout: f.layout }, {
        [i.value]: Ys(() => [
          Nt(Hp, { "editor-component": f.editor }, null, 8, ["editor-component"])
        ]),
        [a.value]: Ys(() => [
          Nt(Ca, {
            ref_key: "outputRef",
            ref: r,
            "editor-component": f.editor,
            "show-compile-output": s.showCompileOutput,
            ssr: !!s.ssr
          }, null, 8, ["editor-component", "show-compile-output", "ssr"])
        ]),
        _: 2
      }, 1032, ["layout"])
    ]));
  }
}), Yp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  File: Pn,
  Preview: e1,
  Repl: Gp,
  compileFile: An,
  mergeImportMap: kr,
  useStore: mi,
  useVueImportMap: di
}, Symbol.toStringTag, { value: "Module" }));
export {
  ht as c,
  Xi as g,
  Yp as v
};

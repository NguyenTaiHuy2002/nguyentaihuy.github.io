/*! For license information please see document.js.LICENSE.txt */
!(function(t) {
    var e = {};
    function n(i) {
        if (e[i]) return e[i].exports;
        var r = (e[i] = { i: i, l: !1, exports: {} });
        return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    (n.m = t),
        (n.c = e),
        (n.d = function(t, e, i) {
            n.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: i });
        }),
        (n.r = function(t) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (n.t = function(t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var i = Object.create(null);
            if (
                (n.r(i),
                Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
            )
                for (var r in t)
                    n.d(
                        i,
                        r,
                        function(e) {
                            return t[e];
                        }.bind(null, r)
                    );
            return i;
        }),
        (n.n = function(t) {
            var e =
                t && t.__esModule
                    ? function() {
                          return t.default;
                      }
                    : function() {
                          return t;
                      };
            return n.d(e, "a", e), e;
        }),
        (n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = "/"),
        n((n.s = 7));
})({
    7: function(t, e, n) {
        t.exports = n("uObM");
    },
    B9Yq: function(t, e) {
        t.exports = function() {
            throw new Error("define cannot be used indirect");
        };
    },
    EVdn: function(t, e, n) {
        var i;
        !(function(e, n) {
            "use strict";
            "object" == typeof t.exports
                ? (t.exports = e.document
                      ? n(e, !0)
                      : function(t) {
                            if (!t.document)
                                throw new Error(
                                    "jQuery requires a window with a document"
                                );
                            return n(t);
                        })
                : n(e);
        })("undefined" != typeof window ? window : this, function(n, r) {
            "use strict";
            var s = [],
                o = n.document,
                a = Object.getPrototypeOf,
                l = s.slice,
                c = s.concat,
                u = s.push,
                h = s.indexOf,
                d = {},
                p = d.toString,
                f = d.hasOwnProperty,
                g = f.toString,
                m = g.call(Object),
                v = {},
                y = function(t) {
                    return (
                        "function" == typeof t && "number" != typeof t.nodeType
                    );
                },
                w = function(t) {
                    return null != t && t === t.window;
                },
                x = { type: !0, src: !0, nonce: !0, noModule: !0 };
            function _(t, e, n) {
                var i,
                    r,
                    s = (n = n || o).createElement("script");
                if (((s.text = t), e))
                    for (i in x)
                        (r = e[i] || (e.getAttribute && e.getAttribute(i))) &&
                            s.setAttribute(i, r);
                n.head.appendChild(s).parentNode.removeChild(s);
            }
            function b(t) {
                return null == t
                    ? t + ""
                    : "object" == typeof t || "function" == typeof t
                    ? d[p.call(t)] || "object"
                    : typeof t;
            }
            var C = function(t, e) {
                    return new C.fn.init(t, e);
                },
                T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            function E(t) {
                var e = !!t && "length" in t && t.length,
                    n = b(t);
                return (
                    !y(t) &&
                    !w(t) &&
                    ("array" === n ||
                        0 === e ||
                        ("number" == typeof e && e > 0 && e - 1 in t))
                );
            }
            (C.fn = C.prototype = {
                jquery: "3.4.1",
                constructor: C,
                length: 0,
                toArray: function() {
                    return l.call(this);
                },
                get: function(t) {
                    return null == t
                        ? l.call(this)
                        : t < 0
                        ? this[t + this.length]
                        : this[t];
                },
                pushStack: function(t) {
                    var e = C.merge(this.constructor(), t);
                    return (e.prevObject = this), e;
                },
                each: function(t) {
                    return C.each(this, t);
                },
                map: function(t) {
                    return this.pushStack(
                        C.map(this, function(e, n) {
                            return t.call(e, n, e);
                        })
                    );
                },
                slice: function() {
                    return this.pushStack(l.apply(this, arguments));
                },
                first: function() {
                    return this.eq(0);
                },
                last: function() {
                    return this.eq(-1);
                },
                eq: function(t) {
                    var e = this.length,
                        n = +t + (t < 0 ? e : 0);
                    return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
                },
                end: function() {
                    return this.prevObject || this.constructor();
                },
                push: u,
                sort: s.sort,
                splice: s.splice
            }),
                (C.extend = C.fn.extend = function() {
                    var t,
                        e,
                        n,
                        i,
                        r,
                        s,
                        o = arguments[0] || {},
                        a = 1,
                        l = arguments.length,
                        c = !1;
                    for (
                        "boolean" == typeof o &&
                            ((c = o), (o = arguments[a] || {}), a++),
                            "object" == typeof o || y(o) || (o = {}),
                            a === l && ((o = this), a--);
                        a < l;
                        a++
                    )
                        if (null != (t = arguments[a]))
                            for (e in t)
                                (i = t[e]),
                                    "__proto__" !== e &&
                                        o !== i &&
                                        (c &&
                                        i &&
                                        (C.isPlainObject(i) ||
                                            (r = Array.isArray(i)))
                                            ? ((n = o[e]),
                                              (s =
                                                  r && !Array.isArray(n)
                                                      ? []
                                                      : r || C.isPlainObject(n)
                                                      ? n
                                                      : {}),
                                              (r = !1),
                                              (o[e] = C.extend(c, s, i)))
                                            : void 0 !== i && (o[e] = i));
                    return o;
                }),
                C.extend({
                    expando:
                        "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(t) {
                        throw new Error(t);
                    },
                    noop: function() {},
                    isPlainObject: function(t) {
                        var e, n;
                        return (
                            !(!t || "[object Object]" !== p.call(t)) &&
                            (!(e = a(t)) ||
                                ("function" ==
                                    typeof (n =
                                        f.call(e, "constructor") &&
                                        e.constructor) &&
                                    g.call(n) === m))
                        );
                    },
                    isEmptyObject: function(t) {
                        var e;
                        for (e in t) return !1;
                        return !0;
                    },
                    globalEval: function(t, e) {
                        _(t, { nonce: e && e.nonce });
                    },
                    each: function(t, e) {
                        var n,
                            i = 0;
                        if (E(t))
                            for (
                                n = t.length;
                                i < n && !1 !== e.call(t[i], i, t[i]);
                                i++
                            );
                        else
                            for (i in t)
                                if (!1 === e.call(t[i], i, t[i])) break;
                        return t;
                    },
                    trim: function(t) {
                        return null == t ? "" : (t + "").replace(T, "");
                    },
                    makeArray: function(t, e) {
                        var n = e || [];
                        return (
                            null != t &&
                                (E(Object(t))
                                    ? C.merge(n, "string" == typeof t ? [t] : t)
                                    : u.call(n, t)),
                            n
                        );
                    },
                    inArray: function(t, e, n) {
                        return null == e ? -1 : h.call(e, t, n);
                    },
                    merge: function(t, e) {
                        for (var n = +e.length, i = 0, r = t.length; i < n; i++)
                            t[r++] = e[i];
                        return (t.length = r), t;
                    },
                    grep: function(t, e, n) {
                        for (
                            var i = [], r = 0, s = t.length, o = !n;
                            r < s;
                            r++
                        )
                            !e(t[r], r) !== o && i.push(t[r]);
                        return i;
                    },
                    map: function(t, e, n) {
                        var i,
                            r,
                            s = 0,
                            o = [];
                        if (E(t))
                            for (i = t.length; s < i; s++)
                                null != (r = e(t[s], s, n)) && o.push(r);
                        else
                            for (s in t)
                                null != (r = e(t[s], s, n)) && o.push(r);
                        return c.apply([], o);
                    },
                    guid: 1,
                    support: v
                }),
                "function" == typeof Symbol &&
                    (C.fn[Symbol.iterator] = s[Symbol.iterator]),
                C.each(
                    "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                        " "
                    ),
                    function(t, e) {
                        d["[object " + e + "]"] = e.toLowerCase();
                    }
                );
            var k = (function(t) {
                var e,
                    n,
                    i,
                    r,
                    s,
                    o,
                    a,
                    l,
                    c,
                    u,
                    h,
                    d,
                    p,
                    f,
                    g,
                    m,
                    v,
                    y,
                    w,
                    x = "sizzle" + 1 * new Date(),
                    _ = t.document,
                    b = 0,
                    C = 0,
                    T = lt(),
                    E = lt(),
                    k = lt(),
                    S = lt(),
                    D = function(t, e) {
                        return t === e && (h = !0), 0;
                    },
                    A = {}.hasOwnProperty,
                    j = [],
                    N = j.pop,
                    $ = j.push,
                    L = j.push,
                    O = j.slice,
                    z = function(t, e) {
                        for (var n = 0, i = t.length; n < i; n++)
                            if (t[n] === e) return n;
                        return -1;
                    },
                    M =
                        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    H = "[\\x20\\t\\r\\n\\f]",
                    P = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    q =
                        "\\[" +
                        H +
                        "*(" +
                        P +
                        ")(?:" +
                        H +
                        "*([*^$|!~]?=)" +
                        H +
                        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                        P +
                        "))|)" +
                        H +
                        "*\\]",
                    I =
                        ":(" +
                        P +
                        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                        q +
                        ")*)|.*)\\)|)",
                    R = new RegExp(H + "+", "g"),
                    W = new RegExp(
                        "^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$",
                        "g"
                    ),
                    B = new RegExp("^" + H + "*," + H + "*"),
                    F = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
                    U = new RegExp(H + "|>"),
                    V = new RegExp(I),
                    X = new RegExp("^" + P + "$"),
                    G = {
                        ID: new RegExp("^#(" + P + ")"),
                        CLASS: new RegExp("^\\.(" + P + ")"),
                        TAG: new RegExp("^(" + P + "|[*])"),
                        ATTR: new RegExp("^" + q),
                        PSEUDO: new RegExp("^" + I),
                        CHILD: new RegExp(
                            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                                H +
                                "*(even|odd|(([+-]|)(\\d*)n|)" +
                                H +
                                "*(?:([+-]|)" +
                                H +
                                "*(\\d+)|))" +
                                H +
                                "*\\)|)",
                            "i"
                        ),
                        bool: new RegExp("^(?:" + M + ")$", "i"),
                        needsContext: new RegExp(
                            "^" +
                                H +
                                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                                H +
                                "*((?:-\\d)?\\d*)" +
                                H +
                                "*\\)|)(?=[^-]|$)",
                            "i"
                        )
                    },
                    Y = /HTML$/i,
                    Z = /^(?:input|select|textarea|button)$/i,
                    Q = /^h\d$/i,
                    K = /^[^{]+\{\s*\[native \w/,
                    J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    tt = /[+~]/,
                    et = new RegExp(
                        "\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)",
                        "ig"
                    ),
                    nt = function(t, e, n) {
                        var i = "0x" + e - 65536;
                        return i != i || n
                            ? e
                            : i < 0
                            ? String.fromCharCode(i + 65536)
                            : String.fromCharCode(
                                  (i >> 10) | 55296,
                                  (1023 & i) | 56320
                              );
                    },
                    it = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    rt = function(t, e) {
                        return e
                            ? "\0" === t
                                ? "�"
                                : t.slice(0, -1) +
                                  "\\" +
                                  t.charCodeAt(t.length - 1).toString(16) +
                                  " "
                            : "\\" + t;
                    },
                    st = function() {
                        d();
                    },
                    ot = xt(
                        function(t) {
                            return (
                                !0 === t.disabled &&
                                "fieldset" === t.nodeName.toLowerCase()
                            );
                        },
                        { dir: "parentNode", next: "legend" }
                    );
                try {
                    L.apply((j = O.call(_.childNodes)), _.childNodes),
                        j[_.childNodes.length].nodeType;
                } catch (t) {
                    L = {
                        apply: j.length
                            ? function(t, e) {
                                  $.apply(t, O.call(e));
                              }
                            : function(t, e) {
                                  for (
                                      var n = t.length, i = 0;
                                      (t[n++] = e[i++]);

                                  );
                                  t.length = n - 1;
                              }
                    };
                }
                function at(t, e, i, r) {
                    var s,
                        a,
                        c,
                        u,
                        h,
                        f,
                        v,
                        y = e && e.ownerDocument,
                        b = e ? e.nodeType : 9;
                    if (
                        ((i = i || []),
                        "string" != typeof t ||
                            !t ||
                            (1 !== b && 9 !== b && 11 !== b))
                    )
                        return i;
                    if (
                        !r &&
                        ((e ? e.ownerDocument || e : _) !== p && d(e),
                        (e = e || p),
                        g)
                    ) {
                        if (11 !== b && (h = J.exec(t)))
                            if ((s = h[1])) {
                                if (9 === b) {
                                    if (!(c = e.getElementById(s))) return i;
                                    if (c.id === s) return i.push(c), i;
                                } else if (
                                    y &&
                                    (c = y.getElementById(s)) &&
                                    w(e, c) &&
                                    c.id === s
                                )
                                    return i.push(c), i;
                            } else {
                                if (h[2])
                                    return (
                                        L.apply(i, e.getElementsByTagName(t)), i
                                    );
                                if (
                                    (s = h[3]) &&
                                    n.getElementsByClassName &&
                                    e.getElementsByClassName
                                )
                                    return (
                                        L.apply(i, e.getElementsByClassName(s)),
                                        i
                                    );
                            }
                        if (
                            n.qsa &&
                            !S[t + " "] &&
                            (!m || !m.test(t)) &&
                            (1 !== b || "object" !== e.nodeName.toLowerCase())
                        ) {
                            if (((v = t), (y = e), 1 === b && U.test(t))) {
                                for (
                                    (u = e.getAttribute("id"))
                                        ? (u = u.replace(it, rt))
                                        : e.setAttribute("id", (u = x)),
                                        a = (f = o(t)).length;
                                    a--;

                                )
                                    f[a] = "#" + u + " " + wt(f[a]);
                                (v = f.join(",")),
                                    (y = (tt.test(t) && vt(e.parentNode)) || e);
                            }
                            try {
                                return L.apply(i, y.querySelectorAll(v)), i;
                            } catch (e) {
                                S(t, !0);
                            } finally {
                                u === x && e.removeAttribute("id");
                            }
                        }
                    }
                    return l(t.replace(W, "$1"), e, i, r);
                }
                function lt() {
                    var t = [];
                    return function e(n, r) {
                        return (
                            t.push(n + " ") > i.cacheLength &&
                                delete e[t.shift()],
                            (e[n + " "] = r)
                        );
                    };
                }
                function ct(t) {
                    return (t[x] = !0), t;
                }
                function ut(t) {
                    var e = p.createElement("fieldset");
                    try {
                        return !!t(e);
                    } catch (t) {
                        return !1;
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), (e = null);
                    }
                }
                function ht(t, e) {
                    for (var n = t.split("|"), r = n.length; r--; )
                        i.attrHandle[n[r]] = e;
                }
                function dt(t, e) {
                    var n = e && t,
                        i =
                            n &&
                            1 === t.nodeType &&
                            1 === e.nodeType &&
                            t.sourceIndex - e.sourceIndex;
                    if (i) return i;
                    if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
                    return t ? 1 : -1;
                }
                function pt(t) {
                    return function(e) {
                        return (
                            "input" === e.nodeName.toLowerCase() && e.type === t
                        );
                    };
                }
                function ft(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return (
                            ("input" === n || "button" === n) && e.type === t
                        );
                    };
                }
                function gt(t) {
                    return function(e) {
                        return "form" in e
                            ? e.parentNode && !1 === e.disabled
                                ? "label" in e
                                    ? "label" in e.parentNode
                                        ? e.parentNode.disabled === t
                                        : e.disabled === t
                                    : e.isDisabled === t ||
                                      (e.isDisabled !== !t && ot(e) === t)
                                : e.disabled === t
                            : "label" in e && e.disabled === t;
                    };
                }
                function mt(t) {
                    return ct(function(e) {
                        return (
                            (e = +e),
                            ct(function(n, i) {
                                for (
                                    var r, s = t([], n.length, e), o = s.length;
                                    o--;

                                )
                                    n[(r = s[o])] && (n[r] = !(i[r] = n[r]));
                            })
                        );
                    });
                }
                function vt(t) {
                    return t && void 0 !== t.getElementsByTagName && t;
                }
                for (e in ((n = at.support = {}),
                (s = at.isXML = function(t) {
                    var e = t.namespaceURI,
                        n = (t.ownerDocument || t).documentElement;
                    return !Y.test(e || (n && n.nodeName) || "HTML");
                }),
                (d = at.setDocument = function(t) {
                    var e,
                        r,
                        o = t ? t.ownerDocument || t : _;
                    return o !== p && 9 === o.nodeType && o.documentElement
                        ? ((f = (p = o).documentElement),
                          (g = !s(p)),
                          _ !== p &&
                              (r = p.defaultView) &&
                              r.top !== r &&
                              (r.addEventListener
                                  ? r.addEventListener("unload", st, !1)
                                  : r.attachEvent &&
                                    r.attachEvent("onunload", st)),
                          (n.attributes = ut(function(t) {
                              return (
                                  (t.className = "i"),
                                  !t.getAttribute("className")
                              );
                          })),
                          (n.getElementsByTagName = ut(function(t) {
                              return (
                                  t.appendChild(p.createComment("")),
                                  !t.getElementsByTagName("*").length
                              );
                          })),
                          (n.getElementsByClassName = K.test(
                              p.getElementsByClassName
                          )),
                          (n.getById = ut(function(t) {
                              return (
                                  (f.appendChild(t).id = x),
                                  !p.getElementsByName ||
                                      !p.getElementsByName(x).length
                              );
                          })),
                          n.getById
                              ? ((i.filter.ID = function(t) {
                                    var e = t.replace(et, nt);
                                    return function(t) {
                                        return t.getAttribute("id") === e;
                                    };
                                }),
                                (i.find.ID = function(t, e) {
                                    if (void 0 !== e.getElementById && g) {
                                        var n = e.getElementById(t);
                                        return n ? [n] : [];
                                    }
                                }))
                              : ((i.filter.ID = function(t) {
                                    var e = t.replace(et, nt);
                                    return function(t) {
                                        var n =
                                            void 0 !== t.getAttributeNode &&
                                            t.getAttributeNode("id");
                                        return n && n.value === e;
                                    };
                                }),
                                (i.find.ID = function(t, e) {
                                    if (void 0 !== e.getElementById && g) {
                                        var n,
                                            i,
                                            r,
                                            s = e.getElementById(t);
                                        if (s) {
                                            if (
                                                (n = s.getAttributeNode(
                                                    "id"
                                                )) &&
                                                n.value === t
                                            )
                                                return [s];
                                            for (
                                                r = e.getElementsByName(t),
                                                    i = 0;
                                                (s = r[i++]);

                                            )
                                                if (
                                                    (n = s.getAttributeNode(
                                                        "id"
                                                    )) &&
                                                    n.value === t
                                                )
                                                    return [s];
                                        }
                                        return [];
                                    }
                                })),
                          (i.find.TAG = n.getElementsByTagName
                              ? function(t, e) {
                                    return void 0 !== e.getElementsByTagName
                                        ? e.getElementsByTagName(t)
                                        : n.qsa
                                        ? e.querySelectorAll(t)
                                        : void 0;
                                }
                              : function(t, e) {
                                    var n,
                                        i = [],
                                        r = 0,
                                        s = e.getElementsByTagName(t);
                                    if ("*" === t) {
                                        for (; (n = s[r++]); )
                                            1 === n.nodeType && i.push(n);
                                        return i;
                                    }
                                    return s;
                                }),
                          (i.find.CLASS =
                              n.getElementsByClassName &&
                              function(t, e) {
                                  if (void 0 !== e.getElementsByClassName && g)
                                      return e.getElementsByClassName(t);
                              }),
                          (v = []),
                          (m = []),
                          (n.qsa = K.test(p.querySelectorAll)) &&
                              (ut(function(t) {
                                  (f.appendChild(t).innerHTML =
                                      "<a id='" +
                                      x +
                                      "'></a><select id='" +
                                      x +
                                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                      t.querySelectorAll("[msallowcapture^='']")
                                          .length &&
                                          m.push("[*^$]=" + H + "*(?:''|\"\")"),
                                      t.querySelectorAll("[selected]").length ||
                                          m.push(
                                              "\\[" + H + "*(?:value|" + M + ")"
                                          ),
                                      t.querySelectorAll("[id~=" + x + "-]")
                                          .length || m.push("~="),
                                      t.querySelectorAll(":checked").length ||
                                          m.push(":checked"),
                                      t.querySelectorAll("a#" + x + "+*")
                                          .length || m.push(".#.+[+~]");
                              }),
                              ut(function(t) {
                                  t.innerHTML =
                                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                  var e = p.createElement("input");
                                  e.setAttribute("type", "hidden"),
                                      t
                                          .appendChild(e)
                                          .setAttribute("name", "D"),
                                      t.querySelectorAll("[name=d]").length &&
                                          m.push("name" + H + "*[*^$|!~]?="),
                                      2 !==
                                          t.querySelectorAll(":enabled")
                                              .length &&
                                          m.push(":enabled", ":disabled"),
                                      (f.appendChild(t).disabled = !0),
                                      2 !==
                                          t.querySelectorAll(":disabled")
                                              .length &&
                                          m.push(":enabled", ":disabled"),
                                      t.querySelectorAll("*,:x"),
                                      m.push(",.*:");
                              })),
                          (n.matchesSelector = K.test(
                              (y =
                                  f.matches ||
                                  f.webkitMatchesSelector ||
                                  f.mozMatchesSelector ||
                                  f.oMatchesSelector ||
                                  f.msMatchesSelector)
                          )) &&
                              ut(function(t) {
                                  (n.disconnectedMatch = y.call(t, "*")),
                                      y.call(t, "[s!='']:x"),
                                      v.push("!=", I);
                              }),
                          (m = m.length && new RegExp(m.join("|"))),
                          (v = v.length && new RegExp(v.join("|"))),
                          (e = K.test(f.compareDocumentPosition)),
                          (w =
                              e || K.test(f.contains)
                                  ? function(t, e) {
                                        var n =
                                                9 === t.nodeType
                                                    ? t.documentElement
                                                    : t,
                                            i = e && e.parentNode;
                                        return (
                                            t === i ||
                                            !(
                                                !i ||
                                                1 !== i.nodeType ||
                                                !(n.contains
                                                    ? n.contains(i)
                                                    : t.compareDocumentPosition &&
                                                      16 &
                                                          t.compareDocumentPosition(
                                                              i
                                                          ))
                                            )
                                        );
                                    }
                                  : function(t, e) {
                                        if (e)
                                            for (; (e = e.parentNode); )
                                                if (e === t) return !0;
                                        return !1;
                                    }),
                          (D = e
                              ? function(t, e) {
                                    if (t === e) return (h = !0), 0;
                                    var i =
                                        !t.compareDocumentPosition -
                                        !e.compareDocumentPosition;
                                    return (
                                        i ||
                                        (1 &
                                            (i =
                                                (t.ownerDocument || t) ===
                                                (e.ownerDocument || e)
                                                    ? t.compareDocumentPosition(
                                                          e
                                                      )
                                                    : 1) ||
                                        (!n.sortDetached &&
                                            e.compareDocumentPosition(t) === i)
                                            ? t === p ||
                                              (t.ownerDocument === _ && w(_, t))
                                                ? -1
                                                : e === p ||
                                                  (e.ownerDocument === _ &&
                                                      w(_, e))
                                                ? 1
                                                : u
                                                ? z(u, t) - z(u, e)
                                                : 0
                                            : 4 & i
                                            ? -1
                                            : 1)
                                    );
                                }
                              : function(t, e) {
                                    if (t === e) return (h = !0), 0;
                                    var n,
                                        i = 0,
                                        r = t.parentNode,
                                        s = e.parentNode,
                                        o = [t],
                                        a = [e];
                                    if (!r || !s)
                                        return t === p
                                            ? -1
                                            : e === p
                                            ? 1
                                            : r
                                            ? -1
                                            : s
                                            ? 1
                                            : u
                                            ? z(u, t) - z(u, e)
                                            : 0;
                                    if (r === s) return dt(t, e);
                                    for (n = t; (n = n.parentNode); )
                                        o.unshift(n);
                                    for (n = e; (n = n.parentNode); )
                                        a.unshift(n);
                                    for (; o[i] === a[i]; ) i++;
                                    return i
                                        ? dt(o[i], a[i])
                                        : o[i] === _
                                        ? -1
                                        : a[i] === _
                                        ? 1
                                        : 0;
                                }),
                          p)
                        : p;
                }),
                (at.matches = function(t, e) {
                    return at(t, null, null, e);
                }),
                (at.matchesSelector = function(t, e) {
                    if (
                        ((t.ownerDocument || t) !== p && d(t),
                        n.matchesSelector &&
                            g &&
                            !S[e + " "] &&
                            (!v || !v.test(e)) &&
                            (!m || !m.test(e)))
                    )
                        try {
                            var i = y.call(t, e);
                            if (
                                i ||
                                n.disconnectedMatch ||
                                (t.document && 11 !== t.document.nodeType)
                            )
                                return i;
                        } catch (t) {
                            S(e, !0);
                        }
                    return at(e, p, null, [t]).length > 0;
                }),
                (at.contains = function(t, e) {
                    return (t.ownerDocument || t) !== p && d(t), w(t, e);
                }),
                (at.attr = function(t, e) {
                    (t.ownerDocument || t) !== p && d(t);
                    var r = i.attrHandle[e.toLowerCase()],
                        s =
                            r && A.call(i.attrHandle, e.toLowerCase())
                                ? r(t, e, !g)
                                : void 0;
                    return void 0 !== s
                        ? s
                        : n.attributes || !g
                        ? t.getAttribute(e)
                        : (s = t.getAttributeNode(e)) && s.specified
                        ? s.value
                        : null;
                }),
                (at.escape = function(t) {
                    return (t + "").replace(it, rt);
                }),
                (at.error = function(t) {
                    throw new Error(
                        "Syntax error, unrecognized expression: " + t
                    );
                }),
                (at.uniqueSort = function(t) {
                    var e,
                        i = [],
                        r = 0,
                        s = 0;
                    if (
                        ((h = !n.detectDuplicates),
                        (u = !n.sortStable && t.slice(0)),
                        t.sort(D),
                        h)
                    ) {
                        for (; (e = t[s++]); ) e === t[s] && (r = i.push(s));
                        for (; r--; ) t.splice(i[r], 1);
                    }
                    return (u = null), t;
                }),
                (r = at.getText = function(t) {
                    var e,
                        n = "",
                        i = 0,
                        s = t.nodeType;
                    if (s) {
                        if (1 === s || 9 === s || 11 === s) {
                            if ("string" == typeof t.textContent)
                                return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling)
                                n += r(t);
                        } else if (3 === s || 4 === s) return t.nodeValue;
                    } else for (; (e = t[i++]); ) n += r(e);
                    return n;
                }),
                ((i = at.selectors = {
                    cacheLength: 50,
                    createPseudo: ct,
                    match: G,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": { dir: "parentNode", first: !0 },
                        " ": { dir: "parentNode" },
                        "+": { dir: "previousSibling", first: !0 },
                        "~": { dir: "previousSibling" }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return (
                                (t[1] = t[1].replace(et, nt)),
                                (t[3] = (t[3] || t[4] || t[5] || "").replace(
                                    et,
                                    nt
                                )),
                                "~=" === t[2] && (t[3] = " " + t[3] + " "),
                                t.slice(0, 4)
                            );
                        },
                        CHILD: function(t) {
                            return (
                                (t[1] = t[1].toLowerCase()),
                                "nth" === t[1].slice(0, 3)
                                    ? (t[3] || at.error(t[0]),
                                      (t[4] = +(t[4]
                                          ? t[5] + (t[6] || 1)
                                          : 2 *
                                            ("even" === t[3] ||
                                                "odd" === t[3]))),
                                      (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                                    : t[3] && at.error(t[0]),
                                t
                            );
                        },
                        PSEUDO: function(t) {
                            var e,
                                n = !t[6] && t[2];
                            return G.CHILD.test(t[0])
                                ? null
                                : (t[3]
                                      ? (t[2] = t[4] || t[5] || "")
                                      : n &&
                                        V.test(n) &&
                                        (e = o(n, !0)) &&
                                        (e =
                                            n.indexOf(")", n.length - e) -
                                            n.length) &&
                                        ((t[0] = t[0].slice(0, e)),
                                        (t[2] = n.slice(0, e))),
                                  t.slice(0, 3));
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(et, nt).toLowerCase();
                            return "*" === t
                                ? function() {
                                      return !0;
                                  }
                                : function(t) {
                                      return (
                                          t.nodeName &&
                                          t.nodeName.toLowerCase() === e
                                      );
                                  };
                        },
                        CLASS: function(t) {
                            var e = T[t + " "];
                            return (
                                e ||
                                ((e = new RegExp(
                                    "(^|" + H + ")" + t + "(" + H + "|$)"
                                )) &&
                                    T(t, function(t) {
                                        return e.test(
                                            ("string" == typeof t.className &&
                                                t.className) ||
                                                (void 0 !== t.getAttribute &&
                                                    t.getAttribute("class")) ||
                                                ""
                                        );
                                    }))
                            );
                        },
                        ATTR: function(t, e, n) {
                            return function(i) {
                                var r = at.attr(i, t);
                                return null == r
                                    ? "!=" === e
                                    : !e ||
                                          ((r += ""),
                                          "=" === e
                                              ? r === n
                                              : "!=" === e
                                              ? r !== n
                                              : "^=" === e
                                              ? n && 0 === r.indexOf(n)
                                              : "*=" === e
                                              ? n && r.indexOf(n) > -1
                                              : "$=" === e
                                              ? n && r.slice(-n.length) === n
                                              : "~=" === e
                                              ? (
                                                    " " +
                                                    r.replace(R, " ") +
                                                    " "
                                                ).indexOf(n) > -1
                                              : "|=" === e &&
                                                (r === n ||
                                                    r.slice(0, n.length + 1) ===
                                                        n + "-"));
                            };
                        },
                        CHILD: function(t, e, n, i, r) {
                            var s = "nth" !== t.slice(0, 3),
                                o = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === i && 0 === r
                                ? function(t) {
                                      return !!t.parentNode;
                                  }
                                : function(e, n, l) {
                                      var c,
                                          u,
                                          h,
                                          d,
                                          p,
                                          f,
                                          g =
                                              s !== o
                                                  ? "nextSibling"
                                                  : "previousSibling",
                                          m = e.parentNode,
                                          v = a && e.nodeName.toLowerCase(),
                                          y = !l && !a,
                                          w = !1;
                                      if (m) {
                                          if (s) {
                                              for (; g; ) {
                                                  for (d = e; (d = d[g]); )
                                                      if (
                                                          a
                                                              ? d.nodeName.toLowerCase() ===
                                                                v
                                                              : 1 === d.nodeType
                                                      )
                                                          return !1;
                                                  f = g =
                                                      "only" === t &&
                                                      !f &&
                                                      "nextSibling";
                                              }
                                              return !0;
                                          }
                                          if (
                                              ((f = [
                                                  o ? m.firstChild : m.lastChild
                                              ]),
                                              o && y)
                                          ) {
                                              for (
                                                  w =
                                                      (p =
                                                          (c =
                                                              (u =
                                                                  (h =
                                                                      (d = m)[
                                                                          x
                                                                      ] ||
                                                                      (d[
                                                                          x
                                                                      ] = {}))[
                                                                      d.uniqueID
                                                                  ] ||
                                                                  (h[
                                                                      d.uniqueID
                                                                  ] = {}))[t] ||
                                                              [])[0] === b &&
                                                          c[1]) && c[2],
                                                      d = p && m.childNodes[p];
                                                  (d =
                                                      (++p && d && d[g]) ||
                                                      (w = p = 0) ||
                                                      f.pop());

                                              )
                                                  if (
                                                      1 === d.nodeType &&
                                                      ++w &&
                                                      d === e
                                                  ) {
                                                      u[t] = [b, p, w];
                                                      break;
                                                  }
                                          } else if (
                                              (y &&
                                                  (w = p =
                                                      (c =
                                                          (u =
                                                              (h =
                                                                  (d = e)[x] ||
                                                                  (d[x] = {}))[
                                                                  d.uniqueID
                                                              ] ||
                                                              (h[
                                                                  d.uniqueID
                                                              ] = {}))[t] ||
                                                          [])[0] === b && c[1]),
                                              !1 === w)
                                          )
                                              for (
                                                  ;
                                                  (d =
                                                      (++p && d && d[g]) ||
                                                      (w = p = 0) ||
                                                      f.pop()) &&
                                                  ((a
                                                      ? d.nodeName.toLowerCase() !==
                                                        v
                                                      : 1 !== d.nodeType) ||
                                                      !++w ||
                                                      (y &&
                                                          ((u =
                                                              (h =
                                                                  d[x] ||
                                                                  (d[x] = {}))[
                                                                  d.uniqueID
                                                              ] ||
                                                              (h[
                                                                  d.uniqueID
                                                              ] = {}))[t] = [
                                                              b,
                                                              w
                                                          ]),
                                                      d !== e));

                                              );
                                          return (
                                              (w -= r) === i ||
                                              (w % i == 0 && w / i >= 0)
                                          );
                                      }
                                  };
                        },
                        PSEUDO: function(t, e) {
                            var n,
                                r =
                                    i.pseudos[t] ||
                                    i.setFilters[t.toLowerCase()] ||
                                    at.error("unsupported pseudo: " + t);
                            return r[x]
                                ? r(e)
                                : r.length > 1
                                ? ((n = [t, t, "", e]),
                                  i.setFilters.hasOwnProperty(t.toLowerCase())
                                      ? ct(function(t, n) {
                                            for (
                                                var i,
                                                    s = r(t, e),
                                                    o = s.length;
                                                o--;

                                            )
                                                t[(i = z(t, s[o]))] = !(n[i] =
                                                    s[o]);
                                        })
                                      : function(t) {
                                            return r(t, 0, n);
                                        })
                                : r;
                        }
                    },
                    pseudos: {
                        not: ct(function(t) {
                            var e = [],
                                n = [],
                                i = a(t.replace(W, "$1"));
                            return i[x]
                                ? ct(function(t, e, n, r) {
                                      for (
                                          var s,
                                              o = i(t, null, r, []),
                                              a = t.length;
                                          a--;

                                      )
                                          (s = o[a]) && (t[a] = !(e[a] = s));
                                  })
                                : function(t, r, s) {
                                      return (
                                          (e[0] = t),
                                          i(e, null, s, n),
                                          (e[0] = null),
                                          !n.pop()
                                      );
                                  };
                        }),
                        has: ct(function(t) {
                            return function(e) {
                                return at(t, e).length > 0;
                            };
                        }),
                        contains: ct(function(t) {
                            return (
                                (t = t.replace(et, nt)),
                                function(e) {
                                    return (
                                        (e.textContent || r(e)).indexOf(t) > -1
                                    );
                                }
                            );
                        }),
                        lang: ct(function(t) {
                            return (
                                X.test(t || "") ||
                                    at.error("unsupported lang: " + t),
                                (t = t.replace(et, nt).toLowerCase()),
                                function(e) {
                                    var n;
                                    do {
                                        if (
                                            (n = g
                                                ? e.lang
                                                : e.getAttribute("xml:lang") ||
                                                  e.getAttribute("lang"))
                                        )
                                            return (
                                                (n = n.toLowerCase()) === t ||
                                                0 === n.indexOf(t + "-")
                                            );
                                    } while (
                                        (e = e.parentNode) &&
                                        1 === e.nodeType
                                    );
                                    return !1;
                                }
                            );
                        }),
                        target: function(e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id;
                        },
                        root: function(t) {
                            return t === f;
                        },
                        focus: function(t) {
                            return (
                                t === p.activeElement &&
                                (!p.hasFocus || p.hasFocus()) &&
                                !!(t.type || t.href || ~t.tabIndex)
                            );
                        },
                        enabled: gt(!1),
                        disabled: gt(!0),
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return (
                                ("input" === e && !!t.checked) ||
                                ("option" === e && !!t.selected)
                            );
                        },
                        selected: function(t) {
                            return (
                                t.parentNode && t.parentNode.selectedIndex,
                                !0 === t.selected
                            );
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function(t) {
                            return !i.pseudos.empty(t);
                        },
                        header: function(t) {
                            return Q.test(t.nodeName);
                        },
                        input: function(t) {
                            return Z.test(t.nodeName);
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return (
                                ("input" === e && "button" === t.type) ||
                                "button" === e
                            );
                        },
                        text: function(t) {
                            var e;
                            return (
                                "input" === t.nodeName.toLowerCase() &&
                                "text" === t.type &&
                                (null == (e = t.getAttribute("type")) ||
                                    "text" === e.toLowerCase())
                            );
                        },
                        first: mt(function() {
                            return [0];
                        }),
                        last: mt(function(t, e) {
                            return [e - 1];
                        }),
                        eq: mt(function(t, e, n) {
                            return [n < 0 ? n + e : n];
                        }),
                        even: mt(function(t, e) {
                            for (var n = 0; n < e; n += 2) t.push(n);
                            return t;
                        }),
                        odd: mt(function(t, e) {
                            for (var n = 1; n < e; n += 2) t.push(n);
                            return t;
                        }),
                        lt: mt(function(t, e, n) {
                            for (
                                var i = n < 0 ? n + e : n > e ? e : n;
                                --i >= 0;

                            )
                                t.push(i);
                            return t;
                        }),
                        gt: mt(function(t, e, n) {
                            for (var i = n < 0 ? n + e : n; ++i < e; )
                                t.push(i);
                            return t;
                        })
                    }
                }).pseudos.nth = i.pseudos.eq),
                { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                    i.pseudos[e] = pt(e);
                for (e in { submit: !0, reset: !0 }) i.pseudos[e] = ft(e);
                function yt() {}
                function wt(t) {
                    for (var e = 0, n = t.length, i = ""; e < n; e++)
                        i += t[e].value;
                    return i;
                }
                function xt(t, e, n) {
                    var i = e.dir,
                        r = e.next,
                        s = r || i,
                        o = n && "parentNode" === s,
                        a = C++;
                    return e.first
                        ? function(e, n, r) {
                              for (; (e = e[i]); )
                                  if (1 === e.nodeType || o) return t(e, n, r);
                              return !1;
                          }
                        : function(e, n, l) {
                              var c,
                                  u,
                                  h,
                                  d = [b, a];
                              if (l) {
                                  for (; (e = e[i]); )
                                      if ((1 === e.nodeType || o) && t(e, n, l))
                                          return !0;
                              } else
                                  for (; (e = e[i]); )
                                      if (1 === e.nodeType || o)
                                          if (
                                              ((u =
                                                  (h = e[x] || (e[x] = {}))[
                                                      e.uniqueID
                                                  ] || (h[e.uniqueID] = {})),
                                              r &&
                                                  r ===
                                                      e.nodeName.toLowerCase())
                                          )
                                              e = e[i] || e;
                                          else {
                                              if (
                                                  (c = u[s]) &&
                                                  c[0] === b &&
                                                  c[1] === a
                                              )
                                                  return (d[2] = c[2]);
                                              if (
                                                  ((u[s] = d),
                                                  (d[2] = t(e, n, l)))
                                              )
                                                  return !0;
                                          }
                              return !1;
                          };
                }
                function _t(t) {
                    return t.length > 1
                        ? function(e, n, i) {
                              for (var r = t.length; r--; )
                                  if (!t[r](e, n, i)) return !1;
                              return !0;
                          }
                        : t[0];
                }
                function bt(t, e, n, i, r) {
                    for (
                        var s, o = [], a = 0, l = t.length, c = null != e;
                        a < l;
                        a++
                    )
                        (s = t[a]) &&
                            ((n && !n(s, i, r)) || (o.push(s), c && e.push(a)));
                    return o;
                }
                function Ct(t, e, n, i, r, s) {
                    return (
                        i && !i[x] && (i = Ct(i)),
                        r && !r[x] && (r = Ct(r, s)),
                        ct(function(s, o, a, l) {
                            var c,
                                u,
                                h,
                                d = [],
                                p = [],
                                f = o.length,
                                g =
                                    s ||
                                    (function(t, e, n) {
                                        for (
                                            var i = 0, r = e.length;
                                            i < r;
                                            i++
                                        )
                                            at(t, e[i], n);
                                        return n;
                                    })(e || "*", a.nodeType ? [a] : a, []),
                                m = !t || (!s && e) ? g : bt(g, d, t, a, l),
                                v = n ? (r || (s ? t : f || i) ? [] : o) : m;
                            if ((n && n(m, v, a, l), i))
                                for (
                                    c = bt(v, p), i(c, [], a, l), u = c.length;
                                    u--;

                                )
                                    (h = c[u]) && (v[p[u]] = !(m[p[u]] = h));
                            if (s) {
                                if (r || t) {
                                    if (r) {
                                        for (c = [], u = v.length; u--; )
                                            (h = v[u]) && c.push((m[u] = h));
                                        r(null, (v = []), c, l);
                                    }
                                    for (u = v.length; u--; )
                                        (h = v[u]) &&
                                            (c = r ? z(s, h) : d[u]) > -1 &&
                                            (s[c] = !(o[c] = h));
                                }
                            } else (v = bt(v === o ? v.splice(f, v.length) : v)), r ? r(null, o, v, l) : L.apply(o, v);
                        })
                    );
                }
                function Tt(t) {
                    for (
                        var e,
                            n,
                            r,
                            s = t.length,
                            o = i.relative[t[0].type],
                            a = o || i.relative[" "],
                            l = o ? 1 : 0,
                            u = xt(
                                function(t) {
                                    return t === e;
                                },
                                a,
                                !0
                            ),
                            h = xt(
                                function(t) {
                                    return z(e, t) > -1;
                                },
                                a,
                                !0
                            ),
                            d = [
                                function(t, n, i) {
                                    var r =
                                        (!o && (i || n !== c)) ||
                                        ((e = n).nodeType
                                            ? u(t, n, i)
                                            : h(t, n, i));
                                    return (e = null), r;
                                }
                            ];
                        l < s;
                        l++
                    )
                        if ((n = i.relative[t[l].type])) d = [xt(_t(d), n)];
                        else {
                            if (
                                (n = i.filter[t[l].type].apply(
                                    null,
                                    t[l].matches
                                ))[x]
                            ) {
                                for (
                                    r = ++l;
                                    r < s && !i.relative[t[r].type];
                                    r++
                                );
                                return Ct(
                                    l > 1 && _t(d),
                                    l > 1 &&
                                        wt(
                                            t.slice(0, l - 1).concat({
                                                value:
                                                    " " === t[l - 2].type
                                                        ? "*"
                                                        : ""
                                            })
                                        ).replace(W, "$1"),
                                    n,
                                    l < r && Tt(t.slice(l, r)),
                                    r < s && Tt((t = t.slice(r))),
                                    r < s && wt(t)
                                );
                            }
                            d.push(n);
                        }
                    return _t(d);
                }
                return (
                    (yt.prototype = i.filters = i.pseudos),
                    (i.setFilters = new yt()),
                    (o = at.tokenize = function(t, e) {
                        var n,
                            r,
                            s,
                            o,
                            a,
                            l,
                            c,
                            u = E[t + " "];
                        if (u) return e ? 0 : u.slice(0);
                        for (a = t, l = [], c = i.preFilter; a; ) {
                            for (o in ((n && !(r = B.exec(a))) ||
                                (r && (a = a.slice(r[0].length) || a),
                                l.push((s = []))),
                            (n = !1),
                            (r = F.exec(a)) &&
                                ((n = r.shift()),
                                s.push({
                                    value: n,
                                    type: r[0].replace(W, " ")
                                }),
                                (a = a.slice(n.length))),
                            i.filter))
                                !(r = G[o].exec(a)) ||
                                    (c[o] && !(r = c[o](r))) ||
                                    ((n = r.shift()),
                                    s.push({ value: n, type: o, matches: r }),
                                    (a = a.slice(n.length)));
                            if (!n) break;
                        }
                        return e
                            ? a.length
                            : a
                            ? at.error(t)
                            : E(t, l).slice(0);
                    }),
                    (a = at.compile = function(t, e) {
                        var n,
                            r = [],
                            s = [],
                            a = k[t + " "];
                        if (!a) {
                            for (e || (e = o(t)), n = e.length; n--; )
                                (a = Tt(e[n]))[x] ? r.push(a) : s.push(a);
                            (a = k(
                                t,
                                (function(t, e) {
                                    var n = e.length > 0,
                                        r = t.length > 0,
                                        s = function(s, o, a, l, u) {
                                            var h,
                                                f,
                                                m,
                                                v = 0,
                                                y = "0",
                                                w = s && [],
                                                x = [],
                                                _ = c,
                                                C =
                                                    s ||
                                                    (r && i.find.TAG("*", u)),
                                                T = (b +=
                                                    null == _
                                                        ? 1
                                                        : Math.random() || 0.1),
                                                E = C.length;
                                            for (
                                                u && (c = o === p || o || u);
                                                y !== E && null != (h = C[y]);
                                                y++
                                            ) {
                                                if (r && h) {
                                                    for (
                                                        f = 0,
                                                            o ||
                                                                h.ownerDocument ===
                                                                    p ||
                                                                (d(h),
                                                                (a = !g));
                                                        (m = t[f++]);

                                                    )
                                                        if (m(h, o || p, a)) {
                                                            l.push(h);
                                                            break;
                                                        }
                                                    u && (b = T);
                                                }
                                                n &&
                                                    ((h = !m && h) && v--,
                                                    s && w.push(h));
                                            }
                                            if (((v += y), n && y !== v)) {
                                                for (f = 0; (m = e[f++]); )
                                                    m(w, x, o, a);
                                                if (s) {
                                                    if (v > 0)
                                                        for (; y--; )
                                                            w[y] ||
                                                                x[y] ||
                                                                (x[y] = N.call(
                                                                    l
                                                                ));
                                                    x = bt(x);
                                                }
                                                L.apply(l, x),
                                                    u &&
                                                        !s &&
                                                        x.length > 0 &&
                                                        v + e.length > 1 &&
                                                        at.uniqueSort(l);
                                            }
                                            return u && ((b = T), (c = _)), w;
                                        };
                                    return n ? ct(s) : s;
                                })(s, r)
                            )).selector = t;
                        }
                        return a;
                    }),
                    (l = at.select = function(t, e, n, r) {
                        var s,
                            l,
                            c,
                            u,
                            h,
                            d = "function" == typeof t && t,
                            p = !r && o((t = d.selector || t));
                        if (((n = n || []), 1 === p.length)) {
                            if (
                                (l = p[0] = p[0].slice(0)).length > 2 &&
                                "ID" === (c = l[0]).type &&
                                9 === e.nodeType &&
                                g &&
                                i.relative[l[1].type]
                            ) {
                                if (
                                    !(e = (i.find.ID(
                                        c.matches[0].replace(et, nt),
                                        e
                                    ) || [])[0])
                                )
                                    return n;
                                d && (e = e.parentNode),
                                    (t = t.slice(l.shift().value.length));
                            }
                            for (
                                s = G.needsContext.test(t) ? 0 : l.length;
                                s-- && ((c = l[s]), !i.relative[(u = c.type)]);

                            )
                                if (
                                    (h = i.find[u]) &&
                                    (r = h(
                                        c.matches[0].replace(et, nt),
                                        (tt.test(l[0].type) &&
                                            vt(e.parentNode)) ||
                                            e
                                    ))
                                ) {
                                    if (
                                        (l.splice(s, 1),
                                        !(t = r.length && wt(l)))
                                    )
                                        return L.apply(n, r), n;
                                    break;
                                }
                        }
                        return (
                            (d || a(t, p))(
                                r,
                                e,
                                !g,
                                n,
                                !e || (tt.test(t) && vt(e.parentNode)) || e
                            ),
                            n
                        );
                    }),
                    (n.sortStable =
                        x
                            .split("")
                            .sort(D)
                            .join("") === x),
                    (n.detectDuplicates = !!h),
                    d(),
                    (n.sortDetached = ut(function(t) {
                        return (
                            1 &
                            t.compareDocumentPosition(
                                p.createElement("fieldset")
                            )
                        );
                    })),
                    ut(function(t) {
                        return (
                            (t.innerHTML = "<a href='#'></a>"),
                            "#" === t.firstChild.getAttribute("href")
                        );
                    }) ||
                        ht("type|href|height|width", function(t, e, n) {
                            if (!n)
                                return t.getAttribute(
                                    e,
                                    "type" === e.toLowerCase() ? 1 : 2
                                );
                        }),
                    (n.attributes &&
                        ut(function(t) {
                            return (
                                (t.innerHTML = "<input/>"),
                                t.firstChild.setAttribute("value", ""),
                                "" === t.firstChild.getAttribute("value")
                            );
                        })) ||
                        ht("value", function(t, e, n) {
                            if (!n && "input" === t.nodeName.toLowerCase())
                                return t.defaultValue;
                        }),
                    ut(function(t) {
                        return null == t.getAttribute("disabled");
                    }) ||
                        ht(M, function(t, e, n) {
                            var i;
                            if (!n)
                                return !0 === t[e]
                                    ? e.toLowerCase()
                                    : (i = t.getAttributeNode(e)) && i.specified
                                    ? i.value
                                    : null;
                        }),
                    at
                );
            })(n);
            (C.find = k),
                (C.expr = k.selectors),
                (C.expr[":"] = C.expr.pseudos),
                (C.uniqueSort = C.unique = k.uniqueSort),
                (C.text = k.getText),
                (C.isXMLDoc = k.isXML),
                (C.contains = k.contains),
                (C.escapeSelector = k.escape);
            var S = function(t, e, n) {
                    for (
                        var i = [], r = void 0 !== n;
                        (t = t[e]) && 9 !== t.nodeType;

                    )
                        if (1 === t.nodeType) {
                            if (r && C(t).is(n)) break;
                            i.push(t);
                        }
                    return i;
                },
                D = function(t, e) {
                    for (var n = []; t; t = t.nextSibling)
                        1 === t.nodeType && t !== e && n.push(t);
                    return n;
                },
                A = C.expr.match.needsContext;
            function j(t, e) {
                return (
                    t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                );
            }
            var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function $(t, e, n) {
                return y(e)
                    ? C.grep(t, function(t, i) {
                          return !!e.call(t, i, t) !== n;
                      })
                    : e.nodeType
                    ? C.grep(t, function(t) {
                          return (t === e) !== n;
                      })
                    : "string" != typeof e
                    ? C.grep(t, function(t) {
                          return h.call(e, t) > -1 !== n;
                      })
                    : C.filter(e, t, n);
            }
            (C.filter = function(t, e, n) {
                var i = e[0];
                return (
                    n && (t = ":not(" + t + ")"),
                    1 === e.length && 1 === i.nodeType
                        ? C.find.matchesSelector(i, t)
                            ? [i]
                            : []
                        : C.find.matches(
                              t,
                              C.grep(e, function(t) {
                                  return 1 === t.nodeType;
                              })
                          )
                );
            }),
                C.fn.extend({
                    find: function(t) {
                        var e,
                            n,
                            i = this.length,
                            r = this;
                        if ("string" != typeof t)
                            return this.pushStack(
                                C(t).filter(function() {
                                    for (e = 0; e < i; e++)
                                        if (C.contains(r[e], this)) return !0;
                                })
                            );
                        for (n = this.pushStack([]), e = 0; e < i; e++)
                            C.find(t, r[e], n);
                        return i > 1 ? C.uniqueSort(n) : n;
                    },
                    filter: function(t) {
                        return this.pushStack($(this, t || [], !1));
                    },
                    not: function(t) {
                        return this.pushStack($(this, t || [], !0));
                    },
                    is: function(t) {
                        return !!$(
                            this,
                            "string" == typeof t && A.test(t) ? C(t) : t || [],
                            !1
                        ).length;
                    }
                });
            var L,
                O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            ((C.fn.init = function(t, e, n) {
                var i, r;
                if (!t) return this;
                if (((n = n || L), "string" == typeof t)) {
                    if (
                        !(i =
                            "<" === t[0] &&
                            ">" === t[t.length - 1] &&
                            t.length >= 3
                                ? [null, t, null]
                                : O.exec(t)) ||
                        (!i[1] && e)
                    )
                        return !e || e.jquery
                            ? (e || n).find(t)
                            : this.constructor(e).find(t);
                    if (i[1]) {
                        if (
                            ((e = e instanceof C ? e[0] : e),
                            C.merge(
                                this,
                                C.parseHTML(
                                    i[1],
                                    e && e.nodeType ? e.ownerDocument || e : o,
                                    !0
                                )
                            ),
                            N.test(i[1]) && C.isPlainObject(e))
                        )
                            for (i in e)
                                y(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this;
                    }
                    return (
                        (r = o.getElementById(i[2])) &&
                            ((this[0] = r), (this.length = 1)),
                        this
                    );
                }
                return t.nodeType
                    ? ((this[0] = t), (this.length = 1), this)
                    : y(t)
                    ? void 0 !== n.ready
                        ? n.ready(t)
                        : t(C)
                    : C.makeArray(t, this);
            }).prototype = C.fn),
                (L = C(o));
            var z = /^(?:parents|prev(?:Until|All))/,
                M = { children: !0, contents: !0, next: !0, prev: !0 };
            function H(t, e) {
                for (; (t = t[e]) && 1 !== t.nodeType; );
                return t;
            }
            C.fn.extend({
                has: function(t) {
                    var e = C(t, this),
                        n = e.length;
                    return this.filter(function() {
                        for (var t = 0; t < n; t++)
                            if (C.contains(this, e[t])) return !0;
                    });
                },
                closest: function(t, e) {
                    var n,
                        i = 0,
                        r = this.length,
                        s = [],
                        o = "string" != typeof t && C(t);
                    if (!A.test(t))
                        for (; i < r; i++)
                            for (n = this[i]; n && n !== e; n = n.parentNode)
                                if (
                                    n.nodeType < 11 &&
                                    (o
                                        ? o.index(n) > -1
                                        : 1 === n.nodeType &&
                                          C.find.matchesSelector(n, t))
                                ) {
                                    s.push(n);
                                    break;
                                }
                    return this.pushStack(s.length > 1 ? C.uniqueSort(s) : s);
                },
                index: function(t) {
                    return t
                        ? "string" == typeof t
                            ? h.call(C(t), this[0])
                            : h.call(this, t.jquery ? t[0] : t)
                        : this[0] && this[0].parentNode
                        ? this.first().prevAll().length
                        : -1;
                },
                add: function(t, e) {
                    return this.pushStack(
                        C.uniqueSort(C.merge(this.get(), C(t, e)))
                    );
                },
                addBack: function(t) {
                    return this.add(
                        null == t ? this.prevObject : this.prevObject.filter(t)
                    );
                }
            }),
                C.each(
                    {
                        parent: function(t) {
                            var e = t.parentNode;
                            return e && 11 !== e.nodeType ? e : null;
                        },
                        parents: function(t) {
                            return S(t, "parentNode");
                        },
                        parentsUntil: function(t, e, n) {
                            return S(t, "parentNode", n);
                        },
                        next: function(t) {
                            return H(t, "nextSibling");
                        },
                        prev: function(t) {
                            return H(t, "previousSibling");
                        },
                        nextAll: function(t) {
                            return S(t, "nextSibling");
                        },
                        prevAll: function(t) {
                            return S(t, "previousSibling");
                        },
                        nextUntil: function(t, e, n) {
                            return S(t, "nextSibling", n);
                        },
                        prevUntil: function(t, e, n) {
                            return S(t, "previousSibling", n);
                        },
                        siblings: function(t) {
                            return D((t.parentNode || {}).firstChild, t);
                        },
                        children: function(t) {
                            return D(t.firstChild);
                        },
                        contents: function(t) {
                            return void 0 !== t.contentDocument
                                ? t.contentDocument
                                : (j(t, "template") && (t = t.content || t),
                                  C.merge([], t.childNodes));
                        }
                    },
                    function(t, e) {
                        C.fn[t] = function(n, i) {
                            var r = C.map(this, e, n);
                            return (
                                "Until" !== t.slice(-5) && (i = n),
                                i &&
                                    "string" == typeof i &&
                                    (r = C.filter(i, r)),
                                this.length > 1 &&
                                    (M[t] || C.uniqueSort(r),
                                    z.test(t) && r.reverse()),
                                this.pushStack(r)
                            );
                        };
                    }
                );
            var P = /[^\x20\t\r\n\f]+/g;
            function q(t) {
                return t;
            }
            function I(t) {
                throw t;
            }
            function R(t, e, n, i) {
                var r;
                try {
                    t && y((r = t.promise))
                        ? r
                              .call(t)
                              .done(e)
                              .fail(n)
                        : t && y((r = t.then))
                        ? r.call(t, e, n)
                        : e.apply(void 0, [t].slice(i));
                } catch (t) {
                    n.apply(void 0, [t]);
                }
            }
            (C.Callbacks = function(t) {
                t =
                    "string" == typeof t
                        ? (function(t) {
                              var e = {};
                              return (
                                  C.each(t.match(P) || [], function(t, n) {
                                      e[n] = !0;
                                  }),
                                  e
                              );
                          })(t)
                        : C.extend({}, t);
                var e,
                    n,
                    i,
                    r,
                    s = [],
                    o = [],
                    a = -1,
                    l = function() {
                        for (r = r || t.once, i = e = !0; o.length; a = -1)
                            for (n = o.shift(); ++a < s.length; )
                                !1 === s[a].apply(n[0], n[1]) &&
                                    t.stopOnFalse &&
                                    ((a = s.length), (n = !1));
                        t.memory || (n = !1), (e = !1), r && (s = n ? [] : "");
                    },
                    c = {
                        add: function() {
                            return (
                                s &&
                                    (n && !e && ((a = s.length - 1), o.push(n)),
                                    (function e(n) {
                                        C.each(n, function(n, i) {
                                            y(i)
                                                ? (t.unique && c.has(i)) ||
                                                  s.push(i)
                                                : i &&
                                                  i.length &&
                                                  "string" !== b(i) &&
                                                  e(i);
                                        });
                                    })(arguments),
                                    n && !e && l()),
                                this
                            );
                        },
                        remove: function() {
                            return (
                                C.each(arguments, function(t, e) {
                                    for (var n; (n = C.inArray(e, s, n)) > -1; )
                                        s.splice(n, 1), n <= a && a--;
                                }),
                                this
                            );
                        },
                        has: function(t) {
                            return t ? C.inArray(t, s) > -1 : s.length > 0;
                        },
                        empty: function() {
                            return s && (s = []), this;
                        },
                        disable: function() {
                            return (r = o = []), (s = n = ""), this;
                        },
                        disabled: function() {
                            return !s;
                        },
                        lock: function() {
                            return (r = o = []), n || e || (s = n = ""), this;
                        },
                        locked: function() {
                            return !!r;
                        },
                        fireWith: function(t, n) {
                            return (
                                r ||
                                    ((n = [
                                        t,
                                        (n = n || []).slice ? n.slice() : n
                                    ]),
                                    o.push(n),
                                    e || l()),
                                this
                            );
                        },
                        fire: function() {
                            return c.fireWith(this, arguments), this;
                        },
                        fired: function() {
                            return !!i;
                        }
                    };
                return c;
            }),
                C.extend({
                    Deferred: function(t) {
                        var e = [
                                [
                                    "notify",
                                    "progress",
                                    C.Callbacks("memory"),
                                    C.Callbacks("memory"),
                                    2
                                ],
                                [
                                    "resolve",
                                    "done",
                                    C.Callbacks("once memory"),
                                    C.Callbacks("once memory"),
                                    0,
                                    "resolved"
                                ],
                                [
                                    "reject",
                                    "fail",
                                    C.Callbacks("once memory"),
                                    C.Callbacks("once memory"),
                                    1,
                                    "rejected"
                                ]
                            ],
                            i = "pending",
                            r = {
                                state: function() {
                                    return i;
                                },
                                always: function() {
                                    return (
                                        s.done(arguments).fail(arguments), this
                                    );
                                },
                                catch: function(t) {
                                    return r.then(null, t);
                                },
                                pipe: function() {
                                    var t = arguments;
                                    return C.Deferred(function(n) {
                                        C.each(e, function(e, i) {
                                            var r = y(t[i[4]]) && t[i[4]];
                                            s[i[1]](function() {
                                                var t =
                                                    r &&
                                                    r.apply(this, arguments);
                                                t && y(t.promise)
                                                    ? t
                                                          .promise()
                                                          .progress(n.notify)
                                                          .done(n.resolve)
                                                          .fail(n.reject)
                                                    : n[i[0] + "With"](
                                                          this,
                                                          r ? [t] : arguments
                                                      );
                                            });
                                        }),
                                            (t = null);
                                    }).promise();
                                },
                                then: function(t, i, r) {
                                    var s = 0;
                                    function o(t, e, i, r) {
                                        return function() {
                                            var a = this,
                                                l = arguments,
                                                c = function() {
                                                    var n, c;
                                                    if (!(t < s)) {
                                                        if (
                                                            (n = i.apply(
                                                                a,
                                                                l
                                                            )) === e.promise()
                                                        )
                                                            throw new TypeError(
                                                                "Thenable self-resolution"
                                                            );
                                                        (c =
                                                            n &&
                                                            ("object" ==
                                                                typeof n ||
                                                                "function" ==
                                                                    typeof n) &&
                                                            n.then),
                                                            y(c)
                                                                ? r
                                                                    ? c.call(
                                                                          n,
                                                                          o(
                                                                              s,
                                                                              e,
                                                                              q,
                                                                              r
                                                                          ),
                                                                          o(
                                                                              s,
                                                                              e,
                                                                              I,
                                                                              r
                                                                          )
                                                                      )
                                                                    : (s++,
                                                                      c.call(
                                                                          n,
                                                                          o(
                                                                              s,
                                                                              e,
                                                                              q,
                                                                              r
                                                                          ),
                                                                          o(
                                                                              s,
                                                                              e,
                                                                              I,
                                                                              r
                                                                          ),
                                                                          o(
                                                                              s,
                                                                              e,
                                                                              q,
                                                                              e.notifyWith
                                                                          )
                                                                      ))
                                                                : (i !== q &&
                                                                      ((a = void 0),
                                                                      (l = [
                                                                          n
                                                                      ])),
                                                                  (
                                                                      r ||
                                                                      e.resolveWith
                                                                  )(a, l));
                                                    }
                                                },
                                                u = r
                                                    ? c
                                                    : function() {
                                                          try {
                                                              c();
                                                          } catch (n) {
                                                              C.Deferred
                                                                  .exceptionHook &&
                                                                  C.Deferred.exceptionHook(
                                                                      n,
                                                                      u.stackTrace
                                                                  ),
                                                                  t + 1 >= s &&
                                                                      (i !==
                                                                          I &&
                                                                          ((a = void 0),
                                                                          (l = [
                                                                              n
                                                                          ])),
                                                                      e.rejectWith(
                                                                          a,
                                                                          l
                                                                      ));
                                                          }
                                                      };
                                            t
                                                ? u()
                                                : (C.Deferred.getStackHook &&
                                                      (u.stackTrace = C.Deferred.getStackHook()),
                                                  n.setTimeout(u));
                                        };
                                    }
                                    return C.Deferred(function(n) {
                                        e[0][3].add(
                                            o(0, n, y(r) ? r : q, n.notifyWith)
                                        ),
                                            e[1][3].add(o(0, n, y(t) ? t : q)),
                                            e[2][3].add(o(0, n, y(i) ? i : I));
                                    }).promise();
                                },
                                promise: function(t) {
                                    return null != t ? C.extend(t, r) : r;
                                }
                            },
                            s = {};
                        return (
                            C.each(e, function(t, n) {
                                var o = n[2],
                                    a = n[5];
                                (r[n[1]] = o.add),
                                    a &&
                                        o.add(
                                            function() {
                                                i = a;
                                            },
                                            e[3 - t][2].disable,
                                            e[3 - t][3].disable,
                                            e[0][2].lock,
                                            e[0][3].lock
                                        ),
                                    o.add(n[3].fire),
                                    (s[n[0]] = function() {
                                        return (
                                            s[n[0] + "With"](
                                                this === s ? void 0 : this,
                                                arguments
                                            ),
                                            this
                                        );
                                    }),
                                    (s[n[0] + "With"] = o.fireWith);
                            }),
                            r.promise(s),
                            t && t.call(s, s),
                            s
                        );
                    },
                    when: function(t) {
                        var e = arguments.length,
                            n = e,
                            i = Array(n),
                            r = l.call(arguments),
                            s = C.Deferred(),
                            o = function(t) {
                                return function(n) {
                                    (i[t] = this),
                                        (r[t] =
                                            arguments.length > 1
                                                ? l.call(arguments)
                                                : n),
                                        --e || s.resolveWith(i, r);
                                };
                            };
                        if (
                            e <= 1 &&
                            (R(t, s.done(o(n)).resolve, s.reject, !e),
                            "pending" === s.state() || y(r[n] && r[n].then))
                        )
                            return s.then();
                        for (; n--; ) R(r[n], o(n), s.reject);
                        return s.promise();
                    }
                });
            var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            (C.Deferred.exceptionHook = function(t, e) {
                n.console &&
                    n.console.warn &&
                    t &&
                    W.test(t.name) &&
                    n.console.warn(
                        "jQuery.Deferred exception: " + t.message,
                        t.stack,
                        e
                    );
            }),
                (C.readyException = function(t) {
                    n.setTimeout(function() {
                        throw t;
                    });
                });
            var B = C.Deferred();
            function F() {
                o.removeEventListener("DOMContentLoaded", F),
                    n.removeEventListener("load", F),
                    C.ready();
            }
            (C.fn.ready = function(t) {
                return (
                    B.then(t).catch(function(t) {
                        C.readyException(t);
                    }),
                    this
                );
            }),
                C.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(t) {
                        (!0 === t ? --C.readyWait : C.isReady) ||
                            ((C.isReady = !0),
                            (!0 !== t && --C.readyWait > 0) ||
                                B.resolveWith(o, [C]));
                    }
                }),
                (C.ready.then = B.then),
                "complete" === o.readyState ||
                ("loading" !== o.readyState && !o.documentElement.doScroll)
                    ? n.setTimeout(C.ready)
                    : (o.addEventListener("DOMContentLoaded", F),
                      n.addEventListener("load", F));
            var U = function(t, e, n, i, r, s, o) {
                    var a = 0,
                        l = t.length,
                        c = null == n;
                    if ("object" === b(n))
                        for (a in ((r = !0), n)) U(t, e, a, n[a], !0, s, o);
                    else if (
                        void 0 !== i &&
                        ((r = !0),
                        y(i) || (o = !0),
                        c &&
                            (o
                                ? (e.call(t, i), (e = null))
                                : ((c = e),
                                  (e = function(t, e, n) {
                                      return c.call(C(t), n);
                                  }))),
                        e)
                    )
                        for (; a < l; a++)
                            e(t[a], n, o ? i : i.call(t[a], a, e(t[a], n)));
                    return r ? t : c ? e.call(t) : l ? e(t[0], n) : s;
                },
                V = /^-ms-/,
                X = /-([a-z])/g;
            function G(t, e) {
                return e.toUpperCase();
            }
            function Y(t) {
                return t.replace(V, "ms-").replace(X, G);
            }
            var Z = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
            };
            function Q() {
                this.expando = C.expando + Q.uid++;
            }
            (Q.uid = 1),
                (Q.prototype = {
                    cache: function(t) {
                        var e = t[this.expando];
                        return (
                            e ||
                                ((e = {}),
                                Z(t) &&
                                    (t.nodeType
                                        ? (t[this.expando] = e)
                                        : Object.defineProperty(
                                              t,
                                              this.expando,
                                              { value: e, configurable: !0 }
                                          ))),
                            e
                        );
                    },
                    set: function(t, e, n) {
                        var i,
                            r = this.cache(t);
                        if ("string" == typeof e) r[Y(e)] = n;
                        else for (i in e) r[Y(i)] = e[i];
                        return r;
                    },
                    get: function(t, e) {
                        return void 0 === e
                            ? this.cache(t)
                            : t[this.expando] && t[this.expando][Y(e)];
                    },
                    access: function(t, e, n) {
                        return void 0 === e ||
                            (e && "string" == typeof e && void 0 === n)
                            ? this.get(t, e)
                            : (this.set(t, e, n), void 0 !== n ? n : e);
                    },
                    remove: function(t, e) {
                        var n,
                            i = t[this.expando];
                        if (void 0 !== i) {
                            if (void 0 !== e) {
                                n = (e = Array.isArray(e)
                                    ? e.map(Y)
                                    : (e = Y(e)) in i
                                    ? [e]
                                    : e.match(P) || []).length;
                                for (; n--; ) delete i[e[n]];
                            }
                            (void 0 === e || C.isEmptyObject(i)) &&
                                (t.nodeType
                                    ? (t[this.expando] = void 0)
                                    : delete t[this.expando]);
                        }
                    },
                    hasData: function(t) {
                        var e = t[this.expando];
                        return void 0 !== e && !C.isEmptyObject(e);
                    }
                });
            var K = new Q(),
                J = new Q(),
                tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                et = /[A-Z]/g;
            function nt(t, e, n) {
                var i;
                if (void 0 === n && 1 === t.nodeType)
                    if (
                        ((i = "data-" + e.replace(et, "-$&").toLowerCase()),
                        "string" == typeof (n = t.getAttribute(i)))
                    ) {
                        try {
                            n = (function(t) {
                                return (
                                    "true" === t ||
                                    ("false" !== t &&
                                        ("null" === t
                                            ? null
                                            : t === +t + ""
                                            ? +t
                                            : tt.test(t)
                                            ? JSON.parse(t)
                                            : t))
                                );
                            })(n);
                        } catch (t) {}
                        J.set(t, e, n);
                    } else n = void 0;
                return n;
            }
            C.extend({
                hasData: function(t) {
                    return J.hasData(t) || K.hasData(t);
                },
                data: function(t, e, n) {
                    return J.access(t, e, n);
                },
                removeData: function(t, e) {
                    J.remove(t, e);
                },
                _data: function(t, e, n) {
                    return K.access(t, e, n);
                },
                _removeData: function(t, e) {
                    K.remove(t, e);
                }
            }),
                C.fn.extend({
                    data: function(t, e) {
                        var n,
                            i,
                            r,
                            s = this[0],
                            o = s && s.attributes;
                        if (void 0 === t) {
                            if (
                                this.length &&
                                ((r = J.get(s)),
                                1 === s.nodeType && !K.get(s, "hasDataAttrs"))
                            ) {
                                for (n = o.length; n--; )
                                    o[n] &&
                                        0 ===
                                            (i = o[n].name).indexOf("data-") &&
                                        ((i = Y(i.slice(5))), nt(s, i, r[i]));
                                K.set(s, "hasDataAttrs", !0);
                            }
                            return r;
                        }
                        return "object" == typeof t
                            ? this.each(function() {
                                  J.set(this, t);
                              })
                            : U(
                                  this,
                                  function(e) {
                                      var n;
                                      if (s && void 0 === e)
                                          return void 0 !== (n = J.get(s, t))
                                              ? n
                                              : void 0 !== (n = nt(s, t))
                                              ? n
                                              : void 0;
                                      this.each(function() {
                                          J.set(this, t, e);
                                      });
                                  },
                                  null,
                                  e,
                                  arguments.length > 1,
                                  null,
                                  !0
                              );
                    },
                    removeData: function(t) {
                        return this.each(function() {
                            J.remove(this, t);
                        });
                    }
                }),
                C.extend({
                    queue: function(t, e, n) {
                        var i;
                        if (t)
                            return (
                                (e = (e || "fx") + "queue"),
                                (i = K.get(t, e)),
                                n &&
                                    (!i || Array.isArray(n)
                                        ? (i = K.access(t, e, C.makeArray(n)))
                                        : i.push(n)),
                                i || []
                            );
                    },
                    dequeue: function(t, e) {
                        e = e || "fx";
                        var n = C.queue(t, e),
                            i = n.length,
                            r = n.shift(),
                            s = C._queueHooks(t, e);
                        "inprogress" === r && ((r = n.shift()), i--),
                            r &&
                                ("fx" === e && n.unshift("inprogress"),
                                delete s.stop,
                                r.call(
                                    t,
                                    function() {
                                        C.dequeue(t, e);
                                    },
                                    s
                                )),
                            !i && s && s.empty.fire();
                    },
                    _queueHooks: function(t, e) {
                        var n = e + "queueHooks";
                        return (
                            K.get(t, n) ||
                            K.access(t, n, {
                                empty: C.Callbacks("once memory").add(
                                    function() {
                                        K.remove(t, [e + "queue", n]);
                                    }
                                )
                            })
                        );
                    }
                }),
                C.fn.extend({
                    queue: function(t, e) {
                        var n = 2;
                        return (
                            "string" != typeof t && ((e = t), (t = "fx"), n--),
                            arguments.length < n
                                ? C.queue(this[0], t)
                                : void 0 === e
                                ? this
                                : this.each(function() {
                                      var n = C.queue(this, t, e);
                                      C._queueHooks(this, t),
                                          "fx" === t &&
                                              "inprogress" !== n[0] &&
                                              C.dequeue(this, t);
                                  })
                        );
                    },
                    dequeue: function(t) {
                        return this.each(function() {
                            C.dequeue(this, t);
                        });
                    },
                    clearQueue: function(t) {
                        return this.queue(t || "fx", []);
                    },
                    promise: function(t, e) {
                        var n,
                            i = 1,
                            r = C.Deferred(),
                            s = this,
                            o = this.length,
                            a = function() {
                                --i || r.resolveWith(s, [s]);
                            };
                        for (
                            "string" != typeof t && ((e = t), (t = void 0)),
                                t = t || "fx";
                            o--;

                        )
                            (n = K.get(s[o], t + "queueHooks")) &&
                                n.empty &&
                                (i++, n.empty.add(a));
                        return a(), r.promise(e);
                    }
                });
            var it = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                rt = new RegExp("^(?:([+-])=|)(" + it + ")([a-z%]*)$", "i"),
                st = ["Top", "Right", "Bottom", "Left"],
                ot = o.documentElement,
                at = function(t) {
                    return C.contains(t.ownerDocument, t);
                },
                lt = { composed: !0 };
            ot.getRootNode &&
                (at = function(t) {
                    return (
                        C.contains(t.ownerDocument, t) ||
                        t.getRootNode(lt) === t.ownerDocument
                    );
                });
            var ct = function(t, e) {
                    return (
                        "none" === (t = e || t).style.display ||
                        ("" === t.style.display &&
                            at(t) &&
                            "none" === C.css(t, "display"))
                    );
                },
                ut = function(t, e, n, i) {
                    var r,
                        s,
                        o = {};
                    for (s in e) (o[s] = t.style[s]), (t.style[s] = e[s]);
                    for (s in ((r = n.apply(t, i || [])), e)) t.style[s] = o[s];
                    return r;
                };
            function ht(t, e, n, i) {
                var r,
                    s,
                    o = 20,
                    a = i
                        ? function() {
                              return i.cur();
                          }
                        : function() {
                              return C.css(t, e, "");
                          },
                    l = a(),
                    c = (n && n[3]) || (C.cssNumber[e] ? "" : "px"),
                    u =
                        t.nodeType &&
                        (C.cssNumber[e] || ("px" !== c && +l)) &&
                        rt.exec(C.css(t, e));
                if (u && u[3] !== c) {
                    for (l /= 2, c = c || u[3], u = +l || 1; o--; )
                        C.style(t, e, u + c),
                            (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 &&
                                (o = 0),
                            (u /= s);
                    (u *= 2), C.style(t, e, u + c), (n = n || []);
                }
                return (
                    n &&
                        ((u = +u || +l || 0),
                        (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
                        i && ((i.unit = c), (i.start = u), (i.end = r))),
                    r
                );
            }
            var dt = {};
            function pt(t) {
                var e,
                    n = t.ownerDocument,
                    i = t.nodeName,
                    r = dt[i];
                return (
                    r ||
                    ((e = n.body.appendChild(n.createElement(i))),
                    (r = C.css(e, "display")),
                    e.parentNode.removeChild(e),
                    "none" === r && (r = "block"),
                    (dt[i] = r),
                    r)
                );
            }
            function ft(t, e) {
                for (var n, i, r = [], s = 0, o = t.length; s < o; s++)
                    (i = t[s]).style &&
                        ((n = i.style.display),
                        e
                            ? ("none" === n &&
                                  ((r[s] = K.get(i, "display") || null),
                                  r[s] || (i.style.display = "")),
                              "" === i.style.display && ct(i) && (r[s] = pt(i)))
                            : "none" !== n &&
                              ((r[s] = "none"), K.set(i, "display", n)));
                for (s = 0; s < o; s++)
                    null != r[s] && (t[s].style.display = r[s]);
                return t;
            }
            C.fn.extend({
                show: function() {
                    return ft(this, !0);
                },
                hide: function() {
                    return ft(this);
                },
                toggle: function(t) {
                    return "boolean" == typeof t
                        ? t
                            ? this.show()
                            : this.hide()
                        : this.each(function() {
                              ct(this) ? C(this).show() : C(this).hide();
                          });
                }
            });
            var gt = /^(?:checkbox|radio)$/i,
                mt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                vt = /^$|^module$|\/(?:java|ecma)script/i,
                yt = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
            function wt(t, e) {
                var n;
                return (
                    (n =
                        void 0 !== t.getElementsByTagName
                            ? t.getElementsByTagName(e || "*")
                            : void 0 !== t.querySelectorAll
                            ? t.querySelectorAll(e || "*")
                            : []),
                    void 0 === e || (e && j(t, e)) ? C.merge([t], n) : n
                );
            }
            function xt(t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    K.set(t[n], "globalEval", !e || K.get(e[n], "globalEval"));
            }
            (yt.optgroup = yt.option),
                (yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead),
                (yt.th = yt.td);
            var _t,
                bt,
                Ct = /<|&#?\w+;/;
            function Tt(t, e, n, i, r) {
                for (
                    var s,
                        o,
                        a,
                        l,
                        c,
                        u,
                        h = e.createDocumentFragment(),
                        d = [],
                        p = 0,
                        f = t.length;
                    p < f;
                    p++
                )
                    if ((s = t[p]) || 0 === s)
                        if ("object" === b(s)) C.merge(d, s.nodeType ? [s] : s);
                        else if (Ct.test(s)) {
                            for (
                                o = o || h.appendChild(e.createElement("div")),
                                    a = (mt.exec(s) || [
                                        "",
                                        ""
                                    ])[1].toLowerCase(),
                                    l = yt[a] || yt._default,
                                    o.innerHTML =
                                        l[1] + C.htmlPrefilter(s) + l[2],
                                    u = l[0];
                                u--;

                            )
                                o = o.lastChild;
                            C.merge(d, o.childNodes),
                                ((o = h.firstChild).textContent = "");
                        } else d.push(e.createTextNode(s));
                for (h.textContent = "", p = 0; (s = d[p++]); )
                    if (i && C.inArray(s, i) > -1) r && r.push(s);
                    else if (
                        ((c = at(s)),
                        (o = wt(h.appendChild(s), "script")),
                        c && xt(o),
                        n)
                    )
                        for (u = 0; (s = o[u++]); )
                            vt.test(s.type || "") && n.push(s);
                return h;
            }
            (_t = o
                .createDocumentFragment()
                .appendChild(o.createElement("div"))),
                (bt = o.createElement("input")).setAttribute("type", "radio"),
                bt.setAttribute("checked", "checked"),
                bt.setAttribute("name", "t"),
                _t.appendChild(bt),
                (v.checkClone = _t
                    .cloneNode(!0)
                    .cloneNode(!0).lastChild.checked),
                (_t.innerHTML = "<textarea>x</textarea>"),
                (v.noCloneChecked = !!_t.cloneNode(!0).lastChild.defaultValue);
            var Et = /^key/,
                kt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                St = /^([^.]*)(?:\.(.+)|)/;
            function Dt() {
                return !0;
            }
            function At() {
                return !1;
            }
            function jt(t, e) {
                return (
                    (t ===
                        (function() {
                            try {
                                return o.activeElement;
                            } catch (t) {}
                        })()) ==
                    ("focus" === e)
                );
            }
            function Nt(t, e, n, i, r, s) {
                var o, a;
                if ("object" == typeof e) {
                    for (a in ("string" != typeof n &&
                        ((i = i || n), (n = void 0)),
                    e))
                        Nt(t, a, n, i, e[a], s);
                    return t;
                }
                if (
                    (null == i && null == r
                        ? ((r = n), (i = n = void 0))
                        : null == r &&
                          ("string" == typeof n
                              ? ((r = i), (i = void 0))
                              : ((r = i), (i = n), (n = void 0))),
                    !1 === r)
                )
                    r = At;
                else if (!r) return t;
                return (
                    1 === s &&
                        ((o = r),
                        ((r = function(t) {
                            return C().off(t), o.apply(this, arguments);
                        }).guid = o.guid || (o.guid = C.guid++))),
                    t.each(function() {
                        C.event.add(this, e, r, i, n);
                    })
                );
            }
            function $t(t, e, n) {
                n
                    ? (K.set(t, e, !1),
                      C.event.add(t, e, {
                          namespace: !1,
                          handler: function(t) {
                              var i,
                                  r,
                                  s = K.get(this, e);
                              if (1 & t.isTrigger && this[e]) {
                                  if (s.length)
                                      (C.event.special[e] || {}).delegateType &&
                                          t.stopPropagation();
                                  else if (
                                      ((s = l.call(arguments)),
                                      K.set(this, e, s),
                                      (i = n(this, e)),
                                      this[e](),
                                      s !== (r = K.get(this, e)) || i
                                          ? K.set(this, e, !1)
                                          : (r = {}),
                                      s !== r)
                                  )
                                      return (
                                          t.stopImmediatePropagation(),
                                          t.preventDefault(),
                                          r.value
                                      );
                              } else
                                  s.length &&
                                      (K.set(this, e, {
                                          value: C.event.trigger(
                                              C.extend(s[0], C.Event.prototype),
                                              s.slice(1),
                                              this
                                          )
                                      }),
                                      t.stopImmediatePropagation());
                          }
                      }))
                    : void 0 === K.get(t, e) && C.event.add(t, e, Dt);
            }
            (C.event = {
                global: {},
                add: function(t, e, n, i, r) {
                    var s,
                        o,
                        a,
                        l,
                        c,
                        u,
                        h,
                        d,
                        p,
                        f,
                        g,
                        m = K.get(t);
                    if (m)
                        for (
                            n.handler &&
                                ((n = (s = n).handler), (r = s.selector)),
                                r && C.find.matchesSelector(ot, r),
                                n.guid || (n.guid = C.guid++),
                                (l = m.events) || (l = m.events = {}),
                                (o = m.handle) ||
                                    (o = m.handle = function(e) {
                                        return void 0 !== C &&
                                            C.event.triggered !== e.type
                                            ? C.event.dispatch.apply(
                                                  t,
                                                  arguments
                                              )
                                            : void 0;
                                    }),
                                c = (e = (e || "").match(P) || [""]).length;
                            c--;

                        )
                            (p = g = (a = St.exec(e[c]) || [])[1]),
                                (f = (a[2] || "").split(".").sort()),
                                p &&
                                    ((h = C.event.special[p] || {}),
                                    (p =
                                        (r ? h.delegateType : h.bindType) || p),
                                    (h = C.event.special[p] || {}),
                                    (u = C.extend(
                                        {
                                            type: p,
                                            origType: g,
                                            data: i,
                                            handler: n,
                                            guid: n.guid,
                                            selector: r,
                                            needsContext:
                                                r &&
                                                C.expr.match.needsContext.test(
                                                    r
                                                ),
                                            namespace: f.join(".")
                                        },
                                        s
                                    )),
                                    (d = l[p]) ||
                                        (((d = l[p] = []).delegateCount = 0),
                                        (h.setup &&
                                            !1 !== h.setup.call(t, i, f, o)) ||
                                            (t.addEventListener &&
                                                t.addEventListener(p, o))),
                                    h.add &&
                                        (h.add.call(t, u),
                                        u.handler.guid ||
                                            (u.handler.guid = n.guid)),
                                    r
                                        ? d.splice(d.delegateCount++, 0, u)
                                        : d.push(u),
                                    (C.event.global[p] = !0));
                },
                remove: function(t, e, n, i, r) {
                    var s,
                        o,
                        a,
                        l,
                        c,
                        u,
                        h,
                        d,
                        p,
                        f,
                        g,
                        m = K.hasData(t) && K.get(t);
                    if (m && (l = m.events)) {
                        for (c = (e = (e || "").match(P) || [""]).length; c--; )
                            if (
                                ((p = g = (a = St.exec(e[c]) || [])[1]),
                                (f = (a[2] || "").split(".").sort()),
                                p)
                            ) {
                                for (
                                    h = C.event.special[p] || {},
                                        d =
                                            l[
                                                (p =
                                                    (i
                                                        ? h.delegateType
                                                        : h.bindType) || p)
                                            ] || [],
                                        a =
                                            a[2] &&
                                            new RegExp(
                                                "(^|\\.)" +
                                                    f.join("\\.(?:.*\\.|)") +
                                                    "(\\.|$)"
                                            ),
                                        o = s = d.length;
                                    s--;

                                )
                                    (u = d[s]),
                                        (!r && g !== u.origType) ||
                                            (n && n.guid !== u.guid) ||
                                            (a && !a.test(u.namespace)) ||
                                            (i &&
                                                i !== u.selector &&
                                                ("**" !== i || !u.selector)) ||
                                            (d.splice(s, 1),
                                            u.selector && d.delegateCount--,
                                            h.remove && h.remove.call(t, u));
                                o &&
                                    !d.length &&
                                    ((h.teardown &&
                                        !1 !==
                                            h.teardown.call(t, f, m.handle)) ||
                                        C.removeEvent(t, p, m.handle),
                                    delete l[p]);
                            } else
                                for (p in l)
                                    C.event.remove(t, p + e[c], n, i, !0);
                        C.isEmptyObject(l) && K.remove(t, "handle events");
                    }
                },
                dispatch: function(t) {
                    var e,
                        n,
                        i,
                        r,
                        s,
                        o,
                        a = C.event.fix(t),
                        l = new Array(arguments.length),
                        c = (K.get(this, "events") || {})[a.type] || [],
                        u = C.event.special[a.type] || {};
                    for (l[0] = a, e = 1; e < arguments.length; e++)
                        l[e] = arguments[e];
                    if (
                        ((a.delegateTarget = this),
                        !u.preDispatch || !1 !== u.preDispatch.call(this, a))
                    ) {
                        for (
                            o = C.event.handlers.call(this, a, c), e = 0;
                            (r = o[e++]) && !a.isPropagationStopped();

                        )
                            for (
                                a.currentTarget = r.elem, n = 0;
                                (s = r.handlers[n++]) &&
                                !a.isImmediatePropagationStopped();

                            )
                                (a.rnamespace &&
                                    !1 !== s.namespace &&
                                    !a.rnamespace.test(s.namespace)) ||
                                    ((a.handleObj = s),
                                    (a.data = s.data),
                                    void 0 !==
                                        (i = (
                                            (C.event.special[s.origType] || {})
                                                .handle || s.handler
                                        ).apply(r.elem, l)) &&
                                        !1 === (a.result = i) &&
                                        (a.preventDefault(),
                                        a.stopPropagation()));
                        return (
                            u.postDispatch && u.postDispatch.call(this, a),
                            a.result
                        );
                    }
                },
                handlers: function(t, e) {
                    var n,
                        i,
                        r,
                        s,
                        o,
                        a = [],
                        l = e.delegateCount,
                        c = t.target;
                    if (
                        l &&
                        c.nodeType &&
                        !("click" === t.type && t.button >= 1)
                    )
                        for (; c !== this; c = c.parentNode || this)
                            if (
                                1 === c.nodeType &&
                                ("click" !== t.type || !0 !== c.disabled)
                            ) {
                                for (s = [], o = {}, n = 0; n < l; n++)
                                    void 0 ===
                                        o[(r = (i = e[n]).selector + " ")] &&
                                        (o[r] = i.needsContext
                                            ? C(r, this).index(c) > -1
                                            : C.find(r, this, null, [c])
                                                  .length),
                                        o[r] && s.push(i);
                                s.length && a.push({ elem: c, handlers: s });
                            }
                    return (
                        (c = this),
                        l < e.length &&
                            a.push({ elem: c, handlers: e.slice(l) }),
                        a
                    );
                },
                addProp: function(t, e) {
                    Object.defineProperty(C.Event.prototype, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: y(e)
                            ? function() {
                                  if (this.originalEvent)
                                      return e(this.originalEvent);
                              }
                            : function() {
                                  if (this.originalEvent)
                                      return this.originalEvent[t];
                              },
                        set: function(e) {
                            Object.defineProperty(this, t, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: e
                            });
                        }
                    });
                },
                fix: function(t) {
                    return t[C.expando] ? t : new C.Event(t);
                },
                special: {
                    load: { noBubble: !0 },
                    click: {
                        setup: function(t) {
                            var e = this || t;
                            return (
                                gt.test(e.type) &&
                                    e.click &&
                                    j(e, "input") &&
                                    $t(e, "click", Dt),
                                !1
                            );
                        },
                        trigger: function(t) {
                            var e = this || t;
                            return (
                                gt.test(e.type) &&
                                    e.click &&
                                    j(e, "input") &&
                                    $t(e, "click"),
                                !0
                            );
                        },
                        _default: function(t) {
                            var e = t.target;
                            return (
                                (gt.test(e.type) &&
                                    e.click &&
                                    j(e, "input") &&
                                    K.get(e, "click")) ||
                                j(e, "a")
                            );
                        }
                    },
                    beforeunload: {
                        postDispatch: function(t) {
                            void 0 !== t.result &&
                                t.originalEvent &&
                                (t.originalEvent.returnValue = t.result);
                        }
                    }
                }
            }),
                (C.removeEvent = function(t, e, n) {
                    t.removeEventListener && t.removeEventListener(e, n);
                }),
                (C.Event = function(t, e) {
                    if (!(this instanceof C.Event)) return new C.Event(t, e);
                    t && t.type
                        ? ((this.originalEvent = t),
                          (this.type = t.type),
                          (this.isDefaultPrevented =
                              t.defaultPrevented ||
                              (void 0 === t.defaultPrevented &&
                                  !1 === t.returnValue)
                                  ? Dt
                                  : At),
                          (this.target =
                              t.target && 3 === t.target.nodeType
                                  ? t.target.parentNode
                                  : t.target),
                          (this.currentTarget = t.currentTarget),
                          (this.relatedTarget = t.relatedTarget))
                        : (this.type = t),
                        e && C.extend(this, e),
                        (this.timeStamp = (t && t.timeStamp) || Date.now()),
                        (this[C.expando] = !0);
                }),
                (C.Event.prototype = {
                    constructor: C.Event,
                    isDefaultPrevented: At,
                    isPropagationStopped: At,
                    isImmediatePropagationStopped: At,
                    isSimulated: !1,
                    preventDefault: function() {
                        var t = this.originalEvent;
                        (this.isDefaultPrevented = Dt),
                            t && !this.isSimulated && t.preventDefault();
                    },
                    stopPropagation: function() {
                        var t = this.originalEvent;
                        (this.isPropagationStopped = Dt),
                            t && !this.isSimulated && t.stopPropagation();
                    },
                    stopImmediatePropagation: function() {
                        var t = this.originalEvent;
                        (this.isImmediatePropagationStopped = Dt),
                            t &&
                                !this.isSimulated &&
                                t.stopImmediatePropagation(),
                            this.stopPropagation();
                    }
                }),
                C.each(
                    {
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        code: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: function(t) {
                            var e = t.button;
                            return null == t.which && Et.test(t.type)
                                ? null != t.charCode
                                    ? t.charCode
                                    : t.keyCode
                                : !t.which && void 0 !== e && kt.test(t.type)
                                ? 1 & e
                                    ? 1
                                    : 2 & e
                                    ? 3
                                    : 4 & e
                                    ? 2
                                    : 0
                                : t.which;
                        }
                    },
                    C.event.addProp
                ),
                C.each({ focus: "focusin", blur: "focusout" }, function(t, e) {
                    C.event.special[t] = {
                        setup: function() {
                            return $t(this, t, jt), !1;
                        },
                        trigger: function() {
                            return $t(this, t), !0;
                        },
                        delegateType: e
                    };
                }),
                C.each(
                    {
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout"
                    },
                    function(t, e) {
                        C.event.special[t] = {
                            delegateType: e,
                            bindType: e,
                            handle: function(t) {
                                var n,
                                    i = this,
                                    r = t.relatedTarget,
                                    s = t.handleObj;
                                return (
                                    (r && (r === i || C.contains(i, r))) ||
                                        ((t.type = s.origType),
                                        (n = s.handler.apply(this, arguments)),
                                        (t.type = e)),
                                    n
                                );
                            }
                        };
                    }
                ),
                C.fn.extend({
                    on: function(t, e, n, i) {
                        return Nt(this, t, e, n, i);
                    },
                    one: function(t, e, n, i) {
                        return Nt(this, t, e, n, i, 1);
                    },
                    off: function(t, e, n) {
                        var i, r;
                        if (t && t.preventDefault && t.handleObj)
                            return (
                                (i = t.handleObj),
                                C(t.delegateTarget).off(
                                    i.namespace
                                        ? i.origType + "." + i.namespace
                                        : i.origType,
                                    i.selector,
                                    i.handler
                                ),
                                this
                            );
                        if ("object" == typeof t) {
                            for (r in t) this.off(r, e, t[r]);
                            return this;
                        }
                        return (
                            (!1 !== e && "function" != typeof e) ||
                                ((n = e), (e = void 0)),
                            !1 === n && (n = At),
                            this.each(function() {
                                C.event.remove(this, t, n, e);
                            })
                        );
                    }
                });
            var Lt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Ot = /<script|<style|<link/i,
                zt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function Ht(t, e) {
                return (
                    (j(t, "table") &&
                        j(11 !== e.nodeType ? e : e.firstChild, "tr") &&
                        C(t).children("tbody")[0]) ||
                    t
                );
            }
            function Pt(t) {
                return (
                    (t.type = (null !== t.getAttribute("type")) + "/" + t.type),
                    t
                );
            }
            function qt(t) {
                return (
                    "true/" === (t.type || "").slice(0, 5)
                        ? (t.type = t.type.slice(5))
                        : t.removeAttribute("type"),
                    t
                );
            }
            function It(t, e) {
                var n, i, r, s, o, a, l, c;
                if (1 === e.nodeType) {
                    if (
                        K.hasData(t) &&
                        ((s = K.access(t)), (o = K.set(e, s)), (c = s.events))
                    )
                        for (r in (delete o.handle, (o.events = {}), c))
                            for (n = 0, i = c[r].length; n < i; n++)
                                C.event.add(e, r, c[r][n]);
                    J.hasData(t) &&
                        ((a = J.access(t)), (l = C.extend({}, a)), J.set(e, l));
                }
            }
            function Rt(t, e) {
                var n = e.nodeName.toLowerCase();
                "input" === n && gt.test(t.type)
                    ? (e.checked = t.checked)
                    : ("input" !== n && "textarea" !== n) ||
                      (e.defaultValue = t.defaultValue);
            }
            function Wt(t, e, n, i) {
                e = c.apply([], e);
                var r,
                    s,
                    o,
                    a,
                    l,
                    u,
                    h = 0,
                    d = t.length,
                    p = d - 1,
                    f = e[0],
                    g = y(f);
                if (
                    g ||
                    (d > 1 &&
                        "string" == typeof f &&
                        !v.checkClone &&
                        zt.test(f))
                )
                    return t.each(function(r) {
                        var s = t.eq(r);
                        g && (e[0] = f.call(this, r, s.html())), Wt(s, e, n, i);
                    });
                if (
                    d &&
                    ((s = (r = Tt(e, t[0].ownerDocument, !1, t, i)).firstChild),
                    1 === r.childNodes.length && (r = s),
                    s || i)
                ) {
                    for (
                        a = (o = C.map(wt(r, "script"), Pt)).length;
                        h < d;
                        h++
                    )
                        (l = r),
                            h !== p &&
                                ((l = C.clone(l, !0, !0)),
                                a && C.merge(o, wt(l, "script"))),
                            n.call(t[h], l, h);
                    if (a)
                        for (
                            u = o[o.length - 1].ownerDocument,
                                C.map(o, qt),
                                h = 0;
                            h < a;
                            h++
                        )
                            (l = o[h]),
                                vt.test(l.type || "") &&
                                    !K.access(l, "globalEval") &&
                                    C.contains(u, l) &&
                                    (l.src &&
                                    "module" !== (l.type || "").toLowerCase()
                                        ? C._evalUrl &&
                                          !l.noModule &&
                                          C._evalUrl(l.src, {
                                              nonce:
                                                  l.nonce ||
                                                  l.getAttribute("nonce")
                                          })
                                        : _(
                                              l.textContent.replace(Mt, ""),
                                              l,
                                              u
                                          ));
                }
                return t;
            }
            function Bt(t, e, n) {
                for (
                    var i, r = e ? C.filter(e, t) : t, s = 0;
                    null != (i = r[s]);
                    s++
                )
                    n || 1 !== i.nodeType || C.cleanData(wt(i)),
                        i.parentNode &&
                            (n && at(i) && xt(wt(i, "script")),
                            i.parentNode.removeChild(i));
                return t;
            }
            C.extend({
                htmlPrefilter: function(t) {
                    return t.replace(Lt, "<$1></$2>");
                },
                clone: function(t, e, n) {
                    var i,
                        r,
                        s,
                        o,
                        a = t.cloneNode(!0),
                        l = at(t);
                    if (
                        !(
                            v.noCloneChecked ||
                            (1 !== t.nodeType && 11 !== t.nodeType) ||
                            C.isXMLDoc(t)
                        )
                    )
                        for (
                            o = wt(a), i = 0, r = (s = wt(t)).length;
                            i < r;
                            i++
                        )
                            Rt(s[i], o[i]);
                    if (e)
                        if (n)
                            for (
                                s = s || wt(t),
                                    o = o || wt(a),
                                    i = 0,
                                    r = s.length;
                                i < r;
                                i++
                            )
                                It(s[i], o[i]);
                        else It(t, a);
                    return (
                        (o = wt(a, "script")).length > 0 &&
                            xt(o, !l && wt(t, "script")),
                        a
                    );
                },
                cleanData: function(t) {
                    for (
                        var e, n, i, r = C.event.special, s = 0;
                        void 0 !== (n = t[s]);
                        s++
                    )
                        if (Z(n)) {
                            if ((e = n[K.expando])) {
                                if (e.events)
                                    for (i in e.events)
                                        r[i]
                                            ? C.event.remove(n, i)
                                            : C.removeEvent(n, i, e.handle);
                                n[K.expando] = void 0;
                            }
                            n[J.expando] && (n[J.expando] = void 0);
                        }
                }
            }),
                C.fn.extend({
                    detach: function(t) {
                        return Bt(this, t, !0);
                    },
                    remove: function(t) {
                        return Bt(this, t);
                    },
                    text: function(t) {
                        return U(
                            this,
                            function(t) {
                                return void 0 === t
                                    ? C.text(this)
                                    : this.empty().each(function() {
                                          (1 !== this.nodeType &&
                                              11 !== this.nodeType &&
                                              9 !== this.nodeType) ||
                                              (this.textContent = t);
                                      });
                            },
                            null,
                            t,
                            arguments.length
                        );
                    },
                    append: function() {
                        return Wt(this, arguments, function(t) {
                            (1 !== this.nodeType &&
                                11 !== this.nodeType &&
                                9 !== this.nodeType) ||
                                Ht(this, t).appendChild(t);
                        });
                    },
                    prepend: function() {
                        return Wt(this, arguments, function(t) {
                            if (
                                1 === this.nodeType ||
                                11 === this.nodeType ||
                                9 === this.nodeType
                            ) {
                                var e = Ht(this, t);
                                e.insertBefore(t, e.firstChild);
                            }
                        });
                    },
                    before: function() {
                        return Wt(this, arguments, function(t) {
                            this.parentNode &&
                                this.parentNode.insertBefore(t, this);
                        });
                    },
                    after: function() {
                        return Wt(this, arguments, function(t) {
                            this.parentNode &&
                                this.parentNode.insertBefore(
                                    t,
                                    this.nextSibling
                                );
                        });
                    },
                    empty: function() {
                        for (var t, e = 0; null != (t = this[e]); e++)
                            1 === t.nodeType &&
                                (C.cleanData(wt(t, !1)), (t.textContent = ""));
                        return this;
                    },
                    clone: function(t, e) {
                        return (
                            (t = null != t && t),
                            (e = null == e ? t : e),
                            this.map(function() {
                                return C.clone(this, t, e);
                            })
                        );
                    },
                    html: function(t) {
                        return U(
                            this,
                            function(t) {
                                var e = this[0] || {},
                                    n = 0,
                                    i = this.length;
                                if (void 0 === t && 1 === e.nodeType)
                                    return e.innerHTML;
                                if (
                                    "string" == typeof t &&
                                    !Ot.test(t) &&
                                    !yt[
                                        (mt.exec(t) || [
                                            "",
                                            ""
                                        ])[1].toLowerCase()
                                    ]
                                ) {
                                    t = C.htmlPrefilter(t);
                                    try {
                                        for (; n < i; n++)
                                            1 ===
                                                (e = this[n] || {}).nodeType &&
                                                (C.cleanData(wt(e, !1)),
                                                (e.innerHTML = t));
                                        e = 0;
                                    } catch (t) {}
                                }
                                e && this.empty().append(t);
                            },
                            null,
                            t,
                            arguments.length
                        );
                    },
                    replaceWith: function() {
                        var t = [];
                        return Wt(
                            this,
                            arguments,
                            function(e) {
                                var n = this.parentNode;
                                C.inArray(this, t) < 0 &&
                                    (C.cleanData(wt(this)),
                                    n && n.replaceChild(e, this));
                            },
                            t
                        );
                    }
                }),
                C.each(
                    {
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith"
                    },
                    function(t, e) {
                        C.fn[t] = function(t) {
                            for (
                                var n,
                                    i = [],
                                    r = C(t),
                                    s = r.length - 1,
                                    o = 0;
                                o <= s;
                                o++
                            )
                                (n = o === s ? this : this.clone(!0)),
                                    C(r[o])[e](n),
                                    u.apply(i, n.get());
                            return this.pushStack(i);
                        };
                    }
                );
            var Ft = new RegExp("^(" + it + ")(?!px)[a-z%]+$", "i"),
                Ut = function(t) {
                    var e = t.ownerDocument.defaultView;
                    return (e && e.opener) || (e = n), e.getComputedStyle(t);
                },
                Vt = new RegExp(st.join("|"), "i");
            function Xt(t, e, n) {
                var i,
                    r,
                    s,
                    o,
                    a = t.style;
                return (
                    (n = n || Ut(t)) &&
                        ("" !== (o = n.getPropertyValue(e) || n[e]) ||
                            at(t) ||
                            (o = C.style(t, e)),
                        !v.pixelBoxStyles() &&
                            Ft.test(o) &&
                            Vt.test(e) &&
                            ((i = a.width),
                            (r = a.minWidth),
                            (s = a.maxWidth),
                            (a.minWidth = a.maxWidth = a.width = o),
                            (o = n.width),
                            (a.width = i),
                            (a.minWidth = r),
                            (a.maxWidth = s))),
                    void 0 !== o ? o + "" : o
                );
            }
            function Gt(t, e) {
                return {
                    get: function() {
                        if (!t()) return (this.get = e).apply(this, arguments);
                        delete this.get;
                    }
                };
            }
            !(function() {
                function t() {
                    if (u) {
                        (c.style.cssText =
                            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                            (u.style.cssText =
                                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                            ot.appendChild(c).appendChild(u);
                        var t = n.getComputedStyle(u);
                        (i = "1%" !== t.top),
                            (l = 12 === e(t.marginLeft)),
                            (u.style.right = "60%"),
                            (a = 36 === e(t.right)),
                            (r = 36 === e(t.width)),
                            (u.style.position = "absolute"),
                            (s = 12 === e(u.offsetWidth / 3)),
                            ot.removeChild(c),
                            (u = null);
                    }
                }
                function e(t) {
                    return Math.round(parseFloat(t));
                }
                var i,
                    r,
                    s,
                    a,
                    l,
                    c = o.createElement("div"),
                    u = o.createElement("div");
                u.style &&
                    ((u.style.backgroundClip = "content-box"),
                    (u.cloneNode(!0).style.backgroundClip = ""),
                    (v.clearCloneStyle =
                        "content-box" === u.style.backgroundClip),
                    C.extend(v, {
                        boxSizingReliable: function() {
                            return t(), r;
                        },
                        pixelBoxStyles: function() {
                            return t(), a;
                        },
                        pixelPosition: function() {
                            return t(), i;
                        },
                        reliableMarginLeft: function() {
                            return t(), l;
                        },
                        scrollboxSize: function() {
                            return t(), s;
                        }
                    }));
            })();
            var Yt = ["Webkit", "Moz", "ms"],
                Zt = o.createElement("div").style,
                Qt = {};
            function Kt(t) {
                var e = C.cssProps[t] || Qt[t];
                return (
                    e ||
                    (t in Zt
                        ? t
                        : (Qt[t] =
                              (function(t) {
                                  for (
                                      var e = t[0].toUpperCase() + t.slice(1),
                                          n = Yt.length;
                                      n--;

                                  )
                                      if ((t = Yt[n] + e) in Zt) return t;
                              })(t) || t))
                );
            }
            var Jt = /^(none|table(?!-c[ea]).+)/,
                te = /^--/,
                ee = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                ne = { letterSpacing: "0", fontWeight: "400" };
            function ie(t, e, n) {
                var i = rt.exec(e);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
            }
            function re(t, e, n, i, r, s) {
                var o = "width" === e ? 1 : 0,
                    a = 0,
                    l = 0;
                if (n === (i ? "border" : "content")) return 0;
                for (; o < 4; o += 2)
                    "margin" === n && (l += C.css(t, n + st[o], !0, r)),
                        i
                            ? ("content" === n &&
                                  (l -= C.css(t, "padding" + st[o], !0, r)),
                              "margin" !== n &&
                                  (l -= C.css(
                                      t,
                                      "border" + st[o] + "Width",
                                      !0,
                                      r
                                  )))
                            : ((l += C.css(t, "padding" + st[o], !0, r)),
                              "padding" !== n
                                  ? (l += C.css(
                                        t,
                                        "border" + st[o] + "Width",
                                        !0,
                                        r
                                    ))
                                  : (a += C.css(
                                        t,
                                        "border" + st[o] + "Width",
                                        !0,
                                        r
                                    )));
                return (
                    !i &&
                        s >= 0 &&
                        (l +=
                            Math.max(
                                0,
                                Math.ceil(
                                    t[
                                        "offset" +
                                            e[0].toUpperCase() +
                                            e.slice(1)
                                    ] -
                                        s -
                                        l -
                                        a -
                                        0.5
                                )
                            ) || 0),
                    l
                );
            }
            function se(t, e, n) {
                var i = Ut(t),
                    r =
                        (!v.boxSizingReliable() || n) &&
                        "border-box" === C.css(t, "boxSizing", !1, i),
                    s = r,
                    o = Xt(t, e, i),
                    a = "offset" + e[0].toUpperCase() + e.slice(1);
                if (Ft.test(o)) {
                    if (!n) return o;
                    o = "auto";
                }
                return (
                    ((!v.boxSizingReliable() && r) ||
                        "auto" === o ||
                        (!parseFloat(o) &&
                            "inline" === C.css(t, "display", !1, i))) &&
                        t.getClientRects().length &&
                        ((r = "border-box" === C.css(t, "boxSizing", !1, i)),
                        (s = a in t) && (o = t[a])),
                    (o = parseFloat(o) || 0) +
                        re(t, e, n || (r ? "border" : "content"), s, i, o) +
                        "px"
                );
            }
            function oe(t, e, n, i, r) {
                return new oe.prototype.init(t, e, n, i, r);
            }
            C.extend({
                cssHooks: {
                    opacity: {
                        get: function(t, e) {
                            if (e) {
                                var n = Xt(t, "opacity");
                                return "" === n ? "1" : n;
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(t, e, n, i) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var r,
                            s,
                            o,
                            a = Y(e),
                            l = te.test(e),
                            c = t.style;
                        if (
                            (l || (e = Kt(a)),
                            (o = C.cssHooks[e] || C.cssHooks[a]),
                            void 0 === n)
                        )
                            return o &&
                                "get" in o &&
                                void 0 !== (r = o.get(t, !1, i))
                                ? r
                                : c[e];
                        "string" === (s = typeof n) &&
                            (r = rt.exec(n)) &&
                            r[1] &&
                            ((n = ht(t, e, r)), (s = "number")),
                            null != n &&
                                n == n &&
                                ("number" !== s ||
                                    l ||
                                    (n +=
                                        (r && r[3]) ||
                                        (C.cssNumber[a] ? "" : "px")),
                                v.clearCloneStyle ||
                                    "" !== n ||
                                    0 !== e.indexOf("background") ||
                                    (c[e] = "inherit"),
                                (o &&
                                    "set" in o &&
                                    void 0 === (n = o.set(t, n, i))) ||
                                    (l ? c.setProperty(e, n) : (c[e] = n)));
                    }
                },
                css: function(t, e, n, i) {
                    var r,
                        s,
                        o,
                        a = Y(e);
                    return (
                        te.test(e) || (e = Kt(a)),
                        (o = C.cssHooks[e] || C.cssHooks[a]) &&
                            "get" in o &&
                            (r = o.get(t, !0, n)),
                        void 0 === r && (r = Xt(t, e, i)),
                        "normal" === r && e in ne && (r = ne[e]),
                        "" === n || n
                            ? ((s = parseFloat(r)),
                              !0 === n || isFinite(s) ? s || 0 : r)
                            : r
                    );
                }
            }),
                C.each(["height", "width"], function(t, e) {
                    C.cssHooks[e] = {
                        get: function(t, n, i) {
                            if (n)
                                return !Jt.test(C.css(t, "display")) ||
                                    (t.getClientRects().length &&
                                        t.getBoundingClientRect().width)
                                    ? se(t, e, i)
                                    : ut(t, ee, function() {
                                          return se(t, e, i);
                                      });
                        },
                        set: function(t, n, i) {
                            var r,
                                s = Ut(t),
                                o =
                                    !v.scrollboxSize() &&
                                    "absolute" === s.position,
                                a =
                                    (o || i) &&
                                    "border-box" ===
                                        C.css(t, "boxSizing", !1, s),
                                l = i ? re(t, e, i, a, s) : 0;
                            return (
                                a &&
                                    o &&
                                    (l -= Math.ceil(
                                        t[
                                            "offset" +
                                                e[0].toUpperCase() +
                                                e.slice(1)
                                        ] -
                                            parseFloat(s[e]) -
                                            re(t, e, "border", !1, s) -
                                            0.5
                                    )),
                                l &&
                                    (r = rt.exec(n)) &&
                                    "px" !== (r[3] || "px") &&
                                    ((t.style[e] = n), (n = C.css(t, e))),
                                ie(0, n, l)
                            );
                        }
                    };
                }),
                (C.cssHooks.marginLeft = Gt(v.reliableMarginLeft, function(
                    t,
                    e
                ) {
                    if (e)
                        return (
                            (parseFloat(Xt(t, "marginLeft")) ||
                                t.getBoundingClientRect().left -
                                    ut(t, { marginLeft: 0 }, function() {
                                        return t.getBoundingClientRect().left;
                                    })) + "px"
                        );
                })),
                C.each({ margin: "", padding: "", border: "Width" }, function(
                    t,
                    e
                ) {
                    (C.cssHooks[t + e] = {
                        expand: function(n) {
                            for (
                                var i = 0,
                                    r = {},
                                    s =
                                        "string" == typeof n
                                            ? n.split(" ")
                                            : [n];
                                i < 4;
                                i++
                            )
                                r[t + st[i] + e] = s[i] || s[i - 2] || s[0];
                            return r;
                        }
                    }),
                        "margin" !== t && (C.cssHooks[t + e].set = ie);
                }),
                C.fn.extend({
                    css: function(t, e) {
                        return U(
                            this,
                            function(t, e, n) {
                                var i,
                                    r,
                                    s = {},
                                    o = 0;
                                if (Array.isArray(e)) {
                                    for (i = Ut(t), r = e.length; o < r; o++)
                                        s[e[o]] = C.css(t, e[o], !1, i);
                                    return s;
                                }
                                return void 0 !== n
                                    ? C.style(t, e, n)
                                    : C.css(t, e);
                            },
                            t,
                            e,
                            arguments.length > 1
                        );
                    }
                }),
                (C.Tween = oe),
                (oe.prototype = {
                    constructor: oe,
                    init: function(t, e, n, i, r, s) {
                        (this.elem = t),
                            (this.prop = n),
                            (this.easing = r || C.easing._default),
                            (this.options = e),
                            (this.start = this.now = this.cur()),
                            (this.end = i),
                            (this.unit = s || (C.cssNumber[n] ? "" : "px"));
                    },
                    cur: function() {
                        var t = oe.propHooks[this.prop];
                        return t && t.get
                            ? t.get(this)
                            : oe.propHooks._default.get(this);
                    },
                    run: function(t) {
                        var e,
                            n = oe.propHooks[this.prop];
                        return (
                            this.options.duration
                                ? (this.pos = e = C.easing[this.easing](
                                      t,
                                      this.options.duration * t,
                                      0,
                                      1,
                                      this.options.duration
                                  ))
                                : (this.pos = e = t),
                            (this.now =
                                (this.end - this.start) * e + this.start),
                            this.options.step &&
                                this.options.step.call(
                                    this.elem,
                                    this.now,
                                    this
                                ),
                            n && n.set
                                ? n.set(this)
                                : oe.propHooks._default.set(this),
                            this
                        );
                    }
                }),
                (oe.prototype.init.prototype = oe.prototype),
                (oe.propHooks = {
                    _default: {
                        get: function(t) {
                            var e;
                            return 1 !== t.elem.nodeType ||
                                (null != t.elem[t.prop] &&
                                    null == t.elem.style[t.prop])
                                ? t.elem[t.prop]
                                : (e = C.css(t.elem, t.prop, "")) &&
                                  "auto" !== e
                                ? e
                                : 0;
                        },
                        set: function(t) {
                            C.fx.step[t.prop]
                                ? C.fx.step[t.prop](t)
                                : 1 !== t.elem.nodeType ||
                                  (!C.cssHooks[t.prop] &&
                                      null == t.elem.style[Kt(t.prop)])
                                ? (t.elem[t.prop] = t.now)
                                : C.style(t.elem, t.prop, t.now + t.unit);
                        }
                    }
                }),
                (oe.propHooks.scrollTop = oe.propHooks.scrollLeft = {
                    set: function(t) {
                        t.elem.nodeType &&
                            t.elem.parentNode &&
                            (t.elem[t.prop] = t.now);
                    }
                }),
                (C.easing = {
                    linear: function(t) {
                        return t;
                    },
                    swing: function(t) {
                        return 0.5 - Math.cos(t * Math.PI) / 2;
                    },
                    _default: "swing"
                }),
                (C.fx = oe.prototype.init),
                (C.fx.step = {});
            var ae,
                le,
                ce = /^(?:toggle|show|hide)$/,
                ue = /queueHooks$/;
            function he() {
                le &&
                    (!1 === o.hidden && n.requestAnimationFrame
                        ? n.requestAnimationFrame(he)
                        : n.setTimeout(he, C.fx.interval),
                    C.fx.tick());
            }
            function de() {
                return (
                    n.setTimeout(function() {
                        ae = void 0;
                    }),
                    (ae = Date.now())
                );
            }
            function pe(t, e) {
                var n,
                    i = 0,
                    r = { height: t };
                for (e = e ? 1 : 0; i < 4; i += 2 - e)
                    r["margin" + (n = st[i])] = r["padding" + n] = t;
                return e && (r.opacity = r.width = t), r;
            }
            function fe(t, e, n) {
                for (
                    var i,
                        r = (ge.tweeners[e] || []).concat(ge.tweeners["*"]),
                        s = 0,
                        o = r.length;
                    s < o;
                    s++
                )
                    if ((i = r[s].call(n, e, t))) return i;
            }
            function ge(t, e, n) {
                var i,
                    r,
                    s = 0,
                    o = ge.prefilters.length,
                    a = C.Deferred().always(function() {
                        delete l.elem;
                    }),
                    l = function() {
                        if (r) return !1;
                        for (
                            var e = ae || de(),
                                n = Math.max(0, c.startTime + c.duration - e),
                                i = 1 - (n / c.duration || 0),
                                s = 0,
                                o = c.tweens.length;
                            s < o;
                            s++
                        )
                            c.tweens[s].run(i);
                        return (
                            a.notifyWith(t, [c, i, n]),
                            i < 1 && o
                                ? n
                                : (o || a.notifyWith(t, [c, 1, 0]),
                                  a.resolveWith(t, [c]),
                                  !1)
                        );
                    },
                    c = a.promise({
                        elem: t,
                        props: C.extend({}, e),
                        opts: C.extend(
                            !0,
                            { specialEasing: {}, easing: C.easing._default },
                            n
                        ),
                        originalProperties: e,
                        originalOptions: n,
                        startTime: ae || de(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(e, n) {
                            var i = C.Tween(
                                t,
                                c.opts,
                                e,
                                n,
                                c.opts.specialEasing[e] || c.opts.easing
                            );
                            return c.tweens.push(i), i;
                        },
                        stop: function(e) {
                            var n = 0,
                                i = e ? c.tweens.length : 0;
                            if (r) return this;
                            for (r = !0; n < i; n++) c.tweens[n].run(1);
                            return (
                                e
                                    ? (a.notifyWith(t, [c, 1, 0]),
                                      a.resolveWith(t, [c, e]))
                                    : a.rejectWith(t, [c, e]),
                                this
                            );
                        }
                    }),
                    u = c.props;
                for (
                    !(function(t, e) {
                        var n, i, r, s, o;
                        for (n in t)
                            if (
                                ((r = e[(i = Y(n))]),
                                (s = t[n]),
                                Array.isArray(s) &&
                                    ((r = s[1]), (s = t[n] = s[0])),
                                n !== i && ((t[i] = s), delete t[n]),
                                (o = C.cssHooks[i]) && ("expand" in o))
                            )
                                for (n in ((s = o.expand(s)), delete t[i], s))
                                    (n in t) || ((t[n] = s[n]), (e[n] = r));
                            else e[i] = r;
                    })(u, c.opts.specialEasing);
                    s < o;
                    s++
                )
                    if ((i = ge.prefilters[s].call(c, t, u, c.opts)))
                        return (
                            y(i.stop) &&
                                (C._queueHooks(
                                    c.elem,
                                    c.opts.queue
                                ).stop = i.stop.bind(i)),
                            i
                        );
                return (
                    C.map(u, fe, c),
                    y(c.opts.start) && c.opts.start.call(t, c),
                    c
                        .progress(c.opts.progress)
                        .done(c.opts.done, c.opts.complete)
                        .fail(c.opts.fail)
                        .always(c.opts.always),
                    C.fx.timer(
                        C.extend(l, { elem: t, anim: c, queue: c.opts.queue })
                    ),
                    c
                );
            }
            (C.Animation = C.extend(ge, {
                tweeners: {
                    "*": [
                        function(t, e) {
                            var n = this.createTween(t, e);
                            return ht(n.elem, t, rt.exec(e), n), n;
                        }
                    ]
                },
                tweener: function(t, e) {
                    y(t) ? ((e = t), (t = ["*"])) : (t = t.match(P));
                    for (var n, i = 0, r = t.length; i < r; i++)
                        (n = t[i]),
                            (ge.tweeners[n] = ge.tweeners[n] || []),
                            ge.tweeners[n].unshift(e);
                },
                prefilters: [
                    function(t, e, n) {
                        var i,
                            r,
                            s,
                            o,
                            a,
                            l,
                            c,
                            u,
                            h = "width" in e || "height" in e,
                            d = this,
                            p = {},
                            f = t.style,
                            g = t.nodeType && ct(t),
                            m = K.get(t, "fxshow");
                        for (i in (n.queue ||
                            (null == (o = C._queueHooks(t, "fx")).unqueued &&
                                ((o.unqueued = 0),
                                (a = o.empty.fire),
                                (o.empty.fire = function() {
                                    o.unqueued || a();
                                })),
                            o.unqueued++,
                            d.always(function() {
                                d.always(function() {
                                    o.unqueued--,
                                        C.queue(t, "fx").length ||
                                            o.empty.fire();
                                });
                            })),
                        e))
                            if (((r = e[i]), ce.test(r))) {
                                if (
                                    (delete e[i],
                                    (s = s || "toggle" === r),
                                    r === (g ? "hide" : "show"))
                                ) {
                                    if ("show" !== r || !m || void 0 === m[i])
                                        continue;
                                    g = !0;
                                }
                                p[i] = (m && m[i]) || C.style(t, i);
                            }
                        if ((l = !C.isEmptyObject(e)) || !C.isEmptyObject(p))
                            for (i in (h &&
                                1 === t.nodeType &&
                                ((n.overflow = [
                                    f.overflow,
                                    f.overflowX,
                                    f.overflowY
                                ]),
                                null == (c = m && m.display) &&
                                    (c = K.get(t, "display")),
                                "none" === (u = C.css(t, "display")) &&
                                    (c
                                        ? (u = c)
                                        : (ft([t], !0),
                                          (c = t.style.display || c),
                                          (u = C.css(t, "display")),
                                          ft([t]))),
                                ("inline" === u ||
                                    ("inline-block" === u && null != c)) &&
                                    "none" === C.css(t, "float") &&
                                    (l ||
                                        (d.done(function() {
                                            f.display = c;
                                        }),
                                        null == c &&
                                            ((u = f.display),
                                            (c = "none" === u ? "" : u))),
                                    (f.display = "inline-block"))),
                            n.overflow &&
                                ((f.overflow = "hidden"),
                                d.always(function() {
                                    (f.overflow = n.overflow[0]),
                                        (f.overflowX = n.overflow[1]),
                                        (f.overflowY = n.overflow[2]);
                                })),
                            (l = !1),
                            p))
                                l ||
                                    (m
                                        ? "hidden" in m && (g = m.hidden)
                                        : (m = K.access(t, "fxshow", {
                                              display: c
                                          })),
                                    s && (m.hidden = !g),
                                    g && ft([t], !0),
                                    d.done(function() {
                                        for (i in (g || ft([t]),
                                        K.remove(t, "fxshow"),
                                        p))
                                            C.style(t, i, p[i]);
                                    })),
                                    (l = fe(g ? m[i] : 0, i, d)),
                                    i in m ||
                                        ((m[i] = l.start),
                                        g &&
                                            ((l.end = l.start), (l.start = 0)));
                    }
                ],
                prefilter: function(t, e) {
                    e ? ge.prefilters.unshift(t) : ge.prefilters.push(t);
                }
            })),
                (C.speed = function(t, e, n) {
                    var i =
                        t && "object" == typeof t
                            ? C.extend({}, t)
                            : {
                                  complete: n || (!n && e) || (y(t) && t),
                                  duration: t,
                                  easing: (n && e) || (e && !y(e) && e)
                              };
                    return (
                        C.fx.off
                            ? (i.duration = 0)
                            : "number" != typeof i.duration &&
                              (i.duration in C.fx.speeds
                                  ? (i.duration = C.fx.speeds[i.duration])
                                  : (i.duration = C.fx.speeds._default)),
                        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                        (i.old = i.complete),
                        (i.complete = function() {
                            y(i.old) && i.old.call(this),
                                i.queue && C.dequeue(this, i.queue);
                        }),
                        i
                    );
                }),
                C.fn.extend({
                    fadeTo: function(t, e, n, i) {
                        return this.filter(ct)
                            .css("opacity", 0)
                            .show()
                            .end()
                            .animate({ opacity: e }, t, n, i);
                    },
                    animate: function(t, e, n, i) {
                        var r = C.isEmptyObject(t),
                            s = C.speed(e, n, i),
                            o = function() {
                                var e = ge(this, C.extend({}, t), s);
                                (r || K.get(this, "finish")) && e.stop(!0);
                            };
                        return (
                            (o.finish = o),
                            r || !1 === s.queue
                                ? this.each(o)
                                : this.queue(s.queue, o)
                        );
                    },
                    stop: function(t, e, n) {
                        var i = function(t) {
                            var e = t.stop;
                            delete t.stop, e(n);
                        };
                        return (
                            "string" != typeof t &&
                                ((n = e), (e = t), (t = void 0)),
                            e && !1 !== t && this.queue(t || "fx", []),
                            this.each(function() {
                                var e = !0,
                                    r = null != t && t + "queueHooks",
                                    s = C.timers,
                                    o = K.get(this);
                                if (r) o[r] && o[r].stop && i(o[r]);
                                else
                                    for (r in o)
                                        o[r] &&
                                            o[r].stop &&
                                            ue.test(r) &&
                                            i(o[r]);
                                for (r = s.length; r--; )
                                    s[r].elem !== this ||
                                        (null != t && s[r].queue !== t) ||
                                        (s[r].anim.stop(n),
                                        (e = !1),
                                        s.splice(r, 1));
                                (!e && n) || C.dequeue(this, t);
                            })
                        );
                    },
                    finish: function(t) {
                        return (
                            !1 !== t && (t = t || "fx"),
                            this.each(function() {
                                var e,
                                    n = K.get(this),
                                    i = n[t + "queue"],
                                    r = n[t + "queueHooks"],
                                    s = C.timers,
                                    o = i ? i.length : 0;
                                for (
                                    n.finish = !0,
                                        C.queue(this, t, []),
                                        r && r.stop && r.stop.call(this, !0),
                                        e = s.length;
                                    e--;

                                )
                                    s[e].elem === this &&
                                        s[e].queue === t &&
                                        (s[e].anim.stop(!0), s.splice(e, 1));
                                for (e = 0; e < o; e++)
                                    i[e] &&
                                        i[e].finish &&
                                        i[e].finish.call(this);
                                delete n.finish;
                            })
                        );
                    }
                }),
                C.each(["toggle", "show", "hide"], function(t, e) {
                    var n = C.fn[e];
                    C.fn[e] = function(t, i, r) {
                        return null == t || "boolean" == typeof t
                            ? n.apply(this, arguments)
                            : this.animate(pe(e, !0), t, i, r);
                    };
                }),
                C.each(
                    {
                        slideDown: pe("show"),
                        slideUp: pe("hide"),
                        slideToggle: pe("toggle"),
                        fadeIn: { opacity: "show" },
                        fadeOut: { opacity: "hide" },
                        fadeToggle: { opacity: "toggle" }
                    },
                    function(t, e) {
                        C.fn[t] = function(t, n, i) {
                            return this.animate(e, t, n, i);
                        };
                    }
                ),
                (C.timers = []),
                (C.fx.tick = function() {
                    var t,
                        e = 0,
                        n = C.timers;
                    for (ae = Date.now(); e < n.length; e++)
                        (t = n[e])() || n[e] !== t || n.splice(e--, 1);
                    n.length || C.fx.stop(), (ae = void 0);
                }),
                (C.fx.timer = function(t) {
                    C.timers.push(t), C.fx.start();
                }),
                (C.fx.interval = 13),
                (C.fx.start = function() {
                    le || ((le = !0), he());
                }),
                (C.fx.stop = function() {
                    le = null;
                }),
                (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                (C.fn.delay = function(t, e) {
                    return (
                        (t = (C.fx && C.fx.speeds[t]) || t),
                        (e = e || "fx"),
                        this.queue(e, function(e, i) {
                            var r = n.setTimeout(e, t);
                            i.stop = function() {
                                n.clearTimeout(r);
                            };
                        })
                    );
                }),
                (function() {
                    var t = o.createElement("input"),
                        e = o
                            .createElement("select")
                            .appendChild(o.createElement("option"));
                    (t.type = "checkbox"),
                        (v.checkOn = "" !== t.value),
                        (v.optSelected = e.selected),
                        ((t = o.createElement("input")).value = "t"),
                        (t.type = "radio"),
                        (v.radioValue = "t" === t.value);
                })();
            var me,
                ve = C.expr.attrHandle;
            C.fn.extend({
                attr: function(t, e) {
                    return U(this, C.attr, t, e, arguments.length > 1);
                },
                removeAttr: function(t) {
                    return this.each(function() {
                        C.removeAttr(this, t);
                    });
                }
            }),
                C.extend({
                    attr: function(t, e, n) {
                        var i,
                            r,
                            s = t.nodeType;
                        if (3 !== s && 8 !== s && 2 !== s)
                            return void 0 === t.getAttribute
                                ? C.prop(t, e, n)
                                : ((1 === s && C.isXMLDoc(t)) ||
                                      (r =
                                          C.attrHooks[e.toLowerCase()] ||
                                          (C.expr.match.bool.test(e)
                                              ? me
                                              : void 0)),
                                  void 0 !== n
                                      ? null === n
                                          ? void C.removeAttr(t, e)
                                          : r &&
                                            "set" in r &&
                                            void 0 !== (i = r.set(t, n, e))
                                          ? i
                                          : (t.setAttribute(e, n + ""), n)
                                      : r &&
                                        "get" in r &&
                                        null !== (i = r.get(t, e))
                                      ? i
                                      : null == (i = C.find.attr(t, e))
                                      ? void 0
                                      : i);
                    },
                    attrHooks: {
                        type: {
                            set: function(t, e) {
                                if (
                                    !v.radioValue &&
                                    "radio" === e &&
                                    j(t, "input")
                                ) {
                                    var n = t.value;
                                    return (
                                        t.setAttribute("type", e),
                                        n && (t.value = n),
                                        e
                                    );
                                }
                            }
                        }
                    },
                    removeAttr: function(t, e) {
                        var n,
                            i = 0,
                            r = e && e.match(P);
                        if (r && 1 === t.nodeType)
                            for (; (n = r[i++]); ) t.removeAttribute(n);
                    }
                }),
                (me = {
                    set: function(t, e, n) {
                        return (
                            !1 === e
                                ? C.removeAttr(t, n)
                                : t.setAttribute(n, n),
                            n
                        );
                    }
                }),
                C.each(C.expr.match.bool.source.match(/\w+/g), function(t, e) {
                    var n = ve[e] || C.find.attr;
                    ve[e] = function(t, e, i) {
                        var r,
                            s,
                            o = e.toLowerCase();
                        return (
                            i ||
                                ((s = ve[o]),
                                (ve[o] = r),
                                (r = null != n(t, e, i) ? o : null),
                                (ve[o] = s)),
                            r
                        );
                    };
                });
            var ye = /^(?:input|select|textarea|button)$/i,
                we = /^(?:a|area)$/i;
            function xe(t) {
                return (t.match(P) || []).join(" ");
            }
            function _e(t) {
                return (t.getAttribute && t.getAttribute("class")) || "";
            }
            function be(t) {
                return Array.isArray(t)
                    ? t
                    : ("string" == typeof t && t.match(P)) || [];
            }
            C.fn.extend({
                prop: function(t, e) {
                    return U(this, C.prop, t, e, arguments.length > 1);
                },
                removeProp: function(t) {
                    return this.each(function() {
                        delete this[C.propFix[t] || t];
                    });
                }
            }),
                C.extend({
                    prop: function(t, e, n) {
                        var i,
                            r,
                            s = t.nodeType;
                        if (3 !== s && 8 !== s && 2 !== s)
                            return (
                                (1 === s && C.isXMLDoc(t)) ||
                                    ((e = C.propFix[e] || e),
                                    (r = C.propHooks[e])),
                                void 0 !== n
                                    ? r &&
                                      "set" in r &&
                                      void 0 !== (i = r.set(t, n, e))
                                        ? i
                                        : (t[e] = n)
                                    : r &&
                                      "get" in r &&
                                      null !== (i = r.get(t, e))
                                    ? i
                                    : t[e]
                            );
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(t) {
                                var e = C.find.attr(t, "tabindex");
                                return e
                                    ? parseInt(e, 10)
                                    : ye.test(t.nodeName) ||
                                      (we.test(t.nodeName) && t.href)
                                    ? 0
                                    : -1;
                            }
                        }
                    },
                    propFix: { for: "htmlFor", class: "className" }
                }),
                v.optSelected ||
                    (C.propHooks.selected = {
                        get: function(t) {
                            var e = t.parentNode;
                            return (
                                e && e.parentNode && e.parentNode.selectedIndex,
                                null
                            );
                        },
                        set: function(t) {
                            var e = t.parentNode;
                            e &&
                                (e.selectedIndex,
                                e.parentNode && e.parentNode.selectedIndex);
                        }
                    }),
                C.each(
                    [
                        "tabIndex",
                        "readOnly",
                        "maxLength",
                        "cellSpacing",
                        "cellPadding",
                        "rowSpan",
                        "colSpan",
                        "useMap",
                        "frameBorder",
                        "contentEditable"
                    ],
                    function() {
                        C.propFix[this.toLowerCase()] = this;
                    }
                ),
                C.fn.extend({
                    addClass: function(t) {
                        var e,
                            n,
                            i,
                            r,
                            s,
                            o,
                            a,
                            l = 0;
                        if (y(t))
                            return this.each(function(e) {
                                C(this).addClass(t.call(this, e, _e(this)));
                            });
                        if ((e = be(t)).length)
                            for (; (n = this[l++]); )
                                if (
                                    ((r = _e(n)),
                                    (i = 1 === n.nodeType && " " + xe(r) + " "))
                                ) {
                                    for (o = 0; (s = e[o++]); )
                                        i.indexOf(" " + s + " ") < 0 &&
                                            (i += s + " ");
                                    r !== (a = xe(i)) &&
                                        n.setAttribute("class", a);
                                }
                        return this;
                    },
                    removeClass: function(t) {
                        var e,
                            n,
                            i,
                            r,
                            s,
                            o,
                            a,
                            l = 0;
                        if (y(t))
                            return this.each(function(e) {
                                C(this).removeClass(t.call(this, e, _e(this)));
                            });
                        if (!arguments.length) return this.attr("class", "");
                        if ((e = be(t)).length)
                            for (; (n = this[l++]); )
                                if (
                                    ((r = _e(n)),
                                    (i = 1 === n.nodeType && " " + xe(r) + " "))
                                ) {
                                    for (o = 0; (s = e[o++]); )
                                        for (; i.indexOf(" " + s + " ") > -1; )
                                            i = i.replace(" " + s + " ", " ");
                                    r !== (a = xe(i)) &&
                                        n.setAttribute("class", a);
                                }
                        return this;
                    },
                    toggleClass: function(t, e) {
                        var n = typeof t,
                            i = "string" === n || Array.isArray(t);
                        return "boolean" == typeof e && i
                            ? e
                                ? this.addClass(t)
                                : this.removeClass(t)
                            : y(t)
                            ? this.each(function(n) {
                                  C(this).toggleClass(
                                      t.call(this, n, _e(this), e),
                                      e
                                  );
                              })
                            : this.each(function() {
                                  var e, r, s, o;
                                  if (i)
                                      for (
                                          r = 0, s = C(this), o = be(t);
                                          (e = o[r++]);

                                      )
                                          s.hasClass(e)
                                              ? s.removeClass(e)
                                              : s.addClass(e);
                                  else
                                      (void 0 !== t && "boolean" !== n) ||
                                          ((e = _e(this)) &&
                                              K.set(this, "__className__", e),
                                          this.setAttribute &&
                                              this.setAttribute(
                                                  "class",
                                                  e || !1 === t
                                                      ? ""
                                                      : K.get(
                                                            this,
                                                            "__className__"
                                                        ) || ""
                                              ));
                              });
                    },
                    hasClass: function(t) {
                        var e,
                            n,
                            i = 0;
                        for (e = " " + t + " "; (n = this[i++]); )
                            if (
                                1 === n.nodeType &&
                                (" " + xe(_e(n)) + " ").indexOf(e) > -1
                            )
                                return !0;
                        return !1;
                    }
                });
            var Ce = /\r/g;
            C.fn.extend({
                val: function(t) {
                    var e,
                        n,
                        i,
                        r = this[0];
                    return arguments.length
                        ? ((i = y(t)),
                          this.each(function(n) {
                              var r;
                              1 === this.nodeType &&
                                  (null ==
                                  (r = i ? t.call(this, n, C(this).val()) : t)
                                      ? (r = "")
                                      : "number" == typeof r
                                      ? (r += "")
                                      : Array.isArray(r) &&
                                        (r = C.map(r, function(t) {
                                            return null == t ? "" : t + "";
                                        })),
                                  ((e =
                                      C.valHooks[this.type] ||
                                      C.valHooks[
                                          this.nodeName.toLowerCase()
                                      ]) &&
                                      "set" in e &&
                                      void 0 !== e.set(this, r, "value")) ||
                                      (this.value = r));
                          }))
                        : r
                        ? (e =
                              C.valHooks[r.type] ||
                              C.valHooks[r.nodeName.toLowerCase()]) &&
                          "get" in e &&
                          void 0 !== (n = e.get(r, "value"))
                            ? n
                            : "string" == typeof (n = r.value)
                            ? n.replace(Ce, "")
                            : null == n
                            ? ""
                            : n
                        : void 0;
                }
            }),
                C.extend({
                    valHooks: {
                        option: {
                            get: function(t) {
                                var e = C.find.attr(t, "value");
                                return null != e ? e : xe(C.text(t));
                            }
                        },
                        select: {
                            get: function(t) {
                                var e,
                                    n,
                                    i,
                                    r = t.options,
                                    s = t.selectedIndex,
                                    o = "select-one" === t.type,
                                    a = o ? null : [],
                                    l = o ? s + 1 : r.length;
                                for (i = s < 0 ? l : o ? s : 0; i < l; i++)
                                    if (
                                        ((n = r[i]).selected || i === s) &&
                                        !n.disabled &&
                                        (!n.parentNode.disabled ||
                                            !j(n.parentNode, "optgroup"))
                                    ) {
                                        if (((e = C(n).val()), o)) return e;
                                        a.push(e);
                                    }
                                return a;
                            },
                            set: function(t, e) {
                                for (
                                    var n,
                                        i,
                                        r = t.options,
                                        s = C.makeArray(e),
                                        o = r.length;
                                    o--;

                                )
                                    ((i = r[o]).selected =
                                        C.inArray(C.valHooks.option.get(i), s) >
                                        -1) && (n = !0);
                                return n || (t.selectedIndex = -1), s;
                            }
                        }
                    }
                }),
                C.each(["radio", "checkbox"], function() {
                    (C.valHooks[this] = {
                        set: function(t, e) {
                            if (Array.isArray(e))
                                return (t.checked =
                                    C.inArray(C(t).val(), e) > -1);
                        }
                    }),
                        v.checkOn ||
                            (C.valHooks[this].get = function(t) {
                                return null === t.getAttribute("value")
                                    ? "on"
                                    : t.value;
                            });
                }),
                (v.focusin = "onfocusin" in n);
            var Te = /^(?:focusinfocus|focusoutblur)$/,
                Ee = function(t) {
                    t.stopPropagation();
                };
            C.extend(C.event, {
                trigger: function(t, e, i, r) {
                    var s,
                        a,
                        l,
                        c,
                        u,
                        h,
                        d,
                        p,
                        g = [i || o],
                        m = f.call(t, "type") ? t.type : t,
                        v = f.call(t, "namespace")
                            ? t.namespace.split(".")
                            : [];
                    if (
                        ((a = p = l = i = i || o),
                        3 !== i.nodeType &&
                            8 !== i.nodeType &&
                            !Te.test(m + C.event.triggered) &&
                            (m.indexOf(".") > -1 &&
                                ((v = m.split(".")), (m = v.shift()), v.sort()),
                            (u = m.indexOf(":") < 0 && "on" + m),
                            ((t = t[C.expando]
                                ? t
                                : new C.Event(
                                      m,
                                      "object" == typeof t && t
                                  )).isTrigger = r ? 2 : 3),
                            (t.namespace = v.join(".")),
                            (t.rnamespace = t.namespace
                                ? new RegExp(
                                      "(^|\\.)" +
                                          v.join("\\.(?:.*\\.|)") +
                                          "(\\.|$)"
                                  )
                                : null),
                            (t.result = void 0),
                            t.target || (t.target = i),
                            (e = null == e ? [t] : C.makeArray(e, [t])),
                            (d = C.event.special[m] || {}),
                            r || !d.trigger || !1 !== d.trigger.apply(i, e)))
                    ) {
                        if (!r && !d.noBubble && !w(i)) {
                            for (
                                c = d.delegateType || m,
                                    Te.test(c + m) || (a = a.parentNode);
                                a;
                                a = a.parentNode
                            )
                                g.push(a), (l = a);
                            l === (i.ownerDocument || o) &&
                                g.push(l.defaultView || l.parentWindow || n);
                        }
                        for (s = 0; (a = g[s++]) && !t.isPropagationStopped(); )
                            (p = a),
                                (t.type = s > 1 ? c : d.bindType || m),
                                (h =
                                    (K.get(a, "events") || {})[t.type] &&
                                    K.get(a, "handle")) && h.apply(a, e),
                                (h = u && a[u]) &&
                                    h.apply &&
                                    Z(a) &&
                                    ((t.result = h.apply(a, e)),
                                    !1 === t.result && t.preventDefault());
                        return (
                            (t.type = m),
                            r ||
                                t.isDefaultPrevented() ||
                                (d._default &&
                                    !1 !== d._default.apply(g.pop(), e)) ||
                                !Z(i) ||
                                (u &&
                                    y(i[m]) &&
                                    !w(i) &&
                                    ((l = i[u]) && (i[u] = null),
                                    (C.event.triggered = m),
                                    t.isPropagationStopped() &&
                                        p.addEventListener(m, Ee),
                                    i[m](),
                                    t.isPropagationStopped() &&
                                        p.removeEventListener(m, Ee),
                                    (C.event.triggered = void 0),
                                    l && (i[u] = l))),
                            t.result
                        );
                    }
                },
                simulate: function(t, e, n) {
                    var i = C.extend(new C.Event(), n, {
                        type: t,
                        isSimulated: !0
                    });
                    C.event.trigger(i, null, e);
                }
            }),
                C.fn.extend({
                    trigger: function(t, e) {
                        return this.each(function() {
                            C.event.trigger(t, e, this);
                        });
                    },
                    triggerHandler: function(t, e) {
                        var n = this[0];
                        if (n) return C.event.trigger(t, e, n, !0);
                    }
                }),
                v.focusin ||
                    C.each({ focus: "focusin", blur: "focusout" }, function(
                        t,
                        e
                    ) {
                        var n = function(t) {
                            C.event.simulate(e, t.target, C.event.fix(t));
                        };
                        C.event.special[e] = {
                            setup: function() {
                                var i = this.ownerDocument || this,
                                    r = K.access(i, e);
                                r || i.addEventListener(t, n, !0),
                                    K.access(i, e, (r || 0) + 1);
                            },
                            teardown: function() {
                                var i = this.ownerDocument || this,
                                    r = K.access(i, e) - 1;
                                r
                                    ? K.access(i, e, r)
                                    : (i.removeEventListener(t, n, !0),
                                      K.remove(i, e));
                            }
                        };
                    });
            var ke = n.location,
                Se = Date.now(),
                De = /\?/;
            C.parseXML = function(t) {
                var e;
                if (!t || "string" != typeof t) return null;
                try {
                    e = new n.DOMParser().parseFromString(t, "text/xml");
                } catch (t) {
                    e = void 0;
                }
                return (
                    (e && !e.getElementsByTagName("parsererror").length) ||
                        C.error("Invalid XML: " + t),
                    e
                );
            };
            var Ae = /\[\]$/,
                je = /\r?\n/g,
                Ne = /^(?:submit|button|image|reset|file)$/i,
                $e = /^(?:input|select|textarea|keygen)/i;
            function Le(t, e, n, i) {
                var r;
                if (Array.isArray(e))
                    C.each(e, function(e, r) {
                        n || Ae.test(t)
                            ? i(t, r)
                            : Le(
                                  t +
                                      "[" +
                                      ("object" == typeof r && null != r
                                          ? e
                                          : "") +
                                      "]",
                                  r,
                                  n,
                                  i
                              );
                    });
                else if (n || "object" !== b(e)) i(t, e);
                else for (r in e) Le(t + "[" + r + "]", e[r], n, i);
            }
            (C.param = function(t, e) {
                var n,
                    i = [],
                    r = function(t, e) {
                        var n = y(e) ? e() : e;
                        i[i.length] =
                            encodeURIComponent(t) +
                            "=" +
                            encodeURIComponent(null == n ? "" : n);
                    };
                if (null == t) return "";
                if (Array.isArray(t) || (t.jquery && !C.isPlainObject(t)))
                    C.each(t, function() {
                        r(this.name, this.value);
                    });
                else for (n in t) Le(n, t[n], e, r);
                return i.join("&");
            }),
                C.fn.extend({
                    serialize: function() {
                        return C.param(this.serializeArray());
                    },
                    serializeArray: function() {
                        return this.map(function() {
                            var t = C.prop(this, "elements");
                            return t ? C.makeArray(t) : this;
                        })
                            .filter(function() {
                                var t = this.type;
                                return (
                                    this.name &&
                                    !C(this).is(":disabled") &&
                                    $e.test(this.nodeName) &&
                                    !Ne.test(t) &&
                                    (this.checked || !gt.test(t))
                                );
                            })
                            .map(function(t, e) {
                                var n = C(this).val();
                                return null == n
                                    ? null
                                    : Array.isArray(n)
                                    ? C.map(n, function(t) {
                                          return {
                                              name: e.name,
                                              value: t.replace(je, "\r\n")
                                          };
                                      })
                                    : {
                                          name: e.name,
                                          value: n.replace(je, "\r\n")
                                      };
                            })
                            .get();
                    }
                });
            var Oe = /%20/g,
                ze = /#.*$/,
                Me = /([?&])_=[^&]*/,
                He = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Pe = /^(?:GET|HEAD)$/,
                qe = /^\/\//,
                Ie = {},
                Re = {},
                We = "*/".concat("*"),
                Be = o.createElement("a");
            function Fe(t) {
                return function(e, n) {
                    "string" != typeof e && ((n = e), (e = "*"));
                    var i,
                        r = 0,
                        s = e.toLowerCase().match(P) || [];
                    if (y(n))
                        for (; (i = s[r++]); )
                            "+" === i[0]
                                ? ((i = i.slice(1) || "*"),
                                  (t[i] = t[i] || []).unshift(n))
                                : (t[i] = t[i] || []).push(n);
                };
            }
            function Ue(t, e, n, i) {
                var r = {},
                    s = t === Re;
                function o(a) {
                    var l;
                    return (
                        (r[a] = !0),
                        C.each(t[a] || [], function(t, a) {
                            var c = a(e, n, i);
                            return "string" != typeof c || s || r[c]
                                ? s
                                    ? !(l = c)
                                    : void 0
                                : (e.dataTypes.unshift(c), o(c), !1);
                        }),
                        l
                    );
                }
                return o(e.dataTypes[0]) || (!r["*"] && o("*"));
            }
            function Ve(t, e) {
                var n,
                    i,
                    r = C.ajaxSettings.flatOptions || {};
                for (n in e)
                    void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
                return i && C.extend(!0, t, i), t;
            }
            (Be.href = ke.href),
                C.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: ke.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                            ke.protocol
                        ),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType:
                            "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": We,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": C.parseXML
                        },
                        flatOptions: { url: !0, context: !0 }
                    },
                    ajaxSetup: function(t, e) {
                        return e
                            ? Ve(Ve(t, C.ajaxSettings), e)
                            : Ve(C.ajaxSettings, t);
                    },
                    ajaxPrefilter: Fe(Ie),
                    ajaxTransport: Fe(Re),
                    ajax: function(t, e) {
                        "object" == typeof t && ((e = t), (t = void 0)),
                            (e = e || {});
                        var i,
                            r,
                            s,
                            a,
                            l,
                            c,
                            u,
                            h,
                            d,
                            p,
                            f = C.ajaxSetup({}, e),
                            g = f.context || f,
                            m =
                                f.context && (g.nodeType || g.jquery)
                                    ? C(g)
                                    : C.event,
                            v = C.Deferred(),
                            y = C.Callbacks("once memory"),
                            w = f.statusCode || {},
                            x = {},
                            _ = {},
                            b = "canceled",
                            T = {
                                readyState: 0,
                                getResponseHeader: function(t) {
                                    var e;
                                    if (u) {
                                        if (!a)
                                            for (a = {}; (e = He.exec(s)); )
                                                a[e[1].toLowerCase() + " "] = (
                                                    a[
                                                        e[1].toLowerCase() + " "
                                                    ] || []
                                                ).concat(e[2]);
                                        e = a[t.toLowerCase() + " "];
                                    }
                                    return null == e ? null : e.join(", ");
                                },
                                getAllResponseHeaders: function() {
                                    return u ? s : null;
                                },
                                setRequestHeader: function(t, e) {
                                    return (
                                        null == u &&
                                            ((t = _[t.toLowerCase()] =
                                                _[t.toLowerCase()] || t),
                                            (x[t] = e)),
                                        this
                                    );
                                },
                                overrideMimeType: function(t) {
                                    return null == u && (f.mimeType = t), this;
                                },
                                statusCode: function(t) {
                                    var e;
                                    if (t)
                                        if (u) T.always(t[T.status]);
                                        else for (e in t) w[e] = [w[e], t[e]];
                                    return this;
                                },
                                abort: function(t) {
                                    var e = t || b;
                                    return i && i.abort(e), E(0, e), this;
                                }
                            };
                        if (
                            (v.promise(T),
                            (f.url = ((t || f.url || ke.href) + "").replace(
                                qe,
                                ke.protocol + "//"
                            )),
                            (f.type = e.method || e.type || f.method || f.type),
                            (f.dataTypes = (f.dataType || "*")
                                .toLowerCase()
                                .match(P) || [""]),
                            null == f.crossDomain)
                        ) {
                            c = o.createElement("a");
                            try {
                                (c.href = f.url),
                                    (c.href = c.href),
                                    (f.crossDomain =
                                        Be.protocol + "//" + Be.host !=
                                        c.protocol + "//" + c.host);
                            } catch (t) {
                                f.crossDomain = !0;
                            }
                        }
                        if (
                            (f.data &&
                                f.processData &&
                                "string" != typeof f.data &&
                                (f.data = C.param(f.data, f.traditional)),
                            Ue(Ie, f, e, T),
                            u)
                        )
                            return T;
                        for (d in ((h = C.event && f.global) &&
                            0 == C.active++ &&
                            C.event.trigger("ajaxStart"),
                        (f.type = f.type.toUpperCase()),
                        (f.hasContent = !Pe.test(f.type)),
                        (r = f.url.replace(ze, "")),
                        f.hasContent
                            ? f.data &&
                              f.processData &&
                              0 ===
                                  (f.contentType || "").indexOf(
                                      "application/x-www-form-urlencoded"
                                  ) &&
                              (f.data = f.data.replace(Oe, "+"))
                            : ((p = f.url.slice(r.length)),
                              f.data &&
                                  (f.processData ||
                                      "string" == typeof f.data) &&
                                  ((r += (De.test(r) ? "&" : "?") + f.data),
                                  delete f.data),
                              !1 === f.cache &&
                                  ((r = r.replace(Me, "$1")),
                                  (p =
                                      (De.test(r) ? "&" : "?") +
                                      "_=" +
                                      Se++ +
                                      p)),
                              (f.url = r + p)),
                        f.ifModified &&
                            (C.lastModified[r] &&
                                T.setRequestHeader(
                                    "If-Modified-Since",
                                    C.lastModified[r]
                                ),
                            C.etag[r] &&
                                T.setRequestHeader("If-None-Match", C.etag[r])),
                        ((f.data && f.hasContent && !1 !== f.contentType) ||
                            e.contentType) &&
                            T.setRequestHeader("Content-Type", f.contentType),
                        T.setRequestHeader(
                            "Accept",
                            f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                                ? f.accepts[f.dataTypes[0]] +
                                      ("*" !== f.dataTypes[0]
                                          ? ", " + We + "; q=0.01"
                                          : "")
                                : f.accepts["*"]
                        ),
                        f.headers))
                            T.setRequestHeader(d, f.headers[d]);
                        if (
                            f.beforeSend &&
                            (!1 === f.beforeSend.call(g, T, f) || u)
                        )
                            return T.abort();
                        if (
                            ((b = "abort"),
                            y.add(f.complete),
                            T.done(f.success),
                            T.fail(f.error),
                            (i = Ue(Re, f, e, T)))
                        ) {
                            if (
                                ((T.readyState = 1),
                                h && m.trigger("ajaxSend", [T, f]),
                                u)
                            )
                                return T;
                            f.async &&
                                f.timeout > 0 &&
                                (l = n.setTimeout(function() {
                                    T.abort("timeout");
                                }, f.timeout));
                            try {
                                (u = !1), i.send(x, E);
                            } catch (t) {
                                if (u) throw t;
                                E(-1, t);
                            }
                        } else E(-1, "No Transport");
                        function E(t, e, o, a) {
                            var c,
                                d,
                                p,
                                x,
                                _,
                                b = e;
                            u ||
                                ((u = !0),
                                l && n.clearTimeout(l),
                                (i = void 0),
                                (s = a || ""),
                                (T.readyState = t > 0 ? 4 : 0),
                                (c = (t >= 200 && t < 300) || 304 === t),
                                o &&
                                    (x = (function(t, e, n) {
                                        for (
                                            var i,
                                                r,
                                                s,
                                                o,
                                                a = t.contents,
                                                l = t.dataTypes;
                                            "*" === l[0];

                                        )
                                            l.shift(),
                                                void 0 === i &&
                                                    (i =
                                                        t.mimeType ||
                                                        e.getResponseHeader(
                                                            "Content-Type"
                                                        ));
                                        if (i)
                                            for (r in a)
                                                if (a[r] && a[r].test(i)) {
                                                    l.unshift(r);
                                                    break;
                                                }
                                        if (l[0] in n) s = l[0];
                                        else {
                                            for (r in n) {
                                                if (
                                                    !l[0] ||
                                                    t.converters[r + " " + l[0]]
                                                ) {
                                                    s = r;
                                                    break;
                                                }
                                                o || (o = r);
                                            }
                                            s = s || o;
                                        }
                                        if (s)
                                            return (
                                                s !== l[0] && l.unshift(s), n[s]
                                            );
                                    })(f, T, o)),
                                (x = (function(t, e, n, i) {
                                    var r,
                                        s,
                                        o,
                                        a,
                                        l,
                                        c = {},
                                        u = t.dataTypes.slice();
                                    if (u[1])
                                        for (o in t.converters)
                                            c[o.toLowerCase()] =
                                                t.converters[o];
                                    for (s = u.shift(); s; )
                                        if (
                                            (t.responseFields[s] &&
                                                (n[t.responseFields[s]] = e),
                                            !l &&
                                                i &&
                                                t.dataFilter &&
                                                (e = t.dataFilter(
                                                    e,
                                                    t.dataType
                                                )),
                                            (l = s),
                                            (s = u.shift()))
                                        )
                                            if ("*" === s) s = l;
                                            else if ("*" !== l && l !== s) {
                                                if (
                                                    !(o =
                                                        c[l + " " + s] ||
                                                        c["* " + s])
                                                )
                                                    for (r in c)
                                                        if (
                                                            (a = r.split(
                                                                " "
                                                            ))[1] === s &&
                                                            (o =
                                                                c[
                                                                    l +
                                                                        " " +
                                                                        a[0]
                                                                ] ||
                                                                c["* " + a[0]])
                                                        ) {
                                                            !0 === o
                                                                ? (o = c[r])
                                                                : !0 !== c[r] &&
                                                                  ((s = a[0]),
                                                                  u.unshift(
                                                                      a[1]
                                                                  ));
                                                            break;
                                                        }
                                                if (!0 !== o)
                                                    if (o && t.throws) e = o(e);
                                                    else
                                                        try {
                                                            e = o(e);
                                                        } catch (t) {
                                                            return {
                                                                state:
                                                                    "parsererror",
                                                                error: o
                                                                    ? t
                                                                    : "No conversion from " +
                                                                      l +
                                                                      " to " +
                                                                      s
                                                            };
                                                        }
                                            }
                                    return { state: "success", data: e };
                                })(f, x, T, c)),
                                c
                                    ? (f.ifModified &&
                                          ((_ = T.getResponseHeader(
                                              "Last-Modified"
                                          )) && (C.lastModified[r] = _),
                                          (_ = T.getResponseHeader("etag")) &&
                                              (C.etag[r] = _)),
                                      204 === t || "HEAD" === f.type
                                          ? (b = "nocontent")
                                          : 304 === t
                                          ? (b = "notmodified")
                                          : ((b = x.state),
                                            (d = x.data),
                                            (c = !(p = x.error))))
                                    : ((p = b),
                                      (!t && b) ||
                                          ((b = "error"), t < 0 && (t = 0))),
                                (T.status = t),
                                (T.statusText = (e || b) + ""),
                                c
                                    ? v.resolveWith(g, [d, b, T])
                                    : v.rejectWith(g, [T, b, p]),
                                T.statusCode(w),
                                (w = void 0),
                                h &&
                                    m.trigger(c ? "ajaxSuccess" : "ajaxError", [
                                        T,
                                        f,
                                        c ? d : p
                                    ]),
                                y.fireWith(g, [T, b]),
                                h &&
                                    (m.trigger("ajaxComplete", [T, f]),
                                    --C.active || C.event.trigger("ajaxStop")));
                        }
                        return T;
                    },
                    getJSON: function(t, e, n) {
                        return C.get(t, e, n, "json");
                    },
                    getScript: function(t, e) {
                        return C.get(t, void 0, e, "script");
                    }
                }),
                C.each(["get", "post"], function(t, e) {
                    C[e] = function(t, n, i, r) {
                        return (
                            y(n) && ((r = r || i), (i = n), (n = void 0)),
                            C.ajax(
                                C.extend(
                                    {
                                        url: t,
                                        type: e,
                                        dataType: r,
                                        data: n,
                                        success: i
                                    },
                                    C.isPlainObject(t) && t
                                )
                            )
                        );
                    };
                }),
                (C._evalUrl = function(t, e) {
                    return C.ajax({
                        url: t,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: { "text script": function() {} },
                        dataFilter: function(t) {
                            C.globalEval(t, e);
                        }
                    });
                }),
                C.fn.extend({
                    wrapAll: function(t) {
                        var e;
                        return (
                            this[0] &&
                                (y(t) && (t = t.call(this[0])),
                                (e = C(t, this[0].ownerDocument)
                                    .eq(0)
                                    .clone(!0)),
                                this[0].parentNode && e.insertBefore(this[0]),
                                e
                                    .map(function() {
                                        for (
                                            var t = this;
                                            t.firstElementChild;

                                        )
                                            t = t.firstElementChild;
                                        return t;
                                    })
                                    .append(this)),
                            this
                        );
                    },
                    wrapInner: function(t) {
                        return y(t)
                            ? this.each(function(e) {
                                  C(this).wrapInner(t.call(this, e));
                              })
                            : this.each(function() {
                                  var e = C(this),
                                      n = e.contents();
                                  n.length ? n.wrapAll(t) : e.append(t);
                              });
                    },
                    wrap: function(t) {
                        var e = y(t);
                        return this.each(function(n) {
                            C(this).wrapAll(e ? t.call(this, n) : t);
                        });
                    },
                    unwrap: function(t) {
                        return (
                            this.parent(t)
                                .not("body")
                                .each(function() {
                                    C(this).replaceWith(this.childNodes);
                                }),
                            this
                        );
                    }
                }),
                (C.expr.pseudos.hidden = function(t) {
                    return !C.expr.pseudos.visible(t);
                }),
                (C.expr.pseudos.visible = function(t) {
                    return !!(
                        t.offsetWidth ||
                        t.offsetHeight ||
                        t.getClientRects().length
                    );
                }),
                (C.ajaxSettings.xhr = function() {
                    try {
                        return new n.XMLHttpRequest();
                    } catch (t) {}
                });
            var Xe = { 0: 200, 1223: 204 },
                Ge = C.ajaxSettings.xhr();
            (v.cors = !!Ge && "withCredentials" in Ge),
                (v.ajax = Ge = !!Ge),
                C.ajaxTransport(function(t) {
                    var e, i;
                    if (v.cors || (Ge && !t.crossDomain))
                        return {
                            send: function(r, s) {
                                var o,
                                    a = t.xhr();
                                if (
                                    (a.open(
                                        t.type,
                                        t.url,
                                        t.async,
                                        t.username,
                                        t.password
                                    ),
                                    t.xhrFields)
                                )
                                    for (o in t.xhrFields)
                                        a[o] = t.xhrFields[o];
                                for (o in (t.mimeType &&
                                    a.overrideMimeType &&
                                    a.overrideMimeType(t.mimeType),
                                t.crossDomain ||
                                    r["X-Requested-With"] ||
                                    (r["X-Requested-With"] = "XMLHttpRequest"),
                                r))
                                    a.setRequestHeader(o, r[o]);
                                (e = function(t) {
                                    return function() {
                                        e &&
                                            ((e = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                                            "abort" === t
                                                ? a.abort()
                                                : "error" === t
                                                ? "number" != typeof a.status
                                                    ? s(0, "error")
                                                    : s(a.status, a.statusText)
                                                : s(
                                                      Xe[a.status] || a.status,
                                                      a.statusText,
                                                      "text" !==
                                                          (a.responseType ||
                                                              "text") ||
                                                          "string" !=
                                                              typeof a.responseText
                                                          ? {
                                                                binary:
                                                                    a.response
                                                            }
                                                          : {
                                                                text:
                                                                    a.responseText
                                                            },
                                                      a.getAllResponseHeaders()
                                                  ));
                                    };
                                }),
                                    (a.onload = e()),
                                    (i = a.onerror = a.ontimeout = e("error")),
                                    void 0 !== a.onabort
                                        ? (a.onabort = i)
                                        : (a.onreadystatechange = function() {
                                              4 === a.readyState &&
                                                  n.setTimeout(function() {
                                                      e && i();
                                                  });
                                          }),
                                    (e = e("abort"));
                                try {
                                    a.send((t.hasContent && t.data) || null);
                                } catch (t) {
                                    if (e) throw t;
                                }
                            },
                            abort: function() {
                                e && e();
                            }
                        };
                }),
                C.ajaxPrefilter(function(t) {
                    t.crossDomain && (t.contents.script = !1);
                }),
                C.ajaxSetup({
                    accepts: {
                        script:
                            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: { script: /\b(?:java|ecma)script\b/ },
                    converters: {
                        "text script": function(t) {
                            return C.globalEval(t), t;
                        }
                    }
                }),
                C.ajaxPrefilter("script", function(t) {
                    void 0 === t.cache && (t.cache = !1),
                        t.crossDomain && (t.type = "GET");
                }),
                C.ajaxTransport("script", function(t) {
                    var e, n;
                    if (t.crossDomain || t.scriptAttrs)
                        return {
                            send: function(i, r) {
                                (e = C("<script>")
                                    .attr(t.scriptAttrs || {})
                                    .prop({
                                        charset: t.scriptCharset,
                                        src: t.url
                                    })
                                    .on(
                                        "load error",
                                        (n = function(t) {
                                            e.remove(),
                                                (n = null),
                                                t &&
                                                    r(
                                                        "error" === t.type
                                                            ? 404
                                                            : 200,
                                                        t.type
                                                    );
                                        })
                                    )),
                                    o.head.appendChild(e[0]);
                            },
                            abort: function() {
                                n && n();
                            }
                        };
                });
            var Ye,
                Ze = [],
                Qe = /(=)\?(?=&|$)|\?\?/;
            C.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var t = Ze.pop() || C.expando + "_" + Se++;
                    return (this[t] = !0), t;
                }
            }),
                C.ajaxPrefilter("json jsonp", function(t, e, i) {
                    var r,
                        s,
                        o,
                        a =
                            !1 !== t.jsonp &&
                            (Qe.test(t.url)
                                ? "url"
                                : "string" == typeof t.data &&
                                  0 ===
                                      (t.contentType || "").indexOf(
                                          "application/x-www-form-urlencoded"
                                      ) &&
                                  Qe.test(t.data) &&
                                  "data");
                    if (a || "jsonp" === t.dataTypes[0])
                        return (
                            (r = t.jsonpCallback = y(t.jsonpCallback)
                                ? t.jsonpCallback()
                                : t.jsonpCallback),
                            a
                                ? (t[a] = t[a].replace(Qe, "$1" + r))
                                : !1 !== t.jsonp &&
                                  (t.url +=
                                      (De.test(t.url) ? "&" : "?") +
                                      t.jsonp +
                                      "=" +
                                      r),
                            (t.converters["script json"] = function() {
                                return (
                                    o || C.error(r + " was not called"), o[0]
                                );
                            }),
                            (t.dataTypes[0] = "json"),
                            (s = n[r]),
                            (n[r] = function() {
                                o = arguments;
                            }),
                            i.always(function() {
                                void 0 === s ? C(n).removeProp(r) : (n[r] = s),
                                    t[r] &&
                                        ((t.jsonpCallback = e.jsonpCallback),
                                        Ze.push(r)),
                                    o && y(s) && s(o[0]),
                                    (o = s = void 0);
                            }),
                            "script"
                        );
                }),
                (v.createHTMLDocument =
                    (((Ye = o.implementation.createHTMLDocument("")
                        .body).innerHTML = "<form></form><form></form>"),
                    2 === Ye.childNodes.length)),
                (C.parseHTML = function(t, e, n) {
                    return "string" != typeof t
                        ? []
                        : ("boolean" == typeof e && ((n = e), (e = !1)),
                          e ||
                              (v.createHTMLDocument
                                  ? (((i = (e = o.implementation.createHTMLDocument(
                                        ""
                                    )).createElement("base")).href =
                                        o.location.href),
                                    e.head.appendChild(i))
                                  : (e = o)),
                          (s = !n && []),
                          (r = N.exec(t))
                              ? [e.createElement(r[1])]
                              : ((r = Tt([t], e, s)),
                                s && s.length && C(s).remove(),
                                C.merge([], r.childNodes)));
                    var i, r, s;
                }),
                (C.fn.load = function(t, e, n) {
                    var i,
                        r,
                        s,
                        o = this,
                        a = t.indexOf(" ");
                    return (
                        a > -1 && ((i = xe(t.slice(a))), (t = t.slice(0, a))),
                        y(e)
                            ? ((n = e), (e = void 0))
                            : e && "object" == typeof e && (r = "POST"),
                        o.length > 0 &&
                            C.ajax({
                                url: t,
                                type: r || "GET",
                                dataType: "html",
                                data: e
                            })
                                .done(function(t) {
                                    (s = arguments),
                                        o.html(
                                            i
                                                ? C("<div>")
                                                      .append(C.parseHTML(t))
                                                      .find(i)
                                                : t
                                        );
                                })
                                .always(
                                    n &&
                                        function(t, e) {
                                            o.each(function() {
                                                n.apply(
                                                    this,
                                                    s || [t.responseText, e, t]
                                                );
                                            });
                                        }
                                ),
                        this
                    );
                }),
                C.each(
                    [
                        "ajaxStart",
                        "ajaxStop",
                        "ajaxComplete",
                        "ajaxError",
                        "ajaxSuccess",
                        "ajaxSend"
                    ],
                    function(t, e) {
                        C.fn[e] = function(t) {
                            return this.on(e, t);
                        };
                    }
                ),
                (C.expr.pseudos.animated = function(t) {
                    return C.grep(C.timers, function(e) {
                        return t === e.elem;
                    }).length;
                }),
                (C.offset = {
                    setOffset: function(t, e, n) {
                        var i,
                            r,
                            s,
                            o,
                            a,
                            l,
                            c = C.css(t, "position"),
                            u = C(t),
                            h = {};
                        "static" === c && (t.style.position = "relative"),
                            (a = u.offset()),
                            (s = C.css(t, "top")),
                            (l = C.css(t, "left")),
                            ("absolute" === c || "fixed" === c) &&
                            (s + l).indexOf("auto") > -1
                                ? ((o = (i = u.position()).top), (r = i.left))
                                : ((o = parseFloat(s) || 0),
                                  (r = parseFloat(l) || 0)),
                            y(e) && (e = e.call(t, n, C.extend({}, a))),
                            null != e.top && (h.top = e.top - a.top + o),
                            null != e.left && (h.left = e.left - a.left + r),
                            "using" in e ? e.using.call(t, h) : u.css(h);
                    }
                }),
                C.fn.extend({
                    offset: function(t) {
                        if (arguments.length)
                            return void 0 === t
                                ? this
                                : this.each(function(e) {
                                      C.offset.setOffset(this, t, e);
                                  });
                        var e,
                            n,
                            i = this[0];
                        return i
                            ? i.getClientRects().length
                                ? ((e = i.getBoundingClientRect()),
                                  (n = i.ownerDocument.defaultView),
                                  {
                                      top: e.top + n.pageYOffset,
                                      left: e.left + n.pageXOffset
                                  })
                                : { top: 0, left: 0 }
                            : void 0;
                    },
                    position: function() {
                        if (this[0]) {
                            var t,
                                e,
                                n,
                                i = this[0],
                                r = { top: 0, left: 0 };
                            if ("fixed" === C.css(i, "position"))
                                e = i.getBoundingClientRect();
                            else {
                                for (
                                    e = this.offset(),
                                        n = i.ownerDocument,
                                        t = i.offsetParent || n.documentElement;
                                    t &&
                                    (t === n.body || t === n.documentElement) &&
                                    "static" === C.css(t, "position");

                                )
                                    t = t.parentNode;
                                t &&
                                    t !== i &&
                                    1 === t.nodeType &&
                                    (((r = C(t).offset()).top += C.css(
                                        t,
                                        "borderTopWidth",
                                        !0
                                    )),
                                    (r.left += C.css(
                                        t,
                                        "borderLeftWidth",
                                        !0
                                    )));
                            }
                            return {
                                top: e.top - r.top - C.css(i, "marginTop", !0),
                                left:
                                    e.left - r.left - C.css(i, "marginLeft", !0)
                            };
                        }
                    },
                    offsetParent: function() {
                        return this.map(function() {
                            for (
                                var t = this.offsetParent;
                                t && "static" === C.css(t, "position");

                            )
                                t = t.offsetParent;
                            return t || ot;
                        });
                    }
                }),
                C.each(
                    { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
                    function(t, e) {
                        var n = "pageYOffset" === e;
                        C.fn[t] = function(i) {
                            return U(
                                this,
                                function(t, i, r) {
                                    var s;
                                    if (
                                        (w(t)
                                            ? (s = t)
                                            : 9 === t.nodeType &&
                                              (s = t.defaultView),
                                        void 0 === r)
                                    )
                                        return s ? s[e] : t[i];
                                    s
                                        ? s.scrollTo(
                                              n ? s.pageXOffset : r,
                                              n ? r : s.pageYOffset
                                          )
                                        : (t[i] = r);
                                },
                                t,
                                i,
                                arguments.length
                            );
                        };
                    }
                ),
                C.each(["top", "left"], function(t, e) {
                    C.cssHooks[e] = Gt(v.pixelPosition, function(t, n) {
                        if (n)
                            return (
                                (n = Xt(t, e)),
                                Ft.test(n) ? C(t).position()[e] + "px" : n
                            );
                    });
                }),
                C.each({ Height: "height", Width: "width" }, function(t, e) {
                    C.each(
                        { padding: "inner" + t, content: e, "": "outer" + t },
                        function(n, i) {
                            C.fn[i] = function(r, s) {
                                var o =
                                        arguments.length &&
                                        (n || "boolean" != typeof r),
                                    a =
                                        n ||
                                        (!0 === r || !0 === s
                                            ? "margin"
                                            : "border");
                                return U(
                                    this,
                                    function(e, n, r) {
                                        var s;
                                        return w(e)
                                            ? 0 === i.indexOf("outer")
                                                ? e["inner" + t]
                                                : e.document.documentElement[
                                                      "client" + t
                                                  ]
                                            : 9 === e.nodeType
                                            ? ((s = e.documentElement),
                                              Math.max(
                                                  e.body["scroll" + t],
                                                  s["scroll" + t],
                                                  e.body["offset" + t],
                                                  s["offset" + t],
                                                  s["client" + t]
                                              ))
                                            : void 0 === r
                                            ? C.css(e, n, a)
                                            : C.style(e, n, r, a);
                                    },
                                    e,
                                    o ? r : void 0,
                                    o
                                );
                            };
                        }
                    );
                }),
                C.each(
                    "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                        " "
                    ),
                    function(t, e) {
                        C.fn[e] = function(t, n) {
                            return arguments.length > 0
                                ? this.on(e, null, t, n)
                                : this.trigger(e);
                        };
                    }
                ),
                C.fn.extend({
                    hover: function(t, e) {
                        return this.mouseenter(t).mouseleave(e || t);
                    }
                }),
                C.fn.extend({
                    bind: function(t, e, n) {
                        return this.on(t, null, e, n);
                    },
                    unbind: function(t, e) {
                        return this.off(t, null, e);
                    },
                    delegate: function(t, e, n, i) {
                        return this.on(e, t, n, i);
                    },
                    undelegate: function(t, e, n) {
                        return 1 === arguments.length
                            ? this.off(t, "**")
                            : this.off(e, t || "**", n);
                    }
                }),
                (C.proxy = function(t, e) {
                    var n, i, r;
                    if (
                        ("string" == typeof e && ((n = t[e]), (e = t), (t = n)),
                        y(t))
                    )
                        return (
                            (i = l.call(arguments, 2)),
                            ((r = function() {
                                return t.apply(
                                    e || this,
                                    i.concat(l.call(arguments))
                                );
                            }).guid = t.guid = t.guid || C.guid++),
                            r
                        );
                }),
                (C.holdReady = function(t) {
                    t ? C.readyWait++ : C.ready(!0);
                }),
                (C.isArray = Array.isArray),
                (C.parseJSON = JSON.parse),
                (C.nodeName = j),
                (C.isFunction = y),
                (C.isWindow = w),
                (C.camelCase = Y),
                (C.type = b),
                (C.now = Date.now),
                (C.isNumeric = function(t) {
                    var e = C.type(t);
                    return (
                        ("number" === e || "string" === e) &&
                        !isNaN(t - parseFloat(t))
                    );
                }),
                void 0 ===
                    (i = function() {
                        return C;
                    }.apply(e, [])) || (t.exports = i);
            var Ke = n.jQuery,
                Je = n.$;
            return (
                (C.noConflict = function(t) {
                    return (
                        n.$ === C && (n.$ = Je),
                        t && n.jQuery === C && (n.jQuery = Ke),
                        C
                    );
                }),
                r || (n.jQuery = n.$ = C),
                C
            );
        });
    },
    "KDh+": function(t, e, n) {
        "use strict";
        (function(t) {
            n("z1bI");
            var i = n("Zg5M"),
                r = n.n(i),
                s = n("hUol"),
                o = n.n(s),
                a = {
                    init: function() {
                        this.lazyLoadImage(),
                            this.runToken(),
                            this.runMessages(),
                            this.messagesLogin(),
                            this.showCategory(),
                            this.fixTopMenu();
                    },
                    runToken: function() {
                        t.ajaxSetup({
                            headers: {
                                "X-CSRF-TOKEN": t(
                                    'meta[name="csrf-token"]'
                                ).attr("content")
                            }
                        });
                    },
                    runMessages: function() {
                        if ("undefined" != typeof TYPE_MESSAGE)
                            switch (TYPE_MESSAGE) {
                                case "success":
                                    o.a.success(MESSAGE);
                                    break;
                                case "error":
                                    o.a.error(MESSAGE);
                            }
                    },
                    lazyLoadImage: function() {
                        !(function() {
                            function e(t, e) {
                                Date.now(), e.getAttribute("data-src");
                            }
                            new r.a({
                                elements_selector: ".lazy",
                                load_delay: 500,
                                threshold: 0,
                                callback_enter: function(t) {
                                    e(0, t);
                                },
                                callback_load: function(t) {
                                    e(0, t);
                                },
                                callback_set: function(t) {
                                    e(0, t);
                                },
                                callback_error: function(t) {
                                    e(0, t);
                                }
                            });
                            t(".card-img-top").show();
                        })();
                    },
                    messagesLogin: function() {
                        t(".js-show-login").click(function(t) {
                            return (
                                t.preventDefault(),
                                o.a.warning(
                                    "Bạn phải đăng nhập để thực hiện tính năng này"
                                ),
                                !1
                            );
                        }),
                            t(".js-maintain").click(function(t) {
                                return (
                                    t.preventDefault(),
                                    o.a.warning(
                                        "Tính năng này đang phát triển. Mời bạn quay lại sau"
                                    ),
                                    !1
                                );
                            });
                    },
                    showCategory: function() {
                        t(".js-menu-cate").mouseenter(function() {
                            t("#menu-main").show();
                        }),
                            t("#menu-main").mouseleave(function() {
                                t("#menu-main").hide();
                            });
                    },
                    fixTopMenu: function() {
                        t(document).on("scroll", function() {
                            var e = t(".commonTop");
                            t(window).scrollTop() > 150
                                ? (console.log("fix Top"),
                                  e.hasClass("fix-top") ||
                                      e.addClass("fix-top"))
                                : e.hasClass("fix-top") &&
                                  e.removeClass("fix-top");
                        });
                    }
                };
            e.a = a;
        }.call(this, n("EVdn")));
    },
    UYrX: function(t, e, n) {
        (function(t, e) {
            var n, i, r;
            !(function(t, n, i, r) {
                function s(e, n) {
                    (this.settings = null),
                        (this.options = t.extend({}, s.Defaults, n)),
                        (this.$element = t(e)),
                        (this._handlers = {}),
                        (this._plugins = {}),
                        (this._supress = {}),
                        (this._current = null),
                        (this._speed = null),
                        (this._coordinates = []),
                        (this._breakpoint = null),
                        (this._width = null),
                        (this._items = []),
                        (this._clones = []),
                        (this._mergers = []),
                        (this._widths = []),
                        (this._invalidated = {}),
                        (this._pipe = []),
                        (this._drag = {
                            time: null,
                            target: null,
                            pointer: null,
                            stage: { start: null, current: null },
                            direction: null
                        }),
                        (this._states = {
                            current: {},
                            tags: {
                                initializing: ["busy"],
                                animating: ["busy"],
                                dragging: ["interacting"]
                            }
                        }),
                        t.each(
                            ["onResize", "onThrottledResize"],
                            t.proxy(function(e, n) {
                                this._handlers[n] = t.proxy(this[n], this);
                            }, this)
                        ),
                        t.each(
                            s.Plugins,
                            t.proxy(function(t, e) {
                                this._plugins[
                                    t.charAt(0).toLowerCase() + t.slice(1)
                                ] = new e(this);
                            }, this)
                        ),
                        t.each(
                            s.Workers,
                            t.proxy(function(e, n) {
                                this._pipe.push({
                                    filter: n.filter,
                                    run: t.proxy(n.run, this)
                                });
                            }, this)
                        ),
                        this.setup(),
                        this.initialize();
                }
                (s.Defaults = {
                    items: 3,
                    loop: !1,
                    center: !1,
                    rewind: !1,
                    checkVisibility: !0,
                    mouseDrag: !0,
                    touchDrag: !0,
                    pullDrag: !0,
                    freeDrag: !1,
                    margin: 0,
                    stagePadding: 0,
                    merge: !1,
                    mergeFit: !0,
                    autoWidth: !1,
                    startPosition: 0,
                    rtl: !1,
                    smartSpeed: 250,
                    fluidSpeed: !1,
                    dragEndSpeed: !1,
                    responsive: {},
                    responsiveRefreshRate: 200,
                    responsiveBaseElement: n,
                    fallbackEasing: "swing",
                    slideTransition: "",
                    info: !1,
                    nestedItemSelector: !1,
                    itemElement: "div",
                    stageElement: "div",
                    refreshClass: "owl-refresh",
                    loadedClass: "owl-loaded",
                    loadingClass: "owl-loading",
                    rtlClass: "owl-rtl",
                    responsiveClass: "owl-responsive",
                    dragClass: "owl-drag",
                    itemClass: "owl-item",
                    stageClass: "owl-stage",
                    stageOuterClass: "owl-stage-outer",
                    grabClass: "owl-grab"
                }),
                    (s.Width = {
                        Default: "default",
                        Inner: "inner",
                        Outer: "outer"
                    }),
                    (s.Type = { Event: "event", State: "state" }),
                    (s.Plugins = {}),
                    (s.Workers = [
                        {
                            filter: ["width", "settings"],
                            run: function() {
                                this._width = this.$element.width();
                            }
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function(t) {
                                t.current =
                                    this._items &&
                                    this._items[this.relative(this._current)];
                            }
                        },
                        {
                            filter: ["items", "settings"],
                            run: function() {
                                this.$stage.children(".cloned").remove();
                            }
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function(t) {
                                var e = this.settings.margin || "",
                                    n = !this.settings.autoWidth,
                                    i = this.settings.rtl,
                                    r = {
                                        width: "auto",
                                        "margin-left": i ? e : "",
                                        "margin-right": i ? "" : e
                                    };
                                !n && this.$stage.children().css(r),
                                    (t.css = r);
                            }
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function(t) {
                                var e =
                                        (
                                            this.width() / this.settings.items
                                        ).toFixed(3) - this.settings.margin,
                                    n = null,
                                    i = this._items.length,
                                    r = !this.settings.autoWidth,
                                    s = [];
                                for (t.items = { merge: !1, width: e }; i--; )
                                    (n = this._mergers[i]),
                                        (n =
                                            (this.settings.mergeFit &&
                                                Math.min(
                                                    n,
                                                    this.settings.items
                                                )) ||
                                            n),
                                        (t.items.merge =
                                            n > 1 || t.items.merge),
                                        (s[i] = r
                                            ? e * n
                                            : this._items[i].width());
                                this._widths = s;
                            }
                        },
                        {
                            filter: ["items", "settings"],
                            run: function() {
                                var e = [],
                                    n = this._items,
                                    i = this.settings,
                                    r = Math.max(2 * i.items, 4),
                                    s = 2 * Math.ceil(n.length / 2),
                                    o =
                                        i.loop && n.length
                                            ? i.rewind
                                                ? r
                                                : Math.max(r, s)
                                            : 0,
                                    a = "",
                                    l = "";
                                for (o /= 2; o > 0; )
                                    e.push(this.normalize(e.length / 2, !0)),
                                        (a += n[e[e.length - 1]][0].outerHTML),
                                        e.push(
                                            this.normalize(
                                                n.length -
                                                    1 -
                                                    (e.length - 1) / 2,
                                                !0
                                            )
                                        ),
                                        (l =
                                            n[e[e.length - 1]][0].outerHTML +
                                            l),
                                        (o -= 1);
                                (this._clones = e),
                                    t(a)
                                        .addClass("cloned")
                                        .appendTo(this.$stage),
                                    t(l)
                                        .addClass("cloned")
                                        .prependTo(this.$stage);
                            }
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function() {
                                for (
                                    var t = this.settings.rtl ? 1 : -1,
                                        e =
                                            this._clones.length +
                                            this._items.length,
                                        n = -1,
                                        i = 0,
                                        r = 0,
                                        s = [];
                                    ++n < e;

                                )
                                    (i = s[n - 1] || 0),
                                        (r =
                                            this._widths[this.relative(n)] +
                                            this.settings.margin),
                                        s.push(i + r * t);
                                this._coordinates = s;
                            }
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function() {
                                var t = this.settings.stagePadding,
                                    e = this._coordinates,
                                    n = {
                                        width:
                                            Math.ceil(
                                                Math.abs(e[e.length - 1])
                                            ) +
                                            2 * t,
                                        "padding-left": t || "",
                                        "padding-right": t || ""
                                    };
                                this.$stage.css(n);
                            }
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function(t) {
                                var e = this._coordinates.length,
                                    n = !this.settings.autoWidth,
                                    i = this.$stage.children();
                                if (n && t.items.merge)
                                    for (; e--; )
                                        (t.css.width = this._widths[
                                            this.relative(e)
                                        ]),
                                            i.eq(e).css(t.css);
                                else
                                    n &&
                                        ((t.css.width = t.items.width),
                                        i.css(t.css));
                            }
                        },
                        {
                            filter: ["items"],
                            run: function() {
                                this._coordinates.length < 1 &&
                                    this.$stage.removeAttr("style");
                            }
                        },
                        {
                            filter: ["width", "items", "settings"],
                            run: function(t) {
                                (t.current = t.current
                                    ? this.$stage.children().index(t.current)
                                    : 0),
                                    (t.current = Math.max(
                                        this.minimum(),
                                        Math.min(this.maximum(), t.current)
                                    )),
                                    this.reset(t.current);
                            }
                        },
                        {
                            filter: ["position"],
                            run: function() {
                                this.animate(this.coordinates(this._current));
                            }
                        },
                        {
                            filter: ["width", "position", "items", "settings"],
                            run: function() {
                                var t,
                                    e,
                                    n,
                                    i,
                                    r = this.settings.rtl ? 1 : -1,
                                    s = 2 * this.settings.stagePadding,
                                    o = this.coordinates(this.current()) + s,
                                    a = o + this.width() * r,
                                    l = [];
                                for (
                                    n = 0, i = this._coordinates.length;
                                    n < i;
                                    n++
                                )
                                    (t = this._coordinates[n - 1] || 0),
                                        (e =
                                            Math.abs(this._coordinates[n]) +
                                            s * r),
                                        ((this.op(t, "<=", o) &&
                                            this.op(t, ">", a)) ||
                                            (this.op(e, "<", o) &&
                                                this.op(e, ">", a))) &&
                                            l.push(n);
                                this.$stage
                                    .children(".active")
                                    .removeClass("active"),
                                    this.$stage
                                        .children(
                                            ":eq(" + l.join("), :eq(") + ")"
                                        )
                                        .addClass("active"),
                                    this.$stage
                                        .children(".center")
                                        .removeClass("center"),
                                    this.settings.center &&
                                        this.$stage
                                            .children()
                                            .eq(this.current())
                                            .addClass("center");
                            }
                        }
                    ]),
                    (s.prototype.initializeStage = function() {
                        (this.$stage = this.$element.find(
                            "." + this.settings.stageClass
                        )),
                            this.$stage.length ||
                                (this.$element.addClass(
                                    this.options.loadingClass
                                ),
                                (this.$stage = t(
                                    "<" + this.settings.stageElement + ">",
                                    { class: this.settings.stageClass }
                                ).wrap(
                                    t("<div/>", {
                                        class: this.settings.stageOuterClass
                                    })
                                )),
                                this.$element.append(this.$stage.parent()));
                    }),
                    (s.prototype.initializeItems = function() {
                        var e = this.$element.find(".owl-item");
                        if (e.length)
                            return (
                                (this._items = e.get().map(function(e) {
                                    return t(e);
                                })),
                                (this._mergers = this._items.map(function() {
                                    return 1;
                                })),
                                void this.refresh()
                            );
                        this.replace(
                            this.$element.children().not(this.$stage.parent())
                        ),
                            this.isVisible()
                                ? this.refresh()
                                : this.invalidate("width"),
                            this.$element
                                .removeClass(this.options.loadingClass)
                                .addClass(this.options.loadedClass);
                    }),
                    (s.prototype.initialize = function() {
                        var t, e, n;
                        (this.enter("initializing"),
                        this.trigger("initialize"),
                        this.$element.toggleClass(
                            this.settings.rtlClass,
                            this.settings.rtl
                        ),
                        this.settings.autoWidth && !this.is("pre-loading")) &&
                            ((t = this.$element.find("img")),
                            (e = this.settings.nestedItemSelector
                                ? "." + this.settings.nestedItemSelector
                                : r),
                            (n = this.$element.children(e).width()),
                            t.length &&
                                n <= 0 &&
                                this.preloadAutoWidthImages(t));
                        this.initializeStage(),
                            this.initializeItems(),
                            this.registerEventHandlers(),
                            this.leave("initializing"),
                            this.trigger("initialized");
                    }),
                    (s.prototype.isVisible = function() {
                        return (
                            !this.settings.checkVisibility ||
                            this.$element.is(":visible")
                        );
                    }),
                    (s.prototype.setup = function() {
                        var e = this.viewport(),
                            n = this.options.responsive,
                            i = -1,
                            r = null;
                        n
                            ? (t.each(n, function(t) {
                                  t <= e && t > i && (i = Number(t));
                              }),
                              "function" ==
                                  typeof (r = t.extend({}, this.options, n[i]))
                                      .stagePadding &&
                                  (r.stagePadding = r.stagePadding()),
                              delete r.responsive,
                              r.responsiveClass &&
                                  this.$element.attr(
                                      "class",
                                      this.$element
                                          .attr("class")
                                          .replace(
                                              new RegExp(
                                                  "(" +
                                                      this.options
                                                          .responsiveClass +
                                                      "-)\\S+\\s",
                                                  "g"
                                              ),
                                              "$1" + i
                                          )
                                  ))
                            : (r = t.extend({}, this.options)),
                            this.trigger("change", {
                                property: { name: "settings", value: r }
                            }),
                            (this._breakpoint = i),
                            (this.settings = r),
                            this.invalidate("settings"),
                            this.trigger("changed", {
                                property: {
                                    name: "settings",
                                    value: this.settings
                                }
                            });
                    }),
                    (s.prototype.optionsLogic = function() {
                        this.settings.autoWidth &&
                            ((this.settings.stagePadding = !1),
                            (this.settings.merge = !1));
                    }),
                    (s.prototype.prepare = function(e) {
                        var n = this.trigger("prepare", { content: e });
                        return (
                            n.data ||
                                (n.data = t(
                                    "<" + this.settings.itemElement + "/>"
                                )
                                    .addClass(this.options.itemClass)
                                    .append(e)),
                            this.trigger("prepared", { content: n.data }),
                            n.data
                        );
                    }),
                    (s.prototype.update = function() {
                        for (
                            var e = 0,
                                n = this._pipe.length,
                                i = t.proxy(function(t) {
                                    return this[t];
                                }, this._invalidated),
                                r = {};
                            e < n;

                        )
                            (this._invalidated.all ||
                                t.grep(this._pipe[e].filter, i).length > 0) &&
                                this._pipe[e].run(r),
                                e++;
                        (this._invalidated = {}),
                            !this.is("valid") && this.enter("valid");
                    }),
                    (s.prototype.width = function(t) {
                        switch ((t = t || s.Width.Default)) {
                            case s.Width.Inner:
                            case s.Width.Outer:
                                return this._width;
                            default:
                                return (
                                    this._width -
                                    2 * this.settings.stagePadding +
                                    this.settings.margin
                                );
                        }
                    }),
                    (s.prototype.refresh = function() {
                        this.enter("refreshing"),
                            this.trigger("refresh"),
                            this.setup(),
                            this.optionsLogic(),
                            this.$element.addClass(this.options.refreshClass),
                            this.update(),
                            this.$element.removeClass(
                                this.options.refreshClass
                            ),
                            this.leave("refreshing"),
                            this.trigger("refreshed");
                    }),
                    (s.prototype.onThrottledResize = function() {
                        n.clearTimeout(this.resizeTimer),
                            (this.resizeTimer = n.setTimeout(
                                this._handlers.onResize,
                                this.settings.responsiveRefreshRate
                            ));
                    }),
                    (s.prototype.onResize = function() {
                        return (
                            !!this._items.length &&
                            this._width !== this.$element.width() &&
                            !!this.isVisible() &&
                            (this.enter("resizing"),
                            this.trigger("resize").isDefaultPrevented()
                                ? (this.leave("resizing"), !1)
                                : (this.invalidate("width"),
                                  this.refresh(),
                                  this.leave("resizing"),
                                  void this.trigger("resized")))
                        );
                    }),
                    (s.prototype.registerEventHandlers = function() {
                        t.support.transition &&
                            this.$stage.on(
                                t.support.transition.end + ".owl.core",
                                t.proxy(this.onTransitionEnd, this)
                            ),
                            !1 !== this.settings.responsive &&
                                this.on(
                                    n,
                                    "resize",
                                    this._handlers.onThrottledResize
                                ),
                            this.settings.mouseDrag &&
                                (this.$element.addClass(this.options.dragClass),
                                this.$stage.on(
                                    "mousedown.owl.core",
                                    t.proxy(this.onDragStart, this)
                                ),
                                this.$stage.on(
                                    "dragstart.owl.core selectstart.owl.core",
                                    function() {
                                        return !1;
                                    }
                                )),
                            this.settings.touchDrag &&
                                (this.$stage.on(
                                    "touchstart.owl.core",
                                    t.proxy(this.onDragStart, this)
                                ),
                                this.$stage.on(
                                    "touchcancel.owl.core",
                                    t.proxy(this.onDragEnd, this)
                                ));
                    }),
                    (s.prototype.onDragStart = function(e) {
                        var n = null;
                        3 !== e.which &&
                            (t.support.transform
                                ? (n = {
                                      x: (n = this.$stage
                                          .css("transform")
                                          .replace(/.*\(|\)| /g, "")
                                          .split(","))[
                                          16 === n.length ? 12 : 4
                                      ],
                                      y: n[16 === n.length ? 13 : 5]
                                  })
                                : ((n = this.$stage.position()),
                                  (n = {
                                      x: this.settings.rtl
                                          ? n.left +
                                            this.$stage.width() -
                                            this.width() +
                                            this.settings.margin
                                          : n.left,
                                      y: n.top
                                  })),
                            this.is("animating") &&
                                (t.support.transform
                                    ? this.animate(n.x)
                                    : this.$stage.stop(),
                                this.invalidate("position")),
                            this.$element.toggleClass(
                                this.options.grabClass,
                                "mousedown" === e.type
                            ),
                            this.speed(0),
                            (this._drag.time = new Date().getTime()),
                            (this._drag.target = t(e.target)),
                            (this._drag.stage.start = n),
                            (this._drag.stage.current = n),
                            (this._drag.pointer = this.pointer(e)),
                            t(i).on(
                                "mouseup.owl.core touchend.owl.core",
                                t.proxy(this.onDragEnd, this)
                            ),
                            t(i).one(
                                "mousemove.owl.core touchmove.owl.core",
                                t.proxy(function(e) {
                                    var n = this.difference(
                                        this._drag.pointer,
                                        this.pointer(e)
                                    );
                                    t(i).on(
                                        "mousemove.owl.core touchmove.owl.core",
                                        t.proxy(this.onDragMove, this)
                                    ),
                                        (Math.abs(n.x) < Math.abs(n.y) &&
                                            this.is("valid")) ||
                                            (e.preventDefault(),
                                            this.enter("dragging"),
                                            this.trigger("drag"));
                                }, this)
                            ));
                    }),
                    (s.prototype.onDragMove = function(t) {
                        var e = null,
                            n = null,
                            i = null,
                            r = this.difference(
                                this._drag.pointer,
                                this.pointer(t)
                            ),
                            s = this.difference(this._drag.stage.start, r);
                        this.is("dragging") &&
                            (t.preventDefault(),
                            this.settings.loop
                                ? ((e = this.coordinates(this.minimum())),
                                  (n =
                                      this.coordinates(this.maximum() + 1) - e),
                                  (s.x = ((((s.x - e) % n) + n) % n) + e))
                                : ((e = this.settings.rtl
                                      ? this.coordinates(this.maximum())
                                      : this.coordinates(this.minimum())),
                                  (n = this.settings.rtl
                                      ? this.coordinates(this.minimum())
                                      : this.coordinates(this.maximum())),
                                  (i = this.settings.pullDrag
                                      ? (-1 * r.x) / 5
                                      : 0),
                                  (s.x = Math.max(
                                      Math.min(s.x, e + i),
                                      n + i
                                  ))),
                            (this._drag.stage.current = s),
                            this.animate(s.x));
                    }),
                    (s.prototype.onDragEnd = function(e) {
                        var n = this.difference(
                                this._drag.pointer,
                                this.pointer(e)
                            ),
                            r = this._drag.stage.current,
                            s =
                                (n.x > 0) ^ this.settings.rtl
                                    ? "left"
                                    : "right";
                        t(i).off(".owl.core"),
                            this.$element.removeClass(this.options.grabClass),
                            ((0 !== n.x && this.is("dragging")) ||
                                !this.is("valid")) &&
                                (this.speed(
                                    this.settings.dragEndSpeed ||
                                        this.settings.smartSpeed
                                ),
                                this.current(
                                    this.closest(
                                        r.x,
                                        0 !== n.x ? s : this._drag.direction
                                    )
                                ),
                                this.invalidate("position"),
                                this.update(),
                                (this._drag.direction = s),
                                (Math.abs(n.x) > 3 ||
                                    new Date().getTime() - this._drag.time >
                                        300) &&
                                    this._drag.target.one(
                                        "click.owl.core",
                                        function() {
                                            return !1;
                                        }
                                    )),
                            this.is("dragging") &&
                                (this.leave("dragging"),
                                this.trigger("dragged"));
                    }),
                    (s.prototype.closest = function(e, n) {
                        var i = -1,
                            s = this.width(),
                            o = this.coordinates();
                        return (
                            this.settings.freeDrag ||
                                t.each(
                                    o,
                                    t.proxy(function(t, a) {
                                        return (
                                            "left" === n &&
                                            e > a - 30 &&
                                            e < a + 30
                                                ? (i = t)
                                                : "right" === n &&
                                                  e > a - s - 30 &&
                                                  e < a - s + 30
                                                ? (i = t + 1)
                                                : this.op(e, "<", a) &&
                                                  this.op(
                                                      e,
                                                      ">",
                                                      o[t + 1] !== r
                                                          ? o[t + 1]
                                                          : a - s
                                                  ) &&
                                                  (i =
                                                      "left" === n ? t + 1 : t),
                                            -1 === i
                                        );
                                    }, this)
                                ),
                            this.settings.loop ||
                                (this.op(e, ">", o[this.minimum()])
                                    ? (i = e = this.minimum())
                                    : this.op(e, "<", o[this.maximum()]) &&
                                      (i = e = this.maximum())),
                            i
                        );
                    }),
                    (s.prototype.animate = function(e) {
                        var n = this.speed() > 0;
                        this.is("animating") && this.onTransitionEnd(),
                            n &&
                                (this.enter("animating"),
                                this.trigger("translate")),
                            t.support.transform3d && t.support.transition
                                ? this.$stage.css({
                                      transform:
                                          "translate3d(" + e + "px,0px,0px)",
                                      transition:
                                          this.speed() / 1e3 +
                                          "s" +
                                          (this.settings.slideTransition
                                              ? " " +
                                                this.settings.slideTransition
                                              : "")
                                  })
                                : n
                                ? this.$stage.animate(
                                      { left: e + "px" },
                                      this.speed(),
                                      this.settings.fallbackEasing,
                                      t.proxy(this.onTransitionEnd, this)
                                  )
                                : this.$stage.css({ left: e + "px" });
                    }),
                    (s.prototype.is = function(t) {
                        return (
                            this._states.current[t] &&
                            this._states.current[t] > 0
                        );
                    }),
                    (s.prototype.current = function(t) {
                        if (t === r) return this._current;
                        if (0 === this._items.length) return r;
                        if (((t = this.normalize(t)), this._current !== t)) {
                            var e = this.trigger("change", {
                                property: { name: "position", value: t }
                            });
                            e.data !== r && (t = this.normalize(e.data)),
                                (this._current = t),
                                this.invalidate("position"),
                                this.trigger("changed", {
                                    property: {
                                        name: "position",
                                        value: this._current
                                    }
                                });
                        }
                        return this._current;
                    }),
                    (s.prototype.invalidate = function(e) {
                        return (
                            "string" === t.type(e) &&
                                ((this._invalidated[e] = !0),
                                this.is("valid") && this.leave("valid")),
                            t.map(this._invalidated, function(t, e) {
                                return e;
                            })
                        );
                    }),
                    (s.prototype.reset = function(t) {
                        (t = this.normalize(t)) !== r &&
                            ((this._speed = 0),
                            (this._current = t),
                            this.suppress(["translate", "translated"]),
                            this.animate(this.coordinates(t)),
                            this.release(["translate", "translated"]));
                    }),
                    (s.prototype.normalize = function(t, e) {
                        var n = this._items.length,
                            i = e ? 0 : this._clones.length;
                        return (
                            !this.isNumeric(t) || n < 1
                                ? (t = r)
                                : (t < 0 || t >= n + i) &&
                                  (t = ((((t - i / 2) % n) + n) % n) + i / 2),
                            t
                        );
                    }),
                    (s.prototype.relative = function(t) {
                        return (
                            (t -= this._clones.length / 2),
                            this.normalize(t, !0)
                        );
                    }),
                    (s.prototype.maximum = function(t) {
                        var e,
                            n,
                            i,
                            r = this.settings,
                            s = this._coordinates.length;
                        if (r.loop)
                            s =
                                this._clones.length / 2 +
                                this._items.length -
                                1;
                        else if (r.autoWidth || r.merge) {
                            if ((e = this._items.length))
                                for (
                                    n = this._items[--e].width(),
                                        i = this.$element.width();
                                    e-- &&
                                    !(
                                        (n +=
                                            this._items[e].width() +
                                            this.settings.margin) > i
                                    );

                                );
                            s = e + 1;
                        } else
                            s = r.center
                                ? this._items.length - 1
                                : this._items.length - r.items;
                        return (
                            t && (s -= this._clones.length / 2), Math.max(s, 0)
                        );
                    }),
                    (s.prototype.minimum = function(t) {
                        return t ? 0 : this._clones.length / 2;
                    }),
                    (s.prototype.items = function(t) {
                        return t === r
                            ? this._items.slice()
                            : ((t = this.normalize(t, !0)), this._items[t]);
                    }),
                    (s.prototype.mergers = function(t) {
                        return t === r
                            ? this._mergers.slice()
                            : ((t = this.normalize(t, !0)), this._mergers[t]);
                    }),
                    (s.prototype.clones = function(e) {
                        var n = this._clones.length / 2,
                            i = n + this._items.length,
                            s = function(t) {
                                return t % 2 == 0 ? i + t / 2 : n - (t + 1) / 2;
                            };
                        return e === r
                            ? t.map(this._clones, function(t, e) {
                                  return s(e);
                              })
                            : t.map(this._clones, function(t, n) {
                                  return t === e ? s(n) : null;
                              });
                    }),
                    (s.prototype.speed = function(t) {
                        return t !== r && (this._speed = t), this._speed;
                    }),
                    (s.prototype.coordinates = function(e) {
                        var n,
                            i = 1,
                            s = e - 1;
                        return e === r
                            ? t.map(
                                  this._coordinates,
                                  t.proxy(function(t, e) {
                                      return this.coordinates(e);
                                  }, this)
                              )
                            : (this.settings.center
                                  ? (this.settings.rtl &&
                                        ((i = -1), (s = e + 1)),
                                    (n = this._coordinates[e]),
                                    (n +=
                                        ((this.width() -
                                            n +
                                            (this._coordinates[s] || 0)) /
                                            2) *
                                        i))
                                  : (n = this._coordinates[s] || 0),
                              (n = Math.ceil(n)));
                    }),
                    (s.prototype.duration = function(t, e, n) {
                        return 0 === n
                            ? 0
                            : Math.min(Math.max(Math.abs(e - t), 1), 6) *
                                  Math.abs(n || this.settings.smartSpeed);
                    }),
                    (s.prototype.to = function(t, e) {
                        var n = this.current(),
                            i = null,
                            r = t - this.relative(n),
                            s = (r > 0) - (r < 0),
                            o = this._items.length,
                            a = this.minimum(),
                            l = this.maximum();
                        this.settings.loop
                            ? (!this.settings.rewind &&
                                  Math.abs(r) > o / 2 &&
                                  (r += -1 * s * o),
                              (i = (((((t = n + r) - a) % o) + o) % o) + a) !==
                                  t &&
                                  i - r <= l &&
                                  i - r > 0 &&
                                  ((n = i - r), (t = i), this.reset(n)))
                            : this.settings.rewind
                            ? (t = ((t % (l += 1)) + l) % l)
                            : (t = Math.max(a, Math.min(l, t))),
                            this.speed(this.duration(n, t, e)),
                            this.current(t),
                            this.isVisible() && this.update();
                    }),
                    (s.prototype.next = function(t) {
                        (t = t || !1),
                            this.to(this.relative(this.current()) + 1, t);
                    }),
                    (s.prototype.prev = function(t) {
                        (t = t || !1),
                            this.to(this.relative(this.current()) - 1, t);
                    }),
                    (s.prototype.onTransitionEnd = function(t) {
                        if (
                            t !== r &&
                            (t.stopPropagation(),
                            (t.target || t.srcElement || t.originalTarget) !==
                                this.$stage.get(0))
                        )
                            return !1;
                        this.leave("animating"), this.trigger("translated");
                    }),
                    (s.prototype.viewport = function() {
                        var e;
                        return (
                            this.options.responsiveBaseElement !== n
                                ? (e = t(
                                      this.options.responsiveBaseElement
                                  ).width())
                                : n.innerWidth
                                ? (e = n.innerWidth)
                                : i.documentElement &&
                                  i.documentElement.clientWidth
                                ? (e = i.documentElement.clientWidth)
                                : console.warn(
                                      "Can not detect viewport width."
                                  ),
                            e
                        );
                    }),
                    (s.prototype.replace = function(n) {
                        this.$stage.empty(),
                            (this._items = []),
                            n && (n = n instanceof e ? n : t(n)),
                            this.settings.nestedItemSelector &&
                                (n = n.find(
                                    "." + this.settings.nestedItemSelector
                                )),
                            n
                                .filter(function() {
                                    return 1 === this.nodeType;
                                })
                                .each(
                                    t.proxy(function(t, e) {
                                        (e = this.prepare(e)),
                                            this.$stage.append(e),
                                            this._items.push(e),
                                            this._mergers.push(
                                                1 *
                                                    e
                                                        .find("[data-merge]")
                                                        .addBack("[data-merge]")
                                                        .attr("data-merge") || 1
                                            );
                                    }, this)
                                ),
                            this.reset(
                                this.isNumeric(this.settings.startPosition)
                                    ? this.settings.startPosition
                                    : 0
                            ),
                            this.invalidate("items");
                    }),
                    (s.prototype.add = function(n, i) {
                        var s = this.relative(this._current);
                        (i =
                            i === r
                                ? this._items.length
                                : this.normalize(i, !0)),
                            (n = n instanceof e ? n : t(n)),
                            this.trigger("add", { content: n, position: i }),
                            (n = this.prepare(n)),
                            0 === this._items.length || i === this._items.length
                                ? (0 === this._items.length &&
                                      this.$stage.append(n),
                                  0 !== this._items.length &&
                                      this._items[i - 1].after(n),
                                  this._items.push(n),
                                  this._mergers.push(
                                      1 *
                                          n
                                              .find("[data-merge]")
                                              .addBack("[data-merge]")
                                              .attr("data-merge") || 1
                                  ))
                                : (this._items[i].before(n),
                                  this._items.splice(i, 0, n),
                                  this._mergers.splice(
                                      i,
                                      0,
                                      1 *
                                          n
                                              .find("[data-merge]")
                                              .addBack("[data-merge]")
                                              .attr("data-merge") || 1
                                  )),
                            this._items[s] &&
                                this.reset(this._items[s].index()),
                            this.invalidate("items"),
                            this.trigger("added", { content: n, position: i });
                    }),
                    (s.prototype.remove = function(t) {
                        (t = this.normalize(t, !0)) !== r &&
                            (this.trigger("remove", {
                                content: this._items[t],
                                position: t
                            }),
                            this._items[t].remove(),
                            this._items.splice(t, 1),
                            this._mergers.splice(t, 1),
                            this.invalidate("items"),
                            this.trigger("removed", {
                                content: null,
                                position: t
                            }));
                    }),
                    (s.prototype.preloadAutoWidthImages = function(e) {
                        e.each(
                            t.proxy(function(e, n) {
                                this.enter("pre-loading"),
                                    (n = t(n)),
                                    t(new Image())
                                        .one(
                                            "load",
                                            t.proxy(function(t) {
                                                n.attr("src", t.target.src),
                                                    n.css("opacity", 1),
                                                    this.leave("pre-loading"),
                                                    !this.is("pre-loading") &&
                                                        !this.is(
                                                            "initializing"
                                                        ) &&
                                                        this.refresh();
                                            }, this)
                                        )
                                        .attr(
                                            "src",
                                            n.attr("src") ||
                                                n.attr("data-src") ||
                                                n.attr("data-src-retina")
                                        );
                            }, this)
                        );
                    }),
                    (s.prototype.destroy = function() {
                        for (var e in (this.$element.off(".owl.core"),
                        this.$stage.off(".owl.core"),
                        t(i).off(".owl.core"),
                        !1 !== this.settings.responsive &&
                            (n.clearTimeout(this.resizeTimer),
                            this.off(
                                n,
                                "resize",
                                this._handlers.onThrottledResize
                            )),
                        this._plugins))
                            this._plugins[e].destroy();
                        this.$stage.children(".cloned").remove(),
                            this.$stage.unwrap(),
                            this.$stage
                                .children()
                                .contents()
                                .unwrap(),
                            this.$stage.children().unwrap(),
                            this.$stage.remove(),
                            this.$element
                                .removeClass(this.options.refreshClass)
                                .removeClass(this.options.loadingClass)
                                .removeClass(this.options.loadedClass)
                                .removeClass(this.options.rtlClass)
                                .removeClass(this.options.dragClass)
                                .removeClass(this.options.grabClass)
                                .attr(
                                    "class",
                                    this.$element
                                        .attr("class")
                                        .replace(
                                            new RegExp(
                                                this.options.responsiveClass +
                                                    "-\\S+\\s",
                                                "g"
                                            ),
                                            ""
                                        )
                                )
                                .removeData("owl.carousel");
                    }),
                    (s.prototype.op = function(t, e, n) {
                        var i = this.settings.rtl;
                        switch (e) {
                            case "<":
                                return i ? t > n : t < n;
                            case ">":
                                return i ? t < n : t > n;
                            case ">=":
                                return i ? t <= n : t >= n;
                            case "<=":
                                return i ? t >= n : t <= n;
                        }
                    }),
                    (s.prototype.on = function(t, e, n, i) {
                        t.addEventListener
                            ? t.addEventListener(e, n, i)
                            : t.attachEvent && t.attachEvent("on" + e, n);
                    }),
                    (s.prototype.off = function(t, e, n, i) {
                        t.removeEventListener
                            ? t.removeEventListener(e, n, i)
                            : t.detachEvent && t.detachEvent("on" + e, n);
                    }),
                    (s.prototype.trigger = function(e, n, i, r, o) {
                        var a = {
                                item: {
                                    count: this._items.length,
                                    index: this.current()
                                }
                            },
                            l = t.camelCase(
                                t
                                    .grep(["on", e, i], function(t) {
                                        return t;
                                    })
                                    .join("-")
                                    .toLowerCase()
                            ),
                            c = t.Event(
                                [e, "owl", i || "carousel"]
                                    .join(".")
                                    .toLowerCase(),
                                t.extend({ relatedTarget: this }, a, n)
                            );
                        return (
                            this._supress[e] ||
                                (t.each(this._plugins, function(t, e) {
                                    e.onTrigger && e.onTrigger(c);
                                }),
                                this.register({ type: s.Type.Event, name: e }),
                                this.$element.trigger(c),
                                this.settings &&
                                    "function" == typeof this.settings[l] &&
                                    this.settings[l].call(this, c)),
                            c
                        );
                    }),
                    (s.prototype.enter = function(e) {
                        t.each(
                            [e].concat(this._states.tags[e] || []),
                            t.proxy(function(t, e) {
                                this._states.current[e] === r &&
                                    (this._states.current[e] = 0),
                                    this._states.current[e]++;
                            }, this)
                        );
                    }),
                    (s.prototype.leave = function(e) {
                        t.each(
                            [e].concat(this._states.tags[e] || []),
                            t.proxy(function(t, e) {
                                this._states.current[e]--;
                            }, this)
                        );
                    }),
                    (s.prototype.register = function(e) {
                        if (e.type === s.Type.Event) {
                            if (
                                (t.event.special[e.name] ||
                                    (t.event.special[e.name] = {}),
                                !t.event.special[e.name].owl)
                            ) {
                                var n = t.event.special[e.name]._default;
                                (t.event.special[e.name]._default = function(
                                    t
                                ) {
                                    return !n ||
                                        !n.apply ||
                                        (t.namespace &&
                                            -1 !== t.namespace.indexOf("owl"))
                                        ? t.namespace &&
                                              t.namespace.indexOf("owl") > -1
                                        : n.apply(this, arguments);
                                }),
                                    (t.event.special[e.name].owl = !0);
                            }
                        } else
                            e.type === s.Type.State &&
                                (this._states.tags[e.name]
                                    ? (this._states.tags[
                                          e.name
                                      ] = this._states.tags[e.name].concat(
                                          e.tags
                                      ))
                                    : (this._states.tags[e.name] = e.tags),
                                (this._states.tags[e.name] = t.grep(
                                    this._states.tags[e.name],
                                    t.proxy(function(n, i) {
                                        return (
                                            t.inArray(
                                                n,
                                                this._states.tags[e.name]
                                            ) === i
                                        );
                                    }, this)
                                )));
                    }),
                    (s.prototype.suppress = function(e) {
                        t.each(
                            e,
                            t.proxy(function(t, e) {
                                this._supress[e] = !0;
                            }, this)
                        );
                    }),
                    (s.prototype.release = function(e) {
                        t.each(
                            e,
                            t.proxy(function(t, e) {
                                delete this._supress[e];
                            }, this)
                        );
                    }),
                    (s.prototype.pointer = function(t) {
                        var e = { x: null, y: null };
                        return (
                            (t =
                                (t = t.originalEvent || t || n.event).touches &&
                                t.touches.length
                                    ? t.touches[0]
                                    : t.changedTouches &&
                                      t.changedTouches.length
                                    ? t.changedTouches[0]
                                    : t).pageX
                                ? ((e.x = t.pageX), (e.y = t.pageY))
                                : ((e.x = t.clientX), (e.y = t.clientY)),
                            e
                        );
                    }),
                    (s.prototype.isNumeric = function(t) {
                        return !isNaN(parseFloat(t));
                    }),
                    (s.prototype.difference = function(t, e) {
                        return { x: t.x - e.x, y: t.y - e.y };
                    }),
                    (t.fn.owlCarousel = function(e) {
                        var n = Array.prototype.slice.call(arguments, 1);
                        return this.each(function() {
                            var i = t(this),
                                r = i.data("owl.carousel");
                            r ||
                                ((r = new s(this, "object" == typeof e && e)),
                                i.data("owl.carousel", r),
                                t.each(
                                    [
                                        "next",
                                        "prev",
                                        "to",
                                        "destroy",
                                        "refresh",
                                        "replace",
                                        "add",
                                        "remove"
                                    ],
                                    function(e, n) {
                                        r.register({
                                            type: s.Type.Event,
                                            name: n
                                        }),
                                            r.$element.on(
                                                n + ".owl.carousel.core",
                                                t.proxy(function(t) {
                                                    t.namespace &&
                                                        t.relatedTarget !==
                                                            this &&
                                                        (this.suppress([n]),
                                                        r[n].apply(
                                                            this,
                                                            [].slice.call(
                                                                arguments,
                                                                1
                                                            )
                                                        ),
                                                        this.release([n]));
                                                }, r)
                                            );
                                    }
                                )),
                                "string" == typeof e &&
                                    "_" !== e.charAt(0) &&
                                    r[e].apply(r, n);
                        });
                    }),
                    (t.fn.owlCarousel.Constructor = s);
            })(window.Zepto || t, window, document),
                (n = window.Zepto || t),
                (i = window),
                document,
                ((r = function(t) {
                    (this._core = t),
                        (this._interval = null),
                        (this._visible = null),
                        (this._handlers = {
                            "initialized.owl.carousel": n.proxy(function(t) {
                                t.namespace &&
                                    this._core.settings.autoRefresh &&
                                    this.watch();
                            }, this)
                        }),
                        (this._core.options = n.extend(
                            {},
                            r.Defaults,
                            this._core.options
                        )),
                        this._core.$element.on(this._handlers);
                }).Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
                (r.prototype.watch = function() {
                    this._interval ||
                        ((this._visible = this._core.isVisible()),
                        (this._interval = i.setInterval(
                            n.proxy(this.refresh, this),
                            this._core.settings.autoRefreshInterval
                        )));
                }),
                (r.prototype.refresh = function() {
                    this._core.isVisible() !== this._visible &&
                        ((this._visible = !this._visible),
                        this._core.$element.toggleClass(
                            "owl-hidden",
                            !this._visible
                        ),
                        this._visible &&
                            this._core.invalidate("width") &&
                            this._core.refresh());
                }),
                (r.prototype.destroy = function() {
                    var t, e;
                    for (t in (i.clearInterval(this._interval), this._handlers))
                        this._core.$element.off(t, this._handlers[t]);
                    for (e in Object.getOwnPropertyNames(this))
                        "function" != typeof this[e] && (this[e] = null);
                }),
                (n.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r),
                (function(t, e, n, i) {
                    var r = function(e) {
                        (this._core = e),
                            (this._loaded = []),
                            (this._handlers = {
                                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(
                                    function(e) {
                                        if (
                                            e.namespace &&
                                            this._core.settings &&
                                            this._core.settings.lazyLoad &&
                                            ((e.property &&
                                                "position" ==
                                                    e.property.name) ||
                                                "initialized" == e.type)
                                        ) {
                                            var n = this._core.settings,
                                                i =
                                                    (n.center &&
                                                        Math.ceil(
                                                            n.items / 2
                                                        )) ||
                                                    n.items,
                                                r = (n.center && -1 * i) || 0,
                                                s =
                                                    (e.property &&
                                                    void 0 !== e.property.value
                                                        ? e.property.value
                                                        : this._core.current()) +
                                                    r,
                                                o = this._core.clones().length,
                                                a = t.proxy(function(t, e) {
                                                    this.load(e);
                                                }, this);
                                            for (
                                                n.lazyLoadEager > 0 &&
                                                ((i += n.lazyLoadEager),
                                                n.loop &&
                                                    ((s -= n.lazyLoadEager),
                                                    i++));
                                                r++ < i;

                                            )
                                                this.load(
                                                    o / 2 +
                                                        this._core.relative(s)
                                                ),
                                                    o &&
                                                        t.each(
                                                            this._core.clones(
                                                                this._core.relative(
                                                                    s
                                                                )
                                                            ),
                                                            a
                                                        ),
                                                    s++;
                                        }
                                    },
                                    this
                                )
                            }),
                            (this._core.options = t.extend(
                                {},
                                r.Defaults,
                                this._core.options
                            )),
                            this._core.$element.on(this._handlers);
                    };
                    (r.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
                        (r.prototype.load = function(n) {
                            var i = this._core.$stage.children().eq(n),
                                r = i && i.find(".owl-lazy");
                            !r ||
                                t.inArray(i.get(0), this._loaded) > -1 ||
                                (r.each(
                                    t.proxy(function(n, i) {
                                        var r,
                                            s = t(i),
                                            o =
                                                (e.devicePixelRatio > 1 &&
                                                    s.attr(
                                                        "data-src-retina"
                                                    )) ||
                                                s.attr("data-src") ||
                                                s.attr("data-srcset");
                                        this._core.trigger(
                                            "load",
                                            { element: s, url: o },
                                            "lazy"
                                        ),
                                            s.is("img")
                                                ? s
                                                      .one(
                                                          "load.owl.lazy",
                                                          t.proxy(function() {
                                                              s.css(
                                                                  "opacity",
                                                                  1
                                                              ),
                                                                  this._core.trigger(
                                                                      "loaded",
                                                                      {
                                                                          element: s,
                                                                          url: o
                                                                      },
                                                                      "lazy"
                                                                  );
                                                          }, this)
                                                      )
                                                      .attr("src", o)
                                                : s.is("source")
                                                ? s
                                                      .one(
                                                          "load.owl.lazy",
                                                          t.proxy(function() {
                                                              this._core.trigger(
                                                                  "loaded",
                                                                  {
                                                                      element: s,
                                                                      url: o
                                                                  },
                                                                  "lazy"
                                                              );
                                                          }, this)
                                                      )
                                                      .attr("srcset", o)
                                                : (((r = new Image()).onload = t.proxy(
                                                      function() {
                                                          s.css({
                                                              "background-image":
                                                                  'url("' +
                                                                  o +
                                                                  '")',
                                                              opacity: "1"
                                                          }),
                                                              this._core.trigger(
                                                                  "loaded",
                                                                  {
                                                                      element: s,
                                                                      url: o
                                                                  },
                                                                  "lazy"
                                                              );
                                                      },
                                                      this
                                                  )),
                                                  (r.src = o));
                                    }, this)
                                ),
                                this._loaded.push(i.get(0)));
                        }),
                        (r.prototype.destroy = function() {
                            var t, e;
                            for (t in this.handlers)
                                this._core.$element.off(t, this.handlers[t]);
                            for (e in Object.getOwnPropertyNames(this))
                                "function" != typeof this[e] &&
                                    (this[e] = null);
                        }),
                        (t.fn.owlCarousel.Constructor.Plugins.Lazy = r);
                })(window.Zepto || t, window, document),
                (function(t, e, n, i) {
                    var r = function(n) {
                        (this._core = n),
                            (this._previousHeight = null),
                            (this._handlers = {
                                "initialized.owl.carousel refreshed.owl.carousel": t.proxy(
                                    function(t) {
                                        t.namespace &&
                                            this._core.settings.autoHeight &&
                                            this.update();
                                    },
                                    this
                                ),
                                "changed.owl.carousel": t.proxy(function(t) {
                                    t.namespace &&
                                        this._core.settings.autoHeight &&
                                        "position" === t.property.name &&
                                        this.update();
                                }, this),
                                "loaded.owl.lazy": t.proxy(function(t) {
                                    t.namespace &&
                                        this._core.settings.autoHeight &&
                                        t.element
                                            .closest(
                                                "." +
                                                    this._core.settings
                                                        .itemClass
                                            )
                                            .index() === this._core.current() &&
                                        this.update();
                                }, this)
                            }),
                            (this._core.options = t.extend(
                                {},
                                r.Defaults,
                                this._core.options
                            )),
                            this._core.$element.on(this._handlers),
                            (this._intervalId = null);
                        var i = this;
                        t(e).on("load", function() {
                            i._core.settings.autoHeight && i.update();
                        }),
                            t(e).resize(function() {
                                i._core.settings.autoHeight &&
                                    (null != i._intervalId &&
                                        clearTimeout(i._intervalId),
                                    (i._intervalId = setTimeout(function() {
                                        i.update();
                                    }, 250)));
                            });
                    };
                    (r.Defaults = {
                        autoHeight: !1,
                        autoHeightClass: "owl-height"
                    }),
                        (r.prototype.update = function() {
                            var e = this._core._current,
                                n = e + this._core.settings.items,
                                i = this._core.settings.lazyLoad,
                                r = this._core.$stage
                                    .children()
                                    .toArray()
                                    .slice(e, n),
                                s = [],
                                o = 0;
                            t.each(r, function(e, n) {
                                s.push(t(n).height());
                            }),
                                (o = Math.max.apply(null, s)) <= 1 &&
                                    i &&
                                    this._previousHeight &&
                                    (o = this._previousHeight),
                                (this._previousHeight = o),
                                this._core.$stage
                                    .parent()
                                    .height(o)
                                    .addClass(
                                        this._core.settings.autoHeightClass
                                    );
                        }),
                        (r.prototype.destroy = function() {
                            var t, e;
                            for (t in this._handlers)
                                this._core.$element.off(t, this._handlers[t]);
                            for (e in Object.getOwnPropertyNames(this))
                                "function" != typeof this[e] &&
                                    (this[e] = null);
                        }),
                        (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = r);
                })(window.Zepto || t, window, document),
                (function(t, e, n, i) {
                    var r = function(e) {
                        (this._core = e),
                            (this._videos = {}),
                            (this._playing = null),
                            (this._handlers = {
                                "initialized.owl.carousel": t.proxy(function(
                                    t
                                ) {
                                    t.namespace &&
                                        this._core.register({
                                            type: "state",
                                            name: "playing",
                                            tags: ["interacting"]
                                        });
                                },
                                this),
                                "resize.owl.carousel": t.proxy(function(t) {
                                    t.namespace &&
                                        this._core.settings.video &&
                                        this.isInFullScreen() &&
                                        t.preventDefault();
                                }, this),
                                "refreshed.owl.carousel": t.proxy(function(t) {
                                    t.namespace &&
                                        this._core.is("resizing") &&
                                        this._core.$stage
                                            .find(".cloned .owl-video-frame")
                                            .remove();
                                }, this),
                                "changed.owl.carousel": t.proxy(function(t) {
                                    t.namespace &&
                                        "position" === t.property.name &&
                                        this._playing &&
                                        this.stop();
                                }, this),
                                "prepared.owl.carousel": t.proxy(function(e) {
                                    if (e.namespace) {
                                        var n = t(e.content).find(".owl-video");
                                        n.length &&
                                            (n.css("display", "none"),
                                            this.fetch(n, t(e.content)));
                                    }
                                }, this)
                            }),
                            (this._core.options = t.extend(
                                {},
                                r.Defaults,
                                this._core.options
                            )),
                            this._core.$element.on(this._handlers),
                            this._core.$element.on(
                                "click.owl.video",
                                ".owl-video-play-icon",
                                t.proxy(function(t) {
                                    this.play(t);
                                }, this)
                            );
                    };
                    (r.Defaults = {
                        video: !1,
                        videoHeight: !1,
                        videoWidth: !1
                    }),
                        (r.prototype.fetch = function(t, e) {
                            var n = t.attr("data-vimeo-id")
                                    ? "vimeo"
                                    : t.attr("data-vzaar-id")
                                    ? "vzaar"
                                    : "youtube",
                                i =
                                    t.attr("data-vimeo-id") ||
                                    t.attr("data-youtube-id") ||
                                    t.attr("data-vzaar-id"),
                                r =
                                    t.attr("data-width") ||
                                    this._core.settings.videoWidth,
                                s =
                                    t.attr("data-height") ||
                                    this._core.settings.videoHeight,
                                o = t.attr("href");
                            if (!o) throw new Error("Missing video URL.");
                            if (
                                (i = o.match(
                                    /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                                ))[3].indexOf("youtu") > -1
                            )
                                n = "youtube";
                            else if (i[3].indexOf("vimeo") > -1) n = "vimeo";
                            else {
                                if (!(i[3].indexOf("vzaar") > -1))
                                    throw new Error("Video URL not supported.");
                                n = "vzaar";
                            }
                            (i = i[6]),
                                (this._videos[o] = {
                                    type: n,
                                    id: i,
                                    width: r,
                                    height: s
                                }),
                                e.attr("data-video", o),
                                this.thumbnail(t, this._videos[o]);
                        }),
                        (r.prototype.thumbnail = function(e, n) {
                            var i,
                                r,
                                s =
                                    n.width && n.height
                                        ? "width:" +
                                          n.width +
                                          "px;height:" +
                                          n.height +
                                          "px;"
                                        : "",
                                o = e.find("img"),
                                a = "src",
                                l = "",
                                c = this._core.settings,
                                u = function(n) {
                                    '<div class="owl-video-play-icon"></div>',
                                        (i = c.lazyLoad
                                            ? t("<div/>", {
                                                  class: "owl-video-tn " + l,
                                                  srcType: n
                                              })
                                            : t("<div/>", {
                                                  class: "owl-video-tn",
                                                  style:
                                                      "opacity:1;background-image:url(" +
                                                      n +
                                                      ")"
                                              })),
                                        e.after(i),
                                        e.after(
                                            '<div class="owl-video-play-icon"></div>'
                                        );
                                };
                            if (
                                (e.wrap(
                                    t("<div/>", {
                                        class: "owl-video-wrapper",
                                        style: s
                                    })
                                ),
                                this._core.settings.lazyLoad &&
                                    ((a = "data-src"), (l = "owl-lazy")),
                                o.length)
                            )
                                return u(o.attr(a)), o.remove(), !1;
                            "youtube" === n.type
                                ? ((r =
                                      "//img.youtube.com/vi/" +
                                      n.id +
                                      "/hqdefault.jpg"),
                                  u(r))
                                : "vimeo" === n.type
                                ? t.ajax({
                                      type: "GET",
                                      url:
                                          "//vimeo.com/api/v2/video/" +
                                          n.id +
                                          ".json",
                                      jsonp: "callback",
                                      dataType: "jsonp",
                                      success: function(t) {
                                          (r = t[0].thumbnail_large), u(r);
                                      }
                                  })
                                : "vzaar" === n.type &&
                                  t.ajax({
                                      type: "GET",
                                      url:
                                          "//vzaar.com/api/videos/" +
                                          n.id +
                                          ".json",
                                      jsonp: "callback",
                                      dataType: "jsonp",
                                      success: function(t) {
                                          (r = t.framegrab_url), u(r);
                                      }
                                  });
                        }),
                        (r.prototype.stop = function() {
                            this._core.trigger("stop", null, "video"),
                                this._playing.find(".owl-video-frame").remove(),
                                this._playing.removeClass("owl-video-playing"),
                                (this._playing = null),
                                this._core.leave("playing"),
                                this._core.trigger("stopped", null, "video");
                        }),
                        (r.prototype.play = function(e) {
                            var n,
                                i = t(e.target).closest(
                                    "." + this._core.settings.itemClass
                                ),
                                r = this._videos[i.attr("data-video")],
                                s = r.width || "100%",
                                o = r.height || this._core.$stage.height();
                            this._playing ||
                                (this._core.enter("playing"),
                                this._core.trigger("play", null, "video"),
                                (i = this._core.items(
                                    this._core.relative(i.index())
                                )),
                                this._core.reset(i.index()),
                                (n = t(
                                    '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
                                )).attr("height", o),
                                n.attr("width", s),
                                "youtube" === r.type
                                    ? n.attr(
                                          "src",
                                          "//www.youtube.com/embed/" +
                                              r.id +
                                              "?autoplay=1&rel=0&v=" +
                                              r.id
                                      )
                                    : "vimeo" === r.type
                                    ? n.attr(
                                          "src",
                                          "//player.vimeo.com/video/" +
                                              r.id +
                                              "?autoplay=1"
                                      )
                                    : "vzaar" === r.type &&
                                      n.attr(
                                          "src",
                                          "//view.vzaar.com/" +
                                              r.id +
                                              "/player?autoplay=true"
                                      ),
                                t(n)
                                    .wrap('<div class="owl-video-frame" />')
                                    .insertAfter(i.find(".owl-video")),
                                (this._playing = i.addClass(
                                    "owl-video-playing"
                                )));
                        }),
                        (r.prototype.isInFullScreen = function() {
                            var e =
                                n.fullscreenElement ||
                                n.mozFullScreenElement ||
                                n.webkitFullscreenElement;
                            return (
                                e &&
                                t(e)
                                    .parent()
                                    .hasClass("owl-video-frame")
                            );
                        }),
                        (r.prototype.destroy = function() {
                            var t, e;
                            for (t in (this._core.$element.off(
                                "click.owl.video"
                            ),
                            this._handlers))
                                this._core.$element.off(t, this._handlers[t]);
                            for (e in Object.getOwnPropertyNames(this))
                                "function" != typeof this[e] &&
                                    (this[e] = null);
                        }),
                        (t.fn.owlCarousel.Constructor.Plugins.Video = r);
                })(window.Zepto || t, window, document),
                (function(t, e, n, i) {
                    var r = function(e) {
                        (this.core = e),
                            (this.core.options = t.extend(
                                {},
                                r.Defaults,
                                this.core.options
                            )),
                            (this.swapping = !0),
                            (this.previous = i),
                            (this.next = i),
                            (this.handlers = {
                                "change.owl.carousel": t.proxy(function(t) {
                                    t.namespace &&
                                        "position" == t.property.name &&
                                        ((this.previous = this.core.current()),
                                        (this.next = t.property.value));
                                }, this),
                                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(
                                    function(t) {
                                        t.namespace &&
                                            (this.swapping =
                                                "translated" == t.type);
                                    },
                                    this
                                ),
                                "translate.owl.carousel": t.proxy(function(t) {
                                    t.namespace &&
                                        this.swapping &&
                                        (this.core.options.animateOut ||
                                            this.core.options.animateIn) &&
                                        this.swap();
                                }, this)
                            }),
                            this.core.$element.on(this.handlers);
                    };
                    (r.Defaults = { animateOut: !1, animateIn: !1 }),
                        (r.prototype.swap = function() {
                            if (
                                1 === this.core.settings.items &&
                                t.support.animation &&
                                t.support.transition
                            ) {
                                this.core.speed(0);
                                var e,
                                    n = t.proxy(this.clear, this),
                                    i = this.core.$stage
                                        .children()
                                        .eq(this.previous),
                                    r = this.core.$stage
                                        .children()
                                        .eq(this.next),
                                    s = this.core.settings.animateIn,
                                    o = this.core.settings.animateOut;
                                this.core.current() !== this.previous &&
                                    (o &&
                                        ((e =
                                            this.core.coordinates(
                                                this.previous
                                            ) -
                                            this.core.coordinates(this.next)),
                                        i
                                            .one(t.support.animation.end, n)
                                            .css({ left: e + "px" })
                                            .addClass(
                                                "animated owl-animated-out"
                                            )
                                            .addClass(o)),
                                    s &&
                                        r
                                            .one(t.support.animation.end, n)
                                            .addClass(
                                                "animated owl-animated-in"
                                            )
                                            .addClass(s));
                            }
                        }),
                        (r.prototype.clear = function(e) {
                            t(e.target)
                                .css({ left: "" })
                                .removeClass(
                                    "animated owl-animated-out owl-animated-in"
                                )
                                .removeClass(this.core.settings.animateIn)
                                .removeClass(this.core.settings.animateOut),
                                this.core.onTransitionEnd();
                        }),
                        (r.prototype.destroy = function() {
                            var t, e;
                            for (t in this.handlers)
                                this.core.$element.off(t, this.handlers[t]);
                            for (e in Object.getOwnPropertyNames(this))
                                "function" != typeof this[e] &&
                                    (this[e] = null);
                        }),
                        (t.fn.owlCarousel.Constructor.Plugins.Animate = r);
                })(window.Zepto || t, window, document),
                (function(t, e, n, i) {
                    var r = function(e) {
                        (this._core = e),
                            (this._call = null),
                            (this._time = 0),
                            (this._timeout = 0),
                            (this._paused = !0),
                            (this._handlers = {
                                "changed.owl.carousel": t.proxy(function(t) {
                                    t.namespace &&
                                    "settings" === t.property.name
                                        ? this._core.settings.autoplay
                                            ? this.play()
                                            : this.stop()
                                        : t.namespace &&
                                          "position" === t.property.name &&
                                          this._paused &&
                                          (this._time = 0);
                                }, this),
                                "initialized.owl.carousel": t.proxy(function(
                                    t
                                ) {
                                    t.namespace &&
                                        this._core.settings.autoplay &&
                                        this.play();
                                },
                                this),
                                "play.owl.autoplay": t.proxy(function(t, e, n) {
                                    t.namespace && this.play(e, n);
                                }, this),
                                "stop.owl.autoplay": t.proxy(function(t) {
                                    t.namespace && this.stop();
                                }, this),
                                "mouseover.owl.autoplay": t.proxy(function() {
                                    this._core.settings.autoplayHoverPause &&
                                        this._core.is("rotating") &&
                                        this.pause();
                                }, this),
                                "mouseleave.owl.autoplay": t.proxy(function() {
                                    this._core.settings.autoplayHoverPause &&
                                        this._core.is("rotating") &&
                                        this.play();
                                }, this),
                                "touchstart.owl.core": t.proxy(function() {
                                    this._core.settings.autoplayHoverPause &&
                                        this._core.is("rotating") &&
                                        this.pause();
                                }, this),
                                "touchend.owl.core": t.proxy(function() {
                                    this._core.settings.autoplayHoverPause &&
                                        this.play();
                                }, this)
                            }),
                            this._core.$element.on(this._handlers),
                            (this._core.options = t.extend(
                                {},
                                r.Defaults,
                                this._core.options
                            ));
                    };
                    (r.Defaults = {
                        autoplay: !1,
                        autoplayTimeout: 5e3,
                        autoplayHoverPause: !1,
                        autoplaySpeed: !1
                    }),
                        (r.prototype._next = function(i) {
                            (this._call = e.setTimeout(
                                t.proxy(this._next, this, i),
                                this._timeout *
                                    (Math.round(this.read() / this._timeout) +
                                        1) -
                                    this.read()
                            )),
                                this._core.is("interacting") ||
                                    n.hidden ||
                                    this._core.next(
                                        i || this._core.settings.autoplaySpeed
                                    );
                        }),
                        (r.prototype.read = function() {
                            return new Date().getTime() - this._time;
                        }),
                        (r.prototype.play = function(n, i) {
                            var r;
                            this._core.is("rotating") ||
                                this._core.enter("rotating"),
                                (n = n || this._core.settings.autoplayTimeout),
                                (r = Math.min(
                                    this._time % (this._timeout || n),
                                    n
                                )),
                                this._paused
                                    ? ((this._time = this.read()),
                                      (this._paused = !1))
                                    : e.clearTimeout(this._call),
                                (this._time += (this.read() % n) - r),
                                (this._timeout = n),
                                (this._call = e.setTimeout(
                                    t.proxy(this._next, this, i),
                                    n - r
                                ));
                        }),
                        (r.prototype.stop = function() {
                            this._core.is("rotating") &&
                                ((this._time = 0),
                                (this._paused = !0),
                                e.clearTimeout(this._call),
                                this._core.leave("rotating"));
                        }),
                        (r.prototype.pause = function() {
                            this._core.is("rotating") &&
                                !this._paused &&
                                ((this._time = this.read()),
                                (this._paused = !0),
                                e.clearTimeout(this._call));
                        }),
                        (r.prototype.destroy = function() {
                            var t, e;
                            for (t in (this.stop(), this._handlers))
                                this._core.$element.off(t, this._handlers[t]);
                            for (e in Object.getOwnPropertyNames(this))
                                "function" != typeof this[e] &&
                                    (this[e] = null);
                        }),
                        (t.fn.owlCarousel.Constructor.Plugins.autoplay = r);
                })(window.Zepto || t, window, document),
                (function(t, e, n, i) {
                    "use strict";
                    var r = function(e) {
                        (this._core = e),
                            (this._initialized = !1),
                            (this._pages = []),
                            (this._controls = {}),
                            (this._templates = []),
                            (this.$element = this._core.$element),
                            (this._overrides = {
                                next: this._core.next,
                                prev: this._core.prev,
                                to: this._core.to
                            }),
                            (this._handlers = {
                                "prepared.owl.carousel": t.proxy(function(e) {
                                    e.namespace &&
                                        this._core.settings.dotsData &&
                                        this._templates.push(
                                            '<div class="' +
                                                this._core.settings.dotClass +
                                                '">' +
                                                t(e.content)
                                                    .find("[data-dot]")
                                                    .addBack("[data-dot]")
                                                    .attr("data-dot") +
                                                "</div>"
                                        );
                                }, this),
                                "added.owl.carousel": t.proxy(function(t) {
                                    t.namespace &&
                                        this._core.settings.dotsData &&
                                        this._templates.splice(
                                            t.position,
                                            0,
                                            this._templates.pop()
                                        );
                                }, this),
                                "remove.owl.carousel": t.proxy(function(t) {
                                    t.namespace &&
                                        this._core.settings.dotsData &&
                                        this._templates.splice(t.position, 1);
                                }, this),
                                "changed.owl.carousel": t.proxy(function(t) {
                                    t.namespace &&
                                        "position" == t.property.name &&
                                        this.draw();
                                }, this),
                                "initialized.owl.carousel": t.proxy(function(
                                    t
                                ) {
                                    t.namespace &&
                                        !this._initialized &&
                                        (this._core.trigger(
                                            "initialize",
                                            null,
                                            "navigation"
                                        ),
                                        this.initialize(),
                                        this.update(),
                                        this.draw(),
                                        (this._initialized = !0),
                                        this._core.trigger(
                                            "initialized",
                                            null,
                                            "navigation"
                                        ));
                                },
                                this),
                                "refreshed.owl.carousel": t.proxy(function(t) {
                                    t.namespace &&
                                        this._initialized &&
                                        (this._core.trigger(
                                            "refresh",
                                            null,
                                            "navigation"
                                        ),
                                        this.update(),
                                        this.draw(),
                                        this._core.trigger(
                                            "refreshed",
                                            null,
                                            "navigation"
                                        ));
                                }, this)
                            }),
                            (this._core.options = t.extend(
                                {},
                                r.Defaults,
                                this._core.options
                            )),
                            this.$element.on(this._handlers);
                    };
                    (r.Defaults = {
                        nav: !1,
                        navText: [
                            '<span aria-label="Previous">&#x2039;</span>',
                            '<span aria-label="Next">&#x203a;</span>'
                        ],
                        navSpeed: !1,
                        navElement: 'button type="button" role="presentation"',
                        navContainer: !1,
                        navContainerClass: "owl-nav",
                        navClass: ["owl-prev", "owl-next"],
                        slideBy: 1,
                        dotClass: "owl-dot",
                        dotsClass: "owl-dots",
                        dots: !0,
                        dotsEach: !1,
                        dotsData: !1,
                        dotsSpeed: !1,
                        dotsContainer: !1
                    }),
                        (r.prototype.initialize = function() {
                            var e,
                                n = this._core.settings;
                            for (e in ((this._controls.$relative = (n.navContainer
                                ? t(n.navContainer)
                                : t("<div>")
                                      .addClass(n.navContainerClass)
                                      .appendTo(this.$element)
                            ).addClass("disabled")),
                            (this._controls.$previous = t(
                                "<" + n.navElement + ">"
                            )
                                .addClass(n.navClass[0])
                                .html(n.navText[0])
                                .prependTo(this._controls.$relative)
                                .on(
                                    "click",
                                    t.proxy(function(t) {
                                        this.prev(n.navSpeed);
                                    }, this)
                                )),
                            (this._controls.$next = t("<" + n.navElement + ">")
                                .addClass(n.navClass[1])
                                .html(n.navText[1])
                                .appendTo(this._controls.$relative)
                                .on(
                                    "click",
                                    t.proxy(function(t) {
                                        this.next(n.navSpeed);
                                    }, this)
                                )),
                            n.dotsData ||
                                (this._templates = [
                                    t('<button role="button">')
                                        .addClass(n.dotClass)
                                        .append(t("<span>"))
                                        .prop("outerHTML")
                                ]),
                            (this._controls.$absolute = (n.dotsContainer
                                ? t(n.dotsContainer)
                                : t("<div>")
                                      .addClass(n.dotsClass)
                                      .appendTo(this.$element)
                            ).addClass("disabled")),
                            this._controls.$absolute.on(
                                "click",
                                "button",
                                t.proxy(function(e) {
                                    var i = t(e.target)
                                        .parent()
                                        .is(this._controls.$absolute)
                                        ? t(e.target).index()
                                        : t(e.target)
                                              .parent()
                                              .index();
                                    e.preventDefault(), this.to(i, n.dotsSpeed);
                                }, this)
                            ),
                            this._overrides))
                                this._core[e] = t.proxy(this[e], this);
                        }),
                        (r.prototype.destroy = function() {
                            var t, e, n, i, r;
                            for (t in ((r = this._core.settings),
                            this._handlers))
                                this.$element.off(t, this._handlers[t]);
                            for (e in this._controls)
                                "$relative" === e && r.navContainer
                                    ? this._controls[e].html("")
                                    : this._controls[e].remove();
                            for (i in this.overides)
                                this._core[i] = this._overrides[i];
                            for (n in Object.getOwnPropertyNames(this))
                                "function" != typeof this[n] &&
                                    (this[n] = null);
                        }),
                        (r.prototype.update = function() {
                            var t,
                                e,
                                n = this._core.clones().length / 2,
                                i = n + this._core.items().length,
                                r = this._core.maximum(!0),
                                s = this._core.settings,
                                o =
                                    s.center || s.autoWidth || s.dotsData
                                        ? 1
                                        : s.dotsEach || s.items;
                            if (
                                ("page" !== s.slideBy &&
                                    (s.slideBy = Math.min(s.slideBy, s.items)),
                                s.dots || "page" == s.slideBy)
                            )
                                for (
                                    this._pages = [], t = n, e = 0, 0;
                                    t < i;
                                    t++
                                ) {
                                    if (e >= o || 0 === e) {
                                        if (
                                            (this._pages.push({
                                                start: Math.min(r, t - n),
                                                end: t - n + o - 1
                                            }),
                                            Math.min(r, t - n) === r)
                                        )
                                            break;
                                        e = 0;
                                    }
                                    e += this._core.mergers(
                                        this._core.relative(t)
                                    );
                                }
                        }),
                        (r.prototype.draw = function() {
                            var e,
                                n = this._core.settings,
                                i = this._core.items().length <= n.items,
                                r = this._core.relative(this._core.current()),
                                s = n.loop || n.rewind;
                            this._controls.$relative.toggleClass(
                                "disabled",
                                !n.nav || i
                            ),
                                n.nav &&
                                    (this._controls.$previous.toggleClass(
                                        "disabled",
                                        !s && r <= this._core.minimum(!0)
                                    ),
                                    this._controls.$next.toggleClass(
                                        "disabled",
                                        !s && r >= this._core.maximum(!0)
                                    )),
                                this._controls.$absolute.toggleClass(
                                    "disabled",
                                    !n.dots || i
                                ),
                                n.dots &&
                                    ((e =
                                        this._pages.length -
                                        this._controls.$absolute.children()
                                            .length),
                                    n.dotsData && 0 !== e
                                        ? this._controls.$absolute.html(
                                              this._templates.join("")
                                          )
                                        : e > 0
                                        ? this._controls.$absolute.append(
                                              new Array(e + 1).join(
                                                  this._templates[0]
                                              )
                                          )
                                        : e < 0 &&
                                          this._controls.$absolute
                                              .children()
                                              .slice(e)
                                              .remove(),
                                    this._controls.$absolute
                                        .find(".active")
                                        .removeClass("active"),
                                    this._controls.$absolute
                                        .children()
                                        .eq(
                                            t.inArray(
                                                this.current(),
                                                this._pages
                                            )
                                        )
                                        .addClass("active"));
                        }),
                        (r.prototype.onTrigger = function(e) {
                            var n = this._core.settings;
                            e.page = {
                                index: t.inArray(this.current(), this._pages),
                                count: this._pages.length,
                                size:
                                    n &&
                                    (n.center || n.autoWidth || n.dotsData
                                        ? 1
                                        : n.dotsEach || n.items)
                            };
                        }),
                        (r.prototype.current = function() {
                            var e = this._core.relative(this._core.current());
                            return t
                                .grep(
                                    this._pages,
                                    t.proxy(function(t, n) {
                                        return t.start <= e && t.end >= e;
                                    }, this)
                                )
                                .pop();
                        }),
                        (r.prototype.getPosition = function(e) {
                            var n,
                                i,
                                r = this._core.settings;
                            return (
                                "page" == r.slideBy
                                    ? ((n = t.inArray(
                                          this.current(),
                                          this._pages
                                      )),
                                      (i = this._pages.length),
                                      e ? ++n : --n,
                                      (n = this._pages[((n % i) + i) % i]
                                          .start))
                                    : ((n = this._core.relative(
                                          this._core.current()
                                      )),
                                      (i = this._core.items().length),
                                      e ? (n += r.slideBy) : (n -= r.slideBy)),
                                n
                            );
                        }),
                        (r.prototype.next = function(e) {
                            t.proxy(this._overrides.to, this._core)(
                                this.getPosition(!0),
                                e
                            );
                        }),
                        (r.prototype.prev = function(e) {
                            t.proxy(this._overrides.to, this._core)(
                                this.getPosition(!1),
                                e
                            );
                        }),
                        (r.prototype.to = function(e, n, i) {
                            var r;
                            !i && this._pages.length
                                ? ((r = this._pages.length),
                                  t.proxy(this._overrides.to, this._core)(
                                      this._pages[((e % r) + r) % r].start,
                                      n
                                  ))
                                : t.proxy(this._overrides.to, this._core)(e, n);
                        }),
                        (t.fn.owlCarousel.Constructor.Plugins.Navigation = r);
                })(window.Zepto || t, window, document),
                (function(t, e, n, i) {
                    "use strict";
                    var r = function(n) {
                        (this._core = n),
                            (this._hashes = {}),
                            (this.$element = this._core.$element),
                            (this._handlers = {
                                "initialized.owl.carousel": t.proxy(function(
                                    n
                                ) {
                                    n.namespace &&
                                        "URLHash" ===
                                            this._core.settings.startPosition &&
                                        t(e).trigger(
                                            "hashchange.owl.navigation"
                                        );
                                },
                                this),
                                "prepared.owl.carousel": t.proxy(function(e) {
                                    if (e.namespace) {
                                        var n = t(e.content)
                                            .find("[data-hash]")
                                            .addBack("[data-hash]")
                                            .attr("data-hash");
                                        if (!n) return;
                                        this._hashes[n] = e.content;
                                    }
                                }, this),
                                "changed.owl.carousel": t.proxy(function(n) {
                                    if (
                                        n.namespace &&
                                        "position" === n.property.name
                                    ) {
                                        var i = this._core.items(
                                                this._core.relative(
                                                    this._core.current()
                                                )
                                            ),
                                            r = t
                                                .map(this._hashes, function(
                                                    t,
                                                    e
                                                ) {
                                                    return t === i ? e : null;
                                                })
                                                .join();
                                        if (
                                            !r ||
                                            e.location.hash.slice(1) === r
                                        )
                                            return;
                                        e.location.hash = r;
                                    }
                                }, this)
                            }),
                            (this._core.options = t.extend(
                                {},
                                r.Defaults,
                                this._core.options
                            )),
                            this.$element.on(this._handlers),
                            t(e).on(
                                "hashchange.owl.navigation",
                                t.proxy(function(t) {
                                    var n = e.location.hash.substring(1),
                                        i = this._core.$stage.children(),
                                        r =
                                            this._hashes[n] &&
                                            i.index(this._hashes[n]);
                                    void 0 !== r &&
                                        r !== this._core.current() &&
                                        this._core.to(
                                            this._core.relative(r),
                                            !1,
                                            !0
                                        );
                                }, this)
                            );
                    };
                    (r.Defaults = { URLhashListener: !1 }),
                        (r.prototype.destroy = function() {
                            var n, i;
                            for (n in (t(e).off("hashchange.owl.navigation"),
                            this._handlers))
                                this._core.$element.off(n, this._handlers[n]);
                            for (i in Object.getOwnPropertyNames(this))
                                "function" != typeof this[i] &&
                                    (this[i] = null);
                        }),
                        (t.fn.owlCarousel.Constructor.Plugins.Hash = r);
                })(window.Zepto || t, window, document),
                (function(t, e, n, i) {
                    function r(e, n) {
                        var i = !1,
                            r = e.charAt(0).toUpperCase() + e.slice(1);
                        return (
                            t.each(
                                (e + " " + a.join(r + " ") + r).split(" "),
                                function(t, e) {
                                    if (void 0 !== o[e])
                                        return (i = !n || e), !1;
                                }
                            ),
                            i
                        );
                    }
                    function s(t) {
                        return r(t, !0);
                    }
                    var o = t("<support>").get(0).style,
                        a = "Webkit Moz O ms".split(" "),
                        l = {
                            transition: {
                                end: {
                                    WebkitTransition: "webkitTransitionEnd",
                                    MozTransition: "transitionend",
                                    OTransition: "oTransitionEnd",
                                    transition: "transitionend"
                                }
                            },
                            animation: {
                                end: {
                                    WebkitAnimation: "webkitAnimationEnd",
                                    MozAnimation: "animationend",
                                    OAnimation: "oAnimationEnd",
                                    animation: "animationend"
                                }
                            }
                        },
                        c = function() {
                            return !!r("transform");
                        },
                        u = function() {
                            return !!r("perspective");
                        },
                        h = function() {
                            return !!r("animation");
                        };
                    (function() {
                        return !!r("transition");
                    })() &&
                        ((t.support.transition = new String(s("transition"))),
                        (t.support.transition.end =
                            l.transition.end[t.support.transition])),
                        h() &&
                            ((t.support.animation = new String(s("animation"))),
                            (t.support.animation.end =
                                l.animation.end[t.support.animation])),
                        c() &&
                            ((t.support.transform = new String(s("transform"))),
                            (t.support.transform3d = u()));
                })(window.Zepto || t, window, document);
        }.call(this, n("EVdn"), n("EVdn")));
    },
    WkSt: function(t, e, n) {
        "use strict";
        n.d(e, "a", function() {
            return i;
        });
        var i = function(t) {
            var e = function() {
                    var e = document.createElement("link");
                    (e.rel = "stylesheet"),
                        (e.href = t),
                        document.getElementsByTagName("head")[0].append(e);
                },
                n =
                    requestAnimationFrame ||
                    mozRequestAnimationFrame ||
                    webkitRequestAnimationFrame ||
                    msRequestAnimationFrame;
            n ? n(e) : window.addEventListener("load", e);
        };
    },
    Zg5M: function(t, e, n) {
        var i, r;
        function s(t) {
            return (s =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                    ? function(t) {
                          return typeof t;
                      }
                    : function(t) {
                          return t &&
                              "function" == typeof Symbol &&
                              t.constructor === Symbol &&
                              t !== Symbol.prototype
                              ? "symbol"
                              : typeof t;
                      })(t);
        }
        var o =
                Object.assign ||
                function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var i in n)
                            Object.prototype.hasOwnProperty.call(n, i) &&
                                (t[i] = n[i]);
                    }
                    return t;
                },
            a =
                "function" == typeof Symbol && "symbol" == s(Symbol.iterator)
                    ? function(t) {
                          return s(t);
                      }
                    : function(t) {
                          return t &&
                              "function" == typeof Symbol &&
                              t.constructor === Symbol &&
                              t !== Symbol.prototype
                              ? "symbol"
                              : s(t);
                      };
        !(function(s, o) {
            "object" === a(e) && void 0 !== t
                ? (t.exports = o())
                : void 0 ===
                      (r =
                          "function" == typeof (i = o)
                              ? i.call(e, n, e, t)
                              : i) || (t.exports = r);
        })(0, function() {
            "use strict";
            function t(t, e, n) {
                var i = e._settings;
                (!n && a(t)) ||
                    (C(i.callback_enter, t),
                    A.indexOf(t.tagName) > -1 &&
                        (D(t, e), b(t, i.class_loading)),
                    _(t, e),
                    s(t),
                    C(i.callback_set, t));
            }
            var e = {
                    elements_selector: "img",
                    container: document,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    load_delay: 0,
                    callback_load: null,
                    callback_error: null,
                    callback_set: null,
                    callback_enter: null,
                    callback_finish: null,
                    to_webp: !1
                },
                n = function(t) {
                    return o({}, e, t);
                },
                i = function(t, e) {
                    return t.getAttribute("data-" + e);
                },
                r = function(t, e, n) {
                    var i = "data-" + e;
                    null !== n ? t.setAttribute(i, n) : t.removeAttribute(i);
                },
                s = function(t) {
                    return r(t, "was-processed", "true");
                },
                a = function(t) {
                    return "true" === i(t, "was-processed");
                },
                l = function(t, e) {
                    return r(t, "ll-timeout", e);
                },
                c = function(t) {
                    return i(t, "ll-timeout");
                },
                u = function(t, e) {
                    var n,
                        i = new t(e);
                    try {
                        n = new CustomEvent("LazyLoad::Initialized", {
                            detail: { instance: i }
                        });
                    } catch (t) {
                        (n = document.createEvent(
                            "CustomEvent"
                        )).initCustomEvent("LazyLoad::Initialized", !1, !1, {
                            instance: i
                        });
                    }
                    window.dispatchEvent(n);
                },
                h = function(t, e) {
                    return e ? t.replace(/\.(jpe?g|png)/gi, ".webp") : t;
                },
                d = "undefined" != typeof window,
                p =
                    (d && !("onscroll" in window)) ||
                    /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
                f = d && "IntersectionObserver" in window,
                g = d && "classList" in document.createElement("p"),
                m =
                    d &&
                    (function() {
                        var t = document.createElement("canvas");
                        return (
                            !(!t.getContext || !t.getContext("2d")) &&
                            0 ===
                                t
                                    .toDataURL("image/webp")
                                    .indexOf("data:image/webp")
                        );
                    })(),
                v = function(t, e, n, r) {
                    for (var s, o = 0; (s = t.children[o]); o += 1)
                        if ("SOURCE" === s.tagName) {
                            var a = i(s, n);
                            y(s, e, a, r);
                        }
                },
                y = function(t, e, n, i) {
                    n && t.setAttribute(e, h(n, i));
                },
                w = function(t, e) {
                    var n = m && e.to_webp,
                        r = i(t, e.data_src),
                        s = i(t, e.data_bg);
                    if (r) {
                        var o = h(r, n);
                        t.style.backgroundImage = 'url("' + o + '")';
                    }
                    if (s) {
                        var a = h(s, n);
                        t.style.backgroundImage = a;
                    }
                },
                x = {
                    IMG: function(t, e) {
                        var n = m && e.to_webp,
                            r = e.data_srcset,
                            s = t.parentNode;
                        s && "PICTURE" === s.tagName && v(s, "srcset", r, n);
                        var o = i(t, e.data_sizes);
                        y(t, "sizes", o);
                        var a = i(t, r);
                        y(t, "srcset", a, n);
                        var l = i(t, e.data_src);
                        y(t, "src", l, n);
                    },
                    IFRAME: function(t, e) {
                        var n = i(t, e.data_src);
                        y(t, "src", n);
                    },
                    VIDEO: function(t, e) {
                        var n = e.data_src,
                            r = i(t, n);
                        v(t, "src", n), y(t, "src", r), t.load();
                    }
                },
                _ = function(t, e) {
                    var n = e._settings,
                        i = t.tagName,
                        r = x[i];
                    if (r)
                        return (
                            r(t, n),
                            e._updateLoadingCount(1),
                            void (e._elements = (function(t, e) {
                                return t.filter(function(t) {
                                    return t !== e;
                                });
                            })(e._elements, t))
                        );
                    w(t, n);
                },
                b = function(t, e) {
                    g
                        ? t.classList.add(e)
                        : (t.className += (t.className ? " " : "") + e);
                },
                C = function(t, e) {
                    t && t(e);
                },
                T = function(t, e, n) {
                    t.addEventListener(e, n);
                },
                E = function(t, e, n) {
                    t.removeEventListener(e, n);
                },
                k = function(t, e, n) {
                    E(t, "load", e), E(t, "loadeddata", e), E(t, "error", n);
                },
                S = function(t, e, n) {
                    var i = n._settings,
                        r = e ? i.class_loaded : i.class_error,
                        s = e ? i.callback_load : i.callback_error,
                        o = t.target;
                    (function(t, e) {
                        g
                            ? t.classList.remove(e)
                            : (t.className = t.className
                                  .replace(
                                      new RegExp("(^|\\s+)" + e + "(\\s+|$)"),
                                      " "
                                  )
                                  .replace(/^\s+/, "")
                                  .replace(/\s+$/, ""));
                    })(o, i.class_loading),
                        b(o, r),
                        C(s, o),
                        n._updateLoadingCount(-1);
                },
                D = function(t, e) {
                    var n = function n(r) {
                            S(r, !0, e), k(t, n, i);
                        },
                        i = function i(r) {
                            S(r, !1, e), k(t, n, i);
                        };
                    !(function(t, e, n) {
                        T(t, "load", e),
                            T(t, "loadeddata", e),
                            T(t, "error", n);
                    })(t, n, i);
                },
                A = ["IMG", "IFRAME", "VIDEO"],
                j = function(e, n, i) {
                    t(e, i), n.unobserve(e);
                },
                N = function(t) {
                    var e = c(t);
                    e && (clearTimeout(e), l(t, null));
                },
                $ = function(t) {
                    return t.isIntersecting || t.intersectionRatio > 0;
                },
                L = function(t, e) {
                    (this._settings = n(t)),
                        this._setObserver(),
                        (this._loadingCount = 0),
                        this.update(e);
                };
            return (
                (L.prototype = {
                    _manageIntersection: function(t) {
                        var e = this._observer,
                            n = this._settings.load_delay,
                            i = t.target;
                        n
                            ? $(t)
                                ? (function(t, e, n) {
                                      var i = n._settings.load_delay,
                                          r = c(t);
                                      r ||
                                          ((r = setTimeout(function() {
                                              j(t, e, n), N(t);
                                          }, i)),
                                          l(t, r));
                                  })(i, e, this)
                                : N(i)
                            : $(t) && j(i, e, this);
                    },
                    _onIntersection: function(t) {
                        t.forEach(this._manageIntersection.bind(this));
                    },
                    _setObserver: function() {
                        f &&
                            (this._observer = new IntersectionObserver(
                                this._onIntersection.bind(this),
                                (function(t) {
                                    return {
                                        root:
                                            t.container === document
                                                ? null
                                                : t.container,
                                        rootMargin:
                                            t.thresholds || t.threshold + "px"
                                    };
                                })(this._settings)
                            ));
                    },
                    _updateLoadingCount: function(t) {
                        (this._loadingCount += t),
                            0 === this._elements.length &&
                                0 === this._loadingCount &&
                                C(this._settings.callback_finish);
                    },
                    update: function(t) {
                        var e = this,
                            n = this._settings,
                            i =
                                t ||
                                n.container.querySelectorAll(
                                    n.elements_selector
                                );
                        (this._elements = (function(t) {
                            return t.filter(function(t) {
                                return !a(t);
                            });
                        })(Array.prototype.slice.call(i))),
                            !p && this._observer
                                ? this._elements.forEach(function(t) {
                                      e._observer.observe(t);
                                  })
                                : this.loadAll();
                    },
                    destroy: function() {
                        var t = this;
                        this._observer &&
                            (this._elements.forEach(function(e) {
                                t._observer.unobserve(e);
                            }),
                            (this._observer = null)),
                            (this._elements = null),
                            (this._settings = null);
                    },
                    load: function(e, n) {
                        t(e, this, n);
                    },
                    loadAll: function() {
                        var t = this;
                        this._elements.forEach(function(e) {
                            t.load(e);
                        });
                    }
                }),
                d &&
                    (function(t, e) {
                        if (e)
                            if (e.length)
                                for (var n, i = 0; (n = e[i]); i += 1) u(t, n);
                            else u(t, e);
                    })(L, window.lazyLoadOptions),
                L
            );
        });
    },
    hUol: function(t, e, n) {
        var i, r;
        n("B9Yq"),
            (i = [n("EVdn")]),
            void 0 ===
                (r = function(t) {
                    return (function() {
                        var e,
                            n,
                            i,
                            r = 0,
                            s = "error",
                            o = "info",
                            a = "success",
                            l = "warning",
                            c = {
                                clear: function(n, i) {
                                    var r = f();
                                    e || u(r),
                                        h(n, r, i) ||
                                            (function(n) {
                                                for (
                                                    var i = e.children(),
                                                        r = i.length - 1;
                                                    r >= 0;
                                                    r--
                                                )
                                                    h(t(i[r]), n);
                                            })(r);
                                },
                                remove: function(n) {
                                    var i = f();
                                    e || u(i),
                                        n && 0 === t(":focus", n).length
                                            ? g(n)
                                            : e.children().length && e.remove();
                                },
                                error: function(t, e, n) {
                                    return p({
                                        type: s,
                                        iconClass: f().iconClasses.error,
                                        message: t,
                                        optionsOverride: n,
                                        title: e
                                    });
                                },
                                getContainer: u,
                                info: function(t, e, n) {
                                    return p({
                                        type: o,
                                        iconClass: f().iconClasses.info,
                                        message: t,
                                        optionsOverride: n,
                                        title: e
                                    });
                                },
                                options: {},
                                subscribe: function(t) {
                                    n = t;
                                },
                                success: function(t, e, n) {
                                    return p({
                                        type: a,
                                        iconClass: f().iconClasses.success,
                                        message: t,
                                        optionsOverride: n,
                                        title: e
                                    });
                                },
                                version: "2.1.4",
                                warning: function(t, e, n) {
                                    return p({
                                        type: l,
                                        iconClass: f().iconClasses.warning,
                                        message: t,
                                        optionsOverride: n,
                                        title: e
                                    });
                                }
                            };
                        return c;
                        function u(n, i) {
                            return (
                                n || (n = f()),
                                (e = t("#" + n.containerId)).length
                                    ? e
                                    : (i &&
                                          (e = (function(n) {
                                              return (
                                                  (e = t("<div/>")
                                                      .attr("id", n.containerId)
                                                      .addClass(
                                                          n.positionClass
                                                      )).appendTo(t(n.target)),
                                                  e
                                              );
                                          })(n)),
                                      e)
                            );
                        }
                        function h(e, n, i) {
                            var r = !(!i || !i.force) && i.force;
                            return !(
                                !e ||
                                (!r && 0 !== t(":focus", e).length) ||
                                (e[n.hideMethod]({
                                    duration: n.hideDuration,
                                    easing: n.hideEasing,
                                    complete: function() {
                                        g(e);
                                    }
                                }),
                                0)
                            );
                        }
                        function d(t) {
                            n && n(t);
                        }
                        function p(n) {
                            var s = f(),
                                o = n.iconClass || s.iconClass;
                            if (
                                (void 0 !== n.optionsOverride &&
                                    ((s = t.extend(s, n.optionsOverride)),
                                    (o = n.optionsOverride.iconClass || o)),
                                !(function(t, e) {
                                    if (t.preventDuplicates) {
                                        if (e.message === i) return !0;
                                        i = e.message;
                                    }
                                    return !1;
                                })(s, n))
                            ) {
                                r++, (e = u(s, !0));
                                var a = null,
                                    l = t("<div/>"),
                                    c = t("<div/>"),
                                    h = t("<div/>"),
                                    p = t("<div/>"),
                                    m = t(s.closeHtml),
                                    v = {
                                        intervalId: null,
                                        hideEta: null,
                                        maxHideTime: null
                                    },
                                    y = {
                                        toastId: r,
                                        state: "visible",
                                        startTime: new Date(),
                                        options: s,
                                        map: n
                                    };
                                return (
                                    n.iconClass &&
                                        l.addClass(s.toastClass).addClass(o),
                                    (function() {
                                        if (n.title) {
                                            var t = n.title;
                                            s.escapeHtml && (t = w(n.title)),
                                                c
                                                    .append(t)
                                                    .addClass(s.titleClass),
                                                l.append(c);
                                        }
                                    })(),
                                    (function() {
                                        if (n.message) {
                                            var t = n.message;
                                            s.escapeHtml && (t = w(n.message)),
                                                h
                                                    .append(t)
                                                    .addClass(s.messageClass),
                                                l.append(h);
                                        }
                                    })(),
                                    s.closeButton &&
                                        (m
                                            .addClass(s.closeClass)
                                            .attr("role", "button"),
                                        l.prepend(m)),
                                    s.progressBar &&
                                        (p.addClass(s.progressClass),
                                        l.prepend(p)),
                                    s.rtl && l.addClass("rtl"),
                                    s.newestOnTop ? e.prepend(l) : e.append(l),
                                    (function() {
                                        var t = "";
                                        switch (n.iconClass) {
                                            case "toast-success":
                                            case "toast-info":
                                                t = "polite";
                                                break;
                                            default:
                                                t = "assertive";
                                        }
                                        l.attr("aria-live", t);
                                    })(),
                                    l.hide(),
                                    l[s.showMethod]({
                                        duration: s.showDuration,
                                        easing: s.showEasing,
                                        complete: s.onShown
                                    }),
                                    s.timeOut > 0 &&
                                        ((a = setTimeout(x, s.timeOut)),
                                        (v.maxHideTime = parseFloat(s.timeOut)),
                                        (v.hideEta =
                                            new Date().getTime() +
                                            v.maxHideTime),
                                        s.progressBar &&
                                            (v.intervalId = setInterval(
                                                C,
                                                10
                                            ))),
                                    s.closeOnHover && l.hover(b, _),
                                    !s.onclick && s.tapToDismiss && l.click(x),
                                    s.closeButton &&
                                        m &&
                                        m.click(function(t) {
                                            t.stopPropagation
                                                ? t.stopPropagation()
                                                : void 0 !== t.cancelBubble &&
                                                  !0 !== t.cancelBubble &&
                                                  (t.cancelBubble = !0),
                                                s.onCloseClick &&
                                                    s.onCloseClick(t),
                                                x(!0);
                                        }),
                                    s.onclick &&
                                        l.click(function(t) {
                                            s.onclick(t), x();
                                        }),
                                    d(y),
                                    s.debug && console && console.log(y),
                                    l
                                );
                            }
                            function w(t) {
                                return (
                                    null == t && (t = ""),
                                    t
                                        .replace(/&/g, "&amp;")
                                        .replace(/"/g, "&quot;")
                                        .replace(/'/g, "&#39;")
                                        .replace(/</g, "&lt;")
                                        .replace(/>/g, "&gt;")
                                );
                            }
                            function x(e) {
                                var n =
                                        e && !1 !== s.closeMethod
                                            ? s.closeMethod
                                            : s.hideMethod,
                                    i =
                                        e && !1 !== s.closeDuration
                                            ? s.closeDuration
                                            : s.hideDuration,
                                    r =
                                        e && !1 !== s.closeEasing
                                            ? s.closeEasing
                                            : s.hideEasing;
                                if (!t(":focus", l).length || e)
                                    return (
                                        clearTimeout(v.intervalId),
                                        l[n]({
                                            duration: i,
                                            easing: r,
                                            complete: function() {
                                                g(l),
                                                    clearTimeout(a),
                                                    s.onHidden &&
                                                        "hidden" !== y.state &&
                                                        s.onHidden(),
                                                    (y.state = "hidden"),
                                                    (y.endTime = new Date()),
                                                    d(y);
                                            }
                                        })
                                    );
                            }
                            function _() {
                                (s.timeOut > 0 || s.extendedTimeOut > 0) &&
                                    ((a = setTimeout(x, s.extendedTimeOut)),
                                    (v.maxHideTime = parseFloat(
                                        s.extendedTimeOut
                                    )),
                                    (v.hideEta =
                                        new Date().getTime() + v.maxHideTime));
                            }
                            function b() {
                                clearTimeout(a),
                                    (v.hideEta = 0),
                                    l.stop(!0, !0)[s.showMethod]({
                                        duration: s.showDuration,
                                        easing: s.showEasing
                                    });
                            }
                            function C() {
                                var t =
                                    ((v.hideEta - new Date().getTime()) /
                                        v.maxHideTime) *
                                    100;
                                p.width(t + "%");
                            }
                        }
                        function f() {
                            return t.extend(
                                {},
                                {
                                    tapToDismiss: !0,
                                    toastClass: "toast",
                                    containerId: "toast-container",
                                    debug: !1,
                                    showMethod: "fadeIn",
                                    showDuration: 300,
                                    showEasing: "swing",
                                    onShown: void 0,
                                    hideMethod: "fadeOut",
                                    hideDuration: 1e3,
                                    hideEasing: "swing",
                                    onHidden: void 0,
                                    closeMethod: !1,
                                    closeDuration: !1,
                                    closeEasing: !1,
                                    closeOnHover: !0,
                                    extendedTimeOut: 1e3,
                                    iconClasses: {
                                        error: "toast-error",
                                        info: "toast-info",
                                        success: "toast-success",
                                        warning: "toast-warning"
                                    },
                                    iconClass: "toast-info",
                                    positionClass: "toast-top-right",
                                    timeOut: 5e3,
                                    titleClass: "toast-title",
                                    messageClass: "toast-message",
                                    escapeHtml: !1,
                                    target: "body",
                                    closeHtml:
                                        '<button type="button">&times;</button>',
                                    closeClass: "toast-close-button",
                                    newestOnTop: !0,
                                    preventDuplicates: !1,
                                    progressBar: !1,
                                    progressClass: "toast-progress",
                                    rtl: !1
                                },
                                c.options
                            );
                        }
                        function g(t) {
                            e || (e = u()),
                                t.is(":visible") ||
                                    (t.remove(),
                                    (t = null),
                                    0 === e.children().length &&
                                        (e.remove(), (i = void 0)));
                        }
                    })();
                }.apply(e, i)) || (t.exports = r);
    },
    uObM: function(t, e, n) {
        "use strict";
        n.r(e),
            function(t) {
                var e = n("KDh+"),
                    i = n("WkSt"),
                    r =
                        (n("UYrX"),
                        {
                            init: function() {
                                this.loadDataAfterLoadPage(),
                                    this.loadCssLazy(),
                                    this.loadFile();
                            },
                            runSlider: function() {
                                DEVICE, DEVICE;
                                t(".js-banner").owlCarousel({
                                    animateOut: "fadeOut",
                                    animateIn: "fadeIn",
                                    items: 1,
                                    smartSpeed: 450,
                                    loop: !0,
                                    autoplay: !0
                                });
                            },
                            loadCssLazy: function() {
                                "undefined" != typeof CSS && Object(i.a)(CSS);
                            },
                            loadDataAfterLoadPage: function() {
                                var e = this;
                                t(window).on("load", function() {
                                    console.log("window is loaded"),
                                        "undefined" !=
                                            typeof routeRenderSlide &&
                                            t.ajax({
                                                url: routeRenderSlide,
                                                method: "GET",
                                                success: function(n) {
                                                    t("#content-slide")
                                                        .html("")
                                                        .html(n.data),
                                                        e.runSlider();
                                                }
                                            });
                                });
                            },
                            loadFile: function() {
                                "undefined" != typeof URL_LOAD_DOCUMENT &&
                                    t.ajax({
                                        url: URL_LOAD_DOCUMENT,
                                        beforeSend: function(e) {
                                            t("#content-document").html(
                                                '<div class="sk-circle">\n                          <div class="sk-circle1 sk-child"></div>\n                          <div class="sk-circle2 sk-child"></div>\n                          <div class="sk-circle3 sk-child"></div>\n                          <div class="sk-circle4 sk-child"></div>\n                          <div class="sk-circle5 sk-child"></div>\n                          <div class="sk-circle6 sk-child"></div>\n                          <div class="sk-circle7 sk-child"></div>\n                          <div class="sk-circle8 sk-child"></div>\n                          <div class="sk-circle9 sk-child"></div>\n                          <div class="sk-circle10 sk-child"></div>\n                          <div class="sk-circle11 sk-child"></div>\n                          <div class="sk-circle12 sk-child"></div>\n                        </div>'
                                            );
                                        },
                                        method: "GET",
                                        success: function(e) {
                                            t("#content-document").html(e.html);
                                        }
                                    });
                            }
                        });
                t(function() {
                    r.init(), e.a.init();
                });
            }.call(this, n("EVdn"));
    },
    z1bI: function(t, e, n) {
        (function(t) {
            var e = {
                init: function() {
                    this.openSidebar();
                },
                openSidebar: function() {
                    t(".js-open-bar").on("click", function(e) {
                        e.preventDefault(), t(this).toggleClass("change");
                    });
                }
            };
            t(function() {
                e.init();
            });
        }.call(this, n("EVdn")));
    }
});

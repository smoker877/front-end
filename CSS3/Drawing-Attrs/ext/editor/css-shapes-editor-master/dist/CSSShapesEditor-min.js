// Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// css-shapes-editor 0.10.0
//
// Editor for CSS Shapes in the browser.
//
// build: 2015-05-21
!function (a, b) {
    "function" == typeof define && define.amd ? define(b) : a.CSSShapesEditor = b()
}(this, function () {
    var a, b, c;
    return function (d) {
        function e(a, b) {
            return u.call(a, b)
        }

        function f(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m = b && b.split("/"), n = s.map, o = n && n["*"] || {};
            if (a && "." === a.charAt(0))if (b) {
                for (m = m.slice(0, m.length - 1), a = m.concat(a.split("/")), j = 0; j < a.length; j += 1)if (l = a[j], "." === l)a.splice(j, 1), j -= 1; else if (".." === l) {
                    if (1 === j && (".." === a[2] || ".." === a[0]))break;
                    j > 0 && (a.splice(j - 1, 2), j -= 2)
                }
                a = a.join("/")
            } else 0 === a.indexOf("./") && (a = a.substring(2));
            if ((m || o) && n) {
                for (c = a.split("/"), j = c.length; j > 0; j -= 1) {
                    if (d = c.slice(0, j).join("/"), m)for (k = m.length; k > 0; k -= 1)if (e = n[m.slice(0, k).join("/")], e && (e = e[d])) {
                        f = e, g = j;
                        break
                    }
                    if (f)break;
                    !h && o && o[d] && (h = o[d], i = j)
                }
                !f && h && (f = h, g = i), f && (c.splice(0, g, f), a = c.join("/"))
            }
            return a
        }

        function g(a, b) {
            return function () {
                return n.apply(d, v.call(arguments, 0).concat([a, b]))
            }
        }

        function h(a) {
            return function (b) {
                return f(b, a)
            }
        }

        function i(a) {
            return function (b) {
                q[a] = b
            }
        }

        function j(a) {
            if (e(r, a)) {
                var b = r[a];
                delete r[a], t[a] = !0, m.apply(d, b)
            }
            if (!e(q, a) && !e(t, a))throw new Error("No " + a);
            return q[a]
        }

        function k(a) {
            var b, c = a ? a.indexOf("!") : -1;
            return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a]
        }

        function l(a) {
            return function () {
                return s && s.config && s.config[a] || {}
            }
        }

        var m, n, o, p, q = {}, r = {}, s = {}, t = {}, u = Object.prototype.hasOwnProperty, v = [].slice;
        o = function (a, b) {
            var c, d = k(a), e = d[0];
            return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), d = k(a), e = d[0], a = d[1], e && (c = j(e))), {
                f: e ? e + "!" + a : a,
                n: a,
                pr: e,
                p: c
            }
        }, p = {
            require: function (a) {
                return g(a)
            }, exports: function (a) {
                var b = q[a];
                return "undefined" != typeof b ? b : q[a] = {}
            }, module: function (a) {
                return {id: a, uri: "", exports: q[a], config: l(a)}
            }
        }, m = function (a, b, c, f) {
            var h, k, l, m, n, s, u = [];
            if (f = f || a, "function" == typeof c) {
                for (b = !b.length && c.length ? ["require", "exports", "module"] : b, n = 0; n < b.length; n += 1)if (m = o(b[n], f), k = m.f, "require" === k)u[n] = p.require(a); else if ("exports" === k)u[n] = p.exports(a), s = !0; else if ("module" === k)h = u[n] = p.module(a); else if (e(q, k) || e(r, k) || e(t, k))u[n] = j(k); else {
                    if (!m.p)throw new Error(a + " missing " + k);
                    m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k]
                }
                l = c.apply(q[a], u), a && (h && h.exports !== d && h.exports !== q[a] ? q[a] = h.exports : l === d && s || (q[a] = l))
            } else a && (q[a] = c)
        }, a = b = n = function (a, b, c, e, f) {
            return "string" == typeof a ? p[a] ? p[a](b) : j(o(a, b).f) : (a.splice || (s = a, b.splice ? (a = b, b = c, c = null) : a = d), b = b || function () {
            }, "function" == typeof c && (c = e, e = f), e ? m(d, a, b, c) : setTimeout(function () {
                m(d, a, b, c)
            }, 4), n)
        }, n.config = function (a) {
            return s = a, s.deps && n(s.deps, s.callback), n
        }, a._defined = q, c = function (a, b, c) {
            b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [a, b, c])
        }, c.amd = {jQuery: !0}
    }(), c("third-party/almond/almond", function () {
    }), function (a) {
        var b, d, e = "0.4.2", f = "hasOwnProperty", g = /[\.\/]/, h = "*", i = function () {
        }, j = function (a, b) {
            return a - b
        }, k = {n: {}}, l = function (a, c) {
            a = String(a);
            var e, f = d, g = Array.prototype.slice.call(arguments, 2), h = l.listeners(a), i = 0, k = [], m = {}, n = [], o = b;
            b = a, d = 0;
            for (var p = 0, q = h.length; q > p; p++)"zIndex"in h[p] && (k.push(h[p].zIndex), h[p].zIndex < 0 && (m[h[p].zIndex] = h[p]));
            for (k.sort(j); k[i] < 0;)if (e = m[k[i++]], n.push(e.apply(c, g)), d)return d = f, n;
            for (p = 0; q > p; p++)if (e = h[p], "zIndex"in e)if (e.zIndex == k[i]) {
                if (n.push(e.apply(c, g)), d)break;
                do if (i++, e = m[k[i]], e && n.push(e.apply(c, g)), d)break; while (e)
            } else m[e.zIndex] = e; else if (n.push(e.apply(c, g)), d)break;
            return d = f, b = o, n.length ? n : null
        };
        l._events = k, l.listeners = function (a) {
            var b, c, d, e, f, i, j, l, m = a.split(g), n = k, o = [n], p = [];
            for (e = 0, f = m.length; f > e; e++) {
                for (l = [], i = 0, j = o.length; j > i; i++)for (n = o[i].n, c = [n[m[e]], n[h]], d = 2; d--;)b = c[d], b && (l.push(b), p = p.concat(b.f || []));
                o = l
            }
            return p
        }, l.on = function (a, b) {
            if (a = String(a), "function" != typeof b)return function () {
            };
            for (var c = a.split(g), d = k, e = 0, f = c.length; f > e; e++)d = d.n, d = d.hasOwnProperty(c[e]) && d[c[e]] || (d[c[e]] = {n: {}});
            for (d.f = d.f || [], e = 0, f = d.f.length; f > e; e++)if (d.f[e] == b)return i;
            return d.f.push(b), function (a) {
                +a == +a && (b.zIndex = +a)
            }
        }, l.f = function (a) {
            var b = [].slice.call(arguments, 1);
            return function () {
                l.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
            }
        }, l.stop = function () {
            d = 1
        }, l.nt = function (a) {
            return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b
        }, l.nts = function () {
            return b.split(g)
        }, l.off = l.unbind = function (a, b) {
            if (!a)return void(l._events = k = {n: {}});
            var c, d, e, i, j, m, n, o = a.split(g), p = [k];
            for (i = 0, j = o.length; j > i; i++)for (m = 0; m < p.length; m += e.length - 2) {
                if (e = [m, 1], c = p[m].n, o[i] != h)c[o[i]] && e.push(c[o[i]]); else for (d in c)c[f](d) && e.push(c[d]);
                p.splice.apply(p, e)
            }
            for (i = 0, j = p.length; j > i; i++)for (c = p[i]; c.n;) {
                if (b) {
                    if (c.f) {
                        for (m = 0, n = c.f.length; n > m; m++)if (c.f[m] == b) {
                            c.f.splice(m, 1);
                            break
                        }
                        !c.f.length && delete c.f
                    }
                    for (d in c.n)if (c.n[f](d) && c.n[d].f) {
                        var q = c.n[d].f;
                        for (m = 0, n = q.length; n > m; m++)if (q[m] == b) {
                            q.splice(m, 1);
                            break
                        }
                        !q.length && delete c.n[d].f
                    }
                } else {
                    delete c.f;
                    for (d in c.n)c.n[f](d) && c.n[d].f && delete c.n[d].f
                }
                c = c.n
            }
        }, l.once = function (a, b) {
            var c = function () {
                return l.unbind(a, c), b.apply(this, arguments)
            };
            return l.on(a, c)
        }, l.version = e, l.toString = function () {
            return "You are running Eve " + e
        }, "undefined" != typeof module && module.exports ? module.exports = l : "undefined" != typeof c ? c("eve", [], function () {
            return l
        }) : a.eve = l
    }(this), c("CSSUtils", [], function () {
        function a(a, b, c) {
            var d = a.match(/^\s*(-?\d+(?:\.\d+)?)(\S*)\s*$/), e = d ? parseFloat(d[1]) : 0, g = d ? d[2] : "", h = f[g];
            return d && h ? {value: Math.round(20 * h.call(null, e, b, c)) / 20, unit: g} : {
                value: e ? e : 0,
                unit: g ? g : "px"
            }
        }

        function b(a, b, c, d) {
            var e = g[b];
            return e ? "" + Math.round(20 * e.call(null, a, c, d)) / 20 + b : "" + a + "px"
        }

        function c(a, b) {
            var c = a.offsetWidth, d = a.offsetHeight, e = getComputedStyle(a), f = parseFloat(e.borderLeftWidth), g = parseFloat(e.borderRightWidth), h = parseFloat(e.borderTopWidth), i = parseFloat(e.borderBottomWidth), j = parseFloat(e.paddingLeft), k = parseFloat(e.paddingRight), l = parseFloat(e.paddingTop), m = parseFloat(e.paddingBottom), n = parseFloat(e.marginLeft), o = parseFloat(e.marginRight), p = parseFloat(e.marginTop), q = parseFloat(e.marginBottom), r = {
                top: 0,
                left: 0,
                width: 0,
                height: 0
            };
            switch (b) {
                case"content-box":
                    r.top = h + l, r.left = f + j, r.width = c - f - j - k - g, r.height = d - h - l - m - i;
                    break;
                case"padding-box":
                    r.top = h, r.left = f, r.width = c - f - g, r.height = d - h - i;
                    break;
                case"border-box":
                    r.top = 0, r.left = 0, r.width = c, r.height = d;
                    break;
                case"margin-box":
                    r.top = 0 - p, r.left = 0 - n, r.width = c + n + o, r.height = d + p + q;
                    break;
                default:
                    throw new TypeError("Invalid parameter, boxType: " + b)
            }
            return r
        }

        function d(a) {
            if (!a || "string" != typeof a)throw new TypeError("Invalid input, expected string, got " + a);
            var b = ["left", "right"], c = ["top", "bottom"], d = "50%", e = "50%", f = {}, g = {
                top: "0%",
                right: "100%",
                left: "0%",
                bottom: "100%",
                center: "50%"
            }, h = a.trim().split(/\s+/);
            switch (h.length) {
                case 1:
                    if (b.indexOf(h[0]) > -1) {
                        f.x = g[h[0]], f.y = e;
                        break
                    }
                    if (c.indexOf(h[0]) > -1) {
                        f.x = d, f.y = g[h[0]];
                        break
                    }
                    "center" === h[0] ? (f.x = d, f.y = e) : (f.x = h[0], f.y = e);
                    break;
                case 2:
                    if (b.indexOf(h[0]) > -1 && b.indexOf(h[1]) > -1 || c.indexOf(h[0]) > -1 && c.indexOf(h[1]) > -1 || c.indexOf(h[0]) > -1 && b.concat("center").indexOf(h[1]) < 0 || b.indexOf(h[1]) > -1 && c.concat("center").indexOf(h[0]) < 0)throw new Error("Invalid origin string provided: " + a);
                    if (b.indexOf(h[0]) > -1) {
                        f.x = g[h[0]], f.y = g[h[1]] || h[1];
                        break
                    }
                    if (c.indexOf(h[0]) > -1) {
                        f.x = g[h[1]] || h[1], f.y = g[h[0]];
                        break
                    }
                    if (c.indexOf(h[1]) > -1) {
                        f.x = g[h[0]] || h[0], f.y = g[h[1]];
                        break
                    }
                    if ("center" === h[0]) {
                        f.x = d, f.y = g[h[1]] || h[1];
                        break
                    }
                    if ("center" === h[1]) {
                        f.x = g[h[0]] || h[0], f.y = e;
                        break
                    }
                    f.x = h[0], f.y = h[1]
            }
            return f
        }

        function e() {
            return this instanceof e ? {
                convertToPixels: a,
                convertFromPixels: b,
                getOriginCoords: d,
                getBox: c,
                units: Object.keys(f)
            } : new e
        }

        var f = {
            px: function (a) {
                return a
            }, "in": function (a) {
                return 96 * a
            }, cm: function (a) {
                return a / .02645833333
            }, mm: function (a) {
                return a / .26458333333
            }, pt: function (a) {
                return a / .75
            }, pc: function (a) {
                return a / .0625
            }, em: function (a, b) {
                return a * parseFloat(getComputedStyle(b).fontSize)
            }, rem: function (a, b) {
                return a * parseFloat(getComputedStyle(b.ownerDocument.documentElement).fontSize)
            }, vw: function (a) {
                return a / 100 * window.innerWidth
            }, vh: function (a) {
                return a / 100 * window.innerHeight
            }, "%": function (a, b, d) {
                d = d || {};
                var e = b ? c(b, d.boxType) : {top: 0, left: 0, width: 0, height: 0};
                return d.isRadius ? Math.round(a / 100 * (Math.sqrt(e.height * e.height + e.width * e.width) / Math.sqrt(2))) : d.isHeightRelated ? a / 100 * e.height : a / 100 * e.width
            }
        }, g = {
            px: function (a) {
                return a
            }, "in": function (a) {
                return a / 96
            }, cm: function (a) {
                return .02645833333 * a
            }, mm: function (a) {
                return .26458333333 * a
            }, pt: function (a) {
                return .75 * a
            }, pc: function (a) {
                return .0625 * a
            }, em: function (a, b) {
                return a / parseFloat(getComputedStyle(b).fontSize)
            }, rem: function (a, b) {
                return a / parseFloat(getComputedStyle(b.ownerDocument.documentElement).fontSize)
            }, vw: function (a) {
                return 100 * a / window.innerWidth
            }, vh: function (a) {
                return 100 * a / window.innerHeight
            }, "%": function (a, b, d) {
                d = d || {};
                var e = b ? c(b, d.boxType) : {top: 0, left: 0, width: 0, height: 0};
                return d.isRadius ? Math.round(100 * a / (Math.sqrt(e.height * e.height + e.width * e.width) / Math.sqrt(2))) : d.isHeightRelated ? 100 * a / e.height : 100 * a / e.width
            }
        };
        return new e
    }), !function (a) {
        var b, d, e = "0.4.2", f = "hasOwnProperty", g = /[\.\/]/, h = "*", i = function () {
        }, j = function (a, b) {
            return a - b
        }, k = {n: {}}, l = function (a, c) {
            a = String(a);
            var e, f = d, g = Array.prototype.slice.call(arguments, 2), h = l.listeners(a), i = 0, k = [], m = {}, n = [], o = b;
            b = a, d = 0;
            for (var p = 0, q = h.length; q > p; p++)"zIndex"in h[p] && (k.push(h[p].zIndex), h[p].zIndex < 0 && (m[h[p].zIndex] = h[p]));
            for (k.sort(j); k[i] < 0;)if (e = m[k[i++]], n.push(e.apply(c, g)), d)return d = f, n;
            for (p = 0; q > p; p++)if (e = h[p], "zIndex"in e)if (e.zIndex == k[i]) {
                if (n.push(e.apply(c, g)), d)break;
                do if (i++, e = m[k[i]], e && n.push(e.apply(c, g)), d)break; while (e)
            } else m[e.zIndex] = e; else if (n.push(e.apply(c, g)), d)break;
            return d = f, b = o, n.length ? n : null
        };
        l._events = k, l.listeners = function (a) {
            var b, c, d, e, f, i, j, l, m = a.split(g), n = k, o = [n], p = [];
            for (e = 0, f = m.length; f > e; e++) {
                for (l = [], i = 0, j = o.length; j > i; i++)for (n = o[i].n, c = [n[m[e]], n[h]], d = 2; d--;)b = c[d], b && (l.push(b), p = p.concat(b.f || []));
                o = l
            }
            return p
        }, l.on = function (a, b) {
            if (a = String(a), "function" != typeof b)return function () {
            };
            for (var c = a.split(g), d = k, e = 0, f = c.length; f > e; e++)d = d.n, d = d.hasOwnProperty(c[e]) && d[c[e]] || (d[c[e]] = {n: {}});
            for (d.f = d.f || [], e = 0, f = d.f.length; f > e; e++)if (d.f[e] == b)return i;
            return d.f.push(b), function (a) {
                +a == +a && (b.zIndex = +a)
            }
        }, l.f = function (a) {
            var b = [].slice.call(arguments, 1);
            return function () {
                l.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
            }
        }, l.stop = function () {
            d = 1
        }, l.nt = function (a) {
            return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(b) : b
        }, l.nts = function () {
            return b.split(g)
        }, l.off = l.unbind = function (a, b) {
            if (!a)return void(l._events = k = {n: {}});
            var c, d, e, i, j, m, n, o = a.split(g), p = [k];
            for (i = 0, j = o.length; j > i; i++)for (m = 0; m < p.length; m += e.length - 2) {
                if (e = [m, 1], c = p[m].n, o[i] != h)c[o[i]] && e.push(c[o[i]]); else for (d in c)c[f](d) && e.push(c[d]);
                p.splice.apply(p, e)
            }
            for (i = 0, j = p.length; j > i; i++)for (c = p[i]; c.n;) {
                if (b) {
                    if (c.f) {
                        for (m = 0, n = c.f.length; n > m; m++)if (c.f[m] == b) {
                            c.f.splice(m, 1);
                            break
                        }
                        !c.f.length && delete c.f
                    }
                    for (d in c.n)if (c.n[f](d) && c.n[d].f) {
                        var q = c.n[d].f;
                        for (m = 0, n = q.length; n > m; m++)if (q[m] == b) {
                            q.splice(m, 1);
                            break
                        }
                        !q.length && delete c.n[d].f
                    }
                } else {
                    delete c.f;
                    for (d in c.n)c.n[f](d) && c.n[d].f && delete c.n[d].f
                }
                c = c.n
            }
        }, l.once = function (a, b) {
            var c = function () {
                return l.unbind(a, c), b.apply(this, arguments)
            };
            return l.on(a, c)
        }, l.version = e, l.toString = function () {
            return "You are running Eve " + e
        }, "undefined" != typeof module && module.exports ? module.exports = l : "undefined" != typeof c ? c("eve", [], function () {
            return l
        }) : a.eve = l
    }(this), function (a, b) {
        "function" == typeof c && c.amd ? c("snap", ["eve"], function (c) {
            return b(a, c)
        }) : b(a, a.eve)
    }(this, function (a, b) {
        var c = function (b) {
            var c = {}, d = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function (a) {
                    setTimeout(a, 16)
                }, e = Array.isArray || function (a) {
                    return a instanceof Array || "[object Array]" == Object.prototype.toString.call(a)
                }, f = 0, g = "M" + (+new Date).toString(36), h = function () {
                return g + (f++).toString(36)
            }, i = Date.now || function () {
                    return +new Date
                }, j = function (a) {
                var b = this;
                if (null == a)return b.s;
                var c = b.s - a;
                b.b += b.dur * c, b.B += b.dur * c, b.s = a
            }, k = function (a) {
                var b = this;
                return null == a ? b.spd : void(b.spd = a)
            }, l = function (a) {
                var b = this;
                return null == a ? b.dur : (b.s = b.s * a / b.dur, void(b.dur = a))
            }, m = function () {
                var a = this;
                delete c[a.id], b("mina.stop." + a.id, a)
            }, n = function () {
                var a = this;
                a.pdif || (delete c[a.id], a.pdif = a.get() - a.b)
            }, o = function () {
                var a = this;
                a.pdif && (a.b = a.get() - a.pdif, delete a.pdif, c[a.id] = a)
            }, p = function () {
                var a = 0;
                for (var f in c)if (c.hasOwnProperty(f)) {
                    var g, h = c[f], i = h.get();
                    if (a++, h.s = (i - h.b) / (h.dur / h.spd), h.s >= 1 && (delete c[f], h.s = 1, a--, function (a) {
                            setTimeout(function () {
                                b("mina.finish." + a.id, a)
                            })
                        }(h)), e(h.start)) {
                        g = [];
                        for (var j = 0, k = h.start.length; k > j; j++)g[j] = +h.start[j] + (h.end[j] - h.start[j]) * h.easing(h.s)
                    } else g = +h.start + (h.end - h.start) * h.easing(h.s);
                    h.set(g)
                }
                a && d(p)
            }, q = function (a, b, e, f, g, i, r) {
                var s = {
                    id: h(),
                    start: a,
                    end: b,
                    b: e,
                    s: 0,
                    dur: f - e,
                    spd: 1,
                    get: g,
                    set: i,
                    easing: r || q.linear,
                    status: j,
                    speed: k,
                    duration: l,
                    stop: m,
                    pause: n,
                    resume: o
                };
                c[s.id] = s;
                var t, u = 0;
                for (t in c)if (c.hasOwnProperty(t) && (u++, 2 == u))break;
                return 1 == u && d(p), s
            };
            return q.time = i, q.getById = function (a) {
                return c[a] || null
            }, q.linear = function (a) {
                return a
            }, q.easeout = function (a) {
                return Math.pow(a, 1.7)
            }, q.easein = function (a) {
                return Math.pow(a, .48)
            }, q.easeinout = function (a) {
                if (1 == a)return 1;
                if (0 == a)return 0;
                var b = .48 - a / 1.04, c = Math.sqrt(.1734 + b * b), d = c - b, e = Math.pow(Math.abs(d), 1 / 3) * (0 > d ? -1 : 1), f = -c - b, g = Math.pow(Math.abs(f), 1 / 3) * (0 > f ? -1 : 1), h = e + g + .5;
                return 3 * (1 - h) * h * h + h * h * h
            }, q.backin = function (a) {
                if (1 == a)return 1;
                var b = 1.70158;
                return a * a * ((b + 1) * a - b)
            }, q.backout = function (a) {
                if (0 == a)return 0;
                a -= 1;
                var b = 1.70158;
                return a * a * ((b + 1) * a + b) + 1
            }, q.elastic = function (a) {
                return a == !!a ? a : Math.pow(2, -10 * a) * Math.sin(2 * (a - .075) * Math.PI / .3) + 1
            }, q.bounce = function (a) {
                var b, c = 7.5625, d = 2.75;
                return 1 / d > a ? b = c * a * a : 2 / d > a ? (a -= 1.5 / d, b = c * a * a + .75) : 2.5 / d > a ? (a -= 2.25 / d, b = c * a * a + .9375) : (a -= 2.625 / d, b = c * a * a + .984375), b
            }, a.mina = q, q
        }("undefined" == typeof b ? function () {
        } : b), d = function () {
            function d(a, b) {
                if (a) {
                    if (a.tagName)return z(a);
                    if (a instanceof u)return a;
                    if (null == b)return a = I.doc.querySelector(a), z(a)
                }
                return a = null == a ? "100%" : a, b = null == b ? "100%" : b, new y(a, b)
            }

            function e(a, b) {
                if (b) {
                    if ("string" == typeof a && (a = e(a)), "string" == typeof b)return "xlink:" == b.substring(0, 6) ? a.getAttributeNS(fb, b.substring(6)) : "xml:" == b.substring(0, 4) ? a.getAttributeNS(gb, b.substring(4)) : a.getAttribute(b);
                    for (var c in b)if (b[J](c)) {
                        var d = K(b[c]);
                        d ? "xlink:" == c.substring(0, 6) ? a.setAttributeNS(fb, c.substring(6), d) : "xml:" == c.substring(0, 4) ? a.setAttributeNS(gb, c.substring(4), d) : a.setAttribute(c, d) : a.removeAttribute(c)
                    }
                } else a = I.doc.createElementNS(gb, a);
                return a
            }

            function f(a, b) {
                return b = K.prototype.toLowerCase.call(b), "finite" == b ? isFinite(a) : "array" == b && (a instanceof Array || Array.isArray && Array.isArray(a)) ? !0 : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || U.call(a).slice(8, -1).toLowerCase() == b
            }

            function h(a) {
                if ("function" == typeof a || Object(a) !== a)return a;
                var b = new a.constructor;
                for (var c in a)a[J](c) && (b[c] = h(a[c]));
                return b
            }

            function i(a, b) {
                for (var c = 0, d = a.length; d > c; c++)if (a[c] === b)return a.push(a.splice(c, 1)[0])
            }

            function j(a, b, c) {
                function d() {
                    var e = Array.prototype.slice.call(arguments, 0), f = e.join("␀"), g = d.cache = d.cache || {}, h = d.count = d.count || [];
                    return g[J](f) ? (i(h, f), c ? c(g[f]) : g[f]) : (h.length >= 1e3 && delete g[h.shift()], h.push(f), g[f] = a.apply(b, e), c ? c(g[f]) : g[f])
                }

                return d
            }

            function k(a, b, c, d, e, f) {
                if (null == e) {
                    var g = a - c, h = b - d;
                    return g || h ? (180 + 180 * N.atan2(-h, -g) / R + 360) % 360 : 0
                }
                return k(a, b, e, f) - k(c, d, e, f)
            }

            function l(a) {
                return a % 360 * R / 180
            }

            function m(a) {
                return 180 * a / R % 360
            }

            function n(a, b, c, d, e, f) {
                return null == b && "[object SVGMatrix]" == U.call(a) ? (this.a = a.a, this.b = a.b, this.c = a.c, this.d = a.d, this.e = a.e, void(this.f = a.f)) : void(null != a ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
            }

            function o(a) {
                var b = [];
                return a = a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (a, c, d) {
                    return d = d.split(/\s*,\s*/), "rotate" == c && 1 == d.length && d.push(0, 0), "scale" == c && (2 == d.length && d.push(0, 0), 1 == d.length && d.push(d[0], 0, 0)), b.push("skewX" == c ? ["m", 1, 0, N.tan(l(d[0])), 1, 0, 0] : "skewY" == c ? ["m", 1, N.tan(l(d[0])), 0, 1, 0, 0] : [c.charAt(0)].concat(d)), a
                }), b
            }

            function p(a, b) {
                var c = pb(a), d = new n;
                if (c)for (var e = 0, f = c.length; f > e; e++) {
                    var g, h, i, j, k, l = c[e], m = l.length, o = K(l[0]).toLowerCase(), p = l[0] != o, q = p ? d.invert() : 0;
                    "t" == o && 3 == m ? p ? (g = q.x(0, 0), h = q.y(0, 0), i = q.x(l[1], l[2]), j = q.y(l[1], l[2]), d.translate(i - g, j - h)) : d.translate(l[1], l[2]) : "r" == o ? 2 == m ? (k = k || b, d.rotate(l[1], k.x + k.width / 2, k.y + k.height / 2)) : 4 == m && (p ? (i = q.x(l[2], l[3]), j = q.y(l[2], l[3]), d.rotate(l[1], i, j)) : d.rotate(l[1], l[2], l[3])) : "s" == o ? 2 == m || 3 == m ? (k = k || b, d.scale(l[1], l[m - 1], k.x + k.width / 2, k.y + k.height / 2)) : 4 == m ? p ? (i = q.x(l[2], l[3]), j = q.y(l[2], l[3]), d.scale(l[1], l[1], i, j)) : d.scale(l[1], l[1], l[2], l[3]) : 5 == m && (p ? (i = q.x(l[3], l[4]), j = q.y(l[3], l[4]), d.scale(l[1], l[2], i, j)) : d.scale(l[1], l[2], l[3], l[4])) : "m" == o && 7 == m && d.add(l[1], l[2], l[3], l[4], l[5], l[6])
                }
                return d
            }

            function q(a, b) {
                if (null == b) {
                    var c = !0;
                    if (b = a.node.getAttribute("linearGradient" == a.type || "radialGradient" == a.type ? "gradientTransform" : "pattern" == a.type ? "patternTransform" : "transform"), !b)return new n;
                    b = o(b)
                } else b = d._.rgTransform.test(b) ? K(b).replace(/\.{3}|\u2026/g, a._.transform || S) : o(b), f(b, "array") && (b = d.path ? d.path.toString.call(b) : K(b)), a._.transform = b;
                var e = p(b, a.getBBox(1));
                return c ? e : void(a.matrix = e)
            }

            function r(a) {
                var b = d._.someDefs;
                if (b && qb(b.ownerDocument.documentElement, b))return b;
                var c = a.node.ownerSVGElement && z(a.node.ownerSVGElement) || a.node.parentNode && z(a.node.parentNode) || d.select("svg") || d(0, 0), e = c.select("defs").node;
                return e || (e = x("defs", c.node).node), d._.someDefs = e, e
            }

            function s(a, b, c) {
                function d(a) {
                    return null == a ? S : a == +a ? a : (e(j, {width: a}), j.getBBox().width)
                }

                function f(a) {
                    return null == a ? S : a == +a ? a : (e(j, {height: a}), j.getBBox().height)
                }

                function g(d, e) {
                    null == b ? i[d] = e(a.attr(d)) : d == b && (i = e(null == c ? a.attr(d) : c))
                }

                var h = r(a), i = {}, j = h.querySelector(".svg---mgr");
                switch (j || (j = e("rect"), e(j, {
                    width: 10,
                    height: 10,
                    "class": "svg---mgr"
                }), h.appendChild(j)), a.type) {
                    case"rect":
                        g("rx", d), g("ry", f);
                    case"image":
                        g("width", d), g("height", f);
                    case"text":
                        g("x", d), g("y", f);
                        break;
                    case"circle":
                        g("cx", d), g("cy", f), g("r", d);
                        break;
                    case"ellipse":
                        g("cx", d), g("cy", f), g("rx", d), g("ry", f);
                        break;
                    case"line":
                        g("x1", d), g("x2", d), g("y1", f), g("y2", f);
                        break;
                    case"marker":
                        g("refX", d), g("markerWidth", d), g("refY", f), g("markerHeight", f);
                        break;
                    case"radialGradient":
                        g("fx", d), g("fy", f);
                        break;
                    case"tspan":
                        g("dx", d), g("dy", f);
                        break;
                    default:
                        g(b, d)
                }
                return i
            }

            function t(a) {
                f(a, "array") || (a = Array.prototype.slice.call(arguments, 0));
                for (var b = 0, c = 0, d = this.node; this[b];)delete this[b++];
                for (b = 0; b < a.length; b++)"set" == a[b].type ? a[b].forEach(function (a) {
                    d.appendChild(a.node)
                }) : d.appendChild(a[b].node);
                var e = d.childNodes;
                for (b = 0; b < e.length; b++)this[c++] = z(e[b])
            }

            function u(a) {
                if (a.snap in hb)return hb[a.snap];
                var b, c = this.id = eb();
                try {
                    b = a.ownerSVGElement
                } catch (d) {
                }
                if (this.node = a, b && (this.paper = new y(b)), this.type = a.tagName, this.anims = {}, this._ = {transform: []}, a.snap = c, hb[c] = this, "g" == this.type) {
                    this.add = t;
                    for (var e in y.prototype)y.prototype[J](e) && (this[e] = y.prototype[e])
                }
            }

            function v(a) {
                for (var b, c = 0, d = a.length; d > c; c++)if (b = b || a[c])return b
            }

            function w(a) {
                this.node = a
            }

            function x(a, b) {
                var c = e(a);
                b.appendChild(c);
                var d = z(c);
                return d.type = a, d
            }

            function y(a, b) {
                var c, d, f, g = y.prototype;
                if (a && "svg" == a.tagName) {
                    if (a.snap in hb)return hb[a.snap];
                    c = new u(a), d = a.getElementsByTagName("desc")[0], f = a.getElementsByTagName("defs")[0], d || (d = e("desc"), d.appendChild(I.doc.createTextNode("Created with Snap")), c.node.appendChild(d)), f || (f = e("defs"), c.node.appendChild(f)), c.defs = f;
                    for (var h in g)g[J](h) && (c[h] = g[h]);
                    c.paper = c.root = c
                } else c = x("svg", I.doc.body), e(c.node, {height: b, version: 1.1, width: a, xmlns: gb});
                return c
            }

            function z(a) {
                return a ? a instanceof u || a instanceof w ? a : "svg" == a.tagName ? new y(a) : new u(a) : a
            }

            function A() {
                return this.selectAll("stop")
            }

            function B(a, b) {
                var c = e("stop"), f = {offset: +b + "%"};
                return a = d.color(a), f["stop-color"] = a.hex, a.opacity < 1 && (f["stop-opacity"] = a.opacity), e(c, f), this.node.appendChild(c), this
            }

            function C() {
                if ("linearGradient" == this.type) {
                    var a = e(this.node, "x1") || 0, b = e(this.node, "x2") || 1, c = e(this.node, "y1") || 0, f = e(this.node, "y2") || 0;
                    return d._.box(a, c, N.abs(b - a), N.abs(f - c))
                }
                var g = this.node.cx || .5, h = this.node.cy || .5, i = this.node.r || 0;
                return d._.box(g - i, h - i, 2 * i, 2 * i)
            }

            function D(a, c) {
                function d(a, b) {
                    for (var c = (b - j) / (a - k), d = k; a > d; d++)h[d].offset = +(+j + c * (d - k)).toFixed(2);
                    k = a, j = b
                }

                var f, g = v(b("snap.util.grad.parse", null, c));
                if (!g)return null;
                g.params.unshift(a), f = "l" == g.type.toLowerCase() ? E.apply(0, g.params) : F.apply(0, g.params), g.type != g.type.toLowerCase() && e(f.node, {gradientUnits: "userSpaceOnUse"});
                var h = g.stops, i = h.length, j = 0, k = 0;
                i--;
                for (var l = 0; i > l; l++)"offset"in h[l] && d(l, h[l].offset);
                for (h[i].offset = h[i].offset || 100, d(i, h[i].offset), l = 0; i >= l; l++) {
                    var m = h[l];
                    f.addStop(m.color, m.offset)
                }
                return f
            }

            function E(a, b, c, d, f) {
                var g = x("linearGradient", a);
                return g.stops = A, g.addStop = B, g.getBBox = C, null != b && e(g.node, {
                    x1: b,
                    y1: c,
                    x2: d,
                    y2: f
                }), g
            }

            function F(a, b, c, d, f, g) {
                var h = x("radialGradient", a);
                return h.stops = A, h.addStop = B, h.getBBox = C, null != b && e(h.node, {
                    cx: b,
                    cy: c,
                    r: d
                }), null != f && null != g && e(h.node, {fx: f, fy: g}), h
            }

            function G(a) {
                return function (c) {
                    if (b.stop(), c instanceof w && 1 == c.node.childNodes.length && ("radialGradient" == c.node.firstChild.tagName || "linearGradient" == c.node.firstChild.tagName || "pattern" == c.node.firstChild.tagName) && (c = c.node.firstChild, r(this).appendChild(c), c = z(c)), c instanceof u)if ("radialGradient" == c.type || "linearGradient" == c.type || "pattern" == c.type) {
                        c.node.id || e(c.node, {id: c.id});
                        var f = "url(#" + c.node.id + ")"
                    } else f = c.attr(a); else if (f = d.color(c), f.error) {
                        var g = D(r(this), c);
                        g ? (g.node.id || e(g.node, {id: g.id}), f = "url(#" + g.node.id + ")") : f = c
                    } else f = K(f);
                    var h = {};
                    h[a] = f, e(this.node, h), this.node.style[a] = S
                }
            }

            function H(a) {
                for (var b = [], c = a.childNodes, d = 0, e = c.length; e > d; d++) {
                    var f = c[d];
                    3 == f.nodeType && b.push(f.nodeValue), "tspan" == f.tagName && b.push(1 == f.childNodes.length && 3 == f.firstChild.nodeType ? f.firstChild.nodeValue : H(f))
                }
                return b
            }

            d.version = "0.1.1", d.toString = function () {
                return "Snap v" + this.version
            }, d._ = {};
            var I = {win: a, doc: a.document};
            d._.glob = I;
            var J = "hasOwnProperty", K = String, L = parseFloat, M = parseInt, N = Math, O = N.max, P = N.min, Q = N.abs, R = (N.pow, N.PI), S = (N.round, ""), T = " ", U = Object.prototype.toString, V = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i, W = /^url\(#?([^)]+)\)$/, X = "	\n\f\r   ᠎             　\u2028\u2029", Y = new RegExp("[," + X + "]+"), Z = (new RegExp("[" + X + "]", "g"), new RegExp("[" + X + "]*,[" + X + "]*")), $ = {
                hs: 1,
                rg: 1
            }, _ = new RegExp("([a-z])[" + X + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + X + "]*,?[" + X + "]*)+)", "ig"), ab = new RegExp("([rstm])[" + X + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + X + "]*,?[" + X + "]*)+)", "ig"), bb = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + X + "]*,?[" + X + "]*", "ig"), cb = 0, db = "S" + (+new Date).toString(36), eb = function () {
                return db + (cb++).toString(36)
            }, fb = "http://www.w3.org/1999/xlink", gb = "http://www.w3.org/2000/svg", hb = {};
            d._.$ = e, d._.id = eb, d.format = function () {
                var a = /\{([^\}]+)\}/g, b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, c = function (a, c, d) {
                    var e = d;
                    return c.replace(b, function (a, b, c, d, f) {
                        b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
                    }), e = (null == e || e == d ? a : e) + ""
                };
                return function (b, d) {
                    return K(b).replace(a, function (a, b) {
                        return c(a, b, d)
                    })
                }
            }();
            var ib = function () {
                function a() {
                    this.parentNode.removeChild(this)
                }

                return function (b, c) {
                    var d = I.doc.createElement("img"), e = I.doc.body;
                    d.style.cssText = "position:absolute;left:-9999em;top:-9999em", d.onload = function () {
                        c.call(d), d.onload = d.onerror = null, e.removeChild(d)
                    }, d.onerror = a, e.appendChild(d), d.src = b
                }
            }();
            d._.clone = h, d._.cacher = j, d.rad = l, d.deg = m, d.angle = k, d.is = f, d.snapTo = function (a, b, c) {
                if (c = f(c, "finite") ? c : 10, f(a, "array")) {
                    for (var d = a.length; d--;)if (Q(a[d] - b) <= c)return a[d]
                } else {
                    a = +a;
                    var e = b % a;
                    if (c > e)return b - e;
                    if (e > a - c)return b - e + a
                }
                return b
            }, function (a) {
                function b(a) {
                    return a[0] * a[0] + a[1] * a[1]
                }

                function c(a) {
                    var c = N.sqrt(b(a));
                    a[0] && (a[0] /= c), a[1] && (a[1] /= c)
                }

                a.add = function (a, b, c, d, e, f) {
                    var g, h, i, j, k = [[], [], []], l = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]], m = [[a, c, e], [b, d, f], [0, 0, 1]];
                    for (a && a instanceof n && (m = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]]), g = 0; 3 > g; g++)for (h = 0; 3 > h; h++) {
                        for (j = 0, i = 0; 3 > i; i++)j += l[g][i] * m[i][h];
                        k[g][h] = j
                    }
                    return this.a = k[0][0], this.b = k[1][0], this.c = k[0][1], this.d = k[1][1], this.e = k[0][2], this.f = k[1][2], this
                }, a.invert = function () {
                    var a = this, b = a.a * a.d - a.b * a.c;
                    return new n(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b)
                }, a.clone = function () {
                    return new n(this.a, this.b, this.c, this.d, this.e, this.f)
                }, a.translate = function (a, b) {
                    return this.add(1, 0, 0, 1, a, b)
                }, a.scale = function (a, b, c, d) {
                    return null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d), this
                }, a.rotate = function (a, b, c) {
                    a = l(a), b = b || 0, c = c || 0;
                    var d = +N.cos(a).toFixed(9), e = +N.sin(a).toFixed(9);
                    return this.add(d, e, -e, d, b, c), this.add(1, 0, 0, 1, -b, -c)
                }, a.x = function (a, b) {
                    return a * this.a + b * this.c + this.e
                }, a.y = function (a, b) {
                    return a * this.b + b * this.d + this.f
                }, a.get = function (a) {
                    return +this[K.fromCharCode(97 + a)].toFixed(4)
                }, a.toString = function () {
                    return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
                }, a.offset = function () {
                    return [this.e.toFixed(4), this.f.toFixed(4)]
                }, a.split = function () {
                    var a = {};
                    a.dx = this.e, a.dy = this.f;
                    var d = [[this.a, this.c], [this.b, this.d]];
                    a.scalex = N.sqrt(b(d[0])), c(d[0]), a.shear = d[0][0] * d[1][0] + d[0][1] * d[1][1], d[1] = [d[1][0] - d[0][0] * a.shear, d[1][1] - d[0][1] * a.shear], a.scaley = N.sqrt(b(d[1])), c(d[1]), a.shear /= a.scaley;
                    var e = -d[0][1], f = d[1][1];
                    return 0 > f ? (a.rotate = m(N.acos(f)), 0 > e && (a.rotate = 360 - a.rotate)) : a.rotate = m(N.asin(e)), a.isSimple = !(+a.shear.toFixed(9) || a.scalex.toFixed(9) != a.scaley.toFixed(9) && a.rotate), a.isSuperSimple = !+a.shear.toFixed(9) && a.scalex.toFixed(9) == a.scaley.toFixed(9) && !a.rotate, a.noRotation = !+a.shear.toFixed(9) && !a.rotate, a
                }, a.toTransformString = function (a) {
                    var b = a || this.split();
                    return b.isSimple ? (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [+b.dx.toFixed(4), +b.dy.toFixed(4)] : S) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : S) + (b.rotate ? "r" + [+b.rotate.toFixed(4), 0, 0] : S)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
                }
            }(n.prototype), d.Matrix = n, d.getRGB = j(function (a) {
                if (!a || (a = K(a)).indexOf("-") + 1)return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: mb};
                if ("none" == a)return {r: -1, g: -1, b: -1, hex: "none", toString: mb};
                if (!($[J](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = jb(a)), !a)return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: mb
                };
                var b, c, e, g, h, i, j = a.match(V);
                return j ? (j[2] && (e = M(j[2].substring(5), 16), c = M(j[2].substring(3, 5), 16), b = M(j[2].substring(1, 3), 16)), j[3] && (e = M((h = j[3].charAt(3)) + h, 16), c = M((h = j[3].charAt(2)) + h, 16), b = M((h = j[3].charAt(1)) + h, 16)), j[4] && (i = j[4].split(Z), b = L(i[0]), "%" == i[0].slice(-1) && (b *= 2.55), c = L(i[1]), "%" == i[1].slice(-1) && (c *= 2.55), e = L(i[2]), "%" == i[2].slice(-1) && (e *= 2.55), "rgba" == j[1].toLowerCase().slice(0, 4) && (g = L(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100)), j[5] ? (i = j[5].split(Z), b = L(i[0]), "%" == i[0].slice(-1) && (b /= 100), c = L(i[1]), "%" == i[1].slice(-1) && (c /= 100), e = L(i[2]), "%" == i[2].slice(-1) && (e /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsba" == j[1].toLowerCase().slice(0, 4) && (g = L(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), d.hsb2rgb(b, c, e, g)) : j[6] ? (i = j[6].split(Z), b = L(i[0]), "%" == i[0].slice(-1) && (b /= 100), c = L(i[1]), "%" == i[1].slice(-1) && (c /= 100), e = L(i[2]), "%" == i[2].slice(-1) && (e /= 100), ("deg" == i[0].slice(-3) || "°" == i[0].slice(-1)) && (b /= 360), "hsla" == j[1].toLowerCase().slice(0, 4) && (g = L(i[3])), i[3] && "%" == i[3].slice(-1) && (g /= 100), d.hsl2rgb(b, c, e, g)) : (b = P(N.round(b), 255), c = P(N.round(c), 255), e = P(N.round(e), 255), g = P(O(g, 0), 1), j = {
                    r: b,
                    g: c,
                    b: e,
                    toString: mb
                }, j.hex = "#" + (16777216 | e | c << 8 | b << 16).toString(16).slice(1), j.opacity = f(g, "finite") ? g : 1, j)) : {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: mb
                }
            }, d), d.hsb = j(function (a, b, c) {
                return d.hsb2rgb(a, b, c).hex
            }), d.hsl = j(function (a, b, c) {
                return d.hsl2rgb(a, b, c).hex
            }), d.rgb = j(function (a, b, c, d) {
                if (f(d, "finite")) {
                    var e = N.round;
                    return "rgba(" + [e(a), e(b), e(c), +d.toFixed(2)] + ")"
                }
                return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
            });
            var jb = function (a) {
                var b = I.doc.getElementsByTagName("head")[0], c = "rgb(255, 0, 0)";
                return (jb = j(function (a) {
                    if ("red" == a.toLowerCase())return c;
                    b.style.color = c, b.style.color = a;
                    var d = I.doc.defaultView.getComputedStyle(b, S).getPropertyValue("color");
                    return d == c ? null : d
                }))(a)
            }, kb = function () {
                return "hsb(" + [this.h, this.s, this.b] + ")"
            }, lb = function () {
                return "hsl(" + [this.h, this.s, this.l] + ")"
            }, mb = function () {
                return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
            }, nb = function (a, b, c) {
                if (null == b && f(a, "object") && "r"in a && "g"in a && "b"in a && (c = a.b, b = a.g, a = a.r), null == b && f(a, string)) {
                    var e = d.getRGB(a);
                    a = e.r, b = e.g, c = e.b
                }
                return (a > 1 || b > 1 || c > 1) && (a /= 255, b /= 255, c /= 255), [a, b, c]
            }, ob = function (a, b, c, e) {
                a = N.round(255 * a), b = N.round(255 * b), c = N.round(255 * c);
                var g = {r: a, g: b, b: c, opacity: f(e, "finite") ? e : 1, hex: d.rgb(a, b, c), toString: mb};
                return f(e, "finite") && (g.opacity = e), g
            };
            d.color = function (a) {
                var b;
                return f(a, "object") && "h"in a && "s"in a && "b"in a ? (b = d.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : f(a, "object") && "h"in a && "s"in a && "l"in a ? (b = d.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.opacity = 1, a.hex = b.hex) : (f(a, "string") && (a = d.getRGB(a)), f(a, "object") && "r"in a && "g"in a && "b"in a && !("error"in a) ? (b = d.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = d.rgb2hsb(a), a.v = b.b) : (a = {hex: "none"}, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1, a.error = 1)), a.toString = mb, a
            }, d.hsb2rgb = function (a, b, c, d) {
                f(a, "object") && "h"in a && "s"in a && "b"in a && (c = a.b, b = a.s, a = a.h, d = a.o), a *= 360;
                var e, g, h, i, j;
                return a = a % 360 / 60, j = c * b, i = j * (1 - Q(a % 2 - 1)), e = g = h = c - j, a = ~~a, e += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], ob(e, g, h, d)
            }, d.hsl2rgb = function (a, b, c, d) {
                f(a, "object") && "h"in a && "s"in a && "l"in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
                var e, g, h, i, j;
                return a = a % 360 / 60, j = 2 * b * (.5 > c ? c : 1 - c), i = j * (1 - Q(a % 2 - 1)), e = g = h = c - j / 2, a = ~~a, e += [j, i, 0, 0, i, j][a], g += [i, j, j, i, 0, 0][a], h += [0, 0, i, j, j, i][a], ob(e, g, h, d)
            }, d.rgb2hsb = function (a, b, c) {
                c = nb(a, b, c), a = c[0], b = c[1], c = c[2];
                var d, e, f, g;
                return f = O(a, b, c), g = f - P(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = 60 * ((d + 360) % 6) / 360, e = 0 == g ? 0 : g / f, {
                    h: d,
                    s: e,
                    b: f,
                    toString: kb
                }
            }, d.rgb2hsl = function (a, b, c) {
                c = nb(a, b, c), a = c[0], b = c[1], c = c[2];
                var d, e, f, g, h, i;
                return g = O(a, b, c), h = P(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = 60 * ((d + 360) % 6) / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
                    h: d,
                    s: e,
                    l: f,
                    toString: lb
                }
            }, d.parsePathString = function (a) {
                if (!a)return null;
                var b = d.path(a);
                if (b.arr)return d.path.clone(b.arr);
                var c = {a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0}, e = [];
                return f(a, "array") && f(a[0], "array") && (e = d.path.clone(a)), e.length || K(a).replace(_, function (a, b, d) {
                    var f = [], g = b.toLowerCase();
                    if (d.replace(bb, function (a, b) {
                            b && f.push(+b)
                        }), "m" == g && f.length > 2 && (e.push([b].concat(f.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "o" == g && 1 == f.length && e.push([b, f[0]]), "r" == g)e.push([b].concat(f)); else for (; f.length >= c[g] && (e.push([b].concat(f.splice(0, c[g]))), c[g]););
                }), e.toString = d.path.toString, b.arr = d.path.clone(e), e
            };
            var pb = d.parseTransformString = function (a) {
                if (!a)return null;
                var b = [];
                return f(a, "array") && f(a[0], "array") && (b = d.path.clone(a)), b.length || K(a).replace(ab, function (a, c, d) {
                    var e = [];
                    c.toLowerCase(), d.replace(bb, function (a, b) {
                        b && e.push(+b)
                    }), b.push([c].concat(e))
                }), b.toString = d.path.toString, b
            };
            d._.svgTransform2string = o, d._.rgTransform = new RegExp("^[a-z][" + X + "]*-?\\.?\\d", "i"), d._.transform2matrix = p, d._unit2px = s;
            var qb = I.doc.contains || I.doc.compareDocumentPosition ? function (a, b) {
                var c = 9 == a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a == d || !(!d || 1 != d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)for (; b;)if (b = b.parentNode, b == a)return !0;
                return !1
            };
            d._.getSomeDefs = r, d.select = function (a) {
                return z(I.doc.querySelector(a))
            }, d.selectAll = function (a) {
                for (var b = I.doc.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++)c.push(z(b[e]));
                return c
            }, function (a) {
                function g(a) {
                    function b(a, b) {
                        var c = e(a.node, b);
                        c = c && c.match(g), c = c && c[2], c && "#" == c.charAt() && (c = c.substring(1), c && (i[c] = (i[c] || []).concat(function (c) {
                            var d = {};
                            d[b] = "url(#" + c + ")", e(a.node, d)
                        })))
                    }

                    function c(a) {
                        var b = e(a.node, "xlink:href");
                        b && "#" == b.charAt() && (b = b.substring(1), b && (i[b] = (i[b] || []).concat(function (b) {
                            a.attr("xlink:href", "#" + b)
                        })))
                    }

                    for (var d, f = a.selectAll("*"), g = /^\s*url\(("|'|)(.*)\1\)\s*$/, h = [], i = {}, j = 0, k = f.length; k > j; j++) {
                        d = f[j], b(d, "fill"), b(d, "stroke"), b(d, "filter"), b(d, "mask"), b(d, "clip-path"), c(d);
                        var l = e(d.node, "id");
                        l && (e(d.node, {id: d.id}), h.push({old: l, id: d.id}))
                    }
                    for (j = 0, k = h.length; k > j; j++) {
                        var m = i[h[j].old];
                        if (m)for (var n = 0, o = m.length; o > n; n++)m[n](h[j].id)
                    }
                }

                function h(a, b, c) {
                    return function (d) {
                        var e = d.slice(a, b);
                        return 1 == e.length && (e = e[0]), c ? c(e) : e
                    }
                }

                function i(a) {
                    return function () {
                        var b = a ? "<" + this.type : "", c = this.node.attributes, d = this.node.childNodes;
                        if (a)for (var e = 0, f = c.length; f > e; e++)b += " " + c[e].name + '="' + c[e].value.replace(/"/g, '\\"') + '"';
                        if (d.length) {
                            for (a && (b += ">"), e = 0, f = d.length; f > e; e++)3 == d[e].nodeType ? b += d[e].nodeValue : 1 == d[e].nodeType && (b += z(d[e]).toString());
                            a && (b += "</" + this.type + ">")
                        } else a && (b += "/>");
                        return b
                    }
                }

                a.attr = function (a, c) {
                    var d = this;
                    if (d.node, !a)return d;
                    if (f(a, "string")) {
                        if (!(arguments.length > 1))return v(b("snap.util.getattr." + a, d));
                        var e = {};
                        e[a] = c, a = e
                    }
                    for (var g in a)a[J](g) && b("snap.util.attr." + g, d, a[g]);
                    return d
                }, a.getBBox = function (a) {
                    var b = this;
                    if ("use" == b.type && (b = b.original), b.removed)return {};
                    var c = b._;
                    return a ? (c.bboxwt = d.path.get[b.type] ? d.path.getBBox(b.realPath = d.path.get[b.type](b)) : d._.box(b.node.getBBox()), d._.box(c.bboxwt)) : (b.realPath = (d.path.get[b.type] || d.path.get.deflt)(b), c.bbox = d.path.getBBox(d.path.map(b.realPath, b.matrix)), d._.box(c.bbox))
                };
                var j = function () {
                    return this.string
                };
                a.transform = function (a) {
                    var b = this._;
                    if (null == a) {
                        var c = new n(this.node.getCTM()), d = q(this), f = d.toTransformString(), g = K(d) == K(this.matrix) ? b.transform : f;
                        return {
                            string: g,
                            globalMatrix: c,
                            localMatrix: d,
                            diffMatrix: c.clone().add(d.invert()),
                            global: c.toTransformString(),
                            local: f,
                            toString: j
                        }
                    }
                    return a instanceof n && (a = a.toTransformString()), q(this, a), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? e(this.node, {gradientTransform: this.matrix}) : "pattern" == this.type ? e(this.node, {patternTransform: this.matrix}) : e(this.node, {transform: this.matrix})), this
                }, a.parent = function () {
                    return z(this.node.parentNode)
                }, a.append = a.add = function (a) {
                    if (a) {
                        if ("set" == a.type) {
                            var b = this;
                            return a.forEach(function (a) {
                                b.add(a)
                            }), this
                        }
                        a = z(a), this.node.appendChild(a.node), a.paper = this.paper
                    }
                    return this
                }, a.appendTo = function (a) {
                    return a && (a = z(a), a.append(this)), this
                }, a.prepend = function (a) {
                    if (a) {
                        a = z(a);
                        var b = a.parent();
                        this.node.insertBefore(a.node, this.node.firstChild), this.add && this.add(), a.paper = this.paper, this.parent() && this.parent().add(), b && b.add()
                    }
                    return this
                }, a.prependTo = function (a) {
                    return a = z(a), a.prepend(this), this
                }, a.before = function (a) {
                    if ("set" == a.type) {
                        var b = this;
                        return a.forEach(function (a) {
                            var c = a.parent();
                            b.node.parentNode.insertBefore(a.node, b.node), c && c.add()
                        }), this.parent().add(), this
                    }
                    a = z(a);
                    var c = a.parent();
                    return this.node.parentNode.insertBefore(a.node, this.node), this.parent() && this.parent().add(), c && c.add(), a.paper = this.paper, this
                }, a.after = function (a) {
                    a = z(a);
                    var b = a.parent();
                    return this.node.nextSibling ? this.node.parentNode.insertBefore(a.node, this.node.nextSibling) : this.node.parentNode.appendChild(a.node), this.parent() && this.parent().add(), b && b.add(), a.paper = this.paper, this
                }, a.insertBefore = function (a) {
                    a = z(a);
                    var b = this.parent();
                    return a.node.parentNode.insertBefore(this.node, a.node), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
                }, a.insertAfter = function (a) {
                    a = z(a);
                    var b = this.parent();
                    return a.node.parentNode.insertBefore(this.node, a.node.nextSibling), this.paper = a.paper, b && b.add(), a.parent() && a.parent().add(), this
                }, a.remove = function () {
                    var a = this.parent();
                    return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, a && a.add(), this
                }, a.select = function (a) {
                    return z(this.node.querySelector(a))
                }, a.selectAll = function (a) {
                    for (var b = this.node.querySelectorAll(a), c = (d.set || Array)(), e = 0; e < b.length; e++)c.push(z(b[e]));
                    return c
                }, a.asPX = function (a, b) {
                    return null == b && (b = this.attr(a)), +s(this, a, b)
                }, a.use = function () {
                    var a, b = this.node.id;
                    return b || (b = this.id, e(this.node, {id: b})), a = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? x(this.type, this.node.parentNode) : x("use", this.node.parentNode), e(a.node, {"xlink:href": "#" + b}), a.original = this, a
                }, a.clone = function () {
                    var a = z(this.node.cloneNode(!0));
                    return e(a.node, "id") && e(a.node, {id: a.id}), g(a), a.insertAfter(this), a
                }, a.toDefs = function () {
                    var a = r(this);
                    return a.appendChild(this.node), this
                }, a.pattern = function (a, b, c, d) {
                    var f = x("pattern", r(this));
                    return null == a && (a = this.getBBox()), a && "x"in a && (b = a.y, c = a.width, d = a.height, a = a.x), e(f.node, {
                        x: a,
                        y: b,
                        width: c,
                        height: d,
                        patternUnits: "userSpaceOnUse",
                        id: f.id,
                        viewBox: [a, b, c, d].join(" ")
                    }), f.node.appendChild(this.node), f
                }, a.marker = function (a, b, c, d, f, g) {
                    var h = x("marker", r(this));
                    return null == a && (a = this.getBBox()), a && "x"in a && (b = a.y, c = a.width, d = a.height, f = a.refX || a.cx, g = a.refY || a.cy, a = a.x), e(h.node, {
                        viewBox: [a, b, c, d].join(T),
                        markerWidth: c,
                        markerHeight: d,
                        orient: "auto",
                        refX: f || 0,
                        refY: g || 0,
                        id: h.id
                    }), h.node.appendChild(this.node), h
                };
                var k = function (a, b, d, e) {
                    "function" != typeof d || d.length || (e = d, d = c.linear), this.attr = a, this.dur = b, d && (this.easing = d), e && (this.callback = e)
                };
                d.animation = function (a, b, c, d) {
                    return new k(a, b, c, d)
                }, a.inAnim = function () {
                    var a = this, b = [];
                    for (var c in a.anims)a.anims[J](c) && !function (a) {
                        b.push({
                            anim: new k(a._attrs, a.dur, a.easing, a._callback),
                            curStatus: a.status(),
                            status: function (b) {
                                return a.status(b)
                            },
                            stop: function () {
                                a.stop()
                            }
                        })
                    }(a.anims[c]);
                    return b
                }, d.animate = function (a, d, e, f, g, h) {
                    "function" != typeof g || g.length || (h = g, g = c.linear);
                    var i = c.time(), j = c(a, d, i, i + f, c.time, e, g);
                    return h && b.once("mina.finish." + j.id, h), j
                }, a.stop = function () {
                    for (var a = this.inAnim(), b = 0, c = a.length; c > b; b++)a[b].stop();
                    return this
                }, a.animate = function (a, d, e, g) {
                    "function" != typeof e || e.length || (g = e, e = c.linear), a instanceof k && (g = a.callback, e = a.easing, d = e.dur, a = a.attr);
                    var i, j, l, m, n = [], o = [], p = {}, q = this;
                    for (var r in a)if (a[J](r)) {
                        q.equal ? (m = q.equal(r, K(a[r])), i = m.from, j = m.to, l = m.f) : (i = +q.attr(r), j = +a[r]);
                        var s = f(i, "array") ? i.length : 1;
                        p[r] = h(n.length, n.length + s, l), n = n.concat(i), o = o.concat(j)
                    }
                    var t = c.time(), u = c(n, o, t, t + d, c.time, function (a) {
                        var b = {};
                        for (var c in p)p[J](c) && (b[c] = p[c](a));
                        q.attr(b)
                    }, e);
                    return q.anims[u.id] = u, u._attrs = a, u._callback = g, b.once("mina.finish." + u.id, function () {
                        delete q.anims[u.id], g && g.call(q)
                    }), b.once("mina.stop." + u.id, function () {
                        delete q.anims[u.id]
                    }), q
                };
                var l = {};
                a.data = function (a, c) {
                    var e = l[this.id] = l[this.id] || {};
                    if (1 == arguments.length) {
                        if (d.is(a, "object")) {
                            for (var f in a)a[J](f) && this.data(f, a[f]);
                            return this
                        }
                        return b("snap.data.get." + this.id, this, e[a], a), e[a]
                    }
                    return e[a] = c, b("snap.data.set." + this.id, this, c, a), this
                }, a.removeData = function (a) {
                    return null == a ? l[this.id] = {} : l[this.id] && delete l[this.id][a], this
                }, a.outerSVG = a.toString = i(1), a.innerSVG = i()
            }(u.prototype), d.parse = function (a) {
                var b = I.doc.createDocumentFragment(), c = !0, d = I.doc.createElement("div");
                if (a = K(a), a.match(/^\s*<\s*svg(?:\s|>)/) || (a = "<svg>" + a + "</svg>", c = !1), d.innerHTML = a, a = d.getElementsByTagName("svg")[0])if (c)b = a; else for (; a.firstChild;)b.appendChild(a.firstChild);
                return d.innerHTML = S, new w(b)
            }, w.prototype.select = u.prototype.select, w.prototype.selectAll = u.prototype.selectAll, d.fragment = function () {
                for (var a = Array.prototype.slice.call(arguments, 0), b = I.doc.createDocumentFragment(), c = 0, e = a.length; e > c; c++) {
                    var f = a[c];
                    f.node && f.node.nodeType && b.appendChild(f.node), f.nodeType && b.appendChild(f), "string" == typeof f && b.appendChild(d.parse(f).node)
                }
                return new w(b)
            }, function (a) {
                a.el = function (a, b) {
                    return x(a, this.node).attr(b)
                }, a.rect = function (a, b, c, d, e, g) {
                    var h;
                    return null == g && (g = e), f(a, "object") && "x"in a ? h = a : null != a && (h = {
                        x: a,
                        y: b,
                        width: c,
                        height: d
                    }, null != e && (h.rx = e, h.ry = g)), this.el("rect", h)
                }, a.circle = function (a, b, c) {
                    var d;
                    return f(a, "object") && "cx"in a ? d = a : null != a && (d = {
                        cx: a,
                        cy: b,
                        r: c
                    }), this.el("circle", d)
                }, a.image = function (a, b, c, d, g) {
                    var h = x("image", this.node);
                    if (f(a, "object") && "src"in a)h.attr(a); else if (null != a) {
                        var i = {"xlink:href": a, preserveAspectRatio: "none"};
                        null != b && null != c && (i.x = b, i.y = c), null != d && null != g ? (i.width = d, i.height = g) : ib(a, function () {
                            e(h.node, {width: this.offsetWidth, height: this.offsetHeight})
                        }), e(h.node, i)
                    }
                    return h
                }, a.ellipse = function (a, b, c, d) {
                    var e = x("ellipse", this.node);
                    return f(a, "object") && "cx"in a ? e.attr(a) : null != a && e.attr({cx: a, cy: b, rx: c, ry: d}), e
                }, a.path = function (a) {
                    var b = x("path", this.node);
                    return f(a, "object") && !f(a, "array") ? b.attr(a) : a && b.attr({d: a}), b
                }, a.group = a.g = function (b) {
                    var c = x("g", this.node);
                    c.add = t;
                    for (var d in a)a[J](d) && (c[d] = a[d]);
                    return 1 == arguments.length && b && !b.type ? c.attr(b) : arguments.length && c.add(Array.prototype.slice.call(arguments, 0)), c
                }, a.text = function (a, b, c) {
                    var d = x("text", this.node);
                    return f(a, "object") ? d.attr(a) : null != a && d.attr({x: a, y: b, text: c || ""}), d
                }, a.line = function (a, b, c, d) {
                    var e = x("line", this.node);
                    return f(a, "object") ? e.attr(a) : null != a && e.attr({x1: a, x2: c, y1: b, y2: d}), e
                }, a.polyline = function (a) {
                    arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
                    var b = x("polyline", this.node);
                    return f(a, "object") && !f(a, "array") ? b.attr(a) : null != a && b.attr({points: a}), b
                }, a.polygon = function (a) {
                    arguments.length > 1 && (a = Array.prototype.slice.call(arguments, 0));
                    var b = x("polygon", this.node);
                    return f(a, "object") && !f(a, "array") ? b.attr(a) : null != a && b.attr({points: a}), b
                }, function () {
                    a.gradient = function (a) {
                        return D(this.defs, a)
                    }, a.gradientLinear = function (a, b, c, d) {
                        return E(this.defs, a, b, c, d)
                    }, a.gradientRadial = function (a, b, c, d, e) {
                        return F(this.defs, a, b, c, d, e)
                    }, a.toString = function () {
                        var a, b = I.doc.createDocumentFragment(), c = I.doc.createElement("div"), d = this.node.cloneNode(!0);
                        return b.appendChild(c), c.appendChild(d), e(d, {xmlns: gb}), a = c.innerHTML, b.removeChild(b.firstChild), a
                    }, a.clear = function () {
                        for (var a, b = this.node.firstChild; b;)a = b.nextSibling, "defs" != b.tagName && b.parentNode.removeChild(b), b = a
                    }
                }()
            }(y.prototype), d.ajax = function (a, c, d, e) {
                var g = new XMLHttpRequest, h = eb();
                if (g) {
                    if (f(c, "function"))e = d, d = c, c = null; else if (f(c, "object")) {
                        var i = [];
                        for (var j in c)c.hasOwnProperty(j) && i.push(encodeURIComponent(j) + "=" + encodeURIComponent(c[j]));
                        c = i.join("&")
                    }
                    return g.open(c ? "POST" : "GET", a, !0), g.setRequestHeader("X-Requested-With", "XMLHttpRequest"), c && g.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), d && (b.once("snap.ajax." + h + ".0", d), b.once("snap.ajax." + h + ".200", d), b.once("snap.ajax." + h + ".304", d)), g.onreadystatechange = function () {
                        4 == g.readyState && b("snap.ajax." + h + "." + g.status, e, g)
                    }, 4 == g.readyState ? g : (g.send(c), g)
                }
            }, d.load = function (a, b, c) {
                d.ajax(a, function (a) {
                    var e = d.parse(a.responseText);
                    c ? b.call(c, e) : b(e)
                })
            }, b.on("snap.util.attr.mask", function (a) {
                if (a instanceof u || a instanceof w) {
                    if (b.stop(), a instanceof w && 1 == a.node.childNodes.length && (a = a.node.firstChild, r(this).appendChild(a), a = z(a)), "mask" == a.type)var c = a; else c = x("mask", r(this)), c.node.appendChild(a.node), !c.node.id && e(c.node, {id: c.id});
                    e(this.node, {mask: "url(#" + c.id + ")"})
                }
            }), function (a) {
                b.on("snap.util.attr.clip", a), b.on("snap.util.attr.clip-path", a), b.on("snap.util.attr.clipPath", a)
            }(function (a) {
                if (a instanceof u || a instanceof w) {
                    if (b.stop(), "clipPath" == a.type)var c = a; else c = x("clipPath", r(this)), c.node.appendChild(a.node), !c.node.id && e(c.node, {id: c.id});
                    e(this.node, {"clip-path": "url(#" + c.id + ")"})
                }
            }), b.on("snap.util.attr.fill", G("fill")), b.on("snap.util.attr.stroke", G("stroke"));
            var rb = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
            b.on("snap.util.grad.parse", function (a) {
                a = K(a);
                var b = a.match(rb);
                if (!b)return null;
                var c = b[1], d = b[2], e = b[3];
                return d = d.split(/\s*,\s*/).map(function (a) {
                    return +a == a ? +a : a
                }), 1 == d.length && 0 == d[0] && (d = []), e = e.split("-"), e = e.map(function (a) {
                    a = a.split(":");
                    var b = {color: a[0]};
                    return a[1] && (b.offset = a[1]), b
                }), {type: c, params: d, stops: e}
            }), b.on("snap.util.attr.d", function (a) {
                b.stop(), f(a, "array") && f(a[0], "array") && (a = d.path.toString.call(a)), a = K(a), a.match(/[ruo]/i) && (a = d.path.toAbsolute(a)), e(this.node, {d: a})
            })(-1), b.on("snap.util.attr.#text", function (a) {
                b.stop(), a = K(a);
                for (var c = I.doc.createTextNode(a); this.node.firstChild;)this.node.removeChild(this.node.firstChild);
                this.node.appendChild(c)
            })(-1), b.on("snap.util.attr.path", function (a) {
                b.stop(), this.attr({d: a})
            })(-1), b.on("snap.util.attr.viewBox", function (a) {
                var c;
                c = f(a, "object") && "x"in a ? [a.x, a.y, a.width, a.height].join(" ") : f(a, "array") ? a.join(" ") : a, e(this.node, {viewBox: c}), b.stop()
            })(-1), b.on("snap.util.attr.transform", function (a) {
                this.transform(a), b.stop()
            })(-1), b.on("snap.util.attr.r", function (a) {
                "rect" == this.type && (b.stop(), e(this.node, {rx: a, ry: a}))
            })(-1), b.on("snap.util.attr.text", function (a) {
                if ("text" == this.type) {
                    for (var c = this.node, d = function (a) {
                        var b = e("tspan");
                        if (f(a, "array"))for (var c = 0; c < a.length; c++)b.appendChild(d(a[c])); else b.appendChild(I.doc.createTextNode(a));
                        return b.normalize && b.normalize(), b
                    }; c.firstChild;)c.removeChild(c.firstChild);
                    for (var g = d(a); g.firstChild;)c.appendChild(g.firstChild)
                }
                b.stop()
            })(-1);
            var sb = {
                "alignment-baseline": 0,
                "baseline-shift": 0,
                clip: 0,
                "clip-path": 0,
                "clip-rule": 0,
                color: 0,
                "color-interpolation": 0,
                "color-interpolation-filters": 0,
                "color-profile": 0,
                "color-rendering": 0,
                cursor: 0,
                direction: 0,
                display: 0,
                "dominant-baseline": 0,
                "enable-background": 0,
                fill: 0,
                "fill-opacity": 0,
                "fill-rule": 0,
                filter: 0,
                "flood-color": 0,
                "flood-opacity": 0,
                font: 0,
                "font-family": 0,
                "font-size": 0,
                "font-size-adjust": 0,
                "font-stretch": 0,
                "font-style": 0,
                "font-variant": 0,
                "font-weight": 0,
                "glyph-orientation-horizontal": 0,
                "glyph-orientation-vertical": 0,
                "image-rendering": 0,
                kerning: 0,
                "letter-spacing": 0,
                "lighting-color": 0,
                marker: 0,
                "marker-end": 0,
                "marker-mid": 0,
                "marker-start": 0,
                mask: 0,
                opacity: 0,
                overflow: 0,
                "pointer-events": 0,
                "shape-rendering": 0,
                "stop-color": 0,
                "stop-opacity": 0,
                stroke: 0,
                "stroke-dasharray": 0,
                "stroke-dashoffset": 0,
                "stroke-linecap": 0,
                "stroke-linejoin": 0,
                "stroke-miterlimit": 0,
                "stroke-opacity": 0,
                "stroke-width": 0,
                "text-anchor": 0,
                "text-decoration": 0,
                "text-rendering": 0,
                "unicode-bidi": 0,
                visibility: 0,
                "word-spacing": 0,
                "writing-mode": 0
            };
            b.on("snap.util.attr", function (a) {
                var c = b.nt(), d = {};
                c = c.substring(c.lastIndexOf(".") + 1), d[c] = a;
                var f = c.replace(/-(\w)/gi, function (a, b) {
                    return b.toUpperCase()
                }), g = c.replace(/[A-Z]/g, function (a) {
                    return "-" + a.toLowerCase()
                });
                sb[J](g) ? this.node.style[f] = null == a ? S : a : e(this.node, d)
            }), b.on("snap.util.getattr.transform", function () {
                return b.stop(), this.transform()
            })(-1), function () {
                function a(a) {
                    return function () {
                        b.stop();
                        var c = I.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + a);
                        return "none" == c ? c : d(I.doc.getElementById(c.match(W)[1]))
                    }
                }

                function c(a) {
                    return function (c) {
                        b.stop();
                        var d = "marker" + a.charAt(0).toUpperCase() + a.substring(1);
                        if ("" == c || !c)return void(this.node.style[d] = "none");
                        if ("marker" == c.type) {
                            var f = c.node.id;
                            return f || e(c.node, {id: c.id}), void(this.node.style[d] = "url(#" + f + ")")
                        }
                    }
                }

                b.on("snap.util.getattr.marker-end", a("end"))(-1), b.on("snap.util.getattr.markerEnd", a("end"))(-1), b.on("snap.util.getattr.marker-start", a("start"))(-1), b.on("snap.util.getattr.markerStart", a("start"))(-1), b.on("snap.util.getattr.marker-mid", a("mid"))(-1), b.on("snap.util.getattr.markerMid", a("mid"))(-1), b.on("snap.util.attr.marker-end", c("end"))(-1), b.on("snap.util.attr.markerEnd", c("end"))(-1), b.on("snap.util.attr.marker-start", c("start"))(-1), b.on("snap.util.attr.markerStart", c("start"))(-1), b.on("snap.util.attr.marker-mid", c("mid"))(-1), b.on("snap.util.attr.markerMid", c("mid"))(-1)
            }(), b.on("snap.util.getattr.r", function () {
                return "rect" == this.type && e(this.node, "rx") == e(this.node, "ry") ? (b.stop(), e(this.node, "rx")) : void 0
            })(-1), b.on("snap.util.getattr.text", function () {
                if ("text" == this.type || "tspan" == this.type) {
                    b.stop();
                    var a = H(this.node);
                    return 1 == a.length ? a[0] : a
                }
            })(-1), b.on("snap.util.getattr.#text", function () {
                return this.node.textContent
            })(-1), b.on("snap.util.getattr.viewBox", function () {
                b.stop();
                var a = e(this.node, "viewBox").split(Y);
                return d._.box(+a[0], +a[1], +a[2], +a[3])
            })(-1), b.on("snap.util.getattr.points", function () {
                var a = e(this.node, "points");
                return b.stop(), a.split(Y)
            }), b.on("snap.util.getattr.path", function () {
                var a = e(this.node, "d");
                return b.stop(), a
            }), b.on("snap.util.getattr", function () {
                var a = b.nt();
                a = a.substring(a.lastIndexOf(".") + 1);
                var c = a.replace(/[A-Z]/g, function (a) {
                    return "-" + a.toLowerCase()
                });
                return sb[J](c) ? I.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue(c) : e(this.node, a)
            });
            var tb = function (a) {
                var b = a.getBoundingClientRect(), c = a.ownerDocument, d = c.body, e = c.documentElement, f = e.clientTop || d.clientTop || 0, h = e.clientLeft || d.clientLeft || 0, i = b.top + (g.win.pageYOffset || e.scrollTop || d.scrollTop) - f, j = b.left + (g.win.pageXOffset || e.scrollLeft || d.scrollLeft) - h;
                return {y: i, x: j}
            };
            return d.getElementByPoint = function (a, b) {
                var c = this, d = (c.canvas, I.doc.elementFromPoint(a, b));
                if (I.win.opera && "svg" == d.tagName) {
                    var e = tb(d), f = d.createSVGRect();
                    f.x = a - e.x, f.y = b - e.y, f.width = f.height = 1;
                    var g = d.getIntersectionList(f, null);
                    g.length && (d = g[g.length - 1])
                }
                return d ? z(d) : null
            }, d.plugin = function (a) {
                a(d, u, y, I)
            }, I.win.Snap = d, d
        }();
        return d.plugin(function (a, b) {
            function c(a) {
                var b = c.ps = c.ps || {};
                return b[a] ? b[a].sleep = 100 : b[a] = {sleep: 100}, setTimeout(function () {
                    for (var c in b)b[L](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
                }), b[a]
            }

            function d(a, b, c, d) {
                return null == a && (a = b = c = d = 0), null == b && (b = a.y, c = a.width, d = a.height, a = a.x), {
                    x: a,
                    y: b,
                    width: c,
                    w: c,
                    height: d,
                    h: d,
                    x2: a + c,
                    y2: b + d,
                    cx: a + c / 2,
                    cy: b + d / 2,
                    r1: O.min(c, d) / 2,
                    r2: O.max(c, d) / 2,
                    r0: O.sqrt(c * c + d * d) / 2,
                    path: w(a, b, c, d),
                    vb: [a, b, c, d].join(" ")
                }
            }

            function e() {
                return this.join(",").replace(M, "$1")
            }

            function f(a) {
                var b = K(a);
                return b.toString = e, b
            }

            function g(a, b, c, d, e, f, g, h, j) {
                return null == j ? n(a, b, c, d, e, f, g, h) : i(a, b, c, d, e, f, g, h, o(a, b, c, d, e, f, g, h, j))
            }

            function h(c, d) {
                function e(a) {
                    return +(+a).toFixed(3)
                }

                return a._.cacher(function (a, f, h) {
                    a instanceof b && (a = a.attr("d")), a = F(a);
                    for (var j, k, l, m, n, o = "", p = {}, q = 0, r = 0, s = a.length; s > r; r++) {
                        if (l = a[r], "M" == l[0])j = +l[1], k = +l[2]; else {
                            if (m = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6]), q + m > f) {
                                if (d && !p.start) {
                                    if (n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q), o += ["C" + e(n.start.x), e(n.start.y), e(n.m.x), e(n.m.y), e(n.x), e(n.y)], h)return o;
                                    p.start = o, o = ["M" + e(n.x), e(n.y) + "C" + e(n.n.x), e(n.n.y), e(n.end.x), e(n.end.y), e(l[5]), e(l[6])].join(), q += m, j = +l[5], k = +l[6];
                                    continue
                                }
                                if (!c && !d)return n = g(j, k, l[1], l[2], l[3], l[4], l[5], l[6], f - q)
                            }
                            q += m, j = +l[5], k = +l[6]
                        }
                        o += l.shift() + l
                    }
                    return p.end = o, n = c ? q : d ? p : i(j, k, l[0], l[1], l[2], l[3], l[4], l[5], 1)
                }, null, a._.clone)
            }

            function i(a, b, c, d, e, f, g, h, i) {
                var j = 1 - i, k = S(j, 3), l = S(j, 2), m = i * i, n = m * i, o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g, p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h, q = a + 2 * i * (c - a) + m * (e - 2 * c + a), r = b + 2 * i * (d - b) + m * (f - 2 * d + b), s = c + 2 * i * (e - c) + m * (g - 2 * e + c), t = d + 2 * i * (f - d) + m * (h - 2 * f + d), u = j * a + i * c, v = j * b + i * d, w = j * e + i * g, x = j * f + i * h, y = 90 - 180 * O.atan2(q - s, r - t) / P;
                return {x: o, y: p, m: {x: q, y: r}, n: {x: s, y: t}, start: {x: u, y: v}, end: {x: w, y: x}, alpha: y}
            }

            function j(b, c, e, f, g, h, i, j) {
                a.is(b, "array") || (b = [b, c, e, f, g, h, i, j]);
                var k = E.apply(null, b);
                return d(k.min.x, k.min.y, k.max.x - k.min.x, k.max.y - k.min.y)
            }

            function k(a, b, c) {
                return b >= a.x && b <= a.x + a.width && c >= a.y && c <= a.y + a.height
            }

            function l(a, b) {
                return a = d(a), b = d(b), k(b, a.x, a.y) || k(b, a.x2, a.y) || k(b, a.x, a.y2) || k(b, a.x2, a.y2) || k(a, b.x, b.y) || k(a, b.x2, b.y) || k(a, b.x, b.y2) || k(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
            }

            function m(a, b, c, d, e) {
                var f = -3 * b + 9 * c - 9 * d + 3 * e, g = a * f + 6 * b - 12 * c + 6 * d;
                return a * g - 3 * b + 3 * c
            }

            function n(a, b, c, d, e, f, g, h, i) {
                null == i && (i = 1), i = i > 1 ? 1 : 0 > i ? 0 : i;
                for (var j = i / 2, k = 12, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], n = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], o = 0, p = 0; k > p; p++) {
                    var q = j * l[p] + j, r = m(q, a, c, e, g), s = m(q, b, d, f, h), t = r * r + s * s;
                    o += n[p] * O.sqrt(t)
                }
                return j * o
            }

            function o(a, b, c, d, e, f, g, h, i) {
                if (!(0 > i || n(a, b, c, d, e, f, g, h) < i)) {
                    var j, k = 1, l = k / 2, m = k - l, o = .01;
                    for (j = n(a, b, c, d, e, f, g, h, m); T(j - i) > o;)l /= 2, m += (i > j ? 1 : -1) * l, j = n(a, b, c, d, e, f, g, h, m);
                    return m
                }
            }

            function p(a, b, c, d, e, f, g, h) {
                if (!(R(a, c) < Q(e, g) || Q(a, c) > R(e, g) || R(b, d) < Q(f, h) || Q(b, d) > R(f, h))) {
                    var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g), j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g), k = (a - c) * (f - h) - (b - d) * (e - g);
                    if (k) {
                        var l = i / k, m = j / k, n = +l.toFixed(2), o = +m.toFixed(2);
                        if (!(n < +Q(a, c).toFixed(2) || n > +R(a, c).toFixed(2) || n < +Q(e, g).toFixed(2) || n > +R(e, g).toFixed(2) || o < +Q(b, d).toFixed(2) || o > +R(b, d).toFixed(2) || o < +Q(f, h).toFixed(2) || o > +R(f, h).toFixed(2)))return {
                            x: l,
                            y: m
                        }
                    }
                }
            }

            function q(a, b, c) {
                var d = j(a), e = j(b);
                if (!l(d, e))return c ? 0 : [];
                for (var f = n.apply(0, a), g = n.apply(0, b), h = ~~(f / 5), k = ~~(g / 5), m = [], o = [], q = {}, r = c ? 0 : [], s = 0; h + 1 > s; s++) {
                    var t = i.apply(0, a.concat(s / h));
                    m.push({x: t.x, y: t.y, t: s / h})
                }
                for (s = 0; k + 1 > s; s++)t = i.apply(0, b.concat(s / k)), o.push({x: t.x, y: t.y, t: s / k});
                for (s = 0; h > s; s++)for (var u = 0; k > u; u++) {
                    var v = m[s], w = m[s + 1], x = o[u], y = o[u + 1], z = T(w.x - v.x) < .001 ? "y" : "x", A = T(y.x - x.x) < .001 ? "y" : "x", B = p(v.x, v.y, w.x, w.y, x.x, x.y, y.x, y.y);
                    if (B) {
                        if (q[B.x.toFixed(4)] == B.y.toFixed(4))continue;
                        q[B.x.toFixed(4)] = B.y.toFixed(4);
                        var C = v.t + T((B[z] - v[z]) / (w[z] - v[z])) * (w.t - v.t), D = x.t + T((B[A] - x[A]) / (y[A] - x[A])) * (y.t - x.t);
                        C >= 0 && 1 >= C && D >= 0 && 1 >= D && (c ? r++ : r.push({x: B.x, y: B.y, t1: C, t2: D}))
                    }
                }
                return r
            }

            function r(a, b) {
                return t(a, b)
            }

            function s(a, b) {
                return t(a, b, 1)
            }

            function t(a, b, c) {
                a = F(a), b = F(b);
                for (var d, e, f, g, h, i, j, k, l, m, n = c ? 0 : [], o = 0, p = a.length; p > o; o++) {
                    var r = a[o];
                    if ("M" == r[0])d = h = r[1], e = i = r[2]; else {
                        "C" == r[0] ? (l = [d, e].concat(r.slice(1)), d = l[6], e = l[7]) : (l = [d, e, d, e, h, i, h, i], d = h, e = i);
                        for (var s = 0, t = b.length; t > s; s++) {
                            var u = b[s];
                            if ("M" == u[0])f = j = u[1], g = k = u[2]; else {
                                "C" == u[0] ? (m = [f, g].concat(u.slice(1)), f = m[6], g = m[7]) : (m = [f, g, f, g, j, k, j, k], f = j, g = k);
                                var v = q(l, m, c);
                                if (c)n += v; else {
                                    for (var w = 0, x = v.length; x > w; w++)v[w].segment1 = o, v[w].segment2 = s, v[w].bez1 = l, v[w].bez2 = m;
                                    n = n.concat(v)
                                }
                            }
                        }
                    }
                }
                return n
            }

            function u(a, b, c) {
                var d = v(a);
                return k(d, b, c) && 1 == t(a, [["M", b, c], ["H", d.x2 + 10]], 1) % 2
            }

            function v(a) {
                var b = c(a);
                if (b.bbox)return K(b.bbox);
                if (!a)return d();
                a = F(a);
                for (var e, f = 0, g = 0, h = [], i = [], j = 0, k = a.length; k > j; j++)if (e = a[j], "M" == e[0])f = e[1], g = e[2], h.push(f), i.push(g); else {
                    var l = E(f, g, e[1], e[2], e[3], e[4], e[5], e[6]);
                    h = h.concat(l.min.x, l.max.x), i = i.concat(l.min.y, l.max.y), f = e[5], g = e[6]
                }
                var m = Q.apply(0, h), n = Q.apply(0, i), o = R.apply(0, h), p = R.apply(0, i), q = d(m, n, o - m, p - n);
                return b.bbox = K(q), q
            }

            function w(a, b, c, d, f) {
                if (f)return [["M", a + f, b], ["l", c - 2 * f, 0], ["a", f, f, 0, 0, 1, f, f], ["l", 0, d - 2 * f], ["a", f, f, 0, 0, 1, -f, f], ["l", 2 * f - c, 0], ["a", f, f, 0, 0, 1, -f, -f], ["l", 0, 2 * f - d], ["a", f, f, 0, 0, 1, f, -f], ["z"]];
                var g = [["M", a, b], ["l", c, 0], ["l", 0, d], ["l", -c, 0], ["z"]];
                return g.toString = e, g
            }

            function x(a, b, c, d, f) {
                if (null == f && null == d && (d = c), null != f)var g = Math.PI / 180, h = a + c * Math.cos(-d * g), i = a + c * Math.cos(-f * g), j = b + c * Math.sin(-d * g), k = b + c * Math.sin(-f * g), l = [["M", h, j], ["A", c, c, 0, +(f - d > 180), 0, i, k]]; else l = [["M", a, b], ["m", 0, -d], ["a", c, d, 0, 1, 1, 0, 2 * d], ["a", c, d, 0, 1, 1, 0, -2 * d], ["z"]];
                return l.toString = e, l
            }

            function y(b) {
                var d = c(b), g = String.prototype.toLowerCase;
                if (d.rel)return f(d.rel);
                a.is(b, "array") && a.is(b && b[0], "array") || (b = a.parsePathString(b));
                var h = [], i = 0, j = 0, k = 0, l = 0, m = 0;
                "M" == b[0][0] && (i = b[0][1], j = b[0][2], k = i, l = j, m++, h.push(["M", i, j]));
                for (var n = m, o = b.length; o > n; n++) {
                    var p = h[n] = [], q = b[n];
                    if (q[0] != g.call(q[0]))switch (p[0] = g.call(q[0]), p[0]) {
                        case"a":
                            p[1] = q[1], p[2] = q[2], p[3] = q[3], p[4] = q[4], p[5] = q[5], p[6] = +(q[6] - i).toFixed(3), p[7] = +(q[7] - j).toFixed(3);
                            break;
                        case"v":
                            p[1] = +(q[1] - j).toFixed(3);
                            break;
                        case"m":
                            k = q[1], l = q[2];
                        default:
                            for (var r = 1, s = q.length; s > r; r++)p[r] = +(q[r] - (r % 2 ? i : j)).toFixed(3)
                    } else {
                        p = h[n] = [], "m" == q[0] && (k = q[1] + i, l = q[2] + j);
                        for (var t = 0, u = q.length; u > t; t++)h[n][t] = q[t]
                    }
                    var v = h[n].length;
                    switch (h[n][0]) {
                        case"z":
                            i = k, j = l;
                            break;
                        case"h":
                            i += +h[n][v - 1];
                            break;
                        case"v":
                            j += +h[n][v - 1];
                            break;
                        default:
                            i += +h[n][v - 2], j += +h[n][v - 1]
                    }
                }
                return h.toString = e, d.rel = f(h), h
            }

            function z(b) {
                var d = c(b);
                if (d.abs)return f(d.abs);
                if (J(b, "array") && J(b && b[0], "array") || (b = a.parsePathString(b)), !b || !b.length)return [["M", 0, 0]];
                var g, h = [], i = 0, j = 0, k = 0, l = 0, m = 0;
                "M" == b[0][0] && (i = +b[0][1], j = +b[0][2], k = i, l = j, m++, h[0] = ["M", i, j]);
                for (var n, o, p = 3 == b.length && "M" == b[0][0] && "R" == b[1][0].toUpperCase() && "Z" == b[2][0].toUpperCase(), q = m, r = b.length; r > q; q++) {
                    if (h.push(n = []), o = b[q], g = o[0], g != g.toUpperCase())switch (n[0] = g.toUpperCase(), n[0]) {
                        case"A":
                            n[1] = o[1], n[2] = o[2], n[3] = o[3], n[4] = o[4], n[5] = o[5], n[6] = +(o[6] + i), n[7] = +(o[7] + j);
                            break;
                        case"V":
                            n[1] = +o[1] + j;
                            break;
                        case"H":
                            n[1] = +o[1] + i;
                            break;
                        case"R":
                            for (var s = [i, j].concat(o.slice(1)), t = 2, u = s.length; u > t; t++)s[t] = +s[t] + i, s[++t] = +s[t] + j;
                            h.pop(), h = h.concat(H(s, p));
                            break;
                        case"O":
                            h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s);
                            break;
                        case"U":
                            h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2));
                            break;
                        case"M":
                            k = +o[1] + i, l = +o[2] + j;
                        default:
                            for (t = 1, u = o.length; u > t; t++)n[t] = +o[t] + (t % 2 ? i : j)
                    } else if ("R" == g)s = [i, j].concat(o.slice(1)), h.pop(), h = h.concat(H(s, p)), n = ["R"].concat(o.slice(-2)); else if ("O" == g)h.pop(), s = x(i, j, o[1], o[2]), s.push(s[0]), h = h.concat(s); else if ("U" == g)h.pop(), h = h.concat(x(i, j, o[1], o[2], o[3])), n = ["U"].concat(h[h.length - 1].slice(-2)); else for (var v = 0, w = o.length; w > v; v++)n[v] = o[v];
                    if (g = g.toUpperCase(), "O" != g)switch (n[0]) {
                        case"Z":
                            i = k, j = l;
                            break;
                        case"H":
                            i = n[1];
                            break;
                        case"V":
                            j = n[1];
                            break;
                        case"M":
                            k = n[n.length - 2], l = n[n.length - 1];
                        default:
                            i = n[n.length - 2], j = n[n.length - 1]
                    }
                }
                return h.toString = e, d.abs = f(h), h
            }

            function A(a, b, c, d) {
                return [a, b, c, d, c, d]
            }

            function B(a, b, c, d, e, f) {
                var g = 1 / 3, h = 2 / 3;
                return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
            }

            function C(b, c, d, e, f, g, h, i, j, k) {
                var l, m = 120 * P / 180, n = P / 180 * (+f || 0), o = [], p = a._.cacher(function (a, b, c) {
                    var d = a * O.cos(c) - b * O.sin(c), e = a * O.sin(c) + b * O.cos(c);
                    return {x: d, y: e}
                });
                if (k)y = k[0], z = k[1], w = k[2], x = k[3]; else {
                    l = p(b, c, -n), b = l.x, c = l.y, l = p(i, j, -n), i = l.x, j = l.y;
                    var q = (O.cos(P / 180 * f), O.sin(P / 180 * f), (b - i) / 2), r = (c - j) / 2, s = q * q / (d * d) + r * r / (e * e);
                    s > 1 && (s = O.sqrt(s), d = s * d, e = s * e);
                    var t = d * d, u = e * e, v = (g == h ? -1 : 1) * O.sqrt(T((t * u - t * r * r - u * q * q) / (t * r * r + u * q * q))), w = v * d * r / e + (b + i) / 2, x = v * -e * q / d + (c + j) / 2, y = O.asin(((c - x) / e).toFixed(9)), z = O.asin(((j - x) / e).toFixed(9));
                    y = w > b ? P - y : y, z = w > i ? P - z : z, 0 > y && (y = 2 * P + y), 0 > z && (z = 2 * P + z), h && y > z && (y -= 2 * P), !h && z > y && (z -= 2 * P)
                }
                var A = z - y;
                if (T(A) > m) {
                    var B = z, D = i, E = j;
                    z = y + m * (h && z > y ? 1 : -1), i = w + d * O.cos(z), j = x + e * O.sin(z), o = C(i, j, d, e, f, 0, h, D, E, [z, B, w, x])
                }
                A = z - y;
                var F = O.cos(y), G = O.sin(y), H = O.cos(z), I = O.sin(z), J = O.tan(A / 4), K = 4 / 3 * d * J, L = 4 / 3 * e * J, M = [b, c], N = [b + K * G, c - L * F], Q = [i + K * I, j - L * H], R = [i, j];
                if (N[0] = 2 * M[0] - N[0], N[1] = 2 * M[1] - N[1], k)return [N, Q, R].concat(o);
                o = [N, Q, R].concat(o).join().split(",");
                for (var S = [], U = 0, V = o.length; V > U; U++)S[U] = U % 2 ? p(o[U - 1], o[U], n).y : p(o[U], o[U + 1], n).x;
                return S
            }

            function D(a, b, c, d, e, f, g, h, i) {
                var j = 1 - i;
                return {
                    x: S(j, 3) * a + 3 * S(j, 2) * i * c + 3 * j * i * i * e + S(i, 3) * g,
                    y: S(j, 3) * b + 3 * S(j, 2) * i * d + 3 * j * i * i * f + S(i, 3) * h
                }
            }

            function E(a, b, c, d, e, f, g, h) {
                var i, j = e - 2 * c + a - (g - 2 * e + c), k = 2 * (c - a) - 2 * (e - c), l = a - c, m = (-k + O.sqrt(k * k - 4 * j * l)) / 2 / j, n = (-k - O.sqrt(k * k - 4 * j * l)) / 2 / j, o = [b, h], p = [a, g];
                return T(m) > "1e12" && (m = .5), T(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = D(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = D(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), j = f - 2 * d + b - (h - 2 * f + d), k = 2 * (d - b) - 2 * (f - d), l = b - d, m = (-k + O.sqrt(k * k - 4 * j * l)) / 2 / j, n = (-k - O.sqrt(k * k - 4 * j * l)) / 2 / j, T(m) > "1e12" && (m = .5), T(n) > "1e12" && (n = .5), m > 0 && 1 > m && (i = D(a, b, c, d, e, f, g, h, m), p.push(i.x), o.push(i.y)), n > 0 && 1 > n && (i = D(a, b, c, d, e, f, g, h, n), p.push(i.x), o.push(i.y)), {
                    min: {
                        x: Q.apply(0, p),
                        y: Q.apply(0, o)
                    }, max: {x: R.apply(0, p), y: R.apply(0, o)}
                }
            }

            function F(a, b) {
                var d = !b && c(a);
                if (!b && d.curve)return f(d.curve);
                for (var e = z(a), g = b && z(b), h = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, i = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null}, j = (function (a, b) {
                    var c, d;
                    if (!a)return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
                    switch (!(a[0]in{T: 1, Q: 1}) && (b.qx = b.qy = null), a[0]) {
                        case"M":
                            b.X = a[1], b.Y = a[2];
                            break;
                        case"A":
                            a = ["C"].concat(C.apply(0, [b.x, b.y].concat(a.slice(1))));
                            break;
                        case"S":
                            c = b.x + (b.x - (b.bx || b.x)), d = b.y + (b.y - (b.by || b.y)), a = ["C", c, d].concat(a.slice(1));
                            break;
                        case"T":
                            b.qx = b.x + (b.x - (b.qx || b.x)), b.qy = b.y + (b.y - (b.qy || b.y)), a = ["C"].concat(B(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                            break;
                        case"Q":
                            b.qx = a[1], b.qy = a[2], a = ["C"].concat(B(b.x, b.y, a[1], a[2], a[3], a[4]));
                            break;
                        case"L":
                            a = ["C"].concat(A(b.x, b.y, a[1], a[2]));
                            break;
                        case"H":
                            a = ["C"].concat(A(b.x, b.y, a[1], b.y));
                            break;
                        case"V":
                            a = ["C"].concat(A(b.x, b.y, b.x, a[1]));
                            break;
                        case"Z":
                            a = ["C"].concat(A(b.x, b.y, b.X, b.Y))
                    }
                    return a
                }), k = function (a, b) {
                    if (a[b].length > 7) {
                        a[b].shift();
                        for (var c = a[b]; c.length;)a.splice(b++, 0, ["C"].concat(c.splice(0, 6)));
                        a.splice(b, 1), n = R(e.length, g && g.length || 0)
                    }
                }, l = function (a, b, c, d, f) {
                    a && b && "M" == a[f][0] && "M" != b[f][0] && (b.splice(f, 0, ["M", d.x, d.y]), c.bx = 0, c.by = 0, c.x = a[f][1], c.y = a[f][2], n = R(e.length, g && g.length || 0))
                }, m = 0, n = R(e.length, g && g.length || 0); n > m; m++) {
                    e[m] = j(e[m], h), k(e, m), g && (g[m] = j(g[m], i)), g && k(g, m), l(e, g, h, i, m), l(g, e, i, h, m);
                    var o = e[m], p = g && g[m], q = o.length, r = g && p.length;
                    h.x = o[q - 2], h.y = o[q - 1], h.bx = N(o[q - 4]) || h.x, h.by = N(o[q - 3]) || h.y, i.bx = g && (N(p[r - 4]) || i.x), i.by = g && (N(p[r - 3]) || i.y), i.x = g && p[r - 2], i.y = g && p[r - 1]
                }
                return g || (d.curve = f(e)), g ? [e, g] : e
            }

            function G(a, b) {
                if (!b)return a;
                var c, d, e, f, g, h, i;
                for (a = F(a), e = 0, g = a.length; g > e; e++)for (i = a[e], f = 1, h = i.length; h > f; f += 2)c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
                return a
            }

            function H(a, b) {
                for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
                    var f = [{x: +a[d - 2], y: +a[d - 1]}, {x: +a[d], y: +a[d + 1]}, {
                        x: +a[d + 2],
                        y: +a[d + 3]
                    }, {x: +a[d + 4], y: +a[d + 5]}];
                    b ? d ? e - 4 == d ? f[3] = {x: +a[0], y: +a[1]} : e - 2 == d && (f[2] = {
                        x: +a[0],
                        y: +a[1]
                    }, f[3] = {x: +a[2], y: +a[3]}) : f[0] = {
                        x: +a[e - 2],
                        y: +a[e - 1]
                    } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
                        x: +a[d],
                        y: +a[d + 1]
                    }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
                }
                return c
            }

            var I = b.prototype, J = a.is, K = a._.clone, L = "hasOwnProperty", M = /,?([a-z]),?/gi, N = parseFloat, O = Math, P = O.PI, Q = O.min, R = O.max, S = O.pow, T = O.abs, U = h(1), V = h(), W = h(0, 1), X = a._unit2px, Y = {
                path: function (a) {
                    return a.attr("path")
                }, circle: function (a) {
                    var b = X(a);
                    return x(b.cx, b.cy, b.r)
                }, ellipse: function (a) {
                    var b = X(a);
                    return x(b.cx, b.cy, b.rx, b.ry)
                }, rect: function (a) {
                    var b = X(a);
                    return w(b.x, b.y, b.width, b.height, b.rx, b.ry)
                }, image: function (a) {
                    var b = X(a);
                    return w(b.x, b.y, b.width, b.height)
                }, text: function (a) {
                    var b = a.node.getBBox();
                    return w(b.x, b.y, b.width, b.height)
                }, g: function (a) {
                    var b = a.node.getBBox();
                    return w(b.x, b.y, b.width, b.height)
                }, symbol: function (a) {
                    var b = a.getBBox();
                    return w(b.x, b.y, b.width, b.height)
                }, polyline: function (a) {
                    return "M" + a.attr("points")
                }, polygon: function (a) {
                    return "M" + a.attr("points") + "z"
                }, svg: function (a) {
                    var b = a.node.getBBox();
                    return w(b.x, b.y, b.width, b.height)
                }, deflt: function (a) {
                    var b = a.node.getBBox();
                    return w(b.x, b.y, b.width, b.height)
                }
            };
            a.path = c, a.path.getTotalLength = U, a.path.getPointAtLength = V, a.path.getSubpath = function (a, b, c) {
                if (this.getTotalLength(a) - c < 1e-6)return W(a, b).end;
                var d = W(a, c, 1);
                return b ? W(d, b).end : d
            }, I.getTotalLength = function () {
                return this.node.getTotalLength ? this.node.getTotalLength() : void 0
            }, I.getPointAtLength = function (a) {
                return V(this.attr("d"), a)
            }, I.getSubpath = function (b, c) {
                return a.path.getSubpath(this.attr("d"), b, c)
            }, a._.box = d, a.path.findDotsAtSegment = i, a.path.bezierBBox = j, a.path.isPointInsideBBox = k, a.path.isBBoxIntersect = l, a.path.intersection = r, a.path.intersectionNumber = s, a.path.isPointInside = u, a.path.getBBox = v, a.path.get = Y, a.path.toRelative = y, a.path.toAbsolute = z, a.path.toCubic = F, a.path.map = G, a.path.toString = e, a.path.clone = f
        }), d.plugin(function (a) {
            var b = Math.max, c = Math.min, d = function (a) {
                if (this.items = [], this.length = 0, this.type = "set", a)for (var b = 0, c = a.length; c > b; b++)a[b] && (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
            }, e = d.prototype;
            e.push = function () {
                for (var a, b, c = 0, d = arguments.length; d > c; c++)a = arguments[c], a && (b = this.items.length, this[b] = this.items[b] = a, this.length++);
                return this
            }, e.pop = function () {
                return this.length && delete this[this.length--], this.items.pop()
            }, e.forEach = function (a, b) {
                for (var c = 0, d = this.items.length; d > c; c++)if (a.call(b, this.items[c], c) === !1)return this;
                return this
            }, e.remove = function () {
                for (; this.length;)this.pop().remove();
                return this
            }, e.attr = function (a) {
                for (var b = 0, c = this.items.length; c > b; b++)this.items[b].attr(a);
                return this
            }, e.clear = function () {
                for (; this.length;)this.pop()
            }, e.splice = function (a, e) {
                a = 0 > a ? b(this.length + a, 0) : a, e = b(0, c(this.length - a, e));
                var f, g = [], h = [], i = [];
                for (f = 2; f < arguments.length; f++)i.push(arguments[f]);
                for (f = 0; e > f; f++)h.push(this[a + f]);
                for (; f < this.length - a; f++)g.push(this[a + f]);
                var j = i.length;
                for (f = 0; f < j + g.length; f++)this.items[a + f] = this[a + f] = j > f ? i[f] : g[f - j];
                for (f = this.items.length = this.length -= e - j; this[f];)delete this[f++];
                return new d(h)
            }, e.exclude = function (a) {
                for (var b = 0, c = this.length; c > b; b++)if (this[b] == a)return this.splice(b, 1), !0;
                return !1
            }, e.insertAfter = function (a) {
                for (var b = this.items.length; b--;)this.items[b].insertAfter(a);
                return this
            }, e.getBBox = function () {
                for (var a = [], d = [], e = [], f = [], g = this.items.length; g--;)if (!this.items[g].removed) {
                    var h = this.items[g].getBBox();
                    a.push(h.x), d.push(h.y), e.push(h.x + h.width), f.push(h.y + h.height)
                }
                return a = c.apply(0, a), d = c.apply(0, d), e = b.apply(0, e), f = b.apply(0, f), {
                    x: a,
                    y: d,
                    x2: e,
                    y2: f,
                    width: e - a,
                    height: f - d,
                    cx: a + (e - a) / 2,
                    cy: d + (f - d) / 2
                }
            }, e.clone = function (a) {
                a = new d;
                for (var b = 0, c = this.items.length; c > b; b++)a.push(this.items[b].clone());
                return a
            }, e.toString = function () {
                return "Snap‘s set"
            }, e.type = "set", a.set = function () {
                var a = new d;
                return arguments.length && a.push.apply(a, Array.prototype.slice.call(arguments, 0)), a
            }
        }), d.plugin(function (a, b) {
            function c(a) {
                var b = a[0];
                switch (b.toLowerCase()) {
                    case"t":
                        return [b, 0, 0];
                    case"m":
                        return [b, 1, 0, 0, 1, 0, 0];
                    case"r":
                        return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
                    case"s":
                        return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
                }
            }

            function d(b, d, e) {
                d = l(d).replace(/\.{3}|\u2026/g, b), b = a.parseTransformString(b) || [], d = a.parseTransformString(d) || [];
                for (var f, g, j, k, m = Math.max(b.length, d.length), n = [], o = [], p = 0; m > p; p++) {
                    if (j = b[p] || c(d[p]), k = d[p] || c(j), j[0] != k[0] || "r" == j[0].toLowerCase() && (j[2] != k[2] || j[3] != k[3]) || "s" == j[0].toLowerCase() && (j[3] != k[3] || j[4] != k[4])) {
                        b = a._.transform2matrix(b, e()), d = a._.transform2matrix(d, e()), n = [["m", b.a, b.b, b.c, b.d, b.e, b.f]], o = [["m", d.a, d.b, d.c, d.d, d.e, d.f]];
                        break
                    }
                    for (n[p] = [], o[p] = [], f = 0, g = Math.max(j.length, k.length); g > f; f++)f in j && (n[p][f] = j[f]), f in k && (o[p][f] = k[f])
                }
                return {from: i(n), to: i(o), f: h(n)}
            }

            function e(a) {
                return a
            }

            function f(a) {
                return function (b) {
                    return +b.toFixed(3) + a
                }
            }

            function g(b) {
                return a.rgb(b[0], b[1], b[2])
            }

            function h(a) {
                var b, c, d, e, f, g, h = 0, i = [];
                for (b = 0, c = a.length; c > b; b++) {
                    for (f = "[", g = ['"' + a[b][0] + '"'], d = 1, e = a[b].length; e > d; d++)g[d] = "val[" + h++ + "]";
                    f += g + "]", i[b] = f
                }
                return Function("val", "return Snap.path.toString.call([" + i + "])")
            }

            function i(a) {
                for (var b = [], c = 0, d = a.length; d > c; c++)for (var e = 1, f = a[c].length; f > e; e++)b.push(a[c][e]);
                return b
            }

            var j = {}, k = /[a-z]+$/i, l = String;
            j.stroke = j.fill = "colour", b.prototype.equal = function (b, c) {
                var m, n, o = l(this.attr(b) || ""), p = this;
                if (o == +o && c == +c)return {from: +o, to: +c, f: e};
                if ("colour" == j[b])return m = a.color(o), n = a.color(c), {
                    from: [m.r, m.g, m.b, m.opacity],
                    to: [n.r, n.g, n.b, n.opacity],
                    f: g
                };
                if ("transform" == b || "gradientTransform" == b || "patternTransform" == b)return c instanceof a.Matrix && (c = c.toTransformString()), a._.rgTransform.test(c) || (c = a._.svgTransform2string(c)), d(o, c, function () {
                    return p.getBBox(1)
                });
                if ("d" == b || "path" == b)return m = a.path.toCubic(o, c), {from: i(m[0]), to: i(m[1]), f: h(m[0])};
                if ("points" == b)return m = l(o).split(","), n = l(c).split(","), {
                    from: m, to: n, f: function (a) {
                        return a
                    }
                };
                var q = o.match(k), r = l(c).match(k);
                return q && q == r ? {from: parseFloat(o), to: parseFloat(c), f: f(q)} : {
                    from: this.asPX(b),
                    to: this.asPX(b, c),
                    f: e
                }
            }
        }), d.plugin(function (a, c, d, e) {
            for (var f = c.prototype, g = "hasOwnProperty", h = ("createTouch"in e.doc), i = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], j = {
                mousedown: "touchstart",
                mousemove: "touchmove",
                mouseup: "touchend"
            }, k = function (a) {
                var b = "y" == a ? "scrollTop" : "scrollLeft";
                return e.doc.documentElement[b] || e.doc.body[b]
            }, l = function () {
                this.returnValue = !1
            }, m = function () {
                return this.originalEvent.preventDefault()
            }, n = function () {
                this.cancelBubble = !0
            }, o = function () {
                return this.originalEvent.stopPropagation()
            }, p = function () {
                return e.doc.addEventListener ? function (a, b, c, d) {
                    var e = h && j[b] ? j[b] : b, f = function (e) {
                        var f = k("y"), i = k("x"), l = e.clientX + i, n = e.clientY + f;
                        if (h && j[g](b))for (var p = 0, q = e.targetTouches && e.targetTouches.length; q > p; p++)if (e.targetTouches[p].target == a) {
                            var r = e;
                            e = e.targetTouches[p], e.originalEvent = r, e.preventDefault = m, e.stopPropagation = o;
                            break
                        }
                        return c.call(d, e, l, n)
                    };
                    return a.addEventListener(e, f, !1), function () {
                        return a.removeEventListener(e, f, !1), !0
                    }
                } : e.doc.attachEvent ? function (a, b, c, d) {
                    var f = function (a) {
                        a = a || e.win.event;
                        var b = k("y"), f = k("x"), g = a.clientX + f, h = a.clientY + b;
                        return a.preventDefault = a.preventDefault || l, a.stopPropagation = a.stopPropagation || n, c.call(d, a, g, h)
                    };
                    a.attachEvent("on" + b, f);
                    var g = function () {
                        return a.detachEvent("on" + b, f), !0
                    };
                    return g
                } : void 0
            }(), q = [], r = function (c) {
                for (var d, e = c.clientX, f = c.clientY, g = k("y"), i = k("x"), j = q.length; j--;) {
                    if (d = q[j], h) {
                        for (var l, m = c.touches.length; m--;)if (l = c.touches[m], l.identifier == d.el._drag.id) {
                            e = l.clientX, f = l.clientY, (c.originalEvent ? c.originalEvent : c).preventDefault();
                            break
                        }
                    } else c.preventDefault();
                    var n = d.el.node;
                    a._.glob, n.nextSibling, n.parentNode, n.style.display, e += i, f += g, b("snap.drag.move." + d.el.id, d.move_scope || d.el, e - d.el._drag.x, f - d.el._drag.y, e, f, c)
                }
            }, s = function (c) {
                a.unmousemove(r).unmouseup(s);
                for (var d, e = q.length; e--;)d = q[e], d.el._drag = {}, b("snap.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, c);
                q = []
            }, t = i.length; t--;)!function (b) {
                a[b] = f[b] = function (c, d) {
                    return a.is(c, "function") && (this.events = this.events || [], this.events.push({
                        name: b,
                        f: c,
                        unbind: p(this.shape || this.node || e.doc, b, c, d || this)
                    })), this
                }, a["un" + b] = f["un" + b] = function (a) {
                    for (var c = this.events || [], d = c.length; d--;)if (c[d].name == b && (c[d].f == a || !a))return c[d].unbind(), c.splice(d, 1), !c.length && delete this.events, this;
                    return this
                }
            }(i[t]);
            f.hover = function (a, b, c, d) {
                return this.mouseover(a, c).mouseout(b, d || c)
            }, f.unhover = function (a, b) {
                return this.unmouseover(a).unmouseout(b)
            };
            var u = [];
            f.drag = function (c, d, e, f, g, h) {
                function i(i) {
                    (i.originalEvent || i).preventDefault();
                    var j = k("y"), l = k("x");
                    this._drag.x = i.clientX + l, this._drag.y = i.clientY + j, this._drag.id = i.identifier, !q.length && a.mousemove(r).mouseup(s), q.push({
                        el: this,
                        move_scope: f,
                        start_scope: g,
                        end_scope: h
                    }), d && b.on("snap.drag.start." + this.id, d), c && b.on("snap.drag.move." + this.id, c), e && b.on("snap.drag.end." + this.id, e), b("snap.drag.start." + this.id, g || f || this, i.clientX + l, i.clientY + j, i)
                }

                if (!arguments.length) {
                    var j;
                    return this.drag(function (a, b) {
                        this.attr({transform: j + (j ? "T" : "t") + [a, b]})
                    }, function () {
                        j = this.transform().local
                    })
                }
                return this._drag = {}, u.push({el: this, start: i}), this.mousedown(i), this
            }, f.undrag = function () {
                for (var c = u.length; c--;)u[c].el == this && (this.unmousedown(u[c].start), u.splice(c, 1), b.unbind("snap.drag.*." + this.id));
                return !u.length && a.unmousemove(r).unmouseup(s), this
            }
        }), d.plugin(function (a, c, d) {
            var e = (c.prototype, d.prototype), f = /^\s*url\((.+)\)/, g = String, h = a._.$;
            a.filter = {}, e.filter = function (b) {
                var d = this;
                "svg" != d.type && (d = d.paper);
                var e = a.parse(g(b)), f = a._.id(), i = (d.node.offsetWidth, d.node.offsetHeight, h("filter"));
                return h(i, {
                    id: f,
                    filterUnits: "userSpaceOnUse"
                }), i.appendChild(e.node), d.defs.appendChild(i), new c(i)
            }, b.on("snap.util.getattr.filter", function () {
                b.stop();
                var c = h(this.node, "filter");
                if (c) {
                    var d = g(c).match(f);
                    return d && a.select(d[1])
                }
            }), b.on("snap.util.attr.filter", function (a) {
                if (a instanceof c && "filter" == a.type) {
                    b.stop();
                    var d = a.node.id;
                    d || (h(a.node, {id: a.id}), d = a.id), h(this.node, {filter: "url(#" + d + ")"})
                }
                a && "none" != a || (b.stop(), this.node.removeAttribute("filter"))
            }), a.filter.blur = function (b, c) {
                null == b && (b = 2);
                var d = null == c ? b : [b, c];
                return a.format('<feGaussianBlur stdDeviation="{def}"/>', {def: d})
            }, a.filter.blur.toString = function () {
                return this()
            }, a.filter.shadow = function (b, c, d, e) {
                return e = e || "#000", null == d && (d = 4), "string" == typeof d && (e = d, d = 4), null == b && (b = 0, c = 2), null == c && (c = b), e = a.color(e), a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                    color: e,
                    dx: b,
                    dy: c,
                    blur: d
                })
            }, a.filter.shadow.toString = function () {
                return this()
            }, a.filter.grayscale = function (b) {
                return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                    a: .2126 + .7874 * (1 - b),
                    b: .7152 - .7152 * (1 - b),
                    c: .0722 - .0722 * (1 - b),
                    d: .2126 - .2126 * (1 - b),
                    e: .7152 + .2848 * (1 - b),
                    f: .0722 - .0722 * (1 - b),
                    g: .2126 - .2126 * (1 - b),
                    h: .0722 + .9278 * (1 - b)
                })
            }, a.filter.grayscale.toString = function () {
                return this()
            }, a.filter.sepia = function (b) {
                return null == b && (b = 1), a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                    a: .393 + .607 * (1 - b),
                    b: .769 - .769 * (1 - b),
                    c: .189 - .189 * (1 - b),
                    d: .349 - .349 * (1 - b),
                    e: .686 + .314 * (1 - b),
                    f: .168 - .168 * (1 - b),
                    g: .272 - .272 * (1 - b),
                    h: .534 - .534 * (1 - b),
                    i: .131 + .869 * (1 - b)
                })
            }, a.filter.sepia.toString = function () {
                return this()
            }, a.filter.saturate = function (b) {
                return null == b && (b = 1), a.format('<feColorMatrix type="saturate" values="{amount}"/>', {amount: 1 - b})
            }, a.filter.saturate.toString = function () {
                return this()
            }, a.filter.hueRotate = function (b) {
                return b = b || 0, a.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {angle: b})
            }, a.filter.hueRotate.toString = function () {
                return this()
            }, a.filter.invert = function (b) {
                return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                    amount: b,
                    amount2: 1 - b
                })
            }, a.filter.invert.toString = function () {
                return this()
            }, a.filter.brightness = function (b) {
                return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {amount: b})
            }, a.filter.brightness.toString = function () {
                return this()
            }, a.filter.contrast = function (b) {
                return null == b && (b = 1), a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                    amount: b,
                    amount2: .5 - b / 2
                })
            }, a.filter.contrast.toString = function () {
                return this()
            }
        }), d
    }), c("Editor", ["eve", "CSSUtils", "snap"], function (a, b, c) {
        function d(a, b, c) {
            if (!(a && a instanceof HTMLElement))throw new TypeError("Target expected as HTMLElement object, but was: " + typeof a);
            this.target = a, this.value = b, this.holder = null, this.defaultRefBox = e[0], c && c.defaultRefBox && e.indexOf(c.defaultRefBox) > -1 && (this.defaultRefBox = c.defaultRefBox), this.refBox = null, this.offsets = {
                left: 0,
                top: 0
            }
        }

        var e = ["margin-box", "border-box", "padding-box", "content-box"];
        return d.prototype = {
            setup: function () {
                this.setupEditorHolder(), this.setupDrawingSurface(), this.setupOffsets(), window.setTimeout(function () {
                    this.trigger("ready")
                }.bind(this))
            }, setupEditorHolder: function () {
                this.holder || (this.holder = document.createElement("div"), this.holder.style.position = "absolute", this.holder.style.top = 0, this.holder.style.left = 0, this.holder.style.right = 0, this.holder.style.bottom = 0, this.holder.style.zIndex = 2147483647, this.holder.style.webkitUserSelect = "none", this.holder.style.userSelect = "none", this.holder.setAttribute("data-role", "shape-editor"), document.body.appendChild(this.holder)), this.sizeEditorHolder()
            }, sizeEditorHolder: function () {
                var a = document.documentElement;
                this.holder.style.display = "none", this.holder.style.minHeight = a.scrollHeight + "px", this.holder.style.minWidth = a.scrollWidth + "px", this.holder.style.display = "block"
            }, setupDrawingSurface: function () {
                this.snap = new c("100%", "100%"), this.holder.appendChild(this.snap.node), this.paper = this.snap.paper
            }, setupOffsets: function () {
                var a = this.target.getBoundingClientRect(), c = this.refBox || this.defaultRefBox, d = b.getBox(this.target, c);
                this.offsets.left = a.left + window.scrollX + d.left, this.offsets.top = a.top + window.scrollY + d.top
            }, setupShapeDecoration: function (a) {
                if (a) {
                    Array.isArray(a) || (a = [a]);
                    var b = this.shape, c = this.paper.group();
                    a.forEach(function (a) {
                        c.add(b.use().attr(a))
                    }), c.toBack()
                }
            }, remove: function () {
                var a = this.holder;
                a && a.parentElement && a.parentNode.removeChild(a), this.trigger("removed", {})
            }, toggleFreeTransform: function () {
            }, turnOnFreeTransform: function () {
                this.transformEditor || this.toggleFreeTransform()
            }, turnOffFreeTransform: function () {
                this.transformEditor && this.toggleFreeTransform()
            }, on: a.on, off: a.off, trigger: a
        }, d
    }), function () {
        function a(a, b, c) {
            for (var d = (c || 0) - 1, e = a ? a.length : 0; ++d < e;)if (a[d] === b)return d;
            return -1
        }

        function b(b, c) {
            var d = typeof c;
            if (b = b.cache, "boolean" == d || null == c)return b[c] ? 0 : -1;
            "number" != d && "string" != d && (d = "object");
            var e = "number" == d ? c : s + c;
            return b = (b = b[d]) && b[e], "object" == d ? b && a(b, c) > -1 ? 0 : -1 : b ? 0 : -1
        }

        function d(a) {
            var b = this.cache, c = typeof a;
            if ("boolean" == c || null == a)b[a] = !0; else {
                "number" != c && "string" != c && (c = "object");
                var d = "number" == c ? a : s + a, e = b[c] || (b[c] = {});
                "object" == c ? (e[d] || (e[d] = [])).push(a) : e[d] = !0
            }
        }

        function e(a) {
            return a.charCodeAt(0)
        }

        function f(a, b) {
            for (var c = a.criteria, d = b.criteria, e = -1, f = c.length; ++e < f;) {
                var g = c[e], h = d[e];
                if (g !== h) {
                    if (g > h || "undefined" == typeof g)return 1;
                    if (h > g || "undefined" == typeof h)return -1
                }
            }
            return a.index - b.index
        }

        function g(a) {
            var b = -1, c = a.length, e = a[0], f = a[c / 2 | 0], g = a[c - 1];
            if (e && "object" == typeof e && f && "object" == typeof f && g && "object" == typeof g)return !1;
            var h = j();
            h["false"] = h["null"] = h["true"] = h.undefined = !1;
            var i = j();
            for (i.array = a, i.cache = h, i.push = d; ++b < c;)i.push(a[b]);
            return i
        }

        function h(a) {
            return "\\" + W[a]
        }

        function i() {
            return p.pop() || []
        }

        function j() {
            return q.pop() || {
                    array: null,
                    cache: null,
                    criteria: null,
                    "false": !1,
                    index: 0,
                    "null": !1,
                    number: null,
                    object: null,
                    push: null,
                    string: null,
                    "true": !1,
                    undefined: !1,
                    value: null
                }
        }

        function k(a) {
            a.length = 0, p.length < u && p.push(a)
        }

        function l(a) {
            var b = a.cache;
            b && l(b), a.array = a.cache = a.criteria = a.object = a.number = a.string = a.value = null, q.length < u && q.push(a)
        }

        function m(a, b, c) {
            b || (b = 0), "undefined" == typeof c && (c = a ? a.length : 0);
            for (var d = -1, e = c - b || 0, f = Array(0 > e ? 0 : e); ++d < e;)f[d] = a[b + d];
            return f
        }

        function n(c) {
            function d(a) {
                return a && "object" == typeof a && !Zd(a) && Hd.call(a, "__wrapped__") ? a : new p(a)
            }

            function p(a, b) {
                this.__chain__ = !!b, this.__wrapped__ = a
            }

            function q(a) {
                function b() {
                    if (d) {
                        var a = m(d);
                        Id.apply(a, arguments)
                    }
                    if (this instanceof b) {
                        var f = W(c.prototype), g = c.apply(f, a || arguments);
                        return Eb(g) ? g : f
                    }
                    return c.apply(e, a || arguments)
                }

                var c = a[0], d = a[2], e = a[4];
                return Yd(b, a), b
            }

            function u(a, b, c, d, e) {
                if (c) {
                    var f = c(a);
                    if ("undefined" != typeof f)return f
                }
                var g = Eb(a);
                if (!g)return a;
                var h = Ad.call(a);
                if (!S[h])return a;
                var j = Wd[h];
                switch (h) {
                    case L:
                    case M:
                        return new j(+a);
                    case O:
                    case R:
                        return new j(a);
                    case Q:
                        return f = j(a.source, A.exec(a)), f.lastIndex = a.lastIndex, f
                }
                var l = Zd(a);
                if (b) {
                    var n = !d;
                    d || (d = i()), e || (e = i());
                    for (var o = d.length; o--;)if (d[o] == a)return e[o];
                    f = l ? j(a.length) : {}
                } else f = l ? m(a) : ee({}, a);
                return l && (Hd.call(a, "index") && (f.index = a.index), Hd.call(a, "input") && (f.input = a.input)), b ? (d.push(a), e.push(f), (l ? Yb : he)(a, function (a, g) {
                    f[g] = u(a, b, c, d, e)
                }), n && (k(d), k(e)), f) : f
            }

            function W(a) {
                return Eb(a) ? Nd(a) : {}
            }

            function Y(a, b, c) {
                if ("function" != typeof a)return Zc;
                if ("undefined" == typeof b || !("prototype"in a))return a;
                var d = a.__bindData__;
                if ("undefined" == typeof d && (Xd.funcNames && (d = !a.name), d = d || !Xd.funcDecomp, !d)) {
                    var e = Fd.call(a);
                    Xd.funcNames || (d = !B.test(e)), d || (d = F.test(e), Yd(a, d))
                }
                if (d === !1 || d !== !0 && 1 & d[1])return a;
                switch (c) {
                    case 1:
                        return function (c) {
                            return a.call(b, c)
                        };
                    case 2:
                        return function (c, d) {
                            return a.call(b, c, d)
                        };
                    case 3:
                        return function (c, d, e) {
                            return a.call(b, c, d, e)
                        };
                    case 4:
                        return function (c, d, e, f) {
                            return a.call(b, c, d, e, f)
                        }
                }
                return Ic(a, b)
            }

            function Z(a) {
                function b() {
                    var a = i ? g : this;
                    if (e) {
                        var o = m(e);
                        Id.apply(o, arguments)
                    }
                    if ((f || k) && (o || (o = m(arguments)), f && Id.apply(o, f), k && o.length < h))return d |= 16, Z([c, l ? d : -4 & d, o, null, g, h]);
                    if (o || (o = arguments), j && (c = a[n]), this instanceof b) {
                        a = W(c.prototype);
                        var p = c.apply(a, o);
                        return Eb(p) ? p : a
                    }
                    return c.apply(a, o)
                }

                var c = a[0], d = a[1], e = a[2], f = a[3], g = a[4], h = a[5], i = 1 & d, j = 2 & d, k = 4 & d, l = 8 & d, n = c;
                return Yd(b, a), b
            }

            function $(c, d) {
                var e = -1, f = ib(), h = c ? c.length : 0, i = h >= t && f === a, j = [];
                if (i) {
                    var k = g(d);
                    k ? (f = b, d = k) : i = !1
                }
                for (; ++e < h;) {
                    var m = c[e];
                    f(d, m) < 0 && j.push(m)
                }
                return i && l(d), j
            }

            function _(a, b, c, d) {
                for (var e = (d || 0) - 1, f = a ? a.length : 0, g = []; ++e < f;) {
                    var h = a[e];
                    if (h && "object" == typeof h && "number" == typeof h.length && (Zd(h) || mb(h))) {
                        b || (h = _(h, b, c));
                        var i = -1, j = h.length, k = g.length;
                        for (g.length += j; ++i < j;)g[k++] = h[i]
                    } else c || g.push(h)
                }
                return g
            }

            function bb(a, b, c, d, e, f) {
                if (c) {
                    var g = c(a, b);
                    if ("undefined" != typeof g)return !!g
                }
                if (a === b)return 0 !== a || 1 / a == 1 / b;
                var h = typeof a, j = typeof b;
                if (!(a !== a || a && V[h] || b && V[j]))return !1;
                if (null == a || null == b)return a === b;
                var l = Ad.call(a), m = Ad.call(b);
                if (l == J && (l = P), m == J && (m = P), l != m)return !1;
                switch (l) {
                    case L:
                    case M:
                        return +a == +b;
                    case O:
                        return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
                    case Q:
                    case R:
                        return a == vd(b)
                }
                var n = l == K;
                if (!n) {
                    var o = Hd.call(a, "__wrapped__"), p = Hd.call(b, "__wrapped__");
                    if (o || p)return bb(o ? a.__wrapped__ : a, p ? b.__wrapped__ : b, c, d, e, f);
                    if (l != P)return !1;
                    var q = a.constructor, r = b.constructor;
                    if (q != r && !(Db(q) && q instanceof q && Db(r) && r instanceof r) && "constructor"in a && "constructor"in b)return !1
                }
                var s = !e;
                e || (e = i()), f || (f = i());
                for (var t = e.length; t--;)if (e[t] == a)return f[t] == b;
                var u = 0;
                if (g = !0, e.push(a), f.push(b), n) {
                    if (t = a.length, u = b.length, g = u == t, g || d)for (; u--;) {
                        var v = t, w = b[u];
                        if (d)for (; v-- && !(g = bb(a[v], w, c, d, e, f));); else if (!(g = bb(a[u], w, c, d, e, f)))break
                    }
                } else ge(b, function (b, h, i) {
                    return Hd.call(i, h) ? (u++, g = Hd.call(a, h) && bb(a[h], b, c, d, e, f)) : void 0
                }), g && !d && ge(a, function (a, b, c) {
                    return Hd.call(c, b) ? g = --u > -1 : void 0
                });
                return e.pop(), f.pop(), s && (k(e), k(f)), g
            }

            function cb(a, b, c, d, e) {
                (Zd(b) ? Yb : he)(b, function (b, f) {
                    var g, h, i = b, j = a[f];
                    if (b && ((h = Zd(b)) || ie(b))) {
                        for (var k = d.length; k--;)if (g = d[k] == b) {
                            j = e[k];
                            break
                        }
                        if (!g) {
                            var l;
                            c && (i = c(j, b), (l = "undefined" != typeof i) && (j = i)), l || (j = h ? Zd(j) ? j : [] : ie(j) ? j : {}), d.push(b), e.push(j), l || cb(j, b, c, d, e)
                        }
                    } else c && (i = c(j, b), "undefined" == typeof i && (i = b)), "undefined" != typeof i && (j = i);
                    a[f] = j
                })
            }

            function db(a, b) {
                return a + Ed(Vd() * (b - a + 1))
            }

            function eb(c, d, e) {
                var f = -1, h = ib(), j = c ? c.length : 0, m = [], n = !d && j >= t && h === a, o = e || n ? i() : m;
                if (n) {
                    var p = g(o);
                    h = b, o = p
                }
                for (; ++f < j;) {
                    var q = c[f], r = e ? e(q, f, c) : q;
                    (d ? !f || o[o.length - 1] !== r : h(o, r) < 0) && ((e || n) && o.push(r), m.push(q))
                }
                return n ? (k(o.array), l(o)) : e && k(o), m
            }

            function fb(a) {
                return function (b, c, e) {
                    var f = {};
                    c = d.createCallback(c, e, 3);
                    var g = -1, h = b ? b.length : 0;
                    if ("number" == typeof h)for (; ++g < h;) {
                        var i = b[g];
                        a(f, i, c(i, g, b), b)
                    } else he(b, function (b, d, e) {
                        a(f, b, c(b, d, e), e)
                    });
                    return f
                }
            }

            function gb(a, b, c, d, e, f) {
                var g = 1 & b, h = 2 & b, i = 4 & b, j = 16 & b, k = 32 & b;
                if (!h && !Db(a))throw new wd;
                j && !c.length && (b &= -17, j = c = !1), k && !d.length && (b &= -33, k = d = !1);
                var l = a && a.__bindData__;
                if (l && l !== !0)return l = m(l), l[2] && (l[2] = m(l[2])), l[3] && (l[3] = m(l[3])), !g || 1 & l[1] || (l[4] = e), !g && 1 & l[1] && (b |= 8), !i || 4 & l[1] || (l[5] = f), j && Id.apply(l[2] || (l[2] = []), c), k && Ld.apply(l[3] || (l[3] = []), d), l[1] |= b, gb.apply(null, l);
                var n = 1 == b || 17 === b ? q : Z;
                return n([a, b, c, d, e, f])
            }

            function hb(a) {
                return ae[a]
            }

            function ib() {
                var b = (b = d.indexOf) === rc ? a : b;
                return b
            }

            function jb(a) {
                return "function" == typeof a && Bd.test(a)
            }

            function kb(a) {
                var b, c;
                return a && Ad.call(a) == P && (b = a.constructor, !Db(b) || b instanceof b) ? (ge(a, function (a, b) {
                    c = b
                }), "undefined" == typeof c || Hd.call(a, c)) : !1
            }

            function lb(a) {
                return be[a]
            }

            function mb(a) {
                return a && "object" == typeof a && "number" == typeof a.length && Ad.call(a) == J || !1
            }

            function nb(a, b, c, d) {
                return "boolean" != typeof b && null != b && (d = c, c = b, b = !1), u(a, b, "function" == typeof c && Y(c, d, 1))
            }

            function ob(a, b, c) {
                return u(a, !0, "function" == typeof b && Y(b, c, 1))
            }

            function pb(a, b) {
                var c = W(a);
                return b ? ee(c, b) : c
            }

            function qb(a, b, c) {
                var e;
                return b = d.createCallback(b, c, 3), he(a, function (a, c, d) {
                    return b(a, c, d) ? (e = c, !1) : void 0
                }), e
            }

            function rb(a, b, c) {
                var e;
                return b = d.createCallback(b, c, 3), tb(a, function (a, c, d) {
                    return b(a, c, d) ? (e = c, !1) : void 0
                }), e
            }

            function sb(a, b, c) {
                var d = [];
                ge(a, function (a, b) {
                    d.push(b, a)
                });
                var e = d.length;
                for (b = Y(b, c, 3); e-- && b(d[e--], d[e], a) !== !1;);
                return a
            }

            function tb(a, b, c) {
                var d = _d(a), e = d.length;
                for (b = Y(b, c, 3); e--;) {
                    var f = d[e];
                    if (b(a[f], f, a) === !1)break
                }
                return a
            }

            function ub(a) {
                var b = [];
                return ge(a, function (a, c) {
                    Db(a) && b.push(c)
                }), b.sort()
            }

            function vb(a, b) {
                return a ? Hd.call(a, b) : !1
            }

            function wb(a) {
                for (var b = -1, c = _d(a), d = c.length, e = {}; ++b < d;) {
                    var f = c[b];
                    e[a[f]] = f
                }
                return e
            }

            function xb(a) {
                return a === !0 || a === !1 || a && "object" == typeof a && Ad.call(a) == L || !1
            }

            function yb(a) {
                return a && "object" == typeof a && Ad.call(a) == M || !1
            }

            function zb(a) {
                return a && 1 === a.nodeType || !1
            }

            function Ab(a) {
                var b = !0;
                if (!a)return b;
                var c = Ad.call(a), d = a.length;
                return c == K || c == R || c == J || c == P && "number" == typeof d && Db(a.splice) ? !d : (he(a, function () {
                    return b = !1
                }), b)
            }

            function Bb(a, b, c, d) {
                return bb(a, b, "function" == typeof c && Y(c, d, 2))
            }

            function Cb(a) {
                return Pd(a) && !Qd(parseFloat(a))
            }

            function Db(a) {
                return "function" == typeof a
            }

            function Eb(a) {
                return !(!a || !V[typeof a])
            }

            function Fb(a) {
                return Hb(a) && a != +a
            }

            function Gb(a) {
                return null === a
            }

            function Hb(a) {
                return "number" == typeof a || a && "object" == typeof a && Ad.call(a) == O || !1
            }

            function Ib(a) {
                return a && "object" == typeof a && Ad.call(a) == Q || !1
            }

            function Jb(a) {
                return "string" == typeof a || a && "object" == typeof a && Ad.call(a) == R || !1
            }

            function Kb(a) {
                return "undefined" == typeof a
            }

            function Lb(a, b, c) {
                var e = {};
                return b = d.createCallback(b, c, 3), he(a, function (a, c, d) {
                    e[c] = b(a, c, d)
                }), e
            }

            function Mb(a) {
                var b = arguments, c = 2;
                if (!Eb(a))return a;
                if ("number" != typeof b[2] && (c = b.length), c > 3 && "function" == typeof b[c - 2])var d = Y(b[--c - 1], b[c--], 2); else c > 2 && "function" == typeof b[c - 1] && (d = b[--c]);
                for (var e = m(arguments, 1, c), f = -1, g = i(), h = i(); ++f < c;)cb(a, e[f], d, g, h);
                return k(g), k(h), a
            }

            function Nb(a, b, c) {
                var e = {};
                if ("function" != typeof b) {
                    var f = [];
                    ge(a, function (a, b) {
                        f.push(b)
                    }), f = $(f, _(arguments, !0, !1, 1));
                    for (var g = -1, h = f.length; ++g < h;) {
                        var i = f[g];
                        e[i] = a[i]
                    }
                } else b = d.createCallback(b, c, 3), ge(a, function (a, c, d) {
                    b(a, c, d) || (e[c] = a)
                });
                return e
            }

            function Ob(a) {
                for (var b = -1, c = _d(a), d = c.length, e = nd(d); ++b < d;) {
                    var f = c[b];
                    e[b] = [f, a[f]]
                }
                return e
            }

            function Pb(a, b, c) {
                var e = {};
                if ("function" != typeof b)for (var f = -1, g = _(arguments, !0, !1, 1), h = Eb(a) ? g.length : 0; ++f < h;) {
                    var i = g[f];
                    i in a && (e[i] = a[i])
                } else b = d.createCallback(b, c, 3), ge(a, function (a, c, d) {
                    b(a, c, d) && (e[c] = a)
                });
                return e
            }

            function Qb(a, b, c, e) {
                var f = Zd(a);
                if (null == c)if (f)c = []; else {
                    var g = a && a.constructor, h = g && g.prototype;
                    c = W(h)
                }
                return b && (b = d.createCallback(b, e, 4), (f ? Yb : he)(a, function (a, d, e) {
                    return b(c, a, d, e)
                })), c
            }

            function Rb(a) {
                for (var b = -1, c = _d(a), d = c.length, e = nd(d); ++b < d;)e[b] = a[c[b]];
                return e
            }

            function Sb(a) {
                for (var b = arguments, c = -1, d = _(b, !0, !1, 1), e = b[2] && b[2][b[1]] === a ? 1 : d.length, f = nd(e); ++c < e;)f[c] = a[d[c]];
                return f
            }

            function Tb(a, b, c) {
                var d = -1, e = ib(), f = a ? a.length : 0, g = !1;
                return c = (0 > c ? Sd(0, f + c) : c) || 0, Zd(a) ? g = e(a, b, c) > -1 : "number" == typeof f ? g = (Jb(a) ? a.indexOf(b, c) : e(a, b, c)) > -1 : he(a, function (a) {
                    return ++d >= c ? !(g = a === b) : void 0
                }), g
            }

            function Ub(a, b, c) {
                var e = !0;
                b = d.createCallback(b, c, 3);
                var f = -1, g = a ? a.length : 0;
                if ("number" == typeof g)for (; ++f < g && (e = !!b(a[f], f, a));); else he(a, function (a, c, d) {
                    return e = !!b(a, c, d)
                });
                return e
            }

            function Vb(a, b, c) {
                var e = [];
                b = d.createCallback(b, c, 3);
                var f = -1, g = a ? a.length : 0;
                if ("number" == typeof g)for (; ++f < g;) {
                    var h = a[f];
                    b(h, f, a) && e.push(h)
                } else he(a, function (a, c, d) {
                    b(a, c, d) && e.push(a)
                });
                return e
            }

            function Wb(a, b, c) {
                b = d.createCallback(b, c, 3);
                var e = -1, f = a ? a.length : 0;
                if ("number" != typeof f) {
                    var g;
                    return he(a, function (a, c, d) {
                        return b(a, c, d) ? (g = a, !1) : void 0
                    }), g
                }
                for (; ++e < f;) {
                    var h = a[e];
                    if (b(h, e, a))return h
                }
            }

            function Xb(a, b, c) {
                var e;
                return b = d.createCallback(b, c, 3), Zb(a, function (a, c, d) {
                    return b(a, c, d) ? (e = a, !1) : void 0
                }), e
            }

            function Yb(a, b, c) {
                var d = -1, e = a ? a.length : 0;
                if (b = b && "undefined" == typeof c ? b : Y(b, c, 3), "number" == typeof e)for (; ++d < e && b(a[d], d, a) !== !1;); else he(a, b);
                return a
            }

            function Zb(a, b, c) {
                var d = a ? a.length : 0;
                if (b = b && "undefined" == typeof c ? b : Y(b, c, 3), "number" == typeof d)for (; d-- && b(a[d], d, a) !== !1;); else {
                    var e = _d(a);
                    d = e.length, he(a, function (a, c, f) {
                        return c = e ? e[--d] : --d, b(f[c], c, f)
                    })
                }
                return a
            }

            function $b(a, b) {
                var c = m(arguments, 2), d = -1, e = "function" == typeof b, f = a ? a.length : 0, g = nd("number" == typeof f ? f : 0);
                return Yb(a, function (a) {
                    g[++d] = (e ? b : a[b]).apply(a, c)
                }), g
            }

            function _b(a, b, c) {
                var e = -1, f = a ? a.length : 0;
                if (b = d.createCallback(b, c, 3), "number" == typeof f)for (var g = nd(f); ++e < f;)g[e] = b(a[e], e, a); else g = [], he(a, function (a, c, d) {
                    g[++e] = b(a, c, d)
                });
                return g
            }

            function ac(a, b, c) {
                var f = -1 / 0, g = f;
                if ("function" != typeof b && c && c[b] === a && (b = null), null == b && Zd(a))for (var h = -1, i = a.length; ++h < i;) {
                    var j = a[h];
                    j > g && (g = j)
                } else b = null == b && Jb(a) ? e : d.createCallback(b, c, 3), Yb(a, function (a, c, d) {
                    var e = b(a, c, d);
                    e > f && (f = e, g = a)
                });
                return g
            }

            function bc(a, b, c) {
                var f = 1 / 0, g = f;
                if ("function" != typeof b && c && c[b] === a && (b = null), null == b && Zd(a))for (var h = -1, i = a.length; ++h < i;) {
                    var j = a[h];
                    g > j && (g = j)
                } else b = null == b && Jb(a) ? e : d.createCallback(b, c, 3), Yb(a, function (a, c, d) {
                    var e = b(a, c, d);
                    f > e && (f = e, g = a)
                });
                return g
            }

            function cc(a, b, c, e) {
                if (!a)return c;
                var f = arguments.length < 3;
                b = d.createCallback(b, e, 4);
                var g = -1, h = a.length;
                if ("number" == typeof h)for (f && (c = a[++g]); ++g < h;)c = b(c, a[g], g, a); else he(a, function (a, d, e) {
                    c = f ? (f = !1, a) : b(c, a, d, e)
                });
                return c
            }

            function dc(a, b, c, e) {
                var f = arguments.length < 3;
                return b = d.createCallback(b, e, 4), Zb(a, function (a, d, e) {
                    c = f ? (f = !1, a) : b(c, a, d, e)
                }), c
            }

            function ec(a, b, c) {
                return b = d.createCallback(b, c, 3), Vb(a, function (a, c, d) {
                    return !b(a, c, d)
                })
            }

            function fc(a, b, c) {
                if (a && "number" != typeof a.length && (a = Rb(a)), null == b || c)return a ? a[db(0, a.length - 1)] : o;
                var d = gc(a);
                return d.length = Td(Sd(0, b), d.length), d
            }

            function gc(a) {
                var b = -1, c = a ? a.length : 0, d = nd("number" == typeof c ? c : 0);
                return Yb(a, function (a) {
                    var c = db(0, ++b);
                    d[b] = d[c], d[c] = a
                }), d
            }

            function hc(a) {
                var b = a ? a.length : 0;
                return "number" == typeof b ? b : _d(a).length
            }

            function ic(a, b, c) {
                var e;
                b = d.createCallback(b, c, 3);
                var f = -1, g = a ? a.length : 0;
                if ("number" == typeof g)for (; ++f < g && !(e = b(a[f], f, a));); else he(a, function (a, c, d) {
                    return !(e = b(a, c, d))
                });
                return !!e
            }

            function jc(a, b, c) {
                var e = -1, g = Zd(b), h = a ? a.length : 0, m = nd("number" == typeof h ? h : 0);
                for (g || (b = d.createCallback(b, c, 3)), Yb(a, function (a, c, d) {
                    var f = m[++e] = j();
                    g ? f.criteria = _b(b, function (b) {
                        return a[b]
                    }) : (f.criteria = i())[0] = b(a, c, d), f.index = e, f.value = a
                }), h = m.length, m.sort(f); h--;) {
                    var n = m[h];
                    m[h] = n.value, g || k(n.criteria), l(n)
                }
                return m
            }

            function kc(a) {
                return a && "number" == typeof a.length ? m(a) : Rb(a)
            }

            function lc(a) {
                for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
                    var e = a[b];
                    e && d.push(e)
                }
                return d
            }

            function mc(a) {
                return $(a, _(arguments, !0, !0, 1))
            }

            function nc(a, b, c) {
                var e = -1, f = a ? a.length : 0;
                for (b = d.createCallback(b, c, 3); ++e < f;)if (b(a[e], e, a))return e;
                return -1
            }

            function oc(a, b, c) {
                var e = a ? a.length : 0;
                for (b = d.createCallback(b, c, 3); e--;)if (b(a[e], e, a))return e;
                return -1
            }

            function pc(a, b, c) {
                var e = 0, f = a ? a.length : 0;
                if ("number" != typeof b && null != b) {
                    var g = -1;
                    for (b = d.createCallback(b, c, 3); ++g < f && b(a[g], g, a);)e++
                } else if (e = b, null == e || c)return a ? a[0] : o;
                return m(a, 0, Td(Sd(0, e), f))
            }

            function qc(a, b, c, d) {
                return "boolean" != typeof b && null != b && (d = c, c = "function" != typeof b && d && d[b] === a ? null : b, b = !1), null != c && (a = _b(a, c, d)), _(a, b)
            }

            function rc(b, c, d) {
                if ("number" == typeof d) {
                    var e = b ? b.length : 0;
                    d = 0 > d ? Sd(0, e + d) : d || 0
                } else if (d) {
                    var f = Ac(b, c);
                    return b[f] === c ? f : -1
                }
                return a(b, c, d)
            }

            function sc(a, b, c) {
                var e = 0, f = a ? a.length : 0;
                if ("number" != typeof b && null != b) {
                    var g = f;
                    for (b = d.createCallback(b, c, 3); g-- && b(a[g], g, a);)e++
                } else e = null == b || c ? 1 : b || e;
                return m(a, 0, Td(Sd(0, f - e), f))
            }

            function tc() {
                for (var c = [], d = -1, e = arguments.length, f = i(), h = ib(), j = h === a, m = i(); ++d < e;) {
                    var n = arguments[d];
                    (Zd(n) || mb(n)) && (c.push(n), f.push(j && n.length >= t && g(d ? c[d] : m)))
                }
                var o = c[0], p = -1, q = o ? o.length : 0, r = [];
                a:for (; ++p < q;) {
                    var s = f[0];
                    if (n = o[p], (s ? b(s, n) : h(m, n)) < 0) {
                        for (d = e, (s || m).push(n); --d;)if (s = f[d], (s ? b(s, n) : h(c[d], n)) < 0)continue a;
                        r.push(n)
                    }
                }
                for (; e--;)s = f[e], s && l(s);
                return k(f), k(m), r
            }

            function uc(a, b, c) {
                var e = 0, f = a ? a.length : 0;
                if ("number" != typeof b && null != b) {
                    var g = f;
                    for (b = d.createCallback(b, c, 3); g-- && b(a[g], g, a);)e++
                } else if (e = b, null == e || c)return a ? a[f - 1] : o;
                return m(a, Sd(0, f - e))
            }

            function vc(a, b, c) {
                var d = a ? a.length : 0;
                for ("number" == typeof c && (d = (0 > c ? Sd(0, d + c) : Td(c, d - 1)) + 1); d--;)if (a[d] === b)return d;
                return -1
            }

            function wc(a) {
                for (var b = arguments, c = 0, d = b.length, e = a ? a.length : 0; ++c < d;)for (var f = -1, g = b[c]; ++f < e;)a[f] === g && (Kd.call(a, f--, 1), e--);
                return a
            }

            function xc(a, b, c) {
                a = +a || 0, c = "number" == typeof c ? c : +c || 1, null == b && (b = a, a = 0);
                for (var d = -1, e = Sd(0, Cd((b - a) / (c || 1))), f = nd(e); ++d < e;)f[d] = a, a += c;
                return f
            }

            function yc(a, b, c) {
                var e = -1, f = a ? a.length : 0, g = [];
                for (b = d.createCallback(b, c, 3); ++e < f;) {
                    var h = a[e];
                    b(h, e, a) && (g.push(h), Kd.call(a, e--, 1), f--)
                }
                return g
            }

            function zc(a, b, c) {
                if ("number" != typeof b && null != b) {
                    var e = 0, f = -1, g = a ? a.length : 0;
                    for (b = d.createCallback(b, c, 3); ++f < g && b(a[f], f, a);)e++
                } else e = null == b || c ? 1 : Sd(0, b);
                return m(a, e)
            }

            function Ac(a, b, c, e) {
                var f = 0, g = a ? a.length : f;
                for (c = c ? d.createCallback(c, e, 1) : Zc, b = c(b); g > f;) {
                    var h = f + g >>> 1;
                    c(a[h]) < b ? f = h + 1 : g = h
                }
                return f
            }

            function Bc() {
                return eb(_(arguments, !0, !0))
            }

            function Cc(a, b, c, e) {
                return "boolean" != typeof b && null != b && (e = c, c = "function" != typeof b && e && e[b] === a ? null : b, b = !1), null != c && (c = d.createCallback(c, e, 3)), eb(a, b, c)
            }

            function Dc(a) {
                return $(a, m(arguments, 1))
            }

            function Ec() {
                for (var a = -1, b = arguments.length; ++a < b;) {
                    var c = arguments[a];
                    if (Zd(c) || mb(c))var d = d ? eb($(d, c).concat($(c, d))) : c
                }
                return d || []
            }

            function Fc() {
                for (var a = arguments.length > 1 ? arguments : arguments[0], b = -1, c = a ? ac(me(a, "length")) : 0, d = nd(0 > c ? 0 : c); ++b < c;)d[b] = me(a, b);
                return d
            }

            function Gc(a, b) {
                var c = -1, d = a ? a.length : 0, e = {};
                for (b || !d || Zd(a[0]) || (b = []); ++c < d;) {
                    var f = a[c];
                    b ? e[f] = b[c] : f && (e[f[0]] = f[1])
                }
                return e
            }

            function Hc(a, b) {
                if (!Db(b))throw new wd;
                return function () {
                    return --a < 1 ? b.apply(this, arguments) : void 0
                }
            }

            function Ic(a, b) {
                return arguments.length > 2 ? gb(a, 17, m(arguments, 2), null, b) : gb(a, 1, null, null, b)
            }

            function Jc(a) {
                for (var b = arguments.length > 1 ? _(arguments, !0, !1, 1) : ub(a), c = -1, d = b.length; ++c < d;) {
                    var e = b[c];
                    a[e] = gb(a[e], 1, null, null, a)
                }
                return a
            }

            function Kc(a, b) {
                return arguments.length > 2 ? gb(b, 19, m(arguments, 2), null, a) : gb(b, 3, null, null, a)
            }

            function Lc() {
                for (var a = arguments, b = a.length; b--;)if (!Db(a[b]))throw new wd;
                return function () {
                    for (var b = arguments, c = a.length; c--;)b = [a[c].apply(this, b)];
                    return b[0]
                }
            }

            function Mc(a, b) {
                return b = "number" == typeof b ? b : +b || a.length, gb(a, 4, null, null, null, b)
            }

            function Nc(a, b, c) {
                var d, e, f, g, h, i, j, k = 0, l = !1, m = !0;
                if (!Db(a))throw new wd;
                if (b = Sd(0, b) || 0, c === !0) {
                    var n = !0;
                    m = !1
                } else Eb(c) && (n = c.leading, l = "maxWait"in c && (Sd(b, c.maxWait) || 0), m = "trailing"in c ? c.trailing : m);
                var p = function () {
                    var c = b - (oe() - g);
                    if (0 >= c) {
                        e && Dd(e);
                        var l = j;
                        e = i = j = o, l && (k = oe(), f = a.apply(h, d), i || e || (d = h = null))
                    } else i = Jd(p, c)
                }, q = function () {
                    i && Dd(i), e = i = j = o, (m || l !== b) && (k = oe(), f = a.apply(h, d), i || e || (d = h = null))
                };
                return function () {
                    if (d = arguments, g = oe(), h = this, j = m && (i || !n), l === !1)var c = n && !i; else {
                        e || n || (k = g);
                        var o = l - (g - k), r = 0 >= o;
                        r ? (e && (e = Dd(e)), k = g, f = a.apply(h, d)) : e || (e = Jd(q, o))
                    }
                    return r && i ? i = Dd(i) : i || b === l || (i = Jd(p, b)), c && (r = !0, f = a.apply(h, d)), !r || i || e || (d = h = null), f
                }
            }

            function Oc(a) {
                if (!Db(a))throw new wd;
                var b = m(arguments, 1);
                return Jd(function () {
                    a.apply(o, b)
                }, 1)
            }

            function Pc(a, b) {
                if (!Db(a))throw new wd;
                var c = m(arguments, 2);
                return Jd(function () {
                    a.apply(o, c)
                }, b)
            }

            function Qc(a, b) {
                if (!Db(a))throw new wd;
                var c = function () {
                    var d = c.cache, e = b ? b.apply(this, arguments) : s + arguments[0];
                    return Hd.call(d, e) ? d[e] : d[e] = a.apply(this, arguments)
                };
                return c.cache = {}, c
            }

            function Rc(a) {
                var b, c;
                if (!Db(a))throw new wd;
                return function () {
                    return b ? c : (b = !0, c = a.apply(this, arguments), a = null, c)
                }
            }

            function Sc(a) {
                return gb(a, 16, m(arguments, 1))
            }

            function Tc(a) {
                return gb(a, 32, null, m(arguments, 1))
            }

            function Uc(a, b, c) {
                var d = !0, e = !0;
                if (!Db(a))throw new wd;
                return c === !1 ? d = !1 : Eb(c) && (d = "leading"in c ? c.leading : d, e = "trailing"in c ? c.trailing : e), T.leading = d, T.maxWait = b, T.trailing = e, Nc(a, b, T)
            }

            function Vc(a, b) {
                return gb(b, 16, [a])
            }

            function Wc(a) {
                return function () {
                    return a
                }
            }

            function Xc(a, b, c) {
                var d = typeof a;
                if (null == a || "function" == d)return Y(a, b, c);
                if ("object" != d)return bd(a);
                var e = _d(a), f = e[0], g = a[f];
                return 1 != e.length || g !== g || Eb(g) ? function (b) {
                    for (var c = e.length, d = !1; c-- && (d = bb(b[e[c]], a[e[c]], null, !0)););
                    return d
                } : function (a) {
                    var b = a[f];
                    return g === b && (0 !== g || 1 / g == 1 / b)
                }
            }

            function Yc(a) {
                return null == a ? "" : vd(a).replace(de, hb)
            }

            function Zc(a) {
                return a
            }

            function $c(a, b, c) {
                var e = !0, f = b && ub(b);
                b && (c || f.length) || (null == c && (c = b), g = p, b = a, a = d, f = ub(b)), c === !1 ? e = !1 : Eb(c) && "chain"in c && (e = c.chain);
                var g = a, h = Db(g);
                Yb(f, function (c) {
                    var d = a[c] = b[c];
                    h && (g.prototype[c] = function () {
                        var b = this.__chain__, c = this.__wrapped__, f = [c];
                        Id.apply(f, arguments);
                        var h = d.apply(a, f);
                        if (e || b) {
                            if (c === h && Eb(h))return this;
                            h = new g(h), h.__chain__ = b
                        }
                        return h
                    })
                })
            }

            function _c() {
                return c._ = zd, this
            }

            function ad() {
            }

            function bd(a) {
                return function (b) {
                    return b[a]
                }
            }

            function cd(a, b, c) {
                var d = null == a, e = null == b;
                if (null == c && ("boolean" == typeof a && e ? (c = a, a = 1) : e || "boolean" != typeof b || (c = b, e = !0)), d && e && (b = 1), a = +a || 0, e ? (b = a, a = 0) : b = +b || 0, c || a % 1 || b % 1) {
                    var f = Vd();
                    return Td(a + f * (b - a + parseFloat("1e-" + ((f + "").length - 1))), b)
                }
                return db(a, b)
            }

            function dd(a, b) {
                if (a) {
                    var c = a[b];
                    return Db(c) ? a[b]() : c
                }
            }

            function ed(a, b, c) {
                var e = d.templateSettings;
                a = vd(a || ""), c = fe({}, c, e);
                var f, g = fe({}, c.imports, e.imports), i = _d(g), j = Rb(g), k = 0, l = c.interpolate || E, m = "__p += '", n = ud((c.escape || E).source + "|" + l.source + "|" + (l === C ? z : E).source + "|" + (c.evaluate || E).source + "|$", "g");
                a.replace(n, function (b, c, d, e, g, i) {
                    return d || (d = e), m += a.slice(k, i).replace(G, h), c && (m += "' +\n__e(" + c + ") +\n'"), g && (f = !0, m += "';\n" + g + ";\n__p += '"), d && (m += "' +\n((__t = (" + d + ")) == null ? '' : __t) +\n'"), k = i + b.length, b
                }), m += "';\n";
                var p = c.variable, q = p;
                q || (p = "obj", m = "with (" + p + ") {\n" + m + "\n}\n"), m = (f ? m.replace(w, "") : m).replace(x, "$1").replace(y, "$1;"), m = "function(" + p + ") {\n" + (q ? "" : p + " || (" + p + " = {});\n") + "var __t, __p = '', __e = _.escape" + (f ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + m + "return __p\n}";
                var r = "\n/*\n//# sourceURL=" + (c.sourceURL || "/lodash/template/source[" + I++ + "]") + "\n*/";
                try {
                    var s = qd(i, "return " + m + r).apply(o, j)
                } catch (t) {
                    throw t.source = m, t
                }
                return b ? s(b) : (s.source = m, s)
            }

            function fd(a, b, c) {
                a = (a = +a) > -1 ? a : 0;
                var d = -1, e = nd(a);
                for (b = Y(b, c, 1); ++d < a;)e[d] = b(d);
                return e
            }

            function gd(a) {
                return null == a ? "" : vd(a).replace(ce, lb)
            }

            function hd(a) {
                var b = ++r;
                return vd(null == a ? "" : a) + b
            }

            function id(a) {
                return a = new p(a), a.__chain__ = !0, a
            }

            function jd(a, b) {
                return b(a), a
            }

            function kd() {
                return this.__chain__ = !0, this
            }

            function ld() {
                return vd(this.__wrapped__)
            }

            function md() {
                return this.__wrapped__
            }

            c = c ? ab.defaults(X.Object(), c, ab.pick(X, H)) : X;
            var nd = c.Array, od = c.Boolean, pd = c.Date, qd = c.Function, rd = c.Math, sd = c.Number, td = c.Object, ud = c.RegExp, vd = c.String, wd = c.TypeError, xd = [], yd = td.prototype, zd = c._, Ad = yd.toString, Bd = ud("^" + vd(Ad).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"), Cd = rd.ceil, Dd = c.clearTimeout, Ed = rd.floor, Fd = qd.prototype.toString, Gd = jb(Gd = td.getPrototypeOf) && Gd, Hd = yd.hasOwnProperty, Id = xd.push, Jd = c.setTimeout, Kd = xd.splice, Ld = xd.unshift, Md = function () {
                try {
                    var a = {}, b = jb(b = td.defineProperty) && b, c = b(a, a, a) && b
                } catch (d) {
                }
                return c
            }(), Nd = jb(Nd = td.create) && Nd, Od = jb(Od = nd.isArray) && Od, Pd = c.isFinite, Qd = c.isNaN, Rd = jb(Rd = td.keys) && Rd, Sd = rd.max, Td = rd.min, Ud = c.parseInt, Vd = rd.random, Wd = {};
            Wd[K] = nd, Wd[L] = od, Wd[M] = pd, Wd[N] = qd, Wd[P] = td, Wd[O] = sd, Wd[Q] = ud, Wd[R] = vd, p.prototype = d.prototype;
            var Xd = d.support = {};
            Xd.funcDecomp = !jb(c.WinRTError) && F.test(n), Xd.funcNames = "string" == typeof qd.name, d.templateSettings = {
                escape: /<%-([\s\S]+?)%>/g,
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: C,
                variable: "",
                imports: {_: d}
            }, Nd || (W = function () {
                function a() {
                }

                return function (b) {
                    if (Eb(b)) {
                        a.prototype = b;
                        var d = new a;
                        a.prototype = null
                    }
                    return d || c.Object()
                }
            }());
            var Yd = Md ? function (a, b) {
                U.value = b, Md(a, "__bindData__", U)
            } : ad, Zd = Od || function (a) {
                    return a && "object" == typeof a && "number" == typeof a.length && Ad.call(a) == K || !1
                }, $d = function (a) {
                var b, c = a, d = [];
                if (!c)return d;
                if (!V[typeof a])return d;
                for (b in c)Hd.call(c, b) && d.push(b);
                return d
            }, _d = Rd ? function (a) {
                return Eb(a) ? Rd(a) : []
            } : $d, ae = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }, be = wb(ae), ce = ud("(" + _d(be).join("|") + ")", "g"), de = ud("[" + _d(ae).join("") + "]", "g"), ee = function (a, b, c) {
                var d, e = a, f = e;
                if (!e)return f;
                var g = arguments, h = 0, i = "number" == typeof c ? 2 : g.length;
                if (i > 3 && "function" == typeof g[i - 2])var j = Y(g[--i - 1], g[i--], 2); else i > 2 && "function" == typeof g[i - 1] && (j = g[--i]);
                for (; ++h < i;)if (e = g[h], e && V[typeof e])for (var k = -1, l = V[typeof e] && _d(e), m = l ? l.length : 0; ++k < m;)d = l[k], f[d] = j ? j(f[d], e[d]) : e[d];
                return f
            }, fe = function (a, b, c) {
                var d, e = a, f = e;
                if (!e)return f;
                for (var g = arguments, h = 0, i = "number" == typeof c ? 2 : g.length; ++h < i;)if (e = g[h], e && V[typeof e])for (var j = -1, k = V[typeof e] && _d(e), l = k ? k.length : 0; ++j < l;)d = k[j], "undefined" == typeof f[d] && (f[d] = e[d]);
                return f
            }, ge = function (a, b, c) {
                var d, e = a, f = e;
                if (!e)return f;
                if (!V[typeof e])return f;
                b = b && "undefined" == typeof c ? b : Y(b, c, 3);
                for (d in e)if (b(e[d], d, a) === !1)return f;
                return f
            }, he = function (a, b, c) {
                var d, e = a, f = e;
                if (!e)return f;
                if (!V[typeof e])return f;
                b = b && "undefined" == typeof c ? b : Y(b, c, 3);
                for (var g = -1, h = V[typeof e] && _d(e), i = h ? h.length : 0; ++g < i;)if (d = h[g], b(e[d], d, a) === !1)return f;
                return f
            }, ie = Gd ? function (a) {
                if (!a || Ad.call(a) != P)return !1;
                var b = a.valueOf, c = jb(b) && (c = Gd(b)) && Gd(c);
                return c ? a == c || Gd(a) == c : kb(a)
            } : kb, je = fb(function (a, b, c) {
                Hd.call(a, c) ? a[c]++ : a[c] = 1
            }), ke = fb(function (a, b, c) {
                (Hd.call(a, c) ? a[c] : a[c] = []).push(b)
            }), le = fb(function (a, b, c) {
                a[c] = b
            }), me = _b, ne = Vb, oe = jb(oe = pd.now) && oe || function () {
                    return (new pd).getTime()
                }, pe = 8 == Ud(v + "08") ? Ud : function (a, b) {
                return Ud(Jb(a) ? a.replace(D, "") : a, b || 0)
            };
            return d.after = Hc, d.assign = ee, d.at = Sb, d.bind = Ic, d.bindAll = Jc, d.bindKey = Kc, d.chain = id, d.compact = lc, d.compose = Lc, d.constant = Wc, d.countBy = je, d.create = pb, d.createCallback = Xc, d.curry = Mc, d.debounce = Nc, d.defaults = fe, d.defer = Oc, d.delay = Pc, d.difference = mc, d.filter = Vb, d.flatten = qc, d.forEach = Yb, d.forEachRight = Zb, d.forIn = ge, d.forInRight = sb, d.forOwn = he, d.forOwnRight = tb, d.functions = ub, d.groupBy = ke, d.indexBy = le, d.initial = sc, d.intersection = tc, d.invert = wb, d.invoke = $b, d.keys = _d, d.map = _b, d.mapValues = Lb, d.max = ac, d.memoize = Qc, d.merge = Mb, d.min = bc, d.omit = Nb, d.once = Rc, d.pairs = Ob, d.partial = Sc, d.partialRight = Tc, d.pick = Pb, d.pluck = me, d.property = bd, d.pull = wc, d.range = xc, d.reject = ec, d.remove = yc, d.rest = zc, d.shuffle = gc, d.sortBy = jc, d.tap = jd, d.throttle = Uc, d.times = fd, d.toArray = kc, d.transform = Qb, d.union = Bc, d.uniq = Cc, d.values = Rb, d.where = ne, d.without = Dc, d.wrap = Vc, d.xor = Ec, d.zip = Fc, d.zipObject = Gc, d.collect = _b, d.drop = zc, d.each = Yb, d.eachRight = Zb, d.extend = ee, d.methods = ub, d.object = Gc, d.select = Vb, d.tail = zc, d.unique = Cc, d.unzip = Fc, $c(d), d.clone = nb, d.cloneDeep = ob, d.contains = Tb, d.escape = Yc, d.every = Ub, d.find = Wb, d.findIndex = nc, d.findKey = qb, d.findLast = Xb, d.findLastIndex = oc, d.findLastKey = rb, d.has = vb, d.identity = Zc, d.indexOf = rc, d.isArguments = mb, d.isArray = Zd, d.isBoolean = xb, d.isDate = yb, d.isElement = zb,d.isEmpty = Ab,d.isEqual = Bb,d.isFinite = Cb,d.isFunction = Db,d.isNaN = Fb,d.isNull = Gb,d.isNumber = Hb,d.isObject = Eb,d.isPlainObject = ie,d.isRegExp = Ib,d.isString = Jb,d.isUndefined = Kb,d.lastIndexOf = vc,d.mixin = $c,d.noConflict = _c,d.noop = ad,d.now = oe,d.parseInt = pe,d.random = cd,d.reduce = cc,d.reduceRight = dc,d.result = dd,d.runInContext = n,d.size = hc,d.some = ic,d.sortedIndex = Ac,d.template = ed,d.unescape = gd,d.uniqueId = hd,d.all = Ub,d.any = ic,d.detect = Wb,d.findWhere = Wb,d.foldl = cc,d.foldr = dc,d.include = Tb,d.inject = cc,$c(function () {
                var a = {};
                return he(d, function (b, c) {
                    d.prototype[c] || (a[c] = b)
                }), a
            }(), !1),d.first = pc,d.last = uc,d.sample = fc,d.take = pc,d.head = pc,he(d, function (a, b) {
                var c = "sample" !== b;
                d.prototype[b] || (d.prototype[b] = function (b, d) {
                    var e = this.__chain__, f = a(this.__wrapped__, b, d);
                    return e || null != b && (!d || c && "function" == typeof b) ? new p(f, e) : f
                })
            }),d.VERSION = "2.4.1",d.prototype.chain = kd,d.prototype.toString = ld,d.prototype.value = md,d.prototype.valueOf = md,Yb(["join", "pop", "shift"], function (a) {
                var b = xd[a];
                d.prototype[a] = function () {
                    var a = this.__chain__, c = b.apply(this.__wrapped__, arguments);
                    return a ? new p(c, a) : c
                }
            }),Yb(["push", "reverse", "sort", "unshift"], function (a) {
                var b = xd[a];
                d.prototype[a] = function () {
                    return b.apply(this.__wrapped__, arguments), this
                }
            }),Yb(["concat", "slice", "splice"], function (a) {
                var b = xd[a];
                d.prototype[a] = function () {
                    return new p(b.apply(this.__wrapped__, arguments), this.__chain__)
                }
            }),d
        }

        var o, p = [], q = [], r = 0, s = +new Date + "", t = 75, u = 40, v = " 	\f ﻿\n\r\u2028\u2029 ᠎             　", w = /\b__p \+= '';/g, x = /\b(__p \+=) '' \+/g, y = /(__e\(.*?\)|\b__t\)) \+\n'';/g, z = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, A = /\w*$/, B = /^\s*function[ \n\r\t]+\w/, C = /<%=([\s\S]+?)%>/g, D = RegExp("^[" + v + "]*0+(?=.$)"), E = /($^)/, F = /\bthis\b/, G = /['\n\r\t\u2028\u2029\\]/g, H = ["Array", "Boolean", "Date", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"], I = 0, J = "[object Arguments]", K = "[object Array]", L = "[object Boolean]", M = "[object Date]", N = "[object Function]", O = "[object Number]", P = "[object Object]", Q = "[object RegExp]", R = "[object String]", S = {};
        S[N] = !1, S[J] = S[K] = S[L] = S[M] = S[O] = S[P] = S[Q] = S[R] = !0;
        var T = {leading: !1, maxWait: 0, trailing: !1}, U = {
            configurable: !1,
            enumerable: !1,
            value: null,
            writable: !1
        }, V = {"boolean": !1, "function": !0, object: !0, number: !1, string: !1, undefined: !1}, W = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }, X = V[typeof window] && window || this, Y = V[typeof exports] && exports && !exports.nodeType && exports, Z = V[typeof module] && module && !module.nodeType && module, $ = Z && Z.exports === Y && Y, _ = V[typeof global] && global;
        !_ || _.global !== _ && _.window !== _ || (X = _);
        var ab = n();
        "function" == typeof c && "object" == typeof c.amd && c.amd ? (X._ = ab, c("lodash", [], function () {
            return ab
        })) : Y && Z ? $ ? (Z.exports = ab)._ = ab : Y._ = ab : X._ = ab
    }.call(this), c("ToolBar", ["lodash", "snap"], function (a, b) {
        function c(c) {
            this.config = a.extend({}, d, c), this.type = this.config.type, this.paper = this.config.paper || new b("100%", "100%").paper, this.body = this.paper.g().drag(), this.tools = {}, this.onToolClick = function (a) {
                return function (a) {
                    var b = a.target, c = this.tools[b.id];
                    c && (c.el.data("selected") || (Object.keys(this.tools).forEach(function (a) {
                        this.deactivate(a)
                    }.bind(this)), this.activate(b.id)))
                }.bind(a)
            }(this)
        }

        var d = {toolSize: 24}, e = {
            name: "tool", activeFill: "red", inactiveFill: "gray", onActivate: function () {
            }, onDeactivate: function () {
            }
        };
        return c.prototype.activate = function (a) {
            if (this.tools[a]) {
                var b = this.tools[a];
                b.el.data("selected", !0), b.el.attr({fill: b.activeFill}), b.onActivate.call(this)
            }
        }, c.prototype.deactivate = function (a) {
            if (this.tools[a]) {
                var b = this.tools[a];
                b.el.data("selected") && (b.el.data("selected", !1), b.el.attr({fill: b.inactiveFill}), b.onDeactivate.call(this))
            }
        }, c.prototype.add = function (b, c) {
            if (this.tools[b])throw new Error('Tool with id "' + b + '" already exists.');
            var d = a.extend({}, e, c), f = this.config.toolSize;
            d.el = this.paper.rect(), d.el.attr({
                width: f,
                height: f,
                id: b,
                fill: "red",
                x: 0,
                y: Object.keys(this.tools).length * f
            }), d.el.attr({fill: d.inactiveFill}), d.el.click(this.onToolClick.bind(this)), this.tools[b] = d, [d.inactiveFill, d.activeFill].forEach(function (a) {
                a && a.type && "pattern" === a.type && a.attr({width: f, height: f})
            }), this.height(Object.keys(this.tools).length * f), this.body.append(d.el), this.body.transform("translate(100, 100)")
        }, c.prototype.remove = function (a) {
            this.tools[a] && delete this.tools[a]
        }, c.prototype.position = function (a) {
            var b, c = this.body.attr("x"), d = this.body.attr("y");
            return a && "object" == typeof a ? (b = {
                x: "number" == typeof a.x ? a.x : c,
                y: "number" == typeof a.y ? a.y : d
            }, this.body.transform("translate(" + b.x + "," + b.y + ")"), b) : {x: c, y: d}
        }, c.prototype.dimension = function (a, b) {
            var c = this.body.getBBox()[a];
            return b && "number" == typeof b && b !== c ? (this.body.attr(a, b), b) : c
        }, c.prototype.height = function (a) {
            return this.dimension("height", a)
        }, c.prototype.width = function (a) {
            return this.dimension("width", a)
        }, c
    }), function (a, b) {
        "function" == typeof c && c.amd ? c("snap.freeTransform", ["snap"], function (c) {
            return b(c || a.Snap)
        }) : b(Snap)
    }(this, function (a) {
        a.plugin(function (a) {
            var b = function (a, b, c) {
                function d(a) {
                    ("set" === a.type ? a.items : [a]).map(function (a) {
                        "set" === a.type ? d(a) : n.items.push({
                            el: a,
                            attrs: {rotate: 0, scale: {x: 1, y: 1}, translate: {x: 0, y: 0}},
                            transformString: a.transform().toString()
                        })
                    })
                }

                function e() {
                    var a = {
                        x: n.attrs.rotate * Math.PI / 180,
                        y: (n.attrs.rotate + 90) * Math.PI / 180
                    }, b = {
                        x: n.attrs.size.x / 2 * n.attrs.scale.x,
                        y: n.attrs.size.y / 2 * n.attrs.scale.y
                    }, c = [], d = [{x: -1, y: -1}, {x: 1, y: -1}, {x: 1, y: 1}, {x: -1, y: 1}];
                    return d.map(function (d) {
                        c.push({
                            x: n.attrs.center.x + n.attrs.translate.x + d.x * b.x * Math.cos(a.x) + d.y * b.y * Math.cos(a.y),
                            y: n.attrs.center.y + n.attrs.translate.y + d.x * b.x * Math.sin(a.x) + d.y * b.y * Math.sin(a.y)
                        })
                    }), c
                }

                function f() {
                    return {x: parseInt(l.node.clientWidth), y: parseInt(l.node.clientHeight)}
                }

                function g(a) {
                    if (a && n.opts.snap.drag) {
                        var b = a.x, c = a.y, d = {x: 0, y: 0}, e = {x: 0, y: 0};
                        [0, 1].map(function () {
                            d.x = b - Math.round(b / n.opts.snap.drag) * n.opts.snap.drag, d.y = c - Math.round(c / n.opts.snap.drag) * n.opts.snap.drag, Math.abs(d.x) <= n.opts.snapDist.drag && (e.x = d.x), Math.abs(d.y) <= n.opts.snapDist.drag && (e.y = d.y), b += a.width - e.x, c += a.height - e.y
                        }), n.attrs.translate.x -= e.x, n.attrs.translate.y -= e.y
                    }
                    if (n.opts.boundary) {
                        var g = n.opts.boundary;
                        g.width = g.width || f().x, g.height = g.height || f().y, n.attrs.center.x + n.attrs.translate.x < g.x && (n.attrs.translate.x += g.x - (n.attrs.center.x + n.attrs.translate.x)), n.attrs.center.y + n.attrs.translate.y < g.y && (n.attrs.translate.y += g.y - (n.attrs.center.y + n.attrs.translate.y)), n.attrs.center.x + n.attrs.translate.x > g.x + g.width && (n.attrs.translate.x += g.x + g.width - (n.attrs.center.x + n.attrs.translate.x)), n.attrs.center.y + n.attrs.translate.y > g.y + g.height && (n.attrs.translate.y += g.y + g.height - (n.attrs.center.y + n.attrs.translate.y))
                    }
                    if (d = Math.abs(n.attrs.rotate % n.opts.snap.rotate), d = Math.min(d, n.opts.snap.rotate - d), d < n.opts.snapDist.rotate && (n.attrs.rotate = Math.round(n.attrs.rotate / n.opts.snap.rotate) * n.opts.snap.rotate), d = {
                            x: Math.abs(n.attrs.scale.x * n.attrs.size.x % n.opts.snap.scale),
                            y: Math.abs(n.attrs.scale.y * n.attrs.size.x % n.opts.snap.scale)
                        }, d = {
                            x: Math.min(d.x, n.opts.snap.scale - d.x),
                            y: Math.min(d.y, n.opts.snap.scale - d.y)
                        }, d.x < n.opts.snapDist.scale && (n.attrs.scale.x = Math.round(n.attrs.scale.x * n.attrs.size.x / n.opts.snap.scale) * n.opts.snap.scale / n.attrs.size.x), d.y < n.opts.snapDist.scale && (n.attrs.scale.y = Math.round(n.attrs.scale.y * n.attrs.size.y / n.opts.snap.scale) * n.opts.snap.scale / n.attrs.size.y), n.opts.range.rotate) {
                        var h = (360 + n.attrs.rotate) % 360;
                        h > 180 && (h -= 360), h < n.opts.range.rotate[0] && (n.attrs.rotate += n.opts.range.rotate[0] - h), h > n.opts.range.rotate[1] && (n.attrs.rotate += n.opts.range.rotate[1] - h)
                    }
                    n.opts.range.scale && (n.attrs.scale.x * n.attrs.size.x < n.opts.range.scale[0] && (n.attrs.scale.x = n.opts.range.scale[0] / n.attrs.size.x), n.attrs.scale.y * n.attrs.size.y < n.opts.range.scale[0] && (n.attrs.scale.y = n.opts.range.scale[0] / n.attrs.size.y), n.attrs.scale.x * n.attrs.size.x > n.opts.range.scale[1] && (n.attrs.scale.x = n.opts.range.scale[1] / n.attrs.size.x), n.attrs.scale.y * n.attrs.size.y > n.opts.range.scale[1] && (n.attrs.scale.y = n.opts.range.scale[1] / n.attrs.size.y))
                }

                function h() {
                    return {
                        x: n.attrs.scale.x * n.attrs.size.x >= n.opts.range.scale[0] && n.attrs.scale.x * n.attrs.size.x <= n.opts.range.scale[1],
                        y: n.attrs.scale.y * n.attrs.size.y >= n.opts.range.scale[0] && n.attrs.scale.y * n.attrs.size.y <= n.opts.range.scale[1]
                    }
                }

                function i(a) {
                    "x" === a ? n.attrs.scale.y = n.attrs.scale.x / n.attrs.ratio : n.attrs.scale.x = n.attrs.scale.y * n.attrs.ratio
                }

                function j(a) {
                    var b, c = {};
                    for (b in a)c[b] = "object" == typeof a[b] ? j(a[b]) : a[b];
                    return c
                }

                function k(a) {
                    if (n.callback) {
                        var b = [];
                        a.map(function (a) {
                            a && b.push(a)
                        }), clearTimeout(o), o = setTimeout(function () {
                            n.callback && n.callback(n, b)
                        }, 1)
                    }
                }

                if (a.freeTransform)return a.freeTransform;
                var l = a.paper, m = a.getBBox(!0), n = a.freeTransform = {
                    attrs: {
                        x: m.x,
                        y: m.y,
                        size: {x: m.width, y: m.height},
                        center: {x: m.cx, y: m.cy},
                        rotate: 0,
                        scale: {x: 1, y: 1},
                        translate: {x: 0, y: 0},
                        ratio: 1
                    },
                    axes: null,
                    bbox: null,
                    callback: null,
                    items: [],
                    handles: {center: null, x: null, y: null},
                    offset: {rotate: 0, scale: {x: 1, y: 1}, translate: {x: 0, y: 0}},
                    opts: {
                        animate: !1,
                        attrs: {fill: "#fff", stroke: "#000"},
                        bboxAttrs: {fill: "none", stroke: "#000", "stroke-dasharray": "4, 4", opacity: .5},
                        axesAttrs: {fill: "#fff", stroke: "#000", "stroke-dasharray": "4, 4", opacity: .5},
                        discAttrs: {fill: "#fff", stroke: "#000"},
                        boundary: {x: l._left || 0, y: l._top || 0, width: null, height: null},
                        distance: 1.3,
                        drag: !0,
                        draw: !1,
                        keepRatio: !1,
                        range: {rotate: [-180, 180], scale: [-99999, 99999]},
                        rotate: !0,
                        scale: !0,
                        snap: {rotate: 0, scale: 0, drag: 0},
                        snapDist: {rotate: 0, scale: 0, drag: 7},
                        size: 5,
                        bodyCursor: "auto",
                        cornerCursors: ["nwse-resize", "nesw-resize", "nwse-resize", "nesw-resize"],
                        sideCursors: ["ns-resize", "ew-resize", "ns-resize", "ew-resize"]
                    },
                    subject: a
                };
                n.updateHandles = function () {
                    if (n.handles.bbox || n.opts.rotate.indexOf("self") >= 0)var a = e();
                    var b = {
                        x: n.attrs.rotate * Math.PI / 180,
                        y: (n.attrs.rotate + 90) * Math.PI / 180
                    }, c = {x: n.attrs.size.x / 2 * n.attrs.scale.x, y: n.attrs.size.y / 2 * n.attrs.scale.y};
                    if (n.axes.map(function (a) {
                            if (n.handles[a]) {
                                var d = n.attrs.center.x + n.attrs.translate.x + c[a] * n.opts.distance * Math.cos(b[a]), e = n.attrs.center.y + n.attrs.translate.y + c[a] * n.opts.distance * Math.sin(b[a]);
                                n.opts.boundary && (d = Math.max(Math.min(d, n.opts.boundary.x + (n.opts.boundary.width || f().x)), n.opts.boundary.x), e = Math.max(Math.min(e, n.opts.boundary.y + (n.opts.boundary.height || f().y)), n.opts.boundary.y)), n.handles[a].disc.attr({
                                    cx: d,
                                    cy: e
                                }), n.handles[a].line.toFront().attr({path: [["M", n.attrs.center.x + n.attrs.translate.x, n.attrs.center.y + n.attrs.translate.y], ["L", n.handles[a].disc.attr("cx"), n.handles[a].disc.attr("cy")]]}), n.handles[a].disc.toFront()
                            }
                        }), n.bbox) {
                        n.bbox.toFront().attr({path: [["M", a[0].x, a[0].y], ["L", a[1].x, a[1].y], ["L", a[2].x, a[2].y], ["L", a[3].x, a[3].y], ["L", a[0].x, a[0].y]]});
                        var d = [[-1, -1], [1, -1], [1, 1], [-1, 1], [0, -1], [1, 0], [0, 1], [-1, 0]];
                        n.handles.bbox && n.handles.bbox.map(function (b, c) {
                            var e, f, g, h;
                            b.isCorner ? (e = a[c].x, f = a[c].y) : (g = c % 4, h = (g + 1) % a.length, e = (a[g].x + a[h].x) / 2, f = (a[g].y + a[h].y) / 2), b.element.toFront().attr({
                                x: e - (b.isCorner ? n.opts.size.bboxCorners : n.opts.size.bboxSides),
                                y: f - (b.isCorner ? n.opts.size.bboxCorners : n.opts.size.bboxSides)
                            }).transform("R" + n.attrs.rotate), b.x = d[c][0], b.y = d[c][1]
                        })
                    }
                    return n.circle && n.circle.attr({
                        cx: n.attrs.center.x + n.attrs.translate.x,
                        cy: n.attrs.center.y + n.attrs.translate.y,
                        r: Math.max(c.x, c.y) * n.opts.distance
                    }), n.handles.center && n.handles.center.disc.toFront().attr({
                        cx: n.attrs.center.x + n.attrs.translate.x,
                        cy: n.attrs.center.y + n.attrs.translate.y
                    }), n.opts.rotate.indexOf("self") >= 0 && (c = Math.max(Math.sqrt(Math.pow(a[1].x - a[0].x, 2) + Math.pow(a[1].y - a[0].y, 2)), Math.sqrt(Math.pow(a[2].x - a[1].x, 2) + Math.pow(a[2].y - a[1].y, 2))) / 2), n
                }, n.showHandles = function () {
                    if (n.hideHandles(), n.axes.map(function (a) {
                            n.handles[a] = {}, n.handles[a].line = l.path([["M", n.attrs.center.x, n.attrs.center.y]]).attr(n.opts.axesAttrs), n.handles[a].disc = l.circle(n.attrs.center.x, n.attrs.center.y, n.opts.size.axes).attr(n.opts.attrs)
                        }), n.opts.draw.indexOf("bbox") >= 0) {
                        n.bbox = l.path("").attr(n.opts.bboxAttrs), n.handles.bbox = [];
                        var b, c, d;
                        for (b = n.opts.scale.indexOf("bboxCorners") >= 0 ? 0 : 4; b < (-1 === n.opts.scale.indexOf("bboxSides") ? 4 : 8); b++)c = {}, c.axis = b % 2 ? "x" : "y", c.isCorner = 4 > b, d = c.isCorner ? n.opts.cornerCursors[b] : n.opts.sideCursors[b - 4], c.element = l.rect(n.attrs.center.x, n.attrs.center.y, 2 * n.opts.size[c.isCorner ? "bboxCorners" : "bboxSides"], 2 * n.opts.size[c.isCorner ? "bboxCorners" : "bboxSides"]).attr(n.opts.attrs).attr("cursor", d), n.handles.bbox[b] = c
                    }
                    -1 !== n.opts.draw.indexOf("circle") && (n.circle = l.circle(0, 0, 0).attr(n.opts.bboxAttrs)), -1 !== n.opts.drag.indexOf("center") && (n.handles.center = {}, n.handles.center.disc = l.circle(n.attrs.center.x, n.attrs.center.y, n.opts.size.center).attr(n.opts.attrs)), n.axes.map(function (a) {
                        if (n.handles[a]) {
                            var b = -1 !== n.opts.rotate.indexOf("axis" + a.toUpperCase()), c = -1 !== n.opts.scale.indexOf("axis" + a.toUpperCase()), d = function (d, e) {
                                n.o.viewBoxRatio && (d *= n.o.viewBoxRatio.x, e *= n.o.viewBoxRatio.y);
                                var h = d + parseInt(n.handles[a].disc.ox, 10), j = e + parseInt(n.handles[a].disc.oy, 10), l = {
                                    x: n.o.scale.x < 0,
                                    y: n.o.scale.y < 0
                                };
                                if (b) {
                                    var m = Math.atan2(j - n.o.center.y - n.o.translate.y, h - n.o.center.x - n.o.translate.x);
                                    n.attrs.rotate = 180 * m / Math.PI - ("y" === a ? 90 : 0), l[a] && (n.attrs.rotate -= 180)
                                }
                                n.opts.boundary && (h = Math.max(Math.min(h, n.opts.boundary.x + (n.opts.boundary.width || f().x)), n.opts.boundary.x), j = Math.max(Math.min(j, n.opts.boundary.y + (n.opts.boundary.height || f().y)), n.opts.boundary.y));
                                var o = Math.sqrt(Math.pow(h - n.o.center.x - n.o.translate.x, 2) + Math.pow(j - n.o.center.y - n.o.translate.y, 2));
                                c && (n.attrs.scale[a] = o / (n.o.size[a] / 2 * n.opts.distance), l[a] && (n.attrs.scale[a] *= -1)), g(), -1 !== n.opts.keepRatio.indexOf("axis" + a.toUpperCase()) ? i(a) : n.attrs.ratio = n.attrs.scale.x / n.attrs.scale.y, n.attrs.scale.x && n.attrs.scale.y && n.apply(), k([b ? "rotate" : null, c ? "scale" : null])
                            }, e = function () {
                                n.o = j(n.attrs), l._viewBox && (n.o.viewBoxRatio = {
                                    x: l._viewBox[2] / f().x,
                                    y: l._viewBox[3] / f().y
                                }), n.handles[a].disc.ox = parseInt(this.attr("cx"), 10), n.handles[a].disc.oy = parseInt(this.attr("cy"), 10), k([b ? "rotate start" : null, c ? "scale start" : null])
                            }, h = function () {
                                k([b ? "rotate end" : null, c ? "scale end" : null])
                            };
                            n.handles[a].disc.attr(n.opts.discAttrs), n.handles[a].disc.drag(d, e, h)
                        }
                    }), n.opts.draw.indexOf("bbox") >= 0 && (-1 !== n.opts.scale.indexOf("bboxCorners") || -1 !== n.opts.scale.indexOf("bboxSides")) && n.handles.bbox.map(function (a) {
                        var b = function (b, c) {
                            n.o.viewBoxRatio && (b *= n.o.viewBoxRatio.x, c *= n.o.viewBoxRatio.y);
                            var d, e, f, l, m, o, p, q, r, s, t = j(n.attrs);
                            if (d = n.o.rotate.sin, e = n.o.rotate.cos, f = b * e - c * d, l = b * d + c * e, f *= Math.abs(a.x), l *= Math.abs(a.y), m = f * e + l * d, o = f * -d + l * e, n.attrs.translate = {
                                    x: n.o.translate.x + m / 2,
                                    y: n.o.translate.y + o / 2
                                }, p = n.o.handlePos.cx + b - n.attrs.center.x - n.attrs.translate.x, q = n.o.handlePos.cy + c - n.attrs.center.y - n.attrs.translate.y, f = p * e - q * d, l = p * d + q * e, a.isCorner && -1 !== n.opts.keepRatio.indexOf("bboxCorners")) {
                                var u = n.attrs.size.x * n.attrs.scale.x / (n.attrs.size.y * n.attrs.scale.y), v = f * a.x * (1 / u), w = l * a.y * u;
                                w > v * u ? f = w * a.x : l = v * a.y
                            }
                            if (r = 2 * f * a.x / n.o.size.x, s = 2 * l * a.y / n.o.size.y, n.attrs.scale = {
                                    x: r || n.attrs.scale.x,
                                    y: s || n.attrs.scale.y
                                }, h().x && h().y || (n.attrs = t), g(), a.isCorner && -1 !== n.opts.keepRatio.indexOf("bboxCorners") || !a.isCorner && -1 !== n.opts.keepRatio.indexOf("bboxSides")) {
                                i(a.axis);
                                var x = {
                                    x: (n.attrs.scale.x - n.o.scale.x) * n.o.size.x * a.x,
                                    y: (n.attrs.scale.y - n.o.scale.y) * n.o.size.y * a.y
                                };
                                f = x.x * e + x.y * d, l = -x.x * d + x.y * e, n.attrs.translate.x = n.o.translate.x + f / 2, n.attrs.translate.y = n.o.translate.y + l / 2
                            }
                            n.attrs.ratio = n.attrs.scale.x / n.attrs.scale.y, k(["scale"]), n.apply()
                        }, c = function () {
                            var b = (360 - n.attrs.rotate) % 360 / 180 * Math.PI, c = {
                                x: parseInt(a.element.attr("x"), 10),
                                y: parseInt(a.element.attr("y"), 10)
                            };
                            n.o = j(n.attrs), n.o.handlePos = {
                                cx: c.x + n.opts.size[a.isCorner ? "bboxCorners" : "bboxSides"],
                                cy: c.y + n.opts.size[a.isCorner ? "bboxCorners" : "bboxSides"]
                            }, n.o.rotate = {
                                sin: Math.sin(b),
                                cos: Math.cos(b)
                            }, l._viewBox && (n.o.viewBoxRatio = {
                                x: l._viewBox[2] / f().x,
                                y: l._viewBox[3] / f().y
                            }), n.opts.bodyCursor = window.getComputedStyle(document.body).cursor, document.body.style.cursor = a.element.attr("cursor"), k(["scale start"])
                        }, d = function () {
                            document.body.style.cursor = n.opts.bodyCursor, k(["scale end"])
                        };
                        a.element.drag(b, c, d)
                    });
                    var e = [];
                    n.opts.drag.indexOf("self") >= 0 && -1 === n.opts.scale.indexOf("self") && -1 === n.opts.rotate.indexOf("self") && (e.push(a), a.attr("cursor", "move")), n.opts.drag.indexOf("center") >= 0 && (e.push(n.handles.center.disc), n.handles.center.disc.attr("cursor", "move")), e.map(function (b) {
                        var c = function (a, b) {
                            n.o.viewBoxRatio && (a *= n.o.viewBoxRatio.x, b *= n.o.viewBoxRatio.y), n.attrs.translate.x = n.o.translate.x + a, n.attrs.translate.y = n.o.translate.y + b;
                            var c = j(n.o.bbox);
                            c.x += a, c.y += b, g(c), k(["drag"]), n.apply()
                        }, d = function () {
                            n.o = j(n.attrs), n.opts.snap.drag && (n.o.bbox = a.getBBox()), l._viewBox && (n.o.viewBoxRatio = {
                                x: l._viewBox[2] / f().x,
                                y: l._viewBox[3] / f().y
                            }), n.axes.map(function (a) {
                                n.handles[a] && (n.handles[a].disc.ox = n.handles[a].disc.attr("cx"), n.handles[a].disc.oy = n.handles[a].disc.attr("cy"))
                            }), k(["drag start"])
                        }, e = function () {
                            k(["drag end"])
                        };
                        b.drag(c, d, e)
                    });
                    var m = n.opts.rotate.indexOf("self") >= 0, o = n.opts.scale.indexOf("self") >= 0;
                    return (m || o) && a.drag(function (a, b, c, d) {
                        if (m) {
                            var e = Math.atan2(d - n.o.center.y - n.o.translate.y, c - n.o.center.x - n.o.translate.x);
                            n.attrs.rotate = n.o.rotate + 180 * e / Math.PI - n.o.deg
                        }
                        var f = {x: n.o.scale.x < 0, y: n.o.scale.y < 0};
                        if (o) {
                            var h = Math.sqrt(Math.pow(c - n.o.center.x - n.o.translate.x, 2) + Math.pow(d - n.o.center.y - n.o.translate.y, 2));
                            n.attrs.scale.x = n.attrs.scale.y = (f.x ? -1 : 1) * n.o.scale.x + (h - n.o.radius) / (n.o.size.x / 2), f.x && (n.attrs.scale.x *= -1), f.y && (n.attrs.scale.y *= -1)
                        }
                        g(), n.apply(), k([m ? "rotate" : null, o ? "scale" : null])
                    }, function (a, b) {
                        n.o = j(n.attrs), n.o.deg = 180 * Math.atan2(b - n.o.center.y - n.o.translate.y, a - n.o.center.x - n.o.translate.x) / Math.PI, n.o.radius = Math.sqrt(Math.pow(a - n.o.center.x - n.o.translate.x, 2) + Math.pow(b - n.o.center.y - n.o.translate.y, 2)), l._viewBox && (n.o.viewBoxRatio = {
                            x: l._viewBox[2] / f().x,
                            y: l._viewBox[3] / f().y
                        }), k([m ? "rotate start" : null, o ? "scale start" : null])
                    }, function () {
                        k([m ? "rotate end" : null, o ? "scale end" : null])
                    }), n.updateHandles(), n
                }, n.hideHandles = function (a) {
                    var a = a || {};
                    return void 0 === a.undrag && (a.undrag = !0), a.undrag && n.items.map(function (a) {
                        a.el.undrag()
                    }), n.handles.center && (n.handles.center.disc.remove(), n.handles.center = null), ["x", "y"].map(function (a) {
                        n.handles[a] && (n.handles[a].disc.remove(), n.handles[a].line.remove(), n.handles[a] = null)
                    }), n.bbox && (n.bbox.remove(), n.bbox = null, n.handles.bbox && (n.handles.bbox.map(function (a) {
                        a.element.remove()
                    }), n.handles.bbox = null)), n.circle && (n.circle.remove(), n.circle = null), n
                }, n.setOpts = function (a, b) {
                    void 0 !== b && (n.callback = "function" == typeof b ? b : !1);
                    var c, d;
                    for (c in a)if (a[c] && a[c].constructor === Object) {
                        n.opts[c] === !1 && (n.opts[c] = {});
                        for (d in a[c])a[c].hasOwnProperty(d) && (n.opts[c][d] = a[c][d])
                    } else n.opts[c] = a[c];
                    return n.opts.animate === !0 && (n.opts.animate = {
                        delay: 700,
                        easing: "linear"
                    }), n.opts.drag === !0 && (n.opts.drag = ["center", "self"]), n.opts.keepRatio === !0 && (n.opts.keepRatio = ["bboxCorners", "bboxSides"]), n.opts.rotate === !0 && (n.opts.rotate = ["axisX", "axisY"]), n.opts.scale === !0 && (n.opts.scale = ["axisX", "axisY", "bboxCorners", "bboxSides"]), ["drag", "draw", "keepRatio", "rotate", "scale"].map(function (a) {
                        n.opts[a] === !1 && (n.opts[a] = [])
                    }), n.axes = [], (n.opts.rotate.indexOf("axisX") >= 0 || n.opts.scale.indexOf("axisX") >= 0) && n.axes.push("x"), (n.opts.rotate.indexOf("axisY") >= 0 || n.opts.scale.indexOf("axisY") >= 0) && n.axes.push("y"), ["drag", "rotate", "scale"].map(function (a) {
                        n.opts.snapDist[a] || (n.opts.snapDist[a] = n.opts.snap[a])
                    }), n.opts.range = {
                        rotate: [parseFloat(n.opts.range.rotate[0]), parseFloat(n.opts.range.rotate[1])],
                        scale: [parseFloat(n.opts.range.scale[0]), parseFloat(n.opts.range.scale[1])]
                    }, n.opts.snap = {
                        drag: parseFloat(n.opts.snap.drag),
                        rotate: parseFloat(n.opts.snap.rotate),
                        scale: parseFloat(n.opts.snap.scale)
                    }, n.opts.snapDist = {
                        drag: parseFloat(n.opts.snapDist.drag),
                        rotate: parseFloat(n.opts.snapDist.rotate),
                        scale: parseFloat(n.opts.snapDist.scale)
                    }, "string" == typeof n.opts.size && (n.opts.size = parseFloat(n.opts.size)), isNaN(n.opts.size) || (n.opts.size = {
                        axes: n.opts.size,
                        bboxCorners: n.opts.size,
                        bboxSides: n.opts.size,
                        center: n.opts.size
                    }), "string" == typeof n.opts.distance && (n.opts.distance = parseFloat(n.opts.distance)), n.showHandles(), k(["init"]), n
                }, n.setOpts(b, c), n.apply = function () {
                    return n.items.map(function (a) {
                        var b = {
                            x: n.attrs.center.x + n.offset.translate.x,
                            y: n.attrs.center.y + n.offset.translate.y
                        }, c = n.attrs.rotate - n.offset.rotate, d = {
                            x: n.attrs.scale.x / n.offset.scale.x,
                            y: n.attrs.scale.y / n.offset.scale.y
                        }, e = {
                            x: n.attrs.translate.x - n.offset.translate.x,
                            y: n.attrs.translate.y - n.offset.translate.y
                        };
                        n.opts.animate ? (k(["animate start"]), a.el.animate({transform: ["R" + c, b.x, b.y, "S" + d.x, d.y, b.x, b.y, "T" + e.x, e.y].join(",")}, n.opts.animate.delay, n.opts.animate.easing, function () {
                            k(["animate end"]), n.updateHandles()
                        })) : (a.el.transform(["R" + c, b.x, b.y, "S" + d.x, d.y, b.x, b.y, "T" + e.x, e.y].join(",")), k(["apply"]), n.updateHandles())
                    }), n
                }, n.unplug = function () {
                    var b = n.attrs;
                    return n.hideHandles(), delete a.freeTransform, b
                }, d(a), n.items.map(function (a, b) {
                    a.el._ && a.el._.transform && "object" == typeof a.el._.transform && a.el._.transform.map(function (a) {
                        if (a[0])switch (a[0].toUpperCase()) {
                            case"T":
                                n.items[b].attrs.translate.x += a[1], n.items[b].attrs.translate.y += a[2];
                                break;
                            case"S":
                                n.items[b].attrs.scale.x *= a[1], n.items[b].attrs.scale.y *= a[2];
                                break;
                            case"R":
                                n.items[b].attrs.rotate += a[1]
                        }
                    })
                }), "set" !== a.type && (n.attrs.rotate = n.items[0].attrs.rotate, n.attrs.scale = n.items[0].attrs.scale, n.attrs.translate = n.items[0].attrs.translate, n.items[0].attrs = {
                    rotate: 0,
                    scale: {x: 1, y: 1},
                    translate: {x: 0, y: 0}
                }, n.items[0].transformString = ""), n.attrs.ratio = n.attrs.scale.x / n.attrs.scale.y;
                var o = !1;
                return n.updateHandles(), n
            };
            a.freeTransform = b
        })
    }), function (a, b) {
        "function" == typeof c && c.amd ? c("snap.plugins", ["snap"], function (c) {
            return b(c || a.Snap)
        }) : b(Snap)
    }(this, function (a) {
        a.plugin(function (a, b) {
            var c = b.prototype;
            c.toFront = function () {
                return this.appendTo(this.paper), this
            }, c.toBack = function () {
                return this.prependTo(this.paper), this
            }
        })
    }), c("PolygonEditor", ["Editor", "CSSUtils", "ToolBar", "lodash", "snap", "snap.freeTransform", "snap.plugins"], function (a, b, c, d, e) {
        function f(b, c, e) {
            a.apply(this, arguments), this.type = "polygon", this.vertices = [], this.shape = null, this.outline = null, this.snap = null, this.paper = null, this.points = null, this.config = d.extend({}, h, e), this.edgeClickThresholdDistance = this.config.point.radius * this.config.point.radius, this.activeVertexIndex = -1, this.setup(), this.setupToolBar(), this.update(this.value)
        }

        function g(a, b, c) {
            var d = b.x - a.x, e = b.y - a.y;
            if (0 === d && 0 === e)return Number.POSITIVE_INFNITY;
            var f = ((c.x - a.x) * d + (c.y - a.y) * e) / (d * d + e * e);
            if (0 > f || f > 1)return Number.POSITIVE_INFINITY;
            var g = a.x + f * d, h = a.y + f * e;
            return {x: g, y: h}
        }

        var h = {
            path: {stroke: "black", fill: "rgba(0, 0, 0, 0)"},
            point: {radius: 5, stroke: "rgba(0, 0, 0, 1)", fill: "rgba(252, 252, 252, 1)"},
            bboxAttrs: {},
            axesAttrs: {stroke: "rgba(0, 162, 255, 1)", "stroke-dasharray": "0, 0", opacity: .8},
            discAttrs: {fill: "rgba(255, 255, 0, 1)", stroke: "rgba(0, 162, 255, 1)"},
            xUnit: "px",
            yUnit: "px"
        };
        return f.prototype = Object.create(a.prototype), f.prototype.constructor = f, f.prototype.setup = function () {
            this.setupCoordinates(), a.prototype.setup.call(this), this.points = this.paper.g(), this.shape = this.paper.path().attr("fill", "none"), this.outline = this.shape.use().attr({
                stroke: "rgba(0, 0, 0, 0)",
                cursor: "crosshair",
                "stroke-width": this.edgeClickThresholdDistance / 2
            }).toBack(), a.prototype.setupShapeDecoration.call(this, this.config.path), window.addEventListener("resize", this.refresh.bind(this)), this.holder.addEventListener("mousedown", this.onMouseDown.bind(this)), this.holder.addEventListener("dblclick", this.onDblClick.bind(this))
        }, f.prototype.setupToolBar = function () {
            function a() {
                if (this.toolbar && this.shape) {
                    this.off("shapechange", a);
                    var b = this.shape.getBBox(), c = (this.toolbar.config.toolSize, window.innerWidth - 2 * this.toolbar.width()), d = 0, e = 0, f = {
                        x: d,
                        y: Math.max(e, b.y)
                    };
                    f.x = b.x > 2 * this.toolbar.width() ? b.x - 2 * this.toolbar.width() : Math.min(b.x + b.width + this.toolbar.width(), c), this.toolbar.position(f)
                }
            }

            function b(a) {
                var b = a.clone(), c = "white", d = "rgba(0, 162, 255, 1)";
                return b.selectAll(".ico-bg").attr({fill: d, stroke: c}), b.selectAll(".ico-detail").attr({
                    fill: c,
                    stroke: d
                }), b
            }

            function d(a) {
                var b = a.clone(), c = "gray", d = "lightgray";
                return b.selectAll(".ico-bg").attr({
                    fill: d,
                    stroke: c,
                    "stroke-width": 7
                }), b.selectAll(".ico-detail").attr({fill: c}), b
            }

            var f = this, g = e.parse('<rect height="100" width="100" class="ico-bg" fill="#fff" stroke="#000"/><g><polygon class="ico-detail" fill="#000" points="55.125,60.25 55.125,75.625 65.375,75.625 50,91 34.625,75.625 44.875,75.625 44.875,60.25 "/><polygon class="ico-detail" fill="#000" points="39.75,55.125 24.375001907348633,55.125 24.375001907348633,65.375 9,50 24.375001907348633,34.625 24.375001907348633,44.875 39.75,44.875 "/><polygon class="ico-detail" fill="#000" points="44.875,39.75 44.875,24.375001907348633 34.625,24.375001907348633 50,9 65.375,24.375001907348633 55.125,24.375001907348633 55.125,39.75 "/><polygon class="ico-detail" fill="#000" points="60.25,44.875 75.625,44.875 75.625,34.625 91,50 75.625,65.375 75.625,55.125 60.25,55.125 "/></g>'), h = e.parse('<rect height="100" width="100" class="ico-bg" fill="#fff"/><polygon class="ico-detail" fill="#000" points="73.64800262451172,71.30729675292969 56.48988342285156,49.05104446411133 68.54986572265625,39.75430679321289 24.352001190185547,17.625 34.506996154785156,65.99810409545898 46.56697463989258,56.70136260986328 63.723533630371094,78.95684051513672" />');
            g = this.paper.g().append(g).toDefs(), h = this.paper.g().append(h).toDefs(), this.toolbar = new c({paper: this.paper}), this.toolbar.add("tool-edit-points", {
                name: "Edit Points",
                inactiveFill: function () {
                    return d(h).pattern()
                }(),
                activeFill: function () {
                    return b(h).pattern()
                }()
            }), this.toolbar.add("tool-free-transform", {
                name: "Move, Scale & Rotate Shape", onActivate: function () {
                    f.turnOnFreeTransform()
                }, onDeactivate: function () {
                    f.turnOffFreeTransform()
                }, inactiveFill: function () {
                    return d(g).pattern()
                }(), activeFill: function () {
                    return b(g).pattern()
                }()
            }), this.toolbar.activate("tool-edit-points"), this.on("shapechange", a)
        }, f.prototype.setupCoordinates = function () {
            this.vertices = this.parseShape(this.value, this.target), this.vertices.length || (this.vertices = this.inferShapeFromElement(this.target)), this.polygonFillRule = this.vertices.polygonFillRule || "nonzero"
        }, f.prototype.update = function (a) {
            var b = void 0 !== this.transformEditor;
            return "none" === a ? void this.remove() : (this.value = a, this.removeOffsets(), this.setupCoordinates(), this.applyOffsets(), this.draw(), void(b && (this.turnOffFreeTransform(), this.turnOnFreeTransform())))
        }, f.prototype.refresh = function () {
            var b = void 0 !== this.transformEditor;
            this.removeOffsets(), a.prototype.setupOffsets.call(this), this.applyOffsets(), this.draw(), b && (this.turnOffFreeTransform(), this.turnOnFreeTransform())
        }, f.prototype.parseShape = function (a, c) {
            var d, e = [], f = this.defaultRefBox;
            if ("string" != typeof a || !/^polygon\(.*?\)/i.test(a.trim()))throw this.remove(), new Error("No polygon() function definition in provided value");
            return d = /polygon\s*\((?:\s*([a-z]*)\s*,)?\s*((?:[-+0-9.]+[a-z%]*|\s|\,)*)\)\s*((?:margin|content|border|padding)\-box)?/i.exec(a.trim()), d && d[2].length > 0 && (e = d[2].replace(/\s+/g, " ").replace(/( ,|, )/g, ",").trim().split(",").map(function (a) {
                var e = a.split(" ").map(function (a, e) {
                    var g = {boxType: d[3] || f, isHeightRelated: 1 === e};
                    return b.convertToPixels(a, c, g)
                });
                return e[0] || (e[0] = {value: 0}), e[1] || (e[1] = {value: 0}), e[0].unit === e[1].unit || 0 !== e[0].value && 0 !== e[1].value || (0 === e[0].value && "px" === e[0].unit && (e[0].unit = e[1].unit), 0 === e[1].value && "px" === e[1].unit && (e[1].unit = e[0].unit)), {
                    x: e[0].value,
                    y: e[1].value,
                    xUnit: e[0].unit,
                    yUnit: e[1].unit
                }
            }), e.polygonFillRule = d[1] || null, this.refBox = d[3]), e = e.length > 2 ? e : []
        }, f.prototype.inferShapeFromElement = function (a) {
            if (!(a instanceof HTMLElement))throw new TypeError("inferShapeFromElement() \n Expected HTMLElement, got: " + typeof a + " " + a);
            var c = b.getBox(a, this.defaultRefBox), d = [{x: 0, y: 0, xUnit: "px", yUnit: "px"}, {
                x: c.width,
                y: 0,
                xUnit: "px",
                yUnit: "px"
            }, {x: c.width, y: c.height, xUnit: "px", yUnit: "px"}, {x: 0, y: c.height, xUnit: "px", yUnit: "px"}];
            return d.polygonFillRule = "nonzero", d
        }, f.prototype.getCSSValue = function (a) {
            var c, d, e = this.offsets.top, f = this.offsets.left, g = this.target, h = this.polygonFillRule, i = this.refBox || this.defaultRefBox, a = b.units.indexOf(a > -1) ? a : null;
            return c = this.vertices.map(function (c) {
                var d, h, j, k;
                return d = Math.ceil(c.x - f), h = Math.ceil(c.y - e), j = b.convertFromPixels(d, a || c.xUnit, g, {
                    isHeightRelated: !1,
                    boxType: i
                }), k = b.convertFromPixels(h, a || c.yUnit, g, {isHeightRelated: !0, boxType: i}), [j, k].join(" ")
            }), d = "polygon(" + [h, c.join(", ")].join(", ") + ")", this.refBox && (d += " " + this.refBox), d
        }, f.prototype.applyOffsets = function () {
            this.vertices.forEach(function (a) {
                a.x = a.x + this.offsets.left, a.y = a.y + this.offsets.top
            }.bind(this))
        }, f.prototype.removeOffsets = function () {
            this.vertices.forEach(function (a) {
                a.x = a.x - this.offsets.left, a.y = a.y - this.offsets.top
            }.bind(this))
        }, f.prototype.onMouseDown = function (a) {
            var b, c, d = e.getElementByPoint(a.x, a.y);
            this.transformEditor || (d && d.data && "number" == typeof d.data("vertex-index") ? this.activeVertexIndex = d.data("vertex-index") : (b = this.polygonEdgeNear({
                x: a.pageX,
                y: a.pageY
            }), b && (c = g(this.vertices[b.index0], this.vertices[b.index1], {
                x: a.pageX,
                y: a.pageY
            }), this.vertices.splice(b.index1, 0, {
                x: c.x,
                y: c.y,
                xUnit: this.vertices[b.index0].xUnit || this.config.xUnit,
                yUnit: this.vertices[b.index0].yUnit || this.config.yUnit
            }), this.activeVertexIndex = b.index1, this.draw())), -1 !== this.activeVertexIndex && (this.paper.data("default-cursor", window.getComputedStyle(this.paper.node).cursor), this.points[this.activeVertexIndex].attr("cursor", "-webkit-grabbing"), this.paper.attr("cursor", "-webkit-grabbing"), this.handleDragging()))
        }, f.prototype.handleDragging = function () {
            var a = this, b = function (b) {
                return a.onMouseMove.call(a, b)
            }, c = function () {
                return function () {
                    this.points[this.activeVertexIndex].attr("cursor", "-webkit-grab"), this.activeVertexIndex = -1, this.paper.attr("cursor", this.paper.data("default-cursor")), this.holder.removeEventListener("mousemove", b), this.holder.removeEventListener("mouseup", c)
                }.call(a)
            };
            this.holder.addEventListener("mousemove", b), this.holder.addEventListener("mouseup", c)
        }, f.prototype.onMouseMove = function (a) {
            var b = this.vertices[this.activeVertexIndex];
            b.x = a.pageX, b.y = a.pageY, this.draw()
        }, f.prototype.polygonEdgeNear = function (a) {
            var b = null, c = this.vertices, d = this.edgeClickThresholdDistance;
            return c.forEach(function (e, f) {
                var h = c[f], i = c[(f + 1) % c.length], j = g(h, i, a), k = Math.pow(j.x - a.x, 2) + Math.pow(j.y - a.y, 2);
                d > k && (b = {index0: f, index1: (f + 1) % c.length})
            }), b
        }, f.prototype.onDblClick = function (a) {
            var b = e.getElementByPoint(a.x, a.y);
            b && b.data && "number" == typeof b.data("vertex-index") && (this.vertices.splice(b.data("vertex-index"), 1), this.draw())
        }, f.prototype.draw = function () {
            var a = this.paper, b = this.config, c = this.transformEditor ? !1 : !0, d = this.points, e = [], f = this.activeVertexIndex;
            this.points.clear(), this.vertices.forEach(function (g, h) {
                if (c) {
                    var i = a.circle(g.x, g.y, b.point.radius);
                    i.attr(b.point), i.data("vertex-index", h), i.attr("cursor", "pointer"), i.attr("cursor", f === h ? "-webkit-grabbing" : "-webkit-grab"), d.add(i)
                }
                0 === h ? ["M" + g.x, g.y].forEach(function (a) {
                    e.push(a)
                }) : e.push("L" + g.x, g.y)
            }), e.push("z"), this.shape.attr("path", e).toBack(), this.trigger("shapechange", this)
        }, f.prototype.toggleFreeTransform = function () {
            function a() {
                var a = c.shapeClone.transform().localMatrix, d = c.vertices;
                b.forEach(function (b, c) {
                    d[c].x = a.x(b.x, b.y), d[c].y = a.y(b.x, b.y)
                }), c.draw()
            }

            var b = JSON.parse(JSON.stringify(this.vertices)), c = this;
            return this.transformEditor ? (this.shapeClone.remove(), this.transformEditor.unplug(), this.transformEditor = void 0, this.draw(), void this.outline.attr("visibility", "visible")) : (this.outline.attr("visibility", "hidden"), this.shapeClone = this.shape.clone().attr("fill", "rgba(0, 0, 0, 0)"), void(this.transformEditor = e.freeTransform(this.shapeClone, {
                draw: ["bbox"],
                drag: ["self", "center"],
                keepRatio: ["bboxCorners"],
                rotate: ["axisX"],
                scale: ["bboxCorners", "bboxSides"],
                distance: "0.6",
                attrs: this.config.point,
                bboxAttrs: this.config.bboxAttrs,
                axesAttrs: this.config.axesAttrs,
                discAttrs: this.config.discAttrs,
                size: this.config.point.radius
            }, a)))
        }, f
    }), c("CircleEditor", ["Editor", "CSSUtils", "snap", "lodash"], function (a, b, c, d) {
        function e(b, c, e) {
            a.apply(this, arguments), this.type = "circle", this.coords = null, this.config = d.extend({}, f, e), this.setup(), this.applyOffsets(), this.draw(), this.toggleFreeTransform()
        }

        var f = {
            path: {stroke: "black", fill: "rgba(0, 0, 0, 0)"},
            point: {radius: 5, stroke: "rgba(0, 0, 0, 1)", fill: "rgba(252, 252, 252, 1)"},
            bboxAttrs: {},
            cxUnit: "px",
            cyUnit: "px",
            rUnit: "px"
        };
        return e.prototype = Object.create(a.prototype), e.prototype.constructor = e, e.prototype.setup = function () {
            this.setupCoordinates(), a.prototype.setup.call(this), this.shape = this.paper.circle().attr("fill", "rgba(0, 0, 0, 0)"), a.prototype.setupShapeDecoration.call(this, this.config.path), window.addEventListener("resize", this.refresh.bind(this))
        }, e.prototype.setupCoordinates = function () {
            this.coords = this.parseShape(this.value)
        }, e.prototype.update = function (a) {
            this.value = a, this.turnOffFreeTransform(), this.removeOffsets(), this.setupCoordinates(), this.applyOffsets(), this.draw(), this.turnOnFreeTransform()
        }, e.prototype.refresh = function () {
            this.turnOffFreeTransform(), this.removeOffsets(), a.prototype.setupOffsets.call(this), this.applyOffsets(), this.draw(), this.turnOnFreeTransform()
        }, e.prototype.applyOffsets = function () {
            var a = this.coords.cx + this.offsets.left, b = this.coords.cy + this.offsets.top;
            this.coords.cx = a, this.coords.cy = b
        }, e.prototype.removeOffsets = function () {
            var a = this.coords.cx - this.offsets.left, b = this.coords.cy - this.offsets.top;
            this.coords.cx = a, this.coords.cy = b
        }, e.prototype.parseShape = function (a) {
            var c, d, e, f, g, h = this.target, i = this.defaultRefBox, j = [];
            if ("string" != typeof a || !/^circle\(.*?\)/i.test(a.trim()))throw new Error("No circle() function definition in provided value");
            if (g = /circle\s*\((\s*[0-9\.]+[a-z%]{0,3})?(?:\s*at((?:\s+(?:top|right|bottom|left|center|-?[0-9\.]+[a-z%]{0,3})){1,2}))?\s*\)\s*((?:margin|content|border|padding)-box)?/i, d = g.exec(a.trim()), !d)throw new Error("Invalid shape provided: " + a);
            return d[1] ? j.push(d[1]) : (f = b.getBox(h, d[3] || i), j.push(Math.min(f.height, f.width) / 2 + "px")), d[2] ? (e = b.getOriginCoords(d[2]), j.push(e.x), j.push(e.y)) : (j.push("50%"), j.push("50%")), this.refBox = d[3], j = j.map(function (a, c) {
                var e = {};
                return e.boxType = d[3] || i, e.isRadius = 0 === c ? !0 : !1, e.isHeightRelated = 1 !== c ? !0 : !1, b.convertToPixels(a, h, e)
            }), c = {
                r: j[0].value,
                rUnit: j[0].unit,
                cx: j[1].value,
                cxUnit: j[1].unit,
                cy: j[2].value,
                cyUnit: j[2].unit
            }
        }, e.prototype.getCSSValue = function (a) {
            var c, d = this.coords.cx - this.offsets.left, e = this.coords.cy - this.offsets.top, f = this.coords.r, g = this.refBox || this.defaultRefBox, a = b.units.indexOf(a > -1) ? a : null;
            return d = b.convertFromPixels(d, a || this.coords.cxUnit, this.target, {
                isHeightRelated: !1,
                boxType: g
            }), e = b.convertFromPixels(e, a || this.coords.cyUnit, this.target, {
                isHeightRelated: !0,
                boxType: g
            }), f = b.convertFromPixels(f, a || this.coords.rUnit, this.target, {
                isHeightRelated: !0,
                isRadius: !0,
                boxType: g
            }), c = "circle(" + [f, "at", d, e].join(" ") + ")", this.refBox && (c += " " + this.refBox), c
        }, e.prototype.toggleFreeTransform = function () {
            function a() {
                var a = d.shapeClone.transform().localMatrix;
                d.coords.cx = a.x(b.cx, b.cy).toFixed(), d.coords.cy = a.y(b.cx, b.cy).toFixed(), d.coords.r = (d.transformEditor.attrs.scale.x * b.r).toFixed(), d.draw()
            }

            var b = JSON.parse(JSON.stringify(this.coords)), d = this;
            return this.transformEditor ? (this.shapeClone.remove(), this.transformEditor.unplug(), void delete this.transformEditor) : (this.shapeClone = this.shape.clone().attr("stroke", "none"), void(this.transformEditor = c.freeTransform(this.shapeClone, {
                draw: ["bbox"],
                drag: ["self", "center"],
                keepRatio: ["bboxCorners"],
                rotate: [],
                scale: ["bboxCorners"],
                distance: "0.6",
                attrs: this.config.point,
                bboxAttrs: this.config.bboxAttrs,
                size: this.config.point.radius
            }, a)))
        }, e.prototype.draw = function () {
            this.shape.attr(this.coords), this.trigger("shapechange", this)
        }, e
    }), c("EllipseEditor", ["Editor", "CSSUtils", "snap", "lodash"], function (a, b, c, d) {
        function e(b, c, e) {
            a.apply(this, arguments), this.type = "ellipse", this.coords = null, this.config = d.extend({}, f, e), this.setup(), this.applyOffsets(), this.draw(), this.toggleFreeTransform()
        }

        var f = {
            path: {stroke: "black", fill: "rgba(0, 0, 0, 0)"},
            point: {radius: 5, stroke: "rgba(0, 0, 0, 1)", fill: "rgba(252, 252, 252, 1)"},
            bboxAttrs: {},
            cxUnit: "px",
            cyUnit: "px",
            rxUnit: "px",
            ryUnit: "px"
        };
        return e.prototype = Object.create(a.prototype), e.prototype.constructor = e, e.prototype.setup = function () {
            this.setupCoordinates(), a.prototype.setup.call(this), this.shape = this.paper.ellipse().attr("fill", "rgba(0, 0, 0, 0)"), a.prototype.setupShapeDecoration.call(this, this.config.path), window.addEventListener("resize", this.refresh.bind(this))
        }, e.prototype.setupCoordinates = function () {
            this.coords = this.parseShape(this.value)
        }, e.prototype.update = function (a) {
            this.value = a, this.turnOffFreeTransform(), this.removeOffsets(), this.setupCoordinates(), this.applyOffsets(), this.draw(), this.turnOnFreeTransform()
        }, e.prototype.refresh = function () {
            this.turnOffFreeTransform(), this.removeOffsets(), a.prototype.setupOffsets.call(this), this.applyOffsets(), this.draw(), this.turnOnFreeTransform()
        }, e.prototype.applyOffsets = function () {
            var a = this.coords.cx + this.offsets.left, b = this.coords.cy + this.offsets.top;
            this.coords.cx = a, this.coords.cy = b
        }, e.prototype.removeOffsets = function () {
            var a = this.coords.cx - this.offsets.left, b = this.coords.cy - this.offsets.top;
            this.coords.cx = a, this.coords.cy = b
        }, e.prototype.parseShape = function (a) {
            var c, d, e, f, g, h, i = this.target, j = this.defaultRefBox, k = [];
            if ("string" != typeof a || !/^ellipse\(.*?\)/i.test(a.trim()))throw new Error("No ellipse() function definition in provided value");
            if (h = /ellipse\s*\(\s*((?:\b(?:farthest-side|closest-side|[0-9\.]+[a-z%]{0,3})\s*){1,2})?(?:\bat((?:\s+(?:top|right|bottom|left|center|-?[0-9\.]+[a-z%]{0,3})){1,2}))?\s*\)\s*((?:margin|content|border|padding)-box)?/i, g = h.exec(a.trim()), !g)throw new Error("Invalid shape provided: " + a);
            g[1] ? (e = g[1].split(/\s+/), k.push(e[0]), k.push(e[1] || "closest-side")) : (k.push("closest-side"), k.push("closest-side"));
            var l = ["closest-side", "farthest-side"];
            return l.indexOf(k[0]) > -1 && (f = b.getBox(i, g[3] || j), k[0] = f.width / 2 + "px"), l.indexOf(k[1]) > -1 && (f = b.getBox(i, g[3] || j), k[1] = f.height / 2 + "px"), g[2] ? (d = b.getOriginCoords(g[2]), k.push(d.x), k.push(d.y)) : (k.push("50%"), k.push("50%")), this.refBox = g[3], k = k.map(function (a, c) {
                var d = {};
                return d.boxType = g[3] || j, d.isHeightRelated = 1 === c || 3 === c ? !0 : !1, b.convertToPixels(a, i, d)
            }), c = {
                rx: k[0].value,
                rxUnit: k[0].unit,
                ry: k[1].value,
                ryUnit: k[1].unit,
                cx: k[2].value,
                cxUnit: k[2].unit,
                cy: k[3].value,
                cyUnit: k[3].unit
            }
        }, e.prototype.getCSSValue = function (a) {
            var c, d = this.coords.cx - this.offsets.left, e = this.coords.cy - this.offsets.top, f = this.coords.rx, g = this.coords.ry, h = this.refBox || this.defaultRefBox, a = b.units.indexOf(a > -1) ? a : null;
            return d = b.convertFromPixels(d, a || this.coords.cxUnit, this.target, {
                isHeightRelated: !1,
                boxType: h
            }), e = b.convertFromPixels(e, a || this.coords.cyUnit, this.target, {
                isHeightRelated: !0,
                boxType: h
            }), f = b.convertFromPixels(f, a || this.coords.rxUnit, this.target, {
                isHeightRelated: !1,
                boxType: h
            }), g = b.convertFromPixels(g, a || this.coords.ryUnit, this.target, {
                isHeightRelated: !0,
                boxType: h
            }), c = "ellipse(" + [f, g, "at", d, e].join(" ") + ")", this.refBox && (c += " " + this.refBox), c
        }, e.prototype.toggleFreeTransform = function () {
            function a() {
                var a = d.shapeClone.transform().localMatrix;
                d.coords.cx = a.x(b.cx, b.cy).toFixed(), d.coords.cy = a.y(b.cx, b.cy).toFixed(), d.coords.rx = (d.transformEditor.attrs.scale.x * b.rx).toFixed(), d.coords.ry = (d.transformEditor.attrs.scale.y * b.ry).toFixed(), d.draw()
            }

            var b = JSON.parse(JSON.stringify(this.coords)), d = this;
            return this.transformEditor ? (this.shapeClone.remove(), this.transformEditor.unplug(), void delete this.transformEditor) : (this.shapeClone = this.shape.clone().attr("stroke", "none"), void(this.transformEditor = c.freeTransform(this.shapeClone, {
                draw: ["bbox"],
                drag: ["self", "center"],
                keepRatio: ["bboxCorners"],
                rotate: [],
                scale: ["bboxCorners", "bboxSides"],
                distance: "0.6",
                attrs: this.config.point,
                bboxAttrs: this.config.bboxAttrs,
                size: this.config.point.radius
            }, a)))
        }, e.prototype.draw = function () {
            this.shape.attr(this.coords), this.trigger("shapechange", this)
        }, e
    }), c("CSSShapesEditor", ["PolygonEditor", "CircleEditor", "EllipseEditor", "lodash"], function (a, b, c, d) {
        function e(f, g, h) {
            function i(a) {
                if (a.indexOf("(") < 0)throw new TypeError("Value does not contain a shape function");
                return a.split("(")[0].trim()
            }

            function j(d) {
                var e;
                switch (d) {
                    case"polygon":
                        e = a;
                        break;
                    case"circle":
                        e = b;
                        break;
                    case"ellipse":
                        e = c;
                        break;
                    default:
                        throw new TypeError("Value does not contain a valid shape function")
                }
                return e
            }

            var k = {
                path: [{stroke: "rgba(255, 255, 255, 0.5)"}, {
                    stroke: "rgba(0, 162, 255, 1)",
                    "stroke-dasharray": "4, 5"
                }],
                point: {radius: 4, stroke: "rgba(0, 162, 255, 1)", fill: "rgba(252, 252, 252, 1)"},
                bboxAttrs: {stroke: "rgba(0, 162, 255, 1)", fill: "none", "stroke-dasharray": "0, 0", opacity: .8},
                defaultRefBox: "margin-box"
            };
            if (h = d.extend({}, k, h), !(this instanceof e))return new e(f, g, h);
            if (!(f instanceof HTMLElement))throw new TypeError("Target is not instance of HTMLElement");
            if (!g || "string" != typeof g)throw new TypeError("Value is not string");
            var l = i(g), m = j(l), n = new m(f, g, h);
            return n
        }

        return e
    }), b.config({
        paths: {
            eve: "third-party/eve/eve",
            lodash: "third-party/lodash/lodash",
            snap: "third-party/snap/snap.svg-min",
            "snap.plugins": "third-party/snap.plugins/snap.plugins",
            "snap.freeTransform": "third-party/snap.freetransform/snap.freetransform"
        }
    }), c("main", ["CSSShapesEditor"], function (a) {
        return a
    }), b("main")
});
var splitbee = (function (e) {
  "use strict";
  var t = function () {
    return (t =
      Object.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
        return e;
      }).apply(this, arguments);
  };
  function n(e, t, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(e) {
        try {
          u(r.next(e));
        } catch (e) {
          i(e);
        }
      }
      function c(e) {
        try {
          u(r.throw(e));
        } catch (e) {
          i(e);
        }
      }
      function u(e) {
        e.done
          ? o(e.value)
          : new n(function (t) {
              t(e.value);
            }).then(a, c);
      }
      u((r = r.apply(e, t || [])).next());
    });
  }
  function r(e, t) {
    var n,
      r,
      o,
      i,
      a = {
        label: 0,
        sent: function () {
          if (1 & o[0]) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (i = { next: c(0), throw: c(1), return: c(2) }),
      "function" == typeof Symbol &&
        (i[Symbol.iterator] = function () {
          return this;
        }),
      i
    );
    function c(i) {
      return function (c) {
        return (function (i) {
          if (n) throw new TypeError("Generator is already executing.");
          for (; a; )
            try {
              if (((n = 1), r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done))
                return o;
              switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                case 0:
                case 1:
                  o = i;
                  break;
                case 4:
                  return a.label++, { value: i[1], done: !1 };
                case 5:
                  a.label++, (r = i[1]), (i = [0]);
                  continue;
                case 7:
                  (i = a.ops.pop()), a.trys.pop();
                  continue;
                default:
                  if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                    a = 0;
                    continue;
                  }
                  if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                    a.label = i[1];
                    break;
                  }
                  if (6 === i[0] && a.label < o[1]) {
                    (a.label = o[1]), (o = i);
                    break;
                  }
                  if (o && a.label < o[2]) {
                    (a.label = o[2]), a.ops.push(i);
                    break;
                  }
                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              i = t.call(e, a);
            } catch (e) {
              (i = [6, e]), (r = 0);
            } finally {
              n = o = 0;
            }
          if (5 & i[0]) throw i[1];
          return { value: i[0] ? i[1] : void 0, done: !0 };
        })([i, c]);
      };
    }
  }
  var o = document.currentScript,
    i = o.dataset,
    a = i.token,
    c = i.splitbeeid,
    u = a || c,
    s = "1" === window.doNotTrack || "1" === navigator.doNotTrack,
    d = i.respectDnt,
    l = s && d,
    f = (o.defer || o.async, void 0 !== i.noCookie),
    v = i.api,
    h = o.src.includes("splitbee.io") ? void 0 : new URL(o.src).origin,
    p = function (e, t) {
      try {
        localStorage.setItem(e, t);
      } catch (e) {}
    },
    w = function (e) {
      try {
        return localStorage.getItem(e);
      } catch (e) {}
    };
  "?dnt" === document.location.search && p("splitbee-dnt", "1");
  var b = "1" === w("splitbee-dnt"),
    m = "sb_uid" + (u ? "_" + u : ""),
    y = !!u,
    g = function (e) {
      var t = window.location.hostname,
        n = t.match(/\w*\.\w*$/gi),
        r = y && n ? n[0] : t,
        o = new Date();
      o.setTime(o.getTime() + 15768e7);
      var i = "expires=" + o.toUTCString();
      document.cookie = m + "=" + e + ";path=/;SameSite=Lax;" + i + (y ? ";domain=" + r : "");
    },
    k = function () {
      var e = document.cookie
        .split(/; */)
        .map(function (e) {
          var t = e.split("="),
            n = t[0],
            r = t.slice(1);
          return { key: n, val: decodeURIComponent(r.join("=")) };
        })
        .find(function (e) {
          return "sb_uid" === e.key || e.key === m;
        });
      if (!e && !f) {
        var t = Math.random().toString(36).substring(2, 15);
        return g(t), t;
      }
      return e ? e.val : void 0;
    },
    E = v || h || "https://hive.splitbee.io",
    L = function () {
      return (Math.random() + "").replace("0.", "");
    },
    S = !1;
  window.sbCtx = window.sbCtx || L();
  var x = function () {
      (S = !1),
        (window.sbCtx = L()),
        n(void 0, void 0, void 0, function () {
          return r(this, function (e) {
            switch (e.label) {
              case 0:
                return /[^0-9.,]404[^0-9.,]/.test(document.documentElement.innerHTML)
                  ? [
                      4,
                      fetch(window.location.href, { method: "head" })
                        .then(function (e) {
                          return e.status;
                        })
                        .catch(function () {}),
                    ]
                  : [2, 0];
              case 1:
                return [2, 404 === e.sent() ? 1 : 0];
            }
          });
        }).then(function (e) {
          e && (N(M()), (S = !0));
        });
    },
    C = function () {
      return window.sbCtx;
    },
    I = !1,
    O = 0,
    T = 0;
  setInterval(function () {
    I || ((O += 1), (T += 1) >= 30 && (I = !0));
  }, 1e3);
  var _ = function () {
      T = 0;
    },
    j = function () {
      O = 0;
    };
  window.addEventListener("blur", function () {
    I = !0;
  }),
    window.addEventListener("focus", function () {
      (I = !1), (T = 0);
    }),
    ["mousemove", "scroll"].forEach(function (e) {
      return document.addEventListener(e, _);
    });
  var M = function (e) {
      var t,
        n = document.activeElement;
      if (n) {
        var r = n.href;
        if (r) {
          var o = new URL(r);
          window.location.hostname !== o.hostname && (t = r);
        }
      }
      return { uid: k(), userId: P(), contextId: C(), origin: document.location.href, is404: 0, data: { duration: O, destination: t } };
    },
    N = function (e) {
      S || U(e);
    };
  window.addEventListener("beforeunload", function (e) {
    return N(M());
  });
  var R = !1,
    P = function () {
      return w("_userId");
    },
    D = function (e) {
      var o = e.path,
        i = e.body,
        a = e.setReferrer;
      return n(void 0, void 0, Promise, function () {
        var e, n, c, s, d, v, h;
        return r(this, function (r) {
          switch (r.label) {
            case 0:
              if (l || b) return [2, { response: void 0 }];
              (e = k()), (n = P()), (c = document.referrer), (s = 0 === c.indexOf(location.protocol + "//" + location.host) ? void 0 : c), (r.label = 1);
            case 1:
              return (
                r.trys.push([1, 4, , 5]),
                [
                  4,
                  fetch(E + o, {
                    method: "POST",
                    credentials: "include",
                    headers: t(
                      t(t(t(t({ "Content-Type": "application/json" }, e && { uid: e }), n && { userId: n }), u && { sbp: u }), f && { "no-cookie": "1" }),
                      { "context-id": C(), "x-origin": document.location.href }
                    ),
                    body: JSON.stringify(t(t({}, i), s && !R && a && { referrer: s })),
                  }),
                ]
              );
            case 2:
              return (d = r.sent()), s && (R = !0), [4, d.json()];
            case 3:
              return (v = r.sent()), (h = d.headers.get("uid")) && !f && g(h), [2, { response: v || {}, statusCode: d.status }];
            case 4:
              return r.sent(), [2, { response: void 0, statusCode: 404 }];
            case 5:
              return [2];
          }
        });
      });
    },
    U = function (e) {
      return n(void 0, void 0, void 0, function () {
        return r(this, function (n) {
          try {
            navigator && navigator.sendBeacon && !b && navigator.sendBeacon(E + "/end", JSON.stringify(t(t({}, e), { headers: t({}, u && { sbp: u }) })));
          } catch (e) {}
          return [2];
        });
      });
    },
    A = function (e, t, o) {
      "FORM" === e.tagName
        ? (e.onsubmit = function (o) {
            return n(void 0, void 0, void 0, function () {
              var n;
              return r(this, function (r) {
                switch (r.label) {
                  case 0:
                    return (
                      (n = (function (e) {
                        for (var t, n = {}, r = e.elements, o = 0; o < r.length; o++) {
                          var i = r[o],
                            a = i.dataset.splitbeeProperty;
                          if (a) t || (t = {}), (t["true" === a ? i.name : a] = i.value);
                          ["password"].includes(i.type) || "" === i.value || "" === i.name || (n[i.name] = i.value);
                        }
                        return { data: n, user: t };
                      })(e)),
                      [4, G(t, n.data)]
                    );
                  case 1:
                    return r.sent(), n.user && H.set(n.user), [2];
                }
              });
            });
          })
        : e.addEventListener("click", function (i) {
            return n(this, void 0, void 0, function () {
              return r(this, function (n) {
                switch (n.label) {
                  case 0:
                    return "a" !== e.tagName.toLowerCase()
                      ? [3, 4]
                      : (i.preventDefault(), "_blank" === e.getAttribute("target") || i.metaKey ? (window.open(e.href, "_blank"), G(t, o), [3, 3]) : [3, 1]);
                  case 1:
                    return [4, G(t, o)];
                  case 2:
                    n.sent(), (location.href = e.href), (n.label = 3);
                  case 3:
                    return [3, 5];
                  case 4:
                    G(t, o), (n.label = 5);
                  case 5:
                    return [2];
                }
              });
            });
          });
    },
    q = function (e) {
      e &&
        e.forEach(function (e) {
          var t = setInterval(function () {
            var n = document.querySelectorAll(e.selector);
            0 !== n.length &&
              (n.forEach(function (t) {
                A(t, e.event);
              }),
              clearInterval(t));
          }, 1e3);
        });
    },
    B = [];
  document.addEventListener("DOMContentLoaded", function () {
    q(B);
  });
  var J = function (e) {
      return n(void 0, void 0, void 0, function () {
        var n, o;
        return r(this, function (r) {
          switch (r.label) {
            case 0:
              x(), (r.label = 1);
            case 1:
              return r.trys.push([1, 3, , 4]), [4, D({ path: "/i", setReferrer: !0, body: t({ origin: window.location.href }, e && { eid: e }) })];
            case 2:
              return (n = r.sent()), (o = n.response), n.statusCode, o ? (o.actions && (B = o.actions), o.type, [3, 4]) : [2];
            case 3:
              return r.sent(), [3, 4];
            case 4:
              return q(B), [2];
          }
        });
      });
    },
    F = new WeakMap(),
    G = function (e, t) {
      return D({ path: "/t", body: { event: e, data: t } });
    },
    H = {
      set: function (e) {
        var t = e.id,
          n = e.email,
          r = e.userId || t || n;
        r && p("_userId", r), D({ path: "/user", body: e });
      },
    };
  if (!window.splitbeeLoaded) {
    J();
    var K = history.pushState;
    (history.pushState = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var n = e[2],
        r = "string" == typeof n ? window.location.pathname != n.split("?")[0] : n && window.location.href !== n,
        o = M();
      K.apply(history, e), r && N(o), r && (J(), j());
    }),
      window.addEventListener("popstate", function () {
        N(M()), J(), j();
      }),
      setInterval(function () {
        [].slice.call(document.querySelectorAll("[data-splitbee-event]")).forEach(function (e) {
          if (!F.has(e)) {
            var t = {},
              n = Object.keys(e.dataset);
            n.length > 0
              ? n.forEach(function (n) {
                  if ("splitbeeEvent" !== n) {
                    var r = e.dataset[n],
                      o = n.replace("splitbeeEvent", "");
                    (o = o[0].toLocaleLowerCase() + o.slice(1)), r && t && (t[o] = r);
                  }
                })
              : (t = void 0),
              F.set(e, !0),
              A(e, e.dataset.splitbeeEvent, t);
          }
        });
      }, 500),
      (window.splitbeeLoaded = !0);
  }
  var W = J;
  return (e.init = W), (e.track = G), (e.user = H), e;
})({});

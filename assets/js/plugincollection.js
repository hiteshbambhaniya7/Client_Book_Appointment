!(function (a) {
  (a.fn.appear = function (c, d) {
    var b = a.extend({ data: void 0, one: !0, accX: 0, accY: 0 }, d);
    return this.each(function () {
      var d = a(this),
        e,
        f,
        g;
      (d.appeared = !1),
        c
          ? ((e = a(window)),
            (f = function () {
              if (d.is(":visible")) {
                var a = e.scrollLeft(),
                  c = e.scrollTop(),
                  f = d.offset(),
                  g = f.left,
                  h = f.top,
                  i = b.accX,
                  j = b.accY,
                  k = d.height(),
                  l = e.height(),
                  m = d.width(),
                  n = e.width();
                h + k + j >= c &&
                h <= c + l + j &&
                g + m + i >= a &&
                g <= a + n + i
                  ? d.appeared || d.trigger("appear", b.data)
                  : (d.appeared = !1);
              } else d.appeared = !1;
            }),
            (g = function () {
              if (((d.appeared = !0), b.one)) {
                e.unbind("scroll", f);
                var g = a.inArray(f, a.fn.appear.checks);
                g >= 0 && a.fn.appear.checks.splice(g, 1);
              }
              c.apply(this, arguments);
            }),
            b.one ? d.one("appear", b.data, g) : d.bind("appear", b.data, g),
            e.scroll(f),
            a.fn.appear.checks.push(f),
            f())
          : d.trigger("appear", b.data);
    });
  }),
    a.extend(a.fn.appear, {
      checks: [],
      timeout: null,
      checkAll: function () {
        var b = a.fn.appear.checks.length;
        if (b > 0) for (; b--; ) a.fn.appear.checks[b]();
      },
      run: function () {
        a.fn.appear.timeout && clearTimeout(a.fn.appear.timeout),
          (a.fn.appear.timeout = setTimeout(a.fn.appear.checkAll, 20));
      },
    }),
    a.each(
      [
        "append",
        "prepend",
        "after",
        "before",
        "attr",
        "removeAttr",
        "addClass",
        "removeClass",
        "toggleClass",
        "remove",
        "css",
        "show",
        "hide",
      ],
      function (d, b) {
        var c = a.fn[b];
        c &&
          (a.fn[b] = function () {
            var b = c.apply(this, arguments);
            return a.fn.appear.run(), b;
          });
      }
    );
})(jQuery),
  !(function (b, a) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = a())
      : "function" == typeof define && define.amd
      ? define(a)
      : ((b = b || self).Swiper = a());
  })(this, function () {
    "use strict";
    var d,
      X,
      c,
      g,
      aa,
      a,
      e,
      l,
      V,
      an,
      am,
      al,
      ak,
      aj,
      ai,
      H,
      h,
      f,
      t,
      u,
      D,
      o,
      p,
      v,
      _,
      O,
      Z,
      F,
      G,
      x,
      ah,
      i,
      $,
      S,
      L,
      C,
      k,
      ag,
      af,
      A,
      ad,
      ab,
      B,
      ao,
      q,
      ac,
      E,
      ae,
      m,
      r,
      w,
      j,
      I,
      J,
      Q,
      s,
      U,
      n,
      z,
      y,
      R,
      P,
      M,
      T,
      K,
      aq;
    function ap(a) {
      return (
        null !== a &&
        "object" == typeof a &&
        "constructor" in a &&
        a.constructor === Object
      );
    }
    function Y(b, a) {
      void 0 === b && (b = {}),
        void 0 === a && (a = {}),
        Object.keys(a).forEach(function (c) {
          void 0 === b[c]
            ? (b[c] = a[c])
            : ap(a[c]) &&
              ap(b[c]) &&
              Object.keys(a[c]).length > 0 &&
              Y(b[c], a[c]);
        });
    }
    (d = "undefined" != typeof document ? document : {}),
      (X = {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: { blur: function () {}, nodeName: "" },
        querySelector: function () {
          return null;
        },
        querySelectorAll: function () {
          return [];
        },
        getElementById: function () {
          return null;
        },
        createEvent: function () {
          return { initEvent: function () {} };
        },
        createElement: function () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () {},
            getElementsByTagName: function () {
              return [];
            },
          };
        },
        createElementNS: function () {
          return {};
        },
        importNode: function () {
          return null;
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      }),
      Y(d, X),
      (c = "undefined" != typeof window ? window : {}),
      Y(c, {
        document: X,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: {
          replaceState: function () {},
          pushState: function () {},
          go: function () {},
          back: function () {},
        },
        CustomEvent: function () {
          return this;
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return "";
            },
          };
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {},
        matchMedia: function () {
          return {};
        },
      }),
      (g = function (b) {
        for (var a = 0; a < b.length; a += 1) this[a] = b[a];
        return (this.length = b.length), this;
      });
    function b(a, k) {
      var h = [],
        b = 0,
        i,
        j,
        e,
        f;
      if (a && !k && a instanceof g) return a;
      if (a)
        if ("string" == typeof a)
          if (((e = a.trim()), e.indexOf("<") >= 0 && e.indexOf(">") >= 0)) {
            f = "div";
            for (
              0 === e.indexOf("<li") && (f = "ul"),
                0 === e.indexOf("<tr") && (f = "tbody"),
                (0 !== e.indexOf("<td") && 0 !== e.indexOf("<th")) ||
                  (f = "tr"),
                0 === e.indexOf("<tbody") && (f = "table"),
                0 === e.indexOf("<option") && (f = "select"),
                (j = d.createElement(f)).innerHTML = e,
                b = 0;
              b < j.childNodes.length;
              b += 1
            )
              h.push(j.childNodes[b]);
          } else
            for (
              i =
                k || "#" !== a[0] || a.match(/[ .<>:~]/)
                  ? (k || d).querySelectorAll(a.trim())
                  : [d.getElementById(a.trim().split("#")[1])],
                b = 0;
              b < i.length;
              b += 1
            )
              i[b] && h.push(i[b]);
        else if (a.nodeType || a === c || a === d) h.push(a);
        else if (a.length > 0 && a[0].nodeType)
          for (b = 0; b < a.length; b += 1) h.push(a[b]);
      return new g(h);
    }
    function W(b) {
      for (var c = [], a = 0; a < b.length; a += 1)
        -1 === c.indexOf(b[a]) && c.push(b[a]);
      return c;
    }
    (b.fn = g.prototype),
      (b.Class = g),
      (b.Dom7 = g),
      (aa = {
        addClass: function (d) {
          var c, b, a;
          if (void 0 === d) return this;
          for (c = d.split(" "), b = 0; b < c.length; b += 1)
            for (a = 0; a < this.length; a += 1)
              void 0 !== this[a] &&
                void 0 !== this[a].classList &&
                this[a].classList.add(c[b]);
          return this;
        },
        removeClass: function (d) {
          for (var c = d.split(" "), b = 0, a; b < c.length; b += 1)
            for (a = 0; a < this.length; a += 1)
              void 0 !== this[a] &&
                void 0 !== this[a].classList &&
                this[a].classList.remove(c[b]);
          return this;
        },
        hasClass: function (a) {
          return !!this[0] && this[0].classList.contains(a);
        },
        toggleClass: function (d) {
          for (var c = d.split(" "), b = 0, a; b < c.length; b += 1)
            for (a = 0; a < this.length; a += 1)
              void 0 !== this[a] &&
                void 0 !== this[a].classList &&
                this[a].classList.toggle(c[b]);
          return this;
        },
        attr: function (a, d) {
          var e = arguments,
            b,
            c;
          if (1 === arguments.length && "string" == typeof a)
            return this[0] ? this[0].getAttribute(a) : void 0;
          for (b = 0; b < this.length; b += 1)
            if (2 === e.length) this[b].setAttribute(a, d);
            else
              for (c in a) (this[b][c] = a[c]), this[b].setAttribute(c, a[c]);
          return this;
        },
        removeAttr: function (b) {
          for (var a = 0; a < this.length; a += 1) this[a].removeAttribute(b);
          return this;
        },
        data: function (b, d) {
          var a, c, e;
          if (void 0 !== d) {
            for (c = 0; c < this.length; c += 1)
              (a = this[c]).dom7ElementDataStorage ||
                (a.dom7ElementDataStorage = {}),
                (a.dom7ElementDataStorage[b] = d);
            return this;
          }
          if ((a = this[0]))
            return a.dom7ElementDataStorage && b in a.dom7ElementDataStorage
              ? a.dom7ElementDataStorage[b]
              : ((e = a.getAttribute("data-" + b)), e || void 0);
        },
        transform: function (b) {
          for (var a = 0, c; a < this.length; a += 1)
            (c = this[a].style), (c.webkitTransform = b), (c.transform = b);
          return this;
        },
        transition: function (a) {
          var b, c;
          "string" != typeof a && (a += "ms");
          for (b = 0; b < this.length; b += 1)
            (c = this[b].style),
              (c.webkitTransitionDuration = a),
              (c.transitionDuration = a);
          return this;
        },
        on: function () {
          for (
            var k, d = [], l = arguments.length, o, h, e, f, c, j, m, a, g, i;
            l--;

          )
            d[l] = arguments[l];
          (o = d[0]), (h = d[1]), (e = d[2]), (f = d[3]);
          function p(a) {
            var c = a.target,
              d,
              g,
              f;
            if (c)
              if (
                ((d = a.target.dom7EventData || []),
                d.indexOf(a) < 0 && d.unshift(a),
                b(c).is(h))
              )
                e.apply(c, d);
              else
                for (g = b(c).parents(), f = 0; f < g.length; f += 1)
                  b(g[f]).is(h) && e.apply(g[f], d);
          }
          function n(a) {
            var b = (a && a.target && a.target.dom7EventData) || [];
            b.indexOf(a) < 0 && b.unshift(a), e.apply(this, b);
          }
          "function" == typeof d[1] &&
            ((o = (k = d)[0]), (e = k[1]), (f = k[2]), (h = void 0)),
            f || (f = !1);
          for (c, j = o.split(" "), m = 0; m < this.length; m += 1)
            if (((a = this[m]), h))
              for (c = 0; c < j.length; c += 1)
                (g = j[c]),
                  a.dom7LiveListeners || (a.dom7LiveListeners = {}),
                  a.dom7LiveListeners[g] || (a.dom7LiveListeners[g] = []),
                  a.dom7LiveListeners[g].push({
                    listener: e,
                    proxyListener: p,
                  }),
                  a.addEventListener(g, p, f);
            else
              for (c = 0; c < j.length; c += 1)
                (i = j[c]),
                  a.dom7Listeners || (a.dom7Listeners = {}),
                  a.dom7Listeners[i] || (a.dom7Listeners[i] = []),
                  a.dom7Listeners[i].push({ listener: e, proxyListener: n }),
                  a.addEventListener(i, n, f);
          return this;
        },
        off: function () {
          for (
            var i,
              b = [],
              m = arguments.length,
              n,
              l,
              d,
              f,
              o,
              j,
              h,
              k,
              c,
              a,
              g,
              e;
            m--;

          )
            b[m] = arguments[m];
          (n = b[0]),
            (l = b[1]),
            (d = b[2]),
            (f = b[3]),
            "function" == typeof b[1] &&
              ((n = (i = b)[0]), (d = i[1]), (f = i[2]), (l = void 0)),
            f || (f = !1);
          for (o = n.split(" "), j = 0; j < o.length; j += 1)
            for (h = o[j], k = 0; k < this.length; k += 1)
              if (
                ((c = this[k]),
                (a = void 0),
                !l && c.dom7Listeners
                  ? (a = c.dom7Listeners[h])
                  : l && c.dom7LiveListeners && (a = c.dom7LiveListeners[h]),
                a && a.length)
              )
                for (g = a.length - 1; g >= 0; g -= 1)
                  (e = a[g]),
                    (d && e.listener === d) ||
                    (d &&
                      e.listener &&
                      e.listener.dom7proxy &&
                      e.listener.dom7proxy === d)
                      ? (c.removeEventListener(h, e.proxyListener, f),
                        a.splice(g, 1))
                      : d ||
                        (c.removeEventListener(h, e.proxyListener, f),
                        a.splice(g, 1));
          return this;
        },
        trigger: function () {
          for (var a = [], h = arguments.length, k, i, f, j, g, b, e; h--; )
            a[h] = arguments[h];
          for (k = a[0].split(" "), i = a[1], f = 0; f < k.length; f += 1)
            for (j = k[f], g = 0; g < this.length; g += 1) {
              (b = this[g]), (e = void 0);
              try {
                e = new c.CustomEvent(j, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0,
                });
              } catch (a) {
                (e = d.createEvent("Event")).initEvent(j, !0, !0),
                  (e.detail = i);
              }
              (b.dom7EventData = a.filter(function (b, a) {
                return a > 0;
              })),
                b.dispatchEvent(e),
                (b.dom7EventData = []),
                delete b.dom7EventData;
            }
          return this;
        },
        transitionEnd: function (c) {
          var a,
            b = ["webkitTransitionEnd", "transitionend"],
            d = this;
          function e(f) {
            if (f.target === this)
              for (c.call(this, f), a = 0; a < b.length; a += 1) d.off(b[a], e);
          }
          if (c) for (a = 0; a < b.length; a += 1) d.on(b[a], e);
          return this;
        },
        outerWidth: function (b) {
          if (this.length > 0) {
            if (b) {
              var a = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(a.getPropertyValue("margin-right")) +
                parseFloat(a.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (b) {
          if (this.length > 0) {
            if (b) {
              var a = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(a.getPropertyValue("margin-top")) +
                parseFloat(a.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        offset: function () {
          if (this.length > 0) {
            var a = this[0],
              b = a.getBoundingClientRect(),
              e = d.body,
              f = a.clientTop || e.clientTop || 0,
              g = a.clientLeft || e.clientLeft || 0,
              h = a === c ? c.scrollY : a.scrollTop,
              i = a === c ? c.scrollX : a.scrollLeft;
            return { top: b.top + h - f, left: b.left + i - g };
          }
          return null;
        },
        css: function (b, e) {
          var a, d;
          if (1 === arguments.length) {
            if ("string" != typeof b) {
              for (a = 0; a < this.length; a += 1)
                for (d in b) this[a].style[d] = b[d];
              return this;
            }
            if (this[0])
              return c.getComputedStyle(this[0], null).getPropertyValue(b);
          }
          if (2 === arguments.length && "string" == typeof b) {
            for (a = 0; a < this.length; a += 1) this[a].style[b] = e;
            return this;
          }
          return this;
        },
        each: function (b) {
          if (!b) return this;
          for (var a = 0; a < this.length; a += 1)
            if (!1 === b.call(this[a], a, this[a])) return this;
          return this;
        },
        html: function (b) {
          if (void 0 === b) return this[0] ? this[0].innerHTML : void 0;
          for (var a = 0; a < this.length; a += 1) this[a].innerHTML = b;
          return this;
        },
        text: function (b) {
          if (void 0 === b) return this[0] ? this[0].textContent.trim() : null;
          for (var a = 0; a < this.length; a += 1) this[a].textContent = b;
          return this;
        },
        is: function (a) {
          var h,
            f,
            e = this[0];
          if (!e || void 0 === a) return !1;
          if ("string" == typeof a) {
            if (e.matches) return e.matches(a);
            if (e.webkitMatchesSelector) return e.webkitMatchesSelector(a);
            if (e.msMatchesSelector) return e.msMatchesSelector(a);
            for (h = b(a), f = 0; f < h.length; f += 1)
              if (h[f] === e) return !0;
            return !1;
          }
          if (a === d) return e === d;
          if (a === c) return e === c;
          if (a.nodeType || a instanceof g) {
            for (h = a.nodeType ? [a] : a, f = 0; f < h.length; f += 1)
              if (h[f] === e) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          var b,
            a = this[0];
          if (a) {
            for (b = 0; null !== (a = a.previousSibling); )
              1 === a.nodeType && (b += 1);
            return b;
          }
        },
        eq: function (a) {
          if (void 0 === a) return this;
          var b,
            c = this.length;
          return new g(
            a > c - 1
              ? []
              : a < 0
              ? (b = c + a) < 0
                ? []
                : [this[b]]
              : [this[a]]
          );
        },
        append: function () {
          for (var a, c = [], e = arguments.length, f, b, h, i; e--; )
            c[e] = arguments[e];
          for (f = 0; f < c.length; f += 1) {
            a = c[f];
            for (b = 0; b < this.length; b += 1)
              if ("string" == typeof a) {
                h = d.createElement("div");
                for (h.innerHTML = a; h.firstChild; )
                  this[b].appendChild(h.firstChild);
              } else if (a instanceof g)
                for (i = 0; i < a.length; i += 1) this[b].appendChild(a[i]);
              else this[b].appendChild(a);
          }
          return this;
        },
        prepend: function (c) {
          var a, b, e;
          for (a = 0; a < this.length; a += 1)
            if ("string" == typeof c) {
              e = d.createElement("div");
              for (e.innerHTML = c, b = e.childNodes.length - 1; b >= 0; b -= 1)
                this[a].insertBefore(e.childNodes[b], this[a].childNodes[0]);
            } else if (c instanceof g)
              for (b = 0; b < c.length; b += 1)
                this[a].insertBefore(c[b], this[a].childNodes[0]);
            else this[a].insertBefore(c, this[a].childNodes[0]);
          return this;
        },
        next: function (a) {
          return this.length > 0
            ? a
              ? this[0].nextElementSibling &&
                b(this[0].nextElementSibling).is(a)
                ? new g([this[0].nextElementSibling])
                : new g([])
              : this[0].nextElementSibling
              ? new g([this[0].nextElementSibling])
              : new g([])
            : new g([]);
        },
        nextAll: function (e) {
          var d = [],
            a = this[0],
            c;
          if (!a) return new g([]);
          for (; a.nextElementSibling; )
            (c = a.nextElementSibling),
              e ? b(c).is(e) && d.push(c) : d.push(c),
              (a = c);
          return new g(d);
        },
        prev: function (c) {
          if (this.length > 0) {
            var a = this[0];
            return c
              ? a.previousElementSibling && b(a.previousElementSibling).is(c)
                ? new g([a.previousElementSibling])
                : new g([])
              : a.previousElementSibling
              ? new g([a.previousElementSibling])
              : new g([]);
          }
          return new g([]);
        },
        prevAll: function (e) {
          var d = [],
            a = this[0],
            c;
          if (!a) return new g([]);
          for (; a.previousElementSibling; )
            (c = a.previousElementSibling),
              e ? b(c).is(e) && d.push(c) : d.push(c),
              (a = c);
          return new g(d);
        },
        parent: function (d) {
          for (var c = [], a = 0; a < this.length; a += 1)
            null !== this[a].parentNode &&
              (d
                ? b(this[a].parentNode).is(d) && c.push(this[a].parentNode)
                : c.push(this[a].parentNode));
          return b(W(c));
        },
        parents: function (e) {
          for (var c = [], d = 0, a; d < this.length; d += 1)
            for (a = this[d].parentNode; a; )
              e ? b(a).is(e) && c.push(a) : c.push(a), (a = a.parentNode);
          return b(W(c));
        },
        closest: function (b) {
          var a = this;
          return void 0 === b
            ? new g([])
            : (a.is(b) || (a = a.parents(b).eq(0)), a);
        },
        find: function (e) {
          for (var c = [], a = 0, d, b; a < this.length; a += 1)
            for (d = this[a].querySelectorAll(e), b = 0; b < d.length; b += 1)
              c.push(d[b]);
          return new g(c);
        },
        children: function (f) {
          for (var d = [], e = 0, c, a; e < this.length; e += 1)
            for (c = this[e].childNodes, a = 0; a < c.length; a += 1)
              f
                ? 1 === c[a].nodeType && b(c[a]).is(f) && d.push(c[a])
                : 1 === c[a].nodeType && d.push(c[a]);
          return new g(W(d));
        },
        filter: function (c) {
          for (var b = [], a = 0; a < this.length; a += 1)
            c.call(this[a], a, this[a]) && b.push(this[a]);
          return new g(b);
        },
        remove: function () {
          for (var a = 0; a < this.length; a += 1)
            this[a].parentNode && this[a].parentNode.removeChild(this[a]);
          return this;
        },
        add: function () {
          for (var e = [], f = arguments.length, a, c, d, g; f--; )
            e[f] = arguments[f];
          d = this;
          for (a = 0; a < e.length; a += 1) {
            g = b(e[a]);
            for (c = 0; c < g.length; c += 1)
              (d[d.length] = g[c]), (d.length += 1);
          }
          return d;
        },
        styles: function () {
          return this[0] ? c.getComputedStyle(this[0], null) : {};
        },
      }),
      Object.keys(aa).forEach(function (a) {
        b.fn[a] = b.fn[a] || aa[a];
      }),
      (a = {
        deleteProps: function (b) {
          var a = b;
          Object.keys(a).forEach(function (b) {
            try {
              a[b] = null;
            } catch (a) {}
            try {
              delete a[b];
            } catch (a) {}
          });
        },
        nextTick: function (b, a) {
          return void 0 === a && (a = 0), setTimeout(b, a);
        },
        now: function () {
          return Date.now();
        },
        getTranslate: function (g, e) {
          var d, a, f, b;
          return (
            void 0 === e && (e = "x"),
            (b = c.getComputedStyle(g, null)),
            c.WebKitCSSMatrix
              ? ((a = b.transform || b.webkitTransform).split(",").length > 6 &&
                  (a = a
                    .split(", ")
                    .map(function (a) {
                      return a.replace(",", ".");
                    })
                    .join(", ")),
                (f = new c.WebKitCSSMatrix("none" === a ? "" : a)))
              : (d = (f =
                  b.MozTransform ||
                  b.OTransform ||
                  b.MsTransform ||
                  b.msTransform ||
                  b.transform ||
                  b
                    .getPropertyValue("transform")
                    .replace("translate(", "matrix(1, 0, 0, 1,"))
                  .toString()
                  .split(",")),
            "x" === e &&
              (a = c.WebKitCSSMatrix
                ? f.m41
                : 16 === d.length
                ? parseFloat(d[12])
                : parseFloat(d[4])),
            "y" === e &&
              (a = c.WebKitCSSMatrix
                ? f.m42
                : 16 === d.length
                ? parseFloat(d[13])
                : parseFloat(d[5])),
            a || 0
          );
        },
        parseUrlQuery: function (h) {
          var b,
            e,
            d,
            f,
            g = {},
            a = h || c.location.href;
          if ("string" == typeof a && a.length)
            for (
              f = (e = (a = a.indexOf("?") > -1 ? a.replace(/\S*\?/, "") : "")
                .split("&")
                .filter(function (a) {
                  return "" !== a;
                })).length,
                b = 0;
              b < f;
              b += 1
            )
              (d = e[b].replace(/#\S+/g, "").split("=")),
                (g[decodeURIComponent(d[0])] =
                  void 0 === d[1] ? void 0 : decodeURIComponent(d[1]) || "");
          return g;
        },
        isObject: function (a) {
          return (
            "object" == typeof a &&
            null !== a &&
            a.constructor &&
            a.constructor === Object
          );
        },
        extend: function () {
          for (var e = [], f = arguments.length, d, g, c, i, h, k, b, j; f--; )
            e[f] = arguments[f];
          for (d = Object(e[0]), g = 1; g < e.length; g += 1)
            if (((c = e[g]), null != c))
              for (
                i = Object.keys(Object(c)), h = 0, k = i.length;
                h < k;
                h += 1
              )
                (b = i[h]),
                  (j = Object.getOwnPropertyDescriptor(c, b)),
                  void 0 !== j &&
                    j.enumerable &&
                    (a.isObject(d[b]) && a.isObject(c[b])
                      ? a.extend(d[b], c[b])
                      : !a.isObject(d[b]) && a.isObject(c[b])
                      ? ((d[b] = {}), a.extend(d[b], c[b]))
                      : (d[b] = c[b]));
          return d;
        },
      }),
      (e = {
        touch: !!(
          "ontouchstart" in c ||
          (c.DocumentTouch && d instanceof c.DocumentTouch)
        ),
        pointerEvents:
          !!c.PointerEvent &&
          "maxTouchPoints" in c.navigator &&
          c.navigator.maxTouchPoints >= 0,
        observer: "MutationObserver" in c || "WebkitMutationObserver" in c,
        passiveListener: (function () {
          var a = !1,
            b;
          try {
            (b = Object.defineProperty({}, "passive", {
              get: function () {
                a = !0;
              },
            })),
              c.addEventListener("testPassiveListener", null, b);
          } catch (a) {}
          return a;
        })(),
        gestures: "ongesturestart" in c,
      }),
      (l = function (b) {
        void 0 === b && (b = {});
        var a = this;
        (a.params = b),
          (a.eventsListeners = {}),
          a.params &&
            a.params.on &&
            Object.keys(a.params.on).forEach(function (b) {
              a.on(b, a.params.on[b]);
            });
      }),
      (V = { components: { configurable: !0 } }),
      (l.prototype.on = function (c, b, d) {
        var a = this,
          e;
        return "function" != typeof b
          ? a
          : ((e = d ? "unshift" : "push"),
            c.split(" ").forEach(function (c) {
              a.eventsListeners[c] || (a.eventsListeners[c] = []),
                a.eventsListeners[c][e](b);
            }),
            a);
      }),
      (l.prototype.once = function (d, c, e) {
        var b = this;
        if ("function" != typeof c) return b;
        function a() {
          for (var f = [], e = arguments.length; e--; ) f[e] = arguments[e];
          b.off(d, a), a.f7proxy && delete a.f7proxy, c.apply(b, f);
        }
        return (a.f7proxy = c), b.on(d, a, e);
      }),
      (l.prototype.off = function (c, b) {
        var a = this;
        return a.eventsListeners
          ? (c.split(" ").forEach(function (c) {
              void 0 === b
                ? (a.eventsListeners[c] = [])
                : a.eventsListeners[c] &&
                  a.eventsListeners[c].length &&
                  a.eventsListeners[c].forEach(function (d, e) {
                    (d === b || (d.f7proxy && d.f7proxy === b)) &&
                      a.eventsListeners[c].splice(e, 1);
                  });
            }),
            a)
          : a;
      }),
      (l.prototype.emit = function () {
        for (var a = [], d = arguments.length, c, e, f, b, g; d--; )
          a[d] = arguments[d];
        return (
          (b = this),
          !b.eventsListeners
            ? b
            : ("string" == typeof a[0] || Array.isArray(a[0])
                ? ((c = a[0]), (e = a.slice(1, a.length)), (f = b))
                : ((c = a[0].events), (e = a[0].data), (f = a[0].context || b)),
              (g = Array.isArray(c) ? c : c.split(" ")),
              g.forEach(function (a) {
                if (b.eventsListeners && b.eventsListeners[a]) {
                  var c = [];
                  b.eventsListeners[a].forEach(function (a) {
                    c.push(a);
                  }),
                    c.forEach(function (a) {
                      a.apply(f, e);
                    });
                }
              }),
              b)
        );
      }),
      (l.prototype.useModulesParams = function (c) {
        var b = this;
        b.modules &&
          Object.keys(b.modules).forEach(function (e) {
            var d = b.modules[e];
            d.params && a.extend(c, d.params);
          });
      }),
      (l.prototype.useModules = function (b) {
        void 0 === b && (b = {});
        var a = this;
        a.modules &&
          Object.keys(a.modules).forEach(function (d) {
            var c = a.modules[d],
              e = b[d] || {};
            c.instance &&
              Object.keys(c.instance).forEach(function (d) {
                var b = c.instance[d];
                a[d] = "function" == typeof b ? b.bind(a) : b;
              }),
              c.on &&
                a.on &&
                Object.keys(c.on).forEach(function (b) {
                  a.on(b, c.on[b]);
                }),
              c.create && c.create.bind(a)(e);
          });
      }),
      (V.components.set = function (a) {
        this.use && this.use(a);
      }),
      (l.installModule = function (b) {
        for (var e = [], d = arguments.length - 1, c, f; d-- > 0; )
          e[d] = arguments[d + 1];
        return (
          (c = this),
          c.prototype.modules || (c.prototype.modules = {}),
          (f =
            b.name || Object.keys(c.prototype.modules).length + "_" + a.now()),
          (c.prototype.modules[f] = b),
          b.proto &&
            Object.keys(b.proto).forEach(function (a) {
              c.prototype[a] = b.proto[a];
            }),
          b.static &&
            Object.keys(b.static).forEach(function (a) {
              c[a] = b.static[a];
            }),
          b.install && b.install.apply(c, e),
          c
        );
      }),
      (l.use = function (b) {
        for (var d = [], c = arguments.length - 1, a; c-- > 0; )
          d[c] = arguments[c + 1];
        return (
          (a = this),
          Array.isArray(b)
            ? (b.forEach(function (b) {
                return a.installModule(b);
              }),
              a)
            : a.installModule.apply(a, [b].concat(d))
        );
      }),
      Object.defineProperties(l, V),
      (an = {
        updateSize: function () {
          var b,
            c,
            d = this.$el;
          (b =
            void 0 !== this.params.width
              ? this.params.width
              : d[0].clientWidth),
            (c =
              void 0 !== this.params.height
                ? this.params.height
                : d[0].clientHeight),
            (0 === b && this.isHorizontal()) ||
              (0 === c && this.isVertical()) ||
              ((b =
                b -
                parseInt(d.css("padding-left"), 10) -
                parseInt(d.css("padding-right"), 10)),
              (c =
                c -
                parseInt(d.css("padding-top"), 10) -
                parseInt(d.css("padding-bottom"), 10)),
              a.extend(this, {
                width: b,
                height: c,
                size: this.isHorizontal() ? b : c,
              }));
        },
        updateSlides: function () {
          var b = this.params,
            s = this.$wrapperEl,
            j = this.size,
            C = this.rtlTranslate,
            ab = this.wrongRTL,
            N = this.virtual && b.virtual.enabled,
            ac = N ? this.virtual.slides.length : this.slides.length,
            h = s.children("." + this.params.slideClass),
            m = N ? this.virtual.slides.length : h.length,
            d = [],
            p = [],
            B = [],
            A,
            z,
            ad,
            ae,
            i,
            f,
            F,
            w,
            t,
            e,
            r,
            n,
            Q,
            P,
            g,
            l,
            u,
            q,
            o,
            x,
            M,
            L,
            k,
            J,
            G,
            Y,
            aa,
            af,
            R,
            S,
            T,
            U,
            $,
            _,
            X,
            K,
            W,
            y,
            E,
            v,
            H,
            O,
            V,
            I,
            Z;
          function D(a) {
            return !b.cssMode || a !== h.length - 1;
          }
          if (
            ((A = b.slidesOffsetBefore),
            "function" == typeof A && (A = b.slidesOffsetBefore.call(this)),
            (z = b.slidesOffsetAfter),
            "function" == typeof z && (z = b.slidesOffsetAfter.call(this)),
            (ad = this.snapGrid.length),
            (ae = this.snapGrid.length),
            (i = b.spaceBetween),
            (f = -A),
            (F = 0),
            (w = 0),
            void 0 !== j)
          ) {
            "string" == typeof i &&
              i.indexOf("%") >= 0 &&
              (i = (parseFloat(i.replace("%", "")) / 100) * j),
              (this.virtualSize = -i),
              C
                ? h.css({ marginLeft: "", marginTop: "" })
                : h.css({ marginRight: "", marginBottom: "" }),
              b.slidesPerColumn > 1 &&
                ((t =
                  Math.floor(m / b.slidesPerColumn) ===
                  m / this.params.slidesPerColumn
                    ? m
                    : Math.ceil(m / b.slidesPerColumn) * b.slidesPerColumn),
                "auto" !== b.slidesPerView &&
                  "row" === b.slidesPerColumnFill &&
                  (t = Math.max(t, b.slidesPerView * b.slidesPerColumn)));
            for (
              r,
                n = b.slidesPerColumn,
                Q = t / n,
                P = Math.floor(m / b.slidesPerColumn),
                g = 0;
              g < m;
              g += 1
            )
              (e = 0),
                (l = h.eq(g)),
                b.slidesPerColumn > 1 &&
                  ((u = void 0),
                  (q = void 0),
                  (o = void 0),
                  "row" === b.slidesPerColumnFill && b.slidesPerGroup > 1
                    ? ((x = Math.floor(
                        g / (b.slidesPerGroup * b.slidesPerColumn)
                      )),
                      (M = g - b.slidesPerColumn * b.slidesPerGroup * x),
                      (L =
                        0 === x
                          ? b.slidesPerGroup
                          : Math.min(
                              Math.ceil((m - x * n * b.slidesPerGroup) / n),
                              b.slidesPerGroup
                            )),
                      (u =
                        (q =
                          M -
                          (o = Math.floor(M / L)) * L +
                          x * b.slidesPerGroup) +
                        (o * t) / n),
                      l.css({
                        "-webkit-box-ordinal-group": u,
                        "-moz-box-ordinal-group": u,
                        "-ms-flex-order": u,
                        "-webkit-order": u,
                        order: u,
                      }))
                    : "column" === b.slidesPerColumnFill
                    ? ((o = g - (q = Math.floor(g / n)) * n),
                      (q > P || (q === P && o === n - 1)) &&
                        (o += 1) >= n &&
                        ((o = 0), (q += 1)))
                    : (q = g - (o = Math.floor(g / Q)) * Q),
                  l.css(
                    "margin-" + (this.isHorizontal() ? "top" : "left"),
                    0 !== o && b.spaceBetween && b.spaceBetween + "px"
                  )),
                "none" !== l.css("display") &&
                  ("auto" === b.slidesPerView
                    ? ((k = c.getComputedStyle(l[0], null)),
                      (J = l[0].style.transform),
                      (G = l[0].style.webkitTransform),
                      (J && (l[0].style.transform = "none"),
                      G && (l[0].style.webkitTransform = "none"),
                      b.roundLengths)
                        ? (e = this.isHorizontal()
                            ? l.outerWidth(!0)
                            : l.outerHeight(!0))
                        : this.isHorizontal()
                        ? ((Y = parseFloat(k.getPropertyValue("width"))),
                          (aa = parseFloat(k.getPropertyValue("padding-left"))),
                          (af = parseFloat(
                            k.getPropertyValue("padding-right")
                          )),
                          (R = parseFloat(k.getPropertyValue("margin-left"))),
                          (S = parseFloat(k.getPropertyValue("margin-right"))),
                          (T = k.getPropertyValue("box-sizing")),
                          (e =
                            T && "border-box" === T
                              ? Y + R + S
                              : Y + aa + af + R + S))
                        : ((U = parseFloat(k.getPropertyValue("height"))),
                          ($ = parseFloat(k.getPropertyValue("padding-top"))),
                          (_ = parseFloat(
                            k.getPropertyValue("padding-bottom")
                          )),
                          (X = parseFloat(k.getPropertyValue("margin-top"))),
                          (K = parseFloat(k.getPropertyValue("margin-bottom"))),
                          (W = k.getPropertyValue("box-sizing")),
                          (e =
                            W && "border-box" === W
                              ? U + X + K
                              : U + $ + _ + X + K)),
                      J && (l[0].style.transform = J),
                      G && (l[0].style.webkitTransform = G),
                      b.roundLengths && (e = Math.floor(e)))
                    : ((e = (j - (b.slidesPerView - 1) * i) / b.slidesPerView),
                      b.roundLengths && (e = Math.floor(e)),
                      h[g] &&
                        (this.isHorizontal()
                          ? (h[g].style.width = e + "px")
                          : (h[g].style.height = e + "px"))),
                  h[g] && (h[g].swiperSlideSize = e),
                  B.push(e),
                  b.centeredSlides
                    ? ((f = f + e / 2 + F / 2 + i),
                      0 === F && 0 !== g && (f = f - j / 2 - i),
                      0 === g && (f = f - j / 2 - i),
                      Math.abs(f) < 0.001 && (f = 0),
                      b.roundLengths && (f = Math.floor(f)),
                      w % b.slidesPerGroup == 0 && d.push(f),
                      p.push(f))
                    : (b.roundLengths && (f = Math.floor(f)),
                      (w - Math.min(this.params.slidesPerGroupSkip, w)) %
                        this.params.slidesPerGroup ==
                        0 && d.push(f),
                      p.push(f),
                      (f = f + e + i)),
                  (this.virtualSize += e + i),
                  (F = e),
                  (w += 1));
            if (
              ((this.virtualSize = Math.max(this.virtualSize, j) + z),
              C &&
                ab &&
                ("slide" === b.effect || "coverflow" === b.effect) &&
                s.css({ width: this.virtualSize + b.spaceBetween + "px" }),
              b.setWrapperSize &&
                (this.isHorizontal()
                  ? s.css({ width: this.virtualSize + b.spaceBetween + "px" })
                  : s.css({
                      height: this.virtualSize + b.spaceBetween + "px",
                    })),
              b.slidesPerColumn > 1 &&
                ((this.virtualSize = (e + b.spaceBetween) * t),
                (this.virtualSize =
                  Math.ceil(this.virtualSize / b.slidesPerColumn) -
                  b.spaceBetween),
                this.isHorizontal()
                  ? s.css({ width: this.virtualSize + b.spaceBetween + "px" })
                  : s.css({ height: this.virtualSize + b.spaceBetween + "px" }),
                b.centeredSlides))
            ) {
              r = [];
              for (y = 0; y < d.length; y += 1)
                (E = d[y]),
                  b.roundLengths && (E = Math.floor(E)),
                  d[y] < this.virtualSize + d[0] && r.push(E);
              d = r;
            }
            if (!b.centeredSlides) {
              r = [];
              for (v = 0; v < d.length; v += 1)
                (H = d[v]),
                  b.roundLengths && (H = Math.floor(H)),
                  d[v] <= this.virtualSize - j && r.push(H);
              (d = r),
                Math.floor(this.virtualSize - j) - Math.floor(d[d.length - 1]) >
                  1 && d.push(this.virtualSize - j);
            }
            0 === d.length && (d = [0]),
              0 !== b.spaceBetween &&
                (this.isHorizontal()
                  ? C
                    ? h.filter(D).css({ marginLeft: i + "px" })
                    : h.filter(D).css({ marginRight: i + "px" })
                  : h.filter(D).css({ marginBottom: i + "px" })),
              b.centeredSlides &&
                b.centeredSlidesBounds &&
                ((O = 0),
                B.forEach(function (a) {
                  O += a + (b.spaceBetween ? b.spaceBetween : 0);
                }),
                (V = (O -= b.spaceBetween) - j),
                (d = d.map(function (a) {
                  return a < 0 ? -A : a > V ? V + z : a;
                }))),
              b.centerInsufficientSlides &&
                ((I = 0),
                (B.forEach(function (a) {
                  I += a + (b.spaceBetween ? b.spaceBetween : 0);
                }),
                (I -= b.spaceBetween) < j) &&
                  ((Z = (j - I) / 2),
                  d.forEach(function (a, b) {
                    d[b] = a - Z;
                  }),
                  p.forEach(function (a, b) {
                    p[b] = a + Z;
                  }))),
              a.extend(this, {
                slides: h,
                snapGrid: d,
                slidesGrid: p,
                slidesSizesGrid: B,
              }),
              m !== ac && this.emit("slidesLengthChange"),
              d.length !== ad &&
                (this.params.watchOverflow && this.checkOverflow(),
                this.emit("snapGridLengthChange")),
              p.length !== ae && this.emit("slidesGridLengthChange"),
              (b.watchSlidesProgress || b.watchSlidesVisibility) &&
                this.updateSlidesOffset();
          }
        },
        updateAutoHeight: function (d) {
          var a,
            b = [],
            c = 0,
            e,
            f;
          if (
            ("number" == typeof d
              ? this.setTransition(d)
              : !0 === d && this.setTransition(this.params.speed),
            "auto" !== this.params.slidesPerView &&
              this.params.slidesPerView > 1)
          )
            if (this.params.centeredSlides)
              this.visibleSlides.each(function (c, a) {
                b.push(a);
              });
            else
              for (a = 0; a < Math.ceil(this.params.slidesPerView); a += 1) {
                if (((e = this.activeIndex + a), e > this.slides.length)) break;
                b.push(this.slides.eq(e)[0]);
              }
          else b.push(this.slides.eq(this.activeIndex)[0]);
          for (a = 0; a < b.length; a += 1)
            void 0 !== b[a] && ((f = b[a].offsetHeight), (c = f > c ? f : c));
          c && this.$wrapperEl.css("height", c + "px");
        },
        updateSlidesOffset: function () {
          for (var b = this.slides, a = 0; a < b.length; a += 1)
            b[a].swiperSlideOffset = this.isHorizontal()
              ? b[a].offsetLeft
              : b[a].offsetTop;
        },
        updateSlidesProgress: function (i) {
          var a, c, k, h, d, e, j, f, g;
          if (
            (void 0 === i && (i = (this && this.translate) || 0),
            (a = this.params),
            (c = this.slides),
            (k = this.rtlTranslate),
            0 !== c.length)
          ) {
            void 0 === c[0].swiperSlideOffset && this.updateSlidesOffset(),
              (h = -i),
              k && (h = i),
              c.removeClass(a.slideVisibleClass),
              (this.visibleSlidesIndexes = []),
              (this.visibleSlides = []);
            for (d = 0; d < c.length; d += 1)
              (e = c[d]),
                (j =
                  (h +
                    (a.centeredSlides ? this.minTranslate() : 0) -
                    e.swiperSlideOffset) /
                  (e.swiperSlideSize + a.spaceBetween)),
                (a.watchSlidesVisibility ||
                  (a.centeredSlides && a.autoHeight)) &&
                  ((f = -(h - e.swiperSlideOffset)),
                  (g = f + this.slidesSizesGrid[d]),
                  ((f >= 0 && f < this.size - 1) ||
                    (g > 1 && g <= this.size) ||
                    (f <= 0 && g >= this.size)) &&
                    (this.visibleSlides.push(e),
                    this.visibleSlidesIndexes.push(d),
                    c.eq(d).addClass(a.slideVisibleClass))),
                (e.progress = k ? -j : j);
            this.visibleSlides = b(this.visibleSlides);
          }
        },
        updateProgress: function (f) {
          var j, e, h, d, c, b, g, i;
          void 0 === f &&
            ((j = this.rtlTranslate ? -1 : 1),
            (f = (this && this.translate && this.translate * j) || 0)),
            (e = this.params),
            (h = this.maxTranslate() - this.minTranslate()),
            (d = this.progress),
            (c = this.isBeginning),
            (b = this.isEnd),
            (g = c),
            (i = b),
            0 === h
              ? ((d = 0), (c = !0), (b = !0))
              : ((c = (d = (f - this.minTranslate()) / h) <= 0), (b = d >= 1)),
            a.extend(this, { progress: d, isBeginning: c, isEnd: b }),
            (e.watchSlidesProgress ||
              e.watchSlidesVisibility ||
              (e.centeredSlides && e.autoHeight)) &&
              this.updateSlidesProgress(f),
            c && !g && this.emit("reachBeginning toEdge"),
            b && !i && this.emit("reachEnd toEdge"),
            ((g && !c) || (i && !b)) && this.emit("fromEdge"),
            this.emit("progress", d);
        },
        updateSlidesClasses: function () {
          var e,
            f = this.slides,
            a = this.params,
            b = this.$wrapperEl,
            g = this.activeIndex,
            h = this.realIndex,
            i = this.virtual && a.virtual.enabled,
            c,
            d;
          f.removeClass(
            a.slideActiveClass +
              " " +
              a.slideNextClass +
              " " +
              a.slidePrevClass +
              " " +
              a.slideDuplicateActiveClass +
              " " +
              a.slideDuplicateNextClass +
              " " +
              a.slideDuplicatePrevClass
          ),
            (e = i
              ? this.$wrapperEl.find(
                  "." + a.slideClass + '[data-swiper-slide-index="' + g + '"]'
                )
              : f.eq(g)).addClass(a.slideActiveClass),
            a.loop &&
              (e.hasClass(a.slideDuplicateClass)
                ? b
                    .children(
                      "." +
                        a.slideClass +
                        ":not(." +
                        a.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        h +
                        '"]'
                    )
                    .addClass(a.slideDuplicateActiveClass)
                : b
                    .children(
                      "." +
                        a.slideClass +
                        "." +
                        a.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        h +
                        '"]'
                    )
                    .addClass(a.slideDuplicateActiveClass)),
            (c = e
              .nextAll("." + a.slideClass)
              .eq(0)
              .addClass(a.slideNextClass)),
            a.loop &&
              0 === c.length &&
              (c = f.eq(0)).addClass(a.slideNextClass),
            (d = e
              .prevAll("." + a.slideClass)
              .eq(0)
              .addClass(a.slidePrevClass)),
            a.loop &&
              0 === d.length &&
              (d = f.eq(-1)).addClass(a.slidePrevClass),
            a.loop &&
              (c.hasClass(a.slideDuplicateClass)
                ? b
                    .children(
                      "." +
                        a.slideClass +
                        ":not(." +
                        a.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        c.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(a.slideDuplicateNextClass)
                : b
                    .children(
                      "." +
                        a.slideClass +
                        "." +
                        a.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        c.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(a.slideDuplicateNextClass),
              d.hasClass(a.slideDuplicateClass)
                ? b
                    .children(
                      "." +
                        a.slideClass +
                        ":not(." +
                        a.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        d.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(a.slideDuplicatePrevClass)
                : b
                    .children(
                      "." +
                        a.slideClass +
                        "." +
                        a.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        d.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(a.slideDuplicatePrevClass));
        },
        updateActiveIndex: function (n) {
          var e,
            f = this.rtlTranslate ? this.translate : -this.translate,
            d = this.slidesGrid,
            g = this.snapGrid,
            h = this.params,
            k = this.activeIndex,
            m = this.realIndex,
            l = this.snapIndex,
            c = n,
            b,
            j,
            i;
          if (void 0 === c) {
            for (b = 0; b < d.length; b += 1)
              void 0 !== d[b + 1]
                ? f >= d[b] && f < d[b + 1] - (d[b + 1] - d[b]) / 2
                  ? (c = b)
                  : f >= d[b] && f < d[b + 1] && (c = b + 1)
                : f >= d[b] && (c = b);
            h.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
          }
          g.indexOf(f) >= 0
            ? (e = g.indexOf(f))
            : ((j = Math.min(h.slidesPerGroupSkip, c)),
              (e = j + Math.floor((c - j) / h.slidesPerGroup))),
            (e >= g.length && (e = g.length - 1), c !== k)
              ? ((i = parseInt(
                  this.slides.eq(c).attr("data-swiper-slide-index") || c,
                  10
                )),
                a.extend(this, {
                  snapIndex: e,
                  realIndex: i,
                  previousIndex: k,
                  activeIndex: c,
                }),
                this.emit("activeIndexChange"),
                this.emit("snapIndexChange"),
                m !== i && this.emit("realIndexChange"),
                (this.initialized || this.params.runCallbacksOnInit) &&
                  this.emit("slideChange"))
              : e !== l && ((this.snapIndex = e), this.emit("snapIndexChange"));
        },
        updateClickedSlide: function (f) {
          var d = this.params,
            a = b(f.target).closest("." + d.slideClass)[0],
            e = !1,
            c;
          if (a)
            for (c = 0; c < this.slides.length; c += 1)
              this.slides[c] === a && (e = !0);
          if (!a || !e)
            return (
              (this.clickedSlide = void 0), void (this.clickedIndex = void 0)
            );
          (this.clickedSlide = a),
            this.virtual && this.params.virtual.enabled
              ? (this.clickedIndex = parseInt(
                  b(a).attr("data-swiper-slide-index"),
                  10
                ))
              : (this.clickedIndex = b(a).index()),
            d.slideToClickedSlide &&
              void 0 !== this.clickedIndex &&
              this.clickedIndex !== this.activeIndex &&
              this.slideToClickedSlide();
        },
      }),
      (am = {
        getTranslate: function (d) {
          var e, f, b, g, c;
          return (
            void 0 === d && (d = this.isHorizontal() ? "x" : "y"),
            (e = this.params),
            (f = this.rtlTranslate),
            (b = this.translate),
            (g = this.$wrapperEl),
            e.virtualTranslate
              ? f
                ? -b
                : b
              : e.cssMode
              ? b
              : ((c = a.getTranslate(g[0], d)), f && (c = -c), c || 0)
          );
        },
        setTranslate: function (c, i) {
          var j = this.rtlTranslate,
            d = this.params,
            f = this.$wrapperEl,
            g = this.wrapperEl,
            h = this.progress,
            a = 0,
            b = 0,
            e;
          this.isHorizontal() ? (a = j ? -c : c) : (b = c),
            d.roundLengths && ((a = Math.floor(a)), (b = Math.floor(b))),
            d.cssMode
              ? (g[this.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  this.isHorizontal() ? -a : -b)
              : d.virtualTranslate ||
                f.transform("translate3d(" + a + "px, " + b + "px, 0px)"),
            (this.previousTranslate = this.translate),
            (this.translate = this.isHorizontal() ? a : b),
            (e = this.maxTranslate() - this.minTranslate()),
            (0 === e ? 0 : (c - this.minTranslate()) / e) !== h &&
              this.updateProgress(c),
            this.emit("setTranslate", this.translate, i);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (e, b, d, g, m) {
          var h, a, j, f, c, k, l, i;
          return (
            !(void 0 === e && (e = 0),
            void 0 === b && (b = this.params.speed),
            void 0 === d && (d = !0),
            void 0 === g && (g = !0),
            (a = this),
            (j = a.params),
            (f = a.wrapperEl),
            a.animating && j.preventInteractionOnTransition) &&
            (((k = a.minTranslate()),
            (l = a.maxTranslate()),
            (c = g && e > k ? k : g && e < l ? l : e),
            a.updateProgress(c),
            j.cssMode)
              ? ((i = a.isHorizontal()),
                0 === b
                  ? (f[i ? "scrollLeft" : "scrollTop"] = -c)
                  : f.scrollTo
                  ? f.scrollTo(
                      (((h = {})[i ? "left" : "top"] = -c),
                      (h.behavior = "smooth"),
                      h)
                    )
                  : (f[i ? "scrollLeft" : "scrollTop"] = -c),
                !0)
              : (0 === b
                  ? (a.setTransition(0),
                    a.setTranslate(c),
                    d &&
                      (a.emit("beforeTransitionStart", b, m),
                      a.emit("transitionEnd")))
                  : (a.setTransition(b),
                    a.setTranslate(c),
                    d &&
                      (a.emit("beforeTransitionStart", b, m),
                      a.emit("transitionStart")),
                    a.animating ||
                      ((a.animating = !0),
                      a.onTranslateToWrapperTransitionEnd ||
                        (a.onTranslateToWrapperTransitionEnd = function (b) {
                          a &&
                            !a.destroyed &&
                            b.target === this &&
                            (a.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              a.onTranslateToWrapperTransitionEnd
                            ),
                            a.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              a.onTranslateToWrapperTransitionEnd
                            ),
                            (a.onTranslateToWrapperTransitionEnd = null),
                            delete a.onTranslateToWrapperTransitionEnd,
                            d && a.emit("transitionEnd"));
                        }),
                      a.$wrapperEl[0].addEventListener(
                        "transitionend",
                        a.onTranslateToWrapperTransitionEnd
                      ),
                      a.$wrapperEl[0].addEventListener(
                        "webkitTransitionEnd",
                        a.onTranslateToWrapperTransitionEnd
                      ))),
                !0))
          );
        },
      }),
      (al = {
        setTransition: function (a, b) {
          this.params.cssMode || this.$wrapperEl.transition(a),
            this.emit("setTransition", a, b);
        },
        transitionStart: function (d, f) {
          var b, e, c, a;
          if (
            (void 0 === d && (d = !0),
            (b = this.activeIndex),
            (e = this.params),
            (c = this.previousIndex),
            !e.cssMode)
          )
            if (
              (e.autoHeight && this.updateAutoHeight(),
              (a = f),
              a || (a = b > c ? "next" : b < c ? "prev" : "reset"),
              this.emit("transitionStart"),
              d && b !== c)
            ) {
              if ("reset" === a)
                return void this.emit("slideResetTransitionStart");
              this.emit("slideChangeTransitionStart"),
                "next" === a
                  ? this.emit("slideNextTransitionStart")
                  : this.emit("slidePrevTransitionStart");
            }
        },
        transitionEnd: function (d, f) {
          var b, c, e, a;
          if (
            (void 0 === d && (d = !0),
            (b = this.activeIndex),
            (c = this.previousIndex),
            (e = this.params),
            (this.animating = !1),
            !e.cssMode)
          )
            if (
              (this.setTransition(0),
              (a = f),
              a || (a = b > c ? "next" : b < c ? "prev" : "reset"),
              this.emit("transitionEnd"),
              d && b !== c)
            ) {
              if ("reset" === a)
                return void this.emit("slideResetTransitionEnd");
              this.emit("slideChangeTransitionEnd"),
                "next" === a
                  ? this.emit("slideNextTransitionEnd")
                  : this.emit("slidePrevTransitionEnd");
            }
        },
      }),
      (ak = {
        slideTo: function (l, f, d, t) {
          var o, a, b, g, n, s, u, i, m, h, r, p, e, c, k, q, j;
          if (
            (void 0 === l && (l = 0),
            void 0 === f && (f = this.params.speed),
            void 0 === d && (d = !0),
            (a = this),
            (b = l),
            b < 0 && (b = 0),
            (g = a.params),
            (n = a.snapGrid),
            (s = a.slidesGrid),
            (u = a.previousIndex),
            (i = a.activeIndex),
            (m = a.rtlTranslate),
            (h = a.wrapperEl),
            a.animating && g.preventInteractionOnTransition)
          )
            return !1;
          if (
            ((r = Math.min(a.params.slidesPerGroupSkip, b)),
            (p = r + Math.floor((b - r) / a.params.slidesPerGroup)),
            p >= n.length && (p = n.length - 1),
            (i || g.initialSlide || 0) === (u || 0) &&
              d &&
              a.emit("beforeSlideChangeStart"),
            (c = -n[p]),
            a.updateProgress(c),
            g.normalizeSlideIndex)
          )
            for (k = 0; k < s.length; k += 1)
              -Math.floor(100 * c) >= Math.floor(100 * s[k]) && (b = k);
          if (a.initialized && b !== i) {
            if (!a.allowSlideNext && c < a.translate && c < a.minTranslate())
              return !1;
            if (
              !a.allowSlidePrev &&
              c > a.translate &&
              c > a.maxTranslate() &&
              (i || 0) !== b
            )
              return !1;
          }
          return (
            (e = b > i ? "next" : b < i ? "prev" : "reset"),
            (m && -c === a.translate) || (!m && c === a.translate)
              ? (a.updateActiveIndex(b),
                g.autoHeight && a.updateAutoHeight(),
                a.updateSlidesClasses(),
                "slide" !== g.effect && a.setTranslate(c),
                "reset" !== e &&
                  (a.transitionStart(d, e), a.transitionEnd(d, e)),
                !1)
              : g.cssMode
              ? ((q = a.isHorizontal()),
                (j = -c),
                m && (j = h.scrollWidth - h.offsetWidth - j),
                0 === f
                  ? (h[q ? "scrollLeft" : "scrollTop"] = j)
                  : h.scrollTo
                  ? h.scrollTo(
                      (((o = {})[q ? "left" : "top"] = j),
                      (o.behavior = "smooth"),
                      o)
                    )
                  : (h[q ? "scrollLeft" : "scrollTop"] = j),
                !0)
              : (0 === f
                  ? (a.setTransition(0),
                    a.setTranslate(c),
                    a.updateActiveIndex(b),
                    a.updateSlidesClasses(),
                    a.emit("beforeTransitionStart", f, t),
                    a.transitionStart(d, e),
                    a.transitionEnd(d, e))
                  : (a.setTransition(f),
                    a.setTranslate(c),
                    a.updateActiveIndex(b),
                    a.updateSlidesClasses(),
                    a.emit("beforeTransitionStart", f, t),
                    a.transitionStart(d, e),
                    a.animating ||
                      ((a.animating = !0),
                      a.onSlideToWrapperTransitionEnd ||
                        (a.onSlideToWrapperTransitionEnd = function (b) {
                          a &&
                            !a.destroyed &&
                            b.target === this &&
                            (a.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              a.onSlideToWrapperTransitionEnd
                            ),
                            a.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              a.onSlideToWrapperTransitionEnd
                            ),
                            (a.onSlideToWrapperTransitionEnd = null),
                            delete a.onSlideToWrapperTransitionEnd,
                            a.transitionEnd(d, e));
                        }),
                      a.$wrapperEl[0].addEventListener(
                        "transitionend",
                        a.onSlideToWrapperTransitionEnd
                      ),
                      a.$wrapperEl[0].addEventListener(
                        "webkitTransitionEnd",
                        a.onSlideToWrapperTransitionEnd
                      ))),
                !0)
          );
        },
        slideToLoop: function (a, b, c, e) {
          void 0 === a && (a = 0),
            void 0 === b && (b = this.params.speed),
            void 0 === c && (c = !0);
          var d = a;
          return (
            this.params.loop && (d += this.loopedSlides),
            this.slideTo(d, b, c, e)
          );
        },
        slideNext: function (a, b, d) {
          void 0 === a && (a = this.params.speed), void 0 === b && (b = !0);
          var c = this.params,
            e = this.animating,
            f = this.activeIndex < c.slidesPerGroupSkip ? 1 : c.slidesPerGroup;
          if (c.loop) {
            if (e) return !1;
            this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
          }
          return this.slideTo(this.activeIndex + f, a, b, d);
        },
        slidePrev: function (j, h, m) {
          var f, l, b, e, k, d, c, g, a;
          if (
            (void 0 === j && (j = this.params.speed),
            void 0 === h && (h = !0),
            (f = this.params),
            (l = this.animating),
            (b = this.snapGrid),
            (e = this.slidesGrid),
            (k = this.rtlTranslate),
            f.loop)
          ) {
            if (l) return !1;
            this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
          }
          function i(a) {
            return a < 0 ? -Math.floor(Math.abs(a)) : Math.floor(a);
          }
          return (
            (c = i(k ? this.translate : -this.translate)),
            (g = b.map(function (a) {
              return i(a);
            })),
            (a =
              (e.map(function (a) {
                return i(a);
              }),
              b[g.indexOf(c)],
              b[g.indexOf(c) - 1])),
            void 0 === a &&
              f.cssMode &&
              b.forEach(function (b) {
                !a && c >= b && (a = b);
              }),
            void 0 !== a &&
              (d = e.indexOf(a)) < 0 &&
              (d = this.activeIndex - 1),
            this.slideTo(d, j, h, m)
          );
        },
        slideReset: function (a, b, c) {
          return (
            void 0 === a && (a = this.params.speed),
            void 0 === b && (b = !0),
            this.slideTo(this.activeIndex, a, b, c)
          );
        },
        slideToClosest: function (g, h, j, d) {
          var a, f, b, c, e, i;
          return (
            void 0 === g && (g = this.params.speed),
            void 0 === h && (h = !0),
            void 0 === d && (d = 0.5),
            (a = this.activeIndex),
            (f = Math.min(this.params.slidesPerGroupSkip, a)),
            (b = f + Math.floor((a - f) / this.params.slidesPerGroup)),
            (c = this.rtlTranslate ? this.translate : -this.translate),
            c >= this.snapGrid[b]
              ? ((e = this.snapGrid[b]),
                c - e > (this.snapGrid[b + 1] - e) * d &&
                  (a += this.params.slidesPerGroup))
              : ((i = this.snapGrid[b - 1]),
                c - i <= (this.snapGrid[b] - i) * d &&
                  (a -= this.params.slidesPerGroup)),
            (a = Math.max(a, 0)),
            (a = Math.min(a, this.slidesGrid.length - 1)),
            this.slideTo(a, g, h, j)
          );
        },
        slideToClickedSlide: function () {
          var f,
            c = this,
            e = c.params,
            h = c.$wrapperEl,
            g =
              "auto" === e.slidesPerView
                ? c.slidesPerViewDynamic()
                : e.slidesPerView,
            d = c.clickedIndex;
          if (e.loop) {
            if (c.animating) return;
            (f = parseInt(
              b(c.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              e.centeredSlides
                ? d < c.loopedSlides - g / 2 ||
                  d > c.slides.length - c.loopedSlides + g / 2
                  ? (c.loopFix(),
                    (d = h
                      .children(
                        "." +
                          e.slideClass +
                          '[data-swiper-slide-index="' +
                          f +
                          '"]:not(.' +
                          e.slideDuplicateClass +
                          ")"
                      )
                      .eq(0)
                      .index()),
                    a.nextTick(function () {
                      c.slideTo(d);
                    }))
                  : c.slideTo(d)
                : d > c.slides.length - g
                ? (c.loopFix(),
                  (d = h
                    .children(
                      "." +
                        e.slideClass +
                        '[data-swiper-slide-index="' +
                        f +
                        '"]:not(.' +
                        e.slideDuplicateClass +
                        ")"
                    )
                    .eq(0)
                    .index()),
                  a.nextTick(function () {
                    c.slideTo(d);
                  }))
                : c.slideTo(d);
          } else c.slideTo(d);
        },
      }),
      (aj = {
        loopCreate: function () {
          var c = this,
            a = c.params,
            f = c.$wrapperEl,
            e,
            l,
            k,
            m,
            h,
            i,
            j,
            g;
          if (
            (f
              .children("." + a.slideClass + "." + a.slideDuplicateClass)
              .remove(),
            (e = f.children("." + a.slideClass)),
            a.loopFillGroupWithBlank)
          )
            if (
              ((l = a.slidesPerGroup - (e.length % a.slidesPerGroup)),
              l !== a.slidesPerGroup)
            ) {
              for (k = 0; k < l; k += 1)
                (m = b(d.createElement("div")).addClass(
                  a.slideClass + " " + a.slideBlankClass
                )),
                  f.append(m);
              e = f.children("." + a.slideClass);
            }
          "auto" !== a.slidesPerView ||
            a.loopedSlides ||
            (a.loopedSlides = e.length),
            (c.loopedSlides = Math.ceil(
              parseFloat(a.loopedSlides || a.slidesPerView, 10)
            )),
            (c.loopedSlides += a.loopAdditionalSlides),
            c.loopedSlides > e.length && (c.loopedSlides = e.length),
            (h = []),
            (i = []),
            e.each(function (a, d) {
              var f = b(d);
              a < c.loopedSlides && i.push(d),
                a < e.length && a >= e.length - c.loopedSlides && h.push(d),
                f.attr("data-swiper-slide-index", a);
            });
          for (j = 0; j < i.length; j += 1)
            f.append(b(i[j].cloneNode(!0)).addClass(a.slideDuplicateClass));
          for (g = h.length - 1; g >= 0; g -= 1)
            f.prepend(b(h[g].cloneNode(!0)).addClass(a.slideDuplicateClass));
        },
        loopFix: function () {
          var a, c, e, b, g, h, i, f, d;
          this.emit("beforeLoopFix"),
            (c = this.activeIndex),
            (e = this.slides),
            (b = this.loopedSlides),
            (g = this.allowSlidePrev),
            (h = this.allowSlideNext),
            (i = this.snapGrid),
            (f = this.rtlTranslate),
            (this.allowSlidePrev = !0),
            (this.allowSlideNext = !0),
            (d = -i[c] - this.getTranslate()),
            c < b
              ? ((a = e.length - 3 * b + c),
                (a += b),
                this.slideTo(a, 0, !1, !0) &&
                  0 !== d &&
                  this.setTranslate((f ? -this.translate : this.translate) - d))
              : c >= e.length - b &&
                ((a = -e.length + c + b),
                (a += b),
                this.slideTo(a, 0, !1, !0) &&
                  0 !== d &&
                  this.setTranslate(
                    (f ? -this.translate : this.translate) - d
                  )),
            (this.allowSlidePrev = g),
            (this.allowSlideNext = h),
            this.emit("loopFix");
        },
        loopDestroy: function () {
          var b = this.$wrapperEl,
            a = this.params,
            c = this.slides;
          b
            .children(
              "." +
                a.slideClass +
                "." +
                a.slideDuplicateClass +
                ",." +
                a.slideClass +
                "." +
                a.slideBlankClass
            )
            .remove(),
            c.removeAttr("data-swiper-slide-index");
        },
      }),
      (ai = {
        setGrabCursor: function (b) {
          if (
            !(
              e.touch ||
              !this.params.simulateTouch ||
              (this.params.watchOverflow && this.isLocked) ||
              this.params.cssMode
            )
          ) {
            var a = this.el;
            (a.style.cursor = "move"),
              (a.style.cursor = b ? "-webkit-grabbing" : "-webkit-grab"),
              (a.style.cursor = b ? "-moz-grabbin" : "-moz-grab"),
              (a.style.cursor = b ? "grabbing" : "grab");
          }
        },
        unsetGrabCursor: function () {
          e.touch ||
            (this.params.watchOverflow && this.isLocked) ||
            this.params.cssMode ||
            (this.el.style.cursor = "");
        },
      }),
      (ah = {
        appendSlide: function (a) {
          var d = this.$wrapperEl,
            c = this.params,
            b;
          if (
            (c.loop && this.loopDestroy(),
            "object" == typeof a && "length" in a)
          )
            for (b = 0; b < a.length; b += 1) a[b] && d.append(a[b]);
          else d.append(a);
          c.loop && this.loopCreate(),
            (c.observer && e.observer) || this.update();
        },
        prependSlide: function (a) {
          var c = this.params,
            d = this.$wrapperEl,
            f = this.activeIndex,
            g,
            b;
          if (
            (c.loop && this.loopDestroy(),
            (g = f + 1),
            "object" == typeof a && "length" in a)
          ) {
            for (b = 0; b < a.length; b += 1) a[b] && d.prepend(a[b]);
            g = f + a.length;
          } else d.prepend(a);
          c.loop && this.loopCreate(),
            (c.observer && e.observer) || this.update(),
            this.slideTo(g, 0, !1);
        },
        addSlide: function (c, a) {
          var f = this.$wrapperEl,
            d = this.params,
            b = this.activeIndex,
            m,
            i,
            j,
            k,
            l,
            g,
            h;
          if (
            (d.loop &&
              ((b -= this.loopedSlides),
              this.loopDestroy(),
              (this.slides = f.children("." + d.slideClass))),
            (m = this.slides.length),
            c <= 0)
          )
            this.prependSlide(a);
          else if (c >= m) this.appendSlide(a);
          else {
            for (i = b > c ? b + 1 : b, j = [], k = m - 1; k >= c; k -= 1)
              (l = this.slides.eq(k)), l.remove(), j.unshift(l);
            if ("object" == typeof a && "length" in a) {
              for (g = 0; g < a.length; g += 1) a[g] && f.append(a[g]);
              i = b > c ? b + a.length : b;
            } else f.append(a);
            for (h = 0; h < j.length; h += 1) f.append(j[h]);
            d.loop && this.loopCreate(),
              (d.observer && e.observer) || this.update(),
              d.loop
                ? this.slideTo(i + this.loopedSlides, 0, !1)
                : this.slideTo(i, 0, !1);
          }
        },
        removeSlide: function (c) {
          var d = this.params,
            h = this.$wrapperEl,
            g = this.activeIndex,
            b,
            a,
            f;
          if (
            (d.loop &&
              ((g -= this.loopedSlides),
              this.loopDestroy(),
              (this.slides = h.children("." + d.slideClass))),
            (a = g),
            "object" == typeof c && "length" in c)
          ) {
            for (f = 0; f < c.length; f += 1)
              (b = c[f]),
                this.slides[b] && this.slides.eq(b).remove(),
                b < a && (a -= 1);
            a = Math.max(a, 0);
          } else
            (b = c),
              this.slides[b] && this.slides.eq(b).remove(),
              b < a && (a -= 1),
              (a = Math.max(a, 0));
          d.loop && this.loopCreate(),
            (d.observer && e.observer) || this.update(),
            d.loop
              ? this.slideTo(a + this.loopedSlides, 0, !1)
              : this.slideTo(a, 0, !1);
        },
        removeAllSlides: function () {
          for (var b = [], a = 0; a < this.slides.length; a += 1) b.push(a);
          this.removeSlide(b);
        },
      }),
      (i =
        ((H = c.navigator.platform),
        (h = c.navigator.userAgent),
        (f = {
          ios: !1,
          android: !1,
          androidChrome: !1,
          desktop: !1,
          iphone: !1,
          ipod: !1,
          ipad: !1,
          edge: !1,
          ie: !1,
          firefox: !1,
          macos: !1,
          windows: !1,
          cordova: !(!c.cordova && !c.phonegap),
          phonegap: !(!c.cordova && !c.phonegap),
          electron: !1,
        }),
        (t = c.screen.width),
        (u = c.screen.height),
        (D = h.match(/(Android);?[\s\/]+([\d.]+)?/)),
        (o = h.match(/(iPad).*OS\s([\d_]+)/)),
        (p = h.match(/(iPod)(.*OS\s([\d_]+))?/)),
        (v = !o && h.match(/(iPhone\sOS|iOS)\s([\d_]+)/)),
        (_ = h.indexOf("MSIE ") >= 0 || h.indexOf("Trident/") >= 0),
        (O = h.indexOf("Edge/") >= 0),
        (Z = h.indexOf("Gecko/") >= 0 && h.indexOf("Firefox/") >= 0),
        (F = "Win32" === H),
        (G = h.toLowerCase().indexOf("electron") >= 0),
        (x = "MacIntel" === H),
        !o &&
          x &&
          e.touch &&
          ((1024 === t && 1366 === u) ||
            (834 === t && 1194 === u) ||
            (834 === t && 1112 === u) ||
            (768 === t && 1024 === u)) &&
          ((o = h.match(/(Version)\/([\d.]+)/)), (x = !1)),
        (f.ie = _),
        (f.edge = O),
        (f.firefox = Z),
        D &&
          !F &&
          ((f.os = "android"),
          (f.osVersion = D[2]),
          (f.android = !0),
          (f.androidChrome = h.toLowerCase().indexOf("chrome") >= 0)),
        (o || v || p) && ((f.os = "ios"), (f.ios = !0)),
        v && !p && ((f.osVersion = v[2].replace(/_/g, ".")), (f.iphone = !0)),
        o && ((f.osVersion = o[2].replace(/_/g, ".")), (f.ipad = !0)),
        p &&
          ((f.osVersion = p[3] ? p[3].replace(/_/g, ".") : null),
          (f.ipod = !0)),
        f.ios &&
          f.osVersion &&
          h.indexOf("Version/") >= 0 &&
          "10" === f.osVersion.split(".")[0] &&
          (f.osVersion = h.toLowerCase().split("version/")[1].split(" ")[0]),
        (f.webView =
          !(
            !(v || o || p) ||
            (!h.match(/.*AppleWebKit(?!.*Safari)/i) && !c.navigator.standalone)
          ) ||
          (c.matchMedia && c.matchMedia("(display-mode: standalone)").matches)),
        (f.webview = f.webView),
        (f.standalone = f.webView),
        (f.desktop = !(f.ios || f.android) || G),
        f.desktop &&
          ((f.electron = G),
          (f.macos = x),
          (f.windows = F),
          f.macos && (f.os = "macos"),
          f.windows && (f.os = "windows")),
        (f.pixelRatio = c.devicePixelRatio || 1),
        f));
    function aw(m) {
      var g = this.touchEventsData,
        f = this.params,
        h = this.touches,
        e,
        i,
        j,
        n,
        o,
        k,
        l,
        p;
      (!this.animating || !f.preventInteractionOnTransition) &&
        ((e = m),
        e.originalEvent && (e = e.originalEvent),
        (i = b(e.target)),
        ("wrapper" !== f.touchEventsTarget ||
          i.closest(this.wrapperEl).length) &&
          ((g.isTouchEvent = "touchstart" === e.type),
          (g.isTouchEvent || !("which" in e) || 3 !== e.which) &&
            !(
              (!g.isTouchEvent && "button" in e && e.button > 0) ||
              (g.isTouched && g.isMoved)
            )) &&
          (f.noSwiping &&
          i.closest(
            f.noSwipingSelector ? f.noSwipingSelector : "." + f.noSwipingClass
          )[0]
            ? (this.allowClick = !0)
            : (!f.swipeHandler || i.closest(f.swipeHandler)[0]) &&
              ((h.currentX =
                "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (h.currentY =
                "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY),
              (j = h.currentX),
              (n = h.currentY),
              (o = f.edgeSwipeDetection || f.iOSEdgeSwipeDetection),
              (k = f.edgeSwipeThreshold || f.iOSEdgeSwipeThreshold),
              (!o || !(j <= k || j >= c.screen.width - k)) &&
                (a.extend(g, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0,
                }),
                (h.startX = j),
                (h.startY = n),
                (g.touchStartTime = a.now()),
                (this.allowClick = !0),
                this.updateSize(),
                (this.swipeDirection = void 0),
                f.threshold > 0 && (g.allowThresholdMove = !1),
                "touchstart" !== e.type &&
                  ((l = !0),
                  i.is(g.formElements) && (l = !1),
                  d.activeElement &&
                    b(d.activeElement).is(g.formElements) &&
                    d.activeElement !== i[0] &&
                    d.activeElement.blur(),
                  (p = l && this.allowTouchMove && f.touchStartPreventDefault),
                  (f.touchStartForcePreventDefault || p) && e.preventDefault()),
                this.emit("touchStart", e)))));
    }
    function av(r) {
      var c = this.touchEventsData,
        g = this.params,
        e = this.touches,
        q = this.rtlTranslate,
        f = r,
        p,
        i,
        j,
        l,
        k,
        o,
        h,
        n,
        m;
      if ((f.originalEvent && (f = f.originalEvent), c.isTouched)) {
        if (!c.isTouchEvent || "touchmove" === f.type) {
          if (
            ((p =
              "touchmove" === f.type &&
              f.targetTouches &&
              (f.targetTouches[0] || f.changedTouches[0])),
            (i = "touchmove" === f.type ? p.pageX : f.pageX),
            (j = "touchmove" === f.type ? p.pageY : f.pageY),
            f.preventedByNestedSwiper)
          )
            return (e.startX = i), void (e.startY = j);
          if (!this.allowTouchMove)
            return (
              (this.allowClick = !1),
              void (
                c.isTouched &&
                (a.extend(e, {
                  startX: i,
                  startY: j,
                  currentX: i,
                  currentY: j,
                }),
                (c.touchStartTime = a.now()))
              )
            );
          if (c.isTouchEvent && g.touchReleaseOnEdges && !g.loop)
            if (this.isVertical()) {
              if (
                (j < e.startY && this.translate <= this.maxTranslate()) ||
                (j > e.startY && this.translate >= this.minTranslate())
              )
                return (c.isTouched = !1), void (c.isMoved = !1);
            } else if (
              (i < e.startX && this.translate <= this.maxTranslate()) ||
              (i > e.startX && this.translate >= this.minTranslate())
            )
              return;
          if (
            c.isTouchEvent &&
            d.activeElement &&
            f.target === d.activeElement &&
            b(f.target).is(c.formElements)
          )
            return (c.isMoved = !0), void (this.allowClick = !1);
          if (
            (c.allowTouchCallbacks && this.emit("touchMove", f),
            !(f.targetTouches && f.targetTouches.length > 1))
          )
            if (
              ((e.currentX = i),
              (e.currentY = j),
              (l = e.currentX - e.startX),
              (k = e.currentY - e.startY),
              !(
                this.params.threshold &&
                Math.sqrt(Math.pow(l, 2) + Math.pow(k, 2)) <
                  this.params.threshold
              ))
            )
              if (
                (void 0 === c.isScrolling &&
                  ((this.isHorizontal() && e.currentY === e.startY) ||
                  (this.isVertical() && e.currentX === e.startX)
                    ? (c.isScrolling = !1)
                    : l * l + k * k >= 25 &&
                      ((o =
                        (180 * Math.atan2(Math.abs(k), Math.abs(l))) / Math.PI),
                      (c.isScrolling = this.isHorizontal()
                        ? o > g.touchAngle
                        : 90 - o > g.touchAngle))),
                c.isScrolling && this.emit("touchMoveOpposite", f),
                void 0 === c.startMoving &&
                  ((e.currentX === e.startX && e.currentY === e.startY) ||
                    (c.startMoving = !0)),
                c.isScrolling)
              )
                c.isTouched = !1;
              else if (c.startMoving) {
                if (
                  ((this.allowClick = !1),
                  !g.cssMode && f.cancelable && f.preventDefault(),
                  g.touchMoveStopPropagation &&
                    !g.nested &&
                    f.stopPropagation(),
                  c.isMoved ||
                    (g.loop && this.loopFix(),
                    (c.startTranslate = this.getTranslate()),
                    this.setTransition(0),
                    this.animating &&
                      this.$wrapperEl.trigger(
                        "webkitTransitionEnd transitionend"
                      ),
                    (c.allowMomentumBounce = !1),
                    !g.grabCursor ||
                      (!0 !== this.allowSlideNext &&
                        !0 !== this.allowSlidePrev) ||
                      this.setGrabCursor(!0),
                    this.emit("sliderFirstMove", f)),
                  this.emit("sliderMove", f),
                  (c.isMoved = !0),
                  (h = this.isHorizontal() ? l : k),
                  (e.diff = h),
                  (h *= g.touchRatio),
                  q && (h = -h),
                  (this.swipeDirection = h > 0 ? "prev" : "next"),
                  (c.currentTranslate = h + c.startTranslate),
                  (n = !0),
                  (m = g.resistanceRatio),
                  g.touchReleaseOnEdges && (m = 0),
                  h > 0 && c.currentTranslate > this.minTranslate()
                    ? ((n = !1),
                      g.resistance &&
                        (c.currentTranslate =
                          this.minTranslate() -
                          1 +
                          Math.pow(
                            -this.minTranslate() + c.startTranslate + h,
                            m
                          )))
                    : h < 0 &&
                      c.currentTranslate < this.maxTranslate() &&
                      ((n = !1),
                      g.resistance &&
                        (c.currentTranslate =
                          this.maxTranslate() +
                          1 -
                          Math.pow(
                            this.maxTranslate() - c.startTranslate - h,
                            m
                          ))),
                  n && (f.preventedByNestedSwiper = !0),
                  !this.allowSlideNext &&
                    "next" === this.swipeDirection &&
                    c.currentTranslate < c.startTranslate &&
                    (c.currentTranslate = c.startTranslate),
                  !this.allowSlidePrev &&
                    "prev" === this.swipeDirection &&
                    c.currentTranslate > c.startTranslate &&
                    (c.currentTranslate = c.startTranslate),
                  g.threshold > 0)
                ) {
                  if (!(Math.abs(h) > g.threshold || c.allowThresholdMove))
                    return void (c.currentTranslate = c.startTranslate);
                  if (!c.allowThresholdMove)
                    return (
                      (c.allowThresholdMove = !0),
                      (e.startX = e.currentX),
                      (e.startY = e.currentY),
                      (c.currentTranslate = c.startTranslate),
                      void (e.diff = this.isHorizontal()
                        ? e.currentX - e.startX
                        : e.currentY - e.startY)
                    );
                }
                g.followFinger &&
                  !g.cssMode &&
                  ((g.freeMode ||
                    g.watchSlidesProgress ||
                    g.watchSlidesVisibility) &&
                    (this.updateActiveIndex(), this.updateSlidesClasses()),
                  g.freeMode &&
                    (0 === c.velocities.length &&
                      c.velocities.push({
                        position: e[this.isHorizontal() ? "startX" : "startY"],
                        time: c.touchStartTime,
                      }),
                    c.velocities.push({
                      position:
                        e[this.isHorizontal() ? "currentX" : "currentY"],
                      time: a.now(),
                    })),
                  this.updateProgress(c.currentTranslate),
                  this.setTranslate(c.currentTranslate));
              }
        }
      } else c.startMoving && c.isScrolling && this.emit("touchMoveOpposite", f);
    }
    function ax(I) {
      var b = this,
        d = b.touchEventsData,
        c = b.params,
        F = b.touches,
        q = b.rtlTranslate,
        v = b.$wrapperEl,
        h = b.slidesGrid,
        j = b.snapGrid,
        i = I,
        k,
        A,
        s,
        y,
        D,
        G,
        z,
        l,
        H,
        e,
        p,
        w,
        x,
        o,
        m,
        n,
        B,
        C,
        g,
        t,
        f,
        u,
        E,
        r;
      if (
        (i.originalEvent && (i = i.originalEvent),
        d.allowTouchCallbacks && b.emit("touchEnd", i),
        (d.allowTouchCallbacks = !1),
        !d.isTouched)
      )
        return (
          d.isMoved && c.grabCursor && b.setGrabCursor(!1),
          (d.isMoved = !1),
          void (d.startMoving = !1)
        );
      if (
        (c.grabCursor &&
          d.isMoved &&
          d.isTouched &&
          (!0 === b.allowSlideNext || !0 === b.allowSlidePrev) &&
          b.setGrabCursor(!1),
        (A = a.now()),
        (s = A - d.touchStartTime),
        b.allowClick &&
          (b.updateClickedSlide(i),
          b.emit("tap click", i),
          s < 300 &&
            A - d.lastClickTime < 300 &&
            b.emit("doubleTap doubleClick", i)),
        (d.lastClickTime = a.now()),
        a.nextTick(function () {
          b.destroyed || (b.allowClick = !0);
        }),
        !d.isTouched ||
          !d.isMoved ||
          !b.swipeDirection ||
          0 === F.diff ||
          d.currentTranslate === d.startTranslate)
      )
        return (d.isTouched = !1), (d.isMoved = !1), void (d.startMoving = !1);
      if (
        ((d.isTouched = !1),
        (d.isMoved = !1),
        (d.startMoving = !1),
        (k = c.followFinger
          ? q
            ? b.translate
            : -b.translate
          : -d.currentTranslate),
        !c.cssMode)
      )
        if (c.freeMode) {
          if (k < -b.minTranslate()) return void b.slideTo(b.activeIndex);
          if (k > -b.maxTranslate())
            return void (b.slides.length < j.length
              ? b.slideTo(j.length - 1)
              : b.slideTo(b.slides.length - 1));
          if (c.freeModeMomentum) {
            if (
              (d.velocities.length > 1
                ? ((y = d.velocities.pop()),
                  (D = d.velocities.pop()),
                  (G = y.position - D.position),
                  (z = y.time - D.time),
                  (b.velocity = G / z),
                  (b.velocity /= 2),
                  Math.abs(b.velocity) < c.freeModeMinimumVelocity &&
                    (b.velocity = 0),
                  (z > 150 || a.now() - y.time > 300) && (b.velocity = 0))
                : (b.velocity = 0),
              (b.velocity *= c.freeModeMomentumVelocityRatio),
              (d.velocities.length = 0),
              (l = 1e3 * c.freeModeMomentumRatio),
              (H = b.velocity * l),
              (e = b.translate + H),
              q && (e = -e),
              (x = !1),
              (o = 20 * Math.abs(b.velocity) * c.freeModeMomentumBounceRatio),
              e < b.maxTranslate())
            )
              c.freeModeMomentumBounce
                ? (e + b.maxTranslate() < -o && (e = b.maxTranslate() - o),
                  (p = b.maxTranslate()),
                  (x = !0),
                  (d.allowMomentumBounce = !0))
                : (e = b.maxTranslate()),
                c.loop && c.centeredSlides && (w = !0);
            else if (e > b.minTranslate())
              c.freeModeMomentumBounce
                ? (e - b.minTranslate() > o && (e = b.minTranslate() + o),
                  (p = b.minTranslate()),
                  (x = !0),
                  (d.allowMomentumBounce = !0))
                : (e = b.minTranslate()),
                c.loop && c.centeredSlides && (w = !0);
            else if (c.freeModeSticky) {
              for (m, n = 0; n < j.length; n += 1)
                if (j[n] > -e) {
                  m = n;
                  break;
                }
              e = -(e =
                Math.abs(j[m] - e) < Math.abs(j[m - 1] - e) ||
                "next" === b.swipeDirection
                  ? j[m]
                  : j[m - 1]);
            }
            if (
              (w &&
                b.once("transitionEnd", function () {
                  b.loopFix();
                }),
              0 !== b.velocity)
            )
              (l = q
                ? Math.abs((-e - b.translate) / b.velocity)
                : Math.abs((e - b.translate) / b.velocity)),
                c.freeModeSticky &&
                  ((B = Math.abs((q ? -e : e) - b.translate)),
                  (C = b.slidesSizesGrid[b.activeIndex]),
                  (l =
                    B < C
                      ? c.speed
                      : B < 2 * C
                      ? 1.5 * c.speed
                      : 2.5 * c.speed));
            else if (c.freeModeSticky) return void b.slideToClosest();
            c.freeModeMomentumBounce && x
              ? (b.updateProgress(p),
                b.setTransition(l),
                b.setTranslate(e),
                b.transitionStart(!0, b.swipeDirection),
                (b.animating = !0),
                v.transitionEnd(function () {
                  b &&
                    !b.destroyed &&
                    d.allowMomentumBounce &&
                    (b.emit("momentumBounce"),
                    b.setTransition(c.speed),
                    setTimeout(function () {
                      b.setTranslate(p),
                        v.transitionEnd(function () {
                          b && !b.destroyed && b.transitionEnd();
                        });
                    }, 0));
                }))
              : b.velocity
              ? (b.updateProgress(e),
                b.setTransition(l),
                b.setTranslate(e),
                b.transitionStart(!0, b.swipeDirection),
                b.animating ||
                  ((b.animating = !0),
                  v.transitionEnd(function () {
                    b && !b.destroyed && b.transitionEnd();
                  })))
              : b.updateProgress(e),
              b.updateActiveIndex(),
              b.updateSlidesClasses();
          } else if (c.freeModeSticky) return void b.slideToClosest();
          (!c.freeModeMomentum || s >= c.longSwipesMs) &&
            (b.updateProgress(),
            b.updateActiveIndex(),
            b.updateSlidesClasses());
        } else {
          for (
            g = 0, t = b.slidesSizesGrid[0], f = 0;
            f < h.length;
            f += f < c.slidesPerGroupSkip ? 1 : c.slidesPerGroup
          )
            (u = f < c.slidesPerGroupSkip - 1 ? 1 : c.slidesPerGroup),
              void 0 !== h[f + u]
                ? k >= h[f] && k < h[f + u] && ((g = f), (t = h[f + u] - h[f]))
                : k >= h[f] &&
                  ((g = f), (t = h[h.length - 1] - h[h.length - 2]));
          if (
            ((E = (k - h[g]) / t),
            (r = g < c.slidesPerGroupSkip - 1 ? 1 : c.slidesPerGroup),
            s > c.longSwipesMs)
          ) {
            if (!c.longSwipes) return void b.slideTo(b.activeIndex);
            "next" === b.swipeDirection &&
              (E >= c.longSwipesRatio ? b.slideTo(g + r) : b.slideTo(g)),
              "prev" === b.swipeDirection &&
                (E > 1 - c.longSwipesRatio ? b.slideTo(g + r) : b.slideTo(g));
          } else {
            if (!c.shortSwipes) return void b.slideTo(b.activeIndex);
            b.navigation &&
            (i.target === b.navigation.nextEl ||
              i.target === b.navigation.prevEl)
              ? i.target === b.navigation.nextEl
                ? b.slideTo(g + r)
                : b.slideTo(g)
              : ("next" === b.swipeDirection && b.slideTo(g + r),
                "prev" === b.swipeDirection && b.slideTo(g));
          }
        }
    }
    function N() {
      var a = this.params,
        b = this.el,
        c,
        d,
        e;
      (!b || 0 !== b.offsetWidth) &&
        (a.breakpoints && this.setBreakpoint(),
        (c = this.allowSlideNext),
        (d = this.allowSlidePrev),
        (e = this.snapGrid),
        (this.allowSlideNext = !0),
        (this.allowSlidePrev = !0),
        this.updateSize(),
        this.updateSlides(),
        this.updateSlidesClasses(),
        ("auto" === a.slidesPerView || a.slidesPerView > 1) &&
        this.isEnd &&
        !this.isBeginning &&
        !this.params.centeredSlides
          ? this.slideTo(this.slides.length - 1, 0, !1, !0)
          : this.slideTo(this.activeIndex, 0, !1, !0),
        this.autoplay &&
          this.autoplay.running &&
          this.autoplay.paused &&
          this.autoplay.run(),
        (this.allowSlidePrev = d),
        (this.allowSlideNext = c),
        this.params.watchOverflow &&
          e !== this.snapGrid &&
          this.checkOverflow());
    }
    function au(a) {
      this.allowClick ||
        (this.params.preventClicks && a.preventDefault(),
        this.params.preventClicksPropagation &&
          this.animating &&
          (a.stopPropagation(), a.stopImmediatePropagation()));
    }
    function at() {
      var a = this.wrapperEl,
        b = this.rtlTranslate,
        c;
      (this.previousTranslate = this.translate),
        this.isHorizontal()
          ? (this.translate = b
              ? a.scrollWidth - a.offsetWidth - a.scrollLeft
              : -a.scrollLeft)
          : (this.translate = -a.scrollTop),
        -0 === this.translate && (this.translate = 0),
        this.updateActiveIndex(),
        this.updateSlidesClasses(),
        (c = this.maxTranslate() - this.minTranslate()),
        (0 === c ? 0 : (this.translate - this.minTranslate()) / c) !==
          this.progress &&
          this.updateProgress(b ? -this.translate : this.translate),
        this.emit("setTranslate", this.translate, !1);
    }
    $ = !1;
    function ar() {}
    return (
      (S = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: 0.02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
      }),
      (L = {
        update: an,
        translate: am,
        transition: al,
        slide: ak,
        loop: aj,
        grabCursor: ai,
        manipulation: ah,
        events: {
          attachEvents: function () {
            var a = this.params,
              b = this.touchEvents,
              c = this.el,
              h = this.wrapperEl,
              f,
              g;
            (this.onTouchStart = aw.bind(this)),
              (this.onTouchMove = av.bind(this)),
              (this.onTouchEnd = ax.bind(this)),
              a.cssMode && (this.onScroll = at.bind(this)),
              (this.onClick = au.bind(this)),
              (f = !!a.nested),
              !e.touch && e.pointerEvents
                ? (c.addEventListener(b.start, this.onTouchStart, !1),
                  d.addEventListener(b.move, this.onTouchMove, f),
                  d.addEventListener(b.end, this.onTouchEnd, !1))
                : (e.touch &&
                    ((g = !(
                      "touchstart" !== b.start ||
                      !e.passiveListener ||
                      !a.passiveListeners
                    ) && { passive: !0, capture: !1 }),
                    c.addEventListener(b.start, this.onTouchStart, g),
                    c.addEventListener(
                      b.move,
                      this.onTouchMove,
                      e.passiveListener ? { passive: !1, capture: f } : f
                    ),
                    c.addEventListener(b.end, this.onTouchEnd, g),
                    b.cancel &&
                      c.addEventListener(b.cancel, this.onTouchEnd, g),
                    $ || (d.addEventListener("touchstart", ar), ($ = !0))),
                  ((a.simulateTouch && !i.ios && !i.android) ||
                    (a.simulateTouch && !e.touch && i.ios)) &&
                    (c.addEventListener("mousedown", this.onTouchStart, !1),
                    d.addEventListener("mousemove", this.onTouchMove, f),
                    d.addEventListener("mouseup", this.onTouchEnd, !1))),
              (a.preventClicks || a.preventClicksPropagation) &&
                c.addEventListener("click", this.onClick, !0),
              a.cssMode && h.addEventListener("scroll", this.onScroll),
              a.updateOnWindowResize
                ? this.on(
                    i.ios || i.android
                      ? "resize orientationchange observerUpdate"
                      : "resize observerUpdate",
                    N,
                    !0
                  )
                : this.on("observerUpdate", N, !0);
          },
          detachEvents: function () {
            var b = this.params,
              a = this.touchEvents,
              c = this.el,
              h = this.wrapperEl,
              f = !!b.nested,
              g;
            !e.touch && e.pointerEvents
              ? (c.removeEventListener(a.start, this.onTouchStart, !1),
                d.removeEventListener(a.move, this.onTouchMove, f),
                d.removeEventListener(a.end, this.onTouchEnd, !1))
              : (e.touch &&
                  ((g = !(
                    "onTouchStart" !== a.start ||
                    !e.passiveListener ||
                    !b.passiveListeners
                  ) && { passive: !0, capture: !1 }),
                  c.removeEventListener(a.start, this.onTouchStart, g),
                  c.removeEventListener(a.move, this.onTouchMove, f),
                  c.removeEventListener(a.end, this.onTouchEnd, g),
                  a.cancel &&
                    c.removeEventListener(a.cancel, this.onTouchEnd, g)),
                ((b.simulateTouch && !i.ios && !i.android) ||
                  (b.simulateTouch && !e.touch && i.ios)) &&
                  (c.removeEventListener("mousedown", this.onTouchStart, !1),
                  d.removeEventListener("mousemove", this.onTouchMove, f),
                  d.removeEventListener("mouseup", this.onTouchEnd, !1))),
              (b.preventClicks || b.preventClicksPropagation) &&
                c.removeEventListener("click", this.onClick, !0),
              b.cssMode && h.removeEventListener("scroll", this.onScroll),
              this.off(
                i.ios || i.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                N
              );
          },
        },
        breakpoints: {
          setBreakpoint: function () {
            var m = this.activeIndex,
              j = this.initialized,
              h = this.loopedSlides,
              b,
              g,
              d,
              e,
              f,
              c,
              k,
              l,
              i,
              n;
            void 0 === h && (h = 0),
              (b = this.params),
              (g = this.$el),
              (d = b.breakpoints),
              d &&
                (!d || 0 !== Object.keys(d).length) &&
                ((e = this.getBreakpoint(d)),
                e &&
                  this.currentBreakpoint !== e &&
                  ((f = e in d ? d[e] : void 0),
                  f &&
                    [
                      "slidesPerView",
                      "spaceBetween",
                      "slidesPerGroup",
                      "slidesPerGroupSkip",
                      "slidesPerColumn",
                    ].forEach(function (b) {
                      var a = f[b];
                      void 0 !== a &&
                        (f[b] =
                          "slidesPerView" !== b ||
                          ("AUTO" !== a && "auto" !== a)
                            ? "slidesPerView" === b
                              ? parseFloat(a)
                              : parseInt(a, 10)
                            : "auto");
                    }),
                  (c = f || this.originalParams),
                  (k = b.slidesPerColumn > 1),
                  (l = c.slidesPerColumn > 1),
                  k && !l
                    ? g.removeClass(
                        b.containerModifierClass +
                          "multirow " +
                          b.containerModifierClass +
                          "multirow-column"
                      )
                    : !k &&
                      l &&
                      (g.addClass(b.containerModifierClass + "multirow"),
                      "column" === c.slidesPerColumnFill &&
                        g.addClass(
                          b.containerModifierClass + "multirow-column"
                        )),
                  (i = c.direction && c.direction !== b.direction),
                  (n = b.loop && (c.slidesPerView !== b.slidesPerView || i)),
                  i && j && this.changeDirection(),
                  a.extend(this.params, c),
                  a.extend(this, {
                    allowTouchMove: this.params.allowTouchMove,
                    allowSlideNext: this.params.allowSlideNext,
                    allowSlidePrev: this.params.allowSlidePrev,
                  }),
                  (this.currentBreakpoint = e),
                  n &&
                    j &&
                    (this.loopDestroy(),
                    this.loopCreate(),
                    this.updateSlides(),
                    this.slideTo(m - h + this.loopedSlides, 0, !1)),
                  this.emit("breakpoint", c)));
          },
          getBreakpoint: function (f) {
            var d, a, b, e, g;
            if (f) {
              (d = !1),
                (a = Object.keys(f).map(function (a) {
                  if ("string" == typeof a && 0 === a.indexOf("@")) {
                    var b = parseFloat(a.substr(1));
                    return { value: c.innerHeight * b, point: a };
                  }
                  return { value: a, point: a };
                })),
                a.sort(function (a, b) {
                  return parseInt(a.value, 10) - parseInt(b.value, 10);
                });
              for (b = 0; b < a.length; b += 1)
                (e = a[b]), (g = e.point), e.value <= c.innerWidth && (d = g);
              return d || "max";
            }
          },
        },
        checkOverflow: {
          checkOverflow: function () {
            var a = this.params,
              b = this.isLocked,
              c =
                this.slides.length > 0 &&
                a.slidesOffsetBefore +
                  a.spaceBetween * (this.slides.length - 1) +
                  this.slides[0].offsetWidth * this.slides.length;
            a.slidesOffsetBefore && a.slidesOffsetAfter && c
              ? (this.isLocked = c <= this.size)
              : (this.isLocked = 1 === this.snapGrid.length),
              (this.allowSlideNext = !this.isLocked),
              (this.allowSlidePrev = !this.isLocked),
              b !== this.isLocked &&
                this.emit(this.isLocked ? "lock" : "unlock"),
              b &&
                b !== this.isLocked &&
                ((this.isEnd = !1),
                this.navigation && this.navigation.update());
          },
        },
        classes: {
          addClasses: function () {
            var c = this.classNames,
              b = this.params,
              d = this.rtl,
              e = this.$el,
              a = [];
            a.push("initialized"),
              a.push(b.direction),
              b.freeMode && a.push("free-mode"),
              b.autoHeight && a.push("autoheight"),
              d && a.push("rtl"),
              b.slidesPerColumn > 1 &&
                (a.push("multirow"),
                "column" === b.slidesPerColumnFill &&
                  a.push("multirow-column")),
              i.android && a.push("android"),
              i.ios && a.push("ios"),
              b.cssMode && a.push("css-mode"),
              a.forEach(function (a) {
                c.push(b.containerModifierClass + a);
              }),
              e.addClass(c.join(" "));
          },
          removeClasses: function () {
            var a = this.$el,
              b = this.classNames;
            a.removeClass(b.join(" "));
          },
        },
        images: {
          loadImage: function (i, e, f, g, j, h) {
            var a;
            function d() {
              h && h();
            }
            b(i).parent("picture")[0] || (i.complete && j)
              ? d()
              : e
              ? (((a = new c.Image()).onload = d),
                (a.onerror = d),
                g && (a.sizes = g),
                f && (a.srcset = f),
                e && (a.src = e))
              : d();
          },
          preloadImages: function () {
            var a = this,
              c,
              b;
            function d() {
              null != a &&
                a &&
                !a.destroyed &&
                (void 0 !== a.imagesLoaded && (a.imagesLoaded += 1),
                a.imagesLoaded === a.imagesToLoad.length &&
                  (a.params.updateOnImagesReady && a.update(),
                  a.emit("imagesReady")));
            }
            a.imagesToLoad = a.$el.find("img");
            for (c = 0; c < a.imagesToLoad.length; c += 1)
              (b = a.imagesToLoad[c]),
                a.loadImage(
                  b,
                  b.currentSrc || b.getAttribute("src"),
                  b.srcset || b.getAttribute("srcset"),
                  b.sizes || b.getAttribute("sizes"),
                  !0,
                  d
                );
          },
        },
      }),
      (C = {}),
      (k = (function (d) {
        function c() {
          for (
            var o, h, g, j = [], n = arguments.length, f, p, i, q, l, k, m;
            n--;

          )
            j[n] = arguments[n];
          if (
            (1 === j.length && j[0].constructor && j[0].constructor === Object
              ? (g = j[0])
              : ((h = (o = j)[0]), (g = o[1])),
            g || (g = {}),
            (g = a.extend({}, g)),
            h && !g.el && (g.el = h),
            d.call(this, g),
            Object.keys(L).forEach(function (a) {
              Object.keys(L[a]).forEach(function (b) {
                c.prototype[b] || (c.prototype[b] = L[a][b]);
              });
            }),
            (f = this),
            void 0 === f.modules && (f.modules = {}),
            Object.keys(f.modules).forEach(function (d) {
              var b = f.modules[d],
                a,
                c;
              if (b.params) {
                if (
                  ((a = Object.keys(b.params)[0]),
                  (c = b.params[a]),
                  "object" != typeof c || null === c)
                )
                  return;
                if (!(a in g) || !("enabled" in c)) return;
                !0 === g[a] && (g[a] = { enabled: !0 }),
                  "object" != typeof g[a] ||
                    "enabled" in g[a] ||
                    (g[a].enabled = !0),
                  g[a] || (g[a] = { enabled: !1 });
              }
            }),
            (p = a.extend({}, S)),
            f.useModulesParams(p),
            (f.params = a.extend({}, p, C, g)),
            (f.originalParams = a.extend({}, f.params)),
            (f.passedParams = a.extend({}, g)),
            (f.$ = b),
            (i = b(f.params.el)),
            (h = i[0]))
          )
            return i.length > 1
              ? ((q = []),
                i.each(function (e, b) {
                  var d = a.extend({}, g, { el: b });
                  q.push(new c(d));
                }),
                q)
              : ((h.swiper = f),
                i.data("swiper", f),
                h && h.shadowRoot && h.shadowRoot.querySelector
                  ? ((l = b(
                      h.shadowRoot.querySelector("." + f.params.wrapperClass)
                    )).children = function (a) {
                      return i.children(a);
                    })
                  : (l = i.children("." + f.params.wrapperClass)),
                a.extend(f, {
                  $el: i,
                  el: h,
                  $wrapperEl: l,
                  wrapperEl: l[0],
                  classNames: [],
                  slides: b(),
                  slidesGrid: [],
                  snapGrid: [],
                  slidesSizesGrid: [],
                  isHorizontal: function () {
                    return "horizontal" === f.params.direction;
                  },
                  isVertical: function () {
                    return "vertical" === f.params.direction;
                  },
                  rtl:
                    "rtl" === h.dir.toLowerCase() ||
                    "rtl" === i.css("direction"),
                  rtlTranslate:
                    "horizontal" === f.params.direction &&
                    ("rtl" === h.dir.toLowerCase() ||
                      "rtl" === i.css("direction")),
                  wrongRTL: "-webkit-box" === l.css("display"),
                  activeIndex: 0,
                  realIndex: 0,
                  isBeginning: !0,
                  isEnd: !1,
                  translate: 0,
                  previousTranslate: 0,
                  progress: 0,
                  velocity: 0,
                  animating: !1,
                  allowSlideNext: f.params.allowSlideNext,
                  allowSlidePrev: f.params.allowSlidePrev,
                  touchEvents:
                    ((k = [
                      "touchstart",
                      "touchmove",
                      "touchend",
                      "touchcancel",
                    ]),
                    (m = ["mousedown", "mousemove", "mouseup"]),
                    e.pointerEvents &&
                      (m = ["pointerdown", "pointermove", "pointerup"]),
                    (f.touchEventsTouch = {
                      start: k[0],
                      move: k[1],
                      end: k[2],
                      cancel: k[3],
                    }),
                    (f.touchEventsDesktop = {
                      start: m[0],
                      move: m[1],
                      end: m[2],
                    }),
                    e.touch || !f.params.simulateTouch
                      ? f.touchEventsTouch
                      : f.touchEventsDesktop),
                  touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    formElements:
                      "input, select, option, textarea, button, video, label",
                    lastClickTime: a.now(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0,
                  },
                  allowClick: !0,
                  allowTouchMove: f.params.allowTouchMove,
                  touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0,
                  },
                  imagesToLoad: [],
                  imagesLoaded: 0,
                }),
                f.useModules(),
                f.params.init && f.init(),
                f);
        }
        d && (c.__proto__ = d),
          (c.prototype = Object.create(d && d.prototype)),
          (c.prototype.constructor = c);
        var f = {
          extendedDefaults: { configurable: !0 },
          defaults: { configurable: !0 },
          Class: { configurable: !0 },
          $: { configurable: !0 },
        };
        return (
          (c.prototype.slidesPerViewDynamic = function () {
            var k = this.params,
              a = this.slides,
              j = this.slidesGrid,
              g = this.size,
              b = this.activeIndex,
              f = 1,
              c,
              i,
              d,
              e,
              h;
            if (k.centeredSlides) {
              for (c, i = a[b].swiperSlideSize, d = b + 1; d < a.length; d += 1)
                a[d] &&
                  !c &&
                  ((f += 1), (i += a[d].swiperSlideSize) > g && (c = !0));
              for (e = b - 1; e >= 0; e -= 1)
                a[e] &&
                  !c &&
                  ((f += 1), (i += a[e].swiperSlideSize) > g && (c = !0));
            } else
              for (h = b + 1; h < a.length; h += 1) j[h] - j[b] < g && (f += 1);
            return f;
          }),
          (c.prototype.update = function () {
            var a = this,
              d,
              b;
            a &&
              !a.destroyed &&
              ((d = a.snapGrid),
              (b = a.params),
              b.breakpoints && a.setBreakpoint(),
              a.updateSize(),
              a.updateSlides(),
              a.updateProgress(),
              a.updateSlidesClasses(),
              a.params.freeMode
                ? (c(), a.params.autoHeight && a.updateAutoHeight())
                : (("auto" === a.params.slidesPerView ||
                    a.params.slidesPerView > 1) &&
                  a.isEnd &&
                  !a.params.centeredSlides
                    ? a.slideTo(a.slides.length - 1, 0, !1, !0)
                    : a.slideTo(a.activeIndex, 0, !1, !0)) || c(),
              b.watchOverflow && d !== a.snapGrid && a.checkOverflow(),
              a.emit("update"));
            function c() {
              var b = a.rtlTranslate ? -1 * a.translate : a.translate,
                c = Math.min(Math.max(b, a.maxTranslate()), a.minTranslate());
              a.setTranslate(c), a.updateActiveIndex(), a.updateSlidesClasses();
            }
          }),
          (c.prototype.changeDirection = function (a, b) {
            void 0 === b && (b = !0);
            var c = this.params.direction;
            return (
              a || (a = "horizontal" === c ? "vertical" : "horizontal"),
              a === c ||
                ("horizontal" !== a && "vertical" !== a) ||
                (this.$el
                  .removeClass("" + this.params.containerModifierClass + c)
                  .addClass("" + this.params.containerModifierClass + a),
                (this.params.direction = a),
                this.slides.each(function (c, b) {
                  "vertical" === a
                    ? (b.style.width = "")
                    : (b.style.height = "");
                }),
                this.emit("changeDirection"),
                b && this.update()),
              this
            );
          }),
          (c.prototype.init = function () {
            this.initialized ||
              (this.emit("beforeInit"),
              this.params.breakpoints && this.setBreakpoint(),
              this.addClasses(),
              this.params.loop && this.loopCreate(),
              this.updateSize(),
              this.updateSlides(),
              this.params.watchOverflow && this.checkOverflow(),
              this.params.grabCursor && this.setGrabCursor(),
              this.params.preloadImages && this.preloadImages(),
              this.params.loop
                ? this.slideTo(
                    this.params.initialSlide + this.loopedSlides,
                    0,
                    this.params.runCallbacksOnInit
                  )
                : this.slideTo(
                    this.params.initialSlide,
                    0,
                    this.params.runCallbacksOnInit
                  ),
              this.attachEvents(),
              (this.initialized = !0),
              this.emit("init"));
          }),
          (c.prototype.destroy = function (d, e) {
            void 0 === d && (d = !0), void 0 === e && (e = !0);
            var b = this,
              c = b.params,
              g = b.$el,
              h = b.$wrapperEl,
              f = b.slides;
            return (
              void 0 === b.params ||
                b.destroyed ||
                (b.emit("beforeDestroy"),
                (b.initialized = !1),
                b.detachEvents(),
                c.loop && b.loopDestroy(),
                e &&
                  (b.removeClasses(),
                  g.removeAttr("style"),
                  h.removeAttr("style"),
                  f &&
                    f.length &&
                    f
                      .removeClass(
                        [
                          c.slideVisibleClass,
                          c.slideActiveClass,
                          c.slideNextClass,
                          c.slidePrevClass,
                        ].join(" ")
                      )
                      .removeAttr("style")
                      .removeAttr("data-swiper-slide-index")),
                b.emit("destroy"),
                Object.keys(b.eventsListeners).forEach(function (a) {
                  b.off(a);
                }),
                !1 !== d &&
                  ((b.$el[0].swiper = null),
                  b.$el.data("swiper", null),
                  a.deleteProps(b)),
                (b.destroyed = !0)),
              null
            );
          }),
          (c.extendDefaults = function (b) {
            a.extend(C, b);
          }),
          (f.extendedDefaults.get = function () {
            return C;
          }),
          (f.defaults.get = function () {
            return S;
          }),
          (f.Class.get = function () {
            return d;
          }),
          (f.$.get = function () {
            return b;
          }),
          Object.defineProperties(c, f),
          c
        );
      })(l)),
      (ag = { name: "device", proto: { device: i }, static: { device: i } }),
      (af = { name: "support", proto: { support: e }, static: { support: e } }),
      (A = {
        isEdge: !!c.navigator.userAgent.match(/Edge/g),
        isSafari: (function () {
          var a = c.navigator.userAgent.toLowerCase();
          return (
            a.indexOf("safari") >= 0 &&
            a.indexOf("chrome") < 0 &&
            a.indexOf("android") < 0
          );
        })(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
          c.navigator.userAgent
        ),
      }),
      (ad = { name: "browser", proto: { browser: A }, static: { browser: A } }),
      (ab = {
        name: "resize",
        create: function () {
          var b = this;
          a.extend(b, {
            resize: {
              resizeHandler: function () {
                b &&
                  !b.destroyed &&
                  b.initialized &&
                  (b.emit("beforeResize"), b.emit("resize"));
              },
              orientationChangeHandler: function () {
                b &&
                  !b.destroyed &&
                  b.initialized &&
                  b.emit("orientationchange");
              },
            },
          });
        },
        on: {
          init: function () {
            c.addEventListener("resize", this.resize.resizeHandler),
              c.addEventListener(
                "orientationchange",
                this.resize.orientationChangeHandler
              );
          },
          destroy: function () {
            c.removeEventListener("resize", this.resize.resizeHandler),
              c.removeEventListener(
                "orientationchange",
                this.resize.orientationChangeHandler
              );
          },
        },
      }),
      (B = {
        func: c.MutationObserver || c.WebkitMutationObserver,
        attach: function (e, a) {
          void 0 === a && (a = {});
          var b = this,
            d = new (0, B.func)(function (a) {
              if (1 !== a.length) {
                var d = function () {
                  b.emit("observerUpdate", a[0]);
                };
                c.requestAnimationFrame
                  ? c.requestAnimationFrame(d)
                  : c.setTimeout(d, 0);
              } else b.emit("observerUpdate", a[0]);
            });
          d.observe(e, {
            attributes: void 0 === a.attributes || a.attributes,
            childList: void 0 === a.childList || a.childList,
            characterData: void 0 === a.characterData || a.characterData,
          }),
            b.observer.observers.push(d);
        },
        init: function () {
          if (e.observer && this.params.observer) {
            if (this.params.observeParents)
              for (var b = this.$el.parents(), a = 0; a < b.length; a += 1)
                this.observer.attach(b[a]);
            this.observer.attach(this.$el[0], {
              childList: this.params.observeSlideChildren,
            }),
              this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
          }
        },
        destroy: function () {
          this.observer.observers.forEach(function (a) {
            a.disconnect();
          }),
            (this.observer.observers = []);
        },
      }),
      (ao = {
        name: "observer",
        params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
        create: function () {
          a.extend(this, {
            observer: {
              init: B.init.bind(this),
              attach: B.attach.bind(this),
              destroy: B.destroy.bind(this),
              observers: [],
            },
          });
        },
        on: {
          init: function () {
            this.observer.init();
          },
          destroy: function () {
            this.observer.destroy();
          },
        },
      }),
      (q = {
        update: function (s) {
          var b = this,
            p = b.params,
            o = p.slidesPerView,
            j = p.slidesPerGroup,
            C = p.centeredSlides,
            y = b.params.virtual,
            w = y.addSlidesBefore,
            v = y.addSlidesAfter,
            f = b.virtual,
            m = f.from,
            k = f.to,
            g = f.slides,
            A = f.slidesGrid,
            z = f.renderSlide,
            B = f.offset,
            r,
            l,
            q,
            u,
            d,
            e,
            i,
            t,
            n,
            h,
            c;
          b.updateActiveIndex(),
            (u = b.activeIndex || 0),
            (r = b.rtlTranslate ? "right" : b.isHorizontal() ? "left" : "top"),
            C
              ? ((l = Math.floor(o / 2) + j + w),
                (q = Math.floor(o / 2) + j + v))
              : ((l = o + (j - 1) + w), (q = j + v)),
            (d = Math.max((u || 0) - q, 0)),
            (e = Math.min((u || 0) + l, g.length - 1)),
            (i = (b.slidesGrid[d] || 0) - (b.slidesGrid[0] || 0));
          function x() {
            b.updateSlides(),
              b.updateProgress(),
              b.updateSlidesClasses(),
              b.lazy && b.params.lazy.enabled && b.lazy.load();
          }
          if (
            (a.extend(b.virtual, {
              from: d,
              to: e,
              offset: i,
              slidesGrid: b.slidesGrid,
            }),
            m === d && k === e && !s)
          )
            return (
              b.slidesGrid !== A && i !== B && b.slides.css(r, i + "px"),
              void b.updateProgress()
            );
          if (b.params.virtual.renderExternal)
            return (
              b.params.virtual.renderExternal.call(b, {
                offset: i,
                from: d,
                to: e,
                slides: (function () {
                  for (var b = [], a = d; a <= e; a += 1) b.push(g[a]);
                  return b;
                })(),
              }),
              void x()
            );
          if (((t = []), (n = []), s))
            b.$wrapperEl.find("." + b.params.slideClass).remove();
          else
            for (h = m; h <= k; h += 1)
              (h < d || h > e) &&
                b.$wrapperEl
                  .find(
                    "." +
                      b.params.slideClass +
                      '[data-swiper-slide-index="' +
                      h +
                      '"]'
                  )
                  .remove();
          for (c = 0; c < g.length; c += 1)
            c >= d &&
              c <= e &&
              (void 0 === k || s
                ? n.push(c)
                : (c > k && n.push(c), c < m && t.push(c)));
          n.forEach(function (a) {
            b.$wrapperEl.append(z(g[a], a));
          }),
            t
              .sort(function (a, b) {
                return b - a;
              })
              .forEach(function (a) {
                b.$wrapperEl.prepend(z(g[a], a));
              }),
            b.$wrapperEl.children(".swiper-slide").css(r, i + "px"),
            x();
        },
        renderSlide: function (e, a) {
          var c = this.params.virtual,
            d;
          return c.cache && this.virtual.cache[a]
            ? this.virtual.cache[a]
            : ((d = c.renderSlide
                ? b(c.renderSlide.call(this, e, a))
                : b(
                    '<div class="' +
                      this.params.slideClass +
                      '" data-swiper-slide-index="' +
                      a +
                      '">' +
                      e +
                      "</div>"
                  )),
              d.attr("data-swiper-slide-index") ||
                d.attr("data-swiper-slide-index", a),
              c.cache && (this.virtual.cache[a] = d),
              d);
        },
        appendSlide: function (a) {
          if ("object" == typeof a && "length" in a)
            for (var b = 0; b < a.length; b += 1)
              a[b] && this.virtual.slides.push(a[b]);
          else this.virtual.slides.push(a);
          this.virtual.update(!0);
        },
        prependSlide: function (a) {
          var c = this.activeIndex,
            d = c + 1,
            e = 1,
            b,
            f,
            g;
          if (Array.isArray(a)) {
            for (b = 0; b < a.length; b += 1)
              a[b] && this.virtual.slides.unshift(a[b]);
            (d = c + a.length), (e = a.length);
          } else this.virtual.slides.unshift(a);
          this.params.virtual.cache &&
            ((f = this.virtual.cache),
            (g = {}),
            Object.keys(f).forEach(function (b) {
              var a = f[b],
                c = a.attr("data-swiper-slide-index");
              c && a.attr("data-swiper-slide-index", parseInt(c, 10) + 1),
                (g[parseInt(b, 10) + e] = a);
            }),
            (this.virtual.cache = g)),
            this.virtual.update(!0),
            this.slideTo(d, 0);
        },
        removeSlide: function (b) {
          var a, c;
          if (null != b) {
            if (((a = this.activeIndex), Array.isArray(b)))
              for (c = b.length - 1; c >= 0; c -= 1)
                this.virtual.slides.splice(b[c], 1),
                  this.params.virtual.cache && delete this.virtual.cache[b[c]],
                  b[c] < a && (a -= 1),
                  (a = Math.max(a, 0));
            else
              this.virtual.slides.splice(b, 1),
                this.params.virtual.cache && delete this.virtual.cache[b],
                b < a && (a -= 1),
                (a = Math.max(a, 0));
            this.virtual.update(!0), this.slideTo(a, 0);
          }
        },
        removeAllSlides: function () {
          (this.virtual.slides = []),
            this.params.virtual.cache && (this.virtual.cache = {}),
            this.virtual.update(!0),
            this.slideTo(0, 0);
        },
      }),
      (ac = {
        name: "virtual",
        params: {
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            addSlidesBefore: 0,
            addSlidesAfter: 0,
          },
        },
        create: function () {
          a.extend(this, {
            virtual: {
              update: q.update.bind(this),
              appendSlide: q.appendSlide.bind(this),
              prependSlide: q.prependSlide.bind(this),
              removeSlide: q.removeSlide.bind(this),
              removeAllSlides: q.removeAllSlides.bind(this),
              renderSlide: q.renderSlide.bind(this),
              slides: this.params.virtual.slides,
              cache: {},
            },
          });
        },
        on: {
          beforeInit: function () {
            if (this.params.virtual.enabled) {
              this.classNames.push(
                this.params.containerModifierClass + "virtual"
              );
              var b = { watchSlidesProgress: !0 };
              a.extend(this.params, b),
                a.extend(this.originalParams, b),
                this.params.initialSlide || this.virtual.update();
            }
          },
          setTranslate: function () {
            this.params.virtual.enabled && this.virtual.update();
          },
        },
      }),
      (E = {
        handle: function (t) {
          var h = this.rtlTranslate,
            a = t,
            f,
            p,
            g,
            e,
            i,
            j,
            l,
            k,
            o,
            r,
            s,
            b,
            q,
            n,
            m;
          if (
            (a.originalEvent && (a = a.originalEvent),
            (f = a.keyCode || a.charCode),
            (p = this.params.keyboard.pageUpDown),
            (g = p && 33 === f),
            (e = p && 34 === f),
            (i = 37 === f),
            (j = 39 === f),
            (l = 38 === f),
            (k = 40 === f),
            !this.allowSlideNext &&
              ((this.isHorizontal() && j) || (this.isVertical() && k) || e))
          )
            return !1;
          if (
            !this.allowSlidePrev &&
            ((this.isHorizontal() && i) || (this.isVertical() && l) || g)
          )
            return !1;
          if (
            !(
              a.shiftKey ||
              a.altKey ||
              a.ctrlKey ||
              a.metaKey ||
              (d.activeElement &&
                d.activeElement.nodeName &&
                ("input" === d.activeElement.nodeName.toLowerCase() ||
                  "textarea" === d.activeElement.nodeName.toLowerCase()))
            )
          ) {
            if (
              this.params.keyboard.onlyInViewport &&
              (g || e || i || j || l || k)
            ) {
              if (
                ((o = !1),
                this.$el.parents("." + this.params.slideClass).length > 0 &&
                  0 ===
                    this.$el.parents("." + this.params.slideActiveClass).length)
              )
                return;
              (r = c.innerWidth),
                (s = c.innerHeight),
                (b = this.$el.offset()),
                h && (b.left -= this.$el[0].scrollLeft);
              for (
                q = [
                  [b.left, b.top],
                  [b.left + this.width, b.top],
                  [b.left, b.top + this.height],
                  [b.left + this.width, b.top + this.height],
                ],
                  n = 0;
                n < q.length;
                n += 1
              )
                (m = q[n]),
                  m[0] >= 0 && m[0] <= r && m[1] >= 0 && m[1] <= s && (o = !0);
              if (!o) return;
            }
            this.isHorizontal()
              ? ((g || e || i || j) &&
                  (a.preventDefault
                    ? a.preventDefault()
                    : (a.returnValue = !1)),
                (((e || j) && !h) || ((g || i) && h)) && this.slideNext(),
                (((g || i) && !h) || ((e || j) && h)) && this.slidePrev())
              : ((g || e || l || k) &&
                  (a.preventDefault
                    ? a.preventDefault()
                    : (a.returnValue = !1)),
                (e || k) && this.slideNext(),
                (g || l) && this.slidePrev()),
              this.emit("keyPress", f);
          }
        },
        enable: function () {
          this.keyboard.enabled ||
            (b(d).on("keydown", this.keyboard.handle),
            (this.keyboard.enabled = !0));
        },
        disable: function () {
          this.keyboard.enabled &&
            (b(d).off("keydown", this.keyboard.handle),
            (this.keyboard.enabled = !1));
        },
      }),
      (ae = {
        name: "keyboard",
        params: {
          keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 },
        },
        create: function () {
          a.extend(this, {
            keyboard: {
              enabled: !1,
              enable: E.enable.bind(this),
              disable: E.disable.bind(this),
              handle: E.handle.bind(this),
            },
          });
        },
        on: {
          init: function () {
            this.params.keyboard.enabled && this.keyboard.enable();
          },
          destroy: function () {
            this.keyboard.enabled && this.keyboard.disable();
          },
        },
      }),
      (m = {
        lastScrollTime: a.now(),
        lastEventBeforeSnap: void 0,
        recentWheelEvents: [],
        event: function () {
          return c.navigator.userAgent.indexOf("firefox") > -1
            ? "DOMMouseScroll"
            : (function () {
                var a = "onwheel" in d,
                  b;
                return (
                  a ||
                    ((b = d.createElement("div")),
                    b.setAttribute("onwheel", "return;"),
                    (a = "function" == typeof b.onwheel)),
                  !a &&
                    d.implementation &&
                    d.implementation.hasFeature &&
                    !0 !== d.implementation.hasFeature("", "") &&
                    (a = d.implementation.hasFeature("Events.wheel", "3.0")),
                  a
                );
              })()
            ? "wheel"
            : "mousewheel";
        },
        normalize: function (a) {
          var e = 0,
            d = 0,
            b = 0,
            c = 0;
          return (
            "detail" in a && (d = a.detail),
            "wheelDelta" in a && (d = -a.wheelDelta / 120),
            "wheelDeltaY" in a && (d = -a.wheelDeltaY / 120),
            "wheelDeltaX" in a && (e = -a.wheelDeltaX / 120),
            "axis" in a && a.axis === a.HORIZONTAL_AXIS && ((e = d), (d = 0)),
            (b = 10 * e),
            (c = 10 * d),
            "deltaY" in a && (c = a.deltaY),
            "deltaX" in a && (b = a.deltaX),
            a.shiftKey && !b && ((b = c), (c = 0)),
            (b || c) &&
              a.deltaMode &&
              (1 === a.deltaMode
                ? ((b *= 40), (c *= 40))
                : ((b *= 800), (c *= 800))),
            b && !e && (e = b < 1 ? -1 : 1),
            c && !d && (d = c < 1 ? -1 : 1),
            { spinX: e, spinY: d, pixelX: b, pixelY: c }
          );
        },
        handleMouseEnter: function () {
          this.mouseEntered = !0;
        },
        handleMouseLeave: function () {
          this.mouseEntered = !1;
        },
        handle: function (u) {
          var g = u,
            c = this,
            o = c.params.mousewheel,
            s,
            d,
            r,
            h,
            f,
            l,
            q,
            i,
            x,
            w,
            e,
            p,
            t,
            v,
            j,
            k,
            n;
          if (
            (c.params.cssMode && g.preventDefault(),
            (s = c.$el),
            "container" !== c.params.mousewheel.eventsTarged &&
              (s = b(c.params.mousewheel.eventsTarged)),
            !c.mouseEntered && !s[0].contains(g.target) && !o.releaseOnEdges)
          )
            return !0;
          if (
            (g.originalEvent && (g = g.originalEvent),
            (d = 0),
            (r = c.rtlTranslate ? -1 : 1),
            (h = m.normalize(g)),
            o.forceToAxis)
          )
            if (c.isHorizontal()) {
              if (!(Math.abs(h.pixelX) > Math.abs(h.pixelY))) return !0;
              d = -h.pixelX * r;
            } else {
              if (!(Math.abs(h.pixelY) > Math.abs(h.pixelX))) return !0;
              d = -h.pixelY;
            }
          else
            d =
              Math.abs(h.pixelX) > Math.abs(h.pixelY)
                ? -h.pixelX * r
                : -h.pixelY;
          if (0 === d) return !0;
          if ((o.invert && (d = -d), c.params.freeMode)) {
            if (
              ((f = {
                time: a.now(),
                delta: Math.abs(d),
                direction: Math.sign(d),
              }),
              (l = c.mousewheel.lastEventBeforeSnap),
              (q =
                l &&
                f.time < l.time + 500 &&
                f.delta <= l.delta &&
                f.direction === l.direction),
              !q)
            )
              if (
                ((c.mousewheel.lastEventBeforeSnap = void 0),
                c.params.loop && c.loopFix(),
                (i = c.getTranslate() + d * o.sensitivity),
                (x = c.isBeginning),
                (w = c.isEnd),
                (i >= c.minTranslate() && (i = c.minTranslate()),
                i <= c.maxTranslate() && (i = c.maxTranslate()),
                c.setTransition(0),
                c.setTranslate(i),
                c.updateProgress(),
                c.updateActiveIndex(),
                c.updateSlidesClasses(),
                ((!x && c.isBeginning) || (!w && c.isEnd)) &&
                  c.updateSlidesClasses(),
                c.params.freeModeSticky) &&
                  (clearTimeout(c.mousewheel.timeout),
                  (c.mousewheel.timeout = void 0),
                  (e = c.mousewheel.recentWheelEvents),
                  e.length >= 15 && e.shift(),
                  (p = e.length ? e[e.length - 1] : void 0),
                  (t = e[0]),
                  (e.push(f),
                  p && (f.delta > p.delta || f.direction !== p.direction))
                    ? e.splice(0)
                    : e.length >= 15 &&
                      f.time - t.time < 500 &&
                      t.delta - f.delta >= 1 &&
                      f.delta <= 6 &&
                      ((v = d > 0 ? 0.8 : 0.2),
                      (c.mousewheel.lastEventBeforeSnap = f),
                      e.splice(0),
                      (c.mousewheel.timeout = a.nextTick(function () {
                        c.slideToClosest(c.params.speed, !0, void 0, v);
                      }, 0))),
                  c.mousewheel.timeout ||
                    (c.mousewheel.timeout = a.nextTick(function () {
                      (c.mousewheel.lastEventBeforeSnap = f),
                        e.splice(0),
                        c.slideToClosest(c.params.speed, !0, void 0, 0.5);
                    }, 500))),
                q || c.emit("scroll", g),
                c.params.autoplay &&
                  c.params.autoplayDisableOnInteraction &&
                  c.autoplay.stop(),
                i === c.minTranslate() || i === c.maxTranslate())
              )
                return !0;
          } else if (
            ((j = {
              time: a.now(),
              delta: Math.abs(d),
              direction: Math.sign(d),
              raw: u,
            }),
            (k = c.mousewheel.recentWheelEvents),
            k.length >= 2 && k.shift(),
            (n = k.length ? k[k.length - 1] : void 0),
            k.push(j),
            n
              ? (j.direction !== n.direction ||
                  j.delta > n.delta ||
                  j.time > n.time + 150) &&
                c.mousewheel.animateSlider(j)
              : c.mousewheel.animateSlider(j),
            c.mousewheel.releaseScroll(j))
          )
            return !0;
          return (
            g.preventDefault ? g.preventDefault() : (g.returnValue = !1), !1
          );
        },
        animateSlider: function (b) {
          return (
            (b.delta >= 6 && a.now() - this.mousewheel.lastScrollTime < 60) ||
            (b.direction < 0
              ? (this.isEnd && !this.params.loop) ||
                this.animating ||
                (this.slideNext(), this.emit("scroll", b.raw))
              : (this.isBeginning && !this.params.loop) ||
                this.animating ||
                (this.slidePrev(), this.emit("scroll", b.raw)),
            (this.mousewheel.lastScrollTime = new c.Date().getTime()),
            !1)
          );
        },
        releaseScroll: function (b) {
          var a = this.params.mousewheel;
          if (b.direction < 0) {
            if (this.isEnd && !this.params.loop && a.releaseOnEdges) return !0;
          } else if (this.isBeginning && !this.params.loop && a.releaseOnEdges)
            return !0;
          return !1;
        },
        enable: function () {
          var c = m.event(),
            a;
          return this.params.cssMode
            ? (this.wrapperEl.removeEventListener(c, this.mousewheel.handle),
              !0)
            : !!c &&
                !this.mousewheel.enabled &&
                ((a = this.$el),
                "container" !== this.params.mousewheel.eventsTarged &&
                  (a = b(this.params.mousewheel.eventsTarged)),
                a.on("mouseenter", this.mousewheel.handleMouseEnter),
                a.on("mouseleave", this.mousewheel.handleMouseLeave),
                a.on(c, this.mousewheel.handle),
                (this.mousewheel.enabled = !0),
                !0);
        },
        disable: function () {
          var a = m.event(),
            c;
          return this.params.cssMode
            ? (this.wrapperEl.addEventListener(a, this.mousewheel.handle), !0)
            : !!a &&
                !!this.mousewheel.enabled &&
                ((c = this.$el),
                "container" !== this.params.mousewheel.eventsTarged &&
                  (c = b(this.params.mousewheel.eventsTarged)),
                c.off(a, this.mousewheel.handle),
                (this.mousewheel.enabled = !1),
                !0);
        },
      }),
      (r = {
        update: function () {
          var a = this.params.navigation,
            d,
            b,
            c;
          this.params.loop ||
            ((d = this.navigation),
            (b = d.$nextEl),
            (c = d.$prevEl),
            c &&
              c.length > 0 &&
              (this.isBeginning
                ? c.addClass(a.disabledClass)
                : c.removeClass(a.disabledClass),
              c[
                this.params.watchOverflow && this.isLocked
                  ? "addClass"
                  : "removeClass"
              ](a.lockClass)),
            b &&
              b.length > 0 &&
              (this.isEnd
                ? b.addClass(a.disabledClass)
                : b.removeClass(a.disabledClass),
              b[
                this.params.watchOverflow && this.isLocked
                  ? "addClass"
                  : "removeClass"
              ](a.lockClass)));
        },
        onPrevClick: function (a) {
          a.preventDefault(),
            (this.isBeginning && !this.params.loop) || this.slidePrev();
        },
        onNextClick: function (a) {
          a.preventDefault(),
            (this.isEnd && !this.params.loop) || this.slideNext();
        },
        init: function () {
          var d,
            e,
            c = this.params.navigation;
          (c.nextEl || c.prevEl) &&
            (c.nextEl &&
              ((d = b(c.nextEl)),
              this.params.uniqueNavElements &&
                "string" == typeof c.nextEl &&
                d.length > 1 &&
                1 === this.$el.find(c.nextEl).length &&
                (d = this.$el.find(c.nextEl))),
            c.prevEl &&
              ((e = b(c.prevEl)),
              this.params.uniqueNavElements &&
                "string" == typeof c.prevEl &&
                e.length > 1 &&
                1 === this.$el.find(c.prevEl).length &&
                (e = this.$el.find(c.prevEl))),
            d && d.length > 0 && d.on("click", this.navigation.onNextClick),
            e && e.length > 0 && e.on("click", this.navigation.onPrevClick),
            a.extend(this.navigation, {
              $nextEl: d,
              nextEl: d && d[0],
              $prevEl: e,
              prevEl: e && e[0],
            }));
        },
        destroy: function () {
          var c = this.navigation,
            a = c.$nextEl,
            b = c.$prevEl;
          a &&
            a.length &&
            (a.off("click", this.navigation.onNextClick),
            a.removeClass(this.params.navigation.disabledClass)),
            b &&
              b.length &&
              (b.off("click", this.navigation.onPrevClick),
              b.removeClass(this.params.navigation.disabledClass));
        },
      }),
      (w = {
        update: function () {
          var x = this.rtl,
            a = this.params.pagination,
            c,
            k,
            e,
            g,
            f,
            h,
            q,
            d,
            p,
            t,
            n,
            o,
            i,
            j,
            w,
            v,
            u,
            l,
            s,
            r,
            m;
          if (
            a.el &&
            this.pagination.el &&
            this.pagination.$el &&
            0 !== this.pagination.$el.length
          ) {
            if (
              ((k =
                this.virtual && this.params.virtual.enabled
                  ? this.virtual.slides.length
                  : this.slides.length),
              (e = this.pagination.$el),
              (g = this.params.loop
                ? Math.ceil(
                    (k - 2 * this.loopedSlides) / this.params.slidesPerGroup
                  )
                : this.snapGrid.length),
              this.params.loop
                ? ((c = Math.ceil(
                    (this.activeIndex - this.loopedSlides) /
                      this.params.slidesPerGroup
                  )) >
                    k - 1 - 2 * this.loopedSlides &&
                    (c -= k - 2 * this.loopedSlides),
                  c > g - 1 && (c -= g),
                  c < 0 &&
                    "bullets" !== this.params.paginationType &&
                    (c = g + c))
                : (c =
                    void 0 !== this.snapIndex
                      ? this.snapIndex
                      : this.activeIndex || 0),
              "bullets" === a.type &&
                this.pagination.bullets &&
                this.pagination.bullets.length > 0)
            ) {
              if (
                ((d = this.pagination.bullets),
                a.dynamicBullets &&
                  ((this.pagination.bulletSize = d
                    .eq(0)
                    [this.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                  e.css(
                    this.isHorizontal() ? "width" : "height",
                    this.pagination.bulletSize * (a.dynamicMainBullets + 4) +
                      "px"
                  ),
                  a.dynamicMainBullets > 1 &&
                    void 0 !== this.previousIndex &&
                    ((this.pagination.dynamicBulletIndex +=
                      c - this.previousIndex),
                    this.pagination.dynamicBulletIndex >
                    a.dynamicMainBullets - 1
                      ? (this.pagination.dynamicBulletIndex =
                          a.dynamicMainBullets - 1)
                      : this.pagination.dynamicBulletIndex < 0 &&
                        (this.pagination.dynamicBulletIndex = 0)),
                  (f = c - this.pagination.dynamicBulletIndex),
                  (q =
                    ((h = f + (Math.min(d.length, a.dynamicMainBullets) - 1)) +
                      f) /
                    2)),
                d.removeClass(
                  a.bulletActiveClass +
                    " " +
                    a.bulletActiveClass +
                    "-next " +
                    a.bulletActiveClass +
                    "-next-next " +
                    a.bulletActiveClass +
                    "-prev " +
                    a.bulletActiveClass +
                    "-prev-prev " +
                    a.bulletActiveClass +
                    "-main"
                ),
                e.length > 1)
              )
                d.each(function (i, g) {
                  var d = b(g),
                    e = d.index();
                  e === c && d.addClass(a.bulletActiveClass),
                    a.dynamicBullets &&
                      (e >= f &&
                        e <= h &&
                        d.addClass(a.bulletActiveClass + "-main"),
                      e === f &&
                        d
                          .prev()
                          .addClass(a.bulletActiveClass + "-prev")
                          .prev()
                          .addClass(a.bulletActiveClass + "-prev-prev"),
                      e === h &&
                        d
                          .next()
                          .addClass(a.bulletActiveClass + "-next")
                          .next()
                          .addClass(a.bulletActiveClass + "-next-next"));
                });
              else if (
                ((p = d.eq(c)),
                (t = p.index()),
                p.addClass(a.bulletActiveClass),
                a.dynamicBullets)
              ) {
                for (n = d.eq(f), o = d.eq(h), i = f; i <= h; i += 1)
                  d.eq(i).addClass(a.bulletActiveClass + "-main");
                if (this.params.loop)
                  if (t >= d.length - a.dynamicMainBullets) {
                    for (j = a.dynamicMainBullets; j >= 0; j -= 1)
                      d.eq(d.length - j).addClass(
                        a.bulletActiveClass + "-main"
                      );
                    d.eq(d.length - a.dynamicMainBullets - 1).addClass(
                      a.bulletActiveClass + "-prev"
                    );
                  } else
                    n
                      .prev()
                      .addClass(a.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(a.bulletActiveClass + "-prev-prev"),
                      o
                        .next()
                        .addClass(a.bulletActiveClass + "-next")
                        .next()
                        .addClass(a.bulletActiveClass + "-next-next");
                else
                  n
                    .prev()
                    .addClass(a.bulletActiveClass + "-prev")
                    .prev()
                    .addClass(a.bulletActiveClass + "-prev-prev"),
                    o
                      .next()
                      .addClass(a.bulletActiveClass + "-next")
                      .next()
                      .addClass(a.bulletActiveClass + "-next-next");
              }
              a.dynamicBullets &&
                ((w = Math.min(d.length, a.dynamicMainBullets + 4)),
                (v =
                  (this.pagination.bulletSize * w -
                    this.pagination.bulletSize) /
                    2 -
                  q * this.pagination.bulletSize),
                (u = x ? "right" : "left"),
                d.css(this.isHorizontal() ? u : "top", v + "px"));
            }
            "fraction" === a.type &&
              (e
                .find("." + a.currentClass)
                .text(a.formatFractionCurrent(c + 1)),
              e.find("." + a.totalClass).text(a.formatFractionTotal(g))),
              "progressbar" === a.type &&
                ((l = a.progressbarOpposite
                  ? this.isHorizontal()
                    ? "vertical"
                    : "horizontal"
                  : this.isHorizontal()
                  ? "horizontal"
                  : "vertical"),
                (s = (c + 1) / g),
                (r = 1),
                (m = 1),
                "horizontal" === l ? (r = s) : (m = s),
                e
                  .find("." + a.progressbarFillClass)
                  .transform(
                    "translate3d(0,0,0) scaleX(" + r + ") scaleY(" + m + ")"
                  )
                  .transition(this.params.speed)),
              "custom" === a.type && a.renderCustom
                ? (e.html(a.renderCustom(this, c + 1, g)),
                  this.emit("paginationRender", this, e[0]))
                : this.emit("paginationUpdate", this, e[0]),
              e[
                this.params.watchOverflow && this.isLocked
                  ? "addClass"
                  : "removeClass"
              ](a.lockClass);
          }
        },
        render: function () {
          var a = this.params.pagination,
            e,
            c,
            b,
            f,
            d;
          if (
            a.el &&
            this.pagination.el &&
            this.pagination.$el &&
            0 !== this.pagination.$el.length
          ) {
            if (
              ((e =
                this.virtual && this.params.virtual.enabled
                  ? this.virtual.slides.length
                  : this.slides.length),
              (c = this.pagination.$el),
              (b = ""),
              "bullets" === a.type)
            ) {
              for (
                f = this.params.loop
                  ? Math.ceil(
                      (e - 2 * this.loopedSlides) / this.params.slidesPerGroup
                    )
                  : this.snapGrid.length,
                  d = 0;
                d < f;
                d += 1
              )
                a.renderBullet
                  ? (b += a.renderBullet.call(this, d, a.bulletClass))
                  : (b +=
                      "<" +
                      a.bulletElement +
                      ' class="' +
                      a.bulletClass +
                      '"></' +
                      a.bulletElement +
                      ">");
              c.html(b),
                (this.pagination.bullets = c.find("." + a.bulletClass));
            }
            "fraction" === a.type &&
              ((b = a.renderFraction
                ? a.renderFraction.call(this, a.currentClass, a.totalClass)
                : '<span class="' +
                  a.currentClass +
                  '"></span> / <span class="' +
                  a.totalClass +
                  '"></span>'),
              c.html(b)),
              "progressbar" === a.type &&
                ((b = a.renderProgressbar
                  ? a.renderProgressbar.call(this, a.progressbarFillClass)
                  : '<span class="' + a.progressbarFillClass + '"></span>'),
                c.html(b)),
              "custom" !== a.type &&
                this.emit("paginationRender", this.pagination.$el[0]);
          }
        },
        init: function () {
          var e = this,
            c = e.params.pagination,
            d;
          c.el &&
            ((d = b(c.el)),
            0 !== d.length &&
              (e.params.uniqueNavElements &&
                "string" == typeof c.el &&
                d.length > 1 &&
                (d = e.$el.find(c.el)),
              "bullets" === c.type &&
                c.clickable &&
                d.addClass(c.clickableClass),
              d.addClass(c.modifierClass + c.type),
              "bullets" === c.type &&
                c.dynamicBullets &&
                (d.addClass("" + c.modifierClass + c.type + "-dynamic"),
                (e.pagination.dynamicBulletIndex = 0),
                c.dynamicMainBullets < 1 && (c.dynamicMainBullets = 1)),
              "progressbar" === c.type &&
                c.progressbarOpposite &&
                d.addClass(c.progressbarOppositeClass),
              c.clickable &&
                d.on("click", "." + c.bulletClass, function (c) {
                  c.preventDefault();
                  var a = b(this).index() * e.params.slidesPerGroup;
                  e.params.loop && (a += e.loopedSlides), e.slideTo(a);
                }),
              a.extend(e.pagination, { $el: d, el: d[0] })));
        },
        destroy: function () {
          var a = this.params.pagination,
            b;
          a.el &&
            this.pagination.el &&
            this.pagination.$el &&
            0 !== this.pagination.$el.length &&
            ((b = this.pagination.$el),
            b.removeClass(a.hiddenClass),
            b.removeClass(a.modifierClass + a.type),
            this.pagination.bullets &&
              this.pagination.bullets.removeClass(a.bulletActiveClass),
            a.clickable && b.off("click", "." + a.bulletClass));
        },
      }),
      (j = {
        setTranslate: function () {
          if (this.params.scrollbar.el && this.scrollbar.el) {
            var e = this.scrollbar,
              h = this.rtlTranslate,
              j = this.progress,
              c = e.dragSize,
              d = e.trackSize,
              f = e.$dragEl,
              g = e.$el,
              i = this.params.scrollbar,
              b = c,
              a = (d - c) * j;
            h
              ? (a = -a) > 0
                ? ((b = c - a), (a = 0))
                : -a + c > d && (b = d + a)
              : a < 0
              ? ((b = c + a), (a = 0))
              : a + c > d && (b = d - a),
              this.isHorizontal()
                ? (f.transform("translate3d(" + a + "px, 0, 0)"),
                  (f[0].style.width = b + "px"))
                : (f.transform("translate3d(0px, " + a + "px, 0)"),
                  (f[0].style.height = b + "px")),
              i.hide &&
                (clearTimeout(this.scrollbar.timeout),
                (g[0].style.opacity = 1),
                (this.scrollbar.timeout = setTimeout(function () {
                  (g[0].style.opacity = 0), g.transition(400);
                }, 1e3)));
          }
        },
        setTransition: function (a) {
          this.params.scrollbar.el &&
            this.scrollbar.el &&
            this.scrollbar.$dragEl.transition(a);
        },
        updateSize: function () {
          var b, c, d, e, g, f, h;
          this.params.scrollbar.el &&
            this.scrollbar.el &&
            ((b = this.scrollbar),
            (c = b.$dragEl),
            (d = b.$el),
            (c[0].style.width = ""),
            (c[0].style.height = ""),
            (g = this.isHorizontal() ? d[0].offsetWidth : d[0].offsetHeight),
            (f = this.size / this.virtualSize),
            (h = f * (g / this.size)),
            (e =
              "auto" === this.params.scrollbar.dragSize
                ? g * f
                : parseInt(this.params.scrollbar.dragSize, 10)),
            this.isHorizontal()
              ? (c[0].style.width = e + "px")
              : (c[0].style.height = e + "px"),
            (d[0].style.display = f >= 1 ? "none" : ""),
            this.params.scrollbar.hide && (d[0].style.opacity = 0),
            a.extend(b, {
              trackSize: g,
              divider: f,
              moveDivider: h,
              dragSize: e,
            }),
            b.$el[
              this.params.watchOverflow && this.isLocked
                ? "addClass"
                : "removeClass"
            ](this.params.scrollbar.lockClass));
        },
        getPointerPosition: function (a) {
          return this.isHorizontal()
            ? "touchstart" === a.type || "touchmove" === a.type
              ? a.targetTouches[0].clientX
              : a.clientX
            : "touchstart" === a.type || "touchmove" === a.type
            ? a.targetTouches[0].clientY
            : a.clientY;
        },
        setDragPosition: function (f) {
          var a,
            b = this.scrollbar,
            g = this.rtlTranslate,
            h = b.$el,
            c = b.dragSize,
            i = b.trackSize,
            d = b.dragStartPos,
            e;
          (a =
            (b.getPointerPosition(f) -
              h.offset()[this.isHorizontal() ? "left" : "top"] -
              (null !== d ? d : c / 2)) /
            (i - c)),
            (a = Math.max(Math.min(a, 1), 0)),
            g && (a = 1 - a),
            (e =
              this.minTranslate() +
              (this.maxTranslate() - this.minTranslate()) * a),
            this.updateProgress(e),
            this.setTranslate(e),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
        },
        onDragStart: function (a) {
          var e = this.params.scrollbar,
            b = this.scrollbar,
            f = this.$wrapperEl,
            d = b.$el,
            c = b.$dragEl;
          (this.scrollbar.isTouched = !0),
            (this.scrollbar.dragStartPos =
              a.target === c[0] || a.target === c
                ? b.getPointerPosition(a) -
                  a.target.getBoundingClientRect()[
                    this.isHorizontal() ? "left" : "top"
                  ]
                : null),
            a.preventDefault(),
            a.stopPropagation(),
            f.transition(100),
            c.transition(100),
            b.setDragPosition(a),
            clearTimeout(this.scrollbar.dragTimeout),
            d.transition(0),
            e.hide && d.css("opacity", 1),
            this.params.cssMode &&
              this.$wrapperEl.css("scroll-snap-type", "none"),
            this.emit("scrollbarDragStart", a);
        },
        onDragMove: function (a) {
          var b = this.scrollbar,
            c = this.$wrapperEl,
            d = b.$el,
            e = b.$dragEl;
          this.scrollbar.isTouched &&
            (a.preventDefault ? a.preventDefault() : (a.returnValue = !1),
            b.setDragPosition(a),
            c.transition(0),
            d.transition(0),
            e.transition(0),
            this.emit("scrollbarDragMove", a));
        },
        onDragEnd: function (d) {
          var b = this.params.scrollbar,
            e = this.scrollbar,
            f = this.$wrapperEl,
            c = e.$el;
          this.scrollbar.isTouched &&
            ((this.scrollbar.isTouched = !1),
            this.params.cssMode &&
              (this.$wrapperEl.css("scroll-snap-type", ""), f.transition("")),
            b.hide &&
              (clearTimeout(this.scrollbar.dragTimeout),
              (this.scrollbar.dragTimeout = a.nextTick(function () {
                c.css("opacity", 0), c.transition(400);
              }, 1e3))),
            this.emit("scrollbarDragEnd", d),
            b.snapOnRelease && this.slideToClosest());
        },
        enableDraggable: function () {
          if (this.params.scrollbar.el) {
            var i = this.scrollbar,
              c = this.touchEventsTouch,
              f = this.touchEventsDesktop,
              h = this.params,
              a = i.$el[0],
              b = !(!e.passiveListener || !h.passiveListeners) && {
                passive: !1,
                capture: !1,
              },
              g = !(!e.passiveListener || !h.passiveListeners) && {
                passive: !0,
                capture: !1,
              };
            e.touch
              ? (a.addEventListener(c.start, this.scrollbar.onDragStart, b),
                a.addEventListener(c.move, this.scrollbar.onDragMove, b),
                a.addEventListener(c.end, this.scrollbar.onDragEnd, g))
              : (a.addEventListener(f.start, this.scrollbar.onDragStart, b),
                d.addEventListener(f.move, this.scrollbar.onDragMove, b),
                d.addEventListener(f.end, this.scrollbar.onDragEnd, g));
          }
        },
        disableDraggable: function () {
          if (this.params.scrollbar.el) {
            var i = this.scrollbar,
              c = this.touchEventsTouch,
              f = this.touchEventsDesktop,
              h = this.params,
              a = i.$el[0],
              b = !(!e.passiveListener || !h.passiveListeners) && {
                passive: !1,
                capture: !1,
              },
              g = !(!e.passiveListener || !h.passiveListeners) && {
                passive: !0,
                capture: !1,
              };
            e.touch
              ? (a.removeEventListener(c.start, this.scrollbar.onDragStart, b),
                a.removeEventListener(c.move, this.scrollbar.onDragMove, b),
                a.removeEventListener(c.end, this.scrollbar.onDragEnd, g))
              : (a.removeEventListener(f.start, this.scrollbar.onDragStart, b),
                d.removeEventListener(f.move, this.scrollbar.onDragMove, b),
                d.removeEventListener(f.end, this.scrollbar.onDragEnd, g));
          }
        },
        init: function () {
          var f, g, d, c, e;
          this.params.scrollbar.el &&
            ((f = this.scrollbar),
            (g = this.$el),
            (d = this.params.scrollbar),
            (c = b(d.el)),
            this.params.uniqueNavElements &&
              "string" == typeof d.el &&
              c.length > 1 &&
              1 === g.find(d.el).length &&
              (c = g.find(d.el)),
            (e = c.find("." + this.params.scrollbar.dragClass)),
            0 === e.length &&
              ((e = b(
                '<div class="' + this.params.scrollbar.dragClass + '"></div>'
              )),
              c.append(e)),
            a.extend(f, { $el: c, el: c[0], $dragEl: e, dragEl: e[0] }),
            d.draggable && f.enableDraggable());
        },
        destroy: function () {
          this.scrollbar.disableDraggable();
        },
      }),
      (I = {
        setTransform: function (j, e) {
          var k = this.rtl,
            d = b(j),
            h = k ? -1 : 1,
            i = d.attr("data-swiper-parallax") || "0",
            a = d.attr("data-swiper-parallax-x"),
            c = d.attr("data-swiper-parallax-y"),
            f = d.attr("data-swiper-parallax-scale"),
            g = d.attr("data-swiper-parallax-opacity"),
            l,
            m;
          a || c
            ? ((a = a || "0"), (c = c || "0"))
            : this.isHorizontal()
            ? ((a = i), (c = "0"))
            : ((c = i), (a = "0")),
            (a =
              a.indexOf("%") >= 0
                ? parseInt(a, 10) * e * h + "%"
                : a * e * h + "px"),
            (c =
              c.indexOf("%") >= 0 ? parseInt(c, 10) * e + "%" : c * e + "px"),
            null != g &&
              ((l = g - (g - 1) * (1 - Math.abs(e))), (d[0].style.opacity = l)),
            null == f
              ? d.transform("translate3d(" + a + ", " + c + ", 0px)")
              : ((m = f - (f - 1) * (1 - Math.abs(e))),
                d.transform(
                  "translate3d(" + a + ", " + c + ", 0px) scale(" + m + ")"
                ));
        },
        setTranslate: function () {
          var a = this,
            d = a.$el,
            e = a.slides,
            c = a.progress,
            f = a.snapGrid;
          d
            .children(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
            )
            .each(function (d, b) {
              a.parallax.setTransform(b, c);
            }),
            e.each(function (g, e) {
              var d = e.progress;
              a.params.slidesPerGroup > 1 &&
                "auto" !== a.params.slidesPerView &&
                (d += Math.ceil(g / 2) - c * (f.length - 1)),
                (d = Math.min(Math.max(d, -1), 1)),
                b(e)
                  .find(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                  )
                  .each(function (c, b) {
                    a.parallax.setTransform(b, d);
                  });
            });
        },
        setTransition: function (a) {
          void 0 === a && (a = this.params.speed),
            this.$el
              .find(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              )
              .each(function (f, e) {
                var c = b(e),
                  d =
                    parseInt(c.attr("data-swiper-parallax-duration"), 10) || a;
                0 === a && (d = 0), c.transition(d);
              });
        },
      }),
      (J = {
        getDistanceBetweenTouches: function (a) {
          if (a.targetTouches.length < 2) return 1;
          var b = a.targetTouches[0].pageX,
            c = a.targetTouches[0].pageY,
            d = a.targetTouches[1].pageX,
            e = a.targetTouches[1].pageY;
          return Math.sqrt(Math.pow(d - b, 2) + Math.pow(e - c, 2));
        },
        onGestureStart: function (c) {
          var f = this.params.zoom,
            d = this.zoom,
            a = d.gesture;
          if (
            ((d.fakeGestureTouched = !1),
            (d.fakeGestureMoved = !1),
            !e.gestures)
          ) {
            if (
              "touchstart" !== c.type ||
              ("touchstart" === c.type && c.targetTouches.length < 2)
            )
              return;
            (d.fakeGestureTouched = !0),
              (a.scaleStart = J.getDistanceBetweenTouches(c));
          }
          (a.$slideEl && a.$slideEl.length) ||
          ((a.$slideEl = b(c.target).closest("." + this.params.slideClass)),
          0 === a.$slideEl.length &&
            (a.$slideEl = this.slides.eq(this.activeIndex)),
          (a.$imageEl = a.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (a.$imageWrapEl = a.$imageEl.parent("." + f.containerClass)),
          (a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || f.maxRatio),
          0 !== a.$imageWrapEl.length)
            ? (a.$imageEl && a.$imageEl.transition(0),
              (this.zoom.isScaling = !0))
            : (a.$imageEl = void 0);
        },
        onGestureChange: function (c) {
          var d = this.params.zoom,
            a = this.zoom,
            b = a.gesture;
          if (!e.gestures) {
            if (
              "touchmove" !== c.type ||
              ("touchmove" === c.type && c.targetTouches.length < 2)
            )
              return;
            (a.fakeGestureMoved = !0),
              (b.scaleMove = J.getDistanceBetweenTouches(c));
          }
          b.$imageEl &&
            0 !== b.$imageEl.length &&
            ((a.scale = e.gestures
              ? c.scale * a.currentScale
              : (b.scaleMove / b.scaleStart) * a.currentScale),
            a.scale > b.maxRatio &&
              (a.scale =
                b.maxRatio - 1 + Math.pow(a.scale - b.maxRatio + 1, 0.5)),
            a.scale < d.minRatio &&
              (a.scale =
                d.minRatio + 1 - Math.pow(d.minRatio - a.scale + 1, 0.5)),
            b.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"));
        },
        onGestureEnd: function (c) {
          var d = this.params.zoom,
            a = this.zoom,
            b = a.gesture;
          if (!e.gestures) {
            if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
            if (
              "touchend" !== c.type ||
              ("touchend" === c.type &&
                c.changedTouches.length < 2 &&
                !i.android)
            )
              return;
            (a.fakeGestureTouched = !1), (a.fakeGestureMoved = !1);
          }
          b.$imageEl &&
            0 !== b.$imageEl.length &&
            ((a.scale = Math.max(Math.min(a.scale, b.maxRatio), d.minRatio)),
            b.$imageEl
              .transition(this.params.speed)
              .transform("translate3d(0,0,0) scale(" + a.scale + ")"),
            (a.currentScale = a.scale),
            (a.isScaling = !1),
            1 === a.scale && (b.$slideEl = void 0));
        },
        onTouchStart: function (a) {
          var c = this.zoom,
            d = c.gesture,
            b = c.image;
          d.$imageEl &&
            0 !== d.$imageEl.length &&
            (b.isTouched ||
              (i.android && a.cancelable && a.preventDefault(),
              (b.isTouched = !0),
              (b.touchesStart.x =
                "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX),
              (b.touchesStart.y =
                "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY)));
        },
        onTouchMove: function (e) {
          var f = this.zoom,
            d = f.gesture,
            b = f.image,
            c = f.velocity,
            g,
            h;
          if (
            d.$imageEl &&
            0 !== d.$imageEl.length &&
            ((this.allowClick = !1), b.isTouched && d.$slideEl)
          )
            if (
              (b.isMoved ||
                ((b.width = d.$imageEl[0].offsetWidth),
                (b.height = d.$imageEl[0].offsetHeight),
                (b.startX = a.getTranslate(d.$imageWrapEl[0], "x") || 0),
                (b.startY = a.getTranslate(d.$imageWrapEl[0], "y") || 0),
                (d.slideWidth = d.$slideEl[0].offsetWidth),
                (d.slideHeight = d.$slideEl[0].offsetHeight),
                d.$imageWrapEl.transition(0),
                this.rtl && ((b.startX = -b.startX), (b.startY = -b.startY))),
              (g = b.width * f.scale),
              (h = b.height * f.scale),
              !(g < d.slideWidth && h < d.slideHeight))
            ) {
              if (
                ((b.minX = Math.min(d.slideWidth / 2 - g / 2, 0)),
                (b.maxX = -b.minX),
                (b.minY = Math.min(d.slideHeight / 2 - h / 2, 0)),
                (b.maxY = -b.minY),
                (b.touchesCurrent.x =
                  "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                (b.touchesCurrent.y =
                  "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                !b.isMoved && !f.isScaling)
              ) {
                if (
                  this.isHorizontal() &&
                  ((Math.floor(b.minX) === Math.floor(b.startX) &&
                    b.touchesCurrent.x < b.touchesStart.x) ||
                    (Math.floor(b.maxX) === Math.floor(b.startX) &&
                      b.touchesCurrent.x > b.touchesStart.x))
                )
                  return void (b.isTouched = !1);
                if (
                  !this.isHorizontal() &&
                  ((Math.floor(b.minY) === Math.floor(b.startY) &&
                    b.touchesCurrent.y < b.touchesStart.y) ||
                    (Math.floor(b.maxY) === Math.floor(b.startY) &&
                      b.touchesCurrent.y > b.touchesStart.y))
                )
                  return void (b.isTouched = !1);
              }
              e.cancelable && e.preventDefault(),
                e.stopPropagation(),
                (b.isMoved = !0),
                (b.currentX = b.touchesCurrent.x - b.touchesStart.x + b.startX),
                (b.currentY = b.touchesCurrent.y - b.touchesStart.y + b.startY),
                b.currentX < b.minX &&
                  (b.currentX =
                    b.minX + 1 - Math.pow(b.minX - b.currentX + 1, 0.8)),
                b.currentX > b.maxX &&
                  (b.currentX =
                    b.maxX - 1 + Math.pow(b.currentX - b.maxX + 1, 0.8)),
                b.currentY < b.minY &&
                  (b.currentY =
                    b.minY + 1 - Math.pow(b.minY - b.currentY + 1, 0.8)),
                b.currentY > b.maxY &&
                  (b.currentY =
                    b.maxY - 1 + Math.pow(b.currentY - b.maxY + 1, 0.8)),
                c.prevPositionX || (c.prevPositionX = b.touchesCurrent.x),
                c.prevPositionY || (c.prevPositionY = b.touchesCurrent.y),
                c.prevTime || (c.prevTime = Date.now()),
                (c.x =
                  (b.touchesCurrent.x - c.prevPositionX) /
                  (Date.now() - c.prevTime) /
                  2),
                (c.y =
                  (b.touchesCurrent.y - c.prevPositionY) /
                  (Date.now() - c.prevTime) /
                  2),
                Math.abs(b.touchesCurrent.x - c.prevPositionX) < 2 && (c.x = 0),
                Math.abs(b.touchesCurrent.y - c.prevPositionY) < 2 && (c.y = 0),
                (c.prevPositionX = b.touchesCurrent.x),
                (c.prevPositionY = b.touchesCurrent.y),
                (c.prevTime = Date.now()),
                d.$imageWrapEl.transform(
                  "translate3d(" + b.currentX + "px, " + b.currentY + "px,0)"
                );
            }
        },
        onTouchEnd: function () {
          var c = this.zoom,
            d = c.gesture,
            a = c.image,
            b = c.velocity,
            e,
            f,
            i,
            h,
            j,
            g,
            k,
            l,
            m;
          if (d.$imageEl && 0 !== d.$imageEl.length) {
            if (!a.isTouched || !a.isMoved)
              return (a.isTouched = !1), void (a.isMoved = !1);
            (a.isTouched = !1),
              (a.isMoved = !1),
              (e = 300),
              (f = 300),
              (i = b.x * e),
              (h = a.currentX + i),
              (j = b.y * f),
              (g = a.currentY + j),
              0 !== b.x && (e = Math.abs((h - a.currentX) / b.x)),
              0 !== b.y && (f = Math.abs((g - a.currentY) / b.y)),
              (k = Math.max(e, f)),
              (a.currentX = h),
              (a.currentY = g),
              (l = a.width * c.scale),
              (m = a.height * c.scale),
              (a.minX = Math.min(d.slideWidth / 2 - l / 2, 0)),
              (a.maxX = -a.minX),
              (a.minY = Math.min(d.slideHeight / 2 - m / 2, 0)),
              (a.maxY = -a.minY),
              (a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX)),
              (a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY)),
              d.$imageWrapEl
                .transition(k)
                .transform(
                  "translate3d(" + a.currentX + "px, " + a.currentY + "px,0)"
                );
          }
        },
        onTransitionEnd: function () {
          var b = this.zoom,
            a = b.gesture;
          a.$slideEl &&
            this.previousIndex !== this.activeIndex &&
            (a.$imageEl && a.$imageEl.transform("translate3d(0,0,0) scale(1)"),
            a.$imageWrapEl && a.$imageWrapEl.transform("translate3d(0,0,0)"),
            (b.scale = 1),
            (b.currentScale = 1),
            (a.$slideEl = void 0),
            (a.$imageEl = void 0),
            (a.$imageWrapEl = void 0));
        },
        toggle: function (b) {
          var a = this.zoom;
          a.scale && 1 !== a.scale ? a.out() : a.in(b);
        },
        in: function (c) {
          var k,
            h,
            t,
            s,
            e,
            d,
            r,
            q,
            p,
            u,
            l,
            m,
            n,
            g,
            j,
            i,
            b = this.zoom,
            f = this.params.zoom,
            a = b.gesture,
            o = b.image;
          a.$slideEl ||
            (this.params.virtual && this.params.virtual.enabled && this.virtual
              ? (a.$slideEl = this.$wrapperEl.children(
                  "." + this.params.slideActiveClass
                ))
              : (a.$slideEl = this.slides.eq(this.activeIndex)),
            (a.$imageEl = a.$slideEl.find(
              "img, svg, canvas, picture, .swiper-zoom-target"
            )),
            (a.$imageWrapEl = a.$imageEl.parent("." + f.containerClass))),
            a.$imageEl &&
              0 !== a.$imageEl.length &&
              (a.$slideEl.addClass("" + f.zoomedSlideClass),
              void 0 === o.touchesStart.x && c
                ? ((k =
                    "touchend" === c.type
                      ? c.changedTouches[0].pageX
                      : c.pageX),
                  (h =
                    "touchend" === c.type
                      ? c.changedTouches[0].pageY
                      : c.pageY))
                : ((k = o.touchesStart.x), (h = o.touchesStart.y)),
              (b.scale = a.$imageWrapEl.attr("data-swiper-zoom") || f.maxRatio),
              (b.currentScale =
                a.$imageWrapEl.attr("data-swiper-zoom") || f.maxRatio),
              c
                ? ((j = a.$slideEl[0].offsetWidth),
                  (i = a.$slideEl[0].offsetHeight),
                  (t = a.$slideEl.offset().left + j / 2 - k),
                  (s = a.$slideEl.offset().top + i / 2 - h),
                  (r = a.$imageEl[0].offsetWidth),
                  (q = a.$imageEl[0].offsetHeight),
                  (p = r * b.scale),
                  (u = q * b.scale),
                  (n = -(l = Math.min(j / 2 - p / 2, 0))),
                  (g = -(m = Math.min(i / 2 - u / 2, 0))),
                  (e = t * b.scale) < l && (e = l),
                  e > n && (e = n),
                  (d = s * b.scale) < m && (d = m),
                  d > g && (d = g))
                : ((e = 0), (d = 0)),
              a.$imageWrapEl
                .transition(300)
                .transform("translate3d(" + e + "px, " + d + "px,0)"),
              a.$imageEl
                .transition(300)
                .transform("translate3d(0,0,0) scale(" + b.scale + ")"));
        },
        out: function () {
          var b = this.zoom,
            c = this.params.zoom,
            a = b.gesture;
          a.$slideEl ||
            (this.params.virtual && this.params.virtual.enabled && this.virtual
              ? (a.$slideEl = this.$wrapperEl.children(
                  "." + this.params.slideActiveClass
                ))
              : (a.$slideEl = this.slides.eq(this.activeIndex)),
            (a.$imageEl = a.$slideEl.find(
              "img, svg, canvas, picture, .swiper-zoom-target"
            )),
            (a.$imageWrapEl = a.$imageEl.parent("." + c.containerClass))),
            a.$imageEl &&
              0 !== a.$imageEl.length &&
              ((b.scale = 1),
              (b.currentScale = 1),
              a.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
              a.$imageEl
                .transition(300)
                .transform("translate3d(0,0,0) scale(1)"),
              a.$slideEl.removeClass("" + c.zoomedSlideClass),
              (a.$slideEl = void 0));
        },
        enable: function () {
          var a = this.zoom,
            c,
            d,
            b;
          a.enabled ||
            ((a.enabled = !0),
            (c = !(
              "touchstart" !== this.touchEvents.start ||
              !e.passiveListener ||
              !this.params.passiveListeners
            ) && { passive: !0, capture: !1 }),
            (d = !e.passiveListener || { passive: !1, capture: !0 }),
            (b = "." + this.params.slideClass),
            e.gestures
              ? (this.$wrapperEl.on("gesturestart", b, a.onGestureStart, c),
                this.$wrapperEl.on("gesturechange", b, a.onGestureChange, c),
                this.$wrapperEl.on("gestureend", b, a.onGestureEnd, c))
              : "touchstart" === this.touchEvents.start &&
                (this.$wrapperEl.on(
                  this.touchEvents.start,
                  b,
                  a.onGestureStart,
                  c
                ),
                this.$wrapperEl.on(
                  this.touchEvents.move,
                  b,
                  a.onGestureChange,
                  d
                ),
                this.$wrapperEl.on(this.touchEvents.end, b, a.onGestureEnd, c),
                this.touchEvents.cancel &&
                  this.$wrapperEl.on(
                    this.touchEvents.cancel,
                    b,
                    a.onGestureEnd,
                    c
                  )),
            this.$wrapperEl.on(
              this.touchEvents.move,
              "." + this.params.zoom.containerClass,
              a.onTouchMove,
              d
            ));
        },
        disable: function () {
          var a = this.zoom,
            c,
            d,
            b;
          a.enabled &&
            ((this.zoom.enabled = !1),
            (c = !(
              "touchstart" !== this.touchEvents.start ||
              !e.passiveListener ||
              !this.params.passiveListeners
            ) && { passive: !0, capture: !1 }),
            (d = !e.passiveListener || { passive: !1, capture: !0 }),
            (b = "." + this.params.slideClass),
            e.gestures
              ? (this.$wrapperEl.off("gesturestart", b, a.onGestureStart, c),
                this.$wrapperEl.off("gesturechange", b, a.onGestureChange, c),
                this.$wrapperEl.off("gestureend", b, a.onGestureEnd, c))
              : "touchstart" === this.touchEvents.start &&
                (this.$wrapperEl.off(
                  this.touchEvents.start,
                  b,
                  a.onGestureStart,
                  c
                ),
                this.$wrapperEl.off(
                  this.touchEvents.move,
                  b,
                  a.onGestureChange,
                  d
                ),
                this.$wrapperEl.off(this.touchEvents.end, b, a.onGestureEnd, c),
                this.touchEvents.cancel &&
                  this.$wrapperEl.off(
                    this.touchEvents.cancel,
                    b,
                    a.onGestureEnd,
                    c
                  )),
            this.$wrapperEl.off(
              this.touchEvents.move,
              "." + this.params.zoom.containerClass,
              a.onTouchMove,
              d
            ));
        },
      }),
      (Q = {
        loadInSlide: function (f, g) {
          var a, c, d, e;
          void 0 === g && (g = !0),
            (a = this),
            (c = a.params.lazy),
            void 0 !== f &&
              0 !== a.slides.length &&
              ((d =
                a.virtual && a.params.virtual.enabled
                  ? a.$wrapperEl.children(
                      "." +
                        a.params.slideClass +
                        '[data-swiper-slide-index="' +
                        f +
                        '"]'
                    )
                  : a.slides.eq(f)),
              (e = d.find(
                "." +
                  c.elementClass +
                  ":not(." +
                  c.loadedClass +
                  "):not(." +
                  c.loadingClass +
                  ")"
              )),
              !d.hasClass(c.elementClass) ||
                d.hasClass(c.loadedClass) ||
                d.hasClass(c.loadingClass) ||
                (e = e.add(d[0])),
              0 !== e.length &&
                e.each(function (m, l) {
                  var e = b(l),
                    h,
                    i,
                    j,
                    f,
                    k;
                  e.addClass(c.loadingClass),
                    (h = e.attr("data-background")),
                    (i = e.attr("data-src")),
                    (j = e.attr("data-srcset")),
                    (f = e.attr("data-sizes")),
                    (k = e.parent("picture")),
                    a.loadImage(e[0], i || h, j, f, !1, function () {
                      var l, m, n;
                      null != a &&
                        a &&
                        (!a || a.params) &&
                        !a.destroyed &&
                        (h
                          ? (e.css("background-image", 'url("' + h + '")'),
                            e.removeAttr("data-background"))
                          : (j &&
                              (e.attr("srcset", j),
                              e.removeAttr("data-srcset")),
                            f &&
                              (e.attr("sizes", f), e.removeAttr("data-sizes")),
                            k.length &&
                              k.children("source").each(function (d, c) {
                                var a = b(c);
                                a.attr("data-srcset") &&
                                  (a.attr("srcset", a.attr("data-srcset")),
                                  a.removeAttr("data-srcset"));
                              }),
                            i && (e.attr("src", i), e.removeAttr("data-src"))),
                        e.addClass(c.loadedClass).removeClass(c.loadingClass),
                        d.find("." + c.preloaderClass).remove(),
                        a.params.loop &&
                          g &&
                          ((l = d.attr("data-swiper-slide-index")),
                          d.hasClass(a.params.slideDuplicateClass)
                            ? ((m = a.$wrapperEl.children(
                                '[data-swiper-slide-index="' +
                                  l +
                                  '"]:not(.' +
                                  a.params.slideDuplicateClass +
                                  ")"
                              )),
                              a.lazy.loadInSlide(m.index(), !1))
                            : ((n = a.$wrapperEl.children(
                                "." +
                                  a.params.slideDuplicateClass +
                                  '[data-swiper-slide-index="' +
                                  l +
                                  '"]'
                              )),
                              a.lazy.loadInSlide(n.index(), !1))),
                        a.emit("lazyImageReady", d[0], e[0]),
                        a.params.autoHeight && a.updateAutoHeight());
                    }),
                    a.emit("lazyImageLoad", d[0], e[0]);
                }));
        },
        load: function () {
          var a = this,
            h = a.$wrapperEl,
            d = a.params,
            q = a.slides,
            e = a.activeIndex,
            m = a.virtual && d.virtual.enabled,
            f = d.lazy,
            c = d.slidesPerView,
            j,
            p,
            k,
            t,
            s,
            i,
            g,
            o,
            r;
          function l(a) {
            if (m) {
              if (
                h.children(
                  "." + d.slideClass + '[data-swiper-slide-index="' + a + '"]'
                ).length
              )
                return !0;
            } else if (q[a]) return !0;
            return !1;
          }
          function n(a) {
            return m ? b(a).attr("data-swiper-slide-index") : b(a).index();
          }
          if (
            ("auto" === c && (c = 0),
            a.lazy.initialImageLoaded || (a.lazy.initialImageLoaded = !0),
            a.params.watchSlidesVisibility)
          )
            h.children("." + d.slideVisibleClass).each(function (e, c) {
              var d = m ? b(c).attr("data-swiper-slide-index") : b(c).index();
              a.lazy.loadInSlide(d);
            });
          else if (c > 1)
            for (j = e; j < e + c; j += 1) l(j) && a.lazy.loadInSlide(j);
          else a.lazy.loadInSlide(e);
          if (f.loadPrevNext)
            if (c > 1 || (f.loadPrevNextAmount && f.loadPrevNextAmount > 1)) {
              for (
                p = f.loadPrevNextAmount,
                  k = c,
                  t = Math.min(e + k + Math.max(p, k), q.length),
                  s = Math.max(e - Math.max(k, p), 0),
                  i = e + c;
                i < t;
                i += 1
              )
                l(i) && a.lazy.loadInSlide(i);
              for (g = s; g < e; g += 1) l(g) && a.lazy.loadInSlide(g);
            } else
              (o = h.children("." + d.slideNextClass)),
                o.length > 0 && a.lazy.loadInSlide(n(o)),
                (r = h.children("." + d.slidePrevClass)),
                r.length > 0 && a.lazy.loadInSlide(n(r));
        },
      }),
      (s = {
        LinearSpline: function (f, g) {
          var a,
            d,
            e,
            b,
            c,
            h = function (b, c) {
              for (d = -1, a = b.length; a - d > 1; )
                b[(e = (a + d) >> 1)] <= c ? (d = e) : (a = e);
              return a;
            };
          return (
            (this.x = f),
            (this.y = g),
            (this.lastIndex = f.length - 1),
            (this.interpolate = function (a) {
              return a
                ? ((c = h(this.x, a)),
                  (b = c - 1),
                  ((a - this.x[b]) * (this.y[c] - this.y[b])) /
                    (this.x[c] - this.x[b]) +
                    this.y[b])
                : 0;
            }),
            this
          );
        },
        getInterpolateFunction: function (a) {
          this.controller.spline ||
            (this.controller.spline = this.params.loop
              ? new s.LinearSpline(this.slidesGrid, a.slidesGrid)
              : new s.LinearSpline(this.snapGrid, a.snapGrid));
        },
        setTranslate: function (h, g) {
          var f,
            c,
            a = this,
            b = a.controller.control,
            d;
          function e(b) {
            var d = a.rtlTranslate ? -a.translate : a.translate;
            "slide" === a.params.controller.by &&
              (a.controller.getInterpolateFunction(b),
              (c = -a.controller.spline.interpolate(-d))),
              (c && "container" !== a.params.controller.by) ||
                ((f =
                  (b.maxTranslate() - b.minTranslate()) /
                  (a.maxTranslate() - a.minTranslate())),
                (c = (d - a.minTranslate()) * f + b.minTranslate())),
              a.params.controller.inverse && (c = b.maxTranslate() - c),
              b.updateProgress(c),
              b.setTranslate(c, a),
              b.updateActiveIndex(),
              b.updateSlidesClasses();
          }
          if (Array.isArray(b))
            for (d = 0; d < b.length; d += 1)
              b[d] !== g && b[d] instanceof k && e(b[d]);
          else b instanceof k && g !== b && e(b);
        },
        setTransition: function (e, f) {
          var c,
            d = this,
            b = d.controller.control;
          function g(c) {
            c.setTransition(e, d),
              0 !== e &&
                (c.transitionStart(),
                c.params.autoHeight &&
                  a.nextTick(function () {
                    c.updateAutoHeight();
                  }),
                c.$wrapperEl.transitionEnd(function () {
                  b &&
                    (c.params.loop &&
                      "slide" === d.params.controller.by &&
                      c.loopFix(),
                    c.transitionEnd());
                }));
          }
          if (Array.isArray(b))
            for (c = 0; c < b.length; c += 1)
              b[c] !== f && b[c] instanceof k && g(b[c]);
          else b instanceof k && f !== b && g(b);
        },
      }),
      (U = {
        makeElFocusable: function (a) {
          return a.attr("tabIndex", "0"), a;
        },
        makeElNotFocusable: function (a) {
          return a.attr("tabIndex", "-1"), a;
        },
        addElRole: function (a, b) {
          return a.attr("role", b), a;
        },
        addElLabel: function (a, b) {
          return a.attr("aria-label", b), a;
        },
        disableEl: function (a) {
          return a.attr("aria-disabled", !0), a;
        },
        enableEl: function (a) {
          return a.attr("aria-disabled", !1), a;
        },
        onEnterKey: function (d) {
          var a = this.params.a11y,
            c;
          13 === d.keyCode &&
            ((c = b(d.target)),
            this.navigation &&
              this.navigation.$nextEl &&
              c.is(this.navigation.$nextEl) &&
              ((this.isEnd && !this.params.loop) || this.slideNext(),
              this.isEnd
                ? this.a11y.notify(a.lastSlideMessage)
                : this.a11y.notify(a.nextSlideMessage)),
            this.navigation &&
              this.navigation.$prevEl &&
              c.is(this.navigation.$prevEl) &&
              ((this.isBeginning && !this.params.loop) || this.slidePrev(),
              this.isBeginning
                ? this.a11y.notify(a.firstSlideMessage)
                : this.a11y.notify(a.prevSlideMessage)),
            this.pagination &&
              c.is("." + this.params.pagination.bulletClass) &&
              c[0].click());
        },
        notify: function (b) {
          var a = this.a11y.liveRegion;
          0 !== a.length && (a.html(""), a.html(b));
        },
        updateNavigation: function () {
          if (!this.params.loop && this.navigation) {
            var c = this.navigation,
              a = c.$nextEl,
              b = c.$prevEl;
            b &&
              b.length > 0 &&
              (this.isBeginning
                ? (this.a11y.disableEl(b), this.a11y.makeElNotFocusable(b))
                : (this.a11y.enableEl(b), this.a11y.makeElFocusable(b))),
              a &&
                a.length > 0 &&
                (this.isEnd
                  ? (this.a11y.disableEl(a), this.a11y.makeElNotFocusable(a))
                  : (this.a11y.enableEl(a), this.a11y.makeElFocusable(a)));
          }
        },
        updatePagination: function () {
          var a = this,
            c = a.params.a11y;
          a.pagination &&
            a.params.pagination.clickable &&
            a.pagination.bullets &&
            a.pagination.bullets.length &&
            a.pagination.bullets.each(function (f, e) {
              var d = b(e);
              a.a11y.makeElFocusable(d),
                a.a11y.addElRole(d, "button"),
                a.a11y.addElLabel(
                  d,
                  c.paginationBulletMessage.replace(
                    /\{\{index\}\}/,
                    d.index() + 1
                  )
                );
            });
        },
        init: function () {
          this.$el.append(this.a11y.liveRegion);
          var a,
            b,
            c = this.params.a11y;
          this.navigation &&
            this.navigation.$nextEl &&
            (a = this.navigation.$nextEl),
            this.navigation &&
              this.navigation.$prevEl &&
              (b = this.navigation.$prevEl),
            a &&
              (this.a11y.makeElFocusable(a),
              this.a11y.addElRole(a, "button"),
              this.a11y.addElLabel(a, c.nextSlideMessage),
              a.on("keydown", this.a11y.onEnterKey)),
            b &&
              (this.a11y.makeElFocusable(b),
              this.a11y.addElRole(b, "button"),
              this.a11y.addElLabel(b, c.prevSlideMessage),
              b.on("keydown", this.a11y.onEnterKey)),
            this.pagination &&
              this.params.pagination.clickable &&
              this.pagination.bullets &&
              this.pagination.bullets.length &&
              this.pagination.$el.on(
                "keydown",
                "." + this.params.pagination.bulletClass,
                this.a11y.onEnterKey
              );
        },
        destroy: function () {
          var a, b;
          this.a11y.liveRegion &&
            this.a11y.liveRegion.length > 0 &&
            this.a11y.liveRegion.remove(),
            this.navigation &&
              this.navigation.$nextEl &&
              (a = this.navigation.$nextEl),
            this.navigation &&
              this.navigation.$prevEl &&
              (b = this.navigation.$prevEl),
            a && a.off("keydown", this.a11y.onEnterKey),
            b && b.off("keydown", this.a11y.onEnterKey),
            this.pagination &&
              this.params.pagination.clickable &&
              this.pagination.bullets &&
              this.pagination.bullets.length &&
              this.pagination.$el.off(
                "keydown",
                "." + this.params.pagination.bulletClass,
                this.a11y.onEnterKey
              );
        },
      }),
      (n = {
        init: function () {
          if (this.params.history) {
            if (!c.history || !c.history.pushState)
              return (
                (this.params.history.enabled = !1),
                void (this.params.hashNavigation.enabled = !0)
              );
            var a = this.history;
            (a.initialized = !0),
              (a.paths = n.getPathValues()),
              (a.paths.key || a.paths.value) &&
                (a.scrollToSlide(
                  0,
                  a.paths.value,
                  this.params.runCallbacksOnInit
                ),
                this.params.history.replaceState ||
                  c.addEventListener(
                    "popstate",
                    this.history.setHistoryPopState
                  ));
          }
        },
        destroy: function () {
          this.params.history.replaceState ||
            c.removeEventListener("popstate", this.history.setHistoryPopState);
        },
        setHistoryPopState: function () {
          (this.history.paths = n.getPathValues()),
            this.history.scrollToSlide(
              this.params.speed,
              this.history.paths.value,
              !1
            );
        },
        getPathValues: function () {
          var a = c.location.pathname
              .slice(1)
              .split("/")
              .filter(function (a) {
                return "" !== a;
              }),
            b = a.length;
          return { key: a[b - 2], value: a[b - 1] };
        },
        setHistory: function (d, f) {
          var e, a, b;
          this.history.initialized &&
            this.params.history.enabled &&
            ((e = this.slides.eq(f)),
            (a = n.slugify(e.attr("data-history"))),
            c.location.pathname.includes(d) || (a = d + "/" + a),
            (b = c.history.state),
            (b && b.value === a) ||
              (this.params.history.replaceState
                ? c.history.replaceState({ value: a }, null, a)
                : c.history.pushState({ value: a }, null, a)));
        },
        slugify: function (a) {
          return a
            .toString()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/--+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, "");
        },
        scrollToSlide: function (c, d, e) {
          var a, f, b, g;
          if (d) {
            for (a = 0, f = this.slides.length; a < f; a += 1)
              (b = this.slides.eq(a)),
                n.slugify(b.attr("data-history")) === d &&
                  !b.hasClass(this.params.slideDuplicateClass) &&
                  ((g = b.index()), this.slideTo(g, c, e));
          } else this.slideTo(0, c, e);
        },
      }),
      (z = {
        onHashCange: function () {
          var a, b;
          if (
            (this.emit("hashChange"),
            (a = d.location.hash.replace("#", "")),
            a !== this.slides.eq(this.activeIndex).attr("data-hash"))
          ) {
            if (
              ((b = this.$wrapperEl
                .children(
                  "." + this.params.slideClass + '[data-hash="' + a + '"]'
                )
                .index()),
              void 0 === b)
            )
              return;
            this.slideTo(b);
          }
        },
        setHash: function () {
          if (
            this.hashNavigation.initialized &&
            this.params.hashNavigation.enabled
          )
            if (
              this.params.hashNavigation.replaceState &&
              c.history &&
              c.history.replaceState
            )
              c.history.replaceState(
                null,
                null,
                "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""
              ),
                this.emit("hashSet");
            else {
              var a = this.slides.eq(this.activeIndex),
                b = a.attr("data-hash") || a.attr("data-history");
              (d.location.hash = b || ""), this.emit("hashSet");
            }
        },
        init: function () {
          var f, e, g, a, h;
          if (
            !(
              !this.params.hashNavigation.enabled ||
              (this.params.history && this.params.history.enabled)
            )
          ) {
            if (
              ((this.hashNavigation.initialized = !0),
              (f = d.location.hash.replace("#", "")),
              f)
            )
              for (e = 0, g = this.slides.length; e < g; e += 1)
                (a = this.slides.eq(e)),
                  (a.attr("data-hash") || a.attr("data-history")) === f &&
                    !a.hasClass(this.params.slideDuplicateClass) &&
                    ((h = a.index()),
                    this.slideTo(h, 0, this.params.runCallbacksOnInit, !0));
            this.params.hashNavigation.watchState &&
              b(c).on("hashchange", this.hashNavigation.onHashCange);
          }
        },
        destroy: function () {
          this.params.hashNavigation.watchState &&
            b(c).off("hashchange", this.hashNavigation.onHashCange);
        },
      }),
      (y = {
        run: function () {
          var b = this,
            c = b.slides.eq(b.activeIndex),
            d = b.params.autoplay.delay;
          c.attr("data-swiper-autoplay") &&
            (d = c.attr("data-swiper-autoplay") || b.params.autoplay.delay),
            clearTimeout(b.autoplay.timeout),
            (b.autoplay.timeout = a.nextTick(function () {
              b.params.autoplay.reverseDirection
                ? b.params.loop
                  ? (b.loopFix(),
                    b.slidePrev(b.params.speed, !0, !0),
                    b.emit("autoplay"))
                  : b.isBeginning
                  ? b.params.autoplay.stopOnLastSlide
                    ? b.autoplay.stop()
                    : (b.slideTo(b.slides.length - 1, b.params.speed, !0, !0),
                      b.emit("autoplay"))
                  : (b.slidePrev(b.params.speed, !0, !0), b.emit("autoplay"))
                : b.params.loop
                ? (b.loopFix(),
                  b.slideNext(b.params.speed, !0, !0),
                  b.emit("autoplay"))
                : b.isEnd
                ? b.params.autoplay.stopOnLastSlide
                  ? b.autoplay.stop()
                  : (b.slideTo(0, b.params.speed, !0, !0), b.emit("autoplay"))
                : (b.slideNext(b.params.speed, !0, !0), b.emit("autoplay")),
                b.params.cssMode && b.autoplay.running && b.autoplay.run();
            }, d));
        },
        start: function () {
          return (
            void 0 === this.autoplay.timeout &&
            !this.autoplay.running &&
            ((this.autoplay.running = !0),
            this.emit("autoplayStart"),
            this.autoplay.run(),
            !0)
          );
        },
        stop: function () {
          return (
            !!this.autoplay.running &&
            void 0 !== this.autoplay.timeout &&
            (this.autoplay.timeout &&
              (clearTimeout(this.autoplay.timeout),
              (this.autoplay.timeout = void 0)),
            (this.autoplay.running = !1),
            this.emit("autoplayStop"),
            !0)
          );
        },
        pause: function (a) {
          this.autoplay.running &&
            (this.autoplay.paused ||
              (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
              (this.autoplay.paused = !0),
              0 !== a && this.params.autoplay.waitForTransition
                ? (this.$wrapperEl[0].addEventListener(
                    "transitionend",
                    this.autoplay.onTransitionEnd
                  ),
                  this.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    this.autoplay.onTransitionEnd
                  ))
                : ((this.autoplay.paused = !1), this.autoplay.run())));
        },
      }),
      (R = {
        setTranslate: function () {
          for (var e = this.slides, c = 0, a, b, d, f; c < e.length; c += 1)
            (a = this.slides.eq(c)),
              (b = -a[0].swiperSlideOffset),
              this.params.virtualTranslate || (b -= this.translate),
              (d = 0),
              this.isHorizontal() || ((d = b), (b = 0)),
              (f = this.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(a[0].progress), 0)
                : 1 + Math.min(Math.max(a[0].progress, -1), 0)),
              a
                .css({ opacity: f })
                .transform("translate3d(" + b + "px, " + d + "px, 0px)");
        },
        setTransition: function (b) {
          var a = this,
            c = a.slides,
            e = a.$wrapperEl,
            d;
          c.transition(b),
            a.params.virtualTranslate &&
              0 !== b &&
              ((d = !1),
              c.transitionEnd(function () {
                if (!d && a && !a.destroyed) {
                  (d = !0), (a.animating = !1);
                  for (
                    var c = ["webkitTransitionEnd", "transitionend"], b = 0;
                    b < c.length;
                    b += 1
                  )
                    e.trigger(c[b]);
                }
              }));
        },
      }),
      (P = {
        setTranslate: function () {
          var d,
            t = this.$el,
            q = this.$wrapperEl,
            x = this.slides,
            s = this.width,
            v = this.height,
            r = this.rtlTranslate,
            a = this.size,
            g = this.params.cubeEffect,
            c = this.isHorizontal(),
            z = this.virtual && this.params.virtual.enabled,
            i = 0,
            p,
            e,
            h,
            k,
            l,
            j,
            f,
            u,
            n,
            D,
            m,
            o,
            y,
            B,
            C,
            w,
            E,
            F;
          g.shadow &&
            (c
              ? (0 === (d = q.find(".swiper-cube-shadow")).length &&
                  ((d = b('<div class="swiper-cube-shadow"></div>')),
                  q.append(d)),
                d.css({ height: s + "px" }))
              : 0 === (d = t.find(".swiper-cube-shadow")).length &&
                ((d = b('<div class="swiper-cube-shadow"></div>')),
                t.append(d)));
          for (p = 0; p < x.length; p += 1)
            (e = x.eq(p)),
              (h = p),
              z && (h = parseInt(e.attr("data-swiper-slide-index"), 10)),
              (k = 90 * h),
              (l = Math.floor(k / 360)),
              r && ((k = -k), (l = Math.floor(-k / 360))),
              (j = Math.max(Math.min(e[0].progress, 1), -1)),
              (f = 0),
              (u = 0),
              (n = 0),
              h % 4 == 0
                ? ((f = 4 * -l * a), (n = 0))
                : (h - 1) % 4 == 0
                ? ((f = 0), (n = 4 * -l * a))
                : (h - 2) % 4 == 0
                ? ((f = a + 4 * l * a), (n = a))
                : (h - 3) % 4 == 0 && ((f = -a), (n = 3 * a + 4 * a * l)),
              r && (f = -f),
              c || ((u = f), (f = 0)),
              (D =
                "rotateX(" +
                (c ? 0 : -k) +
                "deg) rotateY(" +
                (c ? k : 0) +
                "deg) translate3d(" +
                f +
                "px, " +
                u +
                "px, " +
                n +
                "px)"),
              (j <= 1 &&
                j > -1 &&
                ((i = 90 * h + 90 * j), r && (i = 90 * -h - 90 * j)),
              e.transform(D),
              g.slideShadows) &&
                ((m = c
                  ? e.find(".swiper-slide-shadow-left")
                  : e.find(".swiper-slide-shadow-top")),
                (o = c
                  ? e.find(".swiper-slide-shadow-right")
                  : e.find(".swiper-slide-shadow-bottom")),
                0 === m.length &&
                  ((m = b(
                    '<div class="swiper-slide-shadow-' +
                      (c ? "left" : "top") +
                      '"></div>'
                  )),
                  e.append(m)),
                0 === o.length &&
                  ((o = b(
                    '<div class="swiper-slide-shadow-' +
                      (c ? "right" : "bottom") +
                      '"></div>'
                  )),
                  e.append(o)),
                m.length && (m[0].style.opacity = Math.max(-j, 0)),
                o.length && (o[0].style.opacity = Math.max(j, 0)));
          q.css({
            "-webkit-transform-origin": "50% 50% -" + a / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + a / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + a / 2 + "px",
            "transform-origin": "50% 50% -" + a / 2 + "px",
          }),
            g.shadow &&
              (c
                ? d.transform(
                    "translate3d(0px, " +
                      (s / 2 + g.shadowOffset) +
                      "px, " +
                      -s / 2 +
                      "px) rotateX(90deg) rotateZ(0deg) scale(" +
                      g.shadowScale +
                      ")"
                  )
                : ((y = Math.abs(i) - 90 * Math.floor(Math.abs(i) / 90)),
                  (B =
                    1.5 -
                    (Math.sin((2 * y * Math.PI) / 360) / 2 +
                      Math.cos((2 * y * Math.PI) / 360) / 2)),
                  (C = g.shadowScale),
                  (w = g.shadowScale / B),
                  (E = g.shadowOffset),
                  d.transform(
                    "scale3d(" +
                      C +
                      ", 1, " +
                      w +
                      ") translate3d(0px, " +
                      (v / 2 + E) +
                      "px, " +
                      -v / 2 / w +
                      "px) rotateX(-90deg)"
                  ))),
            (F = A.isSafari || A.isWebView ? -a / 2 : 0),
            q.transform(
              "translate3d(0px,0," +
                F +
                "px) rotateX(" +
                (this.isHorizontal() ? 0 : i) +
                "deg) rotateY(" +
                (this.isHorizontal() ? -i : 0) +
                "deg)"
            );
        },
        setTransition: function (a) {
          var b = this.$el;
          this.slides
            .transition(a)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(a),
            this.params.cubeEffect.shadow &&
              !this.isHorizontal() &&
              b.find(".swiper-cube-shadow").transition(a);
        },
      }),
      (M = {
        setTranslate: function () {
          for (
            var g = this.slides,
              l = this.rtlTranslate,
              i = 0,
              a,
              c,
              d,
              j,
              h,
              k,
              e,
              f;
            i < g.length;
            i += 1
          )
            (a = g.eq(i)),
              (c = a[0].progress),
              this.params.flipEffect.limitRotation &&
                (c = Math.max(Math.min(a[0].progress, 1), -1)),
              (d = -180 * c),
              (j = 0),
              (h = -a[0].swiperSlideOffset),
              (k = 0),
              (this.isHorizontal()
                ? l && (d = -d)
                : ((k = h), (h = 0), (j = -d), (d = 0)),
              (a[0].style.zIndex = -Math.abs(Math.round(c)) + g.length),
              this.params.flipEffect.slideShadows) &&
                ((e = this.isHorizontal()
                  ? a.find(".swiper-slide-shadow-left")
                  : a.find(".swiper-slide-shadow-top")),
                (f = this.isHorizontal()
                  ? a.find(".swiper-slide-shadow-right")
                  : a.find(".swiper-slide-shadow-bottom")),
                0 === e.length &&
                  ((e = b(
                    '<div class="swiper-slide-shadow-' +
                      (this.isHorizontal() ? "left" : "top") +
                      '"></div>'
                  )),
                  a.append(e)),
                0 === f.length &&
                  ((f = b(
                    '<div class="swiper-slide-shadow-' +
                      (this.isHorizontal() ? "right" : "bottom") +
                      '"></div>'
                  )),
                  a.append(f)),
                e.length && (e[0].style.opacity = Math.max(-c, 0)),
                f.length && (f[0].style.opacity = Math.max(c, 0))),
              a.transform(
                "translate3d(" +
                  h +
                  "px, " +
                  k +
                  "px, 0px) rotateX(" +
                  j +
                  "deg) rotateY(" +
                  d +
                  "deg)"
              );
        },
        setTransition: function (b) {
          var a = this,
            c = a.slides,
            e = a.activeIndex,
            f = a.$wrapperEl,
            d;
          c
            .transition(b)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(b),
            a.params.virtualTranslate &&
              0 !== b &&
              ((d = !1),
              c.eq(e).transitionEnd(function () {
                if (!d && a && !a.destroyed) {
                  (d = !0), (a.animating = !1);
                  for (
                    var c = ["webkitTransitionEnd", "transitionend"], b = 0;
                    b < c.length;
                    b += 1
                  )
                    f.trigger(c[b]);
                }
              }));
        },
      }),
      (T = {
        setTranslate: function () {
          for (
            var B = this.width,
              A = this.height,
              t = this.slides,
              v = this.$wrapperEl,
              w = this.slidesSizesGrid,
              f = this.params.coverflowEffect,
              c = this.isHorizontal(),
              u = this.translate,
              s = c ? B / 2 - u : A / 2 - u,
              r = c ? f.rotate : -f.rotate,
              y = f.depth,
              j = 0,
              x = t.length,
              d,
              l,
              a,
              p,
              q,
              k,
              h,
              o,
              n,
              m,
              z,
              g,
              i;
            j < x;
            j += 1
          )
            (d = t.eq(j)),
              (l = w[j]),
              (a = ((s - d[0].swiperSlideOffset - l / 2) / l) * f.modifier),
              (p = c ? r * a : 0),
              (q = c ? 0 : r * a),
              (k = -y * Math.abs(a)),
              (h = f.stretch),
              "string" == typeof h &&
                -1 !== h.indexOf("%") &&
                (h = (parseFloat(f.stretch) / 100) * l),
              (o = c ? 0 : h * a),
              (n = c ? h * a : 0),
              (m = 1 - (1 - f.scale) * Math.abs(a)),
              Math.abs(n) < 0.001 && (n = 0),
              Math.abs(o) < 0.001 && (o = 0),
              Math.abs(k) < 0.001 && (k = 0),
              Math.abs(p) < 0.001 && (p = 0),
              Math.abs(q) < 0.001 && (q = 0),
              Math.abs(m) < 0.001 && (m = 0),
              (z =
                "translate3d(" +
                n +
                "px," +
                o +
                "px," +
                k +
                "px)  rotateX(" +
                q +
                "deg) rotateY(" +
                p +
                "deg) scale(" +
                m +
                ")"),
              (d.transform(z),
              (d[0].style.zIndex = 1 - Math.abs(Math.round(a))),
              f.slideShadows) &&
                ((g = c
                  ? d.find(".swiper-slide-shadow-left")
                  : d.find(".swiper-slide-shadow-top")),
                (i = c
                  ? d.find(".swiper-slide-shadow-right")
                  : d.find(".swiper-slide-shadow-bottom")),
                0 === g.length &&
                  ((g = b(
                    '<div class="swiper-slide-shadow-' +
                      (c ? "left" : "top") +
                      '"></div>'
                  )),
                  d.append(g)),
                0 === i.length &&
                  ((i = b(
                    '<div class="swiper-slide-shadow-' +
                      (c ? "right" : "bottom") +
                      '"></div>'
                  )),
                  d.append(i)),
                g.length && (g[0].style.opacity = a > 0 ? a : 0),
                i.length && (i[0].style.opacity = -a > 0 ? -a : 0));
          (e.pointerEvents || e.prefixedPointerEvents) &&
            (v[0].style.perspectiveOrigin = s + "px 50%");
        },
        setTransition: function (a) {
          this.slides
            .transition(a)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(a);
        },
      }),
      (K = {
        init: function () {
          var b = this.params.thumbs,
            c = this.constructor;
          b.swiper instanceof c
            ? ((this.thumbs.swiper = b.swiper),
              a.extend(this.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              a.extend(this.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }))
            : a.isObject(b.swiper) &&
              ((this.thumbs.swiper = new c(
                a.extend({}, b.swiper, {
                  watchSlidesVisibility: !0,
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                })
              )),
              (this.thumbs.swiperCreated = !0)),
            this.thumbs.swiper.$el.addClass(
              this.params.thumbs.thumbsContainerClass
            ),
            this.thumbs.swiper.on("tap", this.thumbs.onThumbClick);
        },
        onThumbClick: function () {
          var c = this.thumbs.swiper,
            g,
            h,
            d,
            a,
            e,
            f;
          c &&
            ((g = c.clickedIndex),
            (h = c.clickedSlide),
            (h && b(h).hasClass(this.params.thumbs.slideThumbActiveClass)) ||
              null == g ||
              ((d = c.params.loop
                ? parseInt(
                    b(c.clickedSlide).attr("data-swiper-slide-index"),
                    10
                  )
                : g),
              this.params.loop &&
                ((a = this.activeIndex),
                this.slides.eq(a).hasClass(this.params.slideDuplicateClass) &&
                  (this.loopFix(),
                  (this._clientLeft = this.$wrapperEl[0].clientLeft),
                  (a = this.activeIndex)),
                (e = this.slides
                  .eq(a)
                  .prevAll('[data-swiper-slide-index="' + d + '"]')
                  .eq(0)
                  .index()),
                (f = this.slides
                  .eq(a)
                  .nextAll('[data-swiper-slide-index="' + d + '"]')
                  .eq(0)
                  .index()),
                (d =
                  void 0 === e ? f : void 0 === f ? e : f - a < a - e ? f : e)),
              this.slideTo(d)));
        },
        update: function (n) {
          var a = this.thumbs.swiper,
            k,
            j,
            m,
            b,
            h,
            c,
            f,
            e,
            d,
            l,
            i,
            g;
          if (a)
            if (
              ((k =
                "auto" === a.params.slidesPerView
                  ? a.slidesPerViewDynamic()
                  : a.params.slidesPerView),
              (j = this.params.thumbs.autoScrollOffset),
              (m = j && !a.params.loop),
              (this.realIndex !== a.realIndex || m) &&
                ((c = a.activeIndex),
                a.params.loop
                  ? (a.slides.eq(c).hasClass(a.params.slideDuplicateClass) &&
                      (a.loopFix(),
                      (a._clientLeft = a.$wrapperEl[0].clientLeft),
                      (c = a.activeIndex)),
                    (f = a.slides
                      .eq(c)
                      .prevAll(
                        '[data-swiper-slide-index="' + this.realIndex + '"]'
                      )
                      .eq(0)
                      .index()),
                    (e = a.slides
                      .eq(c)
                      .nextAll(
                        '[data-swiper-slide-index="' + this.realIndex + '"]'
                      )
                      .eq(0)
                      .index()),
                    (b =
                      void 0 === f
                        ? e
                        : void 0 === e
                        ? f
                        : e - c == c - f
                        ? c
                        : e - c < c - f
                        ? e
                        : f),
                    (h =
                      this.activeIndex > this.previousIndex ? "next" : "prev"))
                  : (h =
                      (b = this.realIndex) > this.previousIndex
                        ? "next"
                        : "prev"),
                m && (b += "next" === h ? j : -1 * j),
                a.visibleSlidesIndexes &&
                  a.visibleSlidesIndexes.indexOf(b) < 0 &&
                  (a.params.centeredSlides
                    ? (b =
                        b > c
                          ? b - Math.floor(k / 2) + 1
                          : b + Math.floor(k / 2) - 1)
                    : b > c && (b = b - k + 1),
                  a.slideTo(b, n ? 0 : void 0))),
              (d = 1),
              (l = this.params.thumbs.slideThumbActiveClass),
              this.params.slidesPerView > 1 &&
                !this.params.centeredSlides &&
                (d = this.params.slidesPerView),
              this.params.thumbs.multipleActiveThumbs || (d = 1),
              (d = Math.floor(d)),
              a.slides.removeClass(l),
              a.params.loop || (a.params.virtual && a.params.virtual.enabled))
            )
              for (i = 0; i < d; i += 1)
                a.$wrapperEl
                  .children(
                    '[data-swiper-slide-index="' + (this.realIndex + i) + '"]'
                  )
                  .addClass(l);
            else
              for (g = 0; g < d; g += 1)
                a.slides.eq(this.realIndex + g).addClass(l);
        },
      }),
      (aq = [
        ag,
        af,
        ad,
        ab,
        ao,
        ac,
        ae,
        {
          name: "mousewheel",
          params: {
            mousewheel: {
              enabled: !1,
              releaseOnEdges: !1,
              invert: !1,
              forceToAxis: !1,
              sensitivity: 1,
              eventsTarged: "container",
            },
          },
          create: function () {
            a.extend(this, {
              mousewheel: {
                enabled: !1,
                enable: m.enable.bind(this),
                disable: m.disable.bind(this),
                handle: m.handle.bind(this),
                handleMouseEnter: m.handleMouseEnter.bind(this),
                handleMouseLeave: m.handleMouseLeave.bind(this),
                animateSlider: m.animateSlider.bind(this),
                releaseScroll: m.releaseScroll.bind(this),
                lastScrollTime: a.now(),
                lastEventBeforeSnap: void 0,
                recentWheelEvents: [],
              },
            });
          },
          on: {
            init: function () {
              !this.params.mousewheel.enabled &&
                this.params.cssMode &&
                this.mousewheel.disable(),
                this.params.mousewheel.enabled && this.mousewheel.enable();
            },
            destroy: function () {
              this.params.cssMode && this.mousewheel.enable(),
                this.mousewheel.enabled && this.mousewheel.disable();
            },
          },
        },
        {
          name: "navigation",
          params: {
            navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: !1,
              disabledClass: "swiper-button-disabled",
              hiddenClass: "swiper-button-hidden",
              lockClass: "swiper-button-lock",
            },
          },
          create: function () {
            a.extend(this, {
              navigation: {
                init: r.init.bind(this),
                update: r.update.bind(this),
                destroy: r.destroy.bind(this),
                onNextClick: r.onNextClick.bind(this),
                onPrevClick: r.onPrevClick.bind(this),
              },
            });
          },
          on: {
            init: function () {
              this.navigation.init(), this.navigation.update();
            },
            toEdge: function () {
              this.navigation.update();
            },
            fromEdge: function () {
              this.navigation.update();
            },
            destroy: function () {
              this.navigation.destroy();
            },
            click: function (e) {
              var d,
                f = this.navigation,
                a = f.$nextEl,
                c = f.$prevEl;
              !this.params.navigation.hideOnClick ||
                b(e.target).is(c) ||
                b(e.target).is(a) ||
                (a
                  ? (d = a.hasClass(this.params.navigation.hiddenClass))
                  : c && (d = c.hasClass(this.params.navigation.hiddenClass)),
                !0 === d
                  ? this.emit("navigationShow", this)
                  : this.emit("navigationHide", this),
                a && a.toggleClass(this.params.navigation.hiddenClass),
                c && c.toggleClass(this.params.navigation.hiddenClass));
            },
          },
        },
        {
          name: "pagination",
          params: {
            pagination: {
              el: null,
              bulletElement: "span",
              clickable: !1,
              hideOnClick: !1,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: !1,
              type: "bullets",
              dynamicBullets: !1,
              dynamicMainBullets: 1,
              formatFractionCurrent: function (a) {
                return a;
              },
              formatFractionTotal: function (a) {
                return a;
              },
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
              modifierClass: "swiper-pagination-",
              currentClass: "swiper-pagination-current",
              totalClass: "swiper-pagination-total",
              hiddenClass: "swiper-pagination-hidden",
              progressbarFillClass: "swiper-pagination-progressbar-fill",
              progressbarOppositeClass:
                "swiper-pagination-progressbar-opposite",
              clickableClass: "swiper-pagination-clickable",
              lockClass: "swiper-pagination-lock",
            },
          },
          create: function () {
            a.extend(this, {
              pagination: {
                init: w.init.bind(this),
                render: w.render.bind(this),
                update: w.update.bind(this),
                destroy: w.destroy.bind(this),
                dynamicBulletIndex: 0,
              },
            });
          },
          on: {
            init: function () {
              this.pagination.init(),
                this.pagination.render(),
                this.pagination.update();
            },
            activeIndexChange: function () {
              (this.params.loop || void 0 === this.snapIndex) &&
                this.pagination.update();
            },
            snapIndexChange: function () {
              this.params.loop || this.pagination.update();
            },
            slidesLengthChange: function () {
              this.params.loop &&
                (this.pagination.render(), this.pagination.update());
            },
            snapGridLengthChange: function () {
              this.params.loop ||
                (this.pagination.render(), this.pagination.update());
            },
            destroy: function () {
              this.pagination.destroy();
            },
            click: function (a) {
              this.params.pagination.el &&
                this.params.pagination.hideOnClick &&
                this.pagination.$el.length > 0 &&
                !b(a.target).hasClass(this.params.pagination.bulletClass) &&
                (!0 ===
                this.pagination.$el.hasClass(this.params.pagination.hiddenClass)
                  ? this.emit("paginationShow", this)
                  : this.emit("paginationHide", this),
                this.pagination.$el.toggleClass(
                  this.params.pagination.hiddenClass
                ));
            },
          },
        },
        {
          name: "scrollbar",
          params: {
            scrollbar: {
              el: null,
              dragSize: "auto",
              hide: !1,
              draggable: !1,
              snapOnRelease: !0,
              lockClass: "swiper-scrollbar-lock",
              dragClass: "swiper-scrollbar-drag",
            },
          },
          create: function () {
            a.extend(this, {
              scrollbar: {
                init: j.init.bind(this),
                destroy: j.destroy.bind(this),
                updateSize: j.updateSize.bind(this),
                setTranslate: j.setTranslate.bind(this),
                setTransition: j.setTransition.bind(this),
                enableDraggable: j.enableDraggable.bind(this),
                disableDraggable: j.disableDraggable.bind(this),
                setDragPosition: j.setDragPosition.bind(this),
                getPointerPosition: j.getPointerPosition.bind(this),
                onDragStart: j.onDragStart.bind(this),
                onDragMove: j.onDragMove.bind(this),
                onDragEnd: j.onDragEnd.bind(this),
                isTouched: !1,
                timeout: null,
                dragTimeout: null,
              },
            });
          },
          on: {
            init: function () {
              this.scrollbar.init(),
                this.scrollbar.updateSize(),
                this.scrollbar.setTranslate();
            },
            update: function () {
              this.scrollbar.updateSize();
            },
            resize: function () {
              this.scrollbar.updateSize();
            },
            observerUpdate: function () {
              this.scrollbar.updateSize();
            },
            setTranslate: function () {
              this.scrollbar.setTranslate();
            },
            setTransition: function (a) {
              this.scrollbar.setTransition(a);
            },
            destroy: function () {
              this.scrollbar.destroy();
            },
          },
        },
        {
          name: "parallax",
          params: { parallax: { enabled: !1 } },
          create: function () {
            a.extend(this, {
              parallax: {
                setTransform: I.setTransform.bind(this),
                setTranslate: I.setTranslate.bind(this),
                setTransition: I.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              this.params.parallax.enabled &&
                ((this.params.watchSlidesProgress = !0),
                (this.originalParams.watchSlidesProgress = !0));
            },
            init: function () {
              this.params.parallax.enabled && this.parallax.setTranslate();
            },
            setTranslate: function () {
              this.params.parallax.enabled && this.parallax.setTranslate();
            },
            setTransition: function (a) {
              this.params.parallax.enabled && this.parallax.setTransition(a);
            },
          },
        },
        {
          name: "zoom",
          params: {
            zoom: {
              enabled: !1,
              maxRatio: 3,
              minRatio: 1,
              toggle: !0,
              containerClass: "swiper-zoom-container",
              zoomedSlideClass: "swiper-slide-zoomed",
            },
          },
          create: function () {
            var b = this,
              d = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                  $slideEl: void 0,
                  slideWidth: void 0,
                  slideHeight: void 0,
                  $imageEl: void 0,
                  $imageWrapEl: void 0,
                  maxRatio: 3,
                },
                image: {
                  isTouched: void 0,
                  isMoved: void 0,
                  currentX: void 0,
                  currentY: void 0,
                  minX: void 0,
                  minY: void 0,
                  maxX: void 0,
                  maxY: void 0,
                  width: void 0,
                  height: void 0,
                  startX: void 0,
                  startY: void 0,
                  touchesStart: {},
                  touchesCurrent: {},
                },
                velocity: {
                  x: void 0,
                  y: void 0,
                  prevPositionX: void 0,
                  prevPositionY: void 0,
                  prevTime: void 0,
                },
              },
              c;
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
              .split(" ")
              .forEach(function (a) {
                d[a] = J[a].bind(b);
              }),
              a.extend(b, { zoom: d }),
              (c = 1),
              Object.defineProperty(b.zoom, "scale", {
                get: function () {
                  return c;
                },
                set: function (a) {
                  if (c !== a) {
                    var d = b.zoom.gesture.$imageEl
                        ? b.zoom.gesture.$imageEl[0]
                        : void 0,
                      e = b.zoom.gesture.$slideEl
                        ? b.zoom.gesture.$slideEl[0]
                        : void 0;
                    b.emit("zoomChange", a, d, e);
                  }
                  c = a;
                },
              });
          },
          on: {
            init: function () {
              this.params.zoom.enabled && this.zoom.enable();
            },
            destroy: function () {
              this.zoom.disable();
            },
            touchStart: function (a) {
              this.zoom.enabled && this.zoom.onTouchStart(a);
            },
            touchEnd: function (a) {
              this.zoom.enabled && this.zoom.onTouchEnd(a);
            },
            doubleTap: function (a) {
              this.params.zoom.enabled &&
                this.zoom.enabled &&
                this.params.zoom.toggle &&
                this.zoom.toggle(a);
            },
            transitionEnd: function () {
              this.zoom.enabled &&
                this.params.zoom.enabled &&
                this.zoom.onTransitionEnd();
            },
            slideChange: function () {
              this.zoom.enabled &&
                this.params.zoom.enabled &&
                this.params.cssMode &&
                this.zoom.onTransitionEnd();
            },
          },
        },
        {
          name: "lazy",
          params: {
            lazy: {
              enabled: !1,
              loadPrevNext: !1,
              loadPrevNextAmount: 1,
              loadOnTransitionStart: !1,
              elementClass: "swiper-lazy",
              loadingClass: "swiper-lazy-loading",
              loadedClass: "swiper-lazy-loaded",
              preloaderClass: "swiper-lazy-preloader",
            },
          },
          create: function () {
            a.extend(this, {
              lazy: {
                initialImageLoaded: !1,
                load: Q.load.bind(this),
                loadInSlide: Q.loadInSlide.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              this.params.lazy.enabled &&
                this.params.preloadImages &&
                (this.params.preloadImages = !1);
            },
            init: function () {
              this.params.lazy.enabled &&
                !this.params.loop &&
                0 === this.params.initialSlide &&
                this.lazy.load();
            },
            scroll: function () {
              this.params.freeMode &&
                !this.params.freeModeSticky &&
                this.lazy.load();
            },
            resize: function () {
              this.params.lazy.enabled && this.lazy.load();
            },
            scrollbarDragMove: function () {
              this.params.lazy.enabled && this.lazy.load();
            },
            transitionStart: function () {
              this.params.lazy.enabled &&
                (this.params.lazy.loadOnTransitionStart ||
                  (!this.params.lazy.loadOnTransitionStart &&
                    !this.lazy.initialImageLoaded)) &&
                this.lazy.load();
            },
            transitionEnd: function () {
              this.params.lazy.enabled &&
                !this.params.lazy.loadOnTransitionStart &&
                this.lazy.load();
            },
            slideChange: function () {
              this.params.lazy.enabled &&
                this.params.cssMode &&
                this.lazy.load();
            },
          },
        },
        {
          name: "controller",
          params: { controller: { control: void 0, inverse: !1, by: "slide" } },
          create: function () {
            a.extend(this, {
              controller: {
                control: this.params.controller.control,
                getInterpolateFunction: s.getInterpolateFunction.bind(this),
                setTranslate: s.setTranslate.bind(this),
                setTransition: s.setTransition.bind(this),
              },
            });
          },
          on: {
            update: function () {
              this.controller.control &&
                this.controller.spline &&
                ((this.controller.spline = void 0),
                delete this.controller.spline);
            },
            resize: function () {
              this.controller.control &&
                this.controller.spline &&
                ((this.controller.spline = void 0),
                delete this.controller.spline);
            },
            observerUpdate: function () {
              this.controller.control &&
                this.controller.spline &&
                ((this.controller.spline = void 0),
                delete this.controller.spline);
            },
            setTranslate: function (a, b) {
              this.controller.control && this.controller.setTranslate(a, b);
            },
            setTransition: function (a, b) {
              this.controller.control && this.controller.setTransition(a, b);
            },
          },
        },
        {
          name: "a11y",
          params: {
            a11y: {
              enabled: !0,
              notificationClass: "swiper-notification",
              prevSlideMessage: "Previous slide",
              nextSlideMessage: "Next slide",
              firstSlideMessage: "This is the first slide",
              lastSlideMessage: "This is the last slide",
              paginationBulletMessage: "Go to slide {{index}}",
            },
          },
          create: function () {
            var c = this;
            a.extend(c, {
              a11y: {
                liveRegion: b(
                  '<span class="' +
                    c.params.a11y.notificationClass +
                    '" aria-live="assertive" aria-atomic="true"></span>'
                ),
              },
            }),
              Object.keys(U).forEach(function (a) {
                c.a11y[a] = U[a].bind(c);
              });
          },
          on: {
            init: function () {
              this.params.a11y.enabled &&
                (this.a11y.init(), this.a11y.updateNavigation());
            },
            toEdge: function () {
              this.params.a11y.enabled && this.a11y.updateNavigation();
            },
            fromEdge: function () {
              this.params.a11y.enabled && this.a11y.updateNavigation();
            },
            paginationUpdate: function () {
              this.params.a11y.enabled && this.a11y.updatePagination();
            },
            destroy: function () {
              this.params.a11y.enabled && this.a11y.destroy();
            },
          },
        },
        {
          name: "history",
          params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
          create: function () {
            a.extend(this, {
              history: {
                init: n.init.bind(this),
                setHistory: n.setHistory.bind(this),
                setHistoryPopState: n.setHistoryPopState.bind(this),
                scrollToSlide: n.scrollToSlide.bind(this),
                destroy: n.destroy.bind(this),
              },
            });
          },
          on: {
            init: function () {
              this.params.history.enabled && this.history.init();
            },
            destroy: function () {
              this.params.history.enabled && this.history.destroy();
            },
            transitionEnd: function () {
              this.history.initialized &&
                this.history.setHistory(
                  this.params.history.key,
                  this.activeIndex
                );
            },
            slideChange: function () {
              this.history.initialized &&
                this.params.cssMode &&
                this.history.setHistory(
                  this.params.history.key,
                  this.activeIndex
                );
            },
          },
        },
        {
          name: "hash-navigation",
          params: {
            hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
          },
          create: function () {
            a.extend(this, {
              hashNavigation: {
                initialized: !1,
                init: z.init.bind(this),
                destroy: z.destroy.bind(this),
                setHash: z.setHash.bind(this),
                onHashCange: z.onHashCange.bind(this),
              },
            });
          },
          on: {
            init: function () {
              this.params.hashNavigation.enabled && this.hashNavigation.init();
            },
            destroy: function () {
              this.params.hashNavigation.enabled &&
                this.hashNavigation.destroy();
            },
            transitionEnd: function () {
              this.hashNavigation.initialized && this.hashNavigation.setHash();
            },
            slideChange: function () {
              this.hashNavigation.initialized &&
                this.params.cssMode &&
                this.hashNavigation.setHash();
            },
          },
        },
        {
          name: "autoplay",
          params: {
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
            },
          },
          create: function () {
            var b = this;
            a.extend(b, {
              autoplay: {
                running: !1,
                paused: !1,
                run: y.run.bind(b),
                start: y.start.bind(b),
                stop: y.stop.bind(b),
                pause: y.pause.bind(b),
                onVisibilityChange: function () {
                  "hidden" === document.visibilityState &&
                    b.autoplay.running &&
                    b.autoplay.pause(),
                    "visible" === document.visibilityState &&
                      b.autoplay.paused &&
                      (b.autoplay.run(), (b.autoplay.paused = !1));
                },
                onTransitionEnd: function (a) {
                  b &&
                    !b.destroyed &&
                    b.$wrapperEl &&
                    a.target === this &&
                    (b.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      b.autoplay.onTransitionEnd
                    ),
                    b.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      b.autoplay.onTransitionEnd
                    ),
                    (b.autoplay.paused = !1),
                    b.autoplay.running ? b.autoplay.run() : b.autoplay.stop());
                },
              },
            });
          },
          on: {
            init: function () {
              this.params.autoplay.enabled &&
                (this.autoplay.start(),
                document.addEventListener(
                  "visibilitychange",
                  this.autoplay.onVisibilityChange
                ));
            },
            beforeTransitionStart: function (a, b) {
              this.autoplay.running &&
                (b || !this.params.autoplay.disableOnInteraction
                  ? this.autoplay.pause(a)
                  : this.autoplay.stop());
            },
            sliderFirstMove: function () {
              this.autoplay.running &&
                (this.params.autoplay.disableOnInteraction
                  ? this.autoplay.stop()
                  : this.autoplay.pause());
            },
            touchEnd: function () {
              this.params.cssMode &&
                this.autoplay.paused &&
                !this.params.autoplay.disableOnInteraction &&
                this.autoplay.run();
            },
            destroy: function () {
              this.autoplay.running && this.autoplay.stop(),
                document.removeEventListener(
                  "visibilitychange",
                  this.autoplay.onVisibilityChange
                );
            },
          },
        },
        {
          name: "effect-fade",
          params: { fadeEffect: { crossFade: !1 } },
          create: function () {
            a.extend(this, {
              fadeEffect: {
                setTranslate: R.setTranslate.bind(this),
                setTransition: R.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              if ("fade" === this.params.effect) {
                this.classNames.push(
                  this.params.containerModifierClass + "fade"
                );
                var b = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0,
                };
                a.extend(this.params, b), a.extend(this.originalParams, b);
              }
            },
            setTranslate: function () {
              "fade" === this.params.effect && this.fadeEffect.setTranslate();
            },
            setTransition: function (a) {
              "fade" === this.params.effect && this.fadeEffect.setTransition(a);
            },
          },
        },
        {
          name: "effect-cube",
          params: {
            cubeEffect: {
              slideShadows: !0,
              shadow: !0,
              shadowOffset: 20,
              shadowScale: 0.94,
            },
          },
          create: function () {
            a.extend(this, {
              cubeEffect: {
                setTranslate: P.setTranslate.bind(this),
                setTransition: P.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              if ("cube" === this.params.effect) {
                this.classNames.push(
                  this.params.containerModifierClass + "cube"
                ),
                  this.classNames.push(
                    this.params.containerModifierClass + "3d"
                  );
                var b = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  resistanceRatio: 0,
                  spaceBetween: 0,
                  centeredSlides: !1,
                  virtualTranslate: !0,
                };
                a.extend(this.params, b), a.extend(this.originalParams, b);
              }
            },
            setTranslate: function () {
              "cube" === this.params.effect && this.cubeEffect.setTranslate();
            },
            setTransition: function (a) {
              "cube" === this.params.effect && this.cubeEffect.setTransition(a);
            },
          },
        },
        {
          name: "effect-flip",
          params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
          create: function () {
            a.extend(this, {
              flipEffect: {
                setTranslate: M.setTranslate.bind(this),
                setTransition: M.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              if ("flip" === this.params.effect) {
                this.classNames.push(
                  this.params.containerModifierClass + "flip"
                ),
                  this.classNames.push(
                    this.params.containerModifierClass + "3d"
                  );
                var b = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0,
                };
                a.extend(this.params, b), a.extend(this.originalParams, b);
              }
            },
            setTranslate: function () {
              "flip" === this.params.effect && this.flipEffect.setTranslate();
            },
            setTransition: function (a) {
              "flip" === this.params.effect && this.flipEffect.setTransition(a);
            },
          },
        },
        {
          name: "effect-coverflow",
          params: {
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              scale: 1,
              modifier: 1,
              slideShadows: !0,
            },
          },
          create: function () {
            a.extend(this, {
              coverflowEffect: {
                setTranslate: T.setTranslate.bind(this),
                setTransition: T.setTransition.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              "coverflow" === this.params.effect &&
                (this.classNames.push(
                  this.params.containerModifierClass + "coverflow"
                ),
                this.classNames.push(this.params.containerModifierClass + "3d"),
                (this.params.watchSlidesProgress = !0),
                (this.originalParams.watchSlidesProgress = !0));
            },
            setTranslate: function () {
              "coverflow" === this.params.effect &&
                this.coverflowEffect.setTranslate();
            },
            setTransition: function (a) {
              "coverflow" === this.params.effect &&
                this.coverflowEffect.setTransition(a);
            },
          },
        },
        {
          name: "thumbs",
          params: {
            thumbs: {
              swiper: null,
              multipleActiveThumbs: !0,
              autoScrollOffset: 0,
              slideThumbActiveClass: "swiper-slide-thumb-active",
              thumbsContainerClass: "swiper-container-thumbs",
            },
          },
          create: function () {
            a.extend(this, {
              thumbs: {
                swiper: null,
                init: K.init.bind(this),
                update: K.update.bind(this),
                onThumbClick: K.onThumbClick.bind(this),
              },
            });
          },
          on: {
            beforeInit: function () {
              var a = this.params.thumbs;
              a && a.swiper && (this.thumbs.init(), this.thumbs.update(!0));
            },
            slideChange: function () {
              this.thumbs.swiper && this.thumbs.update();
            },
            update: function () {
              this.thumbs.swiper && this.thumbs.update();
            },
            resize: function () {
              this.thumbs.swiper && this.thumbs.update();
            },
            observerUpdate: function () {
              this.thumbs.swiper && this.thumbs.update();
            },
            setTransition: function (b) {
              var a = this.thumbs.swiper;
              a && a.setTransition(b);
            },
            beforeDestroy: function () {
              var a = this.thumbs.swiper;
              a && this.thumbs.swiperCreated && a && a.destroy();
            },
          },
        },
      ]),
      void 0 === k.use &&
        ((k.use = k.Class.use), (k.installModule = k.Class.installModule)),
      k.use(aq),
      k
    );
  }),
  !(function (b, c, a, q) {
    "use strict";
    function i(b, c) {
      var f,
        h,
        g,
        d = [],
        i = 0;
      (b && b.isDefaultPrevented()) ||
        (b.preventDefault(),
        (c = c || {}),
        b && b.data && (c = e(b.data.options, c)),
        (f = c.$target || a(b.currentTarget).trigger("blur")),
        ((g = a.fancybox.getInstance()) && g.$trigger && g.$trigger.is(f)) ||
          (c.selector
            ? (d = a(c.selector))
            : ((h = f.attr("data-fancybox") || ""),
              h
                ? ((d = b.data ? b.data.items : []),
                  (d = d.length
                    ? d.filter('[data-fancybox="' + h + '"]')
                    : a('[data-fancybox="' + h + '"]')))
                : (d = [f])),
          (i = a(d).index(f)),
          i < 0 && (i = 0),
          (g = a.fancybox.open(d, c, i)),
          (g.$trigger = f)));
    }
    if (((b.console = b.console || { info: function (a) {} }), a)) {
      if (a.fn.fancybox)
        return void console.info("fancyBox already initialized");
      var n = {
          closeExisting: !1,
          loop: !1,
          gutter: 50,
          keyboard: !0,
          preventCaptionOverlap: !0,
          arrows: !0,
          infobar: !0,
          smallBtn: "auto",
          toolbar: "auto",
          buttons: ["zoom", "slideShow", "thumbs", "close"],
          idleTime: 3,
          protect: !1,
          modal: !1,
          image: { preload: !1 },
          ajax: { settings: { data: { fancybox: !0 } } },
          iframe: {
            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
            preload: !0,
            css: {},
            attr: { scrolling: "auto" },
          },
          video: {
            tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
            format: "",
            autoStart: !0,
          },
          defaultType: "image",
          animationEffect: "zoom",
          animationDuration: 366,
          zoomOpacity: "auto",
          transitionEffect: "fade",
          transitionDuration: 366,
          slideClass: "",
          baseClass: "",
          baseTpl:
            '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
          spinnerTpl: '<div class="fancybox-loading"></div>',
          errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
          btnTpl: {
            download:
              '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
            zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
            close:
              '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
            arrowLeft:
              '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
            arrowRight:
              '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
            smallBtn:
              '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
          },
          parentEl: "body",
          hideScrollbar: !0,
          autoFocus: !0,
          backFocus: !0,
          trapFocus: !0,
          fullScreen: { autoStart: !1 },
          touch: { vertical: !0, momentum: !0 },
          hash: null,
          media: {},
          slideShow: { autoStart: !1, speed: 3e3 },
          thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y",
          },
          wheel: "auto",
          onInit: a.noop,
          beforeLoad: a.noop,
          afterLoad: a.noop,
          beforeShow: a.noop,
          afterShow: a.noop,
          beforeClose: a.noop,
          afterClose: a.noop,
          onActivate: a.noop,
          onDeactivate: a.noop,
          clickContent: function (a, b) {
            return "image" === a.type && "zoom";
          },
          clickSlide: "close",
          clickOutside: "close",
          dblclickContent: !1,
          dblclickSlide: !1,
          dblclickOutside: !1,
          mobile: {
            preventCaptionOverlap: !1,
            idleTime: !1,
            clickContent: function (a, b) {
              return "image" === a.type && "toggleControls";
            },
            clickSlide: function (a, b) {
              return "image" === a.type ? "toggleControls" : "close";
            },
            dblclickContent: function (a, b) {
              return "image" === a.type && "zoom";
            },
            dblclickSlide: function (a, b) {
              return "image" === a.type && "zoom";
            },
          },
          lang: "en",
          i18n: {
            en: {
              CLOSE: "Close",
              NEXT: "Next",
              PREV: "Previous",
              ERROR:
                "The requested content cannot be loaded. <br/> Please try again later.",
              PLAY_START: "Start slideshow",
              PLAY_STOP: "Pause slideshow",
              FULL_SCREEN: "Full screen",
              THUMBS: "Thumbnails",
              DOWNLOAD: "Download",
              SHARE: "Share",
              ZOOM: "Zoom",
            },
            de: {
              CLOSE: "Schlie&szlig;en",
              NEXT: "Weiter",
              PREV: "Zur&uuml;ck",
              ERROR:
                "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
              PLAY_START: "Diaschau starten",
              PLAY_STOP: "Diaschau beenden",
              FULL_SCREEN: "Vollbild",
              THUMBS: "Vorschaubilder",
              DOWNLOAD: "Herunterladen",
              SHARE: "Teilen",
              ZOOM: "Vergr&ouml;&szlig;ern",
            },
          },
        },
        h = a(b),
        d = a(c),
        p = 0,
        m = function (b) {
          return b && b.hasOwnProperty && b instanceof a;
        },
        k = (function () {
          return (
            b.requestAnimationFrame ||
            b.webkitRequestAnimationFrame ||
            b.mozRequestAnimationFrame ||
            b.oRequestAnimationFrame ||
            function (a) {
              return b.setTimeout(a, 1e3 / 60);
            }
          );
        })(),
        l = (function () {
          return (
            b.cancelAnimationFrame ||
            b.webkitCancelAnimationFrame ||
            b.mozCancelAnimationFrame ||
            b.oCancelAnimationFrame ||
            function (a) {
              b.clearTimeout(a);
            }
          );
        })(),
        g = (function () {
          var a,
            d = c.createElement("fakeelement"),
            b = {
              transition: "transitionend",
              OTransition: "oTransitionEnd",
              MozTransition: "transitionend",
              WebkitTransition: "webkitTransitionEnd",
            };
          for (a in b) if (void 0 !== d.style[a]) return b[a];
          return "transitionend";
        })(),
        f = function (a) {
          return a && a.length && a[0].offsetHeight;
        },
        e = function (d, b) {
          var c = a.extend(!0, {}, d, b);
          return (
            a.each(b, function (d, b) {
              a.isArray(b) && (c[d] = b);
            }),
            c
          );
        },
        o = function (b) {
          var d, e;
          return (
            !(!b || b.ownerDocument !== c) &&
            (a(".fancybox-container").css("pointer-events", "none"),
            (d = {
              x: b.getBoundingClientRect().left + b.offsetWidth / 2,
              y: b.getBoundingClientRect().top + b.offsetHeight / 2,
            }),
            (e = c.elementFromPoint(d.x, d.y) === b),
            a(".fancybox-container").css("pointer-events", ""),
            e)
          );
        },
        j = function (d, c, f) {
          var b = this;
          (b.opts = e({ index: f }, a.fancybox.defaults)),
            a.isPlainObject(c) && (b.opts = e(b.opts, c)),
            a.fancybox.isMobile && (b.opts = e(b.opts, b.opts.mobile)),
            (b.id = b.opts.id || ++p),
            (b.currIndex = parseInt(b.opts.index, 10) || 0),
            (b.prevIndex = null),
            (b.prevPos = null),
            (b.currPos = 0),
            (b.firstRun = !0),
            (b.group = []),
            (b.slides = {}),
            b.addContent(d),
            b.group.length && b.init();
        };
      a.extend(j.prototype, {
        init: function () {
          var f,
            g,
            d = this,
            h = d.group[d.currIndex],
            e = h.opts;
          e.closeExisting && a.fancybox.close(!0),
            a("body").addClass("fancybox-active"),
            !a.fancybox.getInstance() &&
              !1 !== e.hideScrollbar &&
              !a.fancybox.isMobile &&
              c.body.scrollHeight > b.innerHeight &&
              (a("head").append(
                '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
                  (b.innerWidth - c.documentElement.clientWidth) +
                  "px;}</style>"
              ),
              a("body").addClass("compensate-for-scrollbar")),
            (g = ""),
            a.each(e.buttons, function (b, a) {
              g += e.btnTpl[a] || "";
            }),
            (f = a(
              d.translate(
                d,
                e.baseTpl
                  .replace("{{buttons}}", g)
                  .replace(
                    "{{arrows}}",
                    e.btnTpl.arrowLeft + e.btnTpl.arrowRight
                  )
              )
            )
              .attr("id", "fancybox-container-" + d.id)
              .addClass(e.baseClass)
              .data("FancyBox", d)
              .appendTo(e.parentEl)),
            (d.$refs = { container: f }),
            [
              "bg",
              "inner",
              "infobar",
              "toolbar",
              "stage",
              "caption",
              "navigation",
            ].forEach(function (a) {
              d.$refs[a] = f.find(".fancybox-" + a);
            }),
            d.trigger("onInit"),
            d.activate(),
            d.jumpTo(d.currIndex);
        },
        translate: function (a, c) {
          var b = a.opts.i18n[a.opts.lang] || a.opts.i18n.en;
          return c.replace(/\{\{(\w+)\}\}/g, function (c, a) {
            return void 0 === b[a] ? c : b[a];
          });
        },
        addContent: function (d) {
          var c,
            b = this,
            f = a.makeArray(d);
          a.each(f, function (l, d) {
            var j,
              g,
              k,
              h,
              i,
              c = {},
              f = {};
            a.isPlainObject(d)
              ? ((c = d), (f = d.opts || d))
              : "object" === a.type(d) && a(d).length
              ? ((j = a(d)),
                (f = j.data() || {}),
                (f = a.extend(!0, {}, f, f.options)),
                (f.$orig = j),
                (c.src = b.opts.src || f.src || j.attr("href")),
                c.type || c.src || ((c.type = "inline"), (c.src = d)))
              : (c = { type: "html", src: d + "" }),
              (c.opts = a.extend(!0, {}, b.opts, f)),
              a.isArray(f.buttons) && (c.opts.buttons = f.buttons),
              a.fancybox.isMobile &&
                c.opts.mobile &&
                (c.opts = e(c.opts, c.opts.mobile)),
              (g = c.type || c.opts.type),
              (h = c.src || ""),
              !g &&
                h &&
                ((k = h.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                  ? ((g = "video"),
                    c.opts.video.format ||
                      (c.opts.video.format =
                        "video/" + ("ogv" === k[1] ? "ogg" : k[1])))
                  : h.match(
                      /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                    )
                  ? (g = "image")
                  : h.match(/\.(pdf)((\?|#).*)?$/i)
                  ? ((g = "iframe"),
                    (c = a.extend(!0, c, {
                      contentType: "pdf",
                      opts: { iframe: { preload: !1 } },
                    })))
                  : "#" === h.charAt(0) && (g = "inline")),
              g ? (c.type = g) : b.trigger("objectNeedsType", c),
              c.contentType ||
                (c.contentType =
                  a.inArray(c.type, ["html", "inline", "ajax"]) > -1
                    ? "html"
                    : c.type),
              (c.index = b.group.length),
              "auto" == c.opts.smallBtn &&
                (c.opts.smallBtn =
                  a.inArray(c.type, ["html", "inline", "ajax"]) > -1),
              "auto" === c.opts.toolbar && (c.opts.toolbar = !c.opts.smallBtn),
              (c.$thumb = c.opts.$thumb || null),
              c.opts.$trigger &&
                c.index === b.opts.index &&
                ((c.$thumb = c.opts.$trigger.find("img:first")),
                c.$thumb.length && (c.opts.$orig = c.opts.$trigger)),
              (c.$thumb && c.$thumb.length) ||
                !c.opts.$orig ||
                (c.$thumb = c.opts.$orig.find("img:first")),
              c.$thumb && !c.$thumb.length && (c.$thumb = null),
              (c.thumb = c.opts.thumb || (c.$thumb ? c.$thumb[0].src : null)),
              "function" === a.type(c.opts.caption) &&
                (c.opts.caption = c.opts.caption.apply(d, [b, c])),
              "function" === a.type(b.opts.caption) &&
                (c.opts.caption = b.opts.caption.apply(d, [b, c])),
              c.opts.caption instanceof a ||
                (c.opts.caption =
                  void 0 === c.opts.caption ? "" : c.opts.caption + ""),
              "ajax" === c.type &&
                ((i = h.split(/\s+/, 2)),
                i.length > 1 &&
                  ((c.src = i.shift()), (c.opts.filter = i.shift()))),
              c.opts.modal &&
                (c.opts = a.extend(!0, c.opts, {
                  trapFocus: !0,
                  infobar: 0,
                  toolbar: 0,
                  smallBtn: 0,
                  keyboard: 0,
                  slideShow: 0,
                  fullScreen: 0,
                  thumbs: 0,
                  touch: 0,
                  clickContent: !1,
                  clickSlide: !1,
                  clickOutside: !1,
                  dblclickContent: !1,
                  dblclickSlide: !1,
                  dblclickOutside: !1,
                })),
              b.group.push(c);
          }),
            Object.keys(b.slides).length &&
              (b.updateControls(),
              (c = b.Thumbs) && c.isActive && (c.create(), c.focus()));
        },
        addEvents: function () {
          var c = this;
          c.removeEvents(),
            c.$refs.container
              .on("click.fb-close", "[data-fancybox-close]", function (a) {
                a.stopPropagation(), a.preventDefault(), c.close(a);
              })
              .on(
                "touchstart.fb-prev click.fb-prev",
                "[data-fancybox-prev]",
                function (a) {
                  a.stopPropagation(), a.preventDefault(), c.previous();
                }
              )
              .on(
                "touchstart.fb-next click.fb-next",
                "[data-fancybox-next]",
                function (a) {
                  a.stopPropagation(), a.preventDefault(), c.next();
                }
              )
              .on("click.fb", "[data-fancybox-zoom]", function (a) {
                c[c.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
              }),
            h.on("orientationchange.fb resize.fb", function (b) {
              b && b.originalEvent && "resize" === b.originalEvent.type
                ? (c.requestId && l(c.requestId),
                  (c.requestId = k(function () {
                    c.update(b);
                  })))
                : (c.current &&
                    "iframe" === c.current.type &&
                    c.$refs.stage.hide(),
                  setTimeout(
                    function () {
                      c.$refs.stage.show(), c.update(b);
                    },
                    a.fancybox.isMobile ? 600 : 250
                  ));
            }),
            d.on("keydown.fb", function (b) {
              var f = a.fancybox ? a.fancybox.getInstance() : null,
                e = f.current,
                d = b.keyCode || b.which;
              if (9 == d) return void (e.opts.trapFocus && c.focus(b));
              if (
                !(
                  !e.opts.keyboard ||
                  b.ctrlKey ||
                  b.altKey ||
                  b.shiftKey ||
                  a(b.target).is("input,textarea,video,audio,select")
                )
              )
                return 8 === d || 27 === d
                  ? (b.preventDefault(), void c.close(b))
                  : 37 === d || 38 === d
                  ? (b.preventDefault(), void c.previous())
                  : 39 === d || 40 === d
                  ? (b.preventDefault(), void c.next())
                  : void c.trigger("afterKeydown", b, d);
            }),
            c.group[c.currIndex].opts.idleTime &&
              ((c.idleSecondsCounter = 0),
              d.on(
                "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
                function (a) {
                  (c.idleSecondsCounter = 0),
                    c.isIdle && c.showControls(),
                    (c.isIdle = !1);
                }
              ),
              (c.idleInterval = b.setInterval(function () {
                ++c.idleSecondsCounter >= c.group[c.currIndex].opts.idleTime &&
                  !c.isDragging &&
                  ((c.isIdle = !0),
                  (c.idleSecondsCounter = 0),
                  c.hideControls());
              }, 1e3)));
        },
        removeEvents: function () {
          var a = this;
          h.off("orientationchange.fb resize.fb"),
            d.off("keydown.fb .fb-idle"),
            this.$refs.container.off(".fb-close .fb-prev .fb-next"),
            a.idleInterval &&
              (b.clearInterval(a.idleInterval), (a.idleInterval = null));
        },
        previous: function (a) {
          return this.jumpTo(this.currPos - 1, a);
        },
        next: function (a) {
          return this.jumpTo(this.currPos + 1, a);
        },
        jumpTo: function (g, e) {
          var i,
            o,
            l,
            c,
            d,
            h,
            m,
            k,
            n,
            b = this,
            j = b.group.length;
          if (!(b.isDragging || b.isClosing || (b.isAnimating && b.firstRun))) {
            if (
              ((g = parseInt(g, 10)),
              !(l = b.current ? b.current.opts.loop : b.opts.loop) &&
                (g < 0 || g >= j))
            )
              return !1;
            if (
              ((i = b.firstRun = !Object.keys(b.slides).length),
              (d = b.current),
              (b.prevIndex = b.currIndex),
              (b.prevPos = b.currPos),
              (c = b.createSlide(g)),
              j > 1 &&
                ((l || c.index < j - 1) && b.createSlide(g + 1),
                (l || c.index > 0) && b.createSlide(g - 1)),
              (b.current = c),
              (b.currIndex = c.index),
              (b.currPos = c.pos),
              b.trigger("beforeShow", i),
              b.updateControls(),
              (c.forcedDuration = void 0),
              a.isNumeric(e)
                ? (c.forcedDuration = e)
                : (e = c.opts[i ? "animationDuration" : "transitionDuration"]),
              (e = parseInt(e, 10)),
              (o = b.isMoved(c)),
              c.$slide.addClass("fancybox-slide--current"),
              i)
            )
              return (
                c.opts.animationEffect &&
                  e &&
                  b.$refs.container.css("transition-duration", e + "ms"),
                b.$refs.container.addClass("fancybox-is-open").trigger("focus"),
                b.loadSlide(c),
                void b.preload("image")
              );
            (h = a.fancybox.getTranslate(d.$slide)),
              (m = a.fancybox.getTranslate(b.$refs.stage)),
              a.each(b.slides, function (c, b) {
                a.fancybox.stop(b.$slide, !0);
              }),
              d.pos !== c.pos && (d.isComplete = !1),
              d.$slide.removeClass(
                "fancybox-slide--complete fancybox-slide--current"
              ),
              o
                ? ((n = h.left - (d.pos * h.width + d.pos * d.opts.gutter)),
                  a.each(b.slides, function (i, d) {
                    d.$slide
                      .removeClass("fancybox-animated")
                      .removeClass(function (b, a) {
                        return (a.match(/(^|\s)fancybox-fx-\S+/g) || []).join(
                          " "
                        );
                      });
                    var g = d.pos * h.width + d.pos * d.opts.gutter;
                    a.fancybox.setTranslate(d.$slide, {
                      top: 0,
                      left: g - m.left + n,
                    }),
                      d.pos !== c.pos &&
                        d.$slide.addClass(
                          "fancybox-slide--" +
                            (d.pos > c.pos ? "next" : "previous")
                        ),
                      f(d.$slide),
                      a.fancybox.animate(
                        d.$slide,
                        {
                          top: 0,
                          left:
                            (d.pos - c.pos) * h.width +
                            (d.pos - c.pos) * d.opts.gutter,
                        },
                        e,
                        function () {
                          d.$slide
                            .css({ transform: "", opacity: "" })
                            .removeClass(
                              "fancybox-slide--next fancybox-slide--previous"
                            ),
                            d.pos === b.currPos && b.complete();
                        }
                      );
                  }))
                : e &&
                  c.opts.transitionEffect &&
                  ((k =
                    "fancybox-animated fancybox-fx-" + c.opts.transitionEffect),
                  d.$slide.addClass(
                    "fancybox-slide--" + (d.pos > c.pos ? "next" : "previous")
                  ),
                  a.fancybox.animate(
                    d.$slide,
                    k,
                    e,
                    function () {
                      d.$slide
                        .removeClass(k)
                        .removeClass(
                          "fancybox-slide--next fancybox-slide--previous"
                        );
                    },
                    !1
                  )),
              c.isLoaded ? b.revealContent(c) : b.loadSlide(c),
              b.preload("image");
          }
        },
        createSlide: function (d) {
          var e,
            c,
            b = this;
          return (
            (c = d % b.group.length),
            (c = c < 0 ? b.group.length + c : c),
            !b.slides[d] &&
              b.group[c] &&
              ((e = a('<div class="fancybox-slide"></div>').appendTo(
                b.$refs.stage
              )),
              (b.slides[d] = a.extend(!0, {}, b.group[c], {
                pos: d,
                $slide: e,
                isLoaded: !1,
              })),
              b.updateSlide(b.slides[d])),
            b.slides[d]
          );
        },
        scaleToActual: function (i, k, p) {
          var d,
            e,
            f,
            n,
            o,
            c = this,
            b = c.current,
            m = b.$content,
            l = a.fancybox.getTranslate(b.$slide).width,
            j = a.fancybox.getTranslate(b.$slide).height,
            g = b.width,
            h = b.height;
          c.isAnimating ||
            c.isMoved() ||
            !m ||
            "image" != b.type ||
            !b.isLoaded ||
            b.hasError ||
            ((c.isAnimating = !0),
            a.fancybox.stop(m),
            (i = void 0 === i ? 0.5 * l : i),
            (k = void 0 === k ? 0.5 * j : k),
            (d = a.fancybox.getTranslate(m)),
            (d.top -= a.fancybox.getTranslate(b.$slide).top),
            (d.left -= a.fancybox.getTranslate(b.$slide).left),
            (n = g / d.width),
            (o = h / d.height),
            (e = 0.5 * l - 0.5 * g),
            (f = 0.5 * j - 0.5 * h),
            g > l &&
              ((e = d.left * n - (i * n - i)),
              e > 0 && (e = 0),
              e < l - g && (e = l - g)),
            h > j &&
              ((f = d.top * o - (k * o - k)),
              f > 0 && (f = 0),
              f < j - h && (f = j - h)),
            c.updateCursor(g, h),
            a.fancybox.animate(
              m,
              { top: f, left: e, scaleX: n, scaleY: o },
              p || 366,
              function () {
                c.isAnimating = !1;
              }
            ),
            c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop());
        },
        scaleToFit: function (f) {
          var b,
            c = this,
            d = c.current,
            e = d.$content;
          c.isAnimating ||
            c.isMoved() ||
            !e ||
            "image" != d.type ||
            !d.isLoaded ||
            d.hasError ||
            ((c.isAnimating = !0),
            a.fancybox.stop(e),
            (b = c.getFitPos(d)),
            c.updateCursor(b.width, b.height),
            a.fancybox.animate(
              e,
              {
                top: b.top,
                left: b.left,
                scaleX: b.width / e.width(),
                scaleY: b.height / e.height(),
              },
              f || 366,
              function () {
                c.isAnimating = !1;
              }
            ));
        },
        getFitPos: function (d) {
          var e,
            f,
            k,
            i,
            l = this,
            g = d.$content,
            h = d.$slide,
            b = d.width || d.opts.width,
            c = d.height || d.opts.height,
            j = {};
          return (
            !!(d.isLoaded && g && g.length) &&
            ((e = a.fancybox.getTranslate(l.$refs.stage).width),
            (f = a.fancybox.getTranslate(l.$refs.stage).height),
            (e -=
              parseFloat(h.css("paddingLeft")) +
              parseFloat(h.css("paddingRight")) +
              parseFloat(g.css("marginLeft")) +
              parseFloat(g.css("marginRight"))),
            (f -=
              parseFloat(h.css("paddingTop")) +
              parseFloat(h.css("paddingBottom")) +
              parseFloat(g.css("marginTop")) +
              parseFloat(g.css("marginBottom"))),
            (b && c) || ((b = e), (c = f)),
            (k = Math.min(1, e / b, f / c)),
            (b *= k),
            (c *= k),
            b > e - 0.5 && (b = e),
            c > f - 0.5 && (c = f),
            "image" === d.type
              ? ((j.top =
                  Math.floor(0.5 * (f - c)) + parseFloat(h.css("paddingTop"))),
                (j.left =
                  Math.floor(0.5 * (e - b)) + parseFloat(h.css("paddingLeft"))))
              : "video" === d.contentType &&
                ((i =
                  d.opts.width && d.opts.height
                    ? b / c
                    : d.opts.ratio || 16 / 9),
                c > b / i ? (c = b / i) : b > c * i && (b = c * i)),
            (j.width = b),
            (j.height = c),
            j)
          );
        },
        update: function (c) {
          var b = this;
          a.each(b.slides, function (d, a) {
            b.updateSlide(a, c);
          });
        },
        updateSlide: function (b, f) {
          var c = this,
            e = b && b.$content,
            g = b.width || b.opts.width,
            h = b.height || b.opts.height,
            d = b.$slide;
          c.adjustCaption(b),
            e &&
              (g || h || "video" === b.contentType) &&
              !b.hasError &&
              (a.fancybox.stop(e),
              a.fancybox.setTranslate(e, c.getFitPos(b)),
              b.pos === c.currPos && ((c.isAnimating = !1), c.updateCursor())),
            c.adjustLayout(b),
            d.length &&
              (d.trigger("refresh"),
              b.pos === c.currPos &&
                c.$refs.toolbar
                  .add(c.$refs.navigation.find(".fancybox-button--arrow_right"))
                  .toggleClass(
                    "compensate-for-scrollbar",
                    d.get(0).scrollHeight > d.get(0).clientHeight
                  )),
            c.trigger("onUpdate", b, f);
        },
        centerSlide: function (e) {
          var c = this,
            d = c.current,
            b = d.$slide;
          !c.isClosing &&
            d &&
            (b.siblings().css({ transform: "", opacity: "" }),
            b
              .parent()
              .children()
              .removeClass("fancybox-slide--previous fancybox-slide--next"),
            a.fancybox.animate(
              b,
              { top: 0, left: 0, opacity: 1 },
              void 0 === e ? 0 : e,
              function () {
                b.css({ transform: "", opacity: "" }),
                  d.isComplete || c.complete();
              },
              !1
            ));
        },
        isMoved: function (e) {
          var b,
            c,
            d = e || this.current;
          return (
            !!d &&
            ((c = a.fancybox.getTranslate(this.$refs.stage)),
            (b = a.fancybox.getTranslate(d.$slide)),
            !d.$slide.hasClass("fancybox-animated") &&
              (Math.abs(b.top - c.top) > 0.5 ||
                Math.abs(b.left - c.left) > 0.5))
          );
        },
        updateCursor: function (h, g) {
          var f,
            e,
            c = this,
            b = c.current,
            d = c.$refs.container;
          b &&
            !c.isClosing &&
            c.Guestures &&
            (d.removeClass(
              "fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"
            ),
            (f = c.canPan(h, g)),
            (e = !!f || c.isZoomable()),
            d.toggleClass("fancybox-is-zoomable", e),
            a("[data-fancybox-zoom]").prop("disabled", !e),
            f
              ? d.addClass("fancybox-can-pan")
              : e &&
                ("zoom" === b.opts.clickContent ||
                  (a.isFunction(b.opts.clickContent) &&
                    "zoom" == b.opts.clickContent(b)))
              ? d.addClass("fancybox-can-zoomIn")
              : b.opts.touch &&
                (b.opts.touch.vertical || c.group.length > 1) &&
                "video" !== b.contentType &&
                d.addClass("fancybox-can-swipe"));
        },
        isZoomable: function () {
          var b,
            c = this,
            a = c.current;
          if (a && !c.isClosing && "image" === a.type && !a.hasError) {
            if (!a.isLoaded) return !0;
            if (
              (b = c.getFitPos(a)) &&
              (a.width > b.width || a.height > b.height)
            )
              return !0;
          }
          return !1;
        },
        isScaledDown: function (d, e) {
          var g = this,
            b = !1,
            c = g.current,
            f = c.$content;
          return (
            void 0 !== d && void 0 !== e
              ? (b = d < c.width && e < c.height)
              : f &&
                ((b = a.fancybox.getTranslate(f)),
                (b = b.width < c.width && b.height < c.height)),
            b
          );
        },
        canPan: function (e, f) {
          var g = this,
            b = g.current,
            d = null,
            c = !1;
          return (
            "image" === b.type &&
              (b.isComplete || (e && f)) &&
              !b.hasError &&
              ((c = g.getFitPos(b)),
              void 0 !== e && void 0 !== f
                ? (d = { width: e, height: f })
                : b.isComplete && (d = a.fancybox.getTranslate(b.$content)),
              d &&
                c &&
                (c =
                  Math.abs(d.width - c.width) > 1.5 ||
                  Math.abs(d.height - c.height) > 1.5)),
            c
          );
        },
        loadSlide: function (b) {
          var e,
            d,
            f,
            c = this;
          if (!b.isLoading && !b.isLoaded) {
            if (((b.isLoading = !0), !1 === c.trigger("beforeLoad", b)))
              return (b.isLoading = !1), !1;
            switch (
              ((e = b.type),
              (d = b.$slide),
              d.off("refresh").trigger("onReset").addClass(b.opts.slideClass),
              e)
            ) {
              case "image":
                c.setImage(b);
                break;
              case "iframe":
                c.setIframe(b);
                break;
              case "html":
                c.setContent(b, b.src || b.content);
                break;
              case "video":
                c.setContent(
                  b,
                  b.opts.video.tpl
                    .replace(/\{\{src\}\}/gi, b.src)
                    .replace(
                      "{{format}}",
                      b.opts.videoFormat || b.opts.video.format || ""
                    )
                    .replace("{{poster}}", b.thumb || "")
                );
                break;
              case "inline":
                a(b.src).length ? c.setContent(b, a(b.src)) : c.setError(b);
                break;
              case "ajax":
                c.showLoading(b),
                  (f = a.ajax(
                    a.extend({}, b.opts.ajax.settings, {
                      url: b.src,
                      success: function (a, d) {
                        "success" === d && c.setContent(b, a);
                      },
                      error: function (a, d) {
                        a && "abort" !== d && c.setError(b);
                      },
                    })
                  )),
                  d.one("onReset", function () {
                    f.abort();
                  });
                break;
              default:
                c.setError(b);
            }
            return !0;
          }
        },
        setImage: function (b) {
          var e,
            d = this;
          setTimeout(function () {
            var a = b.$image;
            d.isClosing ||
              !b.isLoading ||
              (a && a.length && a[0].complete) ||
              b.hasError ||
              d.showLoading(b);
          }, 50),
            d.checkSrcset(b),
            (b.$content = a('<div class="fancybox-content"></div>')
              .addClass("fancybox-is-hidden")
              .appendTo(b.$slide.addClass("fancybox-slide--image"))),
            !1 !== b.opts.preload &&
              b.opts.width &&
              b.opts.height &&
              b.thumb &&
              ((b.width = b.opts.width),
              (b.height = b.opts.height),
              (e = c.createElement("img")),
              (e.onerror = function () {
                a(this).remove(), (b.$ghost = null);
              }),
              (e.onload = function () {
                d.afterLoad(b);
              }),
              (b.$ghost = a(e)
                .addClass("fancybox-image")
                .appendTo(b.$content)
                .attr("src", b.thumb))),
            d.setBigImage(b);
        },
        checkSrcset: function (a) {
          var c,
            d,
            f,
            i,
            g = a.opts.srcset || a.opts.image.srcset,
            h,
            e;
          if (g) {
            (f = b.devicePixelRatio || 1),
              (i = b.innerWidth * f),
              (d = g.split(",").map(function (b) {
                var a = {};
                return (
                  b
                    .trim()
                    .split(/\s+/)
                    .forEach(function (b, d) {
                      var c = parseInt(b.substring(0, b.length - 1), 10);
                      if (0 === d) return (a.url = b);
                      c && ((a.value = c), (a.postfix = b[b.length - 1]));
                    }),
                  a
                );
              })),
              d.sort(function (a, b) {
                return a.value - b.value;
              });
            for (h = 0; h < d.length; h++)
              if (
                ((e = d[h]),
                ("w" === e.postfix && e.value >= i) ||
                  ("x" === e.postfix && e.value >= f))
              ) {
                c = e;
                break;
              }
            !c && d.length && (c = d[d.length - 1]),
              c &&
                ((a.src = c.url),
                a.width &&
                  a.height &&
                  "w" == c.postfix &&
                  ((a.height = (a.width / a.height) * c.value),
                  (a.width = c.value)),
                (a.opts.srcset = g));
          }
        },
        setBigImage: function (b) {
          var d = this,
            f = c.createElement("img"),
            e = a(f);
          (b.$image = e
            .one("error", function () {
              d.setError(b);
            })
            .one("load", function () {
              var a;
              b.$ghost ||
                (d.resolveImageSlideSize(
                  b,
                  this.naturalWidth,
                  this.naturalHeight
                ),
                d.afterLoad(b)),
                d.isClosing ||
                  (b.opts.srcset &&
                    ((a = b.opts.sizes),
                    (a && "auto" !== a) ||
                      (a =
                        (b.width / b.height > 1 && h.width() / h.height() > 1
                          ? "100"
                          : Math.round((b.width / b.height) * 100)) + "vw"),
                    e.attr("sizes", a).attr("srcset", b.opts.srcset)),
                  b.$ghost &&
                    setTimeout(function () {
                      b.$ghost && !d.isClosing && b.$ghost.hide();
                    }, Math.min(300, Math.max(1e3, b.height / 1600))),
                  d.hideLoading(b));
            })
            .addClass("fancybox-image")
            .attr("src", b.src)
            .appendTo(b.$content)),
            (f.complete || "complete" == f.readyState) &&
            e.naturalWidth &&
            e.naturalHeight
              ? e.trigger("load")
              : f.error && e.trigger("error");
        },
        resolveImageSlideSize: function (a, b, c) {
          var d = parseInt(a.opts.width, 10),
            e = parseInt(a.opts.height, 10);
          (a.width = b),
            (a.height = c),
            d > 0 && ((a.width = d), (a.height = Math.floor((d * c) / b))),
            e > 0 && ((a.width = Math.floor((e * b) / c)), (a.height = e));
        },
        setIframe: function (b) {
          var e,
            f = this,
            c = b.opts.iframe,
            d = b.$slide;
          (b.$content = a(
            '<div class="fancybox-content' +
              (c.preload ? " fancybox-is-hidden" : "") +
              '"></div>'
          )
            .css(c.css)
            .appendTo(d)),
            d.addClass("fancybox-slide--" + b.contentType),
            (b.$iframe = e =
              a(c.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                .attr(c.attr)
                .appendTo(b.$content)),
            c.preload
              ? (f.showLoading(b),
                e.on("load.fb error.fb", function (a) {
                  (this.isReady = 1),
                    b.$slide.trigger("refresh"),
                    f.afterLoad(b);
                }),
                d.on("refresh.fb", function () {
                  var i,
                    a,
                    f = b.$content,
                    g = c.css.width,
                    h = c.css.height;
                  if (1 === e[0].isReady) {
                    try {
                      (i = e.contents()), (a = i.find("body"));
                    } catch (a) {}
                    a &&
                      a.length &&
                      a.children().length &&
                      (d.css("overflow", "visible"),
                      f.css({
                        width: "100%",
                        "max-width": "100%",
                        height: "9999px",
                      }),
                      void 0 === g &&
                        (g = Math.ceil(
                          Math.max(a[0].clientWidth, a.outerWidth(!0))
                        )),
                      f.css("width", g || "").css("max-width", ""),
                      void 0 === h &&
                        (h = Math.ceil(
                          Math.max(a[0].clientHeight, a.outerHeight(!0))
                        )),
                      f.css("height", h || ""),
                      d.css("overflow", "auto")),
                      f.removeClass("fancybox-is-hidden");
                  }
                }))
              : f.afterLoad(b),
            e.attr("src", b.src),
            d.one("onReset", function () {
              try {
                a(this)
                  .find("iframe")
                  .hide()
                  .unbind()
                  .attr("src", "//about:blank");
              } catch (a) {}
              a(this).off("refresh.fb").empty(),
                (b.isLoaded = !1),
                (b.isRevealed = !1);
            });
        },
        setContent: function (b, c) {
          var d = this;
          d.isClosing ||
            (d.hideLoading(b),
            b.$content && a.fancybox.stop(b.$content),
            b.$slide.empty(),
            m(c) && c.parent().length
              ? ((c.hasClass("fancybox-content") ||
                  c.parent().hasClass("fancybox-content")) &&
                  c.parents(".fancybox-slide").trigger("onReset"),
                (b.$placeholder = a("<div>").hide().insertAfter(c)),
                c.css("display", "inline-block"))
              : b.hasError ||
                ("string" === a.type(c) &&
                  (c = a("<div>").append(a.trim(c)).contents()),
                b.opts.filter && (c = a("<div>").html(c).find(b.opts.filter))),
            b.$slide.one("onReset", function () {
              a(this).find("video,audio").trigger("pause"),
                b.$placeholder &&
                  (b.$placeholder
                    .after(c.removeClass("fancybox-content").hide())
                    .remove(),
                  (b.$placeholder = null)),
                b.$smallBtn && (b.$smallBtn.remove(), (b.$smallBtn = null)),
                b.hasError ||
                  (a(this).empty(), (b.isLoaded = !1), (b.isRevealed = !1));
            }),
            a(c).appendTo(b.$slide),
            a(c).is("video,audio") &&
              (a(c).addClass("fancybox-video"),
              a(c).wrap("<div></div>"),
              (b.contentType = "video"),
              (b.opts.width = b.opts.width || a(c).attr("width")),
              (b.opts.height = b.opts.height || a(c).attr("height"))),
            (b.$content = b.$slide
              .children()
              .filter("div,form,main,video,audio,article,.fancybox-content")
              .first()),
            b.$content.siblings().hide(),
            b.$content.length ||
              (b.$content = b.$slide
                .wrapInner("<div></div>")
                .children()
                .first()),
            b.$content.addClass("fancybox-content"),
            b.$slide.addClass("fancybox-slide--" + b.contentType),
            d.afterLoad(b));
        },
        setError: function (a) {
          (a.hasError = !0),
            a.$slide
              .trigger("onReset")
              .removeClass("fancybox-slide--" + a.contentType)
              .addClass("fancybox-slide--error"),
            (a.contentType = "html"),
            this.setContent(a, this.translate(a, a.opts.errorTpl)),
            a.pos === this.currPos && (this.isAnimating = !1);
        },
        showLoading: function (b) {
          var c = this;
          (b = b || c.current) &&
            !b.$spinner &&
            (b.$spinner = a(c.translate(c, c.opts.spinnerTpl))
              .appendTo(b.$slide)
              .hide()
              .fadeIn("fast"));
        },
        hideLoading: function (a) {
          var b = this;
          (a = a || b.current) &&
            a.$spinner &&
            (a.$spinner.stop().remove(), delete a.$spinner);
        },
        afterLoad: function (b) {
          var c = this;
          c.isClosing ||
            ((b.isLoading = !1),
            (b.isLoaded = !0),
            c.trigger("afterLoad", b),
            c.hideLoading(b),
            !b.opts.smallBtn ||
              (b.$smallBtn && b.$smallBtn.length) ||
              (b.$smallBtn = a(c.translate(b, b.opts.btnTpl.smallBtn)).appendTo(
                b.$content
              )),
            b.opts.protect &&
              b.$content &&
              !b.hasError &&
              (b.$content.on("contextmenu.fb", function (a) {
                return 2 == a.button && a.preventDefault(), !0;
              }),
              "image" === b.type &&
                a('<div class="fancybox-spaceball"></div>').appendTo(
                  b.$content
                )),
            c.adjustCaption(b),
            c.adjustLayout(b),
            b.pos === c.currPos && c.updateCursor(),
            c.revealContent(b));
        },
        adjustCaption: function (h) {
          var b,
            a = this,
            c = h || a.current,
            e = c.opts.caption,
            g = c.opts.preventCaptionOverlap,
            d = a.$refs.caption,
            f = !1;
          d.toggleClass("fancybox-caption--separate", g),
            g &&
              e &&
              e.length &&
              (c.pos !== a.currPos
                ? ((b = d.clone().appendTo(d.parent())),
                  b.children().eq(0).empty().html(e),
                  (f = b.outerHeight(!0)),
                  b.empty().remove())
                : a.$caption && (f = a.$caption.outerHeight(!0)),
              c.$slide.css("padding-bottom", f || ""));
        },
        adjustLayout: function (g) {
          var c,
            d,
            e,
            b,
            f = this,
            a = g || f.current;
          a.isLoaded &&
            !0 !== a.opts.disableLayoutFix &&
            (a.$content.css("margin-bottom", ""),
            a.$content.outerHeight() > a.$slide.height() + 0.5 &&
              ((e = a.$slide[0].style["padding-bottom"]),
              (b = a.$slide.css("padding-bottom")),
              parseFloat(b) > 0 &&
                ((c = a.$slide[0].scrollHeight),
                a.$slide.css("padding-bottom", 0),
                Math.abs(c - a.$slide[0].scrollHeight) < 1 && (d = b),
                a.$slide.css("padding-bottom", e))),
            a.$content.css("margin-bottom", d));
        },
        revealContent: function (b) {
          var d,
            k,
            g,
            j,
            c = this,
            i = b.$slide,
            h = !1,
            e = !1,
            l = c.isMoved(b),
            m = b.isRevealed;
          return (
            (b.isRevealed = !0),
            (d = b.opts[c.firstRun ? "animationEffect" : "transitionEffect"]),
            (g =
              b.opts[c.firstRun ? "animationDuration" : "transitionDuration"]),
            (g = parseInt(
              void 0 === b.forcedDuration ? g : b.forcedDuration,
              10
            )),
            (!l && b.pos === c.currPos && g) || (d = !1),
            "zoom" === d &&
              (b.pos === c.currPos &&
              g &&
              "image" === b.type &&
              !b.hasError &&
              (e = c.getThumbPos(b))
                ? (h = c.getFitPos(b))
                : (d = "fade")),
            "zoom" === d
              ? ((c.isAnimating = !0),
                (h.scaleX = h.width / e.width),
                (h.scaleY = h.height / e.height),
                (j = b.opts.zoomOpacity),
                "auto" == j &&
                  (j = Math.abs(b.width / b.height - e.width / e.height) > 0.1),
                j && ((e.opacity = 0.1), (h.opacity = 1)),
                a.fancybox.setTranslate(
                  b.$content.removeClass("fancybox-is-hidden"),
                  e
                ),
                f(b.$content),
                void a.fancybox.animate(b.$content, h, g, function () {
                  (c.isAnimating = !1), c.complete();
                }))
              : (c.updateSlide(b),
                d
                  ? (a.fancybox.stop(i),
                    (k =
                      "fancybox-slide--" +
                      (b.pos >= c.prevPos ? "next" : "previous") +
                      " fancybox-animated fancybox-fx-" +
                      d),
                    i.addClass(k).removeClass("fancybox-slide--current"),
                    b.$content.removeClass("fancybox-is-hidden"),
                    f(i),
                    "image" !== b.type && b.$content.hide().show(0),
                    void a.fancybox.animate(
                      i,
                      "fancybox-slide--current",
                      g,
                      function () {
                        i.removeClass(k).css({ transform: "", opacity: "" }),
                          b.pos === c.currPos && c.complete();
                      },
                      !0
                    ))
                  : (b.$content.removeClass("fancybox-is-hidden"),
                    m ||
                      !l ||
                      "image" !== b.type ||
                      b.hasError ||
                      b.$content.hide().fadeIn("fast"),
                    void (b.pos === c.currPos && c.complete())))
          );
        },
        getThumbPos: function (i) {
          var b,
            d,
            g,
            h,
            e,
            f = !1,
            c = i.$thumb;
          return (
            !(!c || !o(c[0])) &&
            ((b = a.fancybox.getTranslate(c)),
            (d = parseFloat(c.css("border-top-width") || 0)),
            (g = parseFloat(c.css("border-right-width") || 0)),
            (h = parseFloat(c.css("border-bottom-width") || 0)),
            (e = parseFloat(c.css("border-left-width") || 0)),
            (f = {
              top: b.top + d,
              left: b.left + e,
              width: b.width - g - e,
              height: b.height - d - h,
              scaleX: 1,
              scaleY: 1,
            }),
            b.width > 0 && b.height > 0 && f)
          );
        },
        complete: function () {
          var d,
            b = this,
            c = b.current,
            e = {};
          !b.isMoved() &&
            c.isLoaded &&
            (c.isComplete ||
              ((c.isComplete = !0),
              c.$slide.siblings().trigger("onReset"),
              b.preload("inline"),
              f(c.$slide),
              c.$slide.addClass("fancybox-slide--complete"),
              a.each(b.slides, function (d, c) {
                c.pos >= b.currPos - 1 && c.pos <= b.currPos + 1
                  ? (e[c.pos] = c)
                  : c && (a.fancybox.stop(c.$slide), c.$slide.off().remove());
              }),
              (b.slides = e)),
            (b.isAnimating = !1),
            b.updateCursor(),
            b.trigger("afterShow"),
            c.opts.video.autoStart &&
              c.$slide
                .find("video,audio")
                .filter(":visible:first")
                .trigger("play")
                .one("ended", function () {
                  Document.exitFullscreen
                    ? Document.exitFullscreen()
                    : this.webkitExitFullscreen && this.webkitExitFullscreen(),
                    b.next();
                }),
            c.opts.autoFocus &&
              "html" === c.contentType &&
              ((d = c.$content.find("input[autofocus]:enabled:visible:first")),
              d.length ? d.trigger("focus") : b.focus(null, !0)),
            c.$slide.scrollTop(0).scrollLeft(0));
        },
        preload: function (d) {
          var b,
            c,
            a = this;
          a.group.length < 2 ||
            ((c = a.slides[a.currPos + 1]),
            (b = a.slides[a.currPos - 1]),
            b && b.type === d && a.loadSlide(b),
            c && c.type === d && a.loadSlide(c));
        },
        focus: function (d, g) {
          var b,
            f,
            e = this,
            h = [
              "a[href]",
              "area[href]",
              'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
              "select:not([disabled]):not([aria-hidden])",
              "textarea:not([disabled]):not([aria-hidden])",
              "button:not([disabled]):not([aria-hidden])",
              "iframe",
              "object",
              "embed",
              "video",
              "audio",
              "[contenteditable]",
              '[tabindex]:not([tabindex^="-"])',
            ].join(",");
          e.isClosing ||
            ((b =
              !d && e.current && e.current.isComplete
                ? e.current.$slide.find(
                    "*:visible" + (g ? ":not(.fancybox-close-small)" : "")
                  )
                : e.$refs.container.find("*:visible")),
            (b = b.filter(h).filter(function () {
              return (
                "hidden" !== a(this).css("visibility") &&
                !a(this).hasClass("disabled")
              );
            })),
            b.length
              ? ((f = b.index(c.activeElement)),
                d && d.shiftKey
                  ? (f < 0 || 0 == f) &&
                    (d.preventDefault(), b.eq(b.length - 1).trigger("focus"))
                  : (f < 0 || f == b.length - 1) &&
                    (d && d.preventDefault(), b.eq(0).trigger("focus")))
              : e.$refs.container.trigger("focus"));
        },
        activate: function () {
          var b = this;
          a(".fancybox-container").each(function () {
            var c = a(this).data("FancyBox");
            c &&
              c.id !== b.id &&
              !c.isClosing &&
              (c.trigger("onDeactivate"), c.removeEvents(), (c.isVisible = !1));
          }),
            (b.isVisible = !0),
            (b.current || b.isIdle) && (b.update(), b.updateControls()),
            b.trigger("onActivate"),
            b.addEvents();
        },
        close: function (j, n) {
          var e,
            g,
            h,
            i,
            l,
            o,
            d,
            b = this,
            c = b.current,
            m = function () {
              b.cleanUp(j);
            };
          return (
            !b.isClosing &&
            ((b.isClosing = !0),
            !1 === b.trigger("beforeClose", j)
              ? ((b.isClosing = !1),
                k(function () {
                  b.update();
                }),
                !1)
              : (b.removeEvents(),
                (h = c.$content),
                (e = c.opts.animationEffect),
                (g = a.isNumeric(n) ? n : e ? c.opts.animationDuration : 0),
                c.$slide.removeClass(
                  "fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"
                ),
                !0 !== j ? a.fancybox.stop(c.$slide) : (e = !1),
                c.$slide.siblings().trigger("onReset").remove(),
                g &&
                  b.$refs.container
                    .removeClass("fancybox-is-open")
                    .addClass("fancybox-is-closing")
                    .css("transition-duration", g + "ms"),
                b.hideLoading(c),
                b.hideControls(!0),
                b.updateCursor(),
                "zoom" !== e ||
                  (h &&
                    g &&
                    "image" === c.type &&
                    !b.isMoved() &&
                    !c.hasError &&
                    (d = b.getThumbPos(c))) ||
                  (e = "fade"),
                "zoom" === e
                  ? (a.fancybox.stop(h),
                    (i = a.fancybox.getTranslate(h)),
                    (o = {
                      top: i.top,
                      left: i.left,
                      scaleX: i.width / d.width,
                      scaleY: i.height / d.height,
                      width: d.width,
                      height: d.height,
                    }),
                    (l = c.opts.zoomOpacity),
                    "auto" == l &&
                      (l =
                        Math.abs(c.width / c.height - d.width / d.height) >
                        0.1),
                    l && (d.opacity = 0),
                    a.fancybox.setTranslate(h, o),
                    f(h),
                    a.fancybox.animate(h, d, g, m),
                    !0)
                  : (e && g
                      ? a.fancybox.animate(
                          c.$slide
                            .addClass("fancybox-slide--previous")
                            .removeClass("fancybox-slide--current"),
                          "fancybox-animated fancybox-fx-" + e,
                          g,
                          m
                        )
                      : !0 === j
                      ? setTimeout(m, g)
                      : m(),
                    !0)))
          );
        },
        cleanUp: function (h) {
          var e,
            f,
            g,
            c = this,
            d = c.current.opts.$orig;
          c.current.$slide.trigger("onReset"),
            c.$refs.container.empty().remove(),
            c.trigger("afterClose", h),
            c.current.opts.backFocus &&
              ((d && d.length && d.is(":visible")) || (d = c.$trigger),
              d &&
                d.length &&
                ((f = b.scrollX),
                (g = b.scrollY),
                d.trigger("focus"),
                a("html, body").scrollTop(g).scrollLeft(f))),
            (c.current = null),
            (e = a.fancybox.getInstance()),
            e
              ? e.activate()
              : (a("body").removeClass(
                  "fancybox-active compensate-for-scrollbar"
                ),
                a("#fancybox-style-noscroll").remove());
        },
        trigger: function (c, g) {
          var h,
            e = Array.prototype.slice.call(arguments, 1),
            f = this,
            b = g && g.opts ? g : f.current;
          if (
            (b ? e.unshift(b) : (b = f),
            e.unshift(f),
            a.isFunction(b.opts[c]) && (h = b.opts[c].apply(b, e)),
            !1 === h)
          )
            return h;
          "afterClose" !== c && f.$refs
            ? f.$refs.container.trigger(c + ".fb", e)
            : d.trigger(c + ".fb", e);
        },
        updateControls: function () {
          var b = this,
            d = b.current,
            f = d.index,
            e = b.$refs.container,
            h = b.$refs.caption,
            g = d.opts.caption;
          d.$slide.trigger("refresh"),
            g && g.length
              ? ((b.$caption = h), h.children().eq(0).html(g))
              : (b.$caption = null),
            b.hasHiddenControls || b.isIdle || b.showControls(),
            e.find("[data-fancybox-count]").html(b.group.length),
            e.find("[data-fancybox-index]").html(f + 1),
            e
              .find("[data-fancybox-prev]")
              .prop("disabled", !d.opts.loop && f <= 0),
            e
              .find("[data-fancybox-next]")
              .prop("disabled", !d.opts.loop && f >= b.group.length - 1),
            "image" === d.type
              ? e
                  .find("[data-fancybox-zoom]")
                  .show()
                  .end()
                  .find("[data-fancybox-download]")
                  .attr("href", d.opts.image.src || d.src)
                  .show()
              : d.opts.toolbar &&
                e.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),
            a(c.activeElement).is(":hidden,[disabled]") &&
              b.$refs.container.trigger("focus");
        },
        hideControls: function (b) {
          var c = this,
            a = ["infobar", "toolbar", "nav"];
          (!b && c.current.opts.preventCaptionOverlap) || a.push("caption"),
            this.$refs.container.removeClass(
              a
                .map(function (a) {
                  return "fancybox-show-" + a;
                })
                .join(" ")
            ),
            (this.hasHiddenControls = !0);
        },
        showControls: function () {
          var a = this,
            b = a.current ? a.current.opts : a.opts,
            c = a.$refs.container;
          (a.hasHiddenControls = !1),
            (a.idleSecondsCounter = 0),
            c
              .toggleClass("fancybox-show-toolbar", !(!b.toolbar || !b.buttons))
              .toggleClass(
                "fancybox-show-infobar",
                !!(b.infobar && a.group.length > 1)
              )
              .toggleClass("fancybox-show-caption", !!a.$caption)
              .toggleClass(
                "fancybox-show-nav",
                !!(b.arrows && a.group.length > 1)
              )
              .toggleClass("fancybox-is-modal", !!b.modal);
        },
        toggleControls: function () {
          this.hasHiddenControls ? this.showControls() : this.hideControls();
        },
      }),
        (a.fancybox = {
          version: "3.5.7",
          defaults: n,
          getInstance: function (c) {
            var b = a(
                '.fancybox-container:not(".fancybox-is-closing"):last'
              ).data("FancyBox"),
              d = Array.prototype.slice.call(arguments, 1);
            return (
              b instanceof j &&
              ("string" === a.type(c)
                ? b[c].apply(b, d)
                : "function" === a.type(c) && c.apply(b, d),
              b)
            );
          },
          open: function (a, b, c) {
            return new j(a, b, c);
          },
          close: function (a) {
            var b = this.getInstance();
            b && (b.close(), !0 === a && this.close(a));
          },
          destroy: function () {
            this.close(!0), d.add("body").off("click.fb-start", "**");
          },
          isMobile:
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            ),
          use3d: (function () {
            var a = c.createElement("div");
            return (
              b.getComputedStyle &&
              b.getComputedStyle(a) &&
              b.getComputedStyle(a).getPropertyValue("transform") &&
              !(c.documentMode && c.documentMode < 11)
            );
          })(),
          getTranslate: function (b) {
            var a;
            return (
              !(!b || !b.length) &&
              ((a = b[0].getBoundingClientRect()),
              {
                top: a.top || 0,
                left: a.left || 0,
                width: a.width,
                height: a.height,
                opacity: parseFloat(b.css("opacity")),
              })
            );
          },
          setTranslate: function (d, a) {
            var b = "",
              c = {};
            if (d && a)
              return (
                (void 0 === a.left && void 0 === a.top) ||
                  ((b =
                    (void 0 === a.left ? d.position().left : a.left) +
                    "px, " +
                    (void 0 === a.top ? d.position().top : a.top) +
                    "px"),
                  (b = this.use3d
                    ? "translate3d(" + b + ", 0px)"
                    : "translate(" + b + ")")),
                void 0 !== a.scaleX && void 0 !== a.scaleY
                  ? (b += " scale(" + a.scaleX + ", " + a.scaleY + ")")
                  : void 0 !== a.scaleX && (b += " scaleX(" + a.scaleX + ")"),
                b.length && (c.transform = b),
                void 0 !== a.opacity && (c.opacity = a.opacity),
                void 0 !== a.width && (c.width = a.width),
                void 0 !== a.height && (c.height = a.height),
                d.css(c)
              );
          },
          animate: function (b, c, d, f, i) {
            var h,
              e = this;
            a.isFunction(d) && ((f = d), (d = null)),
              e.stop(b),
              (h = e.getTranslate(b)),
              b.on(g, function (g) {
                (!g ||
                  !g.originalEvent ||
                  (b.is(g.originalEvent.target) &&
                    "z-index" != g.originalEvent.propertyName)) &&
                  (e.stop(b),
                  a.isNumeric(d) && b.css("transition-duration", ""),
                  a.isPlainObject(c)
                    ? void 0 !== c.scaleX &&
                      void 0 !== c.scaleY &&
                      e.setTranslate(b, {
                        top: c.top,
                        left: c.left,
                        width: h.width * c.scaleX,
                        height: h.height * c.scaleY,
                        scaleX: 1,
                        scaleY: 1,
                      })
                    : !0 !== i && b.removeClass(c),
                  a.isFunction(f) && f(g));
              }),
              a.isNumeric(d) && b.css("transition-duration", d + "ms"),
              a.isPlainObject(c)
                ? (void 0 !== c.scaleX &&
                    void 0 !== c.scaleY &&
                    (delete c.width,
                    delete c.height,
                    b.parent().hasClass("fancybox-slide--image") &&
                      b.parent().addClass("fancybox-is-scaling")),
                  a.fancybox.setTranslate(b, c))
                : b.addClass(c),
              b.data(
                "timer",
                setTimeout(function () {
                  b.trigger(g);
                }, d + 33)
              );
          },
          stop: function (a, b) {
            a &&
              a.length &&
              (clearTimeout(a.data("timer")),
              b && a.trigger(g),
              a.off(g).css("transition-duration", ""),
              a.parent().removeClass("fancybox-is-scaling"));
          },
        }),
        (a.fn.fancybox = function (b) {
          var c;
          return (
            (b = b || {}),
            (c = b.selector || !1),
            c
              ? a("body")
                  .off("click.fb-start", c)
                  .on("click.fb-start", c, { options: b }, i)
              : this.off("click.fb-start").on(
                  "click.fb-start",
                  { items: this, options: b },
                  i
                ),
            this
          );
        }),
        d.on("click.fb-start", "[data-fancybox]", i),
        d.on("click.fb-start", "[data-fancybox-trigger]", function (b) {
          a('[data-fancybox="' + a(this).attr("data-fancybox-trigger") + '"]')
            .eq(a(this).attr("data-fancybox-index") || 0)
            .trigger("click.fb-start", { $trigger: a(this) });
        }),
        (function () {
          var b = null;
          d.on(
            "mousedown mouseup focus blur",
            ".fancybox-button",
            function (c) {
              switch (c.type) {
                case "mousedown":
                  b = a(this);
                  break;
                case "mouseup":
                  b = null;
                  break;
                case "focusin":
                  a(".fancybox-button").removeClass("fancybox-focus"),
                    a(this).is(b) ||
                      a(this).is("[disabled]") ||
                      a(this).addClass("fancybox-focus");
                  break;
                case "focusout":
                  a(".fancybox-button").removeClass("fancybox-focus");
              }
            }
          );
        })();
    }
  })(window, document, jQuery),
  (function (a) {
    "use strict";
    var c = {
        youtube: {
          matcher:
            /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "transparent",
            enablejsapi: 1,
            html5: 1,
          },
          paramPlace: 8,
          type: "iframe",
          url: "https://www.youtube-nocookie.com/embed/$4",
          thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg",
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
          },
          paramPlace: 3,
          type: "iframe",
          url: "//player.vimeo.com/video/$2",
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: "image",
          url: "//$1/p/$2/media/?size=l",
        },
        gmap_place: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: "iframe",
          url: function (a) {
            return (
              "//maps.google." +
              a[2] +
              "/?ll=" +
              (a[9]
                ? a[9] +
                  "&z=" +
                  Math.floor(a[10]) +
                  (a[12] ? a[12].replace(/^\//, "&") : "")
                : a[12] + ""
              ).replace(/\?/, "&") +
              "&output=" +
              (a[12] && a[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            );
          },
        },
        gmap_search: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
          type: "iframe",
          url: function (a) {
            return (
              "//maps.google." +
              a[2] +
              "/maps?q=" +
              a[5].replace("query=", "q=").replace("api=1", "") +
              "&output=embed"
            );
          },
        },
      },
      b = function (c, d, b) {
        if (c)
          return (
            (b = b || ""),
            "object" === a.type(b) && (b = a.param(b, !0)),
            a.each(d, function (a, b) {
              c = c.replace("$" + a, b || "");
            }),
            b.length && (c += (c.indexOf("?") > 0 ? "&" : "?") + b),
            c
          );
      },
      d;
    a(document).on("objectNeedsType.fb", function (n, o, d) {
      var l,
        m,
        g,
        i,
        e,
        k,
        j,
        f = d.src || "",
        h = !1;
      (l = a.extend(!0, {}, c, d.opts.media)),
        a.each(l, function (l, c) {
          var n, o;
          if ((g = f.match(c.matcher))) {
            if (
              ((h = c.type), (j = l), (k = {}), c.paramPlace && g[c.paramPlace])
            ) {
              (e = g[c.paramPlace]),
                "?" == e[0] && (e = e.substring(1)),
                (e = e.split("&"));
              for (n = 0; n < e.length; ++n)
                (o = e[n].split("=", 2)),
                  2 == o.length &&
                    (k[o[0]] = decodeURIComponent(o[1].replace(/\+/g, " ")));
            }
            return (
              (i = a.extend(!0, {}, c.params, d.opts[l], k)),
              (f =
                "function" === a.type(c.url)
                  ? c.url.call(this, g, i, d)
                  : b(c.url, g, i)),
              (m =
                "function" === a.type(c.thumb)
                  ? c.thumb.call(this, g, i, d)
                  : b(c.thumb, g)),
              "youtube" === l
                ? (f = f.replace(/&t=((\d+)m)?(\d+)s/, function (c, d, a, b) {
                    return (
                      "&start=" +
                      ((a ? 60 * parseInt(a, 10) : 0) + parseInt(b, 10))
                    );
                  }))
                : "vimeo" === l && (f = f.replace("&%23", "#")),
              !1
            );
          }
        }),
        h
          ? (d.opts.thumb ||
              (d.opts.$thumb && d.opts.$thumb.length) ||
              (d.opts.thumb = m),
            "iframe" === h &&
              (d.opts = a.extend(!0, d.opts, {
                iframe: { preload: !1, attr: { scrolling: "no" } },
              })),
            a.extend(d, {
              type: h,
              src: f,
              origSrc: d.src,
              contentSource: j,
              contentType:
                "image" === h
                  ? "image"
                  : "gmap_place" == j || "gmap_search" == j
                  ? "map"
                  : "video",
            }))
          : f && (d.type = d.opts.defaultType);
    }),
      (d = {
        youtube: {
          src: "https://www.youtube.com/iframe_api",
          class: "YT",
          loading: !1,
          loaded: !1,
        },
        vimeo: {
          src: "https://player.vimeo.com/api/player.js",
          class: "Vimeo",
          loading: !1,
          loaded: !1,
        },
        load: function (a) {
          var b,
            c = this;
          if (this[a].loaded)
            return void setTimeout(function () {
              c.done(a);
            });
          this[a].loading ||
            ((this[a].loading = !0),
            (b = document.createElement("script")),
            (b.type = "text/javascript"),
            (b.src = this[a].src),
            "youtube" === a
              ? (window.onYouTubeIframeAPIReady = function () {
                  (c[a].loaded = !0), c.done(a);
                })
              : (b.onload = function () {
                  (c[a].loaded = !0), c.done(a);
                }),
            document.body.appendChild(b));
        },
        done: function (c) {
          var b, d, e;
          "youtube" === c && delete window.onYouTubeIframeAPIReady,
            (b = a.fancybox.getInstance()) &&
              ((d = b.current.$content.find("iframe")),
              "youtube" === c && void 0 !== YT && YT
                ? (e = new YT.Player(d.attr("id"), {
                    events: {
                      onStateChange: function (a) {
                        0 == a.data && b.next();
                      },
                    },
                  }))
                : "vimeo" === c &&
                  void 0 !== Vimeo &&
                  Vimeo &&
                  ((e = new Vimeo.Player(d)),
                  e.on("ended", function () {
                    b.next();
                  })));
        },
      }),
      a(document).on({
        "afterShow.fb": function (c, b, a) {
          b.group.length > 1 &&
            ("youtube" === a.contentSource || "vimeo" === a.contentSource) &&
            d.load(a.contentSource);
        },
      });
  })(jQuery),
  (function (b, d, a) {
    "use strict";
    var h = (function () {
        return (
          b.requestAnimationFrame ||
          b.webkitRequestAnimationFrame ||
          b.mozRequestAnimationFrame ||
          b.oRequestAnimationFrame ||
          function (a) {
            return b.setTimeout(a, 1e3 / 60);
          }
        );
      })(),
      f = (function () {
        return (
          b.cancelAnimationFrame ||
          b.webkitCancelAnimationFrame ||
          b.mozCancelAnimationFrame ||
          b.oCancelAnimationFrame ||
          function (a) {
            b.clearTimeout(a);
          }
        );
      })(),
      g = function (a) {
        var d = [],
          c;
        (a = a.originalEvent || a || b.e),
          (a =
            a.touches && a.touches.length
              ? a.touches
              : a.changedTouches && a.changedTouches.length
              ? a.changedTouches
              : [a]);
        for (c in a)
          a[c].pageX
            ? d.push({ x: a[c].pageX, y: a[c].pageY })
            : a[c].clientX && d.push({ x: a[c].clientX, y: a[c].clientY });
        return d;
      },
      e = function (a, b, c) {
        return b && a
          ? "x" === c
            ? a.x - b.x
            : "y" === c
            ? a.y - b.y
            : Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
          : 0;
      },
      i = function (b) {
        if (
          b.is(
            'a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe'
          ) ||
          a.isFunction(b.get(0).onclick) ||
          b.data("selectable")
        )
          return !0;
        for (var c = 0, d = b[0].attributes, e = d.length; c < e; c++)
          if ("data-fancybox-" === d[c].nodeName.substr(0, 14)) return !0;
        return !1;
      },
      k = function (a) {
        var c = b.getComputedStyle(a)["overflow-y"],
          d = b.getComputedStyle(a)["overflow-x"],
          e =
            ("scroll" === c || "auto" === c) && a.scrollHeight > a.clientHeight,
          f = ("scroll" === d || "auto" === d) && a.scrollWidth > a.clientWidth;
        return e || f;
      },
      j = function (a) {
        for (var b = !1; ; ) {
          if ((b = k(a.get(0)))) break;
          if (
            ((a = a.parent()),
            !a.length || a.hasClass("fancybox-stage") || a.is("body"))
          )
            break;
        }
        return b;
      },
      c = function (c) {
        var b = this;
        (b.instance = c),
          (b.$bg = c.$refs.bg),
          (b.$stage = c.$refs.stage),
          (b.$container = c.$refs.container),
          b.destroy(),
          b.$container.on(
            "touchstart.fb.touch mousedown.fb.touch",
            a.proxy(b, "ontouchstart")
          );
      };
    (c.prototype.destroy = function () {
      var b = this;
      b.$container.off(".fb.touch"),
        a(d).off(".fb.touch"),
        b.requestId && (f(b.requestId), (b.requestId = null)),
        b.tapped && (clearTimeout(b.tapped), (b.tapped = null));
    }),
      (c.prototype.ontouchstart = function (h) {
        var c = this,
          f = a(h.target),
          l = c.instance,
          k = l.current,
          m = k.$slide,
          o = k.$content,
          n = "touchstart" == h.type;
        if (
          (n && c.$container.off("mousedown.fb.touch"),
          (!h.originalEvent || 2 != h.originalEvent.button) &&
            m.length &&
            f.length &&
            !i(f) &&
            !i(f.parent()) &&
            (f.is("img") ||
              !(h.originalEvent.clientX > f[0].clientWidth + f.offset().left)))
        ) {
          if (!k || l.isAnimating || k.$slide.hasClass("fancybox-animated"))
            return h.stopPropagation(), void h.preventDefault();
          (c.realPoints = c.startPoints = g(h)),
            c.startPoints.length &&
              (k.touch && h.stopPropagation(),
              (c.startEvent = h),
              (c.canTap = !0),
              (c.$target = f),
              (c.$content = o),
              (c.opts = k.opts.touch),
              (c.isPanning = !1),
              (c.isSwiping = !1),
              (c.isZooming = !1),
              (c.isScrolling = !1),
              (c.canPan = l.canPan()),
              (c.startTime = new Date().getTime()),
              (c.distanceX = c.distanceY = c.distance = 0),
              (c.canvasWidth = Math.round(m[0].clientWidth)),
              (c.canvasHeight = Math.round(m[0].clientHeight)),
              (c.contentLastPos = null),
              (c.contentStartPos = a.fancybox.getTranslate(c.$content) || {
                top: 0,
                left: 0,
              }),
              (c.sliderStartPos = a.fancybox.getTranslate(m)),
              (c.stagePos = a.fancybox.getTranslate(l.$refs.stage)),
              (c.sliderStartPos.top -= c.stagePos.top),
              (c.sliderStartPos.left -= c.stagePos.left),
              (c.contentStartPos.top -= c.stagePos.top),
              (c.contentStartPos.left -= c.stagePos.left),
              a(d)
                .off(".fb.touch")
                .on(
                  n
                    ? "touchend.fb.touch touchcancel.fb.touch"
                    : "mouseup.fb.touch mouseleave.fb.touch",
                  a.proxy(c, "ontouchend")
                )
                .on(
                  n ? "touchmove.fb.touch" : "mousemove.fb.touch",
                  a.proxy(c, "ontouchmove")
                ),
              a.fancybox.isMobile &&
                d.addEventListener("scroll", c.onscroll, !0),
              (((c.opts || c.canPan) &&
                (f.is(c.$stage) || c.$stage.find(f).length)) ||
                (f.is(".fancybox-image") && h.preventDefault(),
                a.fancybox.isMobile &&
                  f.parents(".fancybox-caption").length)) &&
                ((c.isScrollable = j(f) || j(f.parent())),
                (a.fancybox.isMobile && c.isScrollable) || h.preventDefault(),
                (1 === c.startPoints.length || k.hasError) &&
                  (c.canPan
                    ? (a.fancybox.stop(c.$content), (c.isPanning = !0))
                    : (c.isSwiping = !0),
                  c.$container.addClass("fancybox-is-grabbing")),
                2 === c.startPoints.length &&
                  "image" === k.type &&
                  (k.isLoaded || k.$ghost) &&
                  ((c.canTap = !1),
                  (c.isSwiping = !1),
                  (c.isPanning = !1),
                  (c.isZooming = !0),
                  a.fancybox.stop(c.$content),
                  (c.centerPointStartX =
                    0.5 * (c.startPoints[0].x + c.startPoints[1].x) -
                    a(b).scrollLeft()),
                  (c.centerPointStartY =
                    0.5 * (c.startPoints[0].y + c.startPoints[1].y) -
                    a(b).scrollTop()),
                  (c.percentageOfImageAtPinchPointX =
                    (c.centerPointStartX - c.contentStartPos.left) /
                    c.contentStartPos.width),
                  (c.percentageOfImageAtPinchPointY =
                    (c.centerPointStartY - c.contentStartPos.top) /
                    c.contentStartPos.height),
                  (c.startDistanceBetweenFingers = e(
                    c.startPoints[0],
                    c.startPoints[1]
                  )))));
        }
      }),
      (c.prototype.onscroll = function (b) {
        var a = this;
        (a.isScrolling = !0), d.removeEventListener("scroll", a.onscroll, !0);
      }),
      (c.prototype.ontouchmove = function (b) {
        var a = this;
        return void 0 !== b.originalEvent.buttons &&
          0 === b.originalEvent.buttons
          ? void a.ontouchend(b)
          : a.isScrolling
          ? void (a.canTap = !1)
          : ((a.newPoints = g(b)),
            void (
              (a.opts || a.canPan) &&
              a.newPoints.length &&
              a.newPoints.length &&
              ((a.isSwiping && !0 === a.isSwiping) || b.preventDefault(),
              (a.distanceX = e(a.newPoints[0], a.startPoints[0], "x")),
              (a.distanceY = e(a.newPoints[0], a.startPoints[0], "y")),
              (a.distance = e(a.newPoints[0], a.startPoints[0])),
              a.distance > 0 &&
                (a.isSwiping
                  ? a.onSwipe(b)
                  : a.isPanning
                  ? a.onPan()
                  : a.isZooming && a.onZoom()))
            ));
      }),
      (c.prototype.onSwipe = function (j) {
        var g,
          c = this,
          d = c.instance,
          i = c.isSwiping,
          e = c.sliderStartPos.left || 0;
        if (!0 !== i)
          "x" == i &&
            (c.distanceX > 0 &&
            (c.instance.group.length < 2 ||
              (0 === c.instance.current.index && !c.instance.current.opts.loop))
              ? (e += Math.pow(c.distanceX, 0.8))
              : c.distanceX < 0 &&
                (c.instance.group.length < 2 ||
                  (c.instance.current.index === c.instance.group.length - 1 &&
                    !c.instance.current.opts.loop))
              ? (e -= Math.pow(-c.distanceX, 0.8))
              : (e += c.distanceX)),
            (c.sliderLastPos = {
              top: "x" == i ? 0 : c.sliderStartPos.top + c.distanceY,
              left: e,
            }),
            c.requestId && (f(c.requestId), (c.requestId = null)),
            (c.requestId = h(function () {
              c.sliderLastPos &&
                (a.each(c.instance.slides, function (e, b) {
                  var d = b.pos - c.instance.currPos;
                  a.fancybox.setTranslate(b.$slide, {
                    top: c.sliderLastPos.top,
                    left:
                      c.sliderLastPos.left +
                      d * c.canvasWidth +
                      d * b.opts.gutter,
                  });
                }),
                c.$container.addClass("fancybox-is-sliding"));
            }));
        else if (Math.abs(c.distance) > 10) {
          if (
            ((c.canTap = !1),
            d.group.length < 2 && c.opts.vertical
              ? (c.isSwiping = "y")
              : d.isDragging ||
                !1 === c.opts.vertical ||
                ("auto" === c.opts.vertical && a(b).width() > 800)
              ? (c.isSwiping = "x")
              : ((g = Math.abs(
                  (180 * Math.atan2(c.distanceY, c.distanceX)) / Math.PI
                )),
                (c.isSwiping = g > 45 && g < 135 ? "y" : "x")),
            "y" === c.isSwiping && a.fancybox.isMobile && c.isScrollable)
          )
            return void (c.isScrolling = !0);
          (d.isDragging = c.isSwiping),
            (c.startPoints = c.newPoints),
            a.each(d.slides, function (g, b) {
              var e, f;
              a.fancybox.stop(b.$slide),
                (e = a.fancybox.getTranslate(b.$slide)),
                (f = a.fancybox.getTranslate(d.$refs.stage)),
                b.$slide
                  .css({
                    transform: "",
                    opacity: "",
                    "transition-duration": "",
                  })
                  .removeClass("fancybox-animated")
                  .removeClass(function (b, a) {
                    return (a.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                  }),
                b.pos === d.current.pos &&
                  ((c.sliderStartPos.top = e.top - f.top),
                  (c.sliderStartPos.left = e.left - f.left)),
                a.fancybox.setTranslate(b.$slide, {
                  top: e.top - f.top,
                  left: e.left - f.left,
                });
            }),
            d.SlideShow && d.SlideShow.isActive && d.SlideShow.stop();
        }
      }),
      (c.prototype.onPan = function () {
        var b = this;
        if (e(b.newPoints[0], b.realPoints[0]) < (a.fancybox.isMobile ? 10 : 5))
          return void (b.startPoints = b.newPoints);
        (b.canTap = !1),
          (b.contentLastPos = b.limitMovement()),
          b.requestId && f(b.requestId),
          (b.requestId = h(function () {
            a.fancybox.setTranslate(b.$content, b.contentLastPos);
          }));
      }),
      (c.prototype.limitMovement = function () {
        var i,
          k,
          j,
          g,
          b,
          a,
          e = this,
          h = e.canvasWidth,
          n = e.canvasHeight,
          d = e.distanceX,
          c = e.distanceY,
          l = e.contentStartPos,
          m = l.left,
          o = l.top,
          f = l.width,
          p = l.height;
        return (
          (b = f > h ? m + d : m),
          (a = o + c),
          (i = Math.max(0, 0.5 * h - 0.5 * f)),
          (k = Math.max(0, 0.5 * n - 0.5 * p)),
          (j = Math.min(h - f, 0.5 * h - 0.5 * f)),
          (g = Math.min(n - p, 0.5 * n - 0.5 * p)),
          d > 0 && b > i && (b = i - 1 + Math.pow(-i + m + d, 0.8) || 0),
          d < 0 && b < j && (b = j + 1 - Math.pow(j - m - d, 0.8) || 0),
          c > 0 && a > k && (a = k - 1 + Math.pow(-k + o + c, 0.8) || 0),
          c < 0 && a < g && (a = g + 1 - Math.pow(g - o - c, 0.8) || 0),
          { top: a, left: b }
        );
      }),
      (c.prototype.limitPosition = function (a, b, c, d) {
        var g = this,
          e = g.canvasWidth,
          f = g.canvasHeight;
        return (
          c > e
            ? ((a = a > 0 ? 0 : a), (a = a < e - c ? e - c : a))
            : (a = Math.max(0, e / 2 - c / 2)),
          d > f
            ? ((b = b > 0 ? 0 : b), (b = b < f - d ? f - d : b))
            : (b = Math.max(0, f / 2 - d / 2)),
          { top: b, left: a }
        );
      }),
      (c.prototype.onZoom = function () {
        var c = this,
          g = c.contentStartPos,
          i = g.width,
          j = g.height,
          o = g.left,
          n = g.top,
          m = e(c.newPoints[0], c.newPoints[1]),
          d = m / c.startDistanceBetweenFingers,
          k = Math.floor(i * d),
          l = Math.floor(j * d),
          p = (i - k) * c.percentageOfImageAtPinchPointX,
          q = (j - l) * c.percentageOfImageAtPinchPointY,
          r = (c.newPoints[0].x + c.newPoints[1].x) / 2 - a(b).scrollLeft(),
          s = (c.newPoints[0].y + c.newPoints[1].y) / 2 - a(b).scrollTop(),
          t = r - c.centerPointStartX,
          u = s - c.centerPointStartY,
          v = o + (p + t),
          w = n + (q + u),
          x = { top: w, left: v, scaleX: d, scaleY: d };
        (c.canTap = !1),
          (c.newWidth = k),
          (c.newHeight = l),
          (c.contentLastPos = x),
          c.requestId && f(c.requestId),
          (c.requestId = h(function () {
            a.fancybox.setTranslate(c.$content, c.contentLastPos);
          }));
      }),
      (c.prototype.ontouchend = function (c) {
        var b = this,
          e = b.isSwiping,
          h = b.isPanning,
          i = b.isZooming,
          j = b.isScrolling;
        if (
          ((b.endPoints = g(c)),
          (b.dMs = Math.max(new Date().getTime() - b.startTime, 1)),
          b.$container.removeClass("fancybox-is-grabbing"),
          a(d).off(".fb.touch"),
          d.removeEventListener("scroll", b.onscroll, !0),
          b.requestId && (f(b.requestId), (b.requestId = null)),
          (b.isSwiping = !1),
          (b.isPanning = !1),
          (b.isZooming = !1),
          (b.isScrolling = !1),
          (b.instance.isDragging = !1),
          b.canTap)
        )
          return b.onTap(c);
        (b.speed = 100),
          (b.velocityX = (b.distanceX / b.dMs) * 0.5),
          (b.velocityY = (b.distanceY / b.dMs) * 0.5),
          h ? b.endPanning() : i ? b.endZooming() : b.endSwiping(e, j);
      }),
      (c.prototype.endSwiping = function (c, g) {
        var b = this,
          d = !1,
          h = b.instance.group.length,
          e = Math.abs(b.distanceX),
          f = "x" == c && h > 1 && ((b.dMs > 130 && e > 10) || e > 50);
        (b.sliderLastPos = null),
          "y" == c && !g && Math.abs(b.distanceY) > 50
            ? (a.fancybox.animate(
                b.instance.current.$slide,
                {
                  top: b.sliderStartPos.top + b.distanceY + 150 * b.velocityY,
                  opacity: 0,
                },
                200
              ),
              (d = b.instance.close(!0, 250)))
            : f && b.distanceX > 0
            ? (d = b.instance.previous(300))
            : f && b.distanceX < 0 && (d = b.instance.next(300)),
          !1 !== d || ("x" != c && "y" != c) || b.instance.centerSlide(200),
          b.$container.removeClass("fancybox-is-sliding");
      }),
      (c.prototype.endPanning = function () {
        var d,
          e,
          c,
          b = this;
        b.contentLastPos &&
          (!1 === b.opts.momentum || b.dMs > 350
            ? ((d = b.contentLastPos.left), (e = b.contentLastPos.top))
            : ((d = b.contentLastPos.left + 500 * b.velocityX),
              (e = b.contentLastPos.top + 500 * b.velocityY)),
          (c = b.limitPosition(
            d,
            e,
            b.contentStartPos.width,
            b.contentStartPos.height
          )),
          (c.width = b.contentStartPos.width),
          (c.height = b.contentStartPos.height),
          a.fancybox.animate(b.$content, c, 366));
      }),
      (c.prototype.endZooming = function () {
        var e,
          f,
          g,
          h,
          b = this,
          i = b.instance.current,
          c = b.newWidth,
          d = b.newHeight;
        b.contentLastPos &&
          ((e = b.contentLastPos.left),
          (f = b.contentLastPos.top),
          (h = { top: f, left: e, width: c, height: d, scaleX: 1, scaleY: 1 }),
          a.fancybox.setTranslate(b.$content, h),
          c < b.canvasWidth && d < b.canvasHeight
            ? b.instance.scaleToFit(150)
            : c > i.width || d > i.height
            ? b.instance.scaleToActual(
                b.centerPointStartX,
                b.centerPointStartY,
                150
              )
            : ((g = b.limitPosition(e, f, c, d)),
              a.fancybox.animate(b.$content, g, 150)));
      }),
      (c.prototype.onTap = function (i) {
        var e,
          d = this,
          h = a(i.target),
          c = d.instance,
          f = c.current,
          j = (i && g(i)) || d.startPoints,
          k = j[0] ? j[0].x - a(b).scrollLeft() - d.stagePos.left : 0,
          l = j[0] ? j[0].y - a(b).scrollTop() - d.stagePos.top : 0,
          m = function (e) {
            var b = f.opts[e];
            if ((a.isFunction(b) && (b = b.apply(c, [f, i])), b))
              switch (b) {
                case "close":
                  c.close(d.startEvent);
                  break;
                case "toggleControls":
                  c.toggleControls();
                  break;
                case "next":
                  c.next();
                  break;
                case "nextOrClose":
                  c.group.length > 1 ? c.next() : c.close(d.startEvent);
                  break;
                case "zoom":
                  "image" == f.type &&
                    (f.isLoaded || f.$ghost) &&
                    (c.canPan()
                      ? c.scaleToFit()
                      : c.isScaledDown()
                      ? c.scaleToActual(k, l)
                      : c.group.length < 2 && c.close(d.startEvent));
              }
          };
        if (
          (!i.originalEvent || 2 != i.originalEvent.button) &&
          (h.is("img") || !(k > h[0].clientWidth + h.offset().left))
        ) {
          if (
            h.is(
              ".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"
            )
          )
            e = "Outside";
          else if (h.is(".fancybox-slide")) e = "Slide";
          else {
            if (
              !c.current.$content ||
              !c.current.$content.find(h).addBack().filter(h).length
            )
              return;
            e = "Content";
          }
          if (d.tapped) {
            if (
              (clearTimeout(d.tapped),
              (d.tapped = null),
              Math.abs(k - d.tapX) > 50 || Math.abs(l - d.tapY) > 50)
            )
              return this;
            m("dblclick" + e);
          } else
            (d.tapX = k),
              (d.tapY = l),
              f.opts["dblclick" + e] &&
              f.opts["dblclick" + e] !== f.opts["click" + e]
                ? (d.tapped = setTimeout(function () {
                    (d.tapped = null), c.isAnimating || m("click" + e);
                  }, 500))
                : m("click" + e);
          return this;
        }
      }),
      a(d)
        .on("onActivate.fb", function (b, a) {
          a && !a.Guestures && (a.Guestures = new c(a));
        })
        .on("beforeClose.fb", function (b, a) {
          a && a.Guestures && a.Guestures.destroy();
        });
  })(window, document, jQuery),
  (function (b, a) {
    "use strict";
    a.extend(!0, a.fancybox.defaults, {
      btnTpl: {
        slideShow:
          '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
      },
      slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
    });
    var c = function (a) {
      (this.instance = a), this.init();
    };
    a.extend(c.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      init: function () {
        var b = this,
          c = b.instance,
          d = c.group[c.currIndex].opts.slideShow;
        (b.$button = c.$refs.toolbar
          .find("[data-fancybox-play]")
          .on("click", function () {
            b.toggle();
          })),
          c.group.length < 2 || !d
            ? b.$button.hide()
            : d.progress &&
              (b.$progress = a(
                '<div class="fancybox-progress"></div>'
              ).appendTo(c.$refs.inner));
      },
      set: function (e) {
        var c = this,
          b = c.instance,
          d = b.current;
        d && (!0 === e || d.opts.loop || b.currIndex < b.group.length - 1)
          ? c.isActive &&
            "video" !== d.contentType &&
            (c.$progress &&
              a.fancybox.animate(
                c.$progress.show(),
                { scaleX: 1 },
                d.opts.slideShow.speed
              ),
            (c.timer = setTimeout(function () {
              b.current.opts.loop || b.current.index != b.group.length - 1
                ? b.next()
                : b.jumpTo(0);
            }, d.opts.slideShow.speed)))
          : (c.stop(), (b.idleSecondsCounter = 0), b.showControls());
      },
      clear: function () {
        var a = this;
        clearTimeout(a.timer),
          (a.timer = null),
          a.$progress && a.$progress.removeAttr("style").hide();
      },
      start: function () {
        var a = this,
          b = a.instance.current;
        b &&
          (a.$button
            .attr(
              "title",
              (b.opts.i18n[b.opts.lang] || b.opts.i18n.en).PLAY_STOP
            )
            .removeClass("fancybox-button--play")
            .addClass("fancybox-button--pause"),
          (a.isActive = !0),
          b.isComplete && a.set(!0),
          a.instance.trigger("onSlideShowChange", !0));
      },
      stop: function () {
        var a = this,
          b = a.instance.current;
        a.clear(),
          a.$button
            .attr(
              "title",
              (b.opts.i18n[b.opts.lang] || b.opts.i18n.en).PLAY_START
            )
            .removeClass("fancybox-button--pause")
            .addClass("fancybox-button--play"),
          (a.isActive = !1),
          a.instance.trigger("onSlideShowChange", !1),
          a.$progress && a.$progress.removeAttr("style").hide();
      },
      toggle: function () {
        var a = this;
        a.isActive ? a.stop() : a.start();
      },
    }),
      a(b).on({
        "onInit.fb": function (b, a) {
          a && !a.SlideShow && (a.SlideShow = new c(a));
        },
        "beforeShow.fb": function (e, b, c, d) {
          var a = b && b.SlideShow;
          d
            ? a && c.opts.slideShow.autoStart && a.start()
            : a && a.isActive && a.clear();
        },
        "afterShow.fb": function (c, b, d) {
          var a = b && b.SlideShow;
          a && a.isActive && a.set();
        },
        "afterKeydown.fb": function (h, c, f, g, d) {
          var e = c && c.SlideShow;
          !e ||
            !f.opts.slideShow ||
            (80 !== d && 32 !== d) ||
            a(b.activeElement).is("button,a,input") ||
            (g.preventDefault(), e.toggle());
        },
        "beforeClose.fb onDeactivate.fb": function (c, a) {
          var b = a && a.SlideShow;
          b && b.stop();
        },
      }),
      a(b).on("visibilitychange", function () {
        var d = a.fancybox.getInstance(),
          c = d && d.SlideShow;
        c && c.isActive && (b.hidden ? c.clear() : c.set());
      });
  })(document, jQuery),
  (function (a, c) {
    "use strict";
    var b = (function () {
        for (
          var d = [
              [
                "requestFullscreen",
                "exitFullscreen",
                "fullscreenElement",
                "fullscreenEnabled",
                "fullscreenchange",
                "fullscreenerror",
              ],
              [
                "webkitRequestFullscreen",
                "webkitExitFullscreen",
                "webkitFullscreenElement",
                "webkitFullscreenEnabled",
                "webkitfullscreenchange",
                "webkitfullscreenerror",
              ],
              [
                "webkitRequestFullScreen",
                "webkitCancelFullScreen",
                "webkitCurrentFullScreenElement",
                "webkitCancelFullScreen",
                "webkitfullscreenchange",
                "webkitfullscreenerror",
              ],
              [
                "mozRequestFullScreen",
                "mozCancelFullScreen",
                "mozFullScreenElement",
                "mozFullScreenEnabled",
                "mozfullscreenchange",
                "mozfullscreenerror",
              ],
              [
                "msRequestFullscreen",
                "msExitFullscreen",
                "msFullscreenElement",
                "msFullscreenEnabled",
                "MSFullscreenChange",
                "MSFullscreenError",
              ],
            ],
            f = {},
            e = 0,
            b,
            c;
          e < d.length;
          e++
        )
          if (((b = d[e]), b && b[1] in a)) {
            for (c = 0; c < b.length; c++) f[d[0][c]] = b[c];
            return f;
          }
        return !1;
      })(),
      d;
    b &&
      ((d = {
        request: function (c) {
          (c = c || a.documentElement),
            c[b.requestFullscreen](c.ALLOW_KEYBOARD_INPUT);
        },
        exit: function () {
          a[b.exitFullscreen]();
        },
        toggle: function (b) {
          (b = b || a.documentElement),
            this.isFullscreen() ? this.exit() : this.request(b);
        },
        isFullscreen: function () {
          return Boolean(a[b.fullscreenElement]);
        },
        enabled: function () {
          return Boolean(a[b.fullscreenEnabled]);
        },
      }),
      c.extend(!0, c.fancybox.defaults, {
        btnTpl: {
          fullScreen:
            '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
        },
        fullScreen: { autoStart: !1 },
      }),
      c(a).on(b.fullscreenchange, function () {
        var b = d.isFullscreen(),
          a = c.fancybox.getInstance();
        a &&
          (a.current &&
            "image" === a.current.type &&
            a.isAnimating &&
            ((a.isAnimating = !1),
            a.update(!0, !0, 0),
            a.isComplete || a.complete()),
          a.trigger("onFullscreenChange", b),
          a.$refs.container.toggleClass("fancybox-is-fullscreen", b),
          a.$refs.toolbar
            .find("[data-fancybox-fullscreen]")
            .toggleClass("fancybox-button--fsenter", !b)
            .toggleClass("fancybox-button--fsexit", b));
      })),
      c(a).on({
        "onInit.fb": function (e, a) {
          var c;
          if (!b)
            return void a.$refs.toolbar
              .find("[data-fancybox-fullscreen]")
              .remove();
          a && a.group[a.currIndex].opts.fullScreen
            ? ((c = a.$refs.container),
              c.on(
                "click.fb-fullscreen",
                "[data-fancybox-fullscreen]",
                function (a) {
                  a.stopPropagation(), a.preventDefault(), d.toggle();
                }
              ),
              a.opts.fullScreen &&
                !0 === a.opts.fullScreen.autoStart &&
                d.request(),
              (a.FullScreen = d))
            : a && a.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
        },
        "afterKeydown.fb": function (d, a, e, b, c) {
          a &&
            a.FullScreen &&
            70 === c &&
            (b.preventDefault(), a.FullScreen.toggle());
        },
        "beforeClose.fb": function (b, a) {
          a &&
            a.FullScreen &&
            a.$refs.container.hasClass("fancybox-is-fullscreen") &&
            d.exit();
        },
      });
  })(document, jQuery),
  (function (d, a) {
    "use strict";
    var b = "fancybox-thumbs",
      c;
    (a.fancybox.defaults = a.extend(
      !0,
      {
        btnTpl: {
          thumbs:
            '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: ".fancybox-container",
          axis: "y",
        },
      },
      a.fancybox.defaults
    )),
      (c = function (a) {
        this.init(a);
      }),
      a.extend(c.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function (b) {
          var a = this,
            c = b.group,
            d = 0,
            e,
            f;
          (a.instance = b),
            (a.opts = c[b.currIndex].opts.thumbs),
            (b.Thumbs = a),
            (a.$button = b.$refs.toolbar.find("[data-fancybox-thumbs]"));
          for (
            e = 0, f = c.length;
            e < f && (c[e].thumb && d++, !(d > 1));
            e++
          );
          d > 1 && a.opts
            ? (a.$button.removeAttr("style").on("click", function () {
                a.toggle();
              }),
              (a.isActive = !0))
            : a.$button.hide();
        },
        create: function () {
          var d,
            c = this,
            e = c.instance,
            f = c.opts.parentEl,
            g = [];
          c.$grid ||
            ((c.$grid = a(
              '<div class="' + b + " " + b + "-" + c.opts.axis + '"></div>'
            ).appendTo(e.$refs.container.find(f).addBack().filter(f))),
            c.$grid.on("click", "a", function () {
              e.jumpTo(a(this).attr("data-index"));
            })),
            c.$list ||
              (c.$list = a('<div class="' + b + '__list">').appendTo(c.$grid)),
            a.each(e.group, function (b, a) {
              (d = a.thumb),
                d || "image" !== a.type || (d = a.src),
                g.push(
                  '<a href="javascript:;" tabindex="0" data-index="' +
                    b +
                    '"' +
                    (d && d.length
                      ? ' style="background-image:url(' + d + ')"'
                      : 'class="fancybox-thumbs-missing"') +
                    "></a>"
                );
            }),
            (c.$list[0].innerHTML = g.join("")),
            "x" === c.opts.axis &&
              c.$list.width(
                parseInt(c.$grid.css("padding-right"), 10) +
                  e.group.length * c.$list.children().eq(0).outerWidth(!0)
              );
        },
        focus: function (f) {
          var d,
            a,
            b = this,
            c = b.$list,
            e = b.$grid;
          b.instance.current &&
            ((d = c
              .children()
              .removeClass("fancybox-thumbs-active")
              .filter('[data-index="' + b.instance.current.index + '"]')
              .addClass("fancybox-thumbs-active")),
            (a = d.position()),
            "y" === b.opts.axis &&
            (a.top < 0 || a.top > c.height() - d.outerHeight())
              ? c.stop().animate({ scrollTop: c.scrollTop() + a.top }, f)
              : "x" === b.opts.axis &&
                (a.left < e.scrollLeft() ||
                  a.left > e.scrollLeft() + (e.width() - d.outerWidth())) &&
                c.parent().stop().animate({ scrollLeft: a.left }, f));
        },
        update: function () {
          var a = this;
          a.instance.$refs.container.toggleClass(
            "fancybox-show-thumbs",
            this.isVisible
          ),
            a.isVisible
              ? (a.$grid || a.create(),
                a.instance.trigger("onThumbsShow"),
                a.focus(0))
              : a.$grid && a.instance.trigger("onThumbsHide"),
            a.instance.update();
        },
        hide: function () {
          (this.isVisible = !1), this.update();
        },
        show: function () {
          (this.isVisible = !0), this.update();
        },
        toggle: function () {
          (this.isVisible = !this.isVisible), this.update();
        },
      }),
      a(d).on({
        "onInit.fb": function (d, b) {
          var a;
          b &&
            !b.Thumbs &&
            ((a = new c(b)), a.isActive && !0 === a.opts.autoStart && a.show());
        },
        "beforeShow.fb": function (d, b, e, c) {
          var a = b && b.Thumbs;
          a && a.isVisible && a.focus(c ? 0 : 250);
        },
        "afterKeydown.fb": function (e, b, f, c, d) {
          var a = b && b.Thumbs;
          a && a.isActive && 71 === d && (c.preventDefault(), a.toggle());
        },
        "beforeClose.fb": function (c, b) {
          var a = b && b.Thumbs;
          a && a.isVisible && !1 !== a.opts.hideOnClose && a.$grid.hide();
        },
      });
  })(document, jQuery),
  (function (b, a) {
    "use strict";
    function c(a) {
      var b = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;",
      };
      return String(a).replace(/[&<>"'`=\/]/g, function (a) {
        return b[a];
      });
    }
    a.extend(!0, a.fancybox.defaults, {
      btnTpl: {
        share:
          '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
      },
      share: {
        url: function (b, a) {
          return (
            (!b.currentHash &&
              "inline" !== a.type &&
              "html" !== a.type &&
              (a.origSrc || a.src)) ||
            window.location
          );
        },
        tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
      },
    }),
      a(b).on("click", "[data-fancybox-share]", function () {
        var e,
          f,
          d = a.fancybox.getInstance(),
          b = d.current || null;
        b &&
          ("function" === a.type(b.opts.share.url) &&
            (e = b.opts.share.url.apply(b, [d, b])),
          (f = b.opts.share.tpl
            .replace(
              /\{\{media\}\}/g,
              "image" === b.type ? encodeURIComponent(b.src) : ""
            )
            .replace(/\{\{url\}\}/g, encodeURIComponent(e))
            .replace(/\{\{url_raw\}\}/g, c(e))
            .replace(
              /\{\{descr\}\}/g,
              d.$caption ? encodeURIComponent(d.$caption.text()) : ""
            )),
          a.fancybox.open({
            src: d.translate(d, f),
            type: "html",
            opts: {
              touch: !1,
              animationEffect: !1,
              afterLoad: function (a, b) {
                d.$refs.container.one("beforeClose.fb", function () {
                  a.close(null, 0);
                }),
                  b.$content.find(".fancybox-share__button").click(function () {
                    return (
                      window.open(this.href, "Share", "width=550, height=450"),
                      !1
                    );
                  });
              },
              mobile: { autoFocus: !1 },
            },
          }));
      });
  })(document, jQuery),
  (function (a, c, b) {
    "use strict";
    function d() {
      var c = a.location.hash.substr(1),
        b = c.split("-"),
        d =
          b.length > 1 && /^\+?\d+$/.test(b[b.length - 1])
            ? parseInt(b.pop(-1), 10) || 1
            : 1,
        e = b.join("-");
      return { hash: c, index: d < 1 ? 1 : d, gallery: e };
    }
    function e(a) {
      "" !== a.gallery &&
        b("[data-fancybox='" + b.escapeSelector(a.gallery) + "']")
          .eq(a.index - 1)
          .focus()
          .trigger("click.fb-start");
    }
    function f(b) {
      var a, c;
      return (
        !!b &&
        ((a = b.current ? b.current.opts : b.opts),
        "" !==
          (c =
            a.hash ||
            (a.$orig
              ? a.$orig.data("fancybox") || a.$orig.data("fancybox-trigger")
              : "")) && c)
      );
    }
    b.escapeSelector ||
      (b.escapeSelector = function (a) {
        return (a + "").replace(
          /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          function (a, b) {
            return b
              ? "\0" === a
                ? "�"
                : a.slice(0, -1) +
                  "\\" +
                  a.charCodeAt(a.length - 1).toString(16) +
                  " "
              : "\\" + a;
          }
        );
      }),
      b(function () {
        !1 !== b.fancybox.defaults.hash &&
          (b(c).on({
            "onInit.fb": function (e, a) {
              var b, c;
              !1 !== a.group[a.currIndex].opts.hash &&
                ((b = d()),
                (c = f(a)) &&
                  b.gallery &&
                  c == b.gallery &&
                  (a.currIndex = b.index - 1));
            },
            "beforeShow.fb": function (h, b, d, e) {
              var g;
              d &&
                !1 !== d.opts.hash &&
                (g = f(b)) &&
                ((b.currentHash =
                  g + (b.group.length > 1 ? "-" + (d.index + 1) : "")),
                a.location.hash !== "#" + b.currentHash &&
                  (e && !b.origHash && (b.origHash = a.location.hash),
                  b.hashTimer && clearTimeout(b.hashTimer),
                  (b.hashTimer = setTimeout(function () {
                    "replaceState" in a.history
                      ? (a.history[e ? "pushState" : "replaceState"](
                          {},
                          c.title,
                          a.location.pathname +
                            a.location.search +
                            "#" +
                            b.currentHash
                        ),
                        e && (b.hasCreatedHistory = !0))
                      : (a.location.hash = b.currentHash),
                      (b.hashTimer = null);
                  }, 300))));
            },
            "beforeClose.fb": function (e, b, d) {
              d &&
                !1 !== d.opts.hash &&
                (clearTimeout(b.hashTimer),
                b.currentHash && b.hasCreatedHistory
                  ? a.history.back()
                  : b.currentHash &&
                    ("replaceState" in a.history
                      ? a.history.replaceState(
                          {},
                          c.title,
                          a.location.pathname +
                            a.location.search +
                            (b.origHash || "")
                        )
                      : (a.location.hash = b.origHash)),
                (b.currentHash = null));
            },
          }),
          b(a).on("hashchange.fb", function () {
            var a = d(),
              c = null;
            b.each(b(".fancybox-container").get().reverse(), function (e, d) {
              var a = b(d).data("FancyBox");
              if (a && a.currentHash) return (c = a), !1;
            }),
              c
                ? c.currentHash === a.gallery + "-" + a.index ||
                  (1 === a.index && c.currentHash == a.gallery) ||
                  ((c.currentHash = null), c.close())
                : "" !== a.gallery && e(a);
          }),
          setTimeout(function () {
            b.fancybox.getInstance() || e(d());
          }, 50));
      });
  })(window, document, jQuery),
  (function (b, c) {
    "use strict";
    var a = new Date().getTime();
    c(b).on({
      "onInit.fb": function (c, b, d) {
        b.$refs.stage.on(
          "mousewheel DOMMouseScroll wheel MozMousePixelScroll",
          function (c) {
            var d = b.current,
              e = new Date().getTime();
            b.group.length < 2 ||
              !1 === d.opts.wheel ||
              ("auto" === d.opts.wheel && "image" !== d.type) ||
              (c.preventDefault(),
              c.stopPropagation(),
              d.$slide.hasClass("fancybox-animated") ||
                ((c = c.originalEvent || c),
                e - a < 250 ||
                  ((a = e),
                  b[
                    (-c.deltaY || -c.deltaX || c.wheelDelta || -c.detail) < 0
                      ? "next"
                      : "previous"
                  ]())));
          }
        );
      },
    });
  })(document, jQuery),
  !(function (b, a) {
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = a())
      : "function" == typeof define && define.amd
      ? define([], a)
      : "object" == typeof exports
      ? (exports.AOS = a())
      : (b.AOS = a());
  })(this, function () {
    return (function (c) {
      function a(d) {
        if (b[d]) return b[d].exports;
        var e = (b[d] = { exports: {}, id: d, loaded: !1 });
        return (
          c[d].call(e.exports, e, e.exports, a), (e.loaded = !0), e.exports
        );
      }
      var b = {};
      return (a.m = c), (a.c = b), (a.p = "dist/"), a(0);
    })([
      function (l, B, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        var x =
            Object.assign ||
            function (d) {
              for (var a = 1, b, c; a < arguments.length; a++) {
                b = arguments[a];
                for (c in b)
                  Object.prototype.hasOwnProperty.call(b, c) && (d[c] = b[c]);
              }
              return d;
            },
          w = c(1),
          v = (d(w), c(6)),
          u = d(v),
          t = c(7),
          j = d(t),
          p = c(8),
          n = d(p),
          m = c(9),
          f = d(m),
          o = c(10),
          k = d(o),
          q = c(11),
          r = d(q),
          s = c(14),
          i = d(s),
          b = [],
          g = !1,
          a = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: "DOMContentLoaded",
            throttleDelay: 99,
            debounceDelay: 50,
            disableMutationObserver: !1,
          },
          e = function () {
            var c =
              arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if ((c && (g = !0), g))
              return (b = (0, r.default)(b, a)), (0, k.default)(b, a.once), b;
          },
          h = function () {
            (b = (0, i.default)()), e();
          },
          z = function () {
            b.forEach(function (a, b) {
              a.node.removeAttribute("data-aos"),
                a.node.removeAttribute("data-aos-easing"),
                a.node.removeAttribute("data-aos-duration"),
                a.node.removeAttribute("data-aos-delay");
            });
          },
          y = function (a) {
            return (
              a === !0 ||
              ("mobile" === a && f.default.mobile()) ||
              ("phone" === a && f.default.phone()) ||
              ("tablet" === a && f.default.tablet()) ||
              ("function" == typeof a && a() === !0)
            );
          },
          A = function (c) {
            (a = x(a, c)), (b = (0, i.default)());
            var d = document.all && !window.atob;
            return y(a.disable) || d
              ? z()
              : (document
                  .querySelector("body")
                  .setAttribute("data-aos-easing", a.easing),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-duration", a.duration),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-delay", a.delay),
                "DOMContentLoaded" === a.startEvent &&
                ["complete", "interactive"].indexOf(document.readyState) > -1
                  ? e(!0)
                  : "load" === a.startEvent
                  ? window.addEventListener(a.startEvent, function () {
                      e(!0);
                    })
                  : document.addEventListener(a.startEvent, function () {
                      e(!0);
                    }),
                window.addEventListener(
                  "resize",
                  (0, j.default)(e, a.debounceDelay, !0)
                ),
                window.addEventListener(
                  "orientationchange",
                  (0, j.default)(e, a.debounceDelay, !0)
                ),
                window.addEventListener(
                  "scroll",
                  (0, u.default)(function () {
                    (0, k.default)(b, a.once);
                  }, a.throttleDelay)
                ),
                a.disableMutationObserver || (0, n.default)("[data-aos]", h),
                b);
          };
        l.exports = { init: A, refresh: e, refreshHard: h };
      },
      function (a, b) {},
      ,
      ,
      ,
      ,
      function (a, b) {
        (function (b) {
          "use strict";
          function n(s, b, g) {
            function p(a) {
              var b = i,
                c = m;
              return (i = m = void 0), (j = a), (l = s.apply(c, b));
            }
            function A(c) {
              return (j = c), (a = setTimeout(n, b)), v ? p(c) : l;
            }
            function z(a) {
              var e = a - c,
                f = a - j,
                d = b - e;
              return k ? x(d, o - f) : d;
            }
            function u(a) {
              var d = a - c,
                e = a - j;
              return void 0 === c || d >= b || d < 0 || (k && e >= o);
            }
            function n() {
              var b = e();
              return u(b) ? t(b) : void (a = setTimeout(n, z(b)));
            }
            function t(b) {
              return (a = void 0), r && i ? p(b) : ((i = m = void 0), l);
            }
            function B() {
              void 0 !== a && clearTimeout(a),
                (j = 0),
                (i = c = m = a = void 0);
            }
            function y() {
              return void 0 === a ? l : t(e());
            }
            function q() {
              var d = e(),
                f = u(d);
              if (((i = arguments), (m = this), (c = d), f)) {
                if (void 0 === a) return A(c);
                if (k) return (a = setTimeout(n, b)), p(c);
              }
              return void 0 === a && (a = setTimeout(n, b)), l;
            }
            var i,
              m,
              o,
              l,
              a,
              c,
              j = 0,
              v = !1,
              k = !1,
              r = !0;
            if ("function" != typeof s) throw new TypeError(f);
            return (
              (b = h(b) || 0),
              d(g) &&
                ((v = !!g.leading),
                (k = "maxWait" in g),
                (o = k ? w(h(g.maxWait) || 0, b) : o),
                (r = "trailing" in g ? !!g.trailing : r)),
              (q.cancel = B),
              (q.flush = y),
              q
            );
          }
          function j(e, g, a) {
            var b = !0,
              c = !0;
            if ("function" != typeof e) throw new TypeError(f);
            return (
              d(a) &&
                ((b = "leading" in a ? !!a.leading : b),
                (c = "trailing" in a ? !!a.trailing : c)),
              n(e, g, { leading: b, maxWait: g, trailing: c })
            );
          }
          function d(a) {
            var b = "undefined" == typeof a ? "undefined" : c(a);
            return !!a && ("object" == b || "function" == b);
          }
          function i(a) {
            return (
              !!a && "object" == ("undefined" == typeof a ? "undefined" : c(a))
            );
          }
          function k(a) {
            return (
              "symbol" == ("undefined" == typeof a ? "undefined" : c(a)) ||
              (i(a) && v.call(a) == l)
            );
          }
          function h(a) {
            var b, c;
            return "number" == typeof a
              ? a
              : k(a)
              ? g
              : (d(a) &&
                  ((b = "function" == typeof a.valueOf ? a.valueOf() : a),
                  (a = d(b) ? b + "" : b)),
                "string" != typeof a)
              ? 0 === a
                ? a
                : +a
              : ((a = a.replace(m, "")),
                (c = o.test(a)),
                c || p.test(a) ? q(a.slice(2), c ? 2 : 8) : y.test(a) ? g : +a);
          }
          var c =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (a) {
                    return typeof a;
                  }
                : function (a) {
                    return a &&
                      "function" == typeof Symbol &&
                      a.constructor === Symbol &&
                      a !== Symbol.prototype
                      ? "symbol"
                      : typeof a;
                  },
            f = "Expected a function",
            g = NaN,
            l = "[object Symbol]",
            m = /^\s+|\s+$/g,
            y = /^[-+]0x[0-9a-f]+$/i,
            o = /^0b[01]+$/i,
            p = /^0o[0-7]+$/i,
            q = parseInt,
            r =
              "object" == ("undefined" == typeof b ? "undefined" : c(b)) &&
              b &&
              b.Object === Object &&
              b,
            s =
              "object" ==
                ("undefined" == typeof self ? "undefined" : c(self)) &&
              self &&
              self.Object === Object &&
              self,
            t = r || s || Function("return this")(),
            u = Object.prototype,
            v = u.toString,
            w = Math.max,
            x = Math.min,
            e = function () {
              return t.Date.now();
            };
          a.exports = j;
        }).call(
          b,
          (function () {
            return this;
          })()
        );
      },
      function (a, b) {
        (function (c) {
          "use strict";
          function m(s, b, f) {
            function p(a) {
              var b = h,
                c = m;
              return (h = m = void 0), (j = a), (l = s.apply(c, b));
            }
            function A(c) {
              return (j = c), (a = setTimeout(n, b)), x ? p(c) : l;
            }
            function z(a) {
              var e = a - c,
                f = a - j,
                d = b - e;
              return k ? w(d, o - f) : d;
            }
            function u(a) {
              var d = a - c,
                e = a - j;
              return void 0 === c || d >= b || d < 0 || (k && e >= o);
            }
            function n() {
              var b = e();
              return u(b) ? t(b) : void (a = setTimeout(n, z(b)));
            }
            function t(b) {
              return (a = void 0), r && h ? p(b) : ((h = m = void 0), l);
            }
            function B() {
              void 0 !== a && clearTimeout(a),
                (j = 0),
                (h = c = m = a = void 0);
            }
            function y() {
              return void 0 === a ? l : t(e());
            }
            function q() {
              var d = e(),
                f = u(d);
              if (((h = arguments), (m = this), (c = d), f)) {
                if (void 0 === a) return A(c);
                if (k) return (a = setTimeout(n, b)), p(c);
              }
              return void 0 === a && (a = setTimeout(n, b)), l;
            }
            var h,
              m,
              o,
              l,
              a,
              c,
              j = 0,
              x = !1,
              k = !1,
              r = !0;
            if ("function" != typeof s) throw new TypeError(i);
            return (
              (b = g(b) || 0),
              d(f) &&
                ((x = !!f.leading),
                (k = "maxWait" in f),
                (o = k ? v(g(f.maxWait) || 0, b) : o),
                (r = "trailing" in f ? !!f.trailing : r)),
              (q.cancel = B),
              (q.flush = y),
              q
            );
          }
          function d(a) {
            var c = "undefined" == typeof a ? "undefined" : b(a);
            return !!a && ("object" == c || "function" == c);
          }
          function j(a) {
            return (
              !!a && "object" == ("undefined" == typeof a ? "undefined" : b(a))
            );
          }
          function h(a) {
            return (
              "symbol" == ("undefined" == typeof a ? "undefined" : b(a)) ||
              (j(a) && u.call(a) == k)
            );
          }
          function g(a) {
            var b, c;
            return "number" == typeof a
              ? a
              : h(a)
              ? f
              : (d(a) &&
                  ((b = "function" == typeof a.valueOf ? a.valueOf() : a),
                  (a = d(b) ? b + "" : b)),
                "string" != typeof a)
              ? 0 === a
                ? a
                : +a
              : ((a = a.replace(l, "")),
                (c = n.test(a)),
                c || o.test(a) ? p(a.slice(2), c ? 2 : 8) : x.test(a) ? f : +a);
          }
          var b =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (a) {
                    return typeof a;
                  }
                : function (a) {
                    return a &&
                      "function" == typeof Symbol &&
                      a.constructor === Symbol &&
                      a !== Symbol.prototype
                      ? "symbol"
                      : typeof a;
                  },
            i = "Expected a function",
            f = NaN,
            k = "[object Symbol]",
            l = /^\s+|\s+$/g,
            x = /^[-+]0x[0-9a-f]+$/i,
            n = /^0b[01]+$/i,
            o = /^0o[0-7]+$/i,
            p = parseInt,
            q =
              "object" == ("undefined" == typeof c ? "undefined" : b(c)) &&
              c &&
              c.Object === Object &&
              c,
            r =
              "object" ==
                ("undefined" == typeof self ? "undefined" : b(self)) &&
              self &&
              self.Object === Object &&
              self,
            s = q || r || Function("return this")(),
            t = Object.prototype,
            u = t.toString,
            v = Math.max,
            w = Math.min,
            e = function () {
              return s.Date.now();
            };
          a.exports = m;
        }).call(
          b,
          (function () {
            return this;
          })()
        );
      },
      function (e, a) {
        "use strict";
        function c(g, a) {
          var c = window.document,
            e =
              window.MutationObserver ||
              window.WebKitMutationObserver ||
              window.MozMutationObserver,
            f = new e(d);
          (b = a),
            f.observe(c.documentElement, {
              childList: !0,
              subtree: !0,
              removedNodes: !0,
            });
        }
        function d(a) {
          a &&
            a.forEach(function (a) {
              var c = Array.prototype.slice.call(a.addedNodes),
                d = Array.prototype.slice.call(a.removedNodes),
                e = c.concat(d).filter(function (a) {
                  return a.hasAttribute && a.hasAttribute("data-aos");
                }).length;
              e && b();
            });
        }
        Object.defineProperty(a, "__esModule", { value: !0 });
        var b = function () {};
        a.default = c;
      },
      function (j, a) {
        "use strict";
        function d(a, b) {
          if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function");
        }
        function b() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        Object.defineProperty(a, "__esModule", { value: !0 });
        var e = (function () {
            function a(d, c) {
              for (var b = 0, a; b < c.length; b++)
                (a = c[b]),
                  (a.enumerable = a.enumerable || !1),
                  (a.configurable = !0),
                  "value" in a && (a.writable = !0),
                  Object.defineProperty(d, a.key, a);
            }
            return function (b, c, d) {
              return c && a(b.prototype, c), d && a(b, d), b;
            };
          })(),
          f =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          c =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          g =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          h =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          i = (function () {
            function a() {
              d(this, a);
            }
            return (
              e(a, [
                {
                  key: "phone",
                  value: function () {
                    var a = b();
                    return !(!f.test(a) && !c.test(a.substr(0, 4)));
                  },
                },
                {
                  key: "mobile",
                  value: function () {
                    var a = b();
                    return !(!g.test(a) && !h.test(a.substr(0, 4)));
                  },
                },
                {
                  key: "tablet",
                  value: function () {
                    return this.mobile() && !this.phone();
                  },
                },
              ]),
              a
            );
          })();
        a.default = new i();
      },
      function (d, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var b = function (a, c, d) {
            var b = a.node.getAttribute("data-aos-once");
            c > a.position
              ? a.node.classList.add("aos-animate")
              : "undefined" != typeof b &&
                ("false" === b || (!d && "true" !== b)) &&
                a.node.classList.remove("aos-animate");
          },
          c = function (a, c) {
            var d = window.pageYOffset,
              e = window.innerHeight;
            a.forEach(function (a, f) {
              b(a, e + d, c);
            });
          };
        a.default = c;
      },
      function (g, a, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        Object.defineProperty(a, "__esModule", { value: !0 });
        var e = c(12),
          f = d(e),
          b = function (a, b) {
            return (
              a.forEach(function (a, c) {
                a.node.classList.add("aos-init"),
                  (a.position = (0, f.default)(a.node, b.offset));
              }),
              a
            );
          };
        a.default = b;
      },
      function (g, a, c) {
        "use strict";
        function d(a) {
          return a && a.__esModule ? a : { default: a };
        }
        Object.defineProperty(a, "__esModule", { value: !0 });
        var e = c(13),
          f = d(e),
          b = function (a, g) {
            var b = 0,
              e = 0,
              d = window.innerHeight,
              c = {
                offset: a.getAttribute("data-aos-offset"),
                anchor: a.getAttribute("data-aos-anchor"),
                anchorPlacement: a.getAttribute("data-aos-anchor-placement"),
              };
            switch (
              (c.offset && !isNaN(c.offset) && (e = parseInt(c.offset)),
              c.anchor &&
                document.querySelectorAll(c.anchor) &&
                (a = document.querySelectorAll(c.anchor)[0]),
              (b = (0, f.default)(a).top),
              c.anchorPlacement)
            ) {
              case "top-bottom":
                break;
              case "center-bottom":
                b += a.offsetHeight / 2;
                break;
              case "bottom-bottom":
                b += a.offsetHeight;
                break;
              case "top-center":
                b += d / 2;
                break;
              case "bottom-center":
                b += d / 2 + a.offsetHeight;
                break;
              case "center-center":
                b += d / 2 + a.offsetHeight / 2;
                break;
              case "top-top":
                b += d;
                break;
              case "bottom-top":
                b += a.offsetHeight + d;
                break;
              case "center-top":
                b += a.offsetHeight / 2 + d;
            }
            return c.anchorPlacement || c.offset || isNaN(g) || (e = g), b + e;
          };
        a.default = b;
      },
      function (c, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var b = function (a) {
          for (
            var b = 0, c = 0;
            a && !isNaN(a.offsetLeft) && !isNaN(a.offsetTop);

          )
            (b += a.offsetLeft - ("BODY" != a.tagName ? a.scrollLeft : 0)),
              (c += a.offsetTop - ("BODY" != a.tagName ? a.scrollTop : 0)),
              (a = a.offsetParent);
          return { top: c, left: b };
        };
        a.default = b;
      },
      function (c, a) {
        "use strict";
        Object.defineProperty(a, "__esModule", { value: !0 });
        var b = function (a) {
          return (
            (a = a || document.querySelectorAll("[data-aos]")),
            Array.prototype.map.call(a, function (a) {
              return { node: a };
            })
          );
        };
        a.default = b;
      },
    ]);
  }),
  !(function (b, g, h) {
    function c(c, a) {
      (this.element = c),
        (this.settings = b.extend({}, f, a)),
        this.settings.duplicate ||
          a.hasOwnProperty("removeIds") ||
          (this.settings.removeIds = !1),
        (this._defaults = f),
        (this._name = e),
        this.init();
    }
    var f = {
        label: "MENU",
        duplicate: !0,
        duration: 200,
        easingOpen: "swing",
        easingClose: "swing",
        closedSymbol: "&#9658;",
        openedSymbol: "&#9660;",
        prependTo: "body",
        appendTo: "",
        parentTag: "a",
        closeOnClick: !1,
        allowParentLinks: !1,
        nestedParentLinks: !0,
        showChildren: !1,
        removeIds: !0,
        removeClasses: !1,
        removeStyles: !1,
        brand: "",
        animations: "jquery",
        init: function () {},
        beforeOpen: function () {},
        beforeClose: function () {},
        afterOpen: function () {},
        afterClose: function () {},
      },
      e = "slicknav",
      a = "slicknav",
      d = {
        DOWN: 40,
        ENTER: 13,
        ESCAPE: 27,
        LEFT: 37,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38,
      };
    (c.prototype.init = function () {
      var h,
        f,
        c = this,
        i = b(this.element),
        e = this.settings,
        k,
        j;
      e.duplicate ? (c.mobileNav = i.clone()) : (c.mobileNav = i),
        e.removeIds &&
          (c.mobileNav.removeAttr("id"),
          c.mobileNav.find("*").each(function (c, a) {
            b(a).removeAttr("id");
          })),
        e.removeClasses &&
          (c.mobileNav.removeAttr("class"),
          c.mobileNav.find("*").each(function (c, a) {
            b(a).removeAttr("class");
          })),
        e.removeStyles &&
          (c.mobileNav.removeAttr("style"),
          c.mobileNav.find("*").each(function (c, a) {
            b(a).removeAttr("style");
          })),
        (h = a + "_icon"),
        "" === e.label && (h += " " + a + "_no-text"),
        "a" == e.parentTag && (e.parentTag = 'a href="#"'),
        c.mobileNav.attr("class", a + "_nav"),
        (f = b('<div class="' + a + '_menu"></div>')),
        "" !== e.brand &&
          ((k = b('<div class="' + a + '_brand">' + e.brand + "</div>")),
          b(f).append(k)),
        (c.btn = b(
          [
            "<" +
              e.parentTag +
              ' aria-haspopup="true" role="button" tabindex="0" class="' +
              a +
              "_btn " +
              a +
              '_collapsed">',
            '<span class="' + a + '_menutxt">' + e.label + "</span>",
            '<span class="' + h + '">',
            '<span class="' + a + '_icon-bar"></span>',
            '<span class="' + a + '_icon-bar"></span>',
            '<span class="' + a + '_icon-bar"></span>',
            "</span>",
            "</" + e.parentTag + ">",
          ].join("")
        )),
        b(f).append(c.btn),
        "" !== e.appendTo ? b(e.appendTo).append(f) : b(e.prependTo).prepend(f),
        f.append(c.mobileNav),
        (j = c.mobileNav.find("li")),
        b(j).each(function () {
          var d = b(this),
            g = {},
            k,
            h,
            f,
            j,
            l,
            i;
          (g.children = d.children("ul").attr("role", "menu")),
            d.data("menu", g),
            g.children.length > 0
              ? ((k = d.contents()),
                (h = !1),
                (f = []),
                b(k).each(function () {
                  return (
                    !b(this).is("ul") &&
                    (f.push(this), void (b(this).is("a") && (h = !0)))
                  );
                }),
                (j = b(
                  "<" +
                    e.parentTag +
                    ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' +
                    a +
                    '_item"/>'
                )),
                e.allowParentLinks && !e.nestedParentLinks && h
                  ? b(f)
                      .wrapAll(
                        '<span class="' + a + "_parent-link " + a + '_row"/>'
                      )
                      .parent()
                  : ((l = b(f).wrapAll(j).parent()), l.addClass(a + "_row")),
                e.showChildren
                  ? d.addClass(a + "_open")
                  : d.addClass(a + "_collapsed"),
                d.addClass(a + "_parent"),
                (i = b(
                  '<span class="' +
                    a +
                    '_arrow">' +
                    (e.showChildren ? e.openedSymbol : e.closedSymbol) +
                    "</span>"
                )),
                e.allowParentLinks &&
                  !e.nestedParentLinks &&
                  h &&
                  (i = i.wrap(j).parent()),
                b(f).last().after(i))
              : 0 === d.children().length && d.addClass(a + "_txtnode"),
            d
              .children("a")
              .attr("role", "menuitem")
              .click(function (d) {
                e.closeOnClick &&
                  !b(d.target)
                    .parent()
                    .closest("li")
                    .hasClass(a + "_parent") &&
                  b(c.btn).click();
              }),
            e.closeOnClick &&
              e.allowParentLinks &&
              (d
                .children("a")
                .children("a")
                .click(function (a) {
                  b(c.btn).click();
                }),
              d
                .find("." + a + "_parent-link a:not(." + a + "_item)")
                .click(function (a) {
                  b(c.btn).click();
                }));
        }),
        b(j).each(function () {
          var a = b(this).data("menu");
          e.showChildren || c._visibilityToggle(a.children, null, !1, null, !0);
        }),
        c._visibilityToggle(c.mobileNav, null, !1, "init", !0),
        c.mobileNav.attr("role", "menu"),
        b(g).mousedown(function () {
          c._outlines(!1);
        }),
        b(g).keyup(function () {
          c._outlines(!0);
        }),
        b(c.btn).click(function (a) {
          a.preventDefault(), c._menuToggle();
        }),
        c.mobileNav.on("click", "." + a + "_item", function (a) {
          a.preventDefault(), c._itemClick(b(this));
        }),
        b(c.btn).keydown(function (e) {
          var f = e || event;
          switch (f.keyCode) {
            case d.ENTER:
            case d.SPACE:
            case d.DOWN:
              e.preventDefault(),
                (f.keyCode === d.DOWN && b(c.btn).hasClass(a + "_open")) ||
                  c._menuToggle(),
                b(c.btn).next().find('[role="menuitem"]').first().focus();
          }
        }),
        c.mobileNav.on("keydown", "." + a + "_item", function (e) {
          var f = e || event;
          switch (f.keyCode) {
            case d.ENTER:
              e.preventDefault(), c._itemClick(b(e.target));
              break;
            case d.RIGHT:
              e.preventDefault(),
                b(e.target)
                  .parent()
                  .hasClass(a + "_collapsed") && c._itemClick(b(e.target)),
                b(e.target).next().find('[role="menuitem"]').first().focus();
          }
        }),
        c.mobileNav.on("keydown", '[role="menuitem"]', function (e) {
          var k = e || event,
            f,
            g,
            h,
            i,
            j;
          switch (k.keyCode) {
            case d.DOWN:
              e.preventDefault(),
                (f = b(e.target)
                  .parent()
                  .parent()
                  .children()
                  .children('[role="menuitem"]:visible')),
                (g = f.index(e.target)),
                (h = g + 1),
                f.length <= h && (h = 0),
                (i = f.eq(h)),
                i.focus();
              break;
            case d.UP:
              e.preventDefault(),
                (f = b(e.target)
                  .parent()
                  .parent()
                  .children()
                  .children('[role="menuitem"]:visible')),
                (g = f.index(e.target)),
                (i = f.eq(g - 1)),
                i.focus();
              break;
            case d.LEFT:
              e.preventDefault(),
                b(e.target)
                  .parent()
                  .parent()
                  .parent()
                  .hasClass(a + "_open")
                  ? ((j = b(e.target).parent().parent().prev()),
                    j.focus(),
                    c._itemClick(j))
                  : b(e.target)
                      .parent()
                      .parent()
                      .hasClass(a + "_nav") &&
                    (c._menuToggle(), b(c.btn).focus());
              break;
            case d.ESCAPE:
              e.preventDefault(), c._menuToggle(), b(c.btn).focus();
          }
        }),
        e.allowParentLinks &&
          e.nestedParentLinks &&
          b("." + a + "_item a").click(function (a) {
            a.stopImmediatePropagation();
          });
    }),
      (c.prototype._menuToggle = function (e) {
        var c = this,
          b = c.btn,
          d = c.mobileNav;
        b.hasClass(a + "_collapsed")
          ? (b.removeClass(a + "_collapsed"), b.addClass(a + "_open"))
          : (b.removeClass(a + "_open"), b.addClass(a + "_collapsed")),
          b.addClass(a + "_animating"),
          c._visibilityToggle(d, b.parent(), !0, b);
      }),
      (c.prototype._itemClick = function (c) {
        var d = this,
          e = d.settings,
          b = c.data("menu");
        b ||
          ((b = {}),
          (b.arrow = c.children("." + a + "_arrow")),
          (b.ul = c.next("ul")),
          (b.parent = c.parent()),
          b.parent.hasClass(a + "_parent-link") &&
            ((b.parent = c.parent().parent()), (b.ul = c.parent().next("ul"))),
          c.data("menu", b)),
          b.parent.hasClass(a + "_collapsed")
            ? (b.arrow.html(e.openedSymbol),
              b.parent.removeClass(a + "_collapsed"),
              b.parent.addClass(a + "_open"),
              b.parent.addClass(a + "_animating"),
              d._visibilityToggle(b.ul, b.parent, !0, c))
            : (b.arrow.html(e.closedSymbol),
              b.parent.addClass(a + "_collapsed"),
              b.parent.removeClass(a + "_open"),
              b.parent.addClass(a + "_animating"),
              d._visibilityToggle(b.ul, b.parent, !0, c));
      }),
      (c.prototype._visibilityToggle = function (c, g, m, e, i) {
        function j(c, e) {
          b(c).removeClass(a + "_animating"),
            b(e).removeClass(a + "_animating"),
            i || d.afterOpen(c);
        }
        function k(e, f) {
          c.attr("aria-hidden", "true"),
            l.attr("tabindex", "-1"),
            h._setVisAttr(c, !0),
            c.hide(),
            b(e).removeClass(a + "_animating"),
            b(f).removeClass(a + "_animating"),
            i ? "init" == e && d.init() : d.afterClose(e);
        }
        var h = this,
          d = h.settings,
          l = h._getActionItems(c),
          f = 0;
        m && (f = d.duration),
          c.hasClass(a + "_hidden")
            ? (c.removeClass(a + "_hidden"),
              i || d.beforeOpen(e),
              "jquery" === d.animations
                ? c.stop(!0, !0).slideDown(f, d.easingOpen, function () {
                    j(e, g);
                  })
                : "velocity" === d.animations &&
                  c.velocity("finish").velocity("slideDown", {
                    duration: f,
                    easing: d.easingOpen,
                    complete: function () {
                      j(e, g);
                    },
                  }),
              c.attr("aria-hidden", "false"),
              l.attr("tabindex", "0"),
              h._setVisAttr(c, !1))
            : (c.addClass(a + "_hidden"),
              i || d.beforeClose(e),
              "jquery" === d.animations
                ? c
                    .stop(!0, !0)
                    .slideUp(f, this.settings.easingClose, function () {
                      k(e, g);
                    })
                : "velocity" === d.animations &&
                  c.velocity("finish").velocity("slideUp", {
                    duration: f,
                    easing: d.easingClose,
                    complete: function () {
                      k(e, g);
                    },
                  }));
      }),
      (c.prototype._setVisAttr = function (f, d) {
        var c = this,
          e = f
            .children("li")
            .children("ul")
            .not("." + a + "_hidden");
        d
          ? e.each(function () {
              var a = b(this),
                e;
              a.attr("aria-hidden", "true"),
                (e = c._getActionItems(a)),
                e.attr("tabindex", "-1"),
                c._setVisAttr(a, d);
            })
          : e.each(function () {
              var a = b(this),
                e;
              a.attr("aria-hidden", "false"),
                (e = c._getActionItems(a)),
                e.attr("tabindex", "0"),
                c._setVisAttr(a, d);
            });
      }),
      (c.prototype._getActionItems = function (c) {
        var b = c.data("menu"),
          d,
          e;
        return (
          b ||
            ((b = {}),
            (d = c.children("li")),
            (e = d.find("a")),
            (b.links = e.add(d.find("." + a + "_item"))),
            c.data("menu", b)),
          b.links
        );
      }),
      (c.prototype._outlines = function (c) {
        c
          ? b("." + a + "_item, ." + a + "_btn").css("outline", "")
          : b("." + a + "_item, ." + a + "_btn").css("outline", "none");
      }),
      (c.prototype.toggle = function () {
        var a = this;
        a._menuToggle();
      }),
      (c.prototype.open = function () {
        var b = this;
        b.btn.hasClass(a + "_collapsed") && b._menuToggle();
      }),
      (c.prototype.close = function () {
        var b = this;
        b.btn.hasClass(a + "_open") && b._menuToggle();
      }),
      (b.fn[e] = function (a) {
        var f = arguments,
          d;
        if (void 0 === a || "object" == typeof a)
          return this.each(function () {
            b.data(this, "plugin_" + e) ||
              b.data(this, "plugin_" + e, new c(this, a));
          });
        if ("string" == typeof a && "_" !== a[0] && "init" !== a)
          return (
            this.each(function () {
              var g = b.data(this, "plugin_" + e);
              g instanceof c &&
                "function" == typeof g[a] &&
                (d = g[a].apply(g, Array.prototype.slice.call(f, 1)));
            }),
            void 0 !== d ? d : this
          );
      });
  })(jQuery, document, window);

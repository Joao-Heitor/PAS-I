!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (e.SimpleMaskMoney = t());
})(this, function () {
  "use strict";
  var r =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          },
    e = (function () {
      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      return function (e, t, r) {
        return t && i(e.prototype, t), r && i(e, r), e;
      };
    })();
  var i = (function () {
      function t(e) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.afterFormat = function () {}),
          (this.allowNegative = !1),
          (this.beforeFormat = function () {}),
          (this.negativeSignAfter = !1),
          (this.decimalSeparator = ","),
          (this.fixed = !0),
          (this.fractionDigits = 2),
          (this.prefix = ""),
          (this.suffix = ""),
          (this.thousandsSeparator = "."),
          (this.cursor = "move"),
          this.merge(e);
      }
      return (
        e(t, [
          {
            key: "merge",
            value: function (e) {
              e &&
                "object" === (void 0 === e ? "undefined" : r(e)) &&
                ((this.fractionDigits =
                  void 0 === e.fractionDigits || isNaN(e.fractionDigits)
                    ? this.fractionDigits
                    : parseInt(e.fractionDigits)),
                (this.afterFormat =
                  "function" == typeof e.afterFormat
                    ? e.afterFormat
                    : this.afterFormat),
                (this.beforeFormat =
                  "function" == typeof e.beforeFormat
                    ? e.beforeFormat
                    : this.beforeFormat),
                (this.fixed =
                  "boolean" == typeof e.fixed ? e.fixed : this.fixed),
                (this.allowNegative =
                  "boolean" == typeof e.allowNegative
                    ? e.allowNegative
                    : this.allowNegative),
                (this.negativeSignAfter =
                  "boolean" == typeof e.negativeSignAfter
                    ? e.negativeSignAfter
                    : this.negativeSignAfter),
                (this.decimalSeparator =
                  void 0 === e.decimalSeparator
                    ? this.decimalSeparator
                    : e.decimalSeparator),
                (this.prefix = void 0 === e.prefix ? this.prefix : e.prefix),
                (this.suffix = void 0 === e.suffix ? this.suffix : e.suffix),
                (this.thousandsSeparator =
                  void 0 === e.thousandsSeparator
                    ? this.thousandsSeparator
                    : e.thousandsSeparator),
                (this.cursor = void 0 === e.cursor ? this.cursor : e.cursor));
            },
          },
        ]),
        t
      );
    })(),
    a = (function () {
      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      return function (e, t, r) {
        return t && i(e.prototype, t), r && i(e, r), e;
      };
    })();
  var o = (function () {
      function t(e) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.args = new i(e));
      }
      return (
        a(t, [
          {
            key: "addCompleter",
            value: function (e, t, r) {
              for (
                var i =
                  !(3 < arguments.length && void 0 !== arguments[3]) ||
                  arguments[3];
                e.length < r;

              )
                e = i ? "" + t + e : "" + e + t;
              return e;
            },
          },
          {
            key: "addPrefix",
            value: function (e) {
              return "" + this.args.prefix + e;
            },
          },
          {
            key: "addSeparators",
            value: function (e) {
              for (
                var t = e.length - this.args.fractionDigits,
                  r = this.args.fixed ? "d" : "w",
                  i = "\\,?||\\.?(\\" + r + ")",
                  a = Math.ceil(t / 3),
                  n = this.args.decimalSeparator + "$" + (a + 1),
                  o = a;
                0 !== o;
                o--
              )
                3 <= t
                  ? ((i = "(\\" + r + "{3})" + i), (t -= 3))
                  : (i = "(\\" + r + "{" + t + "})" + i),
                  (n =
                    1 < o
                      ? this.args.thousandsSeparator + "$" + o + n
                      : "$" + o + n);
              return e.replace(new RegExp(i), n);
            },
          },
          {
            key: "addSuffix",
            value: function (e) {
              return "" + e + this.args.suffix;
            },
          },
          {
            key: "adjustDotPosition",
            value: function (e) {
              var t,
                r = e.toString();
              return (
                (t =
                  (r = r.replace(".", "")).length - this.args.fractionDigits),
                (r = r.substring(0, t) + "." + r.substring(t))
              );
            },
          },
          {
            key: "completer",
            value: function () {
              var e =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1;
              return this.args.fixed ? "".padEnd(e, "0") : "".padEnd(e, "_");
            },
          },
          {
            key: "checkNumberStart",
            value: function (e, t) {
              var r = e.toString();
              return r[0] === t ? (this.args.fixed ? "0" : "_") + r : r;
            },
          },
          {
            key: "checkSuffix",
            value: function (e) {
              var t = void 0,
                r = e.length - 1,
                i = r - 1,
                a = e.substring(
                  r - this.args.suffix.length + 1,
                  r + this.args.suffix.length
                ),
                n = e.substring(
                  i - this.args.suffix.length + 1,
                  i + this.args.suffix.length
                );
              switch (this.args.suffix) {
                case a:
                  t = e;
                  break;
                case n:
                  t =
                    "" +
                    e.substring(0, i) +
                    e.substring(
                      e.length + this.args.suffix.length + 1,
                      i + this.args.suffix.length
                    ) +
                    ".";
                  break;
                default:
                  t = e.substring(0, r) + ".";
              }
              return t;
            },
          },
          {
            key: "emptyOrInvalid",
            value: function () {
              return (
                "" +
                this.completer() +
                this.args.decimalSeparator +
                this.completer(this.args.fractionDigits)
              );
            },
          },
          {
            key: "isFloat",
            value: function (e) {
              return e % 1 != 0;
            },
          },
          {
            key: "mask",
            value: function (e) {
              var t = this.args.allowNegative && -1 !== e.indexOf("-"),
                r = "" + (this.writingToNumber(e) || this.emptyOrInvalid());
              r = this.replaceSeparator(r, this.args.decimalSeparator, ".");
              var i = this.completer();
              return (
                isNaN(this.removeCompleter(r, i)) ||
                  ((r = this.replaceSeparator(r, ".")),
                  (r = this.addCompleter(r || "", i, this.args.fractionDigits)),
                  (r = this.args.fractionDigits >= r.length ? "" + i + r : r),
                  (r = this.addSeparators(r))),
                this.args.prefix && (r = this.addPrefix(r)),
                this.args.suffix && (r = this.addSuffix(r)),
                (!this.args.negativeSignAfter && t ? "-" : "") +
                  r +
                  (this.args.negativeSignAfter && t ? "-" : "")
              );
            },
          },
          {
            key: "numberToText",
            value: function (e) {
              var t = this.completer(),
                r = this.emptyOrInvalid();
              if (
                ((e = this.replaceSeparator(
                  e.toString(),
                  this.args.decimalSeparator,
                  "."
                )),
                !isNaN(e))
              ) {
                if (this.isFloat(e)) {
                  var i = e.split("."),
                    a = i[0],
                    n = i[1];
                  r =
                    "" +
                    a +
                    (n = this.addCompleter(
                      n || "",
                      t,
                      this.args.fractionDigits,
                      !1
                    ));
                } else
                  (r = this.removeCompleter(e, t)),
                    (r = this.addCompleter(
                      "string" == typeof r ? r : "",
                      t,
                      this.args.fractionDigits + r.length,
                      !1
                    ));
                (r = this.addSeparators(r)),
                  (r = this.checkNumberStart(r, this.args.decimalSeparator));
              }
              return (
                this.args.prefix && (r = this.addPrefix(r)),
                this.args.suffix && (r = this.addSuffix(r)),
                r
              );
            },
          },
          {
            key: "onlyNumber",
            value: function (e) {
              for (
                var t = e.toString().indexOf(this.args.decimalSeparator),
                  r = !1,
                  i = "",
                  a = e.length - 1;
                0 <= a;
                a--
              )
                isFinite(e[a]) || (!this.args.fixed && "_" === e[a])
                  ? (i = e[a] + i)
                  : -1 === t ||
                    r ||
                    e[a] !== this.args.decimalSeparator ||
                    ((i = e[a].replace(this.args.decimalSeparator, ".") + i),
                    (r = !0));
              return "." === i[0] ? "0" + i : i;
            },
          },
          {
            key: "removeCompleter",
            value: function (e, t) {
              for (
                var r =
                    !(2 < arguments.length && void 0 !== arguments[2]) ||
                    arguments[2],
                  i = function () {
                    return r ? 0 : e.length - 1;
                  },
                  a = i();
                e[a] === t;

              )
                (e = e.substring(0, a - 1) + e.substring(a + 1, e.length)),
                  (a = i());
              return e;
            },
          },
          {
            key: "removePrefix",
            value: function (e) {
              return (
                -1 !== e.indexOf(this.args.prefix, 0) &&
                  (e = e.substring(this.args.prefix.length, e.length)),
                e
              );
            },
          },
          {
            key: "removeSuffix",
            value: function (e) {
              var t = e.indexOf(
                this.args.suffix,
                e.length - this.args.suffix.length
              );
              if (-1 !== t) {
                var r = e.substring(0, t);
                e =
                  r +
                  e.substring(
                    r.length + this.args.suffix.length - 1,
                    e.length - 1
                  );
              }
              return e;
            },
          },
          {
            key: "replaceSeparator",
            value: function (e, t) {
              var r =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : "";
              return e.replace(new RegExp("\\" + t, "g"), r);
            },
          },
          {
            key: "textToNumber",
            value: function (e) {
              var t = e.toString(),
                r = this.completer();
              return (
                this.args.prefix && (t = this.removePrefix(t)),
                this.args.suffix && (t = this.removeSuffix(t)),
                (t = this.onlyNumber(t)) &&
                  ((t = this.removeCompleter(t, r)),
                  (t = this.checkNumberStart(t, "."))),
                t || (this.args.fixed ? "0" : "")
              );
            },
          },
          {
            key: "writingToNumber",
            value: function (e) {
              var t = e.toString(),
                r = this.completer();
              return (
                this.args.prefix && (t = this.removePrefix(t)),
                this.args.suffix &&
                  ((t = this.checkSuffix(t)), (t = this.removeSuffix(t))),
                (t = this.onlyNumber(t)) &&
                  ((t = this.adjustDotPosition(t)),
                  (t = this.removeCompleter(t, r)),
                  (t = this.checkNumberStart(t, "."))),
                t || (this.args.fixed ? "0" : "")
              );
            },
          },
        ]),
        t
      );
    })(),
    n = {
      getCaretPosition: function (e) {
        var t = -1;
        if ("selectionStart" in e) t = e.selectionStart;
        else if (document.selection) {
          e.focus();
          var r = document.selection.createRange(),
            i = document.selection.createRange().text.length;
          r.moveStart("character", -e.value.length), (t = r.text.length - i);
        }
        return t;
      },
      setCaretPosition: function (e, t) {
        if (e.setSelectionRange) e.focus(), e.setSelectionRange(t, t);
        else if (e.createTextRange) {
          var r = e.createTextRange();
          r.collapse(!0),
            r.moveEnd("character", t),
            r.moveStart("character", t),
            r.select();
        }
      },
      indexMove: function (e, t, r) {
        switch (!0) {
          case t.length < e.length:
            return r + 1;
          case t.length > e.length:
            return r - 1;
          default:
            return r;
        }
      },
      addPropertyMask: function (r, i) {
        var a = this;
        r.maskArgs = {};
        var e = function (t) {
          Object.defineProperty(r.maskArgs, t, {
            get: function () {
              return i.args[t];
            },
            set: function (e) {
              (i.args[t] = e), a.refreshMask(r);
            },
          });
        };
        for (var t in i.args) e(t);
      },
      addMask: function (n, o) {
        var s = this;
        n.addEventListener("input", function (e) {
          var t = n.value;
          o.args.beforeFormat(t);
          var r = o.mask(t),
            i = s.getCaretPosition(n),
            a = s.indexMove(r, t, i);
          "start" === n.maskArgs.cursor
            ? (a = 0)
            : "end" === n.maskArgs.cursor && (a = r.length),
            (n.value = r),
            (n._value = r),
            s.setCaretPosition(n, a),
            o.args.afterFormat(r),
            !(e instanceof Event) && s.refreshMask(n);
        });
      },
      refreshMask: function (e) {
        e.dispatchEvent(new Event("input"));
      },
    },
    s =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          },
    t = (function () {
      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      return function (e, t, r) {
        return t && i(e.prototype, t), r && i(e, r), e;
      };
    })();
  var f = new i();
  return (function () {
    function a() {
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, a);
    }
    return (
      t(a, null, [
        {
          key: "formatToCurrency",
          value: function (e, t) {
            var r = new o(
              void 0 !== t && "object" === (void 0 === t ? "undefined" : s(t))
                ? t
                : f
            );
            r.args.beforeFormat(e);
            var i = r.args.allowNegative && -1 !== e.indexOf("-"),
              a = r.numberToText(r.textToNumber(e)),
              n =
                (!r.args.negativeSignAfter && i ? "-" : "") +
                a +
                (r.args.negativeSignAfter && i ? "-" : "");
            return r.args.afterFormat(n), n;
          },
        },
        {
          key: "formatToMask",
          value: function (e, t) {
            var r = new o(
                void 0 !== t && "object" === (void 0 === t ? "undefined" : s(t))
                  ? t
                  : f
              ),
              i = e.toString();
            r.args.beforeFormat(i);
            var a = r.mask(i);
            return r.args.afterFormat(a), a;
          },
        },
        {
          key: "formatToNumber",
          value: function (e, t) {
            var r = new o(
                void 0 !== t && "object" === (void 0 === t ? "undefined" : s(t))
                  ? t
                  : f
              ),
              i = e.toString();
            r.args.beforeFormat(i);
            var a = "0",
              n = r.args.allowNegative && -1 !== i.indexOf("-");
            return (
              n && (i = i.replace("-", "")),
              (i = r.textToNumber(i)),
              this.args.fixed || (i = i.replace(new RegExp("_", "g"), "")),
              isNaN(i) || (a = parseFloat(n ? -1 * i : i)),
              r.args.afterFormat(a),
              a
            );
          },
        },
        {
          key: "setMask",
          value: function (e, t) {
            if ("undefined" == typeof document)
              throw "This function only works on client side";
            var r = "string" == typeof e ? document.querySelector(e) : e,
              i = new o(
                void 0 !== t && "object" === (void 0 === t ? "undefined" : s(t))
                  ? t
                  : f
              );
            return (
              n.addPropertyMask(r, i),
              n.addMask(r, i),
              n.refreshMask(r),
              (r.formatToNumber = function () {
                return a.formatToNumber(r.value, r.maskArgs);
              }),
              r
            );
          },
        },
        {
          key: "args",
          get: function () {
            return f;
          },
          set: function (e) {
            f = new i(e);
          },
        },
      ]),
      a
    );
  })();
});
//# sourceMappingURL=simple-mask-money.js.map

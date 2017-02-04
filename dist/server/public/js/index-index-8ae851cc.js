"use strict";

webpackJsonp([0], { 100: function (e, t, r) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var u = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }return e;
    },
        o = r(10),
        l = n(o),
        a = r(99),
        d = n(a),
        c = function (e) {
      var t = e.todos;return l.default.createElement("ul", null, t.map(function (e) {
        return l.default.createElement(d.default, u({ key: e.id }, e));
      }));
    };c.propTypes = { todos: o.PropTypes.arrayOf(o.PropTypes.shape({ id: o.PropTypes.number.isRequired, completed: o.PropTypes.bool.isRequired, text: o.PropTypes.string.isRequired }).isRequired).isRequired }, t.default = c;
  }, 101: function (e, t, r) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var u = r(10),
        o = n(u),
        l = r(21),
        a = r(98),
        d = function (e) {
      var t = e.dispatch,
          r = void 0;return o.default.createElement("div", null, o.default.createElement("form", { onSubmit: function (e) {
          e.preventDefault(), console.log(r.value), r.value.trim() && (t((0, a.addTodo)(r.value)), r.value = "");
        } }, o.default.createElement("input", { ref: function (e) {
          r = e;
        } }), o.default.createElement("button", { type: "submit" }, "Add Todo")));
    };d = (0, l.connect)()(d), t.default = d;
  }, 102: function (e, t, r) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var u = r(21),
        o = r(100),
        l = n(o),
        a = function (e, t) {
      switch (t) {case "SHOW_ALL":
          return e;case "SHOW_COMPLETED":
          return e.filter(function (e) {
            return e.completed;
          });case "SHOW_ACTIVE":
          return e.filter(function (e) {
            return !e.completed;
          });}
    },
        d = function (e) {
      return { todos: a(e.todos, "SHOW_ALL") };
    },
        c = (0, u.connect)(d)(l.default);t.default = c;
  }, 224: function (e, t, r) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }var u = r(10),
        o = n(u),
        l = r(34),
        a = r(21),
        d = r(22),
        c = r(96),
        i = n(c),
        f = r(95),
        s = n(f);r(97);var p = (0, d.createStore)(i.default);(0, l.render)(o.default.createElement(a.Provider, { store: p }, o.default.createElement(s.default, null)), document.getElementById("root"));
  }, 95: function (e, t, r) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var u = r(10),
        o = n(u),
        l = r(101),
        a = n(l),
        d = r(102),
        c = n(d),
        i = function () {
      return o.default.createElement("div", null, o.default.createElement(a.default, null), o.default.createElement(c.default, null));
    };t.default = i;
  }, 96: function (e, t, r) {
    "use strict";
    function n(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];return r;
      }return Array.from(e);
    }function u() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t = arguments[1];switch (t.type) {case "ADD_TODO":
          return [].concat(n(e), [{ text: t.text, completed: !1 }]);default:
          return e;}
    }Object.defineProperty(t, "__esModule", { value: !0 });var o = r(22),
        l = (0, o.combineReducers)({ todos: u });t.default = l;
  }, 97: function (e, t) {}, 98: function (e, t, r) {
    "use strict";
    function n(e) {
      return { type: "ADD_TODO", text: e };
    }Object.defineProperty(t, "__esModule", { value: !0 }), t.addTodo = n;
  }, 99: function (e, t, r) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(t, "__esModule", { value: !0 });var u = r(10),
        o = n(u),
        l = function (e) {
      var t = e.onClick,
          r = e.completed,
          n = e.text;return o.default.createElement("li", { onClick: t, style: { textDecoration: r ? "line-through" : "none" } }, n);
    };l.propTypes = { onClick: u.PropTypes.func.isRequired, completed: u.PropTypes.bool.isRequired, text: u.PropTypes.string.isRequired }, t.default = l;
  } }, [224]);
//# sourceMappingURL=index-index-8ae851cc.js.map
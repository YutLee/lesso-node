webpackJsonp([1],{101:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(5),c=a(i),f=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"mod-footer"},c.default.createElement("div",{className:"mod-box"},c.default.createElement("p",{className:"link"},c.default.createElement("a",{href:"/"},"关于我们")," | ",c.default.createElement("a",{href:"/"},"广告服务")," | ",c.default.createElement("span",null,c.default.createElement("a",{href:"http://www.miibeian.gov.cn",target:"_blank"},"粤ICP备14093582号")," 粤ICP证B1.B2-20160109号")),c.default.createElement("p",null,"联塑商城lessomall.com-五金电气建材交易平台(中国联塑,香港上市代号:2128,联塑商城为中国联塑旗下品牌)"),c.default.createElement("p",null,"© 2015-2017 lessomall.com All Rights Reserved. 佛山市联塑电子商务有限公司")))}}]),t}(c.default.Component);t.default=f},102:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(5),c=a(i),f=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"mod-box"},c.default.createElement("a",{href:"/"},c.default.createElement("img",{src:"/public/img/logo.png"})),c.default.createElement("p",{style:{marginTop:"55px",float:"right"}},"客服热线：400-930-2128"))}}]),t}(c.default.Component);t.default=f},220:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(5),o=a(r),l=n(21),u=(n(12),n(13),n(95)),i=a(u);n(32),n(98),n(97),(0,l.render)(o.default.createElement(i.default,null),document.getElementById("root"))},95:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(5),f=a(c),s=(n(12),n(102)),d=a(s),m=n(101),p=a(m),b=function(e){function t(e){o(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isLogining:!1,mobile:"",password:""},n.change=n.change.bind(n),n.submit=n.submit.bind(n),n}return u(t,e),i(t,[{key:"change",value:function(e){this.setState(r({},e.target.name,e.target.value))}},{key:"submit",value:function(e){var t=this;e.preventDefault(),this.setState({isLogining:!0});var n={mobile:this.state.mobile,password:this.state.password};fetch("/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(e){t.setState({isLogining:!1}),e.message&&alert(e.message),200==e.code&&(location.href=e.location)}).catch(function(e){return t.setState({isLogining:!1})})}},{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement(d.default,null),f.default.createElement("div",{className:"mod-box p-login"},f.default.createElement("form",{className:"mod-login-box fl-r",onSubmit:this.submit},f.default.createElement("h2",{className:"title"},"联塑商城买家登录"),f.default.createElement("label",{className:"label"},"用户名："),f.default.createElement("div",{className:"m-input icon-input fix"},f.default.createElement("i",{className:"icon user"}),f.default.createElement("div",{className:"box"},f.default.createElement("input",{type:"text",name:"mobile",value:this.state.mobile,onChange:this.change}))),f.default.createElement("label",{className:"label"},"密 码："),f.default.createElement("div",{className:"m-input icon-input fix"},f.default.createElement("i",{className:"icon pass"}),f.default.createElement("div",{className:"box"},f.default.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:this.change}))),f.default.createElement("p",{className:"other-link"},f.default.createElement("a",{href:""},"忘记登录密码？")),f.default.createElement("button",{type:"submit",className:"button brand",disabled:this.state.isLogining},"登录"),f.default.createElement("p",{className:"other-link"},f.default.createElement("a",{href:""},"卖家登录")," | ",f.default.createElement("a",{href:""},"买家注册")))),f.default.createElement(p.default,null))}}]),t}(f.default.Component);t.default=b},97:function(e,t){},98:function(e,t){}},[220]);
//# sourceMappingURL=users-login-4b972a85.js.map
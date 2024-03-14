(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{472:function(t,e,a){"use strict";a.r(e);var s=a(18),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"panelmixin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#panelmixin"}},[t._v("#")]),t._v(" PanelMixin")]),t._v(" "),a("p",[t._v("继承自 "),a("RouterLink",{attrs:{to:"/zh/components/mixin/app-mixin.html"}},[t._v("AppMixin")]),t._v("，面板混入，提供展示的微件集合、模式、位置、微件的状态和可见性控制等功能。")],1),t._v(" "),a("h2",{attrs:{id:"props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("版本")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("widgets")]),t._v(" "),a("td",[t._v("微件列表。")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("[]")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("widgetStructure")]),t._v(" "),a("td",[t._v("微件结构。")]),t._v(" "),a("td",[t._v("array")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("relativeTo")]),t._v(" "),a("td",[t._v("指定弹出面板相对的元素（map/content）。")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("map")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("mode")]),t._v(" "),a("td",[t._v("显示模式（single/multi），只有 relativeTo 为 map 才有效。")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("single")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("position")]),t._v(" "),a("td",[t._v("面板弹出位置，只有 relativeTo 为 map 才有效。可参考 "),a("RouterLink",{attrs:{to:"/zh/config/app.html"}},[t._v("app.json")])],1),t._v(" "),a("td",[t._v("object")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("styles")]),t._v(" "),a("td",[t._v("面板样式。可参考 "),a("RouterLink",{attrs:{to:"/zh/config/app.html"}},[t._v("app.json")])],1),t._v(" "),a("td",[t._v("object")]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// position示例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  anchor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'top-right'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  horizontalOffset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  verticalOffset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  top"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bottom"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// styles示例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  expand"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  width"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  height"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"computed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#computed"}},[t._v("#")]),t._v(" computed")]),t._v(" "),a("h3",{attrs:{id:"widgetsinpanel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#widgetsinpanel"}},[t._v("#")]),t._v(" widgetsInPanel")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("参数")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("rel")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("弹出面板相对的元素（map/content），同 relativeTo")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("用法")]),t._v("\n在 template 可按如下方式使用：")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"widget in widgetsInPanel()"')]),t._v("\n或\nv"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"widget in widgetsInPanel('content')\"")]),t._v("\n")])])]),a("h3",{attrs:{id:"iswidgetactive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iswidgetactive"}},[t._v("#")]),t._v(" isWidgetActive")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("返回值")]),t._v("：微件是否激活。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参数")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("widget")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("微件对象")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])])])]),t._v(" "),a("h3",{attrs:{id:"iswidgetvisible"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iswidgetvisible"}},[t._v("#")]),t._v(" isWidgetVisible")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("返回值")]),t._v("：微件是否可见。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参数")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("widget")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("微件对象")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("rel")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("弹出面板相对的元素（map/content），同 relativeTo")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")])])])])])]),t._v(" "),a("h3",{attrs:{id:"widgetstructuresider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#widgetstructuresider"}},[t._v("#")]),t._v(" widgetStructureSider")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("返回值")]),t._v("：侧边栏微件结构。")])]),t._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" methods")]),t._v(" "),a("h3",{attrs:{id:"activatewidget"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#activatewidget"}},[t._v("#")]),t._v(" activateWidget")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("描述")]),t._v("：激活微件。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参数")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("widget")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("微件对象")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])])])]),t._v(" "),a("h3",{attrs:{id:"updatewidgetvisible"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updatewidgetvisible"}},[t._v("#")]),t._v(" updateWidgetVisible")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("描述")]),t._v("：更新微件可见性，当可见性为 false 时，关闭微件。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("参数")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("visible")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("可见性。")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("widget")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("微件对象")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);
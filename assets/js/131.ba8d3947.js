(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{494:function(t,s,a){"use strict";a.r(s);var e=a(18),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"图标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图标"}},[t._v("#")]),t._v(" 图标")]),t._v(" "),a("h2",{attrs:{id:"图标使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图标使用方式"}},[t._v("#")]),t._v(" 图标使用方式")]),t._v(" "),a("h3",{attrs:{id:"图像图标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图像图标"}},[t._v("#")]),t._v(" 图像图标")]),t._v(" "),a("p",[t._v("可设置为图像 URL。")]),t._v(" "),a("ul",[a("li",[t._v("应用 logo")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可选，应用logo，默认值为images/app-logo.svg")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logo"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"images/logo.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("ul",[a("li",[t._v("微件 icon")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可选，如果没有设置，使用widget目录内图标（manifest.json指向的icon）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"icon"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"images/xxx.svg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h3",{attrs:{id:"内嵌-svg-支持修改颜色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内嵌-svg-支持修改颜色"}},[t._v("#")]),t._v(" 内嵌 svg（"),a("strong",[t._v("支持修改颜色")]),t._v("）")]),t._v(" "),a("p",[t._v("可设置为 svg 的内容。")]),t._v(" "),a("ul",[a("li",[t._v("应用 logo")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// app.json\n"logo": "<svg class=\\"icon\\" viewBox=\\"0 0 1024 1024\\" xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"200\\" height=\\"200\\"><defs><style/></defs><path d=\\"M89.6 554.667H0c21.333 247.466 217.6 448 469.333 465.066V934.4C268.8 917.333 106.667 755.2 89.6 554.667zm0-85.334C106.667 268.8 268.8 106.667 469.333 89.6V4.267C221.867 21.333 21.333 221.867 0 469.333h89.6zm844.8 0h85.333c-17.066-247.466-217.6-448-465.066-465.066V89.6C755.2 106.667 917.333 268.8 934.4 469.333zm0 85.334C913.067 755.2 755.2 917.333 554.667 934.4v85.333c247.466-21.333 448-217.6 469.333-465.066h-89.6z\\"/><path d=\\"M213.333 384l128-42.667L435.2 435.2 597.333 256l213.334 106.667v298.666l-170.667-64-170.667 128-128-85.333-128 85.333z\\"/></svg>",\n\n')])])]),a("ul",[a("li",[t._v("微件 icon")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('// widgets/xxx/manifest.json\n"icon": "<svg class=\\"icon\\" viewBox=\\"0 0 1024 1024\\" xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"16\\" height=\\"16\\"><defs><style/></defs><path d=\\"M64 384h320V64H64v320zM0 0h448v448H0V0zm64 896h320V576H64v320zM0 512h448v448H0V512zm576 64v320h320V576H576zm-64-64h448v448H512V512zm64-448v320h320V64H576zM512 0h448v448H512V0z\\"/></svg>",\n')])])]),a("h2",{attrs:{id:"图标使用流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图标使用流程"}},[t._v("#")]),t._v(" 图标使用流程")]),t._v(" "),a("h3",{attrs:{id:"使用图像图标流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用图像图标流程"}},[t._v("#")]),t._v(" 使用图像图标流程")]),t._v(" "),a("p",[t._v("配置好应用图标和微件图标包括其他需要的图标，放到相应的目录内，默认情况下对于微件，在混入"),a("RouterLink",{attrs:{to:"/zh/components/mixin/widget-info-mixin.html"}},[t._v("WidgetInfoMixin")]),t._v("或"),a("RouterLink",{attrs:{to:"/zh/components/mixin/widget-mixin.html"}},[t._v("WidgetMixin")]),t._v("后，可以直接"),a("code",[t._v("widgetInfo.icon")]),t._v("：")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("mp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("icon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("icon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"widgetInfo.icon"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"使用-svg-图标流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-svg-图标流程"}},[t._v("#")]),t._v(" 使用 svg 图标流程")]),t._v(" "),a("h4",{attrs:{id:"_1-处理-svg-图标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-处理-svg-图标"}},[t._v("#")]),t._v(" 1. 处理 svg 图标")]),t._v(" "),a("blockquote",[a("p",[t._v("因为对 svg 有如下限制：")]),t._v(" "),a("ul",[a("li",[t._v("不要在<svg>标签上使用“height”/“width”属性（这会阻止 QIcon 处理尺寸的方式）")]),t._v(" "),a("li",[t._v('默认情况下，所有<path>都会应用“fill: currentColor” CSS； 如果您不想这样做，则将 fill="none"添加到<path>标记中')])]),t._v(" "),a("p",[t._v("所以在得到 svg 图标的时候"),a("strong",[t._v("不要带有颜色")]),t._v("，并且还需要使用工具对其进行优化，推荐使用"),a("code",[t._v("svgo")]),t._v("。")])]),t._v(" "),a("h4",{attrs:{id:"_2-放置-svg-内容到相应位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-放置-svg-内容到相应位置"}},[t._v("#")]),t._v(" 2. 放置 svg 内容到相应位置")]),t._v(" "),a("h4",{attrs:{id:"_3-默认情况下对于微件-在混入widgetinfomixin或widgetmixin后-可以直接widgetinfo-icon。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-默认情况下对于微件-在混入widgetinfomixin或widgetmixin后-可以直接widgetinfo-icon。"}},[t._v("#")]),t._v(" 3. 默认情况下对于微件，在混入"),a("RouterLink",{attrs:{to:"/zh/components/mixin/widget-info-mixin.html"}},[t._v("WidgetInfoMixin")]),t._v("或"),a("RouterLink",{attrs:{to:"/zh/components/mixin/widget-mixin.html"}},[t._v("WidgetMixin")]),t._v("后，可以直接"),a("code",[t._v("widgetInfo.icon")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"更多信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多信息"}},[t._v("#")]),t._v(" 更多信息")]),t._v(" "),a("p",[t._v("请参考"),a("RouterLink",{attrs:{to:"/zh/components/common/icon.html"}},[t._v("MpIcon")]),t._v("。")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);
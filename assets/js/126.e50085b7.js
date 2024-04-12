(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{484:function(n,t,e){"use strict";e.r(t);var a=e(18),i=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"主题定制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主题定制"}},[n._v("#")]),n._v(" 主题定制")]),n._v(" "),e("p",[n._v("主题包含主题清单和主题布局，依据"),e("RouterLink",{attrs:{to:"/zh/config/theme.html"}},[n._v("主题规范")]),n._v("，需要在 themes 下定义主题目录，提供图标、布局和清单文件，定义主题的关键在于主题的内容区域，他决定了可供配置的布局元素，需要指定 content 的名称、描述和 content 的组件名称，在布局 layout.json 可进一步描述内置的 mapWidgets 和 contentWidgets，包括微件的样式和面板的样式。")],1),n._v(" "),e("p",[n._v("以全空间一张图布局为例：\n它提供了 header、toolbar 、left 和 footer 四个内容区域，并且对于 toolbar 还指定了属性 maxWidgets，这些都可以通过混入 "),e("RouterLink",{attrs:{to:"/zh/components/mixin/theme-mixin.html"}},[n._v("ThemeMixin")]),n._v(" 被设置进去。")],1),n._v(" "),e("h2",{attrs:{id:"mppanspatialmapclassictheme-混入-thememixin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mppanspatialmapclassictheme-混入-thememixin"}},[n._v("#")]),n._v(" MpPanSpatialMapClassicTheme（混入 ThemeMixin）")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('<template>\n  <a-layout class="pan-spatial-map-wrapper">\n    <component\n      :is="headerContentComponent"\n      ref="headerContent"\n      v-bind="parseContentProps(\'header\')"\n    />\n    <a-layout ref="bodyContent">\n      <component\n        :is="leftContentComponent"\n        ref="leftContent"\n        v-bind="parseContentProps(\'left\')"\n      />\n      <mp-pan-spatial-map-side-panel\n        v-if="getMaxWidthFunc && mapInitialized"\n        v-bind="left.panel"\n        :widgets="left.widgets"\n        :max-width="getMaxWidthFunc"\n        @update-widget-state="onUpdateWidgetState(\'left\', $event)"\n      />\n      <a-layout class="main-wrapper">\n        <a-layout-content class="content-wrapper">\n          <mp-map-container\n            v-if="configInitialized"\n            class="map-wrapper"\n            cesium-lib-path="cesium/Cesium.js"\n            cesium-plugin-path="cesium/webclient-cesium-plugins.js"\n            :map-options="mapOptions"\n          />\n          <component\n            :is="toolbarContentComponent"\n            ref="toolbarContent"\n            v-bind="parseContentProps(\'toolbar\')"\n          />\n          <slot v-if="mapInitialized" name="map" />\n        </a-layout-content>\n        <a-layout-footer\n          class="footer-wrapper"\n          style="padding: 0;background: none"\n        >\n          <component\n            :is="footerContentComponent"\n            v-bind="parseContentProps(\'footer\')"\n            :max-view-height="maxFooterHeight"\n          />\n        </a-layout-footer>\n      </a-layout>\n    </a-layout>\n  </a-layout>\n</template>\n')])])]),e("h2",{attrs:{id:"mppanspatialmapclassicheader-混入-themecontentmixin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mppanspatialmapclassicheader-混入-themecontentmixin"}},[n._v("#")]),n._v(" MpPanSpatialMapClassicHeader（混入 ThemeContentMixin）")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('<template>\n  <mp-pan-spatial-map-header :theme-mode="themeMode">\n    <div slot="header-content" class="header-menu">\n      <a-menu\n        class="menu"\n        :theme="menuTheme"\n        mode="horizontal"\n        @select="onSelect"\n      >\n        <a-menu-item v-for="widget in widgets" :key="widget.id">\n          <mp-icon :icon="getWidgetIcon(widget)" class="icon" />\n          <span>{{ getWidgetLabel(widget) }}</span>\n        </a-menu-item>\n      </a-menu>\n    </div>\n    <template #header-right>\n      <mp-pan-spatial-map-header-avatar\n        v-if="isHeaderAvatarComponentExist"\n        class="header-item"\n      />\n      <a-tooltip placement="bottom" v-if="isAboutComponentExist">\n        <template slot="title">\n          <span>关于</span>\n        </template>\n        <a-icon\n          type="info-circle"\n          class="header-item"\n          @click="onShowAboutInfo"\n        />\n        <mp-window-wrapper :visible="aboutWindowVisible">\n          <template v-slot:default="slotProps">\n            <mp-window\n              title="关于"\n              :visible.sync="aboutWindowVisible"\n              :anchor="\'top-center\'"\n              :verticalOffset="150"\n              :shrink-action="false"\n              :full-screen-action="false"\n              v-bind="slotProps"\n            >\n              <template>\n                <mp-pan-spatial-map-about />\n              </template>\n            </mp-window>\n          </template>\n        </mp-window-wrapper>\n      </a-tooltip>\n    </template>\n  </mp-pan-spatial-map-header>\n</template>\n')])])])])}),[],!1,null,null,null);t.default=i.exports}}]);
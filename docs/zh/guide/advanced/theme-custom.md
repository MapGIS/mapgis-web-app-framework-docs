# 主题定制

主题包含主题清单和主题布局，依据[主题规范](/zh/config/theme.html)，需要在 themes 下定义主题目录，提供图标、布局和清单文件，定义主题的关键在于主题的内容区域，他决定了可供配置的布局元素，需要指定 content 的名称、描述和 content 的组件名称，在布局 layout.json 可进一步描述内置的 mapWidgets 和 contentWidgets，包括微件的样式和面板的样式。

以全空间一张图布局为例：
它提供了 header、toolbar 、left 和 footer 四个内容区域，并且对于 toolbar 还指定了属性 maxWidgets，这些都可以通过混入 [ThemeMixin](/zh/components/mixin/theme-mixin.html) 被设置进去。

## MpPanSpatialMapClassicTheme（混入 ThemeMixin）

```
<template>
  <a-layout class="pan-spatial-map-wrapper">
    <component
      :is="headerContentComponent"
      ref="headerContent"
      v-bind="parseContentProps('header')"
    />
    <a-layout ref="bodyContent">
      <component
        :is="leftContentComponent"
        ref="leftContent"
        v-bind="parseContentProps('left')"
      />
      <mp-pan-spatial-map-side-panel
        v-if="getMaxWidthFunc && mapInitialized"
        v-bind="left.panel"
        :widgets="left.widgets"
        :max-width="getMaxWidthFunc"
        @update-widget-state="onUpdateWidgetState('left', $event)"
      />
      <a-layout class="main-wrapper">
        <a-layout-content class="content-wrapper">
          <mp-map-container
            v-if="configInitialized"
            class="map-wrapper"
            cesium-lib-path="cesium/Cesium.js"
            cesium-plugin-path="cesium/webclient-cesium-plugins.js"
            :map-options="mapOptions"
          />
          <component
            :is="toolbarContentComponent"
            ref="toolbarContent"
            v-bind="parseContentProps('toolbar')"
          />
          <slot v-if="mapInitialized" name="map" />
        </a-layout-content>
        <a-layout-footer
          class="footer-wrapper"
          style="padding: 0;background: none"
        >
          <component
            :is="footerContentComponent"
            v-bind="parseContentProps('footer')"
            :max-view-height="maxFooterHeight"
          />
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
```

## MpPanSpatialMapClassicHeader（混入 ThemeContentMixin）

```
<template>
  <mp-pan-spatial-map-header :theme-mode="themeMode">
    <div slot="header-content" class="header-menu">
      <a-menu
        class="menu"
        :theme="menuTheme"
        mode="horizontal"
        @select="onSelect"
      >
        <a-menu-item v-for="widget in widgets" :key="widget.id">
          <mp-icon :icon="getWidgetIcon(widget)" class="icon" />
          <span>{{ getWidgetLabel(widget) }}</span>
        </a-menu-item>
      </a-menu>
    </div>
    <template #header-right>
      <mp-pan-spatial-map-header-avatar
        v-if="isHeaderAvatarComponentExist"
        class="header-item"
      />
      <a-tooltip placement="bottom" v-if="isAboutComponentExist">
        <template slot="title">
          <span>关于</span>
        </template>
        <a-icon
          type="info-circle"
          class="header-item"
          @click="onShowAboutInfo"
        />
        <mp-window-wrapper :visible="aboutWindowVisible">
          <template v-slot:default="slotProps">
            <mp-window
              title="关于"
              :visible.sync="aboutWindowVisible"
              :anchor="'top-center'"
              :verticalOffset="150"
              :shrink-action="false"
              :full-screen-action="false"
              v-bind="slotProps"
            >
              <template>
                <mp-pan-spatial-map-about />
              </template>
            </mp-window>
          </template>
        </mp-window-wrapper>
      </a-tooltip>
    </template>
  </mp-pan-spatial-map-header>
</template>
```

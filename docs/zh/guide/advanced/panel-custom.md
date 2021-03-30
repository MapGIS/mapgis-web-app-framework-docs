# 面板定制

面板可用于地图微件展示，也可用于内容区域微件展示，需要配置到应用全局配置中，面板需要处理微件的状态。
自定义面板时，可混入 [PanelMixin](/zh/api/reference/panel-mixin.html)。下面以默认为地图微件面板为例：

```html
<template>
  <div class="mp-map-widget-panel">
    <mp-map-widget-card
      v-for="widget in widgetsInPanel()"
      :key="widget.uri"
      :position="position"
      :styles="styles"
      :widget="widget"
      :visible="isWidgetVisible(widget)"
      @update:visible="updateWidgetVisible($event, widget)"
      @update-widget-state="$emit('update-widget-state', $event)"
      :z-index="isWidgetActive(widget) ? 2 : 1"
      @mousedown.native.capture="onPanelClick(widget)"
    />
  </div>
</template>
```

提取所有在面板展示的 widgets，然后分别放置到不同的面板窗口中，并负责面板的激活、面板的开关以及面板的定位。

# eventBus

Vue 事件总线

```
import Vue from 'vue'

export default new Vue()
```

```vue
<template>
  <div></div>
</template>

<script lang="ts">
import {
  LayerType,
  WidgetMixin,
  eventBus,
  events
} from '@mapgis/web-app-framework'

export default {
  name: 'MpBufferAnalysis',
  mixins: [WidgetMixin],

  methods: {
    addNewLayer(XXX) {
      this.resultData = { XXX }
      eventBus.$emit(events.ADD_DATA_EVENT, this.resultData)
    }
  }
}
</script>
```

### 内置的事件

| 事件名称                             | 说明                                                 | 版本 |
| ------------------------------------ | ---------------------------------------------------- | ---- |
| SCENE_LOADEN_ON_MAP                  | 监听三维图层是否加载到地图上                         | ---- |
| PLOT_LAYER_LOADED                    | 监听标绘图层是否加载完毕                             | ---- |
| ADD_DATA_EVENT                       | 添加数据                                             | ---- |
| DELETE_DATA_EVENT                    | 删除数据                                             | ---- |
| DATA_SELECTION_CHANGE_EVENT          | 数据选择项改变                                       | ---- |
| DATA_SELECTION_KEYS_CHANGE_EVENT     | 数据选择项 keys 改变                                 | ---- |
| UPLOAD_LEGEND_SUCCESS_EVENT          | 上传图例成功                                         | ---- |
| ADD_DATA_BOOKMARK_EVENT              | 添加数据书签                                         | ---- |
| ADD_ALL_SELECTED_DATA_BOOKMARK_EVENT | 添加所有被选中的数据书签                             | ---- |
| OPEN_DATA_BOOKMARK_EVENT             | 打开数据书签                                         | ---- |
| IMPOSE_SERVICE_PREVIEW_EVENT         | 服务叠加预览                                         | ---- |
| DATA_CATALOG_ON_IMPOSE_SERVICE_EVENT | 目录树注册了服务叠加事件                             | ---- |
| DATA_FLOW_LAYER_UPDATE               | 监听数据流数据动态数据更新                           | ---- |
| DATA_CATALOG_TAB                     | 切换到数据目录 tab 页                                | ---- |
| BOOKMARK_TAB                         | 切换到收藏夹 tab 页                                  | ---- |
| MODEL_PICK                           | 模型拾取微件发送消息到图层列表控制模型拾取开关       | ---- |
| DATA_CATALOG_DATA_INFO               | 数据目录初始化时将数据传出                           | ---- |
| DATA_CATALOG_EXTEND_DATA_CHECK       | 数据目录勾选图层带有 extend 扩展属性时将数据传出     | ---- |
| DATA_CATALOG_EXTEND_DATA_UNCHECK     | 数据目录取消勾选图层带有 extend 扩展属性时将数据传出 | ---- |
| EXTEND_LAYER_REMOVE                  | 移除扩展图层                                         | ---- |
| DATA_CATALOG_CHANGE_NODES            | 控制数据目录勾选/取消勾选节点                        | ---- |
| IMAGE_OPACITY_FACTOR_CHANGE          | 修改二维图层透明度系数                               | ---- |
| DATA_CATALOG_CHECK_NODES             | 收藏夹/场景定格查看时勾选数据目录节点                | ---- |
| DATA_CATALOG_SELECT_NODE             | 数据目录点击图层节点                                 | ---- |
| GET_LAYER_LIST_INFO                  | 收藏夹获取图层列表数据                               | ---- |
| ECHO_LAYER_LIST_INFO                 | 收藏夹回显记录的图层列表数据和状态                   | ---- |
| SCENE_CONFIG_INFO                    | 收藏夹获取场景设置数据                               | ---- |
| MODEL_PICK_ADD                       | 数据目录新增图层通知模型拾取微件                     | ---- |
| ATTRIBUTE_TABLE_CLICK_ROW            | 结果集表格单击行                                     | ---- |
| ATTRIBUTE_TABLE_DOUBLE_CLICK_ROW     | 结果集表格双击行                                     | ---- |
| MARKER_CLICK                         | 标注点击事件                                         | ---- |
| CESIUM_LEFT_CLICK                    | 三维场景点击事件                                     | ---- |

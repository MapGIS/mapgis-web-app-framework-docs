# MpWindowWrapper 窗口包装器

提供一种能力，可将窗口（类似[MpWindow](/zh/components/window.html)），在任意组件中展示到地图指定位置显示。

## 代码演示

```html
<template>
  <div>
    <a-button type="primary" @click="onClick">按钮1</a-button>
    <a-button type="primary" @click="onClick2">按钮2</a-button>
    <mp-window-wrapper :visible="visible">
      <template v-slot:default="slotProps">
        <mp-window
          title="标题"
          :width="300"
          :height="400"
          :visible.sync="visible"
          :anchor="'top-left'"
          v-bind="slotProps"
        >
          <template>
            窗口内容
          </template>
        </mp-window>
      </template>
    </mp-window-wrapper>

    <mp-window-wrapper :visible="visible2">
      我是一个固定的元素
    </mp-window-wrapper>
  </div>
</template>
```

```js
<script>
export default {
  data() {
    return {
      visible: false,
      visible2: false
    }
  },
  methods: {
    onClick() {
      this.visible = true
    },
    onClick2() {
      this.visible2 = !this.visible2
    }
  }
}
</script>
```

## API

### MpWindowWrapper

| 参数    | 说明     | 类型    | 默认值 |
| ------- | -------- | ------- | ------ |
| visible | 是否显示 | Boolean | true   |

#### 注意：

- 因为被包装的窗口需要具有跟 MpWindow 具有同样的可激活的特性，所以会将 zIndex 属性绑定到插槽上，这样在在父级作用域中，我们可以使用带值的 v-slot 来将属性继续传递给后备内容。

### 插槽

| 名称 | 说明                   |
| ---- | ---------------------- |
| —    | 默认插槽，被包装的元素 |

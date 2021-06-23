# 图标

不同于 Ant Design Vue 的[Icon](https://www.antdv.com/components/icon-cn/)组件，它支持内联 svg 和外部的图片地址，在大小上与 font-size 一致，对于 svg，还支持颜色与字体 color 一致。

## 代码演示

```html
<template>
  <div>
    <mp-icon :icon="iconSvg" :style="{ fontSize: '16px', color: '#08c' }" />
    <mp-icon :icon="iconImg" :style="{ fontSize: '32px', color: '#08c' }" />
  </div>
</template>
```

```js
<script>
export default {
  data() {
    return {
     iconSvg: "<svg class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><defs><style/></defs><path d=\"M89.6 554.667H0c21.333 247.466 217.6 448 469.333 465.066V934.4C268.8 917.333 106.667 755.2 89.6 554.667zm0-85.334C106.667 268.8 268.8 106.667 469.333 89.6V4.267C221.867 21.333 21.333 221.867 0 469.333h89.6zm844.8 0h85.333c-17.066-247.466-217.6-448-465.066-465.066V89.6C755.2 106.667 917.333 268.8 934.4 469.333zm0 85.334C913.067 755.2 755.2 917.333 554.667 934.4v85.333c247.466-21.333 448-217.6 469.333-465.066h-89.6z\"/><path d=\"M213.333 384l128-42.667L435.2 435.2 597.333 256l213.334 106.667v298.666l-170.667-64-170.667 128-128-85.333-128 85.333z\"/></svg>",
     iconImg: 'http://www.mapgis.com/wcs/Tpl/home/default/images/logo.jpg'
    }
  }
}
</script>
```

## API

### MpIcon

#### 属性

| 参数 | 说明                        | 类型   | 默认值 |
| ---- | --------------------------- | ------ | ------ |
| icon | 图标内联 svg 或外部图片地址 | String | -      |

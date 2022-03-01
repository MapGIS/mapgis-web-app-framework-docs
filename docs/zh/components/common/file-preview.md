# 文件预览

文件预览，支持预览图片，视频，文档。

## 代码演示

```vue
<template>
  <mp-file-preview
    :isList="isList"
    :files="files"
    @project-screen="projectScreen"
  />
</template>

<script>
export default {
  data() {
    return {
      isList: true,
      files: []
    }
  },
  methods: {
    projectScreen() {}
  }
}
</script>
```

## API

### MpFilePreview

#### 属性

| 参数   | 说明                                                | 类型    | 默认值 |
| ------ | --------------------------------------------------- | ------- | ------ |
| isList | 是否通过列表模式展示内容                            | Boolean | false  |
| column | 当为 flex 展示模式时，每行的个数                    | Number  | 6      |
| files  | 文件类型,如果没有该字段，则自动通过名称尾缀判断类型 | Array   | []     |

#### 事件

| 事件名称       | 说明             | 回调参数     |
| -------------- | ---------------- | ------------ |
| project-screen | 视频投放回调函数 | (file) => {} |

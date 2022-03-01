# 可编辑表格

可动态编辑表格

## 代码演示

```vue
<template>
  <mp-editable-table
    :columns="tableColumns"
    :data.sync="tableData"
    :title="title"
  >
    <template #top>
      <slot name="top" />
    </template>
  </mp-editable-table>
</template>

<script>
export default {
  data() {
    return {
      tableColumns: [
        {
          dataIndex: 'field',
          props: {
            options: [
              {
                label: 'AREA',
                value: 'AREA'
              },
              {
                label: 'PERIMETER',
                value: 'PERIMETER'
              },
              {
                label: 'name',
                value: 'name'
              }
            ]
          },
          scopedSlots: {
            customRender: 'field'
          },
          title: '属性字段',
          type: 'Select',
          width: 160
        },
        {
          dataIndex: 'alias',
          props: {
            options: undefined
          },
          scopedSlots: {
            customRender: 'alias'
          },
          title: '属性别名',
          type: 'Input'
        }
      ],
      data: [
        {
          alias: undefined,
          field: 'AREA',
          index: 0
        }
      ],
      title: '配置列表'
    }
  }
}
</script>
```

## API

### MpEditableTable

#### 属性

| 参数      | 说明                             | 类型              | 默认值  |
| --------- | -------------------------------- | ----------------- | ------- |
| title     | 标题                             | String            | '列表'  |
| size      | 尺寸 large/small                 | String            | 'small' |
| tools     | 操作按钮设置: 默认有一个删除按钮 | [Array, Function] | []      |
| loading   | 列表加载提示                     | Boolean           | false   |
| checkable | 是否开启批量选择                 | Boolean           | true    |
| columns   | 列表列字段配置项                 | Array             | []      |
| data      | 列表数据                         | Array             | []      |
| rowKey    | 数据标识                         | String            | 'index' |

#### 事件

| 事件名称    | 说明       | 回调参数      |
| ----------- | ---------- | ------------- |
| change      | 更新后的值 | (value) => {} |
| update:data | 更新后的值 | (value) => {} |

# 树选择

类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。

## 代码演示

```vue
<template>
  <mp-tree-select
    @change="change"
    :value="value"
    :tree-data="treeData"
    :replace-fields="{ key: 'id' }"
    :default-expand-all="true"
    description="输入内容可自动创建专题分类"
  />
</template>

<script>
export default {
  data() {
    return {
      treeData: [
        {
          children: [
            {
              id: '92fd7586-e248-c105-918d-843fb090e24a',
              nodeType: 'list',
              selectable: true,
              title: 'GDP统计',
              visible: true
            }
          ],
          id: '115dc807-63d6-91e4-93a9-31cadb98af60',
          nodeType: 'panel',
          selectable: true,
          title: '社会经济服务',
          visible: true
        }
      ],
      value: 'GDP统计'
    }
  },
  methods: {
    change() {}
  }
}
</script>
```

## API

### MpTreeSelect

#### 属性

| 参数             | 说明                                                                                 | 类型     | 默认值             |
| ---------------- | ------------------------------------------------------------------------------------ | -------- | ------------------ |
| value            | 指定当前选中的条目                                                                   | String   | ''                 |
| treeData         | treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（value 在整个树范围内唯一）   | Array    | []                 |
| loadData         | 异步加载数据                                                                         | Function | -                  |
| replaceFields    | 替换 treeNode 中 title,value,key,children 字段为 treeData 中对应的字段               | Object   | {}                 |
| filterProp       | 是否根据输入项进行筛选，默认用 treeNodeFilterProp 的值作为要筛选的 TreeNode 的属性值 | String   | 'title'            |
| labelProp        | label 对应的字段                                                                     | String   | 'title'            |
| loading          | 是否显示加载进度条                                                                   | Boolean  | false              |
| size             | 尺寸 large/small                                                                     | String   | 'small'            |
| description      | 描述                                                                                 | String   | '暂无数据'         |
| placeholder      | 选择框默认文字                                                                       | String   | '请选择或输入内容' |
| showLine         | 树形结构是否显示线                                                                   | Boolean  | true               |
| defaultExpandAll | 是否默认展开树形结构                                                                 | Boolean  | false              |

#### 事件

| 事件名称     | 说明             | 回调参数             |
| ------------ | ---------------- | -------------------- |
| update:value | 选择框值更新事件 | ([title, key]) => {} |
| change       | 选择框值更新事件 | ([title, key]) => {} |
| input        | 选择框值更新事件 | ([title, key]) => {} |

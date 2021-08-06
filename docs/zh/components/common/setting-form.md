# 设置表单

提供类似属性设置功能的表单，用法类似于 a-form，可内部放入想要的表单域`a-form-item`。

## 代码演示

```html
<template>
  <div>
    <mp-setting-form>
      <a-form-item> </a-form-item>
    </mp-setting-form>
    <mp-setting-form :compact="false"> </mp-setting-form>
    <mp-setting-form :size="small"> </mp-setting-form>
    <mp-setting-form :no-last-margin-bottom="false"> </mp-setting-form>
    <mp-setting-form :label-width="120" :wrapper-width="200"> </mp-setting-form>
    <mp-setting-form :label-align="right" :wrapper-align="right">
    </mp-setting-form>
    <mp-setting-form
      :item-layout="grid"
      :label-col="{span: 8}"
      :wrapper-col="{span: 16}"
    >
    </mp-setting-form>
  </div>
</template>
```

## API

### MpSettingForm

#### 属性

| 参数               | 说明                                                                                        | 类型                                       | 默认值       |
| ------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------ | ------------ |
| form               | 同原生用法                                                                                  | Object                                     | -            |
| hideRequiredMark   | 同原生用法                                                                                  | Boolean                                    | false        |
| labelAlign         | 同原生用法                                                                                  | String：`left`、`right`                    | left         |
| layout             | 同原生用法                                                                                  | String：`horizontal`、`vertical`、`inline` | horizontal   |
| labelCol           | 同原生用法                                                                                  | Object                                     | `{span: 8}`  |
| wrapperCol         | 同原生用法                                                                                  | Object                                     | `{span: 16}` |
| selfUpdate         | 同原生用法                                                                                  | Boolean                                    | false        |
| colon              | 同原生用法                                                                                  | Boolean                                    | false        |
| size               | 大小                                                                                        | String：`mini`和其他任意值                 | mini         |
| compact            | 紧凑                                                                                        | Boolean                                    | true         |
| wrapperAlign       | 同 labelAlign，仅对`horizontal`有效                                                         | String：`left`、`right`                    | left         |
| labelWidth         | 标签宽度（像素）                                                                            | Number                                     | 90           |
| wrapperWidth       | 控件宽度（数值类型表示像素单位，字符串类型可取值`auto`表示自适应）                          | Number \| String                           | 170          |
| itemLayout         | 表单域布局，`grid`时 labelCol 和 wrapperCol 有效，`fixed`时 labelWidth 和 wrapperWidth 有效 | String：`grid`、`fixed`                    | fixed        |
| noLastMarginBottom | 是否没有最后一项表单域的下边外边距                                                          | Boolean                                    | false        |

#### 事件

| 事件名称 | 说明                   | 回调参数  |
| -------- | ---------------------- | --------- |
| submit   | 数据验证成功后回调事件 | (e) => {} |

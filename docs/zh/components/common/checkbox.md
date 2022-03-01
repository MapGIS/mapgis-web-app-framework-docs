# 多选框

提供类型更丰富的选择框。

## 代码演示

```vue
<template>
  <div class="mp-builder-theme-config">
    <mp-setting-form layout="vertical">
      <a-form-item label="整体风格设置">
        <mp-img-checkbox-group
          :key="activedStyle.name"
          @change="onThemeModeChange"
          :default-values="[activedStyle.theme]"
        >
          <mp-img-checkbox title="暗色菜单风格" :img="DarkImg" value="dark" />
          <mp-img-checkbox title="亮色菜单风格" :img="LightImg" value="light" />
          <mp-img-checkbox title="暗黑模式" :img="NightImg" value="night" />
        </mp-img-checkbox-group>
      </a-form-item>
      <a-form-item label="主题色">
        <mp-color-checkbox-group
          :key="activedStyle.name"
          @change="onThemeColorChange"
          :defaultValues="[palettes.indexOf(activedStyle.color)]"
          :multiple="false"
        >
          <mp-color-checkbox
            v-for="(color, index) in palettes"
            :key="index"
            :color="color"
            :value="index"
          />
        </mp-color-checkbox-group>
      </a-form-item>
    </mp-setting-form>
  </div>
</template>

<script>
import DarkImg from '../../../assets/images/dark.svg'
import LightImg from '../../../assets/images/light.svg'
import NightImg from '../../../assets/images/night.svg'

export default {
  data() {
    return {
      DarkImg: DarkImg,
      LightImg: LightImg,
      NightImg: NightImg,
      activedStyle: {
        name: 'dark',
        description: '暗蓝',
        color: '#1890ff',
        theme: 'night'
      },
      palettes: [
        '#f5222d',
        '#fa541c',
        '#fadb14',
        '#3eaf7c',
        '#13c2c2',
        '#1890ff',
        '#722ed1',
        '#eb2f96'
      ]
    }
  },
  methods: {
    onThemeModeChange(values) {
      this.customStyle.theme = values[0]
      this.customStyle.color = this.activedStyle.color
      this.selectStyle(this.customStyle)
    },
    onThemeColorChange(values, colors) {
      this.customStyle.theme = this.activedStyle.theme
      this.customStyle.color = colors[0]
      this.selectStyle(this.customStyle)
    }
  }
}
</script>
```

## API

### MpColorCheckbox

#### 属性

| 参数    | 说明     | 类型             | 默认值 |
| ------- | -------- | ---------------- | ------ |
| color   | 颜色     | String           | -      |
| value   | 值       | [String, Number] | -      |
| checked | 是否选中 | Boolean          | false  |

#### 事件

| 事件名称 | 说明     | 回调参数                      |
| -------- | -------- | ----------------------------- |
| change   | 选中事件 | ({value,color,checked}) => {} |

### MpColorCheckboxGroup

#### 属性

| 参数          | 说明         | 类型    | 默认值 |
| ------------- | ------------ | ------- | ------ |
| defaultValues | 默认值       | Array   | []     |
| multiple      | 是否支持多选 | Boolean | false  |

#### 事件

| 事件名称 | 说明     | 回调参数               |
| -------- | -------- | ---------------------- |
| change   | 选中事件 | ([value,colors]) => {} |

### MpImgCheckbox

#### 属性

| 参数    | 说明     | 类型    | 默认值 |
| ------- | -------- | ------- | ------ |
| img     | 图片     | String  | -      |
| value   | 值       |         | -      |
| checked | 是否选中 | Boolean | false  |
| title   | 标题     | String  | -      |

#### 事件

| 事件名称 | 说明     | 回调参数                |
| -------- | -------- | ----------------------- |
| change   | 选中事件 | ({value,checked}) => {} |

### MpImgCheckboxGroup

#### 属性

| 参数          | 说明         | 类型    | 默认值 |
| ------------- | ------------ | ------- | ------ |
| defaultValues | 默认值       | Array   | []     |
| multiple      | 是否支持多选 | Boolean | false  |

#### 事件

| 事件名称 | 说明     | 回调参数      |
| -------- | -------- | ------------- |
| change   | 选中事件 | (value) => {} |

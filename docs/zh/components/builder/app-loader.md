# 应用加载器

加载应用的组件。

## 代码演示

```html
<template>
  <mp-app-loader :application="application" />
</template>
```

或

```html
<template>
  <mp-app-loader :application="application" design-time />
</template>
```

## API

### MpAppLoader

#### 属性

| 参数        | 说明         | 类型    | 可选值 | 默认值 | 版本 |
| ----------- | ------------ | ------- | ------ | ------ | ---- |
| application | 应用对象     | object  |        |        |      |
| designTime  | 是否是设计时 | boolean |        | false  |      |

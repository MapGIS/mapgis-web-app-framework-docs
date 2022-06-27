# 编码规范

## 风格指南

本项目的风格指南主要是参照 `vue` 官方的[风格指南](https://cn.vuejs.org/v2/style-guide/index.html)。在真正开始使用该项目之前建议先阅读一遍指南，这能帮助让你写出更规范和统一的代码。当然每个团队都会有所区别。其中大部分规则也都配置在了[eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)之中，当没有遵循规则的时候会报错。

当然也有一些特殊的规范，是不能被 eslint 校验的。需要人为的自己注意，并且来遵循。最主要的就是文件的命名规则，这里拿`MapGIS Pan-Spatial Map`来举例。

## Component

所有的`Component`文件都是以大写开头 (PascalCase)，这也是官方所[推荐的](https://cn.vuejs.org/v2/style-guide/index.html#%E5%8D%95%E6%96%87%E4%BB%B6%E7%BB%84%E4%BB%B6%E6%96%87%E4%BB%B6%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%86%99-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)。

但除了 `index.vue`。

例子：

- `src/components/MapContainer/index.vue`
- `src/components/BaseMapSwitch/BaseMapSwitch.vue`

## JS 文件

所有的`.js、.ts`文件都遵循横线连接 (kebab-case)。

例子：

- `src/map/base-layers.ts`
- `src/result-set/result-set.ts`
- `src/config/data-catalog.ts`

## 使用 TypeScript

TypeScript 是 Javascript 的超集，它相对于 Javascript，增加了许多实用的新特性:

- 类型批注和编译时类型检查
- 类型推断
- 类型擦除
- 接口
- 枚举
- Mixin
- 泛型编程
- 名字空间
- 元组
- Await

使用 TypeScript 对 IDE 会更加友好，如果你是用 vscode 开发的，那么你的开发体验将会显著提升。 MapGIS Pan-Spatial Map 中自带了 TypeScript 所需的配置文件.

- tsconfig.js

tsconfig 会声明这是一个 TypeScript 的项目，其中会进行一些配置，详细内容可以看[这里](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)。接下来我们就可以开始 TypeScript 开发了。

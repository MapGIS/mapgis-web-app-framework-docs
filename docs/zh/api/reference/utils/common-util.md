# 通用工具类

```js
import { CommonUtil } from '@mapgis/web-app-framework'
```

## 方法

### isIE

- **描述** 检测浏览器是否为 IE 浏览器。
- **返回值** true | false ，true 表示浏览器是 IE 浏览器，false 表示浏览器不是 IE 浏览器。

```js
CommonUtil.isIE()
```

### isUndef

- **描述** 检测数据是否未定义。
- **参数** v 被检测数据。
- **返回值** true | false ，true 表示数据未定义，false 表示数据已定义。

```js
CommonUtil.isUndef(v)
```

### isDef

- **描述** 检测数据是否已定义。
- **参数** v 被检测数据。
- **返回值** true | false ，true 表示数据已定义，false 表示数据未定义。

```js
CommonUtil.isDef(v)
```

### isTrue

- **描述** 检测数据是否为 true。
- **参数** v 被检测数据。
- **返回值** true | false ，true 表示数据为 true，false 表示数据不为 true。

```js
CommonUtil.isTrue(v)
```

### isFalse

- **描述** 检测数据是否为 false。
- **参数** v 被检测数据。
- **返回值** true | false ，true 表示数据为 false，false 表示数据不为 false。

```js
CommonUtil.isFalse(v)
```

### isStatic

- **描述** 检测数据是不是除了 symbol 以外的原始数据。
- **参数** v 被检测数据。
- **返回值** true | false ，true 表示数据是除了 symbol 以外的原始数据，false 表示数据不是除了 symbol 以外的原始数据。

```js
CommonUtil.isStatic(v)
```

### isPrimitive

- **描述** 检测数据是不是原始数据。
- **参数** v 被检测数据。
- **返回值** true | false ，true 表示数据是原始数据，false 表示数据不是原始数据。

```js
CommonUtil.isPrimitive(v)
```

### isNumber

- **描述** 检测数据是不是数值类型的数据。
- **参数** v 被检测数据。
- **返回值** true | false ，true 表示数据是数值类型的数据，false 表示数据不是数值类型的数据。

```js
CommonUtil.isPrimitive(v)
```

### isString

- **描述** 检测数据是不是字符串类型的数据。
- **参数** v 被检测数据。
- **返回值** true | false ，true 表示数据是字符串类型的数据，false 表示数据不是字符串类型的数据。

```js
CommonUtil.isString(v)
```

### isBoolean

- **描述** 检测数据是不是布尔类型的数据。
- **参数** v 被检测数据。
- **返回值** true | false ，true 表示数据是布尔类型的数据，false 表示数据不是布尔类型的数据。

```js
CommonUtil.isBoolean(v)
```

### isObject

- **描述** 检测数据是不是引用类型的数据 (例如： arrays, functions, objects, regexes, new Number(0),以及 new String(''))。
- **参数** v 被检测数据。
- **返回值** true | false ，true 表示数据是引用类型的数据，false 表示数据不是引用类型的数据。

```js
CommonUtil.isObject(v)
```

### isObjectLike

- **描述** 检测数据是不是类对象。 如果一个值是类对象，那么它不应该是 null，而且 typeof 后的结果是 "object"。
- **参数** v 被检测数据。
- **返回值** true | false ，true 表示数据是类对象，false 表示数据不是类对象。

```js
CommonUtil.isObjectLike(v)
```

### isPlainObject

- **描述** 检测数据是不是 Object 类型的数据。
- **参数** v 被检测数据。
- **返回值** true | false ，true 表示数据是 Object 类型的数据，false 表示数据不是 Object 类型的数据。

```js
CommonUtil.isPlainObject(v)
```

### isRegExp

- **描述** 检测数据是不是正则表达式类型的数据。
- **参数** v 被检测数据。
- **返回值** true | false ，true 表示数据是正则表达式类型的数据，false 表示数据不是正则表达式类型的数据。

```js
CommonUtil.isRegExp(v)
```

### isFunction

- **描述** 检测数据是不是函数。
- **参数** v 被检测数据。
- **返回值** true | false ，true 表示数据是函数，false 表示数据不是函数。

```js
CommonUtil.isFunction(v)
```

### isFunction

- **描述** 检测数据是不是函数。
- **参数** v 被检测数据。
- **返回值** true | false ，true 表示数据是函数，false 表示数据不是函数。

```js
CommonUtil.isFunction(v)
```

### isArray

- **描述** 检测数据是不是数组类型的数据。
- **参数** v 被检测数据。
- **返回值** true | false ，true 表示数据是数组类型的数据，false 表示数据不是数组类型的数据。

```js
CommonUtil.isArray(v)
```

### isArrayLike

- **描述** 检测数据是不是类数组。
- **参数** v 被检测数据。
- **返回值** true | false ，true 表示数据是类数组，false 表示数据不是类数组。

```js
CommonUtil.isArrayLike(v)
```

### isDate

- **描述** 检测数据是不是时间对象。
- **参数** v 被检测数据。
- **返回值** true | false ，true 表示数据是时间对象，false 表示数据不是时间对象。

```js
CommonUtil.isDate(v)
```

### isPromise

- **描述** 检测数据是不是 Promise 类型的数据。
- **参数** v 被检测数据。
- **返回值** true | false ，true 表示数据是 Promise 类型的数据，false 表示数据不是 Promise 类型的数据。

```js
CommonUtil.isPromise(v)
```

### isValidArrayIndex

- **描述** 检测数据是不是有效的数组索引。
- **参数** v 被检测数据。
- **返回值** true | false ，true 表示数据是有效的数组索引，false 表示数据不是有效的数组索引。

```js
CommonUtil.isValidArrayIndex(v)
```

### isEmpty

- **描述** 检测数据是否为空。
- **参数** v 被检测数据。
- **返回值** true | false ，true 表示数据为空，false 表示数据不为空。

```js
CommonUtil.isEmpty(v)
```

### \_isNaN

- **描述** 检测数据是否为非数字值。
- **参数** v 被检测数据。
- **返回值** true | false ，true 表示数据为非数字值，false 表示数据不为非数字值。

```js
CommonUtil._isNaN(v)
```

### getRawType

- **描述** 获取数据类型，返回结果为 Number、String、Object、Array 等。
- **参数** v 数据。
- **返回值** 数据类型，Number、String、Object、Array 等。

```js
CommonUtil.getRawType(v)
```

### toNumber

- **描述** 将输入值转成数值。
- **参数** v 输入值。
- **返回值** 数值，如果转换失败，则返回原字符串。

```js
CommonUtil.toNumber(v)
```

### toArray

- **描述** 将类数组转为真正的数组。
- **返回值** 转换后的数组。
- **参数**

  | 参数  | 描述         | 类型      | 默认值 |
  | :---- | :----------- | :-------- | :----- |
  | list  | 类数组       | arraylike | -      |
  | start | 转换起点索引 | number    | 0      |

```js
CommonUtil.toArray(list, start)
```

### random

- **描述** 返回一个 lower - upper 之间的随机数；lower、upper 无论正负与大小，但必须是非 NaN 的数据；示例 random(0, 0.5) ==> 0.3567039135734613。
- **返回值** 一个 lower - upper 之间的随机数。
- **参数**

  | 参数  | 描述       | 类型   | 默认值 |
  | :---- | :--------- | :----- | :----- |
  | lower | 区域最小值 | number | -      |
  | upper | 区域最大值 | number | -      |

```js
CommonUtil.random(lower, upper)
```

### oneOf

- **描述** validList 是否包含参数。
- **返回值** true | false，true 表示 validList 包含参数，false 表示不包含。
- **参数**

  | 参数      | 描述 | 类型  | 默认值 |
  | :-------- | :--- | :---- | :----- |
  | value     | 参数 | any   | -      |
  | validList | 数组 | array | -      |

```js
CommonUtil.oneOf(value, validList)
```

### debounce

- **描述** 函数防抖。
- **参数**

  | 参数      | 描述                                  | 类型     | 默认值 |
  | :-------- | :------------------------------------ | :------- | :----- |
  | func      | 目标函数                              | function | -      |
  | wait      | 延迟执行毫秒数                        | number   | -      |
  | immediate | true 表示立即执行，false 表示延迟执行 | boolean  | -      |

```js
CommonUtil.debounce(func, wait, immediate)
```

### throttle

- **描述** 函数节流
- **参数**

  | 参数 | 描述                       | 类型     | 默认值 |
  | :--- | :------------------------- | :------- | :----- |
  | func | 目标函数                   | function | -      |
  | wait | 延迟执行毫秒数             | number   | -      |
  | type | 1 表时间戳版，2 表定时器版 | number   | -      |

```js
CommonUtil.throttle(func, wait, type)
```

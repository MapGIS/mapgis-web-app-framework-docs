# 基本介绍

## 目录结构

```text
|── app.json                   # 描述App内容
|── app                        # 应用目录
    |── configs                # 应用配置目录，主要用来存放设置过的widget的config.json
       |── xxx                 # 单个widget（跟widget同名）
           |── config.json     # widget配置文件，会在应用的config.json中引用
    |── images                 # 应用图片目录，用来存放应用默认logo和其他图片资源
    |── widgets                # widget目录
       |── xxx                 # 单个widget（跟widget同名）
           |── manifest.json   # 描述widget内容
           |── config.json     # 描述widget配置
           |── images          # widget图片目录，用来存放widget图标等
    |── themes                 # theme目录
       |── xxx                 # 单个主题
           |── manifest.json   # 描述主题内容
           |── layout.json     # 描述主题布局
           |── images          # 主题图片目录，用来存放主题图标等
```

## 命名规范

所有文件应该使用 kebab-case。

# 简体中文包说明文档

这个[中文语言包](https://github.com/mengkeys/orion-lang-zh-cn)可以将[OrionCms框架](https://orionjs.org)默认的后台管理界面语言替换为简体中文，这种需求可能对于每个开发者都会不同，所以你可以将这个包Fork到自己的Github中,然后根据自己的需求进行修改、发布和使用。


## 在项目中使用
- 添加包依赖
```
meteor add mengkeys:orion-lang-zh-cn
```

- 系统默认安装英文包，若不需要可以将其移除，否则需手动设置语言环境
```
meteor remove orion:lang-en
```
- 若需要多语言设置语言
```
i18n.setLanguage('zh-CN');
```

- 设置默认语言环境
```
i18n.setDefaultLanguage('zh-CN');
```
- 验证当前语言(可在浏览器控制台进行)
```
i18n.getLanguage();
```

- 重新启动项目(项目会自动重启)
```
meteor
```
- i9n,i18n设置方式相同，此处忽略

## 相关链接
[项目仓库](https://github.com/mengkeys/orion-lang-zh-cn)
[项目主页](http://olzc.mengkeys.com)
[提交Bug](https://github.com/mengkeys/orion-lang-zh-cn/issues)

## 更多...

*如需快速解决问题，可以直接给我发邮件，请标明模块名称，这样会更快哦！*

<mengkeys>mengkeys@hotmail.com

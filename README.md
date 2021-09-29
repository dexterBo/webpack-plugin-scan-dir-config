# 扫描全目录下meta信息插件

该`webpack`插件会扫描当前项目中全部的`meta`信息， 这样就可以获取每个目录下的`meta.js`中的配置。扫描的机制是深度优先, 同一个文件夹，扫描的顺序是文件夹在文件系统中的顺序。建议尽量不要依赖扫描结果的顺序。

> `meta.js`也可以写作为`meta.json`


## 用法

使用:

```
const ScanMetaPlugin = require('webpack-plugin-scan-dir-config');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new ScanMetaPlugin(options),
  ],
};

```

想要获取到该插件扫描到的信息， 一种是实现`webpack`插件, 创建`afterScanMeta hook`的处理函数。
### 构造函数选项

#### options.include
需要扫描的目录路径，值为相对项目根路径的路径列表值。 默认为['src/']。

#### options.exclude
排除目录路径，值为一个[anymatch的matchers]。默认为`[]`。

#### options.metaFileName

指定配置`meta`信息的文件名。 默认文件名可以是`meta.js`, `meta.json`， 优先级是`meta.js` > `meta.json`。一旦配置该选项，则只会查找指定文件作为配置文件。不建议改变名字，如果改变名字， 其他的类似生成器的插件注意设置好`exclude`。



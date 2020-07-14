const _ = require('lodash');

function resetOptionToFn(option) {
  if (_.isArray(option)) {
    return (tags) => {
      tags.push(...option);
    };
  }
  if (_.isPlainObject(option)) {
    if (option.before || option.after) {
      return (tags) => {
        tags.unshift(...[].concat(option.before || []));
        tags.push(...[].concat(option.after || []));
      };
    }
    return (tags) => {
      tags.push(option);
    };
  }
  if (_.isFunction(option)) {
    return option;
  }
  return () => {};
}

module.exports = class HtmlCodePlugin {
  constructor({
    body,
    head,
  } = {}) {
    this.body = resetOptionToFn(body);
    this.head = resetOptionToFn(head);
  }

  apply(_compiler) {
    const compiler = _compiler;
    compiler.hooks.compilation.tap(this.constructor.name, (compilation) => {
      compilation.hooks.htmlWebpackPluginAlterAssetTags
        .tapAsync(this.constructor.name, async (data, cb) => {
          try {
            this.run(data);
            cb(null, data);
          } catch (error) {
            cb(error, null);
          }
        });
    });
  }

  run(_data) {
    const data = _data;

    const body = this.body(data.body);
    body && (data.body = body);

    const head = this.head(data.head);
    head && (data.head = head);
  }
};

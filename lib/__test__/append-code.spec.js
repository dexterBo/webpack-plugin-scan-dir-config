const Plugin = require('../index');


function unit(options) {
  const plugin = new Plugin(options);
  const data = {
    body: [{
      tagName: 'meta',
      voidTag: true,
      selfClosingTag: false,
      attributes: { name: 'author', content: '汉得供应链金融前端团队' },
    }, {
      tagName: 'meta',
      voidTag: true,
      selfClosingTag: false,
      attributes: { 'http-equiv': 'pragma', content: 'no-cache' },
    }],
    head: [{
      tagName: 'span',
      selfClosingTag: false,
      voidTag: false,
      innerHTML: '<a>hello word</a>',
    }],
  };
  plugin.run(data);
  expect(data).toMatchSnapshot();
}

test('添加单个body内容', () => {
  unit({
    body: {
      tagName: 'div',
      selfClosingTag: false,
      voidTag: false,
      attributes: {
        id: 'app',
      },
    },
  });
});
test('添加多个body内容', () => {
  unit({
    body: [{
      tagName: 'div',
      selfClosingTag: false,
      voidTag: false,
      attributes: {
        id: 'app',
      },
    }, {
      tagName: 'span',
      selfClosingTag: false,
      voidTag: false,
      attributes: {
        class: 'red',
      },
    }],
  });
});
test('添加单个head内容', () => {
  unit({
    head: {
      tagName: 'link',
      selfClosingTag: false,
      voidTag: true,
      attributes: { rel: 'shortcut icon', href: 'favicon.ico' },
    },
  });
});
test('添加多个head内容', () => {
  unit({
    head: [{
      tagName: 'link',
      selfClosingTag: false,
      voidTag: true,
      attributes: { rel: 'shortcut icon', href: 'favicon.ico' },
    }, {
      tagName: 'link',
      selfClosingTag: false,
      voidTag: true,
      attributes: { rel: 'shortcut icon', href: 'favicon2.ico' },
    }],
  });
});
test('添加单个before body内容', () => {
  unit({
    body: {
      before: {
        tagName: 'link',
        selfClosingTag: false,
        voidTag: true,
        attributes: { rel: 'shortcut icon', href: 'favicon.ico' },
      },
    },
  });
});
test('添加单个before body和after body内容', () => {
  unit({
    body: {
      before: {
        tagName: 'link',
        selfClosingTag: false,
        voidTag: true,
        attributes: { rel: 'shortcut icon', href: 'before.ico' },
      },
      after: {
        tagName: 'link',
        selfClosingTag: false,
        voidTag: true,
        attributes: { rel: 'shortcut icon', href: 'after.ico' },
      },
    },
  });
});
test('添加多个before body和after body内容', () => {
  unit({
    body: {
      before: [{
        tagName: 'link',
        selfClosingTag: false,
        voidTag: true,
        attributes: { rel: 'shortcut icon', href: 'before1.ico' },
      }, {
        tagName: 'link',
        selfClosingTag: false,
        voidTag: true,
        attributes: { rel: 'shortcut icon', href: 'before2.ico' },
      }],
      after: [{
        tagName: 'link',
        selfClosingTag: false,
        voidTag: true,
        attributes: { rel: 'shortcut icon', href: 'after1.ico' },
      }, {
        tagName: 'link',
        selfClosingTag: false,
        voidTag: true,
        attributes: { rel: 'shortcut icon', href: 'after2.ico' },
      }],
    },
  });
});
test('添加单个before head内容', () => {
  unit({
    head: {
      before: {
        tagName: 'link',
        selfClosingTag: false,
        voidTag: true,
        attributes: { rel: 'shortcut icon', href: 'favicon.ico' },
      },
    },
  });
});
test('添加单个before head和after head内容', () => {
  unit({
    head: {
      before: {
        tagName: 'link',
        selfClosingTag: false,
        voidTag: true,
        attributes: { rel: 'shortcut icon', href: 'before.ico' },
      },
      after: {
        tagName: 'link',
        selfClosingTag: false,
        voidTag: true,
        attributes: { rel: 'shortcut icon', href: 'after.ico' },
      },
    },
  });
});
test('添加多个before head和after head内容', () => {
  unit({
    head: {
      before: [{
        tagName: 'link',
        selfClosingTag: false,
        voidTag: true,
        attributes: { rel: 'shortcut icon', href: 'before1.ico' },
      }, {
        tagName: 'link',
        selfClosingTag: false,
        voidTag: true,
        attributes: { rel: 'shortcut icon', href: 'before2.ico' },
      }],
      after: [{
        tagName: 'link',
        selfClosingTag: false,
        voidTag: true,
        attributes: { rel: 'shortcut icon', href: 'after1.ico' },
      }, {
        tagName: 'link',
        selfClosingTag: false,
        voidTag: true,
        attributes: { rel: 'shortcut icon', href: 'after2.ico' },
      }],
    },
  });
});
test('使用函数定制输入', () => {
  unit({
    body(tags) {
      tags.splice(1, 0, {
        tagName: 'div',
        selfClosingTag: false,
        voidTag: false,
        innerHTML: 'by fn',
      });
    },
  });
});

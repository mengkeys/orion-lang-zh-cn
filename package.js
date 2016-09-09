Package.describe({
  name: 'mengkeys:orion-lang-zh-cn',
  version: '1.4.0',
  summary: 'Orion简体中文语言包',
  git: 'https://github.com/mengkeys/orion-lang-zh-cn',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('ecmascript@0.1.6');
  api.use('anti:i18n@0.4.3');
  api.use('softwarerero:accounts-t9n@1.1.4');
  api.imply('anti:i18n');
  api.imply('softwarerero:accounts-t9n');
  api.addFiles('init.js');
  api.addFiles('zh-cn.js');
  api.addFiles('lib/datatables.js');
});

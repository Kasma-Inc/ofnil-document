const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

module.exports = withNextra({
  basePath: process.env.BASE_PATH,
  i18n: {
    locales: ['en-US', 'zh-CN'],
    defaultLocale: 'zh-CN',
  },
});

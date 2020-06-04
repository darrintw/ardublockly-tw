module.exports = {
  platform: process.platform,
  port: process.env.PORT ? process.env.PORT : 3000,
  title: 'PhraseApp Electron i18n',
  languages: ['en', 'zh-hant'],
  fallbackLng: 'zh-hant',
  namespace: 'translation'
};
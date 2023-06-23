const locales:any = {
  'en': () => import('../i18n/en.json').then((module) => module.default),
  'ja': () => import('../i18n/ja.json').then((module) => module.default),
  'es': () => import('../i18n/es.json').then((module) => module.default),
  'zh-CN': () => import('../i18n/zh-CN.json').then((module) => module.default),
}
 
export const getLocales = async (locale:string) => locales[locale]()
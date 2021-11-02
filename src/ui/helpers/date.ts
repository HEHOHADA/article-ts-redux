const options = { month: 'long', day: 'numeric', year: 'numeric' } as const

export const locales = {
  en: 'en-US',
  ru: 'ru-RU',
}

export const dateFormat = (date: string | number, locale = locales.ru) => {
  return new Intl.DateTimeFormat(locale, options).format(new Date(+date))
}

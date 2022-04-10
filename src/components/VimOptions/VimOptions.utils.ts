import ko from '@data/ko/info.json'
import en from '@data/en/info.json'

export function getOptionInfo(name: string, locale: string) {
  const fallback = en[name as keyof typeof en]

  if (locale === 'ko') {
    return ko[name as keyof typeof ko] ?? fallback
  }

  return fallback
}

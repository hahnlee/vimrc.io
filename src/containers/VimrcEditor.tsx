import VimOptions from '@components/VimOptions'
import options from '@data/options.json'
import { Option } from '@models/option'
import { useEffect, useMemo, useRef } from 'react'

interface Props {
  category: string
  locale: string
}

export default function VimrcEditor({ category, locale }: Props) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    ref.current?.scrollIntoView()
  }, [category])

  const items = useMemo(
    () =>
      options
        .filter((option) => option.category === category)
        .reduce<Record<string, Option[]>>((result, option) => {
          const group = result[option.subCategory] ?? []
          group.push(option)
          result[option.subCategory] = group
          return result
        }, {}),
    [category]
  )

  return <VimOptions ref={ref} options={items} locale={locale} />
}

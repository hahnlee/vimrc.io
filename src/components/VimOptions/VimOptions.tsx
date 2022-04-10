import { Option } from '@models/option'
import { forwardRef, Ref } from 'react'

import { Header } from './VimOptions.styled'
import { getOptionInfo } from './VimOptions.utils'

interface Props {
  options: Record<string, Option[]>
  locale: string
}

function VimOptions({ options, locale }: Props, ref: Ref<HTMLElement>) {
  const keys = Object.keys(options)

  return (
    <article ref={ref}>
      {keys.map((key) => (
        <section key={key}>
          <Header>{key}</Header>
          <ul>
            {options[key].map((option) => (
              <li key={option.name}>
                <h1>{option.name}</h1>
                <p>{getOptionInfo(option.name, locale)}</p>
                <p>{option.default.global}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </article>
  )
}

export default forwardRef(VimOptions)

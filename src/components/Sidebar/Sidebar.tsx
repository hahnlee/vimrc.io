import Link from 'next/link'
import { useRouter } from 'next/router'
import { Aside, List, ListItem } from './Sidebar.styled'

const NAVBAR_ITEMS = [
  { label: 'Default', value: '/' },
  {
    label: 'Display',
    value: '/display',
  },
  {
    label: 'Edit',
    value: '/edit',
  },
  {
    label: 'File',
    value: '/file',
  },
  {
    label: 'Gui',
    value: '/gui',
  },
  {
    label: 'Unclassified',
    value: '/unclassified',
  },
]

export default function Sidebar() {
  const { asPath } = useRouter()

  return (
    <Aside>
      <nav>
        <List>
          {NAVBAR_ITEMS.map((item) => (
            <ListItem
              key={item.value}
              selected={item.value === asPath}
              aria-selected={item.value === asPath}
            >
              <Link href={item.value}>{item.label}</Link>
            </ListItem>
          ))}
        </List>
      </nav>
    </Aside>
  )
}

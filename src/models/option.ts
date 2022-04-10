export interface Option {
  name: string
  shortname: string
  type: string
  condition: boolean
  select: Array<string | number>
  isVimOnly: boolean
  isGuiOnly: boolean
  os: string
  category: string
  subCategory: string
  default: {
    global?: string | boolean | number
    [key: string]: string | boolean | number | undefined
  }
}

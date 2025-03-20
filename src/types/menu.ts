
export type MenuItem = {
  title: string
  url: string
  isActive: boolean
}
export type MenuItemGroup = {
  title: string
  items: MenuItem[]
}

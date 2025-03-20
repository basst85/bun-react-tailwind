import useSWR from 'swr'
import type { MenuItemGroup } from '@/types/menu'

const fetcher = async (url: string) => {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('An error occurred while fetching the data.')
  }

  const data = await res.json()
  return data.navMain as MenuItemGroup[]
}

export function useMenuItems() {
  const { data: menuItems, error, isLoading } = useSWR<MenuItemGroup[], Error>(
    '/api/menu',
    fetcher
  )

  return {
    menuItems: menuItems ?? [],
    isLoading,
    error
  }
}

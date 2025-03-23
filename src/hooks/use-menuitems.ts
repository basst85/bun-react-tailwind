import { useQuery } from "@tanstack/react-query"
import type { MenuItemGroup } from "@/types/menu"


const fetchMenuItems = async (): Promise<MenuItemGroup[]> => {
  const res = await fetch("/api/menu")

  if (!res.ok) {
    throw new Error("An error occurred while fetching the data.")
  }

  const data = await res.json()
  return data.navMain
}

export function useMenuItems() {
  const { data: menuItems, error, isLoading } = useQuery<MenuItemGroup[]>({
    queryKey: ["menu-items"],
    queryFn: fetchMenuItems
  })

  return {
    menuItems: menuItems ?? [],
    isLoading,
    error
  }
}

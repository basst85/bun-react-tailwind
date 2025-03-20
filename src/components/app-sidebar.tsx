import React, { Suspense } from "react"
import { CircleAlert, SmileIcon } from "lucide-react"
import { SearchForm } from "@/components/search-form"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail
} from "@/components/ui/sidebar"
import { useMenuItems } from "@/hooks/use-menuitems"
import LoadingSpinner from "./ui/loading-spinner"
import { Link, useLocation } from 'react-router-dom';


function MenuItems() {
  const { menuItems, isLoading, error } = useMenuItems()
  const location = useLocation()

  if (error) {
    return (
      <p className="flex flex-row text-red-500 items-center mx-2">
        <CircleAlert className="mr-2" />
        Error loading menu
      </p>
    )
  }

  if (!isLoading && (!menuItems || menuItems.length === 0)) {
    return (
      <p className="flex flex-row text-red-500 items-center mx-2">
        <CircleAlert className="mr-2" />
        No menu items found
      </p>
    )
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  return (
    <>
      {menuItems.map((item) => (
        <SidebarGroup key={item.title}>
          <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {item.items.map((item) => (
                <SidebarMenuItem key={item.title} className='animate-in slide-in-from-left fade-in duration-500'>
                  <SidebarMenuButton asChild isActive={item.url === location.pathname}>
                    <Link to={item.url}>{item.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </>
  )
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          asChild
          className="data-[slot=sidebar-menu-button]:!p-1.5"
        >
          <a href="#">
            <SmileIcon className="h-5 w-5 group-hover:animate-spin" />
            <span className="text-base font-semibold group-hover:animate-pulse">Acme Inc.</span>
          </a>
        </SidebarMenuButton>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <Suspense>
          <MenuItems />
        </Suspense>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

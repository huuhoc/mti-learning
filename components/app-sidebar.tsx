"use client"

import * as React from "react"
import {
  IconChartBar,
  IconDashboard,
  IconFolder,
  IconListDetails,
  IconUsers,
  IconPhoneCall
} from "@tabler/icons-react"

import { NavMain } from "@/components/nav-main"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Lifecycle",
      url: "#",
      icon: IconListDetails,
    },
    {
      title: "Analytics",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Projects",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "Team",
      url: "#",
      icon: IconUsers,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <Image src="/logo.svg" alt="logo" width={32} height={32}/>
                <span className="text-base font-semibold">Edu Smart</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div>
          <a href="sdsds" className="flex items-center justify-center gap-4 text-sm rounded-lg bg-primary/30 text-primary px-4 py-3">
            <IconPhoneCall size={20}/>
            <span>+ 08454980900</span> 
          </a>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

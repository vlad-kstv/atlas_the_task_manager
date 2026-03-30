import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "./components/layout/AppSidebar"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-row w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
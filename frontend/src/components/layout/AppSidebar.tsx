import { Home, Folder, Settings } from "lucide-react" // Иконки
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom"

export default function AppSidebar() {

  const menuItems = [
    { title: "Dashboard", url: "/dashboard", icon: Home },
    { title: "Projects", url: "#", icon: Folder },
    { title: "Settings", url: "#", icon: Settings },
  ]

  const navigate = useNavigate();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="text-lg font-semibold ml-2 mr-2">Atlas</div>
         <Button className="ml-2 mt-2 mr-2 cursor-pointer" size={"sm"} variant="outline" onClick={() => navigate('/create-project')}>Create a new project +</Button>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="p-4 text-sm text-muted-foreground">v1.0.2</div>
      </SidebarFooter>
    </Sidebar>
  )
}
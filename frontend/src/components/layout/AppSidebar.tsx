import { Home, Folder, Settings, MoreHorizontal, ChevronDown, Plus } from "lucide-react" // Иконки
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { useEffect, useState } from "react"
import { ProjectService } from "@/api/projectService"
import type { projectResponseDto } from "@/types/project"

export default function AppSidebar() {

  const [fetchedProjects, setFetchedProjects] = useState<projectResponseDto[]>([]);

  const menuItems = [
    { title: "Dashboard", url: "/dashboard", icon: Home },
    { title: "Settings", url: "#", icon: Settings },
  ]

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await ProjectService.getProjectsByUserId();
      console.log(data);
      setFetchedProjects(data);
    }

    fetchProjects();
  }, [])

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
            <Collapsible className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild className="cursor-pointer">
                  <SidebarMenuButton>
                    <Folder />
                    <span>Projects</span>
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub>
                    {fetchedProjects.map((project) => (
                      <SidebarMenuSubItem key={project.id}>
                        <SidebarMenuSubButton asChild>
                          <a href={`projects/${project.id}`}>
                            <span>{project.name}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}

                    <SidebarMenuSubItem className="cursor-pointer">
                      <SidebarMenuSubButton>
                        <Plus className="h-4 w-4" />
                        <span>More spaces</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>

              </SidebarMenuItem>
            </Collapsible>
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
import { Home, Folder, Settings, Plus, Zap } from "lucide-react" // Иконки
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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { useEffect, useState, useRef } from "react"
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
  }, []);

  return (
    <Sidebar>
      <SidebarHeader className="border-blue-100">
        <div className="flex items-center gap-2 p-2">
          <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Atlas</div>
        </div>
        <Button
          className="ml-2 mt-2 mr-2 cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 transition-all duration-200"
          size={"sm"}
          onClick={() => navigate('/create-project')}
        >
          <Plus className="h-4 w-4 mr-1" />
          New project
        </Button>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <Collapsible className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild className="cursor-pointer">
                  <SidebarMenuButton className="hover:bg-blue-50 transition-colors data-[state=open]:bg-blue-50">
                    <Folder className="text-blue-600" />
                    <span className="font-medium">Projects</span>
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub>
                    {fetchedProjects.slice(0, 4).map((project) => (
                      <SidebarMenuSubItem key={project.id}>
                        <SidebarMenuSubButton asChild className="hover:bg-slate-100 transition-colors hover:text-blue-600">
                          <a href={`/projects/${project.id}`}>
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                            <span>{project.name}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}

                    {fetchedProjects.length > 4 && (
                      <div>
                        <SidebarMenuSubItem
                          className="cursor-pointer"
                        >
                          <SidebarMenuSubButton className="hover:bg-slate-100 transition-colors hover:text-blue-600 text-slate-500">
                            <Plus className="h-4 w-4" />
                            <span>More spaces</span>
                          </SidebarMenuSubButton>
                          {fetchedProjects.slice(4, fetchedProjects.length).map((project) => (
                            <SidebarMenuSubItem key={project.id}>
                              <SidebarMenuSubButton asChild className="hover:bg-slate-100 transition-colors hover:text-blue-600">
                                <a href={`/projects/${project.id}`}>
                                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                                  <span>{project.name}</span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSubItem>
                      </div>
                    )}
                  </SidebarMenuSub>
                </CollapsibleContent>

              </SidebarMenuItem>
            </Collapsible>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="hover:bg-blue-50 transition-colors hover:text-blue-600">
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

      <SidebarFooter className="border-t border-slate-200 bg-gradient-to-t from-slate-50 to-transparent">
        <div className="p-3 text-xs font-medium text-slate-500 flex items-center justify-between">
          <span>Atlas v1.0.2</span>
          <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
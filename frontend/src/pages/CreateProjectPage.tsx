import { ProjectService } from "@/api/projectService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { projectRequestDto } from "@/types/project";
import { useState } from "react";

export default function CreateProjectPage() {
    const [projectName, setProjectName] = useState<string>("");
    const [projectDescription, setProjectDescription] = useState<string>("");

    const handleSubmit = () => {
        const dto : projectRequestDto = {
            name: projectName,
            description: projectDescription
        }

        ProjectService.createProject(dto);
    }

    return (
        <>
        <div className="flex flex-col ml-5 mt-5 gap-4 w-100">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                New project:
            </h3>
            <Input placeholder="Enter project name" onChange={(e) => {setProjectName(e.target.value)}}/>
            <Input placeholder="Enter description" onChange={(e) => {setProjectDescription(e.target.value)}}/>
            
            <Button variant="outline" size="lg" className="cursor-pointer" onClick={handleSubmit}>
                Submit
            </Button>
        </div>
        </>    
    )
}
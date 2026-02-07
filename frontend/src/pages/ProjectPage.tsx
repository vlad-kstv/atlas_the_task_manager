import { TaskService } from "@/api/taskService";
import type { taskResponseDto } from "@/types/task";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function ProjectPage() {
    const [tasks, setTasks] = useState<taskResponseDto[]>([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchProjects = async () => {
            const numericId = Number(id);

            if (!isNaN(numericId)) {
                const data = await TaskService.getTasksPerProjectId(numericId);
                console.log(data);
                setTasks(data);
            } else {
                console.error("Project Id is not a number"); 
            }
        }
    
        fetchProjects();
    }, [])

    return (
        <>
        </>
    )
}
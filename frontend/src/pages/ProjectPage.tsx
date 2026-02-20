import { TaskService } from "@/api/taskService";
import { DataTable } from "@/components/DataTable";
import { columns, type taskResponseDto } from "@/types/task";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function ProjectPage() {
    const [tasks, setTasks] = useState<taskResponseDto[]>([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchTasks = async () => {
            const numericId = Number(id);

            if (!isNaN(numericId)) {
                const data = await TaskService.getTasksPerProjectId(numericId);
                console.log(data);
                setTasks(data);
            } else {
                console.error("Project Id is not a number"); 
            }
        }
        
        fetchTasks();
    }, []);

    return (
        <div className="flex items-center">
            <DataTable columns={columns} data={tasks} />
        </div>
    )
}
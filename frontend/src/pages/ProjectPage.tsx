import { TaskService } from "@/api/taskService";
import { DataTable } from "@/components/DataTable";
import { columns, type taskResponseDto } from "@/types/task";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { CheckCircle2 } from "lucide-react";

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

    const completedTasks = tasks.filter(t => t.completed).length;
    const completionRate = tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0;

    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="mb-8 animate-in fade-in slide-in-from-top-2">
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">Project Tasks</h1>
                    <div className="flex items-center gap-6 mt-4">
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                            <span className="text-sm text-slate-600">{tasks.length} total tasks</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-slate-600">{completedTasks} completed</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-32 bg-slate-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
                                    style={{ width: `${completionRate}%` }}
                                ></div>
                            </div>
                            <span className="text-sm font-medium text-slate-700">{completionRate}%</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 animate-in fade-in slide-in-from-bottom-4">
                    <DataTable columns={columns} data={tasks} />
                </div>
            </div>
        </div>
    )
}
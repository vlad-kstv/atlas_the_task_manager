import type { taskResponseDto } from "@/types/task";
import axiosClient from "./axiosClient"

export const TaskService = {
    getTasksPerProjectId: async (projectId : number) => {
        const result = await axiosClient.get<taskResponseDto[]>(`/tasks/projects/${projectId}/tasks`);
        return result.data;
    }
}
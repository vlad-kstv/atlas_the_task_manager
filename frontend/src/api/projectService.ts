import type { projectResponseDto } from './../types/project';
import type { projectRequestDto } from "@/types/project";
import axiosClient from "./axiosClient"

export const ProjectService = {
    getProjectsByUserId: async () => {
        const currentUserId = 1; // change to localstorage
        const response = await axiosClient.get<projectResponseDto[]>('/projects/users/'+ currentUserId +'/projects');
        console.log(response)
        return response.data;
    },

    createProject: async (dto : projectRequestDto) => {
        const response = await axiosClient.post<projectRequestDto>('/projects', dto);
        console.log(response.data);
        return response.data;
    },
}
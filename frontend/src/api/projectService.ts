import type { projectRequestDto } from "@/types/project";
import axiosClient from "./axiosClient"

export const ProjectService = {
    getProjectsByUserId: async (id : number) => {
        const response = await axiosClient.get('/projects/users/'+ id +'/projects');
        return response.data;
    },

    createProject: async (dto : projectRequestDto) => {
        const response = await axiosClient.post('/projects', dto);
        console.log(response.data);
        return response.data;
    }
}
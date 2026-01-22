import axiosClient from "./axiosClient"

export const ProjectService = {
    getProjectsByUserId: async (id : number) => {
        const response = await axiosClient.get('/projects/users/'+ id +'/projects');
        return response.data;
    }
}
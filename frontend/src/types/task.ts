import type { ColumnDef } from "@tanstack/react-table";

export interface taskResponseDto {
    id : number,
    displayedUniqueId : number,
    title : string,
    description : string,
    status : Status,
    priority : Priority,
    projectId : number,
    authorId : number,
    assigneeId: number,
    createdAt : string,
    updatedAt : string
}

const Status = {
    TO_DO: "To-do",
    IN_PROGRESS: "In Progress",
    DONE: "Done"
} as const;

export type Status = typeof Status[keyof typeof Status];

const Priority = {
    LOW: "Low",
    MEDIUM: "Medium",
    HIGH: "High",
}

export type Priority = typeof Priority[keyof typeof Priority];

export const columns: ColumnDef<taskResponseDto>[] = [
    {
        accessorKey: "displayedUniqueId",
        header: "Id",
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "priority",
        header: "Priority",
    },
    {
        accessorKey: "assigneeId",
        header: "Assignee",
    }
]
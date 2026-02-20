import type { ColumnDef } from "@tanstack/react-table";

export interface taskResponseDto {
    id : number,
    displayedUniqueId : number,
    title : string,
    description : string,
    status : StatusKey,
    priority : PriorityKey,
    projectId : number,
    authorId : number,
    assigneeId: number,
    createdAt : string,
    updatedAt : string
}

export const Status = {
    TO_DO: "To-do",
    IN_PROGRESS: "In Progress",
    DONE: "Done"
} as const;

export type StatusKey = keyof typeof Status;

const Priority = {
    LOW: "Low",
    MEDIUM: "Medium",
    HIGH: "High",
}

export type PriorityKey = keyof typeof Priority;

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
        cell: ({ row }) => {
            const statusKey = row.getValue("status") as StatusKey;
            return Status[statusKey];
        }
    },
    {
        accessorKey: "priority",
        header: "Priority",
        cell: ({ row }) => {
            const piorityKey = row.getValue("priority") as PriorityKey;
            return Priority[piorityKey];
        }
    },
    {
        accessorKey: "assigneeId",
        header: "Assignee",
    }
]
export interface TodoStatusStructure {
	statusId: number;
	statusName: string;
}

export type TodoStatusCreateRequest = Omit<TodoStatusStructure, "statusId">;
export type GetTodoStatusRequest = Partial<TodoStatusStructure>;

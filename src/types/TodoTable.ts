import { TodoGroupsStructure, UserStructure } from ".";

export interface TodoStructure {
	readonly todoId: number;
	readonly status: TodoStatus;
	readonly groupId: number;
	readonly authorId: number;
	readonly content: string;
	readonly date: string;
	readonly isDone: boolean;
}
export enum TodoStatus {
	DONE = "Done",
	REVIEW = "Review",
	IN_PROGRESS = "In Progress",
	READY = "Ready",
}

export type TodoCreateRequest = Omit<TodoStructure, "todoId">;

export type TodoUpdateStatusRequest = Pick<TodoStructure, "isDone" | "status">;
export type TodoUpdateContentRequest = Pick<TodoStructure, "content">;

export type TodoJoinedStructure = TodoStructure &
	TodoGroupsStructure &
	UserStructure;

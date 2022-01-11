import { TodoGroupsStructure, UserStructure } from ".";

export interface TodoStructure {
	todoId: number;
	statusId: number;
	groupId: number;
	authorId: number;
	content: string;
	date: string;
	isDone: boolean;
}
export type TodoCreateRequest = Omit<TodoStructure, "todoId">;

export type TodoUpdateStatusRequest = Pick<
	TodoStructure,
	"isDone" | "statusId"
>;
export type TodoUpdateContentRequest = Pick<TodoStructure, "content">;

export type TodoJoinedStructure = TodoStructure &
	TodoGroupsStructure &
	UserStructure;

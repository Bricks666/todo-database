export type URL = string;

export type SQL = string;

export type MappedObject<T> = { [key: string]: T };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyObject = MappedObject<any>;

export type HEX = `#${string}`;

export enum Tables {
	TODO_GROUPS = "todoGroups",
	TODOS = "todos",
	TASK_STATUS = "taskStatus",
	USERS = "users",
}

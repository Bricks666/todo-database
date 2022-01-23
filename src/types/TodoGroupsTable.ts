import { HEX } from ".";

export interface TodoGroupsStructure {
	readonly groupId: number;
	readonly groupName: string;
	readonly groupMainColor: HEX;
	readonly groupSecondColor: HEX;
}

export type TodoGroupsCreateRequest = Omit<TodoGroupsStructure, "groupId">;

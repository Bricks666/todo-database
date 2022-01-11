import { HEX } from ".";

export interface TodoGroupsStructure {
	groupId: number;
	groupName: string;
	groupMainColor: HEX;
	groupSecondColor: HEX;
}

export type TodoGroupsCreateRequest = Omit<TodoGroupsStructure, "groupId">;

import { URL } from "./common";

export interface UserStructure {
	readonly userId: number;
	readonly login: string;
	readonly password: string;
	readonly photo?: URL;
}

export type UserCreateRequest = Omit<UserStructure, "userId">;
export type UpdateUserRequest = Partial<Omit<UserStructure, "userId">>;

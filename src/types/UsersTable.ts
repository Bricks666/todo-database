import { URL } from "./common";

export interface UserStructure {
	userId: number;
	login: string;
	password: string;
	photo?: URL;
}

export type UserCreateRequest = Omit<UserStructure, "userId">;
export type UpdateUserRequest = Partial<Omit<UserStructure, "userId">>

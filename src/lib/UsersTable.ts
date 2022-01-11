import { userConfig } from "../configs";
import { UpdateUserRequest, UserCreateRequest, UserStructure } from "../types/";
import { Table, TableSelectRequestConfig } from "mariadb-table-wrapper";

export class UsersTable extends Table<UserStructure> {
	public constructor() {
		super(userConfig);
	}

	public async addUser(userData: UserCreateRequest) {
		return await this.insert(userData);
	}

	public async getUsers<Response = UserStructure>(
		config?: TableSelectRequestConfig<UserStructure>
	) {
		debugger;
		return await this.select<Response>(config);
	}

	public async updateUser(userId: number, newUserInfo: UpdateUserRequest) {
		return await this.update(newUserInfo, { userId });
	}
}

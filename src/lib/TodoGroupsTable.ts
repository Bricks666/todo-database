import { todoGroupsConfig } from "../configs";
import { Table, TableSelectRequestConfig } from "mariadb-table-wrapper";
import { TodoGroupsCreateRequest, TodoGroupsStructure } from "../types";
export class TodoGroupsTable extends Table<TodoGroupsStructure> {
	public constructor() {
		super(todoGroupsConfig);
	}

	public async addGroup(newGroup: TodoGroupsCreateRequest) {
		return await this.insert(newGroup);
	}

	public async getGroups<Response = TodoGroupsStructure>(
		config?: TableSelectRequestConfig<TodoGroupsCreateRequest>
	) {
		return await this.select<Response>(config);
	}
}

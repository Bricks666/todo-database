import { todoStatusConfig } from "../configs";
import { Table, TableSelectRequestConfig } from "mariadb-table-wrapper";
import { TodoStatusCreateRequest, TodoStatusStructure } from "../types";

export class TodoStatusTable extends Table<TodoStatusStructure> {
	public constructor() {
		super(todoStatusConfig);
	}

	public async addStatus(newStatus: TodoStatusCreateRequest) {
		return await this.insert(newStatus);
	}

	public async getStatus<Response = TodoStatusStructure>(
		config?: TableSelectRequestConfig<TodoStatusStructure>
	) {
		return await this.select<Response>(config);
	}
}

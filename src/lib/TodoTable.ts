import { todosConfig } from "../configs";
import {
	Table,
	TableFilters,
	TableSelectRequestConfig,
} from "mariadb-table-wrapper";
import {
	TodoCreateRequest,
	TodoStructure,
	TodoUpdateContentRequest,
	TodoUpdateStatusRequest,
} from "../types";

export class TodoTable extends Table<TodoStructure> {
	public constructor() {
		super(todosConfig);
	}

	public async getTodos<Response = TodoStructure>(
		config?: TableSelectRequestConfig<TodoStructure>
	) {
		return await this.select<Response>(config);
	}

	public async addTodo(newTodo: TodoCreateRequest) {
		return await this.insert(newTodo);
	}

	public async deleteTodo(filters: TableFilters<TodoStructure>) {
		return await this.delete(filters);
	}

	public async updateStatus(todoId: number, newStatus: number, isDone = false) {
		return await this.update<TodoUpdateStatusRequest>(
			{ statusId: newStatus, isDone },
			{ todoId }
		);
	}

	public async updateContent(todoId: number, newContent: string) {
		return await this.update<TodoUpdateContentRequest>(
			{ content: newContent },
			{ todoId }
		);
	}
}

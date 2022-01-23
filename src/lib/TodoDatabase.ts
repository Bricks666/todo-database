import {
	createPool,
	Pool,
	PoolConfig,
	PoolConnection,
} from "mariadb-table-wrapper";
import { TodoGroupsTable } from "./TodoGroupsTable";
import { TodoTable } from "./TodoTable";
import { UsersTable } from "./UsersTable";

export class TodoDatabase {
	private connection: PoolConnection | null;
	private readonly pool: Pool;

	public readonly Todos: TodoTable;
	public readonly Users: UsersTable;
	public readonly TodoGroups: TodoGroupsTable;

	public constructor(config: PoolConfig) {
		this.pool = createPool({
			...config,
			checkDuplicate: true,
			initSql: ["CREATE DATABASE IF NOT EXISTS Todo;", "USE Todo;"],
		});

		this.connection = null;

		this.Todos = new TodoTable();
		this.Users = new UsersTable();
		this.TodoGroups = new TodoGroupsTable();
	}

	public async connect() {
		this.connection = await this.pool.getConnection();

		const tables = [this.Users, this.TodoGroups, this.Todos];
		if (this.connection !== null) {
			const inits = tables.map((table) =>
				table.init(this.connection as PoolConnection)
			);

			await Promise.all(inits);
		}
	}
}

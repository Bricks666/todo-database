import { SQLTypes, TableConfig } from "mariadb-table-wrapper";
import { Tables, TodoStatus, TodoStructure } from "../types";

export const todosConfig: TableConfig<TodoStructure> = {
	table: Tables.TODOS,
	fields: {
		todoId: {
			type: SQLTypes.SMALLINT,
			isPrimaryKey: true,
			isAutoIncrement: true,
			isNotNull: true,
			isUnsigned: true,
		},
		status: {
			type: SQLTypes.ENUM,
			isUnsigned: true,
			isNotNull: true,
			enumValues: [
				TodoStatus.DONE,
				TodoStatus.IN_PROGRESS,
				TodoStatus.READY,
				TodoStatus.REVIEW,
			],
		},
		groupId: {
			type: SQLTypes.SMALLINT,
			isUnsigned: true,
			isNotNull: true,
		},
		authorId: {
			type: SQLTypes.SMALLINT,
			isNotNull: true,
			isUnsigned: true,
		},
		content: {
			type: SQLTypes.VARCHAR,
			varcharLen: 128,
			isNotNull: true,
		},
		date: {
			type: SQLTypes.DATE,
			isNotNull: true,
		},
		isDone: {
			type: SQLTypes.BOOLEAN,
			isNotNull: true,
		},
	},
	safeCreating: true,
	foreignKeys: {
		groupId: {
			tableName: Tables.TODO_GROUPS,
			field: "groupId",
		},
		authorId: {
			tableName: Tables.USERS,
			field: "userId",
		},
	},
};

import { Tables, TodoStatusStructure } from "../types";
import { SQLTypes, TableConfig } from "mariadb-table-wrapper";

export const todoStatusConfig: TableConfig<TodoStatusStructure> = {
	table: Tables.TASK_STATUS,
	fields: {
		statusId: {
			type: SQLTypes.SMALLINT,
			isAutoIncrement: true,
			isNotNull: true,
			isPrimaryKey: true,
			isUnsigned: true,
		},
		statusName: {
			type: SQLTypes.VARCHAR,
			isNotNull: true,
			varcharLen: 16,
		},
	},
	safeCreating: true,
};

import { SQLTypes, TableConfig } from "mariadb-table-wrapper";
import { Tables, TodoGroupsStructure } from "../types";

export const todoGroupsConfig: TableConfig<TodoGroupsStructure> = {
	table: Tables.TODO_GROUPS,
	fields: {
		groupId: {
			type: SQLTypes.SMALLINT,
			isAutoIncrement: true,
			isNotNull: true,
			isPrimaryKey: true,
			isUnsigned: true,
		},
		groupName: {
			type: SQLTypes.VARCHAR,
			isNotNull: true,
			varcharLen: 32,
		},
		groupMainColor: {
			type: SQLTypes.VARCHAR,
			isNotNull: true,
			varcharLen: 9,
		},
		groupSecondColor: {
			type: SQLTypes.VARCHAR,
			isNotNull: true,
			varcharLen: 9,
		},
	},
	safeCreating: true,
};

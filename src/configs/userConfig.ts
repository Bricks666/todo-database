import { Tables, UserStructure } from "../types";
import { SQLTypes, TableConfig } from "mariadb-table-wrapper";

export const userConfig: TableConfig<UserStructure> = {
	table: Tables.USERS,
	fields: {
		userId: {
			type: SQLTypes.SMALLINT,
			isAutoIncrement: true,
			isNotNull: true,
			isPrimaryKey: true,
			isUnsigned: true,
		},

		login: {
			type: SQLTypes.VARCHAR,
			isUnique: true,
			isNotNull: true,
			varcharLen: 32,
		},
		password: {
			type: SQLTypes.VARCHAR,
			varcharLen: 128,
			isNotNull: true,
		},
		photo: {
			type: SQLTypes.VARCHAR,
			varcharLen: 128,
		},
	},
	safeCreating: true,
};

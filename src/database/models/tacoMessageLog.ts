import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { sequelize } from "../database";

export class TacoMessageLog extends Model<InferAttributes<TacoMessageLog>, InferCreationAttributes<TacoMessageLog>> {
    declare id: CreationOptional<number>;
    declare sender_id: string;
    declare receiver_id: string;
    declare message_content: string;
}

TacoMessageLog.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        sender_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        receiver_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        message_content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'tacoMessageLogs'
    },
)



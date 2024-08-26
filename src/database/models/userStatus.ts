import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { sequelize } from "../database";

export class UserStatus extends Model<InferAttributes<UserStatus>, InferCreationAttributes<UserStatus>> {
    declare user_id: string;
    declare status: string;
    declare obs: CreationOptional<string>;
}

UserStatus.init(
    {
        user_id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        obs: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'userStatuses'
    },
)



import {
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from 'sequelize';
import { sequelize } from '../database';

export class UserStatus extends Model<
    InferAttributes<UserStatus>,
    InferCreationAttributes<UserStatus>
> {
    declare user_id: string;
    declare status: string; // what is this
    declare obs: CreationOptional<string>; // what is this
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
        tableName: 'userStatuses',
    },
);

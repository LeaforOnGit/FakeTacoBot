import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { sequelize } from "../database";

export class TacoCounter extends Model<InferAttributes<TacoCounter>, InferCreationAttributes<TacoCounter>> {
    declare user_id: string;
    declare tacos_received: CreationOptional<bigint>;
    declare tacos_sent_today: CreationOptional<bigint>;
    declare last_day_sent_tacos: Date;
    declare max_tacos_per_day: CreationOptional<bigint>;
}

TacoCounter.init(
    {
        user_id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        tacos_received: {
            type: DataTypes.BIGINT,
            defaultValue: 0,
        },
        tacos_sent_today: {
            type: DataTypes.BIGINT,
            defaultValue: 0,
        },
        last_day_sent_tacos: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
        },
        max_tacos_per_day: {
            type: DataTypes.BIGINT,
            defaultValue: 4,
        },
    },
    {
        sequelize,
        tableName: 'tacoCounters'
    },
)



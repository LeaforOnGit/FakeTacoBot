import {
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
} from 'sequelize';
import { sequelize } from '../database';

export class TacoCounter extends Model<
    InferAttributes<TacoCounter>,
    InferCreationAttributes<TacoCounter>
> {
    // this is not normalized, each taco sent should have its own DB row
    declare user_id: string;
    declare tacos_received: CreationOptional<number>;
    declare tacos_sent_today: CreationOptional<number>;
    declare last_day_sent_tacos: Date;
    declare max_tacos_per_day: CreationOptional<number>;
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
        tableName: 'tacoCounters',
    },
);

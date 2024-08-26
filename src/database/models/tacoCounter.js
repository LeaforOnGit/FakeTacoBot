import { Sequelize } from "sequelize";
import { sequelize } from "../database.js";
import { now } from "sequelize/lib/utils";

export const TacoCounter = sequelize.define('tacoCounter', {
    user_id: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    tacos_received: {
        type: Sequelize.BIGINT,
        defaultValue: 0,
        allowNull: true,
    },
    tacos_sent_today: {
        type: Sequelize.BIGINT,
        defaultValue: 0,
        allowNull: true,
    },
    last_day_sent_tacos: {
        type: Sequelize.DATE,
        defaultValue: now,
        allowNull: true,
    },
    max_tacos_per_day: {
        type: Sequelize.BIGINT,
        defaultValue: 4,
        allowNull: true,
    },
});

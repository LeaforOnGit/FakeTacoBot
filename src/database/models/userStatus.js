import { Sequelize } from "sequelize";
import { sequelize } from "../database.js";

export const UserStatus = sequelize.define('userStatus', {
    user_id: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    obs: {
        type: Sequelize.STRING,
        allowNull: true,
    },
});

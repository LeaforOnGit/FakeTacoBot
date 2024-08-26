import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const TacoMessageLog = sequelize.define('tacoMessageLog', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    sender_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    receiver_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    message_content: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

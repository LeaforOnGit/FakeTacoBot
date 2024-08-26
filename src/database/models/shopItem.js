import { Sequelize } from "sequelize";
import { sequelize } from "../database.js";

export const ShopItem = sequelize.define('shopItem', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    sell_limit: {
        type: Sequelize.BIGINT,
        allowNull: true,
    },
});

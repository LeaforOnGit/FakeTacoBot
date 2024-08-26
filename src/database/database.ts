import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('database', 'user', 'password', {
    dialect: 'sqlite',
    host: 'localhost',
    storage: 'database.sqlite',
    logging: false,
});
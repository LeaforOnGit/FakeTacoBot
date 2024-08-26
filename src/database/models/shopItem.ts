import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";
import { sequelize } from "../database";

export class ShopItem extends Model<InferAttributes<ShopItem>, InferCreationAttributes<ShopItem>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare receiver_id: bigint;
    declare message_content: bigint;
}

ShopItem.init(
    {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        sell_limit: {
            type: DataTypes.BIGINT,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'shopItems'
    },
)




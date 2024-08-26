import { sequelize } from "./database/database.js";
import { TacoCounter } from "./database/models/tacoCounter.js";
import { TacoMessageLog } from "./database/models/tacoMessageLog.js";
import { UserStatus } from "./database/models/userStatus.js";
import { ShopItem } from "./database/models/shopItem.js";

//sequelize.sync({force: true});
TacoCounter.sync({force: true});
TacoMessageLog.sync({force: true});
UserStatus.sync({force: true});
ShopItem.sync({force: true});

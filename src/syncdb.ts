import { TacoCounter } from './database/models/tacoCounter';
import { TacoMessageLog } from './database/models/tacoMessageLog';
import { UserStatus } from './database/models/userStatus';
import { ShopItem } from './database/models/shopItem';

// sequelize.sync({force: true});
TacoCounter.sync({ force: true });
TacoMessageLog.sync({ force: true });
UserStatus.sync({ force: true });
ShopItem.sync({ force: true });

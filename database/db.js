import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.USER,
  process.env.PASSWORD, 
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    operatorsAliases: false,
    pool: {
      max: parseInt(process.env.POOL_MAX),
      min: parseInt(process.env.POOL_MIN),
      acquire: parseInt(process.env.POOL_ACQUIRE),
      idle: parseInt(process.env.POOL_IDLE)
    }
  }
);

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully'))
  .catch(err => console.error(`Error connecting to the database: ${err}`));

sequelize.sync({ force: false })
  .then(() => console.log('Database syncronized successfully'))
  .catch(err => console.error(`Error trying to syncronize the database: ${err}`));

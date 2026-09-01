// MySQL connection via Sequelize
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false,
        pool: { max: 5, min: 0, acquire: 30000, idle: 10000 }
    }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.Admin = require('../models/Admin')(sequelize, Sequelize);
db.Blog = require('../models/Blog')(sequelize, Sequelize);
db.Service = require('../models/Service')(sequelize, Sequelize);
db.City = require('../models/City')(sequelize, Sequelize);
db.Category = require('../models/Category')(sequelize, Sequelize);

// Associations
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) db[modelName].associate(db);
});

module.exports = db;
const Sequelize = require('sequelize');
require('dotenv').config();

// Create a new Sequelize instance based on environment variables
let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: process.env.DB_PORT || 3306 // Use DB_PORT env variable or default to 3306
    }
  );
}

module.exports = sequelize;

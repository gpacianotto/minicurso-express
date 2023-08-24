const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(require('../utils/config.json').development);

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
},
{
    timestamps: false, // Enable timestamps
    createdAt: 'created_at', // Rename createdAt column
    updatedAt: 'updated_at', // Rename updatedAt column
    underscored: true // Use snake_case for column names
  }


);

sequelize.sync(); // Automatically creates the table if it doesn't exist

module.exports = User;

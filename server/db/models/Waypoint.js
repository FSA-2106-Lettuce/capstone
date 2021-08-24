const Sequelize = require('sequelize');
const db = require('../db');

const Waypoint = db.define('waypoint', {
  latitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  longitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = Waypoint;

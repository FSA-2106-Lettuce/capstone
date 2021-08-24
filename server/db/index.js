const db = require('./db');

const User = require('./models/User');
const Run = require('./models/Run');
const Route = require('./models/Route');
const Waypoint = require('./models/Waypoint');

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Run,
    Route,
    Waypoint,
  },
};

//Model associations
User.belongsToMany(Run, { through: 'runHistory' });
Run.belongsToMany(User, { through: 'runHistory' });

Route.hasMany(Run);
Run.belongsTo(Route);

Route.belongsToMany(Waypoint, { through: 'routePaths' });
Waypoint.belongsToMany(Route, { through: 'routePaths' });

Route.prototype.getDistance = async function () {
  const waypoints = await this.getWaypoints();
  console.log('here are the waypoints for this route: ', waypoints);
};

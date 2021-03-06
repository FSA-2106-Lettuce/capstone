const db = require('./db');

const User = require('./models/User');
const Run = require('./models/Run');
const Route = require('./models/Route');
const Waypoint = require('./models/Waypoint');
const Message = require('./models/Message');

//associations could go here!

module.exports = {
  db,
  models: {
    User,
    Run,
    Route,
    Waypoint,
    Message,
  },
};

//Model associations
User.belongsToMany(Run, { through: 'runHistory' });
Run.belongsToMany(User, { through: 'runHistory' });

Route.hasMany(Run);
Run.belongsTo(Route);

Route.hasMany(Waypoint);
Waypoint.belongsTo(Route);

User.hasMany(Message);
Message.belongsTo(User);

Run.hasMany(Message);
Message.belongsTo(Run);


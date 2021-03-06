const router = require('express').Router();
const { Op } = require('sequelize');
const {
  models: { Run, Route, Waypoint, User },
} = require('../db');
const moment = require('moment');
const { requireToken } = require('./utils');
module.exports = router;

//userStats GET w/runName
router.get(`/complete/:userId`, async (req, res, next) => {
  try {
    let runs = await Run.findAll({
      include: [
        { model: Route },
        {
          model: User,
          where: {
            id: req.params.userId,
          },
        },
      ],
      where: {
        status: 'COMPLETED',
      },
    });
    console.log('what are routes and users', runs);
    res.send(runs);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const run = await Run.findByPk(req.params.id, {
      include: [
        {
          model: Route,
          include: [Waypoint],
        },
        { model: User },
      ],
      order: [[Route, Waypoint, 'pathIndex', 'ASC']],
    });
    res.json(run);
  } catch (err) {
    next(err);
  }
});

// Filtered GET all runs
router.get('/', async (req, res, next) => {
  try {
    let { pace, distance, runStart } = req.query;

    // Convert pace and distance to numbers
    pace = Number(pace);
    distance = Number(distance);

    // Create containers for Run and Route where clauses inside of Run.findAll
    const whereClauseRun = {};
    const whereClauseRoute = {};

    // Set up where clauses
    if (pace > 0 && pace < 1000) {
      whereClauseRun.pace = {
        [Op.between]: [pace - 90, pace + 90],
      };
    }

    if (pace === 10000) {
      whereClauseRun.pace = {
        [Op.gte]: 12 * 60,
      };
    }

    whereClauseRun.startDate = {
      [Op.between]: [
        moment(runStart).subtract(1, 'days'),
        moment(runStart).add(14, 'days'),
      ],
    };

    if (distance > 0 && distance < 10000 * 5280) {
      whereClauseRoute.distance = {
        [Op.between]: [distance - 7920, distance + 7920],
      };
    }

    if (distance === 10000 * 5280) {
      whereClauseRoute.distance = {
        [Op.gte]: 12 * 5280,
      };
    }

    // Find all runs with associated filters
    const runs = await Run.findAll({
      where: whereClauseRun,
      include: [
        {
          model: Route,
          where: whereClauseRoute,
          include: [Waypoint],
        },
        { model: User },
      ],
      order: [[Route, Waypoint, 'pathIndex', 'ASC']],
    });
    res.json(runs);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { userId, action } = req.body;
    const run = await Run.findByPk(req.params.id);
    if (action === 'join') {
      await run.addUser(userId);
    } else if (action === 'leave') {
      await run.removeUser(userId);
    }
    const updatedRun = await Run.findByPk(req.params.id, {
      include: [
        {
          model: Route,
          include: [Waypoint],
        },
        { model: User },
      ],
      order: [[Route, Waypoint, 'pathIndex', 'ASC']],
    });
    res.json(updatedRun);
  } catch (err) {
    next(err);
  }
});

router.post('/', requireToken, async (req, res, next) => {
  try {
    const newRun = await Run.create(req.body);
    res.json(newRun);
  } catch (err) {
    next(err);
  }
});

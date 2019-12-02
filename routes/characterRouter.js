const express = require('express');
// const characterController = require('../controllers/characterController');

const router = express.Router();

router.get('/', (req, res) => {
  res.send([
    {
      name: 'Alindus',
      role: 'Hot-headed Inexperienced Warrior',
      stats: {
        edge: 2,
        heart: 2,
        iron: 3,
        shadow: 1,
        wits: 1,
        supply: 5,
        health: 5,
        spirit: 5,
        momentum: 2
      },

      maxMomentum: 10,
      momentumReset: 2,
      debilities: 0,
      conditions: {
        wounded: null,
        shaken: null,
        unprepared: null,
        encumbered: null
      },
      banes: {
        maimed: null,
        corrupted: null
      },
      burdens: {
        cursed: null,
        tormented: null
      },
      bonds: [],
      vows: [],
      equipment: [
        'A simple ax',
        'A family heirloom',
        'simple armor',
        'A battered shield'
      ]
    }
  ]);
});

module.exports = router;

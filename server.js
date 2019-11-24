const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/moves', (req, res) => {
  res.send( [
    {
      id: 1,
      name: 'face danger',
      description: 'Attempt something risky or react to an ' +
      'imminent threat.',
      options: [
        {choice:'You act with speed, agility, or precision', stat: 'edge'},
        {choice:'You act with charm, loyalty, or courage', stat: 'heart'},
        {choice:'You act with aggressive action, forceful defense, strength, or endurance', stat: 'iron'},
        {choice:'You act with deception, stealth, or trickery', stat: 'shadow'},
        {choice:'You act with expertise, insight, or observation', stat: 'wits'}
      ],
      strongHit: {description: 'You are successful.', value: 1, track: 'momentum'},
      weakHit: {
        description: 'You succeed, but face a troublesome cost.', 
        options: [
          {
            choice: 'You are delayed, lose advantage, or face a new danger', 
            value: -1, 
            track: 'momentum'
          },
          {
            choice: 'You are tired or hurt', 
            value: 1, 
            track: 'harm',
            newMove: 'endure harm'
          },
          {
            choice: ' You are dispirited or afraid', 
            value: 1, 
            track: 'stress',
            newMove: 'endure stress'
          },              {
            choice: 'You sacrifice resources', 
            value: -1, 
            track: 'supply'
          },
        ],
      },
      miss: {description: 'You fail, or your progress is undermined by a dramatic and costly turn of events', newMove: 'pay the price'}
    },
    {
      id: 2,
      name: 'secure an advantage',
      description: 'Assess a situation, make preparations, or attempt to gain leverage, envision your action and roll.',
    },
    {
      id: 3,
      name: 'gather information',
      description: 'Search an area, ask questions, conduct an investigation, or follow a track',
    }
  ]);
});

app.get('/api/character', (req, res) => {
  res.send( 
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
        momentum: 2,
      },

      maxMomentum: 10,
      momentumReset: 2,
      debilities: 0,
      conditions: {
        wounded: null, 
        shaken: null,
        unprepared: null,
        encumbered: null,
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
      equipment: ['A simple ax', 'A family heirloom', 'simple armor', 'A battered shield']
    }
  );
});


// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

app.listen(port, () => console.log(`Listening on port ${port}`));
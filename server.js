const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/ironsworn')
// // mongoose.connect('localhost:27017/ironsworn')

// const Schema = mongoose.Schema

// let progressDataSchema = new Schema({

// })

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//development only
// if ('development' == app.get('env')) {
//   // app.use(express.errorHandler())

// }

// mongoose.model('moves', {name: String})

// app.get('/api/progress', (req, res) => {
//   res.send(
//     mongoose.model('progress').find(function( err, progress){
//       res.send(progress);
//     })
//   );
// });

app.get('/api/moves', (req, res) => {
  res.send([
    {
      id: 1,
      name: 'face danger',
      description:
        'Attempt something risky or react to an imminent threat, envision your action and roll. ',
      dependent: 0,
      type: 'action',
      category: 'adventure'
    },
    {
      id: 2,
      name: 'secure an advantage',
      description:
        'Assess a situation, make preparations, or attempt to gain leverage, envision your action and roll.',
      dependent: 0,
      type: 'action',
      category: 'adventure'
    },
    {
      id: 3,
      name: 'gather information',
      description:
        'Search an area, ask questions, conduct an investigation, or follow a track',
      dependent: 0,
      type: 'action',
      category: 'adventure'
    },
    {
      id: 4,
      name: 'heal',
      description: 'Treat an injury or ailment',
      dependent: 0,
      type: 'action',
      category: 'adventure'
    },
    {
      id: 5,
      name: 'resupply',
      description: 'Hunt, forage, or scavenge',
      dependent: 0,
      type: 'action',
      category: 'adventure'
    },
    {
      id: 6,
      name: 'make camp',
      description: 'Rest and recover for several hours in the wild',
      dependent: 0,
      type: 'action',
      category: 'adventure'
    },
    {
      id: 7,
      name: 'undertake a jouney',
      description: 'Travel across hazardous or unfamiliar lands',
      dependent: 0,
      type: 'action',
      category: 'adventure'
    },
    {
      id: 8,
      name: 'reach your destination',
      description: 'Your journey comes to an end',
      dependent: 0,
      type: 'progress',
      category: 'adventure'
    },
    {
      id: 9,
      name: 'compel',
      description: 'Attempt to persuade someone to do something',
      dependent: 0,
      type: 'action',
      category: 'relationship'
    },
    {
      id: 10,
      name: 'sojourn',
      description: 'Spend time in a community seeking assistance',
      dependent: 0,
      type: 'action',
      category: 'relationship'
    },
    {
      id: 11,
      name: 'draw the circle',
      description: 'Challenge someone to a formal duel, or accept a challenge',
      dependent: 0,
      type: 'action',
      category: 'relationship'
    },
    {
      id: 12,
      name: 'forge a bond',
      description:
        'Spend significant time with a person or community, stand together to face hardships, or make sacrifices for their cause, you can attempt to create a bond',
      dependent: 0,
      type: 'action',
      category: 'relationship'
    },
    {
      id: 13,
      name: 'test your bond',
      description:
        'Bond is tested through conflict, betrayal, or circumstance,',
      dependent: 0,
      type: 'action',
      category: 'relationship'
    },
    {
      id: 14,
      name: 'aid your ally',
      description: 'Secure an Advantage in direct support of an ally',
      dependent: 0,
      type: 'choice?',
      category: 'relationship'
    },
    {
      id: 15,
      name: 'write your epilogue',
      description: 'Retire from your life as Ironsworn',
      dependent: 0,
      type: 'progress',
      category: 'relationship'
    },
    {
      id: 16,
      name: 'enter the fray',
      description: 'Enter into combat',
      dependent: 0,
      type: 'action',
      category: 'combat'
    },
    {
      id: 17,
      name: 'strike',
      description: 'Attack when you have initiative',
      dependent: 1,
      type: 'action',
      category: 'combat'
    },
    {
      id: 18,
      name: 'clash',
      description: 'Fight when foe has initiative',
      dependent: 1,
      type: 'action',
      category: 'combat'
    },
    {
      id: 19,
      name: 'turn the tide',
      description: 'Risk it all',
      dependent: 1,
      type: 'choice?',
      category: 'combat'
    },
    {
      id: 20,
      name: 'end the fight',
      description: 'Resolve the outcome of this fight',
      dependent: 1,
      type: 'progress',
      category: 'combat'
    },
    {
      id: 21,
      name: 'battle',
      description:
        'Fight a battle, and it happens in a blur, envision your objective and roll. ',
      dependent: 0,
      type: 'action',
      category: 'combat'
    },
    {
      id: 22,
      name: 'endure harm',
      description: 'You face physical damage',
      dependent: 1,
      type: 'action',
      category: 'suffer'
    },
    {
      id: 23,
      name: 'face death',
      description:
        'You are brought to the brink of death, and glimpse the world beyond',
      dependent: 1,
      type: 'action',
      category: 'suffer'
    },
    {
      id: 24,
      name: 'companion endure harm',
      description: 'Your companion faces physical damage',
      dependent: 1,
      type: 'action',
      category: 'suffer'
    },
    {
      id: 25,
      name: 'endure stress',
      description: 'You face mental shock or despair,',
      dependent: 1,
      type: 'action',
      category: 'suffer'
    },
    {
      id: 26,
      name: 'face desolation',
      description: 'You are brought to the brink of desolation',
      dependent: 1,
      type: 'action',
      category: 'suffer'
    },
    {
      id: 27,
      name: 'out of supply',
      description: 'Your supply is exhausted ',
      dependent: 1,
      type: 'action',
      category: 'suffer'
    },
    {
      id: 28,
      name: 'face a setback',
      description: 'Your momentum is at its minimum ',
      dependent: 1,
      type: 'choice',
      category: 'suffer'
    },
    {
      id: 29,
      name: 'swear an iron vow',
      description: 'Swear upon iron to complete a quest',
      dependent: 0,
      type: 'action',
      category: 'quest'
    },
    {
      id: 30,
      name: 'reach a milestone',
      description:
        'You make significant progress in your quest by overcoming a critical obstacle, completing a perilous journey, solving a complex mystery, defeating a powerful threat, gaining vital support, or acquiring a crucial item, ',
      dependent: 0,
      type: 'choice',
      category: 'quest'
    },
    {
      id: 31,
      name: 'fulfill your vow',
      description:
        'You achieve what you believe to be the fulfillment of your vow, ',
      dependent: 0,
      type: 'progress',
      category: 'quest'
    },
    {
      id: 32,
      name: 'forsake your vow',
      description:
        'You renounce your quest, betray your promise, or the goal is lost to you',
      dependent: 0,
      type: 'choice?',
      category: 'quest'
    },
    {
      id: 33,
      name: 'advance',
      description:
        'You focus on your skills, receive training, find inspiration, earn a reward, or gain a companion',
      dependent: 0,
      type: 'choice',
      category: 'quest'
    },
    {
      id: 34,
      name: 'pay the price',
      description: 'You suffer the outcome of a move',
      dependent: 1,
      type: 'roll',
      category: 'fate'
    },
    {
      id: 35,
      name: 'ask the oracle',
      description:
        'You seek to resolve questions, discover details in the world, determine how other characters respond, or trigger encounters or events,',
      dependent: 0,
      type: 'roll',
      category: 'fate'
    }
  ]);
});

app.get('/api/character', (req, res) => {
  res.send({
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
  });
});

app.get('/api/rolls', (req, res) => {
  res.send([
    {
      id: 1,
      description: ' Act with speed, agility, or precision.',
      stat: 'edge',
      move: 'face danger',
      move_id: 1,
      adds: '0',
      comparison: ''
    },
    {
      id: 2,
      description: ' Act with charm, loyalty, or courage.',
      stat: 'heart',
      move: 'face danger',
      move_id: 1,
      adds: '',
      comparison: ''
    },
    {
      id: 3,
      description:
        ' Act with aggressive action, forceful defense, strength, or endurance.',
      stat: 'iron',
      move: 'face danger',
      move_id: 1,
      adds: '',
      comparison: ''
    },
    {
      id: 4,
      description: ' Act with  deception, stealth, or trickery.',
      stat: 'shadow',
      move: 'face danger',
      move_id: 1,
      adds: '',
      comparison: ''
    },
    {
      id: 5,
      description: ' Act with expertise, insight, or observation.',
      stat: 'wits',
      move: 'face danger',
      move_id: 1,
      adds: '',
      comparison: ''
    },
    {
      id: 6,
      description: ' Act with speed, agility, or precision.',
      stat: 'edge',
      move: 'secure an advantage',
      move_id: 2,
      adds: '',
      comparison: ''
    },
    {
      id: 7,
      description: ' Act with charm, loyalty, or courage.',
      stat: 'heart',
      move: 'secure an advantage',
      move_id: 2,
      adds: '',
      comparison: ''
    },
    {
      id: 8,
      description:
        ' Act with aggressive action, forceful defense, strength, or endurance.',
      stat: 'iron',
      move: 'secure an advantage',
      move_id: 2,
      adds: '',
      comparison: ''
    },
    {
      id: 9,
      description: ' Act with  deception, stealth, or trickery.',
      stat: 'shadow',
      move: 'secure an advantage',
      move_id: 2,
      adds: '',
      comparison: ''
    },
    {
      id: 10,
      description: ' Act with expertise, insight, or observation.',
      stat: 'wits',
      move: 'secure an advantage',
      move_id: 2,
      adds: '',
      comparison: ''
    },
    {
      id: 11,
      description: '',
      stat: 'wits',
      move: 'gather information',
      move_id: 3,
      adds: 'bond',
      comparison: ''
    },
    {
      id: 12,
      description: 'Mend your own wounds',
      stat: 'wits iron',
      move: 'heal',
      move_id: 4,
      adds: '',
      comparison: 'lower'
    },
    {
      id: 13,
      description: ' treat an injury or ailment',
      stat: 'wits',
      move: 'heal',
      move_id: 4,
      adds: '',
      comparison: ''
    },
    {
      id: 14,
      description: '',
      stat: 'wits',
      move: 'resupply',
      move_id: 5,
      adds: '',
      comparison: ''
    },
    {
      id: 15,
      description: '',
      stat: 'supply',
      move: 'make camp',
      move_id: 6,
      adds: '',
      comparison: ''
    },
    {
      id: 16,
      description: '',
      stat: 'wits',
      move: 'undertake a jouney',
      move_id: 7,
      adds: '',
      comparison: ''
    },
    {
      id: 17,
      description: '',
      stat: 'progress',
      move: 'reach your destination',
      move_id: 8,
      adds: '',
      comparison: ''
    },
    {
      id: 18,
      description: 'Charm, pacify, barter, or convince',
      stat: 'heart',
      move: 'compel',
      move_id: 9,
      adds: 'bond',
      comparison: ''
    },
    {
      id: 19,
      description: 'Threaten or incite',
      stat: 'iron',
      move: 'compel',
      move_id: 9,
      adds: '',
      comparison: ''
    },
    {
      id: 20,
      description: 'Lie or swindle',
      stat: 'shadow',
      move: 'compel',
      move_id: 9,
      adds: '',
      comparison: ''
    },
    {
      id: 21,
      description: '',
      stat: 'heart',
      move: 'sojourn',
      move_id: 10,
      adds: 'bond',
      comparison: ''
    },
    {
      id: 22,
      description: '',
      stat: 'heart',
      move: 'draw the circle',
      move_id: 11,
      adds: 'bond',
      comparison: ''
    },
    {
      id: 23,
      description: '',
      stat: 'heart',
      move: 'forge a bond',
      move_id: 12,
      adds: '',
      comparison: ''
    },
    {
      id: 24,
      description: '',
      stat: 'heart',
      move: 'test your bond',
      move_id: 13,
      adds: '',
      comparison: ''
    },
    {
      id: 25,
      description:
        'USES SECURE AN ADVANTAGE AND GIVE IT TO SOMEONE ELSE IMPLEMENT ONCE I GO T CO OP',
      stat: '',
      move: 'aid your ally',
      move_id: 14,
      adds: '',
      comparison: ''
    },
    {
      id: 26,
      description: '',
      stat: 'bonds',
      move: 'write your epilogue',
      move_id: 15,
      adds: '',
      comparison: ''
    },
    {
      id: 27,
      description: 'Facing off against your foe',
      stat: 'heart',
      move: 'enter the fray',
      move_id: 16,
      adds: '',
      comparison: ''
    },
    {
      id: 28,
      description:
        'Moving into position against an unaware foe, or striking without warning',
      stat: 'shadow',
      move: 'enter the fray',
      move_id: 16,
      adds: '',
      comparison: ''
    },
    {
      id: 29,
      description: 'Ambushed',
      stat: 'wits',
      move: 'enter the fray',
      move_id: 16,
      adds: '',
      comparison: ''
    },
    {
      id: 30,
      description: ' you have initiative and attack in close quarters',
      stat: 'iron',
      move: 'strike',
      move_id: 17,
      adds: '',
      comparison: ''
    },
    {
      id: 31,
      description: 'you have initiative and attack at range',
      stat: 'edge',
      move: 'strike',
      move_id: 17,
      adds: '',
      comparison: ''
    },
    {
      id: 32,
      description:
        ' your foe has initiative and you fight with them in close quarters',
      stat: 'iron',
      move: 'clash',
      move_id: 18,
      adds: '',
      comparison: ''
    },
    {
      id: 33,
      description:
        ' you exchange a volley at range, or shoot at an advancing foe',
      stat: 'edge',
      move: 'clash',
      move_id: 18,
      adds: '',
      comparison: ''
    },
    {
      id: 34,
      description: 'TO IMPLEMENT',
      stat: '',
      move: 'turn the tide',
      move_id: 19,
      adds: '',
      comparison: ''
    },
    {
      id: 35,
      description: '',
      stat: 'progress',
      move: 'end the fight',
      move_id: 20,
      adds: '',
      comparison: ''
    },
    {
      id: 36,
      description:
        'Fight at range, or using your speed and the terrain to your advantage',
      stat: 'edge',
      move: 'battle',
      move_id: 21,
      adds: '',
      comparison: ''
    },
    {
      id: 37,
      description: ' Fight depending on your courage, allies, or companions',
      stat: 'heart',
      move: 'battle',
      move_id: 21,
      adds: '',
      comparison: ''
    },
    {
      id: 38,
      description: 'Fight in close to overpower your opponents',
      stat: 'iron',
      move: 'battle',
      move_id: 21,
      adds: '',
      comparison: ''
    },
    {
      id: 39,
      description: ' Fight using trickery to befuddle your opponents',
      stat: 'shadow',
      move: 'battle',
      move_id: 21,
      adds: '',
      comparison: ''
    },
    {
      id: 40,
      description: 'Fight using careful tactics to outsmart your opponents',
      stat: 'wits',
      move: 'battle',
      move_id: 21,
      adds: '',
      comparison: ''
    },
    {
      id: 41,
      description: '',
      stat: 'health iron',
      move: 'endure harm',
      move_id: 22,
      adds: '',
      comparison: 'higher'
    },
    {
      id: 42,
      description: '',
      stat: 'heart',
      move: 'face death',
      move_id: 23,
      adds: '',
      comparison: ''
    },
    {
      id: 43,
      description: 'TO IMPLEMENT',
      stat: '',
      move: 'companion endure harm',
      move_id: 24,
      adds: '',
      comparison: ''
    },
    {
      id: 44,
      description: '',
      stat: 'spirit heart',
      move: 'endure stress',
      move_id: 25,
      adds: '',
      comparison: 'higher'
    },
    {
      id: 45,
      description: '',
      stat: 'heart',
      move: 'face desolation',
      move_id: 26,
      adds: '',
      comparison: ''
    },
    {
      id: 46,
      description: 'TO IMLPLEMENT',
      stat: '',
      move: 'out of supply',
      move_id: 27,
      adds: '',
      comparison: ''
    },
    {
      id: 47,
      description: 'TO IMPLEMENT',
      stat: '',
      move: 'face a setback',
      move_id: 28,
      adds: '',
      comparison: ''
    },
    {
      id: 48,
      description: '',
      stat: '',
      move: 'swear an iron vow',
      move_id: 29,
      adds: '',
      comparison: ''
    },
    {
      id: 49,
      description: '',
      stat: '',
      move: 'reach a milestone',
      move_id: 30,
      adds: '',
      comparison: ''
    },
    {
      id: 50,
      description: '',
      stat: 'progress',
      move: 'fulfill your vow',
      move_id: 31,
      adds: '',
      comparison: ''
    },
    {
      id: 51,
      description: '',
      stat: '',
      move: 'forsake your vow',
      move_id: 32,
      adds: '',
      comparison: ''
    },
    {
      id: 52,
      description: '',
      stat: '',
      move: 'advance',
      move_id: 33,
      adds: '',
      comparison: ''
    },
    {
      id: 53,
      description: '',
      stat: '',
      move: 'pay the proce',
      move_id: 34,
      adds: '',
      comparison: ''
    },
    {
      id: 54,
      description: '',
      stat: '',
      move: 'ask the oracle',
      move_id: 35,
      adds: '',
      comparison: ''
    }
  ]);
});

// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

app.listen(port, () => console.log(`Listening on port ${port}`));

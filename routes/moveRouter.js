const express = require('express');
const moveController = require('../controllers/moveController');

const router = express.Router();

router.route('/').get(moveController.getAllMoves);

module.exports = router;

// router.get('/api/moves', (req, res) => {
//   res.send();
// });

//Rolls

// app.get('/api/rolls', (req, res) => {
//   res.send([
//     {
//       id: 1,
//       description: ' Act with speed, agility, or precision.',
//       stat: 'edge',
//       move: 'face danger',
//       move_id: 1,
//       adds: '0',
//       comparison: ''
//     },
//     {
//       id: 2,
//       description: ' Act with charm, loyalty, or courage.',
//       stat: 'heart',
//       move: 'face danger',
//       move_id: 1,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 3,
//       description:
//         ' Act with aggressive action, forceful defense, strength, or endurance.',
//       stat: 'iron',
//       move: 'face danger',
//       move_id: 1,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 4,
//       description: ' Act with  deception, stealth, or trickery.',
//       stat: 'shadow',
//       move: 'face danger',
//       move_id: 1,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 5,
//       description: ' Act with expertise, insight, or observation.',
//       stat: 'wits',
//       move: 'face danger',
//       move_id: 1,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 6,
//       description: ' Act with speed, agility, or precision.',
//       stat: 'edge',
//       move: 'secure an advantage',
//       move_id: 2,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 7,
//       description: ' Act with charm, loyalty, or courage.',
//       stat: 'heart',
//       move: 'secure an advantage',
//       move_id: 2,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 8,
//       description:
//         ' Act with aggressive action, forceful defense, strength, or endurance.',
//       stat: 'iron',
//       move: 'secure an advantage',
//       move_id: 2,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 9,
//       description: ' Act with  deception, stealth, or trickery.',
//       stat: 'shadow',
//       move: 'secure an advantage',
//       move_id: 2,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 10,
//       description: ' Act with expertise, insight, or observation.',
//       stat: 'wits',
//       move: 'secure an advantage',
//       move_id: 2,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 11,
//       description: '',
//       stat: 'wits',
//       move: 'gather information',
//       move_id: 3,
//       adds: 'bond',
//       comparison: ''
//     },
//     {
//       id: 12,
//       description: 'Mend your own wounds',
//       stat: 'wits iron',
//       move: 'heal',
//       move_id: 4,
//       adds: '',
//       comparison: 'lower'
//     },
//     {
//       id: 13,
//       description: ' treat an injury or ailment',
//       stat: 'wits',
//       move: 'heal',
//       move_id: 4,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 14,
//       description: '',
//       stat: 'wits',
//       move: 'resupply',
//       move_id: 5,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 15,
//       description: '',
//       stat: 'supply',
//       move: 'make camp',
//       move_id: 6,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 16,
//       description: '',
//       stat: 'wits',
//       move: 'undertake a jouney',
//       move_id: 7,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 17,
//       description: '',
//       stat: 'progress',
//       move: 'reach your destination',
//       move_id: 8,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 18,
//       description: 'Charm, pacify, barter, or convince',
//       stat: 'heart',
//       move: 'compel',
//       move_id: 9,
//       adds: 'bond',
//       comparison: ''
//     },
//     {
//       id: 19,
//       description: 'Threaten or incite',
//       stat: 'iron',
//       move: 'compel',
//       move_id: 9,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 20,
//       description: 'Lie or swindle',
//       stat: 'shadow',
//       move: 'compel',
//       move_id: 9,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 21,
//       description: '',
//       stat: 'heart',
//       move: 'sojourn',
//       move_id: 10,
//       adds: 'bond',
//       comparison: ''
//     },
//     {
//       id: 22,
//       description: '',
//       stat: 'heart',
//       move: 'draw the circle',
//       move_id: 11,
//       adds: 'bond',
//       comparison: ''
//     },
//     {
//       id: 23,
//       description: '',
//       stat: 'heart',
//       move: 'forge a bond',
//       move_id: 12,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 24,
//       description: '',
//       stat: 'heart',
//       move: 'test your bond',
//       move_id: 13,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 25,
//       description:
//         'USES SECURE AN ADVANTAGE AND GIVE IT TO SOMEONE ELSE IMPLEMENT ONCE I GO T CO OP',
//       stat: '',
//       move: 'aid your ally',
//       move_id: 14,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 26,
//       description: '',
//       stat: 'bonds',
//       move: 'write your epilogue',
//       move_id: 15,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 27,
//       description: 'Facing off against your foe',
//       stat: 'heart',
//       move: 'enter the fray',
//       move_id: 16,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 28,
//       description:
//         'Moving into position against an unaware foe, or striking without warning',
//       stat: 'shadow',
//       move: 'enter the fray',
//       move_id: 16,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 29,
//       description: 'Ambushed',
//       stat: 'wits',
//       move: 'enter the fray',
//       move_id: 16,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 30,
//       description: ' you have initiative and attack in close quarters',
//       stat: 'iron',
//       move: 'strike',
//       move_id: 17,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 31,
//       description: 'you have initiative and attack at range',
//       stat: 'edge',
//       move: 'strike',
//       move_id: 17,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 32,
//       description:
//         ' your foe has initiative and you fight with them in close quarters',
//       stat: 'iron',
//       move: 'clash',
//       move_id: 18,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 33,
//       description:
//         ' you exchange a volley at range, or shoot at an advancing foe',
//       stat: 'edge',
//       move: 'clash',
//       move_id: 18,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 34,
//       description: 'TO IMPLEMENT',
//       stat: '',
//       move: 'turn the tide',
//       move_id: 19,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 35,
//       description: '',
//       stat: 'progress',
//       move: 'end the fight',
//       move_id: 20,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 36,
//       description:
//         'Fight at range, or using your speed and the terrain to your advantage',
//       stat: 'edge',
//       move: 'battle',
//       move_id: 21,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 37,
//       description: ' Fight depending on your courage, allies, or companions',
//       stat: 'heart',
//       move: 'battle',
//       move_id: 21,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 38,
//       description: 'Fight in close to overpower your opponents',
//       stat: 'iron',
//       move: 'battle',
//       move_id: 21,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 39,
//       description: ' Fight using trickery to befuddle your opponents',
//       stat: 'shadow',
//       move: 'battle',
//       move_id: 21,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 40,
//       description: 'Fight using careful tactics to outsmart your opponents',
//       stat: 'wits',
//       move: 'battle',
//       move_id: 21,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 41,
//       description: '',
//       stat: 'health iron',
//       move: 'endure harm',
//       move_id: 22,
//       adds: '',
//       comparison: 'higher'
//     },
//     {
//       id: 42,
//       description: '',
//       stat: 'heart',
//       move: 'face death',
//       move_id: 23,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 43,
//       description: 'TO IMPLEMENT',
//       stat: '',
//       move: 'companion endure harm',
//       move_id: 24,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 44,
//       description: '',
//       stat: 'spirit heart',
//       move: 'endure stress',
//       move_id: 25,
//       adds: '',
//       comparison: 'higher'
//     },
//     {
//       id: 45,
//       description: '',
//       stat: 'heart',
//       move: 'face desolation',
//       move_id: 26,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 46,
//       description: 'TO IMLPLEMENT',
//       stat: '',
//       move: 'out of supply',
//       move_id: 27,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 47,
//       description: 'TO IMPLEMENT',
//       stat: '',
//       move: 'face a setback',
//       move_id: 28,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 48,
//       description: '',
//       stat: '',
//       move: 'swear an iron vow',
//       move_id: 29,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 49,
//       description: '',
//       stat: '',
//       move: 'reach a milestone',
//       move_id: 30,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 50,
//       description: '',
//       stat: 'progress',
//       move: 'fulfill your vow',
//       move_id: 31,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 51,
//       description: '',
//       stat: '',
//       move: 'forsake your vow',
//       move_id: 32,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 52,
//       description: '',
//       stat: '',
//       move: 'advance',
//       move_id: 33,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 53,
//       description: '',
//       stat: '',
//       move: 'pay the proce',
//       move_id: 34,
//       adds: '',
//       comparison: ''
//     },
//     {
//       id: 54,
//       description: '',
//       stat: '',
//       move: 'ask the oracle',
//       move_id: 35,
//       adds: '',
//       comparison: ''
//     }
//   ]);
// });

// const Move = require('../models/moveModel');
const oracles = require('../oracles');

exports.getAllOracles = async (req, res) => {
  try {
    // const moves = await Move.find();
    const tables = Object.keys(oracles);

    res.status(200).json({
      status: 'success',
      results: tables.length,
      data: {
        oracles
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

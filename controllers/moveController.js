const Move = require('../models/moveModel');

exports.getAllMoves = async (req, res) => {
  try {
    const moves = await Move.find();

    res.status(200).json({
      status: 'success',
      results: moves.length,
      data: {
        moves
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

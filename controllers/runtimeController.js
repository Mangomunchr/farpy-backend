const { getState, setState } = require('../lib/runtimeSwitch');

exports.status = (req, res) => res.json(getState());
exports.switch = (req, res) => {
  const { mode } = req.body;
  res.json(setState(mode));
};

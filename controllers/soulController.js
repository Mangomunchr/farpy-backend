const { imprint, getSoul } = require('../lib/nodeSoul');

exports.add = (req, res) => {
  const { id, action } = req.body;
  const memory = imprint(id, action);
  res.json({ id, memory });
};

exports.get = (req, res) => {
  const id = req.params.id;
  res.json(getSoul(id));
};

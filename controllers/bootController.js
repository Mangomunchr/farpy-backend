const { getBoot, setBoot } = require('../lib/bootTrigger');

exports.status = (req, res) => res.json(getBoot());
exports.trigger = (req, res) => res.json(setBoot());

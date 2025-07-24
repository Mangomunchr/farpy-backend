const { getBurn, updateBurn, coolBurn } = require('../lib/burnDrift');

exports.status = (req, res) => res.json(getBurn());
exports.tick = (req, res) => res.json(updateBurn(2));
exports.cool = (req, res) => res.json(coolBurn(10));

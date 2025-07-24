const { getWeather, rollWeather } = require('../lib/vaultWeather');

exports.status = (req, res) => res.json(getWeather());
exports.roll = (req, res) => res.json(rollWeather());

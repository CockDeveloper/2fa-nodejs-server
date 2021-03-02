'use strict';

var utils = require('../utils/writer.js');
var Qr = require('../service/QrService');

module.exports.generate = function generate (req, res, next, body) {
  Qr.generate(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

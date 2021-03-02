'use strict';

var utils = require('../utils/writer.js');
var Tfa = require('../service/TfaService');

module.exports.generateWithEmail = function generateWithEmail (req, res, next, emailId, emailDomain) {
  Tfa.generateWithEmail(emailId, emailDomain)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.verify = function verify (req, res, next, email, otp) {
  Tfa.verify(email, otp)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

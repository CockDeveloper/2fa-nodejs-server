'use strict';


/**
 * Generate text by email
 * Generate text by a email
 *
 * emailId String email for generate
 * emailDomain String domain email for generate
 * returns ResultGenerate
 **/
exports.generateWithEmail = function(emailId,emailDomain) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "generateRaw" : "opt://abc?secret=abc&email=example@domain.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Verify otp
 * Verify otp
 *
 * email String email for generate
 * otp String value otp for email
 * returns Object
 **/
exports.verify = function(email,otp) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = { };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


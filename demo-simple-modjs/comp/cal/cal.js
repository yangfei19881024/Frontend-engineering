// @require /static/mod.js

var md5 = require("../libs/md5");

exports.add = function (a, b) {
    return a + b;
};

exports.div = function (a, b) {
    return a / b;
};

exports.mul = function (a, b) {
    return a * b;
};

exports.min = function (a, b) {
    return a - b;
};

exports.hexs = function(name){
  return md5.hex_md5(name);
}

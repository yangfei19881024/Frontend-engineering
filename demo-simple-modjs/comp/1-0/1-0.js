
var list = require("../list/list");
var API = require("../API/api");

var cal = require('../cal/cal');

/****==========模块化需求===========****/
/*
cal 模块中有个 hexs 方法需要用到 md5.js 中的方法
所以 需要对 md5.js 模块化处理［具体见md5.js 文件］
然后 在 cal 模块 中引用 md5 模块
*/

console.log("++++++++++");

console.log(cal.hexs("yyy"));

console.log("++++++++++");

require("../list/zepto.min");

console.log("-----");
console.log($);
console.log("-----");

API.API();
console.log('work');
// 1 - 0
console.log(cal.min(1, 0));

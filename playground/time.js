var moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(100, 'years').subtract(9, 'month');
// console.log(date.format('Do MMM, YYYY'));

// 10:35 am


var someTimeStamp = moment().valueOf();
console.log(someTimeStamp)
var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));

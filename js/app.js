'use strict';
var balls = [74989, 74990, 84990, 62000, 58480, 61800];

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

var getMax = function(arr) {
  var max = arr[0];
  arr.forEach(function(item) {
    if (item > max) {
      max = item
    };
  });
  return max;
};

var getMiddleBall = function(arr) {
  var sortedArray = arr.sort(compareNumeric)
  sortedArray = sortedArray.slice(sortedArray.length - 3, sortedArray.length);
  var sum = 0;
  sortedArray.forEach(function(item) {
    return sum += item;
  });
  return sum / sortedArray.length;
}

var max = getMax(balls);
console.log(max);
var middle = getMiddleBall(balls);
console.log(middle)
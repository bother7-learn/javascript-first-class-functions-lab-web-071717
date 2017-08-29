function countdown(callback){
  window.setTimeout(callback, 2)
}

function createMultiplier(num){
  return function(value) {return value * num}
}

function multiplier(num, callback){
  return num * callback
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)
var doublerWithBind = doubler.bind(2)
var triplerWithBind = tripler.bind(3)

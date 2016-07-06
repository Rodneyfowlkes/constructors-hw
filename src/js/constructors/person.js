function Person () {
  this.pet = function(x){x.status = 'happy';};
  this.feed = function(x){x.hungry = 'false';};
  this.cool = false

};

export {Person};
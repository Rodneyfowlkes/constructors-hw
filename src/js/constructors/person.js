function Person (options) {
	options = options || {};
  this.pet = function(x){x.status = 'happy';};
  this.feed = function(x){x.hungry = false;};
  if (options.cool === undefined){ this.cool = false;} else { this.cool = true}

};

export {Person};
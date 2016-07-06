function Dog (options) {
	options= options || {};
this.status= 'normal',
   this.color = options.color
  if (options.hungry ===  undefined) { this.hungry = true;} else {this.hungry = options.hungry}
};

console.log('hello');
export{ Dog }




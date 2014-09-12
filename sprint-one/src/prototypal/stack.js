var makeStack = function() {
	var newStack = Object.create(stackMethods);

  newStack.storage = {};
  newStack.last = 0;
  return newStack;
};
var stackMethods = {};

stackMethods.push = function(val) {
	this.storage[this.last] = val;
	this.last++;
};
stackMethods.pop = function() {
	if (this.last > 0) {
		this.last--;
		var results = this.storage[this.last];
		delete this.storage[this.last];
	}
	return results;
};
stackMethods.size = function() {
	return this.last;
};


// instance objects = will change;
var makeStack = function() {
	var newStack = Object.create(stackMethods);

  newStack.storage = {};
  newStack.totalSize = 0;
  return newStack;
};
var stackMethods = {};

stackMethods.push = function(val) {
	this.storage[this.totalSize] = val;
	this.totalSize++;
};
stackMethods.pop = function() {
	if (this.totalSize > 0) {
		this.totalSize--;
		var results = this.storage[this.totalSize];
		delete this.storage[this.totalSize];
	}
	return results;
};
stackMethods.size = function() {
	return this.totalSize;
};


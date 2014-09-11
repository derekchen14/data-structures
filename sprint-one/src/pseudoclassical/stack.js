var Stack = function() {
	this.storage = {};
	this.totalSize = 0;
};

Stack.prototype.push = function(val) {
	this.storage[this.totalSize] = val;
	this.totalSize++;
};
Stack.prototype.pop = function() {
	if (this.totalSize > 0) {
		this.totalSize--;
		var results = this.storage[this.totalSize];
		delete this.storage[this.totalSize];
	}
	return results;
};
Stack.prototype.size = function() {
	return this.totalSize;
};

// var newStack = new Stack();
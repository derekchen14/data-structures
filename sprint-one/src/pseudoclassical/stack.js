var Stack = function() {
	this.storage = {};
	this.last = 0;
};

Stack.prototype.push = function(val) {
	this.storage[this.last] = val;
	this.last++;
};
Stack.prototype.pop = function() {
	if (this.last > 0) {
		this.last--;
		var results = this.storage[this.last];
		delete this.storage[this.last];
	}
	return results;
};
Stack.prototype.size = function() {
	return this.last;
};

// var newStack = new Stack();

// instance objects = will change;

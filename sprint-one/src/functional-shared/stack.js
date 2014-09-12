var makeStack = function() {
	var someInstance = {
		storage: {},
		last: 0
	};

	_.extend(someInstance, stackMethods);

	return someInstance;
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


// instance objects = will not change if you change the method;
// will change if you change a property of a method
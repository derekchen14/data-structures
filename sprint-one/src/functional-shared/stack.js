var makeStack = function() {
	var someInstance = {
		storage: {},
		totalSize: 0
	};

	_.extend(someInstance, stackMethods);

	return someInstance;
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



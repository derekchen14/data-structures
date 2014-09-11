var makeQueue = function(){
	var someInstance = {
		storage: {},
		totalSize: 0,
		first: 0
	};

	_.extend(someInstance, queueMethods);

	return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
	this.storage[this.totalSize+this.first] = val;
	this.totalSize++;
};
queueMethods.dequeue = function() {
	if (this.totalSize > 0) {
		this.totalSize--;
		var results = this.storage[this.first];
		delete this.storage[this.first];
		this.first++;
	}
	return results;
};
queueMethods.size = function() {
	return this.totalSize;
};


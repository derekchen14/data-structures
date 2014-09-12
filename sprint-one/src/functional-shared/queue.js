var makeQueue = function(){
	var someInstance = {
		storage: {},
		last: 0,
		first: 0
	};

	_.extend(someInstance, queueMethods);

	return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
	this.storage[this.last+this.first] = val;
	this.last++;
};
queueMethods.dequeue = function() {
	if (this.last > 0) {
		this.last--;
		var results = this.storage[this.first];
		delete this.storage[this.first];
		this.first++;
	}
	return results;
};
queueMethods.size = function() {
	return this.last;
};


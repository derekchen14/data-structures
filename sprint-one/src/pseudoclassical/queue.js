var Queue = function() {
	this.storage = {};
	this.last = 0;
	this.first = 0;
};

Queue.prototype.enqueue = function(val) {
	this.storage[this.last+this.first] = val;
	this.last++;
};
Queue.prototype.dequeue = function() {
	if (this.last > 0) {
		this.last--;
		var results = this.storage[this.first];
		delete this.storage[this.first];
		this.first++;
	}
	return results;
};
Queue.prototype.size = function() {
	return this.last;
};

// var newQueue = new Queue();
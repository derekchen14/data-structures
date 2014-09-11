var Queue = function() {
	this.storage = {};
	this.totalSize = 0;
	this.first = 0;
};

Queue.prototype.enqueue = function(val) {
	this.storage[this.totalSize+this.first] = val;
	this.totalSize++;
};
Queue.prototype.dequeue = function() {
	if (this.totalSize > 0) {
		this.totalSize--;
		var results = this.storage[this.first];
		delete this.storage[this.first];
		this.first++;
	}
	return results;
};
Queue.prototype.size = function() {
	return this.totalSize;
};

// var newQueue = new Queue();
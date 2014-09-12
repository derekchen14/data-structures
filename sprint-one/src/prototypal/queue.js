var makeQueue = function() {
  var newQueue = Object.create(queueMethods);

  newQueue.storage = {};
  newQueue.last = 0;
  newQueue.first = 0;

  return newQueue;
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

var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = first = 0;

  // Implement the methods below
  someInstance.enqueue = function(value){
    storage[size + first] = value;
    size++;
  };

  someInstance.dequeue = function(){
    var result;
    if (size > 0) {
      size--;
      result = storage[first];
      delete storage.first;
      first++;
    }
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};

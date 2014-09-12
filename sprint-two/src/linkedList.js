var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    list.tail = makeNode(value);
    if (list.head === null) {
      list.head = list.tail;
    } else {
      list.head.next = list.tail;
    }
  };

  list.removeHead = function(){
    if (list.head !== null) {
      var oldValue = list.head.value;
      list.head = list.head.next;
    }
    return oldValue;
  };

  list.contains = function(target){
    var found = false;
    var activeNode = list.head;
    while (activeNode !== null && found === false) {
      if (activeNode.value === target) {found = true};
      activeNode = activeNode.next;
    }
    return found;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
    addToTail - O(1)
    removeHead - O(1)
    contains - O(n)
 */

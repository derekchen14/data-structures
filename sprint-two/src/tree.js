var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
	if (this.children === undefined) {
		this.children = [makeTree(value)];
	} else {
		this.children.push(makeTree(value));
	}
};

treeMethods.contains = function(target){
	if (this.value === target) {
		return true;
	} else if (this.children !== undefined) {
		for (var i = 0; i < this.children.length; i++) {
			var doesContain = this.children[i].contains(target);
			if (doesContain) return true;
		};
	}

	return contain = false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

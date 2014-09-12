var makeBinarySearchTree = function(value){
	bsTree = Object.create(bsTreeMethods);
	bsTree.value = value;
	bsTree.left = undefined;
	bsTree.right = undefined;

	bsTree.maxVal = null;
	bsTree.minVal = null;

	return bsTree;
};

bsTreeMethods = {};

bsTreeMethods.insert = function(value) {
	var newNode = makeBinarySearchTree(value);
	// compare the value the current node
		if (newNode.value < this.value) { // we have to deal with the left side
			this.left ? this.left.insert(value) : this.left = newNode;
		} else { // we have to deal with the right side
			this.right ? this.right.insert(value) : this.right = newNode;
		}
	// same key should replace old node, rather than insert
}
bsTreeMethods.contains = function(target) {
	if (this.value === target) {return true;}

	if (this.left) {
		if (this.left.contains(target)) {return true;}
	}
	if (this.right) {
		if (this.right.contains(target)) {return true;}
	}
	return false;
}
bsTreeMethods.depthFirstLog = function(func) {
	func(this.value);
	if (this.left) { this.left.depthFirstLog(func); }
	if (this.right) { this.right.depthFirstLog(func); }
}
bsTreeMethods.remove = function(value) {
	//find the node
	//remove it
		// perform operation immediately if no children
		// shift child to parent if one child
		// perform calculations to find success if two children
	// return removed value
}
bsTreeMethods.findSuccesor = function(value) {

}

/*
 * Complexity: What is the time complexity of the above functions?
 */

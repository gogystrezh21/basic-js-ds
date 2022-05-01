const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }
  root() {
    return this.rootTree;
    // remove line with error and write your code here
  }
  add(data) {
    this.rootTree = addData(this.rootTree, data);
    function addData(node, data) {
      if (!node) {
        return new Node(data);
      } if (node.data === data) {
        return node;
      } if (data < node.data) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      } return node;
      // remove line with error and write your code here
    }
  }
  has(data) {
    return searching(this.rootTree, data);
    function searching(node, data) {
      if (!node) {
        return false;
      } if (node.data === data) {
        return true;
      } return data < node.data ? searching(node.left, data) : searching(node.right, data);
      // remove line with error and write your code here
    }
  }
  find(data) {
    return finding(this.rootTree, data);
    function finding(node, data) {
      if (!node) {
        return null;
      } if (node.data === data) {
        return node;
      } return data < node.data ? finding(node.left, data) : finding(node.right, data);
      // remove line with error and write your code here
    }
  }
  remove(data) {
    this.root = removing(this.rootTree, data);
    function removing(node, data) {
      if (!node) {
        return null;
      } if (data < node.data) {
        node.left = removing(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removing(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        } if (!node.left) {
          node = node.right;
          return node;
        } if (!node.right) {
          node = node.left;
          return node;
        }
        let maxLeft = node.left;
        while (maxLeft.right) {
          maxLeft = maxLeft.right;
        }
        node.data = maxLeft.data;
        node.left = removing(node.left, maxLeft.data);
        return node;
        // remove line with error and write your code here
      }
    }
  }

  min() {
    if (!this.rootTree) {
      return null;
    }
    let node = this.rootTree;
    while (node.left) {
      node = node.left;
    } return node.data;
  }
  max() {
    if (!this.rootTree) {
      return null;
    }
    let node = this.rootTree;
    while (node.right) {
      node = node.right;
    } return node.data;
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};
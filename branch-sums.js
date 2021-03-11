class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/*
  time  = O(N)
  space = O(N)
*/
function branchSums(root) {
  const sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}

function calculateBranchSums(node, runningSum, sums) {
  if (!node) {
    return;
  }

  const leftNode = node.left;
  const rightNode = node.right;

  const newRunningSum = runningSum + node.value;
  if (!leftNode && !rightNode) {
    // return [...sums, newRunningSum];
    sums.push(newRunningSum);
    return;
  }

  calculateBranchSums(leftNode, newRunningSum, sums);
  calculateBranchSums(rightNode, newRunningSum, sums);
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;

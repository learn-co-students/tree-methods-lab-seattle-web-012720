const inOrder = node => {
  if (node.left) {
    inOrder(node.left)
  }
  console.log(node.data)
  if (node.right) {
    inOrder(node.right)
  }
}

const findOrAdd = (root, newNode) => {
  if (root.data === newNode.data) {
    return true
  } else if (newNode.data < root.data) {
    if (root.left) {
      return findOrAdd(root.left, newNode) 
    } else {
      return root.left = newNode;
    }
  } else {
    if (root.right) {
      return findOrAdd(root.right, newNode)
    } else {
     return root.right = newNode;
    }
  }
}

const max = root => {
  return (root.right ? max(root.right) : root);
}

const min = root => {
  return (root.left ? min(root.left) : root);
}
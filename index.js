function inOrder(currentNode){
    if (!!currentNode.left){
        inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if (!!currentNode.right){
        inOrder(currentNode.right)
    }
}

function findOrAdd(rootNode, newNode){
    if (!rootNode) return newNode
    if (rootNode.data == newNode.data){
        return true
    }
    let currentNode = rootNode
    if (newNode.data < rootNode.data){
        if (!!currentNode.left){
            return findOrAdd(currentNode.left, newNode)
        } else {
            return currentNode.left = newNode
        } 
    } else if (newNode.data > currentNode.data){
        if (!!currentNode.right){
            return findOrAdd(currentNode.right, newNode)
         } else {
            return currentNode.right = newNode
         } 
    }
}

function max(root){
    if (!!root.right){
        return max(root.right)
    } else {
        return root
    }
}

function min(root){
    if (!!root.left){
        return min(root.left)
    } else {
        return root
    }
}


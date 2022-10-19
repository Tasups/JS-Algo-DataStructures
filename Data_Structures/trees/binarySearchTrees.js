// QUEUE DATA STRUCTURE

class Node{
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null
  } 
  insert(value) {
    let newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
      return this
    } else {
      let current = this.root
      while (true) {
        if (value === current.value) return undefined
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode
            return this
          } else {
            current = current.left
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode
            return this
          } else {
            current = current.right
          }
        }
      }
    }
  }
}

let BST = new BinarySearchTree()

BST.insert(10)
console.log(BST.insert(5));
console.log(BST.insert(4));
console.log(BST.insert(7));
console.log(BST.insert(5));
console.log(BST.insert(15));
console.log(BST.insert(12));
console.log(BST.insert(5));
console.log(BST.insert(18));


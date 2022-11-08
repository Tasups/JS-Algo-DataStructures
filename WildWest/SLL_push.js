/*
Implement the following on the SinglyLinkedList class:
push

This function should take in a value and add a node to the end of the SinglyLinkedList. It should return the SinglyLinkedList.

Examples

var singlyLinkedList = new SinglyLinkedList();
 
singlyLinkedList.push(5); // singlyLinkedList
singlyLinkedList.length; // 1
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 5
 
singlyLinkedList.push(10); // singlyLinkedList
*/

//  GOT IT PRETTY EASILY, HOWEVER, I NEED TO REMEMBER TO USE ELSE!!!!!

class Node{
  constructor(val){
    this.val = val
    this.next = null;      
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
    
  push(val){
    let newNode = new Node(val)
    if(!this.head){
      this.head = newNode
      this.tail = newNode
      this.length++
    } else {
        let oldTail = this.tail
        this.tail = newNode
        oldTail.next = newNode
        this.length++
    }
    return this
  }
}

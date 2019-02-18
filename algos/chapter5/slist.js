// function Node(value) {
//   this.val = value;
//   this.next = null;
// }

// function SList(){
//   this.head = null;
// }

// SList.prototype.addFront = function() {

// }

class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class SList {
  constructor() {
    this.head = null;
  }

  addFront(value) {
    const node =  new Node(value);
    node.next = this.head;
    this.head = node;
    return this;
  }

  removeFront() {
    if(!this.head) {
      return this;
    }
    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    return this;
  }
}

const list = new SList();
list.addFront("D").addFront("C").addFront("B").addFront("A").removeFront().removeFront().removeFront().removeFront().removeFront();
console.log(list);
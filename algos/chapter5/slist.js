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
    this.length = 0;
  }

  addFront(value) {
    const node =  new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }

  removeFront() {
    if(!this.head) {
      return this;
    }
    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    return this;
  }
  
  contains(val) {
    let curr = this.head;
    while(curr) {
      if(curr.val == val) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  front() {
    // if(!this.head) {
    //   return null;
    // }
    // return this.head.val;
    return this.head ? this.head.val : null;
  }

  // length() {
  //   let count = 0;
  //   let curr = this.head;
  //   while(curr) {
  //     count++;
  //     curr = curr.next;
  //   }
  //   return count;
  // }

  display() {
    let result = [];
    let curr = this.head;
    while(curr) {
      result.push(curr.val);
      curr = curr.next;
    }
    console.log(result);
    return this;
  }

  max() {
    if(this.head === null) {
      return null;
    }
    let max = this.head.val;
    let curr = this.head;
    while(curr) {
      if(curr.val > max) {
        max = curr.val;
      }
      curr = curr.next;
    }
    return max;
  }
}

const list = new SList();
list.addFront("D").addFront("C").addFront("B").addFront("A").display();
const num_list = new SList();

// console.log(list.contains("B"));
// console.log(list.front());
// console.log(list.length);
console.log(list.max());
// console.log([1, 2, 3, 4].length);
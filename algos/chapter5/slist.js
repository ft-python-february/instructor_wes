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

  min() {
    if(!this.head) {
      return null;
    }
    let min = this.head.val;
    let curr = this.head;
    while(curr) {
      if(curr.val < min) {
        min = curr.val;
      }
      curr = curr.next;
    }
    return min;
  }

  average() {
    if(!this.head) {
      return null;
    }
    let sum = 0;
    let curr = this.head;
    while(curr) {
      sum += curr.val;
      curr = curr.next;
    }
    return sum / this.length;
  }

  removeBack() {
    if(this.head === null) {
      return this;
    }
    if(this.head.next === null) {
      this.head = null;
      return this;
    }
    let curr = this.head;
    while(curr.next.next) {
      curr = curr.next;
    }
    curr.next = null;
    return this;
  }

  append(val, idx) {
    if(idx < 0 || idx > this.length - 1) {
      throw new Error("Index out of range.");
    }
    const node = new Node(val);
    let curr = this.head;
    let currIdx = 0;
    while(curr) {
      if(currIdx < idx) {
        currIdx++;
        curr = curr.next;
      } else {
        // add new node
        const temp = curr.next;
        curr.next = node;
        node.next = temp;
        return this;
      }
    }
  }
}

const list = new SList();
list.addFront("D").addFront("C").addFront("B").addFront("A").display().append("Z", 3).display();
const numList = new SList();
// numList.addFront(5).addFront(-1).addFront(0).display().removeBack().display().removeBack().display().removeBack().display();
// console.log(list.contains("B"));
// console.log(list.front());
// console.log(list.length);
// console.log([1, 2, 3, 4].length);
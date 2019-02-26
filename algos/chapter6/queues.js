
class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class SLQueue{
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }

  // SLQueue: Enqueue
  // Create SLQueue method enqueue(val) to add the given value to end of our queue.Remember, SLQueue uses a singly linked list(not an array)  
  enqueue(val){
    const node = new Node(val);
    if(this.tail === null){
      this.tail = node;
      this.head = node;
      this.length ++;
      return this;
    }
    this.tail.next = node;
    this.tail = node;
    this.length ++;

    return this;
  }
}

const queue = new SLQueue();
console.log(queue.enqueue("A").enqueue("B").enqueue("C"))
console.log(queue.enqueue("D"))

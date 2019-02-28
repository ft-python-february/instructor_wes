
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

  // SLQueue: Front
  // Create SLQueue method front() to return the value at front of our queue, without removing it.
  front(){
    if(!this.head){
      return null;
    }
    return this.head.val;
  }

  // SLQueue: Is Empty
  // Create SLQueue method isEmpty() that returns whether our queue contains no values.
  isEmpty(){
    // if(!this.head){
    //   return true;
    // }
    // return false;
    // return !this.head ? true : false;
    return !this.head;
  }

  // SLQueue: Compare Queues
  // Given two SLQueue objects, create a standalone function that returns whether they are equal.Queues are equal only if they have equal elements in identical order.Allocate no other object, and return the queues in their original condition upon exit.
  compare(otherqueue){
    if (this.length !== otherqueue.length){
      return false;
    }
    let curr = this.head;
    let currother = otherqueue.head;
    while(curr) {
      if (curr.val !== currother.val){
        return false;
      }
      curr = curr.next;
      currother = currother.next;
    }
    return true;
  }
  // SLQueue: Dequeue
  // Create SLQueue method dequeue() to remove and return value at front of queue.Remember, SLQueue uses singly linked list(not array).
  dequeue(){
    if(!this.head){
      throw new Error("Cannot dequeue, queue is empty.");
    }
    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length --;
    return temp.val;
  }

  // SLQueue: Contains
  // Create method contains(val) to return whether given value is found within our queue.
  contains(val){
    let curr = this.head;
    while(curr){
      if (curr.val == val){
        return true;
      }      
      curr = curr.next;
    }
    return false;
  }


  size() {
    return this.length;
  }

}

const queue = new SLQueue();
// console.log(queue.isEmpty());
// console.log(queue.front());
console.log(queue.enqueue("A").enqueue("B").enqueue("C"))
console.log(queue.contains("A"));
console.log(queue.contains("X"));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
// console.log(queue.enqueue("D"))
// console.log(queue.isEmpty());
// const other = new SLQueue
// console.log(other.enqueue("A").enqueue("B").enqueue("C").enqueue('D'))
// console.log(queue.compare(other))
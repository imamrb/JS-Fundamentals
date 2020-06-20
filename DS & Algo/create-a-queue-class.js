/*Data Structures: Create a Queue Class */
class Queue{
  constructor(){
    this.queue = [];
    this.back = 0;
    this.top = 0;
  }
  enqueue(val){
    this.queue[this.top++] = val;
  }
  dequeue(){
    return this.queue[this.back++];
  }
  front(){
    return this.queue[this.back];
  }
  size(){
    return this.top - this.back; 
  }
  isEmpty(){
    return this.back>=this.top;
  }
  print(){
    console.log(this.queue);
  }
}

let q = new Queue();
console.log(q.isEmpty()); //true
q.enqueue(20);
console.log(q.isEmpty()); //false
q.enqueue(30);
console.log(q.dequeue()); //20
console.log(q.front()); //30
console.log(q.size());
q.dequeue();
console.log(q.isEmpty()); //true


//Data Structures: Create a Stack Class

class Stack{
  constructor(){
    this.stack = [];
  }
  print(){
    console.log(this.stack);
  }
  push(val){
    return this.stack.push(val);
  }
  pop(){
    return this.stack.pop();
  }
  peek(){
    return this.stack[this.stack.length -1];
  }
  isEmpty(){
    return this.stack.length === 0;
  }
  clear(){
    return (this.stack.length = 0);
  }
}
let st = new Stack();
console.log(st);
st.push(10);
st.push(20);
st.push(15);
console.log(st); //{ stack: [ 10, 20, 15 ] }
st.pop();
console.log(st.peek()); //20
st.clear();
console.log(st.isEmpty()); //true
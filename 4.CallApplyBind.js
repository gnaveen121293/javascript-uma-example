var person1 = {name : "ByreGowda",age : 28}
var person2 = {name : "sundarkrishna", age : 34}
  
  function sayHello(message ,wish){
  	return message + " " + this.name + " " + this.age+ " " + wish
  }

 // var msg1 = sayHello.bind(person1,"Hello");
 // console.log(msg1())

 // var msg2 = sayHello.bind(person2,"Hello");
 // console.log(msg2())
 var msg1 = sayHello.bind(person1);
 console.log(msg1("hello"))

 var msg2 = sayHello.bind(person2);
 console.log(msg2("hello"))
 

 var msg3 = sayHello.call(person2,"Hello","Be Happy");
 console.log(msg3)

 var msg4 = sayHello.apply(person2,["Hello","Be Happy"]);
 console.log(msg4)
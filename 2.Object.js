/*//Objects instance 

var obj1 =new Object();
console.log(obj1);



//Object literal
var obj2 ={

};
console.log(obj2);


//by method create only using prototype

//var obj3 = Object.create(obj2);
var obj3 = Object.create(null);
console.log(obj3);

//by using constructor function

function person(){

}
var obj4= new person();
console.log(obj4)

*/

//Creating Empty object

//1.using new Object()
var object1 = new Object();

//2.using Object literals
var object2 ={};
//3.
var object3 = Object.create(null);
//4.
function Person(){}
var object4 = new Person()








//object 4th way......adding properties to object
var obj ={

	id :1
};
obj["name"] = "Naveen";
obj.city= "Bangalore";

Object.defineProperty(obj, 'state' ,{
	value : "KA"
})
Object.defineProperty(obj, 'country' ,{
	value : "india"
})
delete obj.city;

// console.log(obj);


// *Modifiying object

//1.preventExtentions()


//1.it will allow to modify existing property
//2.  it will allow deleting existing property
//3.  it woluld not to add new property

var person1 ={
	name: "John" ,age : '35'
}

Object.preventExtensions(person1)
person1.city="Bangalore";

person1.name="Uma";
delete person1.age;
console.log(person1)



//2.seal()


//1.it will allow to modify existing property
//2.  it wouldn't allow deleting existing property
//3.  it woluld not to add new property

var person2 ={
	name: "John" ,age : '35'
}

Object.seal(person2)
person2.city="Bangalore";

person2.name="Uma";
delete person2.age;
console.log(person2)



//3.freeze()


//1.it would n't allow to modify existing property
//2.  it would n't allow deleting existing property
//3.  it woluld n 't to add new property


var person3 ={
	name: "John" ,age : '35'
}

Object.freeze(person3)
person3.city="Bangalore";

person3.name="Uma";
delete person3.age;
console.log(person3)
   



   /* Adding properties and methods to object  */

   var person = {
   	firstName : "scott",
   	lastName : "destnick",
   	fullname : function(){
   		return this.firstName + " " + this.lastName;

   	}
   }
   var firstName=person.firstName;

   var fullName = person.fullname();
   console.log(firstName);
   console.log(fullName);



      /* Get keys from  an objects */

      var customer = {
      	name : "Tuan Bui",
      	city : "bangaladesh",
      	role : "cricketer",
      	age : 37
      }
      var keys = Object.keys(customer);
      console.log(keys)

      var values = Object.values(customer);
      console.log(values)

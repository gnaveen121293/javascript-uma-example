/***************************Creating functions***********/


/**************************1.Regular function***********/

function sayHello(){
	 return "hello World!!"
}
 var message=sayHello();
 console.log(message);

 /**************************2.Anonymous function***********/

 var sayAgain = function(){
 	return "Hello Again !!!"
 }
 console.log(sayAgain())


  /**************************3.Constructor  function***********/

function Women(){
this.firstName= "Sunder";
this.lastName= "Urs"
this.fullName = function(){
	return this.firstName + " " + this.lastName;

			}

		}
		var newPerson = new Women();
		console.log(newPerson.fullName())

/////////////////////////////////////////////////////////////////////////
		function Men(firstName1,lastName1){
				this.firstName1= firstName1;
				this.lastName1= lastName1
			}

				Men.prototype.fullName1 = function(){


	return this.firstName1 + " " + this.lastName1;

			}

		

		var newPerson1 = new Men("pavi","swathi");
		var newPerson2 = new Men("ram","vikram");

		var newPerson3 = new Men("sumo","skathi");

		console.log(newPerson1.fullName1())
		console.log(newPerson2.fullName1())
		console.log(newPerson3.fullName1())




		  /**************************4.self Invoking  function***********/
		  /******they should be at starting function************/

		 // (function(name){
   //        console.log('Hello' + name)
		 // })("Uma")






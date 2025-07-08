class Animal {
	constructor(name, legCount, speaks) {
		this.name = name;
		this.legCount = legCount;
		this.speaks = speaks;
	}

	describe() {
		return `${this.name} has ${this.legCount} legs and says ${this.speaks}`;
	}

	static myType() {
		console.log("Amnimal");
	}
}
/*
let dog={
  name:"dog",
  legcount:4,
  speak:"bow bow",
}
*/
// don't do this instead  do this

// this is  Creating an object of the Animal class
let dog = new Animal("dog", 4, "bow bow");

// Call the describe method on the dog object
console.log(dog.describe());

/* AAB JISKE2 LIKE USE KRNA HAIN...USKA OBECT BANO AUR CALL KRLO AS WE ALREADY HAVE THE BLUEPRINT */

console.log(Animal.myType());
//console.log(Animal.speaks);//will not worrk as it is not function so its need an object to calls.
//==================== Notes ==========================

//classes ==> give out a structure of something which is reusable and of multiple purpose _________just a blue print tha can be used for multiple croeres of time.
//obejct = for particular  kindom intity with alll types of info about it.
/*STATIC CLASSES==> they are not associated with the any kind of obejct they arew ass. to the class itself.
      let class  simliar to the blueprint (naksha) of  constuction of building  
       so obejcts here will be reflecting the building made  on same blueprint in different places and cities.like oyo -> ek naksha ban hoga[class], uski nakshe ke according bhu saare jgh building bne--> like guwahti ,gkp , delhi ...so these are the obejct.
       finaly...STATIC is like the  paper of blueprint 
       jo white hi rhega sbke liye....saare obj k liye 
      
      */

function myOwnSetTimeout(fn, duration) {
	//just a callback
	setTimeout(fn, duration);
}

myOwnSetTimeout(function () {
	//calling out self-made promise
	console.log("hi there");
}, 1000);
//promise is just syntetical sugar for prettier

//Ques. write a program tha would print something and print another thing after 2sec from the privious console

setTimeout(function () {
	console.log("hi there");

	setTimeout(function () {
		console.log("inside the second one");

		setTimeout(function () {
			console.log("inside third");
		}, 3000);
	}, 2000);
}, 1000);
//ugly nesting lets do using promises
//------> next code
//callbacck lead to unnecessary identation ..this is called as cb hell

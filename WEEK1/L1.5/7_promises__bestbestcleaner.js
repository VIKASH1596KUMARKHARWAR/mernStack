/*  Async await -- best way of using promises */

/*REMEMBER JS IS A SINGLE THREADED -- sometime js ask the OS to read file so it tkaes some time and OS read and return  in its own sweet time, till then  thread will be stuck  there for  it(until will not get the response by os it will not go further) but if WE USE ASYNC-AWAIT it will go further  it will   interpreating the other further tasks and after done...in its ideal time it will go back to the pending thread, and do that(ie. read file here)  */
/*ek bar partially run ho gya...on done at ideal   it will done for the rest pending thing*/

//again,just a syntatic sugar,stilll uses cb/promised under the hood
//' .then -syntax' is removed by using the async and await

//asynchronous example ==> readfile,a delibrate timeout, sending a network request
//sending network request- is aynchronous bcz when the data need to render for the server if will not be waiting for the same and stuck ..meanwhile it will done on imporrting the othere required thing like html,css,functions,....related information related to it
function kiratAsyncFunction() {
	let p = new Promise(function (resolve) {
		//do some async logic here
		setTimeout(function () {
			resolve("hi there");
		}, 3000);
	});
	return p;
}

//caller fn mein hi asnc await likha jaata hai
async function main() {
	/*kiratAsyncFunction().then(function (value) {
		console.log(value);
	});
	console.log("hi there1"); //this will  resolved immediatedly and after ssome sec rest will log*/

	//no cb,no .then syntax ... function ke samne async
	let value = await kiratAsyncFunction();
	console.log("hi there1"); //...totally waiting upto jo promise mein timeout diya hain,uske baad hee 'hi there1' print hoga and hi there nhi

	/*it seems like thread is hung there...at the line where await is used..*/
	console.log(value);
}

main();
console.log("after main"); // this printed firest it wil take some sort of time to resolve the promises, so it moves forewad with another  parallel thread,and come back  to the pending theread at ideal condition

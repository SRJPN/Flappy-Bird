// keyPress====================================================================================
var keypress = require('keypress');
 
// make `process.stdin` begin emitting "keypress" events 
keypress(process.stdin);
 
// listen for the "keypress" event 
process.stdin.on('keypress', function (ch, key) {
	if (key && key.ctrl && key.name == 'c') {
    	process.stdin.pause();
	}
	if(key && key.name == 'space')
 		console.log('got "keypress"', key);
 	else
 		console.log("yeehaaaaa")
});
 
process.stdin.setRawMode(true);
process.stdin.resume();
//==============================================================================================





// var keypress = require('keypress');
 
// // make `process.stdin` begin emitting "keypress" events 
// keypress(process.stdin);
 
// // listen for the "keypress" event 
// process.stdin.on('keypress', function (ch, key) {
//   console.log('got "keypress"', key);
//   if (key && key.ctrl && key.name == 'c') {
//     process.stdin.pause();
//   }
// });
 
// process.stdin.setRawMode(true);
// process.stdin.resume();



// // got "keypress" { name: 'space',
// //   ctrl: false,
// //   meta: false,
// //   shift: false,
// //   sequence: ' ' }
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);

secretMessage.pop();
console.log(secretMessage); //At this point, the length is 1 less than the original length.

secretMessage.push('to', 'Program');
console.log(secretMessage); // Added the words 'to' and 'Program'

function changeArr(arr){
  arr[7] = 'right';
}
changeArr(secretMessage);
console.log(secretMessage); //Changed the word 'easily' to the word 'right' 

let first = secretMessage.shift() //Removed the first string

let newLength = secretMessage.unshift('Programming') //Added the string 'Programming' to the beginning of the array

secretMessage.splice(6, 5, 'know');
console.log(secretMessage); //Removed the strings 'get,' 'right,' 'the,' 'first,' 'time,', and replaced them with the single string 'know,'

console.log(secretMessage.join()); //Printing the secret message

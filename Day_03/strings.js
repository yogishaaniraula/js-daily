// String is a sequence of character used to represent text

// create strings
let str = "Avacado";
let str2 ='orange';

console.log(str, str2); // Output : avacado , orange



// to find length of strings
console.log ( str.length); // output : 7
 
console.log ( str2.length); // output : 6



// character position
console.log ( str[0]); // output : A

console.log ( str2 [4]); // output: g


// Template literals

let sentence = `this is a special string`; 
console.log ( sentence) ; // output : this is a special string

let obj = {
     item : "clock",
     price : 45,
}

let output = `The cost of ${obj.item} is Rs. ${obj.price}`;
console.log(output);  // output : The cost of clock is Rs. 45



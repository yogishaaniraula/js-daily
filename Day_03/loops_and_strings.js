// loops are used to execute a program again and again.


// 1. for loop 

// 1.1  print 1 to 7

for ( let count = 0; count <= 7; count ++)
{
    console.log("Yogisha Niraula") // output : Yogisha Niraula ( executed 7 times, couting start from 0-7)
    
}

// 1.2 calculate sum 1 to 5

let sum = 0;
for ( let i =0 ; i <= 5 ;i++ )
{
    sum = sum + i
    

}
console.log("the result = ", sum); // output : the result is 15

console.log ("Your required sum is obtained.")


// 2. while loop

let i = 2;
while ( i <=6)
{
    console.log("Hi, I am yogisha" ); // execute 5 times
    i++;
 
}


// 3. do while loop

let j = 1;
do {
    console.log("how are you?"); // executes 5 times
    j++;
} while (j<=5);


// 4. for -of loop 

let str = "javascript"
let size =0;


for ( let item of str)
{
    console.log ("item =",item);
    size ++;
}

 console.log( "string size =", size) // output : execute all the items in the str , string size = 10


 // for in loop
 
 let student = {
    name: "yogisha niraula",
    age: 21,
    gpa: 3.45,
    isPass: true,
    
 }

 for ( let key in student)
 {
    console.log ( key ) // output : execute keys of the student i.e name , age, gpa, isPass
    
    console.log ( "key=", key, "value=", student[key]); // execute all the keys and their respective values
 }




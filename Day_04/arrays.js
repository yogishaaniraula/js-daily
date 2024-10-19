// Loooping over an array


// for loop :
let items = ["lipbalm", "clock", "board", "chair", "table","pencil case"]

for ( let indx =0; indx < items.length; indx++ )
{
    console.log( items [indx]) // executes all the items of the list
}



// for of 
for (let item of items)
{
    console.log( item.toUpperCase()) // executes items in upper case.
}



// average marks

let marks = [34, 46, 67, 89,35]

let sum = 0 ;

for (let val of marks)
{
    sum = sum + val;
}
console.log (sum)
let average = sum / marks.length;
console.log (`average marks of the class = ${average}`);
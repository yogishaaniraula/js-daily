function myfunction()
{
    console.log("welcome to my github");
    console.log("this is yogisha niraula");
}

myfunction();


function myfunction(msg)
{
    // inside function definition :parameter
    console.log(msg)
}

myfunction("i love nepal") ; // inside function call : argument


// function of multiple numbers
function mul(x,y)
{
    console.log(x*y);
}

mul (4,5) // output : 20


// function returns value
function sum(x,y)
{
    s = x + y;
    return s;
}

let result = sum (3,4);
console.log(result); // output: 7


// arrow functions
const arrowadd = ( g,h) => {
    console.log(g+h)
}

arrowadd ( 2,3)// output : 5


// multiplication 

let arrowmul = (j,h) =>{
    console.log(j*h)
}

arrowmul (3,9) // output : 27


const printHello = () => {
    console.log ("hello");
}

printHello() // putput: hello



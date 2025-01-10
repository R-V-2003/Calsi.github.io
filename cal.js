
let display = document.querySelector('.display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}



























// console.log("hi....")
// // a = "*"
// // for ( i=1;i<=10;i++)
// //     {
// //    i * ( console.log(a))
// //     }
// var c = (prompt("enter your name"))
// function n (name){
//     console.log("hey " + name + " chutiye")
//     console.log("hey " + name + " lodu")
//     console.log("hey " + name + " gandu")
// } 
// function add (f,s){
//     r = f+s ;
//     document.getElementById('result').innerText = `${r}`;
    

// }
// // var sum = add(5,6)
// // n(c)
// // console.log("the sum is "+ sum)
// // document.getElementById("result").innerHTML = "";
// var f = (prompt("enter the first number"))
// var o = (prompt("enter the operator"))
// var s = (prompt("enter the second number"))

// if (o==='+');{
//     add(f,s);
// }

    // if (o === '+') {
    //     let a = (f+s);
    //     // console.log((Math.random() * 10))
    //     document.getElementsById("result").innerHTML = 'a';
    // }
    // else if (o === '-') {
    //     console.log(f-s)
    //     console.log((Math.random() * 10))
    // }
    // else if (o === '*') {
    //     console.log(s*f)
    //     console.log((Math.random() * 10))
    // }
    // else if (o === '/') {
    //     console.log(f/s)
    //     console.log((Math.random() * 10))
    // }
    // else if (o === '**') {
    //     console.log(f**s)
    //     console.log((Math.random() * 10))
    // }
    // else {
    //     console.log("please enter a valid operator")
    // }


// function operation(n1,op,n2){

// // return ("n1" op "n2")
// console.log(fos)


// }
// result=operation(f,o,s)
// console.log(result)

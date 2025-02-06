let num 
let age 
let user 
const userNum = document.getElementById("userNum") 
const userAge = document.getElementById("userAge") 
const userName = document.getElementById("userName") 
const button1 = document.getElementById("button1") 
const button2 = document.getElementById("button2") 
const button3 = document.getElementById("button3") 

button1.onclick = function numerical(){ 
    num = userNum.value; 
    num = Number(num) 

    // Challenge 3: B 
    if (num%2===0){ 
        console.log(`${num} is even.`) 
    } else{ 
        console.log(`${num} is not even.`) 
    } 

    // Challenge 1: C 
    if (num<0){ 
        console.log(`${num} is a negative number`) 
    } else if (num>0){ 
        console.log(`${num} is positive`) 
    } else { 
        console.log(`${num} is equal to 0`) 
    } 
} 


// Challenge 1: B 
button2.onclick = function Age(){ 
    age = userAge.value; 
    age = Number(age) 
    if (age >= 18){ 
        console.log("You are eligible to vote!!") 
    } else{ 
        console.log("You are not eligible to. Wait some more years:(") 
    } 
} 

     
button3.onclick = function greeting(){ 
    user = userName.value; 
    user = String(user) 

    //Challenge 3: A 
    console.log(`Hello, ${user}`) 

    //Challenge 3: C 
    // for(let i=;)

} 


// Challenge 1: A 
let number = 10 
if (number%2==0){ 
    console.log(`${number} is even`) 
} else{
    console.log(`${number} is odd`) 
} 


//Challenge 2: A 

for(let i=1;i < 11; i++){ 
    console.log(i) 
}    


//Challenge 2: B 
let i=1 
while(i<6){ 
    console.log(i) 
    i++ 
} 


// Challenge 2: C 
//code 
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
    console.log("Challenge 3: B") 
    if (num%2===0){  
        console.log(`${num} is even.`)  
    } else{  
        console.log(`${num} is not even.`)  
    }  


    // Challenge 1: C 
    console.log("Challenge 1: C") 
    if (num<0){  
        console.log(`${num} is a negative number`)    
    } else if (num>0){  
        console.log(`${num} is positive`)  
    } else {  
        console.log(`${num} is equal to 0`)  
    }  


    // Challenge 2: C  
    console.log("Challenge 2: C") 
    let a = 1 
    let b = 1 
    num= -num  
    while(a<=num){ 
        b*=a 
        a++ 
        console.log(b) 
    }  

    // Challenge 4: C 
    console.log("Challenge 4: C") 
    let array = [num,-num,num/2,num/36]
    let highest=0
    for(let i=0; i<3; i++){ 
        if(array[i]>highest){
            console.log("hi")
            highest = array[i]
        } else{
            continue
        }
        
    } 
    console.log(highest)
}  


// Challenge 1: B  
console.log("Challenge 1: B") 
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
    console.log("Challenge 3: A") 
    console.log(`Hello, ${user}`)  


    // Challenge 3: C  
    console.log("Challenge 3: C") 
    vowel = ["a","e","i","o","u","A","E","I","O","U"] 
    amount = 0 
    for(let i=0; i <= 10; i++){ 
        if(user.includes(vowel[i])){ 
            amount++ 
        } 
    } 
    console.log(amount) 
}  


// Challenge 1: A  
console.log("Challenge 1: A") 
let number = 10  
if (number%2==0){  
    console.log(`${number} is odd`)  
} else{ 
    console.log(`${number} is odd`)  
}  


// Challenge 2: A  
console.log("Challenge 2: A") 
for(let i=1;i <= 11; i++){  
    console.log(i)  
}     


// Challenge 2: B 
console.log("Challenge 2: B")  
let i=1  
while(i<6){ 
    i++  
    console.log(i)  
}  
 

// Challenge 4: A 
console.log("Challenge 4: A") 
let list = ["apple","banana","watermelon","mango","star"] 
for(let i=0; i<5;i++){ 
    console.log(list[i]) 
} 


// Challenge 4: B 
console.log("Challenge 4: B") 
let students = { 
    "Bianca":26, "Marcus":9, "Angel":77 
} 
for (let key in students){ 
    console.log(`${key} has a ${students[key]} in the grade book.`) 
} 

 





 

 
// Practice exercise 5.1
const maxValue = 5;
 const randomNum = Math.floor(Math.random() * maxValue) + 1;
 let correct = false;
  
 while(!correct) {
     let guess = prompt("Guess a Number 1 - " + maxValue);
    guess = Number(guess);
    if(guess === randomNum){
        correct = true;
        console.log("You got it" + randomNum)
    
    }
    else if(guess > randomNum){
        console.log("too high")
    }
    else{
        console.log("too low")
    }
 }
//  Practice exercise 5.2
let counter = 0;
let a = 1;

 do { 
    console.log(counter);
    counter += a;
 }
 while (counter <= 100);
 
//  Practice exercise 5.3
let myWork = [];
for(let x = 1; x < 10 ; x++) {
    let stat = x % 2 ? true : false;
    let temp = {
    name: `Lesson ${x}`, status: stat
    };
    myWork.push(temp)
}
console.log(myWork)

// Practice exercise 5.4

let myTable = [];
let row = 5;
let col = 11;
let count = 0;
for(let x = 0; x < row ; x++){
    let temp = []
    for (let y = 0; y < col; y++){
        count++;
        myTable.push(count);
    }
    myTable.push(temp);
}
console.table(myTable);
// Practice exercise 5.5
/*const grid = [];
const cell = 64;
let counter = 0;
let row;
for(let x = 0; x < cell ; x++){
    if(counter % 2 == 0){
    if(row!=undefined){
        grid.push(row)
    }
    row = []
}
counter++
let temp = counter;
 row.push(temp);
}
console.table(grid);*/
// Practice exercise 5.6
/*let array = [];
for(x = 0; x < 10; x++){
    array.push(x+1)
}
console.log(array)*/
//  Practice exercise 5.7
/*const obj = {
 a: 1,
 b: 2,
 c: 3
};
for(let pro in obj){
    console.log(pro, obj[pro])
}
const array = ["a" ,"b" , "c"]    
for(let w = 0; w < array.length ; w++){
    console.log(w, array[w])
}*/
// Practice exercise 5.8
// let output = "";
// let num = 4
// for(x = 1; x < 10; x++){
//     if(x==num){
//         continue
//     }
//     output += 1
// }
// console.log(output);

// Chapter project
// Math multiplication table
let array = [];
let num = 10;
for(x = 0; x < num; x++){
    const temp = []
    for(let y = 0; y<num; y++){
        temp.push(x*y);
        }
        array.push(temp);
       }
       console.table(array);



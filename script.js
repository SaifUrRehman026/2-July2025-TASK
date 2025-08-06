                            // sum 2 numbersn Task1

// const num1=56;
// const num2=67;

//  function add(){
//     return  num1+num2;
// }
// console.log(add());


// show number on page

//  const num1=56;
// const num2=67;

//  function add(){
//     document.getElementById("demo").innerHTML= num1+num2;
// }
// add();





                            //  EVEN Odd numbers  Task2
// const num=prompt("enter the number");
// if(num % 2 ==0){
//     console.log("number even");
// }else{
//     console.log("number is odd ");
// }
 

// even odd on page 

// function chknum(){
//     const num=prompt("enter the number");
// if(num % 2 ==0){
//   document.getElementById("demo").innerHTML="Number Is Even";
// }else{
//      document.getElementById("demo").innerHTML="Number Is Odd";
// }
// }
// chknum();






                            // print 1 to 100 using loop  Task3
     // number in console  

// function showNum(){
// for(let i=1; i<=100;i++){
// console.log(i);
// }

// }
// showNum();



// show number om page 

// function showNum(){
//     var res="";
// for(let i=1; i<=100; i++){
//     res =res+i +"<br>";
// }
//  document.getElementById("demo").innerHTML=res;
// }
// showNum();




                            // print 5 table  Task4
function table(){
const num=5;
var w="";
for(let x=1; x<=10; x++){
    const result=num*x +"<br>";
    
   w +=`${num} * ${x} = ${result} `;
    // document.writeln(`${num} * ${x} = ${result}`);
   
}
document.getElementById("demo").innerHTML=w;
}
table();






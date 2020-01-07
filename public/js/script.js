/*setTimeout(function(){
    document.write("Goodbye...")
    /*document.getElementById("header").innerHTML = "JavaScript 101";*/
/*},2000);*/

/*'use strict';

gbNumber = 30.1
if (true){
    console.log(gbNumber)
}*/

/*var total = 0
for(let i=0;i<10;i==){
    total += i
}
console.log(total)*/
/*var x=3;
console.log(x===undefined);*/

/*var myvar = 'myvar';
(function(){
    console.log("myvar: " +myvar);
    var myvar ='local var'
})
setTimeout(function(){
    console.log(myvar);
},2000);*/

/*function foo(){
    console.log('bar');
}
foo();*/

/*var baz = function(x){
    console.log("x:"+x)
}
baz(100);

let foobar = baz;
foobar(99);*/
/*const pi= {value:3.14};
console.log(2*pi.value);
pi.value = 10
console.log(pi.value*2);*/

/*var colors={
    red :'red',
    green:'green',
    blue:'blue'
}
for (let color in colors){
    console.log(color + "is" + colors[color]);
}

var favColor = ['red','white','black'];

for(let color of favColor){
    console.log(color);
}*/

/*function plus(x){
    var add = function(y){
        return x+y;
    }
    return add;

}

var p2=plus(2);
console.log(p2(10));*/

setTimeout(function(){
    console.log("wait");
},2000)

console.log('not wait')
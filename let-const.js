// 变量和常量
let r=2;
r = 4;
console.log(r)

const pi = 3.1415926;
pi = 10;
// 块级作用域   let和const只作用于块级作用域中
if(true){
    var aaa = 1;
}
console.log(aaa); // 1
if(true){
    let aaa = 1;
}
console.log(aaa);  // aaa is not defined
if(true){
    const aaa = 1;
}
console.log(aaa); // aaa is not defined
// 块级作用域2
let arr = [1,2,3,4];
for(var i=0, iLength = arr.length; i<iLength; i++){
    
}
console.log(i)
// 不存在变量提升
console.log(foo);
var foo = 1; // undefind
console.log(bar);
let bar = 1;
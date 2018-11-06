// 箭头函数
let value = 2;
let double = x => 2*x;
let treble = x =>{
    return 3*x;
}
console.log("double",double(value))
console.log("treble",treble(value))
// 箭头函数没有独立作用域
var obj = {
    commonFn = function(){
        console.log(this);
    },
    arrowFn:()=>{
        console.log(this);
    }
}
obj.commonFn(); //this指向obj作用域
obj.arrowFn(); //this 指向obj所在的作用域，window
// 不能用作构造函数
let Animal = function(){

};
let animal = new Animal();

let Animal = () =>{

}
let animal = new Animal();
// 箭头函数没有prototype
let commonFn = function(){

}
let errorFn = () =>{}
console.log(commonFn.prototype)
console.log(errorFn.prototype)
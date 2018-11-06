// class constructor（新添加）（再来一个）（我只修改class.js）
class Animal {
    constructor(name) { //构造函数
        this.name = name
    }
    getName() {
        return this.name
    }
}
let animal = new Animal("animal test");
console.log(animal.getName());
// 类的继承
class Animal {
    constructor(name) { //构造函数
        this.name = "animal"
    }
    getName() {
        return this.name
    }
}

class Cat extends Animal {
    constructor() {
        super();
        this.name = "cat";
    }
}
// new Cat();
let animal = new Animal();
let cat = new Cat();
console.log(animal.getName());
console.log(cat.getName());

// 对象的写法
var name = "Rosen",
    age = 18;
var obj = {
    name:name,
    age:age,
    getName:function(){
        return this.name;
    },
    getAge:function(){
        return this.age;
    }
}

let name = "Rosen",
    age = 18;
let obj = {
    name,
    age,
    // 对象方法简写
    getName(){
        return this.name
    },
    // 表达式作为属性名或方法名
    ['get'+'Age'](){
        return this.age
    }
}
Object.keys(obj); 
Object.assign({a:1},{b:2});// 合并对象

// 栗子
function Task(id){
    this.id = id;
}
Task.prototype.status = "STOPPED";
Task.prototype.execute = function(args){
    return "execute task_"+this.id+"["+this.status+"]:"+args;
}
var task1 = new Task(1);
var task2 = new Task(2);
task1.status = "ACTIVE";
task2.status = "STARTING";

console.log(task1.execute("啊啊啊"));
console.log(task2.execute("呀呀呀"));
// promise结构
new Promise((resolve, reject) => {
    // 异步函数
    $.ajax({
        url: 'http://happymmall.com/user/get_user_info.do',
        type: 'get',
        success(res) {
            resolve(res)
        },
        error(err) {
            reject(err)
        }
    })
}).then((res) => {
    console.log("success:", res)
}, (err) => {
    console.log("err,", err)
});
// 链式promise
var promiseFn1 = new Promise((resolve, reject) => {
    // 异步函数
    $.ajax({
        url: 'http://happymmall.com/user/get_user_info.do',
        type: 'get',
        success(res) {
            resolve(res)
        },
        error(err) {
            reject(err)
        }
    })
});
var promiseFn2 = new Promise((resolve, reject) => {
    // 异步函数
    $.ajax({
        url: 'http://happymmall.com/cart/get_cart_product.do',
        type: 'get',
        success(res) {
            resolve(res)
        },
        error(err) {
            reject(err)
        }
    })
});
promiseFn1.then(()=>{
    console.log("Fn2")
    return promiseFn2;
}).then(()=>{
    console.log("Fn2")
})
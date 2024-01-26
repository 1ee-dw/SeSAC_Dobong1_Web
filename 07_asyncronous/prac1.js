/* Callback
function call(name, cb) {
    setTimeout(function () {
        console.log(name);
        cb(name);
    }, 1000);
}

function back(cb) {
    setTimeout(function () {
        console.log("back");
        cb("back");
    }, 1000);
}

function hell(cb) {
    setTimeout(function () {
        cb("callback hell");
    }, 1000);
}

// call -> back -> hell 순서로 실행
call("kim", function (name) {
    console.log(name + "반가워");
    back(function (txt) {
        console.log(txt + "을 실행했구나");
        hell(function (message) {
            console.log("여기는 " + message);
        });
    });
});
 */
/*  Promise
function call(name) {
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            console.log(name);
            resolve(name)
        }, 1000);
    })
}

function back() {
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            console.log("back");
            resolve("back");
        }, 1000);
    })
}

function hell() {
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            resolve("callback hell");
        }, 1000);
    })
}

call('Hey').then(function(name) {
    console.log(`${name}, 반가워`);
    return back();
}).then(function(content) {
    console.log(`${content}을 실행했구나`);
    return hell();
}).then(function(message) {
    console.log(`여기는 ${message}`);
})
*/

function call(name) {
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            console.log(name);
            resolve(name);
        }, 1000);
    })
}

function back() {
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            console.log("back");
            resolve("back");
        }, 1000);
    })
}

function hell() {
    return new Promise(function(resolve,reject){
        setTimeout(function () {
            resolve("callback hell");
        }, 1000);
    })
}

async function execute() {
    const name = await call(`Hey`);
    console.log(`${name}, 반가워`)
    const content = await back();
    console.log(`${content}을 실행했구나`);
    const message = await hell();
    console.log(`여기는 ${message}`);
}

execute();
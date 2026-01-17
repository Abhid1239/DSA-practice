function debounce(time, fn) {
    let timer = null;
    return function (...args) {
        const abc = this;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.call(abc, ...args)
        }, time)
    }
}

// const { exec } = require("child_process");

function executer(a) {
    console.log(this.name);
}
let a = 1;

const obj = {
    name: "pranay",
    debouneCall: executer
}


executer();
executer.call(obj);
const appleExecuter = executer.bind(obj,);
// obj.debouneCall();
appleExecuter()
// call
// apply
// bind
// obj.debouneCall

// let abc = setInterval(() => {
//     obj.debouneCall(a);
//     a++;
//     if (a == 5) clearInterval(abc);
// }, 5)



fetch("abc", (req, res) => {
    Response.body.forEach(key => {

    })
})
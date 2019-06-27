let path = require("path")
__dirname;
console.log(__dirname);
let r = path.resolve(__dirname, "app.js"); //了解 resolve 可以多拼接一层
let r1 = path.join(__dirname, "app.js")
console.log(r)
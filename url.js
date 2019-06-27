let url = require("url")
let str = "http://www.abc.com/user?name=1&age=3" //定义了一个地址
let result = url.parse(str, true)
    // 加true的属性 会把查询字符串转成对象
console.log(result)
    // protocol 'http:' 协议
    // host 域名 带端口号
    // hostname： 域名 'www.abc.com'
    // search  带问号的查询参数
    // query  不带问号的查询参数
    // pathname访问的路径
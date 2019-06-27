let path = require("path")
let fs = require("fs")
let fsPromise = fs.promises;
let filename = path.join(__dirname, 'good.json')
fsPromise.readFile(path.join(__dirname, 'good.json'), 'utf-8').then(data => {
    // 读出来的是个json  转成能操作的对象
    let data = JSON.parse(data)
    data.push({
            id: 2,
            name: "橘子"
        })
        // 写入数据的时候要把对象转成json
    fsPromise.writeFile(filename, JSON.stringify(data), "utf-8")
})
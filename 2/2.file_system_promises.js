const fs = require ("node:fs/promises")
// const stats= fs.statSync("./first_file.txt")
// console.log(
//     stats.isFile(),
//     stats.isDirectory(),
//     stats.isSymbolicLink(),
//     stats.size

// )
fs.readFile("./first_file.txt", "utf-8").then (text=>{
    console.log(text)
})
console.log("---->Texto intermedio")


fs.readFile("./second_file.txt", "utf-8").then(text=>{
    console.log(text)
})




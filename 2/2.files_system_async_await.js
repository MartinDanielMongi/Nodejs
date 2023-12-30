const {readFile} = require ("node:fs/promises")

;(
    async()=>{
    const text = await readFile("./first_file.txt", "utf-8")
    console.log(text)
    
    console.log("---->Texto intermedio")
    
    const second_text = await readFile("./second_file.txt", "utf-8")
    console.log(second_text)}
)()

// const text = await readFile("./first_file.txt", "utf.8")
// console.log(text)

// console.log("---->Texto intermedio")

// const second_text = await readFile("./first_file.txt", "utf.8")
// console.log(second_text)

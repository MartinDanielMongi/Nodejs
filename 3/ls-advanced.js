const { stat } = require("node:fs")
const path= require ("node:path")
const fs =require("node:fs/promises")
const folder = process.argv[2] ?? '.'

async function ls (folder){
    let files
    try{
    files= await fs.readdir(folder)
    }catch{
        console.error("No se pudo leer el directorio")
        process.exit(1)
    }
    const filePromises = files.map(async file =>{
        const filePath= path.join (folder, file)
        let stats
        try{
            stats =await fs.stat(filePath)
        }catch{
            console.error("No se pudo leerel archivo")
            process.exit(1)
        }

        const isDirectory =stats.isDirectory()
        const fileType = isDirectory ? "d": "-"
        const fileSize = stats.size
        const fileModified = stats.mtime.toLocaleString()
        
        return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padEnd(10)} ${fileModified}`;
    })
    const filesInfo = await Promise.all(filePromises)
    filesInfo.forEach(filesInfo => {console.log(filesInfo)
    });
}

    ls (folder)
const fs = require("fs")

const newDir = "./new"


// Delete directory if exist
if (!fs.existsSync(newDir)) {
    fs.mkdir(newDir, (error) => {
        if (error) {
            throw error
        }
        console.log("directorio creado")
    })
}


// create a directory if it does no exist
if (fs.existsSync(newDir)) {
    fs.rmdir(newDir, (error) => {
        if (error) {
            throw error
        }
        console.log("directorio borrado")
    })
}

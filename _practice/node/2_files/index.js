const fsPromises = require("fs").promises
const path = require("path")

// https://nodejs.org/api/fs.html
// https://www.tutorialkart.com/nodejs/node-fs/

const fileOps = async () => {
    try {
        // Get test text file
        const data = await fsPromises.readFile(
            path.join(__dirname, "txt-files", "starter.txt"),
            "utf-8"
        )
        console.log(data)

        // delete a file
        // await fsPromises.unlink(path.join(__dirname, "txt-files", "starter.txt"), data)

        // create, update and rename new file
        await fsPromises.writeFile(
            path.join(__dirname, "txt-files", "write.txt"),
            data
        )
        await fsPromises.appendFile(
            path.join(__dirname, "txt-files", "write.txt"),
            "\n\nHola, appendido mas >:v"
        )
        await fsPromises.rename(
            path.join(__dirname, "txt-files", "write.txt"),
            path.join(__dirname, "txt-files", "promise-complete.txt")
        )

        // get ne file data
        const newData = await fsPromises.readFile(
            path.join(__dirname, "txt-files", "promise-complete.txt"),
            "utf-8"
        )
        console.log(newData)
    } catch (error) {
        console.log(error)
    }
}

fileOps()

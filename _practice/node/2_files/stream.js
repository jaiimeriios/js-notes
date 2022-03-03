
// https://nodejs.org/api/stream.html
// https://nodesource.com/blog/understanding-streams-in-nodejs/

const fs = require("fs")

const rs = fs.createReadStream("./txt-files/lorem.txt", { encoding: "utf-8" })

const ws = fs.createWriteStream("./txt-files/new-lorem.txt")

rs.pipe(ws)
// lo mismo pero mas lento
// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk)
// })

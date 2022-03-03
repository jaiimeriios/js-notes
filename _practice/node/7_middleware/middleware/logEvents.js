// npm modules
const { format } = require("date-fns")
const { v4: uuid } = require("uuid")

// node core modules
const fs = require("fs")
const fsPromises = require("fs").promises
const path = require("path")

const logEvents = async (message, logName) => {
    const dateTime = `${format(new Date(), "yyyy MM dd\tHH:mm:ss")}`
    const logItem = `${dateTime}  ${uuid()}  ${message}`
    console.log(logItem)
    try {
        if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
            await fsPromises.mkdir(path.join(__dirname, "logs"))
        }
        await fsPromises.appendFile(path.join(__dirname, "..", "logs", logName), logItem)
    } catch (e) {
        console.log(e)
    }
}

const logger = (req, res, next) => {
    logEvents(`${req.method}  ${req.headers.origin}  ${req.url}\n`, "request-txt")
    console.log(`${req.method} ${req.path}`)
    next()
}

module.exports = { logEvents, logger }

const logEvents = require("./logEvents")

const EventEmitter = require("events")

class Emitter extends EventEmitter {}

// initialize object
const emitter = new Emitter()

// add listener for the log event
emitter.on("log", (msg) => logEvents(msg))

setTimeout(() => {
    // emit event
    emitter.emit("log", "Log Event Emitter :v\n")
}, 1500)

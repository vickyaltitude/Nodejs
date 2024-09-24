let logEvents = require('./addEvents');
let EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

const myEmitter = new MyEmitter();

myEmitter.on('log',(message)=>{
    logEvents(message)
})
myEmitter.emit('log','one event occured');
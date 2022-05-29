// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
//v]An event emitter is a pattern that listens to a named event, fires a callback, then emits that event with a value. 
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})

customEmitter.emit('response', 'john', 34)

const EventEmitter = require('events');
const customEmitter = new EventEmitter();
const event = 'response'
customEmitter.on(event, () => {
    console.log(`a ${event} event occurs `)
});
customEmitter.on('event', () => {
    console.log(`a  event occurs `)
});
customEmitter.emit('event');
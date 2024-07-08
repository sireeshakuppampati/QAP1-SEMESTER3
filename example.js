// Import the events module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Define a custom event
myEmitter.on('event', () => {
  console.log('An event occurred!');
});

// Trigger the custom event
myEmitter.emit('event');

// Define another event with a parameter
myEmitter.on('status', (code, msg) => {
  console.log(`Status code: ${code}, Message: ${msg}`);
});

// Trigger the event with a parameter
myEmitter.emit('status', 200, 'OK');

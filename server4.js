/**
 * event emitter sample
 */

class EventEmitter {
  constructor() {
    this.events = {};
  }

  // string, function
  on(eventName, callback) {
    if(typeof callback === 'function') {
      if (Array.isArray(this.events[eventName])) {
        this.events[eventName].push(callback);
      } else {
        this.events[eventName] = [callback];
      }
    }
  }

  emit(eventName, ...rest) {
    if(Array.isArray(this.events[eventName])) {
      this.events[eventName].forEach((callback) => {
        callback(...rest);
      })
      // this.events[eventName](...rest) // spread the rest values to the function call
      return;
    }
    throw new Error(`Event ${eventName} not found`);
  }
}

const counter = new EventEmitter();

counter.on('increment', (a, b, c) => {
  console.log('Increment', a, b, c);
})

counter.on('increment', (a) => {
  console.log('2nd Increment', a);
})

counter.emit('increment', 2,3,4)
counter.emit('decrement')

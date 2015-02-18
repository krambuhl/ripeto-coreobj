var EventEmitter = require('event-emitter');
var inherits = require('inherits');

function CoreObj(el, opts) {
  if (this.setup) this.setup.call(this, opts);
}

inherits(CoreObj, EventEmitter);

CoreObj.extend = require('simpler-extend');

CoreObj.prototype.set = function(key, val) {
  this[key] = val;
  this.emit('set:' + key, val, key);
  return this;
};

CoreObj.prototype.get = function(key) {
  return this[key];
};

module.exports = CoreObj;
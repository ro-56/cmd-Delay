"use strict";

var Service, Characteristic;

module.exports = function(homebridge) {
 
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  
  homebridge.registerAccessory("homebridge-delay-switch", "DelaySwitch", DelaySwitch);
}

function DelaySwitch(log, config) {
  this.log = log;
  this.name = config.name;
  this.delayTime = config.delay;
  this.Timer;
  this._service = new Service.Switch(this.name);
  this._service.getCharacteristic(Characteristic.On)
    .on('set', this._setOn.bind(this));
  this.on_cmd = config.on_cmd || "";
  this.state_cmd = config.state_cmd || "";
  this.manufacturer = config.manufacturer;
  this.model = config.model;
  this.serial = config.serial;
}

DelaySwitch.prototype.getServices = function() {
  return [this._service];
}

DelaySwitch.prototype._setOn = function(on, callback) {
 this.log("Setting switch to " + on);
 if (on == 1) {
    clearTimeout(this.Timer);
    this.Timer = setTimeout(function() {
      this._service.getCharacteristic(Characteristic.On).setValue(false, undefined)
      
      var cmd = this.on_cmd;
      var that = this;
      if (cmd) {
      exec(cmd, function(error, stdout, stderr) {
        // Error detection
        if (error) {
          that.log(stderr);
          that.log("Failed to turn on"));
        } else {
          that.log("Turned on"));
          error = null;
        }
      });
      
    }.bind(this), this.delayTime);
  }
  else { 
   clearTimeout(this.Timer);
  }
  
  callback();
}

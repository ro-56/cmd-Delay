"use strict";

var exec = require("child_process").exec;
var Service, Characteristic;

module.exports = function(homebridge) {
 
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;
  
  homebridge.registerAccessory("homebridge-cmd-delay", "cmdDelay", CMDDelay);
}

function CMDDelay(log, config) {
  this.log = log;
  this.name = config.name;
  this.delayTime = config.delay;
  this.Timer;
  this._service = new Service.Switch(this.name);
  this._service.getCharacteristic(Characteristic.On)
    .on('set', this._setOn.bind(this));
  this.on_cmd = config.cmd || "";
  this.manufacturer = config.manufacturer;
  this.model = config.model;
  this.serial = config.serial;
}

CMDDelay.prototype.getServices = function() {
  return [this._service];
}

CMDDelay.prototype._setOn = function(on, callback) {
 this.log("Setting switch to " + on);
 if (on == 1) {
    clearTimeout(this.Timer);
  
  var cmd = this.on_cmd;
      var that = this;
      if (cmd) {
      exec(cmd, function(error, stdout, stderr) {
      });
      }
  
    this.Timer = setTimeout(function() {
      this._service.getCharacteristic(Characteristic.On).setValue(false, undefined)
    }.bind(this), this.delayTime);
    }
   else { 
   clearTimeout(this.Timer);
  }
  
  callback();
}

# "cmd-Delay Switches" Plugin

## Example config.json:

 ```
  "accessories": [
    {
       "accessory": "cmdDelay",
       "name" : "Delay Switch",
       "cmd": "echo 'Hi' > test.txt",
       "delay": 5000,
       "manufacturer": "XXXXXX",
       "model": "RPI-10000A",
       "serial": "0002-0001"
    }
]
```

## Why do we need this plugin?


## How it works

Basically, all you need to do is:
1. Set the desired delay time in the config file (in milliseconds).
2. Use this switch in any scene or automation.
3. Set an automation to trigger when this switch is turned off.

## How to install

 ```sudo npm install -g https://github.com/ro-56/homebridge-cmd-Delay.git```
 
## Credits
This plugin was forked from and inspired by homebridge-delay-switch by nitaybz and by homebridge-cmdswitch by luisiam.

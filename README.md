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

## How it works

1. Set the command to execute.
2. Set the desired delay time in the config file (in milliseconds).

## How to install

 ```sudo npm install -g https://github.com/ro-56/homebridge-cmd-Delay.git```
 
## Credits
This plugin was forked from and inspired by homebridge-delay-switch by nitaybz and by homebridge-cmdswitch by luisiam.

# plugin_teste

Delay in miliseconds.



{
   "bridge": {
   	"name": "Homebridge",
   	"username": "C1:38:5A:AC:39:30",
   	"port": 51826,
   	"pin": "031-45-154",
   	"model": "RPI-10000A",
   	"manufacturer": "XXXXXX"
   	
   },
   "description": "This is an example configuration for the Everything Homebridge plugin",
   "accessories": [
  {
   		"accessory": "cmdDelay",
  		"name" : "Delay Switch",
   		"cmd": "echo 'Hi' > test.txt",
   		"delay": 5000,
		  "manufacturer": "XXXXXX",
   		"model": "RPI-10000A",
   		"serial": "0002-0001"
	}],
  
  "platforms": []
}

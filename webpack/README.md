# JS-SDK-samples/NodeJS
Sample project to demonstrate how to use Backendless JS-SDK with Nodejs

###RT-Data
It demonstrates how to use simple RealTime Collection 

#####Running:

`node ./src/rt-data.js`

#####Output:

````bash
Valodyas-MBP-2:nodejs valodyaupirov$ node ./src/rt-data.js 
Connect_RT_Event: []
savedObject: {"created":1586854529000,"name":"Bob","___class":"Persons","ownerId":null,"updated":null,"objectId":"9572D1AF-63DC-0083-FF8B-625D901FCC00"}
RT_Event:CREATE {"created":1586854529000,"name":"Bob","___class":"Persons","ownerId":null,"updated":null,"objectId":"9572D1AF-63DC-0083-FF8B-625D901FCC00"}
updatedObject: {"created":1586854529000,"name":"Nick","___class":"Persons","ownerId":null,"updated":1586854530000,"objectId":"9572D1AF-63DC-0083-FF8B-625D901FCC00"}
RT_Event:UPDATE {"created":1586854529000,"name":"Nick","___class":"Persons","ownerId":null,"updated":1586854530000,"objectId":"9572D1AF-63DC-0083-FF8B-625D901FCC00"}
deleteObject: {"created":1586854529000,"name":"Nick","___class":"Persons","ownerId":null,"updated":1586854530000,"objectId":"9572D1AF-63DC-0083-FF8B-625D901FCC00"}
RT_Event:DELETE {"objectId":"9572D1AF-63DC-0083-FF8B-625D901FCC00"}
````





/* 
Built In Modules In Node

    OS 
    PATH
    FS 
    HTTP

*/


// OS Module

const os = require('os');

const user = os.userInfo();
// console.log(user);


// Method Returns The System uptime in seconds

// console.log(`The System  Uptime is ${(os.uptime() / 60) / 60 }` );

const CurrentOS = {
    // user : os.userInfo(),
    release : os.release(),
    name : os.type(),
    totalMemory : os.totalmem(),
    freeMemory : os.freemem(),
}

console.log(CurrentOS);
// FS Module (File System) 

// There are two types 

// First Synchronize  == non-bloacking
// Second Non-Synchronize  == bloacking;


// FS Sync

const {readFileSync , writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt' , 'utf8');
const second = readFileSync('./content/second.txt' , 'utf8');


writeFileSync('./content/result-sync.txt', `Here is The Result : ${first} ${second}` , {flag : 'a'});

console.log('end');


console.log("TASK DONE")
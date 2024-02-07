// FS Module (File System) 

// There are two types 

// First Synchronize  == non-bloacking
// Second Non-Synchronize  == bloacking;


// FS Async

const { readFile, writeFile } = require('fs');

console.log('start')

readFile('./content/first.txt', 'utf8', (err, result) => {

    if (err) {
        console.log(err);
        return
    }
    const first = result;
    // console.log(first);

    readFile('./content/second.txt', 'utf8', (err, result) => {

        if (err) {
            console.log(err);
            return
        }
        const second = result;
        // console.log(second);

        writeFile('./content/result-async.txt', `Here is the Result :  ${first}  ${second}  `, (err, result) => {

            if (err) {
                console.log(err)
                return
            }
            // console.log(result);

            console.log("TASK DONE")
            
        })
    })
})

console.log("end")
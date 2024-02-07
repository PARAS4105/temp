const { readFile } = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(  path , 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            const first = data;

            resolve(first);
        })
    })
}


 getText('./content/first.txt')
 .then((result) => console.log(result)) 
 .catch((err) => console.log(err));

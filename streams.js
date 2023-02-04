const fs = require("fs")

const readStream = fs.createReadStream('./docs/data.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./docs/blog.txt');


readStream.on("data", (chunk) => {
    console.log('---- NEW CHUNK ----');
    console.log(chunk.toString());    

    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);

});


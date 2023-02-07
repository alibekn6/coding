const fs = require("fs")
const zlib = require("zlib")

const readStream = fs.createReadStream('text.txt')
const writeStream = fs.createWriteStream('new.txt')
const compressStream = zlib.createGzip();

// readStream.on('data', (chunk) => {
//     wrtieStream.write("\n---CHUNK start--\n")
//     wrtieStream.write(chunk)
//     wrtieStream.write("\n---CHUNK end--\n")
// })


const Error = () => {
    console.log("Error");
    readStream.destroy();
    writeStream.end('Finished with error');
}

readStream
    .on('error', Error)
    .pipe(compressStream)
    .pipe(writeStream)
    .on('error', Error);
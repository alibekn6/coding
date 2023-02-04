const fs = require('fs');

const readStream = fs.createReadStream('./text.txt')
const writeStream = fs.createWriteStream('./new.txt')


readStream.on('data', (chunk) => {
    console.log('--------');
    console.log(chunk.toString());

    writeStream.write('\n ----START---- \n');
    writeStream.write(chunk);
    writeStream.write('\n ----END!!---- \n')
})
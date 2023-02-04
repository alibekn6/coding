const fs = require("fs")


// reading files

// fs.readFile('./docs/wor2k.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })




// writing fiels

// fs.writeFile('./docs/work2.txt', 'Hello World0', () => {
//     console.log("File was written");
// })


// directories


// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("Folder created");
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("Folder deleted");
//     })
// }





// deleting files


if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}
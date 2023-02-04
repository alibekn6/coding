// Синхронное чтение файла

const fs = require("fs")

let file_1 = fs.readFileSync('text.txt', 'utf-8')

let file_2 = fs.readFileSync('new.txt', 'utf-8')

if (file_1 === file_2) {
    console.log("Equal!!");
} else {
    console.log("NO");
}
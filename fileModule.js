// two types of file modules
// synchronous and asynchronous
const { readFileSync, writeFileSync } = require('fs');
const first = readFileSync('./Folder/first.txt', 'utf-8');
const hello = readFileSync('./Folder/subFolder/Hello.txt', 'utf-8');

console.log(first);
console.log(hello)

writeFileSync('./Folder/subFolder/resultSync.txt', `${first} ${hello}`, {
    flag: 'a'
})

writeFileSync('./Folder/subFolder/resultSync.txt', `${first} ${hello}`, {
    flag: 'a'
})
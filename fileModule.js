// two types of file modules
// synchronous and asynchronous
// const { readFileSync, writeFileSync } = require('fs');
// const { readFile, writeFile, mkdir } = require('fs');
// const first = readFileSync('./Folder/first.txt', 'utf-8');
// const hello = readFileSync('./Folder/subFolder/Hello.txt', 'utf-8');

// console.log(first);
// console.log(hello)

// writeFileSync('./Folder/subFolder/resultSync.txt', `${first} ${hello}`, {
//     flag: 'a'
// })

// writeFileSync('./Folder/subFolder/resultSync.txt', `${first} ${hello}`, {
//     flag: 'a'
// })
// console.log(`start writing file`);
// const write = writeFileSync('./Folder/MyFile.txt', 'Hello with wrong file',{ flag: 'a'} );
// console.log(`end of writing file`)
// if(!'./Folder/helllo.txt'){
//     console.log('file does not exist');
//     console.log('file does not exist');

// }else{
//     readFile('./Folder/helllo.txt', 'utf-8', (err, res) => {
//         err ? console.log(err) : 
//         console.log(res)
//     })
// }

// mkdir('../LogDIR',)
// writeFile('../LogDIR/log.txt','outside from scope',(err, result) => {
//     if(err.code === "ENONET"){
//         mkdir('../LogDIR')
//     }
//     console.log(result)
// })
// const { existsSync, writeFileSync, writeSync, mkdirSync, readFileSync } = require('fs');
// const path = '../LogDIR/log.txt';
// if(!existsSync(path)){
//     mkdirSync('../LogDIR')
//     return mkdirSync('../LogDIR'+'/SubLogDIR')
// }else{
//     let rd = readFileSync('../LogDIR/log.txt', 'utf-8');
//     console.log(rd)
// }
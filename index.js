// setinterval
// Node JS, In Node js there is no window objects that's why it has Global Objects
// Global
// __dirname path to the current directory
// __filename file name
// require  allow us to import node module
// module in node js every thing is module like Http, and module is a js library

// __dirname 
// console.log('dirName - - - > '+ __dirname);

// file module
// const fs = require('fs');
// setInterval(()=> {
//     if(fs.existsSync("Hello.txt")){
//         fs.writeFileSync('Hello.txt', 'This is File with extended line!!         ! ');    
//         console.log('File modified');
//     }else{
//         console.log('file already exist!!!')
//     }
// }, 3000);
// require('./module');
// console.log(`In Index.js `)

// let name = ['tim smith', 'shirley chisholm'];
// let neName = [] 
//  name.forEach(name => {
//     neName.push(name.split(' '))
// })
// neName.flat().forEach(neName => {
// console.log(neName.charAt(0).toUpperCase()+neName.slice(1))
// // neName.push(neName.charAt(0).toUpperCase()+neName.slice(1))
// })
// // console.log(neName+' ne Name: ')
// newName
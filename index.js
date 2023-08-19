// setinterval
// Node JS, In Node js there is no window objects that's why it has Global Objects
// Global
// __dirname path to the current directory
// __filename file name
// require  allow us to import node module
// module in node js every thing is module like Http, and module is a js library

// __dirname 
// console.log('dirName - - - > '+ __dirname);

const fs = require('fs');
if(!fs.existsSync()){
    fs.mkdirSync('Hello.txt', 'utf-8')
}



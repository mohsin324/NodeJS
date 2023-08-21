const path = require('path');

// complete path
const filePath = path.join("Folder","Hello.txt");
console.log(filePath);

// base path
const basePath = path.basename(filePath)
console.log(basePath);

// absolute path
const absolutePath = path.resolve(__dirname,'noFolder');
console.log(absolutePath);
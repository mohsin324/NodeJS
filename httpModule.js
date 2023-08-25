const http = require('http');
const port = 5000;
const server = http.createServer((req, res,) => {
    if(req.url === '/'){
        return res.end("Welcome Back to Home!!!");
    }
    if(req.url === '/About'){
        return res.end("Welcome Back to About!!!");
    }
        res.end(`OOPS!!! Not Found`);
})
server.listen(port,()=> {
    console.log(`server listen at port ${port}`)

})

console.log('-------------------------------start');
setTimeout(()=> {
    for(i=0; i<=100; i++){
        console.log(`I is ${i}`)
    }

},1000)
console.log('`````````````````````````````````End')
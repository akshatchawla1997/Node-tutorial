const http = require('http')
const port = 2000
const server = http.createServer((req, res)=>{
    if(req.url==='/friends'){

    res.writeHead(200,{
        'content-type':'application/json'
    });
    res.end(JSON.stringify({
        id:1,
        name:'akshat'
    }));
    }else if(req.url==='/messages'){
        res.write('<html>')
        res.write('<Body>')
        res.write('<h1>hello akshat</h1>')
        res.write('<p>what is your thought on astronomy</p>');
        res.write('</body>')
        res.write('</html>')
        res.end()
    }else{
        res.statusCode(404);
        res.end()
    }
     
});
server.listen(port,()=>{
    console.log('listening to port 2000')
})
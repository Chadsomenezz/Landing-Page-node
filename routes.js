const fs = require('fs');
const routes = (request,response)=>{
    console.log(request.url);
    switch (request.url){
        case '/':
            fs.readFile('index.html', (error,content)=>{
                response.writeHead(200,{'Content-Type':'text/html'})
                response.write(content);
                response.end();
            })
            break;
        case '/ninjas':
            fs.readFile('ninjas.html', (error,content)=>{
                response.writeHead(200,{'Content-Type':'text/html'})
                response.write(content);
                response.end();
            })
            break;
        case '/dojos/new':
            fs.readFile('dojos.html', (error,content)=>{
                response.writeHead(200,{'Content-Type':'text/html'})
                response.write(content);
                response.end();
            })
            break;
        default:
            response.writeHead(404)
            response.write('Page Not Found');
            response.end();
    }
}
module.exports = routes;
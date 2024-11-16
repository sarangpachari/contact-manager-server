const jsonServer = require('json-server'); 


const Contactserver = jsonServer.create();
const middlewares = jsonServer.defaults();
const PORT = 3000
const route = jsonServer.router('db.json')


Contactserver.use(middlewares);
Contactserver.use(route);

Contactserver.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
});

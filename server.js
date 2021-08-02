const jsonServer = require('json-server');
const server = jsonServer.create();
const routers = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use('', /* CORS handler */ (req, res, next) => {
	res.append('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.append('Access-Control-Allow-Methods', 'GET, OPTIONS, POST');
	res.append('Access-Control-Allow-Headers', 'content-type');

	next();
});

server.use(middlewares);
server.use(routers);

server.listen(3000, () => {
	console.log('JSON Server is running!');
});
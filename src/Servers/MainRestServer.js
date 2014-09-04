var Restify = require('restify');
var RouteManager = require('./RouteManager');

var server = Restify.createServer({
  name: 'wxApp',
  version: '1.0.0'
});

server.use(Restify.acceptParser(server.acceptable));
server.use(Restify.queryParser());
server.use(Restify.bodyParser());

server.listen(8090, function () {
  RouteManager.initRoute(server);

  console.log('%s listening at %s', server.name, server.url);

});

exports.server = server;
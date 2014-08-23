var Restify = require('restify');


var server = Restify.createServer({
  name: 'serverError',
  version: '1.0.0'
});

server.use(Restify.acceptParser(server.acceptable));
server.use(Restify.queryParser());
server.use(Restify.bodyParser());

server.get('/products/:sku', function (req, res, next) {
  var cond = {
  	"primaryCategoryId" : 422
  };

  // dal.search('product', cond, function(items){
		// res.send(items);
		// return next();
  // });
});

server.get(function(req, res, next){
  res.send(req);
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});

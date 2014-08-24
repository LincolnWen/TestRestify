var Restify = require('restify');
var DalProduct = require('../../DALs/DalProduct');
var DalSupplier = require('../../DALs/DalSupplier');

var server = Restify.createServer({
  name: 'wxApp',
  version: '1.0.0'
});

server.use(Restify.acceptParser(server.acceptable));
server.use(Restify.queryParser());
server.use(Restify.bodyParser());

///【闻祖东 2014-8-24-105410】http://127.0.0.1:8090/products/5007044
server.get('/products/:sku', function (req, res, next) {
  var cond = {
  	"primaryCategoryId" : 422
  };

  DalProduct.search(cond, function(products){
    res.send(products);
    return next();
  });
});

server.get('/supplier/:code', function (req, res, next) {
  var cond = {
    "code" : req.params.code
  };

  DalSupplier.search(cond, function(suppliers){
    res.send(suppliers);
    return next();
  });
});



server.listen(8090, function () {
  console.log('%s listening at %s', server.name, server.url);
});
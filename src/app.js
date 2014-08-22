var Restify = require('restify');
var QueryObject = require('./lib/QueryObject').QueryObject;

var dal = new QueryObject();


var server = Restify.createServer({
  name: 'wxApp',
  version: '1.0.0'
});

server.use(Restify.acceptParser(server.acceptable));
server.use(Restify.queryParser());
server.use(Restify.bodyParser());

server.get('/products/:sku', function (req, res, next) {
  var cond = {
  	"primaryCategoryId" : 422
  };

  dal.search('product', cond, function(items){
		res.send(items);
		return next();
  });
});




dal.onInitSucc(function(){
	console.log('初始化数据库连接成功，接下来将启动网站。');
	server.listen(8080, function () {
	  console.log('%s listening at %s', server.name, server.url);
	});
});

dal.onInitFail(function(err){
	console.log('数据库连接初始化失败，将不会启动网站。');
});



//【闻祖东 2014-8-22-162755】初始化的工作
dal.InitConnection();
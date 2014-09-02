var QueryObject = require('../../lib/QueryObject').QueryObject;

var qo = new QueryObject("mongodb://nse:123qwe@listing.db.wenxi.biz:27017/NewSearch");

qo.init(function(ifSucc, err){
	if(ifSucc)
		console.log('初始化NSE连接成功。');
	else
		console.log('初始化NSE连接失败，失败信息为%s', err);
});

exports.queryObject = qo;//【闻祖东 2014-9-2-234854】看一下这样export会不会有问题呢。

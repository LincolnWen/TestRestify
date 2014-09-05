var QueryObject = require('../../lib/QueryObject').QueryObject;

var qo = new QueryObject("mongodb://test:test@listing.db.wenxi.biz:27018/pdc");

exports.init = function(){
	qo.init(function(ifSucc, err){
		if(ifSucc)
			console.log('初始化PDC连接成功。');
		else
			console.log('初始化PDC连接失败，失败信息为%s', err);
	});
}

exports.queryObject = qo;
var QueryObject = require('../lib/QueryObject').QueryObject;

var qo = new QueryObject("mongodb://test:test@listing.db.wenxi.biz:27018/pdc");

qo.onInit(function(succ, err){
	if(succ)
		console.log('初始化连接成功。');
	else
		console.log('初始化连接失败，失败信息为%s', err);
});

exports.init = function(){
	qo.init();
};

exports.getStatus = function(){
	return qo.initStatus;
};


















exports.search = function(collName, cond, callback){
	var _coll = qo.db.collection(collName);
	
	_coll.find(cond, function(err, cursor){
		if(err)	throw err;

		cursor.count(false, function(err, totalCount){
			if(err) throw err;

			cursor.toArray(function(err, items){
				if(err) throw err;

				callback({
					totalCount : totalCount,
					items : items
				});
			});
		});
	});
};
var QueryObject = require('../../lib/QueryObject').QueryObject;

var qo = new QueryObject();

qo.onInit(function(succ, err){
	if(succ){
		console.log('初始化连接成功。');
	}
	else{
		console.log('初始化连接失败，失败信息为%s', err);
	}
});

qo.init();

exports.db2 = qo.db;///【闻祖东 2014-8-23-234953】直接这样返回是返回不了这个对象的，还是要用方法的方式。记住就是了。在命令行里面typeof BizInit4PdcDb.db2的结果都是function。。。

exports.getStatus = function(){
	return qo.initStatus;
};

exports.qo = function(){
	return qo;
};

exports.db = function(){
	return qo.db;
}
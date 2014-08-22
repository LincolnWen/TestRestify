var QueryObject = require('../../lib/QueryObject').QueryObject;

var qo = new QueryObject();

exports.onInitResult = function(callback){
	qo.onInitSucc(function(){
		callback(true);
	});

	qo.onInitFail(function(err){
		callback(false, err);
	});
};

exports.init = function(){
	qo.InitConnection();
};

exports.db = qo.db;

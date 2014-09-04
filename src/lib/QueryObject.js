var MongoClient = require('mongodb').MongoClient;
var _events = require('events');
var _util = require("util");

function QueryObject(connString) {
	this.db;//【闻祖东 2014-8-21-164847】不做初始化只定义会不会有问题？
	this.connectString = connString;
};

QueryObject.prototype.db = function(){
	return this.db;
};

QueryObject.prototype.init = function(callback){
	MongoClient.connect(this.connectString, {native_parser:true}, function(err, db) {
		if(err){
			callback(false, err);
			return;
		}
		else{
			this.db = db;
			callback(true);
			return;
		}
	}.bind(this));
};

QueryObject.prototype.searchWithoutOptions = function(collName, cond, callback){
	this.search(collName, cond, {}, callback);///【闻祖东 2014-9-4-234209】即使options没有值，这个地方也不能为null。在做MongoDb的Query的时候，你不写Option那个选项，他默认也是{}而不是null。
};

QueryObject.prototype.search = function(collName, cond, options, callback){
	var _coll = this.db.collection(collName);

	//【闻祖东 2014-9-4-233516】options的示例形态。
	// var opt = {
	// 	skip : 10,
	// 	limit : 20,
	// 	fields : {
	// 		'listingSku' : 1
	// 	}
	// };
	
	_coll.find(cond, options, function(err, cursor){
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

exports.QueryObject = QueryObject;
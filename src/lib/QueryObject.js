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

QueryObject.prototype.search = function(collName, cond, callback){
	var _coll = this.db.collection(collName);
	
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

exports.QueryObject = QueryObject;
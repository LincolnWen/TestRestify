var MongoClient = require('mongodb').MongoClient;
var _events = require('events');
var _util = require("util");

function DalPdcBase() {
	this.db;//【闻祖东 2014-8-21-164847】不做初始化只定义会不会有问题？
};

_util.inherits(DalPdcBase, _events.EventEmitter);

DalPdcBase.prototype.db = function(){
	return this.db;
};

DalPdcBase.prototype.InitConnection = function(){
	MongoClient.connect("mongodb://test:test@listing.db.wenxi.biz:27018/pdc", {native_parser:true}, function(err, db) {
		if(err){
			this.emit('initFail', err);
		}

		this.db = db;
		this.emit('initSucc');
	}.bind(this));
};

// DalPdcBase.prototype.countTotalAndFindPageData = function(db, collName, cond, opts, callback){
// 	var cursor = db.collection(collName).find(cond, opts);
// 	cursor.count(false, function(err, totalCount){
// 		if(err) throw err;
// 		if(totalCount < (opts.skip + opts.limit)){
//             utils.resetSkipAndLimit(opts, totalCount);
//             cursor.skip(opts.skip).limit(opts.limit);
//         }
//         cursor.toArray(function(err, data){
//             if (err) throw err;
//             callback(data, totalCount);
//         })
// 	});
// };

DalPdcBase.prototype.search = function(collName, cond, callback){
	this.db.collection(collName).find(cond, function(err, cursor){
		///TODO【闻祖东 2014-8-21-174440】计算行数的代码可以就写在这里了。
		if(err)
			throw err;

		cursor.toArray(function(err, items){
			if(err)
				throw err;

			callback(items);
		});
	});
};

DalPdcBase.prototype.onInitSucc = function(callback){
	this.addListener('initSucc', callback);
};

DalPdcBase.prototype.onInitFail = function(callback){
	this.addListener('initFail', callback);
};

exports.DalPdcBase = DalPdcBase;
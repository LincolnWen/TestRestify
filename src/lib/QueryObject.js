var MongoClient = require('mongodb').MongoClient;
var _events = require('events');
var _util = require("util");

function QueryObject(connString) {
	this.db;//【闻祖东 2014-8-21-164847】不做初始化只定义会不会有问题？
	this.initStatus = null;
	this.connectString = connString;
};

_util.inherits(QueryObject, _events.EventEmitter);

QueryObject.prototype.db = function(){
	return this.db;
};

QueryObject.prototype.init = function(){
	//MongoClient.connect("mongodb://test:test@listing.db.wenxi.biz:27018/pdc", {native_parser:true}, function(err, db) {
	MongoClient.connect(this.connectString, {native_parser:true}, function(err, db) {
		if(err){
			this.initStatus = false;
			this.emit('init', false, err);
			return;
		}
		else{
			this.db = db;
			this.initStatus = true;
			this.emit('init', true);
			return;
		}
	}.bind(this));
};

QueryObject.prototype.onInit = function(callback){
	this.addListener('init', callback);
};

exports.QueryObject = QueryObject;
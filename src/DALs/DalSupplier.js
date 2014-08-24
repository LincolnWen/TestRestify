var dalBase = require('./DalBase');

exports.search = function(cond, callback){
	dalBase.search('supplier', cond, callback);
};
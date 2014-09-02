var dalBase = require('./DalBase');

exports.search = function(cond, callback){
	dalBase.search('product', cond, callback);
};

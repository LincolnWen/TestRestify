var qo = require('./DalPdcBase').queryObject;

exports.search = function(cond, callback){
	qo.search('product', cond, callback);
};

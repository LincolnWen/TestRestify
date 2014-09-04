var qo = require('./DalPdcBase').queryObject;
var collName = 'product';

exports.search = function(cond, callback){
	qo.searchWithoutOptions(collName, cond, callback);
};

exports.getProductStatus = function(cond, callback){
	var options = {
		fields : {
			'status' : 1,
			'publishState' : 1,
			'salesState' : 1
		}
	};

	qo.search(collName, cond, options, callback);
};
var qo = require('./DalPdcBase').queryObject;
var collName = 'supplier';

exports.search = function(cond, callback){
	qo.search(collName, cond, callback);
};


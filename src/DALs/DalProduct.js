var _coll = require('./BLLs/Init/BizInit4PdcDb').db.collection('product');





exports.search = function(cond, callback){
	_coll.find(cond, function(err, cursor){
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

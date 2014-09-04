var DalProduct = require('../../DALs/Pdc/DalProduct');

exports.getSkus = function(req, res, next){
	var cond = {
		"listingSku" : req.params.sku
	};

	DalProduct.search(cond, function(products){
		res.send(products);
		return next();
	});
};

exports.getSkuStatus = function(req, res, next){
	var cond = {
		supplierCode : req.params.supplierCode
	};

	DalProduct.getProductStatus(cond, function(products){
		res.send(products);
		return next();
	});
};
var server = require('./MainRestServer').server;
var BizProducts = require('../BLLs/BizAgent/BizProducts');
var BizSuppliers = require('../BLLs/BizAgent/BizSuppliers');

var _server;

exports.initRoute = function(server){
	_server = server;

	RouteGet('/products/:sku', BizProducts.getSkus);///【闻祖东 2014-8-24-105410】http://127.0.0.1:8090/products/5007044
	RouteGet('/skuStatus/:supplierCode', BizProducts.getSkuStatus);///http://127.0.0.1:8090/skuStatus/LS0114


	RouteGet('/supplier/:code', BizSuppliers.getSuppliers);///http://127.0.0.1:8090/supplier/LS0321
};

function RouteGet(path, callback){
	_server.get(path, callback);
};
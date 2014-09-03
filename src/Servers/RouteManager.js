var server = require('./MainRestServer').server;
var BizProducts = require('../BLLs/BizAgent/BizProducts');
var BizSuppliers = require('../BLLs/BizAgent/BizSuppliers');

function get(path, callback){
  server.get(path, callback);
}














get('/products/:sku', BizProducts.getSkus);///【闻祖东 2014-8-24-105410】http://127.0.0.1:8090/products/5007044
get('/supplier/:code', BizSuppliers.getSuppliers);///http://127.0.0.1:8090/supplier/LS0321
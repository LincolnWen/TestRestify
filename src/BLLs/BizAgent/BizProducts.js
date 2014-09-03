var DalProduct = require('../../DALs/Pdc/DalProduct');

exports.getSkus = function(req, res, next){
  var cond = {
    "primaryCategoryId" : 422
  };

  DalProduct.search(cond, function(products){
    res.send(products);
    return next();
  });
};
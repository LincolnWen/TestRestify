var DalSupplier = require('../../DALs/Pdc/DalSupplier');

exports.getSuppliers = function(req, res, next){
  var cond = {
    "code" : req.params.code
  };

  DalSupplier.search(cond, function(suppliers){
    res.send(suppliers);
    return next();
  });
};
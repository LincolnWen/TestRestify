var Restify = require('restify');
var BizInit4PdcDb = require('./BLLs/Init/BizInit4PdcDb');

function startServer(){
	console.log('执行完了，这个是需要等待初始化完成的。应该在应用程序的最后一行才对。');
};

function wait4Init(){
	console.log('进入wait4Init，BizInit4PdcDb.succ的值为%s', BizInit4PdcDb.succ);
	if(BizInit4PdcDb.succ === undefined)
		setTimeout(wait4Init, 1 * 1000);
	else if(BizInit4PdcDb.succ === true)
		startServer();
	else if(BizInit4PdcDb.succ === false)
		console.log('执行完了，但是连接初始化失败了，所以应用程序也不会执行。');
};

wait4Init();



console.log('BizInit4PdcDb.db = %s', BizInit4PdcDb.db);

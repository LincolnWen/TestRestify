var BizInit4PdcDb = require('./BLLs/Init/BizInit4PdcDb');

function startServer(){
	console.log('执行完了，这个是需要等待初始化完成的。应该在应用程序的最后一行才对。');
	require('./BLLs/Init/BizInitRestServer');
};

function startErrorServr(){
	console.log('执行完了，这个是需要等待初始化完成的。应该在应用程序的最后一行才对。');
	require('./BLLs/Init/BizServerError');
};

function wait4Init(){
	var status = BizInit4PdcDb.getStatus();

	console.log('进入wait4Init，status的值为%s', status);
	if(status === null)
		setTimeout(wait4Init, 1 * 1000);
	else if(status === true)
		startServer();
	else if(status === false)
		startErrorServr();
};

wait4Init();





var time = 0;	//定義變數time記錄已經由去的時間
setInterval(function(){	//每隔一分鍾執行一次
	time += 1;
	postMessage(time);//把資料傳遞給前景的js程式
},6*1000);
var　startTime

function startTimer(){
	startTime = new Date();
	setInterval("getTime();",1000);
}

function getTime(){
	var endTime = new Date();
	document.timer.timer2.value = (endTime - startTime)/1000 + "秒経過";
}

startTimer();



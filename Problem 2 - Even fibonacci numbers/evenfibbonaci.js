function EvenFibbonaci() {
	var y = 0;
	var x = 1;
	var y = 2
	for (var sum = 0; sum < 4000000;) {
		var fibNum = x + y;
		x = y;
		y = fibNum;
		if(fibNum %2 == 0)
		{
			sum += fibNum;
			console.log("Answser is:"+fibNum);
		}
		console.log(fibNum);
	}
}
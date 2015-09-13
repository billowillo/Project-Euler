function EvenFibbonaci() {

	var x = 0;
	var y = 0;
	
	for(var sum = 0; sum < 4000000;){
		console.log(x);
		y = x + (x + 1);
		if(y % 2 == 0)
		{
			sum +=y;
		}
		x = y;
		console.log(sum);
	}
	alert("done");
}
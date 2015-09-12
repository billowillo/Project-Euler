function EvenFibbonaci() {
	var sum = 0;
	var x = 0;
	var y = 0;
	while (sum < 4000000) {
		console.log("K");
		y = x + (x + 1)
		if (y % 2 == 0) {
			sum += y

			console.log(sum)
		}
		x = y;

	}

}
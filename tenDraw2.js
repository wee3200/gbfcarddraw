function tenDraw () {
	var itemArr = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10"];
	
	for (var x=0; x<9; x++){
		var rareGate = Math.floor((Math.random() * 100) + 1);
		if (rareGate <= 82) {
		document.getElementById(itemArr[x]).innerHTML = 'R';
		} else if (rareGate >=82 && rareGate <=97){
		document.getElementById(itemArr[x]).innerHTML = 'SR';
		} else {
		document.getElementById(itemArr[x]).innerHTML = 'SSR';
		}
	}
	var rareGate = Math.floor((Math.random() * 100) + 1);
	if (rareGate <= 97) {
	document.getElementById(itemArr[9]).innerHTML = 'SR';
	} else {
	document.getElementById(itemArr[9]).innerHTML = 'SSR';
	}
}
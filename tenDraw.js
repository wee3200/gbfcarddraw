function tenDraw () {
	var itemArr = ["item4", "item5", "item6", "item7", "item1", "item2", "item3", "item8", "item9", "item10", ];
	var e = document.getElementById("slt_dMethod");
	var elementUp = e.options[e.selectedIndex].value;
	var ssrRecord = document.getElementById('box' + ssrGet);
	//NONE UP
	if (elementUp == 1) {
		//Generate cards for item 1~9
		for (var x=0; x<9; x++){
			var rareGate = Math.floor((Math.random() * 100) + 1);
			if (rareGate <= 82) {
				cardIMG = pickRAll();
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
				document.rNum.Display.value = eval(rNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
			} else if (rareGate >=83 && rareGate <=97){
				cardIMG = pickSRAll();
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.srNum.Display.value = eval(srNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
			}
			else{
				cardIMG = pickSSRAll();
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
			}
		}
		
		//Generate card for item 10
		var rareGate = Math.floor((Math.random() * 100) + 1);
		
		if (rareGate <=97){
			cardIMG = pickSRAll();
			var image = document.getElementById(itemArr[x]);
			image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
			document.srNum.Display.value = eval(srNum.Display.value) + 1;
			if (cardIMG[4] != ""){
				image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
				document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
			}
		}
		 else{
			cardIMG = pickSSRAll();
			var image = document.getElementById(itemArr[x]);
			image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
			document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
			if (cardIMG[4] != ""){
				image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
				document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
			}
			ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
			ssrGet++;
			ssrRecord = document.getElementById('box' + ssrGet);
		}
		
	} 
	
	//Fire Up
	else if (elementUp == 2) {
		//Generate cards for item 1~9
		for (var x=0; x<9; x++){
			var rareGate = Math.floor((Math.random() * 100) + 1);
			var upValue = Math.floor ((Math.random() * 2) + 1);
				if (upValue == 1){
					if (rareGate <= 82) {
					cardIMG = pickRByAttr('earth','water','wind','DL','summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByAttr('earth','water','wind','DL','summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else{
					cardIMG = pickSSRByAttr('earth','water','wind','DL','summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			} else {
				if (rareGate <= 82) {
					cardIMG = pickRByAttr('fire');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByAttr('fire');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else{
					cardIMG = pickSSRByAttr('fire');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			}
		}
		
		//Generate card for item 10
		var rareGate = Math.floor((Math.random() * 100) + 1);
		var upValue = Math.floor ((Math.random() * 2) + 1);
		if (upValue == 1){
			if (rareGate <=97){
				cardIMG = pickSRByAttr('earth','water','wind','DL','summon');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.srNum.Display.value = eval(srNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
			}
			 else{
				cardIMG = pickSSRByAttr('earth','water','wind','DL','summon');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
			}
		} else {
			if (rareGate <=97){
				cardIMG = pickSRByAttr('fire');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.srNum.Display.value = eval(srNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
			}
			 else{
				cardIMG = pickSSRByAttr('fire');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
			}
		}
	} 
	
	//Earth Up
	else if (elementUp == 3) {
		//Generate cards for item 1~9
		for (var x=0; x<9; x++){
			var rareGate = Math.floor((Math.random() * 100) + 1);
			var upValue = Math.floor ((Math.random() * 2) + 1);
				if (upValue == 1){
					if (rareGate <= 82) {
					cardIMG = pickRByAttr('fire','water','wind','DL','summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByAttr('fire','water','wind','DL','summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else{
					cardIMG = pickSSRByAttr('fire','water','wind','DL','summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			} else {
				if (rareGate <= 82) {
					cardIMG = pickRByAttr('earth');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByAttr('earth');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else{
					cardIMG = pickSSRByAttr('earth');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			}
		}
		
		//Generate card for item 10
		var rareGate = Math.floor((Math.random() * 100) + 1);
		var upValue = Math.floor ((Math.random() * 2) + 1);
		if (upValue == 1){
			if (rareGate <=97){
				cardIMG = pickSRByAttr('fire','water','wind','DL','summon');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.srNum.Display.value = eval(srNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
			}
			 else{
				cardIMG = pickSSRByAttr('fire','water','wind','DL','summon');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
			}
		} else {
			if (rareGate <=97){
				cardIMG = pickSRByAttr('earth');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.srNum.Display.value = eval(srNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
			}
			 else{
				cardIMG = pickSSRByAttr('earth');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
			}
		}
	} 
	
	//Water Up
	else if (elementUp == 4) {
		//Generate cards for item 1~9
		for (var x=0; x<9; x++){
			var rareGate = Math.floor((Math.random() * 100) + 1);
			var upValue = Math.floor ((Math.random() * 2) + 1);
				if (upValue == 1){
					if (rareGate <= 82) {
					cardIMG = pickRByAttr('fire','earth','wind','DL','summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByAttr('fire','earth','wind','DL','summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else{
					cardIMG = pickSSRByAttr('fire','earth','wind','DL','summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			} else {
				if (rareGate <= 82) {
					cardIMG = pickRByAttr('water');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByAttr('water');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else{
					cardIMG = pickSSRByAttr('water');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			}
		}
		
		//Generate card for item 10
		var rareGate = Math.floor((Math.random() * 100) + 1);
		var upValue = Math.floor ((Math.random() * 2) + 1);
		if (upValue == 1){
			if (rareGate <=97){
				cardIMG = pickSRByAttr('fire','earth','wind','DL','summon');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.srNum.Display.value = eval(srNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
			}
			 else{
				cardIMG = pickSSRByAttr('fire','earth','wind','DL','summon');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
			}
		} else {
			if (rareGate <=97){
				cardIMG = pickSRByAttr('water');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.srNum.Display.value = eval(srNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
			}
			 else{
				cardIMG = pickSSRByAttr('water');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
			}
		}
	} 
		
	//Wind Up
	else if (elementUp == 5) {
		//Generate cards for item 1~9
		for (var x=0; x<9; x++){
			var rareGate = Math.floor((Math.random() * 100) + 1);
			var upValue = Math.floor ((Math.random() * 2) + 1);
				if (upValue == 1){
					if (rareGate <= 82) {
					cardIMG = pickRByAttr('fire','earth','water','DL','summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByAttr('fire','earth','water','DL','summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else{
					cardIMG = pickSSRByAttr('fire','earth','water','DL','summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			} else {
				if (rareGate <= 82) {
					cardIMG = pickRByAttr('wind');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByAttr('wind');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else{
					cardIMG = pickSSRByAttr('wind');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			}
		}
		
		//Generate card for item 10
		var rareGate = Math.floor((Math.random() * 100) + 1);
		var upValue = Math.floor ((Math.random() * 2) + 1);
		if (upValue == 1){
			if (rareGate <=97){
				cardIMG = pickSRByAttr('fire','earth','water','DL','summon');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.srNum.Display.value = eval(srNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
			}
			 else{
				cardIMG = pickSSRByAttr('fire','earth','water','DL','summon');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
			}
		} else {
			if (rareGate <=97){
				cardIMG = pickSRByAttr('wind');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.srNum.Display.value = eval(srNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
			}
			 else{
				cardIMG = pickSSRByAttr('wind');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
			}
		}
	} 
		
	//DL Up
	else if (elementUp == 6) {
		//Generate cards for item 1~9
		for (var x=0; x<9; x++){
			var rareGate = Math.floor((Math.random() * 100) + 1);
			var upValue = Math.floor ((Math.random() * 2) + 1);
				if (upValue == 1){
					if (rareGate <= 82) {
					cardIMG = pickRByAttr('fire','earth','water','wind');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByAttr('fire','earth','water','wind');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else{
					cardIMG = pickSSRByAttr('fire','earth','water','wind');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			} else {
				if (rareGate <= 82) {
					cardIMG = pickRByAttr('DL');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByAttr('DL');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else{
					cardIMG = pickSSRByAttr('DL');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			}
		}
		
		//Generate card for item 10
		var rareGate = Math.floor((Math.random() * 100) + 1);
		var upValue = Math.floor ((Math.random() * 2) + 1);
		if (upValue == 1){
			if (rareGate <=97){
				cardIMG = pickSRByAttr('fire','earth','water','wind');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.srNum.Display.value = eval(srNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
			}
			 else{
				cardIMG = pickSSRByAttr('fire','earth','water','wind');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
			}
		} else {
			if (rareGate <=97){
				cardIMG = pickSRByAttr('DL');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.srNum.Display.value = eval(srNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
			}
			 else{
				cardIMG = pickSSRByAttr('DL');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
			}
		}
	} 
	
	//Summon Up
	else if (elementUp == 5) {
		//Generate cards for item 1~9
		for (var x=0; x<9; x++){
			var rareGate = Math.floor((Math.random() * 100) + 1);
			var upValue = Math.floor ((Math.random() * 2) + 1);
				if (upValue == 1){
					if (rareGate <= 82) {
					cardIMG = pickRByAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else{
					cardIMG = pickSSRByAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			} else {
				if (rareGate <= 82) {
					cardIMG = pickRByClass('summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else{
					cardIMG = pickSSRByClass('summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			}
		}
		
		//Generate card for item 10
		var rareGate = Math.floor((Math.random() * 100) + 1);
		var upValue = Math.floor ((Math.random() * 2) + 1);
		if (upValue == 1){
			if (rareGate <=97){
				cardIMG = pickSRByAll();
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.srNum.Display.value = eval(srNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
			}
			 else{
				cardIMG = pickSSRByAll();
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
			}
		} else {
			if (rareGate <=97){
				cardIMG = pickSRByClass('summon');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.srNum.Display.value = eval(srNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
			}
			 else{
				cardIMG = pickSSRByClass('summon');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
			}
		}
	} 
	
	//UL Up
	else if (elementUp == 8) {
		
		//Generate cards for item 1~9
		for (var x=0; x<9; x++){
			var upValue = Math.floor ((Math.random() * 10) + 1);
			var rareGate = Math.floor((Math.random() * 100) + 1);
			// Generate R cards
			if (rareGate <= 82) {
				cardIMG = pickRAll();
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
				document.rNum.Display.value = eval(rNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
			} else if (rareGate >=83 && rareGate <=97){
				if (upValue < 8) {
					cardIMG = pickSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else {
					listSRByAttr = {
					'': [],
					'Ultra': []
					}
					srList.forEach(function(sr) { listSRByAttr[sr[6]].push(sr);
					});
					cardIMG = pickSRByAttr('Ultra');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
			} else {
				if (upValue < 7) {
					cardIMG = pickSSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				} else {
					listSSRByAttr = {
					'': [],
					'Ultra': []
					}
					ssrList.forEach(function(ssr) { listSSRByAttr[ssr[6]].push(ssr);
					});
					cardIMG = pickSSRByAttr('Ultra');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			}			
		}
		
		//Generate card for item 10
		var rareGate = Math.floor((Math.random() * 100) + 1);
		if (rareGate <= 97) {
			var upValue = Math.floor ((Math.random() * 10) + 1);
			var rareGate = Math.floor((Math.random() * 100) + 1);
			// Generate R cards
			if (rareGate <=97){
				if (upValue < 8) {
					cardIMG = pickSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else {
					listSRByAttr = {
					'': [],
					'Ultra': []
					}
					srList.forEach(function(sr) { listSRByAttr[sr[6]].push(sr);
					});
					cardIMG = pickSRByAttr('Ultra');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
			} else {
				if (upValue < 7) {
					cardIMG = pickSSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				} else {
					listSSRByAttr = {
					'': [],
					'Ultra': []
					}
					ssrList.forEach(function(ssr) { listSSRByAttr[ssr[6]].push(ssr);
					});
					cardIMG = pickSSRByAttr('Ultra');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			}
		}
	
	} 
	
	//6% & Charaters Up
	else if (elementUp == 9) {
				
		//Generate Charaters Cards for item1~9
		for (var x=0; x<9; x++){
			var upValue = Math.floor ((Math.random() * 2) + 1);
			if (upValue == 1) {
				var rareGate = Math.floor((Math.random() * 100) + 1);
				if (rareGate <= 82) {
					cardIMG = pickRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else{
					cardIMG = pickSSRAll();
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			} else if (upValue == 2) {
				
				var rareGate = Math.floor((Math.random() * 100) + 1);
				if (rareGate <= 79) {
					listRByAttr = {
					'': [],
					'release': []
					}
					rList.forEach(function(r) { listRByAttr[r[7]].push(r);
					});
					cardIMG = pickRByAttr('release');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} else if (rareGate >=80 && rareGate <=94){
					listSRByAttr = {
					'': [],
					'release': []
					}
					srList.forEach(function(sr) { listSRByAttr[sr[7]].push(sr);
					});
					cardIMG = pickSRByAttr('release');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				 else{
					listSSRlimitedByAttr = {
					'': [],
					'release': []
					}
					ssrListLimited.forEach(function(ssr) { listSSRlimitedByAttr[ssr[7]].push(ssr);
					});
					cardIMG = pickSSRlimitedByAttr('release');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
					ssrRecord = document.getElementById('box' + ssrGet);
				}
			}
		}
		
		//Generate card for item 10
		var upValue = Math.floor ((Math.random() * 2) + 1);
		if (upValue == 1) {
			var rareGate = Math.floor((Math.random() * 100) + 1);
			if (rareGate <= 82) {
				cardIMG = pickRAll();
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
				document.rNum.Display.value = eval(rNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
			} else if (rareGate >=83 && rareGate <=97){
				cardIMG = pickSRAll();
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.srNum.Display.value = eval(srNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
			}
			 else{
				cardIMG = pickSSRAll();
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
			}
		} else if (upValue == 2) {
			
			var rareGate = Math.floor((Math.random() * 100) + 1);
			if (rareGate <= 79) {
				listRByAttr = {
				'': [],
				'release': []
				}
				rList.forEach(function(r) { listRByAttr[r[7]].push(r);
				});
				cardIMG = pickRByAttr('release');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
				document.rNum.Display.value = eval(rNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
			} else if (rareGate >=80 && rareGate <=94){
				listSRByAttr = {
				'': [],
				'release': []
				}
				srList.forEach(function(sr) { listSRByAttr[sr[7]].push(sr);
				});
				cardIMG = pickSRByAttr('release');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.srNum.Display.value = eval(srNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
			}
			 else{
				listSSRlimitedByAttr = {
				'': [],
				'release': []
				}
				ssrListLimited.forEach(function(ssr) { listSSRlimitedByAttr[ssr[7]].push(ssr);
				});
				cardIMG = pickSSRlimitedByAttr('release');
				var image = document.getElementById(itemArr[x]);
				image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
				document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
				if (cardIMG[4] != ""){
					image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
					document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
				}
				ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
				ssrGet++;
				ssrRecord = document.getElementById('box' + ssrGet);
			}
		}			
	} 
	
	document.cash.Display.value = eval(cash.Display.value) +3000;
	document.rNum.Display2.value = eval(rNum.Display.value) / (eval(rNum.Display.value) + eval(srNum.Display.value) + eval(ssrNum.Display.value)) * 100;
	document.srNum.Display2.value = eval(srNum.Display.value) / (eval(rNum.Display.value) + eval(srNum.Display.value) + eval(ssrNum.Display.value)) * 100;
	document.ssrNum.Display2.value = eval(ssrNum.Display.value) / (eval(rNum.Display.value) + eval(srNum.Display.value) + eval(ssrNum.Display.value)) * 100;
	
	
	
	if (ssrGet == 100) {
		ssrGet = 1;
	}
}


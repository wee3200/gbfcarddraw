function starSingle() {
	var f = document.getElementById("slt_dMethod2");
	var elementUp2 = f.options[f.selectedIndex].value;
	var ssrRecord = document.getElementById('box' + ssrGet);

	//Sword Katana Up
	if (elementUp2 == 1) {
		var upValue = Math.floor ((Math.random() * 2) + 1);
		//Draw Other
		if (upValue == 1) {
			var classValue = Math.floor ((Math.random() * 9) + 1);
			if (classValue == 1){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('knife');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('knife');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('knife');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			}
			else if (classValue == 2){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('spear');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('spear');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('spear');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			}
			else if (classValue == 3){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('axe');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('axe');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('axe');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			}
			else if (classValue == 4){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('wand');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('wand');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('wand');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			}
			else if (classValue == 5){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('gun');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('gun');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('gun');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			}
			else if (classValue == 6){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('knuckle');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('knuckle');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('knuckle');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}	
			}
			else if (classValue == 7){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('bow');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('bow');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('bow');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 8){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('instrument');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('instrument');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('instrument');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 9){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('summon');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('summon');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('summon');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			}
		}
		//Draw sword katana
		else if (upValue == 2) {
			var classValue = Math.floor ((Math.random() * 2) + 1);
			if (classValue == 1){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('sword');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('sword');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else{
					cardIMG = pickSSRByClass('sword');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 2){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('katana');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('katana');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else{
					cardIMG = pickSSRByClass('katana');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			}
		}
	}
	
	//Wand Instrument Up
	else if (elementUp2 == 2) {
		var upValue = Math.floor ((Math.random() * 2) + 1);
		//Draw Other
		if (upValue == 1) {
			var classValue = Math.floor ((Math.random() * 9) + 1);
			if (classValue == 1){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('knife');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('knife');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('knife');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 2){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('spear');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('spear');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('spear');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 3){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('axe');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('axe');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('axe');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 4){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('sword');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('sword');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('sword');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 5){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('gun');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('gun');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('gun');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				} 
			}
			else if (classValue == 6){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('knuckle');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('knuckle');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('knuckle');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}					
			} else if (classValue == 7){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('bow');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('bow');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('bow');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 8){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('katana');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('katana');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('katana');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 9){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('summon');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('summon');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('summon');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			}
		}
		//Draw wand instrument
		else if (upValue == 2) {
			var classValue = Math.floor ((Math.random() * 2) + 1);
			if (classValue == 1){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('wand');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('wand');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else{
					cardIMG = pickSSRByClass('wand');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 2){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('instrument');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('instrument');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else{
					cardIMG = pickSSRByClass('instrument');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			}
		}
	}
	
	//Knuckle Bow Up
	else if (elementUp2 == 3) {
		var upValue = Math.floor ((Math.random() * 2) + 1);
		//Draw Other
		if (upValue == 1) {
			var classValue = Math.floor ((Math.random() * 9) + 1);
			if (classValue == 1){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('knife');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('knife');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('knife');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 2){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('spear');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('spear');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('spear');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 3){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('axe');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('axe');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('axe');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 4){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('sword');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('sword');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('sword');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 5){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('gun');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('gun');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('gun');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 6){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('wand');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('wand');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('wand');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}					
			} else if (classValue == 7){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('instrument');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('instrument');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('instrument');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 8){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('katana');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('katana');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('katana');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 9){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('summon');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('summon');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('summon');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			}
		}
		//Draw knuckle bow
		else if (upValue == 2) {
			var classValue = Math.floor ((Math.random() * 2) + 1);
			if (classValue == 1){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('knuckle');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('knuckle');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else{
					cardIMG = pickSSRByClass('knuckle');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 2){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('bow');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('bow');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else{
					cardIMG = pickSSRByClass('bow');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			}
		}
	}
	
	//Knife Gun Up
	else if (elementUp2 == 4) {
		var upValue = Math.floor ((Math.random() * 2) + 1);
		//Draw Other
		if (upValue == 1) {
			var classValue = Math.floor ((Math.random() * 9) + 1);
			if (classValue == 1){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('knuckle');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('knuckle');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('knuckle');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 2){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('spear');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('spear');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('spear');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 3){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('axe');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('axe');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('axe');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 4){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('sword');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('sword');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('sword');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 5){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('bow');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('bow');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('bow');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 6){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('wand');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('wand');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('wand');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}					
			} else if (classValue == 7){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('instrument');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('instrument');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('instrument');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 8){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('katana');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('katana');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('katana');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 9){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('summon');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('summon');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('summon');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			}
		}
		//Draw knife gun
		else if (upValue == 2) {
			var classValue = Math.floor ((Math.random() * 2) + 1);
			if (classValue == 1){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('knife');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('knife');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else{
					cardIMG = pickSSRByClass('knife');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 2){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('gun');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('gun');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else{
					cardIMG = pickSSRByClass('gun');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			}
		}
	}
	
	//Spear Axe Up
	else if (elementUp2 == 5) {
		var upValue = Math.floor ((Math.random() * 2) + 1);
		//Draw Other
		if (upValue == 1) {
			var classValue = Math.floor ((Math.random() * 9) + 1);
			if (classValue == 1){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('knuckle');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('knuckle');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('knuckle');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 2){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('knife');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('knife');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('knife');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 3){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('gun');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('gun');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('gun');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 4){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('sword');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('sword');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('sword');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 5){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('bow');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('bow');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('bow');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 6){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('wand');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('wand');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('wand');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}					
			} else if (classValue == 7){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('instrument');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('instrument');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('instrument');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 8){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('katana');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('katana');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('katana');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 9){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('summon');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('summon');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('summon');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			}
		}
		//Draw spear axe
		else if (upValue == 2) {
			var classValue = Math.floor ((Math.random() * 2) + 1);
			if (classValue == 1){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('spear');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('spear');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else{
					cardIMG = pickSSRByClass('spear');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			} else if (classValue == 2){
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('axe');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('axe');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else{
					cardIMG = pickSSRByClass('axe');
					var image = document.getElementById('item1');
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.ssrNum.Display.value = eval(ssrNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
					ssrRecord.innerHTML = '<img src="' + cardIMG[0] + '"/>';
					ssrGet++;
				}
			}
		}
	}
	
	
	/* Add Cash 90 to input box and clear other 9 items */
	document.cash.Display.value = eval(cash.Display.value) +90;
	var itemClean = ["item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10"];
	
	for (var x=0; x<9; x++){
		document.getElementById(itemClean[x]).innerHTML = '';
	}
	
	document.rNum.Display2.value = eval(rNum.Display.value) / (eval(rNum.Display.value) + eval(srNum.Display.value) + eval(ssrNum.Display.value)) * 100;
	document.srNum.Display2.value = eval(srNum.Display.value) / (eval(rNum.Display.value) + eval(srNum.Display.value) + eval(ssrNum.Display.value)) * 100;
	document.ssrNum.Display2.value = eval(ssrNum.Display.value) / (eval(rNum.Display.value) + eval(srNum.Display.value) + eval(ssrNum.Display.value)) * 100;
	
	if (ssrGet == 100) {
		ssrGet = 1;
	}
	
	document.wDay.Display.value = eval(wDay.Display.value) + 1;
	if (eval(wDay.Display.value) == 31){
		document.wDay.Display.value = 1;
		document.mDay.Display.value = eval(mDay.Display.value) + 1;
		var btnChange = document.getElementById('drawBtn3');
		btnChange.disabled = false;
		btnChange.style.background = "url(../images/singledraw1.png)";
	}
}
function starLegend() {
	var itemArr = ["item4", "item5", "item6", "item7", "item1", "item2", "item3", "item8", "item9", "item10", ];
	var f = document.getElementById("slt_dMethod2");
	var elementUp2 = f.options[f.selectedIndex].value;
	var ssrRecord = document.getElementById('box' + ssrGet);

	//Sword Katana Up
	if (elementUp2 == 1) {
		for (var x=0; x<9; x++){
			var upValue = Math.floor ((Math.random() * 2) + 1);
			//Draw Other
			if (upValue == 1) {
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('knife','spear','axe','wand','gun','knuckle','bow','instrument','summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('knife','spear','axe','wand','gun','knuckle','bow','instrument','summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('knife','spear','axe','wand','gun','knuckle','bow','instrument','summon');
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
			//Draw sword katana
			else if (upValue == 2) {
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('sword', 'katana');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('sword', 'katana');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else{
					cardIMG = pickSSRByClass('sword', 'katana');
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
		var upValue = Math.floor ((Math.random() * 2) + 1);
		//Draw Other
		if (upValue == 1) {
			cardIMG = pickSSRByClass('knife','spear','axe','wand','gun','knuckle','bow','instrument','summon');
			var image = document.getElementById('item10');
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
	
		//Draw sword katana
		else if (upValue == 2) {
			cardIMG = pickSSRByClass('sword', 'katana');
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
	
	//Wand Instrument Up
	else if (elementUp2 == 2) {
		for (var x=0; x<9; x++){
			var upValue = Math.floor ((Math.random() * 2) + 1);
			//Draw Other
			if (upValue == 1) {
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('sword','knife','spear','axe','gun','knuckle','bow','katana','summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('sword','knife','spear','axe','gun','knuckle','bow','katana','summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('sword','knife','spear','axe','gun','knuckle','bow','katana','summon');
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
			//Draw sword katana
			else if (upValue == 2) {
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('wand','instrument');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('wand','instrument');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else{
					cardIMG = pickSSRByClass('wand','instrument');
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
		var upValue = Math.floor ((Math.random() * 2) + 1);
		//Draw Other
		if (upValue == 1) {
			cardIMG = pickSSRByClass('sword','knife','spear','axe','gun','knuckle','bow','katana','summon');
			var image = document.getElementById('item10');
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
		//Draw sword katana
		else if (upValue == 2) {
			cardIMG = pickSSRByClass('wand','instrument');
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
	
	//Knuckle Bow Up
	else if (elementUp2 == 3) {
		for (var x=0; x<9; x++){
			var upValue = Math.floor ((Math.random() * 2) + 1);
			//Draw Other
			if (upValue == 1) {
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('sword','knife','spear','axe','wand','gun','instrument','katana','summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('sword','knife','spear','axe','wand','gun','instrument','katana','summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('sword','knife','spear','axe','wand','gun','instrument','katana','summon');
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
			//Draw sword katana
			else if (upValue == 2) {
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('knuckle','bow');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('knuckle','bow');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else{
					cardIMG = pickSSRByClass('knuckle','bow');
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
		var upValue = Math.floor ((Math.random() * 2) + 1);
		//Draw Other
		if (upValue == 1) {
			cardIMG = pickSSRByClass('sword','knife','spear','axe','wand','gun','instrument','katana','summon');
			var image = document.getElementById('item10');
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
		//Draw sword katana
		else if (upValue == 2) {
			cardIMG = pickSSRByClass('knuckle','bow');
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
	
	//Knife Gun Up
	else if (elementUp2 == 4) {
		for (var x=0; x<9; x++){
			var upValue = Math.floor ((Math.random() * 2) + 1);
			//Draw Other
			if (upValue == 1) {
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('sword','spear','axe','wand','knuckle','bow','instrument','katana','summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('sword','spear','axe','wand','knuckle','bow','instrument','katana','summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('sword','spear','axe','wand','knuckle','bow','instrument','katana','summon');
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
			//Draw sword katana
			else if (upValue == 2) {
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('knife','gun');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('knife','gun');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else{
					cardIMG = pickSSRByClass('knife','gun');
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
		var upValue = Math.floor ((Math.random() * 2) + 1);
		//Draw Other
		if (upValue == 1) {
			cardIMG = pickSSRByClass('sword','spear','axe','wand','knuckle','bow','instrument','katana','summon');
			var image = document.getElementById('item10');
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
		//Draw sword katana
		else if (upValue == 2) {
			cardIMG = pickSSRByClass('knife','gun');
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
		
	//Spear Axe Up
	else if (elementUp2 == 5) {
		for (var x=0; x<9; x++){
			var upValue = Math.floor ((Math.random() * 2) + 1);
			//Draw Other
			if (upValue == 1) {
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('sword','knife','wand','gun','knuckle','bow','instrument','katana','summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('sword','knife','wand','gun','knuckle','bow','instrument','katana','summon');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else {
					cardIMG = pickSSRByClass('sword','knife','wand','gun','knuckle','bow','instrument','katana','summon');
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
			//Draw sword katana
			else if (upValue == 2) {
				var rareGate = Math.floor((Math.random() * 100) + 1);
				//Draw R
				if (rareGate <= 82) {
					cardIMG = pickRByClass('spear','axe');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' + cardIMG[0]  + '"/>';
					document.rNum.Display.value = eval(rNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				} 
				//Draw SR
				else if (rareGate >=83 && rareGate <=97){
					cardIMG = pickSRByClass('spear','axe');
					var image = document.getElementById(itemArr[x]);
					image.innerHTML = '<img src="' +  cardIMG[0] + '"/>';
					document.srNum.Display.value = eval(srNum.Display.value) + 1;
					if (cardIMG[4] != ""){
						image.innerHTML = '<img src="' + cardIMG[0] + '"/><img class="overlayImage2" src="' + cardIMG[4] +'"/>';
						document.getElementById(cardIMG[5]).innerHTML = '<img src="' + cardIMG[3] +'"/>';
					}
				}
				//Draw SSR
				else{
					cardIMG = pickSSRByClass('spear','axe');
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
		var upValue = Math.floor ((Math.random() * 2) + 1);
		//Draw Other
		if (upValue == 1) {
			cardIMG = pickSSRByClass('sword','knife','wand','gun','knuckle','bow','instrument','katana','summon');
			var image = document.getElementById('item10');
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
		//Draw sword katana
		else if (upValue == 2) {
			cardIMG = pickSSRByClass('spear','axe');
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
	
	
	document.cash.Display.value = eval(cash.Display.value) +3000;
	document.rNum.Display2.value = eval(rNum.Display.value) / (eval(rNum.Display.value) + eval(srNum.Display.value) + eval(ssrNum.Display.value)) * 100;
	document.srNum.Display2.value = eval(srNum.Display.value) / (eval(rNum.Display.value) + eval(srNum.Display.value) + eval(ssrNum.Display.value)) * 100;
	document.ssrNum.Display2.value = eval(ssrNum.Display.value) / (eval(rNum.Display.value) + eval(srNum.Display.value) + eval(ssrNum.Display.value)) * 100;
	
	
	
	if (ssrGet == 100) {
		ssrGet = 1;
	}
	var btnChange = document.getElementById('drawBtn3');
	btnChange.disabled = true;
	btnChange.style.background = "url(../images/disabledraw.png)";
	
}
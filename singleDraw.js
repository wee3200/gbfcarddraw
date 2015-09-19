function singleDraw() {
	var e = document.getElementById("slt_dMethod");
	var elementUp = e.options[e.selectedIndex].value;
	
	//None Up
	if (elementUp == 1) {
		var rareGate = Math.floor((Math.random() * 100) + 1);
		// Generate R cards
		if (rareGate <= 82) {
			var rGate = Math.floor((Math.random() * 125) + 1);
			var image = document.getElementById('item1');
			if (rGate <= 16) {
				var dNum = rGate;
				image.innerHTML = '<img src="R/s' + dNum + '.jpg"/>';
			} else if (rGate >= 17 && rGate <= 29) {
				var dNum = rGate - 16;
				image.innerHTML = '<img src="R/n' + dNum + '.jpg"/>';
			} else if (rGate >= 30 && rGate <= 39) {
				var dNum = rGate - 29;
				image.innerHTML = '<img src="R/p' + dNum + '.jpg"/>';
			} else if (rGate >= 40 && rGate <= 51) {
				var dNum = rGate - 39;
				image.innerHTML = '<img src="R/x' + dNum + '.jpg"/>';
			} else if (rGate >= 52 && rGate <= 67) {
				var dNum = rGate - 51;
				image.innerHTML = '<img src="R/w' + dNum + '.jpg"/>';
			} else if (rGate >= 68 && rGate <= 78) {
				var dNum = rGate - 67;
				image.innerHTML = '<img src="R/g' + dNum + '.jpg"/>';
			} else if (rGate >= 79 && rGate <= 91) {
				var dNum = rGate - 78;
				image.innerHTML = '<img src="R/k' + dNum + '.jpg"/>';
			} else if (rGate >= 92 && rGate <= 98) {
				var dNum = rGate - 91;
				image.innerHTML = '<img src="R/b' + dNum + '.jpg"/>';
			} else if (rGate >= 99 && rGate <= 99) {
				var dNum = rGate - 98;
				image.innerHTML = '<img src="R/i' + dNum + '.jpg"/>';
			} else if (rGate >= 100 && rGate <= 101) {
				var dNum = rGate - 99;
				image.innerHTML = '<img src="R/a' + dNum + '.jpg"/>';
			} else if (rGate >= 102 && rGate <= 125) {
				var dNum = rGate - 101;
				image.innerHTML = '<img src="R/m' + dNum + '.jpg"/>';
			}
			
			/* R Charaters Release */
			
			if (rGate == 4) {
				image.innerHTML = '<img src="R/s4.jpg"/><img class="overlayImage2" src="characters/R/l2.png"/>';
			} else if (rGate == 5) {
				image.innerHTML = '<img src="R/s5.jpg"/><img class="overlayImage2" src="characters/R/e2.png"/>';
			} else if (rGate == 8) {
				image.innerHTML = '<img src="R/s8.jpg"/><img class="overlayImage2" src="characters/R/i4.png"/>';
			} else if (rGate == 11) {
				image.innerHTML = '<img src="R/s11.jpg"/><img class="overlayImage2" src="characters/R/e3.png"/>';
			} else if (rGate == 12) {
				image.innerHTML = '<img src="R/s12.jpg"/><img class="overlayImage2" src="characters/R/e4.png"/>';
			} else if (rGate == 13) {
				image.innerHTML = '<img src="R/s13.jpg"/><img class="overlayImage2" src="characters/R/i7.png"/>';
			} else if (rGate == 14) {
				image.innerHTML = '<img src="R/s14.jpg"/><img class="overlayImage2" src="characters/R/w4.png"/>';
			} else if (rGate == 15) {
				image.innerHTML = '<img src="R/s15.jpg"/><img class="overlayImage2" src="characters/R/i5.png"/>';
			} else if (rGate == 16) {
				image.innerHTML = '<img src="R/s16.jpg"/><img class="overlayImage2" src="characters/R/i6.png"/>';
			} else if (rGate == 22) {
				image.innerHTML = '<img src="R/n6.jpg"/><img class="overlayImage2" src="characters/R/d1.png"/>';
			} else if (rGate == 28) {
				image.innerHTML = '<img src="R/n12.jpg"/><img class="overlayImage2" src="characters/R/d3.png"/>';
			} else if (rGate == 29) {
				image.innerHTML = '<img src="R/n13.jpg"/><img class="overlayImage2" src="characters/R/d4.png"/>';
			} else if (rGate == 35) {
				image.innerHTML = '<img src="R/p6.jpg"/><img class="overlayImage2" src="characters/R/w3.png"/>';
			} else if (rGate == 38) {
				image.innerHTML = '<img src="R/p9.jpg"/><img class="overlayImage2" src="characters/R/f5.png"/>';
			} else if (rGate == 39) {
				image.innerHTML = '<img src="R/p10.jpg"/><img class="overlayImage2" src="characters/R/w2.png"/>';
			} else if (rGate == 40) {
				image.innerHTML = '<img src="R/x1.jpg"/><img class="overlayImage2" src="characters/R/f1.png"/>';
			} else if (rGate == 45) {
				image.innerHTML = '<img src="R/x6.jpg"/><img class="overlayImage2" src="characters/R/e6.png"/>';
			} else if (rGate == 46) {
				image.innerHTML = '<img src="R/x7.jpg"/><img class="overlayImage2" src="characters/R/i2.png"/>';
			} else if (rGate == 50) {
				image.innerHTML = '<img src="R/x11.jpg"/><img class="overlayImage2" src="characters/R/l4.png"/>';
			} else if (rGate == 51) {
				image.innerHTML = '<img src="R/w1.jpg"/><img class="overlayImage2" src="characters/R/f7.png"/>';
			} else if (rGate == 55) {
				image.innerHTML = '<img src="R/w5.jpg"/><img class="overlayImage2" src="characters/R/w5.png"/>';
			} else if (rGate == 56) {
				image.innerHTML = '<img src="R/w6.jpg"/><img class="overlayImage2" src="characters/R/e1.png"/>';
			} else if (rGate == 58) {
				image.innerHTML = '<img src="R/w8.jpg"/><img class="overlayImage2" src="characters/R/e8.png"/>';
			} else if (rGate == 59) {
				image.innerHTML = '<img src="R/w9.jpg"/><img class="overlayImage2" src="characters/R/f3.png"/>';
			} else if (rGate == 60) {
				image.innerHTML = '<img src="R/w10.jpg"/><img class="overlayImage2" src="characters/R/i3.png"/>';
			} else if (rGate == 64) {
				image.innerHTML = '<img src="R/w14.jpg"/><img class="overlayImage2" src="characters/R/l3.png"/>';
			} else if (rGate == 65) {
				image.innerHTML = '<img src="R/w15.jpg"/><img class="overlayImage2" src="characters/R/d2.png"/>';
			} else if (rGate == 70) {
				image.innerHTML = '<img src="R/g3.jpg"/><img class="overlayImage2" src="characters/R/e7.png"/>';
			} else if (rGate == 71) {
				image.innerHTML = '<img src="R/g4.jpg"/><img class="overlayImage2" src="characters/R/f6.png"/>';
			} else if (rGate == 72) {
				image.innerHTML = '<img src="R/g5.jpg"/><img class="overlayImage2" src="characters/R/f8.png"/>';
			} else if (rGate == 73) {
				image.innerHTML = '<img src="R/g6.jpg"/><img class="overlayImage2" src="characters/R/w1.png"/>';
			} else if (rGate == 76) {
				image.innerHTML = '<img src="R/g9.jpg"/><img class="overlayImage2" src="characters/R/f4.png"/>';
			} else if (rGate == 82) {
				image.innerHTML = '<img src="R/k4.jpg"/><img class="overlayImage2" src="characters/R/f2.png"/>';
			} else if (rGate == 86) {
				image.innerHTML = '<img src="R/k8.jpg"/><img class="overlayImage2" src="characters/R/i1.png"/>';
			} else if (rGate == 88) {
				image.innerHTML = '<img src="R/k10.jpg"/><img class="overlayImage2" src="characters/R/e5.png"/>';
			} else if (rGate == 91) {
				image.innerHTML = '<img src="R/k13.jpg"/><img class="overlayImage2" src="characters/R/l1.png"/>';
			}
				
		} 
		
		
		//Generate SR Cards
		else if (rareGate >=83 && rareGate <=97){
			var srGate = Math.floor((Math.random() * 95) + 1);
			var image = document.getElementById('item1');
			if (srGate <= 12) {
				var dNum = srGate;
				image.innerHTML = '<img src="SR/s' + dNum + '.jpg"/>';
			} else if (srGate >= 13 && srGate <= 20) {
				var dNum = srGate - 12;
				image.innerHTML = '<img src="SR/n' + dNum + '.jpg"/>';
			} else if (srGate >= 21 && srGate <= 28) {
				var dNum = srGate - 20;
				image.innerHTML = '<img src="SR/p' + dNum + '.jpg"/>';
			} else if (srGate >= 29 && srGate <= 32) {
				var dNum = srGate - 28;
				image.innerHTML = '<img src="SR/x' + dNum + '.jpg"/>';
			} else if (srGate >= 33 && srGate <= 42) {
				var dNum = srGate - 32;
				image.innerHTML = '<img src="SR/w' + dNum + '.jpg"/>';
			} else if (srGate >= 43 && srGate <= 49) {
				var dNum = srGate - 42;
				image.innerHTML = '<img src="SR/g' + dNum + '.jpg"/>';
			} else if (srGate >= 50 && srGate <= 61) {
				var dNum = srGate - 49;
				image.innerHTML = '<img src="SR/k' + dNum + '.jpg"/>';
			} else if (srGate >= 62 && srGate <= 68) {
				var dNum = srGate - 61;
				image.innerHTML = '<img src="SR/b' + dNum + '.jpg"/>';
			} else if (srGate >= 69 && srGate <= 72) {
				var dNum = srGate - 68;
				image.innerHTML = '<img src="SR/i' + dNum + '.jpg"/>';
			} else if (srGate >= 73 && srGate <= 75) {
				var dNum = srGate - 72;
				image.innerHTML = '<img src="SR/a' + dNum + '.jpg"/>';
			} else if (srGate >= 76 && srGate <= 95) {
				var dNum = srGate - 75;
				image.innerHTML = '<img src="SR/m' + dNum + '.jpg"/>';
			}
			
			/* SR Charaters Release */
			
			if (srGate == 2) {
				image.innerHTML = '<img src="SR/s2.jpg"/><img class="overlayImage2" src="characters/SR/e2.png"/>';
			} else if (srGate == 3) {
				image.innerHTML = '<img src="SR/s3.jpg"/><img class="overlayImage2" src="characters/SR/f4.png"/>';
			} else if (srGate == 4) {
				image.innerHTML = '<img src="SR/s4.jpg"/><img class="overlayImage2" src="characters/SR/f6.png"/>';
			} else if (srGate == 6) {
				image.innerHTML = '<img src="SR/s6.jpg"/><img class="overlayImage2" src="characters/SR/w1.png"/>';
			} else if (srGate == 9) {
				image.innerHTML = '<img src="SR/s9.jpg"/><img class="overlayImage2" src="characters/SR/l6.png"/>';
			} else if (srGate == 10) {
				image.innerHTML = '<img src="SR/s10.jpg"/><img class="overlayImage2" src="characters/SR/i3.png"/>';
			} else if (srGate == 11) {
				image.innerHTML = '<img src="SR/s11.jpg"/><img class="overlayImage2" src="characters/SR/d3.png"/>';
			} else if (srGate == 12) {
				image.innerHTML = '<img src="SR/s12.jpg"/><img class="overlayImage2" src="characters/SR/d1.png"/>';
			} else if (srGate == 13) {
				image.innerHTML = '<img src="SR/n1.jpg"/><img class="overlayImage2" src="characters/SR/f3.png"/>';
			} else if (srGate == 17) {
				image.innerHTML = '<img src="SR/n5.jpg"/><img class="overlayImage2" src="characters/SR/e3.png"/>';
			} else if (srGate == 18) {
				image.innerHTML = '<img src="SR/n6.jpg"/><img class="overlayImage2" src="characters/SR/l4.png"/>';
			} else if (srGate == 20) {
				image.innerHTML = '<img src="SR/n8.jpg"/><img class="overlayImage2" src="characters/SR/d5.png"/>';
			} else if (srGate == 21) {
				image.innerHTML = '<img src="SR/p1.jpg"/><img class="overlayImage2" src="characters/SR/e4.png"/>';
			} else if (srGate == 23) {
				image.innerHTML = '<img src="SR/p3.jpg"/><img class="overlayImage2" src="characters/SR/w4.png"/>';
			} else if (srGate == 25) {
				image.innerHTML = '<img src="SR/p5.jpg"/><img class="overlayImage2" src="characters/SR/e5.png"/>';
			} else if (srGate == 32) {
				image.innerHTML = '<img src="SR/x4.jpg"/><img class="overlayImage2" src="characters/SR/d4.png"/>';
			} else if (srGate == 33) {
				image.innerHTML = '<img src="SR/w1.jpg"/><img class="overlayImage2" src="characters/SR/f8.png"/>';
			} else if (srGate == 34) {
				image.innerHTML = '<img src="SR/w2.jpg"/><img class="overlayImage2" src="characters/SR/l3.png"/>';
			} else if (srGate == 35) {
				image.innerHTML = '<img src="SR/w3.jpg"/><img class="overlayImage2" src="characters/SR/w3.png"/>';
			} else if (srGate == 38) {
				image.innerHTML = '<img src="SR/w6.jpg"/><img class="overlayImage2" src="characters/SR/e7.png"/>';
			} else if (srGate == 39) {
				image.innerHTML = '<img src="SR/w7.jpg"/><img class="overlayImage2" src="characters/SR/l5.png"/>';
			} else if (srGate == 40) {
				image.innerHTML = '<img src="SR/w8.jpg"/><img class="overlayImage2" src="characters/SR/l7.png"/>';
			} else if (srGate == 42) {
				image.innerHTML = '<img src="SR/w10.jpg"/><img class="overlayImage2" src="characters/SR/d2.png"/>';
			} else if (srGate == 44) {
				image.innerHTML = '<img src="SR/g2.jpg"/><img class="overlayImage2" src="characters/SR/f7.png"/>';
			} else if (srGate == 45) {
				image.innerHTML = '<img src="SR/g3.jpg"/><img class="overlayImage2" src="characters/SR/w5.png"/>';
			} else if (srGate == 50) {
				image.innerHTML = '<img src="SR/k1.jpg"/><img class="overlayImage2" src="characters/SR/f2.png"/>';
			} else if (srGate == 51) {
				image.innerHTML = '<img src="SR/k2.jpg"/><img class="overlayImage2" src="characters/SR/f5.png"/>';
			} else if (srGate == 52) {
				image.innerHTML = '<img src="SR/k3.jpg"/><img class="overlayImage2" src="characters/SR/f1.png"/>';
			} else if (srGate == 55) {
				image.innerHTML = '<img src="SR/k6.jpg"/><img class="overlayImage2" src="characters/SR/e1.png"/>';
			} else if (srGate == 56) {
				image.innerHTML = '<img src="SR/k7.jpg"/><img class="overlayImage2" src="characters/SR/e6.png"/>';
			} else if (srGate == 58) {
				image.innerHTML = '<img src="SR/k9.jpg"/><img class="overlayImage2" src="characters/SR/i2.png"/>';
			} else if (srGate == 59) {
				image.innerHTML = '<img src="SR/k10.jpg"/><img class="overlayImage2" src="characters/SR/i6.png"/>';
			} else if (srGate == 60) {
				image.innerHTML = '<img src="SR/k11.jpg"/><img class="overlayImage2" src="characters/SR/l1.png"/>';
			} else if (srGate == 61) {
				image.innerHTML = '<img src="SR/k12.jpg"/><img class="overlayImage2" src="characters/SR/l2.png"/>';
			} else if (srGate == 65) {
				image.innerHTML = '<img src="SR/b4.jpg"/><img class="overlayImage2" src="characters/SR/w6.png"/>';
			} else if (srGate == 67) {
				image.innerHTML = '<img src="SR/b6.jpg"/><img class="overlayImage2" src="characters/SR/i5.png"/>';
			} else if (srGate == 69) {
				image.innerHTML = '<img src="SR/i1.jpg"/><img class="overlayImage2" src="characters/SR/w2.png"/>';
			} else if (srGate == 72) {
				image.innerHTML = '<img src="SR/i3.jpg"/><img class="overlayImage2" src="characters/SR/i1.png"/>';
			} else if (srGate == 73) {
				image.innerHTML = '<img src="SR/i4.jpg"/><img class="overlayImage2" src="characters/SR/i4.png"/>';
			}
		
		
		} 
		
		
		//Generate SSR cards
		else {
			var ssrGate = Math.floor((Math.random() * 160) + 1);
			var image = document.getElementById('item1');
			if (ssrGate <= 24) {
				var dNum = ssrGate;
				image.innerHTML = '<img src="SSR/s' + dNum + '.jpg"/>';
			} else if (ssrGate >= 25 && ssrGate <= 36) {
				var dNum = ssrGate - 24;
				image.innerHTML = '<img src="SSR/n' + dNum + '.jpg"/>';
			} else if (ssrGate >= 37 && ssrGate <= 46) {
				var dNum = ssrGate - 36;
				image.innerHTML = '<img src="SSR/p' + dNum + '.jpg"/>';
			} else if (ssrGate >= 47 && ssrGate <= 58) {
				var dNum = ssrGate - 46;
				image.innerHTML = '<img src="SSR/x' + dNum + '.jpg"/>';
			} else if (ssrGate >= 59 && ssrGate <= 72) {
				var dNum = ssrGate - 58;
				image.innerHTML = '<img src="SSR/w' + dNum + '.jpg"/>';
			} else if (ssrGate >= 73 && ssrGate <= 80) {
				var dNum = ssrGate - 72;
				image.innerHTML = '<img src="SSR/g' + dNum + '.jpg"/>';
			} else if (ssrGate >= 81 && ssrGate <= 90) {
				var dNum = ssrGate - 80;
				image.innerHTML = '<img src="SSR/k' + dNum + '.jpg"/>';
			} else if (ssrGate >= 91 && ssrGate <= 100) {
				var dNum = ssrGate - 90;
				image.innerHTML = '<img src="SSR/b' + dNum + '.jpg"/>';
			}  else if (ssrGate >= 101 && ssrGate <= 106) {
				var dNum = ssrGate - 100;
				image.innerHTML = '<img src="SSR/i' + dNum + '.jpg"/>';
			}  else if (ssrGate >= 107 && ssrGate <= 114) {
				var dNum = ssrGate - 106;
				image.innerHTML = '<img src="SSR/a' + dNum + '.jpg"/>';
			}  else if (ssrGate >= 115 && ssrGate <= 160) {
				var dNum = ssrGate - 114;
				image.innerHTML = '<img src="SSR/m' + dNum + '.jpg"/>';
			} 
			
			/* SSR Charaters Release */
			if (ssrGate == 1 || ssrGate == 2) {
				image.innerHTML = '<img src="SSR/s1.jpg"/><img class="overlayImage2" src="characters/SSR/w1.png"/>';
			} else if (ssrGate == 3 || ssrGate == 4) {
				image.innerHTML = '<img src="SSR/s3.jpg"/><img class="overlayImage2" src="characters/SSR/f1.png"/>';
			} else if (ssrGate == 7 || ssrGate == 8) {
				image.innerHTML = '<img src="SSR/s7.jpg"/><img class="overlayImage2" src="characters/SSR/w5.png"/>';
			} else if (ssrGate == 9 || ssrGate == 10) {
				image.innerHTML = '<img src="SSR/s9.jpg"/><img class="overlayImage2" src="characters/SSR/e2.png"/>';
			} else if (ssrGate == 11 || ssrGate == 12) {
				image.innerHTML = '<img src="SSR/s11.jpg"/><img class="overlayImage2" src="characters/SSR/e1.png"/>';
			} else if (ssrGate == 15 || ssrGate == 16) {
				image.innerHTML = '<img src="SSR/s15.jpg"/><img class="overlayImage2" src="characters/SSR/l4.png"/>';
			} else if (ssrGate == 17 || ssrGate == 18) {
				image.innerHTML = '<img src="SSR/s17.jpg"/><img class="overlayImage2" src="characters/SSR/l1.png"/>';
			} else if (ssrGate == 19 || ssrGate == 20) {
				image.innerHTML = '<img src="SSR/s19.jpg"/><img class="overlayImage2" src="characters/SSR/l6.png"/>';
			} else if (ssrGate == 21 || ssrGate == 22) {
				image.innerHTML = '<img src="SSR/s21.jpg"/><img class="overlayImage2" src="characters/SSR/d4.png"/>';
			} else if (ssrGate == 23 || ssrGate == 24) {
				image.innerHTML = '<img src="SSR/s21.jpg"/><img class="overlayImage2" src="characters/SSR/d2.png"/>';
			} else if (ssrGate == 25 || ssrGate == 26) {
				image.innerHTML = '<img src="SSR/n1.jpg"/><img class="overlayImage2" src="characters/SSR/w2.png"/>';
			} else if (ssrGate == 29 || ssrGate == 30) {
				image.innerHTML = '<img src="SSR/n5.jpg"/><img class="overlayImage2" src="characters/SSR/i4.png"/>';
			} else if (ssrGate == 31 || ssrGate == 32) {
				image.innerHTML = '<img src="SSR/n7.jpg"/><img class="overlayImage2" src="characters/SSR/f6.png"/>';
			} else if (ssrGate == 33 || ssrGate == 34) {
				image.innerHTML = '<img src="SSR/n9.jpg"/><img class="overlayImage2" src="characters/SSR/d6.png"/>';
			} else if (ssrGate == 37 || ssrGate == 38) {
				image.innerHTML = '<img src="SSR/p1.jpg"/><img class="overlayImage2" src="characters/SSR/i1.png"/>';
			} else if (ssrGate == 39 || ssrGate == 40) {
				image.innerHTML = '<img src="SSR/p3.jpg"/><img class="overlayImage2" src="characters/SSR/f3.png"/>';
			} else if (ssrGate == 41 || ssrGate == 42) {
				image.innerHTML = '<img src="SSR/p5.jpg"/><img class="overlayImage2" src="characters/SSR/e6.png"/>';
			} else if (ssrGate == 43 || ssrGate == 44) {
				image.innerHTML = '<img src="SSR/p7.jpg"/><img class="overlayImage2" src="characters/SSR/i6.png"/>';
			} else if (ssrGate == 47 || ssrGate == 48) {
				image.innerHTML = '<img src="SSR/x1.jpg"/><img class="overlayImage2" src="characters/SSR/f5.png"/>';
			} else if (ssrGate == 53 || ssrGate == 54) {
				image.innerHTML = '<img src="SSR/x7.jpg"/><img class="overlayImage2" src="characters/SSR/i2.png"/>';
			} else if (ssrGate == 55 || ssrGate == 56) {
				image.innerHTML = '<img src="SSR/x9.jpg"/><img class="overlayImage2" src="characters/SSR/d1.png"/>';
			} else if (ssrGate == 57 || ssrGate == 58) {
				image.innerHTML = '<img src="SSR/x11.jpg"/><img class="overlayImage2" src="characters/SSR/e5.png"/>';
			} else if (ssrGate == 59 || ssrGate == 60) {
				image.innerHTML = '<img src="SSR/w1.jpg"/><img class="overlayImage2" src="characters/SSR/f2.png"/>';
			} else if (ssrGate == 61 || ssrGate == 62) {
				image.innerHTML = '<img src="SSR/w3.jpg"/><img class="overlayImage2" src="characters/SSR/w3.png"/>';
			} else if (ssrGate == 63 || ssrGate == 64) {
				image.innerHTML = '<img src="SSR/w5.jpg"/><img class="overlayImage2" src="characters/SSR/e3.png"/>';
			} else if (ssrGate == 65 || ssrGate == 66) {
				image.innerHTML = '<img src="SSR/w7.jpg"/><img class="overlayImage2" src="characters/SSR/l2.png"/>';
			} else if (ssrGate == 69 || ssrGate == 70) {
				image.innerHTML = '<img src="SSR/w11.jpg"/><img class="overlayImage2" src="characters/SSR/l5.png"/>';
			} else if (ssrGate == 71 || ssrGate == 72) {
				image.innerHTML = '<img src="SSR/w13.jpg"/><img class="overlayImage2" src="characters/SSR/d3.png"/>';
			} else if (ssrGate == 75 || ssrGate == 76) {
				image.innerHTML = '<img src="SSR/g3.jpg"/><img class="overlayImage2" src="characters/SSR/w4.png"/>';
			} else if (ssrGate == 79 || ssrGate == 80) {
				image.innerHTML = '<img src="SSR/g7.jpg"/><img class="overlayImage2" src="characters/SSR/i3.png"/>';
			} else if (ssrGate == 83 || ssrGate == 84) {
				image.innerHTML = '<img src="SSR/k3.jpg"/><img class="overlayImage2" src="characters/SSR/f7.png"/>';
			} else if (ssrGate == 85 || ssrGate == 86) {
				image.innerHTML = '<img src="SSR/k5.jpg"/><img class="overlayImage2" src="characters/SSR/w6.png"/>';
			} else if (ssrGate == 89 || ssrGate == 90) {
				image.innerHTML = '<img src="SSR/k9.jpg"/><img class="overlayImage2" src="characters/SSR/d5.png"/>';
			} else if (ssrGate == 99 || ssrGate == 100) {
				image.innerHTML = '<img src="SSR/b9.jpg"/><img class="overlayImage2" src="characters/SSR/i5.png"/>';
			} else if (ssrGate == 101 || ssrGate == 102) {
				image.innerHTML = '<img src="SSR/i1.jpg"/><img class="overlayImage2" src="characters/SSR/f4.png"/>';
			} else if (ssrGate == 103 || ssrGate == 104) {
				image.innerHTML = '<img src="SSR/i3.jpg"/><img class="overlayImage2" src="characters/SSR/l3.png"/>';
			} else if (ssrGate == 105 || ssrGate == 106) {
				image.innerHTML = '<img src="SSR/i5.jpg"/><img class="overlayImage2" src="characters/SSR/e4.png"/>';
			} else if (ssrGate == 114 || ssrGate == 115) {
				image.innerHTML = '<img src="SSR/a8.jpg"/><img class="overlayImage2" src="characters/SSR/l7.png"/>';
			}
			
		}
		
	} 
	
	//Fire Up
	else if (elementUp == 2) {
		var upValue = Math.floor ((Math.random() * 100) + 1);
		//Draw others
		if (upValue <= 60) {
			var rareGate = Math.floor((Math.random() * 100) + 1);
			// Generate R cards
			if (rareGate <= 82) {
				var rGate = Math.floor((Math.random() * 125) + 1);
				var image = document.getElementById('item1');
				if (rGate <= 16) {
					var dNum = rGate;
					image.innerHTML = '<img src="R/s' + dNum + '.jpg"/>';
				} else if (rGate >= 17 && rGate <= 29) {
					var dNum = rGate - 16;
					image.innerHTML = '<img src="R/n' + dNum + '.jpg"/>';
				} else if (rGate >= 30 && rGate <= 39) {
					var dNum = rGate - 29;
					image.innerHTML = '<img src="R/p' + dNum + '.jpg"/>';
				} else if (rGate >= 40 && rGate <= 51) {
					var dNum = rGate - 39;
					image.innerHTML = '<img src="R/x' + dNum + '.jpg"/>';
				} else if (rGate >= 52 && rGate <= 67) {
					var dNum = rGate - 51;
					image.innerHTML = '<img src="R/w' + dNum + '.jpg"/>';
				} else if (rGate >= 68 && rGate <= 78) {
					var dNum = rGate - 67;
					image.innerHTML = '<img src="R/g' + dNum + '.jpg"/>';
				} else if (rGate >= 79 && rGate <= 91) {
					var dNum = rGate - 78;
					image.innerHTML = '<img src="R/k' + dNum + '.jpg"/>';
				} else if (rGate >= 92 && rGate <= 98) {
					var dNum = rGate - 91;
					image.innerHTML = '<img src="R/b' + dNum + '.jpg"/>';
				} else if (rGate >= 99 && rGate <= 99) {
					var dNum = rGate - 98;
					image.innerHTML = '<img src="R/i' + dNum + '.jpg"/>';
				} else if (rGate >= 100 && rGate <= 101) {
					var dNum = rGate - 99;
					image.innerHTML = '<img src="R/a' + dNum + '.jpg"/>';
				} else if (rGate >= 102 && rGate <= 125) {
					var dNum = rGate - 101;
					image.innerHTML = '<img src="R/m' + dNum + '.jpg"/>';
				}
				
				/* R Charaters Release */
				
				if (rGate == 4) {
					image.innerHTML = '<img src="R/s4.jpg"/><img class="overlayImage2" src="characters/R/l2.png"/>';
				} else if (rGate == 5) {
					image.innerHTML = '<img src="R/s5.jpg"/><img class="overlayImage2" src="characters/R/e2.png"/>';
				} else if (rGate == 8) {
					image.innerHTML = '<img src="R/s8.jpg"/><img class="overlayImage2" src="characters/R/i4.png"/>';
				} else if (rGate == 11) {
					image.innerHTML = '<img src="R/s11.jpg"/><img class="overlayImage2" src="characters/R/e3.png"/>';
				} else if (rGate == 12) {
					image.innerHTML = '<img src="R/s12.jpg"/><img class="overlayImage2" src="characters/R/e4.png"/>';
				} else if (rGate == 13) {
					image.innerHTML = '<img src="R/s13.jpg"/><img class="overlayImage2" src="characters/R/i7.png"/>';
				} else if (rGate == 14) {
					image.innerHTML = '<img src="R/s14.jpg"/><img class="overlayImage2" src="characters/R/w4.png"/>';
				} else if (rGate == 15) {
					image.innerHTML = '<img src="R/s15.jpg"/><img class="overlayImage2" src="characters/R/i5.png"/>';
				} else if (rGate == 16) {
					image.innerHTML = '<img src="R/s16.jpg"/><img class="overlayImage2" src="characters/R/i6.png"/>';
				} else if (rGate == 22) {
					image.innerHTML = '<img src="R/n6.jpg"/><img class="overlayImage2" src="characters/R/d1.png"/>';
				} else if (rGate == 28) {
					image.innerHTML = '<img src="R/n12.jpg"/><img class="overlayImage2" src="characters/R/d3.png"/>';
				} else if (rGate == 29) {
					image.innerHTML = '<img src="R/n13.jpg"/><img class="overlayImage2" src="characters/R/d4.png"/>';
				} else if (rGate == 35) {
					image.innerHTML = '<img src="R/p6.jpg"/><img class="overlayImage2" src="characters/R/w3.png"/>';
				} else if (rGate == 38) {
					image.innerHTML = '<img src="R/p9.jpg"/><img class="overlayImage2" src="characters/R/f5.png"/>';
				} else if (rGate == 39) {
					image.innerHTML = '<img src="R/p10.jpg"/><img class="overlayImage2" src="characters/R/w2.png"/>';
				} else if (rGate == 40) {
					image.innerHTML = '<img src="R/x1.jpg"/><img class="overlayImage2" src="characters/R/f1.png"/>';
				} else if (rGate == 45) {
					image.innerHTML = '<img src="R/x6.jpg"/><img class="overlayImage2" src="characters/R/e6.png"/>';
				} else if (rGate == 46) {
					image.innerHTML = '<img src="R/x7.jpg"/><img class="overlayImage2" src="characters/R/i2.png"/>';
				} else if (rGate == 50) {
					image.innerHTML = '<img src="R/x11.jpg"/><img class="overlayImage2" src="characters/R/l4.png"/>';
				} else if (rGate == 51) {
					image.innerHTML = '<img src="R/w1.jpg"/><img class="overlayImage2" src="characters/R/f7.png"/>';
				} else if (rGate == 55) {
					image.innerHTML = '<img src="R/w5.jpg"/><img class="overlayImage2" src="characters/R/w5.png"/>';
				} else if (rGate == 56) {
					image.innerHTML = '<img src="R/w6.jpg"/><img class="overlayImage2" src="characters/R/e1.png"/>';
				} else if (rGate == 58) {
					image.innerHTML = '<img src="R/w8.jpg"/><img class="overlayImage2" src="characters/R/e8.png"/>';
				} else if (rGate == 59) {
					image.innerHTML = '<img src="R/w9.jpg"/><img class="overlayImage2" src="characters/R/f3.png"/>';
				} else if (rGate == 60) {
					image.innerHTML = '<img src="R/w10.jpg"/><img class="overlayImage2" src="characters/R/i3.png"/>';
				} else if (rGate == 64) {
					image.innerHTML = '<img src="R/w14.jpg"/><img class="overlayImage2" src="characters/R/l3.png"/>';
				} else if (rGate == 65) {
					image.innerHTML = '<img src="R/w15.jpg"/><img class="overlayImage2" src="characters/R/d2.png"/>';
				} else if (rGate == 70) {
					image.innerHTML = '<img src="R/g3.jpg"/><img class="overlayImage2" src="characters/R/e7.png"/>';
				} else if (rGate == 71) {
					image.innerHTML = '<img src="R/g4.jpg"/><img class="overlayImage2" src="characters/R/f6.png"/>';
				} else if (rGate == 72) {
					image.innerHTML = '<img src="R/g5.jpg"/><img class="overlayImage2" src="characters/R/f8.png"/>';
				} else if (rGate == 73) {
					image.innerHTML = '<img src="R/g6.jpg"/><img class="overlayImage2" src="characters/R/w1.png"/>';
				} else if (rGate == 76) {
					image.innerHTML = '<img src="R/g9.jpg"/><img class="overlayImage2" src="characters/R/f4.png"/>';
				} else if (rGate == 82) {
					image.innerHTML = '<img src="R/k4.jpg"/><img class="overlayImage2" src="characters/R/f2.png"/>';
				} else if (rGate == 86) {
					image.innerHTML = '<img src="R/k8.jpg"/><img class="overlayImage2" src="characters/R/i1.png"/>';
				} else if (rGate == 88) {
					image.innerHTML = '<img src="R/k10.jpg"/><img class="overlayImage2" src="characters/R/e5.png"/>';
				} else if (rGate == 91) {
					image.innerHTML = '<img src="R/k13.jpg"/><img class="overlayImage2" src="characters/R/l1.png"/>';
				}
					
			} 
			
			
			//Generate SR Cards
			else if (rareGate >=82 && rareGate <=97){
				var srGate = Math.floor((Math.random() * 95) + 1);
				var image = document.getElementById('item1');
				if (srGate <= 12) {
					var dNum = srGate;
					image.innerHTML = '<img src="SR/s' + dNum + '.jpg"/>';
				} else if (srGate >= 13 && srGate <= 20) {
					var dNum = srGate - 12;
					image.innerHTML = '<img src="SR/n' + dNum + '.jpg"/>';
				} else if (srGate >= 21 && srGate <= 28) {
					var dNum = srGate - 20;
					image.innerHTML = '<img src="SR/p' + dNum + '.jpg"/>';
				} else if (srGate >= 29 && srGate <= 32) {
					var dNum = srGate - 28;
					image.innerHTML = '<img src="SR/x' + dNum + '.jpg"/>';
				} else if (srGate >= 33 && srGate <= 42) {
					var dNum = srGate - 32;
					image.innerHTML = '<img src="SR/w' + dNum + '.jpg"/>';
				} else if (srGate >= 43 && srGate <= 49) {
					var dNum = srGate - 42;
					image.innerHTML = '<img src="SR/g' + dNum + '.jpg"/>';
				} else if (srGate >= 50 && srGate <= 61) {
					var dNum = srGate - 49;
					image.innerHTML = '<img src="SR/k' + dNum + '.jpg"/>';
				} else if (srGate >= 62 && srGate <= 68) {
					var dNum = srGate - 61;
					image.innerHTML = '<img src="SR/b' + dNum + '.jpg"/>';
				} else if (srGate >= 69 && srGate <= 72) {
					var dNum = srGate - 68;
					image.innerHTML = '<img src="SR/i' + dNum + '.jpg"/>';
				} else if (srGate >= 73 && srGate <= 75) {
					var dNum = srGate - 72;
					image.innerHTML = '<img src="SR/a' + dNum + '.jpg"/>';
				} else if (srGate >= 76 && srGate <= 95) {
					var dNum = srGate - 75;
					image.innerHTML = '<img src="SR/m' + dNum + '.jpg"/>';
				}
				
				/* SR Charaters Release */
				
				if (srGate == 2) {
					image.innerHTML = '<img src="SR/s2.jpg"/><img class="overlayImage2" src="characters/SR/e2.png"/>';
				} else if (srGate == 3) {
					image.innerHTML = '<img src="SR/s3.jpg"/><img class="overlayImage2" src="characters/SR/f4.png"/>';
				} else if (srGate == 4) {
					image.innerHTML = '<img src="SR/s4.jpg"/><img class="overlayImage2" src="characters/SR/f6.png"/>';
				} else if (srGate == 6) {
					image.innerHTML = '<img src="SR/s6.jpg"/><img class="overlayImage2" src="characters/SR/w1.png"/>';
				} else if (srGate == 9) {
					image.innerHTML = '<img src="SR/s9.jpg"/><img class="overlayImage2" src="characters/SR/l6.png"/>';
				} else if (srGate == 10) {
					image.innerHTML = '<img src="SR/s10.jpg"/><img class="overlayImage2" src="characters/SR/i3.png"/>';
				} else if (srGate == 11) {
					image.innerHTML = '<img src="SR/s11.jpg"/><img class="overlayImage2" src="characters/SR/d3.png"/>';
				} else if (srGate == 12) {
					image.innerHTML = '<img src="SR/s12.jpg"/><img class="overlayImage2" src="characters/SR/d1.png"/>';
				} else if (srGate == 13) {
					image.innerHTML = '<img src="SR/n1.jpg"/><img class="overlayImage2" src="characters/SR/f3.png"/>';
				} else if (srGate == 17) {
					image.innerHTML = '<img src="SR/n5.jpg"/><img class="overlayImage2" src="characters/SR/e3.png"/>';
				} else if (srGate == 18) {
					image.innerHTML = '<img src="SR/n6.jpg"/><img class="overlayImage2" src="characters/SR/l4.png"/>';
				} else if (srGate == 20) {
					image.innerHTML = '<img src="SR/n8.jpg"/><img class="overlayImage2" src="characters/SR/d5.png"/>';
				} else if (srGate == 21) {
					image.innerHTML = '<img src="SR/p1.jpg"/><img class="overlayImage2" src="characters/SR/e4.png"/>';
				} else if (srGate == 23) {
					image.innerHTML = '<img src="SR/p3.jpg"/><img class="overlayImage2" src="characters/SR/w4.png"/>';
				} else if (srGate == 25) {
					image.innerHTML = '<img src="SR/p5.jpg"/><img class="overlayImage2" src="characters/SR/e5.png"/>';
				} else if (srGate == 32) {
					image.innerHTML = '<img src="SR/x4.jpg"/><img class="overlayImage2" src="characters/SR/d4.png"/>';
				} else if (srGate == 33) {
					image.innerHTML = '<img src="SR/w1.jpg"/><img class="overlayImage2" src="characters/SR/f8.png"/>';
				} else if (srGate == 34) {
					image.innerHTML = '<img src="SR/w2.jpg"/><img class="overlayImage2" src="characters/SR/l3.png"/>';
				} else if (srGate == 35) {
					image.innerHTML = '<img src="SR/w3.jpg"/><img class="overlayImage2" src="characters/SR/w3.png"/>';
				} else if (srGate == 38) {
					image.innerHTML = '<img src="SR/w6.jpg"/><img class="overlayImage2" src="characters/SR/e7.png"/>';
				} else if (srGate == 39) {
					image.innerHTML = '<img src="SR/w7.jpg"/><img class="overlayImage2" src="characters/SR/l5.png"/>';
				} else if (srGate == 40) {
					image.innerHTML = '<img src="SR/w8.jpg"/><img class="overlayImage2" src="characters/SR/l7.png"/>';
				} else if (srGate == 42) {
					image.innerHTML = '<img src="SR/w10.jpg"/><img class="overlayImage2" src="characters/SR/d2.png"/>';
				} else if (srGate == 44) {
					image.innerHTML = '<img src="SR/g2.jpg"/><img class="overlayImage2" src="characters/SR/f7.png"/>';
				} else if (srGate == 45) {
					image.innerHTML = '<img src="SR/g3.jpg"/><img class="overlayImage2" src="characters/SR/w5.png"/>';
				} else if (srGate == 50) {
					image.innerHTML = '<img src="SR/k1.jpg"/><img class="overlayImage2" src="characters/SR/f2.png"/>';
				} else if (srGate == 51) {
					image.innerHTML = '<img src="SR/k2.jpg"/><img class="overlayImage2" src="characters/SR/f5.png"/>';
				} else if (srGate == 52) {
					image.innerHTML = '<img src="SR/k3.jpg"/><img class="overlayImage2" src="characters/SR/f1.png"/>';
				} else if (srGate == 55) {
					image.innerHTML = '<img src="SR/k6.jpg"/><img class="overlayImage2" src="characters/SR/e1.png"/>';
				} else if (srGate == 56) {
					image.innerHTML = '<img src="SR/k7.jpg"/><img class="overlayImage2" src="characters/SR/e6.png"/>';
				} else if (srGate == 58) {
					image.innerHTML = '<img src="SR/k9.jpg"/><img class="overlayImage2" src="characters/SR/i2.png"/>';
				} else if (srGate == 59) {
					image.innerHTML = '<img src="SR/k10.jpg"/><img class="overlayImage2" src="characters/SR/i6.png"/>';
				} else if (srGate == 60) {
					image.innerHTML = '<img src="SR/k11.jpg"/><img class="overlayImage2" src="characters/SR/l1.png"/>';
				} else if (srGate == 61) {
					image.innerHTML = '<img src="SR/k12.jpg"/><img class="overlayImage2" src="characters/SR/l2.png"/>';
				} else if (srGate == 65) {
					image.innerHTML = '<img src="SR/b4.jpg"/><img class="overlayImage2" src="characters/SR/w6.png"/>';
				} else if (srGate == 67) {
					image.innerHTML = '<img src="SR/b6.jpg"/><img class="overlayImage2" src="characters/SR/i5.png"/>';
				} else if (srGate == 69) {
					image.innerHTML = '<img src="SR/i1.jpg"/><img class="overlayImage2" src="characters/SR/w2.png"/>';
				} else if (srGate == 72) {
					image.innerHTML = '<img src="SR/i3.jpg"/><img class="overlayImage2" src="characters/SR/i1.png"/>';
				} else if (srGate == 73) {
					image.innerHTML = '<img src="SR/i4.jpg"/><img class="overlayImage2" src="characters/SR/i4.png"/>';
				}
			
			
			} 
			
			
			//Generate SSR cards
			else {
				var ssrGate = Math.floor((Math.random() * 160) + 1);
				var image = document.getElementById('item1');
				if (ssrGate <= 24) {
					var dNum = ssrGate;
					image.innerHTML = '<img src="SSR/s' + dNum + '.jpg"/>';
				} else if (ssrGate >= 25 && ssrGate <= 36) {
					var dNum = ssrGate - 24;
					image.innerHTML = '<img src="SSR/n' + dNum + '.jpg"/>';
				} else if (ssrGate >= 37 && ssrGate <= 46) {
					var dNum = ssrGate - 36;
					image.innerHTML = '<img src="SSR/p' + dNum + '.jpg"/>';
				} else if (ssrGate >= 47 && ssrGate <= 58) {
					var dNum = ssrGate - 46;
					image.innerHTML = '<img src="SSR/x' + dNum + '.jpg"/>';
				} else if (ssrGate >= 59 && ssrGate <= 72) {
					var dNum = ssrGate - 58;
					image.innerHTML = '<img src="SSR/w' + dNum + '.jpg"/>';
				} else if (ssrGate >= 73 && ssrGate <= 80) {
					var dNum = ssrGate - 72;
					image.innerHTML = '<img src="SSR/g' + dNum + '.jpg"/>';
				} else if (ssrGate >= 81 && ssrGate <= 90) {
					var dNum = ssrGate - 80;
					image.innerHTML = '<img src="SSR/k' + dNum + '.jpg"/>';
				} else if (ssrGate >= 91 && ssrGate <= 100) {
					var dNum = ssrGate - 90;
					image.innerHTML = '<img src="SSR/b' + dNum + '.jpg"/>';
				}  else if (ssrGate >= 101 && ssrGate <= 106) {
					var dNum = ssrGate - 100;
					image.innerHTML = '<img src="SSR/i' + dNum + '.jpg"/>';
				}  else if (ssrGate >= 107 && ssrGate <= 114) {
					var dNum = ssrGate - 106;
					image.innerHTML = '<img src="SSR/a' + dNum + '.jpg"/>';
				}  else if (ssrGate >= 115 && ssrGate <= 160) {
					var dNum = ssrGate - 114;
					image.innerHTML = '<img src="SSR/m' + dNum + '.jpg"/>';
				} 
				
				/* SSR Charaters Release */
				if (ssrGate == 1 || ssrGate == 2) {
					image.innerHTML = '<img src="SSR/s1.jpg"/><img class="overlayImage2" src="characters/SSR/w1.png"/>';
				} else if (ssrGate == 3 || ssrGate == 4) {
					image.innerHTML = '<img src="SSR/s3.jpg"/><img class="overlayImage2" src="characters/SSR/f1.png"/>';
				} else if (ssrGate == 7 || ssrGate == 8) {
					image.innerHTML = '<img src="SSR/s7.jpg"/><img class="overlayImage2" src="characters/SSR/w5.png"/>';
				} else if (ssrGate == 9 || ssrGate == 10) {
					image.innerHTML = '<img src="SSR/s9.jpg"/><img class="overlayImage2" src="characters/SSR/e2.png"/>';
				} else if (ssrGate == 11 || ssrGate == 12) {
					image.innerHTML = '<img src="SSR/s11.jpg"/><img class="overlayImage2" src="characters/SSR/e1.png"/>';
				} else if (ssrGate == 15 || ssrGate == 16) {
					image.innerHTML = '<img src="SSR/s15.jpg"/><img class="overlayImage2" src="characters/SSR/l4.png"/>';
				} else if (ssrGate == 17 || ssrGate == 18) {
					image.innerHTML = '<img src="SSR/s17.jpg"/><img class="overlayImage2" src="characters/SSR/l1.png"/>';
				} else if (ssrGate == 19 || ssrGate == 20) {
					image.innerHTML = '<img src="SSR/s19.jpg"/><img class="overlayImage2" src="characters/SSR/l6.png"/>';
				} else if (ssrGate == 21 || ssrGate == 22) {
					image.innerHTML = '<img src="SSR/s21.jpg"/><img class="overlayImage2" src="characters/SSR/d4.png"/>';
				} else if (ssrGate == 23 || ssrGate == 24) {
					image.innerHTML = '<img src="SSR/s21.jpg"/><img class="overlayImage2" src="characters/SSR/d2.png"/>';
				} else if (ssrGate == 25 || ssrGate == 26) {
					image.innerHTML = '<img src="SSR/n1.jpg"/><img class="overlayImage2" src="characters/SSR/w2.png"/>';
				} else if (ssrGate == 29 || ssrGate == 30) {
					image.innerHTML = '<img src="SSR/n5.jpg"/><img class="overlayImage2" src="characters/SSR/i4.png"/>';
				} else if (ssrGate == 31 || ssrGate == 32) {
					image.innerHTML = '<img src="SSR/n7.jpg"/><img class="overlayImage2" src="characters/SSR/f6.png"/>';
				} else if (ssrGate == 33 || ssrGate == 34) {
					image.innerHTML = '<img src="SSR/n9.jpg"/><img class="overlayImage2" src="characters/SSR/d6.png"/>';
				} else if (ssrGate == 37 || ssrGate == 38) {
					image.innerHTML = '<img src="SSR/p1.jpg"/><img class="overlayImage2" src="characters/SSR/i1.png"/>';
				} else if (ssrGate == 39 || ssrGate == 40) {
					image.innerHTML = '<img src="SSR/p3.jpg"/><img class="overlayImage2" src="characters/SSR/f3.png"/>';
				} else if (ssrGate == 41 || ssrGate == 42) {
					image.innerHTML = '<img src="SSR/p5.jpg"/><img class="overlayImage2" src="characters/SSR/e6.png"/>';
				} else if (ssrGate == 43 || ssrGate == 44) {
					image.innerHTML = '<img src="SSR/p7.jpg"/><img class="overlayImage2" src="characters/SSR/i6.png"/>';
				} else if (ssrGate == 47 || ssrGate == 48) {
					image.innerHTML = '<img src="SSR/x1.jpg"/><img class="overlayImage2" src="characters/SSR/f5.png"/>';
				} else if (ssrGate == 53 || ssrGate == 54) {
					image.innerHTML = '<img src="SSR/x7.jpg"/><img class="overlayImage2" src="characters/SSR/i2.png"/>';
				} else if (ssrGate == 55 || ssrGate == 56) {
					image.innerHTML = '<img src="SSR/x9.jpg"/><img class="overlayImage2" src="characters/SSR/d1.png"/>';
				} else if (ssrGate == 57 || ssrGate == 58) {
					image.innerHTML = '<img src="SSR/x11.jpg"/><img class="overlayImage2" src="characters/SSR/e5.png"/>';
				} else if (ssrGate == 59 || ssrGate == 60) {
					image.innerHTML = '<img src="SSR/w1.jpg"/><img class="overlayImage2" src="characters/SSR/f2.png"/>';
				} else if (ssrGate == 61 || ssrGate == 62) {
					image.innerHTML = '<img src="SSR/w3.jpg"/><img class="overlayImage2" src="characters/SSR/w3.png"/>';
				} else if (ssrGate == 63 || ssrGate == 64) {
					image.innerHTML = '<img src="SSR/w5.jpg"/><img class="overlayImage2" src="characters/SSR/e3.png"/>';
				} else if (ssrGate == 65 || ssrGate == 66) {
					image.innerHTML = '<img src="SSR/w7.jpg"/><img class="overlayImage2" src="characters/SSR/l2.png"/>';
				} else if (ssrGate == 69 || ssrGate == 70) {
					image.innerHTML = '<img src="SSR/w11.jpg"/><img class="overlayImage2" src="characters/SSR/l5.png"/>';
				} else if (ssrGate == 71 || ssrGate == 72) {
					image.innerHTML = '<img src="SSR/w13.jpg"/><img class="overlayImage2" src="characters/SSR/d3.png"/>';
				} else if (ssrGate == 75 || ssrGate == 76) {
					image.innerHTML = '<img src="SSR/g3.jpg"/><img class="overlayImage2" src="characters/SSR/w4.png"/>';
				} else if (ssrGate == 79 || ssrGate == 80) {
					image.innerHTML = '<img src="SSR/g7.jpg"/><img class="overlayImage2" src="characters/SSR/i3.png"/>';
				} else if (ssrGate == 83 || ssrGate == 84) {
					image.innerHTML = '<img src="SSR/k3.jpg"/><img class="overlayImage2" src="characters/SSR/f7.png"/>';
				} else if (ssrGate == 85 || ssrGate == 86) {
					image.innerHTML = '<img src="SSR/k5.jpg"/><img class="overlayImage2" src="characters/SSR/w6.png"/>';
				} else if (ssrGate == 89 || ssrGate == 90) {
					image.innerHTML = '<img src="SSR/k9.jpg"/><img class="overlayImage2" src="characters/SSR/d5.png"/>';
				} else if (ssrGate == 99 || ssrGate == 100) {
					image.innerHTML = '<img src="SSR/b9.jpg"/><img class="overlayImage2" src="characters/SSR/i5.png"/>';
				} else if (ssrGate == 101 || ssrGate == 102) {
					image.innerHTML = '<img src="SSR/i1.jpg"/><img class="overlayImage2" src="characters/SSR/f4.png"/>';
				} else if (ssrGate == 103 || ssrGate == 104) {
					image.innerHTML = '<img src="SSR/i3.jpg"/><img class="overlayImage2" src="characters/SSR/l3.png"/>';
				} else if (ssrGate == 105 || ssrGate == 106) {
					image.innerHTML = '<img src="SSR/i5.jpg"/><img class="overlayImage2" src="characters/SSR/e4.png"/>';
				} else if (ssrGate == 114 || ssrGate == 115) {
					image.innerHTML = '<img src="SSR/a8.jpg"/><img class="overlayImage2" src="characters/SSR/l7.png"/>';
				}
				
			}
			
		}
		
		//Draw Fire
		else {
			var rareGate = Math.floor((Math.random() * 100) + 1);
			// Generate Fire R cards
			if (rareGate <= 82) {
				var rGate = Math.floor((Math.random() * 31) + 1);
				var image = document.getElementById('item1');
				image.innerHTML = '<img src="R/Fire/' + rGate + '.jpg"/>';
				
				/* R Fire Charaters Release */
				
				if (rGate == 31) {
					image.innerHTML = '<img src="R/Fire/31.jpg"/><img class="overlayImage2" src="characters/R/f1.png"/>';
				} else if (rGate == 14) {
					image.innerHTML = '<img src="R/Fire/14.jpg"/><img class="overlayImage2" src="characters/R/f2.png"/>';
				} else if (rGate == 30) {
					image.innerHTML = '<img src="R/Fire/30.jpg"/><img class="overlayImage2" src="characters/R/f3.png"/>';
				} else if (rGate == 9) {
					image.innerHTML = '<img src="R/Fire/9.jpg"/><img class="overlayImage2" src="characters/R/f4.png"/>';
				} else if (rGate == 24) {
					image.innerHTML = '<img src="R/Fire/24.jpg"/><img class="overlayImage2" src="characters/R/f5.png"/>';
				} else if (rGate == 7) {
					image.innerHTML = '<img src="R/Fire/7.jpg"/><img class="overlayImage2" src="characters/R/f6.png"/>';
				} else if (rGate == 29) {
					image.innerHTML = '<img src="R/Fire/29.jpg"/><img class="overlayImage2" src="characters/R/f7.png"/>';
				} else if (rGate == 8) {
					image.innerHTML = '<img src="R/Fire/8.jpg"/><img class="overlayImage2" src="characters/R/f8.png"/>';
				}
					
			} 
			
			
			//Generate Fire SR Cards
			else if (rareGate >=83 && rareGate <=97){
				var srGate = Math.floor((Math.random() * 17) + 1);
				var image = document.getElementById('item1');
				image.innerHTML = '<img src="SR/Fire/' + srGate + '.jpg"/>';
				
				/* SR Fire Charaters Release */
				
				if (srGate == 8) {
					image.innerHTML = '<img src="SR/Fire/8.jpg"/><img class="overlayImage2" src="characters/SR/f1.png"/>';
				} else if (srGate == 6) {
					image.innerHTML = '<img src="SR/Fire/6.jpg"/><img class="overlayImage2" src="characters/SR/f2.png"/>';
				} else if (srGate == 13) {
					image.innerHTML = '<img src="SR/Fire/13.jpg"/><img class="overlayImage2" src="characters/SR/f3.png"/>';
				} else if (srGate == 15) {
					image.innerHTML = '<img src="SR/Fire/15.jpg"/><img class="overlayImage2" src="characters/SR/f4.png"/>';
				} else if (srGate == 7) {
					image.innerHTML = '<img src="SR/Fire/7.jpg"/><img class="overlayImage2" src="characters/SR/f5.png"/>';
				} else if (srGate == 16) {
					image.innerHTML = '<img src="SR/Fire/16.jpg"/><img class="overlayImage2" src="characters/SR/f6.png"/>';
				} else if (srGate == 5) {
					image.innerHTML = '<img src="SR/Fire/5.jpg"/><img class="overlayImage2" src="characters/SR/f7.png"/>';
				} else if (srGate == 17) {
					image.innerHTML = '<img src="SR/Fire/17.jpg"/><img class="overlayImage2" src="characters/SR/f8.png"/>';
				}
			
			} 
			
			
			//Generate Fire SSR cards
			else {
				var ssrGate = Math.floor((Math.random() * 30) + 1);
				var image = document.getElementById('item1');
				image.innerHTML = '<img src="SSR/Fire/' + ssrGate + '.jpg"/>';
				
				
				/* Fire SSR Charaters Release */
				if (ssrGate == 25 || ssrGate == 26) {
					image.innerHTML = '<img src="SSR/Fire/25.jpg"/><img class="overlayImage2" src="characters/SSR/f1.png"/>';
				} else if (ssrGate == 27 || ssrGate == 28) {
					image.innerHTML = '<img src="SSR/Fire/27.jpg"/><img class="overlayImage2" src="characters/SSR/f2.png"/>';
				} else if (ssrGate == 21 || ssrGate == 22) {
					image.innerHTML = '<img src="SSR/Fire/21.jpg"/><img class="overlayImage2" src="characters/SSR/f3.png"/>';
				} else if (ssrGate == 7 || ssrGate == 8) {
					image.innerHTML = '<img src="SSR/Fire/7.jpg"/><img class="overlayImage2" src="characters/SSR/f4.png"/>';
				} else if (ssrGate == 29 || ssrGate == 30) {
					image.innerHTML = '<img src="SSR/Fire/29.jpg"/><img class="overlayImage2" src="characters/SSR/f5.png"/>';
				} else if (ssrGate == 19 || ssrGate == 20) {
					image.innerHTML = '<img src="SSR/Fire/19.jpg"/><img class="overlayImage2" src="characters/SSR/f6.png"/>';
				} else if (ssrGate == 11 || ssrGate == 12) {
					image.innerHTML = '<img src="SSR/Fire/11.jpg"/><img class="overlayImage2" src="characters/SSR/f7.png"/>';
				}
				
			}
			
			
		}
		
	}
		
	//Water Up
	else if (elementUp == 3) {
		var upValue = Math.floor ((Math.random() * 100) + 1);
		//Draw others
		if (upValue <= 60) {
			var rareGate = Math.floor((Math.random() * 100) + 1);
			// Generate R cards
			if (rareGate <= 82) {
				var rGate = Math.floor((Math.random() * 125) + 1);
				var image = document.getElementById('item1');
				if (rGate <= 16) {
					var dNum = rGate;
					image.innerHTML = '<img src="R/s' + dNum + '.jpg"/>';
				} else if (rGate >= 17 && rGate <= 29) {
					var dNum = rGate - 16;
					image.innerHTML = '<img src="R/n' + dNum + '.jpg"/>';
				} else if (rGate >= 30 && rGate <= 39) {
					var dNum = rGate - 29;
					image.innerHTML = '<img src="R/p' + dNum + '.jpg"/>';
				} else if (rGate >= 40 && rGate <= 51) {
					var dNum = rGate - 39;
					image.innerHTML = '<img src="R/x' + dNum + '.jpg"/>';
				} else if (rGate >= 52 && rGate <= 67) {
					var dNum = rGate - 51;
					image.innerHTML = '<img src="R/w' + dNum + '.jpg"/>';
				} else if (rGate >= 68 && rGate <= 78) {
					var dNum = rGate - 67;
					image.innerHTML = '<img src="R/g' + dNum + '.jpg"/>';
				} else if (rGate >= 79 && rGate <= 91) {
					var dNum = rGate - 78;
					image.innerHTML = '<img src="R/k' + dNum + '.jpg"/>';
				} else if (rGate >= 92 && rGate <= 98) {
					var dNum = rGate - 91;
					image.innerHTML = '<img src="R/b' + dNum + '.jpg"/>';
				} else if (rGate >= 99 && rGate <= 99) {
					var dNum = rGate - 98;
					image.innerHTML = '<img src="R/i' + dNum + '.jpg"/>';
				} else if (rGate >= 100 && rGate <= 101) {
					var dNum = rGate - 99;
					image.innerHTML = '<img src="R/a' + dNum + '.jpg"/>';
				} else if (rGate >= 102 && rGate <= 125) {
					var dNum = rGate - 101;
					image.innerHTML = '<img src="R/m' + dNum + '.jpg"/>';
				}
				
				/* R Charaters Release */
				
				if (rGate == 4) {
					image.innerHTML = '<img src="R/s4.jpg"/><img class="overlayImage2" src="characters/R/l2.png"/>';
				} else if (rGate == 5) {
					image.innerHTML = '<img src="R/s5.jpg"/><img class="overlayImage2" src="characters/R/e2.png"/>';
				} else if (rGate == 8) {
					image.innerHTML = '<img src="R/s8.jpg"/><img class="overlayImage2" src="characters/R/i4.png"/>';
				} else if (rGate == 11) {
					image.innerHTML = '<img src="R/s11.jpg"/><img class="overlayImage2" src="characters/R/e3.png"/>';
				} else if (rGate == 12) {
					image.innerHTML = '<img src="R/s12.jpg"/><img class="overlayImage2" src="characters/R/e4.png"/>';
				} else if (rGate == 13) {
					image.innerHTML = '<img src="R/s13.jpg"/><img class="overlayImage2" src="characters/R/i7.png"/>';
				} else if (rGate == 14) {
					image.innerHTML = '<img src="R/s14.jpg"/><img class="overlayImage2" src="characters/R/w4.png"/>';
				} else if (rGate == 15) {
					image.innerHTML = '<img src="R/s15.jpg"/><img class="overlayImage2" src="characters/R/i5.png"/>';
				} else if (rGate == 16) {
					image.innerHTML = '<img src="R/s16.jpg"/><img class="overlayImage2" src="characters/R/i6.png"/>';
				} else if (rGate == 22) {
					image.innerHTML = '<img src="R/n6.jpg"/><img class="overlayImage2" src="characters/R/d1.png"/>';
				} else if (rGate == 28) {
					image.innerHTML = '<img src="R/n12.jpg"/><img class="overlayImage2" src="characters/R/d3.png"/>';
				} else if (rGate == 29) {
					image.innerHTML = '<img src="R/n13.jpg"/><img class="overlayImage2" src="characters/R/d4.png"/>';
				} else if (rGate == 35) {
					image.innerHTML = '<img src="R/p6.jpg"/><img class="overlayImage2" src="characters/R/w3.png"/>';
				} else if (rGate == 38) {
					image.innerHTML = '<img src="R/p9.jpg"/><img class="overlayImage2" src="characters/R/f5.png"/>';
				} else if (rGate == 39) {
					image.innerHTML = '<img src="R/p10.jpg"/><img class="overlayImage2" src="characters/R/w2.png"/>';
				} else if (rGate == 40) {
					image.innerHTML = '<img src="R/x1.jpg"/><img class="overlayImage2" src="characters/R/f1.png"/>';
				} else if (rGate == 45) {
					image.innerHTML = '<img src="R/x6.jpg"/><img class="overlayImage2" src="characters/R/e6.png"/>';
				} else if (rGate == 46) {
					image.innerHTML = '<img src="R/x7.jpg"/><img class="overlayImage2" src="characters/R/i2.png"/>';
				} else if (rGate == 50) {
					image.innerHTML = '<img src="R/x11.jpg"/><img class="overlayImage2" src="characters/R/l4.png"/>';
				} else if (rGate == 51) {
					image.innerHTML = '<img src="R/w1.jpg"/><img class="overlayImage2" src="characters/R/f7.png"/>';
				} else if (rGate == 55) {
					image.innerHTML = '<img src="R/w5.jpg"/><img class="overlayImage2" src="characters/R/w5.png"/>';
				} else if (rGate == 56) {
					image.innerHTML = '<img src="R/w6.jpg"/><img class="overlayImage2" src="characters/R/e1.png"/>';
				} else if (rGate == 58) {
					image.innerHTML = '<img src="R/w8.jpg"/><img class="overlayImage2" src="characters/R/e8.png"/>';
				} else if (rGate == 59) {
					image.innerHTML = '<img src="R/w9.jpg"/><img class="overlayImage2" src="characters/R/f3.png"/>';
				} else if (rGate == 60) {
					image.innerHTML = '<img src="R/w10.jpg"/><img class="overlayImage2" src="characters/R/i3.png"/>';
				} else if (rGate == 64) {
					image.innerHTML = '<img src="R/w14.jpg"/><img class="overlayImage2" src="characters/R/l3.png"/>';
				} else if (rGate == 65) {
					image.innerHTML = '<img src="R/w15.jpg"/><img class="overlayImage2" src="characters/R/d2.png"/>';
				} else if (rGate == 70) {
					image.innerHTML = '<img src="R/g3.jpg"/><img class="overlayImage2" src="characters/R/e7.png"/>';
				} else if (rGate == 71) {
					image.innerHTML = '<img src="R/g4.jpg"/><img class="overlayImage2" src="characters/R/f6.png"/>';
				} else if (rGate == 72) {
					image.innerHTML = '<img src="R/g5.jpg"/><img class="overlayImage2" src="characters/R/f8.png"/>';
				} else if (rGate == 73) {
					image.innerHTML = '<img src="R/g6.jpg"/><img class="overlayImage2" src="characters/R/w1.png"/>';
				} else if (rGate == 76) {
					image.innerHTML = '<img src="R/g9.jpg"/><img class="overlayImage2" src="characters/R/f4.png"/>';
				} else if (rGate == 82) {
					image.innerHTML = '<img src="R/k4.jpg"/><img class="overlayImage2" src="characters/R/f2.png"/>';
				} else if (rGate == 86) {
					image.innerHTML = '<img src="R/k8.jpg"/><img class="overlayImage2" src="characters/R/i1.png"/>';
				} else if (rGate == 88) {
					image.innerHTML = '<img src="R/k10.jpg"/><img class="overlayImage2" src="characters/R/e5.png"/>';
				} else if (rGate == 91) {
					image.innerHTML = '<img src="R/k13.jpg"/><img class="overlayImage2" src="characters/R/l1.png"/>';
				}
					
			} 
			
			
			//Generate SR Cards
			else if (rareGate >=82 && rareGate <=97){
				var srGate = Math.floor((Math.random() * 95) + 1);
				var image = document.getElementById('item1');
				if (srGate <= 12) {
					var dNum = srGate;
					image.innerHTML = '<img src="SR/s' + dNum + '.jpg"/>';
				} else if (srGate >= 13 && srGate <= 20) {
					var dNum = srGate - 12;
					image.innerHTML = '<img src="SR/n' + dNum + '.jpg"/>';
				} else if (srGate >= 21 && srGate <= 28) {
					var dNum = srGate - 20;
					image.innerHTML = '<img src="SR/p' + dNum + '.jpg"/>';
				} else if (srGate >= 29 && srGate <= 32) {
					var dNum = srGate - 28;
					image.innerHTML = '<img src="SR/x' + dNum + '.jpg"/>';
				} else if (srGate >= 33 && srGate <= 42) {
					var dNum = srGate - 32;
					image.innerHTML = '<img src="SR/w' + dNum + '.jpg"/>';
				} else if (srGate >= 43 && srGate <= 49) {
					var dNum = srGate - 42;
					image.innerHTML = '<img src="SR/g' + dNum + '.jpg"/>';
				} else if (srGate >= 50 && srGate <= 61) {
					var dNum = srGate - 49;
					image.innerHTML = '<img src="SR/k' + dNum + '.jpg"/>';
				} else if (srGate >= 62 && srGate <= 68) {
					var dNum = srGate - 61;
					image.innerHTML = '<img src="SR/b' + dNum + '.jpg"/>';
				} else if (srGate >= 69 && srGate <= 72) {
					var dNum = srGate - 68;
					image.innerHTML = '<img src="SR/i' + dNum + '.jpg"/>';
				} else if (srGate >= 73 && srGate <= 75) {
					var dNum = srGate - 72;
					image.innerHTML = '<img src="SR/a' + dNum + '.jpg"/>';
				} else if (srGate >= 76 && srGate <= 95) {
					var dNum = srGate - 75;
					image.innerHTML = '<img src="SR/m' + dNum + '.jpg"/>';
				}
				
				/* SR Charaters Release */
				
				if (srGate == 2) {
					image.innerHTML = '<img src="SR/s2.jpg"/><img class="overlayImage2" src="characters/SR/e2.png"/>';
				} else if (srGate == 3) {
					image.innerHTML = '<img src="SR/s3.jpg"/><img class="overlayImage2" src="characters/SR/f4.png"/>';
				} else if (srGate == 4) {
					image.innerHTML = '<img src="SR/s4.jpg"/><img class="overlayImage2" src="characters/SR/f6.png"/>';
				} else if (srGate == 6) {
					image.innerHTML = '<img src="SR/s6.jpg"/><img class="overlayImage2" src="characters/SR/w1.png"/>';
				} else if (srGate == 9) {
					image.innerHTML = '<img src="SR/s9.jpg"/><img class="overlayImage2" src="characters/SR/l6.png"/>';
				} else if (srGate == 10) {
					image.innerHTML = '<img src="SR/s10.jpg"/><img class="overlayImage2" src="characters/SR/i3.png"/>';
				} else if (srGate == 11) {
					image.innerHTML = '<img src="SR/s11.jpg"/><img class="overlayImage2" src="characters/SR/d3.png"/>';
				} else if (srGate == 12) {
					image.innerHTML = '<img src="SR/s12.jpg"/><img class="overlayImage2" src="characters/SR/d1.png"/>';
				} else if (srGate == 13) {
					image.innerHTML = '<img src="SR/n1.jpg"/><img class="overlayImage2" src="characters/SR/f3.png"/>';
				} else if (srGate == 17) {
					image.innerHTML = '<img src="SR/n5.jpg"/><img class="overlayImage2" src="characters/SR/e3.png"/>';
				} else if (srGate == 18) {
					image.innerHTML = '<img src="SR/n6.jpg"/><img class="overlayImage2" src="characters/SR/l4.png"/>';
				} else if (srGate == 20) {
					image.innerHTML = '<img src="SR/n8.jpg"/><img class="overlayImage2" src="characters/SR/d5.png"/>';
				} else if (srGate == 21) {
					image.innerHTML = '<img src="SR/p1.jpg"/><img class="overlayImage2" src="characters/SR/e4.png"/>';
				} else if (srGate == 23) {
					image.innerHTML = '<img src="SR/p3.jpg"/><img class="overlayImage2" src="characters/SR/w4.png"/>';
				} else if (srGate == 25) {
					image.innerHTML = '<img src="SR/p5.jpg"/><img class="overlayImage2" src="characters/SR/e5.png"/>';
				} else if (srGate == 32) {
					image.innerHTML = '<img src="SR/x4.jpg"/><img class="overlayImage2" src="characters/SR/d4.png"/>';
				} else if (srGate == 33) {
					image.innerHTML = '<img src="SR/w1.jpg"/><img class="overlayImage2" src="characters/SR/f8.png"/>';
				} else if (srGate == 34) {
					image.innerHTML = '<img src="SR/w2.jpg"/><img class="overlayImage2" src="characters/SR/l3.png"/>';
				} else if (srGate == 35) {
					image.innerHTML = '<img src="SR/w3.jpg"/><img class="overlayImage2" src="characters/SR/w3.png"/>';
				} else if (srGate == 38) {
					image.innerHTML = '<img src="SR/w6.jpg"/><img class="overlayImage2" src="characters/SR/e7.png"/>';
				} else if (srGate == 39) {
					image.innerHTML = '<img src="SR/w7.jpg"/><img class="overlayImage2" src="characters/SR/l5.png"/>';
				} else if (srGate == 40) {
					image.innerHTML = '<img src="SR/w8.jpg"/><img class="overlayImage2" src="characters/SR/l7.png"/>';
				} else if (srGate == 42) {
					image.innerHTML = '<img src="SR/w10.jpg"/><img class="overlayImage2" src="characters/SR/d2.png"/>';
				} else if (srGate == 44) {
					image.innerHTML = '<img src="SR/g2.jpg"/><img class="overlayImage2" src="characters/SR/f7.png"/>';
				} else if (srGate == 45) {
					image.innerHTML = '<img src="SR/g3.jpg"/><img class="overlayImage2" src="characters/SR/w5.png"/>';
				} else if (srGate == 50) {
					image.innerHTML = '<img src="SR/k1.jpg"/><img class="overlayImage2" src="characters/SR/f2.png"/>';
				} else if (srGate == 51) {
					image.innerHTML = '<img src="SR/k2.jpg"/><img class="overlayImage2" src="characters/SR/f5.png"/>';
				} else if (srGate == 52) {
					image.innerHTML = '<img src="SR/k3.jpg"/><img class="overlayImage2" src="characters/SR/f1.png"/>';
				} else if (srGate == 55) {
					image.innerHTML = '<img src="SR/k6.jpg"/><img class="overlayImage2" src="characters/SR/e1.png"/>';
				} else if (srGate == 56) {
					image.innerHTML = '<img src="SR/k7.jpg"/><img class="overlayImage2" src="characters/SR/e6.png"/>';
				} else if (srGate == 58) {
					image.innerHTML = '<img src="SR/k9.jpg"/><img class="overlayImage2" src="characters/SR/i2.png"/>';
				} else if (srGate == 59) {
					image.innerHTML = '<img src="SR/k10.jpg"/><img class="overlayImage2" src="characters/SR/i6.png"/>';
				} else if (srGate == 60) {
					image.innerHTML = '<img src="SR/k11.jpg"/><img class="overlayImage2" src="characters/SR/l1.png"/>';
				} else if (srGate == 61) {
					image.innerHTML = '<img src="SR/k12.jpg"/><img class="overlayImage2" src="characters/SR/l2.png"/>';
				} else if (srGate == 65) {
					image.innerHTML = '<img src="SR/b4.jpg"/><img class="overlayImage2" src="characters/SR/w6.png"/>';
				} else if (srGate == 67) {
					image.innerHTML = '<img src="SR/b6.jpg"/><img class="overlayImage2" src="characters/SR/i5.png"/>';
				} else if (srGate == 69) {
					image.innerHTML = '<img src="SR/i1.jpg"/><img class="overlayImage2" src="characters/SR/w2.png"/>';
				} else if (srGate == 72) {
					image.innerHTML = '<img src="SR/i3.jpg"/><img class="overlayImage2" src="characters/SR/i1.png"/>';
				} else if (srGate == 73) {
					image.innerHTML = '<img src="SR/i4.jpg"/><img class="overlayImage2" src="characters/SR/i4.png"/>';
				}
			
			
			} 
			
			
			//Generate SSR cards
			else {
				var ssrGate = Math.floor((Math.random() * 160) + 1);
				var image = document.getElementById('item1');
				if (ssrGate <= 24) {
					var dNum = ssrGate;
					image.innerHTML = '<img src="SSR/s' + dNum + '.jpg"/>';
				} else if (ssrGate >= 25 && ssrGate <= 36) {
					var dNum = ssrGate - 24;
					image.innerHTML = '<img src="SSR/n' + dNum + '.jpg"/>';
				} else if (ssrGate >= 37 && ssrGate <= 46) {
					var dNum = ssrGate - 36;
					image.innerHTML = '<img src="SSR/p' + dNum + '.jpg"/>';
				} else if (ssrGate >= 47 && ssrGate <= 58) {
					var dNum = ssrGate - 46;
					image.innerHTML = '<img src="SSR/x' + dNum + '.jpg"/>';
				} else if (ssrGate >= 59 && ssrGate <= 72) {
					var dNum = ssrGate - 58;
					image.innerHTML = '<img src="SSR/w' + dNum + '.jpg"/>';
				} else if (ssrGate >= 73 && ssrGate <= 80) {
					var dNum = ssrGate - 72;
					image.innerHTML = '<img src="SSR/g' + dNum + '.jpg"/>';
				} else if (ssrGate >= 81 && ssrGate <= 90) {
					var dNum = ssrGate - 80;
					image.innerHTML = '<img src="SSR/k' + dNum + '.jpg"/>';
				} else if (ssrGate >= 91 && ssrGate <= 100) {
					var dNum = ssrGate - 90;
					image.innerHTML = '<img src="SSR/b' + dNum + '.jpg"/>';
				}  else if (ssrGate >= 101 && ssrGate <= 106) {
					var dNum = ssrGate - 100;
					image.innerHTML = '<img src="SSR/i' + dNum + '.jpg"/>';
				}  else if (ssrGate >= 107 && ssrGate <= 114) {
					var dNum = ssrGate - 106;
					image.innerHTML = '<img src="SSR/a' + dNum + '.jpg"/>';
				}  else if (ssrGate >= 115 && ssrGate <= 160) {
					var dNum = ssrGate - 114;
					image.innerHTML = '<img src="SSR/m' + dNum + '.jpg"/>';
				} 
				
				/* SSR Charaters Release */
				if (ssrGate == 1 || ssrGate == 2) {
					image.innerHTML = '<img src="SSR/s1.jpg"/><img class="overlayImage2" src="characters/SSR/w1.png"/>';
				} else if (ssrGate == 3 || ssrGate == 4) {
					image.innerHTML = '<img src="SSR/s3.jpg"/><img class="overlayImage2" src="characters/SSR/f1.png"/>';
				} else if (ssrGate == 7 || ssrGate == 8) {
					image.innerHTML = '<img src="SSR/s7.jpg"/><img class="overlayImage2" src="characters/SSR/w5.png"/>';
				} else if (ssrGate == 9 || ssrGate == 10) {
					image.innerHTML = '<img src="SSR/s9.jpg"/><img class="overlayImage2" src="characters/SSR/e2.png"/>';
				} else if (ssrGate == 11 || ssrGate == 12) {
					image.innerHTML = '<img src="SSR/s11.jpg"/><img class="overlayImage2" src="characters/SSR/e1.png"/>';
				} else if (ssrGate == 15 || ssrGate == 16) {
					image.innerHTML = '<img src="SSR/s15.jpg"/><img class="overlayImage2" src="characters/SSR/l4.png"/>';
				} else if (ssrGate == 17 || ssrGate == 18) {
					image.innerHTML = '<img src="SSR/s17.jpg"/><img class="overlayImage2" src="characters/SSR/l1.png"/>';
				} else if (ssrGate == 19 || ssrGate == 20) {
					image.innerHTML = '<img src="SSR/s19.jpg"/><img class="overlayImage2" src="characters/SSR/l6.png"/>';
				} else if (ssrGate == 21 || ssrGate == 22) {
					image.innerHTML = '<img src="SSR/s21.jpg"/><img class="overlayImage2" src="characters/SSR/d4.png"/>';
				} else if (ssrGate == 23 || ssrGate == 24) {
					image.innerHTML = '<img src="SSR/s21.jpg"/><img class="overlayImage2" src="characters/SSR/d2.png"/>';
				} else if (ssrGate == 25 || ssrGate == 26) {
					image.innerHTML = '<img src="SSR/n1.jpg"/><img class="overlayImage2" src="characters/SSR/w2.png"/>';
				} else if (ssrGate == 29 || ssrGate == 30) {
					image.innerHTML = '<img src="SSR/n5.jpg"/><img class="overlayImage2" src="characters/SSR/i4.png"/>';
				} else if (ssrGate == 31 || ssrGate == 32) {
					image.innerHTML = '<img src="SSR/n7.jpg"/><img class="overlayImage2" src="characters/SSR/f6.png"/>';
				} else if (ssrGate == 33 || ssrGate == 34) {
					image.innerHTML = '<img src="SSR/n9.jpg"/><img class="overlayImage2" src="characters/SSR/d6.png"/>';
				} else if (ssrGate == 37 || ssrGate == 38) {
					image.innerHTML = '<img src="SSR/p1.jpg"/><img class="overlayImage2" src="characters/SSR/i1.png"/>';
				} else if (ssrGate == 39 || ssrGate == 40) {
					image.innerHTML = '<img src="SSR/p3.jpg"/><img class="overlayImage2" src="characters/SSR/f3.png"/>';
				} else if (ssrGate == 41 || ssrGate == 42) {
					image.innerHTML = '<img src="SSR/p5.jpg"/><img class="overlayImage2" src="characters/SSR/e6.png"/>';
				} else if (ssrGate == 43 || ssrGate == 44) {
					image.innerHTML = '<img src="SSR/p7.jpg"/><img class="overlayImage2" src="characters/SSR/i6.png"/>';
				} else if (ssrGate == 47 || ssrGate == 48) {
					image.innerHTML = '<img src="SSR/x1.jpg"/><img class="overlayImage2" src="characters/SSR/f5.png"/>';
				} else if (ssrGate == 53 || ssrGate == 54) {
					image.innerHTML = '<img src="SSR/x7.jpg"/><img class="overlayImage2" src="characters/SSR/i2.png"/>';
				} else if (ssrGate == 55 || ssrGate == 56) {
					image.innerHTML = '<img src="SSR/x9.jpg"/><img class="overlayImage2" src="characters/SSR/d1.png"/>';
				} else if (ssrGate == 57 || ssrGate == 58) {
					image.innerHTML = '<img src="SSR/x11.jpg"/><img class="overlayImage2" src="characters/SSR/e5.png"/>';
				} else if (ssrGate == 59 || ssrGate == 60) {
					image.innerHTML = '<img src="SSR/w1.jpg"/><img class="overlayImage2" src="characters/SSR/f2.png"/>';
				} else if (ssrGate == 61 || ssrGate == 62) {
					image.innerHTML = '<img src="SSR/w3.jpg"/><img class="overlayImage2" src="characters/SSR/w3.png"/>';
				} else if (ssrGate == 63 || ssrGate == 64) {
					image.innerHTML = '<img src="SSR/w5.jpg"/><img class="overlayImage2" src="characters/SSR/e3.png"/>';
				} else if (ssrGate == 65 || ssrGate == 66) {
					image.innerHTML = '<img src="SSR/w7.jpg"/><img class="overlayImage2" src="characters/SSR/l2.png"/>';
				} else if (ssrGate == 69 || ssrGate == 70) {
					image.innerHTML = '<img src="SSR/w11.jpg"/><img class="overlayImage2" src="characters/SSR/l5.png"/>';
				} else if (ssrGate == 71 || ssrGate == 72) {
					image.innerHTML = '<img src="SSR/w13.jpg"/><img class="overlayImage2" src="characters/SSR/d3.png"/>';
				} else if (ssrGate == 75 || ssrGate == 76) {
					image.innerHTML = '<img src="SSR/g3.jpg"/><img class="overlayImage2" src="characters/SSR/w4.png"/>';
				} else if (ssrGate == 79 || ssrGate == 80) {
					image.innerHTML = '<img src="SSR/g7.jpg"/><img class="overlayImage2" src="characters/SSR/i3.png"/>';
				} else if (ssrGate == 83 || ssrGate == 84) {
					image.innerHTML = '<img src="SSR/k3.jpg"/><img class="overlayImage2" src="characters/SSR/f7.png"/>';
				} else if (ssrGate == 85 || ssrGate == 86) {
					image.innerHTML = '<img src="SSR/k5.jpg"/><img class="overlayImage2" src="characters/SSR/w6.png"/>';
				} else if (ssrGate == 89 || ssrGate == 90) {
					image.innerHTML = '<img src="SSR/k9.jpg"/><img class="overlayImage2" src="characters/SSR/d5.png"/>';
				} else if (ssrGate == 99 || ssrGate == 100) {
					image.innerHTML = '<img src="SSR/b9.jpg"/><img class="overlayImage2" src="characters/SSR/i5.png"/>';
				} else if (ssrGate == 101 || ssrGate == 102) {
					image.innerHTML = '<img src="SSR/i1.jpg"/><img class="overlayImage2" src="characters/SSR/f4.png"/>';
				} else if (ssrGate == 103 || ssrGate == 104) {
					image.innerHTML = '<img src="SSR/i3.jpg"/><img class="overlayImage2" src="characters/SSR/l3.png"/>';
				} else if (ssrGate == 105 || ssrGate == 106) {
					image.innerHTML = '<img src="SSR/i5.jpg"/><img class="overlayImage2" src="characters/SSR/e4.png"/>';
				} else if (ssrGate == 114 || ssrGate == 115) {
					image.innerHTML = '<img src="SSR/a8.jpg"/><img class="overlayImage2" src="characters/SSR/l7.png"/>';
				}
				
			}
			
		}
		
		//Draw Water
		else {
			var rareGate = Math.floor((Math.random() * 100) + 1);
			// Generate Water R cards
			if (rareGate <= 82) {
				var rGate = Math.floor((Math.random() * 28) + 1);
				var image = document.getElementById('item1');
				image.innerHTML = '<img src="R/Water/' + rGate + '.jpg"/>';
				
				/* R Water Charaters Release */
				
				if (rGate == 3) {
					image.innerHTML = '<img src="R/Water/3.jpg"/><img class="overlayImage2" src="characters/R/w1.png"/>';
				} else if (rGate == 20) {
					image.innerHTML = '<img src="R/Water/20.jpg"/><img class="overlayImage2" src="characters/R/w2.png"/>';
				} else if (rGate == 19) {
					image.innerHTML = '<img src="R/Water/19.jpg"/><img class="overlayImage2" src="characters/R/w3.png"/>';
				} else if (rGate == 23) {
					image.innerHTML = '<img src="R/Water/23.jpg"/><img class="overlayImage2" src="characters/R/w4.png"/>';
				} else if (rGate == 27) {
					image.innerHTML = '<img src="R/Water/27.jpg"/><img class="overlayImage2" src="characters/R/w5.png"/>';
				}
					
			} 
			
			
			//Generate Water SR Cards
			else if (rareGate >=83 && rareGate <=97){
				var srGate = Math.floor((Math.random() * 16) + 1);
				var image = document.getElementById('item1');
				image.innerHTML = '<img src="SR/Water/' + srGate + '.jpg"/>';
				
				/* SR Water Charaters Release */
				
				if (srGate == 13) {
					image.innerHTML = '<img src="SR/Water/13.jpg"/><img class="overlayImage2" src="characters/SR/w1.png"/>';
				} else if (srGate == 5) {
					image.innerHTML = '<img src="SR/Water/5.jpg"/><img class="overlayImage2" src="characters/SR/w2.png"/>';
				} else if (srGate == 14) {
					image.innerHTML = '<img src="SR/Water/14.jpg"/><img class="overlayImage2" src="characters/SR/w3.png"/>';
				} else if (srGate == 11) {
					image.innerHTML = '<img src="SR/Water/11.jpg"/><img class="overlayImage2" src="characters/SR/w4.png"/>';
				} else if (srGate == 4) {
					image.innerHTML = '<img src="SR/Water/4.jpg"/><img class="overlayImage2" src="characters/SR/w5.png"/>';
				} else if (srGate == 3) {
					image.innerHTML = '<img src="SR/Water/3.jpg"/><img class="overlayImage2" src="characters/SR/w3.png"/>';
				}
			
			} 
			
			
			//Generate Water SSR cards
			else {
				var ssrGate = Math.floor((Math.random() * 28) + 1);
				var image = document.getElementById('item1');
				image.innerHTML = '<img src="SSR/Water/' + ssrGate + '.jpg"/>';
				
				
				/* Water SSR Charaters Release */
				if (ssrGate == 19 || ssrGate == 20) {
					image.innerHTML = '<img src="SSR/Water/19.jpg"/><img class="overlayImage2" src="characters/SSR/w1.png"/>';
				} else if (ssrGate == 17 || ssrGate == 18) {
					image.innerHTML = '<img src="SSR/Water/17.jpg"/><img class="overlayImage2" src="characters/SSR/w2.png"/>';
				} else if (ssrGate == 25 || ssrGate == 26) {
					image.innerHTML = '<img src="SSR/Water/25.jpg"/><img class="overlayImage2" src="characters/SSR/w3.png"/>';
				} else if (ssrGate == 5 || ssrGate == 6) {
					image.innerHTML = '<img src="SSR/Water/5.jpg"/><img class="overlayImage2" src="characters/SSR/w4.png"/>';
				} else if (ssrGate == 23 || ssrGate == 24) {
					image.innerHTML = '<img src="SSR/Water/23.jpg"/><img class="overlayImage2" src="characters/SSR/w5.png"/>';
				} else if (ssrGate == 7 || ssrGate == 8) {
					image.innerHTML = '<img src="SSR/Water/7.jpg"/><img class="overlayImage2" src="characters/SSR/w6.png"/>';
				}
				
			}
			
			
		}
		
	}
		
	//Earth Up
	else if (elementUp == 4) {
		var upValue = Math.floor ((Math.random() * 100) + 1);
		//Draw others
		if (upValue <= 60) {
			var rareGate = Math.floor((Math.random() * 100) + 1);
			// Generate R cards
			if (rareGate <= 82) {
				var rGate = Math.floor((Math.random() * 125) + 1);
				var image = document.getElementById('item1');
				if (rGate <= 16) {
					var dNum = rGate;
					image.innerHTML = '<img src="R/s' + dNum + '.jpg"/>';
				} else if (rGate >= 17 && rGate <= 29) {
					var dNum = rGate - 16;
					image.innerHTML = '<img src="R/n' + dNum + '.jpg"/>';
				} else if (rGate >= 30 && rGate <= 39) {
					var dNum = rGate - 29;
					image.innerHTML = '<img src="R/p' + dNum + '.jpg"/>';
				} else if (rGate >= 40 && rGate <= 51) {
					var dNum = rGate - 39;
					image.innerHTML = '<img src="R/x' + dNum + '.jpg"/>';
				} else if (rGate >= 52 && rGate <= 67) {
					var dNum = rGate - 51;
					image.innerHTML = '<img src="R/w' + dNum + '.jpg"/>';
				} else if (rGate >= 68 && rGate <= 78) {
					var dNum = rGate - 67;
					image.innerHTML = '<img src="R/g' + dNum + '.jpg"/>';
				} else if (rGate >= 79 && rGate <= 91) {
					var dNum = rGate - 78;
					image.innerHTML = '<img src="R/k' + dNum + '.jpg"/>';
				} else if (rGate >= 92 && rGate <= 98) {
					var dNum = rGate - 91;
					image.innerHTML = '<img src="R/b' + dNum + '.jpg"/>';
				} else if (rGate >= 99 && rGate <= 99) {
					var dNum = rGate - 98;
					image.innerHTML = '<img src="R/i' + dNum + '.jpg"/>';
				} else if (rGate >= 100 && rGate <= 101) {
					var dNum = rGate - 99;
					image.innerHTML = '<img src="R/a' + dNum + '.jpg"/>';
				} else if (rGate >= 102 && rGate <= 125) {
					var dNum = rGate - 101;
					image.innerHTML = '<img src="R/m' + dNum + '.jpg"/>';
				}
				
				/* R Charaters Release */
				
				if (rGate == 4) {
					image.innerHTML = '<img src="R/s4.jpg"/><img class="overlayImage2" src="characters/R/l2.png"/>';
				} else if (rGate == 5) {
					image.innerHTML = '<img src="R/s5.jpg"/><img class="overlayImage2" src="characters/R/e2.png"/>';
				} else if (rGate == 8) {
					image.innerHTML = '<img src="R/s8.jpg"/><img class="overlayImage2" src="characters/R/i4.png"/>';
				} else if (rGate == 11) {
					image.innerHTML = '<img src="R/s11.jpg"/><img class="overlayImage2" src="characters/R/e3.png"/>';
				} else if (rGate == 12) {
					image.innerHTML = '<img src="R/s12.jpg"/><img class="overlayImage2" src="characters/R/e4.png"/>';
				} else if (rGate == 13) {
					image.innerHTML = '<img src="R/s13.jpg"/><img class="overlayImage2" src="characters/R/i7.png"/>';
				} else if (rGate == 14) {
					image.innerHTML = '<img src="R/s14.jpg"/><img class="overlayImage2" src="characters/R/w4.png"/>';
				} else if (rGate == 15) {
					image.innerHTML = '<img src="R/s15.jpg"/><img class="overlayImage2" src="characters/R/i5.png"/>';
				} else if (rGate == 16) {
					image.innerHTML = '<img src="R/s16.jpg"/><img class="overlayImage2" src="characters/R/i6.png"/>';
				} else if (rGate == 22) {
					image.innerHTML = '<img src="R/n6.jpg"/><img class="overlayImage2" src="characters/R/d1.png"/>';
				} else if (rGate == 28) {
					image.innerHTML = '<img src="R/n12.jpg"/><img class="overlayImage2" src="characters/R/d3.png"/>';
				} else if (rGate == 29) {
					image.innerHTML = '<img src="R/n13.jpg"/><img class="overlayImage2" src="characters/R/d4.png"/>';
				} else if (rGate == 35) {
					image.innerHTML = '<img src="R/p6.jpg"/><img class="overlayImage2" src="characters/R/w3.png"/>';
				} else if (rGate == 38) {
					image.innerHTML = '<img src="R/p9.jpg"/><img class="overlayImage2" src="characters/R/f5.png"/>';
				} else if (rGate == 39) {
					image.innerHTML = '<img src="R/p10.jpg"/><img class="overlayImage2" src="characters/R/w2.png"/>';
				} else if (rGate == 40) {
					image.innerHTML = '<img src="R/x1.jpg"/><img class="overlayImage2" src="characters/R/f1.png"/>';
				} else if (rGate == 45) {
					image.innerHTML = '<img src="R/x6.jpg"/><img class="overlayImage2" src="characters/R/e6.png"/>';
				} else if (rGate == 46) {
					image.innerHTML = '<img src="R/x7.jpg"/><img class="overlayImage2" src="characters/R/i2.png"/>';
				} else if (rGate == 50) {
					image.innerHTML = '<img src="R/x11.jpg"/><img class="overlayImage2" src="characters/R/l4.png"/>';
				} else if (rGate == 51) {
					image.innerHTML = '<img src="R/w1.jpg"/><img class="overlayImage2" src="characters/R/f7.png"/>';
				} else if (rGate == 55) {
					image.innerHTML = '<img src="R/w5.jpg"/><img class="overlayImage2" src="characters/R/w5.png"/>';
				} else if (rGate == 56) {
					image.innerHTML = '<img src="R/w6.jpg"/><img class="overlayImage2" src="characters/R/e1.png"/>';
				} else if (rGate == 58) {
					image.innerHTML = '<img src="R/w8.jpg"/><img class="overlayImage2" src="characters/R/e8.png"/>';
				} else if (rGate == 59) {
					image.innerHTML = '<img src="R/w9.jpg"/><img class="overlayImage2" src="characters/R/f3.png"/>';
				} else if (rGate == 60) {
					image.innerHTML = '<img src="R/w10.jpg"/><img class="overlayImage2" src="characters/R/i3.png"/>';
				} else if (rGate == 64) {
					image.innerHTML = '<img src="R/w14.jpg"/><img class="overlayImage2" src="characters/R/l3.png"/>';
				} else if (rGate == 65) {
					image.innerHTML = '<img src="R/w15.jpg"/><img class="overlayImage2" src="characters/R/d2.png"/>';
				} else if (rGate == 70) {
					image.innerHTML = '<img src="R/g3.jpg"/><img class="overlayImage2" src="characters/R/e7.png"/>';
				} else if (rGate == 71) {
					image.innerHTML = '<img src="R/g4.jpg"/><img class="overlayImage2" src="characters/R/f6.png"/>';
				} else if (rGate == 72) {
					image.innerHTML = '<img src="R/g5.jpg"/><img class="overlayImage2" src="characters/R/f8.png"/>';
				} else if (rGate == 73) {
					image.innerHTML = '<img src="R/g6.jpg"/><img class="overlayImage2" src="characters/R/w1.png"/>';
				} else if (rGate == 76) {
					image.innerHTML = '<img src="R/g9.jpg"/><img class="overlayImage2" src="characters/R/f4.png"/>';
				} else if (rGate == 82) {
					image.innerHTML = '<img src="R/k4.jpg"/><img class="overlayImage2" src="characters/R/f2.png"/>';
				} else if (rGate == 86) {
					image.innerHTML = '<img src="R/k8.jpg"/><img class="overlayImage2" src="characters/R/i1.png"/>';
				} else if (rGate == 88) {
					image.innerHTML = '<img src="R/k10.jpg"/><img class="overlayImage2" src="characters/R/e5.png"/>';
				} else if (rGate == 91) {
					image.innerHTML = '<img src="R/k13.jpg"/><img class="overlayImage2" src="characters/R/l1.png"/>';
				}
					
			} 
			
			
			//Generate SR Cards
			else if (rareGate >=82 && rareGate <=97){
				var srGate = Math.floor((Math.random() * 95) + 1);
				var image = document.getElementById('item1');
				if (srGate <= 12) {
					var dNum = srGate;
					image.innerHTML = '<img src="SR/s' + dNum + '.jpg"/>';
				} else if (srGate >= 13 && srGate <= 20) {
					var dNum = srGate - 12;
					image.innerHTML = '<img src="SR/n' + dNum + '.jpg"/>';
				} else if (srGate >= 21 && srGate <= 28) {
					var dNum = srGate - 20;
					image.innerHTML = '<img src="SR/p' + dNum + '.jpg"/>';
				} else if (srGate >= 29 && srGate <= 32) {
					var dNum = srGate - 28;
					image.innerHTML = '<img src="SR/x' + dNum + '.jpg"/>';
				} else if (srGate >= 33 && srGate <= 42) {
					var dNum = srGate - 32;
					image.innerHTML = '<img src="SR/w' + dNum + '.jpg"/>';
				} else if (srGate >= 43 && srGate <= 49) {
					var dNum = srGate - 42;
					image.innerHTML = '<img src="SR/g' + dNum + '.jpg"/>';
				} else if (srGate >= 50 && srGate <= 61) {
					var dNum = srGate - 49;
					image.innerHTML = '<img src="SR/k' + dNum + '.jpg"/>';
				} else if (srGate >= 62 && srGate <= 68) {
					var dNum = srGate - 61;
					image.innerHTML = '<img src="SR/b' + dNum + '.jpg"/>';
				} else if (srGate >= 69 && srGate <= 72) {
					var dNum = srGate - 68;
					image.innerHTML = '<img src="SR/i' + dNum + '.jpg"/>';
				} else if (srGate >= 73 && srGate <= 75) {
					var dNum = srGate - 72;
					image.innerHTML = '<img src="SR/a' + dNum + '.jpg"/>';
				} else if (srGate >= 76 && srGate <= 95) {
					var dNum = srGate - 75;
					image.innerHTML = '<img src="SR/m' + dNum + '.jpg"/>';
				}
				
				/* SR Charaters Release */
				
				if (srGate == 2) {
					image.innerHTML = '<img src="SR/s2.jpg"/><img class="overlayImage2" src="characters/SR/e2.png"/>';
				} else if (srGate == 3) {
					image.innerHTML = '<img src="SR/s3.jpg"/><img class="overlayImage2" src="characters/SR/f4.png"/>';
				} else if (srGate == 4) {
					image.innerHTML = '<img src="SR/s4.jpg"/><img class="overlayImage2" src="characters/SR/f6.png"/>';
				} else if (srGate == 6) {
					image.innerHTML = '<img src="SR/s6.jpg"/><img class="overlayImage2" src="characters/SR/w1.png"/>';
				} else if (srGate == 9) {
					image.innerHTML = '<img src="SR/s9.jpg"/><img class="overlayImage2" src="characters/SR/l6.png"/>';
				} else if (srGate == 10) {
					image.innerHTML = '<img src="SR/s10.jpg"/><img class="overlayImage2" src="characters/SR/i3.png"/>';
				} else if (srGate == 11) {
					image.innerHTML = '<img src="SR/s11.jpg"/><img class="overlayImage2" src="characters/SR/d3.png"/>';
				} else if (srGate == 12) {
					image.innerHTML = '<img src="SR/s12.jpg"/><img class="overlayImage2" src="characters/SR/d1.png"/>';
				} else if (srGate == 13) {
					image.innerHTML = '<img src="SR/n1.jpg"/><img class="overlayImage2" src="characters/SR/f3.png"/>';
				} else if (srGate == 17) {
					image.innerHTML = '<img src="SR/n5.jpg"/><img class="overlayImage2" src="characters/SR/e3.png"/>';
				} else if (srGate == 18) {
					image.innerHTML = '<img src="SR/n6.jpg"/><img class="overlayImage2" src="characters/SR/l4.png"/>';
				} else if (srGate == 20) {
					image.innerHTML = '<img src="SR/n8.jpg"/><img class="overlayImage2" src="characters/SR/d5.png"/>';
				} else if (srGate == 21) {
					image.innerHTML = '<img src="SR/p1.jpg"/><img class="overlayImage2" src="characters/SR/e4.png"/>';
				} else if (srGate == 23) {
					image.innerHTML = '<img src="SR/p3.jpg"/><img class="overlayImage2" src="characters/SR/w4.png"/>';
				} else if (srGate == 25) {
					image.innerHTML = '<img src="SR/p5.jpg"/><img class="overlayImage2" src="characters/SR/e5.png"/>';
				} else if (srGate == 32) {
					image.innerHTML = '<img src="SR/x4.jpg"/><img class="overlayImage2" src="characters/SR/d4.png"/>';
				} else if (srGate == 33) {
					image.innerHTML = '<img src="SR/w1.jpg"/><img class="overlayImage2" src="characters/SR/f8.png"/>';
				} else if (srGate == 34) {
					image.innerHTML = '<img src="SR/w2.jpg"/><img class="overlayImage2" src="characters/SR/l3.png"/>';
				} else if (srGate == 35) {
					image.innerHTML = '<img src="SR/w3.jpg"/><img class="overlayImage2" src="characters/SR/w3.png"/>';
				} else if (srGate == 38) {
					image.innerHTML = '<img src="SR/w6.jpg"/><img class="overlayImage2" src="characters/SR/e7.png"/>';
				} else if (srGate == 39) {
					image.innerHTML = '<img src="SR/w7.jpg"/><img class="overlayImage2" src="characters/SR/l5.png"/>';
				} else if (srGate == 40) {
					image.innerHTML = '<img src="SR/w8.jpg"/><img class="overlayImage2" src="characters/SR/l7.png"/>';
				} else if (srGate == 42) {
					image.innerHTML = '<img src="SR/w10.jpg"/><img class="overlayImage2" src="characters/SR/d2.png"/>';
				} else if (srGate == 44) {
					image.innerHTML = '<img src="SR/g2.jpg"/><img class="overlayImage2" src="characters/SR/f7.png"/>';
				} else if (srGate == 45) {
					image.innerHTML = '<img src="SR/g3.jpg"/><img class="overlayImage2" src="characters/SR/w5.png"/>';
				} else if (srGate == 50) {
					image.innerHTML = '<img src="SR/k1.jpg"/><img class="overlayImage2" src="characters/SR/f2.png"/>';
				} else if (srGate == 51) {
					image.innerHTML = '<img src="SR/k2.jpg"/><img class="overlayImage2" src="characters/SR/f5.png"/>';
				} else if (srGate == 52) {
					image.innerHTML = '<img src="SR/k3.jpg"/><img class="overlayImage2" src="characters/SR/f1.png"/>';
				} else if (srGate == 55) {
					image.innerHTML = '<img src="SR/k6.jpg"/><img class="overlayImage2" src="characters/SR/e1.png"/>';
				} else if (srGate == 56) {
					image.innerHTML = '<img src="SR/k7.jpg"/><img class="overlayImage2" src="characters/SR/e6.png"/>';
				} else if (srGate == 58) {
					image.innerHTML = '<img src="SR/k9.jpg"/><img class="overlayImage2" src="characters/SR/i2.png"/>';
				} else if (srGate == 59) {
					image.innerHTML = '<img src="SR/k10.jpg"/><img class="overlayImage2" src="characters/SR/i6.png"/>';
				} else if (srGate == 60) {
					image.innerHTML = '<img src="SR/k11.jpg"/><img class="overlayImage2" src="characters/SR/l1.png"/>';
				} else if (srGate == 61) {
					image.innerHTML = '<img src="SR/k12.jpg"/><img class="overlayImage2" src="characters/SR/l2.png"/>';
				} else if (srGate == 65) {
					image.innerHTML = '<img src="SR/b4.jpg"/><img class="overlayImage2" src="characters/SR/w6.png"/>';
				} else if (srGate == 67) {
					image.innerHTML = '<img src="SR/b6.jpg"/><img class="overlayImage2" src="characters/SR/i5.png"/>';
				} else if (srGate == 69) {
					image.innerHTML = '<img src="SR/i1.jpg"/><img class="overlayImage2" src="characters/SR/w2.png"/>';
				} else if (srGate == 72) {
					image.innerHTML = '<img src="SR/i3.jpg"/><img class="overlayImage2" src="characters/SR/i1.png"/>';
				} else if (srGate == 73) {
					image.innerHTML = '<img src="SR/i4.jpg"/><img class="overlayImage2" src="characters/SR/i4.png"/>';
				}
			
			
			} 
			
			
			//Generate SSR cards
			else {
				var ssrGate = Math.floor((Math.random() * 160) + 1);
				var image = document.getElementById('item1');
				if (ssrGate <= 24) {
					var dNum = ssrGate;
					image.innerHTML = '<img src="SSR/s' + dNum + '.jpg"/>';
				} else if (ssrGate >= 25 && ssrGate <= 36) {
					var dNum = ssrGate - 24;
					image.innerHTML = '<img src="SSR/n' + dNum + '.jpg"/>';
				} else if (ssrGate >= 37 && ssrGate <= 46) {
					var dNum = ssrGate - 36;
					image.innerHTML = '<img src="SSR/p' + dNum + '.jpg"/>';
				} else if (ssrGate >= 47 && ssrGate <= 58) {
					var dNum = ssrGate - 46;
					image.innerHTML = '<img src="SSR/x' + dNum + '.jpg"/>';
				} else if (ssrGate >= 59 && ssrGate <= 72) {
					var dNum = ssrGate - 58;
					image.innerHTML = '<img src="SSR/w' + dNum + '.jpg"/>';
				} else if (ssrGate >= 73 && ssrGate <= 80) {
					var dNum = ssrGate - 72;
					image.innerHTML = '<img src="SSR/g' + dNum + '.jpg"/>';
				} else if (ssrGate >= 81 && ssrGate <= 90) {
					var dNum = ssrGate - 80;
					image.innerHTML = '<img src="SSR/k' + dNum + '.jpg"/>';
				} else if (ssrGate >= 91 && ssrGate <= 100) {
					var dNum = ssrGate - 90;
					image.innerHTML = '<img src="SSR/b' + dNum + '.jpg"/>';
				}  else if (ssrGate >= 101 && ssrGate <= 106) {
					var dNum = ssrGate - 100;
					image.innerHTML = '<img src="SSR/i' + dNum + '.jpg"/>';
				}  else if (ssrGate >= 107 && ssrGate <= 114) {
					var dNum = ssrGate - 106;
					image.innerHTML = '<img src="SSR/a' + dNum + '.jpg"/>';
				}  else if (ssrGate >= 115 && ssrGate <= 160) {
					var dNum = ssrGate - 114;
					image.innerHTML = '<img src="SSR/m' + dNum + '.jpg"/>';
				} 
				
				/* SSR Charaters Release */
				if (ssrGate == 1 || ssrGate == 2) {
					image.innerHTML = '<img src="SSR/s1.jpg"/><img class="overlayImage2" src="characters/SSR/w1.png"/>';
				} else if (ssrGate == 3 || ssrGate == 4) {
					image.innerHTML = '<img src="SSR/s3.jpg"/><img class="overlayImage2" src="characters/SSR/f1.png"/>';
				} else if (ssrGate == 7 || ssrGate == 8) {
					image.innerHTML = '<img src="SSR/s7.jpg"/><img class="overlayImage2" src="characters/SSR/w5.png"/>';
				} else if (ssrGate == 9 || ssrGate == 10) {
					image.innerHTML = '<img src="SSR/s9.jpg"/><img class="overlayImage2" src="characters/SSR/e2.png"/>';
				} else if (ssrGate == 11 || ssrGate == 12) {
					image.innerHTML = '<img src="SSR/s11.jpg"/><img class="overlayImage2" src="characters/SSR/e1.png"/>';
				} else if (ssrGate == 15 || ssrGate == 16) {
					image.innerHTML = '<img src="SSR/s15.jpg"/><img class="overlayImage2" src="characters/SSR/l4.png"/>';
				} else if (ssrGate == 17 || ssrGate == 18) {
					image.innerHTML = '<img src="SSR/s17.jpg"/><img class="overlayImage2" src="characters/SSR/l1.png"/>';
				} else if (ssrGate == 19 || ssrGate == 20) {
					image.innerHTML = '<img src="SSR/s19.jpg"/><img class="overlayImage2" src="characters/SSR/l6.png"/>';
				} else if (ssrGate == 21 || ssrGate == 22) {
					image.innerHTML = '<img src="SSR/s21.jpg"/><img class="overlayImage2" src="characters/SSR/d4.png"/>';
				} else if (ssrGate == 23 || ssrGate == 24) {
					image.innerHTML = '<img src="SSR/s21.jpg"/><img class="overlayImage2" src="characters/SSR/d2.png"/>';
				} else if (ssrGate == 25 || ssrGate == 26) {
					image.innerHTML = '<img src="SSR/n1.jpg"/><img class="overlayImage2" src="characters/SSR/w2.png"/>';
				} else if (ssrGate == 29 || ssrGate == 30) {
					image.innerHTML = '<img src="SSR/n5.jpg"/><img class="overlayImage2" src="characters/SSR/i4.png"/>';
				} else if (ssrGate == 31 || ssrGate == 32) {
					image.innerHTML = '<img src="SSR/n7.jpg"/><img class="overlayImage2" src="characters/SSR/f6.png"/>';
				} else if (ssrGate == 33 || ssrGate == 34) {
					image.innerHTML = '<img src="SSR/n9.jpg"/><img class="overlayImage2" src="characters/SSR/d6.png"/>';
				} else if (ssrGate == 37 || ssrGate == 38) {
					image.innerHTML = '<img src="SSR/p1.jpg"/><img class="overlayImage2" src="characters/SSR/i1.png"/>';
				} else if (ssrGate == 39 || ssrGate == 40) {
					image.innerHTML = '<img src="SSR/p3.jpg"/><img class="overlayImage2" src="characters/SSR/f3.png"/>';
				} else if (ssrGate == 41 || ssrGate == 42) {
					image.innerHTML = '<img src="SSR/p5.jpg"/><img class="overlayImage2" src="characters/SSR/e6.png"/>';
				} else if (ssrGate == 43 || ssrGate == 44) {
					image.innerHTML = '<img src="SSR/p7.jpg"/><img class="overlayImage2" src="characters/SSR/i6.png"/>';
				} else if (ssrGate == 47 || ssrGate == 48) {
					image.innerHTML = '<img src="SSR/x1.jpg"/><img class="overlayImage2" src="characters/SSR/f5.png"/>';
				} else if (ssrGate == 53 || ssrGate == 54) {
					image.innerHTML = '<img src="SSR/x7.jpg"/><img class="overlayImage2" src="characters/SSR/i2.png"/>';
				} else if (ssrGate == 55 || ssrGate == 56) {
					image.innerHTML = '<img src="SSR/x9.jpg"/><img class="overlayImage2" src="characters/SSR/d1.png"/>';
				} else if (ssrGate == 57 || ssrGate == 58) {
					image.innerHTML = '<img src="SSR/x11.jpg"/><img class="overlayImage2" src="characters/SSR/e5.png"/>';
				} else if (ssrGate == 59 || ssrGate == 60) {
					image.innerHTML = '<img src="SSR/w1.jpg"/><img class="overlayImage2" src="characters/SSR/f2.png"/>';
				} else if (ssrGate == 61 || ssrGate == 62) {
					image.innerHTML = '<img src="SSR/w3.jpg"/><img class="overlayImage2" src="characters/SSR/w3.png"/>';
				} else if (ssrGate == 63 || ssrGate == 64) {
					image.innerHTML = '<img src="SSR/w5.jpg"/><img class="overlayImage2" src="characters/SSR/e3.png"/>';
				} else if (ssrGate == 65 || ssrGate == 66) {
					image.innerHTML = '<img src="SSR/w7.jpg"/><img class="overlayImage2" src="characters/SSR/l2.png"/>';
				} else if (ssrGate == 69 || ssrGate == 70) {
					image.innerHTML = '<img src="SSR/w11.jpg"/><img class="overlayImage2" src="characters/SSR/l5.png"/>';
				} else if (ssrGate == 71 || ssrGate == 72) {
					image.innerHTML = '<img src="SSR/w13.jpg"/><img class="overlayImage2" src="characters/SSR/d3.png"/>';
				} else if (ssrGate == 75 || ssrGate == 76) {
					image.innerHTML = '<img src="SSR/g3.jpg"/><img class="overlayImage2" src="characters/SSR/w4.png"/>';
				} else if (ssrGate == 79 || ssrGate == 80) {
					image.innerHTML = '<img src="SSR/g7.jpg"/><img class="overlayImage2" src="characters/SSR/i3.png"/>';
				} else if (ssrGate == 83 || ssrGate == 84) {
					image.innerHTML = '<img src="SSR/k3.jpg"/><img class="overlayImage2" src="characters/SSR/f7.png"/>';
				} else if (ssrGate == 85 || ssrGate == 86) {
					image.innerHTML = '<img src="SSR/k5.jpg"/><img class="overlayImage2" src="characters/SSR/w6.png"/>';
				} else if (ssrGate == 89 || ssrGate == 90) {
					image.innerHTML = '<img src="SSR/k9.jpg"/><img class="overlayImage2" src="characters/SSR/d5.png"/>';
				} else if (ssrGate == 99 || ssrGate == 100) {
					image.innerHTML = '<img src="SSR/b9.jpg"/><img class="overlayImage2" src="characters/SSR/i5.png"/>';
				} else if (ssrGate == 101 || ssrGate == 102) {
					image.innerHTML = '<img src="SSR/i1.jpg"/><img class="overlayImage2" src="characters/SSR/f4.png"/>';
				} else if (ssrGate == 103 || ssrGate == 104) {
					image.innerHTML = '<img src="SSR/i3.jpg"/><img class="overlayImage2" src="characters/SSR/l3.png"/>';
				} else if (ssrGate == 105 || ssrGate == 106) {
					image.innerHTML = '<img src="SSR/i5.jpg"/><img class="overlayImage2" src="characters/SSR/e4.png"/>';
				} else if (ssrGate == 114 || ssrGate == 115) {
					image.innerHTML = '<img src="SSR/a8.jpg"/><img class="overlayImage2" src="characters/SSR/l7.png"/>';
				}
				
			}
			
		}
		
		//Draw Earth
		else {
			var rareGate = Math.floor((Math.random() * 100) + 1);
			// Generate Earth R cards
			if (rareGate <= 82) {
				var rGate = Math.floor((Math.random() * 25) + 1);
				var image = document.getElementById('item1');
				image.innerHTML = '<img src="R/Earth/' + rGate + '.jpg"/>';
				
				/* R Earth Charaters Release */
				
				if (rGate == 19) {
					image.innerHTML = '<img src="R/Earth/19.jpg"/><img class="overlayImage2" src="characters/R/e1.png"/>';
				} else if (rGate == 15) {
					image.innerHTML = '<img src="R/Earth/15.jpg"/><img class="overlayImage2" src="characters/R/e2.png"/>';
				} else if (rGate == 17) {
					image.innerHTML = '<img src="R/Earth/17.jpg"/><img class="overlayImage2" src="characters/R/e3.png"/>';
				} else if (rGate == 18) {
					image.innerHTML = '<img src="R/Earth/18.jpg"/><img class="overlayImage2" src="characters/R/e4.png"/>';
				} else if (rGate == 7) {
					image.innerHTML = '<img src="R/Earth/7.jpg"/><img class="overlayImage2" src="characters/R/e5.png"/>';
				} else if (rGate == 25) {
					image.innerHTML = '<img src="R/Earth/25.jpg"/><img class="overlayImage2" src="characters/R/e6.png"/>';
				} else if (rGate == 4) {
					image.innerHTML = '<img src="R/Earth/4.jpg"/><img class="overlayImage2" src="characters/R/e7.png"/>';
				} else if (rGate == 21) {
					image.innerHTML = '<img src="R/Earth/21.jpg"/><img class="overlayImage2" src="characters/R/e8.png"/>';
				}
					
			} 
			
			
			//Generate Earth SR Cards
			else if (rareGate >=83 && rareGate <=97){
				var srGate = Math.floor((Math.random() * 23) + 1);
				var image = document.getElementById('item1');
				image.innerHTML = '<img src="SR/Earth/' + srGate + '.jpg"/>';
				
				/* SR Earth Charaters Release */
				
				if (srGate == 5) {
					image.innerHTML = '<img src="SR/Earth/5.jpg"/><img class="overlayImage2" src="characters/SR/e1.png"/>';
				} else if (srGate == 18) {
					image.innerHTML = '<img src="SR/Earth/18.jpg"/><img class="overlayImage2" src="characters/SR/e2.png"/>';
				} else if (srGate == 14) {
					image.innerHTML = '<img src="SR/Earth/14.jpg"/><img class="overlayImage2" src="characters/SR/e3.png"/>';
				} else if (srGate == 15) {
					image.innerHTML = '<img src="SR/Earth/15.jpg"/><img class="overlayImage2" src="characters/SR/e4.png"/>';
				} else if (srGate == 17) {
					image.innerHTML = '<img src="SR/Earth/17.jpg"/><img class="overlayImage2" src="characters/SR/e5.png"/>';
				} else if (srGate == 6) {
					image.innerHTML = '<img src="SR/Earth/6.jpg"/><img class="overlayImage2" src="characters/SR/e6.png"/>';
				} else if (srGate == 22) {
					image.innerHTML = '<img src="SR/Earth/22.jpg"/><img class="overlayImage2" src="characters/SR/e7.png"/>';
				}
			
			} 
			
			
			//Generate Earth SSR cards
			else {
				var ssrGate = Math.floor((Math.random() * 27) + 1);
				var image = document.getElementById('item1');
				image.innerHTML = '<img src="SSR/Earth/' + ssrGate + '.jpg"/>';
				
				
				/* Earth SSR Charaters Release */
				if (ssrGate == 20 || ssrGate == 21) {
					image.innerHTML = '<img src="SSR/Earth/20.jpg"/><img class="overlayImage2" src="characters/SSR/e1.png"/>';
				} else if (ssrGate == 18 || ssrGate == 19) {
					image.innerHTML = '<img src="SSR/Earth/18.jpg"/><img class="overlayImage2" src="characters/SSR/e2.png"/>';
				} else if (ssrGate == 22 || ssrGate == 23) {
					image.innerHTML = '<img src="SSR/Earth/22.jpg"/><img class="overlayImage2" src="characters/SSR/e3.png"/>';
				} else if (ssrGate == 5 || ssrGate == 6) {
					image.innerHTML = '<img src="SSR/Earth/5.jpg"/><img class="overlayImage2" src="characters/SSR/e4.png"/>';
				} else if (ssrGate == 26 || ssrGate == 27) {
					image.innerHTML = '<img src="SSR/Earth/26.jpg"/><img class="overlayImage2" src="characters/SSR/e5.png"/>';
				} else if (ssrGate == 16 || ssrGate == 17) {
					image.innerHTML = '<img src="SSR/Earth/16.jpg"/><img class="overlayImage2" src="characters/SSR/e6.png"/>';
				}
				
			}
			
			
		}
		
	}
	
	//Wind Up
	else if (elementUp == 5) {
		var upValue = Math.floor ((Math.random() * 100) + 1);
		//Draw others
		if (upValue <= 60) {
			var rareGate = Math.floor((Math.random() * 100) + 1);
			// Generate R cards
			if (rareGate <= 82) {
				var rGate = Math.floor((Math.random() * 125) + 1);
				var image = document.getElementById('item1');
				if (rGate <= 16) {
					var dNum = rGate;
					image.innerHTML = '<img src="R/s' + dNum + '.jpg"/>';
				} else if (rGate >= 17 && rGate <= 29) {
					var dNum = rGate - 16;
					image.innerHTML = '<img src="R/n' + dNum + '.jpg"/>';
				} else if (rGate >= 30 && rGate <= 39) {
					var dNum = rGate - 29;
					image.innerHTML = '<img src="R/p' + dNum + '.jpg"/>';
				} else if (rGate >= 40 && rGate <= 51) {
					var dNum = rGate - 39;
					image.innerHTML = '<img src="R/x' + dNum + '.jpg"/>';
				} else if (rGate >= 52 && rGate <= 67) {
					var dNum = rGate - 51;
					image.innerHTML = '<img src="R/w' + dNum + '.jpg"/>';
				} else if (rGate >= 68 && rGate <= 78) {
					var dNum = rGate - 67;
					image.innerHTML = '<img src="R/g' + dNum + '.jpg"/>';
				} else if (rGate >= 79 && rGate <= 91) {
					var dNum = rGate - 78;
					image.innerHTML = '<img src="R/k' + dNum + '.jpg"/>';
				} else if (rGate >= 92 && rGate <= 98) {
					var dNum = rGate - 91;
					image.innerHTML = '<img src="R/b' + dNum + '.jpg"/>';
				} else if (rGate >= 99 && rGate <= 99) {
					var dNum = rGate - 98;
					image.innerHTML = '<img src="R/i' + dNum + '.jpg"/>';
				} else if (rGate >= 100 && rGate <= 101) {
					var dNum = rGate - 99;
					image.innerHTML = '<img src="R/a' + dNum + '.jpg"/>';
				} else if (rGate >= 102 && rGate <= 125) {
					var dNum = rGate - 101;
					image.innerHTML = '<img src="R/m' + dNum + '.jpg"/>';
				}
				
				/* R Charaters Release */
				
				if (rGate == 4) {
					image.innerHTML = '<img src="R/s4.jpg"/><img class="overlayImage2" src="characters/R/l2.png"/>';
				} else if (rGate == 5) {
					image.innerHTML = '<img src="R/s5.jpg"/><img class="overlayImage2" src="characters/R/e2.png"/>';
				} else if (rGate == 8) {
					image.innerHTML = '<img src="R/s8.jpg"/><img class="overlayImage2" src="characters/R/i4.png"/>';
				} else if (rGate == 11) {
					image.innerHTML = '<img src="R/s11.jpg"/><img class="overlayImage2" src="characters/R/e3.png"/>';
				} else if (rGate == 12) {
					image.innerHTML = '<img src="R/s12.jpg"/><img class="overlayImage2" src="characters/R/e4.png"/>';
				} else if (rGate == 13) {
					image.innerHTML = '<img src="R/s13.jpg"/><img class="overlayImage2" src="characters/R/i7.png"/>';
				} else if (rGate == 14) {
					image.innerHTML = '<img src="R/s14.jpg"/><img class="overlayImage2" src="characters/R/w4.png"/>';
				} else if (rGate == 15) {
					image.innerHTML = '<img src="R/s15.jpg"/><img class="overlayImage2" src="characters/R/i5.png"/>';
				} else if (rGate == 16) {
					image.innerHTML = '<img src="R/s16.jpg"/><img class="overlayImage2" src="characters/R/i6.png"/>';
				} else if (rGate == 22) {
					image.innerHTML = '<img src="R/n6.jpg"/><img class="overlayImage2" src="characters/R/d1.png"/>';
				} else if (rGate == 28) {
					image.innerHTML = '<img src="R/n12.jpg"/><img class="overlayImage2" src="characters/R/d3.png"/>';
				} else if (rGate == 29) {
					image.innerHTML = '<img src="R/n13.jpg"/><img class="overlayImage2" src="characters/R/d4.png"/>';
				} else if (rGate == 35) {
					image.innerHTML = '<img src="R/p6.jpg"/><img class="overlayImage2" src="characters/R/w3.png"/>';
				} else if (rGate == 38) {
					image.innerHTML = '<img src="R/p9.jpg"/><img class="overlayImage2" src="characters/R/f5.png"/>';
				} else if (rGate == 39) {
					image.innerHTML = '<img src="R/p10.jpg"/><img class="overlayImage2" src="characters/R/w2.png"/>';
				} else if (rGate == 40) {
					image.innerHTML = '<img src="R/x1.jpg"/><img class="overlayImage2" src="characters/R/f1.png"/>';
				} else if (rGate == 45) {
					image.innerHTML = '<img src="R/x6.jpg"/><img class="overlayImage2" src="characters/R/e6.png"/>';
				} else if (rGate == 46) {
					image.innerHTML = '<img src="R/x7.jpg"/><img class="overlayImage2" src="characters/R/i2.png"/>';
				} else if (rGate == 50) {
					image.innerHTML = '<img src="R/x11.jpg"/><img class="overlayImage2" src="characters/R/l4.png"/>';
				} else if (rGate == 51) {
					image.innerHTML = '<img src="R/w1.jpg"/><img class="overlayImage2" src="characters/R/f7.png"/>';
				} else if (rGate == 55) {
					image.innerHTML = '<img src="R/w5.jpg"/><img class="overlayImage2" src="characters/R/w5.png"/>';
				} else if (rGate == 56) {
					image.innerHTML = '<img src="R/w6.jpg"/><img class="overlayImage2" src="characters/R/e1.png"/>';
				} else if (rGate == 58) {
					image.innerHTML = '<img src="R/w8.jpg"/><img class="overlayImage2" src="characters/R/e8.png"/>';
				} else if (rGate == 59) {
					image.innerHTML = '<img src="R/w9.jpg"/><img class="overlayImage2" src="characters/R/f3.png"/>';
				} else if (rGate == 60) {
					image.innerHTML = '<img src="R/w10.jpg"/><img class="overlayImage2" src="characters/R/i3.png"/>';
				} else if (rGate == 64) {
					image.innerHTML = '<img src="R/w14.jpg"/><img class="overlayImage2" src="characters/R/l3.png"/>';
				} else if (rGate == 65) {
					image.innerHTML = '<img src="R/w15.jpg"/><img class="overlayImage2" src="characters/R/d2.png"/>';
				} else if (rGate == 70) {
					image.innerHTML = '<img src="R/g3.jpg"/><img class="overlayImage2" src="characters/R/e7.png"/>';
				} else if (rGate == 71) {
					image.innerHTML = '<img src="R/g4.jpg"/><img class="overlayImage2" src="characters/R/f6.png"/>';
				} else if (rGate == 72) {
					image.innerHTML = '<img src="R/g5.jpg"/><img class="overlayImage2" src="characters/R/f8.png"/>';
				} else if (rGate == 73) {
					image.innerHTML = '<img src="R/g6.jpg"/><img class="overlayImage2" src="characters/R/w1.png"/>';
				} else if (rGate == 76) {
					image.innerHTML = '<img src="R/g9.jpg"/><img class="overlayImage2" src="characters/R/f4.png"/>';
				} else if (rGate == 82) {
					image.innerHTML = '<img src="R/k4.jpg"/><img class="overlayImage2" src="characters/R/f2.png"/>';
				} else if (rGate == 86) {
					image.innerHTML = '<img src="R/k8.jpg"/><img class="overlayImage2" src="characters/R/i1.png"/>';
				} else if (rGate == 88) {
					image.innerHTML = '<img src="R/k10.jpg"/><img class="overlayImage2" src="characters/R/e5.png"/>';
				} else if (rGate == 91) {
					image.innerHTML = '<img src="R/k13.jpg"/><img class="overlayImage2" src="characters/R/l1.png"/>';
				}
					
			} 
			
			
			//Generate SR Cards
			else if (rareGate >=82 && rareGate <=97){
				var srGate = Math.floor((Math.random() * 95) + 1);
				var image = document.getElementById('item1');
				if (srGate <= 12) {
					var dNum = srGate;
					image.innerHTML = '<img src="SR/s' + dNum + '.jpg"/>';
				} else if (srGate >= 13 && srGate <= 20) {
					var dNum = srGate - 12;
					image.innerHTML = '<img src="SR/n' + dNum + '.jpg"/>';
				} else if (srGate >= 21 && srGate <= 28) {
					var dNum = srGate - 20;
					image.innerHTML = '<img src="SR/p' + dNum + '.jpg"/>';
				} else if (srGate >= 29 && srGate <= 32) {
					var dNum = srGate - 28;
					image.innerHTML = '<img src="SR/x' + dNum + '.jpg"/>';
				} else if (srGate >= 33 && srGate <= 42) {
					var dNum = srGate - 32;
					image.innerHTML = '<img src="SR/w' + dNum + '.jpg"/>';
				} else if (srGate >= 43 && srGate <= 49) {
					var dNum = srGate - 42;
					image.innerHTML = '<img src="SR/g' + dNum + '.jpg"/>';
				} else if (srGate >= 50 && srGate <= 61) {
					var dNum = srGate - 49;
					image.innerHTML = '<img src="SR/k' + dNum + '.jpg"/>';
				} else if (srGate >= 62 && srGate <= 68) {
					var dNum = srGate - 61;
					image.innerHTML = '<img src="SR/b' + dNum + '.jpg"/>';
				} else if (srGate >= 69 && srGate <= 72) {
					var dNum = srGate - 68;
					image.innerHTML = '<img src="SR/i' + dNum + '.jpg"/>';
				} else if (srGate >= 73 && srGate <= 75) {
					var dNum = srGate - 72;
					image.innerHTML = '<img src="SR/a' + dNum + '.jpg"/>';
				} else if (srGate >= 76 && srGate <= 95) {
					var dNum = srGate - 75;
					image.innerHTML = '<img src="SR/m' + dNum + '.jpg"/>';
				}
				
				/* SR Charaters Release */
				
				if (srGate == 2) {
					image.innerHTML = '<img src="SR/s2.jpg"/><img class="overlayImage2" src="characters/SR/e2.png"/>';
				} else if (srGate == 3) {
					image.innerHTML = '<img src="SR/s3.jpg"/><img class="overlayImage2" src="characters/SR/f4.png"/>';
				} else if (srGate == 4) {
					image.innerHTML = '<img src="SR/s4.jpg"/><img class="overlayImage2" src="characters/SR/f6.png"/>';
				} else if (srGate == 6) {
					image.innerHTML = '<img src="SR/s6.jpg"/><img class="overlayImage2" src="characters/SR/w1.png"/>';
				} else if (srGate == 9) {
					image.innerHTML = '<img src="SR/s9.jpg"/><img class="overlayImage2" src="characters/SR/l6.png"/>';
				} else if (srGate == 10) {
					image.innerHTML = '<img src="SR/s10.jpg"/><img class="overlayImage2" src="characters/SR/i3.png"/>';
				} else if (srGate == 11) {
					image.innerHTML = '<img src="SR/s11.jpg"/><img class="overlayImage2" src="characters/SR/d3.png"/>';
				} else if (srGate == 12) {
					image.innerHTML = '<img src="SR/s12.jpg"/><img class="overlayImage2" src="characters/SR/d1.png"/>';
				} else if (srGate == 13) {
					image.innerHTML = '<img src="SR/n1.jpg"/><img class="overlayImage2" src="characters/SR/f3.png"/>';
				} else if (srGate == 17) {
					image.innerHTML = '<img src="SR/n5.jpg"/><img class="overlayImage2" src="characters/SR/e3.png"/>';
				} else if (srGate == 18) {
					image.innerHTML = '<img src="SR/n6.jpg"/><img class="overlayImage2" src="characters/SR/l4.png"/>';
				} else if (srGate == 20) {
					image.innerHTML = '<img src="SR/n8.jpg"/><img class="overlayImage2" src="characters/SR/d5.png"/>';
				} else if (srGate == 21) {
					image.innerHTML = '<img src="SR/p1.jpg"/><img class="overlayImage2" src="characters/SR/e4.png"/>';
				} else if (srGate == 23) {
					image.innerHTML = '<img src="SR/p3.jpg"/><img class="overlayImage2" src="characters/SR/w4.png"/>';
				} else if (srGate == 25) {
					image.innerHTML = '<img src="SR/p5.jpg"/><img class="overlayImage2" src="characters/SR/e5.png"/>';
				} else if (srGate == 32) {
					image.innerHTML = '<img src="SR/x4.jpg"/><img class="overlayImage2" src="characters/SR/d4.png"/>';
				} else if (srGate == 33) {
					image.innerHTML = '<img src="SR/w1.jpg"/><img class="overlayImage2" src="characters/SR/f8.png"/>';
				} else if (srGate == 34) {
					image.innerHTML = '<img src="SR/w2.jpg"/><img class="overlayImage2" src="characters/SR/l3.png"/>';
				} else if (srGate == 35) {
					image.innerHTML = '<img src="SR/w3.jpg"/><img class="overlayImage2" src="characters/SR/w3.png"/>';
				} else if (srGate == 38) {
					image.innerHTML = '<img src="SR/w6.jpg"/><img class="overlayImage2" src="characters/SR/e7.png"/>';
				} else if (srGate == 39) {
					image.innerHTML = '<img src="SR/w7.jpg"/><img class="overlayImage2" src="characters/SR/l5.png"/>';
				} else if (srGate == 40) {
					image.innerHTML = '<img src="SR/w8.jpg"/><img class="overlayImage2" src="characters/SR/l7.png"/>';
				} else if (srGate == 42) {
					image.innerHTML = '<img src="SR/w10.jpg"/><img class="overlayImage2" src="characters/SR/d2.png"/>';
				} else if (srGate == 44) {
					image.innerHTML = '<img src="SR/g2.jpg"/><img class="overlayImage2" src="characters/SR/f7.png"/>';
				} else if (srGate == 45) {
					image.innerHTML = '<img src="SR/g3.jpg"/><img class="overlayImage2" src="characters/SR/w5.png"/>';
				} else if (srGate == 50) {
					image.innerHTML = '<img src="SR/k1.jpg"/><img class="overlayImage2" src="characters/SR/f2.png"/>';
				} else if (srGate == 51) {
					image.innerHTML = '<img src="SR/k2.jpg"/><img class="overlayImage2" src="characters/SR/f5.png"/>';
				} else if (srGate == 52) {
					image.innerHTML = '<img src="SR/k3.jpg"/><img class="overlayImage2" src="characters/SR/f1.png"/>';
				} else if (srGate == 55) {
					image.innerHTML = '<img src="SR/k6.jpg"/><img class="overlayImage2" src="characters/SR/e1.png"/>';
				} else if (srGate == 56) {
					image.innerHTML = '<img src="SR/k7.jpg"/><img class="overlayImage2" src="characters/SR/e6.png"/>';
				} else if (srGate == 58) {
					image.innerHTML = '<img src="SR/k9.jpg"/><img class="overlayImage2" src="characters/SR/i2.png"/>';
				} else if (srGate == 59) {
					image.innerHTML = '<img src="SR/k10.jpg"/><img class="overlayImage2" src="characters/SR/i6.png"/>';
				} else if (srGate == 60) {
					image.innerHTML = '<img src="SR/k11.jpg"/><img class="overlayImage2" src="characters/SR/l1.png"/>';
				} else if (srGate == 61) {
					image.innerHTML = '<img src="SR/k12.jpg"/><img class="overlayImage2" src="characters/SR/l2.png"/>';
				} else if (srGate == 65) {
					image.innerHTML = '<img src="SR/b4.jpg"/><img class="overlayImage2" src="characters/SR/w6.png"/>';
				} else if (srGate == 67) {
					image.innerHTML = '<img src="SR/b6.jpg"/><img class="overlayImage2" src="characters/SR/i5.png"/>';
				} else if (srGate == 69) {
					image.innerHTML = '<img src="SR/i1.jpg"/><img class="overlayImage2" src="characters/SR/w2.png"/>';
				} else if (srGate == 72) {
					image.innerHTML = '<img src="SR/i3.jpg"/><img class="overlayImage2" src="characters/SR/i1.png"/>';
				} else if (srGate == 73) {
					image.innerHTML = '<img src="SR/i4.jpg"/><img class="overlayImage2" src="characters/SR/i4.png"/>';
				}
			
			
			} 
			
			
			//Generate SSR cards
			else {
				var ssrGate = Math.floor((Math.random() * 160) + 1);
				var image = document.getElementById('item1');
				if (ssrGate <= 24) {
					var dNum = ssrGate;
					image.innerHTML = '<img src="SSR/s' + dNum + '.jpg"/>';
				} else if (ssrGate >= 25 && ssrGate <= 36) {
					var dNum = ssrGate - 24;
					image.innerHTML = '<img src="SSR/n' + dNum + '.jpg"/>';
				} else if (ssrGate >= 37 && ssrGate <= 46) {
					var dNum = ssrGate - 36;
					image.innerHTML = '<img src="SSR/p' + dNum + '.jpg"/>';
				} else if (ssrGate >= 47 && ssrGate <= 58) {
					var dNum = ssrGate - 46;
					image.innerHTML = '<img src="SSR/x' + dNum + '.jpg"/>';
				} else if (ssrGate >= 59 && ssrGate <= 72) {
					var dNum = ssrGate - 58;
					image.innerHTML = '<img src="SSR/w' + dNum + '.jpg"/>';
				} else if (ssrGate >= 73 && ssrGate <= 80) {
					var dNum = ssrGate - 72;
					image.innerHTML = '<img src="SSR/g' + dNum + '.jpg"/>';
				} else if (ssrGate >= 81 && ssrGate <= 90) {
					var dNum = ssrGate - 80;
					image.innerHTML = '<img src="SSR/k' + dNum + '.jpg"/>';
				} else if (ssrGate >= 91 && ssrGate <= 100) {
					var dNum = ssrGate - 90;
					image.innerHTML = '<img src="SSR/b' + dNum + '.jpg"/>';
				}  else if (ssrGate >= 101 && ssrGate <= 106) {
					var dNum = ssrGate - 100;
					image.innerHTML = '<img src="SSR/i' + dNum + '.jpg"/>';
				}  else if (ssrGate >= 107 && ssrGate <= 114) {
					var dNum = ssrGate - 106;
					image.innerHTML = '<img src="SSR/a' + dNum + '.jpg"/>';
				}  else if (ssrGate >= 115 && ssrGate <= 160) {
					var dNum = ssrGate - 114;
					image.innerHTML = '<img src="SSR/m' + dNum + '.jpg"/>';
				} 
				
				/* SSR Charaters Release */
				if (ssrGate == 1 || ssrGate == 2) {
					image.innerHTML = '<img src="SSR/s1.jpg"/><img class="overlayImage2" src="characters/SSR/w1.png"/>';
				} else if (ssrGate == 3 || ssrGate == 4) {
					image.innerHTML = '<img src="SSR/s3.jpg"/><img class="overlayImage2" src="characters/SSR/f1.png"/>';
				} else if (ssrGate == 7 || ssrGate == 8) {
					image.innerHTML = '<img src="SSR/s7.jpg"/><img class="overlayImage2" src="characters/SSR/w5.png"/>';
				} else if (ssrGate == 9 || ssrGate == 10) {
					image.innerHTML = '<img src="SSR/s9.jpg"/><img class="overlayImage2" src="characters/SSR/e2.png"/>';
				} else if (ssrGate == 11 || ssrGate == 12) {
					image.innerHTML = '<img src="SSR/s11.jpg"/><img class="overlayImage2" src="characters/SSR/e1.png"/>';
				} else if (ssrGate == 15 || ssrGate == 16) {
					image.innerHTML = '<img src="SSR/s15.jpg"/><img class="overlayImage2" src="characters/SSR/l4.png"/>';
				} else if (ssrGate == 17 || ssrGate == 18) {
					image.innerHTML = '<img src="SSR/s17.jpg"/><img class="overlayImage2" src="characters/SSR/l1.png"/>';
				} else if (ssrGate == 19 || ssrGate == 20) {
					image.innerHTML = '<img src="SSR/s19.jpg"/><img class="overlayImage2" src="characters/SSR/l6.png"/>';
				} else if (ssrGate == 21 || ssrGate == 22) {
					image.innerHTML = '<img src="SSR/s21.jpg"/><img class="overlayImage2" src="characters/SSR/d4.png"/>';
				} else if (ssrGate == 23 || ssrGate == 24) {
					image.innerHTML = '<img src="SSR/s21.jpg"/><img class="overlayImage2" src="characters/SSR/d2.png"/>';
				} else if (ssrGate == 25 || ssrGate == 26) {
					image.innerHTML = '<img src="SSR/n1.jpg"/><img class="overlayImage2" src="characters/SSR/w2.png"/>';
				} else if (ssrGate == 29 || ssrGate == 30) {
					image.innerHTML = '<img src="SSR/n5.jpg"/><img class="overlayImage2" src="characters/SSR/i4.png"/>';
				} else if (ssrGate == 31 || ssrGate == 32) {
					image.innerHTML = '<img src="SSR/n7.jpg"/><img class="overlayImage2" src="characters/SSR/f6.png"/>';
				} else if (ssrGate == 33 || ssrGate == 34) {
					image.innerHTML = '<img src="SSR/n9.jpg"/><img class="overlayImage2" src="characters/SSR/d6.png"/>';
				} else if (ssrGate == 37 || ssrGate == 38) {
					image.innerHTML = '<img src="SSR/p1.jpg"/><img class="overlayImage2" src="characters/SSR/i1.png"/>';
				} else if (ssrGate == 39 || ssrGate == 40) {
					image.innerHTML = '<img src="SSR/p3.jpg"/><img class="overlayImage2" src="characters/SSR/f3.png"/>';
				} else if (ssrGate == 41 || ssrGate == 42) {
					image.innerHTML = '<img src="SSR/p5.jpg"/><img class="overlayImage2" src="characters/SSR/e6.png"/>';
				} else if (ssrGate == 43 || ssrGate == 44) {
					image.innerHTML = '<img src="SSR/p7.jpg"/><img class="overlayImage2" src="characters/SSR/i6.png"/>';
				} else if (ssrGate == 47 || ssrGate == 48) {
					image.innerHTML = '<img src="SSR/x1.jpg"/><img class="overlayImage2" src="characters/SSR/f5.png"/>';
				} else if (ssrGate == 53 || ssrGate == 54) {
					image.innerHTML = '<img src="SSR/x7.jpg"/><img class="overlayImage2" src="characters/SSR/i2.png"/>';
				} else if (ssrGate == 55 || ssrGate == 56) {
					image.innerHTML = '<img src="SSR/x9.jpg"/><img class="overlayImage2" src="characters/SSR/d1.png"/>';
				} else if (ssrGate == 57 || ssrGate == 58) {
					image.innerHTML = '<img src="SSR/x11.jpg"/><img class="overlayImage2" src="characters/SSR/e5.png"/>';
				} else if (ssrGate == 59 || ssrGate == 60) {
					image.innerHTML = '<img src="SSR/w1.jpg"/><img class="overlayImage2" src="characters/SSR/f2.png"/>';
				} else if (ssrGate == 61 || ssrGate == 62) {
					image.innerHTML = '<img src="SSR/w3.jpg"/><img class="overlayImage2" src="characters/SSR/w3.png"/>';
				} else if (ssrGate == 63 || ssrGate == 64) {
					image.innerHTML = '<img src="SSR/w5.jpg"/><img class="overlayImage2" src="characters/SSR/e3.png"/>';
				} else if (ssrGate == 65 || ssrGate == 66) {
					image.innerHTML = '<img src="SSR/w7.jpg"/><img class="overlayImage2" src="characters/SSR/l2.png"/>';
				} else if (ssrGate == 69 || ssrGate == 70) {
					image.innerHTML = '<img src="SSR/w11.jpg"/><img class="overlayImage2" src="characters/SSR/l5.png"/>';
				} else if (ssrGate == 71 || ssrGate == 72) {
					image.innerHTML = '<img src="SSR/w13.jpg"/><img class="overlayImage2" src="characters/SSR/d3.png"/>';
				} else if (ssrGate == 75 || ssrGate == 76) {
					image.innerHTML = '<img src="SSR/g3.jpg"/><img class="overlayImage2" src="characters/SSR/w4.png"/>';
				} else if (ssrGate == 79 || ssrGate == 80) {
					image.innerHTML = '<img src="SSR/g7.jpg"/><img class="overlayImage2" src="characters/SSR/i3.png"/>';
				} else if (ssrGate == 83 || ssrGate == 84) {
					image.innerHTML = '<img src="SSR/k3.jpg"/><img class="overlayImage2" src="characters/SSR/f7.png"/>';
				} else if (ssrGate == 85 || ssrGate == 86) {
					image.innerHTML = '<img src="SSR/k5.jpg"/><img class="overlayImage2" src="characters/SSR/w6.png"/>';
				} else if (ssrGate == 89 || ssrGate == 90) {
					image.innerHTML = '<img src="SSR/k9.jpg"/><img class="overlayImage2" src="characters/SSR/d5.png"/>';
				} else if (ssrGate == 99 || ssrGate == 100) {
					image.innerHTML = '<img src="SSR/b9.jpg"/><img class="overlayImage2" src="characters/SSR/i5.png"/>';
				} else if (ssrGate == 101 || ssrGate == 102) {
					image.innerHTML = '<img src="SSR/i1.jpg"/><img class="overlayImage2" src="characters/SSR/f4.png"/>';
				} else if (ssrGate == 103 || ssrGate == 104) {
					image.innerHTML = '<img src="SSR/i3.jpg"/><img class="overlayImage2" src="characters/SSR/l3.png"/>';
				} else if (ssrGate == 105 || ssrGate == 106) {
					image.innerHTML = '<img src="SSR/i5.jpg"/><img class="overlayImage2" src="characters/SSR/e4.png"/>';
				} else if (ssrGate == 114 || ssrGate == 115) {
					image.innerHTML = '<img src="SSR/a8.jpg"/><img class="overlayImage2" src="characters/SSR/l7.png"/>';
				}
				
			}
			
		}
		
		//Draw Wind
		else {
			var rareGate = Math.floor((Math.random() * 100) + 1);
			// Generate Wind R cards
			if (rareGate <= 82) {
				var rGate = Math.floor((Math.random() * 21) + 1);
				var image = document.getElementById('item1');
				image.innerHTML = '<img src="R/Wind/' + rGate + '.jpg"/>';
				
				/* Wind R Charaters Release */
				
				if (rGate == 3) {
					image.innerHTML = '<img src="R/Wind/3.jpg"/><img class="overlayImage2" src="characters/R/i1.png"/>';
				} else if (rGate == 20) {
					image.innerHTML = '<img src="R/Wind/20.jpg"/><img class="overlayImage2" src="characters/R/i2.png"/>';
				} else if (rGate == 17) {
					image.innerHTML = '<img src="R/Wind/17.jpg"/><img class="overlayImage2" src="characters/R/i3.png"/>';
				} else if (rGate == 13) {
					image.innerHTML = '<img src="R/Wind/13.jpg"/><img class="overlayImage2" src="characters/R/i4.png"/>';
				} else if (rGate == 15) {
					image.innerHTML = '<img src="R/Wind/15.jpg"/><img class="overlayImage2" src="characters/R/i5.png"/>';
				} else if (rGate == 16) {
					image.innerHTML = '<img src="R/Wind/3.jpg"/><img class="overlayImage2" src="characters/R/i16.png"/>';
				} else if (rGate == 14) {
					image.innerHTML = '<img src="R/Wind/14.jpg"/><img class="overlayImage2" src="characters/R/i7.png"/>';
				}
					
			} 
			
			
			//Generate Wind SR Cards
			else if (rareGate >=83 && rareGate <=97){
				var srGate = Math.floor((Math.random() * 16) + 1);
				var image = document.getElementById('item1');
				image.innerHTML = '<img src="SR/Wind/' + srGate + '.jpg"/>';
				
				/* Wind SR Charaters Release */
				
				if (srGate == 5) {
					image.innerHTML = '<img src="SR/Wind/5.jpg"/><img class="overlayImage2" src="characters/SR/i1.png"/>';
				} else if (srGate == 8) {
					image.innerHTML = '<img src="SR/Wind/8.jpg"/><img class="overlayImage2" src="characters/SR/i2.png"/>';
				} else if (srGate == 16) {
					image.innerHTML = '<img src="SR/Wind/16.jpg"/><img class="overlayImage2" src="characters/SR/i3.png"/>';
				} else if (srGate == 6) {
					image.innerHTML = '<img src="SR/Wind/6.jpg"/><img class="overlayImage2" src="characters/SR/i4.png"/>';
				} else if (srGate == 2) {
					image.innerHTML = '<img src="SR/Wind/2.jpg"/><img class="overlayImage2" src="characters/SR/i5.png"/>';
				} else if (srGate == 9) {
					image.innerHTML = '<img src="SR/Wind/9.jpg"/><img class="overlayImage2" src="characters/SR/i6.png"/>';
				}
			
			} 
			
			
			//Generate Wind SSR cards
			else {
				var ssrGate = Math.floor((Math.random() * 26) + 1);
				var image = document.getElementById('item1');
				image.innerHTML = '<img src="SSR/Wind/' + ssrGate + '.jpg"/>';
				
				
				/* Wind SSR Charaters Release */
				if (ssrGate == 19 || ssrGate == 20) {
					image.innerHTML = '<img src="SSR/Wind/19.jpg"/><img class="overlayImage2" src="characters/SSR/i1.png"/>';
				} else if (ssrGate == 25 || ssrGate == 26) {
					image.innerHTML = '<img src="SSR/Wind/25.jpg"/><img class="overlayImage2" src="characters/SSR/i2.png"/>';
				} else if (ssrGate == 7 || ssrGate == 8) {
					image.innerHTML = '<img src="SSR/Wind/7.jpg"/><img class="overlayImage2" src="characters/SSR/i3.png"/>';
				} else if (ssrGate == 17 || ssrGate == 18) {
					image.innerHTML = '<img src="SSR/Wind/17.jpg"/><img class="overlayImage2" src="characters/SSR/i4.png"/>';
				} else if (ssrGate == 5 || ssrGate == 6) {
					image.innerHTML = '<img src="SSR/Wind/5.jpg"/><img class="overlayImage2" src="characters/SSR/i5.png"/>';
				} else if (ssrGate == 21 || ssrGate == 22) {
					image.innerHTML = '<img src="SSR/Wind/21.jpg"/><img class="overlayImage2" src="characters/SSR/i6.png"/>';
				}
				
			}
			
			
		}
		
	}
	
	//DL Up
	else if (elementUp == 6) {
		var upValue = Math.floor ((Math.random() * 100) + 1);
		//Draw others
		if (upValue <= 60) {
			var rareGate = Math.floor((Math.random() * 100) + 1);
			// Generate R cards
			if (rareGate <= 82) {
				var rGate = Math.floor((Math.random() * 125) + 1);
				var image = document.getElementById('item1');
				if (rGate <= 16) {
					var dNum = rGate;
					image.innerHTML = '<img src="R/s' + dNum + '.jpg"/>';
				} else if (rGate >= 17 && rGate <= 29) {
					var dNum = rGate - 16;
					image.innerHTML = '<img src="R/n' + dNum + '.jpg"/>';
				} else if (rGate >= 30 && rGate <= 39) {
					var dNum = rGate - 29;
					image.innerHTML = '<img src="R/p' + dNum + '.jpg"/>';
				} else if (rGate >= 40 && rGate <= 51) {
					var dNum = rGate - 39;
					image.innerHTML = '<img src="R/x' + dNum + '.jpg"/>';
				} else if (rGate >= 52 && rGate <= 67) {
					var dNum = rGate - 51;
					image.innerHTML = '<img src="R/w' + dNum + '.jpg"/>';
				} else if (rGate >= 68 && rGate <= 78) {
					var dNum = rGate - 67;
					image.innerHTML = '<img src="R/g' + dNum + '.jpg"/>';
				} else if (rGate >= 79 && rGate <= 91) {
					var dNum = rGate - 78;
					image.innerHTML = '<img src="R/k' + dNum + '.jpg"/>';
				} else if (rGate >= 92 && rGate <= 98) {
					var dNum = rGate - 91;
					image.innerHTML = '<img src="R/b' + dNum + '.jpg"/>';
				} else if (rGate >= 99 && rGate <= 99) {
					var dNum = rGate - 98;
					image.innerHTML = '<img src="R/i' + dNum + '.jpg"/>';
				} else if (rGate >= 100 && rGate <= 101) {
					var dNum = rGate - 99;
					image.innerHTML = '<img src="R/a' + dNum + '.jpg"/>';
				} else if (rGate >= 102 && rGate <= 125) {
					var dNum = rGate - 101;
					image.innerHTML = '<img src="R/m' + dNum + '.jpg"/>';
				}
				
				/* R Charaters Release */
				
				if (rGate == 4) {
					image.innerHTML = '<img src="R/s4.jpg"/><img class="overlayImage2" src="characters/R/l2.png"/>';
				} else if (rGate == 5) {
					image.innerHTML = '<img src="R/s5.jpg"/><img class="overlayImage2" src="characters/R/e2.png"/>';
				} else if (rGate == 8) {
					image.innerHTML = '<img src="R/s8.jpg"/><img class="overlayImage2" src="characters/R/i4.png"/>';
				} else if (rGate == 11) {
					image.innerHTML = '<img src="R/s11.jpg"/><img class="overlayImage2" src="characters/R/e3.png"/>';
				} else if (rGate == 12) {
					image.innerHTML = '<img src="R/s12.jpg"/><img class="overlayImage2" src="characters/R/e4.png"/>';
				} else if (rGate == 13) {
					image.innerHTML = '<img src="R/s13.jpg"/><img class="overlayImage2" src="characters/R/i7.png"/>';
				} else if (rGate == 14) {
					image.innerHTML = '<img src="R/s14.jpg"/><img class="overlayImage2" src="characters/R/w4.png"/>';
				} else if (rGate == 15) {
					image.innerHTML = '<img src="R/s15.jpg"/><img class="overlayImage2" src="characters/R/i5.png"/>';
				} else if (rGate == 16) {
					image.innerHTML = '<img src="R/s16.jpg"/><img class="overlayImage2" src="characters/R/i6.png"/>';
				} else if (rGate == 22) {
					image.innerHTML = '<img src="R/n6.jpg"/><img class="overlayImage2" src="characters/R/d1.png"/>';
				} else if (rGate == 28) {
					image.innerHTML = '<img src="R/n12.jpg"/><img class="overlayImage2" src="characters/R/d3.png"/>';
				} else if (rGate == 29) {
					image.innerHTML = '<img src="R/n13.jpg"/><img class="overlayImage2" src="characters/R/d4.png"/>';
				} else if (rGate == 35) {
					image.innerHTML = '<img src="R/p6.jpg"/><img class="overlayImage2" src="characters/R/w3.png"/>';
				} else if (rGate == 38) {
					image.innerHTML = '<img src="R/p9.jpg"/><img class="overlayImage2" src="characters/R/f5.png"/>';
				} else if (rGate == 39) {
					image.innerHTML = '<img src="R/p10.jpg"/><img class="overlayImage2" src="characters/R/w2.png"/>';
				} else if (rGate == 40) {
					image.innerHTML = '<img src="R/x1.jpg"/><img class="overlayImage2" src="characters/R/f1.png"/>';
				} else if (rGate == 45) {
					image.innerHTML = '<img src="R/x6.jpg"/><img class="overlayImage2" src="characters/R/e6.png"/>';
				} else if (rGate == 46) {
					image.innerHTML = '<img src="R/x7.jpg"/><img class="overlayImage2" src="characters/R/i2.png"/>';
				} else if (rGate == 50) {
					image.innerHTML = '<img src="R/x11.jpg"/><img class="overlayImage2" src="characters/R/l4.png"/>';
				} else if (rGate == 51) {
					image.innerHTML = '<img src="R/w1.jpg"/><img class="overlayImage2" src="characters/R/f7.png"/>';
				} else if (rGate == 55) {
					image.innerHTML = '<img src="R/w5.jpg"/><img class="overlayImage2" src="characters/R/w5.png"/>';
				} else if (rGate == 56) {
					image.innerHTML = '<img src="R/w6.jpg"/><img class="overlayImage2" src="characters/R/e1.png"/>';
				} else if (rGate == 58) {
					image.innerHTML = '<img src="R/w8.jpg"/><img class="overlayImage2" src="characters/R/e8.png"/>';
				} else if (rGate == 59) {
					image.innerHTML = '<img src="R/w9.jpg"/><img class="overlayImage2" src="characters/R/f3.png"/>';
				} else if (rGate == 60) {
					image.innerHTML = '<img src="R/w10.jpg"/><img class="overlayImage2" src="characters/R/i3.png"/>';
				} else if (rGate == 64) {
					image.innerHTML = '<img src="R/w14.jpg"/><img class="overlayImage2" src="characters/R/l3.png"/>';
				} else if (rGate == 65) {
					image.innerHTML = '<img src="R/w15.jpg"/><img class="overlayImage2" src="characters/R/d2.png"/>';
				} else if (rGate == 70) {
					image.innerHTML = '<img src="R/g3.jpg"/><img class="overlayImage2" src="characters/R/e7.png"/>';
				} else if (rGate == 71) {
					image.innerHTML = '<img src="R/g4.jpg"/><img class="overlayImage2" src="characters/R/f6.png"/>';
				} else if (rGate == 72) {
					image.innerHTML = '<img src="R/g5.jpg"/><img class="overlayImage2" src="characters/R/f8.png"/>';
				} else if (rGate == 73) {
					image.innerHTML = '<img src="R/g6.jpg"/><img class="overlayImage2" src="characters/R/w1.png"/>';
				} else if (rGate == 76) {
					image.innerHTML = '<img src="R/g9.jpg"/><img class="overlayImage2" src="characters/R/f4.png"/>';
				} else if (rGate == 82) {
					image.innerHTML = '<img src="R/k4.jpg"/><img class="overlayImage2" src="characters/R/f2.png"/>';
				} else if (rGate == 86) {
					image.innerHTML = '<img src="R/k8.jpg"/><img class="overlayImage2" src="characters/R/i1.png"/>';
				} else if (rGate == 88) {
					image.innerHTML = '<img src="R/k10.jpg"/><img class="overlayImage2" src="characters/R/e5.png"/>';
				} else if (rGate == 91) {
					image.innerHTML = '<img src="R/k13.jpg"/><img class="overlayImage2" src="characters/R/l1.png"/>';
				}
					
			} 
			
			
			//Generate SR Cards
			else if (rareGate >=82 && rareGate <=97){
				var srGate = Math.floor((Math.random() * 95) + 1);
				var image = document.getElementById('item1');
				if (srGate <= 12) {
					var dNum = srGate;
					image.innerHTML = '<img src="SR/s' + dNum + '.jpg"/>';
				} else if (srGate >= 13 && srGate <= 20) {
					var dNum = srGate - 12;
					image.innerHTML = '<img src="SR/n' + dNum + '.jpg"/>';
				} else if (srGate >= 21 && srGate <= 28) {
					var dNum = srGate - 20;
					image.innerHTML = '<img src="SR/p' + dNum + '.jpg"/>';
				} else if (srGate >= 29 && srGate <= 32) {
					var dNum = srGate - 28;
					image.innerHTML = '<img src="SR/x' + dNum + '.jpg"/>';
				} else if (srGate >= 33 && srGate <= 42) {
					var dNum = srGate - 32;
					image.innerHTML = '<img src="SR/w' + dNum + '.jpg"/>';
				} else if (srGate >= 43 && srGate <= 49) {
					var dNum = srGate - 42;
					image.innerHTML = '<img src="SR/g' + dNum + '.jpg"/>';
				} else if (srGate >= 50 && srGate <= 61) {
					var dNum = srGate - 49;
					image.innerHTML = '<img src="SR/k' + dNum + '.jpg"/>';
				} else if (srGate >= 62 && srGate <= 68) {
					var dNum = srGate - 61;
					image.innerHTML = '<img src="SR/b' + dNum + '.jpg"/>';
				} else if (srGate >= 69 && srGate <= 72) {
					var dNum = srGate - 68;
					image.innerHTML = '<img src="SR/i' + dNum + '.jpg"/>';
				} else if (srGate >= 73 && srGate <= 75) {
					var dNum = srGate - 72;
					image.innerHTML = '<img src="SR/a' + dNum + '.jpg"/>';
				} else if (srGate >= 76 && srGate <= 95) {
					var dNum = srGate - 75;
					image.innerHTML = '<img src="SR/m' + dNum + '.jpg"/>';
				}
				
				/* SR Charaters Release */
				
				if (srGate == 2) {
					image.innerHTML = '<img src="SR/s2.jpg"/><img class="overlayImage2" src="characters/SR/e2.png"/>';
				} else if (srGate == 3) {
					image.innerHTML = '<img src="SR/s3.jpg"/><img class="overlayImage2" src="characters/SR/f4.png"/>';
				} else if (srGate == 4) {
					image.innerHTML = '<img src="SR/s4.jpg"/><img class="overlayImage2" src="characters/SR/f6.png"/>';
				} else if (srGate == 6) {
					image.innerHTML = '<img src="SR/s6.jpg"/><img class="overlayImage2" src="characters/SR/w1.png"/>';
				} else if (srGate == 9) {
					image.innerHTML = '<img src="SR/s9.jpg"/><img class="overlayImage2" src="characters/SR/l6.png"/>';
				} else if (srGate == 10) {
					image.innerHTML = '<img src="SR/s10.jpg"/><img class="overlayImage2" src="characters/SR/i3.png"/>';
				} else if (srGate == 11) {
					image.innerHTML = '<img src="SR/s11.jpg"/><img class="overlayImage2" src="characters/SR/d3.png"/>';
				} else if (srGate == 12) {
					image.innerHTML = '<img src="SR/s12.jpg"/><img class="overlayImage2" src="characters/SR/d1.png"/>';
				} else if (srGate == 13) {
					image.innerHTML = '<img src="SR/n1.jpg"/><img class="overlayImage2" src="characters/SR/f3.png"/>';
				} else if (srGate == 17) {
					image.innerHTML = '<img src="SR/n5.jpg"/><img class="overlayImage2" src="characters/SR/e3.png"/>';
				} else if (srGate == 18) {
					image.innerHTML = '<img src="SR/n6.jpg"/><img class="overlayImage2" src="characters/SR/l4.png"/>';
				} else if (srGate == 20) {
					image.innerHTML = '<img src="SR/n8.jpg"/><img class="overlayImage2" src="characters/SR/d5.png"/>';
				} else if (srGate == 21) {
					image.innerHTML = '<img src="SR/p1.jpg"/><img class="overlayImage2" src="characters/SR/e4.png"/>';
				} else if (srGate == 23) {
					image.innerHTML = '<img src="SR/p3.jpg"/><img class="overlayImage2" src="characters/SR/w4.png"/>';
				} else if (srGate == 25) {
					image.innerHTML = '<img src="SR/p5.jpg"/><img class="overlayImage2" src="characters/SR/e5.png"/>';
				} else if (srGate == 32) {
					image.innerHTML = '<img src="SR/x4.jpg"/><img class="overlayImage2" src="characters/SR/d4.png"/>';
				} else if (srGate == 33) {
					image.innerHTML = '<img src="SR/w1.jpg"/><img class="overlayImage2" src="characters/SR/f8.png"/>';
				} else if (srGate == 34) {
					image.innerHTML = '<img src="SR/w2.jpg"/><img class="overlayImage2" src="characters/SR/l3.png"/>';
				} else if (srGate == 35) {
					image.innerHTML = '<img src="SR/w3.jpg"/><img class="overlayImage2" src="characters/SR/w3.png"/>';
				} else if (srGate == 38) {
					image.innerHTML = '<img src="SR/w6.jpg"/><img class="overlayImage2" src="characters/SR/e7.png"/>';
				} else if (srGate == 39) {
					image.innerHTML = '<img src="SR/w7.jpg"/><img class="overlayImage2" src="characters/SR/l5.png"/>';
				} else if (srGate == 40) {
					image.innerHTML = '<img src="SR/w8.jpg"/><img class="overlayImage2" src="characters/SR/l7.png"/>';
				} else if (srGate == 42) {
					image.innerHTML = '<img src="SR/w10.jpg"/><img class="overlayImage2" src="characters/SR/d2.png"/>';
				} else if (srGate == 44) {
					image.innerHTML = '<img src="SR/g2.jpg"/><img class="overlayImage2" src="characters/SR/f7.png"/>';
				} else if (srGate == 45) {
					image.innerHTML = '<img src="SR/g3.jpg"/><img class="overlayImage2" src="characters/SR/w5.png"/>';
				} else if (srGate == 50) {
					image.innerHTML = '<img src="SR/k1.jpg"/><img class="overlayImage2" src="characters/SR/f2.png"/>';
				} else if (srGate == 51) {
					image.innerHTML = '<img src="SR/k2.jpg"/><img class="overlayImage2" src="characters/SR/f5.png"/>';
				} else if (srGate == 52) {
					image.innerHTML = '<img src="SR/k3.jpg"/><img class="overlayImage2" src="characters/SR/f1.png"/>';
				} else if (srGate == 55) {
					image.innerHTML = '<img src="SR/k6.jpg"/><img class="overlayImage2" src="characters/SR/e1.png"/>';
				} else if (srGate == 56) {
					image.innerHTML = '<img src="SR/k7.jpg"/><img class="overlayImage2" src="characters/SR/e6.png"/>';
				} else if (srGate == 58) {
					image.innerHTML = '<img src="SR/k9.jpg"/><img class="overlayImage2" src="characters/SR/i2.png"/>';
				} else if (srGate == 59) {
					image.innerHTML = '<img src="SR/k10.jpg"/><img class="overlayImage2" src="characters/SR/i6.png"/>';
				} else if (srGate == 60) {
					image.innerHTML = '<img src="SR/k11.jpg"/><img class="overlayImage2" src="characters/SR/l1.png"/>';
				} else if (srGate == 61) {
					image.innerHTML = '<img src="SR/k12.jpg"/><img class="overlayImage2" src="characters/SR/l2.png"/>';
				} else if (srGate == 65) {
					image.innerHTML = '<img src="SR/b4.jpg"/><img class="overlayImage2" src="characters/SR/w6.png"/>';
				} else if (srGate == 67) {
					image.innerHTML = '<img src="SR/b6.jpg"/><img class="overlayImage2" src="characters/SR/i5.png"/>';
				} else if (srGate == 69) {
					image.innerHTML = '<img src="SR/i1.jpg"/><img class="overlayImage2" src="characters/SR/w2.png"/>';
				} else if (srGate == 72) {
					image.innerHTML = '<img src="SR/i3.jpg"/><img class="overlayImage2" src="characters/SR/i1.png"/>';
				} else if (srGate == 73) {
					image.innerHTML = '<img src="SR/i4.jpg"/><img class="overlayImage2" src="characters/SR/i4.png"/>';
				}
			
			
			} 
			
			
			//Generate SSR cards
			else {
				var ssrGate = Math.floor((Math.random() * 160) + 1);
				var image = document.getElementById('item1');
				if (ssrGate <= 24) {
					var dNum = ssrGate;
					image.innerHTML = '<img src="SSR/s' + dNum + '.jpg"/>';
				} else if (ssrGate >= 25 && ssrGate <= 36) {
					var dNum = ssrGate - 24;
					image.innerHTML = '<img src="SSR/n' + dNum + '.jpg"/>';
				} else if (ssrGate >= 37 && ssrGate <= 46) {
					var dNum = ssrGate - 36;
					image.innerHTML = '<img src="SSR/p' + dNum + '.jpg"/>';
				} else if (ssrGate >= 47 && ssrGate <= 58) {
					var dNum = ssrGate - 46;
					image.innerHTML = '<img src="SSR/x' + dNum + '.jpg"/>';
				} else if (ssrGate >= 59 && ssrGate <= 72) {
					var dNum = ssrGate - 58;
					image.innerHTML = '<img src="SSR/w' + dNum + '.jpg"/>';
				} else if (ssrGate >= 73 && ssrGate <= 80) {
					var dNum = ssrGate - 72;
					image.innerHTML = '<img src="SSR/g' + dNum + '.jpg"/>';
				} else if (ssrGate >= 81 && ssrGate <= 90) {
					var dNum = ssrGate - 80;
					image.innerHTML = '<img src="SSR/k' + dNum + '.jpg"/>';
				} else if (ssrGate >= 91 && ssrGate <= 100) {
					var dNum = ssrGate - 90;
					image.innerHTML = '<img src="SSR/b' + dNum + '.jpg"/>';
				}  else if (ssrGate >= 101 && ssrGate <= 106) {
					var dNum = ssrGate - 100;
					image.innerHTML = '<img src="SSR/i' + dNum + '.jpg"/>';
				}  else if (ssrGate >= 107 && ssrGate <= 114) {
					var dNum = ssrGate - 106;
					image.innerHTML = '<img src="SSR/a' + dNum + '.jpg"/>';
				}  else if (ssrGate >= 115 && ssrGate <= 160) {
					var dNum = ssrGate - 114;
					image.innerHTML = '<img src="SSR/m' + dNum + '.jpg"/>';
				} 
				
				/* SSR Charaters Release */
				if (ssrGate == 1 || ssrGate == 2) {
					image.innerHTML = '<img src="SSR/s1.jpg"/><img class="overlayImage2" src="characters/SSR/w1.png"/>';
				} else if (ssrGate == 3 || ssrGate == 4) {
					image.innerHTML = '<img src="SSR/s3.jpg"/><img class="overlayImage2" src="characters/SSR/f1.png"/>';
				} else if (ssrGate == 7 || ssrGate == 8) {
					image.innerHTML = '<img src="SSR/s7.jpg"/><img class="overlayImage2" src="characters/SSR/w5.png"/>';
				} else if (ssrGate == 9 || ssrGate == 10) {
					image.innerHTML = '<img src="SSR/s9.jpg"/><img class="overlayImage2" src="characters/SSR/e2.png"/>';
				} else if (ssrGate == 11 || ssrGate == 12) {
					image.innerHTML = '<img src="SSR/s11.jpg"/><img class="overlayImage2" src="characters/SSR/e1.png"/>';
				} else if (ssrGate == 15 || ssrGate == 16) {
					image.innerHTML = '<img src="SSR/s15.jpg"/><img class="overlayImage2" src="characters/SSR/l4.png"/>';
				} else if (ssrGate == 17 || ssrGate == 18) {
					image.innerHTML = '<img src="SSR/s17.jpg"/><img class="overlayImage2" src="characters/SSR/l1.png"/>';
				} else if (ssrGate == 19 || ssrGate == 20) {
					image.innerHTML = '<img src="SSR/s19.jpg"/><img class="overlayImage2" src="characters/SSR/l6.png"/>';
				} else if (ssrGate == 21 || ssrGate == 22) {
					image.innerHTML = '<img src="SSR/s21.jpg"/><img class="overlayImage2" src="characters/SSR/d4.png"/>';
				} else if (ssrGate == 23 || ssrGate == 24) {
					image.innerHTML = '<img src="SSR/s21.jpg"/><img class="overlayImage2" src="characters/SSR/d2.png"/>';
				} else if (ssrGate == 25 || ssrGate == 26) {
					image.innerHTML = '<img src="SSR/n1.jpg"/><img class="overlayImage2" src="characters/SSR/w2.png"/>';
				} else if (ssrGate == 29 || ssrGate == 30) {
					image.innerHTML = '<img src="SSR/n5.jpg"/><img class="overlayImage2" src="characters/SSR/i4.png"/>';
				} else if (ssrGate == 31 || ssrGate == 32) {
					image.innerHTML = '<img src="SSR/n7.jpg"/><img class="overlayImage2" src="characters/SSR/f6.png"/>';
				} else if (ssrGate == 33 || ssrGate == 34) {
					image.innerHTML = '<img src="SSR/n9.jpg"/><img class="overlayImage2" src="characters/SSR/d6.png"/>';
				} else if (ssrGate == 37 || ssrGate == 38) {
					image.innerHTML = '<img src="SSR/p1.jpg"/><img class="overlayImage2" src="characters/SSR/i1.png"/>';
				} else if (ssrGate == 39 || ssrGate == 40) {
					image.innerHTML = '<img src="SSR/p3.jpg"/><img class="overlayImage2" src="characters/SSR/f3.png"/>';
				} else if (ssrGate == 41 || ssrGate == 42) {
					image.innerHTML = '<img src="SSR/p5.jpg"/><img class="overlayImage2" src="characters/SSR/e6.png"/>';
				} else if (ssrGate == 43 || ssrGate == 44) {
					image.innerHTML = '<img src="SSR/p7.jpg"/><img class="overlayImage2" src="characters/SSR/i6.png"/>';
				} else if (ssrGate == 47 || ssrGate == 48) {
					image.innerHTML = '<img src="SSR/x1.jpg"/><img class="overlayImage2" src="characters/SSR/f5.png"/>';
				} else if (ssrGate == 53 || ssrGate == 54) {
					image.innerHTML = '<img src="SSR/x7.jpg"/><img class="overlayImage2" src="characters/SSR/i2.png"/>';
				} else if (ssrGate == 55 || ssrGate == 56) {
					image.innerHTML = '<img src="SSR/x9.jpg"/><img class="overlayImage2" src="characters/SSR/d1.png"/>';
				} else if (ssrGate == 57 || ssrGate == 58) {
					image.innerHTML = '<img src="SSR/x11.jpg"/><img class="overlayImage2" src="characters/SSR/e5.png"/>';
				} else if (ssrGate == 59 || ssrGate == 60) {
					image.innerHTML = '<img src="SSR/w1.jpg"/><img class="overlayImage2" src="characters/SSR/f2.png"/>';
				} else if (ssrGate == 61 || ssrGate == 62) {
					image.innerHTML = '<img src="SSR/w3.jpg"/><img class="overlayImage2" src="characters/SSR/w3.png"/>';
				} else if (ssrGate == 63 || ssrGate == 64) {
					image.innerHTML = '<img src="SSR/w5.jpg"/><img class="overlayImage2" src="characters/SSR/e3.png"/>';
				} else if (ssrGate == 65 || ssrGate == 66) {
					image.innerHTML = '<img src="SSR/w7.jpg"/><img class="overlayImage2" src="characters/SSR/l2.png"/>';
				} else if (ssrGate == 69 || ssrGate == 70) {
					image.innerHTML = '<img src="SSR/w11.jpg"/><img class="overlayImage2" src="characters/SSR/l5.png"/>';
				} else if (ssrGate == 71 || ssrGate == 72) {
					image.innerHTML = '<img src="SSR/w13.jpg"/><img class="overlayImage2" src="characters/SSR/d3.png"/>';
				} else if (ssrGate == 75 || ssrGate == 76) {
					image.innerHTML = '<img src="SSR/g3.jpg"/><img class="overlayImage2" src="characters/SSR/w4.png"/>';
				} else if (ssrGate == 79 || ssrGate == 80) {
					image.innerHTML = '<img src="SSR/g7.jpg"/><img class="overlayImage2" src="characters/SSR/i3.png"/>';
				} else if (ssrGate == 83 || ssrGate == 84) {
					image.innerHTML = '<img src="SSR/k3.jpg"/><img class="overlayImage2" src="characters/SSR/f7.png"/>';
				} else if (ssrGate == 85 || ssrGate == 86) {
					image.innerHTML = '<img src="SSR/k5.jpg"/><img class="overlayImage2" src="characters/SSR/w6.png"/>';
				} else if (ssrGate == 89 || ssrGate == 90) {
					image.innerHTML = '<img src="SSR/k9.jpg"/><img class="overlayImage2" src="characters/SSR/d5.png"/>';
				} else if (ssrGate == 99 || ssrGate == 100) {
					image.innerHTML = '<img src="SSR/b9.jpg"/><img class="overlayImage2" src="characters/SSR/i5.png"/>';
				} else if (ssrGate == 101 || ssrGate == 102) {
					image.innerHTML = '<img src="SSR/i1.jpg"/><img class="overlayImage2" src="characters/SSR/f4.png"/>';
				} else if (ssrGate == 103 || ssrGate == 104) {
					image.innerHTML = '<img src="SSR/i3.jpg"/><img class="overlayImage2" src="characters/SSR/l3.png"/>';
				} else if (ssrGate == 105 || ssrGate == 106) {
					image.innerHTML = '<img src="SSR/i5.jpg"/><img class="overlayImage2" src="characters/SSR/e4.png"/>';
				} else if (ssrGate == 114 || ssrGate == 115) {
					image.innerHTML = '<img src="SSR/a8.jpg"/><img class="overlayImage2" src="characters/SSR/l7.png"/>';
				}
				
			}
			
		}
		
		//Draw DL
		else {
			var rareGate = Math.floor((Math.random() * 100) + 1);
			// Generate DL R cards
			if (rareGate <= 82) {
				var rGate = Math.floor((Math.random() * 21) + 1);
				var image = document.getElementById('item1');
				image.innerHTML = '<img src="R/DL/' + rGate + '.jpg"/>';
				
				/* DL R Charaters Release */
				
				if (rGate == 2) {
					image.innerHTML = '<img src="R/DL/2.jpg"/><img class="overlayImage2" src="characters/R/l1.png"/>';
				} else if (rGate == 13) {
					image.innerHTML = '<img src="R/DL/13.jpg"/><img class="overlayImage2" src="characters/R/l2.png"/>';
				} else if (rGate == 15) {
					image.innerHTML = '<img src="R/DL/15.jpg"/><img class="overlayImage2" src="characters/R/l3.png"/>';
				} else if (rGate == 20) {
					image.innerHTML = '<img src="R/DL/20.jpg"/><img class="overlayImage2" src="characters/R/l4.png"/>';
				} else if (rGate == 7) {
					image.innerHTML = '<img src="R/DL/7.jpg"/><img class="overlayImage2" src="characters/R/d1.png"/>';
				} else if (rGate == 16) {
					image.innerHTML = '<img src="R/DL/16.jpg"/><img class="overlayImage2" src="characters/R/d2.png"/>';
				} else if (rGate == 11) {
					image.innerHTML = '<img src="R/DL/11.jpg"/><img class="overlayImage2" src="characters/R/d3.png"/>';
				} else if (rGate == 12) {
					image.innerHTML = '<img src="R/DL/12.jpg"/><img class="overlayImage2" src="characters/R/d4.png"/>';
				}
					
			} 
			
			
			//Generate DL SR Cards
			else if (rareGate >=83 && rareGate <=97){
				var srGate = Math.floor((Math.random() * 23) + 1);
				var image = document.getElementById('item1');
				image.innerHTML = '<img src="SR/DL/' + srGate + '.jpg"/>';
				
				/* DL SR Charaters Release */
				
				if (srGate == 4) {
					image.innerHTML = '<img src="SR/DL/4.jpg"/><img class="overlayImage2" src="characters/SR/l1.png"/>';
				} else if (srGate == 5) {
					image.innerHTML = '<img src="SR/DL/5.jpg"/><img class="overlayImage2" src="characters/SR/l2.png"/>';
				} else if (srGate == 17) {
					image.innerHTML = '<img src="SR/DL/17.jpg"/><img class="overlayImage2" src="characters/SR/l3.png"/>';
				} else if (srGate == 9) {
					image.innerHTML = '<img src="SR/DL/9.jpg"/><img class="overlayImage2" src="characters/SR/l4.png"/>';
				} else if (srGate == 18) {
					image.innerHTML = '<img src="SR/DL/18.jpg"/><img class="overlayImage2" src="characters/SR/l5.png"/>';
				} else if (srGate == 14) {
					image.innerHTML = '<img src="SR/DL/14.jpg"/><img class="overlayImage2" src="characters/SR/l6.png"/>';
				} else if (srGate == 19) {
					image.innerHTML = '<img src="SR/DL/19.jpg"/><img class="overlayImage2" src="characters/SR/l7.png"/>';
				} else if (srGate == 1) {
					image.innerHTML = '<img src="SR/DL/1.jpg"/><img class="overlayImage2" src="characters/SR/d1.png"/>';
				} else if (srGate == 21) {
					image.innerHTML = '<img src="SR/DL/21.jpg"/><img class="overlayImage2" src="characters/SR/d2.png"/>';
				} else if (srGate == 15) {
					image.innerHTML = '<img src="SR/DL/15.jpg"/><img class="overlayImage2" src="characters/SR/d3.png"/>';
				} else if (srGate == 23) {
					image.innerHTML = '<img src="SR/DL/23.jpg"/><img class="overlayImage2" src="characters/SR/d4.png"/>';
				} else if (srGate == 11) {
					image.innerHTML = '<img src="SR/DL/11.jpg"/><img class="overlayImage2" src="characters/SR/d5.png"/>';
				}
			
			} 
			
			
			//Generate DL SSR cards
			else {
				var ssrGate = Math.floor((Math.random() * 50) + 1);
				var image = document.getElementById('item1');
				image.innerHTML = '<img src="SSR/DL/' + ssrGate + '.jpg"/>';
				
				
				/* DL SSR Charaters Release */
				if (ssrGate == 33 || ssrGate == 34) {
					image.innerHTML = '<img src="SSR/DL/33.jpg"/><img class="overlayImage2" src="characters/SSR/l1.png"/>';
				} else if (ssrGate == 41 || ssrGate == 42) {
					image.innerHTML = '<img src="SSR/DL/41.jpg"/><img class="overlayImage2" src="characters/SSR/l2.png"/>';
				} else if (ssrGate == 3 || ssrGate == 4) {
					image.innerHTML = '<img src="SSR/DL/3.jpg"/><img class="overlayImage2" src="characters/SSR/l3.png"/>';
				} else if (ssrGate == 31 || ssrGate == 32) {
					image.innerHTML = '<img src="SSR/DL/31.jpg"/><img class="overlayImage2" src="characters/SSR/l4.png"/>';
				} else if (ssrGate == 45 || ssrGate == 46) {
					image.innerHTML = '<img src="SSR/DL/45.jpg"/><img class="overlayImage2" src="characters/SSR/l5.png"/>';
				} else if (ssrGate == 35 || ssrGate == 36) {
					image.innerHTML = '<img src="SSR/DL/35.jpg"/><img class="overlayImage2" src="characters/SSR/l6.png"/>';
				} else if (ssrGate == 1 || ssrGate == 2) {
					image.innerHTML = '<img src="SSR/DL/1.jpg"/><img class="overlayImage2" src="characters/SSR/l7.png"/>';
				} else if (ssrGate == 49 || ssrGate == 50) {
					image.innerHTML = '<img src="SSR/DL/49.jpg"/><img class="overlayImage2" src="characters/SSR/d1.png"/>';
				} else if (ssrGate == 39 || ssrGate == 40) {
					image.innerHTML = '<img src="SSR/DL/39.jpg"/><img class="overlayImage2" src="characters/SSR/d2.png"/>';
				} else if (ssrGate == 47 || ssrGate == 48) {
					image.innerHTML = '<img src="SSR/DL/47.jpg"/><img class="overlayImage2" src="characters/SSR/d3.png"/>';
				} else if (ssrGate == 37 || ssrGate == 38) {
					image.innerHTML = '<img src="SSR/DL/37.jpg"/><img class="overlayImage2" src="characters/SSR/d4.png"/>';
				} else if (ssrGate == 7 || ssrGate == 8) {
					image.innerHTML = '<img src="SSR/DL/7.jpg"/><img class="overlayImage2" src="characters/SSR/d5.png"/>';
				} else if (ssrGate == 25 || ssrGate == 26) {
					image.innerHTML = '<img src="SSR/DL/25.jpg"/><img class="overlayImage2" src="characters/SSR/d6.png"/>';
				}
				
			}
			
			
		}
		
	}
	
	//Summon Up
	else if (elementUp == 7) {
		var upValue = Math.floor ((Math.random() * 100) + 1);
		//Draw others
		if (upValue <= 60) {
			var rareGate = Math.floor((Math.random() * 100) + 1);
			// Generate R cards
			if (rareGate <= 82) {
				var rGate = Math.floor((Math.random() * 125) + 1);
				var image = document.getElementById('item1');
				if (rGate <= 16) {
					var dNum = rGate;
					image.innerHTML = '<img src="R/s' + dNum + '.jpg"/>';
				} else if (rGate >= 17 && rGate <= 29) {
					var dNum = rGate - 16;
					image.innerHTML = '<img src="R/n' + dNum + '.jpg"/>';
				} else if (rGate >= 30 && rGate <= 39) {
					var dNum = rGate - 29;
					image.innerHTML = '<img src="R/p' + dNum + '.jpg"/>';
				} else if (rGate >= 40 && rGate <= 51) {
					var dNum = rGate - 39;
					image.innerHTML = '<img src="R/x' + dNum + '.jpg"/>';
				} else if (rGate >= 52 && rGate <= 67) {
					var dNum = rGate - 51;
					image.innerHTML = '<img src="R/w' + dNum + '.jpg"/>';
				} else if (rGate >= 68 && rGate <= 78) {
					var dNum = rGate - 67;
					image.innerHTML = '<img src="R/g' + dNum + '.jpg"/>';
				} else if (rGate >= 79 && rGate <= 91) {
					var dNum = rGate - 78;
					image.innerHTML = '<img src="R/k' + dNum + '.jpg"/>';
				} else if (rGate >= 92 && rGate <= 98) {
					var dNum = rGate - 91;
					image.innerHTML = '<img src="R/b' + dNum + '.jpg"/>';
				} else if (rGate >= 99 && rGate <= 99) {
					var dNum = rGate - 98;
					image.innerHTML = '<img src="R/i' + dNum + '.jpg"/>';
				} else if (rGate >= 100 && rGate <= 101) {
					var dNum = rGate - 99;
					image.innerHTML = '<img src="R/a' + dNum + '.jpg"/>';
				} else if (rGate >= 102 && rGate <= 125) {
					var dNum = rGate - 101;
					image.innerHTML = '<img src="R/m' + dNum + '.jpg"/>';
				}
				
				/* R Charaters Release */
				
				if (rGate == 4) {
					image.innerHTML = '<img src="R/s4.jpg"/><img class="overlayImage2" src="characters/R/l2.png"/>';
				} else if (rGate == 5) {
					image.innerHTML = '<img src="R/s5.jpg"/><img class="overlayImage2" src="characters/R/e2.png"/>';
				} else if (rGate == 8) {
					image.innerHTML = '<img src="R/s8.jpg"/><img class="overlayImage2" src="characters/R/i4.png"/>';
				} else if (rGate == 11) {
					image.innerHTML = '<img src="R/s11.jpg"/><img class="overlayImage2" src="characters/R/e3.png"/>';
				} else if (rGate == 12) {
					image.innerHTML = '<img src="R/s12.jpg"/><img class="overlayImage2" src="characters/R/e4.png"/>';
				} else if (rGate == 13) {
					image.innerHTML = '<img src="R/s13.jpg"/><img class="overlayImage2" src="characters/R/i7.png"/>';
				} else if (rGate == 14) {
					image.innerHTML = '<img src="R/s14.jpg"/><img class="overlayImage2" src="characters/R/w4.png"/>';
				} else if (rGate == 15) {
					image.innerHTML = '<img src="R/s15.jpg"/><img class="overlayImage2" src="characters/R/i5.png"/>';
				} else if (rGate == 16) {
					image.innerHTML = '<img src="R/s16.jpg"/><img class="overlayImage2" src="characters/R/i6.png"/>';
				} else if (rGate == 22) {
					image.innerHTML = '<img src="R/n6.jpg"/><img class="overlayImage2" src="characters/R/d1.png"/>';
				} else if (rGate == 28) {
					image.innerHTML = '<img src="R/n12.jpg"/><img class="overlayImage2" src="characters/R/d3.png"/>';
				} else if (rGate == 29) {
					image.innerHTML = '<img src="R/n13.jpg"/><img class="overlayImage2" src="characters/R/d4.png"/>';
				} else if (rGate == 35) {
					image.innerHTML = '<img src="R/p6.jpg"/><img class="overlayImage2" src="characters/R/w3.png"/>';
				} else if (rGate == 38) {
					image.innerHTML = '<img src="R/p9.jpg"/><img class="overlayImage2" src="characters/R/f5.png"/>';
				} else if (rGate == 39) {
					image.innerHTML = '<img src="R/p10.jpg"/><img class="overlayImage2" src="characters/R/w2.png"/>';
				} else if (rGate == 40) {
					image.innerHTML = '<img src="R/x1.jpg"/><img class="overlayImage2" src="characters/R/f1.png"/>';
				} else if (rGate == 45) {
					image.innerHTML = '<img src="R/x6.jpg"/><img class="overlayImage2" src="characters/R/e6.png"/>';
				} else if (rGate == 46) {
					image.innerHTML = '<img src="R/x7.jpg"/><img class="overlayImage2" src="characters/R/i2.png"/>';
				} else if (rGate == 50) {
					image.innerHTML = '<img src="R/x11.jpg"/><img class="overlayImage2" src="characters/R/l4.png"/>';
				} else if (rGate == 51) {
					image.innerHTML = '<img src="R/w1.jpg"/><img class="overlayImage2" src="characters/R/f7.png"/>';
				} else if (rGate == 55) {
					image.innerHTML = '<img src="R/w5.jpg"/><img class="overlayImage2" src="characters/R/w5.png"/>';
				} else if (rGate == 56) {
					image.innerHTML = '<img src="R/w6.jpg"/><img class="overlayImage2" src="characters/R/e1.png"/>';
				} else if (rGate == 58) {
					image.innerHTML = '<img src="R/w8.jpg"/><img class="overlayImage2" src="characters/R/e8.png"/>';
				} else if (rGate == 59) {
					image.innerHTML = '<img src="R/w9.jpg"/><img class="overlayImage2" src="characters/R/f3.png"/>';
				} else if (rGate == 60) {
					image.innerHTML = '<img src="R/w10.jpg"/><img class="overlayImage2" src="characters/R/i3.png"/>';
				} else if (rGate == 64) {
					image.innerHTML = '<img src="R/w14.jpg"/><img class="overlayImage2" src="characters/R/l3.png"/>';
				} else if (rGate == 65) {
					image.innerHTML = '<img src="R/w15.jpg"/><img class="overlayImage2" src="characters/R/d2.png"/>';
				} else if (rGate == 70) {
					image.innerHTML = '<img src="R/g3.jpg"/><img class="overlayImage2" src="characters/R/e7.png"/>';
				} else if (rGate == 71) {
					image.innerHTML = '<img src="R/g4.jpg"/><img class="overlayImage2" src="characters/R/f6.png"/>';
				} else if (rGate == 72) {
					image.innerHTML = '<img src="R/g5.jpg"/><img class="overlayImage2" src="characters/R/f8.png"/>';
				} else if (rGate == 73) {
					image.innerHTML = '<img src="R/g6.jpg"/><img class="overlayImage2" src="characters/R/w1.png"/>';
				} else if (rGate == 76) {
					image.innerHTML = '<img src="R/g9.jpg"/><img class="overlayImage2" src="characters/R/f4.png"/>';
				} else if (rGate == 82) {
					image.innerHTML = '<img src="R/k4.jpg"/><img class="overlayImage2" src="characters/R/f2.png"/>';
				} else if (rGate == 86) {
					image.innerHTML = '<img src="R/k8.jpg"/><img class="overlayImage2" src="characters/R/i1.png"/>';
				} else if (rGate == 88) {
					image.innerHTML = '<img src="R/k10.jpg"/><img class="overlayImage2" src="characters/R/e5.png"/>';
				} else if (rGate == 91) {
					image.innerHTML = '<img src="R/k13.jpg"/><img class="overlayImage2" src="characters/R/l1.png"/>';
				}
					
			} 
			
			
			//Generate SR Cards
			else if (rareGate >=82 && rareGate <=97){
				var srGate = Math.floor((Math.random() * 95) + 1);
				var image = document.getElementById('item1');
				if (srGate <= 12) {
					var dNum = srGate;
					image.innerHTML = '<img src="SR/s' + dNum + '.jpg"/>';
				} else if (srGate >= 13 && srGate <= 20) {
					var dNum = srGate - 12;
					image.innerHTML = '<img src="SR/n' + dNum + '.jpg"/>';
				} else if (srGate >= 21 && srGate <= 28) {
					var dNum = srGate - 20;
					image.innerHTML = '<img src="SR/p' + dNum + '.jpg"/>';
				} else if (srGate >= 29 && srGate <= 32) {
					var dNum = srGate - 28;
					image.innerHTML = '<img src="SR/x' + dNum + '.jpg"/>';
				} else if (srGate >= 33 && srGate <= 42) {
					var dNum = srGate - 32;
					image.innerHTML = '<img src="SR/w' + dNum + '.jpg"/>';
				} else if (srGate >= 43 && srGate <= 49) {
					var dNum = srGate - 42;
					image.innerHTML = '<img src="SR/g' + dNum + '.jpg"/>';
				} else if (srGate >= 50 && srGate <= 61) {
					var dNum = srGate - 49;
					image.innerHTML = '<img src="SR/k' + dNum + '.jpg"/>';
				} else if (srGate >= 62 && srGate <= 68) {
					var dNum = srGate - 61;
					image.innerHTML = '<img src="SR/b' + dNum + '.jpg"/>';
				} else if (srGate >= 69 && srGate <= 72) {
					var dNum = srGate - 68;
					image.innerHTML = '<img src="SR/i' + dNum + '.jpg"/>';
				} else if (srGate >= 73 && srGate <= 75) {
					var dNum = srGate - 72;
					image.innerHTML = '<img src="SR/a' + dNum + '.jpg"/>';
				} else if (srGate >= 76 && srGate <= 95) {
					var dNum = srGate - 75;
					image.innerHTML = '<img src="SR/m' + dNum + '.jpg"/>';
				}
				
				/* SR Charaters Release */
				
				if (srGate == 2) {
					image.innerHTML = '<img src="SR/s2.jpg"/><img class="overlayImage2" src="characters/SR/e2.png"/>';
				} else if (srGate == 3) {
					image.innerHTML = '<img src="SR/s3.jpg"/><img class="overlayImage2" src="characters/SR/f4.png"/>';
				} else if (srGate == 4) {
					image.innerHTML = '<img src="SR/s4.jpg"/><img class="overlayImage2" src="characters/SR/f6.png"/>';
				} else if (srGate == 6) {
					image.innerHTML = '<img src="SR/s6.jpg"/><img class="overlayImage2" src="characters/SR/w1.png"/>';
				} else if (srGate == 9) {
					image.innerHTML = '<img src="SR/s9.jpg"/><img class="overlayImage2" src="characters/SR/l6.png"/>';
				} else if (srGate == 10) {
					image.innerHTML = '<img src="SR/s10.jpg"/><img class="overlayImage2" src="characters/SR/i3.png"/>';
				} else if (srGate == 11) {
					image.innerHTML = '<img src="SR/s11.jpg"/><img class="overlayImage2" src="characters/SR/d3.png"/>';
				} else if (srGate == 12) {
					image.innerHTML = '<img src="SR/s12.jpg"/><img class="overlayImage2" src="characters/SR/d1.png"/>';
				} else if (srGate == 13) {
					image.innerHTML = '<img src="SR/n1.jpg"/><img class="overlayImage2" src="characters/SR/f3.png"/>';
				} else if (srGate == 17) {
					image.innerHTML = '<img src="SR/n5.jpg"/><img class="overlayImage2" src="characters/SR/e3.png"/>';
				} else if (srGate == 18) {
					image.innerHTML = '<img src="SR/n6.jpg"/><img class="overlayImage2" src="characters/SR/l4.png"/>';
				} else if (srGate == 20) {
					image.innerHTML = '<img src="SR/n8.jpg"/><img class="overlayImage2" src="characters/SR/d5.png"/>';
				} else if (srGate == 21) {
					image.innerHTML = '<img src="SR/p1.jpg"/><img class="overlayImage2" src="characters/SR/e4.png"/>';
				} else if (srGate == 23) {
					image.innerHTML = '<img src="SR/p3.jpg"/><img class="overlayImage2" src="characters/SR/w4.png"/>';
				} else if (srGate == 25) {
					image.innerHTML = '<img src="SR/p5.jpg"/><img class="overlayImage2" src="characters/SR/e5.png"/>';
				} else if (srGate == 32) {
					image.innerHTML = '<img src="SR/x4.jpg"/><img class="overlayImage2" src="characters/SR/d4.png"/>';
				} else if (srGate == 33) {
					image.innerHTML = '<img src="SR/w1.jpg"/><img class="overlayImage2" src="characters/SR/f8.png"/>';
				} else if (srGate == 34) {
					image.innerHTML = '<img src="SR/w2.jpg"/><img class="overlayImage2" src="characters/SR/l3.png"/>';
				} else if (srGate == 35) {
					image.innerHTML = '<img src="SR/w3.jpg"/><img class="overlayImage2" src="characters/SR/w3.png"/>';
				} else if (srGate == 38) {
					image.innerHTML = '<img src="SR/w6.jpg"/><img class="overlayImage2" src="characters/SR/e7.png"/>';
				} else if (srGate == 39) {
					image.innerHTML = '<img src="SR/w7.jpg"/><img class="overlayImage2" src="characters/SR/l5.png"/>';
				} else if (srGate == 40) {
					image.innerHTML = '<img src="SR/w8.jpg"/><img class="overlayImage2" src="characters/SR/l7.png"/>';
				} else if (srGate == 42) {
					image.innerHTML = '<img src="SR/w10.jpg"/><img class="overlayImage2" src="characters/SR/d2.png"/>';
				} else if (srGate == 44) {
					image.innerHTML = '<img src="SR/g2.jpg"/><img class="overlayImage2" src="characters/SR/f7.png"/>';
				} else if (srGate == 45) {
					image.innerHTML = '<img src="SR/g3.jpg"/><img class="overlayImage2" src="characters/SR/w5.png"/>';
				} else if (srGate == 50) {
					image.innerHTML = '<img src="SR/k1.jpg"/><img class="overlayImage2" src="characters/SR/f2.png"/>';
				} else if (srGate == 51) {
					image.innerHTML = '<img src="SR/k2.jpg"/><img class="overlayImage2" src="characters/SR/f5.png"/>';
				} else if (srGate == 52) {
					image.innerHTML = '<img src="SR/k3.jpg"/><img class="overlayImage2" src="characters/SR/f1.png"/>';
				} else if (srGate == 55) {
					image.innerHTML = '<img src="SR/k6.jpg"/><img class="overlayImage2" src="characters/SR/e1.png"/>';
				} else if (srGate == 56) {
					image.innerHTML = '<img src="SR/k7.jpg"/><img class="overlayImage2" src="characters/SR/e6.png"/>';
				} else if (srGate == 58) {
					image.innerHTML = '<img src="SR/k9.jpg"/><img class="overlayImage2" src="characters/SR/i2.png"/>';
				} else if (srGate == 59) {
					image.innerHTML = '<img src="SR/k10.jpg"/><img class="overlayImage2" src="characters/SR/i6.png"/>';
				} else if (srGate == 60) {
					image.innerHTML = '<img src="SR/k11.jpg"/><img class="overlayImage2" src="characters/SR/l1.png"/>';
				} else if (srGate == 61) {
					image.innerHTML = '<img src="SR/k12.jpg"/><img class="overlayImage2" src="characters/SR/l2.png"/>';
				} else if (srGate == 65) {
					image.innerHTML = '<img src="SR/b4.jpg"/><img class="overlayImage2" src="characters/SR/w6.png"/>';
				} else if (srGate == 67) {
					image.innerHTML = '<img src="SR/b6.jpg"/><img class="overlayImage2" src="characters/SR/i5.png"/>';
				} else if (srGate == 69) {
					image.innerHTML = '<img src="SR/i1.jpg"/><img class="overlayImage2" src="characters/SR/w2.png"/>';
				} else if (srGate == 72) {
					image.innerHTML = '<img src="SR/i3.jpg"/><img class="overlayImage2" src="characters/SR/i1.png"/>';
				} else if (srGate == 73) {
					image.innerHTML = '<img src="SR/i4.jpg"/><img class="overlayImage2" src="characters/SR/i4.png"/>';
				}
			
			
			} 
			
			
			//Generate SSR cards
			else {
				var ssrGate = Math.floor((Math.random() * 160) + 1);
				var image = document.getElementById('item1');
				if (ssrGate <= 24) {
					var dNum = ssrGate;
					image.innerHTML = '<img src="SSR/s' + dNum + '.jpg"/>';
				} else if (ssrGate >= 25 && ssrGate <= 36) {
					var dNum = ssrGate - 24;
					image.innerHTML = '<img src="SSR/n' + dNum + '.jpg"/>';
				} else if (ssrGate >= 37 && ssrGate <= 46) {
					var dNum = ssrGate - 36;
					image.innerHTML = '<img src="SSR/p' + dNum + '.jpg"/>';
				} else if (ssrGate >= 47 && ssrGate <= 58) {
					var dNum = ssrGate - 46;
					image.innerHTML = '<img src="SSR/x' + dNum + '.jpg"/>';
				} else if (ssrGate >= 59 && ssrGate <= 72) {
					var dNum = ssrGate - 58;
					image.innerHTML = '<img src="SSR/w' + dNum + '.jpg"/>';
				} else if (ssrGate >= 73 && ssrGate <= 80) {
					var dNum = ssrGate - 72;
					image.innerHTML = '<img src="SSR/g' + dNum + '.jpg"/>';
				} else if (ssrGate >= 81 && ssrGate <= 90) {
					var dNum = ssrGate - 80;
					image.innerHTML = '<img src="SSR/k' + dNum + '.jpg"/>';
				} else if (ssrGate >= 91 && ssrGate <= 100) {
					var dNum = ssrGate - 90;
					image.innerHTML = '<img src="SSR/b' + dNum + '.jpg"/>';
				}  else if (ssrGate >= 101 && ssrGate <= 106) {
					var dNum = ssrGate - 100;
					image.innerHTML = '<img src="SSR/i' + dNum + '.jpg"/>';
				}  else if (ssrGate >= 107 && ssrGate <= 114) {
					var dNum = ssrGate - 106;
					image.innerHTML = '<img src="SSR/a' + dNum + '.jpg"/>';
				}  else if (ssrGate >= 115 && ssrGate <= 160) {
					var dNum = ssrGate - 114;
					image.innerHTML = '<img src="SSR/m' + dNum + '.jpg"/>';
				} 
				
				/* SSR Charaters Release */
				if (ssrGate == 1 || ssrGate == 2) {
					image.innerHTML = '<img src="SSR/s1.jpg"/><img class="overlayImage2" src="characters/SSR/w1.png"/>';
				} else if (ssrGate == 3 || ssrGate == 4) {
					image.innerHTML = '<img src="SSR/s3.jpg"/><img class="overlayImage2" src="characters/SSR/f1.png"/>';
				} else if (ssrGate == 7 || ssrGate == 8) {
					image.innerHTML = '<img src="SSR/s7.jpg"/><img class="overlayImage2" src="characters/SSR/w5.png"/>';
				} else if (ssrGate == 9 || ssrGate == 10) {
					image.innerHTML = '<img src="SSR/s9.jpg"/><img class="overlayImage2" src="characters/SSR/e2.png"/>';
				} else if (ssrGate == 11 || ssrGate == 12) {
					image.innerHTML = '<img src="SSR/s11.jpg"/><img class="overlayImage2" src="characters/SSR/e1.png"/>';
				} else if (ssrGate == 15 || ssrGate == 16) {
					image.innerHTML = '<img src="SSR/s15.jpg"/><img class="overlayImage2" src="characters/SSR/l4.png"/>';
				} else if (ssrGate == 17 || ssrGate == 18) {
					image.innerHTML = '<img src="SSR/s17.jpg"/><img class="overlayImage2" src="characters/SSR/l1.png"/>';
				} else if (ssrGate == 19 || ssrGate == 20) {
					image.innerHTML = '<img src="SSR/s19.jpg"/><img class="overlayImage2" src="characters/SSR/l6.png"/>';
				} else if (ssrGate == 21 || ssrGate == 22) {
					image.innerHTML = '<img src="SSR/s21.jpg"/><img class="overlayImage2" src="characters/SSR/d4.png"/>';
				} else if (ssrGate == 23 || ssrGate == 24) {
					image.innerHTML = '<img src="SSR/s21.jpg"/><img class="overlayImage2" src="characters/SSR/d2.png"/>';
				} else if (ssrGate == 25 || ssrGate == 26) {
					image.innerHTML = '<img src="SSR/n1.jpg"/><img class="overlayImage2" src="characters/SSR/w2.png"/>';
				} else if (ssrGate == 29 || ssrGate == 30) {
					image.innerHTML = '<img src="SSR/n5.jpg"/><img class="overlayImage2" src="characters/SSR/i4.png"/>';
				} else if (ssrGate == 31 || ssrGate == 32) {
					image.innerHTML = '<img src="SSR/n7.jpg"/><img class="overlayImage2" src="characters/SSR/f6.png"/>';
				} else if (ssrGate == 33 || ssrGate == 34) {
					image.innerHTML = '<img src="SSR/n9.jpg"/><img class="overlayImage2" src="characters/SSR/d6.png"/>';
				} else if (ssrGate == 37 || ssrGate == 38) {
					image.innerHTML = '<img src="SSR/p1.jpg"/><img class="overlayImage2" src="characters/SSR/i1.png"/>';
				} else if (ssrGate == 39 || ssrGate == 40) {
					image.innerHTML = '<img src="SSR/p3.jpg"/><img class="overlayImage2" src="characters/SSR/f3.png"/>';
				} else if (ssrGate == 41 || ssrGate == 42) {
					image.innerHTML = '<img src="SSR/p5.jpg"/><img class="overlayImage2" src="characters/SSR/e6.png"/>';
				} else if (ssrGate == 43 || ssrGate == 44) {
					image.innerHTML = '<img src="SSR/p7.jpg"/><img class="overlayImage2" src="characters/SSR/i6.png"/>';
				} else if (ssrGate == 47 || ssrGate == 48) {
					image.innerHTML = '<img src="SSR/x1.jpg"/><img class="overlayImage2" src="characters/SSR/f5.png"/>';
				} else if (ssrGate == 53 || ssrGate == 54) {
					image.innerHTML = '<img src="SSR/x7.jpg"/><img class="overlayImage2" src="characters/SSR/i2.png"/>';
				} else if (ssrGate == 55 || ssrGate == 56) {
					image.innerHTML = '<img src="SSR/x9.jpg"/><img class="overlayImage2" src="characters/SSR/d1.png"/>';
				} else if (ssrGate == 57 || ssrGate == 58) {
					image.innerHTML = '<img src="SSR/x11.jpg"/><img class="overlayImage2" src="characters/SSR/e5.png"/>';
				} else if (ssrGate == 59 || ssrGate == 60) {
					image.innerHTML = '<img src="SSR/w1.jpg"/><img class="overlayImage2" src="characters/SSR/f2.png"/>';
				} else if (ssrGate == 61 || ssrGate == 62) {
					image.innerHTML = '<img src="SSR/w3.jpg"/><img class="overlayImage2" src="characters/SSR/w3.png"/>';
				} else if (ssrGate == 63 || ssrGate == 64) {
					image.innerHTML = '<img src="SSR/w5.jpg"/><img class="overlayImage2" src="characters/SSR/e3.png"/>';
				} else if (ssrGate == 65 || ssrGate == 66) {
					image.innerHTML = '<img src="SSR/w7.jpg"/><img class="overlayImage2" src="characters/SSR/l2.png"/>';
				} else if (ssrGate == 69 || ssrGate == 70) {
					image.innerHTML = '<img src="SSR/w11.jpg"/><img class="overlayImage2" src="characters/SSR/l5.png"/>';
				} else if (ssrGate == 71 || ssrGate == 72) {
					image.innerHTML = '<img src="SSR/w13.jpg"/><img class="overlayImage2" src="characters/SSR/d3.png"/>';
				} else if (ssrGate == 75 || ssrGate == 76) {
					image.innerHTML = '<img src="SSR/g3.jpg"/><img class="overlayImage2" src="characters/SSR/w4.png"/>';
				} else if (ssrGate == 79 || ssrGate == 80) {
					image.innerHTML = '<img src="SSR/g7.jpg"/><img class="overlayImage2" src="characters/SSR/i3.png"/>';
				} else if (ssrGate == 83 || ssrGate == 84) {
					image.innerHTML = '<img src="SSR/k3.jpg"/><img class="overlayImage2" src="characters/SSR/f7.png"/>';
				} else if (ssrGate == 85 || ssrGate == 86) {
					image.innerHTML = '<img src="SSR/k5.jpg"/><img class="overlayImage2" src="characters/SSR/w6.png"/>';
				} else if (ssrGate == 89 || ssrGate == 90) {
					image.innerHTML = '<img src="SSR/k9.jpg"/><img class="overlayImage2" src="characters/SSR/d5.png"/>';
				} else if (ssrGate == 99 || ssrGate == 100) {
					image.innerHTML = '<img src="SSR/b9.jpg"/><img class="overlayImage2" src="characters/SSR/i5.png"/>';
				} else if (ssrGate == 101 || ssrGate == 102) {
					image.innerHTML = '<img src="SSR/i1.jpg"/><img class="overlayImage2" src="characters/SSR/f4.png"/>';
				} else if (ssrGate == 103 || ssrGate == 104) {
					image.innerHTML = '<img src="SSR/i3.jpg"/><img class="overlayImage2" src="characters/SSR/l3.png"/>';
				} else if (ssrGate == 105 || ssrGate == 106) {
					image.innerHTML = '<img src="SSR/i5.jpg"/><img class="overlayImage2" src="characters/SSR/e4.png"/>';
				} else if (ssrGate == 114 || ssrGate == 115) {
					image.innerHTML = '<img src="SSR/a8.jpg"/><img class="overlayImage2" src="characters/SSR/l7.png"/>';
				}
				
			}
			
		}
		
		//Draw Summon
		else {
			var rareGate = Math.floor((Math.random() * 100) + 1);
			// Generate Summon R cards
			if (rareGate <= 82) {
				var rGate = Math.floor((Math.random() * 24) + 1);
				var image = document.getElementById('item1');
				image.innerHTML = '<img src="R/m' + rGate + '.jpg"/>';
				
			} 
			
			
			//Generate Summon SR Cards
			else if (rareGate >=83 && rareGate <=97){
				var srGate = Math.floor((Math.random() * 20) + 1);
				var image = document.getElementById('item1');
				image.innerHTML = '<img src="SR/m' + srGate + '.jpg"/>';
				
			} 
			
			
			//Generate Summon SSR cards
			else {
				var ssrGate = Math.floor((Math.random() * 46) + 1);
				var image = document.getElementById('item1');
				image.innerHTML = '<img src="SSR/m' + ssrGate + '.jpg"/>';
				
			}
			
			
		}
		
	}
	
	
	
	/* Add Cash 300 to input box and clear other 9 items */
	document.cash.Display.value = eval(cash.Display.value) +300;
	var itemClean = ["item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10"];
	
	for (var x=0; x<9; x++){
		document.getElementById(itemClean[x]).innerHTML = '';
	}
}
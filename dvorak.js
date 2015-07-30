	var keys 	= 	[192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8,
					9,81,87,69,82,84,89,85,73,79,80,219,221,220,
					20,65,83,68, 70, 71, 72, 74, 75, 76, 186,222,13,
					16,90, 88, 67, 86, 66, 78, 77, 188, 190 , 191, 16,
					17, 18, 32, 18, 17 ];
	var xcord	= 	[113, 152, 190,  230, 269, 308, 347, 386, 425, 464, 503, 542, 581, 620,
					113, 171, 210, 248, 287, 325, 363, 402, 440, 479, 517, 556, 594,633,
					113, 179, 218, 256, 295, 334, 373, 411, 450, 489, 528, 566, 605,
					113 , 199, 238, 277, 316, 355, 394, 433, 472, 511, 550, 589,
					113, 161, 210, 594, 643];
	var ycord	= 	[14, 14, 14, 14,14, 14, 14, 14,14, 14, 14, 14, 14, 14,
					53, 53, 53, 53,53, 53, 53, 53,53, 53, 53, 53, 53, 53,
					90,90,90,90,90,90,90,90,90,90,90, 90, 90,
					129,129,129,129,129,129,129,129,129,129,129,129,
					168, 168, 168, 168, 168];
	var dvorak	=  	['`','1','2','3','4','5','6','7','8','9','0','[',']','',
					'&nbsp;&nbsp;&nbsp;&nbsp;','\'',',','.','p','y','f','g','c','r','l','/', '=', '\\',
					'','a','o','e','u','i','d','h','t','n','s','-', '</br>',
					'',';','q','j','k','x','b','m','w','v','z','',
					'', '', '&nbsp;', '', ''];
	var upper	=   ['~','!','@','#','$','%','^','&','*','(',')','{','}','',
					'&nbsp;&nbsp;&nbsp;&nbsp;','"','<','>','P','Y','F','G','C','R','L','?', '+', '|',
					'','A','O','E','U','I','D','H','T','N','S','_', '</br>',
					'',':','Q','J','K','X','B','M','W','V','Z','',
					'', '', '&nbsp;', '', ''];
	var shift 	= 	false;

	$(document).keydown(function (e){
		for(var i = 0 ; i < keys.length; i++){
			if(e.keyCode  == keys[i]){
				if(e.keyCode != 8 )
					e.preventDefault();
				switch(keys[i]) {
					case 8:
						$(".keyboard").append("<img class='overlay' src='images/overlay.jpg' style='width:65px;height:32px;position:absolute;left:"+xcord[i]+"px;top:"+ycord[i]+"px;opacity:1.0 '/>");
						break;
					case 9:
						$(".keyboard").append("<img class='overlay' src='images/overlay.jpg' style='width:52px;height:32px;position:absolute;left:"+xcord[i]+"px;top:"+ycord[i]+"px;opacity:1.0 '/>");
						break;
					case 13:
						$(".keyboard").append("<img class='overlay' src='images/overlay.jpg' style='width:81px;height:32px;position:absolute;left:"+xcord[i]+"px;top:"+ycord[i]+"px;opacity:1.0 '/>");
						break;
					case 16:
						if(xcord[i] == 113)
							$(".keyboard").append("<img class='overlay' src='images/overlay.jpg' style='width:79px;height:32px;position:absolute;left:"+xcord[i]+"px;top:"+ycord[i]+"px;opacity:1.0 '/>");
						else
							$(".keyboard").append("<img class='overlay' src='images/overlay.jpg' style='width:95px;height:32px;position:absolute;left:"+xcord[i]+"px;top:"+ycord[i]+"px;opacity:1.0 '/>");
						break;
					case 17:
					case 18:
						$(".keyboard").append("<img class='overlay' src='images/overlay.jpg' style='width:42px;height:33px;position:absolute;left:"+xcord[i]+"px;top:"+ycord[i]+"px;opacity:1.0 '/>");
						break;
					case 20:
						$(".keyboard").append("<img class='overlay' src='images/overlay.jpg' style='width:59px;height:32px;position:absolute;left:"+xcord[i]+"px;top:"+ycord[i]+"px;opacity:1.0 '/>");
						break;
					case 32:
						$(".keyboard").append("<img class='overlay' src='images/overlay.jpg' style='width:378px;height:33px;position:absolute;left:"+xcord[i]+"px;top:"+ycord[i]+"px;opacity:1.0 '/>");
						break;
					case 220:
						$(".keyboard").append("<img class='overlay' src='images/overlay.jpg' style='width:53px;height:32px;position:absolute;left:"+xcord[i]+"px;top:"+ycord[i]+"px;opacity:1.0 '/>");
						break;
					default:
						$(".keyboard").append("<img class='overlay' src='images/overlay.jpg' style='width:32px;height:auto;position:absolute;left:"+xcord[i]+"px;top:"+ycord[i]+"px;opacity:1.0 '/>");
				}
				if(e.keyCode == 16)
					shift = true;
				if(e.keyCode != 16) {
					if(e.keyCode == 8){}
					else if(shift)
						$('.output').append(upper[i]);
					else
						$('.output').append(dvorak[i]);
				}
    			placeCaretAtEnd( document.getElementById("myout") );
			}
		}
	});


	$(document).keyup(function (e){
			for(var i = 0 ; i < keys.length; i++){
				if(e.keyCode == keys[i]){
					setTimeout(function(){
						$(".keyboard").children(".overlay").remove();
					}, 130);
				}
				if(e.keyCode ==  16){
					shift = false;
				}
		}
	});

	function placeCaretAtEnd(e) {
	    e.focus();
        var range = document.createRange();
        range.selectNodeContents(e);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
	}

  	function clearDiv() {
   		$('.output').empty();
  	}


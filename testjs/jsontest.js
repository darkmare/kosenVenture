(function (){
	var obj ={
		"quiz":"内容",
		"c1":{"txt1":"内容","ans1":true},
		"c2":{"txt2":"内容","ans2":true},
		"c3":{"txt3":"内容","ans3":true},		
		"c4":{"txt4":"内容","ans4":true}
	 
	};
	
	var clickbutton = document.getElementById("file2");
	var txt = document.getElementById("result");
	//txt.value = 'aaaaaaaaaaaaaaaa';
	
	clickbutton.onclick = function(){
		try{
			//eval(obj);
			txt.value  = JSON.stringify(obj); 
		}
		catch(e){
		}
	};
		
})();

/**
 * @author めあ
 */

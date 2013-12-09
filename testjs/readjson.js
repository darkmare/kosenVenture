(function (){
	
	$.get("a.txt", function(data){ 
		var hoge = $.parseJSON(data); 
		var txt2 = document.getElementById("result2");
		var clickbutton2 = document.getElementById("button2");
		
		clickbutton2.onclick = function(){
			txt2.value = hoge.quiz;
		};
	
	}); 

})();

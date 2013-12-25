enchant();

window.onload = function () {
  
  var game = new Game(480, 640);
  game.fps = 15;
  game.preload("./img/start1.png","./img/titlelogo1.png");
  
  game.onload = function () {
  	
  	var quizPass;
  	var quizData = new Array();
  	var gameCount = 0;
  	var endTime;
  	var startTime;
  	var right=0;
  	var hoge;
  	
  	
  	
  	var sceneTitle = function(){
  		var scene = new Scene();
  		var logo = new Sprite(472,276);
	  	var startButton = new Sprite(476,204);
	  	logo.image = game.assets["./img/titlelogo1.png"];
	  	logo.x = 0;
	  	logo.y = 0;
	  	
	  	
	  	startButton.image = game.assets['./img/start1.png'];
	  	startButton.x = 0;
	  	startButton.y = 300;
	  	
	  	scene.addChild(startButton);
	  	scene.addChild(logo);
	  	startButton.addEventListener('touchstart',function(e){
	  		game.replaceScene(sceneMode());
	  	});
	  	
	  	return scene;
	 };
	 
  	var ModeChoice = enchant.Class.create(enchant.Label,{
		initialize: function(i,pass,text){
	  		enchant.Label.call(this);
	  		this.x = 0;
	  		this.y = 80*i;
	  		this.width = 480;
  			this.height = 80;
			this.text = text;
	  		//this.textAlign = "center";
	  		quizPass = pass;
	  		this.addEventListener('touchstart',function(e){
	  			$.get(quizPass,function(data){
	  				quizData = $.parseJSON(data);
	  				startTime =  parseInt(game.frame/game.fps);
	  				game.replaceScene(sceneGame()); 
	  			});
	  		});
	  		
	  	}
	});
  	
  	
  	var sceneMode = function(){

  		var scene = new Scene();
  		var mode = new ModeChoice(2,"a.txt","は？");
  		scene.addChild(mode);
	  	/*var modeA = new Sprite(476,204);
	  	var modeB = new Sprite(476,204);
	  	modeA.image = game.assets['./img/start1.png'];
	  	modeB.image = game.assets['./img/start1.png'];
	  	modeA.x = 0;
	  	modeA.y = 0;
	  	modeB.x = 0;
	  	modeB.y = 205;
	  	scene.addChild(modeA);
	  	scene.addChild(modeB);
	  	
	  	modeA.addEventListener('touchstart',function(e){
	  		quizPass = "a.txt";
	  		game.replaceScene(sceneGame());
	  	});
	  	
	  	modeB.addEventListener('touchstart',function(e){
	  		quizPass = "a.txt";
	  		game.replaceScene(sceneGame());
	  	});
	  	*/
	  	return scene;
  	};

  	var Choice = enchant.Class.create(enchant.Label,{
  		
  		initialize: function(count,text){
  			enchant.Label.call(this);
  			this.x = 0;
  			this.y = count*80 + 320;
  			this.width = 480;
  			this.height = 80;
  			this.text = text;
  			this.textAlign = "center";
  			this.addEventListener("touchstart",function(e){
  				gameCount = gameCount+1;
  				if(quizData[hoge]["choice"][count]["ans"] == true){
  					right +=1 ;
  				}
  				quizData.splice(hoge,1);
  				//alert(gameCount);//周回処理と正答数カウント
  				if(gameCount == 3){
  					//game.popScene();
  					endTime =  parseInt(game.frame/game.fps);
  					game.replaceScene(sceneEnd());
  				}
  				else if(gameCount != 10){
  					game.replaceScene(sceneGame());
  				}
  			});
  		},
  			
  	});
  	
  	var sceneGame = function(){
  		var scene = new Scene();
  		var quizText = new Label();
  		//選択肢はクラス化してSpriteとLabelのどっちも使ったものを作る。
  		var choice = new Array();
  		var i,a;
  		
  		

	  	/*
	  	$.ajax({
			type: "GET",
			scriptCharset:"UTF-8",
			url: "a.txt",
			//dataType:"json",
			success: function(data) {
		    	hoge = $.parseJSON(data); 
	  			alert(hoge[0]["quiz"]);
		  	}
		});
	  	
	  	*/
	  	//$.get(quizPass,function(data){
	  	//quizData = $.parseJSON(data); 
	  	
	  	hoge = Math.floor((quizData.length+1) * Math.random());
	  	
	  	alert(hoge);
	  	quizText.text = quizData[hoge]["quiz"];
		scene.addChild(quizText);
		for(i = 0; i<4; i++){
	  		choice[i] = new Choice(i,quizData[hoge]["choice"][i]["txt"]);
			scene.addChild(choice[i]);
	  	}		
	  	//});
	  	/*
	  	choice.addEventListener('touchstart',function(e){
	  		game.replaceScene(sceneEnd());
	  	});
  		for(i=0;i<10;i++){
  			
  			
  			game.pushScene(scene);
  		}*/
  		/*choice.image = game.assets['./img/start.png'];
  		choice.x = 100;
  		choice.y = 200;
  		*/
	  	return scene;
  	};
  	
  	var sceneEnd = function(){
  		var scene = new Scene();
  		var time;
	  	var returnButton = new Sprite(472,276);
	  	returnButton.image = game.assets['./img/titlelogo1.png'];
	  	returnButton.x = 0;
	  	returnButton.y = 0;
	  	scene.addChild(returnButton);
	  	returnButton.addEventListener('touchstart',function(e){
	  		game.replaceScene(sceneTitle());
	  	});
	  	time = endTime - startTime;
	  	var score = new Label();
	  	score.x = 0;
	  	score.y = 300;
	  	score.text ="経過時間" + time;
	  	scene.addChild(score);
	  	return scene;
  	};
  	
  	game.replaceScene(sceneTitle());
    // ここに処理を書いていきます。
  };
  game.start();
};
/**
 * @author めあ
 */

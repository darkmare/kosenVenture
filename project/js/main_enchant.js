enchant();

window.onload = function () {
  
  var game = new Game(640, 640);
  game.fps = 15;
  game.preload("./img/start.png");
  
  game.onload = function () {
  	
  	var quizPass;
  	
  	var sceneTitle = function(){
  		var scene = new Scene();
	  	var startButton = new Sprite(235,48);
	  	startButton.image = game.assets['./img/start.png'];
	  	startButton.x = 320;
	  	startButton.y = 320;
	  	scene.addChild(startButton);
	  	startButton.addEventListener('touchstart',function(e){
	  		game.replaceScene(sceneMode());
	  	});
	  	
	  	return scene;
	 };
  	
  	var sceneMode = function(){
  		var scene = new Scene();
	  	var modeA = new Sprite(236,48);
	  	var modeB = new Sprite(236,48);
	  	modeA.image = game.assets['./img/start.png'];
	  	modeB.image = game.assets['./img/start.png'];
	  	modeA.x = 100;
	  	modeA.y = 200;
	  	modeB.x = 100;
	  	modeB.y = 500;
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
	  	return scene;
  	};
  	
  	var sceneGame = function(){
  		var scene = new Scene();
  		var quizText = new Label();
  		//選択肢はクラス化してSpriteとLabelのどっちも使ったものを作る。
  		var choice = new Sprite(236,48);
  		choice.image = game.assets['./img/start.png'];
  		choice.x = 100;
  		choice.y = 200;
  		var hoge;
	  	$.get(quizPass,function(data){
	  		hoge = $.parseJSON(data); 
	  		scene.addChild(choice);
	  	});
	  	
	  	choice.addEventListener('touchstart',function(e){
	  		game.replaceScene(sceneEnd());
	  	});
	  	return scene;
  	};
  	
  	var sceneEnd = function(){
  		var scene = new Scene();
	  	var returnButton = new Sprite(236,48);
	  	returnButton.image = game.assets['./img/start.png'];
	  	returnButton.x = 100;
	  	returnButton.y = 400;
	  	scene.addChild(returnButton);
	  	returnButton.addEventListener('touchstart',function(e){
	  		game.replaceScene(sceneTitle());
	  	});
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

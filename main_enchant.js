enchant();

window.onload = function () {
  var game = new Game(320, 320);
  game.preload("./start.png");
  game.onload = function () {
  	
  	var sceneTitle = new Scene();
  	var startButton = new Sprite();
  	startButton.image = game.assets['start.png'];
  	sceneTitle.addChild(startButton);
  	startButton.addEventListener('touchstart',function(e){
  		game.replaceScene(sceneMode);
  	});
  	
  	var sceneMode = new Scene();
  	var modeA = new Sprite();
  	var modeB = new Sprite();
  	modeA.image = game.assets['start.png'];
  	modeB.image = game.assets['start.png'];
  	
  	modeA.addEventListener('touchstart',function(e){
  		quizPass = "a.txt";
  		game.replaceScene(sceneGame);
  	});
  	
  	modeB.addEventListener('touchstart',function(e){
  		quizPass = "a.txt";
  		game.replaceScene(sceneGame);
  	});
  	
  	
  	var sceneGame = new Scene();
  	var quizPass;
  	$.get(quizPass,function(data){
  		var hoge = $.parseJSON(data); 
  		var quizTexe = new Label();
  		quizText = hoge.quiz;
  		sceneGame.addchild(quizText);
  	});
  	game.replaceScene(sceneEnd);
  	
  	var sceneEnd = new Scene();
  	var returnButton = new Sprite();
  	returnButton.image = game.assets['start.png'];
  	returnButton.addEventListener('touchstart',function(e){
  		game.replaceScene(sceneTitle);
  	});
  	
  	
  	game.replaceScene(sceneTitle);
    // ここに処理を書いていきます。
  };
  game.start();
};
/**
 * @author めあ
 */

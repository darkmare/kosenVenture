
window.addEventListener('DOMContentLoaded', function() {
	document.querySelector("#file2").addEventListener('click', function(e) {
		if(window.File){
			var input = document.querySelector('#file').files[0];
			//テキスト読み込み。////ファイルアドレス取得。HTMLのinputでファイル選択可能。
			var reader = new FileReader();
			
			reader.readAsText(input, 'UTF-8');//テキスト読み込み。
			
			reader.addEventListener('load',function(e){
				var output = reader.result.replace(/(\n|\r)/g,'<br />');
				document.querySelector("#result").innerHTML = output;
			},true);
			
			
		}
	},true);
});



/**
 * @author めあ
 */

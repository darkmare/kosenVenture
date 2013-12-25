

<!DOCTYPE html>
<html lang="en">
	<head>
		<style type="text/css">
		#quiz{
			width:480;
			height:200;
			resize:none;
		}
		</style>
		<meta charset="utf-8">

		<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame
		Remove this if you use the .htaccess -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<title>form</title>
		<meta name="description" content="">
		<meta name="author" content="めあ">

		<meta name="viewport" content="width=device-width; initial-scale=1.0">

		<!-- Replace favicon.ico & apple-touch-icon.png in the root of your domain and delete these references -->
		<link rel="shortcut icon" href="/favicon.ico">
		<link rel="apple-touch-icon" href="/apple-touch-icon.png">
	</head>

	<body>
		<form method="get" >
			<textarea name ="quiz" value = "" style="width:480px; height:100px;" ></textarea><br>
			<input type="text" name="c1" value="選択肢１" size="60" />
			<input type="radio" name="a1" value="正解" /><br>
			<input type="text" name="c2" value="選択肢2" size="60" />
			<input type="radio" name="a2" value="正解" /><br>
			<input type="text" name="c3" value="選択肢3" size="60" />
			<input type="radio" name="a3" value="正解" /><br>
			<input type="text" name="c4" value="選択肢4" size="60" />
			<input type="radio" name="a4" value="正解" /><br>
			
			<input type="submit" name="bu" value="送信">
			
		</form>
		<?php
		function get_bitly_short_url($url,$login,$appkey,$format='txt') {
			$connectURL = 'http://api.bit.ly/v3/shorten?login='.$login.'&apiKey='.$appkey.'&uri='.urlencode($url).'&format='.$format;
		return curl_get_result($connectURL);
		}
		function curl_get_result($url) {
			$ch = curl_init();
			$timeout = 5;
			curl_setopt($ch,CURLOPT_URL,$url);
			curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
			curl_setopt($ch,CURLOPT_CONNECTTIMEOUT,$timeout);
			$data = curl_exec($ch);
			curl_close($ch);
			return $data;
		}

		$quiz = $_GET["bu"];
		if(strstr($quiz, '送信')){
			$ur = "http://".$_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"]."?".$_SERVER["QUERY_STRING"];
			$short_url = get_bitly_short_url($ur,'darkmare','R_b0bfdb75134bb42759f2f50cc75bdb0e');
			
			//print($short_url);
			//print(urldecode($ur));
			print('<a href="http://twitter.com/share?url='.$short_url.'&text=テストツイート">最終確認</a>');
			
		}
		?>
<?
		/*
		function shorturl($url){
			$url1 = "http://api.bit.ly/v3/shorten?"
			."login=darkmare"
			."&apikey=R_b0bfdb75134bb42759f2f50cc75bdb0e"
			."&longUrl=".urlencode($url)
			."&format=xml";
			
			$ch = curl_init();
			curl_setopt($ch, CURLOPT, $url);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
			$data = curl_exec($ch);
			
			$data_obj = simplexml_load_string($data);
			if((int)$data_obj->status_code == 200)
       		{
            return  (string)$data_obj->data->url;

        	}else
        	{
            	return FALSE;
       		}
		 * 
		 
				
		}
		*/
	?>
		
	</body>
</html>

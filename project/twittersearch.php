

<!DOCTYPE html>
<html lang="en">
	<head>
		<style type="text/css">
		a#topLink{
			position:absolute;
			margin-top:800px; 
			text-align: center; 
		}
  		</style>
		<meta charset="utf-8">

		<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame
		Remove this if you use the .htaccess -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<title>index</title>
		<meta name="description" content="">
		<meta name="author" content="めあ">

		<meta name="viewport" content="width=device-width; initial-scale=1.0">

		<!-- Replace favicon.ico & apple-touch-icon.png in the root of your domain and delete these references -->
		<link rel="shortcut icon" href="/favicon.ico">
		<link rel="apple-touch-icon" href="/apple-touch-icon.png">
	</head>

	<body>
		<?php
require_once("twitteroauth/twitteroauth.php");


$consumerKey = '1pZ0ssePOJlwWNA3faVUuA';
$consumerSecret = 'Vf7rQf4bUaNJi5HE1ToXYHHdQCyaU3Tx8IsJeW1is0U';
$accessToken = '84727388-oa9q9b73Yb9wTPHFYuPoPpat4QJ7ToSRiiTtctcqH';
$accessTokenSecret = 'wzmY8IkRAUiEmViUjddX8tcSOEeRuugSd19M5ESvloZfJ';

$twObj = new TwitterOAuth(
	$consumerKey,
    $consumerSecret,
    $accessToken,
    $accessTokenSecret
);

$key = "yahoo"; //%23は#

$option = array('q'=>$key,'count'=>'10','lang'=>'ja','result_type'=>'mixed');//検索条件　日本語　10ツイート分 新しく評価の高いツイート

$json = $twObj -> OAuthRequest('https://api.twitter.com/1.1/search/tweets.json',
    'GET',
    $option
);

$dat = json_decode($json);


function expand_bitly_short_url($url,$login,$appkey,$format='txt') {
	$connectURL = 'http://api.bitly.com/v3/expand?login='.$login.'&apiKey='.$appkey.'&uri='.urlencode($url).'&format='.$format;
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
//statuses　ツイート1つ　text内容
foreach($dat['statuses'] as $tweet){
print("1");
	$search = strstr($tweet['text'],"bit.ly/");
	//短縮URLの最後に追加する文字を考える。%○○とかできる。
	$ur = substr($search,0,strpos($search,'%123'));// URL展開　デコード　抜き出し
	
	//展開
	$long_url = expand_bitly_short_url($ur,'darkmare','R_b0bfdb75134bb42759f2f50cc75bdb0e');
	
	print($long_url);
	/*
	$long_url = strstr($long_url,'?quiz=');
	$long_url = strstr($long_url,'&c1=');
	if(strstr($long_url,'&a1=') == FALSE){/}
	else{};
	$long_url = strstr($long_url,'&c2=');
	if(strstr($long_url,'&a2=') == FALSE){}
	else{};
	$long_url = strstr($long_url,'&c3=');
	if(strstr($long_url,'&a3=') == FALSE){}
	else{};
	$long_url = strstr($long_url,'&c4=');
	if(strstr($long_url,'&a4=') == FALSE){}
	else{}；
	*/


}


?>
		<script type="text/javascript" src="./lib/enchant.js"></script>
		<script type="text/javascript" src="./lib/jquery-1.10.2.min.js"></script> 
		<script type="text/javascript" src="./js/main_enchant.js"></script> 
		<a id="topLink" href ="./form.php">投稿フォーム</a>
	</body>
</html>

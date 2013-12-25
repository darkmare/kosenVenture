<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ja" lang="ja">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>TRYPHP!　Twitter API V1.1 つぶやきを更新[ POST statuses/update ] サンプルコード</title>
</head>
<body>



<?php
//twitteroauth.phpをインクルードします。ファイルへのパスはご自分で決めて下さい。
require_once("./twitteroauth.php");

//TwitterAPI開発者ページでご確認下さい。
//Consumer keyの値を格納
$sConsumerKey = "1pZ0ssePOJlwWNA3faVUuA";
//Consumer secretの値を格納
$sConsumerSecret = "Vf7rQf4bUaNJi5HE1ToXYHHdQCyaU3Tx8IsJeW1is0U";
//Access Tokenの値を格納
$sAccessToken = "84727388-vR6smyuP47Zktd3huHXcqzSxQmggjyjo3usgWkwGQ";
//Access Token Secretの値を格納
$sAccessTokenSecret = "bd0ROyr3f9b7b0o2guaYw8AkB9WYmvcUGLwknPl7ji2nh";

//OAuthオブジェクトを生成する
$twObj = new TwitterOAuth($sConsumerKey,$sConsumerSecret,$sAccessToken,$sAccessTokenSecret);

//呟きをPOSTするAPI
$sTweet = "呟きのテスト投稿です。 (".date('Y-m-d H:i:s').")";
$vRequest = $twObj->OAuthRequest("https://api.twitter.com/1.1/statuses/update.json","POST",array("status" => $sTweet));

//Jsonデータをオブジェクトに変更
$oObj = json_decode($vRequest);

//エラー
if(isset($oObj->{'errors'}) && $oObj->{'errors'} != ''){
    ?>
    更新に失敗しました。<br/>
    エラー内容：<br/>
    <pre>
    <?php var_dump($oObj); ?>
    </pre>
<?php
//投稿内容
}else{
?>
    <h3>投稿されたアカウント</h3>

https://twitter.com/tryphp_test

    <h3>結果の表示</h3>
    <pre>
    <?php var_dump($oObj); ?>
    </pre>
    <?php
}
?>



</body>
</html>
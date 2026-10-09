<?php
header('Content-Type: application/json; charset=utf-8');
if ($_SERVER['REQUEST_METHOD'] !== 'POST'){http_response_code(405);echo json_encode(['ok'=>false]);exit;}
if (!empty($_POST['website'] ?? '')){echo json_encode(['ok'=>true]);exit;}
$name=trim($_POST['first_name']??'');$email=filter_var(trim($_POST['email']??''),FILTER_VALIDATE_EMAIL);$phone=trim(($_POST['dial_code']??'').' '.($_POST['phone']??''));
if(strlen($name)<2||!$email||strlen($phone)<6){http_response_code(422);echo json_encode(['ok'=>false]);exit;}
$data=['first_name'=>$name,'email'=>$email,'phone'=>$phone,'answers'=>json_decode($_POST['answers']??'{}',true),'tracking'=>['utm_source'=>$_POST['utm_source']??'','utm_campaign'=>$_POST['utm_campaign']??'','campaign'=>$_POST['campaign']??'','adset'=>$_POST['adset']??'','creative'=>$_POST['creative']??'','subid'=>$_POST['subid']??''],'created_at'=>gmdate('c')];
$to='REPLACE_WITH_LEAD_EMAIL@example.com';$webhook='';$sent=false;
if(strpos($to,'REPLACE_WITH')===false){$sub='FinGuard Insights — checklist request';$body="Name: $name\nEmail: $email\nPhone: $phone\n\n".json_encode($data,JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES);$sent=@mail($to,$sub,$body,"From: no-reply@".$_SERVER['HTTP_HOST']."\r\nReply-To: ".$email);}
if($webhook){$ch=curl_init($webhook);curl_setopt_array($ch,[CURLOPT_POST=>true,CURLOPT_RETURNTRANSFER=>true,CURLOPT_HTTPHEADER=>['Content-Type: application/json'],CURLOPT_POSTFIELDS=>json_encode($data),CURLOPT_TIMEOUT=>7]);curl_exec($ch);curl_close($ch);$sent=true;}
if(!$sent){http_response_code(500);echo json_encode(['ok'=>false,'message'=>'Lead delivery not configured']);exit;}echo json_encode(['ok'=>true]);
?>
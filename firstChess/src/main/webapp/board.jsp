<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Board Page</title>
<link rel="stylesheet" type="text/CSS" href="ssheet.css">
<script src="jsfile.js"></script>
</head>

<body id="bd" style="background-color :rgba(100, 168, 255,0.7);overflow:hidden">

<%
	response.setHeader("Cache-Control","no-cache, no-store, must-revalidate");

	if(session.getAttribute("email")==null)
		response.sendRedirect("index.jsp");
%>


<br>

<div id="wboard">
<table id="tab"> 
	<tr>
	<td class="nob">8</td><td id="70" onclick="fun(this,this.id)" onmouseover="onhover(this.id)"  class = "one 70">&#9820</td> <td id="71" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 71">&#9822</td> <td id="72" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 72">&#9821</td> <td id="73" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 73">&#9819</td> <td id="74" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 74">&#9818</td> <td id="75" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 75">&#9821</td> <td id="76" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 76">&#9822</td> <td id="77" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 77">&#9820</td>
	</tr>
	
	<tr>
	<td class="nob">7</td><td id="60" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 60">&#9823</td> <td id="61" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 61">&#9823</td> <td id="62" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 62">&#9823</td> <td id="63" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 63">&#9823</td> <td id="64" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 64">&#9823</td> <td id="65" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 65">&#9823</td> <td id="66" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 66">&#9823</td> <td id="67" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 67">&#9823</td>
	</tr>
	
	<tr>
	<td class="nob">6</td><td id="50" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 50"></td> <td id="51" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 51"></td> <td id="52" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 52"></td> <td id="53" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 53"></td> <td id="54" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 54"></td> <td id="55" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 55"></td> <td id="56" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 56"></td> <td id="57" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 57"></td>
	</tr>
	
	<tr>
	<td class="nob">5</td><td id="40" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 40"></td> <td id="41" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 41"></td> <td id="42" onclick="fun(this,this.id)" onmouseover="onhover(this.id)"  class = "two 42"></td> <td id="43" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 43"></td> <td id="44" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 44"></td> <td id="45" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 45"></td> <td id="46" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 46"></td> <td id="47" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 47"></td>
	</tr>
	
	<tr>
	<td class="nob">4</td><td id="30" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 30"></td> <td id="31" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 31"></td> <td id="32" onclick="fun(this,this.id)" onmouseover="onhover(this.id)"  class = "one 32"></td> <td id="33" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 33"></td> <td id="34" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 34"></td> <td id="35" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 35"></td> <td id="36" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 36"></td> <td id="37" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 37"></td>
	</tr>
	
	<tr>
	<td class="nob">3</td><td id="20" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 20"></td> <td id="21" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 21"></td> <td id="22" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 22"></td> <td id="23" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 23"></td> <td id="24" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 24"></td> <td id="25" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 25"></td> <td id="26" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 26"></td> <td id="27" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 27"></td>
	</tr>
	
	<tr>
	<td class="nob">2</td><td id="10" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 10">&#9817</td> <td id="11" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 11">&#9817</td> <td id="12" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 12">&#9817</td> <td id="13" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 13">&#9817</td> <td id="14" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 14">&#9817</td> <td id="15" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 15">&#9817</td> <td id="16" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 16">&#9817</td> <td id="17" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 17">&#9817</td>
	</tr>
	
	<tr>
	<td class="nob">1</td> <td id="00" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 00">&#9814</td> <td id="01" onclick="fun(this,this.id)" onmouseover="onhover(this.id)"  class = "one 01">&#9816</td> <td id="02" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 02">&#9815</td> <td id="03" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 03">&#9813</td> <td id="04" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 04">&#9812</td> <td id="05" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 05">&#9815</td> <td id="06" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 06">&#9816</td> <td id="07" onclick="fun(this,this.id)" onmouseover="onhover(this.id)"  class = "one 07">&#9814</td>
	</tr>
	
	<tr>
	<td class="nob1"></td><td class="nob1">A</td> <td class = "nob1">B</td> <td class = "nob1">C</td> <td class = "nob1">D</td> <td class = "nob1">E</td> <td class = "nob1">F</td> <td class = "nob1">G</td> <td class = "nob1">H</td> 
	</tr>
	
</table>
</div>

<div id="bboard">

<table>
	<tr>
	<td class="nob">1</td>  <td id="07" onclick="fun(this,this.id)" onmouseover="onhover(this.id)"  class = "one 07">&#9814</td>  <td id="06" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 06">&#9816</td>  <td id="05" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 05">&#9815</td>  <td id="04" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 04">&#9812</td> <td id="03" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 03">&#9813</td> <td id="02" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 02">&#9815</td> <td id="01" onclick="fun(this,this.id)" onmouseover="onhover(this.id)"  class = "one 01">&#9816</td> <td id="00" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 00">&#9814</td>
	</tr>
	
	<tr>
	<td class="nob">2</td> <td id="17" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 17">&#9817</td> <td id="16" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 16">&#9817</td>  <td id="15" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 15">&#9817</td> <td id="14" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 14">&#9817</td>  <td id="13" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 13">&#9817</td>  <td id="12" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 12">&#9817</td> <td id="11" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 11">&#9817</td> <td id="10" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 10">&#9817</td>
	</tr>
	
	<tr>
	<td class="nob">3</td>  <td id="27" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 27"></td> <td id="26" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 26"></td>  <td id="25" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 25"></td> <td id="24" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 24"></td> <td id="23" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 23"></td> <td id="22" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 22"></td> <td id="21" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 21"></td> <td id="20" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 20"></td>
	</tr>
	
	<tr>
	<td class="nob">4</td> <td id="37" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 37"></td>  <td id="36" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 36"></td>   <td id="35" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 35"></td>  <td id="34" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 34"></td> <td id="33" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 33"></td> <td id="32" onclick="fun(this,this.id)" onmouseover="onhover(this.id)"  class = "one 32"></td> <td id="31" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 31"></td> <td id="30" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 30"></td> 
	</tr>
	
	<tr>
	<td class="nob">5</td> <td id="47" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 47"></td> <td id="46" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 46"></td>  <td id="45" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 45"></td> <td id="44" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 44"></td>  <td id="43" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 43"></td><td id="42" onclick="fun(this,this.id)" onmouseover="onhover(this.id)"  class = "two 42"></td> <td id="41" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 41"></td>  <td id="40" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 40"></td> 
	</tr>

	<tr>
	<td class="nob">6</td> <td id="57" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 57"></td>  <td id="56" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 56"></td> <td id="55" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 55"></td> <td id="54" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 54"></td> <td id="53" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 53"></td> <td id="52" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 52"></td> <td id="51" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 51"></td> <td id="50" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 50"></td> 
	</tr>
	
	<tr>
	<td class="nob">7</td> <td id="67" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 67">&#9823</td>  <td id="66" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 66">&#9823</td>  <td id="65" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 65">&#9823</td> <td id="64" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 64">&#9823</td> <td id="63" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 63">&#9823</td>  <td id="62" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 62">&#9823</td> <td id="61" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 61">&#9823</td> <td id="60" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 60">&#9823</td>
	</tr>
	
	<tr>
	<td class="nob">8</td> <td id="77" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 77">&#9820</td>  <td id="76" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 76">&#9822</td> <td id="75" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 75">&#9821</td> <td id="74" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 74">&#9818</td> <td id="73" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 73">&#9819</td> <td id="72" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 72">&#9821</td><td id="71" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 71">&#9822</td> <td id="70" onclick="fun(this,this.id)" onmouseover="onhover(this.id)"  class = "one 70">&#9820</td>
	</tr>
	
	<tr>
	<td class="nob1"></td>  <td class = "nob1">H</td> <td class = "nob1">G</td>  <td class = "nob1">F</td> <td class = "nob1">E</td>  <td class = "nob1">D</td>  <td class = "nob1">C</td> <td class = "nob1">B</td> <td class="nob1">A</td>  
	</tr>
</table>
</div>


<div id="wmod" class="mod">
	<div id="wmod1" class="mod1">
	<br>
	<br>	
	<p>Import anyone of the below</p>
	<br>
	<table style="border-spacing: 50px 0;border-collapse:seperate">
	<tr >
	<td id="we" class="cube" onclick="btnclik(this.id)">&#9814</td><td id="wh" class="cube" onclick="btnclik(this.id)">&#9816</td><td id="wm" class="cube" onclick="btnclik(this.id)">&#9815</td><td id="wq" class="cube" onclick="btnclik(this.id)">&#9813</td>
	</tr>		
	</table>
		<br>
		<br>	
		<div class="butn" onclick="cls('wmod')">Import</div>	
	</div>
</div>

<div id="bmod" class="mod">
	<div id="bmod1" class="mod1">
	<br>
	<br>	
	<p>Import anyone of the below</p>
	<br>
	<table style="border-spacing: 50px 0;border-collapse:seperate">
	<tr >
	<td id="be" class="cube" onclick="btnclik(this.id)">&#9820</td><td id="bh" class="cube" onclick="btnclik(this.id)">&#9822</td><td id="bm" class="cube" onclick="btnclik(this.id)">&#9821</td><td id="bq" class="cube" onclick="btnclik(this.id)">&#9819</td>
	</tr>		
	</table>	
		<br>
		<br>
		<div class="butn" onclick="cls('bmod')">Import</div>	
	</div>
</div>

<div id="cmate" class="mod" style="height:120%">
	<div style="width:800px;height:400px;display:flex;justify-content:center;align-items:center;">
	<p style="color:white;font-size:90px;font-weight:bold;font-family:lucida handwriting">CheckMate!!!!!</p>
		
	</div>
</div>

<div id="openPage" style="width:99%;height:120%;background-color:rgb(170, 60, 132);position:absolute;top: 0;display:flex;overflow:auto">
	<div style="width:90%;height:80%;display:flex;justify-content:center;margin-left:50px">
	<div style="color:black;font-size:30px;font-family:times new roman">
	<h1 style="font-family:Times new roman;font-size:40px;">General Instructions :</h1>
	<ul style="color:white;font-size:25px">
	<li style="padding-left:1em;margin-bottom:25px">To move a coin, firstly click on the coin which you want to move and then click on the destination where you want to place it. </li>
	<li style="padding-left:1em;margin-bottom:25px">The color green, on clicking on any coin indicates the possible path to proceed.</li>
	<li style="padding-left:1em;margin-bottom:25px">The color yellow indicates the possibility of special moves like Castling, En-Passant.</li>
	<li style="padding-left:1em;margin-bottom:25px">The color red indicates that your king is currently checked.</li>
	</ul>
	<div style="margin-left:20px">
	<p style="margin-left:-20px;font-size:35px;padding-left:100px;font-weight:bold;" id="sg" >Choose to play from which side...........</p>
	<table style="margin-left:50px;border-spacing: 100px 0;border-collapse:seperate;">
	<tr>
	<td style="border: 3px solid black" class="one samp" id="wp" onmouseover="onhover(this.id)" onclick="clikbtn(this.id)">&#9817</td><td style="border: 3px solid black" class="two samp" id="bp" onmouseover="onhover(this.id)" onclick="clikbtn(this.id)">&#9823</td>
	</tr>
	</table>
	<div class="butn" style="width:150px;height:40px;margin-left:30px;margin-top:-90px" onclick="start()">Start</div>
	</div>
	</div>
	
		
	</div>
</div>



</body>
</html>
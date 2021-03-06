<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<meta charset="UTF-8">
<title>Spectator Board</title>
<link rel="stylesheet" type="text/CSS" href="ssheet.css">
<script src="spectator.js"></script>
<script src="jsfile.js"></script>
</head>
<body style="background-color :rgba(100, 168, 255,0.7);overflow:hidden" onload="spectatorBoardPos()">

<%
	response.setHeader("Cache-Control","no-cache, no-store, must-revalidate");

	if(session.getAttribute("email")==null)
		response.sendRedirect("index.jsp");
%>


<div id="wboard">
<br>
<table id="tab"> 

	<tr>
	<td class="nob">8</td><td id="70" onclick="fun(this,this.id)" onmouseover="onhover(this.id)"  class = "one 70"></td> <td id="71" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 71"></td> <td id="72" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 72"></td> <td id="73" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 73"></td> <td id="74" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 74"></td> <td id="75" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 75"></td> <td id="76" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 76"></td> <td id="77" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 77"></td>
	</tr>
	
	<tr>
	<td class="nob">7</td><td id="60" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 60"></td> <td id="61" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 61"></td> <td id="62" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 62"></td> <td id="63" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 63"></td> <td id="64" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 64"></td> <td id="65" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 65"></td> <td id="66" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 66"></td> <td id="67" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 67"></td>
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
	<td class="nob">2</td><td id="10" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 10"></td> <td id="11" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 11"></td> <td id="12" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 12"></td> <td id="13" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 13"></td> <td id="14" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 14"></td> <td id="15" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 15"></td> <td id="16" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 16"></td> <td id="17" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 17"></td>
	</tr>
	
	<tr>
	<td class="nob">1</td> <td id="00" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 00"></td> <td id="01" onclick="fun(this,this.id)" onmouseover="onhover(this.id)"  class = "one 01"></td> <td id="02" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 02"></td> <td id="03" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 03"></td> <td id="04" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 04"></td> <td id="05" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "one 05"></td> <td id="06" onclick="fun(this,this.id)" onmouseover="onhover(this.id)" class = "two 06"></td> <td id="07" onclick="fun(this,this.id)" onmouseover="onhover(this.id)"  class = "one 07"></td>
	</tr>
	
	<tr>
	<td class="nob1"></td><td class="nob1">A</td> <td class = "nob1">B</td> <td class = "nob1">C</td> <td class = "nob1">D</td> <td class = "nob1">E</td> <td class = "nob1">F</td> <td class = "nob1">G</td> <td class = "nob1">H</td> 
	</tr>
	
</table>
</div>


<div id="cmate" class="mod" style="height:120%">
	<div style="width:800px;height:400px;display:flex;justify-content:center;align-items:center;">
	<p style="color:white;font-size:90px;font-weight:bold;font-family:lucida handwriting">CheckMate!!!!!</p>
		
	</div>
</div>

<div id="spectateBoard" class="mod" style="height:120%;display:flex;background-color:rgba(0,0,0,0.1)">
	<div style="width:800px;height:400px;display:flex;justify-content:center;align-items:center;">
	<p style="color:white;font-size:90px;font-weight:bold;font-family:lucida handwriting"></p>
		
	</div>
</div>
	
</body>
</html>
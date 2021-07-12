<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Dash Board</title>
<link rel="stylesheet" type="text/CSS" href="ssheet.css">
<script src="sign.js">

	
</script>
</head>
<body onload="getProfile()">

<%
	response.setHeader("Cache-Control","no-cache, no-store, must-revalidate");

	if(session.getAttribute("email")==null)
		response.sendRedirect("index.jsp");
	
	
%>

<ul id="navbar">
<li class="li"><a href="index.jsp">Log-out</a></li>
</ul>

<div class="row">
	<div class="column">
		<div id="myProfile">
			<p id="profileName">USER</p>
			<p class="profileElements">UserID : <span class="spanProfileElements" id="profileID"></span></p><br>
			<p class="profileElements">E-mail : <span class="spanProfileElements" id="profileEmail"></span></p><br>
			<p class="profileElements">Country : <span class="spanProfileElements" id="profileCountry"></span></p><br>
			<p class="profileElements">Matches Played : <span class="spanProfileElements" id="matchesPlayed"></span></p><br>
			<p class="profileElements">Matches Won : <span class="spanProfileElements" id="matchesWon"></span></p><br>
			<p class="profileElements">Matches Lost : <span class="spanProfileElements" id="matchesLost"></span></p><br>
			<p class="profileElements">Matches Draw : <span class="spanProfileElements" id="matchesDraw"></span></p>
		
		</div>		
	</div>
	
	<div class="column">
		<p id="playText">Start a Game</p>
		<input id="playButton" type="button" value="Play" onclick="openGame()">
		
	</div>


</div>




</body>
</html>
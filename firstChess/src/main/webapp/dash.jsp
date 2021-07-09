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
<body>

<%
	response.setHeader("Cache-Control","no-cache, no-store, must-revalidate");

	if(session.getAttribute("email")==null)
		response.sendRedirect("index.html");

%>

<form action="chessLoginServlet" method="post">
<input type="hidden" name="action" value="logout">
<input class="butn" type="submit" value="logout">
</form>
<br><br>
<input class="butn" type="button" value="play" onclick="openGame()">



</body>
</html>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@page import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Dash Board</title>
<link rel="stylesheet" type="text/CSS" href="ssheet.css">
<script src="sign.js"></script>
<script src="jsfile.js"></script>
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
		<div id="linkTabGroup" style="overflow:hidden;">
			<input id="tab1" class="tabLinks" type="button" value="Create" onclick="createGame()">
			<input id="tab2" class="tabLinks" type="button" value="Join" onclick="joinGame()">
			<input id="tab3" style="background-color:black;color:white" class="tabLinks" type="button" value="Spectate" onclick="spectateJoin()">
		</div>
		
		<div class="tabDiv" id="codeCreateDiv" style="display:none;overflow:hidden">
			<label id="createLabel">Click to Start</label>
			<input id="gameCodeButton" type="button" onclick="openGame()" value="Go">
		</div>
		
		<div class="tabDiv" id="codeDiv" style="display:none;overflow:hidden">
			<input id="gameCodeBox" onfocus="codeBoxFocus()" type="text" placeholder="Enter Code" name="gameCodeBox"><br>
			<label id="codeLabel" style="margin-left:70px;margin-top:10px;"></label>
			<input id="gameCodeButton" type="button" onclick="codeSubmit()" value="Go"> 
		</div>
		
		<div class="tabDiv" id="codeDiv2" style="overflow:hidden;">
			<input id="gameCodeBox1" onfocus="codeBoxFocus()" type="text" placeholder="Enter Code" name="gameCodeBox"><br>
			<label id="codeLabel1" style="margin-left:70px;margin-top:10px;"></label>
			<input id="gameCodeButton1" type="button" onclick="spectateGame()" value="Go"> 
		</div>
	</div>
	
	<div class="column">
		<div id="leaderBoardDiv">
			<p>Click below to see the LeaderBoard!!</p>
			<button id="leaderBoardButton" onclick="openLeaderBoard()">Click</button>
		</div>
	</div>

</div>

<div id="leaderBoardPage">
	<div id="leaderBox">
	<div>
			<p id="leaderBoardName">LEADER BOARD   <span id="leaderBoardXbutton" onclick="closeLeaderBoard()" >+</span></p><br>
	</div>
	<br>
			<div>
			<table id="leaderTable"> 
				<tr class="leaderBoardTDs">
				<td><b>RANK</b></td>
				<td><b>USERNAME</b></td>
				<td><b>USERID</b></td>
				</tr>
				<%
				try{
					
					Class.forName("com.mysql.cj.jdbc.Driver");
					Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/chessbase","root","Hr7301$%");
					Statement statement = con.createStatement();
					ResultSet rs = statement.executeQuery("select * from user order by matchesWon desc");
					int i=1;
					while(rs.next()){
						%><tr class="leaderBoardTDs">
							<td><% out.print(i++); %></td>
							<td><%= rs.getString(1) %></td>
							<td><%= rs.getString(8) %></td>
						  </tr>
						  <%
					}
				}catch(Exception e){
					e.printStackTrace();
				}
				%>
			
			</table>
			</div>
											
	</div>
</div>

</body>
</html>


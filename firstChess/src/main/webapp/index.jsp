<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" type="text/CSS" href="ssheet.css">
<title>Login page</title> 
<script src="sign.js">

</script>
</head>
<body>

<%
	
	session.removeAttribute("email");
	session.invalidate();

%>
	<div id="outerBox" >
		<div id="innerBox">
			<form onsubmit="return checkValidLogin()" action="chessLoginServlet" method="post">
				<label id="label7" style="font-size:20px" ></label><br>
				<input id="field1" onfocus="textfocus()" class="textarealogin" type="text" name="email" placeholder="E-mail"><br>
				<label id="label1" ></label><br>
				<input id="field2" onfocus="textfocus()" class="textarealogin" type="password"  name="password" placeholder="Password"><br>
				<label id="label2" ></label><br>
				<input class="loginButn" type="submit" value="LOGIN"><br>
				<input type="hidden" value="actualLogin" name="action">
				<p style="font-size:18px;text-align:center;padding-top:10px">Don't have an account? <span onclick="openSignUp()" id="signUpLink"><u>SignUp</u></span> </p>
			</form>
		</div>
	</div>
	
	<div id="outerBoxSignUp" >
		<div id="innerBoxSignUp">
			<form onsubmit="return signUpCheck()" action="chessLoginServlet" method="post">
				<input id="text1" onfocus="textfocus()" class ="textareasignup" type="text" placeholder="UserName" name="username"><br>
				<label id="label3" ></label><br>
				<input id="text2" onfocus="textfocus()" class ="textareasignup" type="text" placeholder="E-mail" name="email"><br>
				<label id="label4" ></label><br>
				<input id="text3" onfocus="textfocus()" class ="textareasignup" type="password" placeholder="Password" name="password"><br>
				<label id="label5" ></label><br>
				<input id="text5" onfocus="textfocus()" class ="textareasignup" type="password" placeholder="Confirm Password" name="conPassword"><br>
				<label id="label8" ></label><br>
				<select class="textareasignup" style="width:305px;" id="countries" onfocus="textfocus()" name="country">
				<option value="" selected hidden disabled>Select your country</option>
				<option value="India">India</option>
				<option value="United States of America">United States of America</option>
				<option value="Russia">Russia</option>
				<option value="China">China</option>
				<option value="Japan">Japan</option>
				<option value="France">France</option>
				<option value="Canada">Canada</option>
				<option value="England">England</option>
				<option value="Australia">Australia</option>
				<option value="Singapore">Singapore</option>
				</select>
				<label id="label6" ></label><br>
				<input class="signUpButn" type="button" value="back" onclick="closeSignUp()">
				<input class="signUpButn" type="submit" value="Sign Up"><br>
				<input type="hidden" value="actualSignUp" name="action">
			</form>
		</div>
	</div>
</body>
</html>
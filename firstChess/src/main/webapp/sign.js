/**
 * 
 */


function openSignUp(){
	cleanFields();
	textfocus();
	document.getElementById("outerBox").style.cssText="display:none";
	document.getElementById("outerBoxSignUp").style.cssText="display:flex";
}

function closeSignUp(){
	cleanFields();
	textfocus();
	document.getElementById("outerBoxSignUp").style.cssText="display:none";
	document.getElementById("outerBox").style.cssText="display:flex";
}

function textfocus(){
	document.getElementById("field1").style.cssText="border: 1px solid rgb(70, 172, 255);"
	document.getElementById("field2").style.cssText="border: 1px solid rgb(70, 172, 255);"
	document.getElementById("text1").style.cssText="border: 1px solid rgb(70, 172, 255);"
	document.getElementById("text2").style.cssText="border: 1px solid rgb(70, 172, 255);"
	document.getElementById("text3").style.cssText="border: 1px solid rgb(70, 172, 255);"
	document.getElementById("text5").style.cssText="border: 1px solid rgb(70, 172, 255);"
	document.getElementById("countries").style.cssText="border: 1px solid rgb(70, 172, 255);"
	document.getElementById("label1").innerHTML="";
	document.getElementById("label2").innerHTML="";
	document.getElementById("label3").innerHTML="";
	document.getElementById("label4").innerHTML="";
	document.getElementById("label5").innerHTML="";
	document.getElementById("label6").innerHTML="";
	document.getElementById("label7").innerHTML="";
	document.getElementById("label8").innerHTML="";
}

function cleanFields(){
	document.getElementById("field1").value="";
	document.getElementById("field2").value="";
	document.getElementById("text1").value="";
	document.getElementById("text2").value="";
	document.getElementById("text3").value="";
	document.getElementById("text5").value="";
}


function signUpCheck(){
	var text1 = document.getElementById("text1");
	var text2 = document.getElementById("text2");
	var text3 = document.getElementById("text3");
	var text5 = document.getElementById("text5");
	var dropdown = document.getElementById("countries");
	if(text1.value.trim()=="" || text2.value.trim()=="" || text3.value.trim()=="" || dropdown.options[dropdown.selectedIndex].value == "" || text3.value.trim() != text5.value.trim()){
		if(text1.value.trim()==""){
			text1.style.cssText="border:2px solid red;";
			document.getElementById("label3").innerHTML="Field cannot be Empty";
		}
		if(text2.value.trim()==""){
			text2.style.cssText="border:2px solid red;";
			document.getElementById("label4").innerHTML="Field cannot be Empty";
		}
		if(text3.value.trim()==""){
			text3.style.cssText="border:2px solid red;";
			document.getElementById("label5").innerHTML="Field cannot be Empty";
		}
		if(text5.value.trim()==""){
			text5.style.cssText="border:2px solid red;";
			document.getElementById("label8").innerHTML="Field cannot be Empty";
		}
		if(text3.value.trim() != text5.value.trim()){
			text3.style.cssText="border:2px solid red;";
			text5.style.cssText="border:2px solid red;";
			document.getElementById("label5").innerHTML="Passwords not matching";
		}
		if(dropdown.options[dropdown.selectedIndex].value == ""){
			dropdown.style.cssText="border:2px solid red;";
			document.getElementById("label6").innerHTML="Select your Country";
		}
		return false;
	}else{
		
		var v=false;
		var xhttp = new XMLHttpRequest();
		
		xhttp.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				var res = this.responseText;
				
				if(res=="false"){
					text2.style.cssText="border:2px solid red;";
					document.getElementById("label4").innerHTML="E-mail ID already exists";
					v=false;
				}else
					v=true;
			}
		};
		
		xhttp.open("POST","chessLoginServlet?email="+document.getElementById("text2").value+"&action="+"signUpPriorCheck",false);
		xhttp.send();
		
		if(v==false)
			return false;
		else
			return true;		
		
	}
		
}


function checkValidLogin(){
	var field1 = document.getElementById("field1");
	var field2 = document.getElementById("field2");
	if(field1.value.trim()=="" || field2.value.trim()==""){
		if(field1.value.trim()==""){
			field1.style.cssText="border:2px solid red;";
			document.getElementById("label1").innerHTML="Field cannot be Empty"
		}
		if(field2.value.trim()==""){
			field2.style.cssText="border:2px solid red;";
			document.getElementById("label2").innerHTML="Field cannot be Empty"
		}
		return false;
	}else{
		
		var v=false;
		var xhttp = new XMLHttpRequest();
		
		xhttp.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				var res = this.responseText;
				
				if(res=="false"){
					document.getElementById("label7").innerHTML="Invalid E-mail/Password";
					v=false;
				}else
					v=true;
			}
		};
		
		xhttp.open("POST","chessLoginServlet?email="+document.getElementById("field1").value+"&password="+document.getElementById("field2").value+"&action="+"loginPriorCheck",false);
		xhttp.send();
		
		document.getElementById("field2").value="";
		
		if(v==false)
			return false;
		else
			return true;
	}
}

function openGame(){
	var gameCode = document.getElementById("codeSpan").innerHTML;
	localStorage.setItem("gameCode",gameCode);
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			window.location.href="board.jsp";
		}
	};
	xhttp.open("POST","chessLoginServlet?gameCode="+gameCode+"&action="+"registerGame");
	xhttp.send();
}


function getProfile(){
	var xhttp = new XMLHttpRequest();
	var response;
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			response = this.responseText;
			var json = JSON.parse(response);
			document.getElementById("profileID").innerHTML = json.userID;
			document.getElementById("profileEmail").innerHTML = json.email;
			document.getElementById("profileCountry").innerHTML = json.country;
			document.getElementById("matchesPlayed").innerHTML = json.matchesPlayed;
			document.getElementById("matchesWon").innerHTML = json.matchesWon;
			document.getElementById("matchesLost").innerHTML = json.matchesLost;
			document.getElementById("matchesDraw").innerHTML = json.matchesDraw;
			document.getElementById("profileName").innerHTML = json.username;
		}
	};
	xhttp.open("POST","chessLoginServlet?action="+"getProfile");
	xhttp.send();
}

function codeSubmit(){
	var box = document.getElementById("gameCodeBox");
	if(box.value.trim()==""){
		box.style.cssText="border:2px solid red;";
		document.getElementById("codeLabel").innerHTML = "Field cannot be Empty";
		return false;
	}
	localStorage.setItem("gameCode",box.value);
	document.getElementById("gameCodeBox").value="";
	window.location.href="board.jsp";
	
}

function codeBoxFocus(){
	document.getElementById("gameCodeBox").style.cssText="border: 1px solid rgb(70, 172, 255);";
	document.getElementById("codeLabel").innerHTML="";
	document.getElementById("gameCodeBox1").style.cssText="border: 1px solid rgb(70, 172, 255);";
	document.getElementById("codeLabel1").innerHTML="";
}

function createGame(){
	document.getElementById("tab1").style.cssText = "background-color:black;color:white";
	document.getElementById("tab2").style.cssText = "background-color:rgb(52, 183, 255);color:black";
	document.getElementById("tab3").style.cssText = "background-color:rgb(52, 183, 255);color:black";
	if("" + (getComputedStyle(document.getElementById("codeCreateDiv")).display) == "none"){
		document.getElementById("codeDiv").style.cssText = "display:none";
		document.getElementById("codeDiv2").style.cssText = "display:none";
		document.getElementById("codeCreateDiv").style.cssText = "display:block";
		var rand = Math.floor(1 + (Math.random() * 100000));
		document.getElementById("codeSpan").innerHTML = rand;
	}
}

function spectateJoin(){
	document.getElementById("tab3").style.cssText = "background-color:black;color:white";
	document.getElementById("tab2").style.cssText = "background-color:rgb(52, 183, 255);color:black";
	document.getElementById("tab1").style.cssText = "background-color:rgb(52, 183, 255);color:black";
	codeBoxFocus();
	document.getElementById("gameCodeBox1").value="";
	document.getElementById("codeCreateDiv").style.cssText = "display:none";
	document.getElementById("codeDiv").style.cssText = "display:none";
	document.getElementById("codeDiv2").style.cssText = "display:block";
	codeBoxFocus();
}

function joinGame(){
	document.getElementById("tab2").style.cssText = "background-color:black;color:white";
	document.getElementById("tab1").style.cssText = "background-color:rgb(52, 183, 255);color:black";
	document.getElementById("tab3").style.cssText = "background-color:rgb(52, 183, 255);color:black";
	codeBoxFocus();
	document.getElementById("gameCodeBox").value="";
	document.getElementById("codeCreateDiv").style.cssText = "display:none";
	document.getElementById("codeDiv").style.cssText = "display:block";
	document.getElementById("codeDiv2").style.cssText = "display:none";
}


function spectateGame(){
	var box = document.getElementById("gameCodeBox1");
	if(box.value.trim()==""){
		box.style.cssText="border:2px solid red;";
		document.getElementById("codeLabel1").innerHTML = "Field cannot be Empty";
		return false;
	}
	localStorage.setItem("gameCode",box.value);
	document.getElementById("gameCodeBox1").value="";
	window.location.href="spectateBoard.jsp";
}

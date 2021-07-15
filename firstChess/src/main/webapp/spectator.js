/**
 * 
 */


function spectatorBoardPos(){
	
	var gameCode = localStorage.getItem("gameCode");
	var xhttp = new XMLHttpRequest();
	var indx;
	var ar= ["00","01","02","03","04","05","06","07",
			 "10","11","12","13","14","15","16","17",
			 "20","21","22","23","24","25","26","27",
			 "30","31","32","33","34","35","36","37",
			 "40","41","42","43","44","45","46","47",
			 "50","51","52","53","54","55","56","57",
			 "60","61","62","63","64","65","66","67",
			 "70","71","72","73","74","75","76","77"];
	xhttp.onreadystatechange = function(){
		if(this.readyState = 4 && this.status == 200){
			var resp = this.responseText;
			var arr = resp.split(",");
			console.log(arr);
			for(let i=0;i<64;i++){
				
					if(arr[i]=="we1" || arr[i]=="we2"){
						document.getElementById(ar[i]).innerHTML = '\u2656';
					}else if(arr[i] == "wh"){
						document.getElementById(ar[i]).innerHTML = '\u2658';
					}else if(arr[i] == "wm"){
						document.getElementById(ar[i]).innerHTML = '\u2657';
					}else if(arr[i] == "wq"){
						document.getElementById(ar[i]).innerHTML = '\u2655';
					}else if(arr[i] == "wk"){
						document.getElementById(ar[i]).innerHTML = '\u2654';
					}else if(arr[i] == "wp"){
						document.getElementById(ar[i]).innerHTML = '\u2659';
					}else if(arr[i] == "be1" || arr[i] == "be2"){
						document.getElementById(ar[i]).innerHTML = '\u265C';
					}else if(arr[i] == "bh"){
						document.getElementById(ar[i]).innerHTML = '\u265E';
					}else if(arr[i] == "bm"){
						document.getElementById(ar[i]).innerHTML = '\u265D';
					}else if(arr[i] == "bq"){
						document.getElementById(ar[i]).innerHTML = '\u265B';
					}else if(arr[i] == "bk"){
						document.getElementById(ar[i]).innerHTML = '\u265A';
					}else if(arr[i] == "bp"){
						document.getElementById(ar[i]).innerHTML = '\u265F';
					}
				
			}
	
		}
	};
	xhttp.open("POST","chessLoginServlet?action="+"getSpectatorBoardPos"+"&gameCode="+gameCode,false);
	xhttp.send();
}

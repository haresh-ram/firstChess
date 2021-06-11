function onhover(id){
	let v1 = document.getElementById(id).innerHTML;
	if(v1.length!==0)
	document.getElementById(id).style.cssText="transition :0.25s;background-color : gray;transform : scale(1.20)";
	document.getElementById(id).style.cursor = "pointer";
}

function onout(id){
	document.getElementById(id).style.cssText="transition :0.25s;transform : scale(1)";
}


var v="";
var id="";
var whit=0;
var t;
var w1=0;
var b1=0;
var str="";
var idstr="";
var p;
var val;
var pwx1;
var pwx2;
var pwy1;
var pwy2;
var pt;
var n;
var a,b;
var x1,y1,x2,y2;
var mstr="";
var vstr="";
var wpm = [0,0,0,0,0,0,0,0];
var bpm = [0,0,0,0,0,0,0,0];

var ch = [['w','w','w','w','w','w','w','w',],
		  ['w','w','w','w','w','w','w','w',],
		  ['0','0','0','0','0','0','0','0',],
		  ['0','0','0','0','0','0','0','0',],
		  ['0','0','0','0','0','0','0','0',],
		  ['0','0','0','0','0','0','0','0',],
		  ['b','b','b','b','b','b','b','b',],
		  ['b','b','b','b','b','b','b','b',]];


function fun(el,i){

	init();
	el.style.cssText="cursor : pointer";
		
	if(whit==0){
		if(v==""){
			if(i.charAt(2)!='b'){
				v=el.innerHTML;
				id=i;
				
				if(i.charAt(3)=='p'){
					p=1;
					pOptions(i);
				}else if(i.charAt(3)=='e'){
					p=2;
					rOptions(i);
				}else if(i.charAt(3)=='h'){
					p=3;
					hOptions(i);
				}else if(i.charAt(3)=='m'){
					p=4;
					mOptions(i);
				}else if(i.charAt(3)=='q'){
					p=5;
					qOptions(i);
				}else if(i.charAt(3)=='k'){
					p=6;
					kOptions(i);
				}
				
			}
		}else if(i.charAt(2)=='w'){
			v=el.innerHTML;
			id=i;
			
			if(i.charAt(3)=='p'){
					p=1;
					pOptions(i);
				}else if(i.charAt(3)=='e'){
					p=2;
					rOptions(i);
				}else if(i.charAt(3)=='h'){
					p=3;
					hOptions(i);
				}else if(i.charAt(3)=='m'){
					p=4;
					mOptions(i);
				}else if(i.charAt(3)=='q'){
					p=5;
					qOptions(i);
				}else if(i.charAt(3)=='k'){
					p=6;
					kOptions(i);
				}
		}
		else if(id!=i && i.charAt(2)!='w'){
		
			if(p==1){
				val = pawn(i);
				if(val==true){
					change(el,i);
					whit=1;
					p=0;
				}
			}else if(p==2){
				val = rook(i);
				if(val==true){
					change(el,i);
					whit=1;
					p=0;
				}
			}else if(p==3){
				val = horse(i);
				if(val==true){
					change(el,i);
					whit=1;
					p=0;
				}
			}else if(p==4){
				val = bishop(i);
				if(val==true){
					change(el,i);
					whit=1;
					p=0;
				}
			}else if(p==5){
				val = queen(i);
				if(val==true){
					change(el,i);
					whit=1;
					p=0;
				}
			}else if(p==6){
				val = king(i);
				if(val==true){
					change(el,i);
					whit=1;
					p=0;
				}
			}
			
			
		}
		
	}else{	
		if(v==""){
			if(i.charAt(2)!='w'){
				v=el.innerHTML;
				id=i;
				
				if(i.charAt(3)=='p'){
					p=1;
					pOptions(i);
				}else if(i.charAt(3)=='e'){
					p=2;
					rOptions(i);
				}else if(i.charAt(3)=='h'){
					p=3;
					hOptions(i);
				}else if(i.charAt(3)=='m'){
					p=4;
					mOptions(i);
				}else if(i.charAt(3)=='q'){
					p=5;
					qOptions(i);
				}else if(i.charAt(3)=='k'){
					p=6;
					kOptions(i);
				}
				
			}	
		}else if(i.charAt(2)=='b'){
			v=el.innerHTML;
			id=i;
			
			if(i.charAt(3)=='p'){
					p=1;
					pOptions(i);
				}else if(i.charAt(3)=='e'){
					p=2;
					rOptions(i);
				}else if(i.charAt(3)=='h'){
					p=3;
					hOptions(i);
				}else if(i.charAt(3)=='m'){
					p=4;
					mOptions(i);
				}else if(i.charAt(3)=='q'){
					p=5;
					qOptions(i);
				}else if(i.charAt(3)=='k'){
					p=6;
					kOptions(i);
				}
				
		}else if(id!=i && i.charAt(2)!='b'){			
			
			if(p==1){
				val = pawn(i);
				if(val==true){
					change(el,i);
					whit=0;
					p=0;
				}
			}else if(p==2){
				val = rook(i);
				if(val==true){
					change(el,i);
					whit=0;
					p=0;
				}
			}else if(p==3){
				val = horse(i);
				if(val==true){
					change(el,i);
					whit=0;
					p=0;
				}
			}else if(p==4){
				val = bishop(i);
				if(val==true){
					change(el,i);
					whit=0;
					p=0;
				}
			}else if(p==5){
				val = queen(i);
				if(val==true){
					change(el,i);
					whit=0;
					p=0;
				}
			}else if(p==6){
				val = king(i);
				if(val==true){
					change(el,i);
					whit=0;
					p=0;
				}
			}			
			
		}
	}
}
			
			
function pawn(i){
	pwx1 = Number(id.charAt(0));
	pwy1 = Number(id.charAt(1));
	pwx2 = Number(i.charAt(0));
	pwy2 = Number(i.charAt(1));
	
	pt = Number(id.charAt(1));
	
	if(whit==0){
		if((pwx1 + 1 == pwx2 && pwy1 + 1 == pwy2) || (pwx1 + 1 == pwx2 && pwy1 - 1 == pwy2)){
			if(i.charAt(2)=='b'){
					ch[pwx1][pwy1]='0';
					ch[pwx2][pwy2]='w';					
					return true;
				}
		}else if(pwx1 + 2 == pwx2 && pwy1 == pwy2 && ch[(pwx1 + 2)][pwy1]=='0'){
			if(id.charAt(4)=='0'){
				ch[pwx1][pwy1]='0';
				ch[pwx2][pwy2]='w';	
				return true;
			}
		}else if(pwx1 + 1 == pwx2 && pwy1 == pwy2 && ch[(pwx1 + 1)][pwy1]=='0'){
			ch[pwx1][pwy1]='0';
			ch[pwx2][pwy2]='w';
			
			return true;
		}
	}else{
		if((pwx1 - 1 == pwx2 && pwy1 - 1 == pwy2) || (pwx1 - 1 == pwx2 && pwy1 + 1 == pwy2)){
			if(i.charAt(2)=='w'){
					ch[pwx1][pwy1]='0';
					ch[pwx2][pwy2]='b';
					return true;
				}
		}else if(pwx1 - 2 == pwx2 && pwy1 == pwy2 && i.charAt(2)!='w'){
			if(id.charAt(4)=='0'){
				ch[pwx1][pwy1]='0';
				ch[pwx2][pwy2]='b';
				return true;
			}
		}else if(pwx1 - 1 == pwx2 && pwy1 == pwy2 && i.charAt(2)!='w'){
			ch[pwx1][pwy1]='0';
			ch[pwx2][pwy2]='b';
			return true;
		}
	}
}
			

function rook(i){
	pwx1 = Number(id.charAt(0));
	pwy1 = Number(id.charAt(1));
	pwx2 = Number(i.charAt(0));
	pwy2 = Number(i.charAt(1));
	
	
	if(pwx1 < pwx2){
		x1 = pwx1;
		x2 = pwx2;
	}else{
		x2 = pwx1;
		x1 = pwx2;
	}
	
	if(pwy1 < pwy2){
		y1 = pwy1;
		y2 = pwy2;
	}else{
		y2 = pwy1;
		y1 = pwy2;
	}
	
	if(pwx1 == pwx2){
		for(n = y1; n<y2; n++){
			if(n==y1){
				continue;
			}else if(ch[pwx1][n]!='0'){
				return false;
			}			
		}
		ch[pwx1][pwy1]='0';
		if(whit==0)
		ch[pwx2][pwy2]='w';
		else
		ch[pwx2][pwy2]='b';
		return true;
	}else if(pwy1 == pwy2){
		for(n = x1; n<x2; n++){
			if(n==x1){
				continue;
			}else if(ch[n][pwy1]!='0'){
				return false;
			}
			
		}
		ch[pwx1][pwy1]='0';
		if(whit==0)
		ch[pwx2][pwy2]='w';
		else
		ch[pwx2][pwy2]='b';
		return true;
	}
	
}

function horse(i){
	pwx1 = Number(id.charAt(0));
	pwy1 = Number(id.charAt(1));
	pwx2 = Number(i.charAt(0));
	pwy2 = Number(i.charAt(1));
	
	
	if((pwx1 + 2 == pwx2 && pwy1 + 1 == pwy2) || (pwx1 + 2 == pwx2 && pwy1 - 1 == pwy2) || (pwx1 + 1 == pwx2 && pwy1 + 2 == pwy2) || (pwx1 + 1 == pwx2 && pwy1 - 2 == pwy2) || (pwx1 - 1 == pwx2 && pwy1 - 2 == pwy2) || (pwx1 - 1 == pwx2 && pwy1 + 2 == pwy2) || (pwx1 - 2 == pwx2 && pwy1 + 1 == pwy2) || (pwx1 - 2 == pwx2 && pwy1 - 1 == pwy2)){
		
		if(whit==0){
			ch[pwx1][pwy1]='0';
			ch[pwx2][pwy2]='w';
		}else{
			ch[pwx1][pwy1]='0';
			ch[pwx2][pwy2]='b';
		}
		return true;
	}
}

function bishop(i){
	pwx1 = Number(id.charAt(0));
	pwy1 = Number(id.charAt(1));
	pwx2 = Number(i.charAt(0));
	pwy2 = Number(i.charAt(1));
	
	if((Math.abs(pwx1 - pwx2)) == (Math.abs(pwy1 - pwy2))){
	
		if(pwx1 < pwx2){
				x1 = pwx1;
				x2 = pwx2;
			}else{
				x2 = pwx1;
				x1 = pwx2;
			}
			
			if(pwy1 < pwy2){
				y1 = pwy1;
				y2 = pwy2;
			}else{
				y2 = pwy1;
				y1 = pwy2;
			}			
		
		if((pwx1 < pwx2 && pwy1 < pwy2) || (pwx1 > pwx2 && pwy1 > pwy2)){
			
			for(a=x1, b=y1; a<x2; a++,b++){
				if(a==x1)
				continue;
				else if(ch[a][b]!='0'){
					return false;
				}
			}
			ch[pwx1][pwy1]='0';
			if(whit==0)
			ch[pwx2][pwy2]='w';
			else
			ch[pwx2][pwy2]='b';
			return true;
			
		}else if((pwx1 < pwx2 && pwy1 > pwy2) || (pwx1 > pwx2 && pwy1 < pwy2)){
			
			for(a=x1, b=y2; a<x2; a++,b--){
				if(a==x1)
				continue;
				else if(ch[a][b]!='0'){
					return false;
				}
			}
			ch[pwx1][pwy1]='0';
			if(whit==0)
			ch[pwx2][pwy2]='w';
			else
			ch[pwx2][pwy2]='b';
			return true;
			
		}
	}
	
}

function queen(i){
	pwx1 = Number(id.charAt(0));
	pwy1 = Number(id.charAt(1));
	pwx2 = Number(i.charAt(0));
	pwy2 = Number(i.charAt(1));
	
	if(pwx1 < pwx2){
		x1 = pwx1;
		x2 = pwx2;
	}else{
		x2 = pwx1;
		x1 = pwx2;
	}
	
	if(pwy1 < pwy2){
		y1 = pwy1;
		y2 = pwy2;
	}else{
		y2 = pwy1;
		y1 = pwy2;
	}
	
	if(pwx1 == pwx2){
		for(n = y1; n<y2; n++){
			if(n==y1){
				continue;
			}else if(ch[pwx1][n]!='0'){
				return false;
			}			
		}
		ch[pwx1][pwy1]='0';
		if(whit==0)
		ch[pwx2][pwy2]='w';
		else
		ch[pwx2][pwy2]='b';
		return true;
	}else if(pwy1 == pwy2){
		for(n = x1; n<x2; n++){
			if(n==x1){
				continue;
			}else if(ch[n][pwy1]!='0'){
				return false;
			}
			
		}
		ch[pwx1][pwy1]='0';
		if(whit==0)
		ch[pwx2][pwy2]='w';
		else
		ch[pwx2][pwy2]='b';
		return true;
		
	}else if((Math.abs(pwx1 - pwx2)) == (Math.abs(pwy1 - pwy2))){	
				
		
		if((pwx1 < pwx2 && pwy1 < pwy2) || (pwx1 > pwx2 && pwy1 > pwy2)){
			
			for(a=x1, b=y1; a<x2; a++,b++){
				if(a==x1)
				continue;
				else if(ch[a][b]!='0'){
					return false;
				}
			}
			ch[pwx1][pwy1]='0';
			if(whit==0)
			ch[pwx2][pwy2]='w';
			else
			ch[pwx2][pwy2]='b';
			return true;
			
		}else if((pwx1 < pwx2 && pwy1 > pwy2) || (pwx1 > pwx2 && pwy1 < pwy2)){
			
			for(a=x1, b=y2; a<x2; a++,b--){
				if(a==x1)
				continue;
				else if(ch[a][b]!='0'){
					return false;
				}
			}
			ch[pwx1][pwy1]='0';
			if(whit==0)
			ch[pwx2][pwy2]='w';
			else
			ch[pwx2][pwy2]='b';
			return true;
			
		}
	}
}

function king(i){
	pwx1 = Number(id.charAt(0));
	pwy1 = Number(id.charAt(1));
	pwx2 = Number(i.charAt(0));
	pwy2 = Number(i.charAt(1));
	
	if((pwx1 + 1 == pwx2 && pwy1 == pwy2) || (pwx1 - 1 == pwx2 && pwy1 == pwy2) || (pwy1 + 1 == pwy2 && pwx1 == pwx2) || (pwy1 - 1 == pwy2 && pwx1 == pwx2) || (pwx1 + 1 == pwx2 && pwy1 + 1 == pwy2) || (pwx1 - 1 == pwx2 && pwy1 + 1 == pwy2) || (pwx1 + 1 == pwx2 && pwy1 - 1 == pwy2) || (pwx1 - 1 == pwx2 && pwy1 - 1 == pwy2)){
		if(whit==0){
			ch[pwx1][pwy1]='0';
			ch[pwx2][pwy2]='w';
		}else{
			ch[pwx1][pwy1]='0';
			ch[pwx2][pwy2]='b';
		}
		return true;
	}
}		
			
function change(el,i){
	
	
			
			el.innerHTML=v;
			document.getElementById(id).innerHTML="";
			v="";
			
			str=""+i.charAt(0)+i.charAt(1)+ id.slice(2);
			idstr=""+id.charAt(0)+id.charAt(1);
			document.getElementById(id).setAttribute("id",idstr);
			document.getElementById(i).setAttribute("id",str);
			
			if(str.charAt(3)=='p' && str.charAt(4)=='0'){
				vstr=""+str.slice(0,4)+"1";
				document.getElementById(str).setAttribute("id",vstr);
			}
			
			str="";idstr="";
			id="";			
			
}		

function pOptions(i){
	pwx1 = Number(i.charAt(0));
	pwy1 = Number(i.charAt(1));
	
	if(whit==0){
		if(i.charAt(4)=='0'){
			
			for(n = pwx1 + 1; n <= (pwx1 + 2); n++){
				if(ch[n][pwy1]!='0'){
					break;
				}
				mstr = ""+n+pwy1;
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}			
		}else if(ch[pwx1 + 1][pwy1]=='0'){
			mstr = ""+(pwx1+1)+pwy1;
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
		}
		
		if(ch[pwx1 + 1][pwy1 + 1]=='b'){
			mstr = ""+(pwx1+1)+(pwy1+1);
			document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
		}
		if(ch[pwx1 + 1][pwy1 - 1]=='b'){
			mstr = ""+(pwx1+1)+(pwy1-1);
			document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
		}
	}else{
		if(i.charAt(4)=='0'){
			
			for(n = pwx1 - 1; n >= (pwx1 - 2); n--){
				if(ch[n][pwy1]!='0'){
					break;
				}
				mstr = ""+n+pwy1;
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}			
		}else if(ch[pwx1 - 1][pwy1]=='0'){
			mstr = ""+(pwx1-1)+pwy1;
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
		}
		
		if(ch[pwx1 - 1][pwy1 + 1]=='w'){
			mstr = ""+(pwx1-1)+(pwy1+1);
			document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
		}
		if(ch[pwx1 - 1][pwy1 - 1]=='w'){
			mstr = ""+(pwx1-1)+(pwy1-1);
			document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
		}
	}
	
}

function init(){
	 var lp=document.getElementsByClassName("one");
	 
	 for(n=0;n<lp.length;n++){
	 	lp[n].style.cssText="color : initial";
	 }
	 
	 var dp=document.getElementsByClassName("two");
	 
	 for(n=0;n<dp.length;n++){
	 	dp[n].style.cssText="color : initial";
	 }
	 
	 
	 
	
}

function hOptions(i){
	pwx1 = Number(i.charAt(0));
	pwy1 = Number(i.charAt(1));
	
	 
	
	if(whit==0){
		if((pwx1 + 2) <=7 && (pwy1 + 1) <=7){
			if(ch[(pwx1 + 2)][(pwy1 + 1)]!='w'){
				mstr = ""+(pwx1 + 2)+(pwy1 + 1);
				if(ch[(pwx1 + 2)][(pwy1 + 1)]=='b')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 + 2) <=7 && (pwy1 - 1) >=0){
			if(ch[(pwx1 + 2)][(pwy1 - 1)]!='w'){
				mstr = ""+(pwx1 + 2)+(pwy1 - 1);
				if(ch[(pwx1 + 2)][(pwy1 - 1)]=='b')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 + 1) <=7 && (pwy1 + 2) <=7){
			if(ch[(pwx1 + 1)][(pwy1 + 2)]!='w'){
				mstr = ""+(pwx1 + 1)+(pwy1 + 2);
				if(ch[(pwx1 + 1)][(pwy1 + 2)]=='b')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 + 1) <=7 && (pwy1 - 2) >=0){
			if(ch[(pwx1 + 1)][(pwy1 - 2)]!='w'){
				mstr = ""+(pwx1 + 1)+(pwy1 - 2);
				if(ch[(pwx1 + 1)][(pwy1 - 2)]=='b')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 - 1) >=0 && (pwy1 - 2) >=0){
			if(ch[(pwx1 - 1)][(pwy1 - 2)]!='w'){
				mstr = ""+(pwx1 - 1)+(pwy1 - 2);
				if(ch[(pwx1 - 1)][(pwy1 - 2)]=='b')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 - 1) >=0 && (pwy1 + 2) <=7){
			if(ch[(pwx1 - 1)][(pwy1 + 2)]!='w'){
				mstr = ""+(pwx1 - 1)+(pwy1 + 2);
				if(ch[(pwx1 - 1)][(pwy1 + 1)]=='b')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 - 2) >=0 && (pwy1 + 1) <=7){
			if(ch[(pwx1 - 2)][(pwy1 + 1)]!='w'){
				mstr = ""+(pwx1 - 2)+(pwy1 + 1);
				if(ch[(pwx1 - 2)][(pwy1 + 1)]=='b')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 - 2) >=0 && (pwy1 - 1) >=0){
			if(ch[(pwx1 - 2)][(pwy1 - 1)]!='w'){
				mstr = ""+(pwx1 - 2)+(pwy1 - 1);
				if(ch[(pwx1 - 2)][(pwy1 - 1)]=='b')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
	}else{
		if((pwx1 + 2) <=7 && (pwy1 + 1) <=7){
			if(ch[(pwx1 + 2)][(pwy1 + 1)]!='b'){
				mstr = ""+(pwx1 + 2)+(pwy1 + 1);
				if(ch[(pwx1 + 2)][(pwy1 + 1)]=='w')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 + 2) <=7 && (pwy1 - 1) >=0){
			if(ch[(pwx1 + 2)][(pwy1 - 1)]!='b'){
				mstr = ""+(pwx1 + 2)+(pwy1 - 1);
				if(ch[(pwx1 + 2)][(pwy1 - 1)]=='w')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 + 1) <=7 && (pwy1 + 2) <=7){
			if(ch[(pwx1 + 1)][(pwy1 + 2)]!='b'){
				mstr = ""+(pwx1 + 1)+(pwy1 + 2);
				if(ch[(pwx1 + 1)][(pwy1 + 2)]=='w')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 + 1) <=7 && (pwy1 - 2) >=0){
			if(ch[(pwx1 + 1)][(pwy1 - 2)]!='b'){
				mstr = ""+(pwx1 + 1)+(pwy1 - 2);
				if(ch[(pwx1 + 1)][(pwy1 - 2)]=='w')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 - 1) >=0 && (pwy1 - 2) >=0){
			if(ch[(pwx1 - 1)][(pwy1 - 2)]!='b'){
				mstr = ""+(pwx1 - 1)+(pwy1 - 2);
				if(ch[(pwx1 - 1)][(pwy1 - 2)]=='w')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 - 1) >=0 && (pwy1 + 2) <=7){
			if(ch[(pwx1 - 1)][(pwy1 + 2)]!='b'){
				mstr = ""+(pwx1 - 1)+(pwy1 + 2);
				if(ch[(pwx1 - 1)][(pwy1 + 2)]=='w')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 - 2) >=0 && (pwy1 + 1) <=7){
			if(ch[(pwx1 - 2)][(pwy1 + 1)]!='b'){
				mstr = ""+(pwx1 - 2)+(pwy1 + 1);
				if(ch[(pwx1 - 2)][(pwy1 + 1)]=='w')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 - 2) >=0 && (pwy1 - 1) >=0){
			if(ch[(pwx1 - 2)][(pwy1 - 1)]!='b'){
				mstr = ""+(pwx1 - 2)+(pwy1 - 1);
				if(ch[(pwx1 - 2)][(pwy1 - 1)]=='w')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
	}
}


function kOptions(i){
	pwx1 = Number(i.charAt(0));
	pwy1 = Number(i.charAt(1));
	
	if(whit==0){
	
		if(pwx1 + 1 <=7){
			if(ch[(pwx1 + 1)][(pwy1)]!='w'){
				mstr = ""+(pwx1 + 1)+(pwy1);
				if(ch[(pwx1 + 1)][(pwy1)]=='b')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwx1 - 1 >=0){
			if(ch[(pwx1 - 1)][(pwy1)]!='w'){
				mstr = ""+(pwx1 - 1)+(pwy1);
				if(ch[(pwx1 - 1)][(pwy1)]=='b')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwy1 + 1 <=7){
			if(ch[(pwx1)][(pwy1 + 1)]!='w'){
				mstr = ""+(pwx1)+(pwy1 + 1);
				if(ch[(pwx1)][(pwy1 + 1)]=='b')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwy1 - 1 >=0){
			if(ch[(pwx1)][(pwy1 - 1)]!='w'){
				mstr = ""+(pwx1)+(pwy1 - 1);
				if(ch[(pwx1)][(pwy1 - 1)]=='b')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwx1 +1 <=7 && pwy1 + 1 <= 7){
			if(ch[(pwx1 + 1)][(pwy1 + 1)]!='w'){
				mstr = ""+(pwx1 + 1)+(pwy1 + 1);
				if(ch[(pwx1 + 1)][(pwy1 + 1)]=='b')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwx1 -1 >=0 && pwy1 + 1 <= 7){
			if(ch[(pwx1 - 1)][(pwy1 + 1)]!='w'){
				mstr = ""+(pwx1 - 1)+(pwy1 + 1);
				if(ch[(pwx1 - 1)][(pwy1 + 1)]=='b')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwx1 +1 <=7 && pwy1 - 1 >=0){
			if(ch[(pwx1 + 1)][(pwy1 - 1)]!='w'){
				mstr = ""+(pwx1 + 1)+(pwy1 - 1);
				if(ch[(pwx1 + 1)][(pwy1 - 1)]=='b')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwx1 -1 >=0 && pwy1 - 1 >=0){
			if(ch[(pwx1 - 1)][(pwy1 - 1)]!='w'){
				mstr = ""+(pwx1 - 1)+(pwy1 - 1);
				if(ch[(pwx1 - 1)][(pwy1 - 1)]=='b')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
	}else{
				if(pwx1 + 1 <=7){
			if(ch[(pwx1 + 1)][(pwy1)]!='b'){
				mstr = ""+(pwx1 + 1)+(pwy1);
				if(ch[(pwx1 + 1)][(pwy1)]=='w')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwx1 - 1 >=0){
			if(ch[(pwx1 - 1)][(pwy1)]!='b'){
				mstr = ""+(pwx1 - 1)+(pwy1);
				if(ch[(pwx1 - 1)][(pwy1)]=='w')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwy1 + 1 <=7){
			if(ch[(pwx1)][(pwy1 + 1)]!='b'){
				mstr = ""+(pwx1)+(pwy1 + 1);
				if(ch[(pwx1)][(pwy1 + 1)]=='w')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwy1 - 1 >=0){
			if(ch[(pwx1)][(pwy1 - 1)]!='b'){
				mstr = ""+(pwx1)+(pwy1 - 1);
				if(ch[(pwx1)][(pwy1 - 1)]=='w')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwx1 +1 <=7 && pwy1 + 1 <= 7){
			if(ch[(pwx1 + 1)][(pwy1 + 1)]!='b'){
				mstr = ""+(pwx1 + 1)+(pwy1 + 1);
				if(ch[(pwx1 + 1)][(pwy1 + 1)]=='w')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwx1 -1 >=0 && pwy1 + 1 <= 7){
			if(ch[(pwx1 - 1)][(pwy1 + 1)]!='b'){
				mstr = ""+(pwx1 - 1)+(pwy1 + 1);
				if(ch[(pwx1 - 1)][(pwy1 + 1)]=='w')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwx1 +1 <=7 && pwy1 - 1 >=0){
			if(ch[(pwx1 + 1)][(pwy1 - 1)]!='b'){
				mstr = ""+(pwx1 + 1)+(pwy1 - 1);
				if(ch[(pwx1 + 1)][(pwy1 - 1)]=='w')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwx1 -1 >=0 && pwy1 - 1 >=0){
			if(ch[(pwx1 - 1)][(pwy1 - 1)]!='b'){
				mstr = ""+(pwx1 - 1)+(pwy1 - 1);
				if(ch[(pwx1 - 1)][(pwy1 - 1)]=='w')
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
	}
	
	
}


function rOptions(i){
	pwx1 = Number(i.charAt(0));
	pwy1 = Number(i.charAt(1));
	
	if(pwx1<=7){
		for(n=pwx1+1;n<=7;n++){
			if(ch[n][pwy1]!='0'){
				if((whit==0 && ch[n][pwy1]=='b') || (whit==1 && ch[n][pwy1]=='w')){					
					mstr = ""+(n)+(pwy1);
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";	
								
				}
				
				break;
			}
			mstr = ""+(n)+(pwy1);
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			
		}
	}
	if(pwx1>=0){
		for(n=pwx1-1;n>=0;n--){
			if(ch[n][pwy1]!='0'){
				if((whit==0 && ch[n][pwy1]=='b') || (whit==1 && ch[n][pwy1]=='w')){					
					mstr = ""+(n)+(pwy1);
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";	
								
				}
				
				break;
			}
			mstr = ""+(n)+(pwy1);
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			
		}
	}
	if(pwy1<=7){
		for(n=pwy1+1;n<=7;n++){
			if(ch[pwx1][n]!='0'){
				if((whit==0 && ch[pwx1][n]=='b') || (whit==1 && ch[pwx1][n]=='w')){					
					mstr = ""+(pwx1)+(n);
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";	
								
				}
				
				break;
			}
			mstr = ""+(pwx1)+(n);
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			
		}
	}
	if(pwy1>=0){
		for(n=pwy1-1;n>=0;n--){
			if(ch[pwx1][n]!='0'){
				if((whit==0 && ch[pwx1][n]=='b') || (whit==1 && ch[pwx1][n]=='w')){					
					mstr = ""+(pwx1)+(n);
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";	
								
				}
				
				break;
			}
			mstr = ""+(pwx1)+(n);
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			
		}
	}
}


function qOptions(i){
	pwx1 = Number(i.charAt(0));
	pwy1 = Number(i.charAt(1));
	
	if(pwx1<=7){
		for(n=pwx1+1;n<=7;n++){
			if(ch[n][pwy1]!='0'){
				if((whit==0 && ch[n][pwy1]=='b') || (whit==1 && ch[n][pwy1]=='w')){					
					mstr = ""+(n)+(pwy1);
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";	
								
				}
				
				break;
			}
			mstr = ""+(n)+(pwy1);
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			
		}
	}
	if(pwx1>=0){
		for(n=pwx1-1;n>=0;n--){
			if(ch[n][pwy1]!='0'){
				if((whit==0 && ch[n][pwy1]=='b') || (whit==1 && ch[n][pwy1]=='w')){					
					mstr = ""+(n)+(pwy1);
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";	
								
				}
				
				break;
			}
			mstr = ""+(n)+(pwy1);
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			
		}
	}
	if(pwy1<=7){
		for(n=pwy1+1;n<=7;n++){
			if(ch[pwx1][n]!='0'){
				if((whit==0 && ch[pwx1][n]=='b') || (whit==1 && ch[pwx1][n]=='w')){					
					mstr = ""+(pwx1)+(n);
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";	
								
				}
				
				break;
			}
			mstr = ""+(pwx1)+(n);
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			
		}
	}
	if(pwy1>=0){
		for(n=pwy1-1;n>=0;n--){
			if(ch[pwx1][n]!='0'){
				if((whit==0 && ch[pwx1][n]=='b') || (whit==1 && ch[pwx1][n]=='w')){					
					mstr = ""+(pwx1)+(n);
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";	
								
				}
				
				break;
			}
			mstr = ""+(pwx1)+(n);
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			
		}
	}
		if(pwx1<=7 && pwy1 <=7){
		for(a=pwx1+1, b=pwy1+1; a<=7 && b<=7; a++,b++){
			if(ch[a][b]!='0'){
				if((whit==0 && ch[a][b]=='b') || (whit==1 && ch[a][b]=='w')){					
					mstr = ""+(a)+(b);
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";	
								
				}
				
				break;
			}
			mstr = ""+(a)+(b);
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			
		}
			
		
	}
	if(pwx1>=0 && pwy1 >=0){
		for(a=pwx1-1, b=pwy1-1; a>=0 && b>=0; a--,b--){
			if(ch[a][b]!='0'){
				if((whit==0 && ch[a][b]=='b') || (whit==1 && ch[a][b]=='w')){					
					mstr = ""+(a)+(b);
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";	
								
				}
				
				break;
			}
			mstr = ""+(a)+(b);
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113);";
			
		}			
		
	}
	if(pwx1<=7 && pwy1 >=0){
		for(a=pwx1+1, b=pwy1-1; a<=7 && b>=0; a++,b--){
			if(ch[a][b]!='0'){
				if((whit==0 && ch[a][b]=='b') || (whit==1 && ch[a][b]=='w')){					
					mstr = ""+(a)+(b);
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";	
								
				}
				
				break;
			}
			mstr = ""+(a)+(b);
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			
		}
			
	}
	if(pwx1>=0 && pwy1 <=7){
		for(a=pwx1-1, b=pwy1+1; a>=0 && b<=7; a--,b++){
			if(ch[a][b]!='0'){
				if((whit==0 && ch[a][b]=='b') || (whit==1 && ch[a][b]=='w')){					
					mstr = ""+(a)+(b);
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";	
								
				}
				
				break;
			}
			mstr = ""+(a)+(b);
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			
		}
			
		
	}	
	
	
}


function mOptions(i){
	pwx1 = Number(i.charAt(0));
	pwy1 = Number(i.charAt(1));
	
	if(pwx1<=7 && pwy1 <=7){
		for(a=pwx1+1, b=pwy1+1; a<=7 && b<=7; a++,b++){
			if(ch[a][b]!='0'){
				if((whit==0 && ch[a][b]=='b') || (whit==1 && ch[a][b]=='w')){					
					mstr = ""+(a)+(b);
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";	
								
				}
				
				break;
			}
			mstr = ""+(a)+(b);
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			
		}
			
		
	}
	if(pwx1>=0 && pwy1 >=0){
		for(a=pwx1-1, b=pwy1-1; a>=0 && b>=0; a--,b--){
			if(ch[a][b]!='0'){
				if((whit==0 && ch[a][b]=='b') || (whit==1 && ch[a][b]=='w')){					
					mstr = ""+(a)+(b);
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";	
								
				}
				
				break;
			}
			mstr = ""+(a)+(b);
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			
		}			
		
	}
	if(pwx1<=7 && pwy1 >=0){
		for(a=pwx1+1, b=pwy1-1; a<=7 && b>=0; a++,b--){
			if(ch[a][b]!='0'){
				if((whit==0 && ch[a][b]=='b') || (whit==1 && ch[a][b]=='w')){					
					mstr = ""+(a)+(b);
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";	
								
				}
				
				break;
			}
			mstr = ""+(a)+(b);
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			
		}
			
	}
	if(pwx1>=0 && pwy1 <=7){
		for(a=pwx1-1, b=pwy1+1; a>=0 && b<=7; a--,b++){
			if(ch[a][b]!='0'){
				if((whit==0 && ch[a][b]=='b') || (whit==1 && ch[a][b]=='w')){					
					mstr = ""+(a)+(b);
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";	
								
				}
				
				break;
			}
			mstr = ""+(a)+(b);
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			
		}
			
		
	}	 
		
}

			

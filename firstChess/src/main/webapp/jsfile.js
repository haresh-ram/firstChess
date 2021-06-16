function onhover(id){
	let v1 = document.getElementById(id).innerHTML;
	let q = document.getElementById(id);
	if(v1.length!=0){
		q.classList.add("addc");
		
	}
	document.getElementById(id).style.cursor = "pointer";
}

/*function onout(id){
	document.getElementById(id).style.cssText="transition :0.25s;transform : scale(1)";
}*/


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
var con1=0;
var con2=0;
var pwx1;
var pwx2;
var pwy1;
var pwy2;
var pt;
var n;
var a,b;
var kp;
var x1,y1,x2,y2;
var mstr="";
var vstr="";
var we1=0;
var we2=0;
var bep=0;
var wep=0;
var wkx=0;
var wky=4;
var bkx=7;
var bky=4;
var tm;
var wk=0;
var nm;
var bclik="";
var bclikid="";
var str1="";
var str2="";
var be1=0,be2=0,bk=0;
var wpm = ["","","","","","","",""];
var bpm = ["","","","","","","",""];

var ch = [["we","wh","wm","wq","wk","wm","wh","we"],
		  ["wp","wp","wp","wp","wp","wp","wp","wp"],
		  ["0","0","0","0","0","0","0","0"],
		  ["0","0","0","0","0","0","0","0"],
		  ["0","0","0","0","0","0","0","0"],
		  ["0","0","0","0","0","0","0","0"],
		  ["bp","bp","bp","bp","bp","bp","bp","bp"],
		  ["be","bh","bm","bq","bk","bm","bh","be"]];


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
				if(val==20){
					pawnp(el,i);
					whit=1;
					p=0;
				}else if(val==true){
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
				if(val==10){
					castle(el,i);
					whit=1;
					p=0;
				}else if(val==true){
					change(el,i);
					whit=1;
					p=0;
				}
			}
			
			bcheck();			
			
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
				if(val==20){
					pawnp(el,i);
					whit=0;
					p=0;
				}else if(val==true){
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
				if(val==10){
					castle(el,i);
					whit=0;
					p=0;
				}else if(val==true){
					change(el,i);
					whit=0;
					p=0;
				}
			}	
					
			wcheck();
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
					ch[pwx1][pwy1]="0";
					ch[pwx2][pwy2]="wp";
					wpm[pwy1]="0";
					if(pwx2==7){
						return 20;				
					}else			
						return true;
			}else if(pwx1==4){
				nm=bpm[pwy2].search(id);
				if(nm!=-1){
					ch[pwx1][pwy1]="0";
					ch[pwx2][pwy2]="wp";
					ch[pwx1][pwy2]="0";
					str1=""+pwx1+pwy2+"bp10";
					document.getElementById(str1).innerHTML="";
					document.getElementById(str1).setAttribute("id",""+pwx1+pwy2);
					return true;
				}
			}
		}else if(pwx1 + 2 == pwx2 && pwy1 == pwy2 && ch[(pwx1 + 2)][pwy1]=="0" && ch[(pwx1 + 1)][pwy1]=="0"){
			if(id.charAt(4)=='0'){
				ch[pwx1][pwy1]="0";
				ch[pwx2][pwy2]="wp";	
				
				str1=""+(pwx1+2)+(pwy1+1)+"bp10";	
				str2=""+(pwx1+2)+(pwy1-1)+"bp10";
				con1=document.getElementById(str1);
				con2=document.getElementById(str2);	
				
				if(con1!=null){
					wpm[pwy1]+=str1;
				}
				if(con2!=null){
					wpm[pwy1]+=str2;
				}
				
				return true;
			}			
		}else if(pwx1 + 1 == pwx2 && pwy1 == pwy2 && ch[(pwx1 + 1)][pwy1]=="0"){
			ch[pwx1][pwy1]="0";
			ch[pwx2][pwy2]="wp";
			wpm[pwy1]="0";
			
			if(pwx2==7){
				return 20;				
			}else			
				return true;
		}
	}else{

		if((pwx1 - 1 == pwx2 && pwy1 - 1 == pwy2) || (pwx1 - 1 == pwx2 && pwy1 + 1 == pwy2)){
			if(i.charAt(2)=='w'){
					ch[pwx1][pwy1]="0";
					ch[pwx2][pwy2]="bp";
					bpm[pwy1]="0";
					if(pwx2==0){
						return 20;		
					}else
						return true;
			}else if(pwx1==3){
				nm=wpm[pwy2].search(id);
				if(nm!=-1){
					ch[pwx1][pwy1]="0";
					ch[pwx2][pwy2]="bp";
					ch[pwx1][pwy2]="0";
					str1=""+pwx1+pwy2+"wp10";
					document.getElementById(str1).innerHTML="";
					document.getElementById(str1).setAttribute("id",""+pwx1+pwy2);
					return true;
				}
			}
		}else if(pwx1 - 2 == pwx2 && pwy1 == pwy2 && ch[(pwx1 - 2)][pwy1]=="0" && ch[(pwx1 - 1)][pwy1]=="0"){
			if(id.charAt(4)=='0'){
				ch[pwx1][pwy1]="0";
				ch[pwx2][pwy2]="bp";
				
				str1=""+(pwx1-2)+(pwy1+1)+"wp10";	
				str2=""+(pwx1-2)+(pwy1-1)+"wp10";
				con1=document.getElementById(str1);
				con2=document.getElementById(str2);	
				
				if(con1!=null){
					bpm[pwy1]+=str1;
				}
				if(con2!=null){
					bpm[pwy1]+=str2;
				}
				
				return true;
			}
		}else if(pwx1 - 1 == pwx2 && pwy1 == pwy2 && i.charAt(2)!='w'){			
			ch[pwx1][pwy1]="0";
			ch[pwx2][pwy2]="bp";
			bpm[pwy1]="0";
			
			if(pwx2==0){
				return 20;
			}else
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
			}else if(ch[pwx1][n]!="0"){
				return false;
			}			
		}
		ch[pwx1][pwy1]="0";
		if(whit==0){
			ch[pwx2][pwy2]="we";
			if(id.charAt(4)=='1')
			we1=1;
			else
			we2=1;
		}
		else{
			ch[pwx2][pwy2]="be";
			if(id.charAt(4)=='1')
			be1=1;
			else
			be2=1;
		}
		return true;
	}else if(pwy1 == pwy2){
		for(n = x1; n<x2; n++){
			if(n==x1){
				continue;
			}else if(ch[n][pwy1]!="0"){
				return false;
			}
			
		}
		ch[pwx1][pwy1]="0";
		if(whit==0){
			if(id.charAt(4)=='1')
			we1=1;
			else
			we2=1;
			ch[pwx2][pwy2]="we";
		}
		else{
			if(id.charAt(4)=='1')
			be1=1;
			else
			be2=1;
			ch[pwx2][pwy2]="be";
		}
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
			ch[pwx1][pwy1]="0";
			ch[pwx2][pwy2]="wh";
		}else{
			ch[pwx1][pwy1]="0";
			ch[pwx2][pwy2]="bh";
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
				else if(ch[a][b]!="0"){
					return false;
				}
			}
			ch[pwx1][pwy1]="0";
			if(whit==0)
			ch[pwx2][pwy2]="wm";
			else
			ch[pwx2][pwy2]="bm";
			return true;
			
		}else if((pwx1 < pwx2 && pwy1 > pwy2) || (pwx1 > pwx2 && pwy1 < pwy2)){
			
			for(a=x1, b=y2; a<x2; a++,b--){
				if(a==x1)
				continue;
				else if(ch[a][b]!="0"){
					return false;
				}
			}
			ch[pwx1][pwy1]="0";
			if(whit==0)
			ch[pwx2][pwy2]="wm";
			else
			ch[pwx2][pwy2]="bm";
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
			}else if(ch[pwx1][n]!="0"){
				return false;
			}			
		}
		ch[pwx1][pwy1]="0";
		if(whit==0)
		ch[pwx2][pwy2]="wq";
		else
		ch[pwx2][pwy2]="bq";
		return true;
	}else if(pwy1 == pwy2){
		for(n = x1; n<x2; n++){
			if(n==x1){
				continue;
			}else if(ch[n][pwy1]!="0"){
				return false;
			}
			
		}
		ch[pwx1][pwy1]="0";
		if(whit==0)
		ch[pwx2][pwy2]="wq";
		else
		ch[pwx2][pwy2]="bq";
		return true;
		
	}else if((Math.abs(pwx1 - pwx2)) == (Math.abs(pwy1 - pwy2))){	
				
		
		if((pwx1 < pwx2 && pwy1 < pwy2) || (pwx1 > pwx2 && pwy1 > pwy2)){
			
			for(a=x1, b=y1; a<x2; a++,b++){
				if(a==x1)
				continue;
				else if(ch[a][b]!="0"){
					return false;
				}
			}
			ch[pwx1][pwy1]="0";
			if(whit==0)
			ch[pwx2][pwy2]="wq";
			else
			ch[pwx2][pwy2]="bq";
			return true;
			
		}else if((pwx1 < pwx2 && pwy1 > pwy2) || (pwx1 > pwx2 && pwy1 < pwy2)){
			
			for(a=x1, b=y2; a<x2; a++,b--){
				if(a==x1)
				continue;
				else if(ch[a][b]!="0"){
					return false;
				}
			}
			ch[pwx1][pwy1]="0";
			if(whit==0)
			ch[pwx2][pwy2]="wq";
			else
			ch[pwx2][pwy2]="bq";
			return true;
			
		}
	}
}

function king(i){
	pwx1 = Number(id.charAt(0));
	pwy1 = Number(id.charAt(1));
	pwx2 = Number(i.charAt(0));
	pwy2 = Number(i.charAt(1));
		
	if(pwx1==0 && pwy1==4 && pwx2==0 && pwy2==6 && wk==0 && we2==0){
		if(ch[0][5]=="0" && ch[0][6]=="0"){
			ch[pwx1][pwy1]="0";
			ch[pwx2][pwy2]="wk";
			ch[0][5]="we";
			ch[0][7]="0";
			return 10;
		}
			
	}else if(pwx1==0 && pwy1==4 && pwx2==0 && pwy2==2 && wk==0 && we1==0){
		if(ch[0][3]=="0" && ch[0][2]=="0" && ch[0][1]=="0"){
			ch[pwx1][pwy1]="0";
			ch[pwx2][pwy2]="wk";
			ch[0][3]="we";
			ch[0][0]="0";
			return 10;			
		}
		
	}else if(pwx1==7 && pwy1==4 && pwx2==7 && pwy2==6 && bk==0 && be2==0){
		if(ch[7][5]=="0" && ch[7][6]=="0"){
			ch[pwx1][pwy1]="0";
			ch[pwx2][pwy2]="bk";
			ch[7][5]="be";
			ch[7][7]="0";
			return 10;			
		}
		
	}else if(pwx1==7 && pwy1==4 && pwx2==7 && pwy2==2 && bk==0 && be1==0){
		if(ch[7][3]=="0" && ch[7][2]=="0" && ch[7][1]=="0"){
			ch[pwx1][pwy1]="0";
			ch[pwx2][pwy2]="bk";
			ch[7][3]="be";
			ch[7][0]="0";
			return 10;			
		}
		
	}else if((pwx1 + 1 == pwx2 && pwy1 == pwy2) || (pwx1 - 1 == pwx2 && pwy1 == pwy2) || (pwy1 + 1 == pwy2 && pwx1 == pwx2) || (pwy1 - 1 == pwy2 && pwx1 == pwx2) || (pwx1 + 1 == pwx2 && pwy1 + 1 == pwy2) || (pwx1 - 1 == pwx2 && pwy1 + 1 == pwy2) || (pwx1 + 1 == pwx2 && pwy1 - 1 == pwy2) || (pwx1 - 1 == pwx2 && pwy1 - 1 == pwy2)){
		if(whit==0){
			ch[pwx1][pwy1]="0";
			ch[pwx2][pwy2]="wk";
			wkx=pwx2;
			wky=pwy2;
			wk=1;
		}else{
			ch[pwx1][pwy1]="0";
			ch[pwx2][pwy2]="bk";
			bkx=pwx2;
			bky=pwy2;
			bk=1;
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
			
			document.getElementById(idstr).classList.remove("addc");
			
			if(str.charAt(3)=='p' && str.charAt(4)=='0'){
				vstr=""+str.slice(0,4)+"1"+str.slice(5);
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
				if(ch[n][pwy1]!="0"){
					break;
				}
				mstr = ""+n+pwy1;
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}			
		}
		if(ch[pwx1 + 1][pwy1]=="0"){
			mstr = ""+(pwx1+1)+pwy1;
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
		}
		
		if(pwy1<7){
			if((ch[pwx1 + 1][pwy1 + 1]).charAt(0)=="b"){
				mstr = ""+(pwx1+1)+(pwy1+1);
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
			}
		}
		if(pwy1>0){
			if((ch[pwx1 + 1][pwy1 - 1]).charAt(0)=="b"){
				mstr = ""+(pwx1+1)+(pwy1-1);
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
			}
		}
		if(pwx1==4){
			if(pwy1>0){
				con1=bpm[pwy1-1].search(i);
				if(con1!=-1){
					mstr = ""+(pwx1+1)+(pwy1-1);
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(255, 213, 77)";
				}
			}
			
			if(pwy1<7){
				con2=bpm[pwy1+1].search(i);
				if(con2!=-1){
					mstr = ""+(pwx1+1)+(pwy1+1);
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(255, 213, 77)";
				}
			}
		}
		
	}else{
		if(i.charAt(4)=='0'){
			
			for(n = pwx1 - 1; n >= (pwx1 - 2); n--){
				if(ch[n][pwy1]!="0"){
					break;
				}
				mstr = ""+n+pwy1;
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}			
		}
		if(ch[pwx1 - 1][pwy1]=="0"){
			mstr = ""+(pwx1-1)+pwy1;
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
		}
		if(pwy1<7){
			if((ch[pwx1 - 1][pwy1 + 1]).charAt(0)=="w"){
				mstr = ""+(pwx1-1)+(pwy1+1);
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
			}
		}
		if(pwy1>0){
			if((ch[pwx1 - 1][pwy1 - 1]).charAt(0)=="w"){
				mstr = ""+(pwx1-1)+(pwy1-1);
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
			}
		}
		if(pwx1==3){
			if(pwy1>0){
				con1=wpm[pwy1-1].search(i);
				if(con1!=-1){
					mstr = ""+(pwx1-1)+(pwy1-1);
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(255, 213, 77)";
				}
			}
			
			if(pwy1<7){
				con2=wpm[pwy1+1].search(i);
				if(con2!=-1){
					mstr = ""+(pwx1-1)+(pwy1+1);
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(255, 213, 77)";
				}
			}
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
			if((ch[(pwx1 + 2)][(pwy1 + 1)]).charAt(0)!="w"){
				mstr = ""+(pwx1 + 2)+(pwy1 + 1);
				if((ch[(pwx1 + 2)][(pwy1 + 1)]).charAt(0)=="b")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 + 2) <=7 && (pwy1 - 1) >=0){
			if((ch[(pwx1 + 2)][(pwy1 - 1)]).charAt(0)!="w"){
				mstr = ""+(pwx1 + 2)+(pwy1 - 1);
				if((ch[(pwx1 + 2)][(pwy1 - 1)]).charAt(0)=="b")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 + 1) <=7 && (pwy1 + 2) <=7){
			if((ch[(pwx1 + 1)][(pwy1 + 2)]).charAt(0)!="w"){
				mstr = ""+(pwx1 + 1)+(pwy1 + 2);
				if((ch[(pwx1 + 1)][(pwy1 + 2)]).charAt(0)=="b")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 + 1) <=7 && (pwy1 - 2) >=0){
			if((ch[(pwx1 + 1)][(pwy1 - 2)]).charAt(0)!="w"){
				mstr = ""+(pwx1 + 1)+(pwy1 - 2);
				if((ch[(pwx1 + 1)][(pwy1 - 2)]).charAt(0)=="b")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 - 1) >=0 && (pwy1 - 2) >=0){
			if((ch[(pwx1 - 1)][(pwy1 - 2)]).charAt(0)!="w"){
				mstr = ""+(pwx1 - 1)+(pwy1 - 2);
				if((ch[(pwx1 - 1)][(pwy1 - 2)]).charAt(0)=="b")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 - 1) >=0 && (pwy1 + 2) <=7){
			if((ch[(pwx1 - 1)][(pwy1 + 2)]).charAt(0)!="w"){
				mstr = ""+(pwx1 - 1)+(pwy1 + 2);
				if((ch[(pwx1 - 1)][(pwy1 + 1)]).charAt(0)=="b")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 - 2) >=0 && (pwy1 + 1) <=7){
			if((ch[(pwx1 - 2)][(pwy1 + 1)]).charAt(0)!="w"){
				mstr = ""+(pwx1 - 2)+(pwy1 + 1);
				if((ch[(pwx1 - 2)][(pwy1 + 1)]).charAt(0)=="b")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 - 2) >=0 && (pwy1 - 1) >=0){
			if((ch[(pwx1 - 2)][(pwy1 - 1)]).charAt(0)!="w"){
				mstr = ""+(pwx1 - 2)+(pwy1 - 1);
				if((ch[(pwx1 - 2)][(pwy1 - 1)]).charAt(0)=="b")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
	}else{
		if((pwx1 + 2) <=7 && (pwy1 + 1) <=7){
			if((ch[(pwx1 + 2)][(pwy1 + 1)]).charAt(0)!="b"){
				mstr = ""+(pwx1 + 2)+(pwy1 + 1);
				if((ch[(pwx1 + 2)][(pwy1 + 1)]).charAt(0)=="w")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 + 2) <=7 && (pwy1 - 1) >=0){
			if((ch[(pwx1 + 2)][(pwy1 - 1)]).charAt(0)!="b"){
				mstr = ""+(pwx1 + 2)+(pwy1 - 1);
				if((ch[(pwx1 + 2)][(pwy1 - 1)]).charAt(0)=="w")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 + 1) <=7 && (pwy1 + 2) <=7){
			if((ch[(pwx1 + 1)][(pwy1 + 2)]).charAt(0)!="b"){
				mstr = ""+(pwx1 + 1)+(pwy1 + 2);
				if((ch[(pwx1 + 1)][(pwy1 + 2)]).charAt(0)=="w")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 + 1) <=7 && (pwy1 - 2) >=0){
			if((ch[(pwx1 + 1)][(pwy1 - 2)]).charAt(0)!="b"){
				mstr = ""+(pwx1 + 1)+(pwy1 - 2);
				if((ch[(pwx1 + 1)][(pwy1 - 2)]).charAt(0)=="w")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 - 1) >=0 && (pwy1 - 2) >=0){
			if((ch[(pwx1 - 1)][(pwy1 - 2)]).charAt(0)!="b"){
				mstr = ""+(pwx1 - 1)+(pwy1 - 2);
				if((ch[(pwx1 - 1)][(pwy1 - 2)]).charAt(0)=="w")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 - 1) >=0 && (pwy1 + 2) <=7){
			if((ch[(pwx1 - 1)][(pwy1 + 2)]).charAt(0)!="b"){
				mstr = ""+(pwx1 - 1)+(pwy1 + 2);
				if((ch[(pwx1 - 1)][(pwy1 + 2)]).charAt(0)=="w")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 - 2) >=0 && (pwy1 + 1) <=7){
			if((ch[(pwx1 - 2)][(pwy1 + 1)]).charAt(0)!="b"){
				mstr = ""+(pwx1 - 2)+(pwy1 + 1);
				if((ch[(pwx1 - 2)][(pwy1 + 1)]).charAt(0)=="w")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if((pwx1 - 2) >=0 && (pwy1 - 1) >=0){
			if((ch[(pwx1 - 2)][(pwy1 - 1)]).charAt(0)!="b"){
				mstr = ""+(pwx1 - 2)+(pwy1 - 1);
				if((ch[(pwx1 - 2)][(pwy1 - 1)]).charAt(0)=="w")
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
		
		if(pwx1==0 && pwy1==4 && wk==0 && we2==0 && ch[0][5]=="0" && ch[0][6]=="0"){
			mstr = ""+0+5;
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			mstr = ""+0+6;
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(37, 218, 255)";
		}
		
		if(pwx1==0 && pwy1==4 && wk==0 && we1==0 && ch[0][3]=="0" && ch[0][2]=="0" && ch[0][1]=="0"){
			mstr = ""+0+3;
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			mstr = ""+0+2;
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(37, 218, 255)";
		}
		
		if(pwx1 + 1 <=7){
			if((ch[(pwx1 + 1)][(pwy1)]).charAt(0)!="w"){
				mstr = ""+(pwx1 + 1)+(pwy1);
				if((ch[(pwx1 + 1)][(pwy1)]).charAt(0)=="b")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwx1 - 1 >=0){
			if((ch[(pwx1 - 1)][(pwy1)]).charAt(0)!="w"){
				mstr = ""+(pwx1 - 1)+(pwy1);
				if((ch[(pwx1 - 1)][(pwy1)]).charAt(0)=="b")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwy1 + 1 <=7){
			if((ch[(pwx1)][(pwy1 + 1)]).charAt(0)!="w"){
				mstr = ""+(pwx1)+(pwy1 + 1);
				if((ch[(pwx1)][(pwy1 + 1)]).charAt(0)=="b")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwy1 - 1 >=0){
			if((ch[(pwx1)][(pwy1 - 1)]).charAt(0)!="w"){
				mstr = ""+(pwx1)+(pwy1 - 1);
				if((ch[(pwx1)][(pwy1 - 1)]).charAt(0)=="b")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwx1 +1 <=7 && pwy1 + 1 <= 7){
			if((ch[(pwx1 + 1)][(pwy1 + 1)]).charAt(0)!="w"){
				mstr = ""+(pwx1 + 1)+(pwy1 + 1);
				if((ch[(pwx1 + 1)][(pwy1 + 1)]).charAt(0)=="b")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwx1 -1 >=0 && pwy1 + 1 <= 7){
			if((ch[(pwx1 - 1)][(pwy1 + 1)]).charAt(0)!="w"){
				mstr = ""+(pwx1 - 1)+(pwy1 + 1);
				if((ch[(pwx1 - 1)][(pwy1 + 1)]).charAt(0)=="b")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwx1 +1 <=7 && pwy1 - 1 >=0){
			if((ch[(pwx1 + 1)][(pwy1 - 1)]).charAt(0)!="w"){
				mstr = ""+(pwx1 + 1)+(pwy1 - 1);
				if((ch[(pwx1 + 1)][(pwy1 - 1)]).charAt(0)=="b")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwx1 -1 >=0 && pwy1 - 1 >=0){
			if((ch[(pwx1 - 1)][(pwy1 - 1)]).charAt(0)!="w"){
				mstr = ""+(pwx1 - 1)+(pwy1 - 1);
				if((ch[(pwx1 - 1)][(pwy1 - 1)]).charAt(0)=="b")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
	}else{
	
	
		if(pwx1==7 && pwy1==4 && bk==0 && be2==0 && ch[7][5]=="0" && ch[7][6]=="0"){
			mstr = ""+7+5;
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			mstr = ""+7+6;
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(37, 218, 255)";
		}
		
		if(pwx1==7 && pwy1==4 && bk==0 && be1==0 && ch[7][3]=="0" && ch[7][2]=="0" && ch[7][1]=="0"){
			mstr = ""+7+3;
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			mstr = ""+7+2;
			document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(37, 218, 255)";
		}
		
		if(pwx1 + 1 <=7){
			if((ch[(pwx1 + 1)][(pwy1)]).charAt(0)!="b"){
				mstr = ""+(pwx1 + 1)+(pwy1);
				if((ch[(pwx1 + 1)][(pwy1)]).charAt(0)=="w")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwx1 - 1 >=0){
			if((ch[(pwx1 - 1)][(pwy1)]).charAt(0)!="b"){
				mstr = ""+(pwx1 - 1)+(pwy1);
				if((ch[(pwx1 - 1)][(pwy1)]).charAt(0)=="w")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwy1 + 1 <=7){
			if((ch[(pwx1)][(pwy1 + 1)]).charAt(0)!="b"){
				mstr = ""+(pwx1)+(pwy1 + 1);
				if((ch[(pwx1)][(pwy1 + 1)]).charAt(0)=="w")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwy1 - 1 >=0){
			if((ch[(pwx1)][(pwy1 - 1)]).charAt(0)!="b"){
				mstr = ""+(pwx1)+(pwy1 - 1);
				if((ch[(pwx1)][(pwy1 - 1)]).charAt(0)=="w")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwx1 +1 <=7 && pwy1 + 1 <= 7){
			if((ch[(pwx1 + 1)][(pwy1 + 1)]).charAt(0)!="b"){
				mstr = ""+(pwx1 + 1)+(pwy1 + 1);
				if((ch[(pwx1 + 1)][(pwy1 + 1)]).charAt(0)=="w")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwx1 -1 >=0 && pwy1 + 1 <= 7){
			if((ch[(pwx1 - 1)][(pwy1 + 1)]).charAt(0)!="b"){
				mstr = ""+(pwx1 - 1)+(pwy1 + 1);
				if((ch[(pwx1 - 1)][(pwy1 + 1)]).charAt(0)=="w")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwx1 +1 <=7 && pwy1 - 1 >=0){
			if((ch[(pwx1 + 1)][(pwy1 - 1)]).charAt(0)!="b"){
				mstr = ""+(pwx1 + 1)+(pwy1 - 1);
				if((ch[(pwx1 + 1)][(pwy1 - 1)]).charAt(0)=="w")
				document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				else
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		if(pwx1 -1 >=0 && pwy1 - 1 >=0){
			if((ch[(pwx1 - 1)][(pwy1 - 1)]).charAt(0)!="b"){
				mstr = ""+(pwx1 - 1)+(pwy1 - 1);
				if((ch[(pwx1 - 1)][(pwy1 - 1)]).charAt(0)=="w")
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
			if(ch[n][pwy1]!="0"){
				if((whit==0 && (ch[n][pwy1]).charAt(0)=="b") || (whit==1 && (ch[n][pwy1]).charAt(0)=="w")){					
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
			if(ch[n][pwy1]!="0"){
				if((whit==0 && (ch[n][pwy1]).charAt(0)=="b") || (whit==1 && (ch[n][pwy1]).charAt(0)=="w")){					
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
			if(ch[pwx1][n]!="0"){
				if((whit==0 && (ch[pwx1][n]).charAt(0)=="b") || (whit==1 && (ch[pwx1][n]).charAt(0)=="w")){					
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
			if(ch[pwx1][n]!="0"){
				if((whit==0 && (ch[pwx1][n]).charAt(0)=="b") || (whit==1 && (ch[pwx1][n]).charAt(0)=="w")){					
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
			if(ch[n][pwy1]!="0"){
				if((whit==0 && (ch[n][pwy1]).charAt(0)=="b") || (whit==1 && (ch[n][pwy1]).charAt(0)=="w")){					
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
			if(ch[n][pwy1]!="0"){
				if((whit==0 && (ch[n][pwy1]).charAt(0)=="b") || (whit==1 && (ch[n][pwy1]).charAt(0)=="w")){					
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
			if(ch[pwx1][n]!="0"){
				if((whit==0 && (ch[pwx1][n]).charAt(0)=="b") || (whit==1 && (ch[pwx1][n]).charAt(0)=="w")){					
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
			if(ch[pwx1][n]!="0"){
				if((whit==0 && (ch[pwx1][n]).charAt(0)=="b") || (whit==1 && (ch[pwx1][n]).charAt(0)=="w")){					
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
			if(ch[a][b]!="0"){
				if((whit==0 && (ch[a][b]).charAt(0)=="b") || (whit==1 && (ch[a][b]).charAt(0)=="w")){					
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
			if(ch[a][b]!="0"){
				if((whit==0 && (ch[a][b]).charAt(0)=="b") || (whit==1 && (ch[a][b]).charAt(0)=="w")){					
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
			if(ch[a][b]!="0"){
				if((whit==0 && (ch[a][b]).charAt(0)=="b") || (whit==1 && (ch[a][b]).charAt(0)=="w")){					
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
			if(ch[a][b]!="0"){
				if((whit==0 && (ch[a][b]).charAt(0)=="b") || (whit==1 && (ch[a][b]).charAt(0)=="w")){					
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
			if(ch[a][b]!="0"){
				if((whit==0 && (ch[a][b]).charAt(0)=="b") || (whit==1 && (ch[a][b]).charAt(0)=="w")){					
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
			if(ch[a][b]!="0"){
				if((whit==0 && (ch[a][b]).charAt(0)=="b") || (whit==1 && (ch[a][b]).charAt(0)=="w")){					
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
			if(ch[a][b]!="0"){
				if((whit==0 && (ch[a][b]).charAt(0)=="b") || (whit==1 && (ch[a][b]).charAt(0)=="w")){					
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
			if(ch[a][b]!="0"){
				if((whit==0 && (ch[a][b]).charAt(0)=="b") || (whit==1 && (ch[a][b]).charAt(0)=="w")){					
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


function castle(el,i){
	el.innerHTML=v;
	document.getElementById(id).innerHTML="";
	v="";
	
	str=""+i.charAt(0)+i.charAt(1)+ id.slice(2);
	idstr=""+id.charAt(0)+id.charAt(1);
	document.getElementById(id).setAttribute("id",idstr);
	document.getElementById(i).setAttribute("id",str);
			
	document.getElementById(idstr).classList.remove("addc");
	
	if(i.charAt(1)=='6' && i.charAt(0)=='0'){	
	
		kp=document.getElementById("07we2").innerHTML;
		document.getElementById("07we2").innerHTML="";	
		document.getElementById("05").innerHTML=kp;
		document.getElementById("07we2").setAttribute("id","07");
		document.getElementById("05").setAttribute("id","05we2");
		
	}else if(i.charAt(1)=='2' && i.charAt(0)=='0'){
	
		kp=document.getElementById("00we1").innerHTML;
		document.getElementById("00we1").innerHTML="";	
		document.getElementById("03").innerHTML=kp;
		document.getElementById("00we1").setAttribute("id","00");
		document.getElementById("03").setAttribute("id","03we1");
		
	}else if(i.charAt(1)=='6' && i.charAt(0)=='7'){
	
		kp=document.getElementById("77be2").innerHTML;
		document.getElementById("77be2").innerHTML="";	
		document.getElementById("75").innerHTML=kp;
		document.getElementById("77be2").setAttribute("id","77");
		document.getElementById("75").setAttribute("id","75be2");
	
	}else if(i.charAt(1)=='2' && i.charAt(0)=='7'){
	
		kp=document.getElementById("70be1").innerHTML;
		document.getElementById("70be1").innerHTML="";	
		document.getElementById("73").innerHTML=kp;
		document.getElementById("70be1").setAttribute("id","70");
		document.getElementById("73").setAttribute("id","73be1");
		
	}
}

function pawnp(el,i){
	pwx1 = Number(id.charAt(0));
	pwy1 = Number(id.charAt(1));
	pwx2 = Number(i.charAt(0));
	pwy2 = Number(i.charAt(1));
	
			el.innerHTML=v;
			document.getElementById(id).innerHTML="";
			v="";
			
			str=""+i.charAt(0)+i.charAt(1)+ id.slice(2);
			idstr=""+id.charAt(0)+id.charAt(1);
			document.getElementById(id).setAttribute("id",idstr);
			document.getElementById(i).setAttribute("id",str);
			
			document.getElementById(idstr).classList.remove("addc");
	
	
	if(whit==0){		
		document.getElementById("wmod").style.cssText="display:flex;";
		str2=""+pwx2+pwy2+"wp10";
		
	}else{
		document.getElementById("bmod").style.cssText="display:flex;";
		str2=""+pwx2+pwy2+"bp10";
	}
	
	
}


function btnclik(i){
	var lp=document.getElementsByClassName("cube");
	 
	 for(n=0;n<lp.length;n++){
	 	lp[n].style.cssText="color : initial";
	 }
	document.getElementById(i).style.cssText = "transition :0.25s;background-color : rgb(60, 166, 116);transform : scale(1.20)";
	bclik=document.getElementById(i).innerHTML;
	bclikid=i;
	
	tm=bclikid.search("be");
	if(tm==1){
		ch[pwx2][pwy2]="be";
	}
	tm=bclikid.search("bh");
	if(tm==1){
		ch[pwx2][pwy2]="bh";
	}
	tm=bclikid.search("bm");
	if(tm==1){
		ch[pwx2][pwy2]="bm";
	}
	tm=bclikid.search("bq");
	if(tm==1){
		ch[pwx2][pwy2]="bq";
	}
	tm=bclikid.search("we");
	if(tm==1){
		ch[pwx2][pwy2]="we";
	}
	tm=bclikid.search("wh");
	if(tm==1){
		ch[pwx2][pwy2]="wh";
	}
	tm=bclikid.search("wm");
	if(tm==1){
		ch[pwx2][pwy2]="wm";
	}
	tm=bclikid.search("wq");
	if(tm==1){
		ch[pwx2][pwy2]="wq";
	}
}

function cls(i){
	document.getElementById(str2).innerHTML=bclik;
	str1=""+pwx2+pwy2+bclikid;
	document.getElementById(str2).setAttribute("id",str1);
	document.getElementById(i).style.display = "none";
}


function bcheck(){
	
	for(n=bkx-1;n>=0;n--){
		if((ch[n][bky]).charAt(0)=="b" || ch[n][bky]=="wh" || ch[n][bky]=="wp" || ch[n][bky]=="wm" || ch[n][bky]=="wk"){
			break;
		}else if(ch[n][bky]=="wq"||ch[n][bky]=="we"){
			str1=""+bkx+bky+"bk";
			document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			break;
		}
	}
	for(n=bkx+1;n<=7;n++){
		if((ch[n][bky]).charAt(0)=="b"|| ch[n][bky]=="wh" || ch[n][bky]=="wp" || ch[n][bky]=="wm" || ch[n][bky]=="wk"){
			break;
		}else if(ch[n][bky]=="wq"||ch[n][bky]=="we"){
			str1=""+bkx+bky+"bk";
			document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			break;
		}
	}
	for(n=bky+1;n<=7;n++){
		if((ch[bkx][n]).charAt(0)=="b"|| ch[bkx][n]=="wh" || ch[bkx][n]=="wp" || ch[bkx][n]=="wm" || ch[bkx][n]=="wk"){
			break;
		}else if(ch[bkx][n]=="wq"||ch[bkx][n]=="we"){
			str1=""+bkx+bky+"bk";
			document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			break;
		}
	}
	for(n=bky-1;n>=0;n--){
		if((ch[bkx][n]).charAt(0)=="b"|| ch[bkx][n]=="wh" || ch[bkx][n]=="wp" || ch[bkx][n]=="wm" || ch[bkx][n]=="wk"){
			break;
		}else if(ch[bkx][n]=="wq"||ch[bkx][n]=="we"){
			str1=""+bkx+bky+"bk";
			document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			break;
		}
	}
	if(bkx<=7 && bky<=7){
		for(a=bkx+1, b=bky+1; a<=7 && b<=7; a++,b++){
			if(a==bkx+1 && ch[a][b]=="wp"){
				str1=""+bkx+bky+"bk";
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				break;
			}else if((ch[a][b]).charAt(0)=="b"|| ch[a][b]=="wh" || ch[a][b]=="wp" || ch[a][b]=="we" || ch[a][b]=="wk"){
				break;
			}else if(ch[a][b]=="wq"||ch[a][b]=="wm"){
				str1=""+bkx+bky+"bk";
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				break;
			}
		}
	}
	if(bkx>=0 && bky>=0){
		for(a=bkx-1, b=bky-1; a>=0 && b>=0; a--,b--){
			if(a==bkx-1 && ch[a][b]=="wp"){
				str1=""+bkx+bky+"bk";
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				break;
			}else if((ch[a][b]).charAt(0)=="b"|| ch[a][b]=="wh" || ch[a][b]=="wp" || ch[a][b]=="we" || ch[a][b]=="wk"){
				break;
			}else if(ch[a][b]=="wq"||ch[a][b]=="wm"){
				str1=""+bkx+bky+"bk";
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				break;
			}
		}
	}
	if(bkx>=0 && bky<=7){
		for(a=bkx-1, b=bky+1; a>=0 && b<=7; a--,b++){
			if((ch[a][b]).charAt(0)=="b"|| ch[a][b]=="wh" || ch[a][b]=="wp" || ch[a][b]=="we" || ch[a][b]=="wk"){
				break;
			}else if(ch[a][b]=="wq"||ch[a][b]=="wm"){
				str1=""+bkx+bky+"bk";
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				break;
			}
		}
	}
	if(bkx<=7 && bky>=0){
		for(a=bkx+1, b=bky-1; a<=7 && b>=0; a++,b--){
			if((ch[a][b]).charAt(0)=="b" || ch[a][b]=="wh" || ch[a][b]=="wp" || ch[a][b]=="we" || ch[a][b]=="wk"){
				break;
			}else if(ch[a][b]=="wq"||ch[a][b]=="wm"){
				str1=""+bkx+bky+"bk";
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				break;
			}
		}
	}
	
		if((bkx + 2) <=7 && (bky + 1) <=7){
			if((ch[(bkx + 2)][(bky + 1)])=="wh"){
				str1=""+bkx+bky+"bk";
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			}
		}if((bkx + 2) <=7 && (bky - 1) >=0){
			if((ch[(bkx + 2)][(bky - 1)])=="wh"){
				str1=""+bkx+bky+"bk";
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			}
		}if((bkx + 1) <=7 && (bky + 2) <=7){
			if((ch[(bkx + 1)][(bky + 2)])=="wh"){
				str1=""+bkx+bky+"bk";
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			}
		}if((bkx + 1) <=7 && (bky - 2) >=0){
			if((ch[(bkx + 1)][(bky - 2)])=="wh"){
				str1=""+bkx+bky+"bk";
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			}
		}if((bkx - 1) >=0 && (bky - 2) >=0){
			if((ch[(bkx - 1)][(bky - 2)])=="wh"){
				str1=""+bkx+bky+"bk";
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			}
		}if((bkx - 1) >=0 && (bky + 2) <=7){
			if((ch[(bkx - 1)][(bky + 2)])=="wh"){
				str1=""+bkx+bky+"bk";
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			}
		}if((bkx - 2) >=0 && (bky + 1) <=7){
			if((ch[(bkx - 2)][(bky + 1)])=="wh"){
				str1=""+bkx+bky+"bk";
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			}
		}if((bkx - 2) >=0 && (bky - 1) >=0){
			if((ch[(bkx - 2)][(bky - 1)])=="wh"){
				str1=""+bkx+bky+"bk";
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			}
		}
	
	
}


function wcheck(){
	
	str1=""+wkx+wky+"wk";
	
	for(n=wkx-1;n>=0;n--){
		if((ch[n][wky]).charAt(0)=="w" || ch[n][wky]=="bh" || ch[n][wky]=="bp" || ch[n][wky]=="bm" || ch[n][wky]=="bk"){
			break;
		}else if(ch[n][wky]=="bq"||ch[n][wky]=="be"){
			document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			break;
		}
	}
	for(n=wkx+1;n<=7;n++){
		if((ch[n][wky]).charAt(0)=="w"|| ch[n][wky]=="bh" || ch[n][wky]=="bp" || ch[n][wky]=="bm" || ch[n][wky]=="bk"){
			break;
		}else if(ch[n][wky]=="bq"||ch[n][wky]=="be"){
			document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			break;
		}
	}
	for(n=wky+1;n<=7;n++){
		if((ch[wkx][n]).charAt(0)=="w"|| ch[wkx][n]=="bh" || ch[wkx][n]=="bp" || ch[wkx][n]=="bm" || ch[wkx][n]=="bk"){
			break;
		}else if(ch[wkx][n]=="bq"||ch[wkx][n]=="be"){
			document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			break;
		}
	}
	for(n=wky-1;n>=0;n--){
		if((ch[wkx][n]).charAt(0)=="w"|| ch[wkx][n]=="bh" || ch[wkx][n]=="bp" || ch[wkx][n]=="bm" || ch[wkx][n]=="bk"){
			break;
		}else if(ch[wkx][n]=="bq"||ch[wkx][n]=="be"){
			document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			break;
		}
	}
	if(wkx<7 && wky<7){
		for(a=wkx+1, b=wky+1; a<=7 && b<=7; a++,b++){
			if((ch[a][b]).charAt(0)=="w"|| ch[a][b]=="bh" || ch[a][b]=="bp" || ch[a][b]=="be" || ch[a][b]=="bk"){
				break;
			}else if(ch[a][b]=="bq"||ch[a][b]=="bm"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				break;
			}
		}
	}
	if(wkx>0 && wky>0){
		for(a=wkx-1, b=wky-1; a>=0 && b>=0; a--,b--){
			if((ch[a][b]).charAt(0)=="w"|| ch[a][b]=="bh" || ch[a][b]=="bp" || ch[a][b]=="be" || ch[a][b]=="bk"){
				break;
			}else if(ch[a][b]=="bq"||ch[a][b]=="bm"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				break;
			}
		}
	}
	if(wkx>0 && wky<7){
		for(a=wkx-1, b=wky+1; a>=0 && b<=7; a--,b++){
			if((ch[a][b]).charAt(0)=="w"|| ch[a][b]=="bh" || ch[a][b]=="bp" || ch[a][b]=="be" || ch[a][b]=="bk"){
				break;
			}else if(ch[a][b]=="bq"||ch[a][b]=="bm"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				break;
			}
		}
	}
	if(wkx<7 && wky>0){
		for(a=wkx+1, b=wky-1; a<=7 && b>=0; a++,b--){
			if((ch[a][b]).charAt(0)=="w" || ch[a][b]=="bh" || ch[a][b]=="bp" || ch[a][b]=="be" || ch[a][b]=="bk"){
				break;
			}else if(ch[a][b]=="bq"||ch[a][b]=="bm"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				break;
			}
		}
	}
	
		if((wkx + 2) <=7 && (wky + 1) <=7){
			if((ch[(wkx + 2)][(wky + 1)])=="bh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			}
		}if((wkx + 2) <=7 && (wky - 1) >=0){
			if((ch[(wkx + 2)][(wky - 1)])=="bh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			}
		}if((wkx + 1) <=7 && (wky + 2) <=7){
			if((ch[(wkx + 1)][(wky + 2)])=="bh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			}
		}if((wkx + 1) <=7 && (wky - 2) >=0){
			if((ch[(wkx + 1)][(wky - 2)])=="bh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			}
		}if((wkx - 1) >=0 && (wky - 2) >=0){
			if((ch[(wkx - 1)][(wky - 2)])=="bh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			}
		}if((wkx - 1) >=0 && (wky + 2) <=7){
			if((ch[(wkx - 1)][(wky + 2)])=="bh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			}
		}if((wkx - 2) >=0 && (wky + 1) <=7){
			if((ch[(wkx - 2)][(ky + 1)])=="bh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			}
		}if((wkx - 2) >=0 && (wky - 1) >=0){
			if((ch[(wkx - 2)][(wky - 1)])=="bh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			}
		}
}




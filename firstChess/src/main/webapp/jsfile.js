/**
 * 
 */
function onhover(id){
	let v1 = document.getElementById(id).innerHTML;
	let q = document.getElementById(id);
	if(v1.length!=0){
		q.classList.add("addc");
		
	}
	document.getElementById(id).style.cursor = "pointer";
}

function start(){
	document.getElementById("openPage").style.cssText = "display:none";
}


var v="";
var id="";
var whit=0;
var t;
var w1=0;
var b1=0;
var temp1;
var hval=0;
var vval=0;
var northeast=0;
var northwest=0;
var southeast=0;
var southwest=0;
var str="";
var idstr="";
var uplus=0;
var dplus=0;
var lplus=0;
var rplus=0;
var p;
var kt1,kt2;
var kt3,kt4;
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
var a1,b1;
var kp;
var x1,y1,x2,y2;
var i=0,j=0;
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
var temp;
var tm;
var wc,bc;
var cv;
var wk=0;
var nm;
var bclik="";
var bclikid="";
var str1="";
var str2="";
var be1=0,be2=0,bk=0;
var wpm = ["","","","","","","",""];
var bpm = ["","","","","","","",""];

var ch = [["we","wh","wm","wq","wk","wm","wh","we","0"],
		  ["wp","wp","wp","wp","wp","wp","wp","wp","0"],
		  ["0","0","0","0","0","0","0","0","0"],
		  ["0","0","0","0","0","0","0","0","0"],
		  ["0","0","0","0","0","0","0","0","0"],
		  ["0","0","0","0","0","0","0","0","0"],
		  ["bp","bp","bp","bp","bp","bp","bp","bp","0"],
		  ["be","bh","bm","bq","bk","bm","bh","be","0"]];


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
			
			cv = bcheck();	
			if(cv==true){
				temp=wcmate();
				if(temp==true){
					document.getElementById("cmate").style.cssText="display:flex;";
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
			
			cv = wcheck();	
			if(cv==true){
				temp=bcmate();
				if(temp==true){
					document.getElementById("cmate").style.cssText="display:flex;";
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
	a1=ch[pwx1][pwy1];
	b1=ch[pwx2][pwy2];
	
	if(whit==0){		
		if((pwx1 + 1 == pwx2 && pwy1 + 1 == pwy2) || (pwx1 + 1 == pwx2 && pwy1 - 1 == pwy2)){
			if(i.charAt(2)=='b'){
				ch[pwx1][pwy1]="0";
				ch[pwx2][pwy2]="wp";
				wc=wwcolor();
				if(wc==true){
					wpm[pwy1]="0";
					if(pwx2==7){
						return 20;				
					}else			
						return true;
				}else{
					ch[pwx1][pwy1]=a1;
					ch[pwx2][pwy2]=b1;
				}
			}else if(pwx1==4){
				nm=bpm[pwy2].search(id);
				if(nm!=-1){
					ch[pwx1][pwy1]="0";
					ch[pwx2][pwy2]="wp";
					wc=wwcolor();
					if(wc==true){
						ch[pwx1][pwy2]="0";
						str1=""+pwx1+pwy2+"bp10";
						document.getElementById(str1).innerHTML="";
						document.getElementById(str1).setAttribute("id",""+pwx1+pwy2);
						return true;
					}else{
						ch[pwx1][pwy1]=a1;
						ch[pwx2][pwy2]=b1;
					}
				}
			}
		}else if(pwx1 + 2 == pwx2 && pwy1 == pwy2 && ch[(pwx1 + 2)][pwy1]=="0" && ch[(pwx1 + 1)][pwy1]=="0"){
			if(id.charAt(4)=='0'){
				ch[pwx1][pwy1]="0";
				ch[pwx2][pwy2]="wp";	
				
				wc=wwcolor();
				if(wc==true){
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
				}else{
					ch[pwx1][pwy1]=a1;
					ch[pwx2][pwy2]=b1;
				}
			}			
		}else if(pwx1 + 1 == pwx2 && pwy1 == pwy2 && ch[(pwx1 + 1)][pwy1]=="0"){
			ch[pwx1][pwy1]="0";
			ch[pwx2][pwy2]="wp";
			wc=wwcolor();
			if(wc==true){
				wpm[pwy1]="0";
				if(pwx2==7){
					return 20;				
				}else			
					return true;
			}else{
				ch[pwx1][pwy1]=a1;
				ch[pwx2][pwy2]=b1;
			}
		}
	}else{

		if((pwx1 - 1 == pwx2 && pwy1 - 1 == pwy2) || (pwx1 - 1 == pwx2 && pwy1 + 1 == pwy2)){
			if(i.charAt(2)=='w'){
					ch[pwx1][pwy1]="0";
					ch[pwx2][pwy2]="bp";
					bc=bwcolor();
					if(bc==true){
						bpm[pwy1]="0";
						if(pwx2==0){
							return 20;		
						}else
							return true;
					}else{
						ch[pwx1][pwy1]=a1;
						ch[pwx2][pwy2]=b1;
					}
			}else if(pwx1==3){
				nm=wpm[pwy2].search(id);
				if(nm!=-1){
					ch[pwx1][pwy1]="0";
					ch[pwx2][pwy2]="bp";
					bc=bwcolor();
					if(bc==true){
						ch[pwx1][pwy2]="0";
						str1=""+pwx1+pwy2+"wp10";
						document.getElementById(str1).innerHTML="";
						document.getElementById(str1).setAttribute("id",""+pwx1+pwy2);
						return true;
					}else{
						ch[pwx1][pwy1]=a1;
						ch[pwx2][pwy2]=b1;
					}
				}
			}
		}else if(pwx1 - 2 == pwx2 && pwy1 == pwy2 && ch[(pwx1 - 2)][pwy1]=="0" && ch[(pwx1 - 1)][pwy1]=="0"){
			if(id.charAt(4)=='0'){
				ch[pwx1][pwy1]="0";
				ch[pwx2][pwy2]="bp";
				bc=bwcolor();
				if(bc==true){
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
				}else{
					ch[pwx1][pwy1]=a1;
					ch[pwx2][pwy2]=b1;
				}
			}
		}else if(pwx1 - 1 == pwx2 && pwy1 == pwy2 && i.charAt(2)!='w'){			
			ch[pwx1][pwy1]="0";
			ch[pwx2][pwy2]="bp";
			bc=bwcolor();
			if(bc==true){
				bpm[pwy1]="0";
				
				if(pwx2==0){
					return 20;
				}else
					return true;
			}else{
				ch[pwx1][pwy1]=a1;
				ch[pwx2][pwy2]=b1;
			}
		}
	}
}
			

function rook(i){
	pwx1 = Number(id.charAt(0));
	pwy1 = Number(id.charAt(1));
	pwx2 = Number(i.charAt(0));
	pwy2 = Number(i.charAt(1));
	
	a1=ch[pwx1][pwy1];
	b1=ch[pwx2][pwy2];
	
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
			wc=wwcolor();
			if(wc==true){
				if(id.charAt(4)=='1')
				we1=1;
				else
				we2=1;
				return true;
			}else{
				ch[pwx1][pwy1]=a1;
				ch[pwx2][pwy2]=b1;
			}
		}
		else{
			ch[pwx2][pwy2]="be";
			bc=bwcolor();
			if(bc==true){
				if(id.charAt(4)=='1')
				be1=1;
				else
				be2=1;
				return true;
			}else{
				ch[pwx1][pwy1]=a1;
				ch[pwx2][pwy2]=b1;
			}
		}
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
			ch[pwx2][pwy2]="we";
			wc=wwcolor();
			if(wc==true){
				if(id.charAt(4)=='1')
				we1=1;
				else
				we2=1;
				return true;
			}else{
				ch[pwx1][pwy1]=a1;
				ch[pwx2][pwy2]=b1;
			}
		}
		else{
			ch[pwx2][pwy2]="be";
			bc=bwcolor();
			if(bc==true){
				if(id.charAt(4)=='1')
				be1=1;
				else
				be2=1;
				return true;
			}else{
				ch[pwx1][pwy1]=a1;
				ch[pwx2][pwy2]=b1;
			}
			
		}
		
	}
	
}

function horse(i){
	pwx1 = Number(id.charAt(0));
	pwy1 = Number(id.charAt(1));
	pwx2 = Number(i.charAt(0));
	pwy2 = Number(i.charAt(1));
	
	a1=ch[pwx1][pwy1];
	b1=ch[pwx2][pwy2];
	
	
	if((pwx1 + 2 == pwx2 && pwy1 + 1 == pwy2) || (pwx1 + 2 == pwx2 && pwy1 - 1 == pwy2) || (pwx1 + 1 == pwx2 && pwy1 + 2 == pwy2) || (pwx1 + 1 == pwx2 && pwy1 - 2 == pwy2) || (pwx1 - 1 == pwx2 && pwy1 - 2 == pwy2) || (pwx1 - 1 == pwx2 && pwy1 + 2 == pwy2) || (pwx1 - 2 == pwx2 && pwy1 + 1 == pwy2) || (pwx1 - 2 == pwx2 && pwy1 - 1 == pwy2)){
		
		if(whit==0){
			ch[pwx1][pwy1]="0";
			ch[pwx2][pwy2]="wh";
			wc=wwcolor();
			if(wc==true){
				return true;
			}else{
				ch[pwx1][pwy1]=a1;
				ch[pwx2][pwy2]=b1;
			}
		}else{
			ch[pwx1][pwy1]="0";
			ch[pwx2][pwy2]="bh";
			bc=bwcolor();
			if(bc==true){
				return true;
			}else{
				ch[pwx1][pwy1]=a1;
				ch[pwx2][pwy2]=b1;
			}
		}
		
	}
}

function bishop(i){
	pwx1 = Number(id.charAt(0));
	pwy1 = Number(id.charAt(1));
	pwx2 = Number(i.charAt(0));
	pwy2 = Number(i.charAt(1));
	
	a1=ch[pwx1][pwy1];
	b1=ch[pwx2][pwy2];
	
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
			if(whit==0){
				ch[pwx2][pwy2]="wm";
				wc=wwcolor();
				if(wc==true){
					return true;
				}else{
					ch[pwx1][pwy1]=a1;
					ch[pwx2][pwy2]=b1;
				}
			}
			else{
				ch[pwx2][pwy2]="bm";
				bc=bwcolor();
				if(bc==true){
					return true;
				}else{
					ch[pwx1][pwy1]=a1;
					ch[pwx2][pwy2]=b1;
				}
			}
			
		}else if((pwx1 < pwx2 && pwy1 > pwy2) || (pwx1 > pwx2 && pwy1 < pwy2)){
			
			for(a=x1, b=y2; a<x2; a++,b--){
				if(a==x1)
				continue;
				else if(ch[a][b]!="0"){
					return false;
				}
			}
			ch[pwx1][pwy1]="0";
			if(whit==0){
				ch[pwx2][pwy2]="wm";
				wc=wwcolor();
				if(wc==true){
					return true;
				}else{
					ch[pwx1][pwy1]=a1;
					ch[pwx2][pwy2]=b1;
				}			
			}
			else{
				ch[pwx2][pwy2]="bm";
				bc=bwcolor();
				if(bc==true){
					return true;
				}else{
					ch[pwx1][pwy1]=a1;
					ch[pwx2][pwy2]=b1;
				}
			}
			
			
		}
	}
	
}

function queen(i){
	pwx1 = Number(id.charAt(0));
	pwy1 = Number(id.charAt(1));
	pwx2 = Number(i.charAt(0));
	pwy2 = Number(i.charAt(1));
	
	a1=ch[pwx1][pwy1];
	b1=ch[pwx2][pwy2];
	
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
			ch[pwx2][pwy2]="wq";
			wc=wwcolor();
			if(wc==true){
				return true;
			}else{
				ch[pwx1][pwy1]=a1;
				ch[pwx2][pwy2]=b1;
			}
		}
		else{
			ch[pwx2][pwy2]="bq";
			bc=bwcolor();
			if(bc==true){
				return true;
			}else{
				ch[pwx1][pwy1]=a1;
				ch[pwx2][pwy2]=b1;
			}
		}
		
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
			ch[pwx2][pwy2]="wq";
			wc=wwcolor();
			if(wc==true){
				return true;
			}else{
				ch[pwx1][pwy1]=a1;
				ch[pwx2][pwy2]=b1;
			}
		}
		else{
			ch[pwx2][pwy2]="bq";
			bc=bwcolor();
			if(bc==true){
				return true;
			}else{
				ch[pwx1][pwy1]=a1;
				ch[pwx2][pwy2]=b1;
			}
		}
		
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
			if(whit==0){
				ch[pwx2][pwy2]="wq";
				wc=wwcolor();
				if(wc==true){
					return true;
				}else{
					ch[pwx1][pwy1]=a1;
					ch[pwx2][pwy2]=b1;
				}
			}
			else{
				ch[pwx2][pwy2]="bq";
				bc=bwcolor();
				if(bc==true){
					return true;
				}else{
					ch[pwx1][pwy1]=a1;
					ch[pwx2][pwy2]=b1;
				}
			}
			
			
		}else if((pwx1 < pwx2 && pwy1 > pwy2) || (pwx1 > pwx2 && pwy1 < pwy2)){
			
			for(a=x1, b=y2; a<x2; a++,b--){
				if(a==x1)
				continue;
				else if(ch[a][b]!="0"){
					return false;
				}
			}
			ch[pwx1][pwy1]="0";
			if(whit==0){
				ch[pwx2][pwy2]="wq";
				wc=wwcolor();
				if(wc==true){
					return true;
				}else{
					ch[pwx1][pwy1]=a1;
					ch[pwx2][pwy2]=b1;
				}
			}
			else{
				ch[pwx2][pwy2]="bq";
				bc=bwcolor();
				if(bc==true){
					return true;
				}else{
					ch[pwx1][pwy1]=a1;
					ch[pwx2][pwy2]=b1;
				}
			}
			
			
		}
	}
}

function king(i){
	pwx1 = Number(id.charAt(0));
	pwy1 = Number(id.charAt(1));
	pwx2 = Number(i.charAt(0));
	pwy2 = Number(i.charAt(1));
		
	a1=ch[pwx1][pwy1];
	b1=ch[pwx2][pwy2];
	
	kt1=wkx;
	kt2=wky;
	
	kt3=bkx;
	kt4=bky;
	
	if(pwx1==0 && pwy1==4 && pwx2==0 && pwy2==6 && wk==0 && we2==0){
		if(ch[0][5]=="0" && ch[0][6]=="0"){
			ch[pwx1][pwy1]="0";
			ch[pwx2][pwy2]="wk";
			wkx=pwx2;
			wky=pwy2;
			wc=wwcolor();
			if(wc==true){
				ch[0][5]="we";
				ch[0][7]="0";
				return 10;
			}else{
				ch[pwx1][pwy1]=a1;
				ch[pwx2][pwy2]=b1;
				wkx=kt1;
				wky=kt2;
			}
		}
			
	}else if(pwx1==0 && pwy1==4 && pwx2==0 && pwy2==2 && wk==0 && we1==0){
		if(ch[0][3]=="0" && ch[0][2]=="0" && ch[0][1]=="0"){
			ch[pwx1][pwy1]="0";
			ch[pwx2][pwy2]="wk";
			wkx=pwx2;
			wky=pwy2;
			wc=wwcolor();
			if(wc==true){
				ch[0][3]="we";
				ch[0][0]="0";
				return 10;
			}else{
				ch[pwx1][pwy1]=a1;
				ch[pwx2][pwy2]=b1;
				wkx=kt1;
				wky=kt2;
			}
				
		}
		
	}else if(pwx1==7 && pwy1==4 && pwx2==7 && pwy2==6 && bk==0 && be2==0){
		if(ch[7][5]=="0" && ch[7][6]=="0"){
			ch[pwx1][pwy1]="0";
			ch[pwx2][pwy2]="bk";
			bkx=pwx2;
			bky=pwy2;
			bc=bwcolor();
			if(bc==true){
				ch[7][5]="be";
				ch[7][7]="0";
				return 10;
			}else{
				ch[pwx1][pwy1]=a1;
				ch[pwx2][pwy2]=b1;
				bkx=kt3;
				bky=kt4;
			}			
		}
		
	}else if(pwx1==7 && pwy1==4 && pwx2==7 && pwy2==2 && bk==0 && be1==0){
		if(ch[7][3]=="0" && ch[7][2]=="0" && ch[7][1]=="0"){
			ch[pwx1][pwy1]="0";
			ch[pwx2][pwy2]="bk";
			bkx=pwx2;
			bky=pwy2;
			bc=bwcolor();
			if(bc==true){
				ch[7][3]="be";
				ch[7][0]="0";
				return 10;
			}else{
				ch[pwx1][pwy1]=a1;
				ch[pwx2][pwy2]=b1;
				bkx=kt3;
				bky=kt4;
			}			
		}
		
	}else if((pwx1 + 1 == pwx2 && pwy1 + 1 == pwy2) || (pwx1 + 1 == pwx2 && pwy1 == pwy2) || (pwx1 - 1 == pwx2 && pwy1 == pwy2) || (pwy1 + 1 == pwy2 && pwx1 == pwx2) || (pwy1 - 1 == pwy2 && pwx1 == pwx2) || (pwx1 - 1 == pwx2 && pwy1 + 1 == pwy2) || (pwx1 + 1 == pwx2 && pwy1 - 1 == pwy2) || (pwx1 - 1 == pwx2 && pwy1 - 1 == pwy2)){
		if(whit==0){
			ch[pwx1][pwy1]="0";
			ch[pwx2][pwy2]="wk";
			wkx=pwx2;
			wky=pwy2;
			wc=wwcolor();
			if(wc==true){
				wk=1;
				return true;
			}else{
				ch[pwx1][pwy1]=a1;
				ch[pwx2][pwy2]=b1;
				wkx=kt1;
				wky=kt2;
			}
		}else{
			ch[pwx1][pwy1]="0";
			ch[pwx2][pwy2]="bk";
			bkx=pwx2;
			bky=pwy2;
			bc=bwcolor();
			if(bc==true){
				bk=1;
				return true;
			}else{
				ch[pwx1][pwy1]=a1;
				ch[pwx2][pwy2]=b1;
				bkx=kt3;
				bky=kt4;
			}
		}
		
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
	
	a1=ch[pwx1][pwy1];
	
	if(whit==0){
		
		if(ch[pwx1 + 1][pwy1]=="0"){
			b1=ch[pwx1+1][pwy1];
			ch[pwx1+1][pwy1]="wp";
			ch[pwx1][pwy1]="0";
			wc=wwcolor();
			ch[pwx1][pwy1]=a1;
			ch[pwx1+1][pwy1]=b1;
			if(wc==true){
				mstr = ""+(pwx1+1)+pwy1;
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		
		if(i.charAt(4)=='0'){
			if(ch[pwx1 + 1][pwy1]=="0" && ch[pwx1 + 2][pwy1]=="0"){
				b1=ch[(pwx1 + 2)][(pwy1)];
				ch[(pwx1+2)][(pwy1)]="wp";
				ch[pwx1][pwy1]="0";
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1+2)][(pwy1)]=b1;
				if(wc==true){
					mstr = ""+(pwx1+2)+pwy1;
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}	
			}	
		}
		
		
		if(pwy1<7){
			if((ch[pwx1 + 1][pwy1 + 1]).charAt(0)=="b"){
				b1=ch[pwx1+1][pwy1+1];
				ch[pwx1+1][pwy1+1]="wp";
				ch[pwx1][pwy1]="0";
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[pwx1+1][pwy1+1]=b1;
				if(wc==true){
					mstr = ""+(pwx1+1)+(pwy1+1);
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				}
			}
		}
		if(pwy1>0){
			if((ch[pwx1 + 1][pwy1 - 1]).charAt(0)=="b"){
				b1=ch[pwx1+1][pwy1-1];
				ch[pwx1+1][pwy1-1]="wp";
				ch[pwx1][pwy1]="0";
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[pwx1+1][pwy1-1]=b1;
				if(wc==true){
					mstr = ""+(pwx1+1)+(pwy1-1);
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				}
			}
		}
		if(pwx1==4){
			if(pwy1>0){
				con1=bpm[pwy1-1].search(i);
				if(con1!=-1){
					b1=ch[pwx1+1][pwy1-1];
					ch[pwx1+1][pwy1-1]="wp";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+1][pwy1-1]=b1;
					if(wc==true){
						mstr = ""+(pwx1+1)+(pwy1-1);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(255, 213, 77)";
					}
				}
			}
			
			if(pwy1<7){
				con2=bpm[pwy1+1].search(i);
				if(con2!=-1){
					b1=ch[pwx1+1][pwy1+1];
					ch[pwx1+1][pwy1+1]="wp";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+1][pwy1+1]=b1;
					if(wc==true){
						mstr = ""+(pwx1+1)+(pwy1+1);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(255, 213, 77)";
					}
				}
			}
		}
		
	}else{
		
		if(ch[pwx1 - 1][pwy1]=="0"){
			b1=ch[pwx1-1][pwy1];
			ch[pwx1-1][pwy1]="bp";
			ch[pwx1][pwy1]="0";
			bc=bwcolor();
			ch[pwx1][pwy1]=a1;
			ch[pwx1-1][pwy1]=b1;
			if(bc==true){
				mstr = ""+(pwx1-1)+pwy1;
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
			}
		}
		
		if(i.charAt(4)=='0'){
			
			if(ch[pwx1 - 1][pwy1]=="0" && ch[pwx1 - 2][pwy1]=="0"){
				b1=ch[pwx1-2][pwy1];
				ch[pwx1-2][pwy1]="bp";
				ch[pwx1][pwy1]="0";
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[pwx1-2][pwy1]=b1;
				if(bc==true){
					mstr = ""+(pwx1-2)+pwy1;
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
			}
		}
		
		if(pwy1<7){
			if((ch[pwx1 - 1][pwy1 + 1]).charAt(0)=="w"){
				b1=ch[pwx1-1][pwy1+1];
				ch[pwx1-1][pwy1+1]="bp";
				ch[pwx1][pwy1]="0";
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[pwx1-1][pwy1+1]=b1;
				if(bc==true){
					mstr = ""+(pwx1-1)+(pwy1+1);
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				}
			}
		}
		if(pwy1>0){
			if((ch[pwx1 - 1][pwy1 - 1]).charAt(0)=="w"){
				b1=ch[pwx1-1][pwy1-1];
				ch[pwx1-1][pwy1-1]="bp";
				ch[pwx1][pwy1]="0";
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[pwx1-1][pwy1-1]=b1;
				if(bc==true){
					mstr = ""+(pwx1-1)+(pwy1-1);
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
				}
			}
		}
		if(pwx1==3){
			if(pwy1>0){
				con1=wpm[pwy1-1].search(i);
				if(con1!=-1){
					b1=ch[pwx1-1][pwy1-1];
					ch[pwx1-1][pwy1-1]="bp";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-1][pwy1-1]=b1;
					if(bc==true){
						mstr = ""+(pwx1-1)+(pwy1-1);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(255, 213, 77)";
					}
				}
			}
			
			if(pwy1<7){
				con2=wpm[pwy1+1].search(i);
				if(con2!=-1){
					b1=ch[pwx1-1][pwy1+1];
					ch[pwx1-1][pwy1+1]="bp";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-1][pwy1+1]=b1;
					if(bc==true){
						mstr = ""+(pwx1-1)+(pwy1+1);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(255, 213, 77)";
					}
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
	
	a1=ch[pwx1][pwy1]; 
	
	if(whit==0){
		if((pwx1 + 2) <=7 && (pwy1 + 1) <=7){
			if((ch[(pwx1 + 2)][(pwy1 + 1)]).charAt(0)!="w"){
				b1=ch[(pwx1 + 2)][(pwy1 + 1)];
				ch[(pwx1 + 2)][(pwy1 + 1)]="wh";
				ch[pwx1][pwy1]="0";
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 2)][(pwy1 + 1)]=b1;
				if(wc==true){
					mstr = ""+(pwx1 + 2)+(pwy1 + 1);
					if((ch[(pwx1 + 2)][(pwy1 + 1)]).charAt(0)=="b")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
				
			}
		}
		if((pwx1 + 2) <=7 && (pwy1 - 1) >=0){
			if((ch[(pwx1 + 2)][(pwy1 - 1)]).charAt(0)!="w"){
				b1=ch[(pwx1 + 2)][(pwy1 - 1)];
				ch[(pwx1 + 2)][(pwy1 - 1)]="wh";
				ch[pwx1][pwy1]="0";
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 2)][(pwy1 - 1)]=b1;
				if(wc==true){
					mstr = ""+(pwx1 + 2)+(pwy1 - 1);
					if((ch[(pwx1 + 2)][(pwy1 - 1)]).charAt(0)=="b")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
				
			}
		}
		if((pwx1 + 1) <=7 && (pwy1 + 2) <=7){
			if((ch[(pwx1 + 1)][(pwy1 + 2)]).charAt(0)!="w"){
				b1=ch[(pwx1 + 1)][(pwy1 + 2)];
				ch[(pwx1 + 1)][(pwy1 + 2)]="wh";
				ch[pwx1][pwy1]="0";
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 1)][(pwy1 + 2)]=b1;
				if(wc==true){
					mstr = ""+(pwx1 + 1)+(pwy1 + 2);
					if((ch[(pwx1 + 1)][(pwy1 + 2)]).charAt(0)=="b")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
				
			}
		}
		if((pwx1 + 1) <=7 && (pwy1 - 2) >=0){
			if((ch[(pwx1 + 1)][(pwy1 - 2)]).charAt(0)!="w"){
				b1=ch[(pwx1 + 1)][(pwy1 - 2)];
				ch[(pwx1 + 1)][(pwy1 - 2)]="wh";
				ch[pwx1][pwy1]="0";
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 1)][(pwy1 - 2)]=b1;
				if(wc==true){
					mstr = ""+(pwx1 + 1)+(pwy1 - 2);
					if((ch[(pwx1 + 1)][(pwy1 - 2)]).charAt(0)=="b")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
				
			}
		}
		if((pwx1 - 1) >=0 && (pwy1 - 2) >=0){
			if((ch[(pwx1 - 1)][(pwy1 - 2)]).charAt(0)!="w"){
				b1=ch[(pwx1 - 1)][(pwy1 - 2)];
				ch[(pwx1 - 1)][(pwy1 - 2)]="wh";
				ch[pwx1][pwy1]="0";
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 1)][(pwy1 - 2)]=b1;
				if(wc==true){
					mstr = ""+(pwx1 - 1)+(pwy1 - 2);
					if((ch[(pwx1 - 1)][(pwy1 - 2)]).charAt(0)=="b")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
				
			}
		}
		if((pwx1 - 1) >=0 && (pwy1 + 2) <=7){
			if((ch[(pwx1 - 1)][(pwy1 + 2)]).charAt(0)!="w"){
				b1=ch[(pwx1 - 1)][(pwy1 + 2)];
				ch[(pwx1 - 1)][(pwy1 + 2)]="wh";
				ch[pwx1][pwy1]="0";
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 1)][(pwy1 + 2)]=b1;
				wc=wwcolor();
				if(wc==true){
					mstr = ""+(pwx1 - 1)+(pwy1 + 2);
					if((ch[(pwx1 - 1)][(pwy1 + 2)]).charAt(0)=="b")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
				
			}
		}
		if((pwx1 - 2) >=0 && (pwy1 + 1) <=7){
			if((ch[(pwx1 - 2)][(pwy1 + 1)]).charAt(0)!="w"){
				b1=ch[(pwx1 - 2)][(pwy1 + 1)];
				ch[(pwx1 - 2)][(pwy1 + 1)]="wh";
				ch[pwx1][pwy1]="0";
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 2)][(pwy1 + 1)]=b1;
				if(wc==true){
					mstr = ""+(pwx1 - 2)+(pwy1 + 1);
					if((ch[(pwx1 - 2)][(pwy1 + 1)]).charAt(0)=="b")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
				
			}
		}
		if((pwx1 - 2) >=0 && (pwy1 - 1) >=0){
			if((ch[(pwx1 - 2)][(pwy1 - 1)]).charAt(0)!="w"){
				b1=ch[(pwx1 - 2)][(pwy1 - 1)];
				ch[(pwx1 - 2)][(pwy1 - 1)]="wh";
				ch[pwx1][pwy1]="0";
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 2)][(pwy1 - 1)]=b1;
				if(wc==true){
					mstr = ""+(pwx1 - 2)+(pwy1 - 1);
					if((ch[(pwx1 - 2)][(pwy1 - 1)]).charAt(0)=="b")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
				
			}
		}
	}else{
		if((pwx1 + 2) <=7 && (pwy1 + 1) <=7){
			if((ch[(pwx1 + 2)][(pwy1 + 1)]).charAt(0)!="b"){
				b1=ch[(pwx1 + 2)][(pwy1 + 1)];
				ch[(pwx1 + 2)][(pwy1 + 1)]="bh";
				ch[pwx1][pwy1]="0";
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 2)][(pwy1 + 1)]=b1;
				if(bc==true){
					mstr = ""+(pwx1 + 2)+(pwy1 + 1);
					if((ch[(pwx1 + 2)][(pwy1 + 1)]).charAt(0)=="w")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
				
			}
		}
		if((pwx1 + 2) <=7 && (pwy1 - 1) >=0){
			if((ch[(pwx1 + 2)][(pwy1 - 1)]).charAt(0)!="b"){
				b1=ch[(pwx1 + 2)][(pwy1 - 1)];
				ch[(pwx1 + 2)][(pwy1 - 1)]="bh";
				ch[pwx1][pwy1]="0";
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 2)][(pwy1 - 1)]=b1;
				if(bc==true){
					mstr = ""+(pwx1 + 2)+(pwy1 - 1);
					if((ch[(pwx1 + 2)][(pwy1 - 1)]).charAt(0)=="w")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
				
			}
		}
		if((pwx1 + 1) <=7 && (pwy1 + 2) <=7){
			if((ch[(pwx1 + 1)][(pwy1 + 2)]).charAt(0)!="b"){
				b1=ch[(pwx1 + 1)][(pwy1 + 2)];
				ch[(pwx1 + 1)][(pwy1 + 2)]="bh";
				ch[pwx1][pwy1]="0";
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 1)][(pwy1 + 2)]=b1;
				if(bc==true){
					mstr = ""+(pwx1 + 1)+(pwy1 + 2);
					if((ch[(pwx1 + 1)][(pwy1 + 2)]).charAt(0)=="w")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
				
			}
		}
		if((pwx1 + 1) <=7 && (pwy1 - 2) >=0){
			if((ch[(pwx1 + 1)][(pwy1 - 2)]).charAt(0)!="b"){
				b1=ch[(pwx1 + 1)][(pwy1 - 2)];
				ch[(pwx1 + 1)][(pwy1 - 2)]="bh";
				ch[pwx1][pwy1]="0";
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 1)][(pwy1 - 2)]=b1;
				if(bc==true){
					mstr = ""+(pwx1 + 1)+(pwy1 - 2);
					if((ch[(pwx1 + 1)][(pwy1 - 2)]).charAt(0)=="w")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
				
			}
		}
		if((pwx1 - 1) >=0 && (pwy1 - 2) >=0){
			if((ch[(pwx1 - 1)][(pwy1 - 2)]).charAt(0)!="b"){
				b1=ch[(pwx1 - 1)][(pwy1 - 2)];
				ch[(pwx1 - 1)][(pwy1 - 2)]="bh";
				ch[pwx1][pwy1]="0";
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 1)][(pwy1 - 2)]=b1;
				if(bc==true){
					mstr = ""+(pwx1 - 1)+(pwy1 - 2);
					if((ch[(pwx1 - 1)][(pwy1 - 2)]).charAt(0)=="w")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
				
			}
		}
		if((pwx1 - 1) >=0 && (pwy1 + 2) <=7){
			if((ch[(pwx1 - 1)][(pwy1 + 2)]).charAt(0)!="b"){
				b1=ch[(pwx1 - 1)][(pwy1 + 2)];
				ch[(pwx1 - 1)][(pwy1 + 2)]="bh";
				ch[pwx1][pwy1]="0";
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 1)][(pwy1 + 2)]=b1;
				if(bc==true){
					mstr = ""+(pwx1 - 1)+(pwy1 + 2);
					if((ch[(pwx1 - 1)][(pwy1 + 2)]).charAt(0)=="w")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
				
			}
		}
		if((pwx1 - 2) >=0 && (pwy1 + 1) <=7){
			if((ch[(pwx1 - 2)][(pwy1 + 1)]).charAt(0)!="b"){
				b1=ch[(pwx1 - 2)][(pwy1 + 1)];
				ch[(pwx1 - 2)][(pwy1 + 1)]="bh";
				ch[pwx1][pwy1]="0";
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 2)][(pwy1 + 1)]=b1;
				if(bc==true){
					mstr = ""+(pwx1 - 2)+(pwy1 + 1);
					if((ch[(pwx1 - 2)][(pwy1 + 1)]).charAt(0)=="w")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
				
			}
		}
		if((pwx1 - 2) >=0 && (pwy1 - 1) >=0){
			if((ch[(pwx1 - 2)][(pwy1 - 1)]).charAt(0)!="b"){
				b1=ch[(pwx1 - 2)][(pwy1 - 1)];
				ch[(pwx1 - 2)][(pwy1 - 1)]="bh";
				ch[pwx1][pwy1]="0";
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 2)][(pwy1 - 1)]=b1;
				if(bc==true){
					mstr = ""+(pwx1 - 2)+(pwy1 - 1);
					if((ch[(pwx1 - 2)][(pwy1 - 1)]).charAt(0)=="w")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
				
			}
		}
	}
}


function kOptions(i){
	pwx1 = Number(i.charAt(0));
	pwy1 = Number(i.charAt(1));
	
	a1=ch[pwx1][pwy1];
	
	kt1=wkx;
	kt2=wky;
	
	kt3=bkx;
	kt4=bky;
	
	if(whit==0){
		
		if(pwx1==0 && pwy1==4 && wk==0 && we2==0 && ch[0][5]=="0" && ch[0][6]=="0"){
			ch[0][6]="wk";
			ch[0][4]="0";
			wkx=0;
			wky=6;
			wc=wwcolor();
			ch[0][6]="0";
			ch[0][4]="wk";
			wkx=kt1;
			wky=kt2;
			if(wc==true){
				mstr = ""+0+5;
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				mstr = ""+0+6;
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(255, 213, 77)";
			}
		}
		
		if(pwx1==0 && pwy1==4 && wk==0 && we1==0 && ch[0][3]=="0" && ch[0][2]=="0" && ch[0][1]=="0"){
			ch[0][2]="wk";
			ch[0][4]="0";
			wkx=0;
			wky=2;
			wc=wwcolor();
			ch[0][2]="0";
			ch[0][4]="wk";
			wkx=kt1;
			wky=kt2;
			if(wc==true){
				mstr = ""+0+3;
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				mstr = ""+0+2;
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(255, 213, 77)";
			}
		}
		
		if(pwx1 + 1 <=7){
			if((ch[(pwx1 + 1)][(pwy1)]).charAt(0)!="w"){
				b1=ch[(pwx1 + 1)][(pwy1)];
				ch[(pwx1 + 1)][(pwy1)]="wk";
				ch[pwx1][pwy1]="0";
				wkx=pwx1+1;
				wky=pwy1;
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 1)][(pwy1)]=b1;
				wkx=kt1;
				wky=kt2;
				if(wc==true){
					mstr = ""+(pwx1 + 1)+(pwy1);
					if((ch[(pwx1 + 1)][(pwy1)]).charAt(0)=="b")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
			}
		}
		if(pwx1 - 1 >=0){
			if((ch[(pwx1 - 1)][(pwy1)]).charAt(0)!="w"){
				b1=ch[(pwx1 - 1)][(pwy1)];
				ch[(pwx1 - 1)][(pwy1)]="wk";
				ch[pwx1][pwy1]="0";
				wkx=pwx1-1;
				wky=pwy1;
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 1)][(pwy1)]=b1;
				wkx=kt1;
				wky=kt2;
				if(wc==true){
					mstr = ""+(pwx1 - 1)+(pwy1);
					if((ch[(pwx1 - 1)][(pwy1)]).charAt(0)=="b")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
			}
		}
		if(pwy1 + 1 <=7){
			if((ch[(pwx1)][(pwy1 + 1)]).charAt(0)!="w"){
				b1=ch[(pwx1)][(pwy1 + 1)];
				ch[(pwx1)][(pwy1 + 1)]="wk";
				ch[pwx1][pwy1]="0";
				wkx=pwx1;
				wky=pwy1+1;
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1)][(pwy1 + 1)]=b1;
				wkx=kt1;
				wky=kt2;
				if(wc==true){
					mstr = ""+(pwx1)+(pwy1 + 1);
					if((ch[(pwx1)][(pwy1 + 1)]).charAt(0)=="b")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
			}
		}
		if(pwy1 - 1 >=0){
			if((ch[(pwx1)][(pwy1 - 1)]).charAt(0)!="w"){
				b1=ch[(pwx1)][(pwy1 - 1)];
				ch[(pwx1)][(pwy1 - 1)]="wk";
				ch[pwx1][pwy1]="0";
				wkx=pwx1;
				wky=pwy1-1;
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1)][(pwy1 - 1)]=b1;
				wkx=kt1;
				wky=kt2;
				if(wc==true){
					mstr = ""+(pwx1)+(pwy1 - 1);
					if((ch[(pwx1)][(pwy1 - 1)]).charAt(0)=="b")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
			}
		}
		if(pwx1 +1 <=7 && pwy1 + 1 <= 7){
			if((ch[(pwx1 + 1)][(pwy1 + 1)]).charAt(0)!="w"){
				b1=ch[(pwx1 + 1)][(pwy1 + 1)];
				ch[(pwx1 + 1)][(pwy1 + 1)]="wk";
				ch[pwx1][pwy1]="0";
				wkx=pwx1+1;
				wky=pwy1+1;
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1+1)][(pwy1 + 1)]=b1;
				wkx=kt1;
				wky=kt2;
				if(wc==true){
					mstr = ""+(pwx1 + 1)+(pwy1 + 1);
					if((ch[(pwx1 + 1)][(pwy1 + 1)]).charAt(0)=="b")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
			}
		}
		if(pwx1 -1 >=0 && pwy1 + 1 <= 7){
			if((ch[(pwx1 - 1)][(pwy1 + 1)]).charAt(0)!="w"){
				b1=ch[(pwx1-1)][(pwy1 + 1)];
				ch[(pwx1-1)][(pwy1 + 1)]="wk";
				ch[pwx1][pwy1]="0";
				wkx=pwx1-1;
				wky=pwy1+1;
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1-1)][(pwy1 + 1)]=b1;
				wkx=kt1;
				wky=kt2;
				if(wc==true){
					mstr = ""+(pwx1 - 1)+(pwy1 + 1);
					if((ch[(pwx1 - 1)][(pwy1 + 1)]).charAt(0)=="b")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
			}
		}
		if(pwx1 +1 <=7 && pwy1 - 1 >=0){
			if((ch[(pwx1 + 1)][(pwy1 - 1)]).charAt(0)!="w"){
				b1=ch[(pwx1+1)][(pwy1 - 1)];
				ch[(pwx1+1)][(pwy1 - 1)]="wk";
				ch[pwx1][pwy1]="0";
				wkx=pwx1+1;
				wky=pwy1-1;
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1+1)][(pwy1 - 1)]=b1;
				wkx=kt1;
				wky=kt2;
				if(wc==true){
					mstr = ""+(pwx1 + 1)+(pwy1 - 1);
					if((ch[(pwx1 + 1)][(pwy1 - 1)]).charAt(0)=="b")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
			}
		}
		if(pwx1 -1 >=0 && pwy1 - 1 >=0){
			if((ch[(pwx1 - 1)][(pwy1 - 1)]).charAt(0)!="w"){
				b1=ch[(pwx1-1)][(pwy1 - 1)];
				ch[(pwx1-1)][(pwy1 - 1)]="wk";
				ch[pwx1][pwy1]="0";
				wkx=pwx1-1;
				wky=pwy1-1;
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1-1)][(pwy1 - 1)]=b1;
				wkx=kt1;
				wky=kt2;
				if(wc==true){
					mstr = ""+(pwx1 - 1)+(pwy1 - 1);
					if((ch[(pwx1 - 1)][(pwy1 - 1)]).charAt(0)=="b")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
			}
		}
	}else{
	
	
		if(pwx1==7 && pwy1==4 && bk==0 && be2==0 && ch[7][5]=="0" && ch[7][6]=="0"){
			ch[7][6]="bk";
			ch[7][4]="0";
			bkx=7;
			bky=6;
			bc=bwcolor();
			ch[7][6]="0";
			ch[7][4]="bk";
			bkx=kt3;
			bky=kt4;
			if(bc==true){
				mstr = ""+7+5;
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				mstr = ""+7+6;
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(255, 213, 77)";
			}
		}
		
		if(pwx1==7 && pwy1==4 && bk==0 && be1==0 && ch[7][3]=="0" && ch[7][2]=="0" && ch[7][1]=="0"){
			ch[7][2]="bk";
			ch[7][4]="0";
			bkx=7;
			bky=2;
			bc=bwcolor();
			ch[7][2]="0";
			ch[7][4]="bk";
			bkx=kt3;
			bky=kt4;
			if(bc==true){
				mstr = ""+7+3;
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				mstr = ""+7+2;
				document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(255, 213, 77)";
			}
		}
		
		if(pwx1 + 1 <=7){
			if((ch[(pwx1 + 1)][(pwy1)]).charAt(0)!="b"){
				b1=ch[(pwx1 + 1)][(pwy1)];
				ch[(pwx1 + 1)][(pwy1)]="bk";
				ch[pwx1][pwy1]="0";
				bkx=pwx1+1;
				bky=pwy1;
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 1)][(pwy1)]=b1;
				bkx=kt3;
				bky=kt4;
				if(bc==true){
					mstr = ""+(pwx1 + 1)+(pwy1);
					if((ch[(pwx1 + 1)][(pwy1)]).charAt(0)=="w")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
			}
		}
		if(pwx1 - 1 >=0){
			if((ch[(pwx1 - 1)][(pwy1)]).charAt(0)!="b"){
				b1=ch[(pwx1 - 1)][(pwy1)];
				ch[(pwx1 - 1)][(pwy1)]="bk";
				ch[pwx1][pwy1]="0";
				bkx=pwx1-1;
				bky=pwy1;
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 1)][(pwy1)]=b1;
				bkx=kt3;
				bky=kt4;
				if(bc==true){
					mstr = ""+(pwx1 - 1)+(pwy1);
					if((ch[(pwx1 - 1)][(pwy1)]).charAt(0)=="w")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
			}
		}
		if(pwy1 + 1 <=7){
			if((ch[(pwx1)][(pwy1 + 1)]).charAt(0)!="b"){
				b1=ch[(pwx1)][(pwy1+1)];
				ch[(pwx1)][(pwy1+1)]="bk";
				ch[pwx1][pwy1]="0";
				bkx=pwx1;
				bky=pwy1+1;
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1)][(pwy1+1)]=b1;
				bkx=kt3;
				bky=kt4;
				if(bc==true){
					mstr = ""+(pwx1)+(pwy1 + 1);
					if((ch[(pwx1)][(pwy1 + 1)]).charAt(0)=="w")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
			}
		}
		if(pwy1 - 1 >=0){
			if((ch[(pwx1)][(pwy1 - 1)]).charAt(0)!="b"){
				b1=ch[(pwx1)][(pwy1-1)];
				ch[(pwx1)][(pwy1-1)]="bk";
				ch[pwx1][pwy1]="0";
				bkx=pwx1;
				bky=pwy1-1;
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1)][(pwy1-1)]=b1;
				bkx=kt3;
				bky=kt4;
				if(bc==true){
					mstr = ""+(pwx1)+(pwy1 - 1);
					if((ch[(pwx1)][(pwy1 - 1)]).charAt(0)=="w")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
			}
		}
		if(pwx1 +1 <=7 && pwy1 + 1 <= 7){
			if((ch[(pwx1 + 1)][(pwy1 + 1)]).charAt(0)!="b"){
				b1=ch[(pwx1 + 1)][(pwy1+1)];
				ch[(pwx1 + 1)][(pwy1+1)]="bk";
				ch[pwx1][pwy1]="0";
				bkx=pwx1+1;
				bky=pwy1+1;
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 1)][(pwy1+1)]=b1;
				bkx=kt3;
				bky=kt4;
				if(bc==true){
					mstr = ""+(pwx1 + 1)+(pwy1 + 1);
					if((ch[(pwx1 + 1)][(pwy1 + 1)]).charAt(0)=="w")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
			}
		}
		if(pwx1 -1 >=0 && pwy1 + 1 <= 7){
			if((ch[(pwx1 - 1)][(pwy1 + 1)]).charAt(0)!="b"){
				b1=ch[(pwx1 - 1)][(pwy1+1)];
				ch[(pwx1 - 1)][(pwy1+1)]="bk";
				ch[pwx1][pwy1]="0";
				bkx=pwx1-1;
				bky=pwy1+1;
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 1)][(pwy1+1)]=b1;
				bkx=kt3;
				bky=kt4;
				if(bc==true){
					mstr = ""+(pwx1 - 1)+(pwy1 + 1);
					if((ch[(pwx1 - 1)][(pwy1 + 1)]).charAt(0)=="w")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
			}
		}
		if(pwx1 +1 <=7 && pwy1 - 1 >=0){
			if((ch[(pwx1 + 1)][(pwy1 - 1)]).charAt(0)!="b"){
				b1=ch[(pwx1 + 1)][(pwy1-1)];
				ch[(pwx1 + 1)][(pwy1-1)]="bk";
				ch[pwx1][pwy1]="0";
				bkx=pwx1+1;
				bky=pwy1-1;
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 1)][(pwy1-1)]=b1;
				bkx=kt3;
				bky=kt4;
				if(bc==true){
					mstr = ""+(pwx1 + 1)+(pwy1 - 1);
					if((ch[(pwx1 + 1)][(pwy1 - 1)]).charAt(0)=="w")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
			}
		}
		if(pwx1 -1 >=0 && pwy1 - 1 >=0){
			if((ch[(pwx1 - 1)][(pwy1 - 1)]).charAt(0)!="b"){
				b1=ch[(pwx1 - 1)][(pwy1-1)];
				ch[(pwx1 - 1)][(pwy1-1)]="bk";
				ch[pwx1][pwy1]="0";
				bkx=pwx1-1;
				bky=pwy1-1;
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 1)][(pwy1-1)]=b1;
				bkx=kt3;
				bky=kt4;
				if(bc==true){
					mstr = ""+(pwx1 - 1)+(pwy1 - 1);
					if((ch[(pwx1 - 1)][(pwy1 - 1)]).charAt(0)=="w")
					document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
					else
					document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
				}
			}
		}
	}
	
	
}



function rOptions(i){
	pwx1 = Number(i.charAt(0));
	pwy1 = Number(i.charAt(1));
	
	a1=ch[pwx1][pwy1];
	
	uplus=0;
	lplus=0;
	rplus=0;
	dplus=0;
	
	//down to top
	hval=1;
	for(n=0;n<8;n++){
		if(pwx1+hval<=7 && uplus==0){
		if(ch[pwx1+hval][pwy1]!="0"){
				if((whit==0 && (ch[pwx1+hval][pwy1]).charAt(0)=="b") || (whit==1 && (ch[pwx1+hval][pwy1]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1+hval][pwy1];
						ch[pwx1+hval][pwy1]="we";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1]=b1;
						if(wc==true){		
							mstr = ""+(pwx1+hval)+pwy1;
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}else{
						b1=ch[pwx1+hval][pwy1];
						ch[pwx1+hval][pwy1]="be";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1]=b1;
						if(bc==true){		
							mstr = ""+(pwx1+hval)+pwy1;
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}
					uplus=1;		
				}else
				uplus=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1+hval][pwy1];
					ch[pwx1+hval][pwy1]="we";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1]=b1;
					if(wc==true){
						mstr = ""+(pwx1+hval)+pwy1;
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}else{
					b1=ch[pwx1+hval][pwy1];
					ch[pwx1+hval][pwy1]="be";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1]=b1;
					if(bc==true){
						mstr = ""+(pwx1+hval)+pwy1;
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}
			}
		}
		hval++;
	}
		
	//top to down
	hval=1;
	for(n=0;n<8;n++){
		if(pwx1-hval>=0 && dplus==0){
		if(ch[pwx1-hval][pwy1]!="0"){
				if((whit==0 && (ch[pwx1-hval][pwy1]).charAt(0)=="b") || (whit==1 && (ch[pwx1-hval][pwy1]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1-hval][pwy1];
						ch[pwx1-hval][pwy1]="we";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1]=b1;
						if(wc==true){		
							mstr = ""+(pwx1-hval)+pwy1;
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}else{
						b1=ch[pwx1-hval][pwy1];
						ch[pwx1-hval][pwy1]="be";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1]=b1;
						if(bc==true){		
							mstr = ""+(pwx1-hval)+pwy1;
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}
					dplus=1;		
				}else
				dplus=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1-hval][pwy1];
					ch[pwx1-hval][pwy1]="we";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1]=b1;
					if(wc==true){
						mstr = ""+(pwx1-hval)+pwy1;
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}else{
					b1=ch[pwx1-hval][pwy1];
					ch[pwx1-hval][pwy1]="be";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1]=b1;
					if(bc==true){
						mstr = ""+(pwx1-hval)+pwy1;
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}
			}
		}
		hval++;

	}
		
	//right to left
	hval=1;
	for(n=0;n<8;n++){
		if(pwy1-hval>=0 && rplus==0){
		if(ch[pwx1][pwy1-hval]!="0"){
				if((whit==0 && (ch[pwx1][pwy1-hval]).charAt(0)=="b") || (whit==1 && (ch[pwx1][pwy1-hval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1][pwy1-hval];
						ch[pwx1][pwy1-hval]="we";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1][pwy1-hval]=b1;
						if(wc==true){		
							mstr = ""+(pwx1)+(pwy1-hval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}else{
						b1=ch[pwx1][pwy1-hval];
						ch[pwx1][pwy1-hval]="be";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1][pwy1-hval]=b1;
						if(bc==true){		
							mstr = ""+(pwx1)+(pwy1-hval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}
					rplus=1;		
				}else
				rplus=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1][pwy1-hval];
					ch[pwx1][pwy1-hval]="we";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1][pwy1-hval]=b1;
					if(wc==true){
						mstr = ""+(pwx1)+(pwy1-hval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}else{
					b1=ch[pwx1][pwy1-hval];
					ch[pwx1][pwy1-hval]="be";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1][pwy1-hval]=b1;
					if(bc==true){
						mstr = ""+(pwx1)+(pwy1-hval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}
			}
		}
		hval++;

	}
		
		
	//left to right
	hval=1;
	for(n=0;n<8;n++){
		if(pwy1+hval>=0 && lplus==0){
	if(ch[pwx1][pwy1+hval]!="0"){
				if((whit==0 && (ch[pwx1][pwy1+hval]).charAt(0)=="b") || (whit==1 && (ch[pwx1][pwy1+hval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1][pwy1+hval];
						ch[pwx1][pwy1+hval]="we";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1][pwy1+hval]=b1;
						if(wc==true){		
							mstr = ""+(pwx1)+(pwy1+hval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}else{
						b1=ch[pwx1][pwy1+hval];
						ch[pwx1][pwy1+hval]="be";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1][pwy1+hval]=b1;
						if(bc==true){		
							mstr = ""+(pwx1)+(pwy1+hval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}
					lplus=1;		
				}else
				lplus=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1][pwy1+hval];
					ch[pwx1][pwy1+hval]="we";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1][pwy1+hval]=b1;
					if(wc==true){
						mstr = ""+(pwx1)+(pwy1+hval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}else{
					b1=ch[pwx1][pwy1+hval];
					ch[pwx1][pwy1+hval]="be";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1][pwy1+hval]=b1;
					if(bc==true){
						mstr = ""+(pwx1)+(pwy1+hval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}
			}
		}
		hval++;

	}
		
}

function qOne(){
	if(pwx1+hval<=7 && uplus==0){
		if(ch[pwx1+hval][pwy1]!="0"){
				if((whit==0 && (ch[pwx1+hval][pwy1]).charAt(0)=="b") || (whit==1 && (ch[pwx1+hval][pwy1]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1+hval][pwy1];
						ch[pwx1+hval][pwy1]="wq";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1]=b1;
						if(wc==true){		
							mstr = ""+(pwx1+hval)+pwy1;
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}else{
						b1=ch[pwx1+hval][pwy1];
						ch[pwx1+hval][pwy1]="bq";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1]=b1;
						if(bc==true){		
							mstr = ""+(pwx1+hval)+pwy1;
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}
					uplus=1;		
				}else
				uplus=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1+hval][pwy1];
					ch[pwx1+hval][pwy1]="wq";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1]=b1;
					if(wc==true){
						mstr = ""+(pwx1+hval)+pwy1;
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}else{
					b1=ch[pwx1+hval][pwy1];
					ch[pwx1+hval][pwy1]="bq";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1]=b1;
					if(bc==true){
						mstr = ""+(pwx1+hval)+pwy1;
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}
			}
		}
		hval++;
}

function qTwo(){
	if(pwx1-hval>=0 && dplus==0){
		if(ch[pwx1-hval][pwy1]!="0"){
				if((whit==0 && (ch[pwx1-hval][pwy1]).charAt(0)=="b") || (whit==1 && (ch[pwx1-hval][pwy1]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1-hval][pwy1];
						ch[pwx1-hval][pwy1]="wq";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1]=b1;
						if(wc==true){		
							mstr = ""+(pwx1-hval)+pwy1;
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}else{
						b1=ch[pwx1-hval][pwy1];
						ch[pwx1-hval][pwy1]="bq";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1]=b1;
						if(bc==true){		
							mstr = ""+(pwx1-hval)+pwy1;
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}
					dplus=1;		
				}else
				dplus=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1-hval][pwy1];
					ch[pwx1-hval][pwy1]="wq";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1]=b1;
					if(wc==true){
						mstr = ""+(pwx1-hval)+pwy1;
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}else{
					b1=ch[pwx1-hval][pwy1];
					ch[pwx1-hval][pwy1]="bq";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1]=b1;
					if(bc==true){
						mstr = ""+(pwx1-hval)+pwy1;
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}
			}
		}
		hval++;

}

function qThree(){
	if(pwy1-hval>=0 && rplus==0){
		if(ch[pwx1][pwy1-hval]!="0"){
				if((whit==0 && (ch[pwx1][pwy1-hval]).charAt(0)=="b") || (whit==1 && (ch[pwx1][pwy1-hval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1][pwy1-hval];
						ch[pwx1][pwy1-hval]="wq";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1][pwy1-hval]=b1;
						if(wc==true){		
							mstr = ""+(pwx1)+(pwy1-hval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}else{
						b1=ch[pwx1][pwy1-hval];
						ch[pwx1][pwy1-hval]="bq";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1][pwy1-hval]=b1;
						if(bc==true){		
							mstr = ""+(pwx1)+(pwy1-hval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}
					rplus=1;		
				}else
				rplus=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1][pwy1-hval];
					ch[pwx1][pwy1-hval]="wq";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1][pwy1-hval]=b1;
					if(wc==true){
						mstr = ""+(pwx1)+(pwy1-hval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}else{
					b1=ch[pwx1][pwy1-hval];
					ch[pwx1][pwy1-hval]="bq";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1][pwy1-hval]=b1;
					if(bc==true){
						mstr = ""+(pwx1)+(pwy1-hval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}
			}
		}
		hval++;

}

function qFour(){
	if(pwy1+hval>=0 && lplus==0){
	if(ch[pwx1][pwy1+hval]!="0"){
				if((whit==0 && (ch[pwx1][pwy1+hval]).charAt(0)=="b") || (whit==1 && (ch[pwx1][pwy1+hval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1][pwy1+hval];
						ch[pwx1][pwy1+hval]="wq";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1][pwy1+hval]=b1;
						if(wc==true){		
							mstr = ""+(pwx1)+(pwy1+hval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}else{
						b1=ch[pwx1][pwy1+hval];
						ch[pwx1][pwy1+hval]="bq";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1][pwy1+hval]=b1;
						if(bc==true){		
							mstr = ""+(pwx1)+(pwy1+hval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}
					lplus=1;		
				}else
				lplus=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1][pwy1+hval];
					ch[pwx1][pwy1+hval]="wq";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1][pwy1+hval]=b1;
					if(wc==true){
						mstr = ""+(pwx1)+(pwy1+hval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}else{
					b1=ch[pwx1][pwy1+hval];
					ch[pwx1][pwy1+hval]="bq";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1][pwy1+hval]=b1;
					if(bc==true){
						mstr = ""+(pwx1)+(pwy1+hval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}
			}
		}
		hval++;

}

function qFive(){
	if(pwx1+hval<=7 && pwy1+vval<=7 && northeast==0){
		if(ch[pwx1+hval][pwy1+vval]!="0"){
				if((whit==0 && (ch[pwx1+hval][pwy1+vval]).charAt(0)=="b") || (whit==1 && (ch[pwx1+hval][pwy1+vval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1+hval][pwy1+vval];
						ch[pwx1+hval][pwy1+vval]="wq";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1+vval]=b1;
						if(wc==true){		
							mstr = ""+(pwx1+hval)+(pwy1+vval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}else{
						b1=ch[pwx1+hval][pwy1+vval];
						ch[pwx1+hval][pwy1+vval]="bq";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1+vval]=b1;
						if(bc==true){		
							mstr = ""+(pwx1+hval)+(pwy1+vval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}
					northeast=1;
				}else
				northeast=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1+hval][pwy1+vval];
					ch[pwx1+hval][pwy1+vval]="wq";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1+vval]=b1;
					if(wc==true){
						mstr = ""+(pwx1+hval)+(pwy1+vval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}else{
					b1=ch[pwx1+hval][pwy1+vval];
					ch[pwx1+hval][pwy1+vval]="bq";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1+vval]=b1;
					if(bc==true){
						mstr = ""+(pwx1+hval)+(pwy1+vval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}
			}
		}
		hval++;
		vval++;

}

function qSix(){
	if(pwx1+hval<=7 && pwy1-vval>=0 && northwest==0){
		if(ch[pwx1+hval][pwy1-vval]!="0"){
				if((whit==0 && (ch[pwx1+hval][pwy1-vval]).charAt(0)=="b") || (whit==1 && (ch[pwx1+hval][pwy1-vval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1+hval][pwy1-vval];
						ch[pwx1+hval][pwy1-vval]="wq";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1-vval]=b1;
						if(wc==true){		
							mstr = ""+(pwx1+hval)+(pwy1-vval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}else{
						b1=ch[pwx1+hval][pwy1-vval];
						ch[pwx1+hval][pwy1-vval]="bq";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1-vval]=b1;
						if(bc==true){		
							mstr = ""+(pwx1+hval)+(pwy1-vval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}
					northwest=1;
				}else
				northwest=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1+hval][pwy1-vval];
					ch[pwx1+hval][pwy1-vval]="wq";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1-vval]=b1;
					if(wc==true){
						mstr = ""+(pwx1+hval)+(pwy1-vval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}else{
					b1=ch[pwx1+hval][pwy1-vval];
					ch[pwx1+hval][pwy1-vval]="bq";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1-vval]=b1;
					if(bc==true){
						mstr = ""+(pwx1+hval)+(pwy1-vval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}
			}
		}
		hval++;
		vval++;

}

function qSeven(){
	if(pwx1-hval>=0 && pwy1-vval>=0 && southwest==0){
		if(ch[pwx1-hval][pwy1-vval]!="0"){
				if((whit==0 && (ch[pwx1-hval][pwy1-vval]).charAt(0)=="b") || (whit==1 && (ch[pwx1-hval][pwy1-vval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1-hval][pwy1-vval];
						ch[pwx1-hval][pwy1-vval]="wq";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1-vval]=b1;
						if(wc==true){		
							mstr = ""+(pwx1-hval)+(pwy1-vval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}else{
						b1=ch[pwx1-hval][pwy1-vval];
						ch[pwx1-hval][pwy1-vval]="bq";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1-vval]=b1;
						if(bc==true){		
							mstr = ""+(pwx1-hval)+(pwy1-vval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}
					southwest=1;
				}else
				southwest=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1-hval][pwy1-vval];
					ch[pwx1-hval][pwy1-vval]="wq";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1-vval]=b1;
					if(wc==true){
						mstr = ""+(pwx1-hval)+(pwy1-vval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}else{
					b1=ch[pwx1-hval][pwy1-vval];
					ch[pwx1-hval][pwy1-vval]="bq";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1-vval]=b1;
					if(bc==true){
						mstr = ""+(pwx1-hval)+(pwy1-vval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}
			}
		}
		hval++;
		vval++;

}

function qEight(){
	if(pwx1-hval>=0 && pwy1+vval<=7 && southeast==0){
		if(ch[pwx1-hval][pwy1+vval]!="0"){
				if((whit==0 && (ch[pwx1-hval][pwy1+vval]).charAt(0)=="b") || (whit==1 && (ch[pwx1-hval][pwy1+vval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1-hval][pwy1+vval];
						ch[pwx1-hval][pwy1+vval]="wq";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1+vval]=b1;
						if(wc==true){		
							mstr = ""+(pwx1-hval)+(pwy1+vval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}else{
						b1=ch[pwx1-hval][pwy1+vval];
						ch[pwx1-hval][pwy1+vval]="bq";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1+vval]=b1;
						if(bc==true){		
							mstr = ""+(pwx1-hval)+(pwy1+vval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}
					southeast=1;
				}else
				southeast=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1-hval][pwy1+vval];
					ch[pwx1-hval][pwy1+vval]="wq";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1+vval]=b1;
					if(wc==true){
						mstr = ""+(pwx1-hval)+(pwy1+vval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}else{
					b1=ch[pwx1-hval][pwy1+vval];
					ch[pwx1-hval][pwy1+vval]="bq";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1+vval]=b1;
					if(bc==true){
						mstr = ""+(pwx1-hval)+(pwy1+vval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}
			}
		}
		hval++;
		vval++;

}

function qOptions(i){
	pwx1 = Number(i.charAt(0));
	pwy1 = Number(i.charAt(1));
	
	a1=ch[pwx1][pwy1];
	
	uplus=0;
	lplus=0;
	rplus=0;
	dplus=0;
	
	northeast=0;
	northwest=0;
	southeast=0;
	southwest=0;
	
	//southeast
	hval=1;
	vval=1;
	for(n=0;n<8;n++)
	qEight();
	
	
	//northeast
	hval=1;
	vval=1;
	for(n=0;n<8;n++)
	qFive();
	
	//northwest
	hval=1;
	vval=1;
	for(n=0;n<8;n++)
	qSix();
	
	
	//southwest
	hval=1;
	vval=1;
	for(n=0;n<8;n++)
	qSeven();
	
	//uplus
	hval=1;
	for(n=0;n<8;n++)
	qOne();
	
	//dplus
	hval=1;
	for(n=0;n<8;n++)
	qTwo();
	
	//rplus
	hval=1;
	for(n=0;n<8;n++)
	qThree();
	
	//lplus
	hval=1;
	for(n=0;n<8;n++)
	qFour();
	
}



function mOptions(i){
	pwx1 = Number(i.charAt(0));
	pwy1 = Number(i.charAt(1));
	
	a1=ch[pwx1][pwy1];
	
	
	
	northeast=0;
	northwest=0;
	southeast=0;
	southwest=0;
		
		//northeast
		hval=1;
		vval=1;
		for(n=0;n<8;n++){
			if(pwx1+hval<=7 && pwy1+vval<=7 && northeast==0){
		if(ch[pwx1+hval][pwy1+vval]!="0"){
				if((whit==0 && (ch[pwx1+hval][pwy1+vval]).charAt(0)=="b") || (whit==1 && (ch[pwx1+hval][pwy1+vval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1+hval][pwy1+vval];
						ch[pwx1+hval][pwy1+vval]="wm";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1+vval]=b1;
						if(wc==true){		
							mstr = ""+(pwx1+hval)+(pwy1+vval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}else{
						b1=ch[pwx1+hval][pwy1+vval];
						ch[pwx1+hval][pwy1+vval]="bm";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1+vval]=b1;
						if(bc==true){		
							mstr = ""+(pwx1+hval)+(pwy1+vval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}
					northeast=1;
				}else
				northeast=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1+hval][pwy1+vval];
					ch[pwx1+hval][pwy1+vval]="wm";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1+vval]=b1;
					if(wc==true){
						mstr = ""+(pwx1+hval)+(pwy1+vval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}else{
					b1=ch[pwx1+hval][pwy1+vval];
					ch[pwx1+hval][pwy1+vval]="bm";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1+vval]=b1;
					if(bc==true){
						mstr = ""+(pwx1+hval)+(pwy1+vval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}
			}
		}
		hval++;
		vval++;

		}
		
		
				
		//northwest
		hval=1;
		vval=1;
		for(n=0;n<8;n++){
			if(pwx1+hval<=7 && pwy1-vval>=0 && northwest==0){
		if(ch[pwx1+hval][pwy1-vval]!="0"){
				if((whit==0 && (ch[pwx1+hval][pwy1-vval]).charAt(0)=="b") || (whit==1 && (ch[pwx1+hval][pwy1-vval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1+hval][pwy1-vval];
						ch[pwx1+hval][pwy1-vval]="wm";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1-vval]=b1;
						if(wc==true){		
							mstr = ""+(pwx1+hval)+(pwy1-vval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}else{
						b1=ch[pwx1+hval][pwy1-vval];
						ch[pwx1+hval][pwy1-vval]="bm";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1-vval]=b1;
						if(bc==true){		
							mstr = ""+(pwx1+hval)+(pwy1-vval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}
					northwest=1;
				}else
				northwest=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1+hval][pwy1-vval];
					ch[pwx1+hval][pwy1-vval]="wm";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1-vval]=b1;
					if(wc==true){
						mstr = ""+(pwx1+hval)+(pwy1-vval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}else{
					b1=ch[pwx1+hval][pwy1-vval];
					ch[pwx1+hval][pwy1-vval]="bm";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1-vval]=b1;
					if(bc==true){
						mstr = ""+(pwx1+hval)+(pwy1-vval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}
			}
		}
		hval++;
		vval++;

		}
		
		
		//southwest
		hval=1;
		vval=1;
		for(n=0;n<8;n++){
			if(pwx1-hval>=0 && pwy1-vval>=0 && southwest==0){
		if(ch[pwx1-hval][pwy1-vval]!="0"){
				if((whit==0 && (ch[pwx1-hval][pwy1-vval]).charAt(0)=="b") || (whit==1 && (ch[pwx1-hval][pwy1-vval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1-hval][pwy1-vval];
						ch[pwx1-hval][pwy1-vval]="wm";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1-vval]=b1;
						if(wc==true){		
							mstr = ""+(pwx1-hval)+(pwy1-vval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}else{
						b1=ch[pwx1-hval][pwy1-vval];
						ch[pwx1-hval][pwy1-vval]="bm";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1-vval]=b1;
						if(bc==true){		
							mstr = ""+(pwx1-hval)+(pwy1-vval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}
					southwest=1;
				}else
				southwest=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1-hval][pwy1-vval];
					ch[pwx1-hval][pwy1-vval]="wm";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1-vval]=b1;
					if(wc==true){
						mstr = ""+(pwx1-hval)+(pwy1-vval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}else{
					b1=ch[pwx1-hval][pwy1-vval];
					ch[pwx1-hval][pwy1-vval]="bm";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1-vval]=b1;
					if(bc==true){
						mstr = ""+(pwx1-hval)+(pwy1-vval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}
			}
		}
		hval++;
		vval++;

		}
		
		
		//southeast
		hval=1;
		vval=1;
		for(n=0;n<8;n++){
			if(pwx1-hval>=0 && pwy1+vval<=7 && southeast==0){
		if(ch[pwx1-hval][pwy1+vval]!="0"){
				if((whit==0 && (ch[pwx1-hval][pwy1+vval]).charAt(0)=="b") || (whit==1 && (ch[pwx1-hval][pwy1+vval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1-hval][pwy1+vval];
						ch[pwx1-hval][pwy1+vval]="wm";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1+vval]=b1;
						if(wc==true){		
							mstr = ""+(pwx1-hval)+(pwy1+vval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}else{
						b1=ch[pwx1-hval][pwy1+vval];
						ch[pwx1-hval][pwy1+vval]="bm";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1+vval]=b1;
						if(bc==true){		
							mstr = ""+(pwx1-hval)+(pwy1+vval);
							document.getElementsByClassName(mstr)[0].style.cssText = "transition :0.25s;background-color : rgba(60, 166, 116, 0.9);transform : scale(1.20)";
						}
					}
					southeast=1;
				}else
				southeast=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1-hval][pwy1+vval];
					ch[pwx1-hval][pwy1+vval]="wm";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1+vval]=b1;
					if(wc==true){
						mstr = ""+(pwx1-hval)+(pwy1+vval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}else{
					b1=ch[pwx1-hval][pwy1+vval];
					ch[pwx1-hval][pwy1+vval]="bm";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1+vval]=b1;
					if(bc==true){
						mstr = ""+(pwx1-hval)+(pwy1+vval);
						document.getElementsByClassName(mstr)[0].style.cssText = "background-color : rgb(60, 179, 113)";
					}
				}
			}
		}
		hval++;
		vval++;
	
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
	if(bclik!=""){
		document.getElementById(str2).innerHTML=bclik;
		str1=""+pwx2+pwy2+bclikid;
		document.getElementById(str2).setAttribute("id",str1);
		document.getElementById(i).style.display = "none";
	}
}


function bcheck(){
	str1=""+bkx+bky+"bk";
	
	for(n=bkx-1;n>=0;n--){
		if((ch[n][bky]).charAt(0)=="b" || ch[n][bky]=="wh" || ch[n][bky]=="wp" || ch[n][bky]=="wm" || ch[n][bky]=="wk"){
			break;
		}else if(ch[n][bky]=="wq"||ch[n][bky]=="we"){
			document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			return true;
		}
	}
	for(n=bkx+1;n<=7;n++){
		if((ch[n][bky]).charAt(0)=="b"|| ch[n][bky]=="wh" || ch[n][bky]=="wp" || ch[n][bky]=="wm" || ch[n][bky]=="wk"){
			break;
		}else if(ch[n][bky]=="wq"||ch[n][bky]=="we"){
			document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			return true;
		}
	}
	for(n=bky+1;n<=7;n++){
		if((ch[bkx][n]).charAt(0)=="b"|| ch[bkx][n]=="wh" || ch[bkx][n]=="wp" || ch[bkx][n]=="wm" || ch[bkx][n]=="wk"){
			break;
		}else if(ch[bkx][n]=="wq"||ch[bkx][n]=="we"){
			document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			return true;
		}
	}
	for(n=bky-1;n>=0;n--){
		if((ch[bkx][n]).charAt(0)=="b"|| ch[bkx][n]=="wh" || ch[bkx][n]=="wp" || ch[bkx][n]=="wm" || ch[bkx][n]=="wk"){
			break;
		}else if(ch[bkx][n]=="wq"||ch[bkx][n]=="we"){
			document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			return true;
		}
	}
	if(bkx<7 && bky<7){
		for(a=bkx+1, b=bky+1; a<=7 && b<=7; a++,b++){
			 if((ch[a][b]).charAt(0)=="b"|| ch[a][b]=="wh" || ch[a][b]=="wp" || ch[a][b]=="we" || ch[a][b]=="wk"){
				break;
			}else if(ch[a][b]=="wq"||ch[a][b]=="wm"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}
	}
	if(bkx>0 && bky>0){
		for(a=bkx-1, b=bky-1; a>=0 && b>=0; a--,b--){
			if(a==bkx-1 && ch[a][b]=="wp"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}else if((ch[a][b]).charAt(0)=="b"|| ch[a][b]=="wh" || ch[a][b]=="wp" || ch[a][b]=="we" || ch[a][b]=="wk"){
				break;
			}else if(ch[a][b]=="wq"||ch[a][b]=="wm"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}
	}
	if(bkx>0 && bky<7){
		for(a=bkx-1, b=bky+1; a>=0 && b<=7; a--,b++){
			if(a==bkx-1 && ch[a][b]=="wp"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}else if((ch[a][b]).charAt(0)=="b"|| ch[a][b]=="wh" || ch[a][b]=="wp" || ch[a][b]=="we" || ch[a][b]=="wk"){
				break;
			}else if(ch[a][b]=="wq"||ch[a][b]=="wm"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}
	}
	if(bkx<7 && bky>0){
		for(a=bkx+1, b=bky-1; a<=7 && b>=0; a++,b--){
			if((ch[a][b]).charAt(0)=="b" || ch[a][b]=="wh" || ch[a][b]=="wp" || ch[a][b]=="we" || ch[a][b]=="wk"){
				break;
			}else if(ch[a][b]=="wq"||ch[a][b]=="wm"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}
	}
	
		if((bkx + 2) <=7 && (bky + 1) <=7){
			if((ch[(bkx + 2)][(bky + 1)])=="wh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}if((bkx + 2) <=7 && (bky - 1) >=0){
			if((ch[(bkx + 2)][(bky - 1)])=="wh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}if((bkx + 1) <=7 && (bky + 2) <=7){
			if((ch[(bkx + 1)][(bky + 2)])=="wh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}if((bkx + 1) <=7 && (bky - 2) >=0){
			if((ch[(bkx + 1)][(bky - 2)])=="wh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}if((bkx - 1) >=0 && (bky - 2) >=0){
			if((ch[(bkx - 1)][(bky - 2)])=="wh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}if((bkx - 1) >=0 && (bky + 2) <=7){
			if((ch[(bkx - 1)][(bky + 2)])=="wh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}if((bkx - 2) >=0 && (bky + 1) <=7){
			if((ch[(bkx - 2)][(bky + 1)])=="wh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}if((bkx - 2) >=0 && (bky - 1) >=0){
			if((ch[(bkx - 2)][(bky - 1)])=="wh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}
	return false;
	
}


function wcheck(){
	
	str1=""+wkx+wky+"wk";
	
	for(n=wkx-1;n>=0;n--){
		if((ch[n][wky]).charAt(0)=="w" || ch[n][wky]=="bh" || ch[n][wky]=="bp" || ch[n][wky]=="bm" || ch[n][wky]=="bk"){
			break;
		}else if(ch[n][wky]=="bq"||ch[n][wky]=="be"){
			document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			return true;
		}
	}
	for(n=wkx+1;n<=7;n++){
		if((ch[n][wky]).charAt(0)=="w"|| ch[n][wky]=="bh" || ch[n][wky]=="bp" || ch[n][wky]=="bm" || ch[n][wky]=="bk"){
			break;
		}else if(ch[n][wky]=="bq"||ch[n][wky]=="be"){
			document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			return true;
		}
	}
	for(n=wky+1;n<=7;n++){
		if((ch[wkx][n]).charAt(0)=="w"|| ch[wkx][n]=="bh" || ch[wkx][n]=="bp" || ch[wkx][n]=="bm" || ch[wkx][n]=="bk"){
			break;
		}else if(ch[wkx][n]=="bq"||ch[wkx][n]=="be"){
			document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			return true;
		}
	}
	for(n=wky-1;n>=0;n--){
		if((ch[wkx][n]).charAt(0)=="w"|| ch[wkx][n]=="bh" || ch[wkx][n]=="bp" || ch[wkx][n]=="bm" || ch[wkx][n]=="bk"){
			break;
		}else if(ch[wkx][n]=="bq"||ch[wkx][n]=="be"){
			document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
			return true;
		}
	}
	if(wkx<7 && wky<7){
		for(a=wkx+1, b=wky+1; a<=7 && b<=7; a++,b++){
			if(a==wkx+1 && ch[a][b]=="bp"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}else if((ch[a][b]).charAt(0)=="w"|| ch[a][b]=="bh" || ch[a][b]=="bp" || ch[a][b]=="be" || ch[a][b]=="bk"){
				break;
			}else if(ch[a][b]=="bq"||ch[a][b]=="bm"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}
	}
	if(wkx>0 && wky>0){
		for(a=wkx-1, b=wky-1; a>=0 && b>=0; a--,b--){
			if((ch[a][b]).charAt(0)=="w"|| ch[a][b]=="bh" || ch[a][b]=="bp" || ch[a][b]=="be" || ch[a][b]=="bk"){
				break;
			}else if(ch[a][b]=="bq"||ch[a][b]=="bm"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}
	}
	if(wkx>0 && wky<7){
		for(a=wkx-1, b=wky+1; a>=0 && b<=7; a--,b++){
			if((ch[a][b]).charAt(0)=="w"|| ch[a][b]=="bh" || ch[a][b]=="bp" || ch[a][b]=="be" || ch[a][b]=="bk"){
				break;
			}else if(ch[a][b]=="bq"||ch[a][b]=="bm"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}
	}
	if(wkx<7 && wky>0){
		for(a=wkx+1, b=wky-1; a<=7 && b>=0; a++,b--){
			if(a==wkx+1 && ch[a][b]=="bp"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}else if((ch[a][b]).charAt(0)=="w" || ch[a][b]=="bh" || ch[a][b]=="bp" || ch[a][b]=="be" || ch[a][b]=="bk"){
				break;
			}else if(ch[a][b]=="bq"||ch[a][b]=="bm"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}
	}
	
		if((wkx + 2) <=7 && (wky + 1) <=7){
			if((ch[(wkx + 2)][(wky + 1)])=="bh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}if((wkx + 2) <=7 && (wky - 1) >=0){
			if((ch[(wkx + 2)][(wky - 1)])=="bh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}if((wkx + 1) <=7 && (wky + 2) <=7){
			if((ch[(wkx + 1)][(wky + 2)])=="bh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}if((wkx + 1) <=7 && (wky - 2) >=0){
			if((ch[(wkx + 1)][(wky - 2)])=="bh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}if((wkx - 1) >=0 && (wky - 2) >=0){
			if((ch[(wkx - 1)][(wky - 2)])=="bh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}if((wkx - 1) >=0 && (wky + 2) <=7){
			if((ch[(wkx - 1)][(wky + 2)])=="bh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}if((wkx - 2) >=0 && (wky + 1) <=7){
			if((ch[(wkx - 2)][(ky + 1)])=="bh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}if((wkx - 2) >=0 && (wky - 1) >=0){
			if((ch[(wkx - 2)][(wky - 1)])=="bh"){
				document.getElementById(str1).style.cssText="background-color:red;transition :0.25s;transform : scale(1.20);";
				return true;
			}
		}
		return false;
}


function wwcolor(){
	for(n=wkx-1;n>=0;n--){
		if((ch[n][wky]).charAt(0)=="w" || ch[n][wky]=="bh" || ch[n][wky]=="bp" || ch[n][wky]=="bm" || ch[n][wky]=="bk"){
			break;
		}else if(ch[n][wky]=="bq"||ch[n][wky]=="be"){
			return false;
		}
	}
	for(n=wkx+1;n<=7;n++){
		if((ch[n][wky]).charAt(0)=="w"|| ch[n][wky]=="bh" || ch[n][wky]=="bp" || ch[n][wky]=="bm" || ch[n][wky]=="bk"){
			break;
		}else if(ch[n][wky]=="bq"||ch[n][wky]=="be"){
			return false;
		}
	}
	for(n=wky+1;n<=7;n++){
		if((ch[wkx][n]).charAt(0)=="w"|| ch[wkx][n]=="bh" || ch[wkx][n]=="bp" || ch[wkx][n]=="bm" || ch[wkx][n]=="bk"){
			break;
		}else if(ch[wkx][n]=="bq"||ch[wkx][n]=="be"){
			return false;
		}
	}
	for(n=wky-1;n>=0;n--){
		if((ch[wkx][n]).charAt(0)=="w"|| ch[wkx][n]=="bh" || ch[wkx][n]=="bp" || ch[wkx][n]=="bm" || ch[wkx][n]=="bk"){
			break;
		}else if(ch[wkx][n]=="bq"||ch[wkx][n]=="be"){
			return false;
		}
	}
	
	if(wkx<7 && wky<7){
		for(a=wkx+1, b=wky+1; a<=7 && b<=7; a++,b++){
			if(a==wkx+1 && ch[a][b]=="bp"){
				return false;
			}else if((ch[a][b]).charAt(0)=="w"|| ch[a][b]=="bh" || ch[a][b]=="bp" || ch[a][b]=="be" || ch[a][b]=="bk"){
				break;
			}else if(ch[a][b]=="bq"||ch[a][b]=="bm"){
				return false;
			}
		}
	}
	if(wkx>0 && wky>0){
		for(a=wkx-1, b=wky-1; a>=0 && b>=0; a--,b--){
			if((ch[a][b]).charAt(0)=="w"|| ch[a][b]=="bh" || ch[a][b]=="bp" || ch[a][b]=="be" || ch[a][b]=="bk"){
				break;
			}else if(ch[a][b]=="bq"||ch[a][b]=="bm"){
				return false;
			}
		}
	}
	if(wkx>0 && wky<7){
		for(a=wkx-1, b=wky+1; a>=0 && b<=7; a--,b++){
			if((ch[a][b]).charAt(0)=="w"|| ch[a][b]=="bh" || ch[a][b]=="bp" || ch[a][b]=="be" || ch[a][b]=="bk"){
				break;
			}else if(ch[a][b]=="bq"||ch[a][b]=="bm"){
				return false;
			}
		}
	}
	if(wkx<7 && wky>0){
		for(a=wkx+1, b=wky-1; a<=7 && b>=0; a++,b--){
			if(a==wkx+1 && ch[a][b]=="bp"){
				return false;
			}else if((ch[a][b]).charAt(0)=="w" || ch[a][b]=="bh" || ch[a][b]=="bp" || ch[a][b]=="be" || ch[a][b]=="bk"){
				break;
			}else if(ch[a][b]=="bq"||ch[a][b]=="bm"){
				return false;
			}
		}
	}
	
		if((wkx + 2) <=7 && (wky + 1) <=7){
			if((ch[(wkx + 2)][(wky + 1)])=="bh"){
				return false;
			}
		}if((wkx + 2) <=7 && (wky - 1) >=0){
			if((ch[(wkx + 2)][(wky - 1)])=="bh"){
				return false;
			}
		}if((wkx + 1) <=7 && (wky + 2) <=7){
			if((ch[(wkx + 1)][(wky + 2)])=="bh"){
				return false;
			}
		}if((wkx + 1) <=7 && (wky - 2) >=0){
			if((ch[(wkx + 1)][(wky - 2)])=="bh"){
				return false;
			}
		}if((wkx - 1) >=0 && (wky - 2) >=0){
			if((ch[(wkx - 1)][(wky - 2)])=="bh"){
				return false;
			}
		}if((wkx - 1) >=0 && (wky + 2) <=7){
			if((ch[(wkx - 1)][(wky + 2)])=="bh"){
				return false;
			}
		}if((wkx - 2) >=0 && (wky + 1) <=7){
			if((ch[(wkx - 2)][(wky + 1)])=="bh"){
				return false;
			}
		}if((wkx - 2) >=0 && (wky - 1) >=0){
			if((ch[(wkx - 2)][(wky - 1)])=="bh"){
				return false;
			}
		}

	return true;
	
}

function bwcolor(){
	for(n=bkx-1;n>=0;n--){
		if((ch[n][bky]).charAt(0)=="b" || ch[n][bky]=="wh" || ch[n][bky]=="wp" || ch[n][bky]=="wm" || ch[n][bky]=="wk"){
			break;
		}else if(ch[n][bky]=="wq"||ch[n][bky]=="we"){
			return false;
		}
	}
	for(n=bkx+1;n<=7;n++){
		if((ch[n][bky]).charAt(0)=="b"|| ch[n][bky]=="wh" || ch[n][bky]=="wp" || ch[n][bky]=="wm" || ch[n][bky]=="wk"){
			break;
		}else if(ch[n][bky]=="wq"||ch[n][bky]=="we"){
			return false;
		}
	}
	for(n=bky+1;n<=7;n++){
		if((ch[bkx][n]).charAt(0)=="b"|| ch[bkx][n]=="wh" || ch[bkx][n]=="wp" || ch[bkx][n]=="wm" || ch[bkx][n]=="wk"){
			break;
		}else if(ch[bkx][n]=="wq"||ch[bkx][n]=="we"){
			return false;
		}
	}
	for(n=bky-1;n>=0;n--){
		if((ch[bkx][n]).charAt(0)=="b"|| ch[bkx][n]=="wh" || ch[bkx][n]=="wp" || ch[bkx][n]=="wm" || ch[bkx][n]=="wk"){
			break;
		}else if(ch[bkx][n]=="wq"||ch[bkx][n]=="we"){
			return false;
		}
	}
	if(bkx<7 && bky<7){
		for(a=bkx+1, b=bky+1; a<=7 && b<=7; a++,b++){
			if((ch[a][b]).charAt(0)=="b"|| ch[a][b]=="wh" || ch[a][b]=="wp" || ch[a][b]=="we" || ch[a][b]=="wk"){
				break;
			}else if(ch[a][b]=="wq"||ch[a][b]=="wm"){
				return false;
			}
		}
	}
	if(bkx>0 && bky>0){
		for(a=bkx-1, b=bky-1; a>=0 && b>=0; a--,b--){
			if(a==bkx-1 && ch[a][b]=="wp"){
				return false;
			}else if((ch[a][b]).charAt(0)=="b"|| ch[a][b]=="wh" || ch[a][b]=="wp" || ch[a][b]=="we" || ch[a][b]=="wk"){
				break;
			}else if(ch[a][b]=="wq"||ch[a][b]=="wm"){
				return false;
			}
		}
	}
	if(bkx>0 && bky<7){
		for(a=bkx-1, b=bky+1; a>=0 && b<=7; a--,b++){
			if(a==bkx-1 && ch[a][b]=="wp"){
				return false;
			}else if((ch[a][b]).charAt(0)=="b"|| ch[a][b]=="wh" || ch[a][b]=="wp" || ch[a][b]=="we" || ch[a][b]=="wk"){
				break;
			}else if(ch[a][b]=="wq"||ch[a][b]=="wm"){
				return false;
			}
		}
	}
	if(bkx<7 && bky>0){
		for(a=bkx+1, b=bky-1; a<=7 && b>=0; a++,b--){
			if((ch[a][b]).charAt(0)=="b" || ch[a][b]=="wh" || ch[a][b]=="wp" || ch[a][b]=="we" || ch[a][b]=="wk"){
				break;
			}else if(ch[a][b]=="wq"||ch[a][b]=="wm"){
				return false;
			}
		}
	}
	
		if((bkx + 2) <=7 && (bky + 1) <=7){
			if((ch[(bkx + 2)][(bky + 1)])=="wh"){
				return false;
			}
		}if((bkx + 2) <=7 && (bky - 1) >=0){
			if((ch[(bkx + 2)][(bky - 1)])=="wh"){
				return false;
			}
		}if((bkx + 1) <=7 && (bky + 2) <=7){
			if((ch[(bkx + 1)][(bky + 2)])=="wh"){
				return false;
			}
		}if((bkx + 1) <=7 && (bky - 2) >=0){
			if((ch[(bkx + 1)][(bky - 2)])=="wh"){
				return false;
			}
		}if((bkx - 1) >=0 && (bky - 2) >=0){
			if((ch[(bkx - 1)][(bky - 2)])=="wh"){
				return false;
			}
		}if((bkx - 1) >=0 && (bky + 2) <=7){
			if((ch[(bkx - 1)][(bky + 2)])=="wh"){
				return false;
			}
		}if((bkx - 2) >=0 && (bky + 1) <=7){
			if((ch[(bkx - 2)][(bky + 1)])=="wh"){
				return false;
			}
		}if((bkx - 2) >=0 && (bky - 1) >=0){
			if((ch[(bkx - 2)][(bky - 1)])=="wh"){
				return false;
			}
		}
		
		return true;

}

function hMate(a,b){
	pwx1 = a;
	pwy1 = b;
	
	a1=ch[pwx1][pwy1]; 
	
	if(whit==0){
		if((pwx1 + 2) <=7 && (pwy1 + 1) <=7){
			if((ch[(pwx1 + 2)][(pwy1 + 1)]).charAt(0)!="w"){
				b1=ch[(pwx1 + 2)][(pwy1 + 1)];
				ch[(pwx1 + 2)][(pwy1 + 1)]="wh";
				ch[pwx1][pwy1]="0";
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 2)][(pwy1 + 1)]=b1;
				if(wc==true){
					return true;
				}
				
			}
		}
		if((pwx1 + 2) <=7 && (pwy1 - 1) >=0){
			if((ch[(pwx1 + 2)][(pwy1 - 1)]).charAt(0)!="w"){
				b1=ch[(pwx1 + 2)][(pwy1 - 1)];
				ch[(pwx1 + 2)][(pwy1 - 1)]="wh";
				ch[pwx1][pwy1]="0";
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 2)][(pwy1 - 1)]=b1;
				if(wc==true){
					return true;
				}
				
			}
		}
		if((pwx1 + 1) <=7 && (pwy1 + 2) <=7){
			if((ch[(pwx1 + 1)][(pwy1 + 2)]).charAt(0)!="w"){
				b1=ch[(pwx1 + 1)][(pwy1 + 2)];
				ch[(pwx1 + 1)][(pwy1 + 2)]="wh";
				ch[pwx1][pwy1]="0";
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 1)][(pwy1 + 2)]=b1;
				if(wc==true){
					return true;
				}
				
			}
		}
		if((pwx1 + 1) <=7 && (pwy1 - 2) >=0){
			if((ch[(pwx1 + 1)][(pwy1 - 2)]).charAt(0)!="w"){
				b1=ch[(pwx1 + 1)][(pwy1 - 2)];
				ch[(pwx1 + 1)][(pwy1 - 2)]="wh";
				ch[pwx1][pwy1]="0";
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 1)][(pwy1 - 2)]=b1;
				if(wc==true){
					return true;
				}
				
			}
		}
		if((pwx1 - 1) >=0 && (pwy1 - 2) >=0){
			if((ch[(pwx1 - 1)][(pwy1 - 2)]).charAt(0)!="w"){
				b1=ch[(pwx1 - 1)][(pwy1 - 2)];
				ch[(pwx1 - 1)][(pwy1 - 2)]="wh";
				ch[pwx1][pwy1]="0";
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 1)][(pwy1 - 2)]=b1;
				if(wc==true){
					return true;
				}
				
			}
		}
		if((pwx1 - 1) >=0 && (pwy1 + 2) <=7){
			if((ch[(pwx1 - 1)][(pwy1 + 2)]).charAt(0)!="w"){
				b1=ch[(pwx1 - 1)][(pwy1 + 2)];
				ch[(pwx1 - 1)][(pwy1 + 2)]="wh";
				ch[pwx1][pwy1]="0";
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 1)][(pwy1 + 2)]=b1;
				wc=wwcolor();
				if(wc==true){
					return true;
				}
				
			}
		}
		if((pwx1 - 2) >=0 && (pwy1 + 1) <=7){
			if((ch[(pwx1 - 2)][(pwy1 + 1)]).charAt(0)!="w"){
				b1=ch[(pwx1 - 2)][(pwy1 + 1)];
				ch[(pwx1 - 2)][(pwy1 + 1)]="wh";
				ch[pwx1][pwy1]="0";
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 2)][(pwy1 + 1)]=b1;
				if(wc==true){
					return true;
				}
				
			}
		}
		if((pwx1 - 2) >=0 && (pwy1 - 1) >=0){
			if((ch[(pwx1 - 2)][(pwy1 - 1)]).charAt(0)!="w"){
				b1=ch[(pwx1 - 2)][(pwy1 - 1)];
				ch[(pwx1 - 2)][(pwy1 - 1)]="wh";
				ch[pwx1][pwy1]="0";
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 2)][(pwy1 - 1)]=b1;
				if(wc==true){
					return true;
				}
				
			}
		}
	}else{
		if((pwx1 + 2) <=7 && (pwy1 + 1) <=7){
			if((ch[(pwx1 + 2)][(pwy1 + 1)]).charAt(0)!="b"){
				b1=ch[(pwx1 + 2)][(pwy1 + 1)];
				ch[(pwx1 + 2)][(pwy1 + 1)]="bh";
				ch[pwx1][pwy1]="0";
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 2)][(pwy1 + 1)]=b1;
				if(bc==true){
					return true;
				}
				
			}
		}
		if((pwx1 + 2) <=7 && (pwy1 - 1) >=0){
			if((ch[(pwx1 + 2)][(pwy1 - 1)]).charAt(0)!="b"){
				b1=ch[(pwx1 + 2)][(pwy1 - 1)];
				ch[(pwx1 + 2)][(pwy1 - 1)]="bh";
				ch[pwx1][pwy1]="0";
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 2)][(pwy1 - 1)]=b1;
				if(bc==true){
					return true;
				}
				
			}
		}
		if((pwx1 + 1) <=7 && (pwy1 + 2) <=7){
			if((ch[(pwx1 + 1)][(pwy1 + 2)]).charAt(0)!="b"){
				b1=ch[(pwx1 + 1)][(pwy1 + 2)];
				ch[(pwx1 + 1)][(pwy1 + 2)]="bh";
				ch[pwx1][pwy1]="0";
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 1)][(pwy1 + 2)]=b1;
				if(bc==true){
					return true;
				}
				
			}
		}
		if((pwx1 + 1) <=7 && (pwy1 - 2) >=0){
			if((ch[(pwx1 + 1)][(pwy1 - 2)]).charAt(0)!="b"){
				b1=ch[(pwx1 + 1)][(pwy1 - 2)];
				ch[(pwx1 + 1)][(pwy1 - 2)]="bh";
				ch[pwx1][pwy1]="0";
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 1)][(pwy1 - 2)]=b1;
				if(bc==true){
					return true;
				}
				
			}
		}
		if((pwx1 - 1) >=0 && (pwy1 - 2) >=0){
			if((ch[(pwx1 - 1)][(pwy1 - 2)]).charAt(0)!="b"){
				b1=ch[(pwx1 - 1)][(pwy1 - 2)];
				ch[(pwx1 - 1)][(pwy1 - 2)]="bh";
				ch[pwx1][pwy1]="0";
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 1)][(pwy1 - 2)]=b1;
				if(bc==true){
					return true;
				}
				
			}
		}
		if((pwx1 - 1) >=0 && (pwy1 + 2) <=7){
			if((ch[(pwx1 - 1)][(pwy1 + 2)]).charAt(0)!="b"){
				b1=ch[(pwx1 - 1)][(pwy1 + 2)];
				ch[(pwx1 - 1)][(pwy1 + 2)]="bh";
				ch[pwx1][pwy1]="0";
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 1)][(pwy1 + 2)]=b1;
				if(bc==true){
					return true;
				}
				
			}
		}
		if((pwx1 - 2) >=0 && (pwy1 + 1) <=7){
			if((ch[(pwx1 - 2)][(pwy1 + 1)]).charAt(0)!="b"){
				b1=ch[(pwx1 - 2)][(pwy1 + 1)];
				ch[(pwx1 - 2)][(pwy1 + 1)]="bh";
				ch[pwx1][pwy1]="0";
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 2)][(pwy1 + 1)]=b1;
				if(bc==true){
					return true;
				}
				
			}
		}
		if((pwx1 - 2) >=0 && (pwy1 - 1) >=0){
			if((ch[(pwx1 - 2)][(pwy1 - 1)]).charAt(0)!="b"){
				b1=ch[(pwx1 - 2)][(pwy1 - 1)];
				ch[(pwx1 - 2)][(pwy1 - 1)]="bh";
				ch[pwx1][pwy1]="0";
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 2)][(pwy1 - 1)]=b1;
				if(bc==true){
					return true;
				}
				
			}
		}
	}
	return false;
}

function kMate(a,b){
	pwx1 = a;
	pwy1 = b;
	
	a1=ch[pwx1][pwy1];
	
	kt1=wkx;
	kt2=wky;
	
	kt3=bkx;
	kt4=bky;
	
	if(whit==0){
		
		if(pwx1==0 && pwy1==4 && wk==0 && we2==0 && ch[0][5]=="0" && ch[0][6]=="0"){
			ch[0][6]="wk";
			ch[0][4]="0";
			wkx=0;
			wky=6;
			wc=wwcolor();
			ch[0][6]="0";
			ch[0][4]="wk";
			wkx=kt1;
			wky=kt2;
			if(wc==true){
				return true;
			}
		}
		
		if(pwx1==0 && pwy1==4 && wk==0 && we1==0 && ch[0][3]=="0" && ch[0][2]=="0" && ch[0][1]=="0"){
			ch[0][2]="wk";
			ch[0][4]="0";
			wkx=0;
			wky=2;
			wc=wwcolor();
			ch[0][2]="0";
			ch[0][4]="wk";
			wkx=kt1;
			wky=kt2;
			if(wc==true){
				return true;
			}
		}
		
		if(pwx1 + 1 <=7){
			if((ch[(pwx1 + 1)][(pwy1)]).charAt(0)!="w"){
				b1=ch[(pwx1 + 1)][(pwy1)];
				ch[(pwx1 + 1)][(pwy1)]="wk";
				ch[pwx1][pwy1]="0";
				wkx=pwx1+1;
				wky=pwy1;
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 1)][(pwy1)]=b1;
				wkx=kt1;
				wky=kt2;
				if(wc==true){
					return true;
				}
			}
		}
		if(pwx1 - 1 >=0){
			if((ch[(pwx1 - 1)][(pwy1)]).charAt(0)!="w"){
				b1=ch[(pwx1 - 1)][(pwy1)];
				ch[(pwx1 - 1)][(pwy1)]="wk";
				ch[pwx1][pwy1]="0";
				wkx=pwx1-1;
				wky=pwy1;
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 1)][(pwy1)]=b1;
				wkx=kt1;
				wky=kt2;
				if(wc==true){
					return true;
				}
			}
		}
		if(pwy1 + 1 <=7){
			if((ch[(pwx1)][(pwy1 + 1)]).charAt(0)!="w"){
				b1=ch[(pwx1)][(pwy1 + 1)];
				ch[(pwx1)][(pwy1 + 1)]="wk";
				ch[pwx1][pwy1]="0";
				wkx=pwx1;
				wky=pwy1+1;
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1)][(pwy1 + 1)]=b1;
				wkx=kt1;
				wky=kt2;
				if(wc==true){
					return true;
				}
			}
		}
		if(pwy1 - 1 >=0){
			if((ch[(pwx1)][(pwy1 - 1)]).charAt(0)!="w"){
				b1=ch[(pwx1)][(pwy1 - 1)];
				ch[(pwx1)][(pwy1 - 1)]="wk";
				ch[pwx1][pwy1]="0";
				wkx=pwx1;
				wky=pwy1-1;
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1)][(pwy1 - 1)]=b1;
				wkx=kt1;
				wky=kt2;
				if(wc==true){
					return true;
				}
			}
		}
		if(pwx1 +1 <=7 && pwy1 + 1 <= 7){
			if((ch[(pwx1 + 1)][(pwy1 + 1)]).charAt(0)!="w"){
				b1=ch[(pwx1 + 1)][(pwy1 + 1)];
				ch[(pwx1 + 1)][(pwy1 + 1)]="wk";
				ch[pwx1][pwy1]="0";
				wkx=pwx1+1;
				wky=pwy1+1;
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1+1)][(pwy1 + 1)]=b1;
				wkx=kt1;
				wky=kt2;
				if(wc==true){
					return true;
				}
			}
		}
		if(pwx1 -1 >=0 && pwy1 + 1 <= 7){
			if((ch[(pwx1 - 1)][(pwy1 + 1)]).charAt(0)!="w"){
				b1=ch[(pwx1-1)][(pwy1 + 1)];
				ch[(pwx1-1)][(pwy1 + 1)]="wk";
				ch[pwx1][pwy1]="0";
				wkx=pwx1-1;
				wky=pwy1+1;
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1-1)][(pwy1 + 1)]=b1;
				wkx=kt1;
				wky=kt2;
				if(wc==true){
					return true;
				}
			}
		}
		if(pwx1 +1 <=7 && pwy1 - 1 >=0){
			if((ch[(pwx1 + 1)][(pwy1 - 1)]).charAt(0)!="w"){
				b1=ch[(pwx1+1)][(pwy1 - 1)];
				ch[(pwx1+1)][(pwy1 - 1)]="wk";
				ch[pwx1][pwy1]="0";
				wkx=pwx1+1;
				wky=pwy1-1;
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1+1)][(pwy1 - 1)]=b1;
				wkx=kt1;
				wky=kt2;
				if(wc==true){
					return true;
				}
			}
		}
		if(pwx1 -1 >=0 && pwy1 - 1 >=0){
			if((ch[(pwx1 - 1)][(pwy1 - 1)]).charAt(0)!="w"){
				b1=ch[(pwx1-1)][(pwy1 - 1)];
				ch[(pwx1-1)][(pwy1 - 1)]="wk";
				ch[pwx1][pwy1]="0";
				wkx=pwx1-1;
				wky=pwy1-1;
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1-1)][(pwy1 - 1)]=b1;
				wkx=kt1;
				wky=kt2;
				if(wc==true){
					return true;
				}
			}
		}
	}else{
	
	
		if(pwx1==7 && pwy1==4 && bk==0 && be2==0 && ch[7][5]=="0" && ch[7][6]=="0"){
			ch[7][6]="bk";
			ch[7][4]="0";
			bkx=7;
			bky=6;
			bc=bwcolor();
			ch[7][6]="0";
			ch[7][4]="bk";
			bkx=kt3;
			bky=kt4;
			if(bc==true){
				return true;
			}
		}
		
		if(pwx1==7 && pwy1==4 && bk==0 && be1==0 && ch[7][3]=="0" && ch[7][2]=="0" && ch[7][1]=="0"){
			ch[7][2]="bk";
			ch[7][4]="0";
			bkx=7;
			bky=2;
			bc=bwcolor();
			ch[7][2]="0";
			ch[7][4]="bk";
			bkx=kt3;
			bky=kt4;
			if(bc==true){
				return true;
			}
		}
		
		if(pwx1 + 1 <=7){
			if((ch[(pwx1 + 1)][(pwy1)]).charAt(0)!="b"){
				b1=ch[(pwx1 + 1)][(pwy1)];
				ch[(pwx1 + 1)][(pwy1)]="bk";
				ch[pwx1][pwy1]="0";
				bkx=pwx1+1;
				bky=pwy1;
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 1)][(pwy1)]=b1;
				bkx=kt3;
				bky=kt4;
				if(bc==true){
					return true;
				}
			}
		}
		if(pwx1 - 1 >=0){
			if((ch[(pwx1 - 1)][(pwy1)]).charAt(0)!="b"){
				b1=ch[(pwx1 - 1)][(pwy1)];
				ch[(pwx1 - 1)][(pwy1)]="bk";
				ch[pwx1][pwy1]="0";
				bkx=pwx1-1;
				bky=pwy1;
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 1)][(pwy1)]=b1;
				bkx=kt3;
				bky=kt4;
				if(bc==true){
					return true;
				}
			}
		}
		if(pwy1 + 1 <=7){
			if((ch[(pwx1)][(pwy1 + 1)]).charAt(0)!="b"){
				b1=ch[(pwx1)][(pwy1+1)];
				ch[(pwx1)][(pwy1+1)]="bk";
				ch[pwx1][pwy1]="0";
				bkx=pwx1;
				bky=pwy1+1;
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1)][(pwy1+1)]=b1;
				bkx=kt3;
				bky=kt4;
				if(bc==true){
					return true;
				}
			}
		}
		if(pwy1 - 1 >=0){
			if((ch[(pwx1)][(pwy1 - 1)]).charAt(0)!="b"){
				b1=ch[(pwx1)][(pwy1-1)];
				ch[(pwx1)][(pwy1-1)]="bk";
				ch[pwx1][pwy1]="0";
				bkx=pwx1;
				bky=pwy1-1;
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1)][(pwy1-1)]=b1;
				bkx=kt3;
				bky=kt4;
				if(bc==true){
					return true;
				}
			}
		}
		
		if(pwx1 +1 <=7 && pwy1 + 1 <= 7){
			if((ch[(pwx1 + 1)][(pwy1 + 1)]).charAt(0)!="b"){
				b1=ch[(pwx1 + 1)][(pwy1+1)];
				ch[(pwx1 + 1)][(pwy1+1)]="bk";
				ch[pwx1][pwy1]="0";
				bkx=pwx1+1;
				bky=pwy1+1;
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 1)][(pwy1+1)]=b1;
				bkx=kt3;
				bky=kt4;
				if(bc==true){
					return true;
				}
			}
		}
		if(pwx1 -1 >=0 && pwy1 + 1 <= 7){
			if((ch[(pwx1 - 1)][(pwy1 + 1)]).charAt(0)!="b"){
				b1=ch[(pwx1 - 1)][(pwy1+1)];
				ch[(pwx1 - 1)][(pwy1+1)]="bk";
				ch[pwx1][pwy1]="0";
				bkx=pwx1-1;
				bky=pwy1+1;
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 1)][(pwy1+1)]=b1;
				bkx=kt3;
				bky=kt4;
				if(bc==true){
					return true;
				}
			}
		}
		if(pwx1 +1 <=7 && pwy1 - 1 >=0){
			if((ch[(pwx1 + 1)][(pwy1 - 1)]).charAt(0)!="b"){
				b1=ch[(pwx1 + 1)][(pwy1-1)];
				ch[(pwx1 + 1)][(pwy1-1)]="bk";
				ch[pwx1][pwy1]="0";
				bkx=pwx1+1;
				bky=pwy1-1;
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 + 1)][(pwy1-1)]=b1;
				bkx=kt3;
				bky=kt4;
				if(bc==true){
					return true;
				}
			}
		}
		if(pwx1 -1 >=0 && pwy1 - 1 >=0){
			if((ch[(pwx1 - 1)][(pwy1 - 1)]).charAt(0)!="b"){
				b1=ch[(pwx1 - 1)][(pwy1-1)];
				ch[(pwx1 - 1)][(pwy1-1)]="bk";
				ch[pwx1][pwy1]="0";
				bkx=pwx1-1;
				bky=pwy1-1;
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1 - 1)][(pwy1-1)]=b1;
				bkx=kt3;
				bky=kt4;
				if(bc==true){
					return true;
				}
			}
		}
	}
	return false;
}


function mMate(a,b){
	
	pwx1 = a;
	pwy1 = b;
	
	a1=ch[pwx1][pwy1];
	
	
	
	northeast=0;
	northwest=0;
	southeast=0;
	southwest=0;
	
	//southwest
		hval=1;
		vval=1;
		for(n=0;n<8;n++){
			if(pwx1-hval>=0 && pwy1-vval>=0 && southwest==0){
			if(ch[pwx1-hval][pwy1-vval]!="0"){
				if((whit==0 && (ch[pwx1-hval][pwy1-vval]).charAt(0)=="b") || (whit==1 && (ch[pwx1-hval][pwy1-vval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1-hval][pwy1-vval];
						ch[pwx1-hval][pwy1-vval]="wm";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1-vval]=b1;
						if(wc==true){		
							return true;
						}
					}else{
						b1=ch[pwx1-hval][pwy1-vval];
						ch[pwx1-hval][pwy1-vval]="bm";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1-vval]=b1;
						if(bc==true){		
							return true;
						}
					}
					southwest=1;
				}else
				southwest=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1-hval][pwy1-vval];
					ch[pwx1-hval][pwy1-vval]="wm";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1-vval]=b1;
					if(wc==true){
						return true;
					}
				}else{
					b1=ch[pwx1-hval][pwy1-vval];
					ch[pwx1-hval][pwy1-vval]="bm";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1-vval]=b1;
					if(bc==true){
						return true;
					}
				}
			}
		}
		hval++;
		vval++;

		}
		
		//northeast
		hval=1;
		vval=1;
		for(n=0;n<8;n++){
			if(pwx1+hval<=7 && pwy1+vval<=7 && northeast==0){
			if(ch[pwx1+hval][pwy1+vval]!="0"){
				if((whit==0 && (ch[pwx1+hval][pwy1+vval]).charAt(0)=="b") || (whit==1 && (ch[pwx1+hval][pwy1+vval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1+hval][pwy1+vval];
						ch[pwx1+hval][pwy1+vval]="wm";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1+vval]=b1;
						if(wc==true){		
							return true;
						}
					}else{
						b1=ch[pwx1+hval][pwy1+vval];
						ch[pwx1+hval][pwy1+vval]="bm";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1+vval]=b1;
						if(bc==true){		
							return true;
						}
					}
					northeast=1;
				}else
				northeast=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1+hval][pwy1+vval];
					ch[pwx1+hval][pwy1+vval]="wm";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1+vval]=b1;
					if(wc==true){
						return true;
					}
				}else{
					b1=ch[pwx1+hval][pwy1+vval];
					ch[pwx1+hval][pwy1+vval]="bm";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1+vval]=b1;
					if(bc==true){
						return true;
					}
				}
			}
		}
		hval++;
		vval++;

		}
		
		//northwest
		hval=1;
		vval=1;
		for(n=0;n<8;n++){
			if(pwx1+hval<=7 && pwy1-vval>=0 && northwest==0){
			if(ch[pwx1+hval][pwy1-vval]!="0"){
				if((whit==0 && (ch[pwx1+hval][pwy1-vval]).charAt(0)=="b") || (whit==1 && (ch[pwx1+hval][pwy1-vval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1+hval][pwy1-vval];
						ch[pwx1+hval][pwy1-vval]="wm";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1-vval]=b1;
						if(wc==true){	
							return true;
						}
					}else{
						b1=ch[pwx1+hval][pwy1-vval];
						ch[pwx1+hval][pwy1-vval]="bm";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1-vval]=b1;
						if(bc==true){		
							return true;
						}
					}
					northwest=1;
				}else
				northwest=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1+hval][pwy1-vval];
					ch[pwx1+hval][pwy1-vval]="wm";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1-vval]=b1;
					if(wc==true){
						return true;
					}
				}else{
					b1=ch[pwx1+hval][pwy1-vval];
					ch[pwx1+hval][pwy1-vval]="bm";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1-vval]=b1;
					if(bc==true){
						return true;
					}
				}
			}
		}
		hval++;
		vval++;

		}

		//southeast
		hval=1;
		vval=1;
		for(n=0;n<8;n++){
			if(pwx1-hval>=0 && pwy1+vval<=7 && southeast==0){
		if(ch[pwx1-hval][pwy1+vval]!="0"){
				if((whit==0 && (ch[pwx1-hval][pwy1+vval]).charAt(0)=="b") || (whit==1 && (ch[pwx1-hval][pwy1+vval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1-hval][pwy1+vval];
						ch[pwx1-hval][pwy1+vval]="wm";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1+vval]=b1;
						if(wc==true){		
							return true;
						}
					}else{
						b1=ch[pwx1-hval][pwy1+vval];
						ch[pwx1-hval][pwy1+vval]="bm";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1+vval]=b1;
						if(bc==true){		
							return true;
						}
					}
					southeast=1;
				}else
				southeast=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1-hval][pwy1+vval];
					ch[pwx1-hval][pwy1+vval]="wm";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1+vval]=b1;
					if(wc==true){
						return true;
					}
				}else{
					b1=ch[pwx1-hval][pwy1+vval];
					ch[pwx1-hval][pwy1+vval]="bm";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1+vval]=b1;
					if(bc==true){
						return true;
					}
				}
			}
		}
		hval++;
		vval++;
	
		}

		return false;

}

function eMate(a,b){
	pwx1 = a;
	pwy1 = b;
	
	a1=ch[pwx1][pwy1];
	
	uplus=0;
	lplus=0;
	rplus=0;
	dplus=0;
	

	//left to right
	hval=1;
	for(n=0;n<8;n++){
			if(pwy1+hval<=7 && lplus==0){
			if(ch[pwx1][pwy1+hval]!="0"){
				if((whit==0 && (ch[pwx1][pwy1+hval]).charAt(0)=="b") || (whit==1 && (ch[pwx1][pwy1+hval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1][pwy1+hval];
						ch[pwx1][pwy1+hval]="we";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1][pwy1+hval]=b1;
						if(wc==true){		
							return true;
						}
					}else{
						b1=ch[pwx1][pwy1+hval];
						ch[pwx1][pwy1+hval]="be";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1][pwy1+hval]=b1;
						if(bc==true){		
							return true;
						}
					}
					lplus=1;
				}else
				lplus=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1][pwy1+hval];
					ch[pwx1][pwy1+hval]="we";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1][pwy1+hval]=b1;
					if(wc==true){
						return true;
					}
				}else{
					b1=ch[pwx1][pwy1+hval];
					ch[pwx1][pwy1+hval]="be";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1][pwy1+hval]=b1;
					if(bc==true){
						return true;
					}
				}
			}
		}
		hval++;
		}
		//right to left
		hval=1;
		for(n=0;n<8;n++){
			if(pwy1-hval>=0 && rplus==0){
			if(ch[pwx1][pwy1-hval]!="0"){
				if((whit==0 && (ch[pwx1][pwy1-hval]).charAt(0)=="b") || (whit==1 && (ch[pwx1][pwy1-hval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1][pwy1-hval];
						ch[pwx1][pwy1-hval]="we";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1][pwy1-hval]=b1;
						if(wc==true){		
							return true;
						}
					}else{
						b1=ch[pwx1][pwy1-hval];
						ch[pwx1][pwy1-hval]="be";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1][pwy1-hval]=b1;
						if(bc==true){		
							return true;
						}
					}
					rplus=1;
				}else
				rplus=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1][pwy1-hval];
					ch[pwx1][pwy1-hval]="we";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1][pwy1-hval]=b1;
					if(wc==true){
						return true;
					}
				}else{
					b1=ch[pwx1][pwy1-hval];
					ch[pwx1][pwy1-hval]="be";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1][pwy1-hval]=b1;
					if(bc==true){
						return true;
					}
				}
			}
		}
		hval++;
		}
		
		//bottom to top
		hval=1;
		for(n=0;n<8;n++){
			if(pwx1+hval<=7  && dplus==0){
			if(ch[pwx1+hval][pwy1]!="0"){
				if((whit==0 && (ch[pwx1+hval][pwy1]).charAt(0)=="b") || (whit==1 && (ch[pwx1+hval][pwy1]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1+hval][pwy1];
						ch[pwx1+hval][pwy1]="we";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1]=b1;
						if(wc==true){		
							return true;
						}
					}else{
						b1=ch[pwx1+hval][pwy1];
						ch[pwx1+hval][pwy1]="be";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1]=b1;
						if(bc==true){		
							return true;
						}
					}
					dplus=1;
				}else
				dplus=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1+hval][pwy1];
					ch[pwx1+hval][pwy1]="we";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1]=b1;
					if(wc==true){
						return true;
					}
				}else{
					b1=ch[pwx1+hval][pwy1];
					ch[pwx1+hval][pwy1]="be";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1]=b1;
					if(bc==true){
						return true;
					}
				}
			}
		}
		hval++;
		}
		
		//top to bottom
		hval=1;
		for(n=0;n<8;n++){
			if(pwx1-hval>=0  && uplus==0){
			if(ch[pwx1-hval][pwy1]!="0"){
				if((whit==0 && (ch[pwx1-hval][pwy1]).charAt(0)=="b") || (whit==1 && (ch[pwx1-hval][pwy1]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1-hval][pwy1];
						ch[pwx1-hval][pwy1]="we";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1]=b1;
						if(wc==true){		
							return true;
						}
					}else{
						b1=ch[pwx1-hval][pwy1];
						ch[pwx1-hval][pwy1]="be";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1]=b1;
						if(bc==true){		
							return true;
						}
					}
					uplus=1;
				}else
				uplus=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1-hval][pwy1];
					ch[pwx1-hval][pwy1]="we";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1]=b1;
					if(wc==true){
						return true;
					}
				}else{
					b1=ch[pwx1-hval][pwy1];
					ch[pwx1-hval][pwy1]="be";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1]=b1;
					if(bc==true){
						return true;
					}
				}
			}
		}
		hval++;
		}
		
	return false;

}


function qMate(a,b){
	pwx1 = a;
	pwy1 = b;
	
	a1=ch[pwx1][pwy1];
	
	uplus=0;
	lplus=0;
	rplus=0;
	dplus=0;
	
	northeast=0;
	northwest=0;
	southeast=0;
	southwest=0;
	
	//southwest
		hval=1;
		vval=1;
		for(n=0;n<8;n++){
			if(pwx1-hval>=0 && pwy1-vval>=0 && southwest==0){
			if(ch[pwx1-hval][pwy1-vval]!="0"){
				if((whit==0 && (ch[pwx1-hval][pwy1-vval]).charAt(0)=="b") || (whit==1 && (ch[pwx1-hval][pwy1-vval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1-hval][pwy1-vval];
						ch[pwx1-hval][pwy1-vval]="wq";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1-vval]=b1;
						if(wc==true){		
							return true;
						}
					}else{
						b1=ch[pwx1-hval][pwy1-vval];
						ch[pwx1-hval][pwy1-vval]="bq";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1-vval]=b1;
						if(bc==true){		
							return true;
						}
					}
					southwest=1;
				}else
				southwest=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1-hval][pwy1-vval];
					ch[pwx1-hval][pwy1-vval]="wq";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1-vval]=b1;
					if(wc==true){
						return true;
					}
				}else{
					b1=ch[pwx1-hval][pwy1-vval];
					ch[pwx1-hval][pwy1-vval]="bq";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1-vval]=b1;
					if(bc==true){
						return true;
					}
				}
			}
		}
		hval++;
		vval++;

		}
		
		//northeast
		hval=1;
		vval=1;
		for(n=0;n<8;n++){
			if(pwx1+hval<=7 && pwy1+vval<=7 && northeast==0){
			if(ch[pwx1+hval][pwy1+vval]!="0"){
				if((whit==0 && (ch[pwx1+hval][pwy1+vval]).charAt(0)=="b") || (whit==1 && (ch[pwx1+hval][pwy1+vval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1+hval][pwy1+vval];
						ch[pwx1+hval][pwy1+vval]="wq";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1+vval]=b1;
						if(wc==true){		
							return true;
						}
					}else{
						b1=ch[pwx1+hval][pwy1+vval];
						ch[pwx1+hval][pwy1+vval]="bq";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1+vval]=b1;
						if(bc==true){		
							return true;
						}
					}
					northeast=1;
				}else
				northeast=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1+hval][pwy1+vval];
					ch[pwx1+hval][pwy1+vval]="wq";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1+vval]=b1;
					if(wc==true){
						return true;
					}
				}else{
					b1=ch[pwx1+hval][pwy1+vval];
					ch[pwx1+hval][pwy1+vval]="bq";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1+vval]=b1;
					if(bc==true){
						return true;
					}
				}
			}
		}
		hval++;
		vval++;

		}
		
		//northwest
		hval=1;
		vval=1;
		for(n=0;n<8;n++){
			if(pwx1+hval<=7 && pwy1-vval>=0 && northwest==0){
			if(ch[pwx1+hval][pwy1-vval]!="0"){
				if((whit==0 && (ch[pwx1+hval][pwy1-vval]).charAt(0)=="b") || (whit==1 && (ch[pwx1+hval][pwy1-vval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1+hval][pwy1-vval];
						ch[pwx1+hval][pwy1-vval]="wq";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1-vval]=b1;
						if(wc==true){	
							return true;
						}
					}else{
						b1=ch[pwx1+hval][pwy1-vval];
						ch[pwx1+hval][pwy1-vval]="bq";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1-vval]=b1;
						if(bc==true){		
							return true;
						}
					}
					northwest=1;
				}else
				northwest=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1+hval][pwy1-vval];
					ch[pwx1+hval][pwy1-vval]="wq";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1-vval]=b1;
					if(wc==true){
						return true;
					}
				}else{
					b1=ch[pwx1+hval][pwy1-vval];
					ch[pwx1+hval][pwy1-vval]="bq";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1-vval]=b1;
					if(bc==true){
						return true;
					}
				}
			}
		}
		hval++;
		vval++;

		}

		//southeast
		hval=1;
		vval=1;
		for(n=0;n<8;n++){
			if(pwx1-hval>=0 && pwy1+vval<=7 && southeast==0){
		if(ch[pwx1-hval][pwy1+vval]!="0"){
				if((whit==0 && (ch[pwx1-hval][pwy1+vval]).charAt(0)=="b") || (whit==1 && (ch[pwx1-hval][pwy1+vval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1-hval][pwy1+vval];
						ch[pwx1-hval][pwy1+vval]="wq";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1+vval]=b1;
						if(wc==true){		
							return true;
						}
					}else{
						b1=ch[pwx1-hval][pwy1+vval];
						ch[pwx1-hval][pwy1+vval]="bq";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1+vval]=b1;
						if(bc==true){		
							return true;
						}
					}
					southeast=1;
				}else
				southeast=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1-hval][pwy1+vval];
					ch[pwx1-hval][pwy1+vval]="wq";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1+vval]=b1;
					if(wc==true){
						return true;
					}
				}else{
					b1=ch[pwx1-hval][pwy1+vval];
					ch[pwx1-hval][pwy1+vval]="bq";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1+vval]=b1;
					if(bc==true){
						return true;
					}
				}
			}
		}
		hval++;
		vval++;
	
		}
		
		//left to right
	hval=1;
	for(n=0;n<8;n++){
			if(pwy1+hval<=7 && lplus==0){
			if(ch[pwx1][pwy1+hval]!="0"){
				if((whit==0 && (ch[pwx1][pwy1+hval]).charAt(0)=="b") || (whit==1 && (ch[pwx1][pwy1+hval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1][pwy1+hval];
						ch[pwx1][pwy1+hval]="wq";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1][pwy1+hval]=b1;
						if(wc==true){		
							return true;
						}
					}else{
						b1=ch[pwx1][pwy1+hval];
						ch[pwx1][pwy1+hval]="bq";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1][pwy1+hval]=b1;
						if(bc==true){		
							return true;
						}
					}
					lplus=1;
				}else
				lplus=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1][pwy1+hval];
					ch[pwx1][pwy1+hval]="wq";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1][pwy1+hval]=b1;
					if(wc==true){
						return true;
					}
				}else{
					b1=ch[pwx1][pwy1+hval];
					ch[pwx1][pwy1+hval]="bq";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1][pwy1+hval]=b1;
					if(bc==true){
						return true;
					}
				}
			}
		}
		hval++;
		}
		//right to left
		hval=1;
		for(n=0;n<8;n++){
			if(pwy1-hval>=0 && rplus==0){
			if(ch[pwx1][pwy1-hval]!="0"){
				if((whit==0 && (ch[pwx1][pwy1-hval]).charAt(0)=="b") || (whit==1 && (ch[pwx1][pwy1-hval]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1][pwy1-hval];
						ch[pwx1][pwy1-hval]="wq";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1][pwy1-hval]=b1;
						if(wc==true){		
							return true;
						}
					}else{
						b1=ch[pwx1][pwy1-hval];
						ch[pwx1][pwy1-hval]="bq";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1][pwy1-hval]=b1;
						if(bc==true){		
							return true;
						}
					}
					rplus=1;
				}else
				rplus=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1][pwy1-hval];
					ch[pwx1][pwy1-hval]="wq";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1][pwy1-hval]=b1;
					if(wc==true){
						return true;
					}
				}else{
					b1=ch[pwx1][pwy1-hval];
					ch[pwx1][pwy1-hval]="bq";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1][pwy1-hval]=b1;
					if(bc==true){
						return true;
					}
				}
			}
		}
		hval++;
		}
		
		//bottom to top
		hval=1;
		for(n=0;n<8;n++){
			if(pwx1+hval<=7  && dplus==0){
			if(ch[pwx1+hval][pwy1]!="0"){
				if((whit==0 && (ch[pwx1+hval][pwy1]).charAt(0)=="b") || (whit==1 && (ch[pwx1+hval][pwy1]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1+hval][pwy1];
						ch[pwx1+hval][pwy1]="wq";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1]=b1;
						if(wc==true){		
							return true;
						}
					}else{
						b1=ch[pwx1+hval][pwy1];
						ch[pwx1+hval][pwy1]="bq";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1+hval][pwy1]=b1;
						if(bc==true){		
							return true;
						}
					}
					dplus=1;
				}else
				dplus=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1+hval][pwy1];
					ch[pwx1+hval][pwy1]="wq";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1]=b1;
					if(wc==true){
						return true;
					}
				}else{
					b1=ch[pwx1+hval][pwy1];
					ch[pwx1+hval][pwy1]="bq";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+hval][pwy1]=b1;
					if(bc==true){
						return true;
					}
				}
			}
		}
		hval++;
		}
		
		//top to bottom
		hval=1;
		for(n=0;n<8;n++){
			if(pwx1-hval>=0  && uplus==0){
			if(ch[pwx1-hval][pwy1]!="0"){
				if((whit==0 && (ch[pwx1-hval][pwy1]).charAt(0)=="b") || (whit==1 && (ch[pwx1-hval][pwy1]).charAt(0)=="w")){		
					if(whit==0){	
						b1=ch[pwx1-hval][pwy1];
						ch[pwx1-hval][pwy1]="wq";
						ch[pwx1][pwy1]="0";
						wc=wwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1]=b1;
						if(wc==true){		
							return true;
						}
					}else{
						b1=ch[pwx1-hval][pwy1];
						ch[pwx1-hval][pwy1]="bq";
						ch[pwx1][pwy1]="0";
						bc=bwcolor();
						ch[pwx1][pwy1]=a1;
						ch[pwx1-hval][pwy1]=b1;
						if(bc==true){		
							return true;
						}
					}
					uplus=1;
				}else
				uplus=1;
			}
			else{
				if(whit==0){
					b1=ch[pwx1-hval][pwy1];
					ch[pwx1-hval][pwy1]="wq";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1]=b1;
					if(wc==true){
						return true;
					}
				}else{
					b1=ch[pwx1-hval][pwy1];
					ch[pwx1-hval][pwy1]="bq";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-hval][pwy1]=b1;
					if(bc==true){
						return true;
					}
				}
			}
		}
		hval++;
		}
		
	return false;

		
}


function pMate(a,b){
	pwx1 = a;
	pwy1 = b;
	
	a1=ch[pwx1][pwy1];
	
	if(whit==0){
		
		if(ch[pwx1 + 1][pwy1]=="0"){
			b1=ch[pwx1+1][pwy1];
			ch[pwx1+1][pwy1]="wp";
			ch[pwx1][pwy1]="0";
			wc=wwcolor();
			ch[pwx1][pwy1]=a1;
			ch[pwx1+1][pwy1]=b1;
			if(wc==true){
				return true;
			}
		}
		
		if(pwx1==1){
			if(ch[pwx1 + 1][pwy1]=="0" && ch[pwx1 + 2][pwy1]=="0"){
				b1=ch[(pwx1 + 2)][(pwy1)];
				ch[(pwx1+2)][(pwy1)]="wp";
				ch[pwx1][pwy1]="0";
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[(pwx1+2)][(pwy1)]=b1;
				if(wc==true){
					return true;
				}	
			}	
		}
		
		
		if(pwy1<7){
			if((ch[pwx1 + 1][pwy1 + 1]).charAt(0)=="b"){
				b1=ch[pwx1+1][pwy1+1];
				ch[pwx1+1][pwy1+1]="wp";
				ch[pwx1][pwy1]="0";
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[pwx1+1][pwy1+1]=b1;
				if(wc==true){
					return true;
				}
			}
		}
		if(pwy1>0){
			if((ch[pwx1 + 1][pwy1 - 1]).charAt(0)=="b"){
				b1=ch[pwx1+1][pwy1-1];
				ch[pwx1+1][pwy1-1]="wp";
				ch[pwx1][pwy1]="0";
				wc=wwcolor();
				ch[pwx1][pwy1]=a1;
				ch[pwx1+1][pwy1-1]=b1;
				if(wc==true){
					return true;
				}
			}
		}
		if(pwx1==4){
			if(pwy1>0){
				con1=bpm[pwy1-1].search(i);
				if(con1!=-1){
					b1=ch[pwx1+1][pwy1-1];
					ch[pwx1+1][pwy1-1]="wp";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+1][pwy1-1]=b1;
					if(wc==true){
						return true;
					}
				}
			}
			
			if(pwy1<7){
				con2=bpm[pwy1+1].search(i);
				if(con2!=-1){
					b1=ch[pwx1+1][pwy1+1];
					ch[pwx1+1][pwy1+1]="wp";
					ch[pwx1][pwy1]="0";
					wc=wwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1+1][pwy1+1]=b1;
					if(wc==true){
						return true;
					}
				}
			}
		}
		
	}else{
		
		if(ch[pwx1 - 1][pwy1]=="0"){
			b1=ch[pwx1-1][pwy1];
			ch[pwx1-1][pwy1]="bp";
			ch[pwx1][pwy1]="0";
			bc=bwcolor();
			ch[pwx1][pwy1]=a1;
			ch[pwx1-1][pwy1]=b1;
			if(bc==true){
				return true;
			}
		}
		
		if(pwx1==6){
			
			if(ch[pwx1 - 1][pwy1]=="0" && ch[pwx1 - 2][pwy1]=="0"){
				b1=ch[pwx1-2][pwy1];
				ch[pwx1-2][pwy1]="bp";
				ch[pwx1][pwy1]="0";
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[pwx1-2][pwy1]=b1;
				if(bc==true){
					return true;
				}
			}
		}
		
		if(pwy1<7){
			if((ch[pwx1 - 1][pwy1 + 1]).charAt(0)=="w"){
				b1=ch[pwx1-1][pwy1+1];
				ch[pwx1-1][pwy1+1]="bp";
				ch[pwx1][pwy1]="0";
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[pwx1-1][pwy1+1]=b1;
				if(bc==true){
					return true;
				}
			}
		}
		if(pwy1>0){
			if((ch[pwx1 - 1][pwy1 - 1]).charAt(0)=="w"){
				b1=ch[pwx1-1][pwy1-1];
				ch[pwx1-1][pwy1-1]="bp";
				ch[pwx1][pwy1]="0";
				bc=bwcolor();
				ch[pwx1][pwy1]=a1;
				ch[pwx1-1][pwy1-1]=b1;
				if(bc==true){
					return true;
				}
			}
		}
		if(pwx1==3){
			if(pwy1>0){
				con1=wpm[pwy1-1].search(i);
				if(con1!=-1){
					b1=ch[pwx1-1][pwy1-1];
					ch[pwx1-1][pwy1-1]="bp";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-1][pwy1-1]=b1;
					if(bc==true){
						return true;
					}
				}
			}
			
			if(pwy1<7){
				con2=wpm[pwy1+1].search(i);
				if(con2!=-1){
					b1=ch[pwx1-1][pwy1+1];
					ch[pwx1-1][pwy1+1]="bp";
					ch[pwx1][pwy1]="0";
					bc=bwcolor();
					ch[pwx1][pwy1]=a1;
					ch[pwx1-1][pwy1+1]=b1;
					if(bc==true){
						return true;
					}
				}
			}
		}
	}
	return false;

}


function bcmate(){
	
	for(i=0;i<ch.length;i++){
		for(j=0;j<ch[i].length;j++){
			if((ch[i][j]).charAt(0)=="w"){
				if(ch[i][j]=="wk"){
					temp=kMate(i,j);
					if(temp==true){
						return false;
					}
				}else if(ch[i][j]=="wh"){
					temp=hMate(i,j);
					if(temp==true){
						return false;
					}
				}else if(ch[i][j]=="wm"){
					temp=mMate(i,j);
					if(temp==true){
						return false;
					}
				}else if(ch[i][j]=="we"){
					temp=eMate(i,j);
					if(temp==true){
						return false;
					}
				}else if(ch[i][j]=="wq"){
					temp=qMate(i,j);
					if(temp==true){
						return false;
					}
				}else if(ch[i][j]=="wp"){
					temp=pMate(i,j);
					if(temp==true){
						return false;
					}
				}
			}
		}
	}
	return true;
}


function wcmate(){
	
	for(i=0;i<ch.length;i++){
		for(j=0;j<ch[i].length;j++){
			if((ch[i][j]).charAt(0)=="b"){
				if(ch[i][j]=="bk"){
					temp=kMate(i,j);
					if(temp==true){
						return false;
					}
				}else if(ch[i][j]=="bh"){
					temp=hMate(i,j);
					if(temp==true){
						return false;
					}
				}else if(ch[i][j]=="bm"){
					temp=mMate(i,j);
					if(temp==true){
						return false;
					}
				}else if(ch[i][j]=="be"){
					temp=eMate(i,j);
					if(temp==true){
						return false;
					}
				}else if(ch[i][j]=="bq"){
					temp=qMate(i,j);
					if(temp==true){
						return false;
					}
				}else if(ch[i][j]=="bp"){
					temp=pMate(i,j);
					if(temp==true){
						return false;
					}
				}
			}
		}
	}
	return true;
}

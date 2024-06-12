function.res(){
	var a1=document.getElementById('a1')value;
	var b1=document.getElementById('b1')value;
	var c1=document.getElementById('c1')value;
	var a2=document.getElementById('a2')value;
	var b2=document.getElementById('b2')value;
	var c2=document.getElementById('c2')value;
	var det=(a1*b2)-(a2*b1);
	var detx=(c1*b2)-(c2*b2);
	var dety=(a1*c2)-(a2*c1);
	var x=(detx/det);
	var y=(dety/det);
	document.getElementById('x').value=X;
	document.getElementById('y').value=y; 
}
function singFunction(){
		
	for(i=99;i>=3;i=i-1){
		document.getElementById("sing").innerHTML+="<br/>"+i+" bottles of beer on the wall "+i+" bottles of beer <br/> Take one down and pass it around, " +(i-1)+" bottles of beer on the wall";
		if (i==3){
			document.getElementById("sing").innerHTML+="<br/>2 bottles of beer on the wall, 2 bottles of beer";
			document.getElementById("sing").innerHTML+="<br/>Take one down and pass it around, 1 more bottle of beer on the wall";
			document.getElementById("sing").innerHTML+="<br/>1 bottle of beer on the wall, 1 bottle of beer";
			document.getElementById("sing").innerHTML+="<br/>Take one down and pass it around, no more bottles of beer on the wall";
			document.getElementById("sing").innerHTML+="<br/>No more bottles of beer on the wall, no more bottles of beer";
			document.getElementById("sing").innerHTML+="<br/>Go to the store and buy some more, 99 bottles of beer on the wall";
		}
	}
}
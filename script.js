let display=document.getElementById("counter");
let initialval=parseInt(display.innerHTML);
console.log(display.innerHTML);
function inc(){
	alert(initialval);
	initialval+=1;
	display.innerHTML=`${initialval}`;
}
 
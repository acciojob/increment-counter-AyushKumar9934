//your JS code here. If required.
 input1=document.getElementById("counter");
console.log(input1);
input2=document.getElementById("incrementBtn");
function inc(){
alert(""+input1.textContent);
    let num=parseInt(input1.textContent);
    input1.textContent=""+(num+1);
}
document.getElementById("incrementBtn").addEventListener("click",inc);
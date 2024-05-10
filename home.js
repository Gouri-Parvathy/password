var password=document.getElementById("pass").value
var weak=document.getElementById("desc-1")
var medium=document.getElementById("desc-2")
var strong=document.getElementById("desc-3")
if(password.length<4||password.length==0){
  weak.style.backgroundColor="red"
}
else if(password.length>4){
  medium.style.backgroundColor="orange"
}
else if(password.length>4||password.length<12){
    medium.style.backgroundColor="green"
}

var main  = document.querySelector("#main");
var cur =document.querySelector(".cursor");
main.addEventListener("mousemove" , function (acc) {
     cur.style.left = acc.x +"px "
     cur.style.top = acc.y +"px"
})
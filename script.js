
/* navmenu collpasing property */
let navmenu = document.getElementById("navmenu");
let navmenudropbox = document.querySelector(".navmenudropbox");
let flag=0;
navmenu.addEventListener("click",function(){
    if(!flag){
        navmenu.classList.add("fa-x");
        navmenu.classList.remove("fa-bars");
        navmenudropbox.style.display="inline-block";
        flag=1;
    }else{
        navmenu.classList.remove("fa-x");
        navmenu.classList.add("fa-bars");
        navmenudropbox.style.display="none";
        flag=0;
    }
});

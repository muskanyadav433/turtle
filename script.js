const header = document.queryselector("header");

window.addEventListener("scroll",function(){
    header.classlist.toggle("sticky",window.scrolly >0);
})
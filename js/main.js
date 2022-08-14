let navbar=document.querySelector(".bg-dark");
window.addEventListener("scroll",()=>{
    if(scrollY>=580){
        navbar.classList.add("dd")
    }else
    {
        navbar.classList.remove("dd")
    }
    console.log(navbar)
})
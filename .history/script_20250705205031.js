let Lhideicon = document.querySelector(".hideicon")
let Lshowicon = document.querySelector(".showicon")
let Lmenushow = document.querySelector(".menushow")

function showcontent(){
    jmenushow.style.display = "block"
    javashowicon.style.display ="none"
    javahideicon.style.display = "block"
}
Lmenushow.addEventListener("click",showcontent)
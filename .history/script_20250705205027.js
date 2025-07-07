let Lhideicon = document.querySelector(".hideicon")
let Lshowicon = document.querySelector(".showicon")
let Lmenushow = document.querySelector(".menushow")

function showcontent(){
    javamenushow.style.display = "block"
    javashowicon.style.display ="none"
    javahideicon.style.display = "block"
}
menushow.addEventListener("click",showcontent)
let Lhideicon = document.querySelector(".hideicon")
let showicon = document.querySelector(".showicon")
let javamenushow = document.querySelector(".menushow")

function showcontent(){
    javamenushow.style.display = "block"
    javashowicon.style.display ="none"
    javahideicon.style.display = "block"
}
javamenushow.addEventListener("click",showcontent)
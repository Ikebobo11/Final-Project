let javahideicon = document.querySelector(".hideicon")
let javashowicon = document.querySelector(".showicon")
let javamenushow = document.querySelector(".menushow")

function showcontent(){
    javamenushow.style.display = "block"
    javashowicon.style.display ="none"
    javahideicon
}
javamenushow.addEventListener("click",showcontent)
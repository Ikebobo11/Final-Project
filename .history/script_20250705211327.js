let Lhideicon = document.querySelector(".hideicon")
let Lshowicon = document.querySelector(".showicon")
let Lmenushow = document.querySelector(".menushow")

function showcontent(){
    Lmenushow.style.display = "block"
    Lshowicon.style.display ="none"
    Lhideicon.style.display = "block"
}
Lshowicon.addEventListener("click",showcontent)

function hidecontent(){

}
Lhideicon.addEventListener("click",hidecontent)
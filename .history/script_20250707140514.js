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
    Lmenushow.style.display = "none"
    Lshowicon.style.display ="block"
    Lhideicon.style.display = "none"
}
Lhideicon.addEventListener("click",hidecontent)
//  second section javascript

let Lbacka = document.querySelector(".backa")
let Lfronta = document.querySelector(".fronta")
let Lmarketa = document.querySelector(".marketa")

function scrollfirstmarketfront(){
    Lmarketa.scrollLeft = Lmarketa.scrollLeft + Lmarketa.clientWidth
}
Lfronta.addEventListener("click",scrollfirstmarketfront)

function scrollfirstmarketback(){
    Lmarketa.scrollLeft = Lmarketa.scrollLeft - Lmarketa.clientWidth
}
Lbacka.addEventListener("click",scrollfirstmarketback)

// third section jaascript
let Lbackb = document.querySelector(".backb")
let Lfrontb = document.querySelector(".frontb")
let Lmaincat = document.querySelector(".maincat")
function scrollsecondmarketback(){
    Lmaincat.scrollLeft = Lmaincat.scrollLeft + Lmaincat.clientWidth
}
Lfrontb.addEventListener("click",scrollsecondmarketback)

function scr

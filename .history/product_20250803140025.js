


// for the products

let product ={
    "#product1":{
       "name":"",
       "discription":"",
       "price":"",
       "ima":"",
    },
    "#product2":{
        "name":"AK-900 wired keyboard",
        "discription":"This high-quality keyboard delivers rich sound, smooth keys, and multiple instrument tones. Ideal for music producers, performers, or anyone learning to play. Portable, durable, and easy to use — plug and play anywhere!",
        "price":"$960",
        "ima":"./asset/kewboardpro.png"
    }
}
let hash = window.location.hash
let proname = document.querySelector(".proname")
let h4a = document.querySelector(".h4a")
let pbrake = document.querySelector(".pbrake")
let bdiv = document.querySelector(".bdiv")
let blim = document.querySelector(".blim")
proname.innerText = product[hash]["price"]
h4a.innerText = product[hash]["name"]
pbrake.innerText = product[hash]["discription"]
blim.src = product [hash][ima]
console.log("Product.js is working!");



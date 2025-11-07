


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
        "image":"./asset/kewboardpro.png"
    },
    "#product3":{
        "name":"IPS LCD Gaming Monitor",
        "discription":"High-resolution IPS LCD gaming monitor with sharp colors, wide viewing angles, and smooth refresh rates for immersive gameplay.",
        "price":"$370",
        "image":"./asset/-game-monitor-gaming.png"
    },
       "#product4":{
        "name":"S-series Comfort Chair",
        "discription":"Ergonomic S-Series Comfort Chair with adjustable height, lumbar support, and soft cushioning for long-hour sitting comfort.",
        "price":"$375",
        "image":"./asset/-game-monitor-gaming.png"
    }
}
let hash = window.location.hash
let proname = document.querySelector(".proname")
let h4a = document.querySelector(".h4a")
let pbrake = document.querySelector(".pbrake")
let bdiv = document.querySelector(".bdiv")
let biim = document.querySelector(".biim")
proname.innerText = product[hash]["price"]
h4a.innerText = product[hash]["name"]
pbrake.innerText = product[hash]["discription"]
biim.src = product [hash]["image"]
console.log("Product.js is working!");



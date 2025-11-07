


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
        "image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hiclipart.com%2Ffree-transparent-background-png-clipart-mpxvn&psig=AOvVaw13Vo2c2I-tVuvh3dIjzkTH&ust=1761896778957000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJDE0I-3y5ADFQAAAAAdAAAAABAE"
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



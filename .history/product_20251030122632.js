


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
        "image":"./asset/chair bgg.jfif"
    },
          "#product5":{
        "name":"The north coat",
        "discription":"Stylish “The North Coat” winter jacket designed for warmth, durability, and outdoor comfort in cold weather.",
        "price":"$260",
        "image":"./asset/jaket.jpg"
    },
          "#product6":{
        "name":"Gucci dullfe bag",
        "discription":"Luxury Gucci Duffle Bag crafted from premium materials, featuring the iconic logo design and spacious interior for travel or daily use.",
        "price":"$960",
        "image":"./asset/gucci.jfif"
    },
          "#product7":{
        "name":"RBG Liquid CPU Cooler",
        "discription":"RGB Liquid CPU Cooler with efficient heat dissipation, vibrant customizable lighting, and quiet performance for high-end PC builds.
",
        "price":"$160",
        "image":"./asset/cooler.png"
    },
          "#product8":{
        "name":"S-series Comfort Chair",
        "discription":"Ergonomic S-Series Comfort Chair with adjustable height, lumbar support, and soft cushioning for long-hour sitting comfort.",
        "price":"$375",
        "image":"./asset/chair bgg.jfif"
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



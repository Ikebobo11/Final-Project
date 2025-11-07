


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
        "discription":"RGB Liquid CPU Cooler with efficient heat dissipation, vibrant customizable lighting, and quiet performance for high-end PC builds.",
        "price":"$160",
        "image":"./asset/cooler.png"
    },
          "#product8":{
        "name":"Small Bookshelf",
        "discription":"Compact Small Bookshelf with sturdy wooden design, perfect for organizing books, decor, or small office items in limited spaces.",
        "price":"$160",
        "image":"./asset/shelf.jfif"
    },
              "#product9":{
        "name":"Breed dried dog food",
        "discription":"Nutritious Breed Dried Dog Food made with balanced proteins, grains, and vitamins to support healthy growth, energy, and coat shine.",
        "price":"$100",
        "image":"./asset/dog feed.jfif"
    },
              "#product10":{
        "name":"Canon EOS DSRL Camera",
        "discription":"Professional Canon EOS DSLR Camera with high-resolution imaging, fast autofocus, and interchangeable lenses for sharp, detailed photography and video.",
        "price":"$360",
        "image":"./asset/camera dis.jfif"
    },
              "#product11":{
        "name":"ASUS FHD Gaming Laptop",
        "discription":"ASUS FHD Gaming Laptop with powerful graphics, full HD display, fast processor, and advanced cooling for smooth, high-performance gaming.",
        "price":"$700",
        "image":"./asset/gaming laptpop.jfif"
    },
              "#product12":{
        "name":"Curology Product Set",
        "discription":"Curology Product Set featuring personalized skincare formulas designed to treat acne, dark spots, and uneven skin tone for clearer, healthier skin.",
        "price":"$500",
        "image":"./asset/body set.jfif"
    },
              "#product13":{
        "name":"Kids Electric Car",
        "discription":"Rechargeable Kids Electric Car with realistic design, working lights, and safe speed controls for fun and adventurous outdoor play.",
        "price":"$960",
        "image":"./asset/kids car.jfif"
    },
              "#product14":{
        "name":"Jr.Zoom Soccer Cleats",
        "discription":"Jr. Zoom Soccer Cleats built for speed and comfort, featuring lightweight materials, strong grip soles, and a snug fit for young athletes.",
        "price":"$1160",
        "image":"./asset/body set.jfif"
    },
              "#product15":{
        "name":"Curology Product Set",
        "discription":"Curology Product Set featuring personalized skincare formulas designed to treat acne, dark spots, and uneven skin tone for clearer, healthier skin.",
        "price":"$500",
        "image":"./asset/body set.jfif"
    },
              "#product16":{
        "name":"Curology Product Set",
        "discription":"Curology Product Set featuring personalized skincare formulas designed to treat acne, dark spots, and uneven skin tone for clearer, healthier skin.",
        "price":"$500",
        "image":"./asset/body set.jfif"
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



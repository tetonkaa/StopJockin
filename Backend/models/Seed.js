const db = require('./')

const productseed = [
    {
        name: 'Stop Jockin Shampoo',
        price: '15',
        description: 'The original Stop Jockin Shampoo',
        image: 'https://i.imgur.com/0Q0wOWO.jpg',
        user: '63c0532a3fdaa950a6286147'
        
    },
    {
        name: 'Stop Jockin Hair Conditioner',
        price: '15',
        description: 'The original Stop Jockin Hair Conditioner',
        image: 'https://i.imgur.com/yRnDsAR.jpeg',
        user: '63c0532a3fdaa950a6286147'
        
    },
    {
        name: 'Stop Jockin Lipstick',
        price: '15',
        description: 'The all new all natural lipstick from Joc',
        image: 'https://i.imgur.com/xAieUkW.jpg',
        user: '63c0532a3fdaa950a6286147'
        
    },
    {
        name: 'Stop Jockin Haircombs',
        price: '15',
        description: 'Useful for getting out those knots!',
        image: 'https://i.imgur.com/muOJvNO.jpg',
        user: '63c0532a3fdaa950a6286147'
        
    },

]
db.Product.deleteMany({}, () => {
db.Product.create(productseed, (err, products) => {

    if (err) {
        console.log("Error on create products:", err)
    } else {
        console.log("Created", products.length, "product")
    } 
})
})

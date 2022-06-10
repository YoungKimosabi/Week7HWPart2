const products = [
    {
        id:1,
        name:'Prebuilt PC',
        price:'$1000',
        inventory:8,
        description:"Prebuilt PC with intel i9-9700k processor and NVIDIA GeForce 3060 RTX ",
        
    },
    {
        id:2,
        name:'Ultimate Gamer Package',
        price:'$4500',
        inventory:4,
        description:"RGB Desk, 3 ASUS 4k 27 in. monitors, razor keyboard, mousepad, and mouse, prebuilt PC, 5 year warranty",
        // imgSrc:,
    },
    {
        id:3,
        name:'Gamer Package',
        price:'$1800',
        inventory:6,
        description:"Prebuilt PC, RGB Desk",
        // imgSrc:,
    }
];

const shop = (action, product, cart=[]) =>{
    // await the user's action string, product id, andddd their cart?
    let cart1 = cart.slice()
    switch(action){
        case "add_to_cart":
            // add item to cart1 array
            cart1.push(product)
            return cart1;
        case "remove_from_cart":
            //remove item from cart1 array
            productIndex = cart1.indexOf(product)
            cart1.splice(productIndex,1)
            return cart1;
        case "remove_all_from_cart":
            //remove all of one product from cart1
            //while product in cart1, cart1.remove(product)
            while(cart1.includes(product)){
                productIndex = cart1.indexOf(product)
                cart1.splice(productIndex,1)
            };
            return cart1;
        case "empty_cart":
            return [];
        }
};
cart = shop('add_to_cart', products[0] )
console.log('\n cart:\n', cart)
cart = shop('add_to_cart', products[0], cart)
console.log('\n cart:\n', cart)
cart = shop('add_to_cart', products[2], cart)
console.log('\n cart:\n', cart)
cart = shop('remove_from_cart', products[0], cart)
console.log('\n cart:\n', cart)
cart = shop('add_to_cart', products[0], cart)
console.log('\n cart:\n', cart)
cart = shop('remove_all_from_cart', products[0], cart)
console.log('\n cart:\n', cart)
cart = shop('empty_cart', )
console.log('\n cart:\n', cart)
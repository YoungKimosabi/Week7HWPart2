// write a function that takes in an
// 1. action string (add_to_cart), (remove_from_cart), (remove_all), (empty_cart)
// 2. item JS object [dictionary]
// 3. Cart (should be an EMPTY ARRAY by default)

// use a switch statement to perform actions based on the action string

// each action should RETURN a fresh Cart array with the changes
// if item not in cart and user said "remove", return the cart unchanged

// THIS SHOULD BE AN OUT OF PLACE ALGORITHM (cart object inputted will never be changed)
// AKA return a NEW COPY of cart array (slice())??

const products = [
    {
        id:1,
        name:'hallway runner',
        price:'$1000',
        inventory:8,
        description:"4x10 foot vintage hallway runner. Wool & Silk blend. 1960's Turkish.",
        // imgSrc:,
    },
    {
        id:2,
        name:'large area rug',
        price:'$4500',
        inventory:4,
        description:"10x13 foot vintage area rug. 100% Silk, 1970s, Persian.",
        // imgSrc:,
    },
    {
        id:3,
        name:'medium area rug',
        price:'$1800',
        inventory:6,
        description:"5x7 foot vintage area rug. 100% Wool, hand dyed. Turkish.",
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
let getData = (dataSrc) => {
    fetch(dataSrc
        ).then((result) => result.json()
        ).then((result) => {
            getProductInfo(result);
        })
}

let getProductInfo = input => {
    let object = [...input.products];
    console.log(object);

    let allLaptops = object.filter(device => device.category === 'laptops');
    console.log('All laptops with descending price order');
    console.log(allLaptops);

    let firstGrocery = object.find(p => p.category === 'groceries');
    console.log('First grocery');
    console.log(firstGrocery);

    let firstSamsung = object.find(device => 
        device.brand === 'Samsung' &&
        device.category === 'smartphones');
    console.log(`Index of the first Samsung:\n${firstSamsung.id}`);

    let findSony = object.some(item => item.brand === 'Sony');
    console.log('Looking for the brand: "Sony".');
    if(!findSony) {
        console.log('There\'s no sony product!');
    }

    let findSkinCareProduct = object.filter
    (product => product.category === 'skincare');
    findSkinCareProduct.sort((item1, item2) => item2.rating - item1.rating);
    console.log('The name of the highest rated skincare product');
    console.log(findSkinCareProduct[0].title);

    let avarageDiscount = object.filter(product => product.rating >= 4.5);
    let avaragePercentage = avarageDiscount.map((item) => item.discountPercentage);
    let avgResult = avaragePercentage.reduce((sum, item) => sum += item, 0);
    console.log(`The average discount percentage of products with a rating above 4.5:\n${avgResult / avaragePercentage.length}`);

    let productHighestPrice = object.reduce((acc, curr) => acc.price > curr.price ? acc : curr, {});
    console.log(`Find the product with the highest price:`);
    console.log(productHighestPrice);

    let avgIphone = object.filter(phone => phone.category === 'smartphones' && phone.brand === 'Apple');
    let phonesPrice = avgIphone.map(phone => phone.price);
    let avgIphoneResult = phonesPrice.reduce((sum, item) => sum += item, 0);
    console.log(`Average price of all Iphone smartphones:\n${avgIphoneResult / phonesPrice.length}`);

    let productLowestPrice = object.reduce((acc, curr) => curr.price > acc.price ? acc : curr, {});
    console.log('The product with the lowest price:');
    console.log(productLowestPrice);
}

getData('https://dummyjson.com/products');
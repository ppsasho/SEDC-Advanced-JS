let getData = (dataSrc) => {
    fetch(dataSrc
        ).then((result) => result.json()
        ).then((result) => {
            getProductInfo(result);
        })
}

let getProductInfo = object => {
    console.log(object);

    let allLaptops = object.products.filter(device => device.category === 'laptops');
    console.log('All laptops with descending price order');
    console.log(allLaptops);

    let firstItem = object.products.filter(device => device.id === 1);
    console.log('First item');
    console.log(firstItem);

    let firstSamsung = object.products.filter(device => 
        device.brand === 'Samsung' &&
        device.category === 'smartphones');
    console.log(`Index of the first Samsung:\n${firstSamsung[0].id}`);

    let findSony = object.products.find(item => item.brand === 'Sony');
    console.log('Looking for the brand: "Sony".');
    if(findSony === undefined) {
        console.log('There\'s no device with that brand');
    }

    let findSkinCareProduct = object.products.filter
    (product => product.category === 'skincare');
    findSkinCareProduct.sort((item1, item2) => item2.rating - item1.rating);
    console.log('The name of the highest rated skincare product');
    console.log(findSkinCareProduct[0].title);

    let avarageDiscount = object.products.filter(product => product.rating >= 4.5);
    console.log(avarageDiscount);
    let avaragePercentage = avarageDiscount.map((item) => item.discountPercentage);
    let avgResult = avaragePercentage.reduce((sum, item) => sum += item, 0);
    console.log(`The average discount percentage of products with a rating above 4.5:\n${avgResult / avaragePercentage.length}`);

    let productHighestPrice = object.products.sort((item1, item2) => item2.price - item1.price);
    console.log(`Find the product with the highest price:`);
    console.log(productHighestPrice[0]);

    let avgIphone = object.products.filter(phone => phone.category === 'smartphones' && phone.brand === 'Apple');
    let phonesPrice = avgIphone.map(phone => phone.price);
    let avgIphoneResult = phonesPrice.reduce((sum, item) => sum += item, 0);
    console.log(`Average price of all IPhone smartphones:\n${avgIphoneResult / phonesPrice.length}`);

    let productLowestPrice = productHighestPrice[productHighestPrice.length -1];
    console.log('The product with the lowest price:');
    console.log(productLowestPrice);
}

getData('https://dummyjson.com/products');
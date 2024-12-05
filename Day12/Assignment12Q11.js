const products = [
    {
        name: 'Iphone',
        price: 400,
    },
    {
        name: 'Keyboard',
        price: 15,
    },
];

function processProducts() {
    const productNames = products.map(ele => ele.name);
    const prices = products.map(ele => ele.price);
    // return productNames;

    productNames.forEach((ele, i) => {
        console.log(ele, "is", prices[i]>50 ? "above" : "below", "$50")
    });
};

processProducts();
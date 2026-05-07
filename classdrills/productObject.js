const product = {
        "price" : 1200,
	"inStock" : true,
};

if(product.inStock === false) {
  console.log(`Stock in stock "${product.inStock}" so out of stock`);
} else {
  console.log(`Stock in stock "${product.inStock}" so In stock`);
}

if(product.price > 1000) {
  console.log(`Price ${product.price} is Expensive`);
} else {
  console.log(`Price ${product.price} is Affordable`);
}

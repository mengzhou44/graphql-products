module.exports = {
  products: (parent, args, { db }) => {
    let { input } = args;
    let result = db.products;
    if (input) {
      const { onSale, avgRatings } = input;
      let result = [];
      for (let product of db.products) {
        if (product.onSale === onSale) {
          let filtered = db.reviews.filter(
            (review) => review.productId === product.id
          );
          let numOfReviews = filtered.length;
          let sum = filtered.reduce((sum, item) => sum + item.rating, 0);
          let avg = sum / numOfReviews;
          if (avg >= avgRatings) {
            result.push(product);
          }
        }
      }
    }

    return result.map((product) => {
      product.category = db.categories.find(
        (category) => product.categoryId === category.id
      );
      return product;
    });
  },
  categories: (parent, args, { db }) => db.categories,
  product: (parent, args, { db }) => {
    const id = args.id;
    return  db.products.find((item) => item.id === id);
  },
  category: (parent, args, { db }) => {
    const id = args.id;
    return db.categories.find((item) => item.id === id);
  },
};

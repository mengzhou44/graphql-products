module.exports = {
  products: (parent, args, { db}) => {
    return db.products.filter((product) => product.categoryId === parent.id);
  },
};

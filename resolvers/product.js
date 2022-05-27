module.exports = {
  reviews: (parent, args, { db}) => {
    return db.reviews.filter((review) => review.productId === parent.id);
  },
};

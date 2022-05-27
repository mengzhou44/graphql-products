const { v4: uuid } = require('uuid');

module.exports = {
  addCategory: (parent, { input }, { db}) => {
    const newCategory = {
      id: uuid(),
      name: input.name,
    };

    db.categories.push(newCategory);
    return newCategory;
  },
};

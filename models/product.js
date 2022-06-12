const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path');

const p = path.join(rootDir,'data','products.json');

const getProductsFromFile = callbakfn => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      callbakfn([]);
    } else {
      callbakfn(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};

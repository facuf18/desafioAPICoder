let products = [];

const productsController = {
  getProducts: (req, res) => {
    res.json(products);
  },
  getProduct: (req, res) => {
    const productId = req.params.id;
    const product = products.find((product) => product.id === Number(productId));
    if (!product) {
      return res.status(404).send('Product not found');
    }
    res.json(product);
  },
  addProduct: (req, res) => {
    const product = req.body;
    product.id = products.length + 1;
    products.push(product);
    res.json(product);
  },
  updateProduct: (req, res) => {
    const { id } = req.params;
    const { name, price, thumbnail } = req.body;
    const product = products.find(p => p.id === Number(id));
    if (!product) {
      return res.status(404).send('Product not found');
    }
    product.name = name;
    product.price = price;
    product.thumbnail = thumbnail;
    res.json(product);
  },
  deleteProduct: (req, res) => {
    const productId = req.params.id;
    const index = products.findIndex((product) => product.id === productId);
    products.splice(index, 1);
    res.json(products);
  },
};

module.exports = productsController;
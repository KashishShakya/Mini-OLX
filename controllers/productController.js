import Product from '../model/Product.js';

export const getAll = async (req, res) => {
  const products = await Product.find().populate('owner', 'username');
  res.json(products);
};

export const getOne = async (req, res) => {
  const product = await Product.findById(req.params.id).populate('owner', 'username');
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

export const create = async (req, res) => {
  try {
    const product = await Product.create({ ...req.body, owner: req.user._id });
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const update = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  if (product.owner.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: 'Not authorized' });
  }
  Object.assign(product, req.body);
  await product.save();
  res.json(product);
};

export const remove = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  if (product.owner.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: 'Not authorized' });
  }
  await product.deleteOne();
  res.json({ message: 'Deleted successfully' });
};
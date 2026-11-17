const express = require('express');
const { inventory } = require('../data/store');

const router = express.Router();

// GET: Retrieve all inventory items and KPI metrics
router.get('/items', (req, res) => {
  const totalSKUs = inventory.length;
  const totalUnits = inventory.reduce((sum, item) => sum + item.stock, 0);
  const totalValuation = inventory.reduce((sum, item) => sum + (item.price * item.stock), 0);
  const lowStockCount = inventory.filter(item => item.stock <= item.lowStockThreshold).length;

  res.status(200).json({
    success: true,
    metrics: { totalSKUs, totalUnits, totalValuation, lowStockCount },
    data: inventory
  });
});

// POST: Add a new SKU product to inventory
router.post('/items', (req, res) => {
  try {
    const { sku, name, category, price, stock, lowStockThreshold } = req.body;

    if (!sku || !name || price === undefined || stock === undefined) {
      return res.status(400).json({ success: false, message: 'SKU, name, price, and stock are required.' });
    }

    const formattedSku = sku.trim().toUpperCase();
    if (inventory.some(i => i.sku === formattedSku)) {
      return res.status(409).json({ success: false, message: `SKU ${formattedSku} already exists.` });
    }

    const newItem = {
      id: Date.now(),
      sku: formattedSku,
      name: name.trim(),
      category: category ? category.trim() : 'General',
      price: parseFloat(price),
      stock: Math.max(0, parseInt(stock)),
      lowStockThreshold: lowStockThreshold ? parseInt(lowStockThreshold) : 5
    };

    inventory.unshift(newItem);
    res.status(201).json({ success: true, message: 'Product added to inventory!', data: newItem });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PATCH: Adjust stock quantity (+delta or -delta)
router.patch('/items/:id/stock', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { delta } = req.body;
    const item = inventory.find(i => i.id === id);

    if (!item) {
      return res.status(404).json({ success: false, message: 'Product not found.' });
    }

    const adjustment = parseInt(delta);
    if (isNaN(adjustment)) {
      return res.status(400).json({ success: false, message: 'Valid numeric stock delta is required.' });
    }

    if (item.stock + adjustment < 0) {
      return res.status(400).json({ success: false, message: 'Insufficient stock for this deduction.' });
    }

    item.stock += adjustment;
    res.status(200).json({ success: true, message: 'Stock level updated.', data: item });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE: Remove product from inventory
router.delete('/items/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = inventory.findIndex(i => i.id === id);

    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Product not found.' });
    }

    inventory.splice(index, 1);
    res.status(200).json({ success: true, message: 'Product removed from inventory.' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
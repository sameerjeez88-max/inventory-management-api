/**
 * @project Inventory & Stock Management REST API
 * @author Rana Yasir Mahy Ud Din (https://ranayasir.unaux.com/)
 */

const inventory = [
  {
    id: 1,
    sku: 'TECH-LAP-001',
    name: 'MacBook Pro M3 16"',
    category: 'Electronics',
    price: 2499.00,
    stock: 12,
    lowStockThreshold: 5
  },
  {
    id: 2,
    sku: 'TECH-MON-002',
    name: 'Dell UltraSharp 27" 4K Monitor',
    category: 'Peripherals',
    price: 549.00,
    stock: 3,
    lowStockThreshold: 5
  },
  {
    id: 3,
    sku: 'OFF-CHR-003',
    name: 'Ergonomic Mesh Office Chair',
    category: 'Furniture',
    price: 320.00,
    stock: 0,
    lowStockThreshold: 4
  }
];

module.exports = { inventory };
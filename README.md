# 📦 Inventory & Stock Management REST API

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.21-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![REST API](https://img.shields.io/badge/Architecture-RESTful%20API-6366F1?style=for-the-badge)](https://restfulapi.net/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

An enterprise-grade **Inventory & Stock Management REST API** engineered with **Node.js**, **Express.js**, and a responsive dark-mode **Tailwind CSS** ERP dashboard. Built for e-commerce operations, warehouses, and retail backends, the system supports unique SKU enforcement, atomic stock quantity adjustments, automated low-stock alerting, and real-time financial stock valuation.

---

## 📋 Table of Contents
1. [System Overview & Business Value](#-system-overview--business-value)
2. [Core Features & Highlights](#-core-features--highlights)
3. [Tech Stack & Architecture](#-tech-stack--architecture)
4. [Project Folder Structure](#-project-folder-structure)
5. [Complete API Endpoints Reference](#-complete-api-endpoints-reference)
6. [Request & Response Payloads (JSON Examples)](#-request--response-payloads-json-examples)
7. [HTTP Status & Error Handling](#-http-status--error-handling)
8. [Local Installation & Testing](#-local-installation--testing)
9. [Production Scaling & Roadmap](#-production-scaling--roadmap)
10. [Author & Developer](#-author--developer)

---

## 🎯 System Overview & Business Value

Accurate stock visibility prevents overselling, warehouse bottlenecks, and lost revenue. **StockPulse ERP (`inventory-management-api`)** provides a lightweight, API-first inventory engine paired with a real-time operator console:

* **Unique SKU Registry:** Prevents duplicate product codes (`409 Conflict`) and enforces standardized uppercase SKU formatting.
* **Atomic Stock Deltas:** Safely increments or decrements stock units (`+1`, `-1`, `+10 Restock`) while guarding against negative inventory balances (`400 Bad Request`).
* **Real-Time ERP Metrics:** Automatically aggregates total SKUs, total physical units, total dollar valuation, and low/out-of-stock alert counts.

---

## 🌟 Core Features & Highlights

* **🚨 Automated Low-Stock & Out-of-Stock Alerts:** Dynamically flags items (`In Stock`, `Low Stock`, `Out of Stock`) based on customizable threshold limits.
* **💰 Live Inventory Valuation Engine:** Calculates per-SKU value and aggregate warehouse valuation in real time.
* **⚡ Quick Stock Adjustment Controls:** One-click `-1`, `+1`, and `+10 Restock` buttons backed by RESTful `PATCH` endpoints.
* **🎨 Modern Dark-Mode ERP Dashboard:** Responsive Tailwind CSS interface built for rapid warehouse operations.
* **🧩 Modular Architecture:** Clean separation between route controllers (`inventoryRoutes.js`), data store (`store.js`), and server bootstrap (`server.js`).

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Role & Responsibility |
| :--- | :--- | :--- |
| **Frontend UI** | HTML5, Vanilla JS (ES6+), Tailwind CSS | KPI summary cards, SKU registration form, and live stock table |
| **Backend Runtime** | Node.js (v18+) | Non-blocking server runtime |
| **Web Framework** | Express.js (v4.21) | REST routing, validation rules, and static file delivery |
| **Configuration** | Dotenv & CORS | Environment port configuration and cross-origin API access |

---

## 📂 Project Folder Structure

```text
inventory-management-api/
├── public/
│   └── index.html               # Tailwind CSS ERP inventory dashboard UI
├── src/
│   ├── routes/
│   │   └── inventoryRoutes.js   # REST controllers for SKU CRUD & atomic stock updates
│   └── data/
│       └── store.js             # In-memory warehouse inventory store with seed items
├── server.js                    # Express server initialization & static middleware
├── package.json                 # Project dependencies and scripts manifest
├── .env                         # Environment variables (PORT=5008)
├── .gitignore                   # Git exclusions (node_modules, .env)
└── README.md                    # Comprehensive technical & API documentation
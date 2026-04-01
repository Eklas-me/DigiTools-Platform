# 🛒 DigiTools Platform

> A modern **digital tools marketplace** built with React.js — browse, add to cart, and checkout premium digital products with a beautiful, responsive UI.

## 🚀 Live Demo

🔗 [View Live](https://digitoolseklas.netlify.app/) 

---

## ✨ Key Features

- 🛍️ **Product Showcase** — Browse 6 premium digital tools in a beautiful 3-column card grid with dynamic badges (Best Seller, New, Popular)
- 🛒 **Fully Functional Cart System** — Add/remove products, view live total price, and clear cart on checkout — all with smooth React-Toastify notifications
- 📱 **Fully Responsive Design** — Pixel-perfect layout on mobile, tablet, and desktop using Tailwind CSS

---

## 🧩 Sections

| Section | Description |
|---|---|
| **Navbar** | Fixed navigation with cart count badge |
| **Hero Banner** | Eye-catching banner with CTA buttons |
| **Stats** | 50K+ Users, 200+ Tools, 4.9 Rating |
| **Products Grid** | 6 product cards with tab toggling |
| **Cart View** | Cart summary with remove & checkout |
| **How It Works** | 3-step guide section |
| **Pricing** | 3-tier pricing cards (Starter / Pro / Enterprise) |
| **Footer** | Dark footer with links & social icons |

---

## ⚙️ Technologies Used

| Technology | Purpose |
|---|---|
| **React.js** | UI framework |
| **Vite** | Build tool & dev server |
| **Tailwind CSS v4** | Utility-first styling |
| **DaisyUI** | UI component library |
| **React-Toastify** | Toast notifications |
| **JSON** | Local product data |

---

## 📦 Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/Eklas-me/DigiTools-Platform.git

# 2. Enter project directory
cd DigiTools-Platform

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

Then open **http://localhost:5173** in your browser.

---

## 📁 Project Structure

```
DigiTools-Platform/
├── public/
│   ├── products.json        # Product data (6 items)
│   └── assets/              # Icons & images
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Fixed navbar with cart count
│   │   ├── Banner.jsx       # Hero section
│   │   ├── Stats.jsx        # Stats section
│   │   ├── MainSection.jsx  # Products/Cart toggle
│   │   ├── ProductCard.jsx  # Individual product card
│   │   ├── CartItem.jsx     # Individual cart item
│   │   ├── Steps.jsx        # How it works section
│   │   ├── Pricing.jsx      # Pricing plans
│   │   └── Footer.jsx       # Footer with CTA banner
│   ├── App.jsx              # Root component & state
│   └── index.css            # Global styles
└── index.html
```

---

## 👨‍💻 Author

**Eklas** — Programming Hero Assignment A-6

---

## 📄 License

This project is for educational purposes only.
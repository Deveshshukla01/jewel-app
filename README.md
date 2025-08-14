# React + Vite

# RatnaLaya - Jewellery Store

A modern jewellery e-commerce website built with React, Vite, and Appwrite.

## Features

- 🏠 Beautiful homepage with hero carousel
- 📱 Responsive design for all devices
- 🛍️ Product categories (Bracelets, Necklaces, Earrings, etc.)
- ⭐ Featured products section
- 👨‍💼 Admin dashboard for product management
- 🔐 Secure authentication with Appwrite
- 📊 Real-time price banner updates
- 💎 Product image uploads and management

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd goldj
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Appwrite**
   - Create an account at [Appwrite Cloud](https://cloud.appwrite.io)
   - Create a new project
   - Create a database with the following collections:
     - `products` (with attributes: name, price, category, featured, imageUrl)
     - `banner` (with attribute: text)
     - `categories` (optional)
     - `reviews` (optional)
   - Create a storage bucket for product images
   - Copy `.env.example` to `.env.local` and fill in your Appwrite credentials

4. **Environment Variables**
   Create a `.env.local` file with your Appwrite configuration:
   ```env
   VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
   VITE_APPWRITE_PROJECT=your_project_id
   VITE_APPWRITE_DATABASE=your_database_id
   VITE_APPWRITE_BUCKET=your_bucket_id
   VITE_APPWRITE_COLLECTION_PRODUCTS=products
   VITE_APPWRITE_COLLECTION_BANNER=banner
   VITE_APPWRITE_COLLECTION_CATEGORIES=categories
   VITE_APPWRITE_COLLECTION_REVIEWS=reviews
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

## Admin Panel

- Access the admin panel at `/admin`
- Login with your Appwrite admin credentials
- Manage products: add, edit, delete, and toggle featured status
- Update price banner text
- All changes persist in the Appwrite database

## Technologies Used

- **Frontend**: React 19, Vite, Tailwind CSS
- **Backend**: Appwrite (Database, Storage, Authentication)
- **Routing**: React Router DOM
- **UI Components**: Swiper for carousels
- **Styling**: Tailwind CSS with custom animations

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── contexts/           # React contexts (Auth)
├── appwrite/           # Appwrite configuration
└── styles/             # CSS files
```

## Troubleshooting

1. **Products not persisting**: Ensure your Appwrite database and collections are properly configured
2. **Images not uploading**: Check your storage bucket permissions in Appwrite
3. **Authentication issues**: Verify your Appwrite project ID and endpoint
4. **Environment variables**: Make sure all required env vars are set in `.env.local`
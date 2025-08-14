import { Client, Databases, Storage, Account, ID, Query } from 'appwrite'

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT || 'YOUR_PROJECT_ID')

// Log configuration for debugging
console.log('Appwrite Config:', {
  endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
  project: import.meta.env.VITE_APPWRITE_PROJECT,
  database: import.meta.env.VITE_APPWRITE_DATABASE,
  bucket: import.meta.env.VITE_APPWRITE_BUCKET
})

export const account = new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client)
export const appwriteClient = client
export const ID_TOOL = ID
export const QueryTool = Query

// Vite env vars (create a .env.local or .env file - example in .env.example)
export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE || 'default'
export const BUCKET_ID = import.meta.env.VITE_APPWRITE_BUCKET || 'default'

export const COLLECTIONS = {
  categories: import.meta.env.VITE_APPWRITE_COLLECTION_CATEGORIES || 'categories',
  products: import.meta.env.VITE_APPWRITE_COLLECTION_PRODUCTS || 'products',
  banner: import.meta.env.VITE_APPWRITE_COLLECTION_BANNER || 'banner',
  reviews: import.meta.env.VITE_APPWRITE_COLLECTION_REVIEWS || 'reviews'
}
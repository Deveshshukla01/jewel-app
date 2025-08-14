# Appwrite Database Setup Instructions

## CRITICAL: Database Permissions Setup

The main issue you're experiencing is likely due to **incorrect database permissions** in Appwrite. Follow these steps exactly:

### 1. Database Collections Setup

In your Appwrite console, create these collections with the following **PERMISSIONS**:

#### Products Collection (`products`)
**Attributes:**
- `name` (String, required)
- `price` (Float, required) 
- `category` (String, required)
- `featured` (Boolean, default: false)
- `imageUrl` (String, optional)
- `createdAt` (DateTime, optional)

**PERMISSIONS (VERY IMPORTANT):**
- **Read Access**: `Any` (this allows all users to see products)
- **Create Access**: `Users` (only authenticated users can create)
- **Update Access**: `Users` (only authenticated users can update)
- **Delete Access**: `Users` (only authenticated users can delete)

#### Banner Collection (`banner`)
**Attributes:**
- `text` (String, required)

**PERMISSIONS:**
- **Read Access**: `Any` (everyone can see banner)
- **Create Access**: `Users`
- **Update Access**: `Users` 
- **Delete Access**: `Users`

#### Categories Collection (`categories`) - Optional
**Attributes:**
- `name` (String, required)
- `id` (String, required)

**PERMISSIONS:**
- **Read Access**: `Any`
- **Create Access**: `Users`
- **Update Access**: `Users`
- **Delete Access**: `Users`

### 2. Storage Bucket Setup

Create a storage bucket for product images:

**PERMISSIONS:**
- **Read Access**: `Any` (everyone can view images)
- **Create Access**: `Users` (only authenticated users can upload)
- **Update Access**: `Users`
- **Delete Access**: `Users`

### 3. Authentication Setup

1. Go to **Auth** section in Appwrite console
2. Enable **Email/Password** authentication
3. Create an admin user account for yourself

### 4. Environment Variables

Create `.env.local` file with your actual Appwrite credentials:

```env
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT=your_actual_project_id
VITE_APPWRITE_DATABASE=your_actual_database_id
VITE_APPWRITE_BUCKET=your_actual_bucket_id
VITE_APPWRITE_COLLECTION_PRODUCTS=products
VITE_APPWRITE_COLLECTION_BANNER=banner
VITE_APPWRITE_COLLECTION_CATEGORIES=categories
VITE_APPWRITE_COLLECTION_REVIEWS=reviews
```

### 5. Testing the Setup

1. **Test without login**: Visit your homepage - you should see products and banner
2. **Test with admin login**: Login to admin panel, add/edit products
3. **Test persistence**: Logout and check if changes are still visible

### Common Issues & Solutions

**Issue**: Changes disappear after logout
**Solution**: Check that collections have `Any` read permissions

**Issue**: Cannot create products
**Solution**: Ensure you're logged in and have `Users` create permissions

**Issue**: Images not showing
**Solution**: Check storage bucket has `Any` read permissions

**Issue**: "Document not found" errors
**Solution**: Verify your collection IDs match your environment variables

### Debug Steps

1. Open browser console and check for error messages
2. Verify your environment variables are loaded correctly
3. Check Appwrite console logs for permission errors
4. Test API calls directly in Appwrite console

The key is setting **Read permissions to `Any`** so all users (logged in or not) can see the data, while keeping Create/Update/Delete permissions to `Users` for security.
# APK Upload Guide - Google Drive Integration

This guide explains how to manually upload your APK file to Google Drive and make it available for download through your web app.

## 📋 Overview

The flow is:
1. **Upload APK to Google Drive** (manually)
2. **Get shareable link** from Google Drive
3. **Store link in Supabase** using the provided script
4. **Users download** through your web app

## 🚀 Step-by-Step Instructions

### Step 1: Upload APK to Google Drive

1. Go to [Google Drive](https://drive.google.com)
2. Click **"+ New"** → **"File upload"**
3. Select your APK file (`cri-app test 1.apk`)
4. Wait for the upload to complete

### Step 2: Get Shareable Link

1. **Right-click** on the uploaded APK file
2. Select **"Share"** or **"Get link"**
3. Change permissions to **"Anyone with the link can view"**
4. **Copy the link** (it should look like: `https://drive.google.com/file/d/1ABC123.../view?usp=sharing`)

### Step 3: Add Link to Database

1. Open your terminal in the project directory
2. Run the script with your Google Drive link:

```bash
node add-gdrive-apk.js "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
```

**Example:**
```bash
node add-gdrive-apk.js "https://drive.google.com/file/d/1ABC123DEF456GHI789/view?usp=sharing" "cri-app-v1.0.apk" "1.0.0"
```

**Parameters:**
- `google_drive_link` (required): The shareable Google Drive link
- `file_name` (optional): Name for the APK file (default: "cri-app.apk")
- `version` (optional): Version number (default: "1.0.0")

### Step 4: Verify Setup

1. Start your development server:
```bash
npm run dev
```

2. Open your web app and test the APK download functionality
3. The download should work directly from Google Drive

## 🔧 How It Works

### Database Storage
The Google Drive link is stored in the `apk_files` table:
- `file_name`: Name of the APK file
- `file_path`: **Full Google Drive sharing link**
- `version`: Version number
- `created_at`: Timestamp

### Download Process
1. User clicks download button
2. App fetches latest APK record from database
3. App extracts file ID from Google Drive link
4. App generates direct download URL: `https://drive.google.com/uc?export=download&id=FILE_ID`
5. Browser downloads the file

### Code Implementation
The implementation is already in place:
- `supabase.ts`: Contains Google Drive integration functions
- `PlayStoreModal.tsx`: Handles the download process

## 📝 Script Usage Examples

### Basic usage (with defaults):
```bash
node add-gdrive-apk.js "https://drive.google.com/file/d/1ABC123.../view?usp=sharing"
```

### With custom filename:
```bash
node add-gdrive-apk.js "https://drive.google.com/file/d/1ABC123.../view?usp=sharing" "cri-app-beta.apk"
```

### With custom filename and version:
```bash
node add-gdrive-apk.js "https://drive.google.com/file/d/1ABC123.../view?usp=sharing" "cri-app-v2.0.apk" "2.0.0"
```

### Get help:
```bash
node add-gdrive-apk.js
```

## ⚠️ Important Notes

1. **File Permissions**: Make sure the Google Drive file is set to "Anyone with the link can view"
2. **File Size**: Google Drive handles large files better than direct uploads (no 50MB limit)
3. **Link Format**: The script accepts various Google Drive link formats
4. **Database**: Each run adds a new record; the app uses the latest one
5. **Environment**: Make sure your `.env` file has the correct Supabase credentials

## 🔍 Troubleshooting

### "Missing Supabase environment variables"
- Check that `.env` file exists and contains `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`

### "Invalid Google Drive link"
- Ensure the link contains `drive.google.com`
- Use the sharing link, not the edit link

### Download not working
- Verify the Google Drive file permissions are set to "Anyone with the link can view"
- Check browser console for errors
- Ensure the file hasn't been moved or deleted from Google Drive

### Script fails to run
- Make sure you have installed dependencies: `npm install`
- Check that Node.js is installed

## 🎯 Benefits of This Approach

✅ **No file size limits** (bypasses 50MB upload restriction)  
✅ **Simple manual process** (no complex deployment needed)  
✅ **Reliable hosting** (Google Drive's infrastructure)  
✅ **Easy updates** (just upload new file and run script)  
✅ **Cost effective** (uses free Google Drive storage)  

---

**Ready to go!** Once you've completed these steps, your users will be able to download the APK directly through your web application.
# Google Drive APK Integration Setup

This guide explains how to set up Google Drive integration for APK downloads, bypassing the 50MB upload limit.

## Overview

The application has been modified to:
- Store APK files on Google Drive instead of Supabase storage
- Store Google Drive file IDs in the Supabase database
- Generate direct download links from Google Drive

## Setup Steps

### 1. Upload APK to Google Drive

1. Go to [Google Drive](https://drive.google.com)
2. Upload your `cri-app test 1.apk` file
3. Right-click the uploaded file → **Share**
4. Change permissions to **"Anyone with the link can view"**
5. Copy the sharing link

### 2. Extract File ID

From the sharing link:
```
https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/view?usp=sharing
```

Extract the File ID (the long string between `/d/` and `/view`):
```
1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
```

### 3. Update Database

Run the upload script with your file ID:

```bash
node upload-to-gdrive.js YOUR_FILE_ID
```

Example:
```bash
node upload-to-gdrive.js 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
```

## Code Changes Made

### Modified Files:

1. **`src/lib/supabase.ts`**
   - `getAPKDownloadUrl()` now generates Google Drive download URLs
   - `addAPKFileRecord()` stores Google Drive file IDs
   - `updateAPKFileRecord()` updates existing records with new file IDs
   - Added `getGoogleDriveFileInfo()` for optional file metadata

2. **`src/components/PlayStoreModal.tsx`**
   - Updated download logic to use Google Drive file IDs
   - Improved error handling for missing files
   - Uses programmatic download instead of opening new tab

### New Files:

1. **`upload-to-gdrive.js`** - Helper script for database updates
2. **`.env.example`** - Environment variable template
3. **`GOOGLE_DRIVE_SETUP.md`** - This setup guide

## Download URL Format

Google Drive direct download URLs use this format:
```
https://drive.google.com/uc?export=download&id=FILE_ID
```

## Database Schema

The `apk_files` table now uses:
- `file_path`: Stores Google Drive file ID (instead of Supabase storage path)
- `file_name`: Original filename
- `version`: App version
- `created_at`: Upload timestamp

## Optional: Google Drive API Integration

For advanced features (file size, metadata), you can:

1. Enable Google Drive API in [Google Cloud Console](https://console.cloud.google.com/)
2. Create API credentials
3. Add `VITE_GOOGLE_DRIVE_API_KEY` to your `.env` file
4. Use `getGoogleDriveFileInfo()` function

## Benefits

✅ **No file size limits** (Google Drive supports up to 5TB)  
✅ **Fast downloads** (Google's CDN)  
✅ **Cost effective** (free Google Drive storage)  
✅ **Easy management** (Google Drive interface)  
✅ **Reliable hosting** (Google's infrastructure)  

## Troubleshooting

### Download not working?
- Ensure file permissions are set to "Anyone with the link can view"
- Verify the file ID is correct
- Check browser console for errors

### Database errors?
- Verify Supabase credentials in `.env`
- Ensure `apk_files` table exists
- Check network connectivity

### File not found?
- Confirm the Google Drive file is public
- Test the direct download URL manually
- Verify the file ID in the database

## Security Notes

- Google Drive files are publicly accessible with the link
- File IDs are not easily guessable
- Consider implementing download analytics if needed
- Monitor Google Drive storage usage

## Future Enhancements

- Automatic file upload via Google Drive API
- Version management and rollback
- Download analytics and tracking
- Multiple APK variants support
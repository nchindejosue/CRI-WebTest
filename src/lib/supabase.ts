import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to get the latest APK file (now returns Google Drive link in file_path)
export const getLatestAPK = async () => {
  try {
    const { data, error } = await supabase
      .from('apk_files')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1);

    if (error) throw error;
    
    // Return the first item if data exists and has elements, otherwise null
    // Note: file_path now contains full Google Drive link
    return data && data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error('Error fetching latest APK:', error);
    return null;
  }
};

// Function to extract file ID from Google Drive link
export const extractGoogleDriveFileId = (googleDriveLink: string): string | null => {
  try {
    // Handle different Google Drive URL formats:
    // https://drive.google.com/file/d/FILE_ID/view?usp=sharing
    // https://drive.google.com/open?id=FILE_ID
    // https://drive.google.com/uc?export=download&id=FILE_ID
    
    const patterns = [
      /\/file\/d\/([a-zA-Z0-9_-]+)/,  // /file/d/FILE_ID
      /[?&]id=([a-zA-Z0-9_-]+)/,      // ?id=FILE_ID or &id=FILE_ID
    ];
    
    for (const pattern of patterns) {
      const match = googleDriveLink.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    
    return null;
  } catch (error) {
    console.error('Error extracting Google Drive file ID:', error);
    return null;
  }
};

// Function to get download URL for APK from Google Drive link
export const getAPKDownloadUrl = async (googleDriveLink: string) => {
  try {
    const fileId = extractGoogleDriveFileId(googleDriveLink);
    if (!fileId) {
      console.error('Could not extract file ID from Google Drive link:', googleDriveLink);
      return null;
    }
    
    // Google Drive direct download URL format
    // For public files: https://drive.google.com/uc?export=download&id=FILE_ID
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  } catch (error) {
    console.error('Error getting APK download URL:', error);
    return null;
  }
};

// Function to get Google Drive file info (optional - for file size, name, etc.)
export const getGoogleDriveFileInfo = async (googleDriveLink: string, apiKey: string) => {
  try {
    const fileId = extractGoogleDriveFileId(googleDriveLink);
    if (!fileId) {
      throw new Error('Could not extract file ID from Google Drive link');
    }
    
    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files/${fileId}?key=${apiKey}&fields=id,name,size,mimeType,modifiedTime`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch file info from Google Drive');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error getting Google Drive file info:', error);
    return null;
  }
};

// Function to add APK file record with Google Drive link
export const addAPKFileRecord = async (fileName: string, googleDriveLink: string, version: string = '1.0.0') => {
  try {
    // Add record to database with full Google Drive link
    const { data: dbData, error: dbError } = await supabase
      .from('apk_files')
      .insert([{
        file_name: fileName,
        file_path: googleDriveLink, // Store full Google Drive link instead of just file ID
        version: version,
        created_at: new Date().toISOString()
      }]);

    if (dbError) throw dbError;
    return dbData;
  } catch (error) {
    console.error('Error adding APK file record:', error);
    throw error;
  }
};

// Function to update existing APK record with new Google Drive link
export const updateAPKFileRecord = async (id: number, googleDriveLink: string, version?: string) => {
  try {
    const updateData: any = {
      file_path: googleDriveLink, // Store full Google Drive link
      updated_at: new Date().toISOString()
    };
    
    if (version) {
      updateData.version = version;
    }

    const { data, error } = await supabase
      .from('apk_files')
      .update(updateData)
      .eq('id', id);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error updating APK file record:', error);
    throw error;
  }
};

// Function to add email to waitlist
export const addToWaitlist = async (email: string, type: 'ios' | 'playstore') => {
  try {
    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ email, type, created_at: new Date().toISOString() }]);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    throw error;
  }
};
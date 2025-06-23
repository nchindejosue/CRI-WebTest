import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to get the latest APK file
export const getLatestAPK = async () => {
  try {
    const { data, error } = await supabase
      .from('apk_files')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1);

    if (error) throw error;
    
    // Return the first item if data exists and has elements, otherwise null
    return data && data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error('Error fetching latest APK:', error);
    return null;
  }
};

// Function to get download URL for APK
export const getAPKDownloadUrl = async (filePath: string) => {
  try {
    const { data } = await supabase.storage
      .from('apk-files')
      .createSignedUrl(filePath, 3600); // 1 hour expiry

    return data?.signedUrl;
  } catch (error) {
    console.error('Error getting APK download URL:', error);
    return null;
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
// Script to add Google Drive APK link to Supabase database
// Usage: node add-gdrive-apk.js "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"

require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase client
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase environment variables');
  console.log('Make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your .env file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to add APK file record with Google Drive link
const addAPKFileRecord = async (fileName, googleDriveLink, version = '1.0.0') => {
  try {
    const { data, error } = await supabase
      .from('apk_files')
      .insert([{
        file_name: fileName,
        file_path: googleDriveLink, // Store full Google Drive link
        version: version,
        created_at: new Date().toISOString()
      }])
      .select();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error adding APK file record:', error);
    throw error;
  }
};

// Main function
const main = async () => {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('📱 Google Drive APK Link Manager');
    console.log('================================');
    console.log('');
    console.log('Usage: node add-gdrive-apk.js "<google_drive_link>" [file_name] [version]');
    console.log('');
    console.log('Examples:');
    console.log('  node add-gdrive-apk.js "https://drive.google.com/file/d/1ABC123.../view?usp=sharing"');
    console.log('  node add-gdrive-apk.js "https://drive.google.com/file/d/1ABC123.../view?usp=sharing" "cri-app-v2.apk" "2.0.0"');
    console.log('');
    console.log('Steps to use:');
    console.log('1. Upload your APK file to Google Drive');
    console.log('2. Right-click the file and select "Get link"');
    console.log('3. Make sure the link is set to "Anyone with the link can view"');
    console.log('4. Copy the link and run this script with it');
    process.exit(0);
  }

  const googleDriveLink = args[0];
  const fileName = args[1] || 'cri-app.apk';
  const version = args[2] || '1.0.0';

  // Validate Google Drive link
  if (!googleDriveLink.includes('drive.google.com')) {
    console.error('❌ Invalid Google Drive link. Please provide a valid Google Drive sharing link.');
    process.exit(1);
  }

  console.log('📱 Adding APK to database...');
  console.log(`📁 File: ${fileName}`);
  console.log(`🔗 Link: ${googleDriveLink}`);
  console.log(`📋 Version: ${version}`);
  console.log('');

  try {
    const result = await addAPKFileRecord(fileName, googleDriveLink, version);
    console.log('✅ Successfully added APK record to database!');
    console.log('📊 Record details:', result[0]);
    console.log('');
    console.log('🎉 Users can now download the APK through your web app!');
  } catch (error) {
    console.error('❌ Failed to add APK record:', error.message);
    process.exit(1);
  }
};

main();
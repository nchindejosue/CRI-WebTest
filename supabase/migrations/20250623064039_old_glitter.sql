/*
  # CRI-App Database Schema

  1. New Tables
    - `apk_files`
      - `id` (uuid, primary key)
      - `version` (text, version number)
      - `file_path` (text, path to APK file in storage)
      - `file_size` (bigint, file size in bytes)
      - `release_notes` (text, optional release notes)
      - `created_at` (timestamp)
    
    - `waitlist`
      - `id` (uuid, primary key)
      - `email` (text, unique per type)
      - `type` (text, 'ios' or 'playstore')
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access to apk_files
    - Add policies for public insert access to waitlist
*/

-- Create apk_files table
CREATE TABLE IF NOT EXISTS apk_files (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  version text NOT NULL,
  file_path text NOT NULL,
  file_size bigint,
  release_notes text,
  created_at timestamptz DEFAULT now()
);

-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  type text NOT NULL CHECK (type IN ('ios', 'playstore')),
  created_at timestamptz DEFAULT now(),
  UNIQUE(email, type)
);

-- Enable RLS
ALTER TABLE apk_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policies for apk_files (public read access)
CREATE POLICY "Anyone can read APK files"
  ON apk_files
  FOR SELECT
  TO public
  USING (true);

-- Create policies for waitlist (public insert access)
CREATE POLICY "Anyone can join waitlist"
  ON waitlist
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create storage bucket for APK files
INSERT INTO storage.buckets (id, name, public) 
VALUES ('apk-files', 'apk-files', true)
ON CONFLICT (id) DO NOTHING;

-- Create storage policy for APK files
CREATE POLICY "Public APK file access"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'apk-files');
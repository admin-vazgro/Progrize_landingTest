-- Create storage bucket for profile pictures
INSERT INTO storage.buckets (id, name, public)
VALUES ('profile-pictures', 'profile-pictures', true)
ON CONFLICT (id) DO NOTHING;

-- Setup Row Level Security (RLS) for storage
-- Allow public read access to all profile pictures
CREATE POLICY "allow_public_read_profiles"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'profile-pictures');

-- Allow authenticated users to upload their own profile pictures
CREATE POLICY "allow_users_upload_own_profile"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'profile-pictures' 
  AND (storage.foldername(name))[1] = 'avatars'
);

-- Allow users to update their own profile pictures
CREATE POLICY "allow_users_update_own_profile"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'profile-pictures')
WITH CHECK (bucket_id = 'profile-pictures');

-- Allow users to delete their own profile pictures
CREATE POLICY "allow_users_delete_own_profile"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'profile-pictures');

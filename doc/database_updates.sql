-- Add phone_country_code column to profiles table
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS phone_country_code VARCHAR(10) DEFAULT '+44';

-- Update existing records to have default country code
UPDATE profiles 
SET phone_country_code = '+44' 
WHERE phone_country_code IS NULL;

-- Add hr_email and verified columns to experiences table
ALTER TABLE experiences
ADD COLUMN IF NOT EXISTS hr_email VARCHAR(255),
ADD COLUMN IF NOT EXISTS verified BOOLEAN DEFAULT FALSE;

-- Add admin_email and verified columns to education table
ALTER TABLE education
ADD COLUMN IF NOT EXISTS admin_email VARCHAR(255),
ADD COLUMN IF NOT EXISTS verified BOOLEAN DEFAULT FALSE;

-- Create index for faster verification lookups
CREATE INDEX IF NOT EXISTS idx_experiences_verified ON experiences(verified);
CREATE INDEX IF NOT EXISTS idx_education_verified ON education(verified);
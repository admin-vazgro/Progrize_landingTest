-- Additional Profile Sections Schema
-- Run this SQL script on your Supabase database to add new profile sections

BEGIN;

-- 1. Licenses & Certifications Table
CREATE TABLE IF NOT EXISTS certifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  name VARCHAR(255) NOT NULL,
  issuing_organization VARCHAR(255) NOT NULL,
  issue_date DATE NOT NULL,
  expiration_date DATE,
  credential_id VARCHAR(255),
  credential_url TEXT,
  does_not_expire BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 2. Volunteering Experience Table
CREATE TABLE IF NOT EXISTS volunteering (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  organization VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  cause VARCHAR(255),
  start_date DATE NOT NULL,
  end_date DATE,
  is_current BOOLEAN DEFAULT FALSE,
  description TEXT,
  location VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 3. Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  start_date DATE NOT NULL,
  end_date DATE,
  is_ongoing BOOLEAN DEFAULT FALSE,
  project_url TEXT,
  associated_with VARCHAR(255), -- Company or organization
  skills TEXT[], -- Array of skills used
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 4. Publications Table
CREATE TABLE IF NOT EXISTS publications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users NOT NULL,
  title VARCHAR(500) NOT NULL,
  publisher VARCHAR(255) NOT NULL,
  publication_date DATE NOT NULL,
  publication_url TEXT,
  description TEXT,
  authors TEXT[], -- Array of co-authors
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_certifications_user_id ON certifications(user_id);
CREATE INDEX IF NOT EXISTS idx_volunteering_user_id ON volunteering(user_id);
CREATE INDEX IF NOT EXISTS idx_projects_user_id ON projects(user_id);
CREATE INDEX IF NOT EXISTS idx_publications_user_id ON publications(user_id);

-- Create indexes for date-based queries
CREATE INDEX IF NOT EXISTS idx_certifications_issue_date ON certifications(issue_date DESC);
CREATE INDEX IF NOT EXISTS idx_volunteering_start_date ON volunteering(start_date DESC);
CREATE INDEX IF NOT EXISTS idx_projects_start_date ON projects(start_date DESC);
CREATE INDEX IF NOT EXISTS idx_publications_date ON publications(publication_date DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE volunteering ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE publications ENABLE ROW LEVEL SECURITY;

-- RLS Policies for Certifications
CREATE POLICY "Users can view all certifications" ON certifications FOR SELECT USING (true);
CREATE POLICY "Users can insert own certifications" ON certifications FOR INSERT 
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own certifications" ON certifications FOR UPDATE 
  USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own certifications" ON certifications FOR DELETE 
  USING (auth.uid() = user_id);

-- RLS Policies for Volunteering
CREATE POLICY "Users can view all volunteering" ON volunteering FOR SELECT USING (true);
CREATE POLICY "Users can insert own volunteering" ON volunteering FOR INSERT 
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own volunteering" ON volunteering FOR UPDATE 
  USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own volunteering" ON volunteering FOR DELETE 
  USING (auth.uid() = user_id);

-- RLS Policies for Projects
CREATE POLICY "Users can view all projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Users can insert own projects" ON projects FOR INSERT 
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own projects" ON projects FOR UPDATE 
  USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own projects" ON projects FOR DELETE 
  USING (auth.uid() = user_id);

-- RLS Policies for Publications
CREATE POLICY "Users can view all publications" ON publications FOR SELECT USING (true);
CREATE POLICY "Users can insert own publications" ON publications FOR INSERT 
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own publications" ON publications FOR UPDATE 
  USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own publications" ON publications FOR DELETE 
  USING (auth.uid() = user_id);

COMMIT;
-- Create communities table
CREATE TABLE IF NOT EXISTS communities (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create community_members table
CREATE TABLE IF NOT EXISTS community_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  community_id UUID REFERENCES communities(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(community_id, user_id)
);

-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  community_id UUID REFERENCES communities(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  post_type TEXT NOT NULL CHECK (post_type IN ('discussion', 'job_opportunity', 'event')),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  tags TEXT[],
  likes_count INTEGER DEFAULT 0,
  comments_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create events table (extends posts)
CREATE TABLE IF NOT EXISTS events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE UNIQUE,
  event_date TIMESTAMP WITH TIME ZONE NOT NULL,
  location TEXT,
  meeting_link TEXT,
  max_attendees INTEGER,
  going_count INTEGER DEFAULT 0,
  interested_count INTEGER DEFAULT 0
);

-- Create event_rsvps table
CREATE TABLE IF NOT EXISTS event_rsvps (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id UUID REFERENCES events(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  status TEXT NOT NULL CHECK (status IN ('going', 'interested')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(event_id, user_id)
);

-- Create likes table
CREATE TABLE IF NOT EXISTS post_likes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(post_id, user_id)
);

-- Create comments table
CREATE TABLE IF NOT EXISTS comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create profile follows table
CREATE TABLE IF NOT EXISTS profile_follows (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  follower_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  following_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  UNIQUE(follower_id, following_id),
  CHECK (follower_id <> following_id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS posts_community_idx ON posts(community_id);
CREATE INDEX IF NOT EXISTS posts_user_idx ON posts(user_id);
CREATE INDEX IF NOT EXISTS posts_created_at_idx ON posts(created_at DESC);
CREATE INDEX IF NOT EXISTS comments_post_idx ON comments(post_id);
CREATE INDEX IF NOT EXISTS likes_post_idx ON post_likes(post_id);
CREATE INDEX IF NOT EXISTS event_rsvps_event_idx ON event_rsvps(event_id);
CREATE INDEX IF NOT EXISTS profile_follows_follower_idx ON profile_follows(follower_id);
CREATE INDEX IF NOT EXISTS profile_follows_following_idx ON profile_follows(following_id);

-- Enable Row Level Security
ALTER TABLE communities ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE event_rsvps ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE profile_follows ENABLE ROW LEVEL SECURITY;

-- RLS Policies for communities (public read)
CREATE POLICY "allow_read_all_communities" ON communities FOR SELECT USING (true);

-- RLS Policies for posts (authenticated users can read, create own)
CREATE POLICY "allow_read_all_posts" ON posts FOR SELECT TO authenticated USING (true);
CREATE POLICY "allow_insert_own_posts" ON posts FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "allow_update_own_posts" ON posts FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "allow_delete_own_posts" ON posts FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- RLS Policies for events
CREATE POLICY "allow_read_all_events" ON events FOR SELECT TO authenticated USING (true);
CREATE POLICY "allow_insert_events" ON events FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "allow_update_events" ON events FOR UPDATE TO authenticated USING (true);

-- RLS Policies for event_rsvps
CREATE POLICY "allow_read_all_rsvps" ON event_rsvps FOR SELECT TO authenticated USING (true);
CREATE POLICY "allow_insert_own_rsvps" ON event_rsvps FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "allow_update_own_rsvps" ON event_rsvps FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "allow_delete_own_rsvps" ON event_rsvps FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- RLS Policies for likes
CREATE POLICY "allow_read_all_likes" ON post_likes FOR SELECT TO authenticated USING (true);
CREATE POLICY "allow_insert_own_likes" ON post_likes FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "allow_delete_own_likes" ON post_likes FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- RLS Policies for comments
CREATE POLICY "allow_read_all_comments" ON comments FOR SELECT TO authenticated USING (true);
CREATE POLICY "allow_insert_own_comments" ON comments FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "allow_update_own_comments" ON comments FOR UPDATE TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "allow_delete_own_comments" ON comments FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- RLS Policies for profile follows
CREATE POLICY "allow_read_all_profile_follows" ON profile_follows FOR SELECT TO authenticated USING (true);
CREATE POLICY "allow_insert_own_profile_follows" ON profile_follows FOR INSERT TO authenticated WITH CHECK (auth.uid() = follower_id);
CREATE POLICY "allow_delete_own_profile_follows" ON profile_follows FOR DELETE TO authenticated USING (auth.uid() = follower_id);

-- Insert default communities
INSERT INTO communities (name, description) VALUES
  ('Product Designers', 'A community for product designers to share ideas and opportunities'),
  ('jobhubters', 'Job seekers helping each other find opportunities'),
  ('Uk jobs', 'Job opportunities and career advice in the UK')
ON CONFLICT DO NOTHING;

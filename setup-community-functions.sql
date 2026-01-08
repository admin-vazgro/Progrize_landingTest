-- Function to increment likes count
CREATE OR REPLACE FUNCTION increment_likes(post_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE posts SET likes_count = likes_count + 1 WHERE id = post_id;
END;
$$ LANGUAGE plpgsql;

-- Function to decrement likes count
CREATE OR REPLACE FUNCTION decrement_likes(post_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE posts SET likes_count = GREATEST(likes_count - 1, 0) WHERE id = post_id;
END;
$$ LANGUAGE plpgsql;

-- Function to increment comments count
CREATE OR REPLACE FUNCTION increment_comments(post_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE posts SET comments_count = comments_count + 1 WHERE id = post_id;
END;
$$ LANGUAGE plpgsql;

-- Function to generate verification token
CREATE OR REPLACE FUNCTION generate_verification_token()
RETURNS TEXT AS $$
DECLARE
  token TEXT;
BEGIN
  token := encode(gen_random_bytes(32), 'hex');
  RETURN token;
END;
$$ LANGUAGE plpgsql;

-- Function to increment follow counts
CREATE OR REPLACE FUNCTION increment_follow_counts(follower_id UUID, following_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE profiles
  SET following_count = COALESCE(following_count, 0) + 1
  WHERE id = follower_id;

  UPDATE profiles
  SET followers_count = COALESCE(followers_count, 0) + 1
  WHERE id = following_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Function to decrement follow counts
CREATE OR REPLACE FUNCTION decrement_follow_counts(follower_id UUID, following_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE profiles
  SET following_count = GREATEST(COALESCE(following_count, 0) - 1, 0)
  WHERE id = follower_id;

  UPDATE profiles
  SET followers_count = GREATEST(COALESCE(followers_count, 0) - 1, 0)
  WHERE id = following_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

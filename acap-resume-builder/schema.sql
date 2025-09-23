-- Create a table to store user profiles
create table profiles (
  id uuid references auth.users not null primary key,
  updated_at timestamp with time zone,
  username text unique,
  constraint username_length check (char_length(username) >= 3)
);

-- Set up Row Level Security (RLS)
alter table profiles
  enable row level security;

create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

-- Create a table to store resume data
-- This table will have a one-to-one relationship with the profiles table
create table resumes (
  id uuid primary key references public.profiles on delete cascade,
  updated_at timestamp with time zone,

  -- The resume data will be stored in a JSONB column
  -- This is flexible and allows us to store the nested structure of the resume
  resume_data jsonb
);

-- Set up Row Level Security for resumes table
alter table resumes
  enable row level security;

create policy "Users can view their own resume." on resumes
  for select using (auth.uid() = id);

create policy "Users can insert their own resume." on resumes
  for insert with check (auth.uid() = id);

create policy "Users can update their own resume." on resumes
  for update using (auth.uid() = id);

-- This trigger automatically creates a profile for new users
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id)
  values (new.id);
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- This trigger automatically creates an empty resume for new profiles
create function public.handle_new_profile()
returns trigger as $$
begin
  insert into public.resumes (id, resume_data)
  values (new.id, '{}'::jsonb);
  return new;
end;
$$ language plpgsql security definer;
create trigger on_profile_created
  after insert on public.profiles
  for each row execute procedure public.handle_new_profile();

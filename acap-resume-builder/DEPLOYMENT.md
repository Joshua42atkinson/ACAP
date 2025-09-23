# Deployment Instructions

This document provides instructions on how to deploy the ACAP Job Readiness application to the web. This involves two main parts: deploying the Supabase backend and deploying the React frontend on Vercel.

## Part 1: Deploying the Supabase Backend

Supabase will act as our database and authentication server.

1.  **Create a Supabase Account:** Go to [supabase.com](https://supabase.com) and sign up for a free account.

2.  **Create a New Project:**
    *   Once logged in, click "New project".
    *   Give your project a name (e.g., `acap-job-readiness`).
    *   Generate a secure database password and save it somewhere safe.
    *   Choose a region close to your users.
    *   Click "Create new project".

3.  **Get API Credentials:**
    *   After the project is created, navigate to the "Project Settings" (the gear icon).
    *   Go to the "API" section.
    *   You will find your **Project URL** and your **Project API `anon` key**. You will need these for the frontend deployment.

4.  **Set up the Database Schema:**
    *   Go to the "SQL Editor" in the Supabase dashboard (the icon that looks like a database table with a query symbol).
    *   Click "New query".
    *   Open the `schema.sql` file from this repository.
    *   Copy the entire contents of `schema.sql` and paste them into the SQL editor.
    *   Click the "RUN" button. This will create the `profiles` and `resumes` tables and set up the necessary security policies.

5.  **Disable Email Confirmation (for easier testing):**
    *   By default, Supabase requires users to confirm their email address. For easier testing, you can disable this.
    *   Go to "Authentication" -> "Providers" and expand the "Email" provider.
    *   Toggle off "Confirm email".
    *   **Note:** For a real production application, you should leave this enabled.

Your backend is now live and ready to accept connections!

## Part 2: Deploying the React Frontend on Vercel

Vercel is a platform that makes it incredibly easy to deploy modern web applications.

1.  **Create a Vercel Account:** Go to [vercel.com](https://vercel.com) and sign up for a free "Hobby" account. It's easiest to sign up using your GitHub account.

2.  **Push Your Code to GitHub:** Make sure all the code from this project is pushed to your own GitHub repository.

3.  **Create a New Vercel Project:**
    *   From your Vercel dashboard, click "Add New..." -> "Project".
    *   Import the GitHub repository you just created/updated.

4.  **Configure the Project:**
    *   Vercel will automatically detect that this is a Vite project and set the "Framework Preset" to "Vite". The build settings should be correct by default.
    *   Expand the "Environment Variables" section.
    *   Add the two variables from your Supabase project (from Part 1, Step 3):
        *   `VITE_SUPABASE_URL`: Your Supabase Project URL.
        *   `VITE_SUPABASE_ANON_KEY`: Your Supabase Project API `anon` key.

5.  **Deploy:**
    *   Click the "Deploy" button.
    *   Vercel will build and deploy your application. After a minute or two, you will be given a public URL (e.g., `your-project.vercel.app`).

Your application is now fully deployed and live on the web! You can visit the URL, create an account, and test the resume builder functionality.

# Progrize Landing Page

An all-in-one career platform landing page built with Next.js 16, featuring authentication, email integration, and modern UI components.

## Features

- 🔐 **Authentication System**: Email/password and social OAuth (Google, GitHub) via Supabase
- 📧 **Email Integration**: Contact form with nodemailer
- 🎨 **Modern UI**: Tailwind CSS with Framer Motion animations
- 📱 **Responsive Design**: Mobile-first approach
- 🚀 **Next.js 16**: App Router with React 19

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- Supabase account (for authentication)
- Gmail account (for email functionality)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env.local` file based on `.env.local.example`:
```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Email Configuration
MY_MAIL=your_email@gmail.com
MY_MAIL_PASS=your_gmail_app_password
```

### Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **Settings** > **API** and copy:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - Anon/Public Key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Enable authentication providers:
   - Go to **Authentication** > **Providers**
   - Enable **Email** provider
   - Enable **Google** and **GitHub** OAuth (configure with your app credentials)
4. Configure redirect URLs:
   - Add `http://localhost:3000/auth/callback` for development
   - Add your production URL + `/auth/callback` for production

### Gmail Setup

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account > Security > 2-Step Verification > App passwords
   - Create a new app password for "Mail"
   - Use this password in `MY_MAIL_PASS`

### Running the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
app/
├── components/
│   └── AuthModal.tsx          # Authentication modal component
├── auth/
│   └── callback/
│       └── route.ts           # OAuth callback handler
├── api/
│   └── send-curiosity/
│       └── route.ts           # Email sending API
├── Navbar.tsx                 # Navigation with auth state
├── Hero.tsx                   # Hero section with contact form
├── Features.tsx               # Features showcase
├── Testimonial.tsx            # Testimonials section
├── Faq.tsx                    # FAQ section
├── Footer.tsx                 # Footer component
├── page.tsx                   # Main page
├── layout.tsx                 # Root layout
└── globals.css                # Global styles

lib/
└── supabase.ts                # Supabase client configuration

public/                        # Static assets
```

## Authentication Flow

1. User clicks "Sign In" or "Sign Up" in the navbar
2. Modal opens with authentication options:
   - Email/password
   - Google OAuth
   - GitHub OAuth
3. After successful authentication:
   - User is redirected via `/auth/callback`
   - Navbar displays user's name with dropdown menu
   - User can access profile, settings, and sign out

## Key Components

### AuthModal
- Handles sign in/sign up views
- Integrates Supabase Auth UI
- Supports email and social authentication

### Navbar
- Displays authentication state
- Shows user avatar and name when logged in
- Dropdown menu with profile, settings, and sign out
- Responsive mobile menu

### Email API
- Sends contact form submissions via nodemailer
- Uses Gmail SMTP
- Validates email format

## Customization

### Styling
- Edit `app/globals.css` for global styles
- Modify Tailwind configuration in `tailwind.config.js`
- Update color scheme in CSS variables

### Authentication Providers
- Add/remove providers in `app/components/AuthModal.tsx`
- Configure provider credentials in Supabase dashboard

## Troubleshooting

### Authentication Issues
- Verify Supabase environment variables are correct
- Check redirect URLs in Supabase dashboard
- Ensure OAuth apps are properly configured

### Email Issues
- Confirm Gmail App Password is correct
- Check that 2FA is enabled on Gmail account
- Verify SMTP settings in API route

## License

This project is private and proprietary.

## Support

For issues or questions, contact the development team.# ProgrizeTest
# Progrize_landingTest

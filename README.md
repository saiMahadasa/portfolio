# Sai Subrahmanyam Mahadasa - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all devices
- **Dark/Light Theme**: Toggle between themes
- **Contact Form**: Functional email form using Resend
- **Smooth Animations**: Built with Framer Motion
- **SEO Optimized**: Meta tags and structured data
- **Accessibility**: WCAG compliant

## Tech Stack

- **Frontend**: Next.js 13, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Email**: Resend
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-1
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
RESEND_API_KEY=your_resend_api_key_here
```

### Email Setup

To enable the contact form functionality:

1. Sign up for a free account at [Resend](https://resend.com)
2. Get your API key from the dashboard
3. Add it to your `.env.local` file:
```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio-1/
├── app/                 # Next.js app directory
├── components/          # React components
├── actions/            # Server actions (email)
├── email/              # Email templates
├── lib/                # Utilities and data
├── context/            # React context providers
├── public/             # Static assets
└── ...
```

## Contact Form

The contact form is powered by Resend and sends emails to `saimahadasa1999@gmail.com`. Make sure to:

1. Configure your Resend API key
2. Verify your domain in Resend (optional but recommended)
3. Test the form functionality

## Deployment

The portfolio is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Add your environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## Customization

### Personal Information

Update your information in:
- `lib/data.ts` - Experience, projects, and skills
- `components/about.tsx` - About section
- `components/intro.tsx` - Introduction

### Styling

- Colors and themes: `tailwind.config.js`
- Global styles: `app/globals.css`

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: saimahadasa1999@gmail.com
- **LinkedIn**: [Sai Subrahmanyam Mahadasa](https://www.linkedin.com/in/sai-subrahmanyam-mahadasa/)
- **GitHub**: [saiMahadasa](https://github.com/saiMahadasa) 
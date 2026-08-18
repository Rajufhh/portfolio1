import { Analytics } from '@vercel/analytics/next';
import Footer from '@/components/main/Footer'
import { Navbar } from '@/components/main/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://raju-bathini.vercel.app'),
  title: 'Raju Bathini - Data Analyst Portfolio | Python, SQL & Data Analysis',
  description:
    'Portfolio of Raju Bathini - Computer Science graduate and Data Analyst skilled in Python, SQL, exploratory data analysis, data cleaning, validation, and analytical tool development.',
  keywords: [
    'data analyst portfolio',
    'raju bathini',
    'raju bathini portfolio',
    'python data analyst',
    'sql data analysis',
    'exploratory data analysis',
    'eda',
    'data cleaning',
    'data validation',
    'anomaly detection',
    'knn classification',
    'mysql',
    'sqlite',
    'flask',
    'fastapi',
    'hyderabad data analyst'
  ],
  authors: [{ name: 'Raju Bathini' }],
  creator: 'Raju Bathini',
  publisher: 'Raju Bathini',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://raju-bathini.vercel.app',
    title: 'Raju Bathini - Data Analyst Portfolio',
    description: 'Computer Science graduate skilled in Python, SQL, and exploratory data analysis. View data projects, analysis workflows, and technical expertise.',
    siteName: 'Raju Bathini Portfolio',
    images: [
      {
        url: '/profile-pic.jpg',
        width: 1200,
        height: 630,
        alt: 'Raju Bathini - Data Analyst',
      },
    ],
  },
  alternates: {
    canonical: 'https://raju-bathini.vercel.app',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Raju Bathini',
    jobTitle: 'Data Analyst',
    description: 'Data Analyst skilled in Python, SQL, exploratory data analysis, data cleaning, and analytical applications',
    url: 'https://raju-bathini.vercel.app',
    image: 'https://raju-bathini.vercel.app/profile-pic.jpg',
    sameAs: [
      'https://github.com/Rajufhh',
      'https://linkedin.com/in/raju-bathini-aa513a288',
    ],
    knowsAbout: [
      'Data Analysis',
      'Python',
      'SQL',
      'Exploratory Data Analysis (EDA)',
      'Data Cleaning',
      'Data Validation',
      'Data Profiling',
      'Anomaly Detection',
      'KNN Classification',
      'MySQL',
      'SQLite',
      'FastAPI',
      'Flask',
      'Prompt Engineering'
    ]
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://raju-bathini.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e40af" media="(prefers-color-scheme: dark)" />
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnalyticsProvider>
            <Navbar />
            <main role="main">
              {children}
            </main>
            <Footer />
          </AnalyticsProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KAMA Pure Culinary Lab',
  description:
    'Experience authentic Cretan and Mediterranean cuisine with KAMA Pure Culinary Lab. Private chef services, catering, cooking lessons, and more.',
  keywords: [
    'Heraklion private chef',
    'Heraklion cretan cuisine',
    'Cretan cuisine',
    'Mediterranean cooking',
    'private chef Greece',
    'catering services',
    'cooking lessons online',
    'KAMA Pure Culinary Lab',
    'Greek culinary experiences',
  ],
  authors: [{ name: 'KAMA Pure Culinary Lab' }],
  creator: 'KAMA Pure Culinary Lab',
  publisher: 'KAMA Pure Culinary Lab',
  metadataBase: new URL('https://kama.cooking'),
  applicationName: 'KAMA Pure Culinary Lab',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: 'KAMA Pure Culinary Lab',
    description:
      'Experience authentic Cretan and Mediterranean cuisine with KAMA Pure Culinary Lab. Private chef services, catering, cooking lessons, and more.',
    url: 'https://kama.cooking',
    siteName: 'KAMA Pure Culinary Lab',
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: 'https://kama.cooking/kama-about-image.png',
        width: 1200,
        height: 630,
        alt: 'KAMA Pure Culinary Lab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@KamaCooking', // Twitter handle if available
    title: 'KAMA Pure Culinary Lab',
    description:
      'Experience authentic Cretan and Mediterranean cuisine with KAMA Pure Culinary Lab. Private chef services, catering, cooking lessons, and more.',
    images: ['https://kama.cooking/kama-about-image.png'],
  },
  icons: {
  icon: [
    { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
    { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
  ],
  shortcut: '/favicon-96x96.png',
  apple: '/apple-touch-icon.png',
},
  alternates: {
    canonical: 'https://kama.cooking',
    /* add more if different verions for different languages */
    languages: {
      'en-US': 'https://kama.cooking',
    },
  },
  category: 'food',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

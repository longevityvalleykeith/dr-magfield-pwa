import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DR MAGfield | Malaysia\'s Golf Club Bio-Energetic Therapy Lounge',
  description: 'Turn Pain into Pure Performance. 3-in-1 MAGfield rotational magnetic therapy at Kelab Rahman Putra Malaysia (KRPM). Book your session with Arie Ong.',
  keywords: 'DR MAGfield, magnetic therapy, golf recovery, KRPM, Sungai Buloh, Malaysia wellness, bio-energetic therapy, pain management, sports recovery, 旋磁疗法',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'DR MAGfield',
  },
  openGraph: {
    title: 'DR MAGfield | Turn Pain into Pure Performance',
    description: '3-in-1 MAGfield therapy at Kelab Rahman Putra Malaysia. Golfers health lounge.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#F9F7F2',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Manrope:wght@300;400;500;700&family=Montserrat:wght@400;800&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}

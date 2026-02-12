import type { Metadata } from 'next'

import { Inter, Space_Grotesk } from 'next/font/google'

import React from 'react'

// import { AdminBar } from '@/components/AdminBar'
import { Providers } from '@/components/frontend/providers'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
// import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // const { isEnabled } = await draftMode()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="/icon.png" rel="icon" sizes="32x32" />
        {/* <link href="/favicon.svg" rel="icon" type="image/svg+xml" /> */}
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <Providers>
          {/* <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          /> */}

          {children}
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: {
    default: 'Isaac Tomz Services Ltd | Construction & Engineering',
    template: '%s | Isaac Tomz Services Ltd',
  },
  description:
    'Isaac Tomz Services is a leading construction and engineering company in Nigeria, delivering excellence in infrastructure, building projects, and architectural design.',
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@isaactomz',
  },
}

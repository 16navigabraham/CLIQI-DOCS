import type { Metadata } from 'next'
import { Outfit, DM_Sans, JetBrains_Mono } from 'next/font/google'
import { Layout, Navbar, Footer } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'CLIQI Docs',
    template: '%s | CLIQI Docs',
  },
  description: 'Technical documentation for CLIQI — the automated trading agent that turns your X likes into instant token buys.',
  openGraph: {
    title: 'CLIQI Docs',
    description: 'Technical documentation for CLIQI — Like It. Buy It.',
    url: 'https://docs.cliqi.bot',
    siteName: 'CLIQI Docs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CLIQI Docs',
    description: 'Technical documentation for CLIQI — Like It. Buy It.',
    creator: '@cliqibot',
  },
  icons: {
    icon: '/icon1.png',
    apple: '/icon1.png',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pageMap = await getPageMap()

  return (
    <html
      lang="en"
      dir="ltr"
      className={`${outfit.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Layout
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/AbrahamNAVIG1/CLIQI-DOCS/tree/main/content"
          nextThemes={{ defaultTheme: 'dark' }}
          navbar={
            <Navbar
              logo={
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <img src="/icon1.png" alt="CLIQI" width={28} height={28} style={{ borderRadius: '6px' }} />
                  <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: '1.25rem' }}>CLIQI Docs</span>
                </span>
              }
              projectLink="https://github.com/AbrahamNAVIG1/CLIQI-SERVER"
            />
          }
          footer={
            <Footer>
              <span>
                {new Date().getFullYear()} CLIQI — Built by{' '}
                <a href="https://x.com/AbrahamNAVIG1" target="_blank" rel="noopener">@AbrahamNAVIG1</a>
                {' & '}
                <a href="https://x.com/herren_power" target="_blank" rel="noopener">@herren_power</a>
                {' — Supported by Base West Africa'}
              </span>
            </Footer>
          }
          feedback={{ content: null }}
          editLink={null}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

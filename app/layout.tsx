import type { Metadata, Viewport } from 'next'
import './fonts.css'
import './globals.css'
import Script from 'next/script'
import { StructuredData } from './components/StructuredData'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
}

export const metadata: Metadata = {
    metadataBase: new URL('https://www.sejabeestay.com.br'),
    title: 'BeeStay - Gestão Profissional de Imóveis para Short Stay | Aumente sua Rentabilidade',
    description: 'Gestão completa de imóveis para aluguel de temporada (Short Stay). Tecnologia de ponta, precificação dinâmica e distribuição global em Airbnb, Booking e Expedia. Aumente até 51% sua rentabilidade.',
    keywords: ['gestão imóveis short stay', 'aluguel temporada', 'airbnb gestão', 'booking gestão', 'precificação dinâmica', 'investimento imobiliário', 'gestão profissional short stay'],
    authors: [{ name: 'BeeStay' }],
    creator: 'BeeStay',
    publisher: 'BeeStay',
    applicationName: 'BeeStay',
    category: 'Business',
    classification: 'Property Management',
    alternates: {
        canonical: 'https://www.sejabeestay.com.br',
    },
    other: {
        'rating': 'general',
        'distribution': 'global',
        'coverage': 'Worldwide',
        'target': 'all',
        // WhatsApp sharing optimization
        'og:image:width': '1200',
        'og:image:height': '630',
        // Pinterest
        'pinterest-rich-pin': 'true',
        // LinkedIn
        'linkedin:owner': 'beestay',
        // Apple
        'apple-mobile-web-app-title': 'BeeStay',
    },
    openGraph: {
        title: 'BeeStay - Gestão Profissional para Short Stay',
        description: 'Transforme seu imóvel em um investimento de alto rendimento com gestão profissional 360º',
        url: 'https://www.sejabeestay.com.br',
        siteName: 'BeeStay',
        images: [
            {
                url: '/og-image-v2.webp',
                width: 1200,
                height: 630,
                alt: 'BeeStay - Gestão eficiente. Estadia perfeita.',
                type: 'image/png',
            },
        ],
        locale: 'pt_BR',
        type: 'website',
        countryName: 'Brasil',
        emails: ['andre.andrade@beehouse.imb.br'],
        phoneNumbers: ['+55 47 99287-9066'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'BeeStay - Gestão Profissional para Short Stay',
        description: 'Aumente até 51% a rentabilidade do seu imóvel com gestão profissional',
        images: ['/og-image-v2.webp'],
        creator: '@beestay',
        site: '@beestay',
    },
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
    icons: {
        icon: [
            { url: '/icone.svg', type: 'image/svg+xml' },
            { url: '/icone.svg', sizes: '32x32', type: 'image/svg+xml' },
        ],
        shortcut: '/icone.svg',
        apple: '/icone.svg',
    },
    manifest: '/manifest.json',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <head>
                {/* Google Tag Manager */}
                <Script
                    id="gtm-script"
                    strategy="beforeInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M23NHS78');`
                    }}
                />

                {/* Google Analytics GA4 - G-8RD8STP4NT */}
                <Script
                    id="ga4-init"
                    strategy="lazyOnload"
                    src="https://www.googletagmanager.com/gtag/js?id=G-8RD8STP4NT"
                />
                <Script id="ga4-config" strategy="lazyOnload">
                    {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-8RD8STP4NT');`}
                </Script>

                {/* DNS Prefetch & Preconnect for external resources - Elite Performance */}
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://cdn.bitrix24.com.br" />
                <link rel="dns-prefetch" href="https://images.unsplash.com" />

                {/* Preload Critical Resources - Google Best Practices */}
                <link rel="preload" href="/logo_preto.svg" as="image" type="image/svg+xml" />
                <link rel="preload" href="/mobile1.webp" as="image" type="image/webp" media="(max-width: 768px)" fetchPriority="high" />
                <link rel="preload" href="/hero-1.webp" as="image" type="image/webp" media="(min-width: 769px)" fetchPriority="high" />

                {/* Preload Verdana Pro - used for headings */}
                <link
                    rel="preload"
                    href="/fonts/verdana-pro/verdana-pro-light.ttf"
                    as="font"
                    type="font/ttf"
                    crossOrigin="anonymous"
                />

                {/* Preload Only Critical Font Weight - Inter 400 for body text */}
                <link
                    rel="preload"
                    href="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />

                {/* Theme Color - PWA & Mobile Browsers */}
                <meta name="theme-color" content="#F9B410" media="(prefers-color-scheme: light)" />
                <meta name="theme-color" content="#1F2937" media="(prefers-color-scheme: dark)" />

                {/* Apple Meta Tags - iOS Optimization */}
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-title" content="BeeStay" />

                {/* Format Detection - Better UX on Mobile */}
                <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />

                {/* Referrer Policy */}
                <meta name="referrer" content="strict-origin-when-cross-origin" />

                {/* Geo Tags - Local SEO Boost */}
                <meta name="geo.region" content="BR" />
                <meta name="geo.placename" content="Brasil" />
                <meta name="geo.position" content="-14.235004;-51.925282" />
                <meta name="ICBM" content="-14.235004, -51.925282" />

                {/* Language & Content */}
                <meta httpEquiv="content-language" content="pt-BR" />
                <meta name="language" content="Portuguese" />

                {/* Web App Manifest Additional */}
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="application-name" content="BeeStay" />

                {/* Microsoft Tags */}
                <meta name="msapplication-TileColor" content="#F9B410" />
                <meta name="msapplication-TileImage" content="/icone.svg" />
                <meta name="msapplication-config" content="/browserconfig.xml" />

                {/* Performance Hints */}
                <meta httpEquiv="x-dns-prefetch-control" content="on" />

                {/* Critical CSS - Above the fold styles inlined */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    *,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}
                    html{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:Inter,ui-sans-serif,system-ui,sans-serif;font-feature-settings:normal}
                    body{margin:0;line-height:inherit}
                    h1,h2{font-family:'Verdana Pro',Georgia,serif;font-weight:100}
                    .scroll-smooth{scroll-behavior:smooth}
                    .bg-white{background-color:#fff}
                    .text-gray-900{color:rgb(17 24 39)}
                    .antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
                `}} />
            </head>
            <body className="font-sans bg-white text-gray-900 antialiased">
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-M23NHS78"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>

                <StructuredData />
                {children}


            </body>
        </html>
    )
}

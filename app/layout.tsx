import type { Metadata } from 'next'
import './fonts.css'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
    title: 'BeeStay - Gestão Profissional de Imóveis para Short Stay | Aumente sua Rentabilidade',
    description: 'Gestão completa de imóveis para aluguel de temporada (Short Stay). Tecnologia de ponta, precificação dinâmica e distribuição global em Airbnb, Booking e Expedia. Aumente até 51% sua rentabilidade.',
    keywords: ['gestão imóveis short stay', 'aluguel temporada', 'airbnb gestão', 'booking gestão', 'precificação dinâmica', 'investimento imobiliário', 'gestão profissional short stay'],
    authors: [{ name: 'BeeStay' }],
    openGraph: {
        title: 'BeeStay - Gestão Profissional para Short Stay',
        description: 'Transforme seu imóvel em um investimento de alto rendimento com gestão profissional 360º',
        type: 'website',
        locale: 'pt_BR',
        siteName: 'BeeStay',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'BeeStay - Gestão Profissional para Short Stay',
        description: 'Aumente até 51% a rentabilidade do seu imóvel com gestão profissional',
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: '/icone.svg',
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR" className="scroll-smooth">
            <head>
                {/* Critical CSS - Above the fold styles inlined */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    *,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}
                    html{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:Inter,ui-sans-serif,system-ui,sans-serif;font-feature-settings:normal}
                    body{margin:0;line-height:inherit}
                    .scroll-smooth{scroll-behavior:smooth}
                    .bg-white{background-color:#fff}
                    .text-gray-900{color:rgb(17 24 39)}
                    .antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
                `}} />
            </head>
            <body className="font-sans bg-white text-gray-900 antialiased" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
                {children}

                {/* Google Analytics - Deferred until user interaction */}
                <Script
                    id="gtag-init"
                    strategy="lazyOnload"
                    src="https://www.googletagmanager.com/gtag/js?id=G-522STP288V"
                />
                <Script id="gtag-config" strategy="lazyOnload">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-522STP288V');
          `}
                </Script>

                {/* Bitrix24 Form Loader */}
                <Script
                    id="bitrix24-form"
                    strategy="lazyOnload"
                    data-b24-form="inline/391/tud5rt"
                    data-skip-moving="true"
                >
                    {`
            (function(w,d,u){
                var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
                var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
            })(window,document,'https://cdn.bitrix24.com.br/b18304167/crm/form/loader_391.js');
          `}
                </Script>
            </body>
        </html>
    )
}

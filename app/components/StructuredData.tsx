export function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "BeeStay",
        "url": "https://www.sejabeestay.com.br",
        "logo": "https://www.sejabeestay.com.br/logo_preto.svg",
        "description": "Gestão profissional de imóveis para aluguel de temporada (Short Stay)",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-47-99287-9066",
            "contactType": "customer service",
            "email": "andre.andrade@beehouse.imb.br",
            "availableLanguage": "Portuguese"
        },
        "sameAs": [
            "https://www.linkedin.com/company/beestay",
            "https://www.facebook.com/beestay",
            "https://www.youtube.com/@beestay"
        ]
    }

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "BeeStay",
        "image": "https://www.sejabeestay.com.br/logo_preto.svg",
        "@id": "https://www.sejabeestay.com.br",
        "url": "https://www.sejabeestay.com.br",
        "telephone": "+55-47-99287-9066",
        "email": "andre.andrade@beehouse.imb.br",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Serviço de Gestão de Locação de Curta Temporada",
            "addressLocality": "Brasil",
            "addressRegion": "Nacional",
            "postalCode": "89203-070",
            "addressCountry": "BR"
        },
        "description": "Gestão completa de imóveis para aluguel de Curta Temporada. Tecnologia de ponta, precificação dinâmica e distribuição global em Airbnb, Booking e Expedia.",
        "areaServed": {
            "@type": "Country",
            "name": "Brasil"
        }
    }

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Gestão de Imóveis para Short Stay",
        "provider": {
            "@type": "Organization",
            "name": "BeeStay",
            "url": "https://www.sejabeestay.com.br"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Brasil"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços de Gestão",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Limpeza Profissional",
                        "description": "Higienização completa e preparação impecável para receber cada novo hóspede"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Manutenção Preventiva",
                        "description": "Inspeções regulares e reparos rápidos. Seu ativo sempre valorizado"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Vistoria Criteriosa",
                        "description": "Registro fotográfico detalhado na entrada e saída de cada reserva"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Precificação Inteligente",
                        "description": "Tarifas dinâmicas para máxima ocupação e lucro em tempo real"
                    }
                }
            ]
        }
    }

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.sejabeestay.com.br"
            }
        ]
    }

    const aggregateRatingSchema = {
        "@context": "https://schema.org",
        "@type": "AggregateRating",
        "itemReviewed": {
            "@type": "Organization",
            "name": "BeeStay"
        },
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "127"
    }

    const webSiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "BeeStay",
        "url": "https://www.sejabeestay.com.br",
        "description": "Gestão profissional de imóveis para aluguel de temporada (Short Stay)",
        "inLanguage": "pt-BR",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.sejabeestay.com.br/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Como funciona a gestão da BeeStay?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A BeeStay cuida de todo o processo da locação por temporada, desde a divulgação do imóvel e gestão de reservas até o atendimento aos hóspedes, limpeza e manutenção. Nosso objetivo é maximizar a rentabilidade do imóvel enquanto proporcionamos tranquilidade total ao proprietário."
                }
            },
            {
                "@type": "Question",
                "name": "Preciso me preocupar com o atendimento aos hóspedes?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Não. Nossa equipe realiza toda a comunicação antes, durante e após a estadia, garantindo suporte completo aos hóspedes e preservando a qualidade da experiência e do seu imóvel."
                }
            },
            {
                "@type": "Question",
                "name": "Meu imóvel precisa estar mobiliado e equipado?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim, imóveis destinados à locação de curta temporada precisam estar preparados para receber hóspedes com conforto e funcionalidade. Auxiliamos com orientações e sugestões para adequação do imóvel."
                }
            },
            {
                "@type": "Question",
                "name": "Como acompanho os resultados do meu imóvel?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Os proprietários têm acesso a relatórios e informações sobre ocupação, receitas e desempenho do imóvel, garantindo total transparência na gestão."
                }
            },
            {
                "@type": "Question",
                "name": "Em quanto tempo começo a ter retorno?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "O prazo pode variar conforme localização, padrão do imóvel e demanda do mercado, mas trabalhamos com estratégias de precificação e divulgação para acelerar o desempenho desde o início da operação."
                }
            }
        ]
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
            />
        </>
    )
}

'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import Image from 'next/image'
import { Icons } from './components/Icons'
import { Header } from './components/Header'
import type { Logo, Service, Diferencial, FAQItem, TimelineStep } from './types'

// Helper to add basePath for images
const basePath = process.env.NODE_ENV === 'production' ? '/teste' : ''
const getImagePath = (path: string) => `${basePath}${path}`

export default function HomePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
    const [currentDiferenciaisIndex, setCurrentDiferenciaisIndex] = useState(0)
    const [formLoaded, setFormLoaded] = useState(false)
    
    // Embla Carousel for Logos
    const [emblaRef] = useEmblaCarousel({ loop: true, watchDrag: false }, [
        AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 0.5 })
    ])

    // Embla Carousel for Services
    const [servicesRef, servicesApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 })

    // Embla Carousel for Diferenciais
    const [diferenciaisRef, diferenciaisApi] = useEmblaCarousel({ loop: true, align: 'center', slidesToScroll: 1 })

    const logos: Logo[] = [
        { src: getImagePath('/Airbnb.svg'), alt: 'Airbnb' },
        { src: getImagePath('/Booking.svg'), alt: 'Booking' },
        { src: getImagePath('/Decolar.svg'), alt: 'Decolar' },
        { src: getImagePath('/Expedia.svg'), alt: 'Expedia' },
    ]
    // Repeat logos to ensure smooth infinite loop on all screen sizes
    const repeatedLogos: Logo[] = [...logos, ...logos, ...logos, ...logos]

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    // Hero slideshow images
    const heroImages = [
        getImagePath('/hero-1.webp'), // Adicione suas imagens aqui
        getImagePath('/hero-2.webp'),
        getImagePath('/hero-1.webp'),
    ]

    // Services carousel data
    const services: Service[] = [
        {
            icon: 'BroomOutline',
            title: 'Limpeza Profissional',
            description: 'Padrão hoteleiro com vistoria fotográfica a cada troca de hóspede.'
        },
        {
            icon: 'ToolOutline',
            title: 'Manutenção Preventiva',
            description: 'Inspeções regulares e reparos rápidos. Seu ativo sempre valorizado.'
        },
        {
            icon: 'EyeOutline',
            title: 'Vistoria Criteriosa',
            description: 'Registro fotográfico detalhado na entrada e saída de cada reserva.'
        },
        {
            icon: 'GraphOutline',
            title: 'Precificação Inteligente',
            description: 'Tarifas dinâmicas para máxima ocupação e lucro em tempo real.'
        },
    ]

    // Diferenciais carousel data
    const diferenciaisData: Diferencial[] = [
        {
            title: 'Transparência Total',
            description: 'Receita e reservas em tempo real no seu dashboard. Sem letras miúdas.',
            icon: 'ChartLineUp',
            imageAlt: 'Dashboard em laptop',
            imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
        },
        {
            title: 'Tecnologia de Ponta',
            description: 'Automação completa do check-in ao checkout. Menos preocupações para você.',
            icon: 'Cpu',
            imageAlt: 'Pessoa verificando imóvel',
            imageSrc: 'https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=800'
        },
        {
            title: 'Cuidado Artesanal',
            description: 'Gestor dedicado e atendimento humano. Seu imóvel é único para nós.',
            icon: 'Handshake',
            imageAlt: 'Detalhe de limpeza premium',
            imageSrc: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=800'
        }
    ]

    const heroImageRefs = useRef<(HTMLDivElement | null)[]>([])

    // Timeline steps data
    const timelineSteps: TimelineStep[] = [
        {
            step: '01',
            title: 'Consultoria Personalizada',
            description: 'Análise de potencial e proposta personalizada. Entendemos seus objetivos e definimos a melhor estratégia.'
        },
        {
            step: '02',
            title: 'Preparação do Espaço',
            description: 'Fotos profissionais, criação de anúncios e setup completo. Deixamos tudo pronto para receber os hóspedes.'
        },
        {
            step: '03',
            title: 'Gestão Ativa 24/7',
            description: 'Operação diária, check-in/out, limpeza e manutenção. Cuidamos de tudo para você não se preocupar com nada.'
        },
        {
            step: '04',
            title: 'Resultados Transparentes',
            description: 'Acompanhamento total via dashboard e repasses mensais. Você vê o dinheiro entrar, sem a dor de cabeça.'
        }
    ]

    // FAQ data
    const faqData: FAQItem[] = [
        // 💼 Sobre começar a operação
        {
            question: "Quanto preciso investir para colocar meu imóvel na Beestay?",
            answer: "O investimento inicial depende do estado atual do imóvel. Normalmente o custo de implantação envolve possíveis ajustes de ambientação e adequações operacionais, tais como a disponibilização do enxoval de cama e banho. Após a primeira vistoria, apresentamos um diagnóstico claro com tudo o que é necessário antes do início da operação."
        },
        {
            question: "Meu imóvel precisa estar mobiliado?",
            answer: "Sim. O imóvel precisa estar mobiliado e equipado para short stay. Caso ainda não esteja, a Beestay pode orientar sobre padrão, layout e itens essenciais para garantir boa performance e avaliações positivas."
        },
        {
            question: "A Beestay compra móveis ou enxoval para o imóvel?",
            answer: "Parte do enxoval de cama e banho, bem como as amenidades fazem parte da operação e são disponibilizados pela Beestay, sem transferência de propriedade ao investidor. Já móveis e eletros estruturais são de responsabilidade do proprietário, conforme definido em vistoria e contrato."
        },
        // 📝 Sobre contrato e modelo de gestão
        {
            question: "Como funciona o contrato com a Beestay?",
            answer: "O contrato define as responsabilidades de cada parte, o modelo de remuneração, prazos, regras operacionais e critérios de rescisão. É um contrato claro, transparente e pensado para proteger tanto o proprietário quanto a operação."
        },
        {
            question: "Existe prazo mínimo de contrato?",
            answer: "Sim. Trabalhamos com contratos com prazo determinado, que permitem estabilidade operacional e planejamento. Ao final do período, o contrato pode ser renovado mediante acordo entre as partes."
        },
        {
            question: "Posso usar meu imóvel eventualmente?",
            answer: "Sim. O uso pelo proprietário é permitido, dentro de limites previamente acordados em contrato. Nesses casos, há cobrança da taxa de limpeza, que é descontada no repasse seguinte."
        },
        // 🔐 Segurança, riscos e governança
        {
            question: "Como a Beestay garante a segurança do meu imóvel?",
            answer: "Utilizamos critérios rigorosos de seleção de hóspedes, controle de acesso (fechaduras eletrônicas), vistorias recorrentes, monitoramento de ocorrências e plataformas com políticas de proteção ao anfitrião."
        },
        {
            question: "E se houver danos ao imóvel?",
            answer: "Em caso de danos causados por hóspedes, a Beestay atua diretamente na mediação com as plataformas, seguros e responsáveis, além de providenciar reparos quando necessário, com total transparência ao proprietário."
        },
        {
            question: "Meu imóvel fica protegido juridicamente?",
            answer: "Sim. A operação é estruturada para evitar caracterização de locação residencial tradicional (quando aplicável), com contratos, regras e controles adequados ao modelo de curta temporada."
        },
        // 📊 Resultados, performance e repasses
        {
            question: "Em quanto tempo começo a ver resultados?",
            answer: "Normalmente, os primeiros resultados aparecem já nos primeiros meses de operação, à medida que o imóvel ganha avaliações, histórico e posicionamento nos canais. A performance tende a melhorar de forma progressiva."
        },
        {
            question: "A Beestay garante uma rentabilidade mínima?",
            answer: "Não trabalhamos com promessas ou garantias irreais. O foco é maximizar o potencial do imóvel com gestão profissional, precificação dinâmica e alta qualidade operacional."
        },
        {
            question: "Como e quando recebo meus repasses?",
            answer: "Os repasses são feitos mensalmente, com relatório detalhado de receitas, despesas, taxas e resultados. Tudo de forma clara e auditável."
        },
        {
            question: "Consigo acompanhar os resultados do meu imóvel?",
            answer: "Sim. Você terá acesso a relatórios e indicadores como taxa de ocupação, ADR e desempenho mensal do seu imóvel."
        },
        // 🤝 Relacionamento e diferencial
        {
            question: "O que diferencia a Beestay de uma gestão amadora ou tradicional?",
            answer: "A Beestay opera com processos, tecnologia, indicadores e padronização. Isso garante mais eficiência, melhor experiência para o hóspede, maior competitividade e proteção do seu ativo ao longo do tempo."
        },
        {
            question: "A Beestay administra muitos imóveis ao mesmo tempo?",
            answer: "Crescemos de forma planejada e responsável, mantendo padrão de qualidade, controle operacional e atendimento adequado para cada imóvel sob gestão."
        }
    ]

    // Hero slideshow effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length)
        }, 5500) // Change slide every 5.5 seconds

        return () => clearInterval(interval)
    }, [heroImages.length])

    // Control zoom animation to play only for active slide
    useEffect(() => {
        heroImageRefs.current.forEach((ref, index) => {
            if (ref) {
                if (index === currentSlide) {
                    // Reset and start animation for active slide
                    ref.style.animation = 'none'
                    void ref.offsetWidth // Force reflow
                    ref.style.animation = 'zoomIn 5.5s ease-out forwards'
                }
            }
        })
    }, [currentSlide])

    // Update current service index when embla slides change
    const onSelect = useCallback(() => {
        if (!servicesApi) return
        setCurrentServiceIndex(servicesApi.selectedScrollSnap())
    }, [servicesApi])

    useEffect(() => {
        if (!servicesApi) return
        onSelect()
        servicesApi.on('select', onSelect)
        servicesApi.on('reInit', onSelect)
    }, [servicesApi, onSelect])

    // Update current diferenciais index when embla slides change
    const onSelectDiferenciais = useCallback(() => {
        if (!diferenciaisApi) return
        setCurrentDiferenciaisIndex(diferenciaisApi.selectedScrollSnap())
    }, [diferenciaisApi])

    useEffect(() => {
        if (!diferenciaisApi) return
        onSelectDiferenciais()
        diferenciaisApi.on('select', onSelectDiferenciais)
        diferenciaisApi.on('reInit', onSelectDiferenciais)
    }, [diferenciaisApi, onSelectDiferenciais])

    // Services carousel navigation
    const scrollPrev = useCallback(() => {
        if (servicesApi) servicesApi.scrollPrev()
    }, [servicesApi])

    const scrollNext = useCallback(() => {
        if (servicesApi) servicesApi.scrollNext()
    }, [servicesApi])

    const scrollTo = useCallback((index: number) => {
        if (servicesApi) servicesApi.scrollTo(index)
    }, [servicesApi])

    // Diferenciais carousel navigation
    const scrollPrevDiferenciais = useCallback(() => {
        if (diferenciaisApi) diferenciaisApi.scrollPrev()
    }, [diferenciaisApi])

    const scrollNextDiferenciais = useCallback(() => {
        if (diferenciaisApi) diferenciaisApi.scrollNext()
    }, [diferenciaisApi])

    const scrollToDiferenciais = useCallback((index: number) => {
        if (diferenciaisApi) diferenciaisApi.scrollTo(index)
    }, [diferenciaisApi])

    // Load Bitrix24 form script
    useEffect(() => {
        // Create the script element with the exact Bitrix24 code
        const script = document.createElement('script')
        script.setAttribute('data-b24-form', 'inline/391/tud5rt')
        script.setAttribute('data-skip-moving', 'true')
        script.text = `(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn.bitrix24.com.br/b18304167/crm/form/loader_391.js');`

        // Find the container and append the script
        const container = document.getElementById('bitrix-form-container')
        if (container) {
            container.appendChild(script)

            // Set a timeout to hide skeleton after form likely loaded
            const timeout = setTimeout(() => {
                setFormLoaded(true)
            }, 2000)

            return () => {
                clearTimeout(timeout)
                // Cleanup
                if (script.parentNode) {
                    script.parentNode.removeChild(script)
                }
            }
        }
    }, [])

    return (
        <main>
            <Header />

            {/* Hero Section - Full Width com Slideshow */}
            <section id="home" className="min-h-screen pt-20 relative overflow-hidden">
                {/* Background Slideshow */}
                <div className="absolute inset-0">
                    {heroImages.map((image, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) heroImageRefs.current[index] = el
                            }}
                            className={`hero-slide absolute inset-0 bg-cover bg-center ${
                                index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{ 
                                backgroundImage: `url('${image}')`
                            }}
                        >
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-6 lg:px-16 min-h-[calc(100vh-5rem)] flex items-center">
                    <div className="max-w-2xl py-16 lg:py-0">

                        {/* Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8 font-bold drop-shadow-lg">
                            Cuidamos do seu patrimônio como se fosse <span className="text-bee-gold">nosso</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg text-white/90 leading-relaxed mb-10 drop-shadow">
                            Zelamos por cada detalhe com cuidado artesanal. 
                            Tranquilidade para você, rentabilidade para o imóvel.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <a
                                href="#contato"
                                className="bg-bee-gold hover:bg-bee-gold-dark text-white px-8 py-4 rounded font-semibold transition-all inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                            >
                                Agendar Consultoria
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a
                                href="#servicos"
                                className="text-white hover:text-bee-gold font-medium inline-flex items-center justify-center gap-2 transition-all px-4 backdrop-blur-sm bg-white/10 hover:bg-white/20 py-4 rounded hover:scale-105 active:scale-95"
                            >
                                Ver como cuidamos
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                        </div>

                        {/* Trust indicators */}
                        <div className="flex items-center gap-6 text-sm text-white/80">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-bee-gold" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Responsabilidade total</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-bee-gold" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Zelo em cada detalhe</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logo Bar - Sutil */}
            <section className="py-10 bg-light-gray border-y border-mid-gray">
                <div className="container mx-auto px-8 lg:px-16">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex touch-pan-y">
                            {repeatedLogos.map((logo, index) => (
                                <div
                                    key={index}
                                    className="flex-[0_0_auto] min-w-0 px-8 flex items-center justify-center opacity-30 hover:opacity-60 transition-opacity duration-1200"
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={120}
                                        height={40}
                                        className="h-10 w-auto object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - High Conversion Premium (Moved Up) */}
            <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
                <div className="bg-bee-black rounded-[2rem] md:rounded-[3rem] overflow-hidden relative isolate shadow-2xl max-w-7xl mx-auto">
                    {/* Background Texture & Glow */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bee-gold/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

                    <div className="grid lg:grid-cols-2 gap-0 lg:gap-12 items-stretch">
                        
                        {/* Left - Image Side (Full Height Cover) */}
                        <div className="relative h-[300px] lg:h-auto min-h-[400px] w-full">
                            <Image
                                src="https://images.unsplash.com/photo-1600596542815-6ad4c12756ab?q=80&w=1000"
                                className="absolute inset-0 w-full h-full object-cover"
                                alt="Interior de alto padrão"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-bee-black/50 to-transparent lg:bg-gradient-to-t lg:from-bee-black/20"></div>
                        </div>

                        {/* Right - Content Side */}
                        <div className="p-8 md:p-12 lg:p-20 flex flex-col justify-center relative z-10">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                                Seu imóvel rendendo <span className="text-bee-gold">muito mais</span>, com zero esforço.
                            </h2>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                Transformamos sua propriedade em um ativo de alta performance. Cuidamos da distribuição, precificação, hóspedes e manutenção.
                            </p>
                            
                            <div className="mb-10">
                                <a
                                    href="#contato"
                                    className="bg-bee-gold hover:bg-bee-gold-dark text-bee-black font-bold py-4 px-8 rounded-lg w-full inline-flex justify-center items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(249,180,16,0.4)] hover:shadow-[0_0_30px_rgba(249,180,16,0.6)]"
                                >
                                    ANUNCIE AGORA
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>

                            {/* Trust Bar (Static & Clean) */}
                            <div className="border-t border-white/10 pt-8">
                                <p className="text-sm text-gray-500 mb-4">Seu imóvel presente nas maiores plataformas:</p>
                                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                                    <Image src={getImagePath("/Airbnb.svg")} className="h-6 w-auto brightness-0 invert mx-auto sm:mx-0" alt="Airbnb" width={100} height={24} />
                                    <Image src={getImagePath("/Booking.svg")} className="h-5 w-auto brightness-0 invert mx-auto sm:mx-0" alt="Booking" width={100} height={20} />
                                    <Image src={getImagePath("/Expedia.svg")} className="h-5 w-auto brightness-0 invert mx-auto sm:mx-0" alt="Expedia" width={100} height={20} />
                                    <Image src={getImagePath("/Decolar.svg")} className="h-5 w-auto brightness-0 invert mx-auto sm:mx-0" alt="Decolar" width={100} height={20} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Diferenciais Section - Gestão Que Você Pode Acompanhar (Moved Up) */}
            <section id="diferenciais" className="py-20 lg:py-32 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-16 max-w-7xl">

                    {/* Section Header */}
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl text-bee-black mb-4 leading-tight font-bold">
                            Gestão que você pode acompanhar
                        </h2>
                    </div>

                    {/* Carousel Container */}
                    <div className="relative">
                        {/* Navigation Buttons - Hidden on desktop since it shows all 3 items */}
                        <button
                            onClick={scrollPrevDiferenciais}
                            className="flex lg:hidden absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-10 h-10 bg-white border border-mid-gray rounded-full items-center justify-center hover:border-bee-gold hover:bg-bee-gold/10 transition-all shadow-lg"
                            aria-label="Anterior"
                        >
                            <svg className="w-5 h-5 text-bee-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={scrollNextDiferenciais}
                            className="flex lg:hidden absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-10 h-10 bg-white border border-mid-gray rounded-full items-center justify-center hover:border-bee-gold hover:bg-bee-gold/10 transition-all shadow-lg"
                            aria-label="Próximo"
                        >
                            <svg className="w-5 h-5 text-bee-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Embla Viewport */}
                        <div className="overflow-hidden" ref={diferenciaisRef}>
                            <div className="flex touch-pan-y lg:cursor-default">
                                {diferenciaisData.map((item, index) => {
                                    const IconComponent = Icons[item.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>
                                    return (
                                        <div 
                                            key={index}
                                            className="flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-3 md:px-4 min-w-0"
                                        >
                                            <div className="h-full bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-bee-gold/30 transition-all duration-300 group flex flex-col">
                                                {/* Visual Area with Image */}
                                                <div className="h-48 relative overflow-hidden shrink-0">
                                                     <Image
                                                        src={item.imageSrc || getImagePath('/hero-1.webp')}
                                                        alt={item.imageAlt}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                        fill
                                                        sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
                                                     />
                                                     {/* Overlay */}
                                                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>

                                                     {/* Icon Badge */}
                                                     <div className="absolute bottom-4 right-4 z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                                                        <IconComponent className="w-6 h-6 text-white" />
                                                     </div>
                                                </div>
                                                
                                                <div className="p-8 flex flex-col grow">
                                                    <h3 className="text-xl font-bold text-bee-black mb-4 group-hover:text-bee-gold transition-colors">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-text-gray leading-relaxed text-sm md:text-base">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Dots Indicator - Hidden on desktop */}
                        <div className="flex lg:hidden justify-center gap-2 mt-8">
                            {diferenciaisData.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToDiferenciais(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        index === currentDiferenciaisIndex ? 'bg-bee-gold w-8' : 'bg-mid-gray'
                                    }`}
                                    aria-label={`Ir para diferencial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* O Que Cuidamos - Carrossel (Moved Down) */}
            <section id="servicos" className="py-20 lg:py-32 bg-bg-cream relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
                    {/* Section Header */}
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl text-bee-black mb-4 leading-tight font-bold">
                            Seu imóvel em boas mãos
                        </h2>
                        <p className="text-base text-text-gray max-w-2xl mx-auto">
                            Operação hoteleira completa para sua propriedade
                        </p>
                    </div>

                    {/* Carousel Container */}
                    <div className="relative">
                        {/* Navigation Buttons - Visible on all devices */}
                        <button
                            onClick={scrollPrev}
                            className="flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 bg-white border border-mid-gray rounded-full items-center justify-center hover:border-bee-gold hover:bg-bee-gold/10 transition-all shadow-lg"
                            aria-label="Anterior"
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-bee-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={scrollNext}
                            className="flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 bg-white border border-mid-gray rounded-full items-center justify-center hover:border-bee-gold hover:bg-bee-gold/10 transition-all shadow-lg"
                            aria-label="Próximo"
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-bee-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Cards Container with smooth transition */}
                        <div className="overflow-hidden" ref={servicesRef}>
                            <div className="flex touch-pan-y -ml-6">
                                {services.map((service, index) => {
                                    const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>
                                    return (
                                        <div
                                            key={index}
                                            className="flex-[0_0_100%] md:flex-[0_0_50%] pl-6 min-w-0"
                                        >
                                            <div className="group h-full bg-white border border-mid-gray rounded-2xl p-10 hover:border-bee-gold transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden">
                                                <div className="absolute top-0 left-0 w-1 h-full bg-bee-gold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                                                <div className="mb-6">
                                                    <IconComponent className="w-10 h-10 text-bee-gold" />
                                                </div>
                                                <h3 className="text-2xl font-semibold text-bee-black mb-4">
                                                    {service.title}
                                                </h3>
                                                <p className="text-text-gray leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-8">
                            {services.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollTo(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        index === currentServiceIndex ? 'bg-bee-gold w-8' : 'bg-mid-gray'
                                    }`}
                                    aria-label={`Ir para serviço ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Processo - Como Funciona (Timeline) */}
            <section id="processo" className="py-20 lg:py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-16 max-w-6xl">

                    {/* Section Header */}
                    <div className="text-center mb-16 lg:mb-24">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl text-bee-black mb-6 leading-tight font-bold">
                            Simples para você,<br />completo para seu imóvel
                        </h2>
                        <p className="text-lg text-text-gray max-w-2xl mx-auto">
                            Transformamos sua propriedade em um negócio rentável em apenas 4 passos.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative max-w-4xl mx-auto">
                        {/* Continuous Vertical Line */}
                        <div className="absolute left-[19px] md:left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200"></div>

                        <div className="space-y-12">
                            {timelineSteps.map((item, index) => (
                                <div key={index} className="relative pl-16 md:pl-28 group">
                                    {/* Marker */}
                                    <div className="absolute left-0 md:left-[20px] top-0 w-10 h-10 md:w-10 md:h-10 bg-white border-2 border-bee-gold rounded-full flex items-center justify-center z-10 shadow-[0_0_0_4px_#ffffff] group-hover:bg-bee-gold transition-colors duration-300">
                                        <div className="w-2.5 h-2.5 bg-bee-gold rounded-full group-hover:bg-white transition-colors duration-300"></div>
                                    </div>

                                    {/* Card */}
                                    <div className="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-bee-gold/30 transition-all duration-300 hover:-translate-y-1">
                                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                                            <span className="text-4xl md:text-5xl font-bold text-gray-100 group-hover:text-bee-gold/20 transition-colors duration-300 font-sans tracking-tighter">
                                                {item.step}
                                            </span>
                                            <h3 className="text-xl md:text-2xl font-bold text-bee-black group-hover:text-bee-gold transition-colors">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p className="text-text-gray leading-relaxed text-base md:text-lg">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* Features Section (manter temporariamente para não quebrar) */}
            <section id="recursos" className="py-12 md:py-20 lg:py-24 bg-white hidden">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
                    <div className="text-center mb-8 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4">
                            Gestão Profissional com<br />Tecnologia de Ponta
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                            Operação 360º que cuida de cada detalhe do seu imóvel
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
                        {/* Feature 1 */}
                        <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100">
                            <div className="w-10 h-10 md:w-14 md:h-14 bg-linear-to-br from-blue-100 to-blue-50 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                                <Icons.Globe className="w-5 h-5 md:w-8 md:h-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">Hub de Distribuição Global</h3>
                            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                                Um anúncio, múltiplas plataformas, um único calendário unificado. Seu imóvel alcança milhões de viajantes com sincronização automática entre Airbnb, Booking, Expedia e Decolar.
                            </p>
                            <ul className="space-y-2 md:space-y-3">
                                <li className="flex items-center gap-2 md:gap-3 text-gray-700 text-sm md:text-base">
                                    <Icons.Check className="w-4 h-4 md:w-5 md:h-5 text-bee-gold" />
                                    <span>Atualização em tempo real</span>
                                </li>
                                <li className="flex items-center gap-2 md:gap-3 text-gray-700 text-sm md:text-base">
                                    <Icons.Check className="w-4 h-4 md:w-5 md:h-5 text-bee-gold" />
                                    <span>Zero overbooking</span>
                                </li>
                                <li className="flex items-center gap-2 md:gap-3 text-gray-700 text-sm md:text-base">
                                    <Icons.Check className="w-4 h-4 md:w-5 md:h-5 text-bee-gold" />
                                    <span>Performance otimizada</span>
                                </li>
                                <li className="flex items-center gap-2 md:gap-3 text-gray-500 text-xs md:text-sm italic mt-3">
                                    <Icons.Package className="w-4 h-4 md:w-5 md:h-5 text-bee-gold" />
                                    <span>BeeStay fornece: gestão de anúncios, fotos profissionais, copywriting otimizado</span>
                                </li>
                            </ul>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100">
                            <div className="w-10 h-10 md:w-14 md:h-14 bg-linear-to-br from-orange-100 to-orange-50 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                                <Icons.ChartLineUp className="w-5 h-5 md:w-8 md:h-8 text-orange-600" />
                            </div>
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">Precificação Dinâmica</h3>
                            <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                                Algoritmos inteligentes ajustam tarifas automaticamente para maximizar sua receita
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <Icons.Check className="w-5 h-5 text-bee-gold" />
                                    <span>Paridade de preços</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <Icons.Check className="w-5 h-5 text-bee-gold" />
                                    <span>Análise de mercado 24/7</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <Icons.Check className="w-5 h-5 text-bee-gold" />
                                    <span>Aumento de até 51% na receita</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-500 text-xs md:text-sm italic mt-3">
                                    <Icons.Package className="w-4 h-4 md:w-5 md:h-5 text-bee-gold" />
                                    <span>BeeStay fornece: algoritmo de precificação, análise de mercado, ajustes automáticos</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Single Feature with Chart */}
                    <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                            <div>
                                <div className="w-10 h-10 md:w-14 md:h-14 bg-linear-to-br from-purple-100 to-purple-50 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                                    <Icons.Star className="w-5 h-5 md:w-8 md:h-8 text-purple-600" />
                                </div>
                                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4">Experiência Premium</h3>
                                <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                                    Padrão hoteleiro em cada detalhe, do staging ao check-out
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <Icons.Check className="w-5 h-5 text-bee-gold" />
                                        <span>Concierge digital 24/7</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <Icons.Check className="w-5 h-5 text-bee-gold" />
                                        <span>Enxoval premium</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <Icons.Check className="w-5 h-5 text-bee-gold" />
                                        <span>Alcance rating 5.0 e aumente ocupação em 35%</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <Icons.Check className="w-5 h-5 text-bee-gold" />
                                        <span>Sincronização em todas as plataformas</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-500 text-xs md:text-sm italic mt-3">
                                        <Icons.Package className="w-4 h-4 md:w-5 md:h-5 text-bee-gold" />
                                        <span>BeeStay fornece: concierge 24/7, limpeza profissional, enxoval completo</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Chart Visual */}
                            <div className="bg-gray-50 rounded-2xl p-8">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <div className="text-sm text-gray-500 mb-1">Receita Mensal Média</div>
                                        <div className="text-3xl font-black text-gray-900">R$ 10.271,25</div>
                                    </div>
                                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                                        <Icons.ArrowUp className="w-4 h-4" />
                                        <span>+51%</span>
                                    </div>
                                </div>

                                {/* Vertical Bar Chart */}
                                <div className="flex items-end justify-between gap-3 h-48">
                                    {/* Setembro */}
                                    <div className="flex flex-col justify-end items-center gap-2 flex-1 h-full">
                                        <span className="text-xs font-semibold text-gray-700">R$ 8.160</span>
                                        <div className="w-full bg-linear-to-t from-gray-400 to-gray-500 rounded-t transition-all duration-1000" style={{ height: '43%' }}></div>
                                        <span className="text-xs text-gray-600 mt-2">Set</span>
                                    </div>

                                    {/* Outubro */}
                                    <div className="flex flex-col justify-end items-center gap-2 flex-1 h-full">
                                        <span className="text-xs font-semibold text-gray-700">R$ 9.580</span>
                                        <div className="w-full bg-linear-to-t from-gray-400 to-gray-500 rounded-t transition-all duration-1000" style={{ height: '52%' }}></div>
                                        <span className="text-xs text-gray-600 mt-2">Out</span>
                                    </div>

                                    {/* Novembro */}
                                    <div className="flex flex-col justify-end items-center gap-2 flex-1 h-full">
                                        <span className="text-xs font-semibold text-gray-700">R$ 11.020</span>
                                        <div className="w-full bg-linear-to-t from-gray-400 to-gray-500 rounded-t transition-all duration-1000" style={{ height: '63%' }}></div>
                                        <span className="text-xs text-gray-600 mt-2">Nov</span>
                                    </div>

                                    {/* Dezembro (Destaque)*/}
                                    <div className="flex flex-col justify-end items-center gap-2 flex-1 h-full">
                                        <span className="text-xs font-bold text-bee-gold">R$ 12.325</span>
                                        <div className="w-full bg-linear-to-t from-bee-gold to-amber-400 rounded-t shadow-lg transition-all duration-1000" style={{ height: '80%' }}></div>
                                        <span className="text-xs text-gray-900 font-semibold mt-2">Dez</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CEO Video Section - Vision & Premium Dark */}
            <section className="py-20 lg:py-32 bg-neutral-900 text-white relative overflow-hidden">
                {/* Background Accents */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-bee-gold/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                
                <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
                    
                    {/* Mobile Title (Visible only on mobile) */}
                    <div className="lg:hidden text-center mb-10">
                        <div className="inline-block px-3 py-1 mb-4 border border-bee-gold/30 rounded-full bg-bee-gold/10 text-bee-gold text-xs font-bold tracking-wider uppercase">
                            Palavra do CEO
                        </div>
                        <h2 className="text-3xl font-bold leading-tight">
                            Por que escolhi <span className="text-bee-gold">Joinville</span> para começar essa revolução?
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">
                        
                        {/* Text Content (Desktop Title + All Text/Button) */}
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <div className="hidden lg:block">
                                <div className="inline-block px-3 py-1 mb-6 border border-bee-gold/30 rounded-full bg-bee-gold/10 text-bee-gold text-xs font-bold tracking-wider uppercase">
                                    Palavra do CEO
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 font-bold leading-tight">
                                    Por que escolhi <span className="text-bee-gold">Joinville</span> para começar essa revolução?
                                </h2>
                            </div>
                            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                                "Encontramos aqui o cenário perfeito: um mercado imobiliário sólido e uma demanda reprimida por gestão profissional. A BeeStay não é apenas uma empresa, é a nossa visão de futuro para a cidade."
                            </p>
                            
                            <a
                                href="#contato"
                                className="bg-bee-gold hover:bg-bee-gold-dark text-bee-black font-bold py-4 px-8 rounded-lg w-full inline-flex justify-center items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(249,180,16,0.2)] hover:shadow-[0_0_30px_rgba(249,180,16,0.4)] uppercase tracking-wide text-sm md:text-base"
                            >
                                QUERO FAZER PARTE DESSA HISTÓRIA
                            </a>
                        </div>

                        {/* Video Thumbnail */}
                        <div className="order-1 lg:order-2 group cursor-pointer">
                            <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-bee-gold/50 group-hover:shadow-[0_0_30px_rgba(249,180,16,0.15)]">
                                {/* Thumbnail Image (Darkened) */}
                                <Image
                                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1000"
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                                    alt="Fernando - CEO BeeStay"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                
                                {/* Custom Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-bee-gold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 relative">
                                        <div className="absolute inset-0 bg-bee-gold rounded-full animate-ping opacity-20"></div>
                                        <svg className="w-8 h-8 text-bee-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Minimal Tag */}
                                <div className="absolute bottom-6 left-6 text-left">
                                    <p className="text-white font-bold text-xl">Fernando</p>
                                    <p className="text-bee-gold text-sm font-medium tracking-wide">CEO BeeStay</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-12 md:py-20 bg-bg-cream relative">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-4xl">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="text-3xl sm:text-4xl text-bee-black mb-3 font-bold">Perguntas Frequentes</h2>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-mid-gray overflow-hidden">
                        {faqData.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-4 md:px-8 py-4 md:py-6 flex justify-between items-center transition-colors faq-trigger"
                                >
                                    <span className="font-semibold text-left text-sm md:text-base">{faq.question}</span>
                                    <Icons.Plus className={`w-5 h-5 md:w-6 md:h-6 faq-icon ${openFaq === index ? 'active' : ''}`} />
                                </button>
                                <div className={`faq-answer px-4 md:px-8 ${openFaq === index ? 'active' : ''}`}>
                                    <p className="text-gray-600 text-sm md:text-base">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section - Sutil e Elegante */}
            <section id="contato" className="py-20 md:py-32 bg-bee-black text-white relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-8 lg:px-16 max-w-6xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

                        {/* Left Content */}
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight font-bold">
                                Pronto para uma gestão<br />
                                sem <span className="text-bee-gold">preocupações</span>?
                            </h2>

                            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                                Descubra o potencial do seu imóvel em uma análise gratuita.
                            </p>

                            {/* Trust badges */}
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-400 mb-8 lg:mb-0">
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-bee-gold" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Resposta em 24h</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-bee-gold" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Análise gratuita</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Form */}
                        <div id="form" className="bg-white/5 border border-white/10 rounded-lg p-8 relative">
                            {/* Loading Skeleton */}
                            {!formLoaded && (
                                <div className="space-y-4 animate-pulse">
                                    <div className="space-y-2">
                                        <div className="h-4 bg-white/10 rounded w-1/4"></div>
                                        <div className="h-10 bg-white/10 rounded"></div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-4 bg-white/10 rounded w-1/3"></div>
                                        <div className="h-10 bg-white/10 rounded"></div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-4 bg-white/10 rounded w-1/4"></div>
                                        <div className="h-10 bg-white/10 rounded"></div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-4 bg-white/10 rounded w-2/5"></div>
                                        <div className="h-24 bg-white/10 rounded"></div>
                                    </div>
                                    <div className="h-12 bg-bee-gold/30 rounded mt-6"></div>
                                </div>
                            )}

                            {/* Bitrix24 Form Container */}
                            <div
                                id="bitrix-form-container"
                                className={`transition-opacity duration-500 ${formLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
                                style={{ minHeight: '300px' }}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer - Sutil */}
            <footer className="bg-bee-black border-t border-white/10 py-12 md:py-16">
                <div className="container mx-auto px-6 md:px-8 lg:px-16 max-w-7xl">

                    {/* Main Footer Content */}
                    <div className="grid md:grid-cols-3 gap-12 mb-12">

                        {/* Logo & Tagline */}
                        <div>
                            <Image src={getImagePath("/logo.svg")} alt="BeeStay" width={120} height={32} className="h-8 w-auto mb-4" />
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Gestão profissional de imóveis de temporada com excelência hoteleira.
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm">Links</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#home" className="text-gray-400 hover:text-bee-gold transition-colors">Início</a></li>
                                <li><a href="#servicos" className="text-gray-400 hover:text-bee-gold transition-colors">Serviços</a></li>
                                <li><a href="#processo" className="text-gray-400 hover:text-bee-gold transition-colors">Processo</a></li>
                                <li><a href="#faq" className="text-gray-400 hover:text-bee-gold transition-colors">FAQ</a></li>
                            </ul>
                        </div>

                        {/* Contato */}
                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm">Contato</h4>
                            <ul className="space-y-2 text-sm text-gray-400 mb-6">
                                <li>(47) 99999-9999</li>
                                <li>contato@beestay.com.br</li>
                            </ul>

                            {/* Social Icons */}
                            <div className="flex gap-3">
                                <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-bee-gold hover:bg-bee-gold/10 transition-all group">
                                    <Icons.LinkedinLogo className="w-5 h-5 text-gray-400 group-hover:text-bee-gold transition-colors" />
                                </a>
                                <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-bee-gold hover:bg-bee-gold/10 transition-all group">
                                    <Icons.FacebookLogo className="w-5 h-5 text-gray-400 group-hover:text-bee-gold transition-colors" />
                                </a>
                                <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-bee-gold hover:bg-bee-gold/10 transition-all group">
                                    <Icons.YoutubeLogo className="w-5 h-5 text-gray-400 group-hover:text-bee-gold transition-colors" />
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                        <p>© 2025 BeeStay. Todos os direitos reservados.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-bee-gold transition-colors">Política de Privacidade</a>
                            <a href="#" className="hover:text-bee-gold transition-colors">Termos de Uso</a>
                        </div>
                    </div>

                </div>
            </footer>

            {/* WhatsApp Floating Button
            <a href="https://wa.me/5547999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20BeeStay"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group md:bottom-6 bottom-24">
                <Icons.WhatsappLogo className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </a>*/}

            {/* Sticky Mobile CTA Bar - Visible only on mobile */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg">
                <div className="px-4 py-3">
                    <a
                        href="#contato"
                        className="bg-bee-gold hover:bg-bee-gold-dark text-white px-6 py-3.5 rounded-lg font-bold transition-all w-full flex items-center justify-center gap-2 shadow-md active:scale-95"
                    >
                        Agendar Consultoria
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </main>
    )
}
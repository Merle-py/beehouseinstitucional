'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import Image from 'next/image'
import { Icons } from './components/Icons'
import { Header } from './components/Header'
import { GradientNoise } from './components/GradientNoise'
import type { Logo, Service, Diferencial, FAQItem, TimelineStep } from './types'

// Helper for image paths (basePath removed for SEO)
const getImagePath = (path: string) => path

export default function HomePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
    const [currentDiferenciaisIndex, setCurrentDiferenciaisIndex] = useState(0)
    const [formLoaded, setFormLoaded] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // Embla Carousel for Logos
    const [emblaRef] = useEmblaCarousel({ loop: true, watchDrag: false }, [
        AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 0.5 })
    ])

    // Embla Carousel for Services
    const [servicesRef, servicesApi] = useEmblaCarousel({ loop: true, align: 'center', slidesToScroll: 1 })

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

    // Hero slideshow images - Desktop
    const heroImagesDesktop = [
        getImagePath('/hero-1.webp'),
        getImagePath('/hero-2.webp'),
        getImagePath('/hero-1.webp'),
    ]

    // Hero slideshow images - Mobile
    const heroImagesMobile = [
        getImagePath('/mobile1.webp'),
        getImagePath('/mobile2.webp'),
        getImagePath('/mobile3.webp'),
    ]

    // Choose images based on screen size
    const heroImages = isMobile ? heroImagesMobile : heroImagesDesktop

    // Services carousel data
    const services: Service[] = [
        {
            icon: 'BroomOutline',
            title: 'Limpeza Profissional',
            description: 'Higienização completa e preparação impecável para receber cada novo hóspede.'
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
            description: 'Dashboard em tempo real com todas as receitas, despesas e reservas. Zero letras miúdas.',
            icon: 'ChartLineUp',
            imageAlt: 'Dashboard em laptop',
            imageSrc: getImagePath('/img3.webp')
        },
        {
            title: 'Relatórios Mensais',
            description: 'Relatórios detalhados para o acompanhamento do seu investimento e performance mensal.',
            icon: 'Handshake',
            imageAlt: 'Detalhe de limpeza premium',
            imageSrc: getImagePath('/img2.webp')
        },
        {
            title: 'Tecnologia de Ponta',
            description: 'Automação completa do check-in ao checkout. Você relaxa enquanto a tecnologia trabalha.',
            icon: 'Cpu',
            imageAlt: 'Pessoa verificando imóvel',
            imageSrc: getImagePath('/tecnologiadeponta.webp')
        }
    ]

    const heroImageRefs = useRef<(HTMLDivElement | null)[]>([])

    // Detect mobile screen size
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        // Check on mount
        checkMobile()

        // Add resize listener
        window.addEventListener('resize', checkMobile)

        return () => window.removeEventListener('resize', checkMobile)
    }, [])

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

    // FAQ data - Perguntas Essenciais
    const faqData: FAQItem[] = [
        {
            question: "Como funciona a gestão da BeeStay?",
            answer: "A BeeStay cuida de todo o processo da locação por temporada, desde a divulgação do imóvel e gestão de reservas até o atendimento aos hóspedes, limpeza e manutenção. Nosso objetivo é maximizar a rentabilidade do imóvel enquanto proporcionamos tranquilidade total ao proprietário."
        },
        {
            question: "Preciso me preocupar com o atendimento aos hóspedes?",
            answer: "Não. Nossa equipe realiza toda a comunicação antes, durante e após a estadia, garantindo suporte completo aos hóspedes e preservando a qualidade da experiência e do seu imóvel."
        },
        {
            question: "Meu imóvel precisa estar mobiliado e equipado?",
            answer: "Sim, imóveis destinados à locação de curta temporada precisam estar preparados para receber hóspedes com conforto e funcionalidade. Auxiliamos com orientações e sugestões para adequação do imóvel."
        },
        {
            question: "Como acompanho os resultados do meu imóvel?",
            answer: "Os proprietários têm acesso a relatórios e informações sobre ocupação, receitas e desempenho do imóvel, garantindo total transparência na gestão."
        },
        {
            question: "Em quanto tempo começo a ter retorno?",
            answer: "O prazo pode variar conforme localização, padrão do imóvel e demanda do mercado, mas trabalhamos com estratégias de precificação e divulgação para acelerar o desempenho desde o início da operação."
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

                // Add input listeners for placeholder control
                const formCheckInterval = setInterval(() => {
                    const inputs = container.querySelectorAll('input, textarea')
                    if (inputs.length > 0) {
                        clearInterval(formCheckInterval)

                        inputs.forEach((input: Element) => {
                            const inputElement = input as HTMLInputElement | HTMLTextAreaElement

                            const checkValue = () => {
                                if (inputElement.value && inputElement.value.trim() !== '') {
                                    inputElement.classList.add('has-value')
                                } else {
                                    inputElement.classList.remove('has-value')
                                }
                            }

                            // Check initial value
                            checkValue()

                            // Add listeners
                            inputElement.addEventListener('input', checkValue)
                            inputElement.addEventListener('change', checkValue)
                            inputElement.addEventListener('blur', checkValue)
                        })
                    }
                }, 100)

                // Clear interval after 5 seconds if form doesn't load
                setTimeout(() => clearInterval(formCheckInterval), 5000)
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
        <main id="main-content">
            <style jsx global>{`
                /* Bitrix24 Form Custom Styles - Floating Label Effect */

                /* Add spacing between form fields */
                #bitrix-form-container .b24-form-field,
                #bitrix-form-container .b24-form-control-container,
                #bitrix-form-container > div > div {
                    margin-bottom: 1.25rem !important;
                }

                #bitrix-form-container input,
                #bitrix-form-container textarea,
                #bitrix-form-container select {
                    transition: all 0.2s ease;
                    display: flex;
                    align-items: center;
                }

                #bitrix-form-container input,
                #bitrix-form-container select {
                    line-height: normal;
                }

                #bitrix-form-container textarea {
                    padding-top: 0.5rem;
                    padding-bottom: 0.5rem;
                }

                #bitrix-form-container input::placeholder,
                #bitrix-form-container textarea::placeholder {
                    opacity: 1;
                    transition: opacity 0.2s ease;
                    text-align: left;
                    vertical-align: middle;
                }

                /* Hide placeholder on focus */
                #bitrix-form-container input:focus::placeholder,
                #bitrix-form-container textarea:focus::placeholder {
                    opacity: 0;
                }

                /* Hide placeholder when field has value */
                #bitrix-form-container input:not(:placeholder-shown)::placeholder,
                #bitrix-form-container textarea:not(:placeholder-shown)::placeholder {
                    opacity: 0;
                }

                /* Hide placeholder when field has value (JS controlled) */
                #bitrix-form-container input.has-value::placeholder,
                #bitrix-form-container textarea.has-value::placeholder {
                    opacity: 0;
                }
            `}</style>
            <Header />

            {/* Hero Section - Full Width com Slideshow */}
            <section id="home" className="min-h-screen pt-20 relative overflow-hidden">
                {/* Background Slideshow */}
                <div className="absolute inset-0">
                    {heroImagesDesktop.map((image, index) => {
                        const heroAlts = [
                            'Gestão profissional de imóveis para aluguel de temporada com a BeeStay',
                            'Imóvel de alto padrão gerenciado pela BeeStay para short stay',
                            'Rentabilidade garantida com gestão completa de propriedades'
                        ]
                        return (
                            <div
                                key={`desktop-${index}`}
                                ref={(el) => {
                                    if (el) heroImageRefs.current[index] = el
                                }}
                                className={`hero-slide absolute inset-0 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <Image
                                    src={image}
                                    alt={heroAlts[index] || 'BeeStay gestão de imóveis'}
                                    fill
                                    priority={index === 0}
                                    className="object-cover hidden md:block"
                                />
                            </div>
                        )
                    })}
                    {heroImagesMobile.map((image, index) => {
                        const heroAlts = [
                            'Gestão profissional de imóveis para aluguel de temporada com a BeeStay',
                            'Imóvel de alto padrão gerenciado pela BeeStay para short stay',
                            'Rentabilidade garantida com gestão completa de propriedades'
                        ]
                        return (
                            <div
                                key={`mobile-${index}`}
                                className={`hero-slide absolute inset-0 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <Image
                                    src={image}
                                    alt={heroAlts[index] || 'BeeStay gestão de imóveis'}
                                    fill
                                    priority={index === 0}
                                    className="object-cover md:hidden"
                                />
                            </div>
                        )
                    })}
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10 pointer-events-none"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-6 lg:px-16 min-h-[calc(100vh-5rem)] flex items-center">
                    <div className="max-w-2xl py-16 lg:py-0">

                        {/* Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8 font-bold drop-shadow-lg">
                            Seu imóvel pode <span className="text-bee-gold">render mais</span> no Airbnb.
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg text-white/90 leading-relaxed mb-10 drop-shadow">
                            Elevamos a performance do seu imóvel com <span style={{ fontWeight: 'bold' }} className="text-bee-gold">gestão profissional</span> e estadias que geram valor.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <a
                                href="#contato"
                                className="bg-bee-gold hover:bg-bee-gold-dark text-white px-8 py-4 rounded font-semibold transition-all inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                            >
                                Saiba mais
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

            {/* O Que Cuidamos - Seu imóvel em boas mãos */}
            <section id="servicos" className="py-10 lg:py-32 bg-warm-linen relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
                    {/* Section Header */}
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl text-bee-black mb-4 leading-tight font-bold">
                            Seu imóvel em boas mãos
                        </h2>
                        <p className="text-base text-text-gray max-w-2xl mx-auto">
                            Gestão completa de locação curta temporada para sua propriedade
                        </p>
                    </div>

                    {/* Carousel Container */}
                    <div className="relative">
                        {/* Navigation Buttons - Visible only on mobile/tablet */}
                        <button
                            onClick={scrollPrev}
                            className="flex lg:hidden absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 bg-white border border-mid-gray rounded-full items-center justify-center hover:border-bee-gold hover:bg-bee-gold/10 transition-all shadow-lg"
                            aria-label="Anterior"
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-bee-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={scrollNext}
                            className="flex lg:hidden absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 bg-white border border-mid-gray rounded-full items-center justify-center hover:border-bee-gold hover:bg-bee-gold/10 transition-all shadow-lg"
                            aria-label="Próximo"
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6 text-bee-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Mobile/Tablet Carousel */}
                        <div className="lg:hidden overflow-hidden" ref={servicesRef}>
                            <div className="flex touch-pan-y">
                                {services.map((service, index) => {
                                    const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>
                                    return (
                                        <div
                                            key={index}
                                            className="flex-[0_0_85%] md:flex-[0_0_50%] px-3 min-w-0"
                                        >
                                            <div className="group h-full bg-white border border-mid-gray rounded-2xl p-10 hover:border-bee-gold transition-all duration-300 hover:shadow-md hover:-translate-y-1 relative overflow-hidden">
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

                        {/* Desktop Grid - All 4 cards visible */}
                        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
                            {services.map((service, index) => {
                                const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>
                                return (
                                    <div key={index}>
                                        <div className="group h-full bg-white border border-mid-gray rounded-2xl p-8 hover:border-bee-gold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden">
                                            <div className="absolute top-0 left-0 w-1 h-full bg-bee-gold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                                            <div className="mb-6">
                                                <IconComponent className="w-10 h-10 text-bee-gold" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-bee-black mb-4">
                                                {service.title}
                                            </h3>
                                            <p className="text-text-gray leading-relaxed text-sm">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Dots Indicator - Only for mobile/tablet */}
                        <div className="flex lg:hidden justify-center gap-2 mt-8">
                            {services.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollTo(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentServiceIndex ? 'bg-bee-gold w-8' : 'bg-mid-gray'
                                        }`}
                                    aria-label={`Ir para serviço ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        

            {/* CTA Section - High Conversion Premium (Moved Up) */}
            <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
                <div className="bg-bee-black rounded-[2rem] md:rounded-[3rem] overflow-hidden relative isolate shadow-2xl max-w-7xl mx-auto">
                    {/* Background Texture & Glow */}
                    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay"></div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bee-gold/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

                    <div className="grid lg:grid-cols-2 gap-0 lg:gap-12 items-stretch w-full max-w-full">

                        {/* Left - Video Side (Full Height Cover) */}
                        <div className="relative h-[300px] lg:h-auto lg:min-h-[400px] w-full flex items-center justify-center p-4 md:p-6 lg:pl-12 lg:pr-6">
                            <div className="w-full max-w-full group cursor-pointer">
                                <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-bee-gold/50 group-hover:shadow-[0_0_30px_rgba(249,180,16,0.15)]">
                                    {/* Thumbnail Image (Darkened) */}
                                    <Image
                                        src="https://images.unsplash.com/photo-1600596542815-6ad4c12756ab?q=80&w=1000"
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                                        alt="Imóvel gerenciado pela BeeStay nas plataformas Airbnb, Booking, Expedia e Decolar"
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
                                </div>
                            </div>
                        </div>

                        {/* Right - Content Side */}
                        <div className="p-8 pt-[0px] -mt-6 md:mt-0 md:p-12 lg:p-20 flex flex-col justify-center relative z-10 w-full max-w-full overflow-hidden">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
                                Seu imóvel rendendo <span className="text-bee-gold">muito mais</span>, enquanto cuidamos de tudo.
                            </h2>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                Anunciamos seu imóvel nas maiores plataformas do mercado e cuidamos de toda a gestão operacional para garantir performance máxima e tranquilidade total para você.
                            </p>

                            <div className="relative w-full max-w-full">
                                <div className="overflow-hidden w-full max-w-full" ref={emblaRef}>
                                    <div className="flex touch-pan-y">
                                        {repeatedLogos.map((logo, index) => (
                                            <div
                                                key={index}
                                                className="flex-[0_0_auto] min-w-0 px-4 md:px-8 flex items-center justify-center opacity-30 hover:opacity-60 transition-opacity duration-1200"
                                            >
                                                <Image
                                                    src={logo.src}
                                                    alt={logo.alt}
                                                    width={120}
                                                    height={40}
                                                    className="h-8 md:h-10 w-auto object-contain"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Left Fade */}
                                <div className="pointer-events-none absolute inset-y-0 -left-4 w-24 bg-gradient-to-r from-bee-black to-transparent z-10"></div>
                                {/* Right Fade */}
                                <div className="pointer-events-none absolute inset-y-0 -right-4 w-24 bg-gradient-to-l from-bee-black to-transparent z-10"></div>
                            </div>
                            <div className="pt-10 mb-10">
                                <a
                                    href="#contato"
                                    className="bg-bee-gold hover:bg-bee-gold-dark text-bee-black font-bold py-4 px-8 rounded-lg w-full inline-flex justify-center items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(249,180,16,0.4)] hover:shadow-[0_0_30px_rgba(249,180,16,0.6)]"
                                >
                                    Começar Agora
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Processo - Como Funciona (Timeline) */}
            <section id="processo" className="py-10 lg:py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 lg:px-16 max-w-7xl">

                    {/* Section Header */}
                    <div className="text-center mb-16 lg:mb-24">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl text-bee-black mb-6 leading-tight font-bold">
                            Simples para você,<br />completo para seu imóvel
                        </h2>
                        <p className="text-lg text-text-gray max-w-2xl mx-auto">
                            Transformamos sua propriedade em um negócio rentável em apenas 4 passos.
                        </p>
                    </div>

                    {/* Mobile & Tablet Timeline (Vertical) */}
                    <div className="lg:hidden relative max-w-4xl mx-auto">
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

                    {/* Desktop Timeline (Horizontal) */}
                    <div className="hidden lg:block relative">
                        {/* Horizontal Line */}
                        <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>

                        <div className="grid grid-cols-4 gap-6">
                            {timelineSteps.map((item, index) => (
                                <div key={index} className="relative group">
                                    {/* Marker */}
                                    <div className="absolute left-1/2 -translate-x-1/2 top-8 w-10 h-10 bg-white border-2 border-bee-gold rounded-full flex items-center justify-center z-10 shadow-[0_0_0_4px_#ffffff] group-hover:bg-bee-gold transition-colors duration-300">
                                        <div className="w-2.5 h-2.5 bg-bee-gold rounded-full group-hover:bg-white transition-colors duration-300"></div>
                                    </div>

                                    {/* Card */}
                                    <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-bee-gold/30 transition-all duration-300 hover:-translate-y-1 mt-24">
                                        <div className="text-center mb-4">
                                            <span className="text-5xl font-bold text-gray-100 group-hover:text-bee-gold/20 transition-colors duration-300 font-sans tracking-tighter">
                                                {item.step}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-bee-black group-hover:text-bee-gold transition-colors mb-3 text-center">
                                            {item.title}
                                        </h3>
                                        <p className="text-text-gray leading-relaxed text-sm text-center">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* Diferenciais Section - Gestão Que Você Pode Acompanhar (Moved Up) */}
            <section id="diferenciais" className="py-10 lg:py-32 bg-warm-cream">
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
                        <div className="overflow-hidden pb-4" ref={diferenciaisRef}>
                            <div className="flex touch-pan-y lg:cursor-default mb-4">
                                {diferenciaisData.map((item, index) => {
                                    const IconComponent = Icons[item.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>
                                    return (
                                        <div
                                            key={index}
                                            className="flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-3 md:px-4 min-w-0"
                                        >
                                            <div className="h-full bg-white rounded-2xl border border-gray-100 hover:shadow-xl hover:border-bee-gold/30 transition-all duration-300 group flex flex-col">
                                                {/* Visual Area with Image */}
                                                <div className="h-48 relative overflow-hidden shrink-0 rounded-t-2xl">
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
                                    className={`w-2 h-2 rounded-full transition-all ${index === currentDiferenciaisIndex ? 'bg-bee-gold w-8' : 'bg-mid-gray'
                                        }`}
                                    aria-label={`Ir para diferencial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>




            {/* FAQ Section */}
            <section id="faq" className="py-10 md:py-20 bg-warm-sand relative">
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
            <section id="contato" className="py-10 md:py-32 bg-bee-black text-white relative overflow-hidden">
                {/* Background Texture & Glow Effects */}
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute top-1/2 left-0 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-bee-gold/20 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2"></div>
                <div className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-bee-gold/15 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2"></div>
                {/* Additional desktop glows behind form */}
                <div className="hidden lg:block absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-bee-gold/25 rounded-full blur-[140px]"></div>
                <div className="hidden lg:block absolute bottom-1/3 right-1/3 w-[300px] h-[300px] bg-amber-400/20 rounded-full blur-[110px]"></div>
                <div className="hidden lg:block absolute top-1/2 right-0 w-[450px] h-[450px] bg-bee-gold/15 rounded-full blur-[130px] translate-x-1/4"></div>

                <div className="container mx-auto px-6 md:px-8 lg:px-16 max-w-6xl relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">

                        {/* Left Content */}
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight font-bold">
                                Pronto para uma gestão sem <span className="text-bee-gold">preocupações</span>?
                            </h2>

                            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                                Descubra o potencial do seu imóvel em uma análise gratuita.
                            </p>

                            {/* Trust badges */}
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-400 mb-0 lg:mb-0">
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
                        <div id="form" className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 relative shadow-2xl shadow-bee-gold/10">
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
            <footer className="bg-bee-black border-t border-white/10 py-12 md:py-16 relative overflow-hidden">
                <GradientNoise magnitude={0.1} decayRate={0.5} />
                <div className="container mx-auto px-6 md:px-8 lg:px-16 max-w-7xl relative z-10">

                    {/* Main Footer Content */}
                    <div className="grid md:grid-cols-3 gap-12 mb-12">

                        {/* Logo & Tagline */}
                        <div className="text-center md:text-left">
                            <Image src={getImagePath("/logo_branco.svg")} alt="BeeStay" width={240} height={64} className="h-8 w-auto mb-4 mx-auto md:mx-0" />
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Gestão profissional de locação curta temporada com excelência hoteleira.
                            </p>
                        </div>

                        {/* Links */}
                        <div className="text-center md:text-left">
                            <h4 className="text-white font-semibold mb-4 text-sm">Links</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#home" className="text-gray-400 hover:text-bee-gold transition-colors">Início</a></li>
                                <li><a href="#servicos" className="text-gray-400 hover:text-bee-gold transition-colors">Serviços</a></li>
                                <li><a href="#processo" className="text-gray-400 hover:text-bee-gold transition-colors">Processo</a></li>
                                <li><a href="#faq" className="text-gray-400 hover:text-bee-gold transition-colors">FAQ</a></li>
                                <li><a href="/politica-privacidade" className="text-gray-400 hover:text-bee-gold transition-colors">Política de Privacidade</a></li>
                                <li><a href="/termos-uso" className="text-gray-400 hover:text-bee-gold transition-colors">Termos de Uso</a></li>
                            </ul>
                        </div>

                        {/* Contato */}
                        <div className="text-center md:text-left">
                            <h4 className="text-white font-semibold mb-4 text-sm">Contato</h4>
                            <ul className="space-y-2 text-sm text-gray-400 mb-6">
                                <li>
                                    <a href="tel:+5547992879066" className="hover:text-bee-gold transition-colors">
                                        (47) 99287-9066
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:andre.andrade@beehouse.imb.br" className="hover:text-bee-gold transition-colors">
                                        andre.andrade@beehouse.imb.br
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://wa.me/5547992879066?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20gestão%20de%20imóveis%20da%20BeeStay"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-bee-gold transition-colors inline-flex items-center gap-1"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                        </svg>
                                        WhatsApp
                                    </a>
                                </li>
                            </ul>

                            {/* Social Icons */}
                            <div className="flex gap-3 justify-center md:justify-start">
                                <a
                                    href="https://www.linkedin.com/company/beestay"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-bee-gold hover:bg-bee-gold/10 transition-all group"
                                    aria-label="LinkedIn da BeeStay"
                                >
                                    <Icons.LinkedinLogo className="w-5 h-5 text-gray-400 group-hover:text-bee-gold transition-colors" />
                                </a>
                                <a
                                    href="https://www.facebook.com/beestay"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-bee-gold hover:bg-bee-gold/10 transition-all group"
                                    aria-label="Facebook da BeeStay"
                                >
                                    <Icons.FacebookLogo className="w-5 h-5 text-gray-400 group-hover:text-bee-gold transition-colors" />
                                </a>
                                <a
                                    href="https://www.youtube.com/@beestay"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-bee-gold hover:bg-bee-gold/10 transition-all group"
                                    aria-label="YouTube da BeeStay"
                                >
                                    <Icons.YoutubeLogo className="w-5 h-5 text-gray-400 group-hover:text-bee-gold transition-colors" />
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                        <p>© 2026 BeeStay. Todos os direitos reservados.</p>
                        <div className="flex gap-6">
                            <a href="/politica-privacidade" className="hover:text-bee-gold transition-colors">Política de Privacidade</a>
                            <a href="/termos-uso" className="hover:text-bee-gold transition-colors">Termos de Uso</a>
                        </div>
                    </div>

                </div>
            </footer>



        </main>
    )
}
'use client'
import { useState, useEffect, useRef } from 'react'
import { Icons } from './components/Icons'

export default function HomePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)
    const carouselRef = useRef<HTMLDivElement>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    // Hero slideshow images
    const heroImages = [
        '/hero-1.jpg', // Adicione suas imagens aqui
        '/hero-2.jpg',
        '/hero-3.jpg',
    ]

    // Services carousel data
    const services = [
        {
            icon: 'BroomOutline',
            title: 'Limpeza Profissional',
            description: 'Protocolos de hotelaria após cada hóspede. Equipe treinada, produtos premium e vistoria fotográfica completa.'
        },
        {
            icon: 'ToolOutline',
            title: 'Manutenção Preventiva',
            description: 'Vistoria técnica regular e reparos imediatos. Preservamos o valor do seu ativo com cuidado artesanal.'
        },
        {
            icon: 'EyeOutline',
            title: 'Vistoria Criteriosa',
            description: 'Check-in e check-out com registro fotográfico detalhado. Monitoramento contínuo do estado da propriedade.'
        },
        {
            icon: 'GraphOutline',
            title: 'Precificação Inteligente',
            description: 'Algoritmo adapta tarifas ao mercado em tempo real. Maximize ocupação e rentabilidade simultaneamente.'
        },
    ]

    // Hero slideshow effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length)
        }, 5000) // Change slide every 5 seconds

        return () => clearInterval(interval)
    }, [heroImages.length])

    // Services carousel navigation
    const nextService = () => {
        setCurrentServiceIndex((prev) => (prev + 1) % services.length)
    }

    const prevService = () => {
        setCurrentServiceIndex((prev) => (prev - 1 + services.length) % services.length)
    }

    const getVisibleServices = () => {
        const visible = []
        for (let i = 0; i < 2; i++) {
            visible.push(services[(currentServiceIndex + i) % services.length])
        }
        return visible
    }

    // Drag handlers for carousel
    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        setIsDragging(true)
        const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX
        setStartX(pageX)
    }

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging) return
        e.preventDefault()
        const pageX = 'touches' in e ? e.touches[0].pageX : e.pageX
        const walk = (startX - pageX) * 2

        if (Math.abs(walk) > 50) {
            if (walk > 0) {
                nextService()
            } else {
                prevService()
            }
            setIsDragging(false)
        }
    }

    const handleDragEnd = () => {
        setIsDragging(false)
    }

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
        }

        return () => {
            // Cleanup
            if (container && script.parentNode) {
                container.removeChild(script)
            }
        }
    }, [])

    return (
        <main>
            {/* Navigation - Sutil e Limpo */}
            <nav className="fixed top-0 w-full z-50 bg-white/98 backdrop-blur-sm border-b border-gray-100">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <img src="/logo.svg" alt="BeeStay" className="h-10" />

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-10">
                            <a href="#home" className="text-sm text-text-gray hover:text-bee-gold transition-colors font-medium">
                                Início
                            </a>
                            <a href="#servicos" className="text-sm text-text-gray hover:text-bee-gold transition-colors font-medium">
                                Serviços
                            </a>
                            <a href="#processo" className="text-sm text-text-gray hover:text-bee-gold transition-colors font-medium">
                                Processo
                            </a>
                            <a href="#contato" className="bg-bee-gold hover:bg-bee-gold-dark text-white px-6 py-2.5 rounded font-semibold transition-all text-sm">
                                Agendar Consultoria
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden text-bee-black">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section - Full Width com Slideshow */}
            <section id="home" className="min-h-screen pt-20 relative overflow-hidden">
                {/* Background Slideshow */}
                <div className="absolute inset-0">
                    {heroImages.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${
                                index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            {/* Placeholder background - Replace with actual images */}
                            <div className="w-full h-full bg-gradient-to-br from-light-gray to-off-white">
                                <div className="w-full h-full flex items-center justify-center text-text-light">
                                    <div className="text-center">
                                        <svg className="w-32 h-32 mx-auto mb-4 opacity-10" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-sm opacity-30">Imagem Hero {index + 1}</p>
                                    </div>
                                </div>
                            </div>
                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-6 lg:px-16 min-h-[calc(100vh-5rem)] flex items-center">
                    <div className="max-w-2xl py-16 lg:py-0">
                        {/* Eyebrow */}
                        <div className="text-bee-gold text-xs font-medium tracking-wider uppercase mb-6">
                            Gestão de Imóveis de Temporada
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8 font-bold drop-shadow-lg">
                            Transforme seu imóvel<br />
                            em uma experiência<br />
                            de <span className="text-bee-gold">hotelaria</span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg text-white/90 leading-relaxed mb-10 drop-shadow">
                            Cuidamos de cada detalhe da sua propriedade com a excelência de um hotel boutique.
                            Tecnologia invisível, hospitalidade visível.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <a
                                href="#contato"
                                className="bg-bee-gold hover:bg-bee-gold-dark text-white px-8 py-4 rounded font-semibold transition-all inline-flex items-center justify-center gap-2 shadow-lg"
                            >
                                Agendar Consultoria
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a
                                href="#servicos"
                                className="text-white hover:text-bee-gold font-medium inline-flex items-center justify-center gap-2 transition-colors px-4 backdrop-blur-sm bg-white/10 py-4 rounded"
                            >
                                Ver como funciona
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
                                <span>Consultoria gratuita</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-bee-gold" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Sem compromisso</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logo Bar - Sutil */}
            <section className="py-10 bg-light-gray border-y border-mid-gray">
                <div className="container mx-auto px-8 lg:px-16">
                    <div className="logo-scroll-container">
                        <div className="logo-scroll">
                            {/* First set */}
                            <div className="logo-item opacity-30 hover:opacity-60"><img src="/Airbnb.svg" alt="Airbnb" loading="lazy" width="120" height="40" /></div>
                            <div className="logo-item opacity-30 hover:opacity-60"><img src="/Booking.svg" alt="Booking" loading="lazy" width="120" height="40" /></div>
                            <div className="logo-item opacity-30 hover:opacity-60"><img src="/Decolar.svg" alt="Decolar" loading="lazy" width="120" height="40" /></div>
                            <div className="logo-item opacity-30 hover:opacity-60"><img src="/Expedia.svg" alt="Expedia" loading="lazy" width="120" height="40" /></div>
                            {/* Second set (for seamless loop) */}
                            <div className="logo-item opacity-30 hover:opacity-60"><img src="/Airbnb.svg" alt="Airbnb" loading="lazy" width="120" height="40" /></div>
                            <div className="logo-item opacity-30 hover:opacity-60"><img src="/Booking.svg" alt="Booking" loading="lazy" width="120" height="40" /></div>
                            <div className="logo-item opacity-30 hover:opacity-60"><img src="/Decolar.svg" alt="Decolar" loading="lazy" width="120" height="40" /></div>
                            <div className="logo-item opacity-30 hover:opacity-60"><img src="/Expedia.svg" alt="Expedia" loading="lazy" width="120" height="40" /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* O Que Cuidamos - Carrossel */}
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
                        {/* Navigation Buttons - Hidden on mobile */}
                        <button
                            onClick={prevService}
                            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white border border-mid-gray rounded-full items-center justify-center hover:border-bee-gold hover:bg-bee-gold/10 transition-all shadow-lg"
                            aria-label="Anterior"
                        >
                            <svg className="w-6 h-6 text-bee-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={nextService}
                            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white border border-mid-gray rounded-full items-center justify-center hover:border-bee-gold hover:bg-bee-gold/10 transition-all shadow-lg"
                            aria-label="Próximo"
                        >
                            <svg className="w-6 h-6 text-bee-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Cards Container with smooth transition */}
                        <div className="overflow-hidden">
                            <div
                                ref={carouselRef}
                                className="flex transition-transform duration-500 ease-in-out gap-8 lg:gap-12 cursor-grab active:cursor-grabbing"
                                style={{ transform: `translateX(-${currentServiceIndex * (100 / 2)}%)` }}
                                onMouseDown={handleDragStart}
                                onMouseMove={handleDragMove}
                                onMouseUp={handleDragEnd}
                                onMouseLeave={handleDragEnd}
                                onTouchStart={handleDragStart}
                                onTouchMove={handleDragMove}
                                onTouchEnd={handleDragEnd}
                            >
                                {[...services, ...services].map((service, index) => {
                                    const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>
                                    return (
                                        <div
                                            key={index}
                                            className="min-w-[calc(100%-2rem)] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(50%-1.5rem)] group bg-white border border-mid-gray rounded-lg p-10 hover:border-bee-gold transition-all duration-300 hover:shadow-lg"
                                        >
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
                                    )
                                })}
                            </div>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-8">
                            {services.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentServiceIndex(index)}
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
            <section id="processo" className="py-20 lg:py-32 bg-white relative">
                <div className="container mx-auto px-6 lg:px-16 max-w-5xl">

                    {/* Section Header */}
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl text-bee-black mb-4 leading-tight font-bold">
                            Simples para você,<br />completo para seu imóvel
                        </h2>
                    </div>

                    {/* Timeline Vertical */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-mid-gray"></div>

                        {/* Steps */}
                        <div className="space-y-16">

                            {/* Step 01 */}
                            <div className="relative pl-20 md:pl-28">
                                <div className="absolute left-0 top-0 w-16 md:w-24 h-16 md:h-24 flex items-center justify-center">
                                    <span className="text-4xl md:text-6xl text-bee-gold/20 font-bold">01</span>
                                </div>
                                <div className="absolute left-[1.75rem] md:left-[2.75rem] top-8 md:top-10 w-2 h-2 bg-bee-gold rounded-full"></div>

                                <h3 className="text-xl md:text-2xl font-semibold text-bee-black mb-3">
                                    Consultoria Sem Compromisso
                                </h3>
                                <p className="text-text-gray leading-relaxed">
                                    Visitamos seu imóvel, analisamos potencial e apresentamos proposta personalizada.
                                </p>
                            </div>

                            {/* Step 02 */}
                            <div className="relative pl-20 md:pl-28">
                                <div className="absolute left-0 top-0 w-16 md:w-24 h-16 md:h-24 flex items-center justify-center">
                                    <span className="text-4xl md:text-6xl text-bee-gold/20 font-bold">02</span>
                                </div>
                                <div className="absolute left-[1.75rem] md:left-[2.75rem] top-8 md:top-10 w-2 h-2 bg-bee-gold rounded-full"></div>

                                <h3 className="text-xl md:text-2xl font-semibold text-bee-black mb-3">
                                    Preparação do Espaço
                                </h3>
                                <p className="text-text-gray leading-relaxed">
                                    Fotografia profissional, cadastro nas plataformas e otimização do anúncio.
                                </p>
                            </div>

                            {/* Step 03 */}
                            <div className="relative pl-20 md:pl-28">
                                <div className="absolute left-0 top-0 w-16 md:w-24 h-16 md:h-24 flex items-center justify-center">
                                    <span className="text-4xl md:text-6xl text-bee-gold/20 font-bold">03</span>
                                </div>
                                <div className="absolute left-[1.75rem] md:left-[2.75rem] top-8 md:top-10 w-2 h-2 bg-bee-gold rounded-full"></div>

                                <h3 className="text-xl md:text-2xl font-semibold text-bee-black mb-3">
                                    Gestão Ativa
                                </h3>
                                <p className="text-text-gray leading-relaxed">
                                    Atendimento a hóspedes, operação diária e manutenção contínua.
                                </p>
                            </div>

                            {/* Step 04 */}
                            <div className="relative pl-20 md:pl-28">
                                <div className="absolute left-0 top-0 w-16 md:w-24 h-16 md:h-24 flex items-center justify-center">
                                    <span className="text-4xl md:text-6xl text-bee-gold/20 font-bold">04</span>
                                </div>
                                <div className="absolute left-[1.75rem] md:left-[2.75rem] top-8 md:top-10 w-2 h-2 bg-bee-gold rounded-full"></div>

                                <h3 className="text-xl md:text-2xl font-semibold text-bee-black mb-3">
                                    Relatórios Transparentes
                                </h3>
                                <p className="text-text-gray leading-relaxed">
                                    Acompanhe tudo pelo dashboard e receba análises mensais detalhadas.
                                </p>
                            </div>

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

            {/* Diferenciais Section - Gestão Que Você Pode Acompanhar */}
            <section id="diferenciais" className="py-20 lg:py-32 bg-bg-cream">
                <div className="container mx-auto px-6 lg:px-16 max-w-7xl">

                    {/* Section Header */}
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl text-bee-black mb-4 leading-tight font-bold">
                            Gestão que você pode acompanhar
                        </h2>
                    </div>

                    {/* Grid 3 Colunas */}
                    <div className="grid md:grid-cols-3 gap-10 lg:gap-16">

                        {/* Diferencial 1: Transparência */}
                        <div className="group">
                            {/* Image placeholder */}
                            <div className="aspect-[4/3] bg-light-gray rounded mb-6 overflow-hidden relative">
                                <div className="w-full h-full flex items-center justify-center text-text-light">
                                    <div className="text-center p-6">
                                        <Icons.Cpu className="w-14 h-14 mx-auto mb-2 opacity-20" />
                                        <p className="text-xs opacity-40">Dashboard em laptop</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-bee-black mb-3">
                                Transparência Total
                            </h3>
                            <p className="text-text-gray leading-relaxed text-sm">
                                Acompanhe reservas, receita e operação em tempo real. Relatórios financeiros mensais detalhados.
                            </p>
                        </div>

                        {/* Diferencial 2: Tecnologia */}
                        <div className="group">
                            {/* Image placeholder */}
                            <div className="aspect-[4/3] bg-light-gray rounded mb-6 overflow-hidden relative">
                                <div className="w-full h-full flex items-center justify-center text-text-light">
                                    <div className="text-center p-6">
                                        <Icons.Cpu className="w-14 h-14 mx-auto mb-2 opacity-20" />
                                        <p className="text-xs opacity-40">Pessoa verificando imóvel</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-bee-black mb-3">
                                Tecnologia Invisível
                            </h3>
                            <p className="text-text-gray leading-relaxed text-sm">
                                Automação de check-in, precificação dinâmica e gestão de canais. Você só vê os resultados.
                            </p>
                        </div>

                        {/* Diferencial 3: Cuidado */}
                        <div className="group">
                            {/* Image placeholder */}
                            <div className="aspect-[4/3] bg-light-gray rounded mb-6 overflow-hidden relative">
                                <div className="w-full h-full flex items-center justify-center text-text-light">
                                    <div className="text-center p-6">
                                        <Icons.Star className="w-14 h-14 mx-auto mb-2 opacity-20" />
                                        <p className="text-xs opacity-40">Detalhe de limpeza premium</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-bee-black mb-3">
                                Cuidado Artesanal
                            </h3>
                            <p className="text-text-gray leading-relaxed text-sm">
                                Cada propriedade tem um gestor dedicado. Atendimento humanizado, não automatizado.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Prova Social - Quem Confia */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-16 max-w-6xl">

                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl text-bee-black mb-4 font-bold">
                            Proprietários que confiam na BeeStay
                        </h2>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Depoimento 1 */}
                        <div className="bg-bg-cream border border-mid-gray rounded-lg p-8 relative">
                            <div className="relative z-10">
                                <p className="text-text-gray leading-relaxed mb-6">
                                    Desde que contratei a BeeStay, durmo tranquilo. Eles realmente tratam meu apartamento como se fosse deles.
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-bee-gold/10 rounded-full flex items-center justify-center">
                                        <span className="text-bee-gold font-semibold text-sm">MC</span>
                                    </div>
                                    <div>
                                        <div className="text-bee-black font-semibold">Mariana Costa</div>
                                        <div className="text-text-light text-sm">Proprietária há 2 anos</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Depoimento 2 */}
                        <div className="bg-bg-cream border border-mid-gray rounded-lg p-8 relative">
                            <div className="relative z-10">
                                <p className="text-text-gray leading-relaxed mb-6">
                                    A transparência nos relatórios e o cuidado com a manutenção preventiva me surpreenderam. É gestão profissional de verdade.
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-bee-gold/10 rounded-full flex items-center justify-center">
                                        <span className="text-bee-gold font-semibold text-sm">RS</span>
                                    </div>
                                    <div>
                                        <div className="text-bee-black font-semibold">Roberto Silva</div>
                                        <div className="text-text-light text-sm">Proprietário há 1 ano</div>
                                    </div>
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
                        {[
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
                        ].map((faq, index) => (
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
                                Descubra o potencial real do seu imóvel em uma consultoria personalizada.
                                <strong className="text-white"> Sem compromisso, apenas dados reais.</strong>
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
                        <div id="form" className="bg-white/5 border border-white/10 rounded-lg p-8">
                            {/* Bitrix24 Form Container */}
                            <div
                                id="bitrix-form-container"
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
                            <img src="/logo.svg" alt="BeeStay" className="h-8 mb-4" />
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

            {/* WhatsApp Floating Button */}
            <a href="https://wa.me/5547999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20BeeStay"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group">
                <Icons.WhatsappLogo className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </a>
        </main>
    )
}

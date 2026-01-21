'use client'
import { useState } from 'react'
import { Icons } from './components/Icons'

export default function HomePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }



    return (
        <main>
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
                <div className="container mx-auto px-6 lg:px-12">
                    {/* Mobile: Logo centered only | Desktop: Full navigation */}
                    <div className="flex justify-center md:justify-between items-center h-16 md:h-20">
                        <img src="/logo.svg" alt="BeeStay" className="h-12 md:h-14" />
                        <div className="hidden md:flex items-center gap-8">
                            <a href="#home" className="text-sm text-gray-600 hover:text-bee-gold transition-colors">Início</a>
                            <a href="#recursos" className="text-sm text-gray-600 hover:text-bee-gold transition-colors">Como Funciona</a>
                            <a href="#diferenciais" className="text-sm text-gray-600 hover:text-bee-gold transition-colors">Diferenciais</a>
                            <a href="#contato" className="text-sm text-gray-600 hover:text-bee-gold transition-colors">Contato</a>
                            <a href="#contato" className="bg-bee-black hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg font-semibold transition-all text-sm">
                                Começar Agora
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-8 lg:px-16 bg-gray-50">
                <div className="container mx-auto max-w-7xl">
                    {/* Mobile: Flex column | Desktop: Grid 5 cols */}
                    <div className="flex flex-col lg:grid lg:grid-cols-5 lg:gap-6 items-center overflow-hidden">

                        {/* Title (Mobile: first, Desktop: part of left column) */}
                        <div className="lg:col-span-3 lg:pl-11 text-center lg:text-left w-full order-1">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 lg:mb-6">
                                Seu imóvel merece uma <span className="text-bee-gold">gestão profissional</span>
                            </h1>

                            {/* Desktop only: Description, Button and Checks */}
                            <div className="hidden lg:block">
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                                    Na BeeStay, cuidamos da operação completa de short stay para transformar imóveis em ativos rentáveis, previsíveis e bem avaliados.
                                </p>

                                <div className="flex gap-4 mb-8">
                                    <a href="#contato" className="bg-bee-gold hover:bg-bee-gold-dark text-white px-8 py-4 rounded-lg font-bold transition-all text-center inline-flex items-center justify-center gap-2 shadow-lg">
                                        <Icons.CalendarCheck className="w-5 h-5" />
                                        Quero aumentar minha rentabilidade
                                    </a>
                                </div>

                                <p className="text-sm text-gray-500">✓ Análise gratuita · ✓ Sem compromisso</p>
                            </div>
                        </div>

                        {/* Phone Mockup (Mobile: second, smaller | Desktop: right column) */}
                        <div className="flex justify-center lg:justify-end lg:col-span-2 lg:pr-11 order-2 mt-0 mb-2 lg:my-0 w-full">
                            <div className="phone-mockup">
                                <div className="phone-notch"></div>
                                <div className="phone-screen">
                                    {/* Phone Screen Content */}
                                    <div className="p-3 lg:p-4 h-full flex flex-col bg-linear-to-b from-slate-50 via-white to-slate-50">
                                        {/* App Header */}
                                        <div className="flex justify-between items-center mb-3 lg:mb-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-linear-to-br from-bee-gold to-amber-500 rounded-lg flex items-center justify-center">
                                                    <Icons.House className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                                                </div>
                                                <span className="text-[10px] lg:text-xs font-bold text-gray-900">BeeStay</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <div className="w-5 h-5 lg:w-6 lg:h-6 bg-green-100 rounded-full flex items-center justify-center">
                                                    <Icons.CheckCircle className="w-3 h-3 lg:w-4 lg:h-4 text-green-600" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Main Balance Card */}
                                        <div className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl lg:rounded-2xl p-3 lg:p-4 mb-2 lg:mb-3 shadow-xl">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <div className="text-[8px] lg:text-[10px] text-gray-400 mb-0.5 uppercase tracking-wider">Crescimento Médio</div>
                                                    <div className="text-3xl lg:text-4xl font-black text-white">+51%</div>
                                                </div>
                                                <div className="bg-green-500/20 backdrop-blur-sm rounded-full px-2 py-0.5 flex items-center gap-1">
                                                    <Icons.TrendUp className="w-2 h-2 lg:w-2.5 lg:h-2.5 text-green-400" />
                                                    <span className="text-[8px] lg:text-[10px] text-green-400 font-bold">VS mercado</span>
                                                </div>
                                            </div>
                                            <div className="text-[8px] lg:text-[10px] text-gray-500">Últimos 30 dias</div>
                                        </div>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 gap-1.5 lg:gap-2 mb-2 lg:mb-3">
                                            <div className="bg-white rounded-lg lg:rounded-xl p-2 lg:p-3 shadow-sm border border-gray-100">
                                                <div className="flex items-center gap-1 mb-1">
                                                    <div className="w-4 h-4 lg:w-5 lg:h-5 bg-blue-100 rounded flex items-center justify-center">
                                                        <Icons.CalendarCheck className="w-2 h-2 lg:w-2.5 lg:h-2.5 text-blue-600" />
                                                    </div>
                                                    <span className="text-[7px] lg:text-[9px] text-gray-500 font-medium">Ocupação</span>
                                                </div>
                                                <div className="text-sm lg:text-lg font-black text-gray-900">92%</div>
                                                <div className="text-[7px] lg:text-[8px] text-green-600 font-semibold">+35% vs mercado</div>
                                            </div>
                                            <div className="bg-white rounded-lg lg:rounded-xl p-2 lg:p-3 shadow-sm border border-gray-100">
                                                <div className="flex items-center gap-1 mb-1">
                                                    <div className="w-4 h-4 lg:w-5 lg:h-5 bg-amber-100 rounded flex items-center justify-center">
                                                        <Icons.Star className="w-2 h-2 lg:w-2.5 lg:h-2.5 text-amber-600" />
                                                    </div>
                                                    <span className="text-[7px] lg:text-[9px] text-gray-500 font-medium">Avaliação</span>
                                                </div>
                                                <div className="text-sm lg:text-lg font-black text-gray-900">4.9</div>
                                                <div className="text-[7px] lg:text-[8px] text-gray-500">127 reviews</div>
                                            </div>
                                        </div>

                                        {/* ROI Card */}
                                        <div className="bg-linear-to-br from-bee-gold via-amber-500 to-orange-500 rounded-xl lg:rounded-2xl p-2.5 lg:p-3 flex-1 flex flex-col shadow-lg relative overflow-hidden">
                                            {/* Decorative circles */}
                                            <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/10 rounded-full"></div>
                                            <div className="absolute -right-2 -bottom-6 w-20 h-20 bg-white/5 rounded-full"></div>

                                            <div className="relative z-10">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <div className="text-[8px] lg:text-[9px] text-white/80 uppercase tracking-wider mb-0.5">Retorno sobre Investimento</div>
                                                        <div className="text-xl lg:text-2xl font-black text-white">+51%</div>
                                                    </div>
                                                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-1.5 py-0.5">
                                                        <span className="text-[7px] lg:text-[8px] text-white font-bold">ANO</span>
                                                    </div>
                                                </div>

                                                {/* Mini Chart */}
                                                <div className="flex items-end gap-1 h-10 lg:h-14 mt-1">
                                                    <div className="flex-1 bg-white/40 rounded-sm" style={{ height: '35%' }}></div>
                                                    <div className="flex-1 bg-white/40 rounded-sm" style={{ height: '45%' }}></div>
                                                    <div className="flex-1 bg-white/50 rounded-sm" style={{ height: '55%' }}></div>
                                                    <div className="flex-1 bg-white/50 rounded-sm" style={{ height: '65%' }}></div>
                                                    <div className="flex-1 bg-white/60 rounded-sm" style={{ height: '75%' }}></div>
                                                    <div className="flex-1 bg-white/70 rounded-sm" style={{ height: '85%' }}></div>
                                                    <div className="flex-1 bg-white rounded-sm shadow-sm" style={{ height: '100%' }}></div>
                                                </div>
                                                <div className="flex justify-between mt-1">
                                                    <span className="text-[6px] lg:text-[7px] text-white/60">Jun</span>
                                                    <span className="text-[6px] lg:text-[7px] text-white font-bold">Dez</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile only: Description and Button (after mockup) */}
                        <div className="lg:hidden text-center w-full order-3 mt-2">
                            <p className="text-sm text-gray-600 mb-4 leading-relaxed max-w-md mx-auto">
                                Gestão profissional de <strong>Short Stay</strong> com tecnologia de ponta. Transforme seu imóvel em um negócio rentável <strong>sem preocupações</strong>.
                            </p>

                            <a href="#contato" className="bg-bee-gold hover:bg-bee-gold-dark text-white px-6 py-3 rounded-lg font-bold transition-all text-center inline-flex items-center justify-center gap-2 shadow-lg text-sm">
                                <Icons.CalendarCheck className="w-5 h-5" />
                                Quero aumentar minha rentabilidade
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logo Bar */}
            <section className="py-12 bg-white border-y border-gray-100">
                <div className="container mx-auto px-8 lg:px-16">
                    <div className="logo-scroll-container">
                        <div className="logo-scroll">
                            {/* First set */}
                            <div className="logo-item"><img src="/Airbnb.svg" alt="Airbnb" loading="lazy" width="120" height="40" /></div>
                            <div className="logo-item"><img src="/Booking.svg" alt="Booking" loading="lazy" width="120" height="40" /></div>
                            <div className="logo-item"><img src="/Decolar.svg" alt="Decolar" loading="lazy" width="120" height="40" /></div>
                            <div className="logo-item"><img src="/Expedia.svg" alt="Expedia" loading="lazy" width="120" height="40" /></div>
                            {/* Second set (for seamless loop) */}
                            <div className="logo-item"><img src="/Airbnb.svg" alt="Airbnb" loading="lazy" width="120" height="40" /></div>
                            <div className="logo-item"><img src="/Booking.svg" alt="Booking" loading="lazy" width="120" height="40" /></div>
                            <div className="logo-item"><img src="/Decolar.svg" alt="Decolar" loading="lazy" width="120" height="40" /></div>
                            <div className="logo-item"><img src="/Expedia.svg" alt="Expedia" loading="lazy" width="120" height="40" /></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="recursos" className="py-12 md:py-20 lg:py-24 bg-white">
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

            {/* Diferenciais Section */}
            <section id="diferenciais" className="py-12 md:py-20 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
                    <div className="text-center mb-8 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4">Por Que Escolher a BeeStay?</h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                            Diferenciais que transformam a gestão do seu imóvel
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
                        {/* Diferencial 1 */}
                        <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-10 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100">
                            <div className="w-10 h-10 md:w-14 md:h-14 bg-linear-to-br from-blue-100 to-blue-50 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-6">
                                <Icons.Cpu className="w-5 h-5 md:w-8 md:h-8 text-blue-600" />
                            </div>
                            <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3">Tecnologia de Ponta</h3>
                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                IA e automação para otimizar cada aspecto da gestão do seu imóvel
                            </p>
                        </div>

                        {/* Diferencial 2 */}
                        <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-10 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100">
                            <div className="w-10 h-10 md:w-14 md:h-14 bg-linear-to-br from-green-100 to-green-50 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-6">
                                <Icons.Headset className="w-5 h-5 md:w-8 md:h-8 text-green-600" />
                            </div>
                            <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3">Suporte Dedicado</h3>
                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                Equipe especializada disponível 24/7 para você e seus hóspedes
                            </p>
                        </div>

                        {/* Diferencial 3 */}
                        <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-10 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100">
                            <div className="w-10 h-10 md:w-14 md:h-14 bg-linear-to-br from-purple-100 to-purple-50 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-6">
                                <Icons.Handshake className="w-5 h-5 md:w-8 md:h-8 text-purple-600" />
                            </div>
                            <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3">Contratos Flexíveis</h3>
                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                Contratos com prazo determinado para estabilidade operacional. Cancele com 30 dias de aviso prévio, cumprindo as reservas já realizadas
                            </p>
                        </div>

                        {/* Diferencial 4 */}
                        <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-10 hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100">
                            <div className="w-10 h-10 md:w-14 md:h-14 bg-linear-to-br from-amber-100 to-amber-50 rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-6">
                                <Icons.Trophy className="w-5 h-5 md:w-8 md:h-8 text-amber-600" />
                            </div>
                            <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3">Resultados Comprovados</h3>
                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                +51% de rentabilidade e +35% de ocupação com nossos clientes
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-12 md:py-20 bg-gray-50 relative">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-4xl">
                    <div className="text-center mb-8 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 md:mb-4">Perguntas Frequentes</h2>
                    </div>

                    <div className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
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

            {/* Final CTA Section */}
            <section id="contato" className="py-12 md:py-20 bg-bee-black text-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-5xl">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-center lg:text-left">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 leading-tight">
                                Agende Sua Análise <span className="text-bee-gold">Gratuita</span>
                            </h2>

                            <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 md:mb-8">
                                Descubra o potencial real do seu imóvel em uma consultoria personalizada de 30 minutos. <strong className="text-white">Sem compromisso, apenas dados reais.</strong>
                            </p>
                            <a href="#form" className="hidden lg:inline-flex items-center gap-2 bg-white text-bee-black px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold hover:bg-gray-100 transition-all text-sm md:text-base">
                                Começar Agora
                                <Icons.ArrowRight className="w-5 h-5" />
                            </a>
                        </div>

                        {/* Right Form */}
                        <div id="form" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Não perca o ano atual!</h3>
                            <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
                                Preencha o formulário e receba uma análise gratuita do potencial do seu imóvel
                            </p>

                            {/* Bitrix24 Form Container */}
                            <div
                                data-b24-form="inline/391/tud5rt"
                                data-skip-moving="true"
                                style={{ minHeight: '300px' }}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-100 py-8 md:py-12">
                <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8 max-w-4xl mx-auto">
                        {/* Column 1 */}
                        <div className="text-center">
                            <h4 className="font-bold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Sobre</h4>
                            <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                                <li><a href="#" className="hover:text-bee-gold">Empresa</a></li>
                                <li><a href="#" className="hover:text-bee-gold">Equipe</a></li>
                                <li><a href="#" className="hover:text-bee-gold">Carreiras</a></li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div className="text-center">
                            <h4 className="font-bold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Contato</h4>
                            <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                                <li>(47) 99999-9999</li>
                                <li>contato@beestay.com.br</li>
                                <li className="pt-3 md:pt-4 flex gap-2 md:gap-3 justify-center">
                                    <a href="#" className="w-7 h-7 md:w-8 md:h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-bee-gold hover:text-white transition-all">
                                        <Icons.LinkedinLogo className="w-4 h-4 md:w-5 md:h-5" />
                                    </a>
                                    <a href="#" className="w-7 h-7 md:w-8 md:h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-bee-gold hover:text-white transition-all">
                                        <Icons.FacebookLogo className="w-4 h-4 md:w-5 md:h-5" />
                                    </a>
                                    <a href="#" className="w-7 h-7 md:w-8 md:h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-bee-gold hover:text-white transition-all">
                                        <Icons.YoutubeLogo className="w-4 h-4 md:w-5 md:h-5" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-600">
                        <p>© 2025 BeeStay. Todos os direitos reservados.</p>
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

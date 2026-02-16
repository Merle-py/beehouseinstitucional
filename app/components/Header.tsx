'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    // ScrollSpy effect
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'servicos', 'processo', 'contato']
            const scrollPosition = window.scrollY + 100 // Offset for header height

            for (const sectionId of sections) {
                const section = document.getElementById(sectionId)
                if (section) {
                    const { offsetTop, offsetHeight } = section
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll() // Call once to set initial state

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* Skip to main content - Accessibility */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-bee-gold focus:text-white focus:px-4 focus:py-2 focus:rounded focus:font-semibold focus:shadow-lg"
            >
                Pular para conteúdo principal
            </a>

            {/* Navigation - Sutil e Limpo */}
            <nav className="fixed top-0 w-full z-50 bg-white/98 backdrop-blur-sm border-b border-gray-100" role="navigation" aria-label="Menu principal">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <a href="/" aria-label="BeeStay - Página inicial">
                            <Image src="/logo_preto.svg" alt="BeeStay" width={240} height={64} className="h-15 w-auto" priority />
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-10">
                            <a
                                href="#home"
                                className={`text-sm transition-colors font-medium ${activeSection === 'home' ? 'text-bee-gold' : 'text-text-gray hover:text-bee-gold'
                                    }`}
                            >
                                Início
                            </a>
                            <a
                                href="#servicos"
                                className={`text-sm transition-colors font-medium ${activeSection === 'servicos' ? 'text-bee-gold' : 'text-text-gray hover:text-bee-gold'
                                    }`}
                            >
                                Serviços
                            </a>
                            <a
                                href="#processo"
                                className={`text-sm transition-colors font-medium ${activeSection === 'processo' ? 'text-bee-gold' : 'text-text-gray hover:text-bee-gold'
                                    }`}
                            >
                                Processo
                            </a>
                            <a href="#contato" className="bg-bee-gold hover:bg-bee-gold-dark text-white px-6 py-2.5 rounded font-semibold transition-all text-sm hover:shadow-lg hover:scale-105 active:scale-95">
                                Fale Conosco
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-bee-black z-[70] relative"
                            onClick={toggleMenu}
                            aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            {isMenuOpen ? (
                                // Close Icon (X)
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                // Hamburger Icon
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu - Fullscreen Overlay Modern */}
            <div 
                className={`md:hidden fixed inset-0 bg-white transition-all duration-500 z-[60] ${
                    isMenuOpen 
                        ? 'opacity-100 pointer-events-auto' 
                        : 'opacity-0 pointer-events-none'
                }`}
            >
                {/* Close Button */}
                <button
                    onClick={closeMenu}
                    className="absolute top-6 right-6 text-text-gray hover:text-bee-gold transition-colors p-2"
                    aria-label="Fechar menu"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Menu Content - Right Aligned */}
                <div className="h-full flex flex-col items-end justify-center px-8 pr-12">
                    <nav className="flex flex-col items-end space-y-6 w-full max-w-sm">
                        <a
                            href="#home"
                            className={`text-2xl font-medium transition-all duration-300 ${
                                activeSection === 'home' 
                                    ? 'text-bee-gold scale-110' 
                                    : 'text-text-gray hover:text-bee-gold hover:scale-105'
                            }`}
                            onClick={closeMenu}
                        >
                            Início
                        </a>
                        <a
                            href="#servicos"
                            className={`text-2xl font-medium transition-all duration-300 text-right ${
                                activeSection === 'servicos' 
                                    ? 'text-bee-gold scale-110' 
                                    : 'text-text-gray hover:text-bee-gold hover:scale-105'
                            }`}
                            onClick={closeMenu}
                        >
                            Serviços
                        </a>
                        <a
                            href="#processo"
                            className={`text-2xl font-medium transition-all duration-300 text-right ${
                                activeSection === 'processo' 
                                    ? 'text-bee-gold scale-110' 
                                    : 'text-text-gray hover:text-bee-gold hover:scale-105'
                            }`}
                            onClick={closeMenu}
                        >
                            Processo
                        </a>
                        <a
                            href="#faq"
                            className={`text-2xl font-medium transition-all duration-300 text-right ${
                                activeSection === 'faq' 
                                    ? 'text-bee-gold scale-110' 
                                    : 'text-text-gray hover:text-bee-gold hover:scale-105'
                            }`}
                            onClick={closeMenu}
                        >
                            FAQ
                        </a>
                        
                        <div className="w-16 h-px bg-gray-300 my-4"></div>
                        
                        <a
                            href="/politica-privacidade"
                            className="text-sm text-text-light hover:text-bee-gold transition-colors text-right"
                            onClick={closeMenu}
                        >
                            Política de Privacidade
                        </a>
                        <a
                            href="/termos-uso"
                            className="text-sm text-text-light hover:text-bee-gold transition-colors text-right"
                            onClick={closeMenu}
                        >
                            Termos de Uso
                        </a>
                        
                        <a
                            href="#contato"
                            className="bg-bee-gold hover:bg-bee-gold-dark text-white px-8 py-3 rounded font-bold transition-all text-base mt-6 hover:shadow-xl hover:scale-105 active:scale-95"
                            onClick={closeMenu}
                        >
                            Agendar Consultoria
                        </a>
                    </nav>
                </div>
            </div>
        </>
    )
}
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const basePath = '/teste'
const getImagePath = (path: string) => `${basePath}${path}`

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
            {/* Navigation - Sutil e Limpo */}
            <nav className="fixed top-0 w-full z-50 bg-white/98 backdrop-blur-sm border-b border-gray-100">
                <div className="container mx-auto px-6 lg:px-16">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Image src={getImagePath("/logo_preto.svg")} alt="BeeStay" width={240} height={64} className="h-15 w-auto" priority />

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
                            className="md:hidden text-bee-black"
                            onClick={toggleMenu}
                            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
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

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="md:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto">
                        <div className="flex flex-col p-6 space-y-4">
                            <a
                                href="#home"
                                className={`text-lg transition-colors font-medium py-3 border-b border-gray-100 ${activeSection === 'home' ? 'text-bee-gold' : 'text-text-gray hover:text-bee-gold'
                                    }`}
                                onClick={closeMenu}
                            >
                                Início
                            </a>
                            <a
                                href="#servicos"
                                className={`text-lg transition-colors font-medium py-3 border-b border-gray-100 ${activeSection === 'servicos' ? 'text-bee-gold' : 'text-text-gray hover:text-bee-gold'
                                    }`}
                                onClick={closeMenu}
                            >
                                Serviços
                            </a>
                            <a
                                href="#processo"
                                className={`text-lg transition-colors font-medium py-3 border-b border-gray-100 ${activeSection === 'processo' ? 'text-bee-gold' : 'text-text-gray hover:text-bee-gold'
                                    }`}
                                onClick={closeMenu}
                            >
                                Processo
                            </a>
                            <a
                                href="#contato"
                                className="bg-bee-gold hover:bg-bee-gold-dark text-white px-6 py-3 rounded font-semibold transition-all text-center mt-4 hover:shadow-lg active:scale-95"
                                onClick={closeMenu}
                            >
                                Agendar Consultoria
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}
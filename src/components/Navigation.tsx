'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [bgOpacity, setBgOpacity] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
      setBgOpacity(Math.min(window.scrollY / 100, 0.8))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const menuItems = [
    { name: 'Projetos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Sobre', href: '#about' }
  ]

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 ${
          isScrolled ? 'glass border-b border-white/10' : ''
        }`}
        style={{
          backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-lg sm:text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            Everton Ceciliano
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="ml-4 px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-300"
            >
              Fale Comigo
            </a>
          </div>
        </nav>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/95 lg:hidden"
              style={{ top: '64px' }}
            >
              <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] space-y-6 p-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleMenuClick}
                    className="w-full max-w-sm px-4 py-3 text-center text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 text-lg"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="#contact"
                  onClick={handleMenuClick}
                  className="w-full max-w-sm px-4 py-3 text-center bg-white text-black rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 text-lg"
                >
                  Fale Comigo
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  )
}
 
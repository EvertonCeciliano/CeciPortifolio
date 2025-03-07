'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [bgOpacity, setBgOpacity] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
      setBgOpacity(Math.min(window.scrollY / 100, 0.8))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            Everton Ceciliano
          </Link>
          
          <ul className="flex items-center space-x-1">
            {[
              { name: 'Projetos', href: '#projects' },
              { name: 'Habilidades', href: '#skills' },
              { name: 'Sobre', href: '#about' }
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="ml-4">
              <a
                href="#contact"
                className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-300"
              >
                Fale Comigo
              </a>
            </li>
          </ul>
        </nav>
      </motion.div>
    </AnimatePresence>
  )
}
 
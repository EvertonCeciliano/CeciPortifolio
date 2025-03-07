import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden px-4 py-16 sm:py-0">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-purple-500/30 rounded-full blur-[80px] sm:blur-[120px]" />
      </div>
      
      <div className="relative z-10 text-center space-y-6 sm:space-y-8 max-w-7xl mx-auto">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight gradient-text px-4"
        >
          Everton Ceciliano
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto px-4"
        >
          Desenvolvedor Front-end • React.js & React Native
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-3 sm:gap-4 justify-center items-center flex-wrap px-4"
        >
          <a href="#about" className="button text-sm sm:text-base">
            Sobre
          </a>
          <a href="#projects" className="button text-sm sm:text-base">
            Projetos
          </a>
          <a href="#skills" className="button text-sm sm:text-base">
            Skills
          </a>
          <a href="https://github.com/EvertonCeciliano" target="_blank" rel="noopener noreferrer" className="button-outline flex items-center gap-2 text-sm sm:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg 
          className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
} 
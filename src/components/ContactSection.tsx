import { motion } from 'framer-motion'

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 px-4 relative">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-purple-500/30 rounded-full blur-[80px] sm:blur-[120px]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16 gradient-text text-center"
        >
          Contato
        </motion.h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto"
        >
          <a 
            href="https://wa.me/5514998780481" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card group hover:bg-zinc-800/50 hover:scale-105 transition-all duration-300"
          >
            <div className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <h3 className="text-lg sm:text-xl font-bold text-center">WhatsApp</h3>
              <p className="text-sm sm:text-base text-gray-400 text-center">(14) 99878-0481</p>
            </div>
          </a>

          <a 
            href="https://www.linkedin.com/in/evertonceciliano" 
            target="_blank" 
            rel="noopener noreferrer"
            className="card group hover:bg-zinc-800/50 hover:scale-105 transition-all duration-300"
          >
            <div className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <h3 className="text-lg sm:text-xl font-bold text-center">LinkedIn</h3>
              <p className="text-sm sm:text-base text-gray-400 text-center">Everton Ceciliano</p>
            </div>
          </a>

          <a 
            href="mailto:evertoncecilianosouza@gmail.com"
            className="card group hover:bg-zinc-800/50 hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1"
          >
            <div className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <h3 className="text-lg sm:text-xl font-bold text-center">Email</h3>
              <p className="text-sm sm:text-base text-gray-400 text-center break-all">evertoncecilianosouza@gmail.com</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
} 
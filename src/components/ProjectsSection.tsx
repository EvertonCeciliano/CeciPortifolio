import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.8], [0, 1, 1, 0])
  const titleY = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.8], [100, 0, 0, -100])
  
  const projectsOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.4, 0.9], [0, 1, 1, 0])
  const projectsY = useTransform(scrollYProgress, [0.1, 0.3, 0.4, 0.9], [100, 0, 0, -100])

  return (
    <section ref={sectionRef} id="projects" className="py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          style={{ opacity: titleOpacity, y: titleY }}
          className="text-4xl md:text-5xl font-bold mb-12 gradient-text"
        >
          Projetos em Destaque
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{ opacity: projectsOpacity, y: projectsY }}
        >
          {[
            {
              title: "Furniro - E-commerce de Móveis",
              description: "E-commerce completo desenvolvido com Next.js, TypeScript e Tailwind CSS. Sistema de carrinho, catálogo de produtos e checkout integrado.",
              image: "/furniro.png",
              link: "https://vercel.com/evertoncecilianos-projects/funiro"
            },
            {
              title: "Weather App",
              description: "Aplicação de previsão do tempo com geolocalização, desenvolvida com React e integração com APIs de clima em tempo real.",
              image: "/weather.png",
              link: "https://weather-app-nine-black.vercel.app"
            }
          ].map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="card group cursor-pointer"
            >
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 
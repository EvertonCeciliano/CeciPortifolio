import { motion } from 'framer-motion'

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 px-4 relative">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/2 right-0 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-blue-500/30 rounded-full blur-[80px] sm:blur-[120px]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16 gradient-text text-center sm:text-left"
        >
          Habilidades & Tecnologias
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Front-end Core",
              skills: [
                { name: "React.js", level: "Avançado" },
                { name: "Next.js", level: "Avançado" },
                { name: "TypeScript", level: "Avançado" },
                { name: "JavaScript (ES6+)", level: "Avançado" }
              ]
            },
            {
              title: "Estilização & UI",
              skills: [
                { name: "Tailwind CSS", level: "Avançado" },
                { name: "Styled Components", level: "Intermediário" },
                { name: "CSS3/SASS", level: "Avançado" },
                { name: "UI/UX Design", level: "Intermediário" }
              ]
            },
            {
              title: "Mobile & Cloud",
              skills: [
                { name: "React Native", level: "Intermediário" },
                { name: "AWS Cloud", level: "Certificado" },
                { name: "REST APIs", level: "Avançado" },
                { name: "Git/GitHub", level: "Avançado" }
              ]
            }
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{category.title}</h3>
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-sm sm:text-base text-gray-300">{skill.name}</span>
                    <span className="text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full bg-purple-500/10 text-purple-300">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
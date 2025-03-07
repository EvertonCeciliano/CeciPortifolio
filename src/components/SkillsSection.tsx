import { motion } from 'framer-motion'

export function SkillsSection() {
  return (
    <section id="skills" className="py-32 px-4 relative">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text"
        >
          Habilidades & Tecnologias
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              className="card"
            >
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-sm px-3 py-1 rounded-full bg-purple-500/10 text-purple-300">
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
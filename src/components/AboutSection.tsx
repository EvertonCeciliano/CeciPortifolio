import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px]" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text"
        >
          Sobre Mim
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <div className="card">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Hey! 👋</h3>
              <div className="space-y-8">
                <div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Sou desenvolvedor front-end júnior apaixonado por criar experiências digitais incríveis. 
                    Em minha jornada profissional, tive a oportunidade de trabalhar na Compass UOL 
                    como desenvolvedor front-end no projeto da Natura, onde participei do desenvolvimento de 
                    soluções e-commerce com React.js e Next.js.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-purple-300 mb-3">🚀 O que eu faço</h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Atualmente, trabalho como desenvolvedor front-end júnior freelancer, criando aplicações web e mobile. 
                    Meu foco é desenvolver interfaces modernas e responsivas que não só parecem ótimas, mas também 
                    proporcionam uma experiência incrível para os usuários. Tenho sólidos conhecimentos em React.js, 
                    Next.js e TypeScript, e também me aventuro no desenvolvimento mobile com React Native.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-purple-300 mb-3">💡 Minha visão</h4>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Como desenvolvedor em início de carreira, acredito que a tecnologia deve ser acessível e intuitiva. 
                    Por isso, busco sempre criar soluções que façam a diferença na vida das pessoas, enquanto continuo 
                    me desenvolvendo e aprendendo novas tecnologias para entregar resultados cada vez melhores.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="text-xl font-bold mb-4">📚 Formação</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-purple-300 font-medium">Análise e Desenvolvimento de Sistemas</p>
                  <p className="text-gray-400">FATEC Botucatu</p>
                  <p className="text-gray-500 text-sm">Em andamento</p>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4">🏆 Certificações</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-purple-300 font-medium">AWS Cloud Practitioner</p>
                    <p className="text-gray-400">Amazon Web Services</p>
                    <p className="text-gray-500 text-sm">CLF-C02</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-purple-300 font-medium">TOEIC English</p>
                    <p className="text-gray-400">Nível B1 - Intermediário</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4">📍 Localização</h3>
              <div className="space-y-2">
                <p className="text-gray-300">Botucatu, SP</p>
                <p className="text-gray-400">Disponível para trabalho remoto</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
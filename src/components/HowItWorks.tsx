import { motion } from 'framer-motion'
import { Phone, Wrench, Database, GraduationCap, HeartHandshake } from 'lucide-react'
import { Section } from './ui'

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Discovery Call',
    description: "We learn your agency's unique processes, pain points, and goals.",
  },
  {
    icon: Wrench,
    number: '02',
    title: 'Custom Build',
    description: 'We implement and configure your entire system to match your workflow.',
  },
  {
    icon: Database,
    number: '03',
    title: 'Data Migration',
    description: 'We move your existing data seamlessly — no disruption to operations.',
  },
  {
    icon: GraduationCap,
    number: '04',
    title: 'Team Training',
    description: 'We train your team to maximize value and ensure confident adoption.',
  },
  {
    icon: HeartHandshake,
    number: '05',
    title: 'Ongoing Support',
    description: 'We maintain and evolve your system as your agency grows.',
  },
]

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          How It Works
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          A white-glove experience from start to finish. You focus on your clients — we handle the rest.
        </p>
      </motion.div>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-primary-500 to-primary-600 hidden md:block" />
        
        <div className="space-y-12 md:space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center md:items-start gap-6 md:gap-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Step content */}
              <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className={`inline-block ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                  <div className="flex items-center gap-4 mb-3">
                    {index % 2 !== 0 && (
                      <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center md:hidden">
                        <step.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                    )}
                    <span className="text-4xl font-bold text-primary-400/30 dark:text-primary-500/30 font-mono">
                      {step.number}
                    </span>
                    {index % 2 === 0 && (
                      <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center md:hidden">
                        <step.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 max-w-sm">
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Timeline dot - desktop */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white dark:bg-slate-800 border-4 border-primary-400 items-center justify-center shadow-lg z-10">
                <step.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              
              {/* Empty space for other side */}
              <div className="hidden md:block flex-1 md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}


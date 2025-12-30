import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { Section, GlassCard } from './ui'

const faqs = [
  {
    question: 'How long does implementation take?',
    answer: 'Typically 2-4 weeks depending on complexity and data migration needs. We work efficiently while ensuring everything is configured perfectly for your workflow.',
  },
  {
    question: 'Do I need technical knowledge?',
    answer: "None at all. We handle all technical setup, configuration, and integration. You'll receive comprehensive training so you and your team can use the system confidently from day one.",
  },
  {
    question: 'What integrations are included?',
    answer: 'Gmail, Google Calendar, and more come standard. We can add custom integrations based on your specific needs — just let us know what tools you currently use.',
  },
  {
    question: 'How is the system customized?',
    answer: "We configure everything to match your business's specific processes, terminology, and workflow. This isn't a one-size-fits-all solution — it's built around how you actually work.",
  },
  {
    question: 'What ongoing support is included?',
    answer: 'Dedicated support, regular check-ins, and continuous improvements based on your feedback. As your business evolves, your Shorebird system evolves with you.',
  },
  {
    question: 'Can I see a demo?',
    answer: 'Absolutely! Book a discovery call and we\'ll walk you through everything. We\'ll show you exactly how Shorebird would work for your specific business setup.',
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <GlassCard className="overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-semibold text-slate-900 dark:text-white pr-4">
          {question}
        </span>
        <div className={`
          flex-shrink-0 w-8 h-8 rounded-lg
          flex items-center justify-center
          transition-colors duration-200
          ${isOpen 
            ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400' 
            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
          }
        `}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-6 pb-6 text-slate-600 dark:text-slate-300">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  return (
    <Section id="faq" variant="gradient">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Everything you need to know about getting started with Shorebird.
        </p>
      </motion.div>
      
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <FAQItem
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

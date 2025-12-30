import { motion } from 'framer-motion'
import { Clock, Eye, Receipt, Lock } from 'lucide-react'
import { Section, GlassCard } from './ui'

const results = [
  {
    icon: Clock,
    metric: '10+',
    unit: 'hours/week',
    label: 'Saved on admin',
    description: 'Automation handles the repetitive work so you can focus on jobs and customers.',
  },
  {
    icon: Eye,
    metric: '100%',
    unit: 'visibility',
    label: 'Job status',
    description: 'Always know exactly where every job stands at a glance.',
  },
  {
    icon: Receipt,
    metric: 'Zero',
    unit: 'missed',
    label: 'Invoices or follow-ups',
    description: 'Automated reminders and tracking ensure nothing falls through the cracks.',
  },
  {
    icon: Lock,
    metric: 'One',
    unit: 'login',
    label: 'For everything',
    description: 'Single source of truth for your entire operation.',
  },
]

export function Results() {
  return (
    <Section variant="gradient">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          What You'll Gain
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Real results from businesses running on Shorebird.
        </p>
      </motion.div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {results.map((result, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <GlassCard hover glow className="p-6 h-full text-center">
              <div className="w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mx-auto mb-4">
                <result.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="mb-2">
                <span className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                  {result.metric}
                </span>
                <span className="text-lg text-slate-500 dark:text-slate-400 ml-1">
                  {result.unit}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {result.label}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {result.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

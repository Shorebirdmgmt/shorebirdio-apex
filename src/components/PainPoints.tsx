import { motion } from 'framer-motion'
import { Unplug, RefreshCw, TrendingDown, Eye } from 'lucide-react'
import { Section, GlassCard } from './ui'

const painPoints = [
  {
    icon: Unplug,
    title: "Your tools don't talk to each other",
    description: "Estimates in one app, scheduling in another, invoicing somewhere else. Customer info scattered across texts, emails, and sticky notes.",
  },
  {
    icon: RefreshCw,
    title: "You're drowning in paperwork and follow-ups",
    description: "Chasing down payments, manually sending reminders, updating spreadsheets between jobs. Hours lost every week.",
  },
  {
    icon: TrendingDown,
    title: "Jobs and revenue slip through the cracks",
    description: "Missed follow-ups, forgotten estimates, unbilled work. Money left on the table every month.",
  },
  {
    icon: Eye,
    title: "You can't see your business at a glance",
    description: "No single source of truth. You're always digging through apps and messages to find answers.",
  },
]

export function PainPoints() {
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
          Sound Familiar?
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          If you're running a contracting or service business, you've probably felt these frustrations.
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {painPoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlassCard hover className="p-6 h-full">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                  <point.icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {point.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

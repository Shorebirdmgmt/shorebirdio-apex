import { motion } from 'framer-motion'
import { 
  Users, FolderKanban, Mail, Calendar, 
  MessageSquare, BarChart3, DollarSign, Zap 
} from 'lucide-react'
import { Section, GlassCard } from './ui'

const features = [
  {
    icon: Users,
    title: 'Customer Management',
    description: 'Track all customers, properties, job history, and contact info in one central hub.',
  },
  {
    icon: FolderKanban,
    title: 'Job Tracking',
    description: 'Estimates, work orders, tasks, and deadlines — all organized and visible at a glance.',
  },
  {
    icon: Mail,
    title: 'Unified Inbox',
    description: 'Gmail integration with team visibility. Never miss an important message from a customer.',
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Sync with Google Calendar and schedule crews directly to jobs.',
  },
  {
    icon: MessageSquare,
    title: 'Team Messenger',
    description: 'Internal chat tied to jobs — keep your crew in the loop without endless texts.',
  },
  {
    icon: BarChart3,
    title: 'Sales Pipeline',
    description: 'Lead tracking, estimate follow-ups, and pipeline visibility to close more deals.',
  },
  {
    icon: DollarSign,
    title: 'Invoicing & Payments',
    description: 'Send invoices, track payments, and manage expenses — all in one view.',
  },
  {
    icon: Zap,
    title: 'Custom Automation',
    description: 'Workflows tailored to your process — automatic reminders, follow-ups, and more.',
  },
]

export function Features() {
  return (
    <Section id="features" variant="gradient">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Everything You Need, Nothing You Don't
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          A complete operating system built for contractors, trades, and service businesses.
        </p>
      </motion.div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <GlassCard hover glow className="p-6 h-full group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {feature.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

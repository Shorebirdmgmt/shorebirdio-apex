import { motion } from 'framer-motion'
import { 
  Users, FolderKanban, Mail, Calendar, 
  MessageSquare, BarChart3, DollarSign, Zap 
} from 'lucide-react'
import { Section } from './ui'

const modules = [
  { icon: Users, label: 'Customers', color: 'from-blue-500 to-blue-600' },
  { icon: FolderKanban, label: 'Jobs', color: 'from-purple-500 to-purple-600' },
  { icon: Mail, label: 'Inbox', color: 'from-green-500 to-green-600' },
  { icon: Calendar, label: 'Schedule', color: 'from-orange-500 to-orange-600' },
  { icon: MessageSquare, label: 'Chat', color: 'from-pink-500 to-pink-600' },
  { icon: BarChart3, label: 'Pipeline', color: 'from-cyan-500 to-cyan-600' },
  { icon: DollarSign, label: 'Invoicing', color: 'from-emerald-500 to-emerald-600' },
  { icon: Zap, label: 'Automation', color: 'from-amber-500 to-amber-600' },
]

export function Solution() {
  return (
    <Section>
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            One System.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Everything Connected.
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Shorebird brings all your business operations into a single, unified platform — 
            custom-built for how you work.
          </p>
        </motion.div>
      </div>
      
      {/* Hub Diagram */}
      <div className="relative max-w-4xl mx-auto">
        {/* Center Hub */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-2xl shadow-primary-500/30"
        >
          <div className="text-center text-white">
            <div className="text-2xl sm:text-3xl font-bold">S</div>
            <div className="text-xs sm:text-sm font-medium opacity-80">Shorebird</div>
          </div>
        </motion.div>
        
        {/* Module Ring */}
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-4 sm:gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="group"
            >
              <div className="flex flex-col items-center gap-2">
                <div className={`
                  w-14 h-14 sm:w-16 sm:h-16 rounded-2xl 
                  bg-gradient-to-br ${module.color}
                  flex items-center justify-center
                  shadow-lg group-hover:shadow-xl
                  transition-all duration-300 group-hover:-translate-y-1
                `}>
                  <module.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                  {module.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Connection Lines (decorative) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-30 dark:opacity-20"
          viewBox="0 0 400 300"
          fill="none"
        >
          <circle cx="200" cy="80" r="120" stroke="url(#hubGradient)" strokeWidth="1" strokeDasharray="4 4" />
          <defs>
            <linearGradient id="hubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#72b7c7" />
              <stop offset="100%" stopColor="#5a9fad" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Done-for-you emphasis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary-50 dark:bg-primary-950/50 border border-primary-200 dark:border-primary-800">
          <Zap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
          <span className="text-primary-700 dark:text-primary-300 font-medium">
            100% done-for-you — we build, configure, and support your entire system
          </span>
        </div>
      </motion.div>
    </Section>
  )
}

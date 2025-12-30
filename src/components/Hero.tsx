import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from './ui'

interface HeroProps {
  onBookCall: () => void
}

export function Hero({ onBookCall }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 dot-pattern" />
      
      {/* Animated Gradient Orbs */}
      <div className="gradient-orb gradient-orb-1" />
      <div className="gradient-orb gradient-orb-2" />
      
      {/* Flowing Lines SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 dark:opacity-10"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          d="M-100 400 Q 360 200, 720 400 T 1540 400"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.path
          d="M-100 500 Q 360 700, 720 500 T 1540 500"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        />
        <motion.path
          d="M-100 300 Q 360 100, 720 300 T 1540 300"
          stroke="url(#gradient2)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#72b7c7" stopOpacity="0" />
            <stop offset="50%" stopColor="#72b7c7" />
            <stop offset="100%" stopColor="#72b7c7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5a9fad" stopOpacity="0" />
            <stop offset="50%" stopColor="#5a9fad" />
            <stop offset="100%" stopColor="#5a9fad" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            Done-for-you agency management
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight"
        >
          Your Agency,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
            Automated.
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10"
        >
          Stop juggling 10 different tools. Get a unified, done-for-you system 
          that runs your entire agency — clients, projects, finances, and team communication in one place.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" onClick={onBookCall} className="group">
            Book a Discovery Call
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="ghost" size="lg" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
            <Play className="mr-2 h-5 w-5" />
            See How It Works
          </Button>
        </motion.div>
        
        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Trusted by forward-thinking agencies
          </p>
          <div className="flex items-center justify-center gap-8 opacity-50">
            <div className="h-8 w-24 bg-slate-300 dark:bg-slate-700 rounded" />
            <div className="h-8 w-28 bg-slate-300 dark:bg-slate-700 rounded" />
            <div className="h-8 w-20 bg-slate-300 dark:bg-slate-700 rounded hidden sm:block" />
            <div className="h-8 w-24 bg-slate-300 dark:bg-slate-700 rounded hidden md:block" />
          </div>
        </motion.div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-900 to-transparent" />
    </section>
  )
}


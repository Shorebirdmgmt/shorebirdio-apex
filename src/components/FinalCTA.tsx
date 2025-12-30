import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from './ui'

interface FinalCTAProps {
  calendlyUrl: string
  onBookCall: () => void
}

export function FinalCTA({ calendlyUrl, onBookCall }: FinalCTAProps) {
  const calendlyRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // Load Calendly widget if not using popup
    if (calendlyRef.current && calendlyUrl) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.body.appendChild(script)
      
      return () => {
        document.body.removeChild(script)
      }
    }
  }, [calendlyUrl])
  
  return (
    <section id="cta" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      {/* Animated orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/20 rounded-full filter blur-3xl animate-float-delayed" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Free discovery call
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500">
                Your Business?
              </span>
            </h2>
            
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
              Book a free discovery call and see how Shorebird can streamline your operations. 
              No pressure, no commitment — just a conversation about what's possible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={onBookCall} className="group">
                Book Your Discovery Call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Free consultation
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                No obligation
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                30 min call
              </div>
            </div>
          </motion.div>
          
          {/* Right: Calendly Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 p-2">
              <div
                ref={calendlyRef}
                className="calendly-inline-widget rounded-xl overflow-hidden"
                data-url={calendlyUrl}
                style={{ minWidth: '320px', height: '600px' }}
              />
              
              {/* Fallback if Calendly doesn't load */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-800/50 backdrop-blur-sm rounded-xl calendly-loading" style={{ display: 'none' }}>
                <div className="text-center">
                  <p className="text-white mb-4">Loading calendar...</p>
                  <Button onClick={onBookCall}>
                    Open Booking Page
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-3xl blur-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

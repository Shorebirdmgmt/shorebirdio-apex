import { HTMLAttributes, forwardRef } from 'react'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  glow?: boolean
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className = '', hover = false, glow = false, children, ...props }, ref) => {
    const baseStyles = 'rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/30 dark:border-white/10'
    
    const hoverStyles = hover 
      ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary-300/50 dark:hover:border-primary-500/30' 
      : ''
    
    const glowStyles = glow
      ? 'shadow-[0_0_20px_rgba(114,183,199,0.15)] hover:shadow-[0_0_30px_rgba(114,183,199,0.25)]'
      : 'shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50'
    
    return (
      <div
        ref={ref}
        className={`${baseStyles} ${hoverStyles} ${glowStyles} ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
)

GlassCard.displayName = 'GlassCard'


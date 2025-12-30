import { HTMLAttributes, forwardRef } from 'react'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'gradient' | 'dark'
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className = '', variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-white dark:bg-slate-900',
      gradient: 'bg-gradient-to-br from-slate-50 to-primary-50/30 dark:from-slate-900 dark:to-primary-950/30',
      dark: 'bg-slate-900 dark:bg-slate-950',
    }
    
    return (
      <section
        ref={ref}
        className={`py-20 md:py-28 ${variants[variant]} ${className}`}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>
    )
  }
)

Section.displayName = 'Section'


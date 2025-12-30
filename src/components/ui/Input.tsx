import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', icon, ...props }, ref) => {
    return (
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={`
            w-full px-4 py-3 rounded-xl
            bg-white dark:bg-slate-800
            border border-slate-200 dark:border-slate-700
            text-slate-900 dark:text-slate-100
            placeholder:text-slate-400 dark:placeholder:text-slate-500
            focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent
            transition-all duration-200
            ${icon ? 'pl-12' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
    )
  }
)

Input.displayName = 'Input'


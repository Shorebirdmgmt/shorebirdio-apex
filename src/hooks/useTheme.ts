import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark' | 'system'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'system'
    return (localStorage.getItem('theme') as Theme) || 'system'
  })
  
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')
  
  useEffect(() => {
    const root = document.documentElement
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    const resolved = theme === 'system' 
      ? (systemDark ? 'dark' : 'light')
      : theme
    
    setResolvedTheme(resolved)
    root.classList.toggle('dark', resolved === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])
  
  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = () => {
      if (theme === 'system') {
        const resolved = mediaQuery.matches ? 'dark' : 'light'
        setResolvedTheme(resolved)
        document.documentElement.classList.toggle('dark', resolved === 'dark')
      }
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])
  
  return { theme, setTheme, resolvedTheme }
}


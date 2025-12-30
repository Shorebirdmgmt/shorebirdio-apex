import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui'
import { ThemeToggle } from './ThemeToggle'

type Theme = 'light' | 'dark' | 'system'

interface NavbarProps {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'light' | 'dark'
  onBookCall: () => void
}

export function Navbar({ theme, setTheme, resolvedTheme, onBookCall }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#faq', label: 'FAQ' },
    { href: '#lookup', label: 'Client Login' },
  ]
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img 
              src={resolvedTheme === 'dark' 
                ? '/shorebird-logo-vectorize-bg.svg' 
                : '/shorebird-logo-vectorize.svg'
              }
              alt="Shorebird"
              className="h-9 md:h-10"
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <Button onClick={onBookCall} size="sm">
              Book a Call
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass border-t border-white/20 dark:border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex items-center justify-between">
              <ThemeToggle theme={theme} setTheme={setTheme} />
              <Button onClick={() => { onBookCall(); setMobileMenuOpen(false) }} size="sm">
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}


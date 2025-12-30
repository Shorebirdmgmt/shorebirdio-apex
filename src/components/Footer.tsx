import { Linkedin, Twitter } from 'lucide-react'

interface FooterProps {
  resolvedTheme: 'light' | 'dark'
}

export function Footer({ resolvedTheme }: FooterProps) {
  const currentYear = new Date().getFullYear()
  
  const links = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ]
  
  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/shorebirdmanagement', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/shorebirdmgmt', label: 'Twitter' },
  ]
  
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className={resolvedTheme === 'dark' ? 'rounded-full p-1.5 bg-white/10' : ''}>
              <img 
                src={resolvedTheme === 'dark' 
                  ? '/shorebird-logo-vectorize-bg.svg' 
                  : '/shorebird-logo-vectorize-bg.svg'
                }
                alt="Shorebird"
                className={`h-8 ${resolvedTheme === 'dark' ? 'rounded-full' : ''}`}
              />
            </div>
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a 
              href="https://shorebirdmanagement.com" 
              className="text-slate-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              shorebirdmanagement.com
            </a>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-sm text-slate-500">
            © {currentYear} Shorebird Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


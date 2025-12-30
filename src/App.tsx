import { useCallback } from 'react'
import { useTheme } from './hooks/useTheme'
import {
  Navbar,
  Hero,
  PainPoints,
  Solution,
  Features,
  HowItWorks,
  Results,
  OrgLookup,
  FAQ,
  FinalCTA,
  Footer,
} from './components'

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/shorebird/discovery'

function App() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  
  const openCalendly = useCallback(() => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: CALENDLY_URL,
      })
    } else {
      // Fallback: open in new tab
      window.open(CALENDLY_URL, '_blank')
    }
  }, [])
  
  return (
    <div className={`min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-300`}>
      <Navbar
        theme={theme}
        setTheme={setTheme}
        resolvedTheme={resolvedTheme}
        onBookCall={openCalendly}
      />
      
      <main>
        <Hero onBookCall={openCalendly} />
        <PainPoints />
        <Solution />
        <Features />
        <HowItWorks />
        <Results />
        <OrgLookup />
        <FAQ />
        <FinalCTA calendlyUrl={CALENDLY_URL} onBookCall={openCalendly} />
      </main>
      
      <Footer resolvedTheme={resolvedTheme} />
    </div>
  )
}

export default App


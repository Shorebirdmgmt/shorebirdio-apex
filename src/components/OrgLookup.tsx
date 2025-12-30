import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Search, ExternalLink, Building2, Loader2 } from 'lucide-react'
import { Section, GlassCard, Input, Button } from './ui'
import { searchOrgs, getWorkspaceUrl, type Org } from '../lib/supabase'

export function OrgLookup() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Org[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  
  const handleSearch = useCallback(async (value: string) => {
    setQuery(value)
    
    if (value.length < 2) {
      setResults([])
      setHasSearched(false)
      return
    }
    
    setIsLoading(true)
    setHasSearched(true)
    
    try {
      const orgs = await searchOrgs(value)
      setResults(orgs)
    } catch (error) {
      console.error('Search error:', error)
      setResults([])
    } finally {
      setIsLoading(false)
    }
  }, [])
  
  const goToWorkspace = (slug: string) => {
    window.open(getWorkspaceUrl(slug), '_blank')
  }
  
  return (
    <Section id="lookup">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mx-auto mb-6">
          <Building2 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Already Have an Account?
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
          Find your workspace and log in to your Shorebird dashboard.
        </p>
        
        <GlassCard className="p-6">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search by company name..."
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              icon={isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
              className="text-lg"
            />
          </div>
          
          {/* Results */}
          {hasSearched && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4"
            >
              {results.length > 0 ? (
                <div className="space-y-2">
                  {results.map((org) => (
                    <motion.div
                      key={org.slug}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-slate-900 dark:text-white">
                            {org.name}
                          </p>
                          <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">
                            {org.slug}.shorebird.io
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => goToWorkspace(org.slug)}
                      >
                        Go to Workspace
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </Button>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center">
                  <p className="text-slate-500 dark:text-slate-400">
                    No workspaces found matching "{query}"
                  </p>
                  <p className="text-sm text-slate-400 dark:text-slate-500 mt-2">
                    If you're new, <a href="#cta" className="text-primary-600 dark:text-primary-400 hover:underline">book a discovery call</a> to get started.
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </GlassCard>
      </motion.div>
    </Section>
  )
}


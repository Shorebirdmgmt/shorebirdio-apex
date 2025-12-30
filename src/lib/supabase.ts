import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface Org {
  slug: string
  name: string
}

export async function searchOrgs(query: string): Promise<Org[]> {
  if (!query || query.length < 2) return []
  
  try {
    const { data, error } = await supabase
      .from('orgs')
      .select('slug, name')
      .ilike('name', `%${query}%`)
      .limit(5)
    
    if (error) {
      console.error('Error searching orgs:', error)
      return []
    }
    
    return data || []
  } catch (err) {
    console.error('Error searching orgs:', err)
    return []
  }
}

export function getWorkspaceUrl(slug: string): string {
  const baseDomain = import.meta.env.VITE_BASE_DOMAIN || 'shorebird.io'
  return `https://${slug}.${baseDomain}`
}


// Fallback type definitions for external modules
declare module '@supabase/supabase-js' {
  export function createClient(supabaseUrl: string, supabaseKey: string, options?: any): any
  export interface SupabaseClient {
    from(table: string): any
    [key: string]: any
  }
}

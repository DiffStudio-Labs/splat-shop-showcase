
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://YOUR_SUPABASE_URL.supabase.co';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseKey);

// Function to add an email to the waitlist
export async function addToWaitlist(email: string, source: string = 'main') {
  try {
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        { email, source, created_at: new Date().toISOString() }
      ]);
    
    if (error) throw error;
    
    return { success: true, data };
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return { success: false, error };
  }
}

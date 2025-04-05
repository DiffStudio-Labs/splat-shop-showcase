
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lzgnujlvtrfdaggdkjbc.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseKey);

// Function to add an email to the waitlist
export async function addToWaitlist(email: string, source: string = 'main') {
  try {
    // Basic email validation before sending to Supabase
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: 'Invalid email format' };
    }
    
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        { email, source, created_at: new Date().toISOString() }
      ]);
    
    if (error) {
      // Check specifically for duplicate email error (unique constraint violation)
      if (error.code === '23505') {
        // This is a duplicate email - return success but with a different message
        return { 
          success: true, 
          data: null, 
          message: 'You\'re already on our waitlist! We\'ll notify you when we launch.' 
        };
      }
      throw error;
    }
    
    return { success: true, data };
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return { success: false, error };
  }
}


import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lzgnujlvtrfdaggdkjbc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6Z251amx2dHJmZGFnZ2RramJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4MzA1NTksImV4cCI6MjA1OTQwNjU1OX0._RxFN8C6HljpA-YHt5CUS4xIJijJPYaNluxuCUiDPtQ';

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseKey);

// Function to add an email to the waitlist
export async function addToWaitlist(
  email: string, 
  name: string, 
  company: string,
  message?: string,
  source: string = 'main'
) {
  try {
    // Basic email validation before sending to Supabase
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: 'Invalid email format' };
    }
    
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        { 
          email, 
          name,
          company,
          message,
          source
        }
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

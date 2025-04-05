
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lzgnujlvtrfdaggdkjbc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6Z251amx2dHJmZGFnZ2RramJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4MzA1NTksImV4cCI6MjA1OTQwNjU1OX0._RxFN8C6HljpA-YHt5CUS4xIJijJPYaNluxuCUiDPtQ';

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

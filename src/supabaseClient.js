import {createClient} from '@supabase/supabase-js';
// env file
const supabaseUrl = "https://nlyccuuybuhzparldtfu.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5seWNjdXV5YnVoenBhcmxkdGZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5ODcyNjgsImV4cCI6MjAxMzU2MzI2OH0.2zayX9T7T9X84MsWl1U5b46HIgIamBVtbVY4-TOY6MY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

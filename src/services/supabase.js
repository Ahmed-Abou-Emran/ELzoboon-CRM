import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://segaxqxpoqqejucagzhk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNlZ2F4cXhwb3FxZWp1Y2FnemhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY5MjA1MTksImV4cCI6MjAwMjQ5NjUxOX0.zsCeB368uKmJYCmX8L50ExNSwDtH7OToD4R9Xeo6QuQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

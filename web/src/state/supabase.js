import { createClient } from "@supabase/supabase-js";
import config from "../../config";

export const supabase = createClient(
  config.supabase.url,
  config.supabase.anon_key,
  {
    auth: {
      storage: localStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);
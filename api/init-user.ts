import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export async function handler(req, res) {
  const { user_id, display_name } = req.body

  const { data, error } = await supabase
    .from('profiles')
    .insert([{ id: user_id, display_name, role: 'rendar', xp: 0 }])

  if (error) return res.status(500).json({ error })
  res.status(200).json({ success: true, data })
}

import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export async function handler(req, res) {
  const { user_id, amount, reason } = req.body

  const { data, error } = await supabase.from('tokens').insert([
    { user_id, amount, reason }
  ])

  if (error) return res.status(500).json({ error })
  res.status(200).json({ message: 'Tokens claimed', data })
}

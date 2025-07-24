import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export async function handler(req, res) {
  const { user_id, value, type } = req.body

  const { data, error } = await supabase.from('vault_log').insert([
    { user_id, value, action: 'burn' }
  ])

  if (error) return res.status(500).json({ error })

  await supabase.from('events').insert([
    { user_id, type, detail: { value } }
  ])

  res.status(200).json({ burned: true })
}

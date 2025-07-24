export async function handler(req, res) {
  res.status(200).json({
    shares: {
      user: 75,
      chaos: 15,
      vault: 10
    }
  })
}

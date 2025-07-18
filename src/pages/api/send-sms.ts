// import { NextApiRequest, NextApiResponse } from 'next'
// import twilio from 'twilio'

// const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH)

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') return res.status(405).end()

//   const { to, message } = req.body

//   try {
//     const msg = await client.messages.create({
//       body: message,
//       from: process.env.TWILIO_PHONE,
//       to,
//     })

//     res.status(200).json({ success: true, sid: msg.sid })
//   } catch (err: any) {
//     console.error(err.message)
//     res.status(500).json({ success: false, error: err.message })
//   }
// }

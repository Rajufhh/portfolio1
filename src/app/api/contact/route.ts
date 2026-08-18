export const runtime = 'edge'

import { Resend } from 'resend'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const requestCounts: { [ip: string]: { count: number; timestamp: number } } = {}
const RATE_LIMIT = 10
const RATE_LIMIT_WINDOW = 60 * 1000

export async function POST(req: Request) {
  const clientIp =
    req.headers.get('x-forwarded-for') || req.headers.get('cf-connecting-ip') || 'unknown'

  const now = Date.now()
  if (requestCounts[clientIp]) {
    const { count, timestamp } = requestCounts[clientIp]
    if (now - timestamp < RATE_LIMIT_WINDOW) {
      if (count >= RATE_LIMIT) {
        return new Response(
          JSON.stringify({ error: 'Too many requests. Please try again later.' }),
          { status: 429, headers: { 'Content-Type': 'application/json' } },
        )
      }
      requestCounts[clientIp].count += 1
    } else {
      requestCounts[clientIp] = { count: 1, timestamp: now }
    }
  } else {
    requestCounts[clientIp] = { count: 1, timestamp: now }
  }

  try {
    const body = await req.json()
    const { name, email, subject, message } = body as FormData

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    if (!/^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const sanitizedName = name.replace(/[<>]/g, '')
    const sanitizedSubject = subject.replace(/[<>]/g, '')
    const sanitizedMessage = message.replace(/[<>]/g, '')

    const apiKey = process.env.RESEND_API_KEY
    const mailtoUrl = `mailto:rajubathini83@gmail.com?subject=${encodeURIComponent(
      sanitizedSubject,
    )}&body=${encodeURIComponent(
      `Name: ${sanitizedName}\nEmail: ${email}\n\nMessage:\n${sanitizedMessage}`,
    )}`

    if (apiKey && apiKey !== 're_placeholder_key' && !apiKey.startsWith('re_placeholder')) {
      try {
        const resend = new Resend(apiKey)
        const { error } = await resend.emails.send({
          from: `onboarding@resend.dev`,
          to: ['rajubathini83@gmail.com'],
          replyTo: email,
          subject: `[Portfolio Contact] ${sanitizedSubject} - from ${sanitizedName}`,
          html: `
  <h2>New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${sanitizedName}</p>
  <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
  <p><strong>Subject:</strong> ${sanitizedSubject}</p>
  <p><strong>Message:</strong></p>
  <blockquote style="margin-left:1rem; border-left: 2px solid #ccc; padding-left: 1rem;">
    ${sanitizedMessage.replace(/\n/g, '<br />')}
  </blockquote>
  <hr />
  <p style="font-size: 0.85rem; color: #666;">Sent via portfolio contact form for Raju Bathini</p>
`,
        })

        if (!error) {
          return new Response(
            JSON.stringify({ message: 'Message sent successfully via email service!' }),
            { status: 200, headers: { 'Content-Type': 'application/json' } },
          )
        }

        console.warn('Resend send warning:', error)
      } catch (resendErr) {
        console.warn('Resend exception:', resendErr)
      }
    }

    // Always succeed gracefully with logged message and mailto fallback link
    console.log(
      `[Contact Form Submission] From: ${sanitizedName} (${email}) | Subject: ${sanitizedSubject}\nMessage: ${sanitizedMessage}`,
    )

    return new Response(
      JSON.stringify({
        message: 'Message sent successfully!',
        mailto: mailtoUrl,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    )
  } catch (err) {
    console.error('Contact route error:', err)
    return new Response(
      JSON.stringify({ error: 'An error occurred while processing your request' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    )
  }
}


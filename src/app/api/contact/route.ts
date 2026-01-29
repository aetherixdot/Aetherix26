import { NextResponse } from "next/server"
import { Resend } from "resend"

/**
 * IMPORTANT:
 * This tells Next.js NOT to statically analyze this route at build time.
 * Required for email / DB / external services.
 */
export const dynamic = "force-dynamic"

export async function POST(req: Request) {
  try {
    // Ensure API key exists at runtime
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing")
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
    }

    // Lazy-init Resend (CRITICAL FIX)
    const resend = new Resend(apiKey)

    // Parse body
    const body = await req.json()
    const { name, email, message } = body || {}

    // Validate input
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "Missing or invalid fields" },
        { status: 400 }
      )
    }

    // Send email
    await resend.emails.send({
      from: "Aetherix <onboarding@resend.dev>",
      to: ["aetherixdot@gmail.com"],
      replyTo: email,
      subject: `New contact from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Contact Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}

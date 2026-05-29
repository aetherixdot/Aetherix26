import type { Metadata } from "next"
import {
  DM_Sans,
  Syne,
  Space_Grotesk,
  Manrope,
  Playfair_Display,
  Inter,
} from "next/font/google"
import "../styles/globals.css"
import CustomCursor from "../components/CustomCursor"
import AppShell from "../components/AppShell"

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
})

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
})

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Aetherix",
    template: "%s · Aetherix",
  },
  icons: {
    icon: [
      { url: "/images/Aetherix-logos_transparent.png", sizes: "512x512", type: "image/png" },
      { url: "/images/Aetherix-white.svg", type: "image/svg+xml" },
    ],
    shortcut: "/images/Aetherix-logos_transparent.png",
    apple: "/images/Aetherix-logos_transparent.png",
  },
  description:
    "Aetherix is a modern development platform to build fast, scale effortlessly, and ship reliable products.",
  metadataBase: new URL("https://aetherix.dev"),
  openGraph: {
    title: "Aetherix",
    description:
      "Build in a weekend. Scale to millions. Aetherix powers modern applications.",
    url: "https://aetherix.dev",
    siteName: "Aetherix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aetherix",
    description: "Build in a weekend. Scale to millions.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/Aetherix-logos_transparent.png" sizes="512x512" type="image/png" />
        <link rel="shortcut icon" href="/images/Aetherix-logos_transparent.png" type="image/png" />
      </head>
      <body
        className={[
          dmSans.variable,
          syne.variable,
          spaceGrotesk.variable,
          manrope.variable,
          playfairDisplay.variable,
          inter.variable,
          "font-preset-aetherix-balance",
          "bg-background text-foreground antialiased",
        ].join(" ")}
      >
        {/* Cursor stays global */}
        <CustomCursor />

        {/* Loader + App */}
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  )
}

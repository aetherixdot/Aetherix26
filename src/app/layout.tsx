import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aetherix",
    template: "%s · Aetherix",
  },
  description:
    "Aetherix is a modern development platform to build fast, scale effortlessly, and ship reliable products.",
  metadataBase: new URL("https://aetherix.dev"), // change later if needed
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
    description:
      "Build in a weekend. Scale to millions.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          "bg-background text-foreground antialiased",
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}

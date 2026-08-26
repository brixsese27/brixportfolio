import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { profileData } from "@/data/profile";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#090a0d" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://brixsese.dev"),
  title: {
    default: `${profileData.name} | BS Information Technology Developer`,
    template: `%s | ${profileData.name}`,
  },
  description: `${profileData.name} - BS Information Technology graduate specializing in modern web applications, Next.js, TypeScript, and full-stack software development.`,
  keywords: [
    "Brix Sese",
    "BSIT Graduate",
    "Information Technology",
    "Frontend Developer",
    "Full-Stack Developer",
    "Web Developer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "React",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: profileData.name, url: "https://brixsese.dev" }],
  creator: profileData.name,
  icons: {
    icon: "/2x2.jpg",
    shortcut: "/2x2.jpg",
    apple: "/2x2.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brixsese.dev",
    title: `${profileData.name} | BS Information Technology Developer`,
    description: profileData.subheadline,
    siteName: `${profileData.name} Developer Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} | BS Information Technology Developer`,
    description: profileData.subheadline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

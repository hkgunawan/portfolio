import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hendragunawan.com"),
  title: `${profile.name} — ${profile.role}`,
  description: profile.summary,
  keywords: [
    "Hendra Gunawan",
    "Senior Software Engineer",
    "Full-stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Fintech",
    "Singapore",
    "Remote",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: "https://hendragunawan.com",
    siteName: profile.name,
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.summary,
  },
  robots: { index: true, follow: true },
};

// Apply the saved theme before paint to avoid a flash. Dark is the default.
const themeScript = `try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light')}catch(e){}`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: "https://hendragunawan.com",
  email: `mailto:${profile.email}`,
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: ["React", "Next.js", "Node.js", "TypeScript", "PHP", "Laravel", "Fintech"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

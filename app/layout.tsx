import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { EDUCATION, PROFILE } from "@/lib/data";
import { themeInitScript } from "@/lib/theme";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://faizanmir.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PROFILE.name} — Software Development Engineer`,
    template: `%s · ${PROFILE.name}`,
  },
  description: `${PROFILE.name} — Software Development Engineer at ${PROFILE.company} building distributed backend systems, cloud-native services on AWS, and production GenAI / RAG pipelines.`,
  keywords: [
    PROFILE.name, "Software Engineer", "Backend Engineer", "Amazon",
    "AWS", "Java", "Spring Boot", "Python", "FastAPI", "Distributed Systems",
    "GenAI", "LLM", "RAG", "LangChain", "System Design", "Bengaluru", "Portfolio",
  ],
  authors: [{ name: PROFILE.name }],
  creator: PROFILE.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: `${PROFILE.name} — Software Development Engineer`,
    description: `Distributed backends, AWS and production GenAI. Currently SDE @ ${PROFILE.company}.`,
    siteName: PROFILE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} — SDE @ ${PROFILE.company}`,
    description: PROFILE.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  jobTitle: PROFILE.role,
  worksFor: { "@type": "Organization", name: "Amazon" },
  address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
  email: `mailto:${PROFILE.email}`,
  url: SITE_URL,
  sameAs: [PROFILE.github, PROFILE.linkedin],
  alumniOf: EDUCATION.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
  knowsAbout: [
    "Distributed Systems", "Java", "Spring Boot", "Python", "FastAPI", "AWS",
    "Large Language Models", "Retrieval-Augmented Generation", "System Design",
  ],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0908" },
    { media: "(prefers-color-scheme: light)", color: "#f8f4ec" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="grain">
        {children}
      </body>
    </html>
  );
}

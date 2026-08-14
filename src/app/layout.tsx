import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Martin Gayem — BSCS Student & Aspiring Software Engineer",
  description:
    "The personal portfolio of Martin Gayem, a BS Computer Science student in Manila building practical web, mobile, and interactive projects.",
  keywords: [
    "Martin Gayem",
    "computer science student",
    "software engineer",
    "web developer",
    "mobile developer",
    "portfolio",
    "Manila",
  ],
  authors: [{ name: "Martin Gayem" }],
  creator: "Martin Gayem",
  openGraph: {
    title: "Martin Gayem — Portfolio",
    description:
      "BSCS student building practical web, mobile, and interactive projects.",
    type: "website",
    locale: "en_PH",
  },
  twitter: {
    card: "summary",
    title: "Martin Gayem — Portfolio",
    description:
      "BSCS student building practical web, mobile, and interactive projects.",
  },
};

const themeScript = `
  try {
    const saved = localStorage.getItem('martin-theme');
    const theme = saved || 'dark';
    document.documentElement.dataset.theme = theme;
  } catch (_) {
    document.documentElement.dataset.theme = 'dark';
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

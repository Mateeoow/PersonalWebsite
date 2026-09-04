import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistPixelSquare } from "geist/font/pixel";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Martin Gayem — BSCS Student & Aspiring Software/Data Engineer",
  description:
    "I’m a second-year BSCS student building hands-on experience through web development and software projects. I’m interested in software engineering, backend development, and data engineering, with a focus on building practical applications, working with data, and continuously strengthening my technical skills.",
  keywords: [
    "Martin Gayem",
    "computer science student",
    "software engineer",
    "data engineer",
    "web developer",
    "mobile developer",
    "portfolio",
    "Manila",
  ],
  authors: [{ name: "Martin Gayem" }],
  creator: "Martin Gayem",
  icons: {
    icon: [
      {
        url: "/martin-gayem.png",
        type: "image/png",
        sizes: "600x600",
      },
    ],
    shortcut: "/martin-gayem.png",
    apple: "/martin-gayem.png",
  },
  openGraph: {
    title: "Martin Gayem — Portfolio",
    description:
      "BSCS student and aspiring software/data engineer building practical applications through web development, backend work, and data engineering.",
    type: "website",
    locale: "en_PH",
  },
  twitter: {
    card: "summary",
    title: "Martin Gayem — Portfolio",
    description:
      "BSCS student and aspiring software/data engineer building practical applications through web development, backend work, and data engineering.",
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
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable}`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}

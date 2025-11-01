import type { Metadata } from "next";
import { Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { buildMetadata } from "@/lib/seo";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal"],
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal"],
  display: "swap",
});

const baseMetadata = buildMetadata("home", {
  description: "Montana's premier European automotive specialist in Bozeman. Performance tuning, diagnostics, and expert repairs for all makes and models.",
  includeLocation: true,
});

export const metadata: Metadata = {
  ...baseMetadata,
  icons: {
    icon: "/icons/favicon.svg",
    shortcut: "/icons/favicon.svg",
    apple: "/icons/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoCondensed.variable}`}>
      <head>
      </head>
      <body suppressHydrationWarning className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Roboto, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "BozemanCR LLC - Milford CT",
  description: "Connecticut's No.1 premier European automotive specialist. We specialize in all makes and models. No job is too big or too small for our high-end facility.",
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
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acedboard", 
  description: "Welcome to Acedboard", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/favicon.ico" />
        <title>Acedboard</title>
      </head>
      {/* Used the updated font class name here */}
      <body className={manrope.className}>{children}</body>
    </html>
  );
}

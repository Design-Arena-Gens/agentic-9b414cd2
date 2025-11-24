import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CapitalFlow ERP — Passive Income OS",
  description: "Cyber-terminal income strategist for building parallel income streams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-mono antialiased bg-terminal-bg text-terminal-text">
        {children}
      </body>
    </html>
  );
}

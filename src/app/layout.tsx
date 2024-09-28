import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Git & Github Workshop by FLC",
  description: "Finite Loop Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#0b011d]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

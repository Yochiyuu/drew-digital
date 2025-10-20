// app/layout.tsx
import type { Metadata } from "next"; // Impor tipe Metadata
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react"; // Impor React untuk tipe

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { // Beri tipe pada metadata
  title: "Drew Digital",
  description: "Solusi Digital Inovatif",
};

// Beri tipe pada props, 'children' adalah React.ReactNode
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
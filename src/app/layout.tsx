import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeWrapper from "@/components/ThemeWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Stage Events",
  description: "Premium event management services for unforgettable experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`} style={{ 
        backgroundColor: 'black', 
        color: 'var(--color-text)'
      }}>
        <ThemeWrapper>
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </ThemeWrapper>
      </body>
    </html>
  );
}

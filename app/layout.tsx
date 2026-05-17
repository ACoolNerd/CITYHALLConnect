import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACoolECOSYSTEM | Civic Intelligence, AI & Commerce",
  description: "The central command center for CITYHALLConnect, ACoolAI, and ACoolCOLLECTOR.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-orange-500/30">
        <main className="min-h-screen bg-[#0a0a0a]">
          {children}
        </main>
        <footer className="py-12 border-t border-neutral-900 bg-black/50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-xl font-bold tracking-tighter text-white">ACoolECOSYSTEM</span>
              <span className="text-xs text-neutral-500 uppercase tracking-widest font-medium">By ACoolNERD</span>
            </div>
            <div className="text-sm text-neutral-400">
              © {new Date().getFullYear()} ACoolECOSYSTEM. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

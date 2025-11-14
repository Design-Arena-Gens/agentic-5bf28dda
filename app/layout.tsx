import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Job Seeker Dashboard",
  description:
    "A modular, glassmorphic dashboard that gives job seekers actionable insights at a glance."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-aero-dark text-white antialiased">
        <main className="relative flex min-h-screen w-full items-center justify-center px-6 py-12 sm:px-10">
          <div className="absolute inset-0 grid-highlight" />
          <div className="relative z-10 w-full max-w-7xl glass-panel rounded-3xl border border-white/10 p-8 shadow-glass sm:p-12">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

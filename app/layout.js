"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ margin: 0, background: "#111", color: "#fff", fontFamily: "var(--font-geist-sans)" }}
      >
        {/* Navbar */}
        <nav
          style={{
            padding: "1rem 2rem",
            background: "#222",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <a
            href="/"
            style={{
              color: "#e10600",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.1rem",
            }}
          >
            Drivers
          </a>
          <a
            href="/teams"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.1rem",
            }}
          >
            Teams
          </a>
        </nav>

        {/* Page content */}
        <main style={{ padding: "2rem", minHeight: "calc(100vh - 64px)" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
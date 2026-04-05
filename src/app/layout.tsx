import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Knock Knock — Intra-Campus Delivery Platform",
  description:
    "Knock Knock is the intra-campus delivery platform that connects students to food, essentials, and more — delivered to your doorstep in minutes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}

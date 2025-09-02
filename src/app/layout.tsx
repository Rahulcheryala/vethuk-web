import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/ToastProvider";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
  preload: true,
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  style: ["italic"],
  weight: ["800"],
  variable: "--font-playfair-display",
  preload: true,
});

export const metadata: Metadata = {
  title: "Vethuk",
  description: "Vethuk - The Future of Entertainment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}

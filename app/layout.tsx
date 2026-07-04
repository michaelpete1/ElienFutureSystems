import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Elien Future Systems | Smart Trackers & Connected Gadgets",
  description:
    "Premium GPS trackers, smart gadgets, and connected devices for your lifestyle.",
  icons: {
    icon: "/icon.jpg",
    apple: "/apple-icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${spaceGrotesk.className}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}

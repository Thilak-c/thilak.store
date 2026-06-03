import { Sora, Inter } from "next/font/google";
import "./globals.css";
import AgentationWrapper from "./AgentationWrapper";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata = {
  title: "thilak.store — Bihar's #1 Trusted Free Fire Marketplace",
  description: "thilak.store — Bihar's #1 trusted Free Fire ID marketplace. Buy and sell gaming accounts with 100% verified escrow. Offline meetups in Patna.",
  keywords: "Free Fire ID, buy Free Fire account, sell Free Fire ID, Bihar, Patna, thilak store",
  authors: [{ name: "thilak.store" }],
  openGraph: {
    title: "thilak.store — Premium Gaming Marketplace",
    description: "Bihar's #1 trusted Free Fire ID marketplace. Buy and sell with 100% escrow protection.",
    type: "website",
    url: "https://thilak.store",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>
        {children}
        {/* <AgentationWrapper /> */}
      </body>
    </html>
  );
}

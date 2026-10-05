import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Big Steps Outreach Network | Big Steps, Brighter Futures",
  description:
    "BONET is a youth-led association working with young people and women across Cameroon to advance empowerment, inclusion, human rights, health, and good governance.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

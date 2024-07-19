import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./css/reset.css";
import "./css/globals.css";
import "./css/variables.css";
import "./css/responsive.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UFRN - DashBoard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pr-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

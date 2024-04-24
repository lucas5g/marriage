import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

// const font = JetBrains_Mono({
//   subsets: ['latin'],
//   // weight:'500'
// })
const font = Inter({
  subsets:['latin'],
  weight:'500'
})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-bt" className={font.className} >
      <body className="bg-lime-100 text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

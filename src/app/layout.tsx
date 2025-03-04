import type { Metadata } from "next";
import { GeistSans } from 'geist/font'
import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurant App",
  description: "A simple restaurant listing application"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${GeistSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

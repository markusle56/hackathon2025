import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google';
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ['latin'], 
  weight: ['400', '500', '700'], 
  display: 'swap',
});


export const metadata: Metadata = {
  title: "NexusS",
  description: "Shared - Study - Space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={dmSans.className}
      >
        {children}
      </body>
    </html>
  );
}

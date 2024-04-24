import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="w-full h-full" suppressHydrationWarning>
      <body className={`${inter.className} ${"w-screen h-screen bg-white space-grey text-foreground bg-background"}`}>
        {children}
       </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/libs/next-theme/theme-provider";
import { NextUiProvider as UiProvider } from "@/libs/nextui/nextui-provider";
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
      <body className={`${inter.className}`}>
        <UiProvider>
          <ThemeProvider>
            <div className="w-screen h-screen m-0 p-0 bg-space_grey-700">
              {children}
            </div>
          </ThemeProvider>
        </UiProvider>
      </body>
    </html>
  );
}

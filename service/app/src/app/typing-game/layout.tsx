import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AnyProvider as UiProvider } from "@/components/provider/lib/provider";
import "../globals.css";

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
          <div className="w-screen h-screen m-0 p-0 bg-space_grey-700">
            {children}
          </div>
        </UiProvider>
      </body>
    </html>
  );
}

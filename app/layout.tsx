import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import ChatButton from "@/components/chat-button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SoftSell",
  description: "Next generation financial solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/softsell-icon.ico" />
        {/* This script prevents the flash of light mode during page load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('ui-theme');
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(savedTheme === 'light' ? 'light' : 'dark');
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ChatButton />
        </ThemeProvider>
      </body>
    </html>
  );
}

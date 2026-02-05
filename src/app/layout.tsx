import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ChatbotWidget } from "@/components/chatbot-widget";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next"

const josefin = Josefin_Sans({
  variable: "--josefin-font",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ericson Castasus",
  description: "Ericson Castasus's portfolio. Contains my projects, skills, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="smooth-scroll">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${josefin.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ChatbotWidget />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

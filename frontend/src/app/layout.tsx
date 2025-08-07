import Footer, { MobileFooter } from "@/components/Footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Jaro } from "next/font/google";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jaro = Jaro({
  variable: "--font-jaro",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/S.svg",
  },
  title: "Sniply",
  description: "Smarter links for a faster web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jaro.variable} antialiased`}
      >
        <Providers>
          <ThemeSwitcher />
          {children}
        </Providers>
        <div className="md:hidden">
          <MobileFooter />
        </div>
        <div className="hidden md:block">
          <Footer />
        </div>
      </body>
    </html>
  );
}

import '@/public/assets/css/style.css'
import { Inter } from "next/font/google";
import { Metadata } from 'next'

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aplikasi E-Arsip",
  description: "Sistem manajemen arsip digital",
  icons: {
    icon: "/assets/img/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className} data-theme="light">
      <body className="dark:bg-neutral-800 bg-neutral-100 dark:text-white">
        {children}
      </body>
    </html>
  )
}

// template wowdash index - 3
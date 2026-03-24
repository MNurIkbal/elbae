'use client'
import '@/public/assets/css/remixicon.css'
import '@/public/assets/css/apexcharts.css'
import '@/public/assets/css/dataTables.min.css'
import '@/public/assets/css/editor-katex.min.css'
import '@/public/assets/css/editor.atom-one-dark.min.css'
import '@/public/assets/css/editor.quill.snow.css'
import '@/public/assets/css/flatpickr.min.css'
import '@/public/assets/css/full-calendar.css'
import '@/public/assets/css/jquery-jvectormap-2.0.5.css'
import '@/public/assets/css/magnific-popup.css'
import '@/public/assets/css/slick.css'
import '@/public/assets/css/prism.css'
import '@/public/assets/css/file-upload.css'
import '@/public/assets/css/audioplayer.css'
import '@/public/assets/css/style.css'

import { Inter } from "next/font/google";
import ScriptLoader from './components/layout/ScriptLoader'

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className} >
      <body className="dark:bg-neutral-800 bg-neutral-100 dark:text-white">
        {children}
        <ScriptLoader />
      </body>
    </html>
  )
}

// template wowdash index - 3
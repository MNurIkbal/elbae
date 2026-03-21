import Sidebar from './components/layout/Sidebar'
import Content from './components/layout/Content'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import './../public/assets/css/bootstrap.min.css'
import './../public/assets/css/_all-skins.min.css'
import './../public/assets/css/AdminLTE.min.css'
import './../public/assets/css/font-awesome.min.css'
import './../public/assets/css/ionicons.min.css'
import './../public/assets/css/jquery-jvectormap.css'
import Script from 'next/script'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex', minHeight: '100vh' }}>

          {/* Sidebar */}
          <Sidebar />

          {/* Right Section */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            
            <Header />

            <Content>
              {children}
            </Content>

            <Footer />

          </div>

        </div>
        <Script
        src="./../public/assets/js/bootstrap.min.js"
        strategy="beforeInteractive"
      />
        <Script
        src="./../public/assets/js/adminlte.min.js"
        strategy="beforeInteractive"
      />
        <Script
        src="./../public/assets/js/Chart.js"
        strategy="beforeInteractive"
      />
        <Script
        src="./../public/assets/js/dashboard2.js"
        strategy="beforeInteractive"
      />
        <Script
        src="./../public/assets/js/demo.js"
        strategy="beforeInteractive"
      />
        <Script
        src="./../public/assets/js/jquery-jvectormap-1.2.2.min.js"
        strategy="beforeInteractive"
      />
        <Script
        src="./../public/assets/js/jquery-jvectormap-world-mill-en.js"
        strategy="beforeInteractive"
      />
        <Script
        src="./../public/assets/js/jquery.slimscroll.min.js"
        strategy="beforeInteractive"
      />
      </body>
    </html>
  )
}
"use client";
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
import ScriptLoader from './components/layout/ScriptLoader';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex', minHeight: '100vh' }}>

          <Sidebar />

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            
            <Header />

            <Content>
              {children}
            </Content>

            <Footer />
            <ScriptLoader />

          </div>

        </div>
        
      </body>
    </html>
  )
}
"use client";

import Script from "next/script";

export default function ScriptLoader() {
  return (
    <>
      {/* JQUERY */}
      <Script src="/assets/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />

      {/* DEPENDENCIES */}
      <Script src="/assets/js/jquery-ui.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery-jvectormap-2.0.5.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery-jvectormap-world-mill-en.js" strategy="afterInteractive" />
      <Script src="/assets/js/magnifc-popup.min.js" strategy="afterInteractive" />

      {/* LIBRARY */}
      <Script src="/assets/js/apexcharts.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/slick.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/prism.js" strategy="afterInteractive" />
      <Script src="/assets/js/simple-datatables.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/flowbite.min.js" strategy="afterInteractive" />

      {/* CUSTOM */}
      <Script src="/assets/js/app.js" strategy="afterInteractive" />
      <Script src="/assets/js/audioplayer.js" strategy="afterInteractive" />
      <Script src="/assets/js/file-upload.js" strategy="afterInteractive" />
      <Script src="/assets/js/homeThreeChart.js" strategy="afterInteractive" />
    </>
  );
}
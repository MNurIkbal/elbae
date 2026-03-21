"use client";

import Script from "next/script";

export default function ScriptLoader() {
    return (
        <>
            <Script
                src="./../public/assets/js/bootstrap.min.js"
                strategy="afterInteractive"
            />
            <Script
                src="./../public/assets/js/adminlte.min.js"
                strategy="afterInteractive"
            />
            <Script
                src="./../public/assets/js/Chart.js"
                strategy="afterInteractive"
            />
            <Script
                src="./../public/assets/js/dashboard2.js"
                strategy="afterInteractive"
            />
            <Script
                src="./../public/assets/js/demo.js"
                strategy="afterInteractive"
            />
            <Script
                src="./../public/assets/js/jquery-jvectormap-1.2.2.min.js"
                strategy="afterInteractive"
            />
            <Script
                src="./../public/assets/js/fastclick.js"
                strategy="afterInteractive"
            />
            <Script
                src="./../public/assets/js/jquery-jvectormap-world-mill-en.js"
                strategy="afterInteractive"
            />
            <Script
                src="./../public/assets/js/jquery.slimscroll.min.js"
                strategy="afterInteractive"
            />
            <Script defer src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516" integrity="sha512-8DS7rgIrAmghBFwoOTujcf6D9rXvH8xm8JQ1Ja01h9QX8EzXldiszufYa4IFfKdLUKTTrnSFXLDkUEOTrZQ8Qg==" data-cf-beacon='{"version":"2024.11.0","token":"2437d112162f4ec4b63c3ca0eb38fb20","server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' />
        </>
    );
}
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScriptRunner() {
  const pathname = usePathname();

  useEffect(() => {
    if (!(window as any).$) return;
    const scripts = [
      "/assets/js/app.js",
      "/assets/js/audioplayer.js",
      "/assets/js/file-upload.js",
      "/assets/js/homeThreeChart.js",
    ];

    const runScripts = () => {
      scripts.forEach((src) => {
        const oldScript = document.querySelector(`script[src="${src}"]`);
        if (oldScript) oldScript.remove();

        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        document.body.appendChild(script);
      });
    };

    setTimeout(runScripts, 200);
  }, [pathname]);

  return null;
}
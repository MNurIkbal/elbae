"use client";

import { useEffect } from "react";

export default function GlobalScript() {
  useEffect(() => {
    // ======================
    // SIDEBAR DROPDOWN
    // ======================
    const dropdowns = document.querySelectorAll(".sidebar-menu .dropdown");

    const handleDropdownClick = function (this: HTMLElement) {
      const item = this;

      item.parentNode?.querySelectorAll(".dropdown").forEach((sibling: any) => {
        if (sibling !== item) {
          const submenu = sibling.querySelector(".sidebar-submenu");
          if (submenu) submenu.style.display = "none";
          sibling.classList.remove("dropdown-open", "open");
        }
      });

      const submenu = item.querySelector(".sidebar-submenu") as HTMLElement;
      if (submenu) {
        submenu.style.display =
          submenu.style.display === "block" ? "none" : "block";
      }

      item.classList.toggle("dropdown-open");
    };

    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("click", handleDropdownClick as any);
    });

    // ======================
    // SIDEBAR TOGGLE
    // ======================
    const sidebarToggle = document.querySelector(".sidebar-toggle");

    const handleSidebarToggle = function (this: HTMLElement) {
      this.classList.toggle("active");
      document.querySelector(".sidebar")?.classList.toggle("active");
      document.querySelector(".dashboard-main")?.classList.toggle("active");
    };

    sidebarToggle?.addEventListener("click", handleSidebarToggle as any);

    // ======================
    // MOBILE SIDEBAR
    // ======================
    const sidebarMobileToggle = document.querySelector(
      ".sidebar-mobile-toggle",
    );

    const handleMobileOpen = () => {
      document.querySelector(".sidebar")?.classList.add("sidebar-open");
      document.body.classList.add("overlay-active");
    };

    sidebarMobileToggle?.addEventListener("click", handleMobileOpen);

    const sidebarCloseBtn = document.querySelector(".sidebar-close-btn");

    const handleMobileClose = () => {
      document.querySelector(".sidebar")?.classList.remove("sidebar-open");
      document.body.classList.remove("overlay-active");
    };

    sidebarCloseBtn?.addEventListener("click", handleMobileClose);

    // ======================
    // ACTIVE MENU
    // ======================
    const currentUrl = window.location.href;
    const links = document.querySelectorAll("ul#sidebar-menu a");

    links.forEach((link: any) => {
      if (link.href === currentUrl) {
        link.classList.add("active-page");

        let parent = link.parentElement;

        while (parent && parent.tagName !== "BODY") {
          if (parent.tagName === "LI") {
            parent.classList.add("show", "open");
          }
          parent = parent.parentElement;
        }
      }
    });

    // ======================
    // DARK MODE INIT
    // ======================
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // ======================
    // THEME TOGGLE
    // ======================
    const themeToggleDarkIcon = document.getElementById(
      "theme-toggle-dark-icon",
    );
    const themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon",
    );
    const themeToggleBtn = document.getElementById("theme-toggle");

    if (themeToggleDarkIcon && themeToggleLightIcon) {
      if (
        localStorage.getItem("color-theme") === "dark" ||
        (!("color-theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        themeToggleLightIcon.classList.remove("hidden");
      } else {
        themeToggleDarkIcon.classList.remove("hidden");
      }
    }

    const handleThemeToggle = () => {
      themeToggleDarkIcon?.classList.toggle("hidden");
      themeToggleLightIcon?.classList.toggle("hidden");

      if (localStorage.getItem("color-theme")) {
        if (localStorage.getItem("color-theme") === "light") {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        }
      } else {
        if (document.documentElement.classList.contains("dark")) {
          document.documentElement.classList.remove("dark");
          localStorage.setItem("color-theme", "light");
        } else {
          document.documentElement.classList.add("dark");
          localStorage.setItem("color-theme", "dark");
        }
      }
    };

    themeToggleBtn?.addEventListener("click", handleThemeToggle);

    // ======================
    // PROFILE DROPDOWN
    // ======================
    const profileBtn = document.querySelector(
      "#buttonProfile",
    );

    const profileDropdown = document.getElementById("boxProfile");

    const handleProfileToggle = (e: any) => {
      e.stopPropagation();
      profileDropdown?.classList.toggle("hidden");
    };

    const handleClickOutsideProfile = (e: any) => {
      if (
        profileDropdown &&
        !profileDropdown.contains(e.target) &&
        !profileBtn?.contains(e.target)
      ) {
        profileDropdown.classList.add("hidden");
      }
    };

    profileBtn?.addEventListener("click", handleProfileToggle);
    document.addEventListener("click", handleClickOutsideProfile);

    // ======================
    // CLEANUP (PENTING BANGET)
    // ======================
    return () => {
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener("click", handleDropdownClick as any);
      });

      profileBtn?.removeEventListener("click", handleProfileToggle);
      document.removeEventListener("click", handleClickOutsideProfile);
      sidebarToggle?.removeEventListener("click", handleSidebarToggle as any);
      sidebarMobileToggle?.removeEventListener("click", handleMobileOpen);
      sidebarCloseBtn?.removeEventListener("click", handleMobileClose);
      themeToggleBtn?.removeEventListener("click", handleThemeToggle);
      
    };
  }, []);

  return null;
}

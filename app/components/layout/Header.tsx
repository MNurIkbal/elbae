import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="navbar-header border-b border-neutral-200 dark:border-neutral-600">
        <div className="flex items-center justify-between">
          <div className="col-auto">
            <div className="flex flex-wrap items-center gap-[16px]">
              <button type="button" className="sidebar-toggle">
                <Icon icon="mdi:menu" className="menu-icon"></Icon>
              </button>
              <button
                type="button"
                className="sidebar-mobile-toggle d-flex !leading-[0]"
              >
                <Icon icon="mdi:menu" className="menu-icon"></Icon>
              </button>
              <form className="navbar-search">
                <h5>Aplikasi E-Arsip</h5>

              </form>
            </div>
          </div>
          <div className="col-auto">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                id="theme-toggle"
                className="w-10 h-10 bg-neutral-200 dark:bg-neutral-700 dark:text-white rounded-full flex justify-center items-center"
              >
                <span id="theme-toggle-dark-icon" className="hidden">
                  <i className="ri-sun-line" />
                </span>
                <span id="theme-toggle-light-icon" className="hidden">
                  <i className="ri-moon-line" />
                </span>
              </button>
              {/* Notification End  */}
              <button
                data-dropdown-toggle="dropdownProfile"
                className="flex justify-center items-center rounded-full"
                type="button"
              >
                <Image
                  width={100}
                  height={100}
                  src="/assets/img/user.png"
                  alt="image"
                  className="w-10 h-10 object-fit-cover rounded-full"
                />
              </button>
              <div
                id="dropdownProfile"
                className="z-10 hidden bg-white dark:bg-neutral-700 rounded-lg shadow-lg dropdown-menu-sm p-3"
              >
                <div className="py-3 px-4 rounded-lg bg-primary-50 dark:bg-primary-600/25 mb-4 flex items-center justify-between gap-2">
                  <div>
                    <h6 className="text-lg text-neutral-900 font-semibold mb-0">
                      Shahidul Islam
                    </h6>
                    <span className="text-neutral-500">Admin</span>
                  </div>
                  <button type="button" className="hover:text-danger-600">
                  </button>
                </div>
                <div className="max-h-[400px] overflow-y-auto scroll-sm pe-2">
                  <ul className="flex flex-col">
                    <li>
                      <Link
                        className="text-black px-0 py-2 hover:text-danger-600 flex items-center gap-4"
                        href="javascript:void(0)"
                      >
                        <Icon icon="mdi:logout" className="menu-icon"></Icon>
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react';

export default function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <button type="button" className="sidebar-close-btn !mt-4">
          lr  
        </button>
        <div>
          <Link href="" className="sidebar-logo">
            <Image
              src="/assets/img/logo.png"
              alt="site logo"
              width={200}
              height={100}
              className="light-logo"
            />
            <Image
              src="/assets/img/logo-light.png"
              alt="site logo"
              width={200}
              height={100}
              className="dark-logo"
            />
            <Image
              src="/assets/img/logo-icon.png"
              alt="site logo"
              width={35}
              height={35}
              className="logo-icon"
            />
          </Link>
        </div>
        <div className="sidebar-menu-area">
          <ul className="sidebar-menu" id="sidebar-menu">
            <li >
              <Link href="/dashboard">
                <Icon icon="mdi:home" className="menu-icon"></Icon>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className="sidebar-menu-group-title">Application</li>
            <li>
              <Link href="/arsip">
                <Icon icon="mdi:book" className="menu-icon"></Icon>
                <span>Arsip</span>
              </Link>
              <Link href="/user">
                <Icon icon="mdi:user" className="menu-icon"></Icon>
                <span>User</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
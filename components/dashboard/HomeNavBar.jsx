"use client"

import { Building2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function HomeNavBar() {
    const pathname=usePathname();
console.log(pathname)
    const navLinks = [
      {
        title: "Dashboard",
        href: "/inventory-dashboard/home/overview",
      },
      {
        title: "Getting Started",
        href: "/inventory-dashboard/home/gettingstarted",
      },
      {
        title: "Recent Updates",
        href: "/inventory-dashboard/home/updates",
      },
      {
        title: "Announcements",
        href: "/inventory-dashboard/home/announcments",
      },
    ];
  return (
    <div
      className="relative h-32 p-5 bg-repeat bg-center border-b-2 shadow-sm"
      style={{ backgroundImage: "url('/inventory.jpg')" }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white opacity-95"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex space-x-3">
          <div className="rounded-md flex w-14 h-14 bg-white items-center justify-center">
            <Building2 />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-slate-900">Hello, DEVELOPER X</p>
            <span className="text-sm">Gurat</span>
          </div>
        </div>
        <nav className="sticky mt-6 flex space-x-6">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`py-0 ${
                pathname === item.href
                  ? "border-b-2 border-blue-500"
                  : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

import Header1 from "@/components/dashboard/Header1";
import Sidebar1 from "@/components/dashboard/Sidebar1";
import React from "react";

export default function layout({ children }) {
  return (
    <div className="flex">
      <Sidebar1/>
      <main className="w-full min-h-screen ml-60">
        <Header1/>
        {children}
      </main>
    </div>
  );
}

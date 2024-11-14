"use client";
import { CreditCard, X } from "lucide-react";
import React, { useState } from "react";

export default function DashboardBanner() {
  const [hidden, setHidden] = useState(false);
  return (
    <div
      className={`${
        hidden
          ? "hidden"
          : "grid grid-cols-12 items-center py-16 px-8 bg-white gap-2 relative"
      }`}
    >
      {/* icon  */}
      <div className="col-span-1">
        <CreditCard className="w-16 h-16 text-slate-500" />
      </div>
      <div className="col-span-6">
        <h2 className="font-bold text-xl">Start accepting online payments</h2>
        <p>
          Businesses are moving towards online payments as they're easy, secure
          and fast. Try them for your business today.
        </p>
      </div>
      <div className="col-span-3">
        <button className="py-2.6 px-4 uppercase bg-blue-700 text-white rounded-lg">
          Enable
        </button>
      </div>

      {/* texts */}
      {/* button  */}
      {/* close */}
      <button
        onClick={() => setHidden(true)}
        className="absolute top-4 right-10"
      >
        <X />
      </button>
    </div>
  );
}

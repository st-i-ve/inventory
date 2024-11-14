import { BaggageClaim, BarChart3, Cable, ChevronLeft, File, Files, Home, ShoppingBag, ShoppingBasket, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SubscriptionCard from './SubscriptionCard';

export default function Sidebar1() {
  return (
    <div className="w-60 min-h-screen bg-slate-900 text-slate-50 flex flex-col justify-between fixed">
      {/* top part */}
      <Link className="flex space-x-2 items-center bg-slate-950 py-3 px-3 rounded-b-xl" href="#">
        <ShoppingCart />
        <span className="font-semibold text-xl">Inventory</span>
      </Link>
      {/* bottom part */}

      <nav className="flex flex-col gap-3 p-3 py-6 mb-40">
        <Link className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md" href="#">
          <Home className="w-4" />
          <span>Home</span>
        </Link>
        <button className="flex items-center space-x-3 p-2 " >
          <BaggageClaim className="w-4" />
          <span>Inventory</span>
        </button>
        <button className="flex items-center space-x-3 p-2 " >
          <ShoppingBasket className="w-4" />
          <span>Sales</span>
        </button>
        <button className="flex items-center space-x-3 p-2 ">
          <ShoppingBag className="w-4" />
          <span>Purchases</span>
        </button>
        <Link className="flex items-center space-x-3 p-2 " href="#">
          <Cable className="w-4" />
          <span>Intergrations</span>
        </Link>
        <Link className="flex items-center space-x-3 p-2 " href="#">
          <BarChart3 className="w-4" />
          <span>Reports</span>
        </Link>
        <Link className="flex items-center space-x-3 p-2 " href="#">
          <File className="w-4" />
          <span>Documents</span>
        </Link>
      </nav>
      <SubscriptionCard/>

      <button className="flex space-x-2 items-center bg-slate-950 py-3 px-3 rounded-t-xl justify-center">
        <ChevronLeft />
      </button>


    </div>
  );
}

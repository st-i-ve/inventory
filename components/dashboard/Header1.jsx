import {
  Bell,
  ChevronDown,
  History,
  Layout,
  LayoutGrid,
  NotebookIcon,
  Plus,
  Settings,
  Users2,
} from "lucide-react";
import React from "react";
import SearchInput from "./SerachInput";

export default function Header1() {
  return (
    <div className="bg-slate-200 h-12 px-8 flex items-center justify-between border-b border-slate-300 ">
      <div className="flex gap-3">
        <button className="">
          <History />
        </button>
        <SearchInput />
      </div>
      <div className="flex space-x-2 items-center gap-1">
        <div className="pr-2 border-r border-gray-300">
          <button className=" bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <Plus className="text-white w-6 h-6" />
          </button>
        </div>
        <div className="pr-2 border-r border-gray-300">
          <button className="p-1 rounded-lg hover:bg-slate-200">
            <Users2 className="text-slate-900 w-4 h-4" />
          </button>
        </div>
        <div className="pr-2 border-r border-gray-300">
          <button className="p-1 rounded-lg hover:bg-slate-200">
            <Bell className="text-slate-900 w-4 h-4" />
          </button>
        </div>
        <div className="pr-2 border-r border-gray-300">
          <button className="p-1 rounded-lg hover:bg-slate-200">
            <Settings className="text-slate-900 w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center">
            <span>Geret</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button>
            <img
              src="/user.png"
              alt="userimage"
              width={96}
              height={96}
              className="rounded-full w-8 h-8 border border-slate-600"
            />
          </button>
          <button>
            <LayoutGrid className="w-6 h-6 text-slate-700" />
          </button>
        </div>
      </div>
    </div>
  );
}

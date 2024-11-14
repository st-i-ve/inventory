import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <div className="flex items-center justify-center min-h-screen flex-col">
    <h2 className="mb-4">inventory</h2>
    <Link href="/inventory-dashboard/home/overview"> open link </Link>
  </div>;
}

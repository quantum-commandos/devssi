"use client";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const handleToggle = () => {
    const tag = document.querySelector("html")?.getAttribute("data-theme");
    setTheme(tag === "dark" ? "light" : "dark");
    document
      .querySelector("html")
      ?.setAttribute("data-theme", tag === "dark" ? "light" : "dark");
  };
  return (
    <header className="text-center my-4 flex justify-between">
      <nav className="flex items-center gap-6">
        <Link href="/" className="text-2xl font-bold">
          DevSi
        </Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <button
        className="bg-gray-500 hover:bg-gray-400 px-2 py-2 rounded-full"
        onClick={handleToggle}
        type="button"
      >
        {theme === "dark" && <SunIcon className="h-4 w-4" />}
        {theme === "light" && <MoonIcon className="h-4 w-4" />}
      </button>
    </header>
  );
}

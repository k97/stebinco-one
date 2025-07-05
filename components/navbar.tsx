import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Sun,
  User,
  Briefcase,
  Download,
  Moon,
  Home,
  LibraryBig,
} from "lucide-react";
import { CMS } from "@/lib/constants";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import GoogleAnalytics from "./analytics";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (path: string) => {
    return router.pathname === path || router.pathname.startsWith(path + '/');
  };

  return (
    <section className="fixed top-0 left-0 w-full z-50 mx-auto">
      <nav
        className={cn(
          "px-5 py-3 mt-4 mx-4 md:mx-auto ",
          "font-medium text-base",
          "max-w-3xl flex items-center justify-between gap-3",
          "bg-white/50 dark:bg-slate-950/80 border border-gray-200 dark:border-slate-700/50",
          "shadow-lg rounded-full backdrop-blur-md",
          inter.className
        )}
        style={{
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.06), 0 1.5px 4px 0 rgba(0,0,0,0.02)",
        }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 pl-2"
        >
          <div className="relative w-12 h-12 flex-shrink-0 group">
            <Image
              src="/new-assets/seb-square.png"
              alt="Stebin"
              width={48}
              height={48}
              className="rounded-full border border-gray-200 dark:border-gray-700 transition-opacity duration-200 group-hover:opacity-75"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-500/50 dark:hover:bg-black/50 rounded-full">
              <Home className="w-6 h-6 text-white drop-shadow-md" />
            </div>
          </div>
          <Image
            src="/new-assets/stebin-cursive.svg"
            alt="Stebin"
            width={80}
            height={40}
            className="hidden sm:block invert-0 dark:invert"
          />
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/about"
            className={cn(
              "px-4 py-2 rounded-full flex items-center gap-2 transition-all border",
              isActive("/about")
                ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600"
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border-gray-200/50 dark:border-gray-700/50"
            )}
          >
            <User className="w-5 h-5" />
            <span>About</span>
          </Link>

          <Link
            href="/work"
            className={cn(
              "px-4 py-2 rounded-full flex items-center gap-2 transition-all border",
              isActive("/work")
                ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600"
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border-gray-200/50 dark:border-gray-700/50"
            )}
          >
            <Briefcase className="w-5 h-5" />
            <span>Work</span>
          </Link>

          <Link
            href="/blog"
            className={cn(
              "px-4 py-2 rounded-full flex items-center gap-2 transition-all border",
              isActive("/blog")
                ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border-gray-200 dark:border-gray-600"
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border-gray-200/50 dark:border-gray-700/50"
            )}
          >
            <LibraryBig className="w-5 h-5" />
            <span>Blog</span>
          </Link>

          <a
            href={CMS.resumeContent.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hidden md:flex",
              "px-4 py-2 rounded-full items-center gap-2 transition-all border",
              "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border-gray-200/50 dark:border-gray-700/50"
            )}
          >
            <Download className="w-5 h-5" />
            <span>Resume</span>
          </a>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={cn(
              "hidden md:flex",
              "w-10 h-10 rounded-full  items-center justify-center transition-colors",
              theme === "dark"
                ? "bg-gray-700 text-yellow-300"
                : "bg-yellow-100 text-yellow-600"
            )}
            aria-label="Toggle theme"
          >
            {!mounted ? null : theme === "dark" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>
      <GoogleAnalytics />
    </section>
  );
}

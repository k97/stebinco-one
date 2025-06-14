import Image from "next/image";
import Link from "next/link";
import { CMS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full bg-[#18191B] py-8 flex flex-col items-center">
      <div className="flex flex-col items-center gap-y-4">
        <Image
          src="/sebhero.png"
          alt="Stebin"
          width={42}
          height={42}
          className="rounded-full border-2 border-white mb-4"
        />
        <nav className="flex gap-4 md:gap-6 text-white text-base md:text-lg font-medium mb-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span className="opacity-60">•</span>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <span className="opacity-60">•</span>
          <Link href="/work" className="hover:underline">
            Work
          </Link>
          <span className="opacity-60">•</span>
          <a href={CMS.resumeContent.downloadLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
            Resume
          </a>
        </nav>
        <span className="text-gray-400 text-sm pb-4">
          © 2025 Copyrights. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

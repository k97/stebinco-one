import Head from "next/head";
import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import FeaturedProjects from "@/components/home/featured-projects";
import BriefProfile from "@/components/home/brief-profile";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import { CMS } from "@/lib/constants";

interface StatsCardProps {
  value: string;
  label: React.ReactNode;
  fontSize?: string;
}

function StatsCard({ value, label, fontSize = "text-2xl" }: StatsCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-1 p-4 w-full sm:w-1/3 lg:w-1/4",
        "bg-white dark:bg-neutral-800 rounded-2xl shadow-sm transition-transform transform hover:scale-105",
        "cursor-pointer hover:bg-slate-50 dark:hover:bg-neutral-800",
        "text-center"
      )}
    >
      <span className={cn(fontSize, "text-slate-700 dark:text-slate-200")}>
        {value}
      </span>
      <span className="text-sm font-medium tracking-tight text-slate-500 dark:text-slate-400 text-center w-full">
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home | Stebin Co</title>
        <meta name="description" content="Welcome to Stebin Co" />
      </Head>
      <main className="min-h-screen flex flex-col items-center pt-36 lg:pt-0 lg:justify-center relative bg-slate-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className={cn(
          "w-full max-w-6xl flex flex-col lg:flex-row lg:justify-between lg:items-start",
          "px-6 lg:px-0",
        )}>
          {/* Hero Content - Left Column */}
          <section className="w-full lg:w-1/2 lg:pr-12 mb-16 lg:mb-0 text-center lg:text-left flex flex-col gap-3 xl:gap-4">
            <h1 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100">
              Hi hi! I&apos;m Stebin
            </h1>

            <div className="relative mx-auto lg:ml-0 pb-2 text-center lg:text-left">
              <h2 className="text-2xl font-bold relative z-10 text-slate-800 dark:text-slate-100">
                Product &amp; UX Designer
              </h2>
              <Image
                src="/new-assets/underline.svg"
                alt="underline"
                width={200}
                height={20}
                className="absolute left-0 top-0 w-full h-full z-0 mt-3"
              />
            </div>

            <p className="text-lg font-medium text-slate-800 dark:text-gray-200">
              I create data-driven solutions that improve user experiences.
            </p>

            <p className="text-base text-slate-700 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
              I&apos;m currently based in Melbourne, where I love transforming
              intricate challenges into smooth, delightful digital journeys. My
              overall experience in various platforms such as Engineering, Sales
              & Marketing, Technical and Customer Eperience Analyst and a
              Photographer has gifted me a powerful asset of deeply rooted
              empathy for users, something I owe to years of seeing the world
              through their eyes.
            </p>

            {/* Stats */}
            <div className="hidden lg:flex gap-4 mt-2">
              <StatsCard
                value="12+"
                label={
                  <>
                    Total
                    <br />
                    experience
                  </>
                }
              />
              <StatsCard
                value="8+"
                label={
                  <>
                    Business
                    <br />
                    domains
                  </>
                }
              />
              <StatsCard
                value="∞"
                fontSize="text-4xl"
                label={
                  <>
                    Creative
                    <br />
                    Ideas
                  </>
                }
              />
            </div>

            {/* Resume Download Button */}
            <div className="mt-6 flex md:hidden mx-auto">
              <a
                href={CMS.resumeContent.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-2 py-3 px-5 rounded-full",
                  "bg-slate-800/80 text-white  dark:text-black dark:bg-slate-100/80 ",
                )}
              >
                <span className="text-sm font-medium">Download Resume</span>
                <Download className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* Featured Projects - Right Column */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <FeaturedProjects />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="hidden lg:flex absolute bottom-8 flex-col items-center cursor-pointer animate-bounce"
          onClick={() => {
            document
              .getElementById("profile-section")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          role="button"
          tabIndex={0}
          aria-label="Scroll to profile section"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              document
                .getElementById("profile-section")
                ?.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <Image
            src="/new-assets/scroll.svg"
            alt="Watch device"
            width={30}
            height={44}
            className="invert dark:invert-0 w-6 h-6 "
          />
          <span className="text-xs text-gray-400 mt-2">Scroll for more</span>
        </div>
      </main>

      <main
        id="profile-section"
        className="flex flex-col items-center justify-center relative bg-slate-100 dark:bg-neutral-900 transition-colors duration-300 py-32 "
      >
        {/* Brief Profile */}
        <BriefProfile />
      </main>
    </Layout>
  );
}

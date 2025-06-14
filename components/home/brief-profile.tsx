import { cn } from "@/lib/utils";
import Image from "next/image";

interface ExpertiseTagProps {
  label: string;
}

function ExpertiseTag({ label }: ExpertiseTagProps) {
  return (
    <div className="px-3 py-2 bg-slate-200/80 dark:bg-neutral-700 rounded-full text-sm font-normal
      text-gray-700 dark:text-gray-300">
      {label}
    </div>
  );
}

interface StatCardProps {
  percentage: string;
  title: string;
  description: string;
}

function StatCard({ percentage, title, description }: StatCardProps) {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-3xl py-5 px-5 shadow-sm flex flex-col gap-1">
      <div className="text-2xl font-medium text-slate-700 dark:text-slate-100">
        {percentage}
      </div>
      <div className="text-sm font-bold text-slate-600 dark:text-slate-200">
        {title}
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}

interface ClientLogoProps {
  name: string;
  logoSrc: string;
  altText?: string;
}

function ClientLogo({ name, logoSrc, altText }: ClientLogoProps) {
  return (
    <div className="flex items-center justify-center p-4 aspect-[3/1] scale-75 md:scale-100 md:aspect-[2.5/1] ">
      <div className="relative w-full h-full">
        <Image
          src={logoSrc}
          alt={altText || `${name} logo`}
          fill={true}
          sizes="(max-width: 768px) 100vw, 200px"
          className="object-contain p-1"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          quality={100}
        />
      </div>
    </div>
  );
}

export default function BriefProfile() {
  return (
    <section className="w-full max-w-6xl mx-auto">
      <div className={cn(
        "flex flex-col lg:flex-row justify-center text-center gap-4",
        "px-6 lg:px-0",
      )}>

        {/* Brief Background */}
        <section className="w-full lg:w-3/4 flex flex-col gap-3 xl:gap-4">
          <div className="bg-white dark:bg-neutral-800 rounded-3xl p-6 shadow-sm text-left">
            <h2 className="text-xl font-medium text-slate-800 dark:text-slate-100 mb-4 ">
              Brief Background
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base">
              I&apos;ve spent over 4 years crafting intuitive web and mobile
              products, grounded in a decade of immersing myself in customer
              facing roles such as sales, marketing along with engineering. That
              depth equips me with a rare lens into real user motivations.
              Today, I&apos;m partnering with both agile startups and established
              enterprises to untangle tough business problems using
              human-centred design.
            </p>
          </div>

        {/* Core Expertise */}
          <div className="bg-white dark:bg-neutral-800 rounded-3xl p-6 shadow-sm">
            <h2 className="text-xl font-medium text-slate-800 dark:text-slate-100 mb-4  text-left">
              Core Expertise
            </h2>
            <div className="flex flex-wrap gap-2">
              <ExpertiseTag label="User Research" />
              <ExpertiseTag label="Design Thinking" />
              <ExpertiseTag label="Design Strategy" />
              <ExpertiseTag label="Product Design" />
              <ExpertiseTag label="Enterprise UX" />
              <ExpertiseTag label="Rapid Prototyping" />
              <ExpertiseTag label="Mobile Design" />
              <ExpertiseTag label="Wearables Design" />
              <ExpertiseTag label="Design System" />
              <ExpertiseTag label="Gen AI" />
              <ExpertiseTag label="Figma" />
              <ExpertiseTag label="Adobe Creative Suite" />
            </div>
          </div>


          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">

              <StatCard
                percentage="90%"
                title="Fatigue Reduction"
                description="Designed wearables system that reduced mining fatigue incidents by 90%"
              />
              <StatCard
                percentage="40%"
                title="Developer Efficiency"
                description="Designed Element.ai to reduce UI developers' boilerplate coding time"
              />

              <StatCard
              percentage="5000+"
              title="Users Account Growth"
              description="Improved technical support experience and system usability across mining operation"
            />

            <StatCard
              percentage="25%"
              title="Support Reduction"
              description="improvements that reduced technical support tickets through better design"
            />
          </div>

        </section>

        <section className="w-full lg:w-1/2 flex flex-col gap-3 xl:gap-4">

          {/* Previous Clients */}
          <div className="bg-white dark:bg-neutral-800 rounded-3xl p-6 shadow-sm">
            <h2 className="text-xl font-medium text-left text-slate-800 dark:text-slate-100 mb-4">
              Previous Clients
            </h2>
            <div className="grid grid-cols-2">
              <ClientLogo name="Newmont Mining" logoSrc="/new-assets/client-logo/newmont.png" />
              <ClientLogo name="CPA Australia" logoSrc="/new-assets/client-logo/cpa.png" />
              <ClientLogo name="Newcrest Mining" logoSrc="/new-assets/client-logo/newcrest.png" />
              <ClientLogo name="Melbourne University" logoSrc="/new-assets/client-logo/melbuni.png" />
              <ClientLogo name="Ajman Holding" logoSrc="/new-assets/client-logo/ajman.png" />
              <ClientLogo name="Rixos Hotel" logoSrc="/new-assets/client-logo/rixos.png" />
              <ClientLogo name="Emaar" logoSrc="/new-assets/client-logo/emaar.png" />
              <ClientLogo name="Dubai Mall" logoSrc="/new-assets/client-logo/dubaimall.png" />
            </div>
          </div>
        </section>

      </div>
    </section>
  );
}

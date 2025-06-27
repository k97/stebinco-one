import Image from "next/image";
import Link from "next/link";

interface TagProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

function Tag({ text, bgColor = "bg-black/15", textColor = "text-blue-500", className = "" }: TagProps) {
  // Create default classes for the component
  const baseClasses = "inline-block rounded-full px-3 py-1 text-xs font-medium";

  // Allow the passed className to override any of the base classes
  // Order matters: className comes last to override earlier classes
  return (
    <span className={`${baseClasses} ${bgColor} ${textColor} ${className} bg-opacity-80 !text-white`}>
      {text}
    </span>
  );
}

export default function FeaturedProjects() {
  return (
    <div className="w-full">
      <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-4 text-center lg:text-left">
        Featured Projects
      </h3>

      <div className="flex flex-col gap-6">
        {/* ReactGPT.AI Project */}
        <div className="w-full">
          <div className="h-40 rounded-2xl bg-gradient-to-r from-[#4fdcff] to-[#6a8cff] p-4 relative shadow-md">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h4 className="text-lg font-bold text-white">ReactGPT.ai</h4>
                <p className="text-md text-white opacity-80">
                  Led the design of a GenAI platform that simplifies UI code integration into web applications.
                </p>
              </div>
              <div className="flex gap-2 mt-2">
                <Tag text="Product Design" className="shadow-sm" />
                <Tag text="GenAI/AI" className="shadow-sm" />
              </div>
            </div>
            <div className="absolute right-4 bottom-4">
              <Image
                src="/new-assets/element.png"
                alt="React logo"
                width={50}
                height={50}
                className="rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Miner Fatigue Prevention */}
        <div className="w-full">
          <div className="h-40 rounded-2xl bg-gradient-to-r from-[#1dd1a1] to-[#48ffb1] p-4 relative shadow-md">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h4 className="text-lg font-bold text-white">Miner Fatigue Prevention</h4>
                <p className="text-md text-white opacity-80">
                  Product & UX design for ReadiWatch at Newcrest Mining, to reduce mining incidents.
                </p>
              </div>
              <div className="flex gap-2 mt-2">
                <Tag text="User Research" className="shadow-sm" />
                <Tag text="Wearable Design" className="shadow-sm" />
              </div>
            </div>
            <div className="absolute right-4 bottom-4">
              <Image
                src="/new-assets/watch.png"
                alt="Watch device"
                width={50}
                height={50}
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

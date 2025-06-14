import Head from "next/head";
import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CMS } from "@/lib/constants";

interface AboutCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

function AboutCard({ icon, title, description, href }: AboutCardProps) {
  return (
    <Link href={href} className="no-underline">
      <div className="relative p-8 pt-16 max-w-2xl text-center bg-white dark:bg-neutral-800 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-lg mb-8 h-56">
        <div className="absolute top-8 left-8">
          <Image
            src={icon}
            alt={`${title} icon`}
            width={40}
            height={40}
            className="mb-1"
          />
        </div>
        <div className="text-left">
          <strong className="block text-2xl text-slate-700 dark:text-slate-200 mb-1 transition-colors duration-300 group-hover:text-blue-600">
            {title}
          </strong>
          <span className="block text-base text-slate-600 dark:text-slate-400">
            {description}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About | Stebin Co</title>
        <meta
          name="description"
          content="Learn more about Stebin Sebastine, a UI/UX designer based in Melbourne, Australia"
        />
      </Head>
      <main className="min-h-screen bg-slate-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
          {/* Title section */}
          <div className="flex flex-col items-center mt-16 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 text-center mb-4">
              About
            </h1>
          </div>

          {/* Story section */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              My story as a designer
            </h2>

            <div className="prose prose-slate dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                I&apos;m Stebin Sebastine, a UI/UX designer in Melbourne, Australia.
                I&apos;ve always been passionate about finding creative approaches to
                solve problems, which is why I started enjoying UX design very
                much. I find it incredibly satisfying to create digital
                experiences that are both creative and enjoyable to use, and I
                believe that good design can have a positive impact on people&apos;s
                lives.
              </p>

              <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                Before moving to Australia, I was living in Dubai, UAE. I spent
                most of my life working towards getting into a creative field
                and so I started dabbling with 3D modelling and animation before
                endeavouring into photography. I started working as a Sales
                Consultant and then turned into a CX Analyst while practising
                photography, Still, all along I found the application of
                creative solutions to technology fascinating.
              </p>

              <p className="text-lg text-slate-700 dark:text-slate-300 mb-4">
                Amidst migrating to Australia and starting a small family, I
                also enrolled on a design course at RMIT University and managed
                to get started with User Interface and Experience design, since
                then I have kept myself busy with freelance and unsolicited
                projects. I found that my background in CX and Sales has enabled
                me to be more receptive to customer perspectives and approach
                design with a bit more empathy while solving problems.
              </p>

              <p className="text-lg text-slate-700 dark:text-slate-300">
                When I&apos;m not designing, I enjoy photography as another creative
                outlet. I have curated some of my clicks{" "}
                <Link
                  href="/photography"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  here
                </Link>
                . I&apos;m also an amateur guitarist and I wind down to play some
                music from time to time.
              </p>
            </div>
          </div>

          {/* Publications section */}
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              Publications
            </h3>

            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              One of the high points in my photography career was when{" "}
              <a
                href="https://www.omanmagazine.com/"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Oman Magazine ↗
              </a>{" "}
              published my photographs during my tour of the country. I played
              my visual strengths of capturing people in their moment, the
              native farmers of Oman in the deserts of{" "}
              <a
                href="https://en.wikipedia.org/wiki/Salalah"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Salalah ↗
              </a>{" "}
              with their livestock and the pictures came out really well. Please
              check out the feature below:
            </p>

            <div className="w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/oman-mag.jpg"
                alt="Stebin - Oman magazine feature"
                width={1000}
                height={600}
                layout="responsive"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>


        </div>
      </main>
    </Layout>
  );
}

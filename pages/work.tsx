import Head from "next/head";
import Image from 'next/image'
import Link from 'next/link'
import Layout from "@/components/layout";
import { CMS } from '@/lib/constants'
import { imgPath } from '@/lib/assets'
import { getAllWork } from '@/api/work.api'
import { cn } from '@/lib/utils'

export const getStaticProps = async () => {
  const allWork = getAllWork([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ] as string[]);

  return {
    props: { allWork },
  }
}

interface WorkProps {
  allWork: any[];
}

interface TagProps {
  text: string;
}

function Tag({ text }: TagProps) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-slate-200 dark:bg-neutral-700 text-slate-700 dark:text-slate-300 mr-2 mb-2">
      {text}
    </span>
  );
}

const Work = ({ allWork }: WorkProps) => {

  const getAuthorTags = (list: string) => {
    return list ? list.split(', ') : [];
  }

  return (
    <Layout>
      <Head>
        <title>{`Work - ${CMS.name}`}</title>
        <meta name="description" content="Portfolio of design work and projects by Stebin Sebastine" />
      </Head>
      <main className="min-h-screen bg-slate-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl px-4 py-16 md:py-24">
          {/* Title section */}
          <div className="flex flex-col items-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 text-center mb-2 pt-12">
              Work
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 text-center">
              Few of my projects
            </h2>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allWork.map((work) => (
              <Link
                key={work.slug}
                href={`/work/${work.slug}`}
                className="group no-underline"
              >
                <div className={cn(
                  "bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-md",
                  "transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1"
                )}>
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={work.coverImage}
                      alt={work.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mb-2">
                      {work.title}
                    </h3>
                    <div className="flex flex-wrap">
                      {getAuthorTags(work.author.tags).map(tag => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Work

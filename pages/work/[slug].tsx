import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { CMS } from '@/lib/constants'
import { imgPath } from '@/lib/assets'
import { getWorkBySlug, getAllWork } from '@/api/work.api'
import markdownToHtml from '@/api/markdowntohtml.api'
import Layout from "@/components/layout"
import { cn } from '@/lib/utils'

interface WorkPageProps {
  work: any;
}

const WorkPage = ({ work }: WorkPageProps) => {

  return (
    <Layout>
      <Head>
        <title>{`${work.title} - ${CMS.name} ${CMS.title}`}</title>
        <meta property="og:description" content={work.excerpt} />
        <meta property="og:image" content={work.ogImage.url} />
        <meta name="description" content={work.excerpt} />
      </Head>
      <main className="min-h-screen bg-slate-50 dark:bg-neutral-900 transition-colors duration-300">
        <div className="container mx-auto max-w-4xl px-4 py-16">


          {/* Project title */}
          <h1 className="
          text-center text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-8 pt-16">
            {work.title}
          </h1>

          {/* Project content */}
          <div className={cn(
            "markdown-content",
          )}
          dangerouslySetInnerHTML={{ __html: work.content }} />
        </div>
      </main>
    </Layout>
  )
}

export default WorkPage

export async function getStaticProps({ params }: { params: { slug: string } }) {

  const work = getWorkBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'excerpt'
  ])

  const content = await markdownToHtml(work.content || '');
  return {
    props: {
      work: {
        ...work,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const works = getAllWork(['slug']) as Array<{ slug: string }>

  return {
    paths: works.map((works) => {
      return {
        params: {
          slug: works.slug,
        },
      }
    }),
    fallback: false,
  }
}

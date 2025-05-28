import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { CMS } from '@/lib/constants'
import { imgPath } from '@/lib/assets'

import { getWorkBySlug, getAllWork } from '@/api/work.api'
import markdownToHtml from '@/api/markdowntohtml.api'
import Layout from "@/components/layout"
import styles from '@/styles/pages/work.module.scss'

const work = ({ work }) => {

  return (
    <Layout>
      <Head>
        <title>{`${work.title} - ${CMS.name} ${CMS.title}`}</title>
        <meta property="og:description" content={work.excerpt} />
        <meta property="og:image" content={work.ogImage.url} />
      </Head>
      <main className={`container sebcontent ${styles.workcontent}`}>
        <section className={`row middle-xs`}>
          <div className={`col-xs-12 mt-4  ${styles.backarrowContainer}`}>
            <Link href="/work" className={styles.backarrow}>
              <Image
                src={imgPath.backIcon}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} // optional
                alt="" />
              <span>All projects</span>
            </Link>
          </div>

          <div className="col-xs-12 mt-2">
            <h1 className={"mt-4"}>{work.title}</h1>
          </div>

          <div className="col-xs-12 mt-2">
            <div className="mt-2 markdown-content" dangerouslySetInnerHTML={{ __html: work.content }} />
          </div>
        </section>
      </main>
    </Layout >
  )
}

export default work

export async function getStaticProps({ params }) {

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
  const works = getAllWork(['slug'])

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

import Head from 'next/head'
import Link from 'next/link'
import { CMS } from '../../lib/constants'
import { getWorkBySlug, getAllWork } from '../../api/work.api'
import markdownToHtml from '../../api/markdowntohtml.api'
import Layout from "../../components/layout"
import styles from '@/styles/pages/work.module.scss'

// import { withRouter } from 'next/router'

const work = ({ work }) => {
  // const router = withRouter()

  // if (!router.isFallback && !work?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }

  return (
    <Layout>
      <Head>
        <title>{work.title}- {CMS.name} {CMS.title}</title>
        <meta property="og:description" content={work.excerpt} />
        <meta property="og:image" content={work.ogImage.url} />
      </Head>
      <main className={`container sebcontent ${styles.workcontent}`}>
        <section className={`row middle-xs`}>
          <div className={`col-xs-12 mt-4  ${styles.backarrowContainer}`}>
            <Link href="/work" className={styles.backarrow}>
              <img src="/back.svg" alt="" />
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

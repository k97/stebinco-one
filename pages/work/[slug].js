import { useRouter } from 'next/router'
import { useState, useRef, useEffect } from "react"
import Head from 'next/head'
import ErrorPage from 'next/error'
import Link from 'next/link'

import { getWorkBySlug, getAllWork } from '../../api/work'
import markdownToHtml from '../../api/markdowntohtml'
import Layout from "../../components/layout";
import styles from '@/styles/pages/work.module.scss'

const work = ({ work }) => {
  const router = useRouter()

  if (!router.isFallback && !work?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Head>
        <title>{work.title} - { }</title>
        <meta property="og:description" content={work.excerpt} />
        <meta property="og:image" content={work.ogImage.url} />
      </Head>


      <main className={`container sebcontent ${styles.workcontent} mt-4 pt-4`}>
        <section className="row center-xs">
          <div class="col-xs-12">
            {
              <>
                <div className="row middle-xs">
                  <div className={`col-xs-2 ${styles.backarrow}`}>
                    <Link href="/work" >
                      <img src="/back.svg" alt="" />
                      <span>Back</span>
                    </Link>
                  </div>
                  <div className="col-xs-8">
                    <h1 className={"mt-4"}>{work.title}</h1>
                  </div>
                </div>

                <div className="mt-4 markdown-content" dangerouslySetInnerHTML={{ __html: work.content }} />
              </>
            }

          </div>
        </section></main>
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

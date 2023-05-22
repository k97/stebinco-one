/*
 Show a ui error in nextjs about router. check it and after remove layout comments
*/

import { useState, useEffect } from "react"
import Head from "next/head";
import Image from 'next/image'
import Link from 'next/link'

import Layout from "@/components/layout";
import styles from '@/styles/pages/work.module.scss'
import { CMS } from '@/lib/constants'
import { imgPath } from '@/lib/assets'

import { getAllWork } from '@/api/work.api'

export const getStaticProps = async () => {
  const allWork = getAllWork([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allWork },
  }
}

const Work = ({ allWork }) => {

  const getAuthorTags = list => {
    var tagsCollection = list ? list.split(', ') : [];
    return tagsCollection;
  }

  return (
    <>
      <Head>
        <title>Work - {CMS.name}</title>
      </Head>
      {/* Layout wayper in nextjs */}
      <Layout>
        <main className="container sebcontent">
          <section className="row center-xs">
            <div className="col-xs-12">
              <Image
                src={imgPath.titleWork}
                className="titleImage"
                alt="Work title image"
                width={120}
                height={120}
                priority />
              <h1>Work</h1>
              <h2>Few of my projects</h2>
            </div>
          </section>
          <section className={`row mt-4 ${styles.workcontainer}`}>
            {allWork.map((work) => (
              <div className="col-xs-12 col-md-6 col-lg-4" key={work.slug} >
                <Link as={`/work/${work.slug}`} href={`/work/${work.slug}`} >
                  <div className={`card ${styles.workcard}`}>
                    <Image
                      src={work.coverImage}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }} // optional
                      alt={work.title}
                      priority="true" />
                    <span>{work.title}</span>
                    <ul>
                      {getAuthorTags(work.author.tags).map(tag => (
                        <li key={tag} className="s-tags">{tag}</li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </div>
            ))}
          </section>

        </main >
      </Layout >
    </>
  );
}



export default Work

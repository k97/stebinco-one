/*
 Show a ui error in nextjs about router. check it and after remove layout comments
*/

import Head from "next/head"
import Image from 'next/image'
import Layout from "../components/layout"
import { CMS } from '../lib/constants'
import styles from '@/styles/pages/resume.module.scss'

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume - {CMS.name}</title>
      </Head>
      {/* Layout wayper in nextjs */}
      <Layout>
        <main className="container sebcontent">
          <section className="row center-xs">
            <div className="col-xs-12">
              <Image
                className="titleImage"
                src="/title/resume.png"
                alt="Next.js Logo"
                width={120}
                height={120}
                priority />
              <h1>Resume</h1>
              <h2>Let’s work together!</h2>
              <p className={'mt-3 mb-2'}>For work inquiries feel free to get in touch with me</p>
              <h5>
                <a href="mailto:hello@stebin.co">hello@stebin.co</a>
              </h5>
              <p className={'mt-4'}>If you are looking for my resume, <a href="https://docs.google.com/document/d/18-O2Xkkb2g3qUGJaE1NmtXyebD8BsBDTSE_9BcjPgZc/edit?usp=sharing" target="_blank">it&apos;s here</a>.</p>
              <a className={'btn btn-primary mt-1'}>Download Resume</a>

            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}


// Work
// Some of my projects

// Let’s work together!
// For work inquires feel free to get in touch with me
// hello@stebin.co

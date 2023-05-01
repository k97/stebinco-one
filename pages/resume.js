/*
 Show a ui error in nextjs about router. check it and after remove layout comments
*/

import Head from "next/head"
import Image from 'next/image'
import Layout from "../components/layout"
import styles from '@/styles/pages/resume.module.scss'

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume</title>
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
              <p>Let’s work together! For work inquires feel free to get in touch with me</p>
              <h3>
                <a href="mailto:hello@stebin.co">hello@stebin.co</a></h3>
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

/*
 Show a ui error in nextjs about router. check it and after remove layout comments
*/
import Link from "next/link"
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
          <div className="row center-xs">
            <section className="col-xs-12">
              <Image
                className="titleImage"
                src="/title/resume.png"
                alt="Next.js Logo"
                width={120}
                height={120}
                priority />
              <h1>Resume</h1>
              <h2 className="mb-5">Let’s work together!</h2>
            </section>

            <section className="col-xs-12 col-md-5 col-lg-4">
              <div className={`card card-nohover align-left ${styles.resumecard}`}>
                <Image src="/sebhero.png" width={100} height={100} className={styles.displayIcon} alt="Resume Icon" />
                <h3>{CMS.name}</h3>
                <h4>{CMS.title}</h4>
                <a href={`mailto:${CMS.emailAddress}`} className="d-ib">{CMS.emailAddress}</a>
                <a className={`d-b no-arrow b-0  mt-3 ${styles.socials} ${styles.socialsinsta}`} href={CMS.socialLinks.linkedIn} target="_blank" title="Linkedin profile">
                  <Image src="/socials/linkedin-icon.svg" width={38} height={38} alt="Download Icon" className={'btn-icon'} />
                </a>
              </div>
              <a className={`btn btn-primary mt-4 d-b no-arrow  ${styles.resumebtn}`} href={CMS.resumeContent.downloadLink} target="_blank">
                <Image src="/download-icon.svg" width={16} height={16} alt="Download Icon" className={'btn-icon'} />
                Download Resume
              </a>
            </section>

            <section className={`
                col-xs-12
                col-md-7
                col-lg-8
                align-left
                markdown-content
                ${styles.resumecontent}`}>
              <h4>Summary</h4>
              <p>{CMS.resumeContent.summary}</p>

              <h4>Skills</h4>
              <p>
                <ul>
                  {(CMS.resumeContent.skills).map(skill => (
                    <li key={skill} className="s-tags">{skill}</li>
                  ))}
                </ul>
              </p>

              <h4>Tools</h4>
              <p className="mb-2"> Some of the tools that I use daily:</p>
              <p>
                <ul>
                  {(CMS.resumeContent.tools).map(skill => (
                    <li key={skill} className="s-tags">{skill}</li>
                  ))}
                </ul>
              </p>

            </section>


          </div>
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


// <p className={'mt-3 mb-2'}>For work inquiries feel free to get in touch with me</p>
// <h5>
//   <a href="mailto:hello@stebin.co">hello@stebin.co</a>
// </h5>
// <p className={'mt-4'}>If you are looking for my resume, <a href="https://docs.google.com/document/d/18-O2Xkkb2g3qUGJaE1NmtXyebD8BsBDTSE_9BcjPgZc/edit?usp=sharing" target="_blank">it&apos;s here</a>.</p>
//

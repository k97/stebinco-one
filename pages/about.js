import Link from "next/link"
import Head from "next/head"
import Image from 'next/image'
import styles from '@/styles/pages/about.module.scss'
import Layout from "../components/layout"
import { CMS } from '../lib/constants'

export default function About() {
  return (
    <>
      <Head>
        <title>About - {CMS.name}</title>
      </Head>
      <Layout>
        <main className="container sebcontent">
          <section className="row center-xs">
            <div className="col-xs-12">
              <Image
                className="titleImage"
                src="/title/artist.png"
                alt="About title image"
                width={120}
                height={120}
                priority />
              <h1>About</h1>
              <h2>My story as a designer</h2>
            </div>
          </section>

          <div className="row mt-4">
            <section className="col-xs-12">
              {CMS.aboutContent.map((content, id) => (
                // <p key={id}>{content}</p>
                <p key={id} dangerouslySetInnerHTML={{ __html: content }}></p>
              ))}
            </section>

            <div className="col-xs-12 col-md-6 col-lg-4">
              <Link href='/resume'>
                <section className={styles.aboutcard}>
                  <Image src="/about/resume-icon.svg" width={60} height={60} className={styles.displayIcon} alt="Resume Icon" />
                  <span>Know more about me</span>
                  <strong>See my resume</strong>
                </section>
              </Link>
            </div>

            <div className="col-xs-12 col-md-6 col-lg-4">
              <a href="mailto:hello@stebin.co">
                <section className={styles.aboutcard}>
                  <Image src="/about/mail-icon.svg" width={60} height={60} className={styles.displayIcon} alt="Mail Icon" />
                  <span>Send me an email</span>
                  <strong>Lets work together</strong>
                </section>
              </a>
            </div>


            <div className="col-xs-12 col-lg-4">
              <section className={`${styles.aboutcard} ${styles.mapcard}`} >
                <span className={styles.mapInfo}>Current Location <Image src="/about/location_on.svg" width={20} height={20} alt="Map Icon" /></span>
              </section>
            </div>

            <section className="col-xs-12 mt-3">
              <h3 class="align-left">Publications</h3>
              <p>One of the high points in my photography career was when <strong><a href="https://www.omanmagazine.com/" target="_blank">Oman Magazine</a></strong> published my photographs during my tour of the country. I played my visual strengths of capturing people in their moment, the native farmers of Oman in the deserts of <a href="https://en.wikipedia.org/wiki/Salalah" target="_blank">Salalah</a> with their livestock and the pictures came out really well. Please check out the feature below:</p>
              <img
                className={`${styles.magazine}`}
                src="/oman-mag.jpg"
                alt="Stebin - Oman magazine feature"
              />
            </section>
          </div>
        </main>
      </Layout>
    </>
  );
}

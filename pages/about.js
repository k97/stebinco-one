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
          <section className="row mt-4">
            <div className="col-xs-12 col-md-6 col-lg-7">
              <p>
                I am a UI/UX designer with a creative and passionate background in creating
                user-centric and engaging digital products. I have a bachelor’s degree in
                Electronics and Communication engineering and a creative portfolio of projects
                demonstrating my user research, wireframing, prototyping, testing, and UI design
                skills. I am proficient in using tools such as Figma, Sketch, and Adobe XD. I am
                eager to learn from experienced UX/UI professionals and contribute to the design
                process with my creativity, curiosity, and problem-solving abilities.
              </p>
            </div>
            <div className="col-xs-12 col-md-6 col-lg-5">
              <img
                className={styles.map}
                src="/about-map.png"
                alt="Stebin location image"
              />
            </div>


            <div className="col-xs-12 mt-4">
              <h3 class="align-left">Publications</h3>
              <p>One of the high points in my photography career was when <strong><a href="https://www.omanmagazine.com/" target="_blank">Oman Magazine</a></strong> published my photographs during my tour of the country. I played my visual strengths of capturing people in their moment, the native farmers of Oman in the deserts of <a href="https://en.wikipedia.org/wiki/Salalah" target="_blank">Salalah</a> with their livestock and the pictures came out really well. Please check out the feature below:</p>
              <img
                className={`${styles.magazine}`}
                src="/oman-mag.jpg"
                alt="Stebin - Oman magazine feature"
              />
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

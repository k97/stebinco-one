import Head from "next/head"
import Image from 'next/image'
import styles from '@/styles/pages/about.module.scss'
import Layout from "../components/layout"

export default function About() {
  return (
    <>
      <Head>
        <title>About page</title>
      </Head>
      <Layout>
        <main className="main">
          <div className="content">
            <Image
              className="titleImage"
              src="/title/artist.png"
              alt="Next.js Logo"
              width={120}
              height={120}
              priority />
            <h1>About</h1>
            <h2>My story as a designer</h2>

            <section className="container">
              <p>
                I am a UI/UX designer with a creative and passionate background in creating
                user-centric and engaging digital products. I have a bachelor’s degree in
                Electronics and Communication engineering and a creative portfolio of projects
                demonstrating my user research, wireframing, prototyping, testing, and UI design
                skills. I am proficient in using tools such as Figma, Sketch, and Adobe XD. I am
                eager to learn from experienced UX/UI professionals and contribute to the design
                process with my creativity, curiosity, and problem-solving abilities.
              </p>
              <img
                className={styles.map}
                src="/about-map.png"
                alt="Next.js Logo"
              />
            </section>
          </div>
        </main>
      </Layout>
    </>
  );
}

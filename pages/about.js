/*
 Show a ui error in nextjs about router. check it and after remove layout comments
*/

import Head from "next/head";
import styles from '@/styles/about.module.css'
import Layout from "../components/layout";

export default function About() {
  return (
    <>
      <Head>
        <title>About page</title>
      </Head>
      {/* Layout wayper in nextjs */}
      <Layout>
        <main className="main">
          <div className="content">
            <div>
            <h1> About page - My story as a designer</h1>
            <p>
            I am a UI/UX designer with a creative and passionate background in creating user-centric and engaging digital products. I have a bachelor’s degree in Electronics and Communication engineering and a creative portfolio of projects demonstrating my user research, wireframing, prototyping, testing, and UI design skills.  I am proficient in using tools such as Figma, Sketch, and Adobe XD. I am eager to learn from experienced UX/UI professionals and contribute to the design process with my creativity, curiosity, and problem-solving abilities.
            </p>
            </div>
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
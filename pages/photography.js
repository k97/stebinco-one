/*
 Show a ui error in nextjs about router. check it and after remove layout comments
*/

import Head from "next/head";
import Layout from "../components/layout";
import Image from 'next/image'
import styles from '@/styles/pages/photography.module.scss'

export default function Photography() {

  return (
    <>
      <Head>
        <title>Photography</title>
      </Head>
      {/* Layout wayper in nextjs */}
      <Layout>
        <main className="container sebcontent">
          <section className="row center-xs">
            <div className="col-xs-12">
              <Image
                className="titleImage"
                src="/title/photographer.png"
                alt="Photography title image"
                width={120}
                height={120}
                priority />
              <h1>Photography</h1>
              <h2>Some of my clicks</h2>
            </div>
          </section>

          <section className="row mt-4">
            <div className="col-xs-12">
              <p>My first camera was a <a href="https://www.flickr.com/photos/95742794@N05/27370388280/in/pool-camerawiki/" target="_blank">Yashica automatic</a>, which my father gave me when I was 4-5 years old. Then I got an upgrade to <a href="http://camera-wiki.org/wiki/Yashica_Samurai_X3.0" target="_blank">Yasica SLR</a> when I turned into a teenagar, in which he taught me about setting up focus. My father was an avid portrait photographer and his passion for capturing beautiful moments in our family inspired me to grow into someone who enjoys taking moments of people's lives.</p>

              <section className={`mt-4  ${styles.photogallery}`}>
                <p>The gallery below contains some of my best work. I have been featured in several mediums over the years. The most proudest one is a feauture in the Oman magazine when I lived in the UAE.</p>
                <section className="row">
                  {
                    [...Array(9).keys()].map(val => (
                      <div className="col-xs-12 col-md-6 col-lg-4" key={val}>
                        <Image
                          src={"https://source.unsplash.com/random/500x300?people/" + val}
                          alt={'Stebin photo gallery' + val}
                          width={700}
                          height={475}
                          style={{
                            width: '100%',
                            height: 'auto',
                          }} />
                      </div>
                    ))
                  }
                </section>
              </section>

            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}


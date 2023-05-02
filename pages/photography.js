/*
 Show a ui error in nextjs about router. check it and after remove layout comments
*/
import * as React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Image from 'next/image'
import styles from '@/styles/pages/photography.module.scss'
import { CMS } from '../lib/constants'

import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Photography() {

  const [basicExampleOpen, setBasicExampleOpen] = React.useState(false);

  var currentSlide = [{
    src: 'https://source.unsplash.com/random/500x300?people/7'
  }];
  const onImageView = (e, value) => {

    // currentSlide = [];
    currentSlide[0].src = value;
    setBasicExampleOpen(true);
    console.log(currentSlide)
  }
  return (
    <>
      <Head>
        <title>Photography - {CMS.title}</title>
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
              <p>My first camera was a <a href="https://www.flickr.com/photos/95742794@N05/27370388280/in/pool-camerawiki/" target="_blank">Yashica automatic</a>, which my father gave me when I was 4-5 years old. Then I got an upgrade to <a href="http://camera-wiki.org/wiki/Yashica_Samurai_X3.0" target="_blank">Yasica SLR</a> when I turned into a teenagar, in which he taught me about setting up focus. My father was an avid portrait photographer and his passion for capturing beautiful moments in our family inspired me to grow into someone who enjoys taking moments of people&apos;s lives.</p>
            </div>
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
                        onClick={(e) => onImageView(e, "https://source.unsplash.com/random/500x300?people/" + val)}
                        style={{
                          width: '100%',
                          height: 'auto',
                        }} />
                    </div>
                  ))
                }
              </section>
            </section>

          </section>
        </main >

        <Lightbox
          open={basicExampleOpen}
          close={() => setBasicExampleOpen(false)}
          carousel={{ finite: currentSlide.length <= 1 }}
          render={{
            buttonPrev: currentSlide.length <= 1 ? () => null : undefined,
            buttonNext: currentSlide.length <= 1 ? () => null : undefined,
          }}
          slides={currentSlide}
        />


      </Layout >
    </>
  );
}


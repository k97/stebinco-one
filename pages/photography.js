/*
 Show a ui error in nextjs about router. check it and after remove layout comments
*/
import * as React from "react"
import Head from "next/head"
import Layout from "../components/layout"
import Image from 'next/image'
import styles from '@/styles/pages/photography.module.scss'
import { CMS } from '../lib/constants'
import { Lightbox } from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

export default function Photography() {

  const [photoStageOpen, setPhotoStageOpen] = React.useState(false);

  var currentSlide = [{
    src: 'https://source.unsplash.com/user/ozstebin/500x300?/'
  }];
  const onImageView = (e, value) => {
    currentSlide[0].src = value;
    setPhotoStageOpen(true);
    console.log(currentSlide)
  }
  return (
    <>
      <Head>
        <title>Photography - {CMS.name}</title>
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
              <div className={styles.socialwrapper}>
                <a className={`${styles.socials} ${styles.socialsinsta}`} href={CMS.socialLinks.instagram} target="_blank" title="Instagram profile"></a>
                <a className={`${styles.socials} ${styles.socialsunsplash}`} href={CMS.socialLinks.unsplash} target="_blank" title="Unsplash album"></a>
                <a className={`${styles.socials} ${styles.socialsflickr}`} href={CMS.socialLinks.flickr} target="_blank" title="Flickr photostrem"></a>
              </div>
              {/* <h2>Some of my clicks</h2> */}
            </div>
          </section>

          <section className="row mt-3">
            <div className="col-xs-12">
              <p>My first camera was a <a href="https://www.flickr.com/photos/95742794@N05/27370388280/in/pool-camerawiki/" target="_blank">Yashica automatic</a>, which my father gave me when I was 5 years old. Then I got an upgrade to <a href="http://camera-wiki.org/wiki/Yashica_Samurai_X3.0" target="_blank">Yasica SLR</a> when I turned into a teenager, in which he taught me about setting up focus. My father was an avid portrait photographer and his passion for capturing beautiful moments in our family inspired me to grow into someone who enjoys taking moments of people&apos;s lives.</p>
              <p>The gallery below contains some of my best work. I have also published my work on some major platforms, the links are available in the header.</p>
            </div>
            <section className={`mt-4  row ${styles.photogallery}`}>
              {
                [...Array(9).keys()].map(val => (
                  <div className="col-xs-12 col-md-6 col-lg-4" key={val}>
                    <Image
                      src={"https://source.unsplash.com/user/ozstebin/500x300?/" + val}
                      alt={'Stebin photo gallery' + val}
                      width={700}
                      height={475}
                      onClick={(e) => onImageView(e, "https://source.unsplash.com/user/ozstebin/500x300?/" + val)}
                      style={{
                        width: '100%',
                        height: 'auto',
                      }} />
                  </div>
                ))
              }
            </section>

          </section>
        </main >

        <Lightbox
          open={photoStageOpen}
          close={() => setPhotoStageOpen(false)}
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


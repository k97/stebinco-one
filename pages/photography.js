/*
 Show a ui error in nextjs about router. check it and after remove layout comments
*/
import React, { useEffect, useState } from "react"
import Head from "next/head"
import Image from 'next/image'

import Layout from "@/components/layout"
import { CMS } from '@/lib/constants'
import { imgPath } from '@/lib/assets'

import { Lightbox } from "yet-another-react-lightbox"

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Slideshow from "yet-another-react-lightbox/plugins/slideshow"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import { MasonryPhotoAlbum } from "react-photo-album";

import "react-photo-album/masonry.css";
import styles from '@/styles/pages/photography.module.scss'

import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"

export default function Photography() {
  const [photos, setPhotos] = useState([]);
  const [index, setIndex] = useState(-1);


  const API_CLIENTID = process.env.NEXT_PUBLIC_API_CLIENTID;
  const API_PROFILEID = "ozstebin";
  const API_URL = `https://api.unsplash.com/users/${API_PROFILEID}/photos/?client_id=${API_CLIENTID}&per_page=30`;

  var collection = [];

  useEffect(() => {
    async function fetchUnsplashPhotos() {
      const response = await fetch(API_URL);
      const fetchedPhotos = await response.json();
      collection = [];
      fetchedPhotos.forEach(val => {
        collection.push({
          src: val.urls.regular,
          width: val.width,
          height: val.height
        })
      });

      setPhotos(collection);
    }
    fetchUnsplashPhotos();
  }, []);


  return (
    <>
      <Head>
        <title>{`Photography - ${CMS.name}`}</title>
      </Head>
      <Layout>

        <main className="container sebcontent mb-0 pb-0">
          <section className="row center-xs">
            <div className="col-xs-12">
              <Image
                src={imgPath.titlePhotography}
                className="titleImage"
                alt="Photography title image"
                width={120}
                height={120}
                priority />
              <h1>Photography</h1>
              <div className={styles.socialwrapper}>
                <a className={styles.socials} href={CMS.socialLinks.instagram} target="_blank" title="Instagram profile">
                  <Image
                    src={imgPath.socialInsta}
                    width={30}
                    height={30}
                    alt="insta icon" />
                </a>
                <a className={styles.socials} href={CMS.socialLinks.unsplash} target="_blank" title="Unsplash album">
                  <Image
                    src={imgPath.socialUnsplash}
                    width={30}
                    height={30}
                    alt="unsplash icon" /></a>
                <a className={styles.socials} href={CMS.socialLinks.flickr} target="_blank" title="Flickr photostrem">
                  <Image
                    src={imgPath.socialFlickr}
                    width={30}
                    height={30}
                    alt="flickr icon" /></a>
              </div>
              {/* <h2>Some of my clicks</h2> */}
            </div>
          </section>

          <section className="row mt-3">
            <div className="col-xs-12">
              <p>My first camera was a <a href="https://www.flickr.com/photos/95742794@N05/27370388280/in/pool-camerawiki/" target="_blank">Yashica automatic</a>, which my father gave me when I was 5 years old. Then I got an upgrade to <a href="http://camera-wiki.org/wiki/Yashica_Samurai_X3.0" target="_blank">Yasica SLR</a> when I turned into a teenager, in which he taught me about setting up focus. My father was an avid portrait photographer and his passion for capturing beautiful moments in our family inspired me to grow into someone who enjoys taking moments of people&apos;s lives.</p>
              <p>The gallery below contains some of my best work. I have also published my work on a few major platforms, the links are available in the header.</p>
            </div>

          </section>
        </main>

        <section className={`mt-4 px-2  ${styles.photogallery}`}>
          <MasonryPhotoAlbum
            photos={photos}
            columns={containerWidth => {
              if (containerWidth < 600) return 2;
              if (containerWidth < 900) return 3;
              return 4;
            }}
            sizes={{
              size: "1168px",
              sizes: [{ viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" }],
            }}
            breakpoints={[220, 360, 480, 600, 900, 1200]}
            spacing={8}
            onClick={({ index }) => setIndex(index)}
          />
        </section>

        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />


      </Layout>
    </>
  );

}

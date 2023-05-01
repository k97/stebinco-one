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
            <div class="col-xs-12">
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
              <p>When I was 4-5 years old my father gave me my first camera. It was a <a href="https://www.flickr.com/photos/95742794@N05/27370388280/in/pool-camerawiki/" target="_blank">Yashica automatic</a> and then grew to a <a href="http://camera-wiki.org/wiki/Yashica_Samurai_X3.0" target="_blank">Yasica SLR</a> which he taught me how to focus. He was an avid family portrait photographer who without any fail carried his camera when ever there was an event and trusted me with it. I took a lot of really bad photos which he developed when he goes from my hometown to UAE and then develop it from there and send back via airmail with his comments for my lessons on the back side of it.</p>

              <p>Although I indeed took some terrible photos at first, I think having my own camera so early in life had a big impact on me. It made me conscious about my surroundings and perhaps even fed my life-long curiosity for the world around me. Looking up is fun and can reveal a whole new world, even in a place where you’ve been walking a hundred times.</p>

              <h3>People & time</h3>
              <p>Really, at the core of what intrigues me about photography are people and time. Photography is the closest thing we’ve got to time travel I think. Not only can photography capture a moment in time, later to be recalled, but photography has this magical way of allowing the recorder—the photographer—to create a picture that paints a moment in time in the way you experienced it, the way you felt about that moment. Good photography to me tells some sort of story. It could be very obvious as in showing someone doing something or an important event, but often the “story” part is hidden and faint, the sort of story that you don’t yet have words for in your mind but you know so well. A feeling or a state of mind.</p>
              <h3 className="align-center">Pictures Coming soon.</h3>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}


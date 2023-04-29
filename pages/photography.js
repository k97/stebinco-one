/*
 Show a ui error in nextjs about router. check it and after remove layout comments
*/

import Head from "next/head";
import Layout from "../components/layout";

export default function Photography() {
  return (
    <>
      <Head>
        <title>Photography</title>
      </Head>
      {/* Layout wayper in nextjs */}
      <Layout>
        <main className="main">
          <div className="container">
            <div>
              <h1>Photography page - Some of my clicks</h1>

              <p>When I was 4 years old my grandfather gave me my first camera. He was an avid hobby photographer and collector of quirky Soviet-era cameras. The camera he gave me was a Kodak Pocket Instamatic which used this really funky cartridge-loaded 110 film. I took a lot of really bad photos.</p>

              <h3>Looking around</h3>
              <p>Although I indeed took some terrible photos at first, I think having my own camera so early in life had a big impact on me. It made me conscious about my surroundings and perhaps even fed my life-long curiosity for the world around me. Looking up is fun and can reveal a whole new world, even in a place where you’ve been walking a hundred times.</p>

              <h3>People & time</h3>
              <p>Really, at the core of what intrigues me about photography are people and time. Photography is the closest thing we’ve got to time travel I think. Not only can photography capture a moment in time, later to be recalled, but photography has this magical way of allowing the recorder—the photographer—to create a picture that paints a moment in time in the way you experienced it, the way you felt about that moment.
                Good photography to me tells some sort of story. It could be very obvious as in showing someone doing something or an important event, but often the “story” part is hidden and faint, the sort of story that you don’t yet have words for in your mind but you know so well. A feeling or a state of mind.</p>
              <h2>Pictures Coming soon.</h2>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}


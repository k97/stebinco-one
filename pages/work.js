/*
 Show a ui error in nextjs about router. check it and after remove layout comments
*/

import Head from "next/head";
import Layout from "../components/layout";

export default function Work() {
  return (
    <>
      <Head>
        <title>Work</title>
      </Head>
      {/* Layout wayper in nextjs */}
      <Layout>
        <main className="main">
          <div className="content">
            <div>
            <h1>Work page - Some of my projects</h1>
            <h2>Coming soon.</h2>
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
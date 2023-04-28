/*
 Show a ui error in nextjs about router. check it and after remove layout comments
*/

import Head from "next/head";
import Layout from "../components/layout";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      {/* Layout wayper in nextjs */}
      <Layout>
        <main className="main">
          <div className="content">
            <div>
            <h1>Resume page</h1>
            <p>
Let’s work together!
For work inquires feel free to get in touch with me
<h3>
<a href="mailto:hello@stebin.co">hello@stebin.co</a></h3>
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
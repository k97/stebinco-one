import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/pages/home.module.scss'
import { motion } from "framer-motion"

import { CMS } from '../lib/constants'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const textMotion = {
    rest: {
      color: "grey",
      x: 0,
      transition: {
        duration: 2,
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      color: "blue",
      x: 30,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Head>
        <title>{CMS.name} - {CMS.title}</title>
        <meta name="description" content={CMS.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={CMS.favicon} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={CMS?.name} />
        <meta property="og:description" content={CMS?.description} />
        <meta property="og:image" content={CMS.openGraph.image} />

        <link rel="canonical" href={CMS.url} />

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
      </Head>

      <main className={`${styles.heroWrapper}`}>

        <motion.section className={`${styles.hero}`} initial="rest" whileHover="hover" animate="rest">
          <Image
            className={`${styles.heroImage}`}
            src="/sebhero.png"
            alt="Stebin hero image"
            width={100}
            height={100}
            priority
          />
          <div className={` ${styles.heroContent}`}>
            <h1>Hello there,{`I'm`} <span className={`${styles.name}`}>{CMS.name}</span></h1>
            <h2>{`I'm`} a <span className={`${styles.title}`}>{CMS.title}</span> based in Melbourne</h2>
            <h3>I love designing web & user interfaces and</h3>
            <h4>photography</h4>
          </div>

          <motion.div variants={textMotion}>
            <Image src="/cracker/figma.png" width={100} height={100} />
            <Image src="/cracker/paintkit.png" width={100} height={100} />
            <Image src="/cracker/partypopper.png" width={100} height={100} />
            <Image src="/cracker/camera.png" width={100} height={100} />
            <Image src="/cracker/phone.png" width={100} height={100} />
          </motion.div>

        </motion.section>
      </main>
    </>
  )
}
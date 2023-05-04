import Head from 'next/head'
import Image from 'next/image'
import { motion, useAnimation } from "framer-motion"

import styles from '@/styles/pages/home.module.scss'
import { CMS } from '../lib/constants'
import { figAnimate, paintKitAnimate, partypopperAnimate, cameraAnimate, phoneAnimte, wavingHand } from '../lib/motion.config'

export default function Home() {
  return (
    <>
      <Head>
        <title>{CMS.name} - {CMS.title}</title>
      </Head>
      <main className={`${styles.heroWrapper} `} >

        <motion.section initial="rest" animate="rest" whileHover="hover">
          <section className={` ${styles.heroIcons}`} >
            <motion.img src="/cracker/figma.png" alt="figma icon" width={100} height={100} variants={figAnimate} />
            <motion.img src="/cracker/partypopper.png" alt="partypopper icon" width={100} height={100} variants={partypopperAnimate} />
            <motion.img src="/cracker/paintkit.png" alt="paintkit icon" width={100} height={100} variants={paintKitAnimate} />
            <motion.img src="/cracker/camera.png" alt="camera icon" width={100} height={100} variants={cameraAnimate} />
            <motion.img src="/cracker/phone.png" alt="phone icon" width={100} height={100} variants={phoneAnimte} />
          </section>
          <section className={`${styles.hero}`}>
            <Image
              className={`${styles.heroImage}`}
              src="/sebhero.png"
              alt="Stebin hero image"
              width={100}
              height={100}
              priority
            />
            <motion.img
              className={`${styles.wavingHand}`}
              src="/hand.svg"
              alt="Stebin hero image"
              width={38}
              height={38}
              priority
              title="Wavey wavey!!"
              variants={wavingHand}
            />
            <div className={` ${styles.heroContent}`}>
              <h1>Hello there, {`I'm`} <span className={`${styles.name}`}>{CMS.name}</span></h1>
              <h2>{`I'm`} a <span className={`${styles.title}`}>{CMS.title}</span> based in Melbourne</h2>
              <h3>I love designing web & user interfaces and</h3>
              <h4>photography</h4>
            </div>
          </section>
        </motion.section>
      </main>
    </>
  )
}

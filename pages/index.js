import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/pages/home.module.scss'
import { motion } from "framer-motion"

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
        <title>Stebin Sebastine - UI/UX Designer</title>
        <meta name="description" content="I'm a designer based in Melbourne, Australia. I’m passionate about designing creative design solutions to customer problems through Human-Centered Design®" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/browsericon.png" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Stebin Sebastine - UI/UX Designer" />
        <meta property="og:description" content="I'm a designer based in Melbourne, Australia. I’m passionate about designing creative design solutions to customer problems through Human-Centered Design®" />
        <meta property="og:image" content="/social.png" />

        <link rel="canonical" href="https://www.stebin.co/" />

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
            <h1>Hello there,{`I'm`} <span className={`${styles.name}`}>Stebin Sebatine</span></h1>
            <h2>{`I'm`} a <span className={`${styles.title}`}>UI/UX Designer</span> based in Melbourne</h2>
            <h3>I love designing web & user interfaces and</h3> <h4>photography</h4>
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

import { useState, useEffect } from "react"
import Link from "next/link"
import Script from 'next/script'
import { useRouter } from "next/router"

import { CMS } from '../lib/constants'
import styles from "../styles/components/navbar.module.scss"

const path = [
  { id: 1, name: " Home", path: "/", imgpath: "../menu/home-icon.svg" },
  { id: 2, name: "About", path: "/about", imgpath: "../menu/about-icon.svg" },
  { id: 3, name: "Design Work", path: "/work", imgpath: "../menu/work-icon.svg" },
  { id: 4, name: "Photography", path: "/photography", imgpath: "../menu/camera-icon.svg" },
  { id: 5, name: "Resume", path: "/resume", imgpath: "../menu/resume-icon.svg" }
];

export default function Navbar() {

  const router = useRouter();

  var routePath = (routePath, navPath) => {
    const nameValue = 'active';
    var activeVal;

    if (!routePath.localeCompare(navPath)) {
      activeVal = nameValue;
    } else if (routePath !== '/') {
      activeVal = (routePath === ('/' + navPath)) ? nameValue : '';
    } else {
      activeVal = '';
    }
    return activeVal
  };

  const [activeTheme, setActiveTheme] = useState();
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";
  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  const toggleColorMode = (e) => {
    // https://github.com/robmorieson/next-dark-mode-toggle
    setActiveTheme(inactiveTheme);
    e.preventDefault();
  }

  return (
    <>
      <nav className={styles.menu}>
        {path.map((value) => {
          return (
            <Link href={value.path} className={`${styles.link} ${routePath(router.pathname, value.path)}`} key={value.id}>
              <span className={styles.tooltip}>{value.name}</span>
              <img aria-label={value.name} alt={value.name} src={value.imgpath} className={styles.icon} />
            </Link>
          );
        })}
        <span className={` ${styles.menusplitter}`}></span>
        <Link href="" className={`${styles.link} `} onClick={toggleColorMode} >
          <span className={styles.tooltip}>Toggle mode</span>
          <span className={`${styles.icon} ${styles.themeMode}`}></span>
          {/* <img src="../menu/sun-icon.svg" /> */}
        </Link>
      </nav >

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', ${CMS.GoogleAnalyticsId}, 'auto');
          ga('send', 'pageview');
        `}
      </Script>
      <Script
        src="https://www.google-analytics.com/analytics.js"
        strategy="afterInteractive"
      />
    </>
  )
}


// {router.asPath == "/#about" ? "active" : ""}

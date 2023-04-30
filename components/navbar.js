import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/components/navbar.module.scss";

const path = [
  { uid: 21, name: " Home", id: 1, path: "/", imgpath: "../menu/home-icon.svg" },
  { uid: 31, name: "About", id: 2, path: "about", imgpath: "../menu/about-icon.svg" },
  { uid: 41, name: "Design Work", id: 3, path: "work", imgpath: "../menu/work-icon.svg" },
  { uid: 51, name: "Photography", id: 4, path: "photography", imgpath: "../menu/camera-icon.svg" },
  { uid: 61, name: "Resume", id: 5, path: "resume", imgpath: "../menu/resume-icon.svg" }
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


  return (
    <>
      <nav className={styles.menu}>
        {path.map((value) => {
          return (
            <Link href={value.path} className={`${styles.link} ${routePath(router.pathname, value.path)}`} key={value.uid}>
              <span className={styles.tooltip}>{value.name}</span>
              <img aria-label={value.name} alt={value.name} src={value.imgpath} className={styles.icon} />
            </Link>
          );
        })}
      </nav >
    </>
  )
}


// {router.asPath == "/#about" ? "active" : ""}

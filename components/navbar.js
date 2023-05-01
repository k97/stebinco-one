import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/components/navbar.module.scss";

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
      </nav >
    </>
  )
}


// {router.asPath == "/#about" ? "active" : ""}

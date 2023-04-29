import Link from "next/link";
import styles from "../styles/components/navbar.module.scss";

const path = [
  { uid: 21, name: ' Home', id: 1, path: '/' },
  { uid: 31, name: 'About', id: 2, path: 'about' },
  { uid: 41, name: 'Work', id: 3, path: 'work' },
  { uid: 51, name: 'Photography', id: 4, path: 'photography' },
  { uid: 61, name: 'Resume', id: 5, path: 'resume' }
];

export default function Navbar() {
  return (
    <>
      <nav className={styles.container}>
          {path.map((value) => {
            return (
              <div className={`${styles.icon} ${styles.hov}`} key={value.uid}>
                <Link href={value.path}>
                  <div className={styles.img} aria-label={value.name} role="img"></div>
                  <div className={styles.text}>{value.name}</div>
                </Link>
              </div>
          );
          })}
      </nav>
    </>
  )
}

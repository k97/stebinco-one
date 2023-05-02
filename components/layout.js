// import custom components
import Navbar from "./navbar"
import Meta from './meta'

export default function Layout({ children }) {
  // styles the main html tag
  const styles = {
    display: "flex",
    flexDirection: "row"
  };
  return (
    <>
      <Meta />
      <>{children}</>
      <Navbar />
    </>
  );
}

// import custom components
import Navbar from "./navbar";

export default function Layout({ children }) {
  // styles the main html tag
  const styles = {
    display: "flex",
    flexDirection: "row"
  };
  return (
    <>
      <main>{children}</main>
      <Navbar />
    </>
  );
}

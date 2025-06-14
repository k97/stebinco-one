// import custom components
import Navbar from "./navbar";
import Meta from "./meta";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Meta />
      <div className="">
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

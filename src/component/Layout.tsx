import Dialogs from "./dialog";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
      <Dialogs/>
    </>
  );
}
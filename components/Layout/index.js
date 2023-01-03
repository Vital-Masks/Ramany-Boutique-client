import Header from "../Header";
import Footer from "../Footer";
import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1">
        {children}
      </div>
      <div className="fixed bottom-5 right-5 cursor-pointer">
        <Link href="https://wa.me/+14164742388?text=Hello!">
          <a target="_blank">
            <Image src="/assets/icons/whatsapp-icon.png" width={36} height={36}/>
          </a>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

import Header from '../Header';
import Footer from '../Footer';
import Image from 'next/image';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1">{children}</div>
      <div className="fixed cursor-pointer bottom-5 right-5">
        <Link href="https://wa.me/+14164742388?text=Hello!">
          <a target="_blank">
            <Image
              priority
              src="/assets/icons/whatsapp-icon.png"
              width={60}
              height={60}
            />
          </a>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

import {
  HOME,
  JEWELLERIES,
  PRIVACY,
  PRODUCTS,
  TERMS,
} from '../../constants/root';
import Link from 'next/link';
import { BsFillTelephoneFill, BsInstagram } from 'react-icons/bs';
import { MdMail, MdPhoneInTalk } from 'react-icons/md';

const Footer = () => {
  const navigation = {
    main: [
      { name: 'Home', href: HOME },
      // { name: 'Clothing', href: PRODUCTS },
      { name: 'Jewellery', href: JEWELLERIES },
      { name: 'Terms and Conditions', href: TERMS },
      { name: 'Privacy Policy', href: PRIVACY },
    ],
    social: [
      {
        name: 'Phone',
        href: 'tel:+940771234567',
        icon: (props) => <MdPhoneInTalk {...props} />,
      },
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/theramyaboutique/',
        icon: (props) => <BsInstagram {...props} />,
      },
      {
        name: 'Email',
        href: 'mailto:theramyaboutique@gmail.com',
        icon: (props) => <MdMail {...props} />,
      },
    ],
  };

  return (
    <footer className="bg-white border-t">
      <div className="px-4 py-8 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <nav
          className="flex flex-wrap justify-center -mx-5 -my-2"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <Link href={item.href} key={item.name}>
              <a className="px-5 py-2 text-base text-gray-500 hover:text-gray-900">
                {item.name}
              </a>
            </Link>
          ))}
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          {navigation.social.map((item) => (
            <Link href={item.href} key={item.name}>
              <a className="text-gray-400 hover:text-gray-500" target="_blank">
                <span className="sr-only">{item.name}</span>
                <item.icon className="w-5 h-5" aria-hidden="true" />
              </a>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-base text-center text-gray-400">
          &copy; {new Date().getFullYear()} The Ramya Boutique. All rights
          reserved. | Designed by Vital Masks
        </p>
      </div>
    </footer>
  );
};

export default Footer;

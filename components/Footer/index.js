import {
  HOME,
  JEWELLERIES,
  PRIVACY,
  PRODUCTS,
  TERMS,
} from '../../constants/root';
import Link from 'next/link';
import { BsInstagram } from 'react-icons/bs';
import { MdMail, MdPhoneInTalk } from 'react-icons/md';

const Footer = () => {
  const navigation = {
    main: [
      // { name: 'Home', href: HOME },
      // { name: 'Clothing', href: PRODUCTS },
      // { name: 'Jewellery', href: JEWELLERIES },
      { name: 'Terms and Conditions', href: TERMS },
      { name: 'Privacy Policy', href: PRIVACY },
    ],
    social: [
      {
        name: 'Phone',
        href: 'tel:+14164742388',
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
        <div className="flex items-center justify-between">
          <p className="text-sm text-center text-gray-400">
            &copy; {new Date().getFullYear()} The Ramya Boutique. All rights
            reserved. | Developed by Vital Masks
          </p>
          <div className="flex justify-center space-x-6">
            <nav
              className="flex flex-wrap justify-center -mx-5 -my-2"
              aria-label="Footer"
            >
              {navigation.main.map((item) => (
                <Link href={item.href} key={item.name}>
                  <a className="px-5 py-2 text-sm text-gray-500 hover:text-gray-900">
                    {item.name}
                  </a>
                </Link>
              ))}
            </nav>
            {navigation.social.map((item) => (
              <Link href={item.href} key={item.name}>
                <a
                  className="text-gray-400 hover:text-gray-500"
                  target="_blank"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="w-4 h-4" aria-hidden="true" />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

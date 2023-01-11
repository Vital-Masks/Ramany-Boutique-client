import Link from 'next/link';
import { ABOUT, HOME, JEWELLERIES } from '../../constants/root';
import { useRouter } from 'next/router';

const NavItems = () => {
  const router = useRouter();
  const { jewelleyId } = router.query;

  const active = (value) => {
    if (value) {
      return 'text-orange-500';
    } else {
      if (router.pathname === HOME) {
        return 'text-gray-300 ';
      } else {
        return 'text-gray-500 ';
      }
    }
  };

  return (
    <div className="flex flex-col gap-5 divide-y lg:flex-row lg:divide-y-0">
      <Link href={HOME}>
        <a
          className={`font-normal  transition-colors hover:text-orange-500 ${active(
            router.pathname === HOME
          )}`}
        >
          Home
        </a>
      </Link>
      <Link href={{ pathname: JEWELLERIES }}>
        <a
          className={`font-normal transition-colors hover:text-orange-500 ${active(
            router.pathname === JEWELLERIES || jewelleyId
          )}`}
        >
          Jewels Collections
        </a>
      </Link>
      <Link href={ABOUT}>
        <a
          className={`font-normal  transition-colors hover:text-orange-500 ${active(
            router.pathname === ABOUT
          )}`}
        >
          About Us
        </a>
      </Link>
    </div>
  );
};

export default NavItems;

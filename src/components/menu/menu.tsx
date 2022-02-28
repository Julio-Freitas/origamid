import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  return (
    <ul className="flex text-silver text-lg  space-x-4 justify-between  relative  max-h-20 w-full z-10 p-2">
      <li className="hover:border  hover:rounded-sm   hover:animate-pulse  w-24">
        <Link href="/">
          <a className="flex w-full h-full relative">
            <Image
              src="https://raw.githubusercontent.com/Julio-Freitas/breakingbadapi/main/src/assets/img/bb.png"
              layout="fill"
              objectFit="cover"
              alt="Logo breakingBad"
            />
          </a>
        </Link>
      </li>
      <li className="hover:underline hover:animate-pulse  hover:rounded-sm hover:text-green-100 hover:font-semibold p-1 text-white">
        <Link href="/personagens">
          <a className="block w-full h-full font-semibold">Personagens</a>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;

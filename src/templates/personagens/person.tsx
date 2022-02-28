import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

type character = {
  char_id: number;
  name: string;
  birthday: string;
  occupation: Array<string>;
  img: string;
  status: string;
  appearance: Array<number>;
  nickname: string;
  portrayed: string;
};

type TypeProps = {
  characters: Array<character>;
};

const Characters: NextPage<TypeProps> = ({ characters }) => {
  return (
    <div className="container my-0 mx-auto flex flex-wrap gap-4 mt-12 ">
      {characters.map((character) => (
        <div
          key={character.char_id}
          className="flex flex-col bg-breakingBad-orange  shadow-md rounded-md border border-gray-300 w-60"
        >
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-shrink-0 mx-auto sm:mx-0 h-48   w-full  bg-breakingBad-green  overflow-hidden relative">
              <Image
                src={character.img}
                layout="fill"
                objectFit="fill"
                alt="Logo breakingBad"
              />
            </div>
          </div>

          <div className="text-center sm:text-left sm:ml-4  px-2 py-4">
            <p className="text-xl text-white block mt-2">{character.name}</p>
            <p className="text-xl text-white italic"> {character.nickname}</p>

            <Link href={`/personagens/${character.char_id}`}>
              <a className=" hover:text-white hover:bg-white-500 border border-white-500 font-semibold rounded-md px-4 py-1 text-xs w-full block text-center mt-3 text-white">
                Ver mais
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;

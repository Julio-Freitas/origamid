import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

import bannerBreakingBad from "../../../public/img/banner.png";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-breakingBad-green  lg:min-h-full h-screen flex items-center lg:items-center p-8 sm:p-12">
        <div className="flex-grow bg-breakingBad-orange  shadow-md rounded-md border border-gray-300 px-2 py-4 ">
          <div className="sm:flex sm:items-center">
            <div className=" sm:flex-shrink-0 mx-auto sm:mx-0 h-24 w-24  border bg-breakingBad-green  rounded-full overflow-hidden relative">
              <Image
                src={bannerBreakingBad}
                layout="fill"
                alt="Logo breakingBad"
              />
            </div>

            <div className="text-center sm:text-left sm:ml-4">
              <p className="text-xl text-white">Water walter</p>
              <cite className="block text-white">Eu sou aquele que bate</cite>

              <button
                onClick={() => router.push("/personagens/1")}
                type="button"
                className="text-white outline-none border border-gray-100 hover:text-white hover:bg-breakingBad-green  font-semibold rounded-md px-4 py-1 text-xs"
              >
                Ver personagen
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-breakingBad-orange lg:min-h-screen lg:items-centerp-12 hidden  lg:flex">
        <div className="relative w-full min-h-screen">
          <Image
            src={bannerBreakingBad}
            layout="fill"
            objectFit="contain"
            alt="Logo breakingBad"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

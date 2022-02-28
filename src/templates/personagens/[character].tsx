import { NextPage } from "next";
import Image from "next/image";
import { TypeCharacter } from "../../types/types";

type TypeProps = {
  character: TypeCharacter;
};

const Character: NextPage<TypeProps> = ({ character }) => {
  const { img, name, nickname, birthday, occupation, status } = character;
  return (
    <div className="container my-12 mx-auto  w-full bg-breakingBad-green flex gap-4">
      <div className="relative w-96 h-96">
        <Image layout="fill" objectFit="fill" src={img} alt={name} />
      </div>

      <div className="py-4">
        <p className="text-amber-100 font-semibold">
          <span className="text-white font-semibold">Nome:</span> {name}
        </p>
        <p className="text-amber-100 font-semibold">
          <span className="text-white font-semibold">Apelido: </span> {nickname}
        </p>
        <p className="text-amber-100 font-semibold">
          <span className="text-white font-semibold"> Aniversário: </span>{" "}
          {birthday}
        </p>
        <p className="text-amber-100 font-semibold">
          <span className="text-white font-semibold"> Empregos: </span>

          {occupation.map((item) => (
            <span className="text-amber-100 font-semibold" key={item}>
              {item}
            </span>
          ))}
        </p>
        <p className="text-amber-100 font-semibold">
          <span className="text-white font-semibold"> Status</span>: {status}
        </p>
      </div>
    </div>
  );
};

export default Character;

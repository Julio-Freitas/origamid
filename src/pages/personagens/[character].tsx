import { GetServerSideProps } from "next";
import Character from "../../templates/personagens/[character]";
export default Character;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  const { BASE_URL } = process.env;

  const headers = {
    "Content-Type": "application/json",
  };

  const resp = await fetch(`${BASE_URL}/characters/${params?.character}`, {
    headers,
  });

  const character = await resp.json();

  return {
    props: {
      character: character[0],
    },
  };
};

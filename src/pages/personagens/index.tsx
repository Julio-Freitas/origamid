import { GetServerSideProps } from "next";

import Characters from "../../templates/personagens";

export const getServerSideProps: GetServerSideProps = async () => {
  const { BASE_URL } = process.env;

  const headers = {
    "Content-Type": "application/json",
  };
  const resp = await fetch(`${BASE_URL}/characters/`, {
    headers,
  });

  const characters = await resp.json();

  return {
    props: {
      characters: characters,
    },
  };
};

export default Characters;

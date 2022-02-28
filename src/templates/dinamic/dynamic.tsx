import { useRouter } from "next/router";
import Quiz from "./quiz";
import Slider from "./slider";

type TypeRoutes = {
  [key: string]: React.ReactNode;
};

const routes: TypeRoutes = {
  quiz: <Quiz />,
  slider: <Slider />,
};

const Dynamic = () => {
  const {
    query: { slug },
  } = useRouter();

  if (!!slug && routes.hasOwnProperty(slug as string))
    return routes[slug as string];
  else return <h1 className="text-white">Carregando... </h1>;
};

export default Dynamic;

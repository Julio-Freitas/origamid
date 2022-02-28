import { ReactElement } from "react";
import Menu from "../menu";

type TypeProps = { children: ReactElement };

const Layout = ({ children }: TypeProps) => {
  return (
    <div className="bg-dark relative h-full min-h-screen">
      <Menu />
      {children}
    </div>
  );
};

export default Layout;

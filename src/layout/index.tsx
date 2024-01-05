import React from "react";
import Header from "../components/Header";

interface ILayoutFragment {
  children: React.ReactNode;
  type: "normal" | "first";
  page: string;
  desc: string;
}

const LayoutFragment: React.FC<ILayoutFragment> = ({ children, type, page, desc }) => {
  return (
    <>
      {type === "normal" && <Header type="normal" page='0' desc='#' />}
      {type === "first" && <Header type="first" page={page} desc={desc} />}
      <main className="mt-12">{children}</main>
    </>
  );
};

export default LayoutFragment;

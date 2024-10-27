import React from "react";

interface Props {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    // Nav
    <div>{children}</div>
    // footer
  );
};

export default HomeLayout;

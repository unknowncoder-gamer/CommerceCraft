import * as React from "react";

import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div
      className={cn("h-full flex items-center justify-center bg-indigo-500")}
    >
      {children}
    </div>
  );
};

export default AuthLayout;

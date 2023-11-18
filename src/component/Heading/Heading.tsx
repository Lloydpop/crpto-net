import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
}

export const Heading = ({ children }: HeadingProps) => {
  return (
    <h1 className="font-titi lg:text-[28px] text-[22px] w-fit text-center">
      {children}
      <p className="mt-1 flex items-center justify-center">
        <p className="w-[10px] h-[10px] rounded-full gradient "></p>
        <p className="w-full h-[1px] bg-[#ffffff54]"></p>
        <p className="w-[10px] h-[10px] rounded-full gradient "></p>
      </p>
    </h1>
  );
};

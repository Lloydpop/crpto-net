import { ReactNode } from "react";
import { Footer, Header } from "..";

interface PageWrapperProps {
  children: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <main>
      <div className="">
        <div className="py-8">
          <Header />
        </div>
        <div className="lg:mt-6 mt-3 overflow-hidden lg:px-20 px-8 py-6">
          {children}
        </div>
      </div>
      <Footer />
    </main>
  );
};

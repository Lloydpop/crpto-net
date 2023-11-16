import { ReactNode } from "react";
import { Footer, Header } from "..";

interface PageWrapperProps {
  children: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <main>
      <div className="lg:px-20 px-8">
        <div className="py-8">
          <Header />
        </div>
        <div className="lg:mt-14 mt-12 overflow-x-hidden">{children}</div>
      </div>
      <Footer />
    </main>
  );
};

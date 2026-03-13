import { Helmet } from "react-helmet-async";
import { ReactNode, useEffect } from "react";

interface PageWrapperProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function PageWrapper({ title, description, children }: PageWrapperProps) {
  
  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>{title} | Nactro Technology</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="w-full pt-16 flex-grow flex flex-col">
        {children}
      </div>
    </>
  );
}

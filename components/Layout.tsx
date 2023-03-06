import { ThemeProvider } from "next-themes";
import React from "react";
import Header from "./Header";

interface ILayout {
  children: JSX.Element;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <ThemeProvider>
      <Header />
      <div className="bg-base-200 transition duration-300">
        <div className="container mx-auto py-8 h-[calc(100vh-64px)] px-2 md:px-0">
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;

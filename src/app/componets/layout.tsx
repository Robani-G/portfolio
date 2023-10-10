import React from "react";
type LayoutProps = {
  children: React.ReactNode;
  clasName:string;
  
};
function Layout({ children ,clasName}: LayoutProps) {
  return (
    <div className={`flex w-full  justify-center p-3 ${clasName}`}>

      {children}
    </div>
  );
}

export default Layout;

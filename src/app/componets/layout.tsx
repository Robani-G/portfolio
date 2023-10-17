import React from "react";
type LayoutProps = {
  children: React.ReactNode;
  clasName:string;
  
};
function Layout({ children ,clasName}: LayoutProps) {
  return (
    <div className={`flex w-full  justify-center mt-10  p-2 ${clasName}`}>

      {children}
    </div>
  );
}

export default Layout;

import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className=" text-center text-3xl font-bold capitalize mb-5 p-2">
      {children}
    </h2>
  );
}

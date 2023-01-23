import React, { ReactNode } from "react";

type Props = { children: ReactNode; title: string };

export default function Category({ children, title }: Props) {
  return (
    <>
      <h1 className="w-full text-4xl my-8">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {children}
      </div>
    </>
  );
}

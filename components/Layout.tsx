import React, { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return <div className="max-w-7xl mx-auto px-8">{children}</div>;
}

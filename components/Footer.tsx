import React from "react";
import Layout from "./Layout";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-[#181818] py-4 text-white">
      <Layout>
        <div>Footer</div>
        <div>Footer</div>
        <div>Footer</div>
      </Layout>
    </footer>
  );
}

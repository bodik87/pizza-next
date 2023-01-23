import Image from "next/image";
import Layout from "./Layout";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="pt-8">
      <Layout>
        <div className="flex items-center bg-slate-200">
          <Image src="/icon.svg" alt="Logo" width={36} height={36} priority />
          <p>Блок шапки</p>
        </div>
      </Layout>
    </div>
  );
}

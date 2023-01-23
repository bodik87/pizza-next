import Image from "next/image";
import { Inter } from "@next/font/google";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Favorites from "@/components/Favorites";
import Category from "@/components/Category";
import { pizzas } from "@/data/products/pizzas";
import { categories } from "@/data/data";
import GoodCard from "@/components/GoodCard";
import { drinks } from "@/data/products/drinks";
import { deserts } from "@/data/products/deserts";
import Layout from "@/components/Layout";
import { salads } from "@/data/products/salads";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <Navigation />

      <Layout>
        <Favorites />

        <section id={categories[0].id}>
          <Category title={categories[0].title}>
            {pizzas.map((pizza) => (
              <GoodCard key={pizza.id} product={pizza} />
            ))}
          </Category>
        </section>

        <section id={categories[1].id}>
          <Category title={categories[1].title}>
            {drinks.map((drink) => (
              <GoodCard key={drink.id} product={drink} />
            ))}
          </Category>
        </section>

        <section id={categories[2].id}>
          <Category title={categories[2].title}>
            {salads.map((salad) => (
              <GoodCard key={salad.id} product={salad} />
            ))}
          </Category>
        </section>

        <section id={categories[3].id}>
          <Category title={categories[3].title}>
            {deserts.map((desert) => (
              <GoodCard key={desert.id} product={desert} />
            ))}
          </Category>
        </section>
      </Layout>
      <Footer />
    </main>
  );
}

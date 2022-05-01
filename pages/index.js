import Head from "next/head";
import Banner from "../components/Views/Banner";
import Card from "../components/Views/Card";
import CardSection from "../components/Views/CardSection";
import CategoryCard from "../components/Views/CategoryCard";

export default function Home() {
  return (
    <div className="relative h-full">
      <Head>
        <title>Ramany Boutique</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Banner />
      <CardSection />
      <div className="px-5 md:px-20 xl:px-0 max-w-screen-lg 2xl:max-w-screen-xl mx-auto my-20 flex gap-3 overflow-x-scroll lg:overflow-hidden">
          <CategoryCard size="large" />
          <CategoryCard size="small" />
          <CategoryCard size="small" />
      </div>
      <CardSection />
    </div>
  );
}

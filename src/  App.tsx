import React from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

type Product = {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  linkLabel: string;
  linkUrl: string;
  note?: string;
};

const freeGift: Product[] = [
  {
    title: "JO MALONE",
    description: "用個資換贈品，字母吊飾（隨機）",
    imgSrc:
      "https://res.cloudinary.com/dfzjtpp8f/image/upload/c_fill,w_400,h_400/v1763916133/MEITU_20251124_004052927_s44u5x.jpg",
    imgAlt: "Jo malone",
    linkLabel: "JO MALONE LONDON",
    linkUrl:
      "https://www.form.digitalcapture.elcompanies.com/form/TWN/jomalone/8eBuT3ooB0?utm_medium=messagingapp_business_push&utm_source=line&utm_campaign=newsletter_message&utm_content=holiday-sots-launchevent-1006_always-on&utm_term=brand",
  },
];

const catCafes: Product[] = [
  {
    title: "The Little Plan café",
    description: "這在河內，就...有路過的話可以去XD",
    imgSrc:
      "https://res.cloudinary.com/dfzjtpp8f/image/upload/c_fill,w_400,h_400/v1763909112/the_little_plan_cafe_mbvxrj.jpg",
    imgAlt: "The Little Plan café 的貓咪照片",
    linkLabel: "The Little Plan café - Kế Hoạch Nhỏ café",
    linkUrl:
      "https://maps.google.com/?cid=13425433835375390457&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNl",
  },
  {
    title: "Toast Chat",
    description: "國父紀念館附近，店裡有很多可愛的貓。通常都在睡覺。",
    imgSrc:
      "https://res.cloudinary.com/dfzjtpp8f/image/upload/c_fill,w_400,h_400/v1763909053/20251120_213310_toafoc.jpg",
    imgAlt: "Toast Chat 的貓咪照片",
    linkLabel: "Toast Chat",
    linkUrl: "https://maps.app.goo.gl/toastchatlink",
  },
];

const App: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-[#fef8f1] bg-no-repeat bg-top bg-contain px-5 py-5"
      style={{
        backgroundImage: "url('images/banner/banner.png')",
      }}
    >
      <Header />
      {/* Ads slot */}
      <div className="my-6 text-center">
        <ins
          className="adsbygoogle inline-block"
          style={{ display: "block" }}
          data-ad-client="ca-pub-5378294033772734"
          data-ad-slot="9988222577"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>

      <section className="max-w-4xl mx-auto mb-10 bg-white bg-opacity-50 rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-5">Free Gift</h2>
        {freeGift.map((item, idx) => (
          <ProductCard key={idx} product={item} />
        ))}
      </section>

      <section className="max-w-4xl mx-auto bg-white bg-opacity-50 rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-5">有貓的咖啡廳/餐廳</h2>
        {catCafes.map((item, idx) => (
          <ProductCard key={idx} product={item} />
        ))}
      </section>
    </div>
  );
};

export default App;

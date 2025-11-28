import React from "react";

const About: React.FC = () => {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 bg-white bg-opacity-70 rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold mb-4">關於 Caroline</h1>
      <p className="mb-3">
        我是卡羅 Caroline Liu，一個不務正業的軟體工程師

      </p>
      <p className="mb-3">
        這個網站主要是想做一些社會實驗，順便賺一下Adsense的錢。
        但我本身不是前端工程師，所以網站寫得很爛，歡迎直接發PR給我。
      </p>
      <p className="mt-6">
        聯絡方式：<br />
        Email：say.yes.to.heaven.c@gmail.com
      </p>
    </main>
  );
};

export default About;

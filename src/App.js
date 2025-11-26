import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Adsense from "./components/Adsense";
const freeGift = [
    {
        title: "JO MALONE",
        description: "用個資換贈品，字母吊飾（隨機）",
        action: "填單選擇領取地點",
        imgSrc: "https://res.cloudinary.com/dfzjtpp8f/image/upload/c_fill,w_400,h_400/v1763916133/MEITU_20251124_004052927_s44u5x.jpg",
        imgAlt: "Jo malone",
        linkLabel: "JO MALONE LONDON",
        linkUrl: "https://www.form.digitalcapture.elcompanies.com/form/TWN/jomalone/8eBuT3ooB0?utm_medium=messagingapp_business_push&utm_source=line&utm_campaign=newsletter_message&utm_content=holiday-sots-launchevent-1006_always-on&utm_term=brand",
    },
];
const catCafes = [
    {
        title: "The Little Plan café",
        description: "這在河內，就...有路過的話可以去XD",
        action: "Google map:",
        imgSrc: "https://res.cloudinary.com/dfzjtpp8f/image/upload/c_fill,w_400,h_400/v1763909112/the_little_plan_cafe_mbvxrj.jpg",
        imgAlt: "The Little Plan café 的貓咪照片",
        linkLabel: "The Little Plan café - Kế Hoạch Nhỏ café",
        linkUrl: "https://maps.google.com/?cid=13425433835375390457&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNl",
    },
    {
        title: "Toast Chat",
        description: "國父紀念館附近，店裡有很多可愛的貓。通常都在睡覺。",
        action: "Google map:",
        imgSrc: "https://res.cloudinary.com/dfzjtpp8f/image/upload/c_fill,w_400,h_400/v1763909053/20251120_213310_toafoc.jpg",
        imgAlt: "Toast Chat 的貓咪照片",
        linkLabel: "Toast Chat",
        linkUrl: "https://maps.app.goo.gl/toastchatlink",
    },
];
const App = () => {
    return (_jsxs("div", { className: "", children: [_jsx(Header, {}), _jsx("div", { children: _jsx(Adsense, { slot: "9988222577" }) }), _jsxs("section", { className: "max-w-4xl mx-auto mb-10 bg-white bg-opacity-50 rounded-xl p-6 shadow-md", children: [_jsx("h2", { className: "text-2xl font-semibold mb-5", children: "Free Gift" }), freeGift.map((item, idx) => (_jsx(ProductCard, { product: item }, idx)))] }), _jsxs("section", { className: "max-w-4xl mx-auto bg-white bg-opacity-50 rounded-xl p-6 shadow-md", children: [_jsx("h2", { className: "text-2xl font-semibold mb-5", children: "\u6709\u8C93\u7684\u5496\u5561\u5EF3/\u9910\u5EF3" }), catCafes.map((item, idx) => (_jsx(ProductCard, { product: item }, idx)))] })] }));
};
export default App;

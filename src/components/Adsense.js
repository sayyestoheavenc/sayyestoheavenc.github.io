import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
const Adsense = ({ slot }) => {
    useEffect(() => {
        try {
            window.adsbygoogle = window.adsbygoogle || [];
            window.adsbygoogle.push({});
        }
        catch (e) {
            // ignore
        }
    }, []);
    return (_jsx("ins", { className: "adsbygoogle", style: { display: "block" }, "data-ad-client": "ca-pub-5378294033772734", "data-ad-slot": slot || "9988222577", "data-ad-format": "auto", "data-full-width-responsive": "true" }));
};
export default Adsense;

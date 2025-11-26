import React, { useEffect } from "react";

const Adsense: React.FC<{ slot?: string }> = ({ slot }) => {
  useEffect(() => {
    try {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      (window as any).adsbygoogle.push({});
      /* eslint-enable @typescript-eslint/no-explicit-any */
    } catch {
      // ignore
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-5378294033772734"
      data-ad-slot={slot || "9988222577"}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default Adsense;
